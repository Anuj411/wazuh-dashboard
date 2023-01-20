"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formEquivalence = exports.categoriesEquivalence = exports.categoriesNames = exports.nameEquivalence = exports.configEquivalences = void 0;

var _constants = require("./constants");

const configEquivalences = {
  pattern: "Default index pattern to use on the app. If there's no valid index pattern, the app will automatically create one with the name indicated in this option.",
  'customization.logo.app': `Set the name of the app logo stored at ${_constants.ASSETS_PUBLIC_URL}`,
  'customization.logo.sidebar': `Set the name of the sidebar logo stored at ${_constants.ASSETS_PUBLIC_URL}`,
  'customization.logo.healthcheck': `Set the name of the health-check logo stored at ${_constants.ASSETS_PUBLIC_URL}`,
  'customization.logo.reports': `Set the name of the reports logo (.png) stored at ${_constants.ASSETS_PUBLIC_URL}`,
  'checks.pattern': 'Enable or disable the index pattern health check when opening the app.',
  'checks.template': 'Enable or disable the template health check when opening the app.',
  'checks.api': 'Enable or disable the API health check when opening the app.',
  'checks.setup': 'Enable or disable the setup health check when opening the app.',
  'checks.fields': 'Enable or disable the known fields health check when opening the app.',
  'checks.metaFields': `Change the default value of the ${_constants.PLUGIN_PLATFORM_NAME} metaField configuration`,
  'checks.timeFilter': `Change the default value of the ${_constants.PLUGIN_PLATFORM_NAME} timeFilter configuration`,
  'checks.maxBuckets': `Change the default value of the ${_constants.PLUGIN_PLATFORM_NAME} max buckets configuration`,
  'extensions.pci': 'Enable or disable the PCI DSS tab on Overview and Agents.',
  'extensions.gdpr': 'Enable or disable the GDPR tab on Overview and Agents.',
  'extensions.hipaa': 'Enable or disable the HIPAA tab on Overview and Agents.',
  'extensions.nist': 'Enable or disable the NIST 800-53 tab on Overview and Agents.',
  'extensions.tsc': 'Enable or disable the TSC tab on Overview and Agents.',
  'extensions.audit': 'Enable or disable the Audit tab on Overview and Agents.',
  'extensions.oscap': 'Enable or disable the Open SCAP tab on Overview and Agents.',
  'extensions.ciscat': 'Enable or disable the CIS-CAT tab on Overview and Agents.',
  'extensions.aws': 'Enable or disable the Amazon (AWS) tab on Overview.',
  'extensions.gcp': 'Enable or disable the Google Cloud Platform tab on Overview.',
  'extensions.virustotal': 'Enable or disable the VirusTotal tab on Overview and Agents.',
  'extensions.osquery': 'Enable or disable the Osquery tab on Overview and Agents.',
  'extensions.mitre': 'Enable or disable the MITRE tab on Overview and Agents.',
  'extensions.docker': 'Enable or disable the Docker listener tab on Overview and Agents.',
  timeout: 'Maximum time, in milliseconds, the app will wait for an API response when making requests to it. It will be ignored if the value is set under 1500 milliseconds.',
  'ip.selector': 'Define if the user is allowed to change the selected index pattern directly from the top menu bar.',
  'ip.ignore': 'Disable certain index pattern names from being available in index pattern selector from the Wazuh app.',
  'wazuh.monitoring.enabled': 'Enable or disable the wazuh-monitoring index creation and/or visualization.',
  'wazuh.monitoring.frequency': 'Frequency, in seconds, of API requests to get the state of the agents and create a new document in the wazuh-monitoring index with this data.',
  'wazuh.monitoring.shards': 'Define the number of shards to use for the wazuh-monitoring-* indices.',
  'wazuh.monitoring.replicas': 'Define the number of replicas to use for the wazuh-monitoring-* indices.',
  'wazuh.monitoring.creation': 'Define the interval in which a new wazuh-monitoring index will be created.',
  'wazuh.monitoring.pattern': 'Default index pattern to use for Wazuh monitoring.',
  hideManagerAlerts: 'Hide the alerts of the manager in every dashboard.',
  'logs.level': 'Logging level of the App.',
  'enrollment.dns': 'Specifies the Wazuh registration server, used for the agent enrollment.',
  'enrollment.password': 'Specifies the password used to authenticate during the agent enrollment.',
  'cron.prefix': 'Define the index prefix of predefined jobs.',
  'cron.statistics.status': 'Enable or disable the statistics tasks.',
  'cron.statistics.apis': 'Enter the ID of the hosts you want to save data from, leave this empty to run the task on every host.',
  'cron.statistics.interval': 'Define the frequency of task execution using cron schedule expressions.',
  'cron.statistics.index.name': 'Define the name of the index in which the documents will be saved.',
  'cron.statistics.index.creation': 'Define the interval in which a new index will be created.',
  'cron.statistics.index.shards': 'Define the number of shards to use for the statistics indices.',
  'cron.statistics.index.replicas': 'Define the number of replicas to use for the statistics indices.',
  'alerts.sample.prefix': 'Define the index name prefix of sample alerts. It must match the template used by the index pattern to avoid unknown fields in dashboards.'
};
exports.configEquivalences = configEquivalences;
const nameEquivalence = {
  pattern: 'Index pattern',
  'customization.logo.app': 'Logo App',
  'customization.logo.sidebar': 'Logo Sidebar',
  'customization.logo.healthcheck': 'Logo Health Check',
  'customization.logo.reports': 'Logo Reports',
  'checks.pattern': 'Index pattern',
  'checks.template': 'Index template',
  'checks.api': 'API connection',
  'checks.setup': 'API version',
  'checks.fields': 'Known fields',
  'checks.metaFields': 'Remove meta fields',
  'checks.timeFilter': 'Set time filter to 24h',
  'checks.maxBuckets': 'Set max buckets to 200000',
  timeout: 'Request timeout',
  'ip.selector': 'IP selector',
  'ip.ignore': 'IP ignore',
  'wazuh.monitoring.enabled': 'Status',
  'wazuh.monitoring.frequency': 'Frequency',
  'wazuh.monitoring.shards': 'Index shards',
  'wazuh.monitoring.replicas': 'Index replicas',
  'wazuh.monitoring.creation': 'Index creation',
  'wazuh.monitoring.pattern': 'Index pattern',
  hideManagerAlerts: 'Hide manager alerts',
  'logs.level': 'Log level',
  'enrollment.dns': 'Enrollment DNS',
  'cron.prefix': 'Cron prefix',
  'cron.statistics.status': 'Status',
  'cron.statistics.apis': 'Includes apis',
  'cron.statistics.interval': 'Interval',
  'cron.statistics.index.name': 'Index name',
  'cron.statistics.index.creation': 'Index creation',
  'cron.statistics.index.shards': 'Index shards',
  'cron.statistics.index.replicas': 'Index replicas',
  'alerts.sample.prefix': 'Sample alerts prefix'
};
exports.nameEquivalence = nameEquivalence;
const HEALTH_CHECK = 'Health Check';
const GENERAL = 'General';
const SECURITY = 'Security';
const MONITORING = 'Monitoring';
const STATISTICS = 'Statistics';
const CUSTOMIZATION = 'Logo Customization';
const categoriesNames = [HEALTH_CHECK, GENERAL, SECURITY, MONITORING, STATISTICS, CUSTOMIZATION];
exports.categoriesNames = categoriesNames;
const categoriesEquivalence = {
  pattern: GENERAL,
  'customization.logo.app': CUSTOMIZATION,
  'customization.logo.sidebar': CUSTOMIZATION,
  'customization.logo.healthcheck': CUSTOMIZATION,
  'customization.logo.reports': CUSTOMIZATION,
  'checks.pattern': HEALTH_CHECK,
  'checks.template': HEALTH_CHECK,
  'checks.api': HEALTH_CHECK,
  'checks.setup': HEALTH_CHECK,
  'checks.fields': HEALTH_CHECK,
  'checks.metaFields': HEALTH_CHECK,
  'checks.timeFilter': HEALTH_CHECK,
  'checks.maxBuckets': HEALTH_CHECK,
  timeout: GENERAL,
  'ip.selector': GENERAL,
  'ip.ignore': GENERAL,
  'wazuh.monitoring.enabled': MONITORING,
  'wazuh.monitoring.frequency': MONITORING,
  'wazuh.monitoring.shards': MONITORING,
  'wazuh.monitoring.replicas': MONITORING,
  'wazuh.monitoring.creation': MONITORING,
  'wazuh.monitoring.pattern': MONITORING,
  hideManagerAlerts: GENERAL,
  'logs.level': GENERAL,
  'enrollment.dns': GENERAL,
  'cron.prefix': GENERAL,
  'cron.statistics.status': STATISTICS,
  'cron.statistics.apis': STATISTICS,
  'cron.statistics.interval': STATISTICS,
  'cron.statistics.index.name': STATISTICS,
  'cron.statistics.index.creation': STATISTICS,
  'cron.statistics.index.shards': STATISTICS,
  'cron.statistics.index.replicas': STATISTICS,
  'alerts.sample.prefix': GENERAL
};
exports.categoriesEquivalence = categoriesEquivalence;
const TEXT = 'text';
const NUMBER = 'number';
const LIST = 'list';
const BOOLEAN = 'boolean';
const ARRAY = 'array';
const INTERVAL = 'interval';
const formEquivalence = {
  pattern: {
    type: TEXT
  },
  'customization.logo.app': {
    type: TEXT
  },
  'customization.logo.sidebar': {
    type: TEXT
  },
  'customization.logo.healthcheck': {
    type: TEXT
  },
  'customization.logo.reports': {
    type: TEXT
  },
  'checks.pattern': {
    type: BOOLEAN
  },
  'checks.template': {
    type: BOOLEAN
  },
  'checks.api': {
    type: BOOLEAN
  },
  'checks.setup': {
    type: BOOLEAN
  },
  'checks.fields': {
    type: BOOLEAN
  },
  'checks.metaFields': {
    type: BOOLEAN
  },
  'checks.timeFilter': {
    type: BOOLEAN
  },
  'checks.maxBuckets': {
    type: BOOLEAN
  },
  timeout: {
    type: NUMBER
  },
  'ip.selector': {
    type: BOOLEAN
  },
  'ip.ignore': {
    type: ARRAY
  },
  'wazuh.monitoring.enabled': {
    type: BOOLEAN
  },
  'wazuh.monitoring.frequency': {
    type: NUMBER
  },
  'wazuh.monitoring.shards': {
    type: NUMBER
  },
  'wazuh.monitoring.replicas': {
    type: NUMBER
  },
  'wazuh.monitoring.creation': {
    type: LIST,
    params: {
      options: [{
        text: 'Hourly',
        value: 'h'
      }, {
        text: 'Daily',
        value: 'd'
      }, {
        text: 'Weekly',
        value: 'w'
      }, {
        text: 'Monthly',
        value: 'm'
      }]
    }
  },
  'wazuh.monitoring.pattern': {
    type: TEXT
  },
  hideManagerAlerts: {
    type: BOOLEAN
  },
  'logs.level': {
    type: LIST,
    params: {
      options: [{
        text: 'Info',
        value: 'info'
      }, {
        text: 'Debug',
        value: 'debug'
      }]
    }
  },
  'enrollment.dns': {
    type: TEXT
  },
  'cron.prefix': {
    type: TEXT
  },
  'cron.statistics.status': {
    type: BOOLEAN
  },
  'cron.statistics.apis': {
    type: ARRAY
  },
  'cron.statistics.interval': {
    type: INTERVAL
  },
  'cron.statistics.index.name': {
    type: TEXT
  },
  'cron.statistics.index.creation': {
    type: LIST,
    params: {
      options: [{
        text: 'Hourly',
        value: 'h'
      }, {
        text: 'Daily',
        value: 'd'
      }, {
        text: 'Weekly',
        value: 'w'
      }, {
        text: 'Monthly',
        value: 'm'
      }]
    }
  },
  'cron.statistics.index.shards': {
    type: NUMBER
  },
  'cron.statistics.index.replicas': {
    type: NUMBER
  },
  'alerts.sample.prefix': {
    type: TEXT
  }
};
exports.formEquivalence = formEquivalence;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1lcXVpdmFsZW5jZXMuanMiXSwibmFtZXMiOlsiY29uZmlnRXF1aXZhbGVuY2VzIiwicGF0dGVybiIsIkFTU0VUU19QVUJMSUNfVVJMIiwiUExVR0lOX1BMQVRGT1JNX05BTUUiLCJ0aW1lb3V0IiwiaGlkZU1hbmFnZXJBbGVydHMiLCJuYW1lRXF1aXZhbGVuY2UiLCJIRUFMVEhfQ0hFQ0siLCJHRU5FUkFMIiwiU0VDVVJJVFkiLCJNT05JVE9SSU5HIiwiU1RBVElTVElDUyIsIkNVU1RPTUlaQVRJT04iLCJjYXRlZ29yaWVzTmFtZXMiLCJjYXRlZ29yaWVzRXF1aXZhbGVuY2UiLCJURVhUIiwiTlVNQkVSIiwiTElTVCIsIkJPT0xFQU4iLCJBUlJBWSIsIklOVEVSVkFMIiwiZm9ybUVxdWl2YWxlbmNlIiwidHlwZSIsInBhcmFtcyIsIm9wdGlvbnMiLCJ0ZXh0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxNQUFNQSxrQkFBa0IsR0FBRztBQUNoQ0MsRUFBQUEsT0FBTyxFQUFFLDJKQUR1QjtBQUVoQyw0QkFBMEIsMENBQXlDQyw0QkFBa0IsRUFGckQ7QUFHaEMsZ0NBQThCLDhDQUE2Q0EsNEJBQWtCLEVBSDdEO0FBSWhDLG9DQUFrQyxtREFBa0RBLDRCQUFrQixFQUp0RTtBQUtoQyxnQ0FBOEIscURBQW9EQSw0QkFBa0IsRUFMcEU7QUFNaEMsb0JBQ0Usd0VBUDhCO0FBUWhDLHFCQUNFLG1FQVQ4QjtBQVVoQyxnQkFBYyw4REFWa0I7QUFXaEMsa0JBQ0UsZ0VBWjhCO0FBYWhDLG1CQUNFLHVFQWQ4QjtBQWU5Qix1QkFDRyxtQ0FBa0NDLCtCQUFxQiwwQkFoQjVCO0FBaUI5Qix1QkFDRyxtQ0FBa0NBLCtCQUFxQiwyQkFsQjVCO0FBbUI5Qix1QkFDRyxtQ0FBa0NBLCtCQUFxQiw0QkFwQjVCO0FBcUJoQyxvQkFBa0IsMkRBckJjO0FBc0JoQyxxQkFBbUIsd0RBdEJhO0FBdUJoQyxzQkFBb0IseURBdkJZO0FBd0JoQyxx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NEI7QUFBRUcsSUFBQUEsSUFBSSxFQUFFRjtBQUFSLEdBN0NDO0FBOEM3QixnQ0FBOEI7QUFBRUUsSUFBQUEsSUFBSSxFQUFFUDtBQUFSLEdBOUNEO0FBK0M3QixvQ0FBa0M7QUFDaENPLElBQUFBLElBQUksRUFBRUwsSUFEMEI7QUFDcEJNLElBQUFBLE1BQU0sRUFBRTtBQUNsQkMsTUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLEtBQUssRUFBRTtBQUF6QixPQURPLEVBRVA7QUFBRUQsUUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLFFBQUFBLEtBQUssRUFBRTtBQUF4QixPQUZPLEVBR1A7QUFBRUQsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLEtBQUssRUFBRTtBQUF6QixPQUhPLEVBSVA7QUFBRUQsUUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLFFBQUFBLEtBQUssRUFBRTtBQUExQixPQUpPO0FBRFM7QUFEWSxHQS9DTDtBQXlEN0Isa0NBQWdDO0FBQUVKLElBQUFBLElBQUksRUFBRU47QUFBUixHQXpESDtBQTBEN0Isb0NBQWtDO0FBQUVNLElBQUFBLElBQUksRUFBRU47QUFBUixHQTFETDtBQTJEN0IsMEJBQXdCO0FBQUVNLElBQUFBLElBQUksRUFBRVA7QUFBUjtBQTNESyxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFTU0VUU19QVUJMSUNfVVJMLCBQTFVHSU5fUExBVEZPUk1fTkFNRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnRXF1aXZhbGVuY2VzID0ge1xuICBwYXR0ZXJuOiBcIkRlZmF1bHQgaW5kZXggcGF0dGVybiB0byB1c2Ugb24gdGhlIGFwcC4gSWYgdGhlcmUncyBubyB2YWxpZCBpbmRleCBwYXR0ZXJuLCB0aGUgYXBwIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgb25lIHdpdGggdGhlIG5hbWUgaW5kaWNhdGVkIGluIHRoaXMgb3B0aW9uLlwiLFxuICAnY3VzdG9taXphdGlvbi5sb2dvLmFwcCc6YFNldCB0aGUgbmFtZSBvZiB0aGUgYXBwIGxvZ28gc3RvcmVkIGF0ICR7QVNTRVRTX1BVQkxJQ19VUkx9YCxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5zaWRlYmFyJzpgU2V0IHRoZSBuYW1lIG9mIHRoZSBzaWRlYmFyIGxvZ28gc3RvcmVkIGF0ICR7QVNTRVRTX1BVQkxJQ19VUkx9YCxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5oZWFsdGhjaGVjayc6YFNldCB0aGUgbmFtZSBvZiB0aGUgaGVhbHRoLWNoZWNrIGxvZ28gc3RvcmVkIGF0ICR7QVNTRVRTX1BVQkxJQ19VUkx9YCxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5yZXBvcnRzJzpgU2V0IHRoZSBuYW1lIG9mIHRoZSByZXBvcnRzIGxvZ28gKC5wbmcpIHN0b3JlZCBhdCAke0FTU0VUU19QVUJMSUNfVVJMfWAsXG4gICdjaGVja3MucGF0dGVybic6XG4gICAgJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBpbmRleCBwYXR0ZXJuIGhlYWx0aCBjaGVjayB3aGVuIG9wZW5pbmcgdGhlIGFwcC4nLFxuICAnY2hlY2tzLnRlbXBsYXRlJzpcbiAgICAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIHRlbXBsYXRlIGhlYWx0aCBjaGVjayB3aGVuIG9wZW5pbmcgdGhlIGFwcC4nLFxuICAnY2hlY2tzLmFwaSc6ICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgQVBJIGhlYWx0aCBjaGVjayB3aGVuIG9wZW5pbmcgdGhlIGFwcC4nLFxuICAnY2hlY2tzLnNldHVwJzpcbiAgICAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIHNldHVwIGhlYWx0aCBjaGVjayB3aGVuIG9wZW5pbmcgdGhlIGFwcC4nLFxuICAnY2hlY2tzLmZpZWxkcyc6XG4gICAgJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBrbm93biBmaWVsZHMgaGVhbHRoIGNoZWNrIHdoZW4gb3BlbmluZyB0aGUgYXBwLicsXG4gICAgJ2NoZWNrcy5tZXRhRmllbGRzJzpcbiAgICAgIGBDaGFuZ2UgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlICR7UExVR0lOX1BMQVRGT1JNX05BTUV9IG1ldGFGaWVsZCBjb25maWd1cmF0aW9uYCxcbiAgICAnY2hlY2tzLnRpbWVGaWx0ZXInOlxuICAgICAgYENoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgJHtQTFVHSU5fUExBVEZPUk1fTkFNRX0gdGltZUZpbHRlciBjb25maWd1cmF0aW9uYCxcbiAgICAnY2hlY2tzLm1heEJ1Y2tldHMnOlxuICAgICAgYENoYW5nZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgJHtQTFVHSU5fUExBVEZPUk1fTkFNRX0gbWF4IGJ1Y2tldHMgY29uZmlndXJhdGlvbmAsXG4gICdleHRlbnNpb25zLnBjaSc6ICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgUENJIERTUyB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICAnZXh0ZW5zaW9ucy5nZHByJzogJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBHRFBSIHRhYiBvbiBPdmVydmlldyBhbmQgQWdlbnRzLicsXG4gICdleHRlbnNpb25zLmhpcGFhJzogJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBISVBBQSB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICAnZXh0ZW5zaW9ucy5uaXN0JzogJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBOSVNUIDgwMC01MyB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICAnZXh0ZW5zaW9ucy50c2MnOiAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIFRTQyB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICAnZXh0ZW5zaW9ucy5hdWRpdCc6ICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgQXVkaXQgdGFiIG9uIE92ZXJ2aWV3IGFuZCBBZ2VudHMuJyxcbiAgJ2V4dGVuc2lvbnMub3NjYXAnOlxuICAgICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgT3BlbiBTQ0FQIHRhYiBvbiBPdmVydmlldyBhbmQgQWdlbnRzLicsXG4gICdleHRlbnNpb25zLmNpc2NhdCc6XG4gICAgJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBDSVMtQ0FUIHRhYiBvbiBPdmVydmlldyBhbmQgQWdlbnRzLicsXG4gICdleHRlbnNpb25zLmF3cyc6ICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgQW1hem9uIChBV1MpIHRhYiBvbiBPdmVydmlldy4nLFxuICAnZXh0ZW5zaW9ucy5nY3AnOiAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIEdvb2dsZSBDbG91ZCBQbGF0Zm9ybSB0YWIgb24gT3ZlcnZpZXcuJyxcbiAgJ2V4dGVuc2lvbnMudmlydXN0b3RhbCc6XG4gICAgJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSBWaXJ1c1RvdGFsIHRhYiBvbiBPdmVydmlldyBhbmQgQWdlbnRzLicsXG4gICdleHRlbnNpb25zLm9zcXVlcnknOlxuICAgICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgT3NxdWVyeSB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICAnZXh0ZW5zaW9ucy5taXRyZSc6ICdFbmFibGUgb3IgZGlzYWJsZSB0aGUgTUlUUkUgdGFiIG9uIE92ZXJ2aWV3IGFuZCBBZ2VudHMuJyxcbiAgJ2V4dGVuc2lvbnMuZG9ja2VyJzpcbiAgICAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIERvY2tlciBsaXN0ZW5lciB0YWIgb24gT3ZlcnZpZXcgYW5kIEFnZW50cy4nLFxuICB0aW1lb3V0OlxuICAgICdNYXhpbXVtIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhlIGFwcCB3aWxsIHdhaXQgZm9yIGFuIEFQSSByZXNwb25zZSB3aGVuIG1ha2luZyByZXF1ZXN0cyB0byBpdC4gSXQgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSB2YWx1ZSBpcyBzZXQgdW5kZXIgMTUwMCBtaWxsaXNlY29uZHMuJyxcbiAgJ2lwLnNlbGVjdG9yJzpcbiAgICAnRGVmaW5lIGlmIHRoZSB1c2VyIGlzIGFsbG93ZWQgdG8gY2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBwYXR0ZXJuIGRpcmVjdGx5IGZyb20gdGhlIHRvcCBtZW51IGJhci4nLFxuICAnaXAuaWdub3JlJzpcbiAgICAnRGlzYWJsZSBjZXJ0YWluIGluZGV4IHBhdHRlcm4gbmFtZXMgZnJvbSBiZWluZyBhdmFpbGFibGUgaW4gaW5kZXggcGF0dGVybiBzZWxlY3RvciBmcm9tIHRoZSBXYXp1aCBhcHAuJyxcbiAgJ3dhenVoLm1vbml0b3JpbmcuZW5hYmxlZCc6XG4gICAgJ0VuYWJsZSBvciBkaXNhYmxlIHRoZSB3YXp1aC1tb25pdG9yaW5nIGluZGV4IGNyZWF0aW9uIGFuZC9vciB2aXN1YWxpemF0aW9uLicsXG4gICd3YXp1aC5tb25pdG9yaW5nLmZyZXF1ZW5jeSc6XG4gICAgJ0ZyZXF1ZW5jeSwgaW4gc2Vjb25kcywgb2YgQVBJIHJlcXVlc3RzIHRvIGdldCB0aGUgc3RhdGUgb2YgdGhlIGFnZW50cyBhbmQgY3JlYXRlIGEgbmV3IGRvY3VtZW50IGluIHRoZSB3YXp1aC1tb25pdG9yaW5nIGluZGV4IHdpdGggdGhpcyBkYXRhLicsXG4gICd3YXp1aC5tb25pdG9yaW5nLnNoYXJkcyc6XG4gICAgJ0RlZmluZSB0aGUgbnVtYmVyIG9mIHNoYXJkcyB0byB1c2UgZm9yIHRoZSB3YXp1aC1tb25pdG9yaW5nLSogaW5kaWNlcy4nLFxuICAnd2F6dWgubW9uaXRvcmluZy5yZXBsaWNhcyc6XG4gICAgJ0RlZmluZSB0aGUgbnVtYmVyIG9mIHJlcGxpY2FzIHRvIHVzZSBmb3IgdGhlIHdhenVoLW1vbml0b3JpbmctKiBpbmRpY2VzLicsXG4gICd3YXp1aC5tb25pdG9yaW5nLmNyZWF0aW9uJzpcbiAgICAnRGVmaW5lIHRoZSBpbnRlcnZhbCBpbiB3aGljaCBhIG5ldyB3YXp1aC1tb25pdG9yaW5nIGluZGV4IHdpbGwgYmUgY3JlYXRlZC4nLFxuICAnd2F6dWgubW9uaXRvcmluZy5wYXR0ZXJuJzpcbiAgICAnRGVmYXVsdCBpbmRleCBwYXR0ZXJuIHRvIHVzZSBmb3IgV2F6dWggbW9uaXRvcmluZy4nLFxuICBoaWRlTWFuYWdlckFsZXJ0czpcbiAgICAnSGlkZSB0aGUgYWxlcnRzIG9mIHRoZSBtYW5hZ2VyIGluIGV2ZXJ5IGRhc2hib2FyZC4nLFxuICAnbG9ncy5sZXZlbCc6XG4gICAgJ0xvZ2dpbmcgbGV2ZWwgb2YgdGhlIEFwcC4nLFxuICAnZW5yb2xsbWVudC5kbnMnOlxuICAgICdTcGVjaWZpZXMgdGhlIFdhenVoIHJlZ2lzdHJhdGlvbiBzZXJ2ZXIsIHVzZWQgZm9yIHRoZSBhZ2VudCBlbnJvbGxtZW50LicsXG4gICdlbnJvbGxtZW50LnBhc3N3b3JkJzpcbiAgICAnU3BlY2lmaWVzIHRoZSBwYXNzd29yZCB1c2VkIHRvIGF1dGhlbnRpY2F0ZSBkdXJpbmcgdGhlIGFnZW50IGVucm9sbG1lbnQuJyxcbiAgJ2Nyb24ucHJlZml4JzpcbiAgICAnRGVmaW5lIHRoZSBpbmRleCBwcmVmaXggb2YgcHJlZGVmaW5lZCBqb2JzLicsXG4gICdjcm9uLnN0YXRpc3RpY3Muc3RhdHVzJzpcbiAgICAnRW5hYmxlIG9yIGRpc2FibGUgdGhlIHN0YXRpc3RpY3MgdGFza3MuJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5hcGlzJzpcbiAgICAnRW50ZXIgdGhlIElEIG9mIHRoZSBob3N0cyB5b3Ugd2FudCB0byBzYXZlIGRhdGEgZnJvbSwgbGVhdmUgdGhpcyBlbXB0eSB0byBydW4gdGhlIHRhc2sgb24gZXZlcnkgaG9zdC4nLFxuICAnY3Jvbi5zdGF0aXN0aWNzLmludGVydmFsJzogJ0RlZmluZSB0aGUgZnJlcXVlbmN5IG9mIHRhc2sgZXhlY3V0aW9uIHVzaW5nIGNyb24gc2NoZWR1bGUgZXhwcmVzc2lvbnMuJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5uYW1lJzogJ0RlZmluZSB0aGUgbmFtZSBvZiB0aGUgaW5kZXggaW4gd2hpY2ggdGhlIGRvY3VtZW50cyB3aWxsIGJlIHNhdmVkLicsXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXguY3JlYXRpb24nOiAnRGVmaW5lIHRoZSBpbnRlcnZhbCBpbiB3aGljaCBhIG5ldyBpbmRleCB3aWxsIGJlIGNyZWF0ZWQuJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5zaGFyZHMnOiAnRGVmaW5lIHRoZSBudW1iZXIgb2Ygc2hhcmRzIHRvIHVzZSBmb3IgdGhlIHN0YXRpc3RpY3MgaW5kaWNlcy4nLFxuICAnY3Jvbi5zdGF0aXN0aWNzLmluZGV4LnJlcGxpY2FzJzogJ0RlZmluZSB0aGUgbnVtYmVyIG9mIHJlcGxpY2FzIHRvIHVzZSBmb3IgdGhlIHN0YXRpc3RpY3MgaW5kaWNlcy4nLFxuICAnYWxlcnRzLnNhbXBsZS5wcmVmaXgnOiAnRGVmaW5lIHRoZSBpbmRleCBuYW1lIHByZWZpeCBvZiBzYW1wbGUgYWxlcnRzLiBJdCBtdXN0IG1hdGNoIHRoZSB0ZW1wbGF0ZSB1c2VkIGJ5IHRoZSBpbmRleCBwYXR0ZXJuIHRvIGF2b2lkIHVua25vd24gZmllbGRzIGluIGRhc2hib2FyZHMuJyxcbn07XG5cbmV4cG9ydCBjb25zdCBuYW1lRXF1aXZhbGVuY2UgPSB7XG4gIHBhdHRlcm46ICdJbmRleCBwYXR0ZXJuJyxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5hcHAnOiAnTG9nbyBBcHAnLFxuICAnY3VzdG9taXphdGlvbi5sb2dvLnNpZGViYXInOiAnTG9nbyBTaWRlYmFyJyxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5oZWFsdGhjaGVjayc6ICdMb2dvIEhlYWx0aCBDaGVjaycsXG4gICdjdXN0b21pemF0aW9uLmxvZ28ucmVwb3J0cyc6ICdMb2dvIFJlcG9ydHMnLFxuICAnY2hlY2tzLnBhdHRlcm4nOiAnSW5kZXggcGF0dGVybicsXG4gICdjaGVja3MudGVtcGxhdGUnOiAnSW5kZXggdGVtcGxhdGUnLFxuICAnY2hlY2tzLmFwaSc6ICdBUEkgY29ubmVjdGlvbicsXG4gICdjaGVja3Muc2V0dXAnOiAnQVBJIHZlcnNpb24nLFxuICAnY2hlY2tzLmZpZWxkcyc6ICdLbm93biBmaWVsZHMnLFxuICAnY2hlY2tzLm1ldGFGaWVsZHMnOiAnUmVtb3ZlIG1ldGEgZmllbGRzJyxcbiAgJ2NoZWNrcy50aW1lRmlsdGVyJzogJ1NldCB0aW1lIGZpbHRlciB0byAyNGgnLFxuICAnY2hlY2tzLm1heEJ1Y2tldHMnOiAnU2V0IG1heCBidWNrZXRzIHRvIDIwMDAwMCcsXG4gIHRpbWVvdXQ6ICdSZXF1ZXN0IHRpbWVvdXQnLFxuICAnaXAuc2VsZWN0b3InOiAnSVAgc2VsZWN0b3InLFxuICAnaXAuaWdub3JlJzogJ0lQIGlnbm9yZScsXG4gICd3YXp1aC5tb25pdG9yaW5nLmVuYWJsZWQnOiAnU3RhdHVzJyxcbiAgJ3dhenVoLm1vbml0b3JpbmcuZnJlcXVlbmN5JzogJ0ZyZXF1ZW5jeScsXG4gICd3YXp1aC5tb25pdG9yaW5nLnNoYXJkcyc6ICdJbmRleCBzaGFyZHMnLFxuICAnd2F6dWgubW9uaXRvcmluZy5yZXBsaWNhcyc6ICdJbmRleCByZXBsaWNhcycsXG4gICd3YXp1aC5tb25pdG9yaW5nLmNyZWF0aW9uJzogJ0luZGV4IGNyZWF0aW9uJyxcbiAgJ3dhenVoLm1vbml0b3JpbmcucGF0dGVybic6ICdJbmRleCBwYXR0ZXJuJyxcbiAgaGlkZU1hbmFnZXJBbGVydHM6ICdIaWRlIG1hbmFnZXIgYWxlcnRzJyxcbiAgJ2xvZ3MubGV2ZWwnOiAnTG9nIGxldmVsJyxcbiAgJ2Vucm9sbG1lbnQuZG5zJzogJ0Vucm9sbG1lbnQgRE5TJyxcbiAgJ2Nyb24ucHJlZml4JzogJ0Nyb24gcHJlZml4JyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5zdGF0dXMnOiAnU3RhdHVzJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5hcGlzJzogJ0luY2x1ZGVzIGFwaXMnLFxuICAnY3Jvbi5zdGF0aXN0aWNzLmludGVydmFsJzogJ0ludGVydmFsJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5uYW1lJzogJ0luZGV4IG5hbWUnLFxuICAnY3Jvbi5zdGF0aXN0aWNzLmluZGV4LmNyZWF0aW9uJzogJ0luZGV4IGNyZWF0aW9uJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5zaGFyZHMnOiAnSW5kZXggc2hhcmRzJyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5yZXBsaWNhcyc6ICdJbmRleCByZXBsaWNhcycsXG4gICdhbGVydHMuc2FtcGxlLnByZWZpeCc6ICdTYW1wbGUgYWxlcnRzIHByZWZpeCcsXG59XG5cbmNvbnN0IEhFQUxUSF9DSEVDSyA9ICdIZWFsdGggQ2hlY2snO1xuY29uc3QgR0VORVJBTCA9ICdHZW5lcmFsJztcbmNvbnN0IFNFQ1VSSVRZID0gJ1NlY3VyaXR5JztcbmNvbnN0IE1PTklUT1JJTkcgPSAnTW9uaXRvcmluZyc7XG5jb25zdCBTVEFUSVNUSUNTID0gJ1N0YXRpc3RpY3MnO1xuY29uc3QgQ1VTVE9NSVpBVElPTiA9ICdMb2dvIEN1c3RvbWl6YXRpb24nO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXNOYW1lcyA9IFtIRUFMVEhfQ0hFQ0ssIEdFTkVSQUwsIFNFQ1VSSVRZLCBNT05JVE9SSU5HLCBTVEFUSVNUSUNTLCBDVVNUT01JWkFUSU9OXTtcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXNFcXVpdmFsZW5jZSA9IHtcbiAgcGF0dGVybjogR0VORVJBTCxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5hcHAnOkNVU1RPTUlaQVRJT04sXG4gICdjdXN0b21pemF0aW9uLmxvZ28uc2lkZWJhcic6Q1VTVE9NSVpBVElPTixcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5oZWFsdGhjaGVjayc6Q1VTVE9NSVpBVElPTixcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5yZXBvcnRzJzpDVVNUT01JWkFUSU9OLFxuICAnY2hlY2tzLnBhdHRlcm4nOiBIRUFMVEhfQ0hFQ0ssXG4gICdjaGVja3MudGVtcGxhdGUnOiBIRUFMVEhfQ0hFQ0ssXG4gICdjaGVja3MuYXBpJzogSEVBTFRIX0NIRUNLLFxuICAnY2hlY2tzLnNldHVwJzogSEVBTFRIX0NIRUNLLFxuICAnY2hlY2tzLmZpZWxkcyc6IEhFQUxUSF9DSEVDSyxcbiAgJ2NoZWNrcy5tZXRhRmllbGRzJzogSEVBTFRIX0NIRUNLLFxuICAnY2hlY2tzLnRpbWVGaWx0ZXInOiBIRUFMVEhfQ0hFQ0ssXG4gICdjaGVja3MubWF4QnVja2V0cyc6IEhFQUxUSF9DSEVDSyxcbiAgdGltZW91dDogR0VORVJBTCxcbiAgJ2lwLnNlbGVjdG9yJzogR0VORVJBTCxcbiAgJ2lwLmlnbm9yZSc6IEdFTkVSQUwsXG4gICd3YXp1aC5tb25pdG9yaW5nLmVuYWJsZWQnOiBNT05JVE9SSU5HLFxuICAnd2F6dWgubW9uaXRvcmluZy5mcmVxdWVuY3knOiBNT05JVE9SSU5HLFxuICAnd2F6dWgubW9uaXRvcmluZy5zaGFyZHMnOiBNT05JVE9SSU5HLFxuICAnd2F6dWgubW9uaXRvcmluZy5yZXBsaWNhcyc6IE1PTklUT1JJTkcsXG4gICd3YXp1aC5tb25pdG9yaW5nLmNyZWF0aW9uJzogTU9OSVRPUklORyxcbiAgJ3dhenVoLm1vbml0b3JpbmcucGF0dGVybic6IE1PTklUT1JJTkcsXG4gIGhpZGVNYW5hZ2VyQWxlcnRzOiBHRU5FUkFMLFxuICAnbG9ncy5sZXZlbCc6IEdFTkVSQUwsXG4gICdlbnJvbGxtZW50LmRucyc6IEdFTkVSQUwsXG4gICdjcm9uLnByZWZpeCc6IEdFTkVSQUwsXG4gICdjcm9uLnN0YXRpc3RpY3Muc3RhdHVzJzogU1RBVElTVElDUyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5hcGlzJzogU1RBVElTVElDUyxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbnRlcnZhbCc6IFNUQVRJU1RJQ1MsXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXgubmFtZSc6IFNUQVRJU1RJQ1MsXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXguY3JlYXRpb24nOiBTVEFUSVNUSUNTLFxuICAnY3Jvbi5zdGF0aXN0aWNzLmluZGV4LnNoYXJkcyc6IFNUQVRJU1RJQ1MsXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXgucmVwbGljYXMnOiBTVEFUSVNUSUNTLFxuICAnYWxlcnRzLnNhbXBsZS5wcmVmaXgnOiBHRU5FUkFMLFxufVxuXG5jb25zdCBURVhUID0gJ3RleHQnO1xuY29uc3QgTlVNQkVSID0gJ251bWJlcic7XG5jb25zdCBMSVNUID0gJ2xpc3QnO1xuY29uc3QgQk9PTEVBTiA9ICdib29sZWFuJztcbmNvbnN0IEFSUkFZID0gJ2FycmF5JztcbmNvbnN0IElOVEVSVkFMID0gJ2ludGVydmFsJ1xuXG5leHBvcnQgY29uc3QgZm9ybUVxdWl2YWxlbmNlID0ge1xuICBwYXR0ZXJuOiB7IHR5cGU6IFRFWFQgfSxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5hcHAnOiB7IHR5cGU6IFRFWFQgfSxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5zaWRlYmFyJzogeyB0eXBlOiBURVhUIH0sXG4gICdjdXN0b21pemF0aW9uLmxvZ28uaGVhbHRoY2hlY2snOiB7IHR5cGU6IFRFWFQgfSxcbiAgJ2N1c3RvbWl6YXRpb24ubG9nby5yZXBvcnRzJzogeyB0eXBlOiBURVhUIH0sXG4gICdjaGVja3MucGF0dGVybic6IHsgdHlwZTogQk9PTEVBTiB9LFxuICAnY2hlY2tzLnRlbXBsYXRlJzogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdjaGVja3MuYXBpJzogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdjaGVja3Muc2V0dXAnOiB7IHR5cGU6IEJPT0xFQU4gfSxcbiAgJ2NoZWNrcy5maWVsZHMnOiB7IHR5cGU6IEJPT0xFQU4gfSxcbiAgJ2NoZWNrcy5tZXRhRmllbGRzJzogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdjaGVja3MudGltZUZpbHRlcic6IHsgdHlwZTogQk9PTEVBTiB9LFxuICAnY2hlY2tzLm1heEJ1Y2tldHMnOiB7IHR5cGU6IEJPT0xFQU4gfSxcbiAgdGltZW91dDogeyB0eXBlOiBOVU1CRVIgfSxcbiAgJ2lwLnNlbGVjdG9yJzogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdpcC5pZ25vcmUnOiB7IHR5cGU6IEFSUkFZIH0sXG4gICd3YXp1aC5tb25pdG9yaW5nLmVuYWJsZWQnOiB7IHR5cGU6IEJPT0xFQU4gfSxcbiAgJ3dhenVoLm1vbml0b3JpbmcuZnJlcXVlbmN5JzogeyB0eXBlOiBOVU1CRVIgfSxcbiAgJ3dhenVoLm1vbml0b3Jpbmcuc2hhcmRzJzogeyB0eXBlOiBOVU1CRVIgfSxcbiAgJ3dhenVoLm1vbml0b3JpbmcucmVwbGljYXMnOiB7IHR5cGU6IE5VTUJFUiB9LFxuICAnd2F6dWgubW9uaXRvcmluZy5jcmVhdGlvbic6IHtcbiAgICB0eXBlOiBMSVNULCBwYXJhbXM6IHtcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSG91cmx5JywgdmFsdWU6ICdoJyB9LFxuICAgICAgICB7IHRleHQ6ICdEYWlseScsIHZhbHVlOiAnZCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnV2Vla2x5JywgdmFsdWU6ICd3JyB9LFxuICAgICAgICB7IHRleHQ6ICdNb250aGx5JywgdmFsdWU6ICdtJyB9LFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgJ3dhenVoLm1vbml0b3JpbmcucGF0dGVybic6IHsgdHlwZTogVEVYVCB9LFxuICBoaWRlTWFuYWdlckFsZXJ0czogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdsb2dzLmxldmVsJzoge1xuICAgIHR5cGU6IExJU1QsIHBhcmFtczoge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHRleHQ6ICdJbmZvJywgdmFsdWU6ICdpbmZvJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZWJ1ZycsIHZhbHVlOiAnZGVidWcnIH0sXG4gICAgICBdXG4gICAgfVxuICB9LFxuICAnZW5yb2xsbWVudC5kbnMnOiB7IHR5cGU6IFRFWFQgfSxcbiAgJ2Nyb24ucHJlZml4JzogeyB0eXBlOiBURVhUIH0sXG4gICdjcm9uLnN0YXRpc3RpY3Muc3RhdHVzJzogeyB0eXBlOiBCT09MRUFOIH0sXG4gICdjcm9uLnN0YXRpc3RpY3MuYXBpcyc6IHsgdHlwZTogQVJSQVkgfSxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbnRlcnZhbCc6IHsgdHlwZTogSU5URVJWQUwgfSxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5uYW1lJzogeyB0eXBlOiBURVhUIH0sXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXguY3JlYXRpb24nOiB7XG4gICAgdHlwZTogTElTVCwgcGFyYW1zOiB7XG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdGV4dDogJ0hvdXJseScsIHZhbHVlOiAnaCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGFpbHknLCB2YWx1ZTogJ2QnIH0sXG4gICAgICAgIHsgdGV4dDogJ1dlZWtseScsIHZhbHVlOiAndycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW9udGhseScsIHZhbHVlOiAnbScgfSxcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gICdjcm9uLnN0YXRpc3RpY3MuaW5kZXguc2hhcmRzJzogeyB0eXBlOiBOVU1CRVIgfSxcbiAgJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5yZXBsaWNhcyc6IHsgdHlwZTogTlVNQkVSIH0sXG4gICdhbGVydHMuc2FtcGxlLnByZWZpeCc6IHsgdHlwZTogVEVYVCB9LFxufVxuIl19