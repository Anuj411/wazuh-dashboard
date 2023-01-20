"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobMonitoringRun = jobMonitoringRun;

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _logger = require("../../lib/logger");

var _monitoringTemplate = require("../../integration-files/monitoring-template");

var _getConfiguration = require("../../lib/get-configuration");

var _parseCron = require("../../lib/parse-cron");

var _indexDate = require("../../lib/index-date");

var _buildIndexSettings = require("../../lib/build-index-settings");

var _wazuhHosts = require("../../controllers/wazuh-hosts");

var _constants = require("../../../common/constants");

var _tryCatchForIndexPermissionError = require("../tryCatchForIndexPermissionError");

var _utils = require("../../../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Module for agent info fetching functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const blueWazuh = '\u001b[34mwazuh\u001b[39m';
const monitoringErrorLogColors = [blueWazuh, 'monitoring', 'error'];
const wazuhHostController = new _wazuhHosts.WazuhHostsCtrl();
let MONITORING_ENABLED, MONITORING_FREQUENCY, MONITORING_CRON_FREQ, MONITORING_CREATION, MONITORING_INDEX_PATTERN, MONITORING_INDEX_PREFIX; // Utils functions

/**
 * Get the setting value from the configuration
 * @param setting
 * @param configuration
 * @param defaultValue
 */

function getAppConfigurationSetting(setting, configuration, defaultValue) {
  return typeof configuration[setting] !== 'undefined' ? configuration[setting] : defaultValue;
}

;
/**
 * Set the monitoring variables
 * @param context
 */

function initMonitoringConfiguration(context) {
  try {
    const appConfig = (0, _getConfiguration.getConfiguration)();
    MONITORING_ENABLED = appConfig && typeof appConfig['wazuh.monitoring.enabled'] !== 'undefined' ? appConfig['wazuh.monitoring.enabled'] && appConfig['wazuh.monitoring.enabled'] !== 'worker' : _constants.WAZUH_MONITORING_DEFAULT_ENABLED;
    MONITORING_FREQUENCY = getAppConfigurationSetting('wazuh.monitoring.frequency', appConfig, _constants.WAZUH_MONITORING_DEFAULT_FREQUENCY);
    MONITORING_CRON_FREQ = (0, _parseCron.parseCron)(MONITORING_FREQUENCY);
    MONITORING_CREATION = getAppConfigurationSetting('wazuh.monitoring.creation', appConfig, _constants.WAZUH_MONITORING_DEFAULT_CREATION);
    MONITORING_INDEX_PATTERN = getAppConfigurationSetting('wazuh.monitoring.pattern', appConfig, _constants.WAZUH_MONITORING_PATTERN);
    const lastCharIndexPattern = MONITORING_INDEX_PATTERN[MONITORING_INDEX_PATTERN.length - 1];

    if (lastCharIndexPattern !== '*') {
      MONITORING_INDEX_PATTERN += '*';
    }

    ;
    MONITORING_INDEX_PREFIX = MONITORING_INDEX_PATTERN.slice(0, MONITORING_INDEX_PATTERN.length - 1);
    (0, _logger.log)('monitoring:initMonitoringConfiguration', `wazuh.monitoring.enabled: ${MONITORING_ENABLED}`, 'debug');
    (0, _logger.log)('monitoring:initMonitoringConfiguration', `wazuh.monitoring.frequency: ${MONITORING_FREQUENCY} (${MONITORING_CRON_FREQ})`, 'debug');
    (0, _logger.log)('monitoring:initMonitoringConfiguration', `wazuh.monitoring.pattern: ${MONITORING_INDEX_PATTERN} (index prefix: ${MONITORING_INDEX_PREFIX})`, 'debug');
  } catch (error) {
    const errorMessage = error.message || error;
    (0, _logger.log)('monitoring:initMonitoringConfiguration', errorMessage);
    context.wazuh.logger.error(errorMessage);
  }
}

;
/**
 * Main. First execution when installing / loading App.
 * @param context
 */

async function init(context) {
  try {
    if (MONITORING_ENABLED) {
      await checkTemplate(context);
    }

    ;
  } catch (error) {
    const errorMessage = error.message || error;
    (0, _logger.log)('monitoring:init', error.message || error);
    context.wazuh.logger.error(errorMessage);
  }
}
/**
 * Verify wazuh-agent template
 */


async function checkTemplate(context) {
  try {
    (0, _logger.log)('monitoring:checkTemplate', 'Updating the monitoring template', 'debug');

    try {
      // Check if the template already exists
      const currentTemplate = await context.core.opensearch.client.asInternalUser.indices.getTemplate({
        name: _constants.WAZUH_MONITORING_TEMPLATE_NAME
      }); // Copy already created index patterns

      _monitoringTemplate.monitoringTemplate.index_patterns = currentTemplate.body[_constants.WAZUH_MONITORING_TEMPLATE_NAME].index_patterns;
    } catch (error) {
      // Init with the default index pattern
      _monitoringTemplate.monitoringTemplate.index_patterns = [_constants.WAZUH_MONITORING_PATTERN];
    } // Check if the user is using a custom pattern and add it to the template if it does


    if (!_monitoringTemplate.monitoringTemplate.index_patterns.includes(MONITORING_INDEX_PATTERN)) {
      _monitoringTemplate.monitoringTemplate.index_patterns.push(MONITORING_INDEX_PATTERN);
    }

    ; // Update the monitoring template

    await context.core.opensearch.client.asInternalUser.indices.putTemplate({
      name: _constants.WAZUH_MONITORING_TEMPLATE_NAME,
      body: _monitoringTemplate.monitoringTemplate
    });
    (0, _logger.log)('monitoring:checkTemplate', 'Updated the monitoring template', 'debug');
  } catch (error) {
    const errorMessage = `Something went wrong updating the monitoring template ${error.message || error}`;
    (0, _logger.log)('monitoring:checkTemplate', errorMessage);
    context.wazuh.logger.error(monitoringErrorLogColors, errorMessage);
    throw error;
  }
}
/**
 * Save agent status into elasticsearch, create index and/or insert document
 * @param {*} context
 * @param {*} data
 */


async function insertMonitoringDataElasticsearch(context, data) {
  const monitoringIndexName = MONITORING_INDEX_PREFIX + (0, _indexDate.indexDate)(MONITORING_CREATION);

  if (!MONITORING_ENABLED) {
    return;
  }

  ;

  try {
    await (0, _tryCatchForIndexPermissionError.tryCatchForIndexPermissionError)(monitoringIndexName)(async () => {
      const exists = await context.core.opensearch.client.asInternalUser.indices.exists({
        index: monitoringIndexName
      });

      if (!exists.body) {
        await createIndex(context, monitoringIndexName);
      }

      ; // Update the index configuration

      const appConfig = (0, _getConfiguration.getConfiguration)();
      const indexConfiguration = (0, _buildIndexSettings.buildIndexSettings)(appConfig, 'wazuh.monitoring', _constants.WAZUH_MONITORING_DEFAULT_INDICES_SHARDS); // To update the index settings with this client is required close the index, update the settings and open it
      // Number of shards is not dynamic so delete that setting if it's given

      delete indexConfiguration.settings.index.number_of_shards;
      await context.core.opensearch.client.asInternalUser.indices.putSettings({
        index: monitoringIndexName,
        body: indexConfiguration
      }); // Insert data to the monitoring index

      await insertDataToIndex(context, monitoringIndexName, data);
    })();
  } catch (error) {
    (0, _logger.log)('monitoring:insertMonitoringDataElasticsearch', error.message || error);
    context.wazuh.logger.error(error.message);
  }
}
/**
 * Inserting one document per agent into Elastic. Bulk.
 * @param {*} context Endpoint
 * @param {String} indexName The name for the index (e.g. daily: wazuh-monitoring-YYYY.MM.DD)
 * @param {*} data
 */


async function insertDataToIndex(context, indexName, data) {
  const {
    agents,
    apiHost
  } = data;

  try {
    if (agents.length > 0) {
      (0, _logger.log)('monitoring:insertDataToIndex', `Bulk data to index ${indexName} for ${agents.length} agents`, 'debug');
      const bodyBulk = agents.map(agent => {
        const agentInfo = { ...agent
        };
        agentInfo['timestamp'] = new Date(Date.now()).toISOString();
        agentInfo.host = agent.manager;
        agentInfo.cluster = {
          name: apiHost.clusterName ? apiHost.clusterName : 'disabled'
        };
        return `{ "index":  { "_index": "${indexName}" } }\n${JSON.stringify(agentInfo)}\n`;
      }).join('');
      await context.core.opensearch.client.asInternalUser.bulk({
        index: indexName,
        body: bodyBulk
      });
      (0, _logger.log)('monitoring:insertDataToIndex', `Bulk data to index ${indexName} for ${agents.length} agents completed`, 'debug');
    }
  } catch (error) {
    (0, _logger.log)('monitoring:insertDataToIndex', `Error inserting agent data into elasticsearch. Bulk request failed due to ${error.message || error}`);
  }
}
/**
 * Create the wazuh-monitoring index
 * @param {*} context context
 * @param {String} indexName The name for the index (e.g. daily: wazuh-monitoring-YYYY.MM.DD)
 */


async function createIndex(context, indexName) {
  try {
    if (!MONITORING_ENABLED) return;
    const appConfig = (0, _getConfiguration.getConfiguration)();
    const IndexConfiguration = {
      settings: {
        index: {
          number_of_shards: getAppConfigurationSetting('wazuh.monitoring.shards', appConfig, _constants.WAZUH_MONITORING_DEFAULT_INDICES_SHARDS),
          number_of_replicas: getAppConfigurationSetting('wazuh.monitoring.replicas', appConfig, _constants.WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS)
        }
      }
    };
    await context.core.opensearch.client.asInternalUser.indices.create({
      index: indexName,
      body: IndexConfiguration
    });
    (0, _logger.log)('monitoring:createIndex', `Successfully created new index: ${indexName}`, 'debug');
  } catch (error) {
    const errorMessage = `Could not create ${indexName} index on elasticsearch due to ${error.message || error}`;
    (0, _logger.log)('monitoring:createIndex', errorMessage);
    context.wazuh.logger.error(errorMessage);
  }
}
/**
* Wait until Kibana server is ready
*/


async function checkPluginPlatformStatus(context) {
  try {
    (0, _logger.log)('monitoring:checkPluginPlatformStatus', 'Waiting for Kibana and Elasticsearch servers to be ready...', 'debug');
    await checkElasticsearchServer(context);
    await init(context);
    return;
  } catch (error) {
    (0, _logger.log)('monitoring:checkPluginPlatformStatus', error.mesage || error);

    try {
      await (0, _utils.delayAsPromise)(3000);
      await checkPluginPlatformStatus(context);
    } catch (error) {}

    ;
  }
}
/**
 * Check Elasticsearch Server status and Kibana index presence
 */


async function checkElasticsearchServer(context) {
  try {
    const data = await context.core.opensearch.client.asInternalUser.indices.exists({
      index: context.server.config.opensearchDashboards.index
    });
    return data.body; // TODO: check if Elasticsearch can receive requests
    // if (data) {
    //   const pluginsData = await this.server.plugins.elasticsearch.waitUntilReady();
    //   return pluginsData;
    // }

    return Promise.reject(data);
  } catch (error) {
    (0, _logger.log)('monitoring:checkElasticsearchServer', error.message || error);
    return Promise.reject(error);
  }
}

const fakeResponseEndpoint = {
  ok: body => body,
  custom: body => body
};
/**
 * Get API configuration from elastic and callback to loadCredentials
 */

async function getHostsConfiguration() {
  try {
    const hosts = await wazuhHostController.getHostsEntries(false, false, fakeResponseEndpoint);

    if (hosts.body.length) {
      return hosts.body;
    }

    ;
    (0, _logger.log)('monitoring:getConfig', 'There are no Wazuh API entries yet', 'debug');
    return Promise.reject({
      error: 'no credentials',
      error_code: 1
    });
  } catch (error) {
    (0, _logger.log)('monitoring:getHostsConfiguration', error.message || error);
    return Promise.reject({
      error: 'no wazuh hosts',
      error_code: 2
    });
  }
}
/**
   * Task used by the cron job.
   */


async function cronTask(context) {
  try {
    const templateMonitoring = await context.core.opensearch.client.asInternalUser.indices.getTemplate({
      name: _constants.WAZUH_MONITORING_TEMPLATE_NAME
    });
    const apiHosts = await getHostsConfiguration();
    const apiHostsUnique = (apiHosts || []).filter((apiHost, index, self) => index === self.findIndex(t => t.user === apiHost.user && t.password === apiHost.password && t.url === apiHost.url && t.port === apiHost.port));

    for (let apiHost of apiHostsUnique) {
      try {
        const {
          agents,
          apiHost: host
        } = await getApiInfo(context, apiHost);
        await insertMonitoringDataElasticsearch(context, {
          agents,
          apiHost: host
        });
      } catch (error) {}

      ;
    }
  } catch (error) {
    // Retry to call itself again if Kibana index is not ready yet
    // try {
    //   if (
    //     this.wzWrapper.buildingKibanaIndex ||
    //     ((error || {}).status === 404 &&
    //       (error || {}).displayName === 'NotFound')
    //   ) {
    //     await delayAsPromise(1000);
    //     return cronTask(context);
    //   }
    // } catch (error) {} //eslint-disable-line
    (0, _logger.log)('monitoring:cronTask', error.message || error);
    context.wazuh.logger.error(error.message || error);
  }
}
/**
 * Get API and agents info
 * @param context
 * @param apiHost
 */


async function getApiInfo(context, apiHost) {
  try {
    (0, _logger.log)('monitoring:getApiInfo', `Getting API info for ${apiHost.id}`, 'debug');
    const responseIsCluster = await context.wazuh.api.client.asInternalUser.request('GET', '/cluster/status', {}, {
      apiHostID: apiHost.id
    });
    const isCluster = (((responseIsCluster || {}).data || {}).data || {}).enabled === 'yes';

    if (isCluster) {
      const responseClusterInfo = await context.wazuh.api.client.asInternalUser.request('GET', `/cluster/local/info`, {}, {
        apiHostID: apiHost.id
      });
      apiHost.clusterName = responseClusterInfo.data.data.affected_items[0].cluster;
    }

    ;
    const agents = await fetchAllAgentsFromApiHost(context, apiHost);
    return {
      agents,
      apiHost
    };
  } catch (error) {
    (0, _logger.log)('monitoring:getApiInfo', error.message || error);
    throw error;
  }
}

;
/**
 * Fetch all agents for the API provided
 * @param context
 * @param apiHost
 */

async function fetchAllAgentsFromApiHost(context, apiHost) {
  let agents = [];

  try {
    (0, _logger.log)('monitoring:fetchAllAgentsFromApiHost', `Getting all agents from ApiID: ${apiHost.id}`, 'debug');
    const responseAgentsCount = await context.wazuh.api.client.asInternalUser.request('GET', '/agents', {
      params: {
        offset: 0,
        limit: 1,
        q: 'id!=000'
      }
    }, {
      apiHostID: apiHost.id
    });
    const agentsCount = responseAgentsCount.data.data.total_affected_items;
    (0, _logger.log)('monitoring:fetchAllAgentsFromApiHost', `ApiID: ${apiHost.id}, Agent count: ${agentsCount}`, 'debug');
    let payload = {
      offset: 0,
      limit: 500,
      q: 'id!=000'
    };

    while (agents.length < agentsCount && payload.offset < agentsCount) {
      try {
        /*
        TODO: Improve the performance of request with:
          - Reduce the number of requests to the Wazuh API
          - Reduce (if possible) the quantity of data to index by document
         Requirements:
          - Research about the neccesary data to index.
         How to do:
          - Wazuh API request:
            - select the required data to retrieve depending on is required to index (using the `select` query param)
            - increase the limit of results to retrieve (currently, the requests use the recommended value: 500).
              See the allowed values. This depends on the selected data because the response could fail if contains a lot of data
        */
        const responseAgents = await context.wazuh.api.client.asInternalUser.request('GET', `/agents`, {
          params: payload
        }, {
          apiHostID: apiHost.id
        });
        agents = [...agents, ...responseAgents.data.data.affected_items];
        payload.offset += payload.limit;
      } catch (error) {
        (0, _logger.log)('monitoring:fetchAllAgentsFromApiHost', `ApiID: ${apiHost.id}, Error request with offset/limit ${payload.offset}/${payload.limit}: ${error.message || error}`);
      }
    }

    return agents;
  } catch (error) {
    (0, _logger.log)('monitoring:fetchAllAgentsFromApiHost', `ApiID: ${apiHost.id}. Error: ${error.message || error}`);
    throw error;
  }
}

;
/**
 * Start the cron job
 */

async function jobMonitoringRun(context) {
  // Init the monitoring variables
  initMonitoringConfiguration(context); // Check Kibana index and if it is prepared, start the initialization of Wazuh App.

  await checkPluginPlatformStatus(context); // // Run the cron job only it it's enabled

  if (MONITORING_ENABLED) {
    cronTask(context);

    _nodeCron.default.schedule(MONITORING_CRON_FREQ, () => cronTask(context));
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImJsdWVXYXp1aCIsIm1vbml0b3JpbmdFcnJvckxvZ0NvbG9ycyIsIndhenVoSG9zdENvbnRyb2xsZXIiLCJXYXp1aEhvc3RzQ3RybCIsIk1PTklUT1JJTkdfRU5BQkxFRCIsIk1PTklUT1JJTkdfRlJFUVVFTkNZIiwiTU9OSVRPUklOR19DUk9OX0ZSRVEiLCJNT05JVE9SSU5HX0NSRUFUSU9OIiwiTU9OSVRPUklOR19JTkRFWF9QQVRURVJOIiwiTU9OSVRPUklOR19JTkRFWF9QUkVGSVgiLCJnZXRBcHBDb25maWd1cmF0aW9uU2V0dGluZyIsInNldHRpbmciLCJjb25maWd1cmF0aW9uIiwiZGVmYXVsdFZhbHVlIiwiaW5pdE1vbml0b3JpbmdDb25maWd1cmF0aW9uIiwiY29udGV4dCIsImFwcENvbmZpZyIsIldBWlVIX01PTklUT1JJTkdfREVGQVVMVF9FTkFCTEVEIiwiV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0ZSRVFVRU5DWSIsIldBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTiIsIldBWlVIX01PTklUT1JJTkdfUEFUVEVSTiIsImxhc3RDaGFySW5kZXhQYXR0ZXJuIiwibGVuZ3RoIiwic2xpY2UiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ3YXp1aCIsImxvZ2dlciIsImluaXQiLCJjaGVja1RlbXBsYXRlIiwiY3VycmVudFRlbXBsYXRlIiwiY29yZSIsIm9wZW5zZWFyY2giLCJjbGllbnQiLCJhc0ludGVybmFsVXNlciIsImluZGljZXMiLCJnZXRUZW1wbGF0ZSIsIm5hbWUiLCJXQVpVSF9NT05JVE9SSU5HX1RFTVBMQVRFX05BTUUiLCJtb25pdG9yaW5nVGVtcGxhdGUiLCJpbmRleF9wYXR0ZXJucyIsImJvZHkiLCJpbmNsdWRlcyIsInB1c2giLCJwdXRUZW1wbGF0ZSIsImluc2VydE1vbml0b3JpbmdEYXRhRWxhc3RpY3NlYXJjaCIsImRhdGEiLCJtb25pdG9yaW5nSW5kZXhOYW1lIiwiZXhpc3RzIiwiaW5kZXgiLCJjcmVhdGVJbmRleCIsImluZGV4Q29uZmlndXJhdGlvbiIsIldBWlVIX01PTklUT1JJTkdfREVGQVVMVF9JTkRJQ0VTX1NIQVJEUyIsInNldHRpbmdzIiwibnVtYmVyX29mX3NoYXJkcyIsInB1dFNldHRpbmdzIiwiaW5zZXJ0RGF0YVRvSW5kZXgiLCJpbmRleE5hbWUiLCJhZ2VudHMiLCJhcGlIb3N0IiwiYm9keUJ1bGsiLCJtYXAiLCJhZ2VudCIsImFnZW50SW5mbyIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsImhvc3QiLCJtYW5hZ2VyIiwiY2x1c3RlciIsImNsdXN0ZXJOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJidWxrIiwiSW5kZXhDb25maWd1cmF0aW9uIiwibnVtYmVyX29mX3JlcGxpY2FzIiwiV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0lORElDRVNfUkVQTElDQVMiLCJjcmVhdGUiLCJjaGVja1BsdWdpblBsYXRmb3JtU3RhdHVzIiwiY2hlY2tFbGFzdGljc2VhcmNoU2VydmVyIiwibWVzYWdlIiwic2VydmVyIiwiY29uZmlnIiwib3BlbnNlYXJjaERhc2hib2FyZHMiLCJQcm9taXNlIiwicmVqZWN0IiwiZmFrZVJlc3BvbnNlRW5kcG9pbnQiLCJvayIsImN1c3RvbSIsImdldEhvc3RzQ29uZmlndXJhdGlvbiIsImhvc3RzIiwiZ2V0SG9zdHNFbnRyaWVzIiwiZXJyb3JfY29kZSIsImNyb25UYXNrIiwidGVtcGxhdGVNb25pdG9yaW5nIiwiYXBpSG9zdHMiLCJhcGlIb3N0c1VuaXF1ZSIsImZpbHRlciIsInNlbGYiLCJmaW5kSW5kZXgiLCJ0IiwidXNlciIsInBhc3N3b3JkIiwidXJsIiwicG9ydCIsImdldEFwaUluZm8iLCJpZCIsInJlc3BvbnNlSXNDbHVzdGVyIiwiYXBpIiwicmVxdWVzdCIsImFwaUhvc3RJRCIsImlzQ2x1c3RlciIsImVuYWJsZWQiLCJyZXNwb25zZUNsdXN0ZXJJbmZvIiwiYWZmZWN0ZWRfaXRlbXMiLCJmZXRjaEFsbEFnZW50c0Zyb21BcGlIb3N0IiwicmVzcG9uc2VBZ2VudHNDb3VudCIsInBhcmFtcyIsIm9mZnNldCIsImxpbWl0IiwicSIsImFnZW50c0NvdW50IiwidG90YWxfYWZmZWN0ZWRfaXRlbXMiLCJwYXlsb2FkIiwicmVzcG9uc2VBZ2VudHMiLCJqb2JNb25pdG9yaW5nUnVuIiwiY3JvbiIsInNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7Ozs7QUE3QkE7Ozs7Ozs7Ozs7O0FBK0JBLE1BQU1BLFNBQVMsR0FBRywyQkFBbEI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxDQUFDRCxTQUFELEVBQVksWUFBWixFQUEwQixPQUExQixDQUFqQztBQUNBLE1BQU1FLG1CQUFtQixHQUFHLElBQUlDLDBCQUFKLEVBQTVCO0FBRUEsSUFBSUMsa0JBQUosRUFBd0JDLG9CQUF4QixFQUE4Q0Msb0JBQTlDLEVBQW9FQyxtQkFBcEUsRUFBeUZDLHdCQUF6RixFQUFtSEMsdUJBQW5ILEMsQ0FFQTs7QUFDQTs7Ozs7OztBQU1BLFNBQVNDLDBCQUFULENBQW9DQyxPQUFwQyxFQUFxREMsYUFBckQsRUFBeUVDLFlBQXpFLEVBQTJGO0FBQ3pGLFNBQU8sT0FBT0QsYUFBYSxDQUFDRCxPQUFELENBQXBCLEtBQWtDLFdBQWxDLEdBQWdEQyxhQUFhLENBQUNELE9BQUQsQ0FBN0QsR0FBeUVFLFlBQWhGO0FBQ0Q7O0FBQUE7QUFFRDs7Ozs7QUFJQSxTQUFTQywyQkFBVCxDQUFxQ0MsT0FBckMsRUFBNkM7QUFDM0MsTUFBRztBQUNELFVBQU1DLFNBQVMsR0FBRyx5Q0FBbEI7QUFDQVosSUFBQUEsa0JBQWtCLEdBQUdZLFNBQVMsSUFBSSxPQUFPQSxTQUFTLENBQUMsMEJBQUQsQ0FBaEIsS0FBaUQsV0FBOUQsR0FDakJBLFNBQVMsQ0FBQywwQkFBRCxDQUFULElBQ0FBLFNBQVMsQ0FBQywwQkFBRCxD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O0FBQ0FpSCxzQkFBS0MsUUFBTCxDQUFjM0gsb0JBQWQsRUFBb0MsTUFBTXlGLFFBQVEsQ0FBQ2hGLE9BQUQsQ0FBbEQ7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgYWdlbnQgaW5mbyBmZXRjaGluZyBmdW5jdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgY3JvbiBmcm9tICdub2RlLWNyb24nO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi4vLi4vbGliL2xvZ2dlcic7XG5pbXBvcnQgeyBtb25pdG9yaW5nVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9pbnRlZ3JhdGlvbi1maWxlcy9tb25pdG9yaW5nLXRlbXBsYXRlJztcbmltcG9ydCB7IGdldENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9saWIvZ2V0LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyc2VDcm9uIH0gZnJvbSAnLi4vLi4vbGliL3BhcnNlLWNyb24nO1xuaW1wb3J0IHsgaW5kZXhEYXRlIH0gZnJvbSAnLi4vLi4vbGliL2luZGV4LWRhdGUnO1xuaW1wb3J0IHsgYnVpbGRJbmRleFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vbGliL2J1aWxkLWluZGV4LXNldHRpbmdzJztcbmltcG9ydCB7IFdhenVoSG9zdHNDdHJsIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvd2F6dWgtaG9zdHMnO1xuaW1wb3J0IHtcbiAgV0FaVUhfTU9OSVRPUklOR19QQVRURVJOLFxuICBXQVpVSF9NT05JVE9SSU5HX1RFTVBMQVRFX05BTUUsXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTixcbiAgV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0VOQUJMRUQsXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9GUkVRVUVOQ1ksXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9JTkRJQ0VTX1NIQVJEUyxcbiAgV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0lORElDRVNfUkVQTElDQVMsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdHJ5Q2F0Y2hGb3JJbmRleFBlcm1pc3Npb25FcnJvciB9IGZyb20gJy4uL3RyeUNhdGNoRm9ySW5kZXhQZXJtaXNzaW9uRXJyb3InO1xuaW1wb3J0IHsgZGVsYXlBc1Byb21pc2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMnO1xuXG5jb25zdCBibHVlV2F6dWggPSAnXFx1MDAxYlszNG13YXp1aFxcdTAwMWJbMzltJztcbmNvbnN0IG1vbml0b3JpbmdFcnJvckxvZ0NvbG9ycyA9IFtibHVlV2F6dWgsICdtb25pdG9yaW5nJywgJ2Vycm9yJ107XG5jb25zdCB3YXp1aEhvc3RDb250cm9sbGVyID0gbmV3IFdhenVoSG9zdHNDdHJsKCk7XG5cbmxldCBNT05JVE9SSU5HX0VOQUJMRUQsIE1PTklUT1JJTkdfRlJFUVVFTkNZLCBNT05JVE9SSU5HX0NST05fRlJFUSwgTU9OSVRPUklOR19DUkVBVElPTiwgTU9OSVRPUklOR19JTkRFWF9QQVRURVJOLCBNT05JVE9SSU5HX0lOREVYX1BSRUZJWDtcblxuLy8gVXRpbHMgZnVuY3Rpb25zXG4vKipcbiAqIEdldCB0aGUgc2V0dGluZyB2YWx1ZSBmcm9tIHRoZSBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQHBhcmFtIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0QXBwQ29uZmlndXJhdGlvblNldHRpbmcoc2V0dGluZzogc3RyaW5nLCBjb25maWd1cmF0aW9uOiBhbnksIGRlZmF1bHRWYWx1ZTogYW55KXtcbiAgcmV0dXJuIHR5cGVvZiBjb25maWd1cmF0aW9uW3NldHRpbmddICE9PSAndW5kZWZpbmVkJyA/IGNvbmZpZ3VyYXRpb25bc2V0dGluZ10gOiBkZWZhdWx0VmFsdWU7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbW9uaXRvcmluZyB2YXJpYWJsZXNcbiAqIEBwYXJhbSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGluaXRNb25pdG9yaW5nQ29uZmlndXJhdGlvbihjb250ZXh0KXtcbiAgdHJ5e1xuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldENvbmZpZ3VyYXRpb24oKTtcbiAgICBNT05JVE9SSU5HX0VOQUJMRUQgPSBhcHBDb25maWcgJiYgdHlwZW9mIGFwcENvbmZpZ1snd2F6dWgubW9uaXRvcmluZy5lbmFibGVkJ10gIT09ICd1bmRlZmluZWQnXG4gICAgICA/IGFwcENvbmZpZ1snd2F6dWgubW9uaXRvcmluZy5lbmFibGVkJ10gJiZcbiAgICAgICAgYXBwQ29uZmlnWyd3YXp1aC5tb25pdG9yaW5nLmVuYWJsZWQnXSAhPT0gJ3dvcmtlcidcbiAgICAgIDogV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0VOQUJMRUQ7XG4gICAgTU9OSVRPUklOR19GUkVRVUVOQ1kgPSBnZXRBcHBDb25maWd1cmF0aW9uU2V0dGluZygnd2F6dWgubW9uaXRvcmluZy5mcmVxdWVuY3knLCBhcHBDb25maWcsIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9GUkVRVUVOQ1kpO1xuICAgIE1PTklUT1JJTkdfQ1JPTl9GUkVRID0gcGFyc2VDcm9uKE1PTklUT1JJTkdfRlJFUVVFTkNZKTtcbiAgICBNT05JVE9SSU5HX0NSRUFUSU9OID0gZ2V0QXBwQ29uZmlndXJhdGlvblNldHRpbmcoJ3dhenVoLm1vbml0b3JpbmcuY3JlYXRpb24nLCBhcHBDb25maWcsIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTik7XG5cbiAgICBNT05JVE9SSU5HX0lOREVYX1BBVFRFUk4gPSBnZXRBcHBDb25maWd1cmF0aW9uU2V0dGluZygnd2F6dWgubW9uaXRvcmluZy5wYXR0ZXJuJywgYXBwQ29uZmlnLCBXQVpVSF9NT05JVE9SSU5HX1BBVFRFUk4pO1xuICAgIGNvbnN0IGxhc3RDaGFySW5kZXhQYXR0ZXJuID0gTU9OSVRPUklOR19JTkRFWF9QQVRURVJOW01PTklUT1JJTkdfSU5ERVhfUEFUVEVSTi5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdENoYXJJbmRleFBhdHRlcm4gIT09ICcqJykge1xuICAgICAgTU9OSVRPUklOR19JTkRFWF9QQVRURVJOICs9ICcqJztcbiAgICB9O1xuICAgIE1PTklUT1JJTkdfSU5ERVhfUFJFRklYID0gTU9OSVRPUklOR19JTkRFWF9QQVRURVJOLnNsaWNlKDAsTU9OSVRPUklOR19JTkRFWF9QQVRURVJOLmxlbmd0aCAtIDEpO1xuXG4gICAgbG9nKFxuICAgICAgJ21vbml0b3Jpbmc6aW5pdE1vbml0b3JpbmdDb25maWd1cmF0aW9uJyxcbiAgICAgIGB3YXp1aC5tb25pdG9yaW5nLmVuYWJsZWQ6ICR7TU9OSVRPUklOR19FTkFCTEVEfWAsXG4gICAgICAnZGVidWcnXG4gICAgKTtcblxuICAgIGxvZyhcbiAgICAgICdtb25pdG9yaW5nOmluaXRNb25pdG9yaW5nQ29uZmlndXJhdGlvbicsXG4gICAgICBgd2F6dWgubW9uaXRvcmluZy5mcmVxdWVuY3k6ICR7TU9OSVRPUklOR19GUkVRVUVOQ1l9ICgke01PTklUT1JJTkdfQ1JPTl9GUkVRfSlgLFxuICAgICAgJ2RlYnVnJ1xuICAgICk7XG5cbiAgICBsb2coXG4gICAgICAnbW9uaXRvcmluZzppbml0TW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24nLFxuICAgICAgYHdhenVoLm1vbml0b3JpbmcucGF0dGVybjogJHtNT05JVE9SSU5HX0lOREVYX1BBVFRFUk59IChpbmRleCBwcmVmaXg6ICR7TU9OSVRPUklOR19JTkRFWF9QUkVGSVh9KWAsXG4gICAgICAnZGVidWcnXG4gICAgKTtcbiAgfWNhdGNoKGVycm9yKXtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgIGxvZyhcbiAgICAgICdtb25pdG9yaW5nOmluaXRNb25pdG9yaW5nQ29uZmlndXJhdGlvbicsXG4gICAgICBlcnJvck1lc3NhZ2VcbiAgICApO1xuICAgIGNvbnRleHQud2F6dWgubG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgfVxufTtcblxuLyoqXG4gKiBNYWluLiBGaXJzdCBleGVjdXRpb24gd2hlbiBpbnN0YWxsaW5nIC8gbG9hZGluZyBBcHAuXG4gKiBAcGFyYW0gY29udGV4dFxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KGNvbnRleHQpIHtcbiAgdHJ5IHtcbiAgICBpZiAoTU9OSVRPUklOR19FTkFCTEVEKSB7XG4gICAgICBhd2FpdCBjaGVja1RlbXBsYXRlKGNvbnRleHQpO1xuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICBsb2coJ21vbml0b3Jpbmc6aW5pdCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgIGNvbnRleHQud2F6dWgubG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBWZXJpZnkgd2F6dWgtYWdlbnQgdGVtcGxhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tUZW1wbGF0ZShjb250ZXh0KSB7XG4gIHRyeSB7XG4gICAgbG9nKFxuICAgICAgJ21vbml0b3Jpbmc6Y2hlY2tUZW1wbGF0ZScsXG4gICAgICAnVXBkYXRpbmcgdGhlIG1vbml0b3JpbmcgdGVtcGxhdGUnLFxuICAgICAgJ2RlYnVnJ1xuICAgICk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRlbXBsYXRlIGFscmVhZHkgZXhpc3RzXG4gICAgICBjb25zdCBjdXJyZW50VGVtcGxhdGUgPSBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNJbnRlcm5hbFVzZXIuaW5kaWNlcy5nZXRUZW1wbGF0ZSh7XG4gICAgICAgIG5hbWU6IFdBWlVIX01PTklUT1JJTkdfVEVNUExBVEVfTkFNRVxuICAgICAgfSk7XG4gICAgICAvLyBDb3B5IGFscmVhZHkgY3JlYXRlZCBpbmRleCBwYXR0ZXJuc1xuICAgICAgbW9uaXRvcmluZ1RlbXBsYXRlLmluZGV4X3BhdHRlcm5zID0gY3VycmVudFRlbXBsYXRlLmJvZHlbV0FaVUhfTU9OSVRPUklOR19URU1QTEFURV9OQU1FXS5pbmRleF9wYXR0ZXJucztcbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJbml0IHdpdGggdGhlIGRlZmF1bHQgaW5kZXggcGF0dGVyblxuICAgICAgbW9uaXRvcmluZ1RlbXBsYXRlLmluZGV4X3BhdHRlcm5zID0gW1dBWlVIX01PTklUT1JJTkdfUEFUVEVSTl07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaXMgdXNpbmcgYSBjdXN0b20gcGF0dGVybiBhbmQgYWRkIGl0IHRvIHRoZSB0ZW1wbGF0ZSBpZiBpdCBkb2VzXG4gICAgaWYgKCFtb25pdG9yaW5nVGVtcGxhdGUuaW5kZXhfcGF0dGVybnMuaW5jbHVkZXMoTU9OSVRPUklOR19JTkRFWF9QQVRURVJOKSkge1xuICAgICAgbW9uaXRvcmluZ1RlbXBsYXRlLmluZGV4X3BhdHRlcm5zLnB1c2goTU9OSVRPUklOR19JTkRFWF9QQVRURVJOKTtcbiAgICB9O1xuXG4gICAgLy8gVXBkYXRlIHRoZSBtb25pdG9yaW5nIHRlbXBsYXRlXG4gICAgYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzSW50ZXJuYWxVc2VyLmluZGljZXMucHV0VGVtcGxhdGUoe1xuICAgICAgbmFtZTogV0FaVUhfTU9OSVRPUklOR19URU1QTEFURV9OQU1FLFxuICAgICAgYm9keTogbW9uaXRvcmluZ1RlbXBsYXRlXG4gICAgfSk7XG4gICAgbG9nKFxuICAgICAgJ21vbml0b3Jpbmc6Y2hlY2tUZW1wbGF0ZScsXG4gICAgICAnVXBkYXRlZCB0aGUgbW9uaXRvcmluZyB0ZW1wbGF0ZScsXG4gICAgICAnZGVidWcnXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgU29tZXRoaW5nIHdlbnQgd3JvbmcgdXBkYXRpbmcgdGhlIG1vbml0b3JpbmcgdGVtcGxhdGUgJHtlcnJvci5tZXNzYWdlIHx8IGVycm9yfWA7XG4gICAgbG9nKFxuICAgICAgJ21vbml0b3Jpbmc6Y2hlY2tUZW1wbGF0ZScsXG4gICAgICBlcnJvck1lc3NhZ2VcbiAgICApO1xuICAgIGNvbnRleHQud2F6dWgubG9nZ2VyLmVycm9yKG1vbml0b3JpbmdFcnJvckxvZ0NvbG9ycywgZXJyb3JNZXNzYWdlKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIFNhdmUgYWdlbnQgc3RhdHVzIGludG8gZWxhc3RpY3NlYXJjaCwgY3JlYXRlIGluZGV4IGFuZC9vciBpbnNlcnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICogQHBhcmFtIHsqfSBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluc2VydE1vbml0b3JpbmdEYXRhRWxhc3RpY3NlYXJjaChjb250ZXh0LCBkYXRhKSB7XG4gIGNvbnN0IG1vbml0b3JpbmdJbmRleE5hbWUgPSBNT05JVE9SSU5HX0lOREVYX1BSRUZJWCArIGluZGV4RGF0ZShNT05JVE9SSU5HX0NSRUFUSU9OKTtcbiAgICBpZiAoIU1PTklUT1JJTkdfRU5BQkxFRCl7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdHJ5Q2F0Y2hGb3JJbmRleFBlcm1pc3Npb25FcnJvcihtb25pdG9yaW5nSW5kZXhOYW1lKSAoYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0ludGVybmFsVXNlci5pbmRpY2VzLmV4aXN0cyh7aW5kZXg6IG1vbml0b3JpbmdJbmRleE5hbWV9KTtcbiAgICAgICAgaWYoIWV4aXN0cy5ib2R5KXtcbiAgICAgICAgICBhd2FpdCBjcmVhdGVJbmRleChjb250ZXh0LCBtb25pdG9yaW5nSW5kZXhOYW1lKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGluZGV4IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0Q29uZmlndXJhdGlvbigpO1xuICAgICAgICBjb25zdCBpbmRleENvbmZpZ3VyYXRpb24gPSBidWlsZEluZGV4U2V0dGluZ3MoXG4gICAgICAgICAgYXBwQ29uZmlnLFxuICAgICAgICAgICd3YXp1aC5tb25pdG9yaW5nJyxcbiAgICAgICAgICBXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19TSEFSRFNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBUbyB1cGRhdGUgdGhlIGluZGV4IHNldHRpbmdzIHdpdGggdGhpcyBjbGllbnQgaXMgcmVxdWlyZWQgY2xvc2UgdGhlIGluZGV4LCB1cGRhdGUgdGhlIHNldHRpbmdzIGFuZCBvcGVuIGl0XG4gICAgICAgIC8vIE51bWJlciBvZiBzaGFyZHMgaXMgbm90IGR5bmFtaWMgc28gZGVsZXRlIHRoYXQgc2V0dGluZyBpZiBpdCdzIGdpdmVuXG4gICAgICAgIGRlbGV0ZSBpbmRleENvbmZpZ3VyYXRpb24uc2V0dGluZ3MuaW5kZXgubnVtYmVyX29mX3NoYXJkcztcbiAgICAgICAgYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzSW50ZXJuYWxVc2VyLmluZGljZXMucHV0U2V0dGluZ3Moe1xuICAgICAgICAgIGluZGV4OiBtb25pdG9yaW5nSW5kZXhOYW1lLFxuICAgICAgICAgIGJvZHk6IGluZGV4Q29uZmlndXJhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbnNlcnQgZGF0YSB0byB0aGUgbW9uaXRvcmluZyBpbmRleFxuICAgICAgICBhd2FpdCBpbnNlcnREYXRhVG9JbmRleChjb250ZXh0LCBtb25pdG9yaW5nSW5kZXhOYW1lLCBkYXRhKTtcbiAgICAgIH0pKCk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGxvZygnbW9uaXRvcmluZzppbnNlcnRNb25pdG9yaW5nRGF0YUVsYXN0aWNzZWFyY2gnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIGNvbnRleHQud2F6dWgubG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBJbnNlcnRpbmcgb25lIGRvY3VtZW50IHBlciBhZ2VudCBpbnRvIEVsYXN0aWMuIEJ1bGsuXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgRW5kcG9pbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbmRleE5hbWUgVGhlIG5hbWUgZm9yIHRoZSBpbmRleCAoZS5nLiBkYWlseTogd2F6dWgtbW9uaXRvcmluZy1ZWVlZLk1NLkREKVxuICogQHBhcmFtIHsqfSBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluc2VydERhdGFUb0luZGV4KGNvbnRleHQsIGluZGV4TmFtZTogc3RyaW5nLCBkYXRhOiB7YWdlbnRzOiBhbnlbXSwgYXBpSG9zdH0pIHtcbiAgY29uc3QgeyBhZ2VudHMsIGFwaUhvc3QgfSA9IGRhdGE7XG4gIHRyeSB7XG4gICAgaWYgKGFnZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBsb2coXG4gICAgICAgICdtb25pdG9yaW5nOmluc2VydERhdGFUb0luZGV4JyxcbiAgICAgICAgYEJ1bGsgZGF0YSB0byBpbmRleCAke2luZGV4TmFtZX0gZm9yICR7YWdlbnRzLmxlbmd0aH0gYWdlbnRzYCxcbiAgICAgICAgJ2RlYnVnJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgYm9keUJ1bGsgPSBhZ2VudHMubWFwKGFnZW50ID0+IHtcbiAgICAgICAgY29uc3QgYWdlbnRJbmZvID0gey4uLmFnZW50fTtcbiAgICAgICAgYWdlbnRJbmZvWyd0aW1lc3RhbXAnXSA9IG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGFnZW50SW5mby5ob3N0ID0gYWdlbnQubWFuYWdlcjtcbiAgICAgICAgYWdlbnRJbmZvLmNsdXN0ZXIgPSB7IG5hbWU6IGFwaUhvc3QuY2x1c3Rlck5hbWUgPyBhcGlIb3N0LmNsdXN0ZXJOYW1lIDogJ2Rpc2FibGVkJyB9O1xuICAgICAgICByZXR1cm4gYHsgXCJpbmRleFwiOiAgeyBcIl9pbmRleFwiOiBcIiR7aW5kZXhOYW1lfVwiIH0gfVxcbiR7SlNPTi5zdHJpbmdpZnkoYWdlbnRJbmZvKX1cXG5gO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgIGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0ludGVybmFsVXNlci5idWxrKHtcbiAgICAgICAgaW5kZXg6IGluZGV4TmFtZSxcbiAgICAgICAgYm9keTogYm9keUJ1bGtcbiAgICAgIH0pO1xuICAgICAgbG9nKFxuICAgICAgICAnbW9uaXRvcmluZzppbnNlcnREYXRhVG9JbmRleCcsXG4gICAgICAgIGBCdWxrIGRhdGEgdG8gaW5kZXggJHtpbmRleE5hbWV9IGZvciAke2FnZW50cy5sZW5ndGh9IGFnZW50cyBjb21wbGV0ZWRgLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2coXG4gICAgICAnbW9uaXRvcmluZzppbnNlcnREYXRhVG9JbmRleCcsXG4gICAgICBgRXJyb3IgaW5zZXJ0aW5nIGFnZW50IGRhdGEgaW50byBlbGFzdGljc2VhcmNoLiBCdWxrIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byAke2Vycm9yLm1lc3NhZ2UgfHxcbiAgICAgICAgZXJyb3J9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIHdhenVoLW1vbml0b3JpbmcgaW5kZXhcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBjb250ZXh0XG4gKiBAcGFyYW0ge1N0cmluZ30gaW5kZXhOYW1lIFRoZSBuYW1lIGZvciB0aGUgaW5kZXggKGUuZy4gZGFpbHk6IHdhenVoLW1vbml0b3JpbmctWVlZWS5NTS5ERClcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5kZXgoY29udGV4dCwgaW5kZXhOYW1lOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIU1PTklUT1JJTkdfRU5BQkxFRCkgcmV0dXJuO1xuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0IEluZGV4Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgbnVtYmVyX29mX3NoYXJkczogZ2V0QXBwQ29uZmlndXJhdGlvblNldHRpbmcoJ3dhenVoLm1vbml0b3Jpbmcuc2hhcmRzJywgYXBwQ29uZmlnLCBXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19TSEFSRFMpLFxuICAgICAgICAgIG51bWJlcl9vZl9yZXBsaWNhczogZ2V0QXBwQ29uZmlndXJhdGlvblNldHRpbmcoJ3dhenVoLm1vbml0b3JpbmcucmVwbGljYXMnLCBhcHBDb25maWcsIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9JTkRJQ0VTX1JFUExJQ0FTKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0ludGVybmFsVXNlci5pbmRpY2VzLmNyZWF0ZSh7XG4gICAgICBpbmRleDogaW5kZXhOYW1lLFxuICAgICAgYm9keTogSW5kZXhDb25maWd1cmF0aW9uXG4gICAgfSk7XG5cbiAgICBsb2coXG4gICAgICAnbW9uaXRvcmluZzpjcmVhdGVJbmRleCcsXG4gICAgICBgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgbmV3IGluZGV4OiAke2luZGV4TmFtZX1gLFxuICAgICAgJ2RlYnVnJ1xuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYENvdWxkIG5vdCBjcmVhdGUgJHtpbmRleE5hbWV9IGluZGV4IG9uIGVsYXN0aWNzZWFyY2ggZHVlIHRvICR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gO1xuICAgIGxvZyhcbiAgICAgICdtb25pdG9yaW5nOmNyZWF0ZUluZGV4JyxcbiAgICAgIGVycm9yTWVzc2FnZVxuICAgICk7XG4gICAgY29udGV4dC53YXp1aC5sb2dnZXIuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiogV2FpdCB1bnRpbCBLaWJhbmEgc2VydmVyIGlzIHJlYWR5XG4qL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tQbHVnaW5QbGF0Zm9ybVN0YXR1cyhjb250ZXh0KSB7XG4gdHJ5IHtcbiAgICBsb2coXG4gICAgICAnbW9uaXRvcmluZzpjaGVja1BsdWdpblBsYXRmb3JtU3RhdHVzJyxcbiAgICAgICdXYWl0aW5nIGZvciBLaWJhbmEgYW5kIEVsYXN0aWNzZWFyY2ggc2VydmVycyB0byBiZSByZWFkeS4uLicsXG4gICAgICAnZGVidWcnXG4gICAgKTtcblxuICAgYXdhaXQgY2hlY2tFbGFzdGljc2VhcmNoU2VydmVyKGNvbnRleHQpO1xuICAgYXdhaXQgaW5pdChjb250ZXh0KTtcbiAgIHJldHVybjtcbiB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZyhcbiAgICAgICdtb25pdG9yaW5nOmNoZWNrUGx1Z2luUGxhdGZvcm1TdGF0dXMnLFxuICAgICAgZXJyb3IubWVzYWdlIHx8ZXJyb3JcbiAgICApO1xuICAgIHRyeXtcbiAgICAgIGF3YWl0IGRlbGF5QXNQcm9taXNlKDMwMDApO1xuICAgICAgYXdhaXQgY2hlY2tQbHVnaW5QbGF0Zm9ybVN0YXR1cyhjb250ZXh0KTtcbiAgICB9Y2F0Y2goZXJyb3Ipe307XG4gfVxufVxuXG5cbi8qKlxuICogQ2hlY2sgRWxhc3RpY3NlYXJjaCBTZXJ2ZXIgc3RhdHVzIGFuZCBLaWJhbmEgaW5kZXggcHJlc2VuY2VcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tFbGFzdGljc2VhcmNoU2VydmVyKGNvbnRleHQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udGV4dC5jb3JlLm9wZW5zZWFyY2guY2xpZW50LmFzSW50ZXJuYWxVc2VyLmluZGljZXMuZXhpc3RzKHtcbiAgICAgIGluZGV4OiBjb250ZXh0LnNlcnZlci5jb25maWcub3BlbnNlYXJjaERhc2hib2FyZHMuaW5kZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhLmJvZHk7XG4gICAgLy8gVE9ETzogY2hlY2sgaWYgRWxhc3RpY3NlYXJjaCBjYW4gcmVjZWl2ZSByZXF1ZXN0c1xuICAgIC8vIGlmIChkYXRhKSB7XG4gICAgLy8gICBjb25zdCBwbHVnaW5zRGF0YSA9IGF3YWl0IHRoaXMuc2VydmVyLnBsdWdpbnMuZWxhc3RpY3NlYXJjaC53YWl0VW50aWxSZWFkeSgpO1xuICAgIC8vICAgcmV0dXJuIHBsdWdpbnNEYXRhO1xuICAgIC8vIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nKCdtb25pdG9yaW5nOmNoZWNrRWxhc3RpY3NlYXJjaFNlcnZlcicsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuY29uc3QgZmFrZVJlc3BvbnNlRW5kcG9pbnQgPSB7XG4gIG9rOiAoYm9keTogYW55KSA9PiBib2R5LFxuICBjdXN0b206IChib2R5OiBhbnkpID0+IGJvZHksXG59XG4vKipcbiAqIEdldCBBUEkgY29uZmlndXJhdGlvbiBmcm9tIGVsYXN0aWMgYW5kIGNhbGxiYWNrIHRvIGxvYWRDcmVkZW50aWFsc1xuICovXG5hc3luYyBmdW5jdGlvbiBnZXRIb3N0c0NvbmZpZ3VyYXRpb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaG9zdHMgPSBhd2FpdCB3YXp1aEhvc3RDb250cm9sbGVyLmdldEhvc3RzRW50cmllcyhmYWxzZSwgZmFsc2UsIGZha2VSZXNwb25zZUVuZHBvaW50KTtcbiAgICBpZiAoaG9zdHMuYm9keS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBob3N0cy5ib2R5O1xuICAgIH07XG5cbiAgICBsb2coXG4gICAgICAnbW9uaXRvcmluZzpnZXRDb25maWcnLFxuICAgICAgJ1RoZXJlIGFyZSBubyBXYXp1aCBBUEkgZW50cmllcyB5ZXQnLFxuICAgICAgJ2RlYnVnJ1xuICAgICk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgIGVycm9yOiAnbm8gY3JlZGVudGlhbHMnLFxuICAgICAgZXJyb3JfY29kZTogMVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZygnbW9uaXRvcmluZzpnZXRIb3N0c0NvbmZpZ3VyYXRpb24nLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgZXJyb3I6ICdubyB3YXp1aCBob3N0cycsXG4gICAgICBlcnJvcl9jb2RlOiAyXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gICAqIFRhc2sgdXNlZCBieSB0aGUgY3JvbiBqb2IuXG4gICAqL1xuYXN5bmMgZnVuY3Rpb24gY3JvblRhc2soY29udGV4dCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlTW9uaXRvcmluZyA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0ludGVybmFsVXNlci5pbmRpY2VzLmdldFRlbXBsYXRlKHtuYW1lOiBXQVpVSF9NT05JVE9SSU5HX1RFTVBMQVRFX05BTUV9KTtcblxuICAgIGNvbnN0IGFwaUhvc3RzID0gYXdhaXQgZ2V0SG9zdHNDb25maWd1cmF0aW9uKCk7XG4gICAgY29uc3QgYXBpSG9zdHNVbmlxdWUgPSAoYXBpSG9zdHMgfHwgW10pLmZpbHRlcihcbiAgICAgIChhcGlIb3N0LCBpbmRleCwgc2VsZikgPT5cbiAgICAgICAgaW5kZXggPT09XG4gICAgICAgIHNlbGYuZmluZEluZGV4KFxuICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgIHQudXNlciA9PT0gYXBpSG9zdC51c2VyICYmXG4gICAgICAgICAgICB0LnBhc3N3b3JkID09PSBhcGlIb3N0LnBhc3N3b3JkICYmXG4gICAgICAgICAgICB0LnVybCA9PT0gYXBpSG9zdC51cmwgJiZcbiAgICAgICAgICAgIHQucG9ydCA9PT0gYXBpSG9zdC5wb3J0XG4gICAgICAgIClcbiAgICApO1xuICAgIGZvcihsZXQgYXBpSG9zdCBvZiBhcGlIb3N0c1VuaXF1ZSl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgYWdlbnRzLCBhcGlIb3N0OiBob3N0fSA9IGF3YWl0IGdldEFwaUluZm8oY29udGV4dCwgYXBpSG9zdCk7XG4gICAgICAgIGF3YWl0IGluc2VydE1vbml0b3JpbmdEYXRhRWxhc3RpY3NlYXJjaChjb250ZXh0LCB7YWdlbnRzLCBhcGlIb3N0OiBob3N0fSk7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuXG4gICAgICB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBSZXRyeSB0byBjYWxsIGl0c2VsZiBhZ2FpbiBpZiBLaWJhbmEgaW5kZXggaXMgbm90IHJlYWR5IHlldFxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBpZiAoXG4gICAgLy8gICAgIHRoaXMud3pXcmFwcGVyLmJ1aWxkaW5nS2liYW5hSW5kZXggfHxcbiAgICAvLyAgICAgKChlcnJvciB8fCB7fSkuc3RhdHVzID09PSA0MDQgJiZcbiAgICAvLyAgICAgICAoZXJyb3IgfHwge30pLmRpc3BsYXlOYW1lID09PSAnTm90Rm91bmQnKVxuICAgIC8vICAgKSB7XG4gICAgLy8gICAgIGF3YWl0IGRlbGF5QXNQcm9taXNlKDEwMDApO1xuICAgIC8vICAgICByZXR1cm4gY3JvblRhc2soY29udGV4dCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHt9IC8vZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgbG9nKCdtb25pdG9yaW5nOmNyb25UYXNrJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgY29udGV4dC53YXp1aC5sb2dnZXIuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgQVBJIGFuZCBhZ2VudHMgaW5mb1xuICogQHBhcmFtIGNvbnRleHRcbiAqIEBwYXJhbSBhcGlIb3N0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEFwaUluZm8oY29udGV4dCwgYXBpSG9zdCl7XG4gIHRyeXtcbiAgICBsb2coJ21vbml0b3Jpbmc6Z2V0QXBpSW5mbycsIGBHZXR0aW5nIEFQSSBpbmZvIGZvciAke2FwaUhvc3QuaWR9YCwgJ2RlYnVnJyk7XG4gICAgY29uc3QgcmVzcG9uc2VJc0NsdXN0ZXIgPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNJbnRlcm5hbFVzZXIucmVxdWVzdCgnR0VUJywgJy9jbHVzdGVyL3N0YXR1cycsIHt9LCB7IGFwaUhvc3RJRDogYXBpSG9zdC5pZCB9KTtcbiAgICBjb25zdCBpc0NsdXN0ZXIgPSAoKChyZXNwb25zZUlzQ2x1c3RlciB8fCB7fSkuZGF0YSB8fCB7fSkuZGF0YSB8fCB7fSkuZW5hYmxlZCA9PT0gJ3llcyc7XG4gICAgaWYoaXNDbHVzdGVyKXtcbiAgICAgIGNvbnN0IHJlc3BvbnNlQ2x1c3RlckluZm8gPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNJbnRlcm5hbFVzZXIucmVxdWVzdCgnR0VUJywgYC9jbHVzdGVyL2xvY2FsL2luZm9gLCB7fSwgIHsgYXBpSG9zdElEOiBhcGlIb3N0LmlkIH0pO1xuICAgICAgYXBpSG9zdC5jbHVzdGVyTmFtZSA9IHJlc3BvbnNlQ2x1c3RlckluZm8uZGF0YS5kYXRhLmFmZmVjdGVkX2l0ZW1zWzBdLmNsdXN0ZXI7XG4gICAgfTtcbiAgICBjb25zdCBhZ2VudHMgPSBhd2FpdCBmZXRjaEFsbEFnZW50c0Zyb21BcGlIb3N0KGNvbnRleHQsIGFwaUhvc3QpO1xuICAgIHJldHVybiB7IGFnZW50cywgYXBpSG9zdCB9O1xuICB9Y2F0Y2goZXJyb3Ipe1xuICAgIGxvZygnbW9uaXRvcmluZzpnZXRBcGlJbmZvJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogRmV0Y2ggYWxsIGFnZW50cyBmb3IgdGhlIEFQSSBwcm92aWRlZFxuICogQHBhcmFtIGNvbnRleHRcbiAqIEBwYXJhbSBhcGlIb3N0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsQWdlbnRzRnJvbUFwaUhvc3QoY29udGV4dCwgYXBpSG9zdCl7XG4gIGxldCBhZ2VudHMgPSBbXTtcbiAgdHJ5e1xuICAgIGxvZygnbW9uaXRvcmluZzpmZXRjaEFsbEFnZW50c0Zyb21BcGlIb3N0JywgYEdldHRpbmcgYWxsIGFnZW50cyBmcm9tIEFwaUlEOiAke2FwaUhvc3QuaWR9YCwgJ2RlYnVnJyk7XG4gICAgY29uc3QgcmVzcG9uc2VBZ2VudHNDb3VudCA9IGF3YWl0IGNvbnRleHQud2F6dWguYXBpLmNsaWVudC5hc0ludGVybmFsVXNlci5yZXF1ZXN0KFxuICAgICAgJ0dFVCcsXG4gICAgICAnL2FnZW50cycsXG4gICAgICB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgICBxOiAnaWQhPTAwMCdcbiAgICAgICAgfVxuICAgICAgfSwge2FwaUhvc3RJRDogYXBpSG9zdC5pZH0pO1xuXG4gICAgY29uc3QgYWdlbnRzQ291bnQgPSByZXNwb25zZUFnZW50c0NvdW50LmRhdGEuZGF0YS50b3RhbF9hZmZlY3RlZF9pdGVtcztcbiAgICBsb2coJ21vbml0b3Jpbmc6ZmV0Y2hBbGxBZ2VudHNGcm9tQXBpSG9zdCcsIGBBcGlJRDogJHthcGlIb3N0LmlkfSwgQWdlbnQgY291bnQ6ICR7YWdlbnRzQ291bnR9YCwgJ2RlYnVnJyk7XG5cbiAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGxpbWl0OiA1MDAsXG4gICAgICBxOiAnaWQhPTAwMCdcbiAgICB9O1xuXG4gICAgd2hpbGUgKGFnZW50cy5sZW5ndGggPCBhZ2VudHNDb3VudCAmJiBwYXlsb2FkLm9mZnNldCA8IGFnZW50c0NvdW50KSB7XG4gICAgICB0cnl7XG4gICAgICAgIC8qXG4gICAgICAgIFRPRE86IEltcHJvdmUgdGhlIHBlcmZvcm1hbmNlIG9mIHJlcXVlc3Qgd2l0aDpcbiAgICAgICAgICAtIFJlZHVjZSB0aGUgbnVtYmVyIG9mIHJlcXVlc3RzIHRvIHRoZSBXYXp1aCBBUElcbiAgICAgICAgICAtIFJlZHVjZSAoaWYgcG9zc2libGUpIHRoZSBxdWFudGl0eSBvZiBkYXRhIHRvIGluZGV4IGJ5IGRvY3VtZW50XG5cbiAgICAgICAgUmVxdWlyZW1lbnRzOlxuICAgICAgICAgIC0gUmVzZWFyY2ggYWJvdXQgdGhlIG5lY2Nlc2FyeSBkYXRhIHRvIGluZGV4LlxuXG4gICAgICAgIEhvdyB0byBkbzpcbiAgICAgICAgICAtIFdhenVoIEFQSSByZXF1ZXN0OlxuICAgICAgICAgICAgLSBzZWxlY3QgdGhlIHJlcXVpcmVkIGRhdGEgdG8gcmV0cmlldmUgZGVwZW5kaW5nIG9uIGlzIHJlcXVpcmVkIHRvIGluZGV4ICh1c2luZyB0aGUgYHNlbGVjdGAgcXVlcnkgcGFyYW0pXG4gICAgICAgICAgICAtIGluY3JlYXNlIHRoZSBsaW1pdCBvZiByZXN1bHRzIHRvIHJldHJpZXZlIChjdXJyZW50bHksIHRoZSByZXF1ZXN0cyB1c2UgdGhlIHJlY29tbWVuZGVkIHZhbHVlOiA1MDApLlxuICAgICAgICAgICAgICBTZWUgdGhlIGFsbG93ZWQgdmFsdWVzLiBUaGlzIGRlcGVuZHMgb24gdGhlIHNlbGVjdGVkIGRhdGEgYmVjYXVzZSB0aGUgcmVzcG9uc2UgY291bGQgZmFpbCBpZiBjb250YWlucyBhIGxvdCBvZiBkYXRhXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQWdlbnRzID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzSW50ZXJuYWxVc2VyLnJlcXVlc3QoXG4gICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgYC9hZ2VudHNgLFxuICAgICAgICAgIHtwYXJhbXM6IHBheWxvYWR9LFxuICAgICAgICAgIHthcGlIb3N0SUQ6IGFwaUhvc3QuaWR9XG4gICAgICAgICk7XG4gICAgICAgIGFnZW50cyA9IFsuLi5hZ2VudHMsIC4uLnJlc3BvbnNlQWdlbnRzLmRhdGEuZGF0YS5hZmZlY3RlZF9pdGVtc107XG4gICAgICAgIHBheWxvYWQub2Zmc2V0ICs9IHBheWxvYWQubGltaXQ7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBsb2coJ21vbml0b3Jpbmc6ZmV0Y2hBbGxBZ2VudHNGcm9tQXBpSG9zdCcsIGBBcGlJRDogJHthcGlIb3N0LmlkfSwgRXJyb3IgcmVxdWVzdCB3aXRoIG9mZnNldC9saW1pdCAke3BheWxvYWQub2Zmc2V0fS8ke3BheWxvYWQubGltaXR9OiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhZ2VudHM7XG4gIH1jYXRjaChlcnJvcil7XG4gICAgbG9nKCdtb25pdG9yaW5nOmZldGNoQWxsQWdlbnRzRnJvbUFwaUhvc3QnLCBgQXBpSUQ6ICR7YXBpSG9zdC5pZH0uIEVycm9yOiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnQgdGhlIGNyb24gam9iXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBqb2JNb25pdG9yaW5nUnVuKGNvbnRleHQpIHtcbiAgLy8gSW5pdCB0aGUgbW9uaXRvcmluZyB2YXJpYWJsZXNcbiAgaW5pdE1vbml0b3JpbmdDb25maWd1cmF0aW9uKGNvbnRleHQpO1xuICAvLyBDaGVjayBLaWJhbmEgaW5kZXggYW5kIGlmIGl0IGlzIHByZXBhcmVkLCBzdGFydCB0aGUgaW5pdGlhbGl6YXRpb24gb2YgV2F6dWggQXBwLlxuICBhd2FpdCBjaGVja1BsdWdpblBsYXRmb3JtU3RhdHVzKGNvbnRleHQpO1xuICAvLyAvLyBSdW4gdGhlIGNyb24gam9iIG9ubHkgaXQgaXQncyBlbmFibGVkXG4gIGlmIChNT05JVE9SSU5HX0VOQUJMRUQpIHtcbiAgICBjcm9uVGFzayhjb250ZXh0KTtcbiAgICBjcm9uLnNjaGVkdWxlKE1PTklUT1JJTkdfQ1JPTl9GUkVRLCAoKSA9PiBjcm9uVGFzayhjb250ZXh0KSk7XG4gIH1cbn1cblxuIl19