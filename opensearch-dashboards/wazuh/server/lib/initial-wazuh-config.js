"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialWazuhConfig = void 0;

var _constants = require("../../common/constants");

var _web_documentation = require("../../common/services/web_documentation");

var _configEquivalences = require("../../common/config-equivalences");

/*
 * Wazuh app - App configuration file
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

/**
 * Given a string, this function builds a multine string, each line about 70
 * characters long, splitted at the closest whitespace character to that lentgh.
 *
 * This function is used to transform the settings description stored in the
 * configEquivalences map into a multiline string to be used as the setting
 * documentation.
 *
 * The # character is also appended to the beginning of each line.
 *
 * @param text
 * @returns multine string
 */
function splitDescription(text = '') {
  const lines = text.match(/.{1,80}(?=\s|$)/g) || [];
  return lines.map(z => '# ' + z.trim()).join('\n');
}

const initialWazuhConfig = `---
#
# ${_constants.PLUGIN_APP_NAME} - App configuration file
# Copyright (C) 2015-2022 Wazuh, Inc.
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# Find more information about this on the LICENSE file.
#
# ======================== ${_constants.PLUGIN_APP_NAME} configuration file ========================
#
# Please check the documentation for more information about configuration options:
# ${(0, _web_documentation.webDocumentationLink)('user-manual/wazuh-dashboard/config-file.html')}
#
# Also, you can check our repository:
# https://github.com/wazuh/wazuh-kibana-app
#
# ---------------------------- Unauthorized roles ------------------------------
#
# Disable Wazuh for the Elasticsearch / OpenSearch roles defined here.
# disabled_roles:
#   - wazuh_disabled
#
# ------------------------------- Index patterns -------------------------------
#
${splitDescription(_configEquivalences.configEquivalences.pattern)}
# pattern: ${_constants.WAZUH_ALERTS_PATTERN}
#
# ----------------------------------- Checks -----------------------------------
#
# Define which checks will be executed by the App's HealthCheck.
# Allowed values are: true, false
#
${splitDescription(_configEquivalences.configEquivalences['checks.pattern'])}
# checks.pattern: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.pattern']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.template'])}
# checks.template: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.template']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.api'])}
# checks.api: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.api']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.setup'])}
# checks.setup: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.setup']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.fields'])}
# checks.fields: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.fields']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.metaFields'])}
# checks.metaFields: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.metaFields']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.timeFilter'])}
# checks.timeFilter: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.timeFilter']}
#
${splitDescription(_configEquivalences.configEquivalences['checks.maxBuckets'])}
# checks.maxBuckets: ${_constants.WAZUH_DEFAULT_APP_CONFIG['checks.maxBuckets']}
#
# --------------------------------- Extensions ---------------------------------
#
# Define the initial state of the extensions (enabled / disabled) for recently
# added hosts. The extensions can be enabled or disabled anytime using the UI.
# Allowed values are: true, false
#
${splitDescription(_configEquivalences.configEquivalences['extensions.pci'])}
# extensions.pci: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.pci']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.gdpr'])}
# extensions.gdpr: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.gdpr']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.hipaa'])}
# extensions.hipaa: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.hipaa']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.nist'])}
# extensions.nist: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.nist']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.tsc'])}
# extensions.tsc: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.tsc']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.audit'])}
# extensions.audit: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.audit']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.oscap'])}
# extensions.oscap: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.oscap']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.ciscat'])}
# extensions.ciscat: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.ciscat']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.aws'])}
# extensions.aws: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.aws']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.gcp'])}
# extensions.gcp: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.gcp']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.virustotal'])}
# extensions.virustotal: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.virustotal']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.osquery'])}
# extensions.osquery: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.osquery']}
#
${splitDescription(_configEquivalences.configEquivalences['extensions.docker'])}
# extensions.docker: ${_constants.WAZUH_DEFAULT_APP_CONFIG['extensions.docker']}
#
# ------------------------------- Timeout --------------------------------------
#
${splitDescription(_configEquivalences.configEquivalences.timeout)}
# timeout: ${_constants.WAZUH_DEFAULT_APP_CONFIG.timeout}
#
# --------------------------- Index pattern selector ---------------------------
#
${splitDescription(_configEquivalences.configEquivalences['ip.selector'])}
# ip.selector: ${_constants.WAZUH_DEFAULT_APP_CONFIG['ip.selector']}
#
${splitDescription(_configEquivalences.configEquivalences['ip.ignore'])}
# ip.ignore: ${_constants.WAZUH_DEFAULT_APP_CONFIG['ip.ignore']}
#
# ------------------------------ Monitoring ------------------------------------
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.enabled'])}
# wazuh.monitoring.enabled: ${_constants.WAZUH_MONITORING_DEFAULT_ENABLED}
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.frequency'])}
# wazuh.monitoring.frequency: ${_constants.WAZUH_MONITORING_DEFAULT_FREQUENCY}
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.shards'])}
# wazuh.monitoring.shards: ${_constants.WAZUH_MONITORING_DEFAULT_INDICES_SHARDS}
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.replicas'])}
# wazuh.monitoring.replicas: ${_constants.WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS}
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.creation'])}
# Allowed values are: h (hourly), d (daily), w (weekly), m (monthly)
# wazuh.monitoring.creation: ${_constants.WAZUH_MONITORING_DEFAULT_CREATION}
#
${splitDescription(_configEquivalences.configEquivalences['wazuh.monitoring.pattern'])}
# wazuh.monitoring.pattern: ${_constants.WAZUH_MONITORING_PATTERN}
#
# --------------------------------- Sample data --------------------------------
#
${splitDescription(_configEquivalences.configEquivalences['alerts.sample.prefix'])}
# alerts.sample.prefix: ${_constants.WAZUH_SAMPLE_ALERT_PREFIX}
#
# ------------------------------ Background tasks ------------------------------
#
${splitDescription(_configEquivalences.configEquivalences['cron.prefix'])}
# cron.prefix: ${_constants.WAZUH_STATISTICS_DEFAULT_PREFIX}
#
# ------------------------------ Wazuh Statistics ------------------------------
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.status'])}
# cron.statistics.status: ${_constants.WAZUH_STATISTICS_DEFAULT_STATUS}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.apis'])}
# cron.statistics.apis: ${_constants.WAZUH_DEFAULT_APP_CONFIG['cron.statistics.apis']}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.interval'])}
# cron.statistics.interval: ${_constants.WAZUH_STATISTICS_DEFAULT_CRON_FREQ}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.index.name'])}
# cron.statistics.index.name: ${_constants.WAZUH_STATISTICS_DEFAULT_NAME}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.index.creation'])}
# cron.statistics.index.creation: ${_constants.WAZUH_STATISTICS_DEFAULT_CREATION}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.index.shards'])}
# cron.statistics.shards: ${_constants.WAZUH_STATISTICS_DEFAULT_INDICES_SHARDS}
#
${splitDescription(_configEquivalences.configEquivalences['cron.statistics.index.replicas'])}
# cron.statistics.replicas: ${_constants.WAZUH_STATISTICS_DEFAULT_INDICES_REPLICAS}
#
# ------------------------------ Logo customization ----------------------------
#
${splitDescription(_configEquivalences.configEquivalences['customization.logo.app'])}
# customization.logo.app: ${_constants.WAZUH_DEFAULT_APP_CONFIG['customization.logo.app']}
#
${splitDescription(_configEquivalences.configEquivalences['customization.logo.sidebar'])}
# customization.logo.sidebar: ${_constants.WAZUH_DEFAULT_APP_CONFIG['customization.logo.sidebar']}
#
${splitDescription(_configEquivalences.configEquivalences['customization.logo.healthcheck'])}
# customization.logo.healthcheck: ${_constants.WAZUH_DEFAULT_APP_CONFIG['customization.logo.healthcheck']}
#
${splitDescription(_configEquivalences.configEquivalences['customization.logo.reports'])}
# customization.logo.reports: ${_constants.WAZUH_DEFAULT_APP_CONFIG['customization.logo.reports']}
#
# ---------------------------- Hide manager alerts -----------------------------
#
${splitDescription(_configEquivalences.configEquivalences.hideManagerAlerts)}
# hideManagerAlerts: ${_constants.WAZUH_DEFAULT_APP_CONFIG.hideManagerAlerts}
#
# ------------------------------- App logging level ----------------------------
#
${splitDescription(_configEquivalences.configEquivalences['logs.level'])}
# Allowed values are: info, debug
# logs.level: ${_constants.WAZUH_DEFAULT_APP_CONFIG['logs.level']}
#
# ------------------------------- Agent enrollment -----------------------------
#
${splitDescription(_configEquivalences.configEquivalences['enrollment.dns'])}
# enrollment.dns: ${_constants.WAZUH_DEFAULT_APP_CONFIG['enrollment.dns']}
#
${splitDescription(_configEquivalences.configEquivalences['enrollment.password'])}
# enrollment.password: ${_constants.WAZUH_DEFAULT_APP_CONFIG['enrollment.password']}
#
#-------------------------------- Wazuh hosts ----------------------------------
#
# The following configuration is the default structure to define a host.
#
# hosts:
#   # Host ID / name,
#   - env-1:
#       # Host URL
#       url: https://env-1.example
#       # Host / API port
#       port: 55000
#       # Host / API username
#       username: wazuh-wui
#       # Host / API password
#       password: wazuh-wui
#       # Use RBAC or not. If set to true, the username must be "wazuh-wui".
#       run_as: true
#   - env-2:
#       url: https://env-2.example
#       port: 55000
#       username: wazuh-wui
#       password: wazuh-wui
#       run_as: true

hosts:
  - default:
      url: https://localhost
      port: 55000
      username: wazuh-wui
      password: wazuh-wui
      run_as: false
`;
exports.initialWazuhConfig = initialWazuhConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRpYWwtd2F6dWgtY29uZmlnLnRzIl0sIm5hbWVzIjpbInNwbGl0RGVzY3JpcHRpb24iLCJ0ZXh0IiwibGluZXMiLCJtYXRjaCIsIm1hcCIsInoiLCJ0cmltIiwiam9pbiIsImluaXRpYWxXYXp1aENvbmZpZyIsIlBMVUdJTl9BUFBfTkFNRSIsImNvbmZpZ0VxdWl2YWxlbmNlcyIsInBhdHRlcm4iLCJXQVpVSF9BTEVSVFNfUEFUVEVSTiIsIldBWlVIX0RFRkFVTFRfQVBQX0NPTkZJRyIsInRpbWVvdXQiLCJXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfRU5BQkxFRCIsIldBWlVIX01PTklUT1JJTkdfREVGQVVMVF9GUkVRVUVOQ1kiLCJXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19TSEFSRFMiLCJXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19SRVBMSUNBUyIsIldBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTiIsIldBWlVIX01PTklUT1JJTkdfUEFUVEVSTiIsIldBWlVIX1NBTVBMRV9BTEVSVF9QUkVGSVgiLCJXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfUFJFRklYIiwiV0FaVUhfU1RBVElTVElDU19ERUZBVUxUX1NUQVRVUyIsIldBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9DUk9OX0ZSRVEiLCJXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfTkFNRSIsIldBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9DUkVBVElPTiIsIldBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9JTkRJQ0VTX1NIQVJEUyIsIldBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9JTkRJQ0VTX1JFUExJQ0FTIiwiaGlkZU1hbmFnZXJBbGVydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFZQTs7QUFtQkE7O0FBQ0E7O0FBaENBOzs7Ozs7Ozs7Ozs7QUFrQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTQSxnQkFBVCxDQUEwQkMsSUFBWSxHQUFHLEVBQXpDLEVB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QixDQUFELENBQTRDO3lCQUNyQ0csb0NBQXlCLHFCQUF6QixDQUFnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBM01sRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBBcHAgY29uZmlndXJhdGlvbiBmaWxlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG5pbXBvcnQge1xuICBQTFVHSU5fQVBQX05BTUUsXG4gIFdBWlVIX0FMRVJUU19QQVRURVJOLFxuICBXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUcsXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTixcbiAgV0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0VOQUJMRUQsXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9GUkVRVUVOQ1ksXG4gIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9JTkRJQ0VTX1JFUExJQ0FTLFxuICBXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19TSEFSRFMsXG4gIFdBWlVIX01PTklUT1JJTkdfUEFUVEVSTixcbiAgV0FaVUhfU0FNUExFX0FMRVJUX1BSRUZJWCxcbiAgV0FaVUhfU1RBVElTVElDU19ERUZBVUxUX0NSRUFUSU9OLFxuICBXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfQ1JPTl9GUkVRLFxuICBXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfSU5ESUNFU19SRVBMSUNBUyxcbiAgV0FaVUhfU1RBVElTVElDU19ERUZBVUxUX0lORElDRVNfU0hBUkRTLFxuICBXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfTkFNRSxcbiAgV0FaVUhfU1RBVElTVElDU19ERUZBVUxUX1BSRUZJWCxcbiAgV0FaVUhfU1RBVElTVElDU19ERUZBVUxUX1NUQVRVUyxcbn0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB3ZWJEb2N1bWVudGF0aW9uTGluayB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy93ZWJfZG9jdW1lbnRhdGlvbic7XG5pbXBvcnQgeyBjb25maWdFcXVpdmFsZW5jZXMgfSBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnLWVxdWl2YWxlbmNlcyc7XG5cbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gYnVpbGRzIGEgbXVsdGluZSBzdHJpbmcsIGVhY2ggbGluZSBhYm91dCA3MFxuICogY2hhcmFjdGVycyBsb25nLCBzcGxpdHRlZCBhdCB0aGUgY2xvc2VzdCB3aGl0ZXNwYWNlIGNoYXJhY3RlciB0byB0aGF0IGxlbnRnaC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBzZXR0aW5ncyBkZXNjcmlwdGlvbiBzdG9yZWQgaW4gdGhlXG4gKiBjb25maWdFcXVpdmFsZW5jZXMgbWFwIGludG8gYSBtdWx0aWxpbmUgc3RyaW5nIHRvIGJlIHVzZWQgYXMgdGhlIHNldHRpbmdcbiAqIGRvY3VtZW50YXRpb24uXG4gKlxuICogVGhlICMgY2hhcmFjdGVyIGlzIGFsc28gYXBwZW5kZWQgdG8gdGhlIGJlZ2lubmluZyBvZiBlYWNoIGxpbmUuXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEByZXR1cm5zIG11bHRpbmUgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNwbGl0RGVzY3JpcHRpb24odGV4dDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICBjb25zdCBsaW5lcyA9IHRleHQubWF0Y2goLy57MSw4MH0oPz1cXHN8JCkvZykgfHwgW107XG4gIHJldHVybiBsaW5lcy5tYXAoKHopID0+ICcjICcgKyB6LnRyaW0oKSkuam9pbignXFxuJyk7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsV2F6dWhDb25maWc6IHN0cmluZyA9IGAtLS1cbiNcbiMgJHtQTFVHSU5fQVBQX05BTUV9IC0gQXBwIGNvbmZpZ3VyYXRpb24gZmlsZVxuIyBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuI1xuIyBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuIyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuI1xuIyBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuI1xuIyA9PT09PT09PT09PT09PT09PT09PT09PT0gJHtQTFVHSU5fQVBQX05BTUV9IGNvbmZpZ3VyYXRpb24gZmlsZSA9PT09PT09PT09PT09PT09PT09PT09PT1cbiNcbiMgUGxlYXNlIGNoZWNrIHRoZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGNvbmZpZ3VyYXRpb24gb3B0aW9uczpcbiMgJHt3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvd2F6dWgtZGFzaGJvYXJkL2NvbmZpZy1maWxlLmh0bWwnKX1cbiNcbiMgQWxzbywgeW91IGNhbiBjaGVjayBvdXIgcmVwb3NpdG9yeTpcbiMgaHR0cHM6Ly9naXRodWIuY29tL3dhenVoL3dhenVoLWtpYmFuYS1hcHBcbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVbmF1dGhvcml6ZWQgcm9sZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4jIERpc2FibGUgV2F6dWggZm9yIHRoZSBFbGFzdGljc2VhcmNoIC8gT3BlblNlYXJjaCByb2xlcyBkZWZpbmVkIGhlcmUuXG4jIGRpc2FibGVkX3JvbGVzOlxuIyAgIC0gd2F6dWhfZGlzYWJsZWRcbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmRleCBwYXR0ZXJucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzLnBhdHRlcm4pfVxuIyBwYXR0ZXJuOiAke1dBWlVIX0FMRVJUU19QQVRURVJOfVxuI1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDaGVja3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiNcbiMgRGVmaW5lIHdoaWNoIGNoZWNrcyB3aWxsIGJlIGV4ZWN1dGVkIGJ5IHRoZSBBcHAncyBIZWFsdGhDaGVjay5cbiMgQWxsb3dlZCB2YWx1ZXMgYXJlOiB0cnVlLCBmYWxzZVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY2hlY2tzLnBhdHRlcm4nXSl9XG4jIGNoZWNrcy5wYXR0ZXJuOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snY2hlY2tzLnBhdHRlcm4nXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2NoZWNrcy50ZW1wbGF0ZSddKX1cbiMgY2hlY2tzLnRlbXBsYXRlOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snY2hlY2tzLnRlbXBsYXRlJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjaGVja3MuYXBpJ10pfVxuIyBjaGVja3MuYXBpOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snY2hlY2tzLmFwaSddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY2hlY2tzLnNldHVwJ10pfVxuIyBjaGVja3Muc2V0dXA6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydjaGVja3Muc2V0dXAnXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2NoZWNrcy5maWVsZHMnXSl9XG4jIGNoZWNrcy5maWVsZHM6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydjaGVja3MuZmllbGRzJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjaGVja3MubWV0YUZpZWxkcyddKX1cbiMgY2hlY2tzLm1ldGFGaWVsZHM6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydjaGVja3MubWV0YUZpZWxkcyddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY2hlY2tzLnRpbWVGaWx0ZXInXSl9XG4jIGNoZWNrcy50aW1lRmlsdGVyOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snY2hlY2tzLnRpbWVGaWx0ZXInXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2NoZWNrcy5tYXhCdWNrZXRzJ10pfVxuIyBjaGVja3MubWF4QnVja2V0czogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2NoZWNrcy5tYXhCdWNrZXRzJ119XG4jXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFeHRlbnNpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuI1xuIyBEZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGV4dGVuc2lvbnMgKGVuYWJsZWQgLyBkaXNhYmxlZCkgZm9yIHJlY2VudGx5XG4jIGFkZGVkIGhvc3RzLiBUaGUgZXh0ZW5zaW9ucyBjYW4gYmUgZW5hYmxlZCBvciBkaXNhYmxlZCBhbnl0aW1lIHVzaW5nIHRoZSBVSS5cbiMgQWxsb3dlZCB2YWx1ZXMgYXJlOiB0cnVlLCBmYWxzZVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZXh0ZW5zaW9ucy5wY2knXSl9XG4jIGV4dGVuc2lvbnMucGNpOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5wY2knXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2V4dGVuc2lvbnMuZ2RwciddKX1cbiMgZXh0ZW5zaW9ucy5nZHByOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5nZHByJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydleHRlbnNpb25zLmhpcGFhJ10pfVxuIyBleHRlbnNpb25zLmhpcGFhOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5oaXBhYSddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZXh0ZW5zaW9ucy5uaXN0J10pfVxuIyBleHRlbnNpb25zLm5pc3Q6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydleHRlbnNpb25zLm5pc3QnXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2V4dGVuc2lvbnMudHNjJ10pfVxuIyBleHRlbnNpb25zLnRzYzogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2V4dGVuc2lvbnMudHNjJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydleHRlbnNpb25zLmF1ZGl0J10pfVxuIyBleHRlbnNpb25zLmF1ZGl0OiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5hdWRpdCddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZXh0ZW5zaW9ucy5vc2NhcCddKX1cbiMgZXh0ZW5zaW9ucy5vc2NhcDogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2V4dGVuc2lvbnMub3NjYXAnXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2V4dGVuc2lvbnMuY2lzY2F0J10pfVxuIyBleHRlbnNpb25zLmNpc2NhdDogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2V4dGVuc2lvbnMuY2lzY2F0J119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydleHRlbnNpb25zLmF3cyddKX1cbiMgZXh0ZW5zaW9ucy5hd3M6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydleHRlbnNpb25zLmF3cyddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZXh0ZW5zaW9ucy5nY3AnXSl9XG4jIGV4dGVuc2lvbnMuZ2NwOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5nY3AnXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2V4dGVuc2lvbnMudmlydXN0b3RhbCddKX1cbiMgZXh0ZW5zaW9ucy52aXJ1c3RvdGFsOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy52aXJ1c3RvdGFsJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydleHRlbnNpb25zLm9zcXVlcnknXSl9XG4jIGV4dGVuc2lvbnMub3NxdWVyeTogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2V4dGVuc2lvbnMub3NxdWVyeSddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZXh0ZW5zaW9ucy5kb2NrZXInXSl9XG4jIGV4dGVuc2lvbnMuZG9ja2VyOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snZXh0ZW5zaW9ucy5kb2NrZXInXX1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUaW1lb3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzLnRpbWVvdXQpfVxuIyB0aW1lb3V0OiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJRy50aW1lb3V0fVxuI1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5kZXggcGF0dGVybiBzZWxlY3RvciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2lwLnNlbGVjdG9yJ10pfVxuIyBpcC5zZWxlY3RvcjogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2lwLnNlbGVjdG9yJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydpcC5pZ25vcmUnXSl9XG4jIGlwLmlnbm9yZTogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2lwLmlnbm9yZSddfVxuI1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTW9uaXRvcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ3dhenVoLm1vbml0b3JpbmcuZW5hYmxlZCddKX1cbiMgd2F6dWgubW9uaXRvcmluZy5lbmFibGVkOiAke1dBWlVIX01PTklUT1JJTkdfREVGQVVMVF9FTkFCTEVEfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snd2F6dWgubW9uaXRvcmluZy5mcmVxdWVuY3knXSl9XG4jIHdhenVoLm1vbml0b3JpbmcuZnJlcXVlbmN5OiAke1dBWlVIX01PTklUT1JJTkdfREVGQVVMVF9GUkVRVUVOQ1l9XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWyd3YXp1aC5tb25pdG9yaW5nLnNoYXJkcyddKX1cbiMgd2F6dWgubW9uaXRvcmluZy5zaGFyZHM6ICR7V0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0lORElDRVNfU0hBUkRTfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snd2F6dWgubW9uaXRvcmluZy5yZXBsaWNhcyddKX1cbiMgd2F6dWgubW9uaXRvcmluZy5yZXBsaWNhczogJHtXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfSU5ESUNFU19SRVBMSUNBU31cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ3dhenVoLm1vbml0b3JpbmcuY3JlYXRpb24nXSl9XG4jIEFsbG93ZWQgdmFsdWVzIGFyZTogaCAoaG91cmx5KSwgZCAoZGFpbHkpLCB3ICh3ZWVrbHkpLCBtIChtb250aGx5KVxuIyB3YXp1aC5tb25pdG9yaW5nLmNyZWF0aW9uOiAke1dBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUkVBVElPTn1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ3dhenVoLm1vbml0b3JpbmcucGF0dGVybiddKX1cbiMgd2F6dWgubW9uaXRvcmluZy5wYXR0ZXJuOiAke1dBWlVIX01PTklUT1JJTkdfUEFUVEVSTn1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNhbXBsZSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydhbGVydHMuc2FtcGxlLnByZWZpeCddKX1cbiMgYWxlcnRzLnNhbXBsZS5wcmVmaXg6ICR7V0FaVUhfU0FNUExFX0FMRVJUX1BSRUZJWH1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgdGFza3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjcm9uLnByZWZpeCddKX1cbiMgY3Jvbi5wcmVmaXg6ICR7V0FaVUhfU1RBVElTVElDU19ERUZBVUxUX1BSRUZJWH1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhenVoIFN0YXRpc3RpY3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjcm9uLnN0YXRpc3RpY3Muc3RhdHVzJ10pfVxuIyBjcm9uLnN0YXRpc3RpY3Muc3RhdHVzOiAke1dBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9TVEFUVVN9XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjcm9uLnN0YXRpc3RpY3MuYXBpcyddKX1cbiMgY3Jvbi5zdGF0aXN0aWNzLmFwaXM6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydjcm9uLnN0YXRpc3RpY3MuYXBpcyddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY3Jvbi5zdGF0aXN0aWNzLmludGVydmFsJ10pfVxuIyBjcm9uLnN0YXRpc3RpY3MuaW50ZXJ2YWw6ICR7V0FaVUhfU1RBVElTVElDU19ERUZBVUxUX0NST05fRlJFUX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5uYW1lJ10pfVxuIyBjcm9uLnN0YXRpc3RpY3MuaW5kZXgubmFtZTogJHtXQVpVSF9TVEFUSVNUSUNTX0RFRkFVTFRfTkFNRX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5jcmVhdGlvbiddKX1cbiMgY3Jvbi5zdGF0aXN0aWNzLmluZGV4LmNyZWF0aW9uOiAke1dBWlVIX1NUQVRJU1RJQ1NfREVGQVVMVF9DUkVBVElPTn1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2Nyb24uc3RhdGlzdGljcy5pbmRleC5zaGFyZHMnXSl9XG4jIGNyb24uc3RhdGlzdGljcy5zaGFyZHM6ICR7V0FaVUhfU1RBVElTVElDU19ERUZBVUxUX0lORElDRVNfU0hBUkRTfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY3Jvbi5zdGF0aXN0aWNzLmluZGV4LnJlcGxpY2FzJ10pfVxuIyBjcm9uLnN0YXRpc3RpY3MucmVwbGljYXM6ICR7V0FaVUhfU1RBVElTVElDU19ERUZBVUxUX0lORElDRVNfUkVQTElDQVN9XG4jXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMb2dvIGN1c3RvbWl6YXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY3VzdG9taXphdGlvbi5sb2dvLmFwcCddKX1cbiMgY3VzdG9taXphdGlvbi5sb2dvLmFwcDogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2N1c3RvbWl6YXRpb24ubG9nby5hcHAnXX1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2N1c3RvbWl6YXRpb24ubG9nby5zaWRlYmFyJ10pfVxuIyBjdXN0b21pemF0aW9uLmxvZ28uc2lkZWJhcjogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2N1c3RvbWl6YXRpb24ubG9nby5zaWRlYmFyJ119XG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydjdXN0b21pemF0aW9uLmxvZ28uaGVhbHRoY2hlY2snXSl9XG4jIGN1c3RvbWl6YXRpb24ubG9nby5oZWFsdGhjaGVjazogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2N1c3RvbWl6YXRpb24ubG9nby5oZWFsdGhjaGVjayddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snY3VzdG9taXphdGlvbi5sb2dvLnJlcG9ydHMnXSl9XG4jIGN1c3RvbWl6YXRpb24ubG9nby5yZXBvcnRzOiAke1dBWlVIX0RFRkFVTFRfQVBQX0NPTkZJR1snY3VzdG9taXphdGlvbi5sb2dvLnJlcG9ydHMnXX1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIaWRlIG1hbmFnZXIgYWxlcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzLmhpZGVNYW5hZ2VyQWxlcnRzKX1cbiMgaGlkZU1hbmFnZXJBbGVydHM6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHLmhpZGVNYW5hZ2VyQWxlcnRzfVxuI1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFwcCBsb2dnaW5nIGxldmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiNcbiR7c3BsaXREZXNjcmlwdGlvbihjb25maWdFcXVpdmFsZW5jZXNbJ2xvZ3MubGV2ZWwnXSl9XG4jIEFsbG93ZWQgdmFsdWVzIGFyZTogaW5mbywgZGVidWdcbiMgbG9ncy5sZXZlbDogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2xvZ3MubGV2ZWwnXX1cbiNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBZ2VudCBlbnJvbGxtZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4ke3NwbGl0RGVzY3JpcHRpb24oY29uZmlnRXF1aXZhbGVuY2VzWydlbnJvbGxtZW50LmRucyddKX1cbiMgZW5yb2xsbWVudC5kbnM6ICR7V0FaVUhfREVGQVVMVF9BUFBfQ09ORklHWydlbnJvbGxtZW50LmRucyddfVxuI1xuJHtzcGxpdERlc2NyaXB0aW9uKGNvbmZpZ0VxdWl2YWxlbmNlc1snZW5yb2xsbWVudC5wYXNzd29yZCddKX1cbiMgZW5yb2xsbWVudC5wYXNzd29yZDogJHtXQVpVSF9ERUZBVUxUX0FQUF9DT05GSUdbJ2Vucm9sbG1lbnQucGFzc3dvcmQnXX1cbiNcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXp1aCBob3N0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jXG4jIFRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiBpcyB0aGUgZGVmYXVsdCBzdHJ1Y3R1cmUgdG8gZGVmaW5lIGEgaG9zdC5cbiNcbiMgaG9zdHM6XG4jICAgIyBIb3N0IElEIC8gbmFtZSxcbiMgICAtIGVudi0xOlxuIyAgICAgICAjIEhvc3QgVVJMXG4jICAgICAgIHVybDogaHR0cHM6Ly9lbnYtMS5leGFtcGxlXG4jICAgICAgICMgSG9zdCAvIEFQSSBwb3J0XG4jICAgICAgIHBvcnQ6IDU1MDAwXG4jICAgICAgICMgSG9zdCAvIEFQSSB1c2VybmFtZVxuIyAgICAgICB1c2VybmFtZTogd2F6dWgtd3VpXG4jICAgICAgICMgSG9zdCAvIEFQSSBwYXNzd29yZFxuIyAgICAgICBwYXNzd29yZDogd2F6dWgtd3VpXG4jICAgICAgICMgVXNlIFJCQUMgb3Igbm90LiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXJuYW1lIG11c3QgYmUgXCJ3YXp1aC13dWlcIi5cbiMgICAgICAgcnVuX2FzOiB0cnVlXG4jICAgLSBlbnYtMjpcbiMgICAgICAgdXJsOiBodHRwczovL2Vudi0yLmV4YW1wbGVcbiMgICAgICAgcG9ydDogNTUwMDBcbiMgICAgICAgdXNlcm5hbWU6IHdhenVoLXd1aVxuIyAgICAgICBwYXNzd29yZDogd2F6dWgtd3VpXG4jICAgICAgIHJ1bl9hczogdHJ1ZVxuXG5ob3N0czpcbiAgLSBkZWZhdWx0OlxuICAgICAgdXJsOiBodHRwczovL2xvY2FsaG9zdFxuICAgICAgcG9ydDogNTUwMDBcbiAgICAgIHVzZXJuYW1lOiB3YXp1aC13dWlcbiAgICAgIHBhc3N3b3JkOiB3YXp1aC13dWlcbiAgICAgIHJ1bl9hczogZmFsc2VcbmA7XG4iXX0=