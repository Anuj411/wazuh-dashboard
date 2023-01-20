"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WazuhReportingCtrl = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _wazuhModules = require("../../common/wazuh-modules");

var TimSort = _interopRequireWildcard(require("timsort"));

var _errorResponse = require("../lib/error-response");

var VulnerabilityRequest = _interopRequireWildcard(require("../lib/reporting/vulnerability-request"));

var OverviewRequest = _interopRequireWildcard(require("../lib/reporting/overview-request"));

var RootcheckRequest = _interopRequireWildcard(require("../lib/reporting/rootcheck-request"));

var PCIRequest = _interopRequireWildcard(require("../lib/reporting/pci-request"));

var GDPRRequest = _interopRequireWildcard(require("../lib/reporting/gdpr-request"));

var TSCRequest = _interopRequireWildcard(require("../lib/reporting/tsc-request"));

var AuditRequest = _interopRequireWildcard(require("../lib/reporting/audit-request"));

var SyscheckRequest = _interopRequireWildcard(require("../lib/reporting/syscheck-request"));

var _pciRequirementsPdfmake = _interopRequireDefault(require("../integration-files/pci-requirements-pdfmake"));

var _gdprRequirementsPdfmake = _interopRequireDefault(require("../integration-files/gdpr-requirements-pdfmake"));

var _tscRequirementsPdfmake = _interopRequireDefault(require("../integration-files/tsc-requirements-pdfmake"));

var _processStateEquivalence = _interopRequireDefault(require("../lib/process-state-equivalence"));

var _csvKeyEquivalence = require("../../common/csv-key-equivalence");

var _agentConfiguration = require("../lib/reporting/agent-configuration");

var _printer = require("../lib/reporting/printer");

var _logger = require("../lib/logger");

var _constants = require("../../common/constants");

var _filesystem = require("../lib/filesystem");

var _moment = _interopRequireDefault(require("moment"));

var _wz_agent_status = require("../../common/services/wz_agent_status");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WazuhReportingCtrl {
  constructor() {
    _defineProperty(this, "createReportsModules", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:createReportsModules', `Report started`, 'info');
        const {
          array,
          agents,
          browserTimezone,
          searchBar,
          filters,
          time,
          tables,
          section,
          indexPatternTitle,
          apiId
        } = request.body;
        const {
          moduleID
        } = request.params;
        const {
          from,
          to
        } = time || {}; // Init

        const printer = new _printer.ReportPrinter();
        (0, _filesystem.createDataDirectoryIfNotExists)();
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, context.wazuhEndpointParams.hashUsername));
        await this.renderHeader(context, printer, section, moduleID, agents, apiId);
        const [sanitizedFilters, agentsFilter] = filters ? this.sanitizeKibanaFilters(filters, searchBar) : [false, false];

        if (time && sanitizedFilters) {
          printer.addTimeRangeAndFilters(from, to, sanitizedFilters, browserTimezone);
        }

        if (time) {
          await this.extendedInformation(context, printer, section, moduleID, apiId, new Date(from).getTime(), new Date(to).getTime(), sanitizedFilters, indexPatternTitle, agents);
        }

        printer.addVisualizations(array, agents, moduleID);

        if (tables) {
          printer.addTables(tables);
        } //add authorized agents


        if (agentsFilter) {
          printer.addAgentsFilters(agentsFilter);
        }

        await printer.print(context.wazuhEndpointParams.pathFilename);
        return response.ok({
          body: {
            success: true,
            message: `Report ${context.wazuhEndpointParams.filename} was created`
          }
        });
      } catch (error) {
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5029, 500, response);
      }
    }, ({
      body: {
        agents
      },
      params: {
        moduleID
      }
    }) => `wazuh-module-${agents ? `agents-${agents}` : 'overview'}-${moduleID}-${this.generateReportTimestamp()}.pdf`));

    _defineProperty(this, "createReportsGroups", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:createReportsGroups', `Report started`, 'info');
        const {
          components,
          apiId
        } = request.body;
        const {
          groupID
        } = request.params; // Init

        const printer = new _printer.ReportPrinter();
        (0, _filesystem.createDataDirectoryIfNotExists)();
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, context.wazuhEndpointParams.hashUsername));
        let tables = [];
        const equivalences = {
          localfile: 'Local files',
          osquery: 'Osquery',
          command: 'Command',
          syscheck: 'Syscheck',
          'open-scap': 'OpenSCAP',
          'cis-cat': 'CIS-CAT',
          syscollector: 'Syscollector',
          rootcheck: 'Rootcheck',
          labels: 'Labels',
          sca: 'Security configuration assessment'
        };
        printer.addContent({
          text: `Group ${groupID} configuration`,
          style: 'h1'
        }); // Group configuration

        if (components['0']) {
          const {
            data: {
              data: configuration
            }
          } = await context.wazuh.api.client.asCurrentUser.request('GET', `/groups/${groupID}/configuration`, {}, {
            apiHostID: apiId
          });

          if (configuration.affected_items.length > 0 && Object.keys(configuration.affected_items[0].config).length) {
            printer.addContent({
              text: 'Configurations',
              style: {
                fontSize: 14,
                color: '#000'
              },
              margin: [0, 10, 0, 15]
            });
            const section = {
              labels: [],
              isGroupConfig: true
            };

            for (let config of configuration.affected_items) {
              let filterTitle = '';
              let index = 0;

              for (let filter of Object.keys(config.filters)) {
                filterTitle = filterTitle.concat(`${filter}: ${config.filters[filter]}`);

                if (index < Object.keys(config.filters).length - 1) {
                  filterTitle = filterTitle.concat(' | ');
                }

                index++;
              }

              printer.addContent({
                text: filterTitle,
                style: 'h4',
                margin: [0, 0, 0, 10]
              });
              let idx = 0;
              section.tabs = [];

              for (let _d of Object.keys(config.config)) {
                for (let c of _agentConfiguration.AgentConfiguration.configurations) {
                  for (let s of c.sections) {
                    section.opts = s.opts || {};

                    for (let cn of s.config || []) {
                      if (cn.configuration === _d) {
                        section.labels = s.labels || [[]];
                      }
                    }

                    for (let wo of s.wodle || []) {
                      if (wo.name === _d) {
                        section.labels = s.labels || [[]];
                      }
                    }
                  }
                }

                section.labels[0]['pack'] = 'Packs';
                section.labels[0]['content'] = 'Evaluations';
                section.labels[0]['7'] = 'Scan listening netwotk ports';
                section.tabs.push(equivalences[_d]);

                if (Array.isArray(config.config[_d])) {
                  /* LOG COLLECTOR */
                  if (_d === 'localfile') {
                    let groups = [];

                    config.config[_d].forEach(obj => {
                      if (!groups[obj.logformat]) {
                        groups[obj.logformat] = [];
                      }

                      groups[obj.logformat].push(obj);
                    });

                    Object.keys(groups).forEach(group => {
                      let saveidx = 0;
                      groups[group].forEach((x, i) => {
                        if (Object.keys(x).length > Object.keys(groups[group][saveidx]).length) {
                          saveidx = i;
                        }
                      });
                      const columns = Object.keys(groups[group][saveidx]);
                      const rows = groups[group].map(x => {
                        let row = [];
                        columns.forEach(key => {
                          row.push(typeof x[key] !== 'object' ? x[key] : Array.isArray(x[key]) ? x[key].map(x => {
                            return x + '\n';
                          }) : JSON.stringify(x[key]));
                        });
                        return row;
                      });
                      columns.forEach((col, i) => {
                        columns[i] = col[0].toUpperCase() + col.slice(1);
                      });
                      tables.push({
                        title: 'Local files',
                        type: 'table',
                        columns,
                        rows
                      });
                    });
                  } else if (_d === 'labels') {
                    const obj = config.config[_d][0].label;
                    const columns = Object.keys(obj[0]);

                    if (!columns.includes('hidden')) {
                      columns.push('hidden');
                    }

                    const rows = obj.map(x => {
                      let row = [];
                      columns.forEach(key => {
                        row.push(x[key]);
                      });
                      return row;
                    });
                    columns.forEach((col, i) => {
                      columns[i] = col[0].toUpperCase() + col.slice(1);
                    });
                    tables.push({
                      title: 'Labels',
                      type: 'table',
                      columns,
                      rows
                    });
                  } else {
                    for (let _d2 of config.config[_d]) {
                      tables.push(...this.getConfigTables(_d2, section, idx));
                    }
                  }
                } else {
                  /*INTEGRITY MONITORING MONITORED DIRECTORIES */
                  if (config.config[_d].directories) {
                    const directories = config.config[_d].directories;
                    delete config.config[_d].directories;
                    tables.push(...this.getConfigTables(config.config[_d], section, idx));
                    let diffOpts = [];
                    Object.keys(section.opts).forEach(x => {
                      diffOpts.push(x);
                    });
                    const columns = ['', ...diffOpts.filter(x => x !== 'check_all' && x !== 'check_sum')];
                    let rows = [];
                    directories.forEach(x => {
                      let row = [];
                      row.push(x.path);
                      columns.forEach(y => {
                        if (y !== '') {
                          y = y !== 'check_whodata' ? y : 'whodata';
                          row.push(x[y] ? x[y] : 'no');
                        }
                      });
                      row.push(x.recursion_level);
                      rows.push(row);
                    });
                    columns.forEach((x, idx) => {
                      columns[idx] = section.opts[x];
                    });
                    columns.push('RL');
                    tables.push({
                      title: 'Monitored directories',
                      type: 'table',
                      columns,
                      rows
                    });
                  } else {
                    tables.push(...this.getConfigTables(config.config[_d], section, idx));
                  }
                }

                for (const table of tables) {
                  printer.addConfigTables([table]);
                }

                idx++;
                tables = [];
              }

              tables = [];
            }
          } else {
            printer.addContent({
              text: 'A configuration for this group has not yet been set up.',
              style: {
                fontSize: 12,
                color: '#000'
              },
              margin: [0, 10, 0, 15]
            });
          }
        } // Agents in group


        if (components['1']) {
          await this.renderHeader(context, printer, 'groupConfig', groupID, [], apiId);
        }

        await printer.print(context.wazuhEndpointParams.pathFilename);
        return response.ok({
          body: {
            success: true,
            message: `Report ${context.wazuhEndpointParams.filename} was created`
          }
        });
      } catch (error) {
        (0, _logger.log)('reporting:createReportsGroups', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5029, 500, response);
      }
    }, ({
      params: {
        groupID
      }
    }) => `wazuh-group-configuration-${groupID}-${this.generateReportTimestamp()}.pdf`));

    _defineProperty(this, "createReportsAgentsConfiguration", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:createReportsAgentsConfiguration', `Report started`, 'info');
        const {
          components,
          apiId
        } = request.body;
        const {
          agentID
        } = request.params;
        const printer = new _printer.ReportPrinter();
        (0, _filesystem.createDataDirectoryIfNotExists)();
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, context.wazuhEndpointParams.hashUsername));
        let wmodulesResponse = {};
        let tables = [];

        try {
          wmodulesResponse = await context.wazuh.api.client.asCurrentUser.request('GET', `/agents/${agentID}/config/wmodules/wmodules`, {}, {
            apiHostID: apiId
          });
        } catch (error) {
          (0, _logger.log)('reporting:report', error.message || error, 'debug');
        }

        await this.renderHeader(context, printer, 'agentConfig', 'agentConfig', agentID, apiId);
        let idxComponent = 0;

        for (let config of _agentConfiguration.AgentConfiguration.configurations) {
          let titleOfSection = false;
          (0, _logger.log)('reporting:createReportsAgentsConfiguration', `Iterate over ${config.sections.length} configuration sections`, 'debug');

          for (let section of config.sections) {
            let titleOfSubsection = false;

            if (components[idxComponent] && (section.config || section.wodle)) {
              let idx = 0;
              const configs = (section.config || []).concat(section.wodle || []);
              (0, _logger.log)('reporting:createReportsAgentsConfiguration', `Iterate over ${configs.length} configuration blocks`, 'debug');

              for (let conf of configs) {
                let agentConfigResponse = {};

                try {
                  if (!conf['name']) {
                    agentConfigResponse = await context.wazuh.api.client.asCurrentUser.request('GET', `/agents/${agentID}/config/${conf.component}/${conf.configuration}`, {}, {
                      apiHostID: apiId
                    });
                  } else {
                    for (let wodle of wmodulesResponse.data.data['wmodules']) {
                      if (Object.keys(wodle)[0] === conf['name']) {
                        agentConfigResponse.data = {
                          data: wodle
                        };
                      }
                    }
                  }

                  const agentConfig = agentConfigResponse && agentConfigResponse.data && agentConfigResponse.data.data;

                  if (!titleOfSection) {
                    printer.addContent({
                      text: config.title,
                      style: 'h1',
                      margin: [0, 0, 0, 15]
                    });
                    titleOfSection = true;
                  }

                  if (!titleOfSubsection) {
                    printer.addContent({
                      text: section.subtitle,
                      style: 'h4'
                    });
                    printer.addContent({
                      text: section.desc,
                      style: {
                        fontSize: 12,
                        color: '#000'
                      },
                      margin: [0, 0, 0, 10]
                    });
                    titleOfSubsection = true;
                  }

                  if (agentConfig) {
                    for (let agentConfigKey of Object.keys(agentConfig)) {
                      if (Array.isArray(agentConfig[agentConfigKey])) {
                        /* LOG COLLECTOR */
                        if (conf.filterBy) {
                          let groups = [];
                          agentConfig[agentConfigKey].forEach(obj => {
                            if (!groups[obj.logformat]) {
                              groups[obj.logformat] = [];
                            }

                            groups[obj.logformat].push(obj);
                          });
                          Object.keys(groups).forEach(group => {
                            let saveidx = 0;
                            groups[group].forEach((x, i) => {
                              if (Object.keys(x).length > Object.keys(groups[group][saveidx]).length) {
                                saveidx = i;
                              }
                            });
                            const columns = Object.keys(groups[group][saveidx]);
                            const rows = groups[group].map(x => {
                              let row = [];
                              columns.forEach(key => {
                                row.push(typeof x[key] !== 'object' ? x[key] : Array.isArray(x[key]) ? x[key].map(x => {
                                  return x + '\n';
                                }) : JSON.stringify(x[key]));
                              });
                              return row;
                            });
                            columns.forEach((col, i) => {
                              columns[i] = col[0].toUpperCase() + col.slice(1);
                            });
                            tables.push({
                              title: section.labels[0][group],
                              type: 'table',
                              columns,
                              rows
                            });
                          });
                        } else if (agentConfigKey.configuration !== 'socket') {
                          tables.push(...this.getConfigTables(agentConfig[agentConfigKey], section, idx));
                        } else {
                          for (let _d2 of agentConfig[agentConfigKey]) {
                            tables.push(...this.getConfigTables(_d2, section, idx));
                          }
                        }
                      } else {
                        /*INTEGRITY MONITORING MONITORED DIRECTORIES */
                        if (conf.matrix) {
                          const {
                            directories,
                            diff,
                            synchronization,
                            file_limit,
                            ...rest
                          } = agentConfig[agentConfigKey];
                          tables.push(...this.getConfigTables(rest, section, idx), ...(diff && diff.disk_quota ? this.getConfigTables(diff.disk_quota, {
                            tabs: ['Disk quota']
                          }, 0) : []), ...(diff && diff.file_size ? this.getConfigTables(diff.file_size, {
                            tabs: ['File size']
                          }, 0) : []), ...(synchronization ? this.getConfigTables(synchronization, {
                            tabs: ['Synchronization']
                          }, 0) : []), ...(file_limit ? this.getConfigTables(file_limit, {
                            tabs: ['File limit']
                          }, 0) : []));
                          let diffOpts = [];
                          Object.keys(section.opts).forEach(x => {
                            diffOpts.push(x);
                          });
                          const columns = ['', ...diffOpts.filter(x => x !== 'check_all' && x !== 'check_sum')];
                          let rows = [];
                          directories.forEach(x => {
                            let row = [];
                            row.push(x.dir);
                            columns.forEach(y => {
                              if (y !== '') {
                                row.push(x.opts.indexOf(y) > -1 ? 'yes' : 'no');
                              }
                            });
                            row.push(x.recursion_level);
                            rows.push(row);
                          });
                          columns.forEach((x, idx) => {
                            columns[idx] = section.opts[x];
                          });
                          columns.push('RL');
                          tables.push({
                            title: 'Monitored directories',
                            type: 'table',
                            columns,
                            rows
                          });
                        } else {
                          tables.push(...this.getConfigTables(agentConfig[agentConfigKey], section, idx));
                        }
                      }
                    }
                  } else {
                    // Print no configured module and link to the documentation
                    printer.addContent({
                      text: ['This module is not configured. Please take a look on how to configure it in ', {
                        text: `${section.subtitle.toLowerCase()} configuration.`,
                        link: section.docuLink,
                        style: {
                          fontSize: 12,
                          color: '#1a0dab'
                        }
                      }],
                      margin: [0, 0, 0, 20]
                    });
                  }
                } catch (error) {
                  (0, _logger.log)('reporting:report', error.message || error, 'debug');
                }

                idx++;
              }

              for (const table of tables) {
                printer.addConfigTables([table]);
              }
            }

            idxComponent++;
            tables = [];
          }
        }

        await printer.print(context.wazuhEndpointParams.pathFilename);
        return response.ok({
          body: {
            success: true,
            message: `Report ${context.wazuhEndpointParams.filename} was created`
          }
        });
      } catch (error) {
        (0, _logger.log)('reporting:createReportsAgentsConfiguration', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5029, 500, response);
      }
    }, ({
      params: {
        agentID
      }
    }) => `wazuh-agent-configuration-${agentID}-${this.generateReportTimestamp()}.pdf`));

    _defineProperty(this, "createReportsAgentsInventory", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:createReportsAgentsInventory', `Report started`, 'info');
        const {
          searchBar,
          filters,
          time,
          indexPatternTitle,
          apiId
        } = request.body;
        const {
          agentID
        } = request.params;
        const {
          from,
          to
        } = time || {}; // Init

        const printer = new _printer.ReportPrinter();
        const {
          hashUsername
        } = await context.wazuh.security.getCurrentUser(request, context);
        (0, _filesystem.createDataDirectoryIfNotExists)();
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH);
        (0, _filesystem.createDirectoryIfNotExists)(_path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, hashUsername));
        (0, _logger.log)('reporting:createReportsAgentsInventory', `Syscollector report`, 'debug');
        const sanitizedFilters = filters ? this.sanitizeKibanaFilters(filters, searchBar) : false; // Get the agent OS

        let agentOs = '';

        try {
          const agentResponse = await context.wazuh.api.client.asCurrentUser.request('GET', '/agents', {
            params: {
              q: `id=${agentID}`
            }
          }, {
            apiHostID: apiId
          });
          agentOs = agentResponse.data.data.affected_items[0].os.platform;
        } catch (error) {
          (0, _logger.log)('reporting:createReportsAgentsInventory', error.message || error, 'debug');
        } // Add title


        printer.addContentWithNewLine({
          text: 'Inventory data report',
          style: 'h1'
        }); // Add table with the agent info

        await this.buildAgentsTable(context, printer, [agentID], apiId); // Get syscollector packages and processes

        const agentRequestsInventory = [{
          endpoint: `/syscollector/${agentID}/packages`,
          loggerMessage: `Fetching packages for agent ${agentID}`,
          table: {
            title: 'Packages',
            columns: agentOs === 'windows' ? [{
              id: 'name',
              label: 'Name'
            }, {
              id: 'architecture',
              label: 'Architecture'
            }, {
              id: 'version',
              label: 'Version'
            }, {
              id: 'vendor',
              label: 'Vendor'
            }] : [{
              id: 'name',
              label: 'Name'
            }, {
              id: 'architecture',
              label: 'Architecture'
            }, {
              id: 'version',
              label: 'Version'
            }, {
              id: 'vendor',
              label: 'Vendor'
            }, {
              id: 'description',
              label: 'Description'
            }]
          }
        }, {
          endpoint: `/syscollector/${agentID}/processes`,
          loggerMessage: `Fetching processes for agent ${agentID}`,
          table: {
            title: 'Processes',
            columns: agentOs === 'windows' ? [{
              id: 'name',
              label: 'Name'
            }, {
              id: 'cmd',
              label: 'CMD'
            }, {
              id: 'priority',
              label: 'Priority'
            }, {
              id: 'nlwp',
              label: 'NLWP'
            }] : [{
              id: 'name',
              label: 'Name'
            }, {
              id: 'euser',
              label: 'Effective user'
            }, {
              id: 'nice',
              label: 'Priority'
            }, {
              id: 'state',
              label: 'State'
            }]
          },
          mapResponseItems: item => agentOs === 'windows' ? item : { ...item,
            state: _processStateEquivalence.default[item.state]
          }
        }, {
          endpoint: `/syscollector/${agentID}/ports`,
          loggerMessage: `Fetching ports for agent ${agentID}`,
          table: {
            title: 'Network ports',
            columns: agentOs === 'windows' ? [{
              id: 'local_ip',
              label: 'Local IP'
            }, {
              id: 'local_port',
              label: 'Local port'
            }, {
              id: 'process',
              label: 'Process'
            }, {
              id: 'state',
              label: 'State'
            }, {
              id: 'protocol',
              label: 'Protocol'
            }] : [{
              id: 'local_ip',
              label: 'Local IP'
            }, {
              id: 'local_port',
              label: 'Local port'
            }, {
              id: 'state',
              label: 'State'
            }, {
              id: 'protocol',
              label: 'Protocol'
            }]
          },
          mapResponseItems: item => ({ ...item,
            local_ip: item.local.ip,
            local_port: item.local.port
          })
        }, {
          endpoint: `/syscollector/${agentID}/netiface`,
          loggerMessage: `Fetching netiface for agent ${agentID}`,
          table: {
            title: 'Network interfaces',
            columns: [{
              id: 'name',
              label: 'Name'
            }, {
              id: 'mac',
              label: 'Mac'
            }, {
              id: 'state',
              label: 'State'
            }, {
              id: 'mtu',
              label: 'MTU'
            }, {
              id: 'type',
              label: 'Type'
            }]
          }
        }, {
          endpoint: `/syscollector/${agentID}/netaddr`,
          loggerMessage: `Fetching netaddr for agent ${agentID}`,
          table: {
            title: 'Network settings',
            columns: [{
              id: 'iface',
              label: 'Interface'
            }, {
              id: 'address',
              label: 'address'
            }, {
              id: 'netmask',
              label: 'Netmask'
            }, {
              id: 'proto',
              label: 'Protocol'
            }, {
              id: 'broadcast',
              label: 'Broadcast'
            }]
          }
        }];
        agentOs === 'windows' && agentRequestsInventory.push({
          endpoint: `/syscollector/${agentID}/hotfixes`,
          loggerMessage: `Fetching hotfixes for agent ${agentID}`,
          table: {
            title: 'Windows updates',
            columns: [{
              id: 'hotfix',
              label: 'Update code'
            }]
          }
        });

        const requestInventory = async agentRequestInventory => {
          try {
            (0, _logger.log)('reporting:createReportsAgentsInventory', agentRequestInventory.loggerMessage, 'debug');
            const inventoryResponse = await context.wazuh.api.client.asCurrentUser.request('GET', agentRequestInventory.endpoint, {}, {
              apiHostID: apiId
            });
            const inventory = inventoryResponse && inventoryResponse.data && inventoryResponse.data.data && inventoryResponse.data.data.affected_items;

            if (inventory) {
              return { ...agentRequestInventory.table,
                items: agentRequestInventory.mapResponseItems ? inventory.map(agentRequestInventory.mapResponseItems) : inventory
              };
            }
          } catch (error) {
            (0, _logger.log)('reporting:createReportsAgentsInventory', error.message || error, 'debug');
          }
        };

        if (time) {
          await this.extendedInformation(context, printer, 'agents', 'syscollector', apiId, from, to, sanitizedFilters + ' AND rule.groups: "vulnerability-detector"', indexPatternTitle, agentID);
        } // Add inventory tables


        (await Promise.all(agentRequestsInventory.map(requestInventory))).filter(table => table).forEach(table => printer.addSimpleTable(table)); // Print the document

        await printer.print(context.wazuhEndpointParams.pathFilename);
        return response.ok({
          body: {
            success: true,
            message: `Report ${context.wazuhEndpointParams.filename} was created`
          }
        });
      } catch (error) {
        (0, _logger.log)('reporting:createReportsAgents', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5029, 500, response);
      }
    }, ({
      params: {
        agentID
      }
    }) => `wazuh-agent-inventory-${agentID}-${this.generateReportTimestamp()}.pdf`));

    _defineProperty(this, "getReportByName", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:getReportByName', `Getting ${context.wazuhEndpointParams.pathFilename} report`, 'debug');

        const reportFileBuffer = _fs.default.readFileSync(context.wazuhEndpointParams.pathFilename);

        return response.ok({
          headers: {
            'Content-Type': 'application/pdf'
          },
          body: reportFileBuffer
        });
      } catch (error) {
        (0, _logger.log)('reporting:getReportByName', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5030, 500, response);
      }
    }, request => request.params.name));

    _defineProperty(this, "deleteReportByName", this.checkReportsUserDirectoryIsValidRouteDecorator(async (context, request, response) => {
      try {
        (0, _logger.log)('reporting:deleteReportByName', `Deleting ${context.wazuhEndpointParams.pathFilename} report`, 'debug');

        _fs.default.unlinkSync(context.wazuhEndpointParams.pathFilename);

        (0, _logger.log)('reporting:deleteReportByName', `${context.wazuhEndpointParams.pathFilename} report was deleted`, 'info');
        return response.ok({
          body: {
            error: 0
          }
        });
      } catch (error) {
        (0, _logger.log)('reporting:deleteReportByName', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5032, 500, response);
      }
    }, request => request.params.name));
  }
  /**
   * This do format to filters
   * @param {String} filters E.g: cluster.name: wazuh AND rule.groups: vulnerability
   * @param {String} searchBar search term
   */


  sanitizeKibanaFilters(filters, searchBar) {
    (0, _logger.log)('reporting:sanitizeKibanaFilters', `Started to sanitize filters`, 'info');
    (0, _logger.log)('reporting:sanitizeKibanaFilters', `filters: ${filters.length}, searchBar: ${searchBar}`, 'debug');
    let str = '';
    const agentsFilter = []; //separate agents filter

    filters = filters.filter(filter => {
      if (filter.meta.controlledBy === _constants.AUTHORIZED_AGENTS) {
        agentsFilter.push(filter);
        return false;
      }

      return filter;
    });
    const len = filters.length;

    for (let i = 0; i < len; i++) {
      const {
        negate,
        key,
        value,
        params,
        type
      } = filters[i].meta;
      str += `${negate ? 'NOT ' : ''}`;
      str += `${key}: `;
      str += `${type === 'range' ? `${params.gte}-${params.lt}` : type === 'phrases' ? '(' + params.join(" OR ") + ')' : type === 'exists' ? '*' : !!value ? value : (params || {}).query}`;
      str += `${i === len - 1 ? '' : ' AND '}`;
    }

    if (searchBar) {
      str += ` AND (${searchBar})`;
    }

    const agentsFilterStr = agentsFilter.map(filter => filter.meta.value).join(',');
    (0, _logger.log)('reporting:sanitizeKibanaFilters', `str: ${str}, agentsFilterStr: ${agentsFilterStr}`, 'debug');
    return [str, agentsFilterStr];
  }
  /**
   * This performs the rendering of given header
   * @param {String} printer section target
   * @param {String} section section target
   * @param {Object} tab tab target
   * @param {Boolean} isAgents is agents section
   * @param {String} apiId ID of API
   */


  async renderHeader(context, printer, section, tab, isAgents, apiId) {
    try {
      (0, _logger.log)('reporting:renderHeader', `section: ${section}, tab: ${tab}, isAgents: ${isAgents}, apiId: ${apiId}`, 'debug');

      if (section && typeof section === 'string') {
        if (!['agentConfig', 'groupConfig'].includes(section)) {
          printer.addContent({
            text: _wazuhModules.WAZUH_MODULES[tab].title + ' report',
            style: 'h1'
          });
        } else if (section === 'agentConfig') {
          printer.addContent({
            text: `Agent ${isAgents} configuration`,
            style: 'h1'
          });
        } else if (section === 'groupConfig') {
          printer.addContent({
            text: 'Agents in group',
            style: 'h1'
          });
        }

        printer.addNewLine();
      }

      if (isAgents && typeof isAgents === 'object') {
        await this.buildAgentsTable(context, printer, isAgents, apiId, section === 'groupConfig' ? tab : '');
      }

      if (isAgents && typeof isAgents === 'string') {
        const agentResponse = await context.wazuh.api.client.asCurrentUser.request('GET', `/agents`, {
          params: {
            agents_list: isAgents
          }
        }, {
          apiHostID: apiId
        });
        const agentData = agentResponse.data.data.affected_items[0];

        if (agentData && agentData.status !== _constants.API_NAME_AGENT_STATUS.ACTIVE) {
          printer.addContentWithNewLine({
            text: `Warning. Agent is ${(0, _wz_agent_status.agentStatusLabelByAgentStatus)(agentData.status).toLowerCase()}`,
            style: 'standard'
          });
        }

        await this.buildAgentsTable(context, printer, [isAgents], apiId);

        if (agentData && agentData.group) {
          const agentGroups = agentData.group.join(', ');
          printer.addContentWithNewLine({
            text: `Group${agentData.group.length > 1 ? 's' : ''}: ${agentGroups}`,
            style: 'standard'
          });
        }
      }

      if (_wazuhModules.WAZUH_MODULES[tab] && _wazuhModules.WAZUH_MODULES[tab].description) {
        printer.addContentWithNewLine({
          text: _wazuhModules.WAZUH_MODULES[tab].description,
          style: 'standard'
        });
      }
    } catch (error) {
      (0, _logger.log)('reporting:renderHeader', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * This build the agents table
   * @param {Array<Strings>} ids ids of agents
   * @param {String} apiId API id
   */


  async buildAgentsTable(context, printer, agentIDs, apiId, groupID = '') {
    const dateFormat = await context.core.uiSettings.client.get('dateFormat');
    if ((!agentIDs || !agentIDs.length) && !groupID) return;
    (0, _logger.log)('reporting:buildAgentsTable', `${agentIDs.length} agents for API ${apiId}`, 'info');

    try {
      let agentsData = [];

      if (groupID) {
        let totalAgentsInGroup = null;

        do {
          const {
            data: {
              data: {
                affected_items,
                total_affected_items
              }
            }
          } = await context.wazuh.api.client.asCurrentUser.request('GET', `/groups/${groupID}/agents`, {
            params: {
              offset: agentsData.length,
              select: 'dateAdd,id,ip,lastKeepAlive,manager,name,os.name,os.version,version'
            }
          }, {
            apiHostID: apiId
          });
          !totalAgentsInGroup && (totalAgentsInGroup = total_affected_items);
          agentsData = [...agentsData, ...affected_items];
        } while (agentsData.length < totalAgentsInGroup);
      } else {
        for (const agentID of agentIDs) {
          try {
            const {
              data: {
                data: {
                  affected_items: [agent]
                }
              }
            } = await context.wazuh.api.client.asCurrentUser.request('GET', `/agents`, {
              params: {
                q: `id=${agentID}`,
                select: 'dateAdd,id,ip,lastKeepAlive,manager,name,os.name,os.version,version'
              }
            }, {
              apiHostID: apiId
            });
            agentsData.push(agent);
          } catch (error) {
            (0, _logger.log)('reporting:buildAgentsTable', `Skip agent due to: ${error.message || error}`, 'debug');
          }
        }
      }

      if (agentsData.length) {
        // Print a table with agent/s information
        printer.addSimpleTable({
          columns: [{
            id: 'id',
            label: 'ID'
          }, {
            id: 'name',
            label: 'Name'
          }, {
            id: 'ip',
            label: 'IP'
          }, {
            id: 'version',
            label: 'Version'
          }, {
            id: 'manager',
            label: 'Manager'
          }, {
            id: 'os',
            label: 'OS'
          }, {
            id: 'dateAdd',
            label: 'Registration date'
          }, {
            id: 'lastKeepAlive',
            label: 'Last keep alive'
          }],
          items: agentsData.map(agent => {
            return { ...agent,
              os: agent.os && agent.os.name && agent.os.version ? `${agent.os.name} ${agent.os.version}` : '',
              lastKeepAlive: (0, _moment.default)(agent.lastKeepAlive).format(dateFormat),
              dateAdd: (0, _moment.default)(agent.dateAdd).format(dateFormat)
            };
          })
        });
      } else if (!agentsData.length && groupID) {
        // For group reports when there is no agents in the group
        printer.addContent({
          text: 'There are no agents in this group.',
          style: {
            fontSize: 12,
            color: '#000'
          }
        });
      }
    } catch (error) {
      (0, _logger.log)('reporting:buildAgentsTable', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * This load more information
   * @param {*} context Endpoint context
   * @param {*} printer printer instance
   * @param {String} section section target
   * @param {Object} tab tab target
   * @param {String} apiId ID of API
   * @param {Number} from Timestamp (ms) from
   * @param {Number} to Timestamp (ms) to
   * @param {String} filters E.g: cluster.name: wazuh AND rule.groups: vulnerability
   * @param {String} pattern
   * @param {Object} agent agent target
   * @returns {Object} Extended information
   */


  async extendedInformation(context, printer, section, tab, apiId, from, to, filters, pattern = _constants.WAZUH_ALERTS_PATTERN, agent = null) {
    try {
      (0, _logger.log)('reporting:extendedInformation', `Section ${section} and tab ${tab}, API is ${apiId}. From ${from} to ${to}. Filters ${filters}. Index pattern ${pattern}`, 'info');

      if (section === 'agents' && !agent) {
        throw new Error('Reporting for specific agent needs an agent ID in order to work properly');
      }

      const agents = await context.wazuh.api.client.asCurrentUser.request('GET', '/agents', {
        params: {
          limit: 1
        }
      }, {
        apiHostID: apiId
      });
      const totalAgents = agents.data.data.total_affected_items;

      if (section === 'overview' && tab === 'vuls') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching overview vulnerability detector metrics', 'debug');
        const vulnerabilitiesLevels = ['Low', 'Medium', 'High', 'Critical'];
        const vulnerabilitiesResponsesCount = (await Promise.all(vulnerabilitiesLevels.map(async vulnerabilitiesLevel => {
          try {
            const count = await VulnerabilityRequest.uniqueSeverityCount(context, from, to, vulnerabilitiesLevel, filters, pattern);
            return count ? `${count} of ${totalAgents} agents have ${vulnerabilitiesLevel.toLocaleLowerCase()} vulnerabilities.` : undefined;
          } catch (error) {}
        }))).filter(vulnerabilitiesResponse => vulnerabilitiesResponse);
        printer.addList({
          title: {
            text: 'Summary',
            style: 'h2'
          },
          list: vulnerabilitiesResponsesCount
        });
        (0, _logger.log)('reporting:extendedInformation', 'Fetching overview vulnerability detector top 3 agents by category', 'debug');
        const lowRank = await VulnerabilityRequest.topAgentCount(context, from, to, 'Low', filters, pattern);
        const mediumRank = await VulnerabilityRequest.topAgentCount(context, from, to, 'Medium', filters, pattern);
        const highRank = await VulnerabilityRequest.topAgentCount(context, from, to, 'High', filters, pattern);
        const criticalRank = await VulnerabilityRequest.topAgentCount(context, from, to, 'Critical', filters, pattern);
        (0, _logger.log)('reporting:extendedInformation', 'Adding overview vulnerability detector top 3 agents by category', 'debug');

        if (criticalRank && criticalRank.length) {
          printer.addContentWithNewLine({
            text: 'Top 3 agents with critical severity vulnerabilities',
            style: 'h3'
          });
          await this.buildAgentsTable(context, printer, criticalRank, apiId);
          printer.addNewLine();
        }

        if (highRank && highRank.length) {
          printer.addContentWithNewLine({
            text: 'Top 3 agents with high severity vulnerabilities',
            style: 'h3'
          });
          await this.buildAgentsTable(context, printer, highRank, apiId);
          printer.addNewLine();
        }

        if (mediumRank && mediumRank.length) {
          printer.addContentWithNewLine({
            text: 'Top 3 agents with medium severity vulnerabilities',
            style: 'h3'
          });
          await this.buildAgentsTable(context, printer, mediumRank, apiId);
          printer.addNewLine();
        }

        if (lowRank && lowRank.length) {
          printer.addContentWithNewLine({
            text: 'Top 3 agents with low severity vulnerabilities',
            style: 'h3'
          });
          await this.buildAgentsTable(context, printer, lowRank, apiId);
          printer.addNewLine();
        }

        (0, _logger.log)('reporting:extendedInformation', 'Fetching overview vulnerability detector top 3 CVEs', 'debug');
        const cveRank = await VulnerabilityRequest.topCVECount(context, from, to, filters, pattern);
        (0, _logger.log)('reporting:extendedInformation', 'Adding overview vulnerability detector top 3 CVEs', 'debug');

        if (cveRank && cveRank.length) {
          printer.addSimpleTable({
            title: {
              text: 'Top 3 CVE',
              style: 'h2'
            },
            columns: [{
              id: 'top',
              label: 'Top'
            }, {
              id: 'cve',
              label: 'CVE'
            }],
            items: cveRank.map(item => ({
              top: cveRank.indexOf(item) + 1,
              cve: item
            }))
          });
        }
      }

      if (section === 'overview' && tab === 'general') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching top 3 agents with level 15 alerts', 'debug');
        const level15Rank = await OverviewRequest.topLevel15(context, from, to, filters, pattern);
        (0, _logger.log)('reporting:extendedInformation', 'Adding top 3 agents with level 15 alerts', 'debug');

        if (level15Rank.length) {
          printer.addContent({
            text: 'Top 3 agents with level 15 alerts',
            style: 'h2'
          });
          await this.buildAgentsTable(context, printer, level15Rank, apiId);
        }
      }

      if (section === 'overview' && tab === 'pm') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching most common rootkits', 'debug');
        const top5RootkitsRank = await RootcheckRequest.top5RootkitsDetected(context, from, to, filters, pattern);
        (0, _logger.log)('reporting:extendedInformation', 'Adding most common rootkits', 'debug');

        if (top5RootkitsRank && top5RootkitsRank.length) {
          printer.addContentWithNewLine({
            text: 'Most common rootkits found among your agents',
            style: 'h2'
          }).addContentWithNewLine({
            text: 'Rootkits are a set of software tools that enable an unauthorized user to gain control of a computer system without being detected.',
            style: 'standard'
          }).addSimpleTable({
            items: top5RootkitsRank.map(item => {
              return {
                top: top5RootkitsRank.indexOf(item) + 1,
                name: item
              };
            }),
            columns: [{
              id: 'top',
              label: 'Top'
            }, {
              id: 'name',
              label: 'Rootkit'
            }]
          });
        }

        (0, _logger.log)('reporting:extendedInformation', 'Fetching hidden pids', 'debug');
        const hiddenPids = await RootcheckRequest.agentsWithHiddenPids(context, from, to, filters, pattern);
        hiddenPids && printer.addContent({
          text: `${hiddenPids} of ${totalAgents} agents have hidden processes`,
          style: 'h3'
        });
        !hiddenPids && printer.addContentWithNewLine({
          text: `No agents have hidden processes`,
          style: 'h3'
        });
        const hiddenPorts = await RootcheckRequest.agentsWithHiddenPorts(context, from, to, filters, pattern);
        hiddenPorts && printer.addContent({
          text: `${hiddenPorts} of ${totalAgents} agents have hidden ports`,
          style: 'h3'
        });
        !hiddenPorts && printer.addContent({
          text: `No agents have hidden ports`,
          style: 'h3'
        });
        printer.addNewLine();
      }

      if (['overview', 'agents'].includes(section) && tab === 'pci') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching top PCI DSS requirements', 'debug');
        const topPciRequirements = await PCIRequest.topPCIRequirements(context, from, to, filters, pattern);
        printer.addContentWithNewLine({
          text: 'Most common PCI DSS requirements alerts found',
          style: 'h2'
        });

        for (const item of topPciRequirements) {
          const rules = await PCIRequest.getRulesByRequirement(context, from, to, filters, item, pattern);
          printer.addContentWithNewLine({
            text: `Requirement ${item}`,
            style: 'h3'
          });

          if (_pciRequirementsPdfmake.default[item]) {
            const content = typeof _pciRequirementsPdfmake.default[item] === 'string' ? {
              text: _pciRequirementsPdfmake.default[item],
              style: 'standard'
            } : _pciRequirementsPdfmake.default[item];
            printer.addContentWithNewLine(content);
          }

          rules && rules.length && printer.addSimpleTable({
            columns: [{
              id: 'ruleID',
              label: 'Rule ID'
            }, {
              id: 'ruleDescription',
              label: 'Description'
            }],
            items: rules,
            title: `Top rules for ${item} requirement`
          });
        }
      }

      if (['overview', 'agents'].includes(section) && tab === 'tsc') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching top TSC requirements', 'debug');
        const topTSCRequirements = await TSCRequest.topTSCRequirements(context, from, to, filters, pattern);
        printer.addContentWithNewLine({
          text: 'Most common TSC requirements alerts found',
          style: 'h2'
        });

        for (const item of topTSCRequirements) {
          const rules = await TSCRequest.getRulesByRequirement(context, from, to, filters, item, pattern);
          printer.addContentWithNewLine({
            text: `Requirement ${item}`,
            style: 'h3'
          });

          if (_tscRequirementsPdfmake.default[item]) {
            const content = typeof _tscRequirementsPdfmake.default[item] === 'string' ? {
              text: _tscRequirementsPdfmake.default[item],
              style: 'standard'
            } : _tscRequirementsPdfmake.default[item];
            printer.addContentWithNewLine(content);
          }

          rules && rules.length && printer.addSimpleTable({
            columns: [{
              id: 'ruleID',
              label: 'Rule ID'
            }, {
              id: 'ruleDescription',
              label: 'Description'
            }],
            items: rules,
            title: `Top rules for ${item} requirement`
          });
        }
      }

      if (['overview', 'agents'].includes(section) && tab === 'gdpr') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching top GDPR requirements', 'debug');
        const topGdprRequirements = await GDPRRequest.topGDPRRequirements(context, from, to, filters, pattern);
        printer.addContentWithNewLine({
          text: 'Most common GDPR requirements alerts found',
          style: 'h2'
        });

        for (const item of topGdprRequirements) {
          const rules = await GDPRRequest.getRulesByRequirement(context, from, to, filters, item, pattern);
          printer.addContentWithNewLine({
            text: `Requirement ${item}`,
            style: 'h3'
          });

          if (_gdprRequirementsPdfmake.default && _gdprRequirementsPdfmake.default[item]) {
            const content = typeof _gdprRequirementsPdfmake.default[item] === 'string' ? {
              text: _gdprRequirementsPdfmake.default[item],
              style: 'standard'
            } : _gdprRequirementsPdfmake.default[item];
            printer.addContentWithNewLine(content);
          }

          rules && rules.length && printer.addSimpleTable({
            columns: [{
              id: 'ruleID',
              label: 'Rule ID'
            }, {
              id: 'ruleDescription',
              label: 'Description'
            }],
            items: rules,
            title: `Top rules for ${item} requirement`
          });
        }

        printer.addNewLine();
      }

      if (section === 'overview' && tab === 'audit') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching agents with high number of failed sudo commands', 'debug');
        const auditAgentsNonSuccess = await AuditRequest.getTop3AgentsSudoNonSuccessful(context, from, to, filters, pattern);

        if (auditAgentsNonSuccess && auditAgentsNonSuccess.length) {
          printer.addContent({
            text: 'Agents with high number of failed sudo commands',
            style: 'h2'
          });
          await this.buildAgentsTable(context, printer, auditAgentsNonSuccess, apiId);
        }

        const auditAgentsFailedSyscall = await AuditRequest.getTop3AgentsFailedSyscalls(context, from, to, filters, pattern);

        if (auditAgentsFailedSyscall && auditAgentsFailedSyscall.length) {
          printer.addSimpleTable({
            columns: [{
              id: 'agent',
              label: 'Agent ID'
            }, {
              id: 'syscall_id',
              label: 'Syscall ID'
            }, {
              id: 'syscall_syscall',
              label: 'Syscall'
            }],
            items: auditAgentsFailedSyscall.map(item => ({
              agent: item.agent,
              syscall_id: item.syscall.id,
              syscall_syscall: item.syscall.syscall
            })),
            title: {
              text: 'Most common failing syscalls',
              style: 'h2'
            }
          });
        }
      }

      if (section === 'overview' && tab === 'fim') {
        (0, _logger.log)('reporting:extendedInformation', 'Fetching top 3 rules for FIM', 'debug');
        const rules = await SyscheckRequest.top3Rules(context, from, to, filters, pattern);

        if (rules && rules.length) {
          printer.addContentWithNewLine({
            text: 'Top 3 FIM rules',
            style: 'h2'
          }).addSimpleTable({
            columns: [{
              id: 'ruleID',
              label: 'Rule ID'
            }, {
              id: 'ruleDescription',
              label: 'Description'
            }],
            items: rules,
            title: {
              text: 'Top 3 rules that are generating most alerts.',
              style: 'standard'
            }
          });
        }

        (0, _logger.log)('reporting:extendedInformation', 'Fetching top 3 agents for FIM', 'debug');
        const agents = await SyscheckRequest.top3agents(context, from, to, filters, pattern);

        if (agents && agents.length) {
          printer.addContentWithNewLine({
            text: 'Agents with suspicious FIM activity',
            style: 'h2'
          });
          printer.addContentWithNewLine({
            text: 'Top 3 agents that have most FIM alerts from level 7 to level 15. Take care about them.',
            style: 'standard'
          });
          await this.buildAgentsTable(context, printer, agents, apiId);
        }
      }

      if (section === 'agents' && tab === 'audit') {
        (0, _logger.log)('reporting:extendedInformation', `Fetching most common failed syscalls`, 'debug');
        const auditFailedSyscall = await AuditRequest.getTopFailedSyscalls(context, from, to, filters, pattern);
        auditFailedSyscall && auditFailedSyscall.length && printer.addSimpleTable({
          columns: [{
            id: 'id',
            label: 'id'
          }, {
            id: 'syscall',
            label: 'Syscall'
          }],
          items: auditFailedSyscall,
          title: 'Most common failing syscalls'
        });
      }

      if (section === 'agents' && tab === 'fim') {
        (0, _logger.log)('reporting:extendedInformation', `Fetching syscheck database for agent ${agent}`, 'debug');
        const lastScanResponse = await context.wazuh.api.client.asCurrentUser.request('GET', `/syscheck/${agent}/last_scan`, {}, {
          apiHostID: apiId
        });

        if (lastScanResponse && lastScanResponse.data) {
          const lastScanData = lastScanResponse.data.data.affected_items[0];

          if (lastScanData.start && lastScanData.end) {
            printer.addContent({
              text: `Last file integrity monitoring scan was executed from ${lastScanData.start} to ${lastScanData.end}.`
            });
          } else if (lastScanData.start) {
            printer.addContent({
              text: `File integrity monitoring scan is currently in progress for this agent (started on ${lastScanData.start}).`
            });
          } else {
            printer.addContent({
              text: `File integrity monitoring scan is currently in progress for this agent.`
            });
          }

          printer.addNewLine();
        }

        (0, _logger.log)('reporting:extendedInformation', `Fetching last 10 deleted files for FIM`, 'debug');
        const lastTenDeleted = await SyscheckRequest.lastTenDeletedFiles(context, from, to, filters, pattern);
        lastTenDeleted && lastTenDeleted.length && printer.addSimpleTable({
          columns: [{
            id: 'path',
            label: 'Path'
          }, {
            id: 'date',
            label: 'Date'
          }],
          items: lastTenDeleted,
          title: 'Last 10 deleted files'
        });
        (0, _logger.log)('reporting:extendedInformation', `Fetching last 10 modified files`, 'debug');
        const lastTenModified = await SyscheckRequest.lastTenModifiedFiles(context, from, to, filters, pattern);
        lastTenModified && lastTenModified.length && printer.addSimpleTable({
          columns: [{
            id: 'path',
            label: 'Path'
          }, {
            id: 'date',
            label: 'Date'
          }],
          items: lastTenModified,
          title: 'Last 10 modified files'
        });
      }

      if (section === 'agents' && tab === 'syscollector') {
        (0, _logger.log)('reporting:extendedInformation', `Fetching hardware information for agent ${agent}`, 'debug');
        const requestsSyscollectorLists = [{
          endpoint: `/syscollector/${agent}/hardware`,
          loggerMessage: `Fetching Hardware information for agent ${agent}`,
          list: {
            title: {
              text: 'Hardware information',
              style: 'h2'
            }
          },
          mapResponse: hardware => [hardware.cpu && hardware.cpu.cores && `${hardware.cpu.cores} cores`, hardware.cpu && hardware.cpu.name, hardware.ram && hardware.ram.total && `${Number(hardware.ram.total / 1024 / 1024).toFixed(2)}GB RAM`]
        }, {
          endpoint: `/syscollector/${agent}/os`,
          loggerMessage: `Fetching OS information for agent ${agent}`,
          list: {
            title: {
              text: 'OS information',
              style: 'h2'
            }
          },
          mapResponse: osData => [osData.sysname, osData.version, osData.architecture, osData.release, osData.os && osData.os.name && osData.os.version && `${osData.os.name} ${osData.os.version}`]
        }];
        const syscollectorLists = await Promise.all(requestsSyscollectorLists.map(async requestSyscollector => {
          try {
            (0, _logger.log)('reporting:extendedInformation', requestSyscollector.loggerMessage, 'debug');
            const responseSyscollector = await context.wazuh.api.client.asCurrentUser.request('GET', requestSyscollector.endpoint, {}, {
              apiHostID: apiId
            });
            const [data] = responseSyscollector && responseSyscollector.data && responseSyscollector.data.data && responseSyscollector.data.data.affected_items || [];

            if (data) {
              return { ...requestSyscollector.list,
                list: requestSyscollector.mapResponse(data)
              };
            }
          } catch (error) {
            (0, _logger.log)('reporting:extendedInformation', error.message || error);
          }
        }));

        if (syscollectorLists) {
          syscollectorLists.filter(syscollectorList => syscollectorList).forEach(syscollectorList => printer.addList(syscollectorList));
        }

        const vulnerabilitiesRequests = ['Critical', 'High'];
        const vulnerabilitiesResponsesItems = (await Promise.all(vulnerabilitiesRequests.map(async vulnerabilitiesLevel => {
          try {
            (0, _logger.log)('reporting:extendedInformation', `Fetching top ${vulnerabilitiesLevel} packages`, 'debug');
            return await VulnerabilityRequest.topPackages(context, from, to, vulnerabilitiesLevel, filters, pattern);
          } catch (error) {
            (0, _logger.log)('reporting:extendedInformation', error.message || error);
          }
        }))).filter(vulnerabilitiesResponse => vulnerabilitiesResponse).flat();

        if (vulnerabilitiesResponsesItems && vulnerabilitiesResponsesItems.length) {
          printer.addSimpleTable({
            title: {
              text: 'Vulnerable packages found (last 24 hours)',
              style: 'h2'
            },
            columns: [{
              id: 'package',
              label: 'Package'
            }, {
              id: 'severity',
              label: 'Severity'
            }],
            items: vulnerabilitiesResponsesItems
          });
        }
      }

      if (section === 'agents' && tab === 'vuls') {
        const topCriticalPackages = await VulnerabilityRequest.topPackagesWithCVE(context, from, to, 'Critical', filters, pattern);

        if (topCriticalPackages && topCriticalPackages.length) {
          printer.addContentWithNewLine({
            text: 'Critical severity',
            style: 'h2'
          });
          printer.addContentWithNewLine({
            text: 'These vulnerabilties are critical, please review your agent. Click on each link to read more about each found vulnerability.',
            style: 'standard'
          });
          const customul = [];

          for (const critical of topCriticalPackages) {
            customul.push({
              text: critical.package,
              style: 'standard'
            });
            customul.push({
              ul: critical.references.map(item => ({
                text: item.substring(0, 80) + '...',
                link: item,
                color: '#1EA5C8'
              }))
            });
          }

          printer.addContentWithNewLine({
            ul: customul
          });
        }

        const topHighPackages = await VulnerabilityRequest.topPackagesWithCVE(context, from, to, 'High', filters, pattern);

        if (topHighPackages && topHighPackages.length) {
          printer.addContentWithNewLine({
            text: 'High severity',
            style: 'h2'
          });
          printer.addContentWithNewLine({
            text: 'Click on each link to read more about each found vulnerability.',
            style: 'standard'
          });
          const customul = [];

          for (const critical of topHighPackages) {
            customul.push({
              text: critical.package,
              style: 'standard'
            });
            customul.push({
              ul: critical.references.map(item => ({
                text: item,
                color: '#1EA5C8'
              }))
            });
          }

          customul && customul.length && printer.addContent({
            ul: customul
          });
          printer.addNewLine();
        }
      }

      return false;
    } catch (error) {
      (0, _logger.log)('reporting:extendedInformation', error.message || error);
      return Promise.reject(error);
    }
  }

  getConfigRows(data, labels) {
    (0, _logger.log)('reporting:getConfigRows', `Building configuration rows`, 'info');
    const result = [];

    for (let prop in data || []) {
      if (Array.isArray(data[prop])) {
        data[prop].forEach((x, idx) => {
          if (typeof x === 'object') data[prop][idx] = JSON.stringify(x);
        });
      }

      result.push([(labels || {})[prop] || _csvKeyEquivalence.KeyEquivalence[prop] || prop, data[prop] || '-']);
    }

    return result;
  }

  getConfigTables(data, section, tab, array = []) {
    (0, _logger.log)('reporting:getConfigTables', `Building configuration tables`, 'info');
    let plainData = {};
    const nestedData = [];
    const tableData = [];

    if (data.length === 1 && Array.isArray(data)) {
      tableData[section.config[tab].configuration] = data;
    } else {
      for (let key in data) {
        if (typeof data[key] !== 'object' && !Array.isArray(data[key]) || Array.isArray(data[key]) && typeof data[key][0] !== 'object') {
          plainData[key] = Array.isArray(data[key]) && typeof data[key][0] !== 'object' ? data[key].map(x => {
            return typeof x === 'object' ? JSON.stringify(x) : x + '\n';
          }) : data[key];
        } else if (Array.isArray(data[key]) && typeof data[key][0] === 'object') {
          tableData[key] = data[key];
        } else {
          if (section.isGroupConfig && ['pack', 'content'].includes(key)) {
            tableData[key] = [data[key]];
          } else {
            nestedData.push(data[key]);
          }
        }
      }
    }

    array.push({
      title: (section.options || {}).hideHeader ? '' : (section.tabs || [])[tab] || (section.isGroupConfig ? ((section.labels || [])[0] || [])[tab] : ''),
      columns: ['', ''],
      type: 'config',
      rows: this.getConfigRows(plainData, (section.labels || [])[0])
    });

    for (let key in tableData) {
      const columns = Object.keys(tableData[key][0]);
      columns.forEach((col, i) => {
        columns[i] = col[0].toUpperCase() + col.slice(1);
      });
      const rows = tableData[key].map(x => {
        let row = [];

        for (let key in x) {
          row.push(typeof x[key] !== 'object' ? x[key] : Array.isArray(x[key]) ? x[key].map(x => {
            return x + '\n';
          }) : JSON.stringify(x[key]));
        }

        while (row.length < columns.length) {
          row.push('-');
        }

        return row;
      });
      array.push({
        title: ((section.labels || [])[0] || [])[key] || '',
        type: 'table',
        columns,
        rows
      });
    }

    nestedData.forEach(nest => {
      this.getConfigTables(nest, section, tab + 1, array);
    });
    return array;
  }
  /**
   * Create a report for the modules
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {*} reports list or ErrorResponse
   */


  /**
   * Fetch the reports list
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Array<Object>} reports list or ErrorResponse
   */
  async getReports(context, request, response) {
    try {
      (0, _logger.log)('reporting:getReports', `Fetching created reports`, 'info');
      const {
        hashUsername
      } = await context.wazuh.security.getCurrentUser(request, context);
      (0, _filesystem.createDataDirectoryIfNotExists)();
      (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_DIRECTORY_PATH);
      (0, _filesystem.createDirectoryIfNotExists)(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH);

      const userReportsDirectoryPath = _path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, hashUsername);

      (0, _filesystem.createDirectoryIfNotExists)(userReportsDirectoryPath);
      (0, _logger.log)('reporting:getReports', `Directory: ${userReportsDirectoryPath}`, 'debug');

      const sortReportsByDate = (a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0;

      const reports = _fs.default.readdirSync(userReportsDirectoryPath).map(file => {
        const stats = _fs.default.statSync(userReportsDirectoryPath + '/' + file); // Get the file creation time (bithtime). It returns the first value that is a truthy value of next file stats: birthtime, mtime, ctime and atime.
        // This solves some OSs can have the bithtimeMs equal to 0 and returns the date like 1970-01-01


        const birthTimeField = ['birthtime', 'mtime', 'ctime', 'atime'].find(time => stats[`${time}Ms`]);
        return {
          name: file,
          size: stats.size,
          date: stats[birthTimeField]
        };
      });

      (0, _logger.log)('reporting:getReports', `Using TimSort for sorting ${reports.length} items`, 'debug');
      TimSort.sort(reports, sortReportsByDate);
      (0, _logger.log)('reporting:getReports', `Total reports: ${reports.length}`, 'debug');
      return response.ok({
        body: {
          reports
        }
      });
    } catch (error) {
      (0, _logger.log)('reporting:getReports', error.message || error);
      return (0, _errorResponse.ErrorResponse)(error.message || error, 5031, 500, response);
    }
  }
  /**
   * Fetch specific report
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} report or ErrorResponse
   */


  checkReportsUserDirectoryIsValidRouteDecorator(routeHandler, reportFileNameAccessor) {
    return async (context, request, response) => {
      try {
        const {
          username,
          hashUsername
        } = await context.wazuh.security.getCurrentUser(request, context);

        const userReportsDirectoryPath = _path.default.join(_constants.WAZUH_DATA_DOWNLOADS_REPORTS_DIRECTORY_PATH, hashUsername);

        const filename = reportFileNameAccessor(request);

        const pathFilename = _path.default.join(userReportsDirectoryPath, filename);

        (0, _logger.log)('reporting:checkReportsUserDirectoryIsValidRouteDecorator', `Checking the user ${username}(${hashUsername}) can do actions in the reports file: ${pathFilename}`, 'debug');

        if (!pathFilename.startsWith(userReportsDirectoryPath) || pathFilename.includes('../')) {
          (0, _logger.log)('security:reporting:checkReportsUserDirectoryIsValidRouteDecorator', `User ${username}(${hashUsername}) tried to access to a non user report file: ${pathFilename}`, 'warn');
          return response.badRequest({
            body: {
              message: '5040 - You shall not pass!'
            }
          });
        }

        ;
        (0, _logger.log)('reporting:checkReportsUserDirectoryIsValidRouteDecorator', 'Checking the user can do actions in the reports file', 'debug');
        return await routeHandler.bind(this)({ ...context,
          wazuhEndpointParams: {
            hashUsername,
            filename,
            pathFilename
          }
        }, request, response);
      } catch (error) {
        (0, _logger.log)('reporting:checkReportsUserDirectoryIsValidRouteDecorator', error.message || error);
        return (0, _errorResponse.ErrorResponse)(error.message || error, 5040, 500, response);
      }
    };
  }

  generateReportTimestamp() {
    return `${Date.now() / 1000 | 0}`;
  }

}

exports.WazuhReportingCtrl = WazuhReportingCtrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhenVoLXJlcG9ydGluZy50cyJdLCJuYW1lcyI6WyJXYXp1aFJlcG9ydGluZ0N0cmwiLCJjb25zdHJ1Y3RvciIsImNoZWNrUmVwb3J0c1VzZXJEaXJlY3RvcnlJc1ZhbGlkUm91dGVEZWNvcmF0b3IiLCJjb250ZXh0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYXJyYXkiLCJhZ2VudHMiLCJicm93c2VyVGltZXpvbmUiLCJzZWFyY2hCYXIiLCJmaWx0ZXJzIiwidGltZSIsInRhYmxlcyIsInNlY3Rpb24iLCJpbmRleFBhdHRlcm5UaXRsZSIsImFwaUlkIiwiYm9keSIsIm1vZHVsZUlEIiwicGFyYW1zIiwiZnJvbSIsInRvIiwicHJpbnRlciIsIlJlcG9ydFByaW50ZXIiLCJXQVpVSF9EQVRBX0RPV05MT0FEU19ESVJFQ1RPUllfUEFUSCIsIldBWlVIX0RBVEFfRE9XTkxPQURTX1JFUE9SVFNfRElSRUNUT1JZX1BBVEgiLCJwYXRoIiwiam9pbiIsIndhenVoRW5kcG9pbnRQYXJhbXMiLCJoYXNoVXNlcm5hbWUiLCJyZW5kZXJIZWFkZXIiLCJzYW5pdGl6ZWRGaWx0ZXJzIiwiYWdlbnRzRmlsdGVyIiwic2FuaXRpemVLaWJhbmFGaWx0ZXJzIiwiYWRkVGltZVJhbmdlQW5kRmlsdGVycyIsImV4dGVuZGVkSW5mb3JtYXRpb24iLCJEYXRlIiwiZ2V0VGltZSIsImFkZFZpc3VhbGl6YXRpb25zIiwiYWRkVGFibGVzIiwiYWRkQWdlbnRzRmlsdGVycyIsInByaW50IiwicGF0aEZpbGVuYW1lIiwib2siLCJzdWNjZXNzIiwibWVzc2FnZSIsImZpbGVuYW1lIiwiZXJyb3IiLCJnZW5lcmF0ZVJlcG9ydFRpbWVzdGFtcCIsImNvbXBvbmVudHMiLCJncm91cElEIiwiZXF1aXZhbGVuY2VzIiwibG9jYWxmaWxlIiwib3NxdWVyeSIsImNvbW1hbmQiLCJzeXNjaGVjayIsInN5c2NvbGxlY3RvciIsInJvb3RjaGVjayIsImxhYmVscyIsInNjYSIsImFkZENvbnRlbnQiLCJ0ZXh0Iiwic3R5bGUiLCJkYXRhIiwiY29uZmlndXJhdGlvbiIsIndhenVoIiwiYXBpIiwiY2xpZW50IiwiYXNDdXJyZW50VXNlciIsImFwaUhvc3RJRCIsImFmZmVjdGVkX2l0ZW1zIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImNvbmZpZyIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJnaW4iLCJpc0dyb3VwQ29uZmlnIiwiZmlsdGVyVGl0bGUiLCJpbmRleCIsImZpbHRlciIsImNvbmNhdCIsImlkeCIsInRhYnMiLCJfZCIsImMiLCJBZ2VudENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmF0aW9ucyIsInMiLCJzZWN0aW9ucyIsIm9wdHMiLCJjbiIsIndvIiwid29kbGUiLCJuYW1lIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImdyb3VwcyIsImZvckVhY2giLCJvYmoiLCJsb2dmb3JtYXQiLCJncm91cCIsInNhdmVpZHgiLCJ4IiwiaSIsImNvbHVtbnMiLCJyb3dzIiwibWFwIiwicm93Iiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0aXRsZSIsInR5cGUiLCJsYWJlbCIsImluY2x1ZGVzIiwiX2QyIiwiZ2V0Q29uZmlnVGFibGVzIiwiZGlyZWN0b3JpZXMiLCJkaWZmT3B0cyIsInkiLCJyZWN1cnNpb25fbGV2ZWwiLCJ0YWJsZSIsImFkZENvbmZpZ1RhYmxlcyIsImFnZW50SUQiLCJ3bW9kdWxlc1Jlc3BvbnNlIiwiaWR4Q29tcG9uZW50IiwidGl0bGVPZlNlY3Rpb24iLCJ0aXRsZU9mU3Vic2VjdGlvbiIsImNvbmZpZ3MiLCJjb25mIiwiYWdlbnRDb25maWdSZXNwb25zZSIsImNvbXBvbmVudCIsImFnZW50Q29uZmlnIiwic3VidGl0bGUiLCJkZXNjIiwiYWdlbnRDb25maWdLZXkiLCJmaWx0ZXJCeSIsIm1hdHJpeCIsImRpZmYiLCJzeW5jaHJvbml6YXRpb24iLCJmaWxlX2xpbWl0IiwicmVzdCIsImRpc2tfcXVvdGEiLCJmaWxlX3NpemUiLCJkaXIiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJsaW5rIiwiZG9jdUxpbmsiLCJzZWN1cml0eSIsImdldEN1cnJlbnRVc2VyIiwiYWdlbnRPcyIsImFnZW50UmVzcG9uc2UiLCJxIiwib3MiLCJwbGF0Zm9ybSIsImFkZENvbnRlbnRXaXRoTmV3TGluZSIsImJ1aWxkQWdlbnRzVGFibGUiLCJhZ2VudFJlcXVlc3RzSW52ZW50b3J5IiwiZW5kcG9pbnQiLCJsb2dnZXJNZXNzYWdlIiwiaWQiLCJtYXBSZXNwb25zZUl0ZW1zIiwiaXRlbSIsInN0YXRlIiwiUHJvY2Vzc0VxdWl2YWxlbmNlIiwibG9jYWxfaXAiLCJsb2NhbCIsImlwIiwibG9jYWxfcG9ydCIsInBvcnQiLCJyZXF1ZXN0SW52ZW50b3J5IiwiYWdlbnRSZXF1ZXN0SW52ZW50b3J5IiwiaW52ZW50b3J5UmVzcG9uc2UiLCJpbnZlbnRvcnkiLCJpdGVtcyIsIlByb21pc2UiLCJhbGwiLCJhZGRTaW1wbGVUYWJsZSIsInJlcG9ydEZpbGVCdWZmZXIiLCJmcyIsInJlYWRGaWxlU3luYyIsImhlYWRlcnMiLCJ1bmxpbmtTeW5jIiwic3RyIiwibWV0YSIsImNvbnRyb2xsZWRCeSIsIkFVVEhPUklaRURfQUdFTlRTIiwibGVuIiwibmVnYXRlIiwidmFsdWUiLCJndGUiLCJsdCIsInF1ZXJ5IiwiYWdlbnRzRmlsdGVyU3RyIiwidGFiIiwiaXNBZ2VudHMiLCJXQVpVSF9NT0RVTEVTIiwiYWRkTmV3TGluZSIsImFnZW50c19saXN0IiwiYWdlbnREYXRhIiwic3RhdHVzIiwiQVBJX05BTUVfQUdFTlRfU1RBVFVTIiwiQUNUSVZFIiwiYWdlbnRHcm91cHMiLCJkZXNjcmlwdGlvbiIsInJlamVjdCIsImFnZW50SURzIiwiZGF0ZUZvcm1hdCIsImNvcmUiLCJ1aVNldHRpbmdzIiwiZ2V0IiwiYWdlbnRzRGF0YSIsInRvdGFsQWdlbnRzSW5Hcm91cCIsInRvdGFsX2FmZmVjdGVkX2l0ZW1zIiwib2Zmc2V0Iiwic2VsZWN0IiwiYWdlbnQiLCJ2ZXJzaW9uIiwibGFzdEtlZXBBbGl2ZSIsImZvcm1hdCIsImRhdGVBZGQiLCJwYXR0ZXJuIiwiV0FaVUhfQUxFUlRTX1BBVFRFUk4iLCJFcnJvciIsImxpbWl0IiwidG90YWxBZ2VudHMiLCJ2dWxuZXJhYmlsaXRpZXNMZXZlbHMiLCJ2dWxuZXJhYmlsaXRpZXNSZXNwb25zZXNDb3VudCIsInZ1bG5lcmFiaWxpdGllc0xldmVsIiwiY291bnQiLCJWdWxuZXJhYmlsaXR5UmVxdWVzdCIsInVuaXF1ZVNldmVyaXR5Q291bnQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlIiwiYWRkTGlzdCIsImxpc3QiLCJsb3dSYW5rIiwidG9wQWdlbnRDb3VudCIsIm1lZGl1bVJhbmsiLCJoaWdoUmFuayIsImNyaXRpY2FsUmFuayIsImN2ZVJhbmsiLCJ0b3BDVkVDb3VudCIsInRvcCIsImN2ZSIsImxldmVsMTVSYW5rIiwiT3ZlcnZpZXdSZXF1ZXN0IiwidG9wTGV2ZWwxNSIsInRvcDVSb290a2l0c1JhbmsiLCJSb290Y2hlY2tSZXF1ZXN0IiwidG9wNVJvb3RraXRzRGV0ZWN0ZWQiLCJoaWRkZW5QaWRzIiwiYWdlbnRzV2l0aEhpZGRlblBpZHMiLCJoaWRkZW5Qb3J0cyIsImFnZW50c1dpdGhIaWRkZW5Qb3J0cyIsInRvcFBjaVJlcXVpcmVtZW50cyIsIlBDSVJlcXVlc3QiLCJ0b3BQQ0lSZXF1aXJlbWVudHMiLCJydWxlcyIsImdldFJ1bGVzQnlSZXF1aXJlbWVudCIsIlBDSSIsImNvbnRlbnQiLCJ0b3BUU0NSZXF1aXJlbWVudHMiLCJUU0NSZXF1ZXN0IiwiVFNDIiwidG9wR2RwclJlcXVpcmVtZW50cyIsIkdEUFJSZXF1ZXN0IiwidG9wR0RQUlJlcXVpcmVtZW50cyIsIkdEUFIiLCJhdWRpdEFnZW50c05vblN1Y2Nlc3MiLCJBdWRpdFJlcXVlc3QiLCJnZXRUb3AzQWdlbnRzU3Vkb05vblN1Y2Nlc3NmdWwiLCJhdWRpdEFnZW50c0ZhaWxlZFN5c2NhbGwiLCJnZXRUb3AzQWdlbnRzRmFpbGVkU3lzY2FsbHMiLCJzeXNjYWxsX2lkIiwic3lzY2FsbCIsInN5c2NhbGxfc3lzY2FsbCIsIlN5c2NoZWNrUmVxdWVzdCIsInRvcDNSdWxlcyIsInRvcDNhZ2VudHMiLCJhdWRpdEZhaWxlZFN5c2NhbGwiLCJnZXRUb3BGYWlsZWRTeXNjYWxscyIsImxhc3RTY2FuUmVzcG9uc2UiLCJsYXN0U2NhbkRhdGEiLCJzdGFydCIsImVuZCIsImxhc3RUZW5EZWxldGVkIiwibGFzdFRlbkRlbGV0ZWRGaWxlcyIsImxhc3RUZW5Nb2RpZmllZCIsImxhc3RUZW5Nb2RpZmllZEZpbGVzIiwicmVxdWVzdHNTeXNjb2xsZWN0b3JMaXN0cyIsIm1hcFJlc3BvbnNlIiwiaGFyZHdhcmUiLCJjcHUiLCJjb3JlcyIsInJhbSIsInRvdGFsIiwiTnVtYmVyIiwidG9GaXhlZCIsIm9zRGF0YSIsInN5c25hbWUiLCJhcmNoaXRlY3R1cmUiLCJyZWxlYXNlIiwic3lzY29sbGVjdG9yTGlzdHMiLCJyZXF1ZXN0U3lzY29sbGVjdG9yIiwicmVzcG9uc2VTeXNjb2xsZWN0b3IiLCJzeXNjb2xsZWN0b3JMaXN0IiwidnVsbmVyYWJpbGl0aWVzUmVxdWVzdHMiLCJ2dWxuZXJhYmlsaXRpZXNSZXNwb25zZXNJdGVtcyIsInRvcFBhY2thZ2VzIiwiZmxhdCIsInRvcENyaXRpY2FsUGFja2FnZXMiLCJ0b3BQYWNrYWdlc1dpdGhDVkUiLCJjdXN0b211bCIsImNyaXRpY2FsIiwicGFja2FnZSIsInVsIiwicmVmZXJlbmNlcyIsInN1YnN0cmluZyIsInRvcEhpZ2hQYWNrYWdlcyIsImdldENvbmZpZ1Jvd3MiLCJyZXN1bHQiLCJwcm9wIiwiS2V5RXF1aXZhbGVuY2UiLCJwbGFpbkRhdGEiLCJuZXN0ZWREYXRhIiwidGFibGVEYXRhIiwib3B0aW9ucyIsImhpZGVIZWFkZXIiLCJuZXN0IiwiZ2V0UmVwb3J0cyIsInVzZXJSZXBvcnRzRGlyZWN0b3J5UGF0aCIsInNvcnRSZXBvcnRzQnlEYXRlIiwiYSIsImIiLCJkYXRlIiwicmVwb3J0cyIsInJlYWRkaXJTeW5jIiwiZmlsZSIsInN0YXRzIiwic3RhdFN5bmMiLCJiaXJ0aFRpbWVGaWVsZCIsImZpbmQiLCJzaXplIiwiVGltU29ydCIsInNvcnQiLCJyb3V0ZUhhbmRsZXIiLCJyZXBvcnRGaWxlTmFtZUFjY2Vzc29yIiwidXNlcm5hbWUiLCJzdGFydHNXaXRoIiwiYmFkUmVxdWVzdCIsImJpbmQiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFXQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLE1BQU1BLGtCQUFOLENBQXlCO0FBQzlCQyxFQUFBQSxXQUFXLEdBQUc7QUFBQSxrREF5akNTLEtBQUtDLDhDQUFMLENBQW9ELE9BQ3pFQyxPQUR5RSxFQUV6RUMsT0FGeUUsRUFHekVDLFFBSHlFLEtBSXRFO0FBQ0gsVUFBSTtBQUNGLHlCQUFJLGdDQUFKLEVBQXVDLGdCQUF2QyxFQUF3RCxNQUF4RDtBQUNBLGNBQU07QUFDSkMsVUFBQUEsS0FESTtBQUVKQyxVQUFBQSxNQUZJO0FBR0pDLFVBQUFBLGVBSEk7QUFJSkMsVUFBQUEsU0FKSTtBQUtKQyxVQUFBQSxPQUxJO0FBTUpDLFVBQUFBLElBTkk7QUFPSkMsVUFBQUEsTUFQSTtBQVFKQyxVQUFBQSxPQVJJO0FBU0pDLFVBQUFBLGlCQVRJO0FBVUpDLFVBQUFBO0FBVkksWUFXRlgsT0FBTyxDQUFDWSxJQVhaO0FBWUEsY0FBTTtBQUFFQyxVQUFBQTtBQUFGLFlBQWViLE9BQU8sQ0FBQ2MsTUFBN0I7QUFDQSxjQUFNO0FBQUVDLFVBQUFBLElBQUY7QUFBUUMsVUFBQUE7QUFBUixZQUFlVCxJQUFJLElBQUksRUFBN0IsQ0FmRSxDQWdCRjs7QUFDQSxjQUFNVSxPQUFPLEdBQUcsSUFBSUMs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QWIsQ0FBc0IsS0FBdEIsQ0FBekQsRUFBc0Y7QUFDcEYsMkJBQUksbUVBQUosRUFBMEUsUUFBTzRPLFFBQVMsSUFBR3ZVLFlBQWEsZ0RBQStDYSxZQUFhLEVBQXRLLEVBQXlLLE1BQXpLO0FBQ0EsaUJBQU9wQyxRQUFRLENBQUNnVyxVQUFULENBQW9CO0FBQ3pCclYsWUFBQUEsSUFBSSxFQUFFO0FBQ0o0QixjQUFBQSxPQUFPLEVBQUU7QUFETDtBQURtQixXQUFwQixDQUFQO0FBS0Q7O0FBQUE7QUFDRCx5QkFBSSwwREFBSixFQUFnRSxzREFBaEUsRUFBd0gsT0FBeEg7QUFDQSxlQUFPLE1BQU1xVCxZQUFZLENBQUNLLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsRUFBQyxHQUFHblcsT0FBSjtBQUFhd0IsVUFBQUEsbUJBQW1CLEVBQUU7QUFBRUMsWUFBQUEsWUFBRjtBQUFnQmlCLFlBQUFBLFFBQWhCO0FBQTBCSixZQUFBQTtBQUExQjtBQUFsQyxTQUF4QixFQUFxR3JDLE9BQXJHLEVBQThHQyxRQUE5RyxDQUFiO0FBQ0QsT0FoQkQsQ0FnQkMsT0FBTXlDLEtBQU4sRUFBWTtBQUNYLHlCQUFJLDBEQUFKLEVBQWdFQSxLQUFLLENBQUNGLE9BQU4sSUFBaUJFLEtBQWpGO0FBQ0EsZUFBTyxrQ0FBY0EsS0FBSyxDQUFDRixPQUFOLElBQWlCRSxLQUEvQixFQUFzQyxJQUF0QyxFQUE0QyxHQUE1QyxFQUFpRHpDLFFBQWpELENBQVA7QUFDRDtBQUNGLEtBekJEO0FBMEJEOztBQUVPMEMsRUFBQUEsdUJBQVIsR0FBaUM7QUFDL0IsV0FBUSxHQUFHWixJQUFJLENBQUNvVSxHQUFMLEtBQWEsSUFBZCxHQUFzQixDQUFFLEVBQWxDO0FBQ0Q7O0FBNStENkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gQ2xhc3MgZm9yIFdhenVoIHJlcG9ydGluZyBjb250cm9sbGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgV0FaVUhfTU9EVUxFUyB9IGZyb20gJy4uLy4uL2NvbW1vbi93YXp1aC1tb2R1bGVzJztcbmltcG9ydCAqIGFzIFRpbVNvcnQgZnJvbSAndGltc29ydCc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi4vbGliL2Vycm9yLXJlc3BvbnNlJztcbmltcG9ydCAqIGFzIFZ1bG5lcmFiaWxpdHlSZXF1ZXN0IGZyb20gJy4uL2xpYi9yZXBvcnRpbmcvdnVsbmVyYWJpbGl0eS1yZXF1ZXN0JztcbmltcG9ydCAqIGFzIE92ZXJ2aWV3UmVxdWVzdCBmcm9tICcuLi9saWIvcmVwb3J0aW5nL292ZXJ2aWV3LXJlcXVlc3QnO1xuaW1wb3J0ICogYXMgUm9vdGNoZWNrUmVxdWVzdCBmcm9tICcuLi9saWIvcmVwb3J0aW5nL3Jvb3RjaGVjay1yZXF1ZXN0JztcbmltcG9ydCAqIGFzIFBDSVJlcXVlc3QgZnJvbSAnLi4vbGliL3JlcG9ydGluZy9wY2ktcmVxdWVzdCc7XG5pbXBvcnQgKiBhcyBHRFBSUmVxdWVzdCBmcm9tICcuLi9saWIvcmVwb3J0aW5nL2dkcHItcmVxdWVzdCc7XG5pbXBvcnQgKiBhcyBUU0NSZXF1ZXN0IGZyb20gJy4uL2xpYi9yZXBvcnRpbmcvdHNjLXJlcXVlc3QnO1xuaW1wb3J0ICogYXMgQXVkaXRSZXF1ZXN0IGZyb20gJy4uL2xpYi9yZXBvcnRpbmcvYXVkaXQtcmVxdWVzdCc7XG5pbXBvcnQgKiBhcyBTeXNjaGVja1JlcXVlc3QgZnJvbSAnLi4vbGliL3JlcG9ydGluZy9zeXNjaGVjay1yZXF1ZXN0JztcbmltcG9ydCBQQ0kgZnJvbSAnLi4vaW50ZWdyYXRpb24tZmlsZXMvcGNpLXJlcXVpcmVtZW50cy1wZGZtYWtlJztcbmltcG9ydCBHRFBSIGZyb20gJy4uL2ludGVncmF0aW9uLWZpbGVzL2dkcHItcmVxdWlyZW1lbnRzLXBkZm1ha2UnO1xuaW1wb3J0IFRTQyBmcm9tICcuLi9pbnRlZ3JhdGlvbi1maWxlcy90c2MtcmVxdWlyZW1lbnRzLXBkZm1ha2UnO1xuaW1wb3J0IFByb2Nlc3NFcXVpdmFsZW5jZSBmcm9tICcuLi9saWIvcHJvY2Vzcy1zdGF0ZS1lcXVpdmFsZW5jZSc7XG5pbXBvcnQgeyBLZXlFcXVpdmFsZW5jZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jc3Yta2V5LWVxdWl2YWxlbmNlJztcbmltcG9ydCB7IEFnZW50Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2xpYi9yZXBvcnRpbmcvYWdlbnQtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3QsIFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkgfSBmcm9tICdzcmMvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVwb3J0UHJpbnRlciB9IGZyb20gJy4uL2xpYi9yZXBvcnRpbmcvcHJpbnRlcic7XG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuLi9saWIvbG9nZ2VyJztcbmltcG9ydCB7XG4gIFdBWlVIX0FMRVJUU19QQVRURVJOLFxuICBXQVpVSF9EQVRBX0RPV05MT0FEU19ESVJFQ1RPUllfUEFUSCxcbiAgV0FaVUhfREFUQV9ET1dOTE9BRFNfUkVQT1JUU19ESVJFQ1RPUllfUEFUSCxcbiAgQVVUSE9SSVpFRF9BR0VOVFMsXG4gIEFQSV9OQU1FX0FHRU5UX1NUQVRVUyxcbn0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cywgY3JlYXRlRGF0YURpcmVjdG9yeUlmTm90RXhpc3RzIH0gZnJvbSAnLi4vbGliL2ZpbGVzeXN0ZW0nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgYWdlbnRTdGF0dXNMYWJlbEJ5QWdlbnRTdGF0dXMgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvd3pfYWdlbnRfc3RhdHVzJztcblxuZXhwb3J0IGNsYXNzIFdhenVoUmVwb3J0aW5nQ3RybCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogVGhpcyBkbyBmb3JtYXQgdG8gZmlsdGVyc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsdGVycyBFLmc6IGNsdXN0ZXIubmFtZTogd2F6dWggQU5EIHJ1bGUuZ3JvdXBzOiB2dWxuZXJhYmlsaXR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hCYXIgc2VhcmNoIHRlcm1cbiAgICovXG4gIHByaXZhdGUgc2FuaXRpemVLaWJhbmFGaWx0ZXJzKGZpbHRlcnM6IGFueSwgc2VhcmNoQmFyPzogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gICAgbG9nKCdyZXBvcnRpbmc6c2FuaXRpemVLaWJhbmFGaWx0ZXJzJywgYFN0YXJ0ZWQgdG8gc2FuaXRpemUgZmlsdGVyc2AsICdpbmZvJyk7XG4gICAgbG9nKFxuICAgICAgJ3JlcG9ydGluZzpzYW5pdGl6ZUtpYmFuYUZpbHRlcnMnLFxuICAgICAgYGZpbHRlcnM6ICR7ZmlsdGVycy5sZW5ndGh9LCBzZWFyY2hCYXI6ICR7c2VhcmNoQmFyfWAsXG4gICAgICAnZGVidWcnXG4gICAgKTtcbiAgICBsZXQgc3RyID0gJyc7XG5cbiAgICBjb25zdCBhZ2VudHNGaWx0ZXI6IGFueSA9IFtdO1xuXG4gICAgLy9zZXBhcmF0ZSBhZ2VudHMgZmlsdGVyXG4gICAgZmlsdGVycyA9IGZpbHRlcnMuZmlsdGVyKChmaWx0ZXIpID0+IHtcbiAgICAgIGlmIChmaWx0ZXIubWV0YS5jb250cm9sbGVkQnkgPT09IEFVVEhPUklaRURfQUdFTlRTKSB7XG4gICAgICAgIGFnZW50c0ZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsZW4gPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgbmVnYXRlLCBrZXksIHZhbHVlLCBwYXJhbXMsIHR5cGUgfSA9IGZpbHRlcnNbaV0ubWV0YTtcbiAgICAgIHN0ciArPSBgJHtuZWdhdGUgPyAnTk9UICcgOiAnJ31gO1xuICAgICAgc3RyICs9IGAke2tleX06IGA7XG4gICAgICBzdHIgKz0gYCR7XG4gICAgICAgIHR5cGUgPT09ICdyYW5nZSdcbiAgICAgICAgICA/IGAke3BhcmFtcy5ndGV9LSR7cGFyYW1zLmx0fWBcbiAgICAgICAgICA6IHR5cGUgPT09ICdwaHJhc2VzJ1xuICAgICAgICAgICAgPyAnKCcgKyBwYXJhbXMuam9pbihcIiBPUiBcIikgKyAnKSdcbiAgICAgICAgICAgIDogdHlwZSA9PT0gJ2V4aXN0cydcbiAgICAgICAgICAgICAgPyAnKidcbiAgICAgICAgICAgICAgOiAhIXZhbHVlXG4gICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgIDogKHBhcmFtcyB8fCB7fSkucXVlcnlcbiAgICAgIH1gO1xuICAgICAgc3RyICs9IGAke2kgPT09IGxlbiAtIDEgPyAnJyA6ICcgQU5EICd9YDtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoQmFyKSB7XG4gICAgICBzdHIgKz0gYCBBTkQgKCR7IHNlYXJjaEJhcn0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBhZ2VudHNGaWx0ZXJTdHIgPSBhZ2VudHNGaWx0ZXIubWFwKChmaWx0ZXIpID0+IGZpbHRlci5tZXRhLnZhbHVlKS5qb2luKCcsJyk7XG5cbiAgICBsb2coXG4gICAgICAncmVwb3J0aW5nOnNhbml0aXplS2liYW5hRmlsdGVycycsXG4gICAgICBgc3RyOiAke3N0cn0sIGFnZW50c0ZpbHRlclN0cjogJHthZ2VudHNGaWx0ZXJTdHJ9YCxcbiAgICAgICdkZWJ1ZydcbiAgICApO1xuXG4gICAgcmV0dXJuIFtzdHIsIGFnZW50c0ZpbHRlclN0cl07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBwZXJmb3JtcyB0aGUgcmVuZGVyaW5nIG9mIGdpdmVuIGhlYWRlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJpbnRlciBzZWN0aW9uIHRhcmdldFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VjdGlvbiBzZWN0aW9uIHRhcmdldFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFiIHRhYiB0YXJnZXRcbiAgICogQHBhcmFtIHtCb29sZWFufSBpc0FnZW50cyBpcyBhZ2VudHMgc2VjdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpSWQgSUQgb2YgQVBJXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHJlbmRlckhlYWRlcihjb250ZXh0LCBwcmludGVyLCBzZWN0aW9uLCB0YWIsIGlzQWdlbnRzLCBhcGlJZCkge1xuICAgIHRyeSB7XG4gICAgICBsb2coXG4gICAgICAgICdyZXBvcnRpbmc6cmVuZGVySGVhZGVyJyxcbiAgICAgICAgYHNlY3Rpb246ICR7c2VjdGlvbn0sIHRhYjogJHt0YWJ9LCBpc0FnZW50czogJHtpc0FnZW50c30sIGFwaUlkOiAke2FwaUlkfWAsXG4gICAgICAgICdkZWJ1ZydcbiAgICAgICk7XG4gICAgICBpZiAoc2VjdGlvbiAmJiB0eXBlb2Ygc2VjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCFbJ2FnZW50Q29uZmlnJywgJ2dyb3VwQ29uZmlnJ10uaW5jbHVkZXMoc2VjdGlvbikpIHtcbiAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnQoe1xuICAgICAgICAgICAgdGV4dDogV0FaVUhfTU9EVUxFU1t0YWJdLnRpdGxlICsgJyByZXBvcnQnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gJ2FnZW50Q29uZmlnJykge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICB0ZXh0OiBgQWdlbnQgJHtpc0FnZW50c30gY29uZmlndXJhdGlvbmAsXG4gICAgICAgICAgICBzdHlsZTogJ2gxJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWN0aW9uID09PSAnZ3JvdXBDb25maWcnKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgIHRleHQ6ICdBZ2VudHMgaW4gZ3JvdXAnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJpbnRlci5hZGROZXdMaW5lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FnZW50cyAmJiB0eXBlb2YgaXNBZ2VudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYnVpbGRBZ2VudHNUYWJsZShcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHByaW50ZXIsXG4gICAgICAgICAgaXNBZ2VudHMsXG4gICAgICAgICAgYXBpSWQsXG4gICAgICAgICAgc2VjdGlvbiA9PT0gJ2dyb3VwQ29uZmlnJyA/IHRhYiA6ICcnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FnZW50cyAmJiB0eXBlb2YgaXNBZ2VudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGFnZW50UmVzcG9uc2UgPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNDdXJyZW50VXNlci5yZXF1ZXN0KFxuICAgICAgICAgICdHRVQnLFxuICAgICAgICAgIGAvYWdlbnRzYCxcbiAgICAgICAgICB7IHBhcmFtczogeyBhZ2VudHNfbGlzdDogaXNBZ2VudHMgfSB9LFxuICAgICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGFnZW50RGF0YSA9IGFnZW50UmVzcG9uc2UuZGF0YS5kYXRhLmFmZmVjdGVkX2l0ZW1zWzBdO1xuICAgICAgICBpZiAoYWdlbnREYXRhICYmIGFnZW50RGF0YS5zdGF0dXMgIT09IEFQSV9OQU1FX0FHRU5UX1NUQVRVUy5BQ1RJVkUpIHtcbiAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnRXaXRoTmV3TGluZSh7XG4gICAgICAgICAgICB0ZXh0OiBgV2FybmluZy4gQWdlbnQgaXMgJHthZ2VudFN0YXR1c0xhYmVsQnlBZ2VudFN0YXR1cyhhZ2VudERhdGEuc3RhdHVzKS50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgICAgICBzdHlsZTogJ3N0YW5kYXJkJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkQWdlbnRzVGFibGUoY29udGV4dCwgcHJpbnRlciwgW2lzQWdlbnRzXSwgYXBpSWQpO1xuXG4gICAgICAgIGlmIChhZ2VudERhdGEgJiYgYWdlbnREYXRhLmdyb3VwKSB7XG4gICAgICAgICAgY29uc3QgYWdlbnRHcm91cHMgPSBhZ2VudERhdGEuZ3JvdXAuam9pbignLCAnKTtcbiAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnRXaXRoTmV3TGluZSh7XG4gICAgICAgICAgICB0ZXh0OiBgR3JvdXAke2FnZW50RGF0YS5ncm91cC5sZW5ndGggPiAxID8gJ3MnIDogJyd9OiAke2FnZW50R3JvdXBzfWAsXG4gICAgICAgICAgICBzdHlsZTogJ3N0YW5kYXJkJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFdBWlVIX01PRFVMRVNbdGFiXSAmJiBXQVpVSF9NT0RVTEVTW3RhYl0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgIHRleHQ6IFdBWlVIX01PRFVMRVNbdGFiXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBzdHlsZTogJ3N0YW5kYXJkJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygncmVwb3J0aW5nOnJlbmRlckhlYWRlcicsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBidWlsZCB0aGUgYWdlbnRzIHRhYmxlXG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5ncz59IGlkcyBpZHMgb2YgYWdlbnRzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcGlJZCBBUEkgaWRcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYnVpbGRBZ2VudHNUYWJsZShjb250ZXh0LCBwcmludGVyOiBSZXBvcnRQcmludGVyLCBhZ2VudElEczogc3RyaW5nW10sIGFwaUlkOiBzdHJpbmcsIGdyb3VwSUQ6IHN0cmluZyA9ICcnKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9IGF3YWl0IGNvbnRleHQuY29yZS51aVNldHRpbmdzLmNsaWVudC5nZXQoJ2RhdGVGb3JtYXQnKTtcbiAgICBpZiAoKCFhZ2VudElEcyB8fCAhYWdlbnRJRHMubGVuZ3RoKSAmJiAhZ3JvdXBJRCkgcmV0dXJuO1xuICAgIGxvZygncmVwb3J0aW5nOmJ1aWxkQWdlbnRzVGFibGUnLCBgJHthZ2VudElEcy5sZW5ndGh9IGFnZW50cyBmb3IgQVBJICR7YXBpSWR9YCwgJ2luZm8nKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFnZW50c0RhdGEgPSBbXTtcbiAgICAgIGlmIChncm91cElEKSB7XG4gICAgICAgIGxldCB0b3RhbEFnZW50c0luR3JvdXAgPSBudWxsO1xuICAgICAgICBkb3tcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgZGF0YTogeyBhZmZlY3RlZF9pdGVtcywgdG90YWxfYWZmZWN0ZWRfaXRlbXMgfSB9IH0gPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNDdXJyZW50VXNlci5yZXF1ZXN0KFxuICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICBgL2dyb3Vwcy8ke2dyb3VwSUR9L2FnZW50c2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG9mZnNldDogYWdlbnRzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAnZGF0ZUFkZCxpZCxpcCxsYXN0S2VlcEFsaXZlLG1hbmFnZXIsbmFtZSxvcy5uYW1lLG9zLnZlcnNpb24sdmVyc2lvbicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGFwaUhvc3RJRDogYXBpSWQgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgIXRvdGFsQWdlbnRzSW5Hcm91cCAmJiAodG90YWxBZ2VudHNJbkdyb3VwID0gdG90YWxfYWZmZWN0ZWRfaXRlbXMpO1xuICAgICAgICAgIGFnZW50c0RhdGEgPSBbLi4uYWdlbnRzRGF0YSwgLi4uYWZmZWN0ZWRfaXRlbXNdO1xuICAgICAgICB9d2hpbGUoYWdlbnRzRGF0YS5sZW5ndGggPCB0b3RhbEFnZW50c0luR3JvdXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBhZ2VudElEIG9mIGFnZW50SURzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBkYXRhOiB7IGFmZmVjdGVkX2l0ZW1zOiBbYWdlbnRdIH0gfSB9ID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdChcbiAgICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICAgIGAvYWdlbnRzYCxcbiAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHE6IGBpZD0ke2FnZW50SUR9YCxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdDogJ2RhdGVBZGQsaWQsaXAsbGFzdEtlZXBBbGl2ZSxtYW5hZ2VyLG5hbWUsb3MubmFtZSxvcy52ZXJzaW9uLHZlcnNpb24nLFxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYWdlbnRzRGF0YS5wdXNoKGFnZW50KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbG9nKFxuICAgICAgICAgICAgICAncmVwb3J0aW5nOmJ1aWxkQWdlbnRzVGFibGUnLFxuICAgICAgICAgICAgICBgU2tpcCBhZ2VudCBkdWUgdG86ICR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gLFxuICAgICAgICAgICAgICAnZGVidWcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihhZ2VudHNEYXRhLmxlbmd0aCl7XG4gICAgICAgIC8vIFByaW50IGEgdGFibGUgd2l0aCBhZ2VudC9zIGluZm9ybWF0aW9uXG4gICAgICAgIHByaW50ZXIuYWRkU2ltcGxlVGFibGUoe1xuICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgIHsgaWQ6ICdpZCcsIGxhYmVsOiAnSUQnIH0sXG4gICAgICAgICAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdpcCcsIGxhYmVsOiAnSVAnIH0sXG4gICAgICAgICAgICB7IGlkOiAndmVyc2lvbicsIGxhYmVsOiAnVmVyc2lvbicgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdtYW5hZ2VyJywgbGFiZWw6ICdNYW5hZ2VyJyB9LFxuICAgICAgICAgICAgeyBpZDogJ29zJywgbGFiZWw6ICdPUycgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdkYXRlQWRkJywgbGFiZWw6ICdSZWdpc3RyYXRpb24gZGF0ZScgfSxcbiAgICAgICAgICAgIHsgaWQ6ICdsYXN0S2VlcEFsaXZlJywgbGFiZWw6ICdMYXN0IGtlZXAgYWxpdmUnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpdGVtczogYWdlbnRzRGF0YS5tYXAoKGFnZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5hZ2VudCxcbiAgICAgICAgICAgICAgb3M6IChhZ2VudC5vcyAmJiBhZ2VudC5vcy5uYW1lICYmIGFnZW50Lm9zLnZlcnNpb24pID8gYCR7YWdlbnQub3MubmFtZX0gJHthZ2VudC5vcy52ZXJzaW9ufWAgOiAnJyxcbiAgICAgICAgICAgICAgbGFzdEtlZXBBbGl2ZTogbW9tZW50KGFnZW50Lmxhc3RLZWVwQWxpdmUpLmZvcm1hdChkYXRlRm9ybWF0KSxcbiAgICAgICAgICAgICAgZGF0ZUFkZDogbW9tZW50KGFnZW50LmRhdGVBZGQpLmZvcm1hdChkYXRlRm9ybWF0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1lbHNlIGlmKCFhZ2VudHNEYXRhLmxlbmd0aCAmJiBncm91cElEKXtcbiAgICAgICAgLy8gRm9yIGdyb3VwIHJlcG9ydHMgd2hlbiB0aGVyZSBpcyBubyBhZ2VudHMgaW4gdGhlIGdyb3VwXG4gICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgdGV4dDogJ1RoZXJlIGFyZSBubyBhZ2VudHMgaW4gdGhpcyBncm91cC4nLFxuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjMDAwJyB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3JlcG9ydGluZzpidWlsZEFnZW50c1RhYmxlJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGxvYWQgbW9yZSBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgRW5kcG9pbnQgY29udGV4dFxuICAgKiBAcGFyYW0geyp9IHByaW50ZXIgcHJpbnRlciBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VjdGlvbiBzZWN0aW9uIHRhcmdldFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFiIHRhYiB0YXJnZXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaUlkIElEIG9mIEFQSVxuICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbSBUaW1lc3RhbXAgKG1zKSBmcm9tXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0byBUaW1lc3RhbXAgKG1zKSB0b1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsdGVycyBFLmc6IGNsdXN0ZXIubmFtZTogd2F6dWggQU5EIHJ1bGUuZ3JvdXBzOiB2dWxuZXJhYmlsaXR5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhZ2VudCBhZ2VudCB0YXJnZXRcbiAgICogQHJldHVybnMge09iamVjdH0gRXh0ZW5kZWQgaW5mb3JtYXRpb25cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZXh0ZW5kZWRJbmZvcm1hdGlvbihcbiAgICBjb250ZXh0LFxuICAgIHByaW50ZXIsXG4gICAgc2VjdGlvbixcbiAgICB0YWIsXG4gICAgYXBpSWQsXG4gICAgZnJvbSxcbiAgICB0byxcbiAgICBmaWx0ZXJzLFxuICAgIHBhdHRlcm4gPSBXQVpVSF9BTEVSVFNfUEFUVEVSTixcbiAgICBhZ2VudCA9IG51bGxcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJyxcbiAgICAgICAgYFNlY3Rpb24gJHtzZWN0aW9ufSBhbmQgdGFiICR7dGFifSwgQVBJIGlzICR7YXBpSWR9LiBGcm9tICR7ZnJvbX0gdG8gJHt0b30uIEZpbHRlcnMgJHtmaWx0ZXJzfS4gSW5kZXggcGF0dGVybiAke3BhdHRlcm59YCxcbiAgICAgICAgJ2luZm8nXG4gICAgICApO1xuICAgICAgaWYgKHNlY3Rpb24gPT09ICdhZ2VudHMnICYmICFhZ2VudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcG9ydGluZyBmb3Igc3BlY2lmaWMgYWdlbnQgbmVlZHMgYW4gYWdlbnQgSUQgaW4gb3JkZXIgdG8gd29yayBwcm9wZXJseScpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhZ2VudHMgPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNDdXJyZW50VXNlci5yZXF1ZXN0KFxuICAgICAgICAnR0VUJyxcbiAgICAgICAgJy9hZ2VudHMnLFxuICAgICAgICB7IHBhcmFtczogeyBsaW1pdDogMSB9IH0sXG4gICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b3RhbEFnZW50cyA9IGFnZW50cy5kYXRhLmRhdGEudG90YWxfYWZmZWN0ZWRfaXRlbXM7XG5cbiAgICAgIGlmIChzZWN0aW9uID09PSAnb3ZlcnZpZXcnICYmIHRhYiA9PT0gJ3Z1bHMnKSB7XG4gICAgICAgIGxvZyhcbiAgICAgICAgICAncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLFxuICAgICAgICAgICdGZXRjaGluZyBvdmVydmlldyB2dWxuZXJhYmlsaXR5IGRldGVjdG9yIG1ldHJpY3MnLFxuICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdnVsbmVyYWJpbGl0aWVzTGV2ZWxzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnLCAnQ3JpdGljYWwnXTtcblxuICAgICAgICBjb25zdCB2dWxuZXJhYmlsaXRpZXNSZXNwb25zZXNDb3VudCA9IChcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHZ1bG5lcmFiaWxpdGllc0xldmVscy5tYXAoYXN5bmMgKHZ1bG5lcmFiaWxpdGllc0xldmVsKSA9PiB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBWdWxuZXJhYmlsaXR5UmVxdWVzdC51bmlxdWVTZXZlcml0eUNvdW50KFxuICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgICAgICB0byxcbiAgICAgICAgICAgICAgICAgIHZ1bG5lcmFiaWxpdGllc0xldmVsLFxuICAgICAgICAgICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudFxuICAgICAgICAgICAgICAgICAgPyBgJHtjb3VudH0gb2YgJHt0b3RhbEFnZW50c30gYWdlbnRzIGhhdmUgJHt2dWxuZXJhYmlsaXRpZXNMZXZlbC50b0xvY2FsZUxvd2VyQ2FzZSgpfSB2dWxuZXJhYmlsaXRpZXMuYFxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICkuZmlsdGVyKCh2dWxuZXJhYmlsaXRpZXNSZXNwb25zZSkgPT4gdnVsbmVyYWJpbGl0aWVzUmVzcG9uc2UpO1xuXG4gICAgICAgIHByaW50ZXIuYWRkTGlzdCh7XG4gICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ1N1bW1hcnknLCBzdHlsZTogJ2gyJyB9LFxuICAgICAgICAgIGxpc3Q6IHZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlc0NvdW50LFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2coXG4gICAgICAgICAgJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJyxcbiAgICAgICAgICAnRmV0Y2hpbmcgb3ZlcnZpZXcgdnVsbmVyYWJpbGl0eSBkZXRlY3RvciB0b3AgMyBhZ2VudHMgYnkgY2F0ZWdvcnknLFxuICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbG93UmFuayA9IGF3YWl0IFZ1bG5lcmFiaWxpdHlSZXF1ZXN0LnRvcEFnZW50Q291bnQoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgICdMb3cnLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZWRpdW1SYW5rID0gYXdhaXQgVnVsbmVyYWJpbGl0eVJlcXVlc3QudG9wQWdlbnRDb3VudChcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgJ01lZGl1bScsXG4gICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGhpZ2hSYW5rID0gYXdhaXQgVnVsbmVyYWJpbGl0eVJlcXVlc3QudG9wQWdlbnRDb3VudChcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgJ0hpZ2gnLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjcml0aWNhbFJhbmsgPSBhd2FpdCBWdWxuZXJhYmlsaXR5UmVxdWVzdC50b3BBZ2VudENvdW50KFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICAnQ3JpdGljYWwnLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBsb2coXG4gICAgICAgICAgJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJyxcbiAgICAgICAgICAnQWRkaW5nIG92ZXJ2aWV3IHZ1bG5lcmFiaWxpdHkgZGV0ZWN0b3IgdG9wIDMgYWdlbnRzIGJ5IGNhdGVnb3J5JyxcbiAgICAgICAgICAnZGVidWcnXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjcml0aWNhbFJhbmsgJiYgY3JpdGljYWxSYW5rLmxlbmd0aCkge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHtcbiAgICAgICAgICAgIHRleHQ6ICdUb3AgMyBhZ2VudHMgd2l0aCBjcml0aWNhbCBzZXZlcml0eSB2dWxuZXJhYmlsaXRpZXMnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZEFnZW50c1RhYmxlKGNvbnRleHQsIHByaW50ZXIsIGNyaXRpY2FsUmFuaywgYXBpSWQpO1xuICAgICAgICAgIHByaW50ZXIuYWRkTmV3TGluZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZ2hSYW5rICYmIGhpZ2hSYW5rLmxlbmd0aCkge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHtcbiAgICAgICAgICAgIHRleHQ6ICdUb3AgMyBhZ2VudHMgd2l0aCBoaWdoIHNldmVyaXR5IHZ1bG5lcmFiaWxpdGllcycsXG4gICAgICAgICAgICBzdHlsZTogJ2gzJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkQWdlbnRzVGFibGUoY29udGV4dCwgcHJpbnRlciwgaGlnaFJhbmssIGFwaUlkKTtcbiAgICAgICAgICBwcmludGVyLmFkZE5ld0xpbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZWRpdW1SYW5rICYmIG1lZGl1bVJhbmsubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgdGV4dDogJ1RvcCAzIGFnZW50cyB3aXRoIG1lZGl1bSBzZXZlcml0eSB2dWxuZXJhYmlsaXRpZXMnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZEFnZW50c1RhYmxlKGNvbnRleHQsIHByaW50ZXIsIG1lZGl1bVJhbmssIGFwaUlkKTtcbiAgICAgICAgICBwcmludGVyLmFkZE5ld0xpbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb3dSYW5rICYmIGxvd1JhbmsubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgdGV4dDogJ1RvcCAzIGFnZW50cyB3aXRoIGxvdyBzZXZlcml0eSB2dWxuZXJhYmlsaXRpZXMnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZEFnZW50c1RhYmxlKGNvbnRleHQsIHByaW50ZXIsIGxvd1JhbmssIGFwaUlkKTtcbiAgICAgICAgICBwcmludGVyLmFkZE5ld0xpbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZyhcbiAgICAgICAgICAncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLFxuICAgICAgICAgICdGZXRjaGluZyBvdmVydmlldyB2dWxuZXJhYmlsaXR5IGRldGVjdG9yIHRvcCAzIENWRXMnLFxuICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3ZlUmFuayA9IGF3YWl0IFZ1bG5lcmFiaWxpdHlSZXF1ZXN0LnRvcENWRUNvdW50KGNvbnRleHQsIGZyb20sIHRvLCBmaWx0ZXJzLCBwYXR0ZXJuKTtcbiAgICAgICAgbG9nKFxuICAgICAgICAgICdyZXBvcnRpbmc6ZXh0ZW5kZWRJbmZvcm1hdGlvbicsXG4gICAgICAgICAgJ0FkZGluZyBvdmVydmlldyB2dWxuZXJhYmlsaXR5IGRldGVjdG9yIHRvcCAzIENWRXMnLFxuICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGN2ZVJhbmsgJiYgY3ZlUmFuay5sZW5ndGgpIHtcbiAgICAgICAgICBwcmludGVyLmFkZFNpbXBsZVRhYmxlKHtcbiAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdUb3AgMyBDVkUnLCBzdHlsZTogJ2gyJyB9LFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICB7IGlkOiAndG9wJywgbGFiZWw6ICdUb3AnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdjdmUnLCBsYWJlbDogJ0NWRScgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpdGVtczogY3ZlUmFuay5tYXAoKGl0ZW0pID0+ICh7IHRvcDogY3ZlUmFuay5pbmRleE9mKGl0ZW0pICsgMSwgY3ZlOiBpdGVtIH0pKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdGlvbiA9PT0gJ292ZXJ2aWV3JyAmJiB0YWIgPT09ICdnZW5lcmFsJykge1xuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0ZldGNoaW5nIHRvcCAzIGFnZW50cyB3aXRoIGxldmVsIDE1IGFsZXJ0cycsICdkZWJ1ZycpO1xuXG4gICAgICAgIGNvbnN0IGxldmVsMTVSYW5rID0gYXdhaXQgT3ZlcnZpZXdSZXF1ZXN0LnRvcExldmVsMTUoY29udGV4dCwgZnJvbSwgdG8sIGZpbHRlcnMsIHBhdHRlcm4pO1xuXG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCAnQWRkaW5nIHRvcCAzIGFnZW50cyB3aXRoIGxldmVsIDE1IGFsZXJ0cycsICdkZWJ1ZycpO1xuICAgICAgICBpZiAobGV2ZWwxNVJhbmsubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgIHRleHQ6ICdUb3AgMyBhZ2VudHMgd2l0aCBsZXZlbCAxNSBhbGVydHMnLFxuICAgICAgICAgICAgc3R5bGU6ICdoMicsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZEFnZW50c1RhYmxlKGNvbnRleHQsIHByaW50ZXIsIGxldmVsMTVSYW5rLCBhcGlJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3Rpb24gPT09ICdvdmVydmlldycgJiYgdGFiID09PSAncG0nKSB7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCAnRmV0Y2hpbmcgbW9zdCBjb21tb24gcm9vdGtpdHMnLCAnZGVidWcnKTtcbiAgICAgICAgY29uc3QgdG9wNVJvb3RraXRzUmFuayA9IGF3YWl0IFJvb3RjaGVja1JlcXVlc3QudG9wNVJvb3RraXRzRGV0ZWN0ZWQoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0FkZGluZyBtb3N0IGNvbW1vbiByb290a2l0cycsICdkZWJ1ZycpO1xuICAgICAgICBpZiAodG9wNVJvb3RraXRzUmFuayAmJiB0b3A1Um9vdGtpdHNSYW5rLmxlbmd0aCkge1xuICAgICAgICAgIHByaW50ZXJcbiAgICAgICAgICAgIC5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgICB0ZXh0OiAnTW9zdCBjb21tb24gcm9vdGtpdHMgZm91bmQgYW1vbmcgeW91ciBhZ2VudHMnLFxuICAgICAgICAgICAgICBzdHlsZTogJ2gyJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ29udGVudFdpdGhOZXdMaW5lKHtcbiAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAnUm9vdGtpdHMgYXJlIGEgc2V0IG9mIHNvZnR3YXJlIHRvb2xzIHRoYXQgZW5hYmxlIGFuIHVuYXV0aG9yaXplZCB1c2VyIHRvIGdhaW4gY29udHJvbCBvZiBhIGNvbXB1dGVyIHN5c3RlbSB3aXRob3V0IGJlaW5nIGRldGVjdGVkLicsXG4gICAgICAgICAgICAgIHN0eWxlOiAnc3RhbmRhcmQnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRTaW1wbGVUYWJsZSh7XG4gICAgICAgICAgICAgIGl0ZW1zOiB0b3A1Um9vdGtpdHNSYW5rLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHRvcDogdG9wNVJvb3RraXRzUmFuay5pbmRleE9mKGl0ZW0pICsgMSwgbmFtZTogaXRlbSB9O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICd0b3AnLCBsYWJlbDogJ1RvcCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnUm9vdGtpdCcgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCAnRmV0Y2hpbmcgaGlkZGVuIHBpZHMnLCAnZGVidWcnKTtcbiAgICAgICAgY29uc3QgaGlkZGVuUGlkcyA9IGF3YWl0IFJvb3RjaGVja1JlcXVlc3QuYWdlbnRzV2l0aEhpZGRlblBpZHMoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBoaWRkZW5QaWRzICYmXG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgIHRleHQ6IGAke2hpZGRlblBpZHN9IG9mICR7dG90YWxBZ2VudHN9IGFnZW50cyBoYXZlIGhpZGRlbiBwcm9jZXNzZXNgLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICFoaWRkZW5QaWRzICYmXG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgdGV4dDogYE5vIGFnZW50cyBoYXZlIGhpZGRlbiBwcm9jZXNzZXNgLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGlkZGVuUG9ydHMgPSBhd2FpdCBSb290Y2hlY2tSZXF1ZXN0LmFnZW50c1dpdGhIaWRkZW5Qb3J0cyhcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICk7XG4gICAgICAgIGhpZGRlblBvcnRzICYmXG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgIHRleHQ6IGAke2hpZGRlblBvcnRzfSBvZiAke3RvdGFsQWdlbnRzfSBhZ2VudHMgaGF2ZSBoaWRkZW4gcG9ydHNgLFxuICAgICAgICAgICAgc3R5bGU6ICdoMycsXG4gICAgICAgICAgfSk7XG4gICAgICAgICFoaWRkZW5Qb3J0cyAmJlxuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICB0ZXh0OiBgTm8gYWdlbnRzIGhhdmUgaGlkZGVuIHBvcnRzYCxcbiAgICAgICAgICAgIHN0eWxlOiAnaDMnLFxuICAgICAgICAgIH0pO1xuICAgICAgICBwcmludGVyLmFkZE5ld0xpbmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFsnb3ZlcnZpZXcnLCAnYWdlbnRzJ10uaW5jbHVkZXMoc2VjdGlvbikgJiYgdGFiID09PSAncGNpJykge1xuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0ZldGNoaW5nIHRvcCBQQ0kgRFNTIHJlcXVpcmVtZW50cycsICdkZWJ1ZycpO1xuICAgICAgICBjb25zdCB0b3BQY2lSZXF1aXJlbWVudHMgPSBhd2FpdCBQQ0lSZXF1ZXN0LnRvcFBDSVJlcXVpcmVtZW50cyhcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICk7XG4gICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHtcbiAgICAgICAgICB0ZXh0OiAnTW9zdCBjb21tb24gUENJIERTUyByZXF1aXJlbWVudHMgYWxlcnRzIGZvdW5kJyxcbiAgICAgICAgICBzdHlsZTogJ2gyJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b3BQY2lSZXF1aXJlbWVudHMpIHtcbiAgICAgICAgICBjb25zdCBydWxlcyA9IGF3YWl0IFBDSVJlcXVlc3QuZ2V0UnVsZXNCeVJlcXVpcmVtZW50KFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgcGF0dGVyblxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoeyB0ZXh0OiBgUmVxdWlyZW1lbnQgJHtpdGVtfWAsIHN0eWxlOiAnaDMnIH0pO1xuXG4gICAgICAgICAgaWYgKFBDSVtpdGVtXSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9XG4gICAgICAgICAgICAgIHR5cGVvZiBQQ0lbaXRlbV0gPT09ICdzdHJpbmcnID8geyB0ZXh0OiBQQ0lbaXRlbV0sIHN0eWxlOiAnc3RhbmRhcmQnIH0gOiBQQ0lbaXRlbV07XG4gICAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnRXaXRoTmV3TGluZShjb250ZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBydWxlcyAmJlxuICAgICAgICAgICAgcnVsZXMubGVuZ3RoICYmXG4gICAgICAgICAgICBwcmludGVyLmFkZFNpbXBsZVRhYmxlKHtcbiAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdydWxlSUQnLCBsYWJlbDogJ1J1bGUgSUQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3J1bGVEZXNjcmlwdGlvbicsIGxhYmVsOiAnRGVzY3JpcHRpb24nIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGl0ZW1zOiBydWxlcyxcbiAgICAgICAgICAgICAgdGl0bGU6IGBUb3AgcnVsZXMgZm9yICR7aXRlbX0gcmVxdWlyZW1lbnRgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFsnb3ZlcnZpZXcnLCAnYWdlbnRzJ10uaW5jbHVkZXMoc2VjdGlvbikgJiYgdGFiID09PSAndHNjJykge1xuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0ZldGNoaW5nIHRvcCBUU0MgcmVxdWlyZW1lbnRzJywgJ2RlYnVnJyk7XG4gICAgICAgIGNvbnN0IHRvcFRTQ1JlcXVpcmVtZW50cyA9IGF3YWl0IFRTQ1JlcXVlc3QudG9wVFNDUmVxdWlyZW1lbnRzKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgKTtcbiAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgIHRleHQ6ICdNb3N0IGNvbW1vbiBUU0MgcmVxdWlyZW1lbnRzIGFsZXJ0cyBmb3VuZCcsXG4gICAgICAgICAgc3R5bGU6ICdoMicsXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9wVFNDUmVxdWlyZW1lbnRzKSB7XG4gICAgICAgICAgY29uc3QgcnVsZXMgPSBhd2FpdCBUU0NSZXF1ZXN0LmdldFJ1bGVzQnlSZXF1aXJlbWVudChcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICApO1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHsgdGV4dDogYFJlcXVpcmVtZW50ICR7aXRlbX1gLCBzdHlsZTogJ2gzJyB9KTtcblxuICAgICAgICAgIGlmIChUU0NbaXRlbV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPVxuICAgICAgICAgICAgICB0eXBlb2YgVFNDW2l0ZW1dID09PSAnc3RyaW5nJyA/IHsgdGV4dDogVFNDW2l0ZW1dLCBzdHlsZTogJ3N0YW5kYXJkJyB9IDogVFNDW2l0ZW1dO1xuICAgICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoY29udGVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcnVsZXMgJiZcbiAgICAgICAgICAgIHJ1bGVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgcHJpbnRlci5hZGRTaW1wbGVUYWJsZSh7XG4gICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAncnVsZUlEJywgbGFiZWw6ICdSdWxlIElEJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdydWxlRGVzY3JpcHRpb24nLCBsYWJlbDogJ0Rlc2NyaXB0aW9uJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBpdGVtczogcnVsZXMsXG4gICAgICAgICAgICAgIHRpdGxlOiBgVG9wIHJ1bGVzIGZvciAke2l0ZW19IHJlcXVpcmVtZW50YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChbJ292ZXJ2aWV3JywgJ2FnZW50cyddLmluY2x1ZGVzKHNlY3Rpb24pICYmIHRhYiA9PT0gJ2dkcHInKSB7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCAnRmV0Y2hpbmcgdG9wIEdEUFIgcmVxdWlyZW1lbnRzJywgJ2RlYnVnJyk7XG4gICAgICAgIGNvbnN0IHRvcEdkcHJSZXF1aXJlbWVudHMgPSBhd2FpdCBHRFBSUmVxdWVzdC50b3BHRFBSUmVxdWlyZW1lbnRzKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgKTtcbiAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgIHRleHQ6ICdNb3N0IGNvbW1vbiBHRFBSIHJlcXVpcmVtZW50cyBhbGVydHMgZm91bmQnLFxuICAgICAgICAgIHN0eWxlOiAnaDInLFxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRvcEdkcHJSZXF1aXJlbWVudHMpIHtcbiAgICAgICAgICBjb25zdCBydWxlcyA9IGF3YWl0IEdEUFJSZXF1ZXN0LmdldFJ1bGVzQnlSZXF1aXJlbWVudChcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgICApO1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHsgdGV4dDogYFJlcXVpcmVtZW50ICR7aXRlbX1gLCBzdHlsZTogJ2gzJyB9KTtcblxuICAgICAgICAgIGlmIChHRFBSICYmIEdEUFJbaXRlbV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPVxuICAgICAgICAgICAgICB0eXBlb2YgR0RQUltpdGVtXSA9PT0gJ3N0cmluZycgPyB7IHRleHQ6IEdEUFJbaXRlbV0sIHN0eWxlOiAnc3RhbmRhcmQnIH0gOiBHRFBSW2l0ZW1dO1xuICAgICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoY29udGVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcnVsZXMgJiZcbiAgICAgICAgICAgIHJ1bGVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgcHJpbnRlci5hZGRTaW1wbGVUYWJsZSh7XG4gICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAncnVsZUlEJywgbGFiZWw6ICdSdWxlIElEJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdydWxlRGVzY3JpcHRpb24nLCBsYWJlbDogJ0Rlc2NyaXB0aW9uJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBpdGVtczogcnVsZXMsXG4gICAgICAgICAgICAgIHRpdGxlOiBgVG9wIHJ1bGVzIGZvciAke2l0ZW19IHJlcXVpcmVtZW50YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByaW50ZXIuYWRkTmV3TGluZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdGlvbiA9PT0gJ292ZXJ2aWV3JyAmJiB0YWIgPT09ICdhdWRpdCcpIHtcbiAgICAgICAgbG9nKFxuICAgICAgICAgICdyZXBvcnRpbmc6ZXh0ZW5kZWRJbmZvcm1hdGlvbicsXG4gICAgICAgICAgJ0ZldGNoaW5nIGFnZW50cyB3aXRoIGhpZ2ggbnVtYmVyIG9mIGZhaWxlZCBzdWRvIGNvbW1hbmRzJyxcbiAgICAgICAgICAnZGVidWcnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGF1ZGl0QWdlbnRzTm9uU3VjY2VzcyA9IGF3YWl0IEF1ZGl0UmVxdWVzdC5nZXRUb3AzQWdlbnRzU3Vkb05vblN1Y2Nlc3NmdWwoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBpZiAoYXVkaXRBZ2VudHNOb25TdWNjZXNzICYmIGF1ZGl0QWdlbnRzTm9uU3VjY2Vzcy5sZW5ndGgpIHtcbiAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnQoe1xuICAgICAgICAgICAgdGV4dDogJ0FnZW50cyB3aXRoIGhpZ2ggbnVtYmVyIG9mIGZhaWxlZCBzdWRvIGNvbW1hbmRzJyxcbiAgICAgICAgICAgIHN0eWxlOiAnaDInLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IHRoaXMuYnVpbGRBZ2VudHNUYWJsZShjb250ZXh0LCBwcmludGVyLCBhdWRpdEFnZW50c05vblN1Y2Nlc3MsIGFwaUlkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdWRpdEFnZW50c0ZhaWxlZFN5c2NhbGwgPSBhd2FpdCBBdWRpdFJlcXVlc3QuZ2V0VG9wM0FnZW50c0ZhaWxlZFN5c2NhbGxzKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGF1ZGl0QWdlbnRzRmFpbGVkU3lzY2FsbCAmJiBhdWRpdEFnZW50c0ZhaWxlZFN5c2NhbGwubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRTaW1wbGVUYWJsZSh7XG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgIHsgaWQ6ICdhZ2VudCcsIGxhYmVsOiAnQWdlbnQgSUQnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdzeXNjYWxsX2lkJywgbGFiZWw6ICdTeXNjYWxsIElEJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAnc3lzY2FsbF9zeXNjYWxsJywgbGFiZWw6ICdTeXNjYWxsJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGl0ZW1zOiBhdWRpdEFnZW50c0ZhaWxlZFN5c2NhbGwubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICBhZ2VudDogaXRlbS5hZ2VudCxcbiAgICAgICAgICAgICAgc3lzY2FsbF9pZDogaXRlbS5zeXNjYWxsLmlkLFxuICAgICAgICAgICAgICBzeXNjYWxsX3N5c2NhbGw6IGl0ZW0uc3lzY2FsbC5zeXNjYWxsLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgdGV4dDogJ01vc3QgY29tbW9uIGZhaWxpbmcgc3lzY2FsbHMnLFxuICAgICAgICAgICAgICBzdHlsZTogJ2gyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3Rpb24gPT09ICdvdmVydmlldycgJiYgdGFiID09PSAnZmltJykge1xuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0ZldGNoaW5nIHRvcCAzIHJ1bGVzIGZvciBGSU0nLCAnZGVidWcnKTtcbiAgICAgICAgY29uc3QgcnVsZXMgPSBhd2FpdCBTeXNjaGVja1JlcXVlc3QudG9wM1J1bGVzKGNvbnRleHQsIGZyb20sIHRvLCBmaWx0ZXJzLCBwYXR0ZXJuKTtcblxuICAgICAgICBpZiAocnVsZXMgJiYgcnVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoeyB0ZXh0OiAnVG9wIDMgRklNIHJ1bGVzJywgc3R5bGU6ICdoMicgfSkuYWRkU2ltcGxlVGFibGUoe1xuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICB7IGlkOiAncnVsZUlEJywgbGFiZWw6ICdSdWxlIElEJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAncnVsZURlc2NyaXB0aW9uJywgbGFiZWw6ICdEZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpdGVtczogcnVsZXMsXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICB0ZXh0OiAnVG9wIDMgcnVsZXMgdGhhdCBhcmUgZ2VuZXJhdGluZyBtb3N0IGFsZXJ0cy4nLFxuICAgICAgICAgICAgICBzdHlsZTogJ3N0YW5kYXJkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgJ0ZldGNoaW5nIHRvcCAzIGFnZW50cyBmb3IgRklNJywgJ2RlYnVnJyk7XG4gICAgICAgIGNvbnN0IGFnZW50cyA9IGF3YWl0IFN5c2NoZWNrUmVxdWVzdC50b3AzYWdlbnRzKGNvbnRleHQsIGZyb20sIHRvLCBmaWx0ZXJzLCBwYXR0ZXJuKTtcblxuICAgICAgICBpZiAoYWdlbnRzICYmIGFnZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnRXaXRoTmV3TGluZSh7XG4gICAgICAgICAgICB0ZXh0OiAnQWdlbnRzIHdpdGggc3VzcGljaW91cyBGSU0gYWN0aXZpdHknLFxuICAgICAgICAgICAgc3R5bGU6ICdoMicsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgJ1RvcCAzIGFnZW50cyB0aGF0IGhhdmUgbW9zdCBGSU0gYWxlcnRzIGZyb20gbGV2ZWwgNyB0byBsZXZlbCAxNS4gVGFrZSBjYXJlIGFib3V0IHRoZW0uJyxcbiAgICAgICAgICAgIHN0eWxlOiAnc3RhbmRhcmQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IHRoaXMuYnVpbGRBZ2VudHNUYWJsZShjb250ZXh0LCBwcmludGVyLCBhZ2VudHMsIGFwaUlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdGlvbiA9PT0gJ2FnZW50cycgJiYgdGFiID09PSAnYXVkaXQnKSB7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCBgRmV0Y2hpbmcgbW9zdCBjb21tb24gZmFpbGVkIHN5c2NhbGxzYCwgJ2RlYnVnJyk7XG4gICAgICAgIGNvbnN0IGF1ZGl0RmFpbGVkU3lzY2FsbCA9IGF3YWl0IEF1ZGl0UmVxdWVzdC5nZXRUb3BGYWlsZWRTeXNjYWxscyhcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICk7XG4gICAgICAgIGF1ZGl0RmFpbGVkU3lzY2FsbCAmJlxuICAgICAgICAgIGF1ZGl0RmFpbGVkU3lzY2FsbC5sZW5ndGggJiZcbiAgICAgICAgICBwcmludGVyLmFkZFNpbXBsZVRhYmxlKHtcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgeyBpZDogJ2lkJywgbGFiZWw6ICdpZCcgfSxcbiAgICAgICAgICAgICAgeyBpZDogJ3N5c2NhbGwnLCBsYWJlbDogJ1N5c2NhbGwnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6IGF1ZGl0RmFpbGVkU3lzY2FsbCxcbiAgICAgICAgICAgIHRpdGxlOiAnTW9zdCBjb21tb24gZmFpbGluZyBzeXNjYWxscycsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN0aW9uID09PSAnYWdlbnRzJyAmJiB0YWIgPT09ICdmaW0nKSB7XG4gICAgICAgIGxvZyhcbiAgICAgICAgICAncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLFxuICAgICAgICAgIGBGZXRjaGluZyBzeXNjaGVjayBkYXRhYmFzZSBmb3IgYWdlbnQgJHthZ2VudH1gLFxuICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsYXN0U2NhblJlc3BvbnNlID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdChcbiAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICBgL3N5c2NoZWNrLyR7YWdlbnR9L2xhc3Rfc2NhbmAsXG4gICAgICAgICAge30sXG4gICAgICAgICAgeyBhcGlIb3N0SUQ6IGFwaUlkIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobGFzdFNjYW5SZXNwb25zZSAmJiBsYXN0U2NhblJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBsYXN0U2NhbkRhdGEgPSBsYXN0U2NhblJlc3BvbnNlLmRhdGEuZGF0YS5hZmZlY3RlZF9pdGVtc1swXTtcbiAgICAgICAgICBpZiAobGFzdFNjYW5EYXRhLnN0YXJ0ICYmIGxhc3RTY2FuRGF0YS5lbmQpIHtcbiAgICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICAgIHRleHQ6IGBMYXN0IGZpbGUgaW50ZWdyaXR5IG1vbml0b3Jpbmcgc2NhbiB3YXMgZXhlY3V0ZWQgZnJvbSAke2xhc3RTY2FuRGF0YS5zdGFydH0gdG8gJHtsYXN0U2NhbkRhdGEuZW5kfS5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsYXN0U2NhbkRhdGEuc3RhcnQpIHtcbiAgICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICAgIHRleHQ6IGBGaWxlIGludGVncml0eSBtb25pdG9yaW5nIHNjYW4gaXMgY3VycmVudGx5IGluIHByb2dyZXNzIGZvciB0aGlzIGFnZW50IChzdGFydGVkIG9uICR7bGFzdFNjYW5EYXRhLnN0YXJ0fSkuYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnQoe1xuICAgICAgICAgICAgICB0ZXh0OiBgRmlsZSBpbnRlZ3JpdHkgbW9uaXRvcmluZyBzY2FuIGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcyBmb3IgdGhpcyBhZ2VudC5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByaW50ZXIuYWRkTmV3TGluZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nKCdyZXBvcnRpbmc6ZXh0ZW5kZWRJbmZvcm1hdGlvbicsIGBGZXRjaGluZyBsYXN0IDEwIGRlbGV0ZWQgZmlsZXMgZm9yIEZJTWAsICdkZWJ1ZycpO1xuICAgICAgICBjb25zdCBsYXN0VGVuRGVsZXRlZCA9IGF3YWl0IFN5c2NoZWNrUmVxdWVzdC5sYXN0VGVuRGVsZXRlZEZpbGVzKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgKTtcblxuICAgICAgICBsYXN0VGVuRGVsZXRlZCAmJlxuICAgICAgICAgIGxhc3RUZW5EZWxldGVkLmxlbmd0aCAmJlxuICAgICAgICAgIHByaW50ZXIuYWRkU2ltcGxlVGFibGUoe1xuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICB7IGlkOiAncGF0aCcsIGxhYmVsOiAnUGF0aCcgfSxcbiAgICAgICAgICAgICAgeyBpZDogJ2RhdGUnLCBsYWJlbDogJ0RhdGUnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6IGxhc3RUZW5EZWxldGVkLFxuICAgICAgICAgICAgdGl0bGU6ICdMYXN0IDEwIGRlbGV0ZWQgZmlsZXMnLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxvZygncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLCBgRmV0Y2hpbmcgbGFzdCAxMCBtb2RpZmllZCBmaWxlc2AsICdkZWJ1ZycpO1xuICAgICAgICBjb25zdCBsYXN0VGVuTW9kaWZpZWQgPSBhd2FpdCBTeXNjaGVja1JlcXVlc3QubGFzdFRlbk1vZGlmaWVkRmlsZXMoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuXG4gICAgICAgIGxhc3RUZW5Nb2RpZmllZCAmJlxuICAgICAgICAgIGxhc3RUZW5Nb2RpZmllZC5sZW5ndGggJiZcbiAgICAgICAgICBwcmludGVyLmFkZFNpbXBsZVRhYmxlKHtcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgeyBpZDogJ3BhdGgnLCBsYWJlbDogJ1BhdGgnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdkYXRlJywgbGFiZWw6ICdEYXRlJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGl0ZW1zOiBsYXN0VGVuTW9kaWZpZWQsXG4gICAgICAgICAgICB0aXRsZTogJ0xhc3QgMTAgbW9kaWZpZWQgZmlsZXMnLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdGlvbiA9PT0gJ2FnZW50cycgJiYgdGFiID09PSAnc3lzY29sbGVjdG9yJykge1xuICAgICAgICBsb2coXG4gICAgICAgICAgJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJyxcbiAgICAgICAgICBgRmV0Y2hpbmcgaGFyZHdhcmUgaW5mb3JtYXRpb24gZm9yIGFnZW50ICR7YWdlbnR9YCxcbiAgICAgICAgICAnZGVidWcnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzU3lzY29sbGVjdG9yTGlzdHMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3lzY29sbGVjdG9yLyR7YWdlbnR9L2hhcmR3YXJlYCxcbiAgICAgICAgICAgIGxvZ2dlck1lc3NhZ2U6IGBGZXRjaGluZyBIYXJkd2FyZSBpbmZvcm1hdGlvbiBmb3IgYWdlbnQgJHthZ2VudH1gLFxuICAgICAgICAgICAgbGlzdDoge1xuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnSGFyZHdhcmUgaW5mb3JtYXRpb24nLCBzdHlsZTogJ2gyJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcFJlc3BvbnNlOiAoaGFyZHdhcmUpID0+IFtcbiAgICAgICAgICAgICAgaGFyZHdhcmUuY3B1ICYmIGhhcmR3YXJlLmNwdS5jb3JlcyAmJiBgJHtoYXJkd2FyZS5jcHUuY29yZXN9IGNvcmVzYCxcbiAgICAgICAgICAgICAgaGFyZHdhcmUuY3B1ICYmIGhhcmR3YXJlLmNwdS5uYW1lLFxuICAgICAgICAgICAgICBoYXJkd2FyZS5yYW0gJiZcbiAgICAgICAgICAgICAgICBoYXJkd2FyZS5yYW0udG90YWwgJiZcbiAgICAgICAgICAgICAgICBgJHtOdW1iZXIoaGFyZHdhcmUucmFtLnRvdGFsIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMil9R0IgUkFNYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9zeXNjb2xsZWN0b3IvJHthZ2VudH0vb3NgLFxuICAgICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIE9TIGluZm9ybWF0aW9uIGZvciBhZ2VudCAke2FnZW50fWAsXG4gICAgICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdPUyBpbmZvcm1hdGlvbicsIHN0eWxlOiAnaDInIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFwUmVzcG9uc2U6IChvc0RhdGEpID0+IFtcbiAgICAgICAgICAgICAgb3NEYXRhLnN5c25hbWUsXG4gICAgICAgICAgICAgIG9zRGF0YS52ZXJzaW9uLFxuICAgICAgICAgICAgICBvc0RhdGEuYXJjaGl0ZWN0dXJlLFxuICAgICAgICAgICAgICBvc0RhdGEucmVsZWFzZSxcbiAgICAgICAgICAgICAgb3NEYXRhLm9zICYmXG4gICAgICAgICAgICAgICAgb3NEYXRhLm9zLm5hbWUgJiZcbiAgICAgICAgICAgICAgICBvc0RhdGEub3MudmVyc2lvbiAmJlxuICAgICAgICAgICAgICAgIGAke29zRGF0YS5vcy5uYW1lfSAke29zRGF0YS5vcy52ZXJzaW9ufWAsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3Qgc3lzY29sbGVjdG9yTGlzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICByZXF1ZXN0c1N5c2NvbGxlY3Rvckxpc3RzLm1hcChhc3luYyAocmVxdWVzdFN5c2NvbGxlY3RvcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgbG9nKCdyZXBvcnRpbmc6ZXh0ZW5kZWRJbmZvcm1hdGlvbicsIHJlcXVlc3RTeXNjb2xsZWN0b3IubG9nZ2VyTWVzc2FnZSwgJ2RlYnVnJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlU3lzY29sbGVjdG9yID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdChcbiAgICAgICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3lzY29sbGVjdG9yLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IFtkYXRhXSA9XG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlU3lzY29sbGVjdG9yICYmXG4gICAgICAgICAgICAgICAgICByZXNwb25zZVN5c2NvbGxlY3Rvci5kYXRhICYmXG4gICAgICAgICAgICAgICAgICByZXNwb25zZVN5c2NvbGxlY3Rvci5kYXRhLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlU3lzY29sbGVjdG9yLmRhdGEuZGF0YS5hZmZlY3RlZF9pdGVtcykgfHxcbiAgICAgICAgICAgICAgICBbXTtcbiAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4ucmVxdWVzdFN5c2NvbGxlY3Rvci5saXN0LFxuICAgICAgICAgICAgICAgICAgbGlzdDogcmVxdWVzdFN5c2NvbGxlY3Rvci5tYXBSZXNwb25zZShkYXRhKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc3lzY29sbGVjdG9yTGlzdHMpIHtcbiAgICAgICAgICBzeXNjb2xsZWN0b3JMaXN0c1xuICAgICAgICAgICAgLmZpbHRlcigoc3lzY29sbGVjdG9yTGlzdCkgPT4gc3lzY29sbGVjdG9yTGlzdClcbiAgICAgICAgICAgIC5mb3JFYWNoKChzeXNjb2xsZWN0b3JMaXN0KSA9PiBwcmludGVyLmFkZExpc3Qoc3lzY29sbGVjdG9yTGlzdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdnVsbmVyYWJpbGl0aWVzUmVxdWVzdHMgPSBbJ0NyaXRpY2FsJywgJ0hpZ2gnXTtcblxuICAgICAgICBjb25zdCB2dWxuZXJhYmlsaXRpZXNSZXNwb25zZXNJdGVtcyA9IChcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIHZ1bG5lcmFiaWxpdGllc1JlcXVlc3RzLm1hcChhc3luYyAodnVsbmVyYWJpbGl0aWVzTGV2ZWwpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgICAncmVwb3J0aW5nOmV4dGVuZGVkSW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgICAgICAgYEZldGNoaW5nIHRvcCAke3Z1bG5lcmFiaWxpdGllc0xldmVsfSBwYWNrYWdlc2AsXG4gICAgICAgICAgICAgICAgICAnZGVidWcnXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBWdWxuZXJhYmlsaXR5UmVxdWVzdC50b3BQYWNrYWdlcyhcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICAgICAgICB2dWxuZXJhYmlsaXRpZXNMZXZlbCxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2coJ3JlcG9ydGluZzpleHRlbmRlZEluZm9ybWF0aW9uJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICAgLmZpbHRlcigodnVsbmVyYWJpbGl0aWVzUmVzcG9uc2UpID0+IHZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlKVxuICAgICAgICAgIC5mbGF0KCk7XG5cbiAgICAgICAgaWYgKHZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlc0l0ZW1zICYmIHZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlc0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHByaW50ZXIuYWRkU2ltcGxlVGFibGUoe1xuICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ1Z1bG5lcmFibGUgcGFja2FnZXMgZm91bmQgKGxhc3QgMjQgaG91cnMpJywgc3R5bGU6ICdoMicgfSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgeyBpZDogJ3BhY2thZ2UnLCBsYWJlbDogJ1BhY2thZ2UnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICdzZXZlcml0eScsIGxhYmVsOiAnU2V2ZXJpdHknIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6IHZ1bG5lcmFiaWxpdGllc1Jlc3BvbnNlc0l0ZW1zLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN0aW9uID09PSAnYWdlbnRzJyAmJiB0YWIgPT09ICd2dWxzJykge1xuICAgICAgICBjb25zdCB0b3BDcml0aWNhbFBhY2thZ2VzID0gYXdhaXQgVnVsbmVyYWJpbGl0eVJlcXVlc3QudG9wUGFja2FnZXNXaXRoQ1ZFKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgZnJvbSxcbiAgICAgICAgICB0byxcbiAgICAgICAgICAnQ3JpdGljYWwnLFxuICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgcGF0dGVyblxuICAgICAgICApO1xuICAgICAgICBpZiAodG9wQ3JpdGljYWxQYWNrYWdlcyAmJiB0b3BDcml0aWNhbFBhY2thZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHsgdGV4dDogJ0NyaXRpY2FsIHNldmVyaXR5Jywgc3R5bGU6ICdoMicgfSk7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoe1xuICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgJ1RoZXNlIHZ1bG5lcmFiaWx0aWVzIGFyZSBjcml0aWNhbCwgcGxlYXNlIHJldmlldyB5b3VyIGFnZW50LiBDbGljayBvbiBlYWNoIGxpbmsgdG8gcmVhZCBtb3JlIGFib3V0IGVhY2ggZm91bmQgdnVsbmVyYWJpbGl0eS4nLFxuICAgICAgICAgICAgc3R5bGU6ICdzdGFuZGFyZCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY3VzdG9tdWwgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNyaXRpY2FsIG9mIHRvcENyaXRpY2FsUGFja2FnZXMpIHtcbiAgICAgICAgICAgIGN1c3RvbXVsLnB1c2goeyB0ZXh0OiBjcml0aWNhbC5wYWNrYWdlLCBzdHlsZTogJ3N0YW5kYXJkJyB9KTtcbiAgICAgICAgICAgIGN1c3RvbXVsLnB1c2goe1xuICAgICAgICAgICAgICB1bDogY3JpdGljYWwucmVmZXJlbmNlcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbS5zdWJzdHJpbmcoMCwgODApICsgJy4uLicsXG4gICAgICAgICAgICAgICAgbGluazogaXRlbSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMxRUE1QzgnLFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoeyB1bDogY3VzdG9tdWwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3BIaWdoUGFja2FnZXMgPSBhd2FpdCBWdWxuZXJhYmlsaXR5UmVxdWVzdC50b3BQYWNrYWdlc1dpdGhDVkUoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgICdIaWdoJyxcbiAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgIHBhdHRlcm5cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRvcEhpZ2hQYWNrYWdlcyAmJiB0b3BIaWdoUGFja2FnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50V2l0aE5ld0xpbmUoeyB0ZXh0OiAnSGlnaCBzZXZlcml0eScsIHN0eWxlOiAnaDInIH0pO1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudFdpdGhOZXdMaW5lKHtcbiAgICAgICAgICAgIHRleHQ6ICdDbGljayBvbiBlYWNoIGxpbmsgdG8gcmVhZCBtb3JlIGFib3V0IGVhY2ggZm91bmQgdnVsbmVyYWJpbGl0eS4nLFxuICAgICAgICAgICAgc3R5bGU6ICdzdGFuZGFyZCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY3VzdG9tdWwgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNyaXRpY2FsIG9mIHRvcEhpZ2hQYWNrYWdlcykge1xuICAgICAgICAgICAgY3VzdG9tdWwucHVzaCh7IHRleHQ6IGNyaXRpY2FsLnBhY2thZ2UsIHN0eWxlOiAnc3RhbmRhcmQnIH0pO1xuICAgICAgICAgICAgY3VzdG9tdWwucHVzaCh7XG4gICAgICAgICAgICAgIHVsOiBjcml0aWNhbC5yZWZlcmVuY2VzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzFFQTVDOCcsXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXN0b211bCAmJiBjdXN0b211bC5sZW5ndGggJiYgcHJpbnRlci5hZGRDb250ZW50KHsgdWw6IGN1c3RvbXVsIH0pO1xuICAgICAgICAgIHByaW50ZXIuYWRkTmV3TGluZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdyZXBvcnRpbmc6ZXh0ZW5kZWRJbmZvcm1hdGlvbicsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ1Jvd3MoZGF0YSwgbGFiZWxzKSB7XG4gICAgbG9nKCdyZXBvcnRpbmc6Z2V0Q29uZmlnUm93cycsIGBCdWlsZGluZyBjb25maWd1cmF0aW9uIHJvd3NgLCAnaW5mbycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gZGF0YSB8fCBbXSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtwcm9wXSkpIHtcbiAgICAgICAgZGF0YVtwcm9wXS5mb3JFYWNoKCh4LCBpZHgpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnKSBkYXRhW3Byb3BdW2lkeF0gPSBKU09OLnN0cmluZ2lmeSh4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChbKGxhYmVscyB8fCB7fSlbcHJvcF0gfHwgS2V5RXF1aXZhbGVuY2VbcHJvcF0gfHwgcHJvcCwgZGF0YVtwcm9wXSB8fCAnLSddKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlnVGFibGVzKGRhdGEsIHNlY3Rpb24sIHRhYiwgYXJyYXkgPSBbXSkge1xuICAgIGxvZygncmVwb3J0aW5nOmdldENvbmZpZ1RhYmxlcycsIGBCdWlsZGluZyBjb25maWd1cmF0aW9uIHRhYmxlc2AsICdpbmZvJyk7XG4gICAgbGV0IHBsYWluRGF0YSA9IHt9O1xuICAgIGNvbnN0IG5lc3RlZERhdGEgPSBbXTtcbiAgICBjb25zdCB0YWJsZURhdGEgPSBbXTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0YWJsZURhdGFbc2VjdGlvbi5jb25maWdbdGFiXS5jb25maWd1cmF0aW9uXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAodHlwZW9mIGRhdGFba2V5XSAhPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSkgfHxcbiAgICAgICAgICAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pICYmIHR5cGVvZiBkYXRhW2tleV1bMF0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGFpbkRhdGFba2V5XSA9XG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgJiYgdHlwZW9mIGRhdGFba2V5XVswXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBkYXRhW2tleV0ubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoeCkgOiB4ICsgJ1xcbic7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBkYXRhW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pICYmIHR5cGVvZiBkYXRhW2tleV1bMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGFibGVEYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlY3Rpb24uaXNHcm91cENvbmZpZyAmJiBbJ3BhY2snLCAnY29udGVudCddLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIHRhYmxlRGF0YVtrZXldID0gW2RhdGFba2V5XV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5lc3RlZERhdGEucHVzaChkYXRhW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhcnJheS5wdXNoKHtcbiAgICAgIHRpdGxlOiAoc2VjdGlvbi5vcHRpb25zIHx8IHt9KS5oaWRlSGVhZGVyXG4gICAgICAgID8gJydcbiAgICAgICAgOiAoc2VjdGlvbi50YWJzIHx8IFtdKVt0YWJdIHx8XG4gICAgICAgICAgKHNlY3Rpb24uaXNHcm91cENvbmZpZyA/ICgoc2VjdGlvbi5sYWJlbHMgfHwgW10pWzBdIHx8IFtdKVt0YWJdIDogJycpLFxuICAgICAgY29sdW1uczogWycnLCAnJ10sXG4gICAgICB0eXBlOiAnY29uZmlnJyxcbiAgICAgIHJvd3M6IHRoaXMuZ2V0Q29uZmlnUm93cyhwbGFpbkRhdGEsIChzZWN0aW9uLmxhYmVscyB8fCBbXSlbMF0pLFxuICAgIH0pO1xuICAgIGZvciAobGV0IGtleSBpbiB0YWJsZURhdGEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBPYmplY3Qua2V5cyh0YWJsZURhdGFba2V5XVswXSk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaSkgPT4ge1xuICAgICAgICBjb2x1bW5zW2ldID0gY29sWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2wuc2xpY2UoMSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgcm93cyA9IHRhYmxlRGF0YVtrZXldLm1hcCgoeCkgPT4ge1xuICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB4KSB7XG4gICAgICAgICAgcm93LnB1c2goXG4gICAgICAgICAgICB0eXBlb2YgeFtrZXldICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICA/IHhba2V5XVxuICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoeFtrZXldKVxuICAgICAgICAgICAgICA/IHhba2V5XS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB4ICsgJ1xcbic7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh4W2tleV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocm93Lmxlbmd0aCA8IGNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgcm93LnB1c2goJy0nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93O1xuICAgICAgfSk7XG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgdGl0bGU6ICgoc2VjdGlvbi5sYWJlbHMgfHwgW10pWzBdIHx8IFtdKVtrZXldIHx8ICcnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBjb2x1bW5zLFxuICAgICAgICByb3dzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIG5lc3RlZERhdGEuZm9yRWFjaChuZXN0ID0+IHtcbiAgICAgIHRoaXMuZ2V0Q29uZmlnVGFibGVzKG5lc3QsIHNlY3Rpb24sIHRhYiArIDEsIGFycmF5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmVwb3J0IGZvciB0aGUgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybnMgeyp9IHJlcG9ydHMgbGlzdCBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVSZXBvcnRzTW9kdWxlcyA9IHRoaXMuY2hlY2tSZXBvcnRzVXNlckRpcmVjdG9yeUlzVmFsaWRSb3V0ZURlY29yYXRvcihhc3luYyAoXG4gICAgY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LFxuICAgIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCxcbiAgICByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnlcbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNNb2R1bGVzJywgYFJlcG9ydCBzdGFydGVkYCwgJ2luZm8nKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXJyYXksXG4gICAgICAgIGFnZW50cyxcbiAgICAgICAgYnJvd3NlclRpbWV6b25lLFxuICAgICAgICBzZWFyY2hCYXIsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHRhYmxlcyxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgaW5kZXhQYXR0ZXJuVGl0bGUsXG4gICAgICAgIGFwaUlkXG4gICAgICB9ID0gcmVxdWVzdC5ib2R5O1xuICAgICAgY29uc3QgeyBtb2R1bGVJRCB9ID0gcmVxdWVzdC5wYXJhbXM7XG4gICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aW1lIHx8IHt9O1xuICAgICAgLy8gSW5pdFxuICAgICAgY29uc3QgcHJpbnRlciA9IG5ldyBSZXBvcnRQcmludGVyKCk7XG5cbiAgICAgIGNyZWF0ZURhdGFEaXJlY3RvcnlJZk5vdEV4aXN0cygpO1xuICAgICAgY3JlYXRlRGlyZWN0b3J5SWZOb3RFeGlzdHMoV0FaVUhfREFUQV9ET1dOTE9BRFNfRElSRUNUT1JZX1BBVEgpO1xuICAgICAgY3JlYXRlRGlyZWN0b3J5SWZOb3RFeGlzdHMoV0FaVUhfREFUQV9ET1dOTE9BRFNfUkVQT1JUU19ESVJFQ1RPUllfUEFUSCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhwYXRoLmpvaW4oV0FaVUhfREFUQV9ET1dOTE9BRFNfUkVQT1JUU19ESVJFQ1RPUllfUEFUSCwgY29udGV4dC53YXp1aEVuZHBvaW50UGFyYW1zLmhhc2hVc2VybmFtZSkpO1xuXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlckhlYWRlcihjb250ZXh0LCBwcmludGVyLCBzZWN0aW9uLCBtb2R1bGVJRCwgYWdlbnRzLCBhcGlJZCk7XG5cbiAgICAgIGNvbnN0IFtzYW5pdGl6ZWRGaWx0ZXJzLCBhZ2VudHNGaWx0ZXJdID0gZmlsdGVyc1xuICAgICAgICA/IHRoaXMuc2FuaXRpemVLaWJhbmFGaWx0ZXJzKGZpbHRlcnMsIHNlYXJjaEJhcilcbiAgICAgICAgOiBbZmFsc2UsIGZhbHNlXTtcblxuICAgICAgaWYgKHRpbWUgJiYgc2FuaXRpemVkRmlsdGVycykge1xuICAgICAgICBwcmludGVyLmFkZFRpbWVSYW5nZUFuZEZpbHRlcnMoZnJvbSwgdG8sIHNhbml0aXplZEZpbHRlcnMsIGJyb3dzZXJUaW1lem9uZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZXh0ZW5kZWRJbmZvcm1hdGlvbihcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHByaW50ZXIsXG4gICAgICAgICAgc2VjdGlvbixcbiAgICAgICAgICBtb2R1bGVJRCxcbiAgICAgICAgICBhcGlJZCxcbiAgICAgICAgICBuZXcgRGF0ZShmcm9tKS5nZXRUaW1lKCksXG4gICAgICAgICAgbmV3IERhdGUodG8pLmdldFRpbWUoKSxcbiAgICAgICAgICBzYW5pdGl6ZWRGaWx0ZXJzLFxuICAgICAgICAgIGluZGV4UGF0dGVyblRpdGxlLFxuICAgICAgICAgIGFnZW50c1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBwcmludGVyLmFkZFZpc3VhbGl6YXRpb25zKGFycmF5LCBhZ2VudHMsIG1vZHVsZUlEKTtcblxuICAgICAgaWYgKHRhYmxlcykge1xuICAgICAgICBwcmludGVyLmFkZFRhYmxlcyh0YWJsZXMpO1xuICAgICAgfVxuXG4gICAgICAvL2FkZCBhdXRob3JpemVkIGFnZW50c1xuICAgICAgaWYgKGFnZW50c0ZpbHRlcikge1xuICAgICAgICBwcmludGVyLmFkZEFnZW50c0ZpbHRlcnMoYWdlbnRzRmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgcHJpbnRlci5wcmludChjb250ZXh0LndhenVoRW5kcG9pbnRQYXJhbXMucGF0aEZpbGVuYW1lKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlcG9ydCAke2NvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5maWxlbmFtZX0gd2FzIGNyZWF0ZWRgLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDUwMjksIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfSwoe2JvZHk6eyBhZ2VudHMgfSwgcGFyYW1zOiB7IG1vZHVsZUlEIH19KSA9PiBgd2F6dWgtbW9kdWxlLSR7YWdlbnRzID8gYGFnZW50cy0ke2FnZW50c31gIDogJ292ZXJ2aWV3J30tJHttb2R1bGVJRH0tJHt0aGlzLmdlbmVyYXRlUmVwb3J0VGltZXN0YW1wKCl9LnBkZmApXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJlcG9ydCBmb3IgdGhlIGdyb3Vwc1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybnMgeyp9IHJlcG9ydHMgbGlzdCBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVSZXBvcnRzR3JvdXBzID0gdGhpcy5jaGVja1JlcG9ydHNVc2VyRGlyZWN0b3J5SXNWYWxpZFJvdXRlRGVjb3JhdG9yKGFzeW5jKFxuICAgIGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCxcbiAgICByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3QsXG4gICAgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsb2coJ3JlcG9ydGluZzpjcmVhdGVSZXBvcnRzR3JvdXBzJywgYFJlcG9ydCBzdGFydGVkYCwgJ2luZm8nKTtcbiAgICAgIGNvbnN0IHsgY29tcG9uZW50cywgYXBpSWQgfSA9IHJlcXVlc3QuYm9keTtcbiAgICAgIGNvbnN0IHsgZ3JvdXBJRCB9ID0gcmVxdWVzdC5wYXJhbXM7XG4gICAgICAvLyBJbml0XG4gICAgICBjb25zdCBwcmludGVyID0gbmV3IFJlcG9ydFByaW50ZXIoKTtcblxuICAgICAgY3JlYXRlRGF0YURpcmVjdG9yeUlmTm90RXhpc3RzKCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19ESVJFQ1RPUllfUEFUSCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeUlmTm90RXhpc3RzKHBhdGguam9pbihXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRILCBjb250ZXh0LndhenVoRW5kcG9pbnRQYXJhbXMuaGFzaFVzZXJuYW1lKSk7XG5cbiAgICAgIGxldCB0YWJsZXMgPSBbXTtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHtcbiAgICAgICAgbG9jYWxmaWxlOiAnTG9jYWwgZmlsZXMnLFxuICAgICAgICBvc3F1ZXJ5OiAnT3NxdWVyeScsXG4gICAgICAgIGNvbW1hbmQ6ICdDb21tYW5kJyxcbiAgICAgICAgc3lzY2hlY2s6ICdTeXNjaGVjaycsXG4gICAgICAgICdvcGVuLXNjYXAnOiAnT3BlblNDQVAnLFxuICAgICAgICAnY2lzLWNhdCc6ICdDSVMtQ0FUJyxcbiAgICAgICAgc3lzY29sbGVjdG9yOiAnU3lzY29sbGVjdG9yJyxcbiAgICAgICAgcm9vdGNoZWNrOiAnUm9vdGNoZWNrJyxcbiAgICAgICAgbGFiZWxzOiAnTGFiZWxzJyxcbiAgICAgICAgc2NhOiAnU2VjdXJpdHkgY29uZmlndXJhdGlvbiBhc3Nlc3NtZW50JyxcbiAgICAgIH07XG4gICAgICBwcmludGVyLmFkZENvbnRlbnQoe1xuICAgICAgICB0ZXh0OiBgR3JvdXAgJHtncm91cElEfSBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgc3R5bGU6ICdoMScsXG4gICAgICB9KTtcblxuICAgICAgLy8gR3JvdXAgY29uZmlndXJhdGlvblxuICAgICAgaWYgKGNvbXBvbmVudHNbJzAnXSkge1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBkYXRhOiBjb25maWd1cmF0aW9uIH0gfSA9IGF3YWl0IGNvbnRleHQud2F6dWguYXBpLmNsaWVudC5hc0N1cnJlbnRVc2VyLnJlcXVlc3QoXG4gICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgYC9ncm91cHMvJHtncm91cElEfS9jb25maWd1cmF0aW9uYCxcbiAgICAgICAgICB7fSxcbiAgICAgICAgICB7IGFwaUhvc3RJRDogYXBpSWQgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb25maWd1cmF0aW9uLmFmZmVjdGVkX2l0ZW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWd1cmF0aW9uLmFmZmVjdGVkX2l0ZW1zWzBdLmNvbmZpZykubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICB0ZXh0OiAnQ29uZmlndXJhdGlvbnMnLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDE0LCBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgICAgICBtYXJnaW46IFswLCAxMCwgMCwgMTVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB7XG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgaXNHcm91cENvbmZpZzogdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZvciAobGV0IGNvbmZpZyBvZiBjb25maWd1cmF0aW9uLmFmZmVjdGVkX2l0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyVGl0bGUgPSAnJztcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBmaWx0ZXIgb2YgT2JqZWN0LmtleXMoY29uZmlnLmZpbHRlcnMpKSB7XG4gICAgICAgICAgICAgIGZpbHRlclRpdGxlID0gZmlsdGVyVGl0bGUuY29uY2F0KGAke2ZpbHRlcn06ICR7Y29uZmlnLmZpbHRlcnNbZmlsdGVyXX1gKTtcbiAgICAgICAgICAgICAgaWYgKGluZGV4IDwgT2JqZWN0LmtleXMoY29uZmlnLmZpbHRlcnMpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJUaXRsZSA9IGZpbHRlclRpdGxlLmNvbmNhdCgnIHwgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICAgIHRleHQ6IGZpbHRlclRpdGxlLFxuICAgICAgICAgICAgICBzdHlsZTogJ2g0JyxcbiAgICAgICAgICAgICAgbWFyZ2luOiBbMCwgMCwgMCwgMTBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgICAgIHNlY3Rpb24udGFicyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgX2Qgb2YgT2JqZWN0LmtleXMoY29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBBZ2VudENvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzIG9mIGMuc2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb24ub3B0cyA9IHMub3B0cyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNuIG9mIHMuY29uZmlnIHx8IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbi5jb25maWd1cmF0aW9uID09PSBfZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ubGFiZWxzID0gcy5sYWJlbHMgfHwgW1tdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgd28gb2Ygcy53b2RsZSB8fCBbXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod28ubmFtZSA9PT0gX2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLmxhYmVscyA9IHMubGFiZWxzIHx8IFtbXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VjdGlvbi5sYWJlbHNbMF1bJ3BhY2snXSA9ICdQYWNrcyc7XG4gICAgICAgICAgICAgIHNlY3Rpb24ubGFiZWxzWzBdWydjb250ZW50J10gPSAnRXZhbHVhdGlvbnMnO1xuICAgICAgICAgICAgICBzZWN0aW9uLmxhYmVsc1swXVsnNyddID0gJ1NjYW4gbGlzdGVuaW5nIG5ldHdvdGsgcG9ydHMnO1xuICAgICAgICAgICAgICBzZWN0aW9uLnRhYnMucHVzaChlcXVpdmFsZW5jZXNbX2RdKTtcblxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuY29uZmlnW19kXSkpIHtcbiAgICAgICAgICAgICAgICAvKiBMT0cgQ09MTEVDVE9SICovXG4gICAgICAgICAgICAgICAgaWYgKF9kID09PSAnbG9jYWxmaWxlJykge1xuICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgY29uZmlnLmNvbmZpZ1tfZF0uZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBzW29iai5sb2dmb3JtYXRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW29iai5sb2dmb3JtYXRdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW29iai5sb2dmb3JtYXRdLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2F2ZWlkeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tncm91cF0uZm9yRWFjaCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh4KS5sZW5ndGggPiBPYmplY3Qua2V5cyhncm91cHNbZ3JvdXBdW3NhdmVpZHhdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBPYmplY3Qua2V5cyhncm91cHNbZ3JvdXBdW3NhdmVpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IGdyb3Vwc1tncm91cF0ubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHhba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHhba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheSh4W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB4W2tleV0ubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4ICsgJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkoeFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2wsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zW2ldID0gY29sWzBdLnRvVXBwZXJDYXNlKCkgKyBjb2wuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMb2NhbCBmaWxlcycsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfZCA9PT0gJ2xhYmVscycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGNvbmZpZy5jb25maWdbX2RdWzBdLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IE9iamVjdC5rZXlzKG9ialswXSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWNvbHVtbnMuaW5jbHVkZXMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gb2JqLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goeFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0gPSBjb2xbMF0udG9VcHBlckNhc2UoKSArIGNvbC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGFibGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhYmVscycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgX2QyIG9mIGNvbmZpZy5jb25maWdbX2RdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlcy5wdXNoKC4uLnRoaXMuZ2V0Q29uZmlnVGFibGVzKF9kMiwgc2VjdGlvbiwgaWR4KSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qSU5URUdSSVRZIE1PTklUT1JJTkcgTU9OSVRPUkVEIERJUkVDVE9SSUVTICovXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5jb25maWdbX2RdLmRpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IGNvbmZpZy5jb25maWdbX2RdLmRpcmVjdG9yaWVzO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5jb25maWdbX2RdLmRpcmVjdG9yaWVzO1xuICAgICAgICAgICAgICAgICAgdGFibGVzLnB1c2goLi4udGhpcy5nZXRDb25maWdUYWJsZXMoY29uZmlnLmNvbmZpZ1tfZF0sIHNlY3Rpb24sIGlkeCkpO1xuICAgICAgICAgICAgICAgICAgbGV0IGRpZmZPcHRzID0gW107XG4gICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZWN0aW9uLm9wdHMpLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlmZk9wdHMucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgIC4uLmRpZmZPcHRzLmZpbHRlcigoeCkgPT4geCAhPT0gJ2NoZWNrX2FsbCcgJiYgeCAhPT0gJ2NoZWNrX3N1bScpLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICAgICAgICBkaXJlY3Rvcmllcy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goeC5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKCh5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0geSAhPT0gJ2NoZWNrX3dob2RhdGEnID8geSA6ICd3aG9kYXRhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKHhbeV0gPyB4W3ldIDogJ25vJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goeC5yZWN1cnNpb25fbGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKCh4LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc1tpZHhdID0gc2VjdGlvbi5vcHRzW3hdO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goJ1JMJyk7XG4gICAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9uaXRvcmVkIGRpcmVjdG9yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCguLi50aGlzLmdldENvbmZpZ1RhYmxlcyhjb25maWcuY29uZmlnW19kXSwgc2VjdGlvbiwgaWR4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGFibGUgb2YgdGFibGVzKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRlci5hZGRDb25maWdUYWJsZXMoW3RhYmxlXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICAgIHRhYmxlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGVzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICB0ZXh0OiAnQSBjb25maWd1cmF0aW9uIGZvciB0aGlzIGdyb3VwIGhhcyBub3QgeWV0IGJlZW4gc2V0IHVwLicsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzAwMCcgfSxcbiAgICAgICAgICAgIG1hcmdpbjogWzAsIDEwLCAwLCAxNV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWdlbnRzIGluIGdyb3VwXG4gICAgICBpZiAoY29tcG9uZW50c1snMSddKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVySGVhZGVyKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgcHJpbnRlcixcbiAgICAgICAgICAnZ3JvdXBDb25maWcnLFxuICAgICAgICAgIGdyb3VwSUQsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgYXBpSWRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgcHJpbnRlci5wcmludChjb250ZXh0LndhenVoRW5kcG9pbnRQYXJhbXMucGF0aEZpbGVuYW1lKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlcG9ydCAke2NvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5maWxlbmFtZX0gd2FzIGNyZWF0ZWRgLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNHcm91cHMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDUwMjksIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfSwgKHtwYXJhbXM6IHsgZ3JvdXBJRCB9fSkgPT4gYHdhenVoLWdyb3VwLWNvbmZpZ3VyYXRpb24tJHtncm91cElEfS0ke3RoaXMuZ2VuZXJhdGVSZXBvcnRUaW1lc3RhbXAoKX0ucGRmYClcblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmVwb3J0IGZvciB0aGUgYWdlbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgKiBAcmV0dXJucyB7Kn0gcmVwb3J0cyBsaXN0IG9yIEVycm9yUmVzcG9uc2VcbiAgICovXG4gIGNyZWF0ZVJlcG9ydHNBZ2VudHNDb25maWd1cmF0aW9uID0gdGhpcy5jaGVja1JlcG9ydHNVc2VyRGlyZWN0b3J5SXNWYWxpZFJvdXRlRGVjb3JhdG9yKCBhc3luYyAoXG4gICAgY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LFxuICAgIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCxcbiAgICByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnlcbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNBZ2VudHNDb25maWd1cmF0aW9uJywgYFJlcG9ydCBzdGFydGVkYCwgJ2luZm8nKTtcbiAgICAgIGNvbnN0IHsgY29tcG9uZW50cywgYXBpSWQgfSA9IHJlcXVlc3QuYm9keTtcbiAgICAgIGNvbnN0IHsgYWdlbnRJRCB9ID0gcmVxdWVzdC5wYXJhbXM7XG5cbiAgICAgIGNvbnN0IHByaW50ZXIgPSBuZXcgUmVwb3J0UHJpbnRlcigpO1xuICAgICAgY3JlYXRlRGF0YURpcmVjdG9yeUlmTm90RXhpc3RzKCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19ESVJFQ1RPUllfUEFUSCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeUlmTm90RXhpc3RzKHBhdGguam9pbihXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRILCBjb250ZXh0LndhenVoRW5kcG9pbnRQYXJhbXMuaGFzaFVzZXJuYW1lKSk7XG5cbiAgICAgIGxldCB3bW9kdWxlc1Jlc3BvbnNlID0ge307XG4gICAgICBsZXQgdGFibGVzID0gW107XG4gICAgICB0cnkge1xuICAgICAgICB3bW9kdWxlc1Jlc3BvbnNlID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdChcbiAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICBgL2FnZW50cy8ke2FnZW50SUR9L2NvbmZpZy93bW9kdWxlcy93bW9kdWxlc2AsXG4gICAgICAgICAge30sXG4gICAgICAgICAgeyBhcGlIb3N0SUQ6IGFwaUlkIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOnJlcG9ydCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsICdkZWJ1ZycpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlckhlYWRlcihjb250ZXh0LCBwcmludGVyLCAnYWdlbnRDb25maWcnLCAnYWdlbnRDb25maWcnLCBhZ2VudElELCBhcGlJZCk7XG5cbiAgICAgIGxldCBpZHhDb21wb25lbnQgPSAwO1xuICAgICAgZm9yIChsZXQgY29uZmlnIG9mIEFnZW50Q29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucykge1xuICAgICAgICBsZXQgdGl0bGVPZlNlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgbG9nKFxuICAgICAgICAgICdyZXBvcnRpbmc6Y3JlYXRlUmVwb3J0c0FnZW50c0NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgIGBJdGVyYXRlIG92ZXIgJHtjb25maWcuc2VjdGlvbnMubGVuZ3RofSBjb25maWd1cmF0aW9uIHNlY3Rpb25zYCxcbiAgICAgICAgICAnZGVidWcnXG4gICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XG4gICAgICAgICAgbGV0IHRpdGxlT2ZTdWJzZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcG9uZW50c1tpZHhDb21wb25lbnRdICYmXG4gICAgICAgICAgICAoc2VjdGlvbi5jb25maWcgfHwgc2VjdGlvbi53b2RsZSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICAgICAgY29uc3QgY29uZmlncyA9IChzZWN0aW9uLmNvbmZpZyB8fCBbXSkuY29uY2F0KHNlY3Rpb24ud29kbGUgfHwgW10pO1xuICAgICAgICAgICAgbG9nKFxuICAgICAgICAgICAgICAncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNBZ2VudHNDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgYEl0ZXJhdGUgb3ZlciAke2NvbmZpZ3MubGVuZ3RofSBjb25maWd1cmF0aW9uIGJsb2Nrc2AsXG4gICAgICAgICAgICAgICdkZWJ1ZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb3IgKGxldCBjb25mIG9mIGNvbmZpZ3MpIHtcbiAgICAgICAgICAgICAgbGV0IGFnZW50Q29uZmlnUmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZbJ25hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgYWdlbnRDb25maWdSZXNwb25zZSA9IGF3YWl0IGNvbnRleHQud2F6dWguYXBpLmNsaWVudC5hc0N1cnJlbnRVc2VyLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBgL2FnZW50cy8ke2FnZW50SUR9L2NvbmZpZy8ke2NvbmYuY29tcG9uZW50fS8ke2NvbmYuY29uZmlndXJhdGlvbn1gLFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgeyBhcGlIb3N0SUQ6IGFwaUlkIH1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHdvZGxlIG9mIHdtb2R1bGVzUmVzcG9uc2UuZGF0YS5kYXRhWyd3bW9kdWxlcyddKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh3b2RsZSlbMF0gPT09IGNvbmZbJ25hbWUnXSkge1xuICAgICAgICAgICAgICAgICAgICAgIGFnZW50Q29uZmlnUmVzcG9uc2UuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHdvZGxlLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZ2VudENvbmZpZyA9XG4gICAgICAgICAgICAgICAgICBhZ2VudENvbmZpZ1Jlc3BvbnNlICYmIGFnZW50Q29uZmlnUmVzcG9uc2UuZGF0YSAmJiBhZ2VudENvbmZpZ1Jlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpdGxlT2ZTZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBwcmludGVyLmFkZENvbnRlbnQoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb25maWcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnaDEnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAwLCAwLCAxNV0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRpdGxlT2ZTZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aXRsZU9mU3Vic2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogc2VjdGlvbi5zdWJ0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdoNCcsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHByaW50ZXIuYWRkQ29udGVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHNlY3Rpb24uZGVzYyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDAsIDAsIDEwXSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGl0bGVPZlN1YnNlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWdlbnRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFnZW50Q29uZmlnS2V5IG9mIE9iamVjdC5rZXlzKGFnZW50Q29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhZ2VudENvbmZpZ1thZ2VudENvbmZpZ0tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLyogTE9HIENPTExFQ1RPUiAqL1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25mLmZpbHRlckJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudENvbmZpZ1thZ2VudENvbmZpZ0tleV0uZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBzW29iai5sb2dmb3JtYXRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW29iai5sb2dmb3JtYXRdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW29iai5sb2dmb3JtYXRdLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2F2ZWlkeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tncm91cF0uZm9yRWFjaCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHgpLmxlbmd0aCA+IE9iamVjdC5rZXlzKGdyb3Vwc1tncm91cF1bc2F2ZWlkeF0pLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWlkeCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IE9iamVjdC5rZXlzKGdyb3Vwc1tncm91cF1bc2F2ZWlkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gZ3JvdXBzW2dyb3VwXS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgeFtrZXldICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geFtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KHhba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHhba2V5XS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggKyAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh4W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0gPSBjb2xbMF0udG9VcHBlckNhc2UoKSArIGNvbC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogc2VjdGlvbi5sYWJlbHNbMF1bZ3JvdXBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWdlbnRDb25maWdLZXkuY29uZmlndXJhdGlvbiAhPT0gJ3NvY2tldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvbmZpZ1RhYmxlcyhhZ2VudENvbmZpZ1thZ2VudENvbmZpZ0tleV0sIHNlY3Rpb24sIGlkeClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IF9kMiBvZiBhZ2VudENvbmZpZ1thZ2VudENvbmZpZ0tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzLnB1c2goLi4udGhpcy5nZXRDb25maWdUYWJsZXMoX2QyLCBzZWN0aW9uLCBpZHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLypJTlRFR1JJVFkgTU9OSVRPUklORyBNT05JVE9SRUQgRElSRUNUT1JJRVMgKi9cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZi5tYXRyaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkaXJlY3RvcmllcyxkaWZmLHN5bmNocm9uaXphdGlvbixmaWxlX2xpbWl0LC4uLnJlc3R9ID0gYWdlbnRDb25maWdbYWdlbnRDb25maWdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q29uZmlnVGFibGVzKHJlc3QsIHNlY3Rpb24sIGlkeCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihkaWZmICYmIGRpZmYuZGlza19xdW90YSA/IHRoaXMuZ2V0Q29uZmlnVGFibGVzKGRpZmYuZGlza19xdW90YSwge3RhYnM6WydEaXNrIHF1b3RhJ119LCAwICk6IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGRpZmYgJiYgZGlmZi5maWxlX3NpemUgPyB0aGlzLmdldENvbmZpZ1RhYmxlcyhkaWZmLmZpbGVfc2l6ZSwge3RhYnM6WydGaWxlIHNpemUnXX0sIDAgKTogW10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc3luY2hyb25pemF0aW9uID8gdGhpcy5nZXRDb25maWdUYWJsZXMoc3luY2hyb25pemF0aW9uLCB7dGFiczpbJ1N5bmNocm9uaXphdGlvbiddfSwgMCApOiBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihmaWxlX2xpbWl0ID8gdGhpcy5nZXRDb25maWdUYWJsZXMoZmlsZV9saW1pdCwge3RhYnM6WydGaWxlIGxpbWl0J119LCAwICk6IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZk9wdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlY3Rpb24ub3B0cykuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmT3B0cy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGlmZk9wdHMuZmlsdGVyKCh4KSA9PiB4ICE9PSAnY2hlY2tfYWxsJyAmJiB4ICE9PSAnY2hlY2tfc3VtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yaWVzLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh4LmRpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goeC5vcHRzLmluZGV4T2YoeSkgPiAtMSA/ICd5ZXMnIDogJ25vJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goeC5yZWN1cnNpb25fbGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKCh4LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uc1tpZHhdID0gc2VjdGlvbi5vcHRzW3hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goJ1JMJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9uaXRvcmVkIGRpcmVjdG9yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb25maWdUYWJsZXMoYWdlbnRDb25maWdbYWdlbnRDb25maWdLZXldLCBzZWN0aW9uLCBpZHgpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBQcmludCBubyBjb25maWd1cmVkIG1vZHVsZSBhbmQgbGluayB0byB0aGUgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAgcHJpbnRlci5hZGRDb250ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgICAgICAgICAgICdUaGlzIG1vZHVsZSBpcyBub3QgY29uZmlndXJlZC4gUGxlYXNlIHRha2UgYSBsb29rIG9uIGhvdyB0byBjb25maWd1cmUgaXQgaW4gJyxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtzZWN0aW9uLnN1YnRpdGxlLnRvTG93ZXJDYXNlKCl9IGNvbmZpZ3VyYXRpb24uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHNlY3Rpb24uZG9jdUxpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzFhMGRhYicgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFswLCAwLCAwLCAyMF0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nKCdyZXBvcnRpbmc6cmVwb3J0JywgZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgJ2RlYnVnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhYmxlIG9mIHRhYmxlcykge1xuICAgICAgICAgICAgICBwcmludGVyLmFkZENvbmZpZ1RhYmxlcyhbdGFibGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWR4Q29tcG9uZW50Kys7XG4gICAgICAgICAgdGFibGVzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXdhaXQgcHJpbnRlci5wcmludChjb250ZXh0LndhenVoRW5kcG9pbnRQYXJhbXMucGF0aEZpbGVuYW1lKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlcG9ydCAke2NvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5maWxlbmFtZX0gd2FzIGNyZWF0ZWRgLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNBZ2VudHNDb25maWd1cmF0aW9uJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IGVycm9yLCA1MDI5LCA1MDAsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH0sICh7IHBhcmFtczogeyBhZ2VudElEIH19KSA9PiBgd2F6dWgtYWdlbnQtY29uZmlndXJhdGlvbi0ke2FnZW50SUR9LSR7dGhpcy5nZW5lcmF0ZVJlcG9ydFRpbWVzdGFtcCgpfS5wZGZgKVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSByZXBvcnQgZm9yIHRoZSBhZ2VudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHsqfSByZXBvcnRzIGxpc3Qgb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlUmVwb3J0c0FnZW50c0ludmVudG9yeSA9IHRoaXMuY2hlY2tSZXBvcnRzVXNlckRpcmVjdG9yeUlzVmFsaWRSb3V0ZURlY29yYXRvciggYXN5bmMgKFxuICAgIGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCxcbiAgICByZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3QsXG4gICAgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsb2coJ3JlcG9ydGluZzpjcmVhdGVSZXBvcnRzQWdlbnRzSW52ZW50b3J5JywgYFJlcG9ydCBzdGFydGVkYCwgJ2luZm8nKTtcbiAgICAgIGNvbnN0IHsgc2VhcmNoQmFyLCBmaWx0ZXJzLCB0aW1lLCBpbmRleFBhdHRlcm5UaXRsZSwgYXBpSWQgfSA9IHJlcXVlc3QuYm9keTtcbiAgICAgIGNvbnN0IHsgYWdlbnRJRCB9ID0gcmVxdWVzdC5wYXJhbXM7XG4gICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aW1lIHx8IHt9O1xuICAgICAgLy8gSW5pdFxuICAgICAgY29uc3QgcHJpbnRlciA9IG5ldyBSZXBvcnRQcmludGVyKCk7XG5cbiAgICAgIGNvbnN0IHsgaGFzaFVzZXJuYW1lIH0gPSBhd2FpdCBjb250ZXh0LndhenVoLnNlY3VyaXR5LmdldEN1cnJlbnRVc2VyKHJlcXVlc3QsIGNvbnRleHQpO1xuICAgICAgY3JlYXRlRGF0YURpcmVjdG9yeUlmTm90RXhpc3RzKCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19ESVJFQ1RPUllfUEFUSCk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyhXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeUlmTm90RXhpc3RzKHBhdGguam9pbihXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRILCBoYXNoVXNlcm5hbWUpKTtcblxuICAgICAgbG9nKCdyZXBvcnRpbmc6Y3JlYXRlUmVwb3J0c0FnZW50c0ludmVudG9yeScsIGBTeXNjb2xsZWN0b3IgcmVwb3J0YCwgJ2RlYnVnJyk7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRGaWx0ZXJzID0gZmlsdGVycyA/IHRoaXMuc2FuaXRpemVLaWJhbmFGaWx0ZXJzKGZpbHRlcnMsIHNlYXJjaEJhcikgOiBmYWxzZTtcblxuICAgICAgLy8gR2V0IHRoZSBhZ2VudCBPU1xuICAgICAgbGV0IGFnZW50T3MgPSAnJztcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFnZW50UmVzcG9uc2UgPSBhd2FpdCBjb250ZXh0LndhenVoLmFwaS5jbGllbnQuYXNDdXJyZW50VXNlci5yZXF1ZXN0KFxuICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICcvYWdlbnRzJyxcbiAgICAgICAgICB7IHBhcmFtczogeyBxOiBgaWQ9JHthZ2VudElEfWAgfSB9LFxuICAgICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICAgICk7XG4gICAgICAgIGFnZW50T3MgPSBhZ2VudFJlc3BvbnNlLmRhdGEuZGF0YS5hZmZlY3RlZF9pdGVtc1swXS5vcy5wbGF0Zm9ybTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNBZ2VudHNJbnZlbnRvcnknLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yLCAnZGVidWcnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRpdGxlXG4gICAgICBwcmludGVyLmFkZENvbnRlbnRXaXRoTmV3TGluZSh7XG4gICAgICAgIHRleHQ6ICdJbnZlbnRvcnkgZGF0YSByZXBvcnQnLFxuICAgICAgICBzdHlsZTogJ2gxJyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgdGFibGUgd2l0aCB0aGUgYWdlbnQgaW5mb1xuICAgICAgYXdhaXQgdGhpcy5idWlsZEFnZW50c1RhYmxlKGNvbnRleHQsIHByaW50ZXIsIFthZ2VudElEXSwgYXBpSWQpO1xuXG4gICAgICAvLyBHZXQgc3lzY29sbGVjdG9yIHBhY2thZ2VzIGFuZCBwcm9jZXNzZXNcbiAgICAgIGNvbnN0IGFnZW50UmVxdWVzdHNJbnZlbnRvcnkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBlbmRwb2ludDogYC9zeXNjb2xsZWN0b3IvJHthZ2VudElEfS9wYWNrYWdlc2AsXG4gICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIHBhY2thZ2VzIGZvciBhZ2VudCAke2FnZW50SUR9YCxcbiAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgdGl0bGU6ICdQYWNrYWdlcycsXG4gICAgICAgICAgICBjb2x1bW5zOlxuICAgICAgICAgICAgICBhZ2VudE9zID09PSAnd2luZG93cydcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdhcmNoaXRlY3R1cmUnLCBsYWJlbDogJ0FyY2hpdGVjdHVyZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3ZlcnNpb24nLCBsYWJlbDogJ1ZlcnNpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICd2ZW5kb3InLCBsYWJlbDogJ1ZlbmRvcicgfSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdhcmNoaXRlY3R1cmUnLCBsYWJlbDogJ0FyY2hpdGVjdHVyZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3ZlcnNpb24nLCBsYWJlbDogJ1ZlcnNpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICd2ZW5kb3InLCBsYWJlbDogJ1ZlbmRvcicgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2Rlc2NyaXB0aW9uJywgbGFiZWw6ICdEZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVuZHBvaW50OiBgL3N5c2NvbGxlY3Rvci8ke2FnZW50SUR9L3Byb2Nlc3Nlc2AsXG4gICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIHByb2Nlc3NlcyBmb3IgYWdlbnQgJHthZ2VudElEfWAsXG4gICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvY2Vzc2VzJyxcbiAgICAgICAgICAgIGNvbHVtbnM6XG4gICAgICAgICAgICAgIGFnZW50T3MgPT09ICd3aW5kb3dzJ1xuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2NtZCcsIGxhYmVsOiAnQ01EJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAncHJpb3JpdHknLCBsYWJlbDogJ1ByaW9yaXR5JyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnbmx3cCcsIGxhYmVsOiAnTkxXUCcgfSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdldXNlcicsIGxhYmVsOiAnRWZmZWN0aXZlIHVzZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICduaWNlJywgbGFiZWw6ICdQcmlvcml0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3N0YXRlJywgbGFiZWw6ICdTdGF0ZScgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXBSZXNwb25zZUl0ZW1zOiAoaXRlbSkgPT5cbiAgICAgICAgICAgIGFnZW50T3MgPT09ICd3aW5kb3dzJyA/IGl0ZW0gOiB7IC4uLml0ZW0sIHN0YXRlOiBQcm9jZXNzRXF1aXZhbGVuY2VbaXRlbS5zdGF0ZV0gfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVuZHBvaW50OiBgL3N5c2NvbGxlY3Rvci8ke2FnZW50SUR9L3BvcnRzYCxcbiAgICAgICAgICBsb2dnZXJNZXNzYWdlOiBgRmV0Y2hpbmcgcG9ydHMgZm9yIGFnZW50ICR7YWdlbnRJRH1gLFxuICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05ldHdvcmsgcG9ydHMnLFxuICAgICAgICAgICAgY29sdW1uczpcbiAgICAgICAgICAgICAgYWdlbnRPcyA9PT0gJ3dpbmRvd3MnXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdsb2NhbF9pcCcsIGxhYmVsOiAnTG9jYWwgSVAnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdsb2NhbF9wb3J0JywgbGFiZWw6ICdMb2NhbCBwb3J0JyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAncHJvY2VzcycsIGxhYmVsOiAnUHJvY2VzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3N0YXRlJywgbGFiZWw6ICdTdGF0ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3Byb3RvY29sJywgbGFiZWw6ICdQcm90b2NvbCcgfSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2xvY2FsX2lwJywgbGFiZWw6ICdMb2NhbCBJUCcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2xvY2FsX3BvcnQnLCBsYWJlbDogJ0xvY2FsIHBvcnQnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdzdGF0ZScsIGxhYmVsOiAnU3RhdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdwcm90b2NvbCcsIGxhYmVsOiAnUHJvdG9jb2wnIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFwUmVzcG9uc2VJdGVtczogKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgbG9jYWxfaXA6IGl0ZW0ubG9jYWwuaXAsXG4gICAgICAgICAgICBsb2NhbF9wb3J0OiBpdGVtLmxvY2FsLnBvcnQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBlbmRwb2ludDogYC9zeXNjb2xsZWN0b3IvJHthZ2VudElEfS9uZXRpZmFjZWAsXG4gICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIG5ldGlmYWNlIGZvciBhZ2VudCAke2FnZW50SUR9YCxcbiAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgdGl0bGU6ICdOZXR3b3JrIGludGVyZmFjZXMnLFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICB7IGlkOiAnbmFtZScsIGxhYmVsOiAnTmFtZScgfSxcbiAgICAgICAgICAgICAgeyBpZDogJ21hYycsIGxhYmVsOiAnTWFjJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAnc3RhdGUnLCBsYWJlbDogJ1N0YXRlJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAnbXR1JywgbGFiZWw6ICdNVFUnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICd0eXBlJywgbGFiZWw6ICdUeXBlJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW5kcG9pbnQ6IGAvc3lzY29sbGVjdG9yLyR7YWdlbnRJRH0vbmV0YWRkcmAsXG4gICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIG5ldGFkZHIgZm9yIGFnZW50ICR7YWdlbnRJRH1gLFxuICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05ldHdvcmsgc2V0dGluZ3MnLFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICB7IGlkOiAnaWZhY2UnLCBsYWJlbDogJ0ludGVyZmFjZScgfSxcbiAgICAgICAgICAgICAgeyBpZDogJ2FkZHJlc3MnLCBsYWJlbDogJ2FkZHJlc3MnIH0sXG4gICAgICAgICAgICAgIHsgaWQ6ICduZXRtYXNrJywgbGFiZWw6ICdOZXRtYXNrJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAncHJvdG8nLCBsYWJlbDogJ1Byb3RvY29sJyB9LFxuICAgICAgICAgICAgICB7IGlkOiAnYnJvYWRjYXN0JywgbGFiZWw6ICdCcm9hZGNhc3QnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdO1xuXG4gICAgICBhZ2VudE9zID09PSAnd2luZG93cycgJiZcbiAgICAgICAgYWdlbnRSZXF1ZXN0c0ludmVudG9yeS5wdXNoKHtcbiAgICAgICAgICBlbmRwb2ludDogYC9zeXNjb2xsZWN0b3IvJHthZ2VudElEfS9ob3RmaXhlc2AsXG4gICAgICAgICAgbG9nZ2VyTWVzc2FnZTogYEZldGNoaW5nIGhvdGZpeGVzIGZvciBhZ2VudCAke2FnZW50SUR9YCxcbiAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgdGl0bGU6ICdXaW5kb3dzIHVwZGF0ZXMnLFxuICAgICAgICAgICAgY29sdW1uczogW3sgaWQ6ICdob3RmaXgnLCBsYWJlbDogJ1VwZGF0ZSBjb2RlJyB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgcmVxdWVzdEludmVudG9yeSA9IGFzeW5jIChhZ2VudFJlcXVlc3RJbnZlbnRvcnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2coXG4gICAgICAgICAgICAncmVwb3J0aW5nOmNyZWF0ZVJlcG9ydHNBZ2VudHNJbnZlbnRvcnknLFxuICAgICAgICAgICAgYWdlbnRSZXF1ZXN0SW52ZW50b3J5LmxvZ2dlck1lc3NhZ2UsXG4gICAgICAgICAgICAnZGVidWcnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGludmVudG9yeVJlc3BvbnNlID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdChcbiAgICAgICAgICAgICdHRVQnLFxuICAgICAgICAgICAgYWdlbnRSZXF1ZXN0SW52ZW50b3J5LmVuZHBvaW50LFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICB7IGFwaUhvc3RJRDogYXBpSWQgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBpbnZlbnRvcnkgPVxuICAgICAgICAgICAgaW52ZW50b3J5UmVzcG9uc2UgJiZcbiAgICAgICAgICAgIGludmVudG9yeVJlc3BvbnNlLmRhdGEgJiZcbiAgICAgICAgICAgIGludmVudG9yeVJlc3BvbnNlLmRhdGEuZGF0YSAmJlxuICAgICAgICAgICAgaW52ZW50b3J5UmVzcG9uc2UuZGF0YS5kYXRhLmFmZmVjdGVkX2l0ZW1zO1xuICAgICAgICAgIGlmIChpbnZlbnRvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmFnZW50UmVxdWVzdEludmVudG9yeS50YWJsZSxcbiAgICAgICAgICAgICAgaXRlbXM6IGFnZW50UmVxdWVzdEludmVudG9yeS5tYXBSZXNwb25zZUl0ZW1zXG4gICAgICAgICAgICAgICAgPyBpbnZlbnRvcnkubWFwKGFnZW50UmVxdWVzdEludmVudG9yeS5tYXBSZXNwb25zZUl0ZW1zKVxuICAgICAgICAgICAgICAgIDogaW52ZW50b3J5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbG9nKCdyZXBvcnRpbmc6Y3JlYXRlUmVwb3J0c0FnZW50c0ludmVudG9yeScsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsICdkZWJ1ZycpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGltZSkge1xuICAgICAgICBhd2FpdCB0aGlzLmV4dGVuZGVkSW5mb3JtYXRpb24oXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBwcmludGVyLFxuICAgICAgICAgICdhZ2VudHMnLFxuICAgICAgICAgICdzeXNjb2xsZWN0b3InLFxuICAgICAgICAgIGFwaUlkLFxuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgc2FuaXRpemVkRmlsdGVycyArICcgQU5EIHJ1bGUuZ3JvdXBzOiBcInZ1bG5lcmFiaWxpdHktZGV0ZWN0b3JcIicsXG4gICAgICAgICAgaW5kZXhQYXR0ZXJuVGl0bGUsXG4gICAgICAgICAgYWdlbnRJRFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaW52ZW50b3J5IHRhYmxlc1xuICAgICAgKGF3YWl0IFByb21pc2UuYWxsKGFnZW50UmVxdWVzdHNJbnZlbnRvcnkubWFwKHJlcXVlc3RJbnZlbnRvcnkpKSlcbiAgICAgICAgLmZpbHRlcigodGFibGUpID0+IHRhYmxlKVxuICAgICAgICAuZm9yRWFjaCgodGFibGUpID0+IHByaW50ZXIuYWRkU2ltcGxlVGFibGUodGFibGUpKTtcblxuICAgICAgLy8gUHJpbnQgdGhlIGRvY3VtZW50XG4gICAgICBhd2FpdCBwcmludGVyLnByaW50KGNvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5wYXRoRmlsZW5hbWUpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBgUmVwb3J0ICR7Y29udGV4dC53YXp1aEVuZHBvaW50UGFyYW1zLmZpbGVuYW1lfSB3YXMgY3JlYXRlZGAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Y3JlYXRlUmVwb3J0c0FnZW50cycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgNTAyOSwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9LCAoe3BhcmFtczogeyBhZ2VudElEIH19KSA9PiBgd2F6dWgtYWdlbnQtaW52ZW50b3J5LSR7YWdlbnRJRH0tJHt0aGlzLmdlbmVyYXRlUmVwb3J0VGltZXN0YW1wKCl9LnBkZmApXG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSByZXBvcnRzIGxpc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtBcnJheTxPYmplY3Q+fSByZXBvcnRzIGxpc3Qgb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgYXN5bmMgZ2V0UmVwb3J0cyhcbiAgICBjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsXG4gICAgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LFxuICAgIHJlc3BvbnNlOiBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeVxuICApIHtcbiAgICB0cnkge1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Z2V0UmVwb3J0cycsIGBGZXRjaGluZyBjcmVhdGVkIHJlcG9ydHNgLCAnaW5mbycpO1xuICAgICAgY29uc3QgeyBoYXNoVXNlcm5hbWUgfSA9IGF3YWl0IGNvbnRleHQud2F6dWguc2VjdXJpdHkuZ2V0Q3VycmVudFVzZXIocmVxdWVzdCwgY29udGV4dCk7XG4gICAgICBjcmVhdGVEYXRhRGlyZWN0b3J5SWZOb3RFeGlzdHMoKTtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeUlmTm90RXhpc3RzKFdBWlVIX0RBVEFfRE9XTkxPQURTX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeUlmTm90RXhpc3RzKFdBWlVIX0RBVEFfRE9XTkxPQURTX1JFUE9SVFNfRElSRUNUT1JZX1BBVEgpO1xuICAgICAgY29uc3QgdXNlclJlcG9ydHNEaXJlY3RvcnlQYXRoID0gcGF0aC5qb2luKFdBWlVIX0RBVEFfRE9XTkxPQURTX1JFUE9SVFNfRElSRUNUT1JZX1BBVEgsIGhhc2hVc2VybmFtZSk7XG4gICAgICBjcmVhdGVEaXJlY3RvcnlJZk5vdEV4aXN0cyh1c2VyUmVwb3J0c0RpcmVjdG9yeVBhdGgpO1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Z2V0UmVwb3J0cycsIGBEaXJlY3Rvcnk6ICR7dXNlclJlcG9ydHNEaXJlY3RvcnlQYXRofWAsICdkZWJ1ZycpO1xuXG4gICAgICBjb25zdCBzb3J0UmVwb3J0c0J5RGF0ZSA9IChhLCBiKSA9PiAoYS5kYXRlIDwgYi5kYXRlID8gMSA6IGEuZGF0ZSA+IGIuZGF0ZSA/IC0xIDogMCk7XG5cbiAgICAgIGNvbnN0IHJlcG9ydHMgPSBmcy5yZWFkZGlyU3luYyh1c2VyUmVwb3J0c0RpcmVjdG9yeVBhdGgpLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0cyA9IGZzLnN0YXRTeW5jKHVzZXJSZXBvcnRzRGlyZWN0b3J5UGF0aCArICcvJyArIGZpbGUpO1xuICAgICAgICAvLyBHZXQgdGhlIGZpbGUgY3JlYXRpb24gdGltZSAoYml0aHRpbWUpLiBJdCByZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IGlzIGEgdHJ1dGh5IHZhbHVlIG9mIG5leHQgZmlsZSBzdGF0czogYmlydGh0aW1lLCBtdGltZSwgY3RpbWUgYW5kIGF0aW1lLlxuICAgICAgICAvLyBUaGlzIHNvbHZlcyBzb21lIE9TcyBjYW4gaGF2ZSB0aGUgYml0aHRpbWVNcyBlcXVhbCB0byAwIGFuZCByZXR1cm5zIHRoZSBkYXRlIGxpa2UgMTk3MC0wMS0wMVxuICAgICAgICBjb25zdCBiaXJ0aFRpbWVGaWVsZCA9IFsnYmlydGh0aW1lJywgJ210aW1lJywgJ2N0aW1lJywgJ2F0aW1lJ10uZmluZChcbiAgICAgICAgICAodGltZSkgPT4gc3RhdHNbYCR7dGltZX1Nc2BdXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogZmlsZSxcbiAgICAgICAgICBzaXplOiBzdGF0cy5zaXplLFxuICAgICAgICAgIGRhdGU6IHN0YXRzW2JpcnRoVGltZUZpZWxkXSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Z2V0UmVwb3J0cycsIGBVc2luZyBUaW1Tb3J0IGZvciBzb3J0aW5nICR7cmVwb3J0cy5sZW5ndGh9IGl0ZW1zYCwgJ2RlYnVnJyk7XG4gICAgICBUaW1Tb3J0LnNvcnQocmVwb3J0cywgc29ydFJlcG9ydHNCeURhdGUpO1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Z2V0UmVwb3J0cycsIGBUb3RhbCByZXBvcnRzOiAke3JlcG9ydHMubGVuZ3RofWAsICdkZWJ1ZycpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keTogeyByZXBvcnRzIH0sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdyZXBvcnRpbmc6Z2V0UmVwb3J0cycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgNTAzMSwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHNwZWNpZmljIHJlcG9ydFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybnMge09iamVjdH0gcmVwb3J0IG9yIEVycm9yUmVzcG9uc2VcbiAgICovXG4gIGdldFJlcG9ydEJ5TmFtZSA9IHRoaXMuY2hlY2tSZXBvcnRzVXNlckRpcmVjdG9yeUlzVmFsaWRSb3V0ZURlY29yYXRvcihhc3luYyAoXG4gICAgY29udGV4dDogUmVxdWVzdEhhbmRsZXJDb250ZXh0LFxuICAgIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCxcbiAgICByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnlcbiAgKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygncmVwb3J0aW5nOmdldFJlcG9ydEJ5TmFtZScsIGBHZXR0aW5nICR7Y29udGV4dC53YXp1aEVuZHBvaW50UGFyYW1zLnBhdGhGaWxlbmFtZX0gcmVwb3J0YCwgJ2RlYnVnJyk7XG4gICAgICBjb25zdCByZXBvcnRGaWxlQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKGNvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5wYXRoRmlsZW5hbWUpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3BkZicgfSxcbiAgICAgICAgYm9keTogcmVwb3J0RmlsZUJ1ZmZlcixcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3JlcG9ydGluZzpnZXRSZXBvcnRCeU5hbWUnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDUwMzAsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfSwgKHJlcXVlc3QpID0+IHJlcXVlc3QucGFyYW1zLm5hbWUpXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzcGVjaWZpYyByZXBvcnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXR1cyBvYmogb3IgRXJyb3JSZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlUmVwb3J0QnlOYW1lID0gdGhpcy5jaGVja1JlcG9ydHNVc2VyRGlyZWN0b3J5SXNWYWxpZFJvdXRlRGVjb3JhdG9yKGFzeW5jIChcbiAgICBjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsXG4gICAgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LFxuICAgIHJlc3BvbnNlOiBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeVxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgbG9nKCdyZXBvcnRpbmc6ZGVsZXRlUmVwb3J0QnlOYW1lJywgYERlbGV0aW5nICR7Y29udGV4dC53YXp1aEVuZHBvaW50UGFyYW1zLnBhdGhGaWxlbmFtZX0gcmVwb3J0YCwgJ2RlYnVnJyk7XG4gICAgICBmcy51bmxpbmtTeW5jKGNvbnRleHQud2F6dWhFbmRwb2ludFBhcmFtcy5wYXRoRmlsZW5hbWUpO1xuICAgICAgbG9nKCdyZXBvcnRpbmc6ZGVsZXRlUmVwb3J0QnlOYW1lJywgYCR7Y29udGV4dC53YXp1aEVuZHBvaW50UGFyYW1zLnBhdGhGaWxlbmFtZX0gcmVwb3J0IHdhcyBkZWxldGVkYCwgJ2luZm8nKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5vayh7XG4gICAgICAgIGJvZHk6IHsgZXJyb3I6IDAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3JlcG9ydGluZzpkZWxldGVSZXBvcnRCeU5hbWUnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDUwMzIsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfSwocmVxdWVzdCkgPT4gcmVxdWVzdC5wYXJhbXMubmFtZSlcblxuICBjaGVja1JlcG9ydHNVc2VyRGlyZWN0b3J5SXNWYWxpZFJvdXRlRGVjb3JhdG9yKHJvdXRlSGFuZGxlciwgcmVwb3J0RmlsZU5hbWVBY2Nlc3Nvcil7XG4gICAgcmV0dXJuIChhc3luYyAoXG4gICAgICBjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsXG4gICAgICByZXF1ZXN0OiBLaWJhbmFSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2U6IEtpYmFuYVJlc3BvbnNlRmFjdG9yeVxuICAgICkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBoYXNoVXNlcm5hbWUgfSA9IGF3YWl0IGNvbnRleHQud2F6dWguc2VjdXJpdHkuZ2V0Q3VycmVudFVzZXIocmVxdWVzdCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHVzZXJSZXBvcnRzRGlyZWN0b3J5UGF0aCA9IHBhdGguam9pbihXQVpVSF9EQVRBX0RPV05MT0FEU19SRVBPUlRTX0RJUkVDVE9SWV9QQVRILCBoYXNoVXNlcm5hbWUpO1xuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IHJlcG9ydEZpbGVOYW1lQWNjZXNzb3IocmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IHBhdGhGaWxlbmFtZSA9IHBhdGguam9pbih1c2VyUmVwb3J0c0RpcmVjdG9yeVBhdGgsIGZpbGVuYW1lKTtcbiAgICAgICAgbG9nKCdyZXBvcnRpbmc6Y2hlY2tSZXBvcnRzVXNlckRpcmVjdG9yeUlzVmFsaWRSb3V0ZURlY29yYXRvcicsIGBDaGVja2luZyB0aGUgdXNlciAke3VzZXJuYW1lfSgke2hhc2hVc2VybmFtZX0pIGNhbiBkbyBhY3Rpb25zIGluIHRoZSByZXBvcnRzIGZpbGU6ICR7cGF0aEZpbGVuYW1lfWAsICdkZWJ1ZycpO1xuICAgICAgICBpZighcGF0aEZpbGVuYW1lLnN0YXJ0c1dpdGgodXNlclJlcG9ydHNEaXJlY3RvcnlQYXRoKSB8fCBwYXRoRmlsZW5hbWUuaW5jbHVkZXMoJy4uLycpKXtcbiAgICAgICAgICBsb2coJ3NlY3VyaXR5OnJlcG9ydGluZzpjaGVja1JlcG9ydHNVc2VyRGlyZWN0b3J5SXNWYWxpZFJvdXRlRGVjb3JhdG9yJywgYFVzZXIgJHt1c2VybmFtZX0oJHtoYXNoVXNlcm5hbWV9KSB0cmllZCB0byBhY2Nlc3MgdG8gYSBub24gdXNlciByZXBvcnQgZmlsZTogJHtwYXRoRmlsZW5hbWV9YCwgJ3dhcm4nKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmFkUmVxdWVzdCh7XG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICc1MDQwIC0gWW91IHNoYWxsIG5vdCBwYXNzISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbG9nKCdyZXBvcnRpbmc6Y2hlY2tSZXBvcnRzVXNlckRpcmVjdG9yeUlzVmFsaWRSb3V0ZURlY29yYXRvcicsICdDaGVja2luZyB0aGUgdXNlciBjYW4gZG8gYWN0aW9ucyBpbiB0aGUgcmVwb3J0cyBmaWxlJywgJ2RlYnVnJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByb3V0ZUhhbmRsZXIuYmluZCh0aGlzKSh7Li4uY29udGV4dCwgd2F6dWhFbmRwb2ludFBhcmFtczogeyBoYXNoVXNlcm5hbWUsIGZpbGVuYW1lLCBwYXRoRmlsZW5hbWUgfX0sIHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGxvZygncmVwb3J0aW5nOmNoZWNrUmVwb3J0c1VzZXJEaXJlY3RvcnlJc1ZhbGlkUm91dGVEZWNvcmF0b3InLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgNTA0MCwgNTAwLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVSZXBvcnRUaW1lc3RhbXAoKXtcbiAgICByZXR1cm4gYCR7KERhdGUubm93KCkgLyAxMDAwKSB8IDB9YDtcbiAgfVxufVxuIl19