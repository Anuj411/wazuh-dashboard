"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAZUH_MODULES = void 0;

/*
 * Wazuh app - Simple description for each App tabs
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const WAZUH_MODULES = {
  general: {
    title: 'Security events',
    description: 'Browse through your security alerts, identifying issues and threats in your environment.'
  },
  fim: {
    title: 'Integrity monitoring',
    description: 'Alerts related to file changes, including permissions, content, ownership and attributes.'
  },
  pm: {
    title: 'Policy monitoring',
    description: 'Verify that your systems are configured according to your security policies baseline.'
  },
  vuls: {
    title: 'Vulnerabilities',
    description: 'Discover what applications in your environment are affected by well-known vulnerabilities.'
  },
  oscap: {
    title: 'OpenSCAP',
    description: 'Configuration assessment and automation of compliance monitoring using SCAP checks.'
  },
  audit: {
    title: 'System auditing',
    description: 'Audit users behavior, monitoring command execution and alerting on access to critical files.'
  },
  pci: {
    title: 'PCI DSS',
    description: 'Global security standard for entities that process, store or transmit payment cardholder data.'
  },
  gdpr: {
    title: 'GDPR',
    description: 'General Data Protection Regulation (GDPR) sets guidelines for processing of personal data.'
  },
  hipaa: {
    title: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act of 1996 (HIPAA) provides data privacy and security provisions for safeguarding medical information.'
  },
  nist: {
    title: 'NIST 800-53',
    description: 'National Institute of Standards and Technology Special Publication 800-53 (NIST 800-53) sets guidelines for federal information systems.'
  },
  tsc: {
    title: 'TSC',
    description: 'Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy'
  },
  ciscat: {
    title: 'CIS-CAT',
    description: 'Configuration assessment using Center of Internet Security scanner and SCAP checks.'
  },
  aws: {
    title: 'Amazon AWS',
    description: 'Security events related to your Amazon AWS services, collected directly via AWS API.'
  },
  office: {
    title: 'Office 365',
    description: 'Security events related to your Office 365 services.'
  },
  gcp: {
    title: 'Google Cloud Platform',
    description: 'Security events related to your Google Cloud Platform services, collected directly via GCP API.' // TODO GCP

  },
  virustotal: {
    title: 'VirusTotal',
    description: 'Alerts resulting from VirusTotal analysis of suspicious files via an integration with their API.'
  },
  mitre: {
    title: 'MITRE ATT&CK',
    description: 'Security events from the knowledge base of adversary tactics and techniques based on real-world observations'
  },
  syscollector: {
    title: 'Inventory data',
    description: 'Applications, network configuration, open ports and processes running on your monitored systems.'
  },
  stats: {
    title: 'Stats',
    description: 'Stats for agent and logcollector'
  },
  configuration: {
    title: 'Configuration',
    description: 'Check the current agent configuration remotely applied by its group.'
  },
  osquery: {
    title: 'Osquery',
    description: 'Osquery can be used to expose an operating system as a high-performance relational database.'
  },
  sca: {
    title: 'Security configuration assessment',
    description: 'Scan your assets as part of a configuration assessment audit.'
  },
  docker: {
    title: 'Docker listener',
    description: 'Monitor and collect the activity from Docker containers such as creation, running, starting, stopping or pausing events.'
  },
  github: {
    title: 'GitHub',
    description: 'Monitoring events from audit logs of your GitHub organizations.'
  },
  devTools: {
    title: 'API console',
    description: 'Test the Wazuh API endpoints.'
  },
  logtest: {
    title: 'Test your logs',
    description: 'Check your ruleset testing logs.'
  },
  testConfiguration: {
    title: 'Test your configurations',
    description: 'Check configurations before applying them'
  }
};
exports.WAZUH_MODULES = WAZUH_MODULES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhenVoLW1vZHVsZXMudHMiXSwibmFtZXMiOlsiV0FaVUhfTU9EVUxFUyIsImdlbmVyYWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZmltIiwicG0iLCJ2dWxzIiwib3NjYXAiLCJhdWRpdCIsInBjaSIsImdkcHIiLCJoaXBhYSIsIm5pc3QiLCJ0c2MiLCJjaXNjYXQiLCJhd3MiLCJvZmZpY2UiLCJnY3AiLCJ2aXJ1c3RvdGFsIiwibWl0cmUiLCJzeXNjb2xsZWN0b3IiLCJzdGF0cyIsImNvbmZpZ3VyYXRpb24iLCJvc3F1ZXJ5Iiwic2NhIiwiZG9ja2VyIiwiZ2l0aHViIiwiZGV2VG9vbHMiLCJsb2d0ZXN0IiwidGVzdENvbmZpZ3VyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFXTyxNQUFNQSxhQUFhLEdBQUc7QUFDM0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsaUJBREE7QUFFUEMsSUFBQUEsV0FBVyxFQUNUO0FBSEssR0FEa0I7QUFNM0JDLEVBQUFBLEdBQUcsRUFBRTtBQUNIRixJQUFBQSxLQUFLLEVBQUUsc0JBREo7QUFFSEMsSUFBQUEsV0FBVyxFQUNUO0FBSEMsR0FOc0I7QUFXM0JFLEVBQUFBLEVBQUUsRUFBRTtBQUNGSCxJQUFBQSxLQUFLLEVBQUUsbUJBREw7QUFFRkMsSUFBQUEsV0FBVyxFQUNUO0FBSEEsR0FYdUI7QUFnQjNCRyxFQUFBQSxJQUFJLEVBQUU7QUFDSkosSUFBQUEsS0FBSyxFQUFFLGlCQURIO0FBRUpDLElBQUFBLFdBQVcsRUFDVDtBQUhFLEdBaEJxQjtBQXFCM0JJLEVBQUFBLEtBQUssRUFBRTtBQUNMTCxJQUFBQSxLQUFLLEVBQUUsVUFERjtBQUVMQyxJQUFBQSxXQUFXLEVBQ1Q7QUFIRyxHQXJCb0I7QUEwQjNCSyxFQUFBQSxLQUFLLEVBQUU7QUFDTE4sSUFBQUEsS0FBSyxFQUFFLGlCQURGO0FBRUxDLElBQUFBLFdBQVcsRUFDVDtBQUhHLEdBMUJvQjtB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SUFBQUEsV0FBVyxFQUFFO0FBRkk7QUEvSFEsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gU2ltcGxlIGRlc2NyaXB0aW9uIGZvciBlYWNoIEFwcCB0YWJzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IFdBWlVIX01PRFVMRVMgPSB7XG4gIGdlbmVyYWw6IHtcbiAgICB0aXRsZTogJ1NlY3VyaXR5IGV2ZW50cycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQnJvd3NlIHRocm91Z2ggeW91ciBzZWN1cml0eSBhbGVydHMsIGlkZW50aWZ5aW5nIGlzc3VlcyBhbmQgdGhyZWF0cyBpbiB5b3VyIGVudmlyb25tZW50LidcbiAgfSxcbiAgZmltOiB7XG4gICAgdGl0bGU6ICdJbnRlZ3JpdHkgbW9uaXRvcmluZycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQWxlcnRzIHJlbGF0ZWQgdG8gZmlsZSBjaGFuZ2VzLCBpbmNsdWRpbmcgcGVybWlzc2lvbnMsIGNvbnRlbnQsIG93bmVyc2hpcCBhbmQgYXR0cmlidXRlcy4nXG4gIH0sXG4gIHBtOiB7XG4gICAgdGl0bGU6ICdQb2xpY3kgbW9uaXRvcmluZycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVmVyaWZ5IHRoYXQgeW91ciBzeXN0ZW1zIGFyZSBjb25maWd1cmVkIGFjY29yZGluZyB0byB5b3VyIHNlY3VyaXR5IHBvbGljaWVzIGJhc2VsaW5lLidcbiAgfSxcbiAgdnVsczoge1xuICAgIHRpdGxlOiAnVnVsbmVyYWJpbGl0aWVzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEaXNjb3ZlciB3aGF0IGFwcGxpY2F0aW9ucyBpbiB5b3VyIGVudmlyb25tZW50IGFyZSBhZmZlY3RlZCBieSB3ZWxsLWtub3duIHZ1bG5lcmFiaWxpdGllcy4nXG4gIH0sXG4gIG9zY2FwOiB7XG4gICAgdGl0bGU6ICdPcGVuU0NBUCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQ29uZmlndXJhdGlvbiBhc3Nlc3NtZW50IGFuZCBhdXRvbWF0aW9uIG9mIGNvbXBsaWFuY2UgbW9uaXRvcmluZyB1c2luZyBTQ0FQIGNoZWNrcy4nXG4gIH0sXG4gIGF1ZGl0OiB7XG4gICAgdGl0bGU6ICdTeXN0ZW0gYXVkaXRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0F1ZGl0IHVzZXJzIGJlaGF2aW9yLCBtb25pdG9yaW5nIGNvbW1hbmQgZXhlY3V0aW9uIGFuZCBhbGVydGluZyBvbiBhY2Nlc3MgdG8gY3JpdGljYWwgZmlsZXMuJ1xuICB9LFxuICBwY2k6IHtcbiAgICB0aXRsZTogJ1BDSSBEU1MnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dsb2JhbCBzZWN1cml0eSBzdGFuZGFyZCBmb3IgZW50aXRpZXMgdGhhdCBwcm9jZXNzLCBzdG9yZSBvciB0cmFuc21pdCBwYXltZW50IGNhcmRob2xkZXIgZGF0YS4nXG4gIH0sXG4gIGdkcHI6IHtcbiAgICB0aXRsZTogJ0dEUFInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0dlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEdEUFIpIHNldHMgZ3VpZGVsaW5lcyBmb3IgcHJvY2Vzc2luZyBvZiBwZXJzb25hbCBkYXRhLidcbiAgfSxcbiAgaGlwYWE6IHtcbiAgICB0aXRsZTogJ0hJUEFBJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdIZWFsdGggSW5zdXJhbmNlIFBvcnRhYmlsaXR5IGFuZCBBY2NvdW50YWJpbGl0eSBBY3Qgb2YgMTk5NiAoSElQQUEpIHByb3ZpZGVzIGRhdGEgcHJpdmFjeSBhbmQgc2VjdXJpdHkgcHJvdmlzaW9ucyBmb3Igc2FmZWd1YXJkaW5nIG1lZGljYWwgaW5mb3JtYXRpb24uJ1xuICB9LFxuICBuaXN0OiB7XG4gICAgdGl0bGU6ICdOSVNUIDgwMC01MycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTmF0aW9uYWwgSW5zdGl0dXRlIG9mIFN0YW5kYXJkcyBhbmQgVGVjaG5vbG9neSBTcGVjaWFsIFB1YmxpY2F0aW9uIDgwMC01MyAoTklTVCA4MDAtNTMpIHNldHMgZ3VpZGVsaW5lcyBmb3IgZmVkZXJhbCBpbmZvcm1hdGlvbiBzeXN0ZW1zLidcbiAgfSxcbiAgdHNjOiB7XG4gICAgdGl0bGU6ICdUU0MnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RydXN0IFNlcnZpY2VzIENyaXRlcmlhIGZvciBTZWN1cml0eSwgQXZhaWxhYmlsaXR5LCBQcm9jZXNzaW5nIEludGVncml0eSwgQ29uZmlkZW50aWFsaXR5LCBhbmQgUHJpdmFjeSdcbiAgfSxcbiAgY2lzY2F0OiB7XG4gICAgdGl0bGU6ICdDSVMtQ0FUJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb25maWd1cmF0aW9uIGFzc2Vzc21lbnQgdXNpbmcgQ2VudGVyIG9mIEludGVybmV0IFNlY3VyaXR5IHNjYW5uZXIgYW5kIFNDQVAgY2hlY2tzLidcbiAgfSxcbiAgYXdzOiB7XG4gICAgdGl0bGU6ICdBbWF6b24gQVdTJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdTZWN1cml0eSBldmVudHMgcmVsYXRlZCB0byB5b3VyIEFtYXpvbiBBV1Mgc2VydmljZXMsIGNvbGxlY3RlZCBkaXJlY3RseSB2aWEgQVdTIEFQSS4nXG4gIH0sXG4gIG9mZmljZToge1xuICAgIHRpdGxlOiAnT2ZmaWNlIDM2NScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU2VjdXJpdHkgZXZlbnRzIHJlbGF0ZWQgdG8geW91ciBPZmZpY2UgMzY1IHNlcnZpY2VzLidcbiAgfSxcbiAgZ2NwOiB7XG4gICAgdGl0bGU6ICdHb29nbGUgQ2xvdWQgUGxhdGZvcm0nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NlY3VyaXR5IGV2ZW50cyByZWxhdGVkIHRvIHlvdXIgR29vZ2xlIENsb3VkIFBsYXRmb3JtIHNlcnZpY2VzLCBjb2xsZWN0ZWQgZGlyZWN0bHkgdmlhIEdDUCBBUEkuJyAvLyBUT0RPIEdDUFxuICB9LFxuICB2aXJ1c3RvdGFsOiB7XG4gICAgdGl0bGU6ICdWaXJ1c1RvdGFsJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBbGVydHMgcmVzdWx0aW5nIGZyb20gVmlydXNUb3RhbCBhbmFseXNpcyBvZiBzdXNwaWNpb3VzIGZpbGVzIHZpYSBhbiBpbnRlZ3JhdGlvbiB3aXRoIHRoZWlyIEFQSS4nXG4gIH0sXG4gIG1pdHJlOiB7XG4gICAgdGl0bGU6ICdNSVRSRSBBVFQmQ0snLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NlY3VyaXR5IGV2ZW50cyBmcm9tIHRoZSBrbm93bGVkZ2UgYmFzZSBvZiBhZHZlcnNhcnkgdGFjdGljcyBhbmQgdGVjaG5pcXVlcyBiYXNlZCBvbiByZWFsLXdvcmxkIG9ic2VydmF0aW9ucydcbiAgfSxcbiAgc3lzY29sbGVjdG9yOiB7XG4gICAgdGl0bGU6ICdJbnZlbnRvcnkgZGF0YScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQXBwbGljYXRpb25zLCBuZXR3b3JrIGNvbmZpZ3VyYXRpb24sIG9wZW4gcG9ydHMgYW5kIHByb2Nlc3NlcyBydW5uaW5nIG9uIHlvdXIgbW9uaXRvcmVkIHN5c3RlbXMuJ1xuICB9LFxuICBzdGF0czoge1xuICAgIHRpdGxlOiAnU3RhdHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RhdHMgZm9yIGFnZW50IGFuZCBsb2djb2xsZWN0b3InXG4gIH0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICB0aXRsZTogJ0NvbmZpZ3VyYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NoZWNrIHRoZSBjdXJyZW50IGFnZW50IGNvbmZpZ3VyYXRpb24gcmVtb3RlbHkgYXBwbGllZCBieSBpdHMgZ3JvdXAuJ1xuICB9LFxuICBvc3F1ZXJ5OiB7XG4gICAgdGl0bGU6ICdPc3F1ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdPc3F1ZXJ5IGNhbiBiZSB1c2VkIHRvIGV4cG9zZSBhbiBvcGVyYXRpbmcgc3lzdGVtIGFzIGEgaGlnaC1wZXJmb3JtYW5jZSByZWxhdGlvbmFsIGRhdGFiYXNlLidcbiAgfSxcbiAgc2NhOiB7XG4gICAgdGl0bGU6ICdTZWN1cml0eSBjb25maWd1cmF0aW9uIGFzc2Vzc21lbnQnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2NhbiB5b3VyIGFzc2V0cyBhcyBwYXJ0IG9mIGEgY29uZmlndXJhdGlvbiBhc3Nlc3NtZW50IGF1ZGl0LidcbiAgfSxcbiAgZG9ja2VyOiB7XG4gICAgdGl0bGU6ICdEb2NrZXIgbGlzdGVuZXInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01vbml0b3IgYW5kIGNvbGxlY3QgdGhlIGFjdGl2aXR5IGZyb20gRG9ja2VyIGNvbnRhaW5lcnMgc3VjaCBhcyBjcmVhdGlvbiwgcnVubmluZywgc3RhcnRpbmcsIHN0b3BwaW5nIG9yIHBhdXNpbmcgZXZlbnRzLidcbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgdGl0bGU6ICdHaXRIdWInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01vbml0b3JpbmcgZXZlbnRzIGZyb20gYXVkaXQgbG9ncyBvZiB5b3VyIEdpdEh1YiBvcmdhbml6YXRpb25zLidcbiAgfSxcbiAgZGV2VG9vbHM6IHtcbiAgICB0aXRsZTogJ0FQSSBjb25zb2xlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rlc3QgdGhlIFdhenVoIEFQSSBlbmRwb2ludHMuJ1xuICB9LFxuICBsb2d0ZXN0OiB7XG4gICAgdGl0bGU6ICdUZXN0IHlvdXIgbG9ncycsXG4gICAgZGVzY3JpcHRpb246ICdDaGVjayB5b3VyIHJ1bGVzZXQgdGVzdGluZyBsb2dzLidcbiAgfSxcbiAgdGVzdENvbmZpZ3VyYXRpb246IHtcbiAgICB0aXRsZTogJ1Rlc3QgeW91ciBjb25maWd1cmF0aW9ucycsXG4gICAgZGVzY3JpcHRpb246ICdDaGVjayBjb25maWd1cmF0aW9ucyBiZWZvcmUgYXBwbHlpbmcgdGhlbSdcbiAgfVxufTtcbiJdfQ==