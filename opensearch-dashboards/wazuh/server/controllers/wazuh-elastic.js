"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WazuhElasticCtrl = void 0;

var _errorResponse = require("../lib/error-response");

var _logger = require("../lib/logger");

var _getConfiguration = require("../lib/get-configuration");

var _visualizations = require("../integration-files/visualizations");

var _generateAlertsScript = require("../lib/generate-alerts/generate-alerts-script");

var _constants = require("../../common/constants");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _manageHosts = require("../lib/manage-hosts");

var _cookie = require("../lib/cookie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WazuhElasticCtrl {
  constructor() {
    _defineProperty(this, "wzSampleAlertsIndexPrefix", void 0);

    _defineProperty(this, "manageHosts", void 0);

    this.wzSampleAlertsIndexPrefix = this.getSampleAlertPrefix();
    this.manageHosts = new _manageHosts.ManageHosts();
  }
  /**
   * This returns the index according the category
   * @param {string} category
   */


  buildSampleIndexByCategory(category) {
    return `${this.wzSampleAlertsIndexPrefix}sample-${category}`;
  }
  /**
   * This returns the defined config for sample alerts prefix or the default value.
   */


  getSampleAlertPrefix() {
    const config = (0, _getConfiguration.getConfiguration)();
    return config['alerts.sample.prefix'] || _constants.WAZUH_SAMPLE_ALERT_PREFIX;
  }
  /**
   * This retrieves a template from Elasticsearch
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} template or ErrorResponse
   */


  async getTemplate(context, request, response) {
    try {
      const data = await context.core.opensearch.client.asInternalUser.cat.templates();
      const templates = data.body;

      if (!templates || typeof templates !== 'string') {
        throw new Error('An unknown error occurred when fetching templates from Elasticseach');
      }

      const lastChar = request.params.pattern[request.params.pattern.length - 1]; // Split into separate patterns

      const tmpdata = templates.match(/\[.*\]/g);
      const tmparray = [];

      for (let item of tmpdata) {
        // A template might use more than one pattern
        if (item.includes(',')) {
          item = item.substr(1).slice(0, -1);
          const subItems = item.split(',');

          for (const subitem of subItems) {
            tmparray.push(`[${subitem.trim()}]`);
          }
        } else {
          tmparray.push(item);
        }
      } // Ensure we are handling just patterns


      const array = tmparray.filter(item => item.includes('[') && item.includes(']'));
      const pattern = lastChar === '*' ? request.params.pattern.slice(0, -1) : request.params.pattern;
      const isIncluded = array.filter(item => {
        item = item.slice(1, -1);
        const lastChar = item[item.length - 1];
        item = lastChar === '*' ? item.slice(0, -1) : item;
        return item.includes(pattern) || pattern.includes(item);
      });
      (0, _logger.log)('wazuh-elastic:getTemplate', `Template is valid: ${isIncluded && Array.isArray(isIncluded) && isIncluded.length ? 'yes' : 'no'}`, 'debug');
      return isIncluded && Array.isArray(isIncluded) && isIncluded.length ? response.ok({
        body: {
          statusCode: 200,
          status: true,
          data: `Template found for ${request.params.pattern}`
        }
      }) : response.ok({
        body: {
          statusCode: 200,
          status: false,
          data: `No template found for ${request.params.pattern}`
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:getTemplate', error.message || error);
      return (0, _errorResponse.ErrorResponse)(`Could not retrieve templates from Elasticsearch due to ${error.message || error}`, 4002, 500, response);
    }
  }
  /**
   * This check index-pattern
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} status obj or ErrorResponse
   */


  async checkPattern(context, request, response) {
    try {
      const data = await context.core.savedObjects.client.find({
        type: 'index-pattern'
      });
      const existsIndexPattern = data.saved_objects.find(item => item.attributes.title === request.params.pattern);
      (0, _logger.log)('wazuh-elastic:checkPattern', `Index pattern found: ${existsIndexPattern ? existsIndexPattern.attributes.title : 'no'}`, 'debug');
      return existsIndexPattern ? response.ok({
        body: {
          statusCode: 200,
          status: true,
          data: 'Index pattern found'
        }
      }) : response.ok({
        body: {
          statusCode: 500,
          status: false,
          error: 10020,
          message: 'Index pattern not found'
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:checkPattern', error.message || error);
      return (0, _errorResponse.ErrorResponse)(`Something went wrong retrieving index-patterns from Elasticsearch due to ${error.message || error}`, 4003, 500, response);
    }
  }
  /**
   * This get the fields keys
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Array<Object>} fields or ErrorResponse
   */


  async getFieldTop(context, request, response) {
    try {
      // Top field payload
      let payload = {
        size: 1,
        query: {
          bool: {
            must: [],
            must_not: {
              term: {
                'agent.id': '000'
              }
            },
            filter: [{
              range: {
                timestamp: {}
              }
            }]
          }
        },
        aggs: {
          '2': {
            terms: {
              field: '',
              size: 1,
              order: {
                _count: 'desc'
              }
            }
          }
        }
      }; // Set up time interval, default to Last 24h

      const timeGTE = 'now-1d';
      const timeLT = 'now';
      payload.query.bool.filter[0].range['timestamp']['gte'] = timeGTE;
      payload.query.bool.filter[0].range['timestamp']['lt'] = timeLT; // Set up match for default cluster name

      payload.query.bool.must.push(request.params.mode === 'cluster' ? {
        match: {
          'cluster.name': request.params.cluster
        }
      } : {
        match: {
          'manager.name': request.params.cluster
        }
      });
      if (request.query.agentsList) payload.query.bool.filter.push({
        terms: {
          'agent.id': request.query.agentsList.split(',')
        }
      });
      payload.aggs['2'].terms.field = request.params.field;
      const data = await context.core.opensearch.client.asCurrentUser.search({
        size: 1,
        index: request.params.pattern,
        body: payload
      });
      return data.body.hits.total.value === 0 || typeof data.body.aggregations['2'].buckets[0] === 'undefined' ? response.ok({
        body: {
          statusCode: 200,
          data: ''
        }
      }) : response.ok({
        body: {
          statusCode: 200,
          data: data.body.aggregations['2'].buckets[0].key
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:getFieldTop', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 4004, 500, response);
    }
  }
  /**
   * Checks one by one if the requesting user has enough privileges to use
   * an index pattern from the list.
   * @param {Array<Object>} list List of index patterns
   * @param {Object} req
   * @returns {Array<Object>} List of allowed index
   */


  async filterAllowedIndexPatternList(context, list, req) {
    //TODO: review if necesary to delete
    let finalList = [];

    for (let item of list) {
      let results = false,
          forbidden = false;

      try {
        results = await context.core.opensearch.client.asCurrentUser.search({
          index: item.title
        });
      } catch (error) {
        forbidden = true;
      }

      if ((((results || {}).body || {}).hits || {}).total.value >= 1 || !forbidden && (((results || {}).body || {}).hits || {}).total === 0) {
        finalList.push(item);
      }
    }

    return finalList;
  }
  /**
   * Checks for minimum index pattern fields in a list of index patterns.
   * @param {Array<Object>} indexPatternList List of index patterns
   */


  validateIndexPattern(indexPatternList) {
    const minimum = ['timestamp', 'rule.groups', 'manager.name', 'agent.id'];
    let list = [];

    for (const index of indexPatternList) {
      let valid, parsed;

      try {
        parsed = JSON.parse(index.attributes.fields);
      } catch (error) {
        continue;
      }

      valid = parsed.filter(item => minimum.includes(item.name));

      if (valid.length === 4) {
        list.push({
          id: index.id,
          title: index.attributes.title
        });
      }
    }

    return list;
  }
  /**
   * Returns current security platform
   * @param {Object} req
   * @param {Object} reply
   * @returns {String}
   */


  async getCurrentPlatform(context, request, response) {
    try {
      return response.ok({
        body: {
          platform: context.wazuh.security.platform
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:getCurrentPlatform', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 4011, 500, response);
    }
  }
  /**
   * Replaces visualizations main fields to fit a certain pattern.
   * @param {Array<Object>} app_objects Object containing raw visualizations.
   * @param {String} id Index-pattern id to use in the visualizations. Eg: 'wazuh-alerts'
   */


  async buildVisualizationsRaw(app_objects, id, namespace = false) {
    try {
      const config = (0, _getConfiguration.getConfiguration)();
      let monitoringPattern = (config || {})['wazuh.monitoring.pattern'] || _constants.WAZUH_MONITORING_PATTERN;
      (0, _logger.log)('wazuh-elastic:buildVisualizationsRaw', `Building ${app_objects.length} visualizations`, 'debug');
      (0, _logger.log)('wazuh-elastic:buildVisualizationsRaw', `Index pattern ID: ${id}`, 'debug');
      const visArray = [];
      let aux_source, bulk_content;

      for (let element of app_objects) {
        aux_source = JSON.parse(JSON.stringify(element._source)); // Replace index-pattern for visualizations

        if (aux_source && aux_source.kibanaSavedObjectMeta && aux_source.kibanaSavedObjectMeta.searchSourceJSON && typeof aux_source.kibanaSavedObjectMeta.searchSourceJSON === 'string') {
          const defaultStr = aux_source.kibanaSavedObjectMeta.searchSourceJSON;
          const isMonitoring = defaultStr.includes('wazuh-monitoring');

          if (isMonitoring) {
            if (namespace && namespace !== 'default') {
              if (monitoringPattern.includes(namespace) && monitoringPattern.includes('index-pattern:')) {
                monitoringPattern = monitoringPattern.split('index-pattern:')[1];
              }
            }

            aux_source.kibanaSavedObjectMeta.searchSourceJSON = defaultStr.replace(/wazuh-monitoring/g, monitoringPattern[monitoringPattern.length - 1] === '*' || namespace && namespace !== 'default' ? monitoringPattern : monitoringPattern + '*');
          } else {
            aux_source.kibanaSavedObjectMeta.searchSourceJSON = defaultStr.replace(/wazuh-alerts/g, id);
          }
        } // Replace index-pattern for selector visualizations


        if (typeof (aux_source || {}).visState === 'string') {
          aux_source.visState = aux_source.visState.replace(/wazuh-alerts/g, id);
        } // Bulk source


        bulk_content = {};
        bulk_content[element._type] = aux_source;
        visArray.push({
          attributes: bulk_content.visualization,
          type: element._type,
          id: element._id,
          _version: bulk_content.visualization.version
        });
      }

      return visArray;
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:buildVisualizationsRaw', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Replaces cluster visualizations main fields.
   * @param {Array<Object>} app_objects Object containing raw visualizations.
   * @param {String} id Index-pattern id to use in the visualizations. Eg: 'wazuh-alerts'
   * @param {Array<String>} nodes Array of node names. Eg: ['node01', 'node02']
   * @param {String} name Cluster name. Eg: 'wazuh'
   * @param {String} master_node Master node name. Eg: 'node01'
   */


  buildClusterVisualizationsRaw(app_objects, id, nodes = [], name, master_node, pattern_name = '*') {
    try {
      const visArray = [];
      let aux_source, bulk_content;

      for (const element of app_objects) {
        // Stringify and replace index-pattern for visualizations
        aux_source = JSON.stringify(element._source);
        aux_source = aux_source.replace(/wazuh-alerts/g, id);
        aux_source = JSON.parse(aux_source); // Bulk source

        bulk_content = {};
        bulk_content[element._type] = aux_source;
        const visState = JSON.parse(bulk_content.visualization.visState);
        const title = visState.title;

        if (visState.type && visState.type === 'timelion') {
          let query = '';

          if (title === 'Wazuh App Cluster Overview') {
            for (const node of nodes) {
              query += `.es(index=${pattern_name},q="cluster.name: ${name} AND cluster.node: ${node.name}").label("${node.name}"),`;
            }

            query = query.substring(0, query.length - 1);
          } else if (title === 'Wazuh App Cluster Overview Manager') {
            query += `.es(index=${pattern_name},q="cluster.name: ${name}").label("${name} cluster")`;
          } else {
            if (title.startsWith('Wazuh App Statistics')) {
              const {
                searchSourceJSON
              } = bulk_content.visualization.kibanaSavedObjectMeta;
              bulk_content.visualization.kibanaSavedObjectMeta.searchSourceJSON = searchSourceJSON.replace('wazuh-statistics-*', pattern_name);
            }

            if (title.startsWith('Wazuh App Statistics') && name !== '-' && name !== 'all' && visState.params.expression.includes('q=')) {
              const expressionRegex = /q='\*'/gi;

              const _visState = bulk_content.visualization.visStateByNode ? JSON.parse(bulk_content.visualization.visStateByNode) : visState;

              query += _visState.params.expression.replace(/wazuh-statistics-\*/g, pattern_name).replace(expressionRegex, `q="nodeName.keyword:${name} AND apiName.keyword:${master_node}"`).replace("NODE_NAME", name);
            } else if (title.startsWith('Wazuh App Statistics')) {
              const expressionRegex = /q='\*'/gi;
              query += visState.params.expression.replace(/wazuh-statistics-\*/g, pattern_name).replace(expressionRegex, `q="apiName.keyword:${master_node}"`);
            } else {
              query = visState.params.expression;
            }
          }

          visState.params.expression = query.replace(/'/g, "\"");
          bulk_content.visualization.visState = JSON.stringify(visState);
        }

        visArray.push({
          attributes: bulk_content.visualization,
          type: element._type,
          id: element._id,
          _version: bulk_content.visualization.version
        });
      }

      return visArray;
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:buildClusterVisualizationsRaw', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * This creates a visualization of data in req
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} vis obj or ErrorResponse
   */


  async createVis(context, request, response) {
    try {
      if (!request.params.tab.includes('overview-') && !request.params.tab.includes('agents-')) {
        throw new Error('Missing parameters creating visualizations');
      }

      const tabPrefix = request.params.tab.includes('overview') ? 'overview' : 'agents';
      const tabSplit = request.params.tab.split('-');
      const tabSufix = tabSplit[1];
      const file = tabPrefix === 'overview' ? _visualizations.OverviewVisualizations[tabSufix] : _visualizations.AgentsVisualizations[tabSufix];

      if (!file) {
        return response.notFound({
          body: {
            message: `Visualizations not found for ${request.params.tab}`
          }
        });
      }

      (0, _logger.log)('wazuh-elastic:createVis', `${tabPrefix}[${tabSufix}] with index pattern ${request.params.pattern}`, 'debug');
      const raw = await this.buildVisualizationsRaw(file, request.params.pattern);
      return response.ok({
        body: {
          acknowledge: true,
          raw: raw
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:createVis', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 4007, 500, response);
    }
  }
  /**
   * This creates a visualization of cluster
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} vis obj or ErrorResponse
   */


  async createClusterVis(context, request, response) {
    try {
      if (!request.params.pattern || !request.params.tab || !request.body || !request.body.nodes || !request.body.nodes.affected_items || !request.body.nodes.name || request.params.tab && !request.params.tab.includes('cluster-')) {
        throw new Error('Missing parameters creating visualizations');
      }

      const type = request.params.tab.split('-')[1];
      const file = _visualizations.ClusterVisualizations[type];
      const nodes = request.body.nodes.affected_items;
      const name = request.body.nodes.name;
      const masterNode = request.body.nodes.master_node;
      const {
        id: patternID,
        title: patternName
      } = request.body.pattern;
      const raw = await this.buildClusterVisualizationsRaw(file, patternID, nodes, name, masterNode, patternName);
      return response.ok({
        body: {
          acknowledge: true,
          raw: raw
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:createClusterVis', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 4009, 500, response);
    }
  }
  /**
   * This checks if there is sample alerts
   * GET /elastic/samplealerts
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {alerts: [...]} or ErrorResponse
   */


  async haveSampleAlerts(context, request, response) {
    try {
      // Check if wazuh sample alerts index exists
      const results = await Promise.all(Object.keys(_constants.WAZUH_SAMPLE_ALERTS_CATEGORIES_TYPE_ALERTS).map(category => context.core.opensearch.client.asCurrentUser.indices.exists({
        index: this.buildSampleIndexByCategory(category)
      })));
      return response.ok({
        body: {
          sampleAlertsInstalled: results.some(result => result.body)
        }
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)('Sample Alerts category not valid', 1000, 500, response);
    }
  }
  /**
   * This creates sample alerts in wazuh-sample-alerts
   * GET /elastic/samplealerts/{category}
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {alerts: [...]} or ErrorResponse
   */


  async haveSampleAlertsOfCategory(context, request, response) {
    try {
      const sampleAlertsIndex = this.buildSampleIndexByCategory(request.params.category); // Check if wazuh sample alerts index exists

      const existsSampleIndex = await context.core.opensearch.client.asCurrentUser.indices.exists({
        index: sampleAlertsIndex
      });
      return response.ok({
        body: {
          index: sampleAlertsIndex,
          exists: existsSampleIndex.body
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:haveSampleAlertsOfCategory', `Error checking if there are sample alerts indices: ${error.message || error}`);
      const [statusCode, errorMessage] = this.getErrorDetails(error);
      return (0, _errorResponse.ErrorResponse)(`Error checking if there are sample alerts indices: ${errorMessage || error}`, 1000, statusCode, response);
    }
  }
  /**
   * This creates sample alerts in wazuh-sample-alerts
   * POST /elastic/samplealerts/{category}
   * {
   *   "manager": {
   *      "name": "manager_name"
   *    },
   *    cluster: {
   *      name: "mycluster",
   *      node: "mynode"
   *    }
   * }
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {index: string, alerts: [...], count: number} or ErrorResponse
   */


  async createSampleAlerts(context, request, response) {
    const sampleAlertsIndex = this.buildSampleIndexByCategory(request.params.category);

    try {
      // Check if user has administrator role in token
      const token = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-token');

      if (!token) {
        return (0, _errorResponse.ErrorResponse)('No token provided', 401, 401, response);
      }

      ;
      const decodedToken = (0, _jwtDecode.default)(token);

      if (!decodedToken) {
        return (0, _errorResponse.ErrorResponse)('No permissions in token', 401, 401, response);
      }

      ;

      if (!decodedToken.rbac_roles || !decodedToken.rbac_roles.includes(_constants.WAZUH_ROLE_ADMINISTRATOR_ID)) {
        return (0, _errorResponse.ErrorResponse)('No administrator role', 401, 401, response);
      }

      ; // Check the provided token is valid

      const apiHostID = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-api');

      if (!apiHostID) {
        return (0, _errorResponse.ErrorResponse)('No API id provided', 401, 401, response);
      }

      ;
      const responseTokenIsWorking = await context.wazuh.api.client.asCurrentUser.request('GET', `//`, {}, {
        apiHostID
      });

      if (responseTokenIsWorking.status !== 200) {
        return (0, _errorResponse.ErrorResponse)('Token is not valid', 500, 500, response);
      }

      ;
      const bulkPrefix = JSON.stringify({
        index: {
          _index: sampleAlertsIndex
        }
      });
      const alertGenerateParams = request.body && request.body.params || {};

      const sampleAlerts = _constants.WAZUH_SAMPLE_ALERTS_CATEGORIES_TYPE_ALERTS[request.params.category].map(typeAlert => (0, _generateAlertsScript.generateAlerts)({ ...typeAlert,
        ...alertGenerateParams
      }, request.body.alerts || typeAlert.alerts || _constants.WAZUH_SAMPLE_ALERTS_DEFAULT_NUMBER_ALERTS)).flat();

      const bulk = sampleAlerts.map(sampleAlert => `${bulkPrefix}\n${JSON.stringify(sampleAlert)}\n`).join(''); // Index alerts
      // Check if wazuh sample alerts index exists

      const existsSampleIndex = await context.core.opensearch.client.asCurrentUser.indices.exists({
        index: sampleAlertsIndex
      });

      if (!existsSampleIndex.body) {
        // Create wazuh sample alerts index
        const configuration = {
          settings: {
            index: {
              number_of_shards: _constants.WAZUH_SAMPLE_ALERTS_INDEX_SHARDS,
              number_of_replicas: _constants.WAZUH_SAMPLE_ALERTS_INDEX_REPLICAS
            }
          }
        };
        await context.core.opensearch.client.asCurrentUser.indices.create({
          index: sampleAlertsIndex,
          body: configuration
        });
        (0, _logger.log)('wazuh-elastic:createSampleAlerts', `Created ${sampleAlertsIndex} index`, 'debug');
      }

      await context.core.opensearch.client.asCurrentUser.bulk({
        index: sampleAlertsIndex,
        body: bulk
      });
      (0, _logger.log)('wazuh-elastic:createSampleAlerts', `Added sample alerts to ${sampleAlertsIndex} index`, 'debug');
      return response.ok({
        body: {
          index: sampleAlertsIndex,
          alertCount: sampleAlerts.length
        }
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:createSampleAlerts', `Error adding sample alerts to ${sampleAlertsIndex} index: ${error.message || error}`);
      const [statusCode, errorMessage] = this.getErrorDetails(error);
      return (0, _errorResponse.ErrorResponse)(errorMessage || error, 1000, statusCode, response);
    }
  }
  /**
   * This deletes sample alerts
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {result: "deleted", index: string} or ErrorResponse
   */


  async deleteSampleAlerts(context, request, response) {
    // Delete Wazuh sample alert index
    const sampleAlertsIndex = this.buildSampleIndexByCategory(request.params.category);

    try {
      // Check if user has administrator role in token
      const token = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-token');

      if (!token) {
        return (0, _errorResponse.ErrorResponse)('No token provided', 401, 401, response);
      }

      ;
      const decodedToken = (0, _jwtDecode.default)(token);

      if (!decodedToken) {
        return (0, _errorResponse.ErrorResponse)('No permissions in token', 401, 401, response);
      }

      ;

      if (!decodedToken.rbac_roles || !decodedToken.rbac_roles.includes(_constants.WAZUH_ROLE_ADMINISTRATOR_ID)) {
        return (0, _errorResponse.ErrorResponse)('No administrator role', 401, 401, response);
      }

      ; // Check the provided token is valid

      const apiHostID = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-api');

      if (!apiHostID) {
        return (0, _errorResponse.ErrorResponse)('No API id provided', 401, 401, response);
      }

      ;
      const responseTokenIsWorking = await context.wazuh.api.client.asCurrentUser.request('GET', `//`, {}, {
        apiHostID
      });

      if (responseTokenIsWorking.status !== 200) {
        return (0, _errorResponse.ErrorResponse)('Token is not valid', 500, 500, response);
      }

      ; // Check if Wazuh sample alerts index exists

      const existsSampleIndex = await context.core.opensearch.client.asCurrentUser.indices.exists({
        index: sampleAlertsIndex
      });

      if (existsSampleIndex.body) {
        // Delete Wazuh sample alerts index
        await context.core.opensearch.client.asCurrentUser.indices.delete({
          index: sampleAlertsIndex
        });
        (0, _logger.log)('wazuh-elastic:deleteSampleAlerts', `Deleted ${sampleAlertsIndex} index`, 'debug');
        return response.ok({
          body: {
            result: 'deleted',
            index: sampleAlertsIndex
          }
        });
      } else {
        return (0, _errorResponse.ErrorResponse)(`${sampleAlertsIndex} index doesn't exist`, 1000, 500, response);
      }
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:deleteSampleAlerts', `Error deleting sample alerts of ${sampleAlertsIndex} index: ${error.message || error}`);
      const [statusCode, errorMessage] = this.getErrorDetails(error);
      return (0, _errorResponse.ErrorResponse)(errorMessage || error, 1000, statusCode, response);
    }
  }

  async alerts(context, request, response) {
    try {
      const data = await context.core.opensearch.client.asCurrentUser.search(request.body);
      return response.ok({
        body: data.body
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:alerts', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 4010, 500, response);
    }
  } // Check if there are indices for Statistics


  async existStatisticsIndices(context, request, response) {
    try {
      const config = (0, _getConfiguration.getConfiguration)();
      const statisticsPattern = `${config['cron.prefix'] || 'wazuh'}-${config['cron.statistics.index.name'] || 'statistics'}*`; //TODO: replace by default as constants instead hardcoded ('wazuh' and 'statistics')

      const existIndex = await context.core.opensearch.client.asCurrentUser.indices.exists({
        index: statisticsPattern,
        allow_no_indices: false
      });
      return response.ok({
        body: existIndex.body
      });
    } catch (error) {
      (0, _logger.log)('wazuh-elastic:existsStatisticsIndices', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 1000, 500, response);
    }
  }

  getErrorDetails(error) {
    var _error$meta;

    const statusCode = (error === null || error === void 0 ? void 0 : (_error$meta = error.meta) === null || _error$meta === void 0 ? void 0 : _error$meta.statusCode) || 500;
    let errorMessage = error.message;

    if (statusCode === 403) {
      var _error$meta2, _error$meta2$body, _error$meta2$body$err;

      errorMessage = (error === null || error === void 0 ? void 0 : (_error$meta2 = error.meta) === null || _error$meta2 === void 0 ? void 0 : (_error$meta2$body = _error$meta2.body) === null || _error$meta2$body === void 0 ? void 0 : (_error$meta2$body$err = _error$meta2$body.error) === null || _error$meta2$body$err === void 0 ? void 0 : _error$meta2$body$err.reason) || 'Permission denied';
    }

    return [statusCode, errorMessage];
  }

}

exports.WazuhElasticCtrl = WazuhElasticCtrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhenVoLWVsYXN0aWMudHMiXSwibmFtZXMiOlsiV2F6dWhFbGFzdGljQ3RybCIsImNvbnN0cnVjdG9yIiwid3pTYW1wbGVBbGVydHNJbmRleFByZWZpeCIsImdldFNhbXBsZUFsZXJ0UHJlZml4IiwibWFuYWdlSG9zdHMiLCJNYW5hZ2VIb3N0cyIsImJ1aWxkU2FtcGxlSW5kZXhCeUNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjb25maWciLCJXQVpVSF9TQU1QTEVfQUxFUlRfUFJFRklYIiwiZ2V0VGVtcGxhdGUiLCJjb250ZXh0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImNvcmUiLCJvcGVuc2VhcmNoIiwiY2xpZW50IiwiYXNJbnRlcm5hbFVzZXIiLCJjYXQiLCJ0ZW1wbGF0ZXMiLCJib2R5IiwiRXJyb3IiLCJsYXN0Q2hhciIsInBhcmFtcyIsInBhdHRlcm4iLCJsZW5ndGgiLCJ0bXBkYXRhIiwibWF0Y2giLCJ0bXBhcnJheSIsIml0ZW0iLCJpbmNsdWRlcyIsInN1YnN0ciIsInNsaWNlIiwic3ViSXRlbXMiLCJzcGxpdCIsInN1Yml0ZW0iLCJwdXNoIiwidHJpbSIsImFycmF5IiwiZmlsdGVyIiwiaXNJbmNsdWRlZCIsIkFycmF5IiwiaXNBcnJheSIsIm9rIiwic3RhdHVzQ29kZSIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSIsImNoZWNrUGF0dGVybiIsInNhdmVkT2JqZWN0cyIsImZpbmQiLCJ0eXBlIiwiZXhpc3RzSW5kZXhQYXR0ZXJuIiwic2F2ZWRfb2JqZWN0cyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsImdldEZpZWxkVG9wIiwicGF5bG9hZCIsInNpemUiLCJxdWVyeSIsImJvb2wiLCJtdXN0IiwibXVzdF9ub3QiLCJ0ZXJtIiwicmFuZ2UiLCJ0aW1lc3RhbXAiLCJhZ2dzIiwidGVybXMiLCJmaWVsZCIsIm9yZGVyIiwiX2NvdW50IiwidGltZUdURSIsInRpbWVMVCIsIm1vZGUiLCJjbHVzdGVyIiwiYWdlbnRzTGlzdCIsImFzQ3VycmVudFVzZXIiLCJzZWFyY2giLCJpbmRleCIsImhpdHMiLCJ0b3RhbCIsInZhbHVlIiwiYWdncmVnYXRpb25zIiwiYnVja2V0cyIsImtleSIsImZpbHRlckFsbG93ZWRJbmRleFBhdHRlcm5MaXN0IiwibGlzdCIsInJlcSIsImZpbmFsTGlzdCIsInJlc3VsdHMiLCJmb3JiaWRkZW4iLCJ2YWxpZGF0ZUluZGV4UGF0dGVybiIsImluZGV4UGF0dGVybkxpc3QiLCJtaW5pbXVtIiwidmFsaWQiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJmaWVsZHMiLCJuYW1lIiwiaWQiLCJnZXRDdXJyZW50UGxhdGZvcm0iLCJwbGF0Zm9ybSIsIndhenVoIiwic2VjdXJpdHkiLCJidWlsZFZpc3VhbGl6YXRpb25zUmF3IiwiYXBwX29iamVjdHMiLCJuYW1lc3BhY2UiLCJtb25pdG9yaW5nUGF0dGVybiIsIldBWlVIX01PTklUT1JJTkdfUEFUVEVSTiIsInZpc0FycmF5IiwiYXV4X3NvdXJjZSIsImJ1bGtfY29udGVudCIsImVsZW1lbnQiLCJzdHJpbmdpZnkiLCJfc291cmNlIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImRlZmF1bHRTdHIiLCJpc01vbml0b3JpbmciLCJyZXBsYWNlIiwidmlzU3RhdGUiLCJfdHlwZSIsInZpc3VhbGl6YXRpb24iLCJfaWQiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJQcm9taXNlIiwicmVqZWN0IiwiYnVpbGRDbHVzdGVyVmlzdWFsaXphdGlvbnNSYXciLCJub2RlcyIsIm1hc3Rlcl9ub2RlIiwicGF0dGVybl9uYW1lIiwibm9kZSIsInN1YnN0cmluZyIsInN0YXJ0c1dpdGgiLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblJlZ2V4IiwiX3Zpc1N0YXRlIiwidmlzU3RhdGVCeU5vZGUiLCJjcmVhdGVWaXMiLCJ0YWIiLCJ0YWJQcmVmaXgiLCJ0YWJTcGxpdCIsInRhYlN1Zml4IiwiZmlsZSIsIk92ZXJ2aWV3VmlzdWFsaXphdGlvbnMiLCJBZ2VudHNWaXN1YWxpemF0aW9ucyIsIm5vdEZvdW5kIiwicmF3IiwiYWNrbm93bGVkZ2UiLCJjcmVhdGVDbHVzdGVyVmlzIiwiYWZmZWN0ZWRfaXRlbXMiLCJDbHVzdGVyVmlzdWFsaXphdGlvbnMiLCJtYXN0ZXJOb2RlIiwicGF0dGVybklEIiwicGF0dGVybk5hbWUiLCJoYXZlU2FtcGxlQWxlcnRzIiwiYWxsIiwiT2JqZWN0Iiwia2V5cyIsIldBWlVIX1NBTVBMRV9BTEVSVFNfQ0FURUdPUklFU19UWVBFX0FMRVJUUyIsIm1hcCIsImluZGljZXMiLCJleGlzdHMiLCJzYW1wbGVBbGVydHNJbnN0YWxsZWQiLCJzb21lIiwicmVzdWx0IiwiaGF2ZVNhbXBsZUFsZXJ0c09mQ2F0ZWdvcnkiLCJzYW1wbGVBbGVydHNJbmRleCIsImV4aXN0c1NhbXBsZUluZGV4IiwiZXJyb3JNZXNzYWdlIiwiZ2V0RXJyb3JEZXRhaWxzIiwiY3JlYXRlU2FtcGxlQWxlcnRzIiwidG9rZW4iLCJoZWFkZXJzIiwiY29va2llIiwiZGVjb2RlZFRva2VuIiwicmJhY19yb2xlcyIsIldBWlVIX1JPTEVfQURNSU5JU1RSQVRPUl9JRCIsImFwaUhvc3RJRCIsInJlc3BvbnNlVG9rZW5Jc1dvcmtpbmciLCJhcGkiLCJidWxrUHJlZml4IiwiX2luZGV4IiwiYWxlcnRHZW5lcmF0ZVBhcmFtcyIsInNhbXBsZUFsZXJ0cyIsInR5cGVBbGVydCIsImFsZXJ0cyIsIldBWlVIX1NBTVBMRV9BTEVSVFNfREVGQVVMVF9OVU1CRVJfQUxFUlRTIiwiZmxhdCIsImJ1bGsiLCJzYW1wbGVBbGVydCIsImpvaW4iLCJjb25maWd1cmF0aW9uIiwic2V0dGluZ3MiLCJudW1iZXJfb2Zfc2hhcmRzIiwiV0FaVUhfU0FNUExFX0FMRVJUU19JTkRFWF9TSEFSRFMiLCJudW1iZXJfb2ZfcmVwbGljYXMiLCJXQVpVSF9TQU1QTEVfQUxFUlRTX0lOREVYX1JFUExJQ0FTIiwiY3JlYXRlIiwiYWxlcnRDb3VudCIsImRlbGV0ZVNhbXBsZUFsZXJ0cyIsImRlbGV0ZSIsImV4aXN0U3RhdGlzdGljc0luZGljZXMiLCJzdGF0aXN0aWNzUGF0dGVybiIsImV4aXN0SW5kZXgiLCJhbGxvd19ub19pbmRpY2VzIiwibWV0YSIsInJlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFHTyxNQUFNQSxnQkFBTixDQUF1QjtBQUc1QkMsRUFBQUEsV0FBVyxHQUFHO0FBQUE7O0FBQUE7O0FBQ1osU0FBS0MseUJBQUwsR0FBaUMsS0FBS0Msb0JBQUwsRUFBakM7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQUlDLHdCQUFKLEVBQW5CO0FBQ0Q7QUFFRDs7Ozs7O0FBSUFDLEVBQUFBLDBCQUEwQixDQUFDQyxRQUFELEVBQTJCO0FBQ25ELFdBQVEsR0FBRSxLQUFLTCx5QkFBMEIsVUFBU0ssUUFBUyxFQUEzRDtBQUNEO0FBRUQ7Ozs7O0FBR0FKLEVBQUFBLG9CQUFvQixHQUFXO0FBQzdCLFVBQU1LLE1BQU0sR0FBRyx5Q0FBZjtBQUNBLFdBQU9BLE1BQU0sQ0FBQyxzQkFBRCxDQUFOLElBQWtDQyxvQ0FBekM7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxRQUFNQyxXQUFOLENBQWtCQyxPQUFsQixFQUFrREMsT0FBbEQsRUFBNkdDLFFBQTdHLEVBQTRKO0FBQzFKLFFBQUk7QUFDRixZQUFNQyxJQUFJLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxJQUFSLENBQWFDLFVBQWIsQ0FBd0JDLE1BQXhCLENBQStCQyxjQUEvQixDQUE4Q0MsR0FBOUMsQ0FBa0RDLFNBQWxELEVBQW5CO0FBRUEsWUFBTUEsU0FBUyxHQUFHTixJQUFJLENBQUNPLElBQXZCOztBQUNBLFVBQUksQ0FBQ0QsU0FBRCxJQUFjLE9BQU9BLFNBQVAsS0FBcUIsUUFBdkMsRUFBaUQ7QUFDL0MsY0FBTSxJQUFJRSxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEOztBQUVELFlBQU1DLFFBQVEsR0FBR1gsT0FBTyxDQUFDWSxNQUFSLENBQWVD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Q0Q7QUFDRjs7QUFFRGdLLEVBQUFBLGVBQWUsQ0FBQzlILEtBQUQsRUFBTztBQUFBOztBQUNwQixVQUFNRixVQUFVLEdBQUcsQ0FBQUUsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCwyQkFBQUEsS0FBSyxDQUFFa0ssSUFBUCw0REFBYXBLLFVBQWIsS0FBMkIsR0FBOUM7QUFDQSxRQUFJK0gsWUFBWSxHQUFHN0gsS0FBSyxDQUFDQyxPQUF6Qjs7QUFFQSxRQUFHSCxVQUFVLEtBQUssR0FBbEIsRUFBc0I7QUFBQTs7QUFDcEIrSCxNQUFBQSxZQUFZLEdBQUcsQ0FBQTdILEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsNEJBQUFBLEtBQUssQ0FBRWtLLElBQVAsbUZBQWE1TCxJQUFiLGlHQUFtQjBCLEtBQW5CLGdGQUEwQm1LLE1BQTFCLEtBQW9DLG1CQUFuRDtBQUNEOztBQUVELFdBQU8sQ0FBQ3JLLFVBQUQsRUFBYStILFlBQWIsQ0FBUDtBQUNEOztBQS96QjJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIENsYXNzIGZvciBXYXp1aC1FbGFzdGljIGZ1bmN0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuLi9saWIvZXJyb3ItcmVzcG9uc2UnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi4vbGliL2xvZ2dlcic7XG5pbXBvcnQgeyBnZXRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbGliL2dldC1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7XG4gIEFnZW50c1Zpc3VhbGl6YXRpb25zLFxuICBPdmVydmlld1Zpc3VhbGl6YXRpb25zLFxuICBDbHVzdGVyVmlzdWFsaXphdGlvbnNcbn0gZnJvbSAnLi4vaW50ZWdyYXRpb24tZmlsZXMvdmlzdWFsaXphdGlvbnMnO1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUFsZXJ0cyB9IGZyb20gJy4uL2xpYi9nZW5lcmF0ZS1hbGVydHMvZ2VuZXJhdGUtYWxlcnRzLXNjcmlwdCc7XG5pbXBvcnQgeyBXQVpVSF9NT05JVE9SSU5HX1BBVFRFUk4sIFdBWlVIX1NBTVBMRV9BTEVSVF9QUkVGSVgsIFdBWlVIX1JPTEVfQURNSU5JU1RSQVRPUl9JRCwgV0FaVUhfU0FNUExFX0FMRVJUU19JTkRFWF9TSEFSRFMsIFdBWlVIX1NBTVBMRV9BTEVSVFNfSU5ERVhfUkVQTElDQVMgfSBmcm9tICcuLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyBNYW5hZ2VIb3N0cyB9IGZyb20gJy4uL2xpYi9tYW5hZ2UtaG9zdHMnO1xuaW1wb3J0IHsgT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5LCBTYXZlZE9iamVjdCwgU2F2ZWRPYmplY3RzRmluZFJlc3BvbnNlIH0gZnJvbSAnc3JjL2NvcmUvc2VydmVyJztcbmltcG9ydCB7IGdldENvb2tpZVZhbHVlQnlOYW1lIH0gZnJvbSAnLi4vbGliL2Nvb2tpZSc7XG5pbXBvcnQgeyBXQVpVSF9TQU1QTEVfQUxFUlRTX0NBVEVHT1JJRVNfVFlQRV9BTEVSVFMsIFdBWlVIX1NBTVBMRV9BTEVSVFNfREVGQVVMVF9OVU1CRVJfQUxFUlRTIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cydcblxuZXhwb3J0IGNsYXNzIFdhenVoRWxhc3RpY0N0cmwge1xuICB3elNhbXBsZUFsZXJ0c0luZGV4UHJlZml4OiBzdHJpbmdcbiAgbWFuYWdlSG9zdHM6IE1hbmFnZUhvc3RzXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud3pTYW1wbGVBbGVydHNJbmRleFByZWZpeCA9IHRoaXMuZ2V0U2FtcGxlQWxlcnRQcmVmaXgoKTtcbiAgICB0aGlzLm1hbmFnZUhvc3RzID0gbmV3IE1hbmFnZUhvc3RzKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIHRoZSBpbmRleCBhY2NvcmRpbmcgdGhlIGNhdGVnb3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeVxuICAgKi9cbiAgYnVpbGRTYW1wbGVJbmRleEJ5Q2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMud3pTYW1wbGVBbGVydHNJbmRleFByZWZpeH1zYW1wbGUtJHtjYXRlZ29yeX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyB0aGUgZGVmaW5lZCBjb25maWcgZm9yIHNhbXBsZSBhbGVydHMgcHJlZml4IG9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgZ2V0U2FtcGxlQWxlcnRQcmVmaXgoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWd1cmF0aW9uKCk7XG4gICAgcmV0dXJuIGNvbmZpZ1snYWxlcnRzLnNhbXBsZS5wcmVmaXgnXSB8fCBXQVpVSF9TQU1QTEVfQUxFUlRfUFJFRklYO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0cmlldmVzIGEgdGVtcGxhdGUgZnJvbSBFbGFzdGljc2VhcmNoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0ZW1wbGF0ZSBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBnZXRUZW1wbGF0ZShjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdDx7IHBhdHRlcm46IHN0cmluZyB9PiwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNJbnRlcm5hbFVzZXIuY2F0LnRlbXBsYXRlcygpO1xuXG4gICAgICBjb25zdCB0ZW1wbGF0ZXMgPSBkYXRhLmJvZHk7XG4gICAgICBpZiAoIXRlbXBsYXRlcyB8fCB0eXBlb2YgdGVtcGxhdGVzICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgd2hlbiBmZXRjaGluZyB0ZW1wbGF0ZXMgZnJvbSBFbGFzdGljc2VhY2gnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxhc3RDaGFyID0gcmVxdWVzdC5wYXJhbXMucGF0dGVybltyZXF1ZXN0LnBhcmFtcy5wYXR0ZXJuLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvLyBTcGxpdCBpbnRvIHNlcGFyYXRlIHBhdHRlcm5zXG4gICAgICBjb25zdCB0bXBkYXRhID0gdGVtcGxhdGVzLm1hdGNoKC9cXFsuKlxcXS9nKTtcbiAgICAgIGNvbnN0IHRtcGFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRtcGRhdGEpIHtcbiAgICAgICAgLy8gQSB0ZW1wbGF0ZSBtaWdodCB1c2UgbW9yZSB0aGFuIG9uZSBwYXR0ZXJuXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCcsJykpIHtcbiAgICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSkuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgIGNvbnN0IHN1Ykl0ZW1zID0gaXRlbS5zcGxpdCgnLCcpO1xuICAgICAgICAgIGZvciAoY29uc3Qgc3ViaXRlbSBvZiBzdWJJdGVtcykge1xuICAgICAgICAgICAgdG1wYXJyYXkucHVzaChgWyR7c3ViaXRlbS50cmltKCl9XWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0bXBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSB3ZSBhcmUgaGFuZGxpbmcganVzdCBwYXR0ZXJuc1xuICAgICAgY29uc3QgYXJyYXkgPSB0bXBhcnJheS5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT4gaXRlbS5pbmNsdWRlcygnWycpICYmIGl0ZW0uaW5jbHVkZXMoJ10nKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgcGF0dGVybiA9XG4gICAgICAgIGxhc3RDaGFyID09PSAnKicgPyByZXF1ZXN0LnBhcmFtcy5wYXR0ZXJuLnNsaWNlKDAsIC0xKSA6IHJlcXVlc3QucGFyYW1zLnBhdHRlcm47XG4gICAgICBjb25zdCBpc0luY2x1ZGVkID0gYXJyYXkuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtID0gaXRlbS5zbGljZSgxLCAtMSk7XG4gICAgICAgIGNvbnN0IGxhc3RDaGFyID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdO1xuICAgICAgICBpdGVtID0gbGFzdENoYXIgPT09ICcqJyA/IGl0ZW0uc2xpY2UoMCwgLTEpIDogaXRlbTtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaW5jbHVkZXMocGF0dGVybikgfHwgcGF0dGVybi5pbmNsdWRlcyhpdGVtKTtcbiAgICAgIH0pO1xuICAgICAgbG9nKFxuICAgICAgICAnd2F6dWgtZWxhc3RpYzpnZXRUZW1wbGF0ZScsXG4gICAgICAgIGBUZW1wbGF0ZSBpcyB2YWxpZDogJHtpc0luY2x1ZGVkICYmIEFycmF5LmlzQXJyYXkoaXNJbmNsdWRlZCkgJiYgaXNJbmNsdWRlZC5sZW5ndGhcbiAgICAgICAgICA/ICd5ZXMnXG4gICAgICAgICAgOiAnbm8nXG4gICAgICAgIH1gLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgICAgcmV0dXJuIGlzSW5jbHVkZWQgJiYgQXJyYXkuaXNBcnJheShpc0luY2x1ZGVkKSAmJiBpc0luY2x1ZGVkLmxlbmd0aFxuICAgICAgICA/IHJlc3BvbnNlLm9rKHtcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiBgVGVtcGxhdGUgZm91bmQgZm9yICR7cmVxdWVzdC5wYXJhbXMucGF0dGVybn1gXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICA6IHJlc3BvbnNlLm9rKHtcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogYE5vIHRlbXBsYXRlIGZvdW5kIGZvciAke3JlcXVlc3QucGFyYW1zLnBhdHRlcm59YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzpnZXRUZW1wbGF0ZScsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoXG4gICAgICAgIGBDb3VsZCBub3QgcmV0cmlldmUgdGVtcGxhdGVzIGZyb20gRWxhc3RpY3NlYXJjaCBkdWUgdG8gJHtlcnJvci5tZXNzYWdlIHx8XG4gICAgICAgIGVycm9yfWAsXG4gICAgICAgIDQwMDIsXG4gICAgICAgIDUwMCxcbiAgICAgICAgcmVzcG9uc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2hlY2sgaW5kZXgtcGF0dGVyblxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybnMge09iamVjdH0gc3RhdHVzIG9iaiBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBjaGVja1BhdHRlcm4oY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LCByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3Q8eyBwYXR0ZXJuOiBzdHJpbmcgfT4sIHJlc3BvbnNlOiBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udGV4dC5jb3JlLnNhdmVkT2JqZWN0cy5jbGllbnQuZmluZDxTYXZlZE9iamVjdHNGaW5kUmVzcG9uc2U8U2F2ZWRPYmplY3Q+Pih7IHR5cGU6ICdpbmRleC1wYXR0ZXJuJyB9KTtcblxuICAgICAgY29uc3QgZXhpc3RzSW5kZXhQYXR0ZXJuID0gZGF0YS5zYXZlZF9vYmplY3RzLmZpbmQoXG4gICAgICAgIGl0ZW0gPT4gaXRlbS5hdHRyaWJ1dGVzLnRpdGxlID09PSByZXF1ZXN0LnBhcmFtcy5wYXR0ZXJuXG4gICAgICApO1xuICAgICAgbG9nKFxuICAgICAgICAnd2F6dWgtZWxhc3RpYzpjaGVja1BhdHRlcm4nLFxuICAgICAgICBgSW5kZXggcGF0dGVybiBmb3VuZDogJHtleGlzdHNJbmRleFBhdHRlcm4gPyBleGlzdHNJbmRleFBhdHRlcm4uYXR0cmlidXRlcy50aXRsZSA6ICdubyd9YCxcbiAgICAgICAgJ2RlYnVnJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBleGlzdHNJbmRleFBhdHRlcm5cbiAgICAgICAgPyByZXNwb25zZS5vayh7XG4gICAgICAgICAgYm9keTogeyBzdGF0dXNDb2RlOiAyMDAsIHN0YXR1czogdHJ1ZSwgZGF0YTogJ0luZGV4IHBhdHRlcm4gZm91bmQnIH1cbiAgICAgICAgfSlcbiAgICAgICAgOiByZXNwb25zZS5vayh7XG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogNTAwLFxuICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiAxMDAyMCxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdJbmRleCBwYXR0ZXJuIG5vdCBmb3VuZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3dhenVoLWVsYXN0aWM6Y2hlY2tQYXR0ZXJuJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShcbiAgICAgICAgYFNvbWV0aGluZyB3ZW50IHdyb25nIHJldHJpZXZpbmcgaW5kZXgtcGF0dGVybnMgZnJvbSBFbGFzdGljc2VhcmNoIGR1ZSB0byAke2Vycm9yLm1lc3NhZ2UgfHxcbiAgICAgICAgZXJyb3J9YCxcbiAgICAgICAgNDAwMyxcbiAgICAgICAgNTAwLFxuICAgICAgICByZXNwb25zZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBnZXQgdGhlIGZpZWxkcyBrZXlzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzIG9yIEVycm9yUmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIGdldEZpZWxkVG9wKGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0PHsgbW9kZTogc3RyaW5nLCBjbHVzdGVyOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZyB9LCB7IGFnZW50c0xpc3Q6IHN0cmluZyB9PiwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRvcCBmaWVsZCBwYXlsb2FkXG4gICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBib29sOiB7XG4gICAgICAgICAgICBtdXN0OiBbXSxcbiAgICAgICAgICAgIG11c3Rfbm90OiB7XG4gICAgICAgICAgICAgIHRlcm06IHtcbiAgICAgICAgICAgICAgICAnYWdlbnQuaWQnOiAnMDAwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5nZTogeyB0aW1lc3RhbXA6IHt9IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWdnczoge1xuICAgICAgICAgICcyJzoge1xuICAgICAgICAgICAgdGVybXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICcnLFxuICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICBvcmRlcjogeyBfY291bnQ6ICdkZXNjJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBTZXQgdXAgdGltZSBpbnRlcnZhbCwgZGVmYXVsdCB0byBMYXN0IDI0aFxuICAgICAgY29uc3QgdGltZUdURSA9ICdub3ctMWQnO1xuICAgICAgY29uc3QgdGltZUxUID0gJ25vdyc7XG4gICAgICBwYXlsb2FkLnF1ZXJ5LmJvb2wuZmlsdGVyWzBdLnJhbmdlWyd0aW1lc3RhbXAnXVsnZ3RlJ10gPSB0aW1lR1RFO1xuICAgICAgcGF5bG9hZC5xdWVyeS5ib29sLmZpbHRlclswXS5yYW5nZVsndGltZXN0YW1wJ11bJ2x0J10gPSB0aW1lTFQ7XG5cbiAgICAgIC8vIFNldCB1cCBtYXRjaCBmb3IgZGVmYXVsdCBjbHVzdGVyIG5hbWVcbiAgICAgIHBheWxvYWQucXVlcnkuYm9vbC5tdXN0LnB1c2goXG4gICAgICAgIHJlcXVlc3QucGFyYW1zLm1vZGUgPT09ICdjbHVzdGVyJ1xuICAgICAgICAgID8geyBtYXRjaDogeyAnY2x1c3Rlci5uYW1lJzogcmVxdWVzdC5wYXJhbXMuY2x1c3RlciB9IH1cbiAgICAgICAgICA6IHsgbWF0Y2g6IHsgJ21hbmFnZXIubmFtZSc6IHJlcXVlc3QucGFyYW1zLmNsdXN0ZXIgfSB9XG4gICAgICApO1xuXG4gICAgICBpZihyZXF1ZXN0LnF1ZXJ5LmFnZW50c0xpc3QpXG4gICAgICAgIHBheWxvYWQucXVlcnkuYm9vbC5maWx0ZXIucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXJtczoge1xuICAgICAgICAgICAgICAnYWdlbnQuaWQnOiByZXF1ZXN0LnF1ZXJ5LmFnZW50c0xpc3Quc3BsaXQoJywnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIHBheWxvYWQuYWdnc1snMiddLnRlcm1zLmZpZWxkID0gcmVxdWVzdC5wYXJhbXMuZmllbGQ7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNDdXJyZW50VXNlci5zZWFyY2goe1xuICAgICAgICBzaXplOiAxLFxuICAgICAgICBpbmRleDogcmVxdWVzdC5wYXJhbXMucGF0dGVybixcbiAgICAgICAgYm9keTogcGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkYXRhLmJvZHkuaGl0cy50b3RhbC52YWx1ZSA9PT0gMCB8fFxuICAgICAgICB0eXBlb2YgZGF0YS5ib2R5LmFnZ3JlZ2F0aW9uc1snMiddLmJ1Y2tldHNbMF0gPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcmVzcG9uc2Uub2soe1xuICAgICAgICAgIGJvZHk6IHsgc3RhdHVzQ29kZTogMjAwLCBkYXRhOiAnJyB9XG4gICAgICAgIH0pXG4gICAgICAgIDogcmVzcG9uc2Uub2soe1xuICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuYm9keS5hZ2dyZWdhdGlvbnNbJzInXS5idWNrZXRzWzBdLmtleVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzpnZXRGaWVsZFRvcCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgNDAwNCwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBvbmUgYnkgb25lIGlmIHRoZSByZXF1ZXN0aW5nIHVzZXIgaGFzIGVub3VnaCBwcml2aWxlZ2VzIHRvIHVzZVxuICAgKiBhbiBpbmRleCBwYXR0ZXJuIGZyb20gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGlzdCBMaXN0IG9mIGluZGV4IHBhdHRlcm5zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXFcbiAgICogQHJldHVybnMge0FycmF5PE9iamVjdD59IExpc3Qgb2YgYWxsb3dlZCBpbmRleFxuICAgKi9cbiAgYXN5bmMgZmlsdGVyQWxsb3dlZEluZGV4UGF0dGVybkxpc3QoY29udGV4dCwgbGlzdCwgcmVxKSB7XG4gICAgLy9UT0RPOiByZXZpZXcgaWYgbmVjZXNhcnkgdG8gZGVsZXRlXG4gICAgbGV0IGZpbmFsTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgbGV0IHJlc3VsdHMgPSBmYWxzZSxcbiAgICAgICAgZm9yYmlkZGVuID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHRzID0gYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIuc2VhcmNoKHtcbiAgICAgICAgICBpbmRleDogaXRlbS50aXRsZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGZvcmJpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICgoKHJlc3VsdHMgfHwge30pLmJvZHkgfHwge30pLmhpdHMgfHwge30pLnRvdGFsLnZhbHVlID49IDEgfHxcbiAgICAgICAgKCFmb3JiaWRkZW4gJiYgKCgocmVzdWx0cyB8fCB7fSkuYm9keSB8fCB7fSkuaGl0cyB8fCB7fSkudG90YWwgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgZmluYWxMaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5hbExpc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGZvciBtaW5pbXVtIGluZGV4IHBhdHRlcm4gZmllbGRzIGluIGEgbGlzdCBvZiBpbmRleCBwYXR0ZXJucy5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBpbmRleFBhdHRlcm5MaXN0IExpc3Qgb2YgaW5kZXggcGF0dGVybnNcbiAgICovXG4gIHZhbGlkYXRlSW5kZXhQYXR0ZXJuKGluZGV4UGF0dGVybkxpc3QpIHtcbiAgICBjb25zdCBtaW5pbXVtID0gWyd0aW1lc3RhbXAnLCAncnVsZS5ncm91cHMnLCAnbWFuYWdlci5uYW1lJywgJ2FnZW50LmlkJ107XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4UGF0dGVybkxpc3QpIHtcbiAgICAgIGxldCB2YWxpZCwgcGFyc2VkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0gSlNPTi5wYXJzZShpbmRleC5hdHRyaWJ1dGVzLmZpZWxkcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFsaWQgPSBwYXJzZWQuZmlsdGVyKGl0ZW0gPT4gbWluaW11bS5pbmNsdWRlcyhpdGVtLm5hbWUpKTtcbiAgICAgIGlmICh2YWxpZC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICBpZDogaW5kZXguaWQsXG4gICAgICAgICAgdGl0bGU6IGluZGV4LmF0dHJpYnV0ZXMudGl0bGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBzZWN1cml0eSBwbGF0Zm9ybVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXBseVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgYXN5bmMgZ2V0Q3VycmVudFBsYXRmb3JtKGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0PHsgdXNlcjogc3RyaW5nIH0+LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHBsYXRmb3JtOiBjb250ZXh0LndhenVoLnNlY3VyaXR5LnBsYXRmb3JtXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3dhenVoLWVsYXN0aWM6Z2V0Q3VycmVudFBsYXRmb3JtJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IGVycm9yLCA0MDExLCA1MDAsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdmlzdWFsaXphdGlvbnMgbWFpbiBmaWVsZHMgdG8gZml0IGEgY2VydGFpbiBwYXR0ZXJuLlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGFwcF9vYmplY3RzIE9iamVjdCBjb250YWluaW5nIHJhdyB2aXN1YWxpemF0aW9ucy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIEluZGV4LXBhdHRlcm4gaWQgdG8gdXNlIGluIHRoZSB2aXN1YWxpemF0aW9ucy4gRWc6ICd3YXp1aC1hbGVydHMnXG4gICAqL1xuICBhc3luYyBidWlsZFZpc3VhbGl6YXRpb25zUmF3KGFwcF9vYmplY3RzLCBpZCwgbmFtZXNwYWNlID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlndXJhdGlvbigpO1xuICAgICAgbGV0IG1vbml0b3JpbmdQYXR0ZXJuID1cbiAgICAgICAgKGNvbmZpZyB8fCB7fSlbJ3dhenVoLm1vbml0b3JpbmcucGF0dGVybiddIHx8IFdBWlVIX01PTklUT1JJTkdfUEFUVEVSTjtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dhenVoLWVsYXN0aWM6YnVpbGRWaXN1YWxpemF0aW9uc1JhdycsXG4gICAgICAgIGBCdWlsZGluZyAke2FwcF9vYmplY3RzLmxlbmd0aH0gdmlzdWFsaXphdGlvbnNgLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgICAgbG9nKFxuICAgICAgICAnd2F6dWgtZWxhc3RpYzpidWlsZFZpc3VhbGl6YXRpb25zUmF3JyxcbiAgICAgICAgYEluZGV4IHBhdHRlcm4gSUQ6ICR7aWR9YCxcbiAgICAgICAgJ2RlYnVnJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHZpc0FycmF5ID0gW107XG4gICAgICBsZXQgYXV4X3NvdXJjZSwgYnVsa19jb250ZW50O1xuICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBhcHBfb2JqZWN0cykge1xuICAgICAgICBhdXhfc291cmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50Ll9zb3VyY2UpKTtcblxuICAgICAgICAvLyBSZXBsYWNlIGluZGV4LXBhdHRlcm4gZm9yIHZpc3VhbGl6YXRpb25zXG4gICAgICAgIGlmIChcbiAgICAgICAgICBhdXhfc291cmNlICYmXG4gICAgICAgICAgYXV4X3NvdXJjZS5raWJhbmFTYXZlZE9iamVjdE1ldGEgJiZcbiAgICAgICAgICBhdXhfc291cmNlLmtpYmFuYVNhdmVkT2JqZWN0TWV0YS5zZWFyY2hTb3VyY2VKU09OICYmXG4gICAgICAgICAgdHlwZW9mIGF1eF9zb3VyY2Uua2liYW5hU2F2ZWRPYmplY3RNZXRhLnNlYXJjaFNvdXJjZUpTT04gPT09ICdzdHJpbmcnXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRTdHIgPSBhdXhfc291cmNlLmtpYmFuYVNhdmVkT2JqZWN0TWV0YS5zZWFyY2hTb3VyY2VKU09OO1xuXG4gICAgICAgICAgY29uc3QgaXNNb25pdG9yaW5nID0gZGVmYXVsdFN0ci5pbmNsdWRlcygnd2F6dWgtbW9uaXRvcmluZycpO1xuICAgICAgICAgIGlmIChpc01vbml0b3JpbmcpIHtcbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2UgJiYgbmFtZXNwYWNlICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG1vbml0b3JpbmdQYXR0ZXJuLmluY2x1ZGVzKG5hbWVzcGFjZSkgJiZcbiAgICAgICAgICAgICAgICBtb25pdG9yaW5nUGF0dGVybi5pbmNsdWRlcygnaW5kZXgtcGF0dGVybjonKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtb25pdG9yaW5nUGF0dGVybiA9IG1vbml0b3JpbmdQYXR0ZXJuLnNwbGl0KFxuICAgICAgICAgICAgICAgICAgJ2luZGV4LXBhdHRlcm46J1xuICAgICAgICAgICAgICAgIClbMV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1eF9zb3VyY2Uua2liYW5hU2F2ZWRPYmplY3RNZXRhLnNlYXJjaFNvdXJjZUpTT04gPSBkZWZhdWx0U3RyLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC93YXp1aC1tb25pdG9yaW5nL2csXG4gICAgICAgICAgICAgIG1vbml0b3JpbmdQYXR0ZXJuW21vbml0b3JpbmdQYXR0ZXJuLmxlbmd0aCAtIDFdID09PSAnKicgfHxcbiAgICAgICAgICAgICAgICAobmFtZXNwYWNlICYmIG5hbWVzcGFjZSAhPT0gJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgID8gbW9uaXRvcmluZ1BhdHRlcm5cbiAgICAgICAgICAgICAgICA6IG1vbml0b3JpbmdQYXR0ZXJuICsgJyonXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdXhfc291cmNlLmtpYmFuYVNhdmVkT2JqZWN0TWV0YS5zZWFyY2hTb3VyY2VKU09OID0gZGVmYXVsdFN0ci5yZXBsYWNlKFxuICAgICAgICAgICAgICAvd2F6dWgtYWxlcnRzL2csXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgaW5kZXgtcGF0dGVybiBmb3Igc2VsZWN0b3IgdmlzdWFsaXphdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiAoYXV4X3NvdXJjZSB8fCB7fSkudmlzU3RhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYXV4X3NvdXJjZS52aXNTdGF0ZSA9IGF1eF9zb3VyY2UudmlzU3RhdGUucmVwbGFjZShcbiAgICAgICAgICAgIC93YXp1aC1hbGVydHMvZyxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1bGsgc291cmNlXG4gICAgICAgIGJ1bGtfY29udGVudCA9IHt9O1xuICAgICAgICBidWxrX2NvbnRlbnRbZWxlbWVudC5fdHlwZV0gPSBhdXhfc291cmNlO1xuXG4gICAgICAgIHZpc0FycmF5LnB1c2goe1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IGJ1bGtfY29udGVudC52aXN1YWxpemF0aW9uLFxuICAgICAgICAgIHR5cGU6IGVsZW1lbnQuX3R5cGUsXG4gICAgICAgICAgaWQ6IGVsZW1lbnQuX2lkLFxuICAgICAgICAgIF92ZXJzaW9uOiBidWxrX2NvbnRlbnQudmlzdWFsaXphdGlvbi52ZXJzaW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZpc0FycmF5O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3dhenVoLWVsYXN0aWM6YnVpbGRWaXN1YWxpemF0aW9uc1JhdycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgY2x1c3RlciB2aXN1YWxpemF0aW9ucyBtYWluIGZpZWxkcy5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBhcHBfb2JqZWN0cyBPYmplY3QgY29udGFpbmluZyByYXcgdmlzdWFsaXphdGlvbnMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBJbmRleC1wYXR0ZXJuIGlkIHRvIHVzZSBpbiB0aGUgdmlzdWFsaXphdGlvbnMuIEVnOiAnd2F6dWgtYWxlcnRzJ1xuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZz59IG5vZGVzIEFycmF5IG9mIG5vZGUgbmFtZXMuIEVnOiBbJ25vZGUwMScsICdub2RlMDInXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBDbHVzdGVyIG5hbWUuIEVnOiAnd2F6dWgnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtYXN0ZXJfbm9kZSBNYXN0ZXIgbm9kZSBuYW1lLiBFZzogJ25vZGUwMSdcbiAgICovXG4gIGJ1aWxkQ2x1c3RlclZpc3VhbGl6YXRpb25zUmF3KFxuICAgIGFwcF9vYmplY3RzLFxuICAgIGlkLFxuICAgIG5vZGVzID0gW10sXG4gICAgbmFtZSxcbiAgICBtYXN0ZXJfbm9kZSxcbiAgICBwYXR0ZXJuX25hbWUgPSAnKidcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZpc0FycmF5ID0gW107XG4gICAgICBsZXQgYXV4X3NvdXJjZSwgYnVsa19jb250ZW50O1xuXG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXBwX29iamVjdHMpIHtcbiAgICAgICAgLy8gU3RyaW5naWZ5IGFuZCByZXBsYWNlIGluZGV4LXBhdHRlcm4gZm9yIHZpc3VhbGl6YXRpb25zXG4gICAgICAgIGF1eF9zb3VyY2UgPSBKU09OLnN0cmluZ2lmeShlbGVtZW50Ll9zb3VyY2UpO1xuICAgICAgICBhdXhfc291cmNlID0gYXV4X3NvdXJjZS5yZXBsYWNlKC93YXp1aC1hbGVydHMvZywgaWQpO1xuICAgICAgICBhdXhfc291cmNlID0gSlNPTi5wYXJzZShhdXhfc291cmNlKTtcblxuICAgICAgICAvLyBCdWxrIHNvdXJjZVxuICAgICAgICBidWxrX2NvbnRlbnQgPSB7fTtcbiAgICAgICAgYnVsa19jb250ZW50W2VsZW1lbnQuX3R5cGVdID0gYXV4X3NvdXJjZTtcblxuICAgICAgICBjb25zdCB2aXNTdGF0ZSA9IEpTT04ucGFyc2UoYnVsa19jb250ZW50LnZpc3VhbGl6YXRpb24udmlzU3RhdGUpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHZpc1N0YXRlLnRpdGxlO1xuXG4gICAgICAgIGlmICh2aXNTdGF0ZS50eXBlICYmIHZpc1N0YXRlLnR5cGUgPT09ICd0aW1lbGlvbicpIHtcbiAgICAgICAgICBsZXQgcXVlcnkgPSAnJztcbiAgICAgICAgICBpZiAodGl0bGUgPT09ICdXYXp1aCBBcHAgQ2x1c3RlciBPdmVydmlldycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICBxdWVyeSArPSBgLmVzKGluZGV4PSR7cGF0dGVybl9uYW1lfSxxPVwiY2x1c3Rlci5uYW1lOiAke25hbWV9IEFORCBjbHVzdGVyLm5vZGU6ICR7bm9kZS5uYW1lfVwiKS5sYWJlbChcIiR7bm9kZS5uYW1lfVwiKSxgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5zdWJzdHJpbmcoMCwgcXVlcnkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gJ1dhenVoIEFwcCBDbHVzdGVyIE92ZXJ2aWV3IE1hbmFnZXInKSB7XG4gICAgICAgICAgICBxdWVyeSArPSBgLmVzKGluZGV4PSR7cGF0dGVybl9uYW1lfSxxPVwiY2x1c3Rlci5uYW1lOiAke25hbWV9XCIpLmxhYmVsKFwiJHtuYW1lfSBjbHVzdGVyXCIpYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRpdGxlLnN0YXJ0c1dpdGgoJ1dhenVoIEFwcCBTdGF0aXN0aWNzJykpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBzZWFyY2hTb3VyY2VKU09OIH0gPSBidWxrX2NvbnRlbnQudmlzdWFsaXphdGlvbi5raWJhbmFTYXZlZE9iamVjdE1ldGE7XG4gICAgICAgICAgICAgIGJ1bGtfY29udGVudC52aXN1YWxpemF0aW9uLmtpYmFuYVNhdmVkT2JqZWN0TWV0YS5zZWFyY2hTb3VyY2VKU09OID0gc2VhcmNoU291cmNlSlNPTi5yZXBsYWNlKCd3YXp1aC1zdGF0aXN0aWNzLSonLCBwYXR0ZXJuX25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpdGxlLnN0YXJ0c1dpdGgoJ1dhenVoIEFwcCBTdGF0aXN0aWNzJykgJiYgbmFtZSAhPT0gJy0nICYmIG5hbWUgIT09ICdhbGwnICYmIHZpc1N0YXRlLnBhcmFtcy5leHByZXNzaW9uLmluY2x1ZGVzKCdxPScpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25SZWdleCA9IC9xPSdcXConL2dpO1xuICAgICAgICAgICAgICBjb25zdCBfdmlzU3RhdGUgPSBidWxrX2NvbnRlbnQudmlzdWFsaXphdGlvbi52aXNTdGF0ZUJ5Tm9kZVxuICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShidWxrX2NvbnRlbnQudmlzdWFsaXphdGlvbi52aXNTdGF0ZUJ5Tm9kZSlcbiAgICAgICAgICAgICAgICA6IHZpc1N0YXRlO1xuICAgICAgICAgICAgICBxdWVyeSArPSBfdmlzU3RhdGUucGFyYW1zLmV4cHJlc3Npb24ucmVwbGFjZSgvd2F6dWgtc3RhdGlzdGljcy1cXCovZywgcGF0dGVybl9uYW1lKS5yZXBsYWNlKGV4cHJlc3Npb25SZWdleCwgYHE9XCJub2RlTmFtZS5rZXl3b3JkOiR7bmFtZX0gQU5EIGFwaU5hbWUua2V5d29yZDoke21hc3Rlcl9ub2RlfVwiYClcbiAgICAgICAgICAgICAgICAucmVwbGFjZShcIk5PREVfTkFNRVwiLCBuYW1lKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aXRsZS5zdGFydHNXaXRoKCdXYXp1aCBBcHAgU3RhdGlzdGljcycpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25SZWdleCA9IC9xPSdcXConL2dpXG4gICAgICAgICAgICAgIHF1ZXJ5ICs9IHZpc1N0YXRlLnBhcmFtcy5leHByZXNzaW9uLnJlcGxhY2UoL3dhenVoLXN0YXRpc3RpY3MtXFwqL2csIHBhdHRlcm5fbmFtZSkucmVwbGFjZShleHByZXNzaW9uUmVnZXgsIGBxPVwiYXBpTmFtZS5rZXl3b3JkOiR7bWFzdGVyX25vZGV9XCJgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcXVlcnkgPSB2aXNTdGF0ZS5wYXJhbXMuZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2aXNTdGF0ZS5wYXJhbXMuZXhwcmVzc2lvbiA9IHF1ZXJ5LnJlcGxhY2UoLycvZywgXCJcXFwiXCIpO1xuICAgICAgICAgIGJ1bGtfY29udGVudC52aXN1YWxpemF0aW9uLnZpc1N0YXRlID0gSlNPTi5zdHJpbmdpZnkodmlzU3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlzQXJyYXkucHVzaCh7XG4gICAgICAgICAgYXR0cmlidXRlczogYnVsa19jb250ZW50LnZpc3VhbGl6YXRpb24sXG4gICAgICAgICAgdHlwZTogZWxlbWVudC5fdHlwZSxcbiAgICAgICAgICBpZDogZWxlbWVudC5faWQsXG4gICAgICAgICAgX3ZlcnNpb246IGJ1bGtfY29udGVudC52aXN1YWxpemF0aW9uLnZlcnNpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aXNBcnJheTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKFxuICAgICAgICAnd2F6dWgtZWxhc3RpYzpidWlsZENsdXN0ZXJWaXN1YWxpemF0aW9uc1JhdycsXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3JcbiAgICAgICk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGNyZWF0ZXMgYSB2aXN1YWxpemF0aW9uIG9mIGRhdGEgaW4gcmVxXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2aXMgb2JqIG9yIEVycm9yUmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIGNyZWF0ZVZpcyhjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdDx7IHBhdHRlcm46IHN0cmluZywgdGFiOiBzdHJpbmcgfT4sIHJlc3BvbnNlOiBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoXG4gICAgICAgICghcmVxdWVzdC5wYXJhbXMudGFiLmluY2x1ZGVzKCdvdmVydmlldy0nKSAmJlxuICAgICAgICAgICFyZXF1ZXN0LnBhcmFtcy50YWIuaW5jbHVkZXMoJ2FnZW50cy0nKSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVycyBjcmVhdGluZyB2aXN1YWxpemF0aW9ucycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YWJQcmVmaXggPSByZXF1ZXN0LnBhcmFtcy50YWIuaW5jbHVkZXMoJ292ZXJ2aWV3JylcbiAgICAgICAgPyAnb3ZlcnZpZXcnXG4gICAgICAgIDogJ2FnZW50cyc7XG5cbiAgICAgIGNvbnN0IHRhYlNwbGl0ID0gcmVxdWVzdC5wYXJhbXMudGFiLnNwbGl0KCctJyk7XG4gICAgICBjb25zdCB0YWJTdWZpeCA9IHRhYlNwbGl0WzFdO1xuXG4gICAgICBjb25zdCBmaWxlID1cbiAgICAgICAgdGFiUHJlZml4ID09PSAnb3ZlcnZpZXcnXG4gICAgICAgICAgPyBPdmVydmlld1Zpc3VhbGl6YXRpb25zW3RhYlN1Zml4XVxuICAgICAgICAgIDogQWdlbnRzVmlzdWFsaXphdGlvbnNbdGFiU3VmaXhdO1xuICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5ub3RGb3VuZCh7Ym9keTp7bWVzc2FnZTogYFZpc3VhbGl6YXRpb25zIG5vdCBmb3VuZCBmb3IgJHtyZXF1ZXN0LnBhcmFtcy50YWJ9YH19KTtcbiAgICAgIH1cbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzpjcmVhdGVWaXMnLCBgJHt0YWJQcmVmaXh9WyR7dGFiU3VmaXh9XSB3aXRoIGluZGV4IHBhdHRlcm4gJHtyZXF1ZXN0LnBhcmFtcy5wYXR0ZXJufWAsICdkZWJ1ZycpO1xuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5idWlsZFZpc3VhbGl6YXRpb25zUmF3KFxuICAgICAgICBmaWxlLFxuICAgICAgICByZXF1ZXN0LnBhcmFtcy5wYXR0ZXJuXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keTogeyBhY2tub3dsZWRnZTogdHJ1ZSwgcmF3OiByYXcgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzpjcmVhdGVWaXMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDQwMDcsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGNyZWF0ZXMgYSB2aXN1YWxpemF0aW9uIG9mIGNsdXN0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHZpcyBvYmogb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgY3JlYXRlQ2x1c3RlclZpcyhjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdDx7IHBhdHRlcm46IHN0cmluZywgdGFiOiBzdHJpbmcgfSwgdW5rbm93biwgYW55PiwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcbiAgICAgICAgIXJlcXVlc3QucGFyYW1zLnBhdHRlcm4gfHxcbiAgICAgICAgIXJlcXVlc3QucGFyYW1zLnRhYiB8fFxuICAgICAgICAhcmVxdWVzdC5ib2R5IHx8XG4gICAgICAgICFyZXF1ZXN0LmJvZHkubm9kZXMgfHxcbiAgICAgICAgIXJlcXVlc3QuYm9keS5ub2Rlcy5hZmZlY3RlZF9pdGVtcyB8fFxuICAgICAgICAhcmVxdWVzdC5ib2R5Lm5vZGVzLm5hbWUgfHxcbiAgICAgICAgKHJlcXVlc3QucGFyYW1zLnRhYiAmJiAhcmVxdWVzdC5wYXJhbXMudGFiLmluY2x1ZGVzKCdjbHVzdGVyLScpKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXJzIGNyZWF0aW5nIHZpc3VhbGl6YXRpb25zJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHR5cGUgPSByZXF1ZXN0LnBhcmFtcy50YWIuc3BsaXQoJy0nKVsxXTtcblxuICAgICAgY29uc3QgZmlsZSA9IENsdXN0ZXJWaXN1YWxpemF0aW9uc1t0eXBlXTtcbiAgICAgIGNvbnN0IG5vZGVzID0gcmVxdWVzdC5ib2R5Lm5vZGVzLmFmZmVjdGVkX2l0ZW1zO1xuICAgICAgY29uc3QgbmFtZSA9IHJlcXVlc3QuYm9keS5ub2Rlcy5uYW1lO1xuICAgICAgY29uc3QgbWFzdGVyTm9kZSA9IHJlcXVlc3QuYm9keS5ub2Rlcy5tYXN0ZXJfbm9kZTtcblxuICAgICAgY29uc3QgeyBpZDogcGF0dGVybklELCB0aXRsZTogcGF0dGVybk5hbWUgfSA9IHJlcXVlc3QuYm9keS5wYXR0ZXJuO1xuXG4gICAgICBjb25zdCByYXcgPSBhd2FpdCB0aGlzLmJ1aWxkQ2x1c3RlclZpc3VhbGl6YXRpb25zUmF3KFxuICAgICAgICBmaWxlLFxuICAgICAgICBwYXR0ZXJuSUQsXG4gICAgICAgIG5vZGVzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBtYXN0ZXJOb2RlLFxuICAgICAgICBwYXR0ZXJuTmFtZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keTogeyBhY2tub3dsZWRnZTogdHJ1ZSwgcmF3OiByYXcgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzpjcmVhdGVDbHVzdGVyVmlzJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IGVycm9yLCA0MDA5LCA1MDAsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBjaGVja3MgaWYgdGhlcmUgaXMgc2FtcGxlIGFsZXJ0c1xuICAgKiBHRVQgL2VsYXN0aWMvc2FtcGxlYWxlcnRzXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICAgKiBAcGFyYW0geyp9IHJlcXVlc3RcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuICAgKiB7YWxlcnRzOiBbLi4uXX0gb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgaGF2ZVNhbXBsZUFsZXJ0cyhjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGlmIHdhenVoIHNhbXBsZSBhbGVydHMgaW5kZXggZXhpc3RzXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SSUVTX1RZUEVfQUxFUlRTKVxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4gY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIuaW5kaWNlcy5leGlzdHMoe1xuICAgICAgICAgIGluZGV4OiB0aGlzLmJ1aWxkU2FtcGxlSW5kZXhCeUNhdGVnb3J5KGNhdGVnb3J5KVxuICAgICAgICB9KSkpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keTogeyBzYW1wbGVBbGVydHNJbnN0YWxsZWQ6IHJlc3VsdHMuc29tZShyZXN1bHQgPT4gcmVzdWx0LmJvZHkpIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnU2FtcGxlIEFsZXJ0cyBjYXRlZ29yeSBub3QgdmFsaWQnLCAxMDAwLCA1MDAsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgY3JlYXRlcyBzYW1wbGUgYWxlcnRzIGluIHdhenVoLXNhbXBsZS1hbGVydHNcbiAgICogR0VUIC9lbGFzdGljL3NhbXBsZWFsZXJ0cy97Y2F0ZWdvcnl9XG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICAgKiBAcGFyYW0geyp9IHJlcXVlc3RcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuICAgKiB7YWxlcnRzOiBbLi4uXX0gb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgaGF2ZVNhbXBsZUFsZXJ0c09mQ2F0ZWdvcnkoY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LCByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3Q8eyBjYXRlZ29yeTogc3RyaW5nIH0+LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2FtcGxlQWxlcnRzSW5kZXggPSB0aGlzLmJ1aWxkU2FtcGxlSW5kZXhCeUNhdGVnb3J5KHJlcXVlc3QucGFyYW1zLmNhdGVnb3J5KTtcbiAgICAgIC8vIENoZWNrIGlmIHdhenVoIHNhbXBsZSBhbGVydHMgaW5kZXggZXhpc3RzXG4gICAgICBjb25zdCBleGlzdHNTYW1wbGVJbmRleCA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLmluZGljZXMuZXhpc3RzKHtcbiAgICAgICAgaW5kZXg6IHNhbXBsZUFsZXJ0c0luZGV4XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5vayh7XG4gICAgICAgIGJvZHk6IHsgaW5kZXg6IHNhbXBsZUFsZXJ0c0luZGV4LCBleGlzdHM6IGV4aXN0c1NhbXBsZUluZGV4LmJvZHkgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKFxuICAgICAgICAnd2F6dWgtZWxhc3RpYzpoYXZlU2FtcGxlQWxlcnRzT2ZDYXRlZ29yeScsXG4gICAgICAgIGBFcnJvciBjaGVja2luZyBpZiB0aGVyZSBhcmUgc2FtcGxlIGFsZXJ0cyBpbmRpY2VzOiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YFxuICAgICAgKTtcblxuICAgICAgY29uc3QgW3N0YXR1c0NvZGUsIGVycm9yTWVzc2FnZV0gPSB0aGlzLmdldEVycm9yRGV0YWlscyhlcnJvcik7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShgRXJyb3IgY2hlY2tpbmcgaWYgdGhlcmUgYXJlIHNhbXBsZSBhbGVydHMgaW5kaWNlczogJHtlcnJvck1lc3NhZ2UgfHwgZXJyb3J9YCwgMTAwMCwgc3RhdHVzQ29kZSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhpcyBjcmVhdGVzIHNhbXBsZSBhbGVydHMgaW4gd2F6dWgtc2FtcGxlLWFsZXJ0c1xuICAgKiBQT1NUIC9lbGFzdGljL3NhbXBsZWFsZXJ0cy97Y2F0ZWdvcnl9XG4gICAqIHtcbiAgICogICBcIm1hbmFnZXJcIjoge1xuICAgKiAgICAgIFwibmFtZVwiOiBcIm1hbmFnZXJfbmFtZVwiXG4gICAqICAgIH0sXG4gICAqICAgIGNsdXN0ZXI6IHtcbiAgICogICAgICBuYW1lOiBcIm15Y2x1c3RlclwiLFxuICAgKiAgICAgIG5vZGU6IFwibXlub2RlXCJcbiAgICogICAgfVxuICAgKiB9XG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICAgKiBAcGFyYW0geyp9IHJlcXVlc3RcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuICAgKiB7aW5kZXg6IHN0cmluZywgYWxlcnRzOiBbLi4uXSwgY291bnQ6IG51bWJlcn0gb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgY3JlYXRlU2FtcGxlQWxlcnRzKGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0PHsgY2F0ZWdvcnk6IHN0cmluZyB9PiwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgY29uc3Qgc2FtcGxlQWxlcnRzSW5kZXggPSB0aGlzLmJ1aWxkU2FtcGxlSW5kZXhCeUNhdGVnb3J5KHJlcXVlc3QucGFyYW1zLmNhdGVnb3J5KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBhZG1pbmlzdHJhdG9yIHJvbGUgaW4gdG9rZW5cbiAgICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llVmFsdWVCeU5hbWUocmVxdWVzdC5oZWFkZXJzLmNvb2tpZSwgJ3d6LXRva2VuJyk7XG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdObyB0b2tlbiBwcm92aWRlZCcsIDQwMSwgNDAxLCByZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKHRva2VuKTtcbiAgICAgIGlmICghZGVjb2RlZFRva2VuKSB7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdObyBwZXJtaXNzaW9ucyBpbiB0b2tlbicsIDQwMSwgNDAxLCByZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgaWYgKCFkZWNvZGVkVG9rZW4ucmJhY19yb2xlcyB8fCAhZGVjb2RlZFRva2VuLnJiYWNfcm9sZXMuaW5jbHVkZXMoV0FaVUhfUk9MRV9BRE1JTklTVFJBVE9SX0lEKSkge1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnTm8gYWRtaW5pc3RyYXRvciByb2xlJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICAvLyBDaGVjayB0aGUgcHJvdmlkZWQgdG9rZW4gaXMgdmFsaWRcbiAgICAgIGNvbnN0IGFwaUhvc3RJRCA9IGdldENvb2tpZVZhbHVlQnlOYW1lKHJlcXVlc3QuaGVhZGVycy5jb29raWUsICd3ei1hcGknKTtcbiAgICAgIGlmICghYXBpSG9zdElEKSB7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdObyBBUEkgaWQgcHJvdmlkZWQnLCA0MDEsIDQwMSwgcmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlVG9rZW5Jc1dvcmtpbmcgPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNDdXJyZW50VXNlci5yZXF1ZXN0KCdHRVQnLCBgLy9gLCB7fSwgeyBhcGlIb3N0SUQgfSk7XG4gICAgICBpZiAocmVzcG9uc2VUb2tlbklzV29ya2luZy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnVG9rZW4gaXMgbm90IHZhbGlkJywgNTAwLCA1MDAsIHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGJ1bGtQcmVmaXggPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgX2luZGV4OiBzYW1wbGVBbGVydHNJbmRleFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGFsZXJ0R2VuZXJhdGVQYXJhbXMgPSByZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5LnBhcmFtcyB8fCB7fTtcblxuICAgICAgY29uc3Qgc2FtcGxlQWxlcnRzID0gV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SSUVTX1RZUEVfQUxFUlRTW3JlcXVlc3QucGFyYW1zLmNhdGVnb3J5XS5tYXAoKHR5cGVBbGVydCkgPT4gZ2VuZXJhdGVBbGVydHMoeyAuLi50eXBlQWxlcnQsIC4uLmFsZXJ0R2VuZXJhdGVQYXJhbXMgfSwgcmVxdWVzdC5ib2R5LmFsZXJ0cyB8fCB0eXBlQWxlcnQuYWxlcnRzIHx8IFdBWlVIX1NBTVBMRV9BTEVSVFNfREVGQVVMVF9OVU1CRVJfQUxFUlRTKSkuZmxhdCgpO1xuICAgICAgY29uc3QgYnVsayA9IHNhbXBsZUFsZXJ0cy5tYXAoc2FtcGxlQWxlcnQgPT4gYCR7YnVsa1ByZWZpeH1cXG4ke0pTT04uc3RyaW5naWZ5KHNhbXBsZUFsZXJ0KX1cXG5gKS5qb2luKCcnKTtcblxuICAgICAgLy8gSW5kZXggYWxlcnRzXG5cbiAgICAgIC8vIENoZWNrIGlmIHdhenVoIHNhbXBsZSBhbGVydHMgaW5kZXggZXhpc3RzXG4gICAgICBjb25zdCBleGlzdHNTYW1wbGVJbmRleCA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLmluZGljZXMuZXhpc3RzKHtcbiAgICAgICAgaW5kZXg6IHNhbXBsZUFsZXJ0c0luZGV4XG4gICAgICB9KTtcbiAgICAgIGlmICghZXhpc3RzU2FtcGxlSW5kZXguYm9keSkge1xuICAgICAgICAvLyBDcmVhdGUgd2F6dWggc2FtcGxlIGFsZXJ0cyBpbmRleFxuXG4gICAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICAgIG51bWJlcl9vZl9zaGFyZHM6IFdBWlVIX1NBTVBMRV9BTEVSVFNfSU5ERVhfU0hBUkRTLFxuICAgICAgICAgICAgICBudW1iZXJfb2ZfcmVwbGljYXM6IFdBWlVIX1NBTVBMRV9BTEVSVFNfSU5ERVhfUkVQTElDQVNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIuaW5kaWNlcy5jcmVhdGUoe1xuICAgICAgICAgIGluZGV4OiBzYW1wbGVBbGVydHNJbmRleCxcbiAgICAgICAgICBib2R5OiBjb25maWd1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBsb2coXG4gICAgICAgICAgJ3dhenVoLWVsYXN0aWM6Y3JlYXRlU2FtcGxlQWxlcnRzJyxcbiAgICAgICAgICBgQ3JlYXRlZCAke3NhbXBsZUFsZXJ0c0luZGV4fSBpbmRleGAsXG4gICAgICAgICAgJ2RlYnVnJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNDdXJyZW50VXNlci5idWxrKHtcbiAgICAgICAgaW5kZXg6IHNhbXBsZUFsZXJ0c0luZGV4LFxuICAgICAgICBib2R5OiBidWxrXG4gICAgICB9KTtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dhenVoLWVsYXN0aWM6Y3JlYXRlU2FtcGxlQWxlcnRzJyxcbiAgICAgICAgYEFkZGVkIHNhbXBsZSBhbGVydHMgdG8gJHtzYW1wbGVBbGVydHNJbmRleH0gaW5kZXhgLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keTogeyBpbmRleDogc2FtcGxlQWxlcnRzSW5kZXgsIGFsZXJ0Q291bnQ6IHNhbXBsZUFsZXJ0cy5sZW5ndGggfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dhenVoLWVsYXN0aWM6Y3JlYXRlU2FtcGxlQWxlcnRzJyxcbiAgICAgICAgYEVycm9yIGFkZGluZyBzYW1wbGUgYWxlcnRzIHRvICR7c2FtcGxlQWxlcnRzSW5kZXh9IGluZGV4OiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YFxuICAgICAgKTtcbiAgICAgIFxuICAgICAgY29uc3QgW3N0YXR1c0NvZGUsIGVycm9yTWVzc2FnZV0gPSB0aGlzLmdldEVycm9yRGV0YWlscyhlcnJvcik7XG4gICAgICBcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yTWVzc2FnZSB8fCBlcnJvciwgMTAwMCwgc3RhdHVzQ29kZSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhpcyBkZWxldGVzIHNhbXBsZSBhbGVydHNcbiAgICogQHBhcmFtIHsqfSBjb250ZXh0XG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdFxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG4gICAqIHtyZXN1bHQ6IFwiZGVsZXRlZFwiLCBpbmRleDogc3RyaW5nfSBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBkZWxldGVTYW1wbGVBbGVydHMoY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LCByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3Q8eyBjYXRlZ29yeTogc3RyaW5nIH0+LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICAvLyBEZWxldGUgV2F6dWggc2FtcGxlIGFsZXJ0IGluZGV4XG5cbiAgICBjb25zdCBzYW1wbGVBbGVydHNJbmRleCA9IHRoaXMuYnVpbGRTYW1wbGVJbmRleEJ5Q2F0ZWdvcnkocmVxdWVzdC5wYXJhbXMuY2F0ZWdvcnkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGFkbWluaXN0cmF0b3Igcm9sZSBpbiB0b2tlblxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWVWYWx1ZUJ5TmFtZShyZXF1ZXN0LmhlYWRlcnMuY29va2llLCAnd3otdG9rZW4nKTtcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoJ05vIHRva2VuIHByb3ZpZGVkJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xuICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoJ05vIHBlcm1pc3Npb25zIGluIHRva2VuJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBpZiAoIWRlY29kZWRUb2tlbi5yYmFjX3JvbGVzIHx8ICFkZWNvZGVkVG9rZW4ucmJhY19yb2xlcy5pbmNsdWRlcyhXQVpVSF9ST0xFX0FETUlOSVNUUkFUT1JfSUQpKSB7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdObyBhZG1pbmlzdHJhdG9yIHJvbGUnLCA0MDEsIDQwMSwgcmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIC8vIENoZWNrIHRoZSBwcm92aWRlZCB0b2tlbiBpcyB2YWxpZFxuICAgICAgY29uc3QgYXBpSG9zdElEID0gZ2V0Q29va2llVmFsdWVCeU5hbWUocmVxdWVzdC5oZWFkZXJzLmNvb2tpZSwgJ3d6LWFwaScpO1xuICAgICAgaWYgKCFhcGlIb3N0SUQpIHtcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoJ05vIEFQSSBpZCBwcm92aWRlZCcsIDQwMSwgNDAxLCByZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2VUb2tlbklzV29ya2luZyA9IGF3YWl0IGNvbnRleHQud2F6dWguYXBpLmNsaWVudC5hc0N1cnJlbnRVc2VyLnJlcXVlc3QoJ0dFVCcsIGAvL2AsIHt9LCB7IGFwaUhvc3RJRCB9KTtcbiAgICAgIGlmIChyZXNwb25zZVRva2VuSXNXb3JraW5nLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdUb2tlbiBpcyBub3QgdmFsaWQnLCA1MDAsIDUwMCwgcmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2hlY2sgaWYgV2F6dWggc2FtcGxlIGFsZXJ0cyBpbmRleCBleGlzdHNcbiAgICAgIGNvbnN0IGV4aXN0c1NhbXBsZUluZGV4ID0gYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIuaW5kaWNlcy5leGlzdHMoe1xuICAgICAgICBpbmRleDogc2FtcGxlQWxlcnRzSW5kZXhcbiAgICAgIH0pO1xuICAgICAgaWYgKGV4aXN0c1NhbXBsZUluZGV4LmJvZHkpIHtcbiAgICAgICAgLy8gRGVsZXRlIFdhenVoIHNhbXBsZSBhbGVydHMgaW5kZXhcbiAgICAgICAgYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIuaW5kaWNlcy5kZWxldGUoeyBpbmRleDogc2FtcGxlQWxlcnRzSW5kZXggfSk7XG4gICAgICAgIGxvZyhcbiAgICAgICAgICAnd2F6dWgtZWxhc3RpYzpkZWxldGVTYW1wbGVBbGVydHMnLFxuICAgICAgICAgIGBEZWxldGVkICR7c2FtcGxlQWxlcnRzSW5kZXh9IGluZGV4YCxcbiAgICAgICAgICAnZGVidWcnXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vayh7XG4gICAgICAgICAgYm9keTogeyByZXN1bHQ6ICdkZWxldGVkJywgaW5kZXg6IHNhbXBsZUFsZXJ0c0luZGV4IH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShgJHtzYW1wbGVBbGVydHNJbmRleH0gaW5kZXggZG9lc24ndCBleGlzdGAsIDEwMDAsIDUwMCwgcmVzcG9uc2UpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dhenVoLWVsYXN0aWM6ZGVsZXRlU2FtcGxlQWxlcnRzJyxcbiAgICAgICAgYEVycm9yIGRlbGV0aW5nIHNhbXBsZSBhbGVydHMgb2YgJHtzYW1wbGVBbGVydHNJbmRleH0gaW5kZXg6ICR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gXG4gICAgICApO1xuICAgICAgY29uc3QgW3N0YXR1c0NvZGUsIGVycm9yTWVzc2FnZV0gPSB0aGlzLmdldEVycm9yRGV0YWlscyhlcnJvcik7XG5cbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yTWVzc2FnZSB8fCBlcnJvciwgMTAwMCwgc3RhdHVzQ29kZSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFsZXJ0cyhjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNDdXJyZW50VXNlci5zZWFyY2gocmVxdWVzdC5ib2R5KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5vayh7XG4gICAgICAgIGJvZHk6IGRhdGEuYm9keVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnd2F6dWgtZWxhc3RpYzphbGVydHMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDQwMTAsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBpbmRpY2VzIGZvciBTdGF0aXN0aWNzXG4gIGFzeW5jIGV4aXN0U3RhdGlzdGljc0luZGljZXMoY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LCByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3QsIHJlc3BvbnNlOiBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWd1cmF0aW9uKCk7XG4gICAgICBjb25zdCBzdGF0aXN0aWNzUGF0dGVybiA9IGAke2NvbmZpZ1snY3Jvbi5wcmVmaXgnXSB8fCAnd2F6dWgnfS0ke2NvbmZpZ1snY3Jvbi5zdGF0aXN0aWNzLmluZGV4Lm5hbWUnXSB8fCAnc3RhdGlzdGljcyd9KmA7IC8vVE9ETzogcmVwbGFjZSBieSBkZWZhdWx0IGFzIGNvbnN0YW50cyBpbnN0ZWFkIGhhcmRjb2RlZCAoJ3dhenVoJyBhbmQgJ3N0YXRpc3RpY3MnKVxuICAgICAgY29uc3QgZXhpc3RJbmRleCA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLmluZGljZXMuZXhpc3RzKHtcbiAgICAgICAgaW5kZXg6IHN0YXRpc3RpY3NQYXR0ZXJuLFxuICAgICAgICBhbGxvd19ub19pbmRpY2VzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICBib2R5OiBleGlzdEluZGV4LmJvZHlcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3dhenVoLWVsYXN0aWM6ZXhpc3RzU3RhdGlzdGljc0luZGljZXMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDEwMDAsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldEVycm9yRGV0YWlscyhlcnJvcil7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVycm9yPy5tZXRhPy5zdGF0dXNDb2RlIHx8IDUwMDtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblxuICAgIGlmKHN0YXR1c0NvZGUgPT09IDQwMyl7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvcj8ubWV0YT8uYm9keT8uZXJyb3I/LnJlYXNvbiB8fCAnUGVybWlzc2lvbiBkZW5pZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBbc3RhdHVzQ29kZSwgZXJyb3JNZXNzYWdlXTtcbiAgfVxufVxuIl19