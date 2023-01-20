"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayLocation = exports.arrayMitreRules = void 0;

/*
 * Wazuh app - Mitre sample alerts
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// Mitre
const arrayMitreRules = [{
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 504,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '500',
    match: 'Agent disconnected'
  },
  pci_dss: ['10.6.1', '10.2.6'],
  gpg13: ['10.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'AU.14', 'AU.5'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.8'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1089'],
    technique: ['Disabling Security Tools']
  },
  groups: ['wazuh'],
  description: 'Ossec agent disconnected.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 505,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '500',
    match: 'Agent removed'
  },
  pci_dss: ['10.6.1', '10.2.6'],
  gpg13: ['10.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'AU.14', 'AU.5'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.8'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1089'],
    technique: ['Disabling Security Tools']
  },
  groups: ['wazuh'],
  description: 'Ossec agent removed.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 518,
  level: 9,
  status: 'enabled',
  details: {
    if_sid: '514',
    match: 'Adware|Spyware'
  },
  gpg13: ['4.2'],
  gdpr: ['IV_35.7.d'],
  mitre: {
    tactic: ['Lateral Movement'],
    id: ['T1017'],
    technique: ['Application Deployment Software']
  },
  groups: ['rootcheck', 'wazuh'],
  description: 'Windows Adware/Spyware application found.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 550,
  level: 7,
  status: 'enabled',
  details: {
    category: 'wazuh',
    decoded_as: 'syscheck_integrity_changed'
  },
  pci_dss: ['11.5'],
  gpg13: ['4.11'],
  gdpr: ['II_5.1.f'],
  hipaa: ['164.312.c.1', '164.312.c.2'],
  nist_800_53: ['SI.7'],
  tsc: ['PI1.4', 'PI1.5', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1492'],
    technique: ['Stored Data Manipulation']
  },
  groups: ['syscheck', 'wazuh'],
  description: 'Integrity checksum changed.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 553,
  level: 7,
  status: 'enabled',
  details: {
    category: 'wazuh',
    decoded_as: 'syscheck_deleted'
  },
  pci_dss: ['11.5'],
  gpg13: ['4.11'],
  gdpr: ['II_5.1.f'],
  hipaa: ['164.312.c.1', '164.312.c.2'],
  nist_800_53: ['SI.7'],
  tsc: ['PI1.4', 'PI1.5', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion', 'Impact'],
    id: ['T1107', 'T1485'],
    technique: ['File Deletion', 'Data Destruction']
  },
  groups: ['syscheck', 'wazuh'],
  description: 'File deleted.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 592,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '500',
    match: '^ossec: File size reduced'
  },
  pci_dss: ['10.5.2', '11.4'],
  gpg13: ['10.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.9', 'SI.4'],
  tsc: ['CC6.1', 'CC7.2', 'CC7.3', 'CC6.8'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1492'],
    technique: ['Stored Data Manipulation']
  },
  groups: ['attacks', 'wazuh'],
  description: 'Log file size reduced.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 593,
  level: 9,
  status: 'enabled',
  details: {
    if_sid: '500',
    match: '^ossec: Event log cleared'
  },
  pci_dss: ['10.5.2'],
  gpg13: ['10.1'],
  gdpr: ['II_5.1.f', 'IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.9'],
  tsc: ['CC6.1', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1070'],
    technique: ['Indicator Removal on Host']
  },
  groups: ['logs_cleared', 'wazuh'],
  description: 'Microsoft Event log cleared.'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 594,
  level: 5,
  status: 'enabled',
  details: {
    category: 'wazuh',
    if_sid: '550',
    hostname: 'syscheck-registry'
  },
  pci_dss: ['11.5'],
  gpg13: ['4.13'],
  gdpr: ['II_5.1.f'],
  hipaa: ['164.312.c.1', '164.312.c.2'],
  nist_800_53: ['SI.7'],
  tsc: ['PI1.4', 'PI1.5', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1492'],
    technique: ['Stored Data Manipulation']
  },
  groups: ['syscheck', 'wazuh'],
  description: 'Registry Integrity Checksum Changed'
}, {
  filename: '0015-ossec_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 597,
  level: 5,
  status: 'enabled',
  details: {
    category: 'wazuh',
    if_sid: '553',
    hostname: 'syscheck-registry'
  },
  pci_dss: ['11.5'],
  gpg13: ['4.13'],
  gdpr: ['II_5.1.f'],
  hipaa: ['164.312.c.1', '164.312.c.2'],
  nist_800_53: ['SI.7'],
  tsc: ['PI1.4', 'PI1.5', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion', 'Impact'],
    id: ['T1107', 'T1485'],
    technique: ['File Deletion', 'Data Destruction']
  },
  groups: ['syscheck', 'wazuh'],
  description: 'Registry Entry Deleted.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 1003,
  level: 13,
  status: 'enabled',
  details: {
    maxsize: '1025',
    noalert: '1'
  },
  gpg13: ['4.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['syslog', 'errors'],
  description: 'Non standard syslog message (size too large).'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2301,
  level: 10,
  status: 'enabled',
  details: {
    match: '^Deactivating service '
  },
  pci_dss: ['10.6.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['syslog', 'xinetd'],
  description: 'xinetd: Excessive number connections to a service.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2502,
  level: 10,
  status: 'enabled',
  details: {
    match: 'more authentication failures;|REPEATED login failures'
  },
  pci_dss: ['10.2.4', '10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['authentication_failed', 'syslog', 'access_control'],
  description: 'syslog: User missed the password more than one time'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2503,
  level: 5,
  status: 'enabled',
  details: {
    regex: ['^refused connect from|', '^libwrap refused connection|', 'Connection from S+ denied']
  },
  pci_dss: ['10.2.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Command and Control'],
    id: ['T1095'],
    technique: ['Standard Non-Application Layer Protocol']
  },
  groups: ['access_denied', 'syslog', 'access_control'],
  description: 'syslog: Connection blocked by Tcp Wrappers.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2504,
  level: 9,
  status: 'enabled',
  details: {
    match: 'ILLEGAL ROOT LOGIN|ROOT LOGIN REFUSED'
  },
  pci_dss: ['10.2.4', '10.2.5', '10.2.2'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'AC.6'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['invalid_login', 'syslog', 'access_control'],
  description: 'syslog: Illegal root login.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2551,
  level: 10,
  status: 'enabled',
  details: {
    if_sid: '2550',
    regex: '^Connection from S+ on illegal port$'
  },
  pci_dss: ['10.6.1'],
  gpg13: ['7.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Discovery'],
    id: ['T1046'],
    technique: ['Network Service Scanning']
  },
  groups: ['connection_attempt', 'syslog', 'access_control'],
  description: 'Connection to rshd from unprivileged port. Possible network scan.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2833,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '2832',
    match: '^(root)'
  },
  pci_dss: ['10.2.7', '10.6.1', '10.2.2'],
  gpg13: ['4.13'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AU.6', 'AC.6'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'cron'],
  description: "Root's crontab entry changed."
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2960,
  level: 2,
  status: 'enabled',
  details: {
    decoded_as: 'gpasswd',
    match: 'added by'
  },
  gpg13: ['7.9', '4.13'],
  gdpr: ['IV_32.2'],
  mitre: {
    tactic: ['Persistence'],
    id: ['T1136'],
    technique: ['Create Account']
  },
  groups: ['syslog', 'yum'],
  description: 'User added to group.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2961,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '2960',
    group: 'sudo'
  },
  gpg13: ['7.9', '4.13'],
  gdpr: ['IV_32.2'],
  mitre: {
    tactic: ['Persistence'],
    id: ['T1136'],
    technique: ['Create Account']
  },
  groups: ['syslog', 'yum'],
  description: 'User added to group sudo.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 2964,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '4',
    timeframe: '30',
    if_matched_sid: '2963',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['recon', 'syslog', 'perdition'],
  description: 'perdition: Multiple connection attempts from same source.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3102,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3101',
    match: 'reject=451 4.1.8 '
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Sender domain does not have any valid MX record (Requested action aborted).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3103,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3101',
    match: 'reject=550 5.0.0 |reject=553 5.3.0'
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Rejected by access list (55x: Requested action not taken).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3104,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3101',
    match: 'reject=550 5.7.1 '
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Attempt to use mail server as relay (550: Requested action not taken).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3105,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3101',
    match: 'reject=553 5.1.8 '
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Sender domain is not found  (553: Requested action not taken).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3106,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3101',
    match: 'reject=553 5.5.4 '
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Sender address does not have domain (553: Requested action not taken).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3108,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3100',
    match: 'rejecting commands from'
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'sendmail'],
  description: 'sendmail: Sendmail rejected due to pre-greeting.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3151,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3102',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Sender domain has bogus MX record. It should not be sending e-mail.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3152,
  level: 6,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3103',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple attempts to send e-mail from a previously rejected sender (access).'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3153,
  level: 6,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3104',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple relaying attempts of spam.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3154,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3105',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple attempts to send e-mail from invalid/unknown sender domain.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3155,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3106',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple attempts to send e-mail from invalid/unknown sender.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3156,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '12',
    timeframe: '120',
    if_matched_sid: '3107',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple rejected e-mails from same source ip.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3158,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    if_matched_sid: '3108',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'sendmail'],
  description: 'sendmail: Multiple pre-greetings rejects.'
}, {
  filename: '0025-sendmail_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3191,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3190',
    match: '^sender check failed|^sender check tempfailed'
  },
  pci_dss: ['11.4'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['smf-sav', 'spam', 'syslog', 'sendmail'],
  description: 'sendmail: SMF-SAV sendmail milter unable to verify address (REJECTED).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3301,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3300',
    id: '^554$'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Attempt to use mail server as relay (client host rejected).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3302,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3300',
    id: '^550$'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Rejected by access list (Requested action not taken).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3303,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3300',
    id: '^450$'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Sender domain is not found (450: Requested mail action not taken).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3304,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3300',
    id: '^503$'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Improper use of SMTP command pipelining (503: Bad sequence of commands).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3305,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '3300',
    id: '^504$'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Recipient address must contain FQDN (504: Command parameter not implemented).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3306,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3301, 3302',
    match: ' blocked using '
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: IP Address black-listed by anti-spam (blocked).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3330,
  level: 10,
  status: 'enabled',
  details: {
    ignore: '240',
    if_sid: '3320',
    match: ['defer service failure|Resource temporarily unavailable|', '^fatal: the Postfix mail system is not running']
  },
  pci_dss: ['10.6.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['service_availability', 'syslog', 'postfix'],
  description: 'Postfix process error.'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3335,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3320',
    match: '^too many '
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: too many errors after RCPT from unknown'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3351,
  level: 6,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '90',
    if_matched_sid: '3301',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple relaying attempts of spam.'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3352,
  level: 6,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '120',
    if_matched_sid: '3302',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple attempts to send e-mail from a rejected sender IP (access).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3353,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '120',
    if_matched_sid: '3303',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple attempts to send e-mail from invalid/unknown sender domain.'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3354,
  level: 12,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '120',
    if_matched_sid: '3304',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple misuse of SMTP service (bad sequence of commands).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3355,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '120',
    if_matched_sid: '3305',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple attempts to send e-mail to invalid recipient or from unknown sender domain.'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3356,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '$POSTFIX_FREQ',
    timeframe: '120',
    ignore: '30',
    if_matched_sid: '3306',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'syslog', 'postfix'],
  description: 'Postfix: Multiple attempts to send e-mail from black-listed IP address (blocked).'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3357,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    ignore: '60',
    if_matched_sid: '3332',
    same_source_ip: ''
  },
  pci_dss: ['10.2.4', '10.2.5', '11.4'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['authentication_failures', 'syslog', 'postfix'],
  description: 'Postfix: Multiple SASL authentication failures.'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3396,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3395',
    match: 'verification'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: hostname verification failed'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3397,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3395',
    match: 'RBL'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: RBL lookup error: Host or domain name not found'
}, {
  filename: '0030-postfix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3398,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '3395',
    match: 'MAIL|does not resolve to address'
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Collection'],
    id: ['T1114'],
    technique: ['Email Collection']
  },
  groups: ['spam', 'syslog', 'postfix'],
  description: 'Postfix: Illegal address from unknown sender'
}, {
  filename: '0040-imapd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3602,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '3600',
    match: 'Authenticated user='
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.1'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'imapd'],
  description: 'Imapd user login.'
}, {
  filename: '0040-imapd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3651,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '$IMAPD_FREQ',
    timeframe: '120',
    if_matched_sid: '3601',
    same_source_ip: ''
  },
  pci_dss: ['10.2.4', '10.2.5', '11.4'],
  gpg13: ['7.1'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['authentication_failures', 'syslog', 'imapd'],
  description: 'Imapd Multiple failed logins from same source ip.'
}, {
  filename: '0045-mailscanner_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3751,
  level: 6,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '180',
    if_matched_sid: '3702',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access', 'Collection'],
    id: ['T1110', 'T1114'],
    technique: ['Brute Force', 'Email Collection']
  },
  groups: ['multiple_spam', 'syslog', 'mailscanner'],
  description: 'mailscanner: Multiple attempts of spam.'
}, {
  filename: '0050-ms-exchange_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3851,
  level: 9,
  status: 'enabled',
  details: {
    frequency: '12',
    timeframe: '120',
    ignore: '120',
    if_matched_sid: '3801',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'ms', 'exchange'],
  description: 'ms-exchange: Multiple e-mail attempts to an invalid account.'
}, {
  filename: '0050-ms-exchange_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3852,
  level: 9,
  status: 'enabled',
  details: {
    frequency: '14',
    timeframe: '120',
    ignore: '240',
    if_matched_sid: '3802',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Collection', 'Impact'],
    id: ['T1114', 'T1499'],
    technique: ['Email Collection', 'Endpoint Denial of Service']
  },
  groups: ['multiple_spam', 'ms', 'exchange'],
  description: 'ms-exchange: Multiple e-mail 500 error code (spam).'
}, {
  filename: '0055-courier_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3904,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '3900',
    match: '^LOGIN,'
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.1', '7.2'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'courier'],
  description: 'Courier (imap/pop3) authentication success.'
}, {
  filename: '0055-courier_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3910,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '12',
    timeframe: '30',
    if_matched_sid: '3902',
    same_source_ip: ''
  },
  pci_dss: ['10.2.4', '10.2.5', '11.4'],
  gpg13: ['7.1'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['authentication_failures', 'syslog', 'courier'],
  description: 'Courier brute force (multiple failed logins).'
}, {
  filename: '0055-courier_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 3911,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '17',
    timeframe: '30',
    if_matched_sid: '3901',
    same_source_ip: ''
  },
  pci_dss: ['10.6.1', '11.4'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['recon', 'syslog', 'courier'],
  description: 'Courier: Multiple connection attempts from same source.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4323,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^6-605005'
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'pix'],
  description: 'PIX: Successful login.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4325,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4313',
    id: '^4-405001'
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Command and Control'],
    id: ['T1095'],
    technique: ['Standard Non-Application Layer Protocol']
  },
  groups: ['syslog', 'pix'],
  description: 'PIX: ARP collision detected.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4335,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^6-113004'
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.1', '7.2'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'pix'],
  description: 'PIX: AAA (VPN) authentication successful.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4336,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^6-113006'
  },
  pci_dss: ['10.2.4', '10.2.5'],
  gpg13: ['7.1', '7.5'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1133'],
    technique: ['External Remote Services']
  },
  groups: ['authentication_failed', 'syslog', 'pix'],
  description: 'PIX: AAA (VPN) user locked out.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4337,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4312',
    id: '^3-201008'
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1133'],
    technique: ['External Remote Services']
  },
  groups: ['service_availability', 'syslog', 'pix'],
  description: 'PIX: The PIX is disallowing new connections.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4339,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^5-111003'
  },
  pci_dss: ['1.1.1', '10.4'],
  gpg13: ['4.13'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.a.1', '164.312.b'],
  nist_800_53: ['CM.3', 'CM.5', 'AU.8'],
  tsc: ['CC8.1', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1089'],
    technique: ['Disabling Security Tools']
  },
  groups: ['config_changed', 'syslog', 'pix'],
  description: 'PIX: Firewall configuration deleted.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4340,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^5-111005|^5-111004|^5-111002|^5-111007'
  },
  pci_dss: ['1.1.1', '10.4'],
  gpg13: ['4.13'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.a.1', '164.312.b'],
  nist_800_53: ['CM.3', 'CM.5', 'AU.8'],
  tsc: ['CC8.1', 'CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1089'],
    technique: ['Disabling Security Tools']
  },
  groups: ['config_changed', 'syslog', 'pix'],
  description: 'PIX: Firewall configuration changed.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4342,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4314',
    id: '^5-502101|^5-502102'
  },
  pci_dss: ['8.1.2', '10.2.5'],
  gpg13: ['4.13'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.a.2.I', '164.312.a.2.II', '164.312.b'],
  nist_800_53: ['AC.2', 'IA.4', 'AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Defense Evasion', 'Initial Access'],
    id: ['T1089', 'T1133'],
    technique: ['Disabling Security Tools', 'External Remote Services']
  },
  groups: ['adduser', 'account_changed', 'syslog', 'pix'],
  description: 'PIX: User created or modified on the Firewall.'
}, {
  filename: '0065-pix_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4386,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '10',
    timeframe: '240',
    if_matched_sid: '4334',
    same_source_ip: ''
  },
  pci_dss: ['11.4', '10.2.4', '10.2.5'],
  gpg13: ['7.1'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['SI.4', 'AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access', 'Initial Access'],
    id: ['T1110', 'T1133'],
    technique: ['Brute Force', 'External Remote Services']
  },
  groups: ['authentication_failures', 'syslog', 'pix'],
  description: 'PIX: Multiple AAA (VPN) authentication failures.'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4505,
  level: 11,
  status: 'enabled',
  details: {
    if_sid: '4503',
    id: '^00027'
  },
  pci_dss: ['1.4', '10.6.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.a.1', '164.312.b'],
  nist_800_53: ['SC.7', 'AU.6'],
  tsc: ['CC6.7', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1485'],
    technique: ['Data Destruction']
  },
  groups: ['service_availability', 'netscreenfw'],
  description: 'Netscreen Erase sequence started.'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4506,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4501',
    id: '^00002'
  },
  pci_dss: ['10.2.5', '10.2.2'],
  gpg13: ['7.8'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'AC.6'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'netscreenfw'],
  description: 'Netscreen firewall: Successfull admin login'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4507,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4502',
    id: '^00515'
  },
  pci_dss: ['10.2.5', '10.2.2'],
  gpg13: ['7.8'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'AC.6'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'netscreenfw'],
  description: 'Netscreen firewall: Successfull admin login'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4509,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '4504',
    id: '^00767'
  },
  pci_dss: ['1.1.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.a.1'],
  nist_800_53: ['CM.3', 'CM.5'],
  tsc: ['CC8.1'],
  mitre: {
    tactic: ['Defense Evasion'],
    id: ['T1089'],
    technique: ['Disabling Security Tools']
  },
  groups: ['config_changed', 'netscreenfw'],
  description: 'Netscreen firewall: configuration changed.'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4550,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '6',
    timeframe: '180',
    ignore: '60',
    if_matched_sid: '4503',
    same_source_ip: ''
  },
  pci_dss: ['1.4', '10.6.1', '11.4'],
  gpg13: ['4.1'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.a.1', '164.312.b'],
  nist_800_53: ['SC.7', 'AU.6', 'SI.4'],
  tsc: ['CC6.7', 'CC6.8', 'CC7.2', 'CC7.3', 'CC6.1'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['netscreenfw'],
  description: 'Netscreen firewall: Multiple critical messages from same source IP.'
}, {
  filename: '0070-netscreenfw_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4551,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '180',
    ignore: '60',
    if_matched_sid: '4503'
  },
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['netscreenfw'],
  description: 'Netscreen firewall: Multiple critical messages.'
}, {
  filename: '0075-cisco-ios_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4722,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '4715',
    id: '^%SEC_LOGIN-5-LOGIN_SUCCESS'
  },
  pci_dss: ['10.2.5'],
  gpg13: ['3.6'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'cisco_ios'],
  description: 'Cisco IOS: Successful login to the router.'
}, {
  filename: '0080-sonicwall_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4810,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '4806',
    id: '^236$'
  },
  pci_dss: ['10.2.5'],
  gpg13: ['3.6'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'sonicwall'],
  description: 'SonicWall: Firewall administrator login.'
}, {
  filename: '0080-sonicwall_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 4851,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '120',
    ignore: '60',
    if_matched_sid: '4803'
  },
  pci_dss: ['10.6.1'],
  gpg13: ['3.5'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['service_availability', 'syslog', 'sonicwall'],
  description: 'SonicWall: Multiple firewall error messages.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5103,
  level: 9,
  status: 'enabled',
  details: {
    if_sid: '5100',
    match: 'Oversized packet received from'
  },
  gdpr: ['IV_35.7.d'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['syslog', 'linuxkernel'],
  description: 'Error message from the kernel. Ping of death attack.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5104,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '5100',
    regex: ['Promiscuous mode enabled|', 'device S+ entered promiscuous mode']
  },
  pci_dss: ['10.6.1', '11.4'],
  gpg13: ['4.13'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6', 'SI.4'],
  tsc: ['CC7.2', 'CC7.3', 'CC6.1', 'CC6.8'],
  mitre: {
    tactic: ['Discovery'],
    id: ['T1040'],
    technique: ['Network Sniffing']
  },
  groups: ['promisc', 'syslog', 'linuxkernel'],
  description: 'Interface entered in promiscuous(sniffing) mode.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5108,
  level: 12,
  status: 'enabled',
  details: {
    if_sid: '5100',
    match: 'Out of Memory: '
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1499'],
    technique: ['Endpoint Denial of Service']
  },
  groups: ['service_availability', 'syslog', 'linuxkernel'],
  description: 'System running out of memory. Availability of the system is in risk.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5113,
  level: 7,
  status: 'enabled',
  details: {
    if_sid: '5100',
    match: 'Kernel log daemon terminating'
  },
  pci_dss: ['10.6.1'],
  gpg13: ['4.14'],
  gdpr: ['IV_35.7.d'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.6'],
  tsc: ['CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Impact'],
    id: ['T1529'],
    technique: ['System Shutdown/Reboot']
  },
  groups: ['system_shutdown', 'syslog', 'linuxkernel'],
  description: 'System is shutting down.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5132,
  level: 11,
  status: 'enabled',
  details: {
    if_sid: '5100',
    match: 'module verification failed'
  },
  mitre: {
    tactic: ['Persistence'],
    id: ['T1215'],
    technique: ['Kernel Modules and Extensions']
  },
  groups: ['syslog', 'linuxkernel'],
  description: 'Unsigned kernel module was loaded'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5133,
  level: 11,
  status: 'enabled',
  details: {
    if_sid: '5100',
    match: 'PKCS#7 signature not signed with a trusted key'
  },
  mitre: {
    tactic: ['Persistence'],
    id: ['T1215'],
    technique: ['Kernel Modules and Extensions']
  },
  groups: ['syslog', 'linuxkernel'],
  description: 'Signed but untrusted kernel module was loaded'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5302,
  level: 9,
  status: 'enabled',
  details: {
    if_sid: '5301',
    user: '^root'
  },
  pci_dss: ['10.2.4', '10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3', 'CC7.4'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['authentication_failed', 'syslog', 'su'],
  description: 'User missed the password to change UID to root.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5303,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '5300',
    regex: ["session opened for user root|^'su root'|", '^+ S+ S+proot$|^S+ to root on|^SU S+ S+ + S+ S+-root$']
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.6', '7.8', '7.9'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'su'],
  description: 'User successfully changed UID to root.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5304,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '5300',
    regex: ['session opened for user|succeeded for|', '^+|^S+ to |^SU S+ S+ + ']
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.6', '7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'syslog', 'su'],
  description: 'User successfully changed UID.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5401,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '5400',
    match: 'incorrect password attempt'
  },
  pci_dss: ['10.2.4', '10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'Failed attempt to run sudo.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5402,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '5400',
    regex: ' ; USER=root ; COMMAND=| ; USER=root ; TSID=S+ ; COMMAND='
  },
  pci_dss: ['10.2.5', '10.2.2'],
  gpg13: ['7.6', '7.8', '7.13'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'AC.6'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'Successful sudo to ROOT executed.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5403,
  level: 4,
  status: 'enabled',
  details: {
    if_sid: '5400',
    if_fts: ''
  },
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'First time user executed sudo.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5404,
  level: 10,
  status: 'enabled',
  details: {
    if_sid: '5401',
    match: '3 incorrect password attempts'
  },
  pci_dss: ['10.2.4', '10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'Three failed attempts to run sudo'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5405,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '5400',
    match: 'user NOT in sudoers'
  },
  pci_dss: ['10.2.2', '10.2.5'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.6', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'Unauthorized user attempted to use sudo.'
}, {
  filename: '0020-syslog_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5407,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '5400',
    regex: ' ; USER=S+ ; COMMAND=| ; USER=S+ ; TSID=S+ ; COMMAND='
  },
  pci_dss: ['10.2.5', '10.2.2'],
  gpg13: ['7.6', '7.8', '7.13'],
  gdpr: ['IV_32.2'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Privilege Escalation'],
    id: ['T1169'],
    technique: ['Sudo']
  },
  groups: ['syslog', 'sudo'],
  description: 'Successful sudo executed.'
}, {
  filename: '0085-pam_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5501,
  level: 3,
  status: 'enabled',
  details: {
    if_sid: '5500',
    match: 'session opened for user '
  },
  pci_dss: ['10.2.5'],
  gpg13: ['7.8', '7.9'],
  gdpr: ['IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7'],
  tsc: ['CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1078'],
    technique: ['Valid Accounts']
  },
  groups: ['authentication_success', 'pam', 'syslog'],
  description: 'PAM: Login session opened.'
}, {
  filename: '0085-pam_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5551,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '8',
    timeframe: '180',
    if_matched_sid: '5503',
    same_source_ip: ''
  },
  pci_dss: ['10.2.4', '10.2.5', '11.4'],
  gpg13: ['7.8'],
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  hipaa: ['164.312.b'],
  nist_800_53: ['AU.14', 'AC.7', 'SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['authentication_failures', 'pam', 'syslog'],
  description: 'PAM: Multiple failed logins in a small period of time.'
}, {
  filename: '0090-telnetd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5601,
  level: 5,
  status: 'enabled',
  details: {
    if_sid: '5600',
    match: 'refused connect from '
  },
  gdpr: ['IV_35.7.d'],
  mitre: {
    tactic: ['Command and Control'],
    id: ['T1095'],
    technique: ['Standard Non-Application Layer Protocol']
  },
  groups: ['syslog', 'telnetd'],
  description: 'telnetd: Connection refused by TCP Wrappers.'
}, {
  filename: '0090-telnetd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5631,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '6',
    timeframe: '120',
    if_matched_sid: '5602',
    same_source_ip: ''
  },
  gdpr: ['IV_35.7.d', 'IV_32.2'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['syslog', 'telnetd'],
  description: 'telnetd: Multiple connection attempts from same source (possible scan).'
}, {
  filename: '0095-sshd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5701,
  level: 8,
  status: 'enabled',
  details: {
    if_sid: '5700',
    match: 'Bad protocol version identification'
  },
  pci_dss: ['11.4'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access'],
    id: ['T1190'],
    technique: ['Exploit Public-Facing Application']
  },
  groups: ['recon', 'syslog', 'sshd'],
  description: 'sshd: Possible attack on the ssh server (or version gathering).'
}, {
  filename: '0095-sshd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5703,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '6',
    timeframe: '360',
    if_matched_sid: '5702',
    same_source_ip: ''
  },
  pci_dss: ['11.4'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Credential Access'],
    id: ['T1110'],
    technique: ['Brute Force']
  },
  groups: ['syslog', 'sshd'],
  description: 'sshd: Possible breakin attempt (high number of reverse lookup errors).'
}, {
  filename: '0095-sshd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5705,
  level: 10,
  status: 'enabled',
  details: {
    frequency: '6',
    timeframe: '360',
    if_matched_sid: '5704'
  },
  pci_dss: ['11.4'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Initial Access', 'Credential Access'],
    id: ['T1190', 'T1110'],
    technique: ['Exploit Public-Facing Application', 'Brute Force']
  },
  groups: ['syslog', 'sshd'],
  description: 'sshd: Possible scan or breakin attempt (high number of login timeouts).'
}, {
  filename: '0095-sshd_rules.xml',
  relative_dirname: 'ruleset/rules',
  id: 5706,
  level: 6,
  status: 'enabled',
  details: {
    if_sid: '5700',
    match: 'Did not receive identification string from'
  },
  pci_dss: ['11.4'],
  gpg13: ['4.12'],
  gdpr: ['IV_35.7.d'],
  nist_800_53: ['SI.4'],
  tsc: ['CC6.1', 'CC6.8', 'CC7.2', 'CC7.3'],
  mitre: {
    tactic: ['Command and Control'],
    id: ['T1043'],
    technique: ['Commonly Used Port']
  },
  groups: ['recon', 'syslog', 'sshd'],
  description: 'sshd: insecure connection attempt (scan).'
}];
exports.arrayMitreRules = arrayMitreRules;
const arrayLocation = ['EventChannel', '/var/log/auth.log', '/var/log/secure'];
exports.arrayLocation = arrayLocation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pdHJlLmpzIl0sIm5hbWVzIjpbImFycmF5TWl0cmVSdWxlcyIsImZpbGVuYW1lIiwicmVsYXRpdmVfZGlybmFtZSIsImlkIiwibGV2ZWwiLCJzdGF0dXMiLCJkZXRhaWxzIiwiaWZfc2lkIiwibWF0Y2giLCJwY2lfZHNzIiwiZ3BnMTMiLCJnZHByIiwiaGlwYWEiLCJuaXN0XzgwMF81MyIsInRzYyIsIm1pdHJlIiwidGFjdGljIiwidGVjaG5pcXVlIiwiZ3JvdXBzIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImRlY29kZWRfYXMiLCJob3N0bmFtZSIsIm1heHNpemUiLCJub2FsZXJ0IiwicmVnZXgiLCJncm91cCIsImZyZXF1ZW5jeSIsInRpbWVmcmFtZSIsImlmX21hdGNoZWRfc2lkIiwic2FtZV9zb3VyY2VfaXAiLCJpZ25vcmUiLCJ1c2VyIiwiaWZfZnRzIiwiYXJyYXlMb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBO0FBQ08sTUFBTUEsZUFBZSxHQUFHLENBQzdCO0FBQ0VDLEVBQUFBLFFBQVEsRUFBRSxzQkFEWjtBQUVFQyxFQUFBQSxnQkFBZ0IsRUFBRSxlQUZwQjtBQUdFQyxFQUFBQSxFQUFFLEVBQUUsR0FITjtBQUlFQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVDtBQUtFQyxFQUFBQSxNQUFNLEVBQUUsU0FMVjtBQU1FQyxFQUFBQSxPQUFPLEVBQUU7QUFBRUMsSUFBQUEsTUFBTSxFQUFFLEtBQVY7QUFBaUJDLElBQUFBLEtBQUssRUFBRTtBQUF4QixHQU5YO0FBT0VDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBUFg7QUFRRUMsRUFBQUEsS0FBSyxFQUFFLENBQUMsTUFBRCxDQVJUO0FBU0VDLEVBQUFBLElBQUksRUFBRSxDQUFDLFdBQUQsQ0FUUjtBQVVFQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxXQUFELENBVlQ7QUFXRUMsRUFBQUEsV0FBVyxFQUFFLENBQUMsTUFBRCxFQUFT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RUFBRTtBQWxCZixDQXZzRDZCLEVBMnREN0I7QUFDRWxCLEVBQUFBLFFBQVEsRUFBRSxxQkFEWjtBQUVFQyxFQUFBQSxnQkFBZ0IsRUFBRSxlQUZwQjtBQUdFQyxFQUFBQSxFQUFFLEVBQUUsSUFITjtBQUlFQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVDtBQUtFQyxFQUFBQSxNQUFNLEVBQUUsU0FMVjtBQU1FQyxFQUFBQSxPQUFPLEVBQUU7QUFBRUMsSUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JDLElBQUFBLEtBQUssRUFBRTtBQUF6QixHQU5YO0FBT0VDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLE1BQUQsQ0FQWDtBQVFFQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELENBUlQ7QUFTRUMsRUFBQUEsSUFBSSxFQUFFLENBQUMsV0FBRCxDQVRSO0FBVUVFLEVBQUFBLFdBQVcsRUFBRSxDQUFDLE1BQUQsQ0FWZjtBQVdFQyxFQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQVhQO0FBWUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxxQkFBRCxDQUFWO0FBQW1DYixJQUFBQSxFQUFFLEVBQUUsQ0FBQyxPQUFELENBQXZDO0FBQWtEYyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxvQkFBRDtBQUE3RCxHQVpUO0FBYUVDLEVBQUFBLE1BQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE1BQXBCLENBYlY7QUFjRUMsRUFBQUEsV0FBVyxFQUFFO0FBZGYsQ0EzdEQ2QixDQUF4Qjs7QUE2dURBLE1BQU1lLGFBQWEsR0FBRyxDQUFDLGNBQUQsRUFBaUIsbUJBQWpCLEVBQXNDLGlCQUF0QyxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNaXRyZSBzYW1wbGUgYWxlcnRzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG4vLyBNaXRyZVxuZXhwb3J0IGNvbnN0IGFycmF5TWl0cmVSdWxlcyA9IFtcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAxNS1vc3NlY19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTA0LFxuICAgIGxldmVsOiAzLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTAwJywgbWF0Y2g6ICdBZ2VudCBkaXNjb25uZWN0ZWQnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTAuMi42J10sXG4gICAgZ3BnMTM6IFsnMTAuMSddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdBVS4xNCcsICdBVS41J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0RlZmVuc2UgRXZhc2lvbiddLCBpZDogWydUMTA4OSddLCB0ZWNobmlxdWU6IFsnRGlzYWJsaW5nIFNlY3VyaXR5IFRvb2xzJ10gfSxcbiAgICBncm91cHM6IFsnd2F6dWgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ09zc2VjIGFnZW50IGRpc2Nvbm5lY3RlZC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDE1LW9zc2VjX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1MDUsXG4gICAgbGV2ZWw6IDMsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1MDAnLCBtYXRjaDogJ0FnZW50IHJlbW92ZWQnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTAuMi42J10sXG4gICAgZ3BnMTM6IFsnMTAuMSddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdBVS4xNCcsICdBVS41J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0RlZmVuc2UgRXZhc2lvbiddLCBpZDogWydUMTA4OSddLCB0ZWNobmlxdWU6IFsnRGlzYWJsaW5nIFNlY3VyaXR5IFRvb2xzJ10gfSxcbiAgICBncm91cHM6IFsnd2F6dWgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ09zc2VjIGFnZW50IHJlbW92ZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAxNS1vc3NlY19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTE4LFxuICAgIGxldmVsOiA5LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTE0JywgbWF0Y2g6ICdBZHdhcmV8U3B5d2FyZScgfSxcbiAgICBncGcxMzogWyc0LjInXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG1pdHJlOiB7XG4gICAgICB0YWN0aWM6IFsnTGF0ZXJhbCBNb3ZlbWVudCddLFxuICAgICAgaWQ6IFsnVDEwMTcnXSxcbiAgICAgIHRlY2huaXF1ZTogWydBcHBsaWNhdGlvbiBEZXBsb3ltZW50IFNvZnR3YXJlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsncm9vdGNoZWNrJywgJ3dhenVoJ10sXG4gICAgZGVzY3JpcHRpb246ICdXaW5kb3dzIEFkd2FyZS9TcHl3YXJlIGFwcGxpY2F0aW9uIGZvdW5kLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMTUtb3NzZWNfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU1MCxcbiAgICBsZXZlbDogNyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGNhdGVnb3J5OiAnd2F6dWgnLCBkZWNvZGVkX2FzOiAnc3lzY2hlY2tfaW50ZWdyaXR5X2NoYW5nZWQnIH0sXG4gICAgcGNpX2RzczogWycxMS41J10sXG4gICAgZ3BnMTM6IFsnNC4xMSddLFxuICAgIGdkcHI6IFsnSUlfNS4xLmYnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmMuMScsICcxNjQuMzEyLmMuMiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjcnXSxcbiAgICB0c2M6IFsnUEkxLjQnLCAnUEkxLjUnLCAnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW1wYWN0J10sIGlkOiBbJ1QxNDkyJ10sIHRlY2huaXF1ZTogWydTdG9yZWQgRGF0YSBNYW5pcHVsYXRpb24nXSB9LFxuICAgIGdyb3VwczogWydzeXNjaGVjaycsICd3YXp1aCddLFxuICAgIGRlc2NyaXB0aW9uOiAnSW50ZWdyaXR5IGNoZWNrc3VtIGNoYW5nZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAxNS1vc3NlY19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTUzLFxuICAgIGxldmVsOiA3LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgY2F0ZWdvcnk6ICd3YXp1aCcsIGRlY29kZWRfYXM6ICdzeXNjaGVja19kZWxldGVkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTEuNSddLFxuICAgIGdwZzEzOiBbJzQuMTEnXSxcbiAgICBnZHByOiBbJ0lJXzUuMS5mJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5jLjEnLCAnMTY0LjMxMi5jLjInXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS43J10sXG4gICAgdHNjOiBbJ1BJMS40JywgJ1BJMS41JywgJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydEZWZlbnNlIEV2YXNpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTEwNycsICdUMTQ4NSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0ZpbGUgRGVsZXRpb24nLCAnRGF0YSBEZXN0cnVjdGlvbiddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2NoZWNrJywgJ3dhenVoJ10sXG4gICAgZGVzY3JpcHRpb246ICdGaWxlIGRlbGV0ZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAxNS1vc3NlY19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTkyLFxuICAgIGxldmVsOiA4LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTAwJywgbWF0Y2g6ICdeb3NzZWM6IEZpbGUgc2l6ZSByZWR1Y2VkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNS4yJywgJzExLjQnXSxcbiAgICBncGcxMzogWycxMC4xJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS45JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW1wYWN0J10sIGlkOiBbJ1QxNDkyJ10sIHRlY2huaXF1ZTogWydTdG9yZWQgRGF0YSBNYW5pcHVsYXRpb24nXSB9LFxuICAgIGdyb3VwczogWydhdHRhY2tzJywgJ3dhenVoJ10sXG4gICAgZGVzY3JpcHRpb246ICdMb2cgZmlsZSBzaXplIHJlZHVjZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAxNS1vc3NlY19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTkzLFxuICAgIGxldmVsOiA5LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTAwJywgbWF0Y2g6ICdeb3NzZWM6IEV2ZW50IGxvZyBjbGVhcmVkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNS4yJ10sXG4gICAgZ3BnMTM6IFsnMTAuMSddLFxuICAgIGdkcHI6IFsnSUlfNS4xLmYnLCAnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuOSddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydEZWZlbnNlIEV2YXNpb24nXSwgaWQ6IFsnVDEwNzAnXSwgdGVjaG5pcXVlOiBbJ0luZGljYXRvciBSZW1vdmFsIG9uIEhvc3QnXSB9LFxuICAgIGdyb3VwczogWydsb2dzX2NsZWFyZWQnLCAnd2F6dWgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3Jvc29mdCBFdmVudCBsb2cgY2xlYXJlZC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDE1LW9zc2VjX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1OTQsXG4gICAgbGV2ZWw6IDUsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBjYXRlZ29yeTogJ3dhenVoJywgaWZfc2lkOiAnNTUwJywgaG9zdG5hbWU6ICdzeXNjaGVjay1yZWdpc3RyeScgfSxcbiAgICBwY2lfZHNzOiBbJzExLjUnXSxcbiAgICBncGcxMzogWyc0LjEzJ10sXG4gICAgZ2RwcjogWydJSV81LjEuZiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYy4xJywgJzE2NC4zMTIuYy4yJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnU0kuNyddLFxuICAgIHRzYzogWydQSTEuNCcsICdQSTEuNScsICdDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbXBhY3QnXSwgaWQ6IFsnVDE0OTInXSwgdGVjaG5pcXVlOiBbJ1N0b3JlZCBEYXRhIE1hbmlwdWxhdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2NoZWNrJywgJ3dhenVoJ10sXG4gICAgZGVzY3JpcHRpb246ICdSZWdpc3RyeSBJbnRlZ3JpdHkgQ2hlY2tzdW0gQ2hhbmdlZCcsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMTUtb3NzZWNfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU5NyxcbiAgICBsZXZlbDogNSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGNhdGVnb3J5OiAnd2F6dWgnLCBpZl9zaWQ6ICc1NTMnLCBob3N0bmFtZTogJ3N5c2NoZWNrLXJlZ2lzdHJ5JyB9LFxuICAgIHBjaV9kc3M6IFsnMTEuNSddLFxuICAgIGdwZzEzOiBbJzQuMTMnXSxcbiAgICBnZHByOiBbJ0lJXzUuMS5mJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5jLjEnLCAnMTY0LjMxMi5jLjInXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS43J10sXG4gICAgdHNjOiBbJ1BJMS40JywgJ1BJMS41JywgJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydEZWZlbnNlIEV2YXNpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTEwNycsICdUMTQ4NSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0ZpbGUgRGVsZXRpb24nLCAnRGF0YSBEZXN0cnVjdGlvbiddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2NoZWNrJywgJ3dhenVoJ10sXG4gICAgZGVzY3JpcHRpb246ICdSZWdpc3RyeSBFbnRyeSBEZWxldGVkLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAxMDAzLFxuICAgIGxldmVsOiAxMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IG1heHNpemU6ICcxMDI1Jywgbm9hbGVydDogJzEnIH0sXG4gICAgZ3BnMTM6IFsnNC4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAnZXJyb3JzJ10sXG4gICAgZGVzY3JpcHRpb246ICdOb24gc3RhbmRhcmQgc3lzbG9nIG1lc3NhZ2UgKHNpemUgdG9vIGxhcmdlKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMjMwMSxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBtYXRjaDogJ15EZWFjdGl2YXRpbmcgc2VydmljZSAnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW1wYWN0J10sIGlkOiBbJ1QxNDk5J10sIHRlY2huaXF1ZTogWydFbmRwb2ludCBEZW5pYWwgb2YgU2VydmljZSddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICd4aW5ldGQnXSxcbiAgICBkZXNjcmlwdGlvbjogJ3hpbmV0ZDogRXhjZXNzaXZlIG51bWJlciBjb25uZWN0aW9ucyB0byBhIHNlcnZpY2UuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDI1MDIsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgbWF0Y2g6ICdtb3JlIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVzO3xSRVBFQVRFRCBsb2dpbiBmYWlsdXJlcycgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc3LjgnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDcmVkZW50aWFsIEFjY2VzcyddLCBpZDogWydUMTExMCddLCB0ZWNobmlxdWU6IFsnQnJ1dGUgRm9yY2UnXSB9LFxuICAgIGdyb3VwczogWydhdXRoZW50aWNhdGlvbl9mYWlsZWQnLCAnc3lzbG9nJywgJ2FjY2Vzc19jb250cm9sJ10sXG4gICAgZGVzY3JpcHRpb246ICdzeXNsb2c6IFVzZXIgbWlzc2VkIHRoZSBwYXNzd29yZCBtb3JlIHRoYW4gb25lIHRpbWUnLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMjUwMyxcbiAgICBsZXZlbDogNSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICByZWdleDogW1xuICAgICAgICAnXnJlZnVzZWQgY29ubmVjdCBmcm9tfCcsXG4gICAgICAgICdebGlid3JhcCByZWZ1c2VkIGNvbm5lY3Rpb258JyxcbiAgICAgICAgJ0Nvbm5lY3Rpb24gZnJvbSBTKyBkZW5pZWQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHBjaV9kc3M6IFsnMTAuMi40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb21tYW5kIGFuZCBDb250cm9sJ10sXG4gICAgICBpZDogWydUMTA5NSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ1N0YW5kYXJkIE5vbi1BcHBsaWNhdGlvbiBMYXllciBQcm90b2NvbCddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ2FjY2Vzc19kZW5pZWQnLCAnc3lzbG9nJywgJ2FjY2Vzc19jb250cm9sJ10sXG4gICAgZGVzY3JpcHRpb246ICdzeXNsb2c6IENvbm5lY3Rpb24gYmxvY2tlZCBieSBUY3AgV3JhcHBlcnMuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDI1MDQsXG4gICAgbGV2ZWw6IDksXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBtYXRjaDogJ0lMTEVHQUwgUk9PVCBMT0dJTnxST09UIExPR0lOIFJFRlVTRUQnIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjQnLCAnMTAuMi41JywgJzEwLjIuMiddLFxuICAgIGdwZzEzOiBbJzcuOCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJywgJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43JywgJ0FDLjYnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnUHJpdmlsZWdlIEVzY2FsYXRpb24nXSwgaWQ6IFsnVDExNjknXSwgdGVjaG5pcXVlOiBbJ1N1ZG8nXSB9LFxuICAgIGdyb3VwczogWydpbnZhbGlkX2xvZ2luJywgJ3N5c2xvZycsICdhY2Nlc3NfY29udHJvbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc3lzbG9nOiBJbGxlZ2FsIHJvb3QgbG9naW4uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDI1NTEsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMjU1MCcsIHJlZ2V4OiAnXkNvbm5lY3Rpb24gZnJvbSBTKyBvbiBpbGxlZ2FsIHBvcnQkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJ10sXG4gICAgZ3BnMTM6IFsnNy4xJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0Rpc2NvdmVyeSddLCBpZDogWydUMTA0NiddLCB0ZWNobmlxdWU6IFsnTmV0d29yayBTZXJ2aWNlIFNjYW5uaW5nJ10gfSxcbiAgICBncm91cHM6IFsnY29ubmVjdGlvbl9hdHRlbXB0JywgJ3N5c2xvZycsICdhY2Nlc3NfY29udHJvbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29ubmVjdGlvbiB0byByc2hkIGZyb20gdW5wcml2aWxlZ2VkIHBvcnQuIFBvc3NpYmxlIG5ldHdvcmsgc2Nhbi4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMjgzMyxcbiAgICBsZXZlbDogOCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzI4MzInLCBtYXRjaDogJ14ocm9vdCknIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjcnLCAnMTAuNi4xJywgJzEwLjIuMiddLFxuICAgIGdwZzEzOiBbJzQuMTMnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQVUuNicsICdBQy42J10sXG4gICAgdHNjOiBbJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ1ByaXZpbGVnZSBFc2NhbGF0aW9uJ10sIGlkOiBbJ1QxMTY5J10sIHRlY2huaXF1ZTogWydTdWRvJ10gfSxcbiAgICBncm91cHM6IFsnc3lzbG9nJywgJ2Nyb24nXSxcbiAgICBkZXNjcmlwdGlvbjogXCJSb290J3MgY3JvbnRhYiBlbnRyeSBjaGFuZ2VkLlwiLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMjk2MCxcbiAgICBsZXZlbDogMixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGRlY29kZWRfYXM6ICdncGFzc3dkJywgbWF0Y2g6ICdhZGRlZCBieScgfSxcbiAgICBncGcxMzogWyc3LjknLCAnNC4xMyddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQZXJzaXN0ZW5jZSddLCBpZDogWydUMTEzNiddLCB0ZWNobmlxdWU6IFsnQ3JlYXRlIEFjY291bnQnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAneXVtJ10sXG4gICAgZGVzY3JpcHRpb246ICdVc2VyIGFkZGVkIHRvIGdyb3VwLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAyOTYxLFxuICAgIGxldmVsOiA1LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMjk2MCcsIGdyb3VwOiAnc3VkbycgfSxcbiAgICBncGcxMzogWyc3LjknLCAnNC4xMyddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQZXJzaXN0ZW5jZSddLCBpZDogWydUMTEzNiddLCB0ZWNobmlxdWU6IFsnQ3JlYXRlIEFjY291bnQnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAneXVtJ10sXG4gICAgZGVzY3JpcHRpb246ICdVc2VyIGFkZGVkIHRvIGdyb3VwIHN1ZG8uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDI5NjQsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnNCcsIHRpbWVmcmFtZTogJzMwJywgaWZfbWF0Y2hlZF9zaWQ6ICcyOTYzJywgc2FtZV9zb3VyY2VfaXA6ICcnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWydyZWNvbicsICdzeXNsb2cnLCAncGVyZGl0aW9uJ10sXG4gICAgZGVzY3JpcHRpb246ICdwZXJkaXRpb246IE11bHRpcGxlIGNvbm5lY3Rpb24gYXR0ZW1wdHMgZnJvbSBzYW1lIHNvdXJjZS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTAyLFxuICAgIGxldmVsOiA1LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzEwMScsIG1hdGNoOiAncmVqZWN0PTQ1MSA0LjEuOCAnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NvbGxlY3Rpb24nXSwgaWQ6IFsnVDExMTQnXSwgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ3NlbmRtYWlsOiBTZW5kZXIgZG9tYWluIGRvZXMgbm90IGhhdmUgYW55IHZhbGlkIE1YIHJlY29yZCAoUmVxdWVzdGVkIGFjdGlvbiBhYm9ydGVkKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTAzLFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzEwMScsIG1hdGNoOiAncmVqZWN0PTU1MCA1LjAuMCB8cmVqZWN0PTU1MyA1LjMuMCcgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3NlbmRtYWlsJ10sXG4gICAgZGVzY3JpcHRpb246ICdzZW5kbWFpbDogUmVqZWN0ZWQgYnkgYWNjZXNzIGxpc3QgKDU1eDogUmVxdWVzdGVkIGFjdGlvbiBub3QgdGFrZW4pLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjUtc2VuZG1haWxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMxMDQsXG4gICAgbGV2ZWw6IDYsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMTAxJywgbWF0Y2g6ICdyZWplY3Q9NTUwIDUuNy4xICcgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3NlbmRtYWlsJ10sXG4gICAgZGVzY3JpcHRpb246ICdzZW5kbWFpbDogQXR0ZW1wdCB0byB1c2UgbWFpbCBzZXJ2ZXIgYXMgcmVsYXkgKDU1MDogUmVxdWVzdGVkIGFjdGlvbiBub3QgdGFrZW4pLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjUtc2VuZG1haWxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMxMDUsXG4gICAgbGV2ZWw6IDUsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMTAxJywgbWF0Y2g6ICdyZWplY3Q9NTUzIDUuMS44ICcgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3NlbmRtYWlsJ10sXG4gICAgZGVzY3JpcHRpb246ICdzZW5kbWFpbDogU2VuZGVyIGRvbWFpbiBpcyBub3QgZm91bmQgICg1NTM6IFJlcXVlc3RlZCBhY3Rpb24gbm90IHRha2VuKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTA2LFxuICAgIGxldmVsOiA1LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzEwMScsIG1hdGNoOiAncmVqZWN0PTU1MyA1LjUuNCAnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NvbGxlY3Rpb24nXSwgaWQ6IFsnVDExMTQnXSwgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IFNlbmRlciBhZGRyZXNzIGRvZXMgbm90IGhhdmUgZG9tYWluICg1NTM6IFJlcXVlc3RlZCBhY3Rpb24gbm90IHRha2VuKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTA4LFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzEwMCcsIG1hdGNoOiAncmVqZWN0aW5nIGNvbW1hbmRzIGZyb20nIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NvbGxlY3Rpb24nXSwgaWQ6IFsnVDExMTQnXSwgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IFNlbmRtYWlsIHJlamVjdGVkIGR1ZSB0byBwcmUtZ3JlZXRpbmcuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyNS1zZW5kbWFpbF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzE1MSxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBmcmVxdWVuY3k6ICc4JywgdGltZWZyYW1lOiAnMTIwJywgaWZfbWF0Y2hlZF9zaWQ6ICczMTAyJywgc2FtZV9zb3VyY2VfaXA6ICcnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb2xsZWN0aW9uJywgJ0ltcGFjdCddLFxuICAgICAgaWQ6IFsnVDExMTQnLCAnVDE0OTknXSxcbiAgICAgIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJywgJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnbXVsdGlwbGVfc3BhbScsICdzeXNsb2cnLCAnc2VuZG1haWwnXSxcbiAgICBkZXNjcmlwdGlvbjogJ3NlbmRtYWlsOiBTZW5kZXIgZG9tYWluIGhhcyBib2d1cyBNWCByZWNvcmQuIEl0IHNob3VsZCBub3QgYmUgc2VuZGluZyBlLW1haWwuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyNS1zZW5kbWFpbF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzE1MixcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzgnLCB0aW1lZnJhbWU6ICcxMjAnLCBpZl9tYXRjaGVkX3NpZDogJzMxMDMnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ3NlbmRtYWlsOiBNdWx0aXBsZSBhdHRlbXB0cyB0byBzZW5kIGUtbWFpbCBmcm9tIGEgcHJldmlvdXNseSByZWplY3RlZCBzZW5kZXIgKGFjY2VzcykuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyNS1zZW5kbWFpbF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzE1MyxcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzgnLCB0aW1lZnJhbWU6ICcxMjAnLCBpZl9tYXRjaGVkX3NpZDogJzMxMDQnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IE11bHRpcGxlIHJlbGF5aW5nIGF0dGVtcHRzIG9mIHNwYW0uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyNS1zZW5kbWFpbF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzE1NCxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBmcmVxdWVuY3k6ICc4JywgdGltZWZyYW1lOiAnMTIwJywgaWZfbWF0Y2hlZF9zaWQ6ICczMTA1Jywgc2FtZV9zb3VyY2VfaXA6ICcnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb2xsZWN0aW9uJywgJ0ltcGFjdCddLFxuICAgICAgaWQ6IFsnVDExMTQnLCAnVDE0OTknXSxcbiAgICAgIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJywgJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnbXVsdGlwbGVfc3BhbScsICdzeXNsb2cnLCAnc2VuZG1haWwnXSxcbiAgICBkZXNjcmlwdGlvbjogJ3NlbmRtYWlsOiBNdWx0aXBsZSBhdHRlbXB0cyB0byBzZW5kIGUtbWFpbCBmcm9tIGludmFsaWQvdW5rbm93biBzZW5kZXIgZG9tYWluLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjUtc2VuZG1haWxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMxNTUsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnOCcsIHRpbWVmcmFtZTogJzEyMCcsIGlmX21hdGNoZWRfc2lkOiAnMzEwNicsIHNhbWVfc291cmNlX2lwOiAnJyB9LFxuICAgIHBjaV9kc3M6IFsnMTEuNCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnU0kuNCddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7XG4gICAgICB0YWN0aWM6IFsnQ29sbGVjdGlvbicsICdJbXBhY3QnXSxcbiAgICAgIGlkOiBbJ1QxMTE0JywgJ1QxNDk5J10sXG4gICAgICB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbicsICdFbmRwb2ludCBEZW5pYWwgb2YgU2VydmljZSddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ211bHRpcGxlX3NwYW0nLCAnc3lzbG9nJywgJ3NlbmRtYWlsJ10sXG4gICAgZGVzY3JpcHRpb246ICdzZW5kbWFpbDogTXVsdGlwbGUgYXR0ZW1wdHMgdG8gc2VuZCBlLW1haWwgZnJvbSBpbnZhbGlkL3Vua25vd24gc2VuZGVyLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjUtc2VuZG1haWxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMxNTYsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnMTInLCB0aW1lZnJhbWU6ICcxMjAnLCBpZl9tYXRjaGVkX3NpZDogJzMxMDcnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IE11bHRpcGxlIHJlamVjdGVkIGUtbWFpbHMgZnJvbSBzYW1lIHNvdXJjZSBpcC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTU4LFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzgnLCB0aW1lZnJhbWU6ICcxMjAnLCBpZl9tYXRjaGVkX3NpZDogJzMxMDgnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IE11bHRpcGxlIHByZS1ncmVldGluZ3MgcmVqZWN0cy4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDI1LXNlbmRtYWlsX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMTkxLFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzE5MCcsIG1hdGNoOiAnXnNlbmRlciBjaGVjayBmYWlsZWR8XnNlbmRlciBjaGVjayB0ZW1wZmFpbGVkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTEuNCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnU0kuNCddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDb2xsZWN0aW9uJ10sIGlkOiBbJ1QxMTE0J10sIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJ10gfSxcbiAgICBncm91cHM6IFsnc21mLXNhdicsICdzcGFtJywgJ3N5c2xvZycsICdzZW5kbWFpbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc2VuZG1haWw6IFNNRi1TQVYgc2VuZG1haWwgbWlsdGVyIHVuYWJsZSB0byB2ZXJpZnkgYWRkcmVzcyAoUkVKRUNURUQpLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMzAtcG9zdGZpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzMwMSxcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzMzMDAnLCBpZDogJ141NTQkJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDb2xsZWN0aW9uJ10sIGlkOiBbJ1QxMTE0J10sIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJ10gfSxcbiAgICBncm91cHM6IFsnc3BhbScsICdzeXNsb2cnLCAncG9zdGZpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUG9zdGZpeDogQXR0ZW1wdCB0byB1c2UgbWFpbCBzZXJ2ZXIgYXMgcmVsYXkgKGNsaWVudCBob3N0IHJlamVjdGVkKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzMDIsXG4gICAgbGV2ZWw6IDYsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMzAwJywgaWQ6ICdeNTUwJCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Bvc3RmaXg6IFJlamVjdGVkIGJ5IGFjY2VzcyBsaXN0IChSZXF1ZXN0ZWQgYWN0aW9uIG5vdCB0YWtlbikuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzAzLFxuICAgIGxldmVsOiA1LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzMwMCcsIGlkOiAnXjQ1MCQnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTEuNCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi4xJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NvbGxlY3Rpb24nXSwgaWQ6IFsnVDExMTQnXSwgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzcGFtJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246ICdQb3N0Zml4OiBTZW5kZXIgZG9tYWluIGlzIG5vdCBmb3VuZCAoNDUwOiBSZXF1ZXN0ZWQgbWFpbCBhY3Rpb24gbm90IHRha2VuKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzMDQsXG4gICAgbGV2ZWw6IDUsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMzAwJywgaWQ6ICdeNTAzJCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQb3N0Zml4OiBJbXByb3BlciB1c2Ugb2YgU01UUCBjb21tYW5kIHBpcGVsaW5pbmcgKDUwMzogQmFkIHNlcXVlbmNlIG9mIGNvbW1hbmRzKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzMDUsXG4gICAgbGV2ZWw6IDUsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMzAwJywgaWQ6ICdeNTA0JCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQb3N0Zml4OiBSZWNpcGllbnQgYWRkcmVzcyBtdXN0IGNvbnRhaW4gRlFETiAoNTA0OiBDb21tYW5kIHBhcmFtZXRlciBub3QgaW1wbGVtZW50ZWQpLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMzAtcG9zdGZpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzMwNixcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzMzMDEsIDMzMDInLCBtYXRjaDogJyBibG9ja2VkIHVzaW5nICcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Bvc3RmaXg6IElQIEFkZHJlc3MgYmxhY2stbGlzdGVkIGJ5IGFudGktc3BhbSAoYmxvY2tlZCkuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzMwLFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBpZ25vcmU6ICcyNDAnLFxuICAgICAgaWZfc2lkOiAnMzMyMCcsXG4gICAgICBtYXRjaDogW1xuICAgICAgICAnZGVmZXIgc2VydmljZSBmYWlsdXJlfFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlfCcsXG4gICAgICAgICdeZmF0YWw6IHRoZSBQb3N0Zml4IG1haWwgc3lzdGVtIGlzIG5vdCBydW5uaW5nJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMSddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNiddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbXBhY3QnXSwgaWQ6IFsnVDE0OTknXSwgdGVjaG5pcXVlOiBbJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10gfSxcbiAgICBncm91cHM6IFsnc2VydmljZV9hdmFpbGFiaWxpdHknLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Bvc3RmaXggcHJvY2VzcyBlcnJvci4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzMzUsXG4gICAgbGV2ZWw6IDYsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMzIwJywgbWF0Y2g6ICdedG9vIG1hbnkgJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDb2xsZWN0aW9uJ10sIGlkOiBbJ1QxMTE0J10sIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJ10gfSxcbiAgICBncm91cHM6IFsnc3BhbScsICdzeXNsb2cnLCAncG9zdGZpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUG9zdGZpeDogdG9vIG1hbnkgZXJyb3JzIGFmdGVyIFJDUFQgZnJvbSB1bmtub3duJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzUxLFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHtcbiAgICAgIGZyZXF1ZW5jeTogJyRQT1NURklYX0ZSRVEnLFxuICAgICAgdGltZWZyYW1lOiAnOTAnLFxuICAgICAgaWZfbWF0Y2hlZF9zaWQ6ICczMzAxJyxcbiAgICAgIHNhbWVfc291cmNlX2lwOiAnJyxcbiAgICB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7XG4gICAgICB0YWN0aWM6IFsnQ29sbGVjdGlvbicsICdJbXBhY3QnXSxcbiAgICAgIGlkOiBbJ1QxMTE0JywgJ1QxNDk5J10sXG4gICAgICB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbicsICdFbmRwb2ludCBEZW5pYWwgb2YgU2VydmljZSddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ211bHRpcGxlX3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Bvc3RmaXg6IE11bHRpcGxlIHJlbGF5aW5nIGF0dGVtcHRzIG9mIHNwYW0uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzUyLFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHtcbiAgICAgIGZyZXF1ZW5jeTogJyRQT1NURklYX0ZSRVEnLFxuICAgICAgdGltZWZyYW1lOiAnMTIwJyxcbiAgICAgIGlmX21hdGNoZWRfc2lkOiAnMzMwMicsXG4gICAgICBzYW1lX3NvdXJjZV9pcDogJycsXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi4xJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb2xsZWN0aW9uJywgJ0ltcGFjdCddLFxuICAgICAgaWQ6IFsnVDExMTQnLCAnVDE0OTknXSxcbiAgICAgIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJywgJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnbXVsdGlwbGVfc3BhbScsICdzeXNsb2cnLCAncG9zdGZpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUG9zdGZpeDogTXVsdGlwbGUgYXR0ZW1wdHMgdG8gc2VuZCBlLW1haWwgZnJvbSBhIHJlamVjdGVkIHNlbmRlciBJUCAoYWNjZXNzKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzNTMsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHtcbiAgICAgIGZyZXF1ZW5jeTogJyRQT1NURklYX0ZSRVEnLFxuICAgICAgdGltZWZyYW1lOiAnMTIwJyxcbiAgICAgIGlmX21hdGNoZWRfc2lkOiAnMzMwMycsXG4gICAgICBzYW1lX3NvdXJjZV9pcDogJycsXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246ICdQb3N0Zml4OiBNdWx0aXBsZSBhdHRlbXB0cyB0byBzZW5kIGUtbWFpbCBmcm9tIGludmFsaWQvdW5rbm93biBzZW5kZXIgZG9tYWluLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMzAtcG9zdGZpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzM1NCxcbiAgICBsZXZlbDogMTIsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczoge1xuICAgICAgZnJlcXVlbmN5OiAnJFBPU1RGSVhfRlJFUScsXG4gICAgICB0aW1lZnJhbWU6ICcxMjAnLFxuICAgICAgaWZfbWF0Y2hlZF9zaWQ6ICczMzA0JyxcbiAgICAgIHNhbWVfc291cmNlX2lwOiAnJyxcbiAgICB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDb2xsZWN0aW9uJ10sIGlkOiBbJ1QxMTE0J10sIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJ10gfSxcbiAgICBncm91cHM6IFsnbXVsdGlwbGVfc3BhbScsICdzeXNsb2cnLCAncG9zdGZpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUG9zdGZpeDogTXVsdGlwbGUgbWlzdXNlIG9mIFNNVFAgc2VydmljZSAoYmFkIHNlcXVlbmNlIG9mIGNvbW1hbmRzKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzNTUsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHtcbiAgICAgIGZyZXF1ZW5jeTogJyRQT1NURklYX0ZSRVEnLFxuICAgICAgdGltZWZyYW1lOiAnMTIwJyxcbiAgICAgIGlmX21hdGNoZWRfc2lkOiAnMzMwNScsXG4gICAgICBzYW1lX3NvdXJjZV9pcDogJycsXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NvbGxlY3Rpb24nLCAnSW1wYWN0J10sXG4gICAgICBpZDogWydUMTExNCcsICdUMTQ5OSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nLCAnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUG9zdGZpeDogTXVsdGlwbGUgYXR0ZW1wdHMgdG8gc2VuZCBlLW1haWwgdG8gaW52YWxpZCByZWNpcGllbnQgb3IgZnJvbSB1bmtub3duIHNlbmRlciBkb21haW4uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzU2LFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBmcmVxdWVuY3k6ICckUE9TVEZJWF9GUkVRJyxcbiAgICAgIHRpbWVmcmFtZTogJzEyMCcsXG4gICAgICBpZ25vcmU6ICczMCcsXG4gICAgICBpZl9tYXRjaGVkX3NpZDogJzMzMDYnLFxuICAgICAgc2FtZV9zb3VyY2VfaXA6ICcnLFxuICAgIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTEuNCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi4xJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWydtdWx0aXBsZV9zcGFtJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUG9zdGZpeDogTXVsdGlwbGUgYXR0ZW1wdHMgdG8gc2VuZCBlLW1haWwgZnJvbSBibGFjay1saXN0ZWQgSVAgYWRkcmVzcyAoYmxvY2tlZCkuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAzMC1wb3N0Zml4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzMzU3LFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBmcmVxdWVuY3k6ICc4JyxcbiAgICAgIHRpbWVmcmFtZTogJzEyMCcsXG4gICAgICBpZ25vcmU6ICc2MCcsXG4gICAgICBpZl9tYXRjaGVkX3NpZDogJzMzMzInLFxuICAgICAgc2FtZV9zb3VyY2VfaXA6ICcnLFxuICAgIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjQnLCAnMTAuMi41JywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNycsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NyZWRlbnRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMTEwJ10sIHRlY2huaXF1ZTogWydCcnV0ZSBGb3JjZSddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX2ZhaWx1cmVzJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246ICdQb3N0Zml4OiBNdWx0aXBsZSBTQVNMIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVzLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMzAtcG9zdGZpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzM5NixcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzMzOTUnLCBtYXRjaDogJ3ZlcmlmaWNhdGlvbicgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29sbGVjdGlvbiddLCBpZDogWydUMTExNCddLCB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbiddIH0sXG4gICAgZ3JvdXBzOiBbJ3NwYW0nLCAnc3lzbG9nJywgJ3Bvc3RmaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Bvc3RmaXg6IGhvc3RuYW1lIHZlcmlmaWNhdGlvbiBmYWlsZWQnLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDMwLXBvc3RmaXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDMzOTcsXG4gICAgbGV2ZWw6IDYsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICczMzk1JywgbWF0Y2g6ICdSQkwnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTEuNCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNicsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi4xJywgJ0NDNi44J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NvbGxlY3Rpb24nXSwgaWQ6IFsnVDExMTQnXSwgdGVjaG5pcXVlOiBbJ0VtYWlsIENvbGxlY3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzcGFtJywgJ3N5c2xvZycsICdwb3N0Zml4J10sXG4gICAgZGVzY3JpcHRpb246ICdQb3N0Zml4OiBSQkwgbG9va3VwIGVycm9yOiBIb3N0IG9yIGRvbWFpbiBuYW1lIG5vdCBmb3VuZCcsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMzAtcG9zdGZpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzM5OCxcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzMzOTUnLCBtYXRjaDogJ01BSUx8ZG9lcyBub3QgcmVzb2x2ZSB0byBhZGRyZXNzJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJywgJzExLjQnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDb2xsZWN0aW9uJ10sIGlkOiBbJ1QxMTE0J10sIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJ10gfSxcbiAgICBncm91cHM6IFsnc3BhbScsICdzeXNsb2cnLCAncG9zdGZpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUG9zdGZpeDogSWxsZWdhbCBhZGRyZXNzIGZyb20gdW5rbm93biBzZW5kZXInLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDQwLWltYXBkX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzNjAyLFxuICAgIGxldmVsOiAzLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzYwMCcsIG1hdGNoOiAnQXV0aGVudGljYXRlZCB1c2VyPScgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuMSddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDEwNzgnXSwgdGVjaG5pcXVlOiBbJ1ZhbGlkIEFjY291bnRzJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fc3VjY2VzcycsICdzeXNsb2cnLCAnaW1hcGQnXSxcbiAgICBkZXNjcmlwdGlvbjogJ0ltYXBkIHVzZXIgbG9naW4uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA0MC1pbWFwZF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzY1MSxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczoge1xuICAgICAgZnJlcXVlbmN5OiAnJElNQVBEX0ZSRVEnLFxuICAgICAgdGltZWZyYW1lOiAnMTIwJyxcbiAgICAgIGlmX21hdGNoZWRfc2lkOiAnMzYwMScsXG4gICAgICBzYW1lX3NvdXJjZV9pcDogJycsXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnLCAnMTEuNCddLFxuICAgIGdwZzEzOiBbJzcuMSddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJywgJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ3JlZGVudGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDExMTAnXSwgdGVjaG5pcXVlOiBbJ0JydXRlIEZvcmNlJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fZmFpbHVyZXMnLCAnc3lzbG9nJywgJ2ltYXBkJ10sXG4gICAgZGVzY3JpcHRpb246ICdJbWFwZCBNdWx0aXBsZSBmYWlsZWQgbG9naW5zIGZyb20gc2FtZSBzb3VyY2UgaXAuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA0NS1tYWlsc2Nhbm5lcl9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogMzc1MSxcbiAgICBsZXZlbDogNixcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzgnLCB0aW1lZnJhbWU6ICcxODAnLCBpZl9tYXRjaGVkX3NpZDogJzM3MDInLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMSddLFxuICAgIGdwZzEzOiBbJzQuMTInXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0NyZWRlbnRpYWwgQWNjZXNzJywgJ0NvbGxlY3Rpb24nXSxcbiAgICAgIGlkOiBbJ1QxMTEwJywgJ1QxMTE0J10sXG4gICAgICB0ZWNobmlxdWU6IFsnQnJ1dGUgRm9yY2UnLCAnRW1haWwgQ29sbGVjdGlvbiddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ211bHRpcGxlX3NwYW0nLCAnc3lzbG9nJywgJ21haWxzY2FubmVyJ10sXG4gICAgZGVzY3JpcHRpb246ICdtYWlsc2Nhbm5lcjogTXVsdGlwbGUgYXR0ZW1wdHMgb2Ygc3BhbS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDUwLW1zLWV4Y2hhbmdlX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzODUxLFxuICAgIGxldmVsOiA5LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHtcbiAgICAgIGZyZXF1ZW5jeTogJzEyJyxcbiAgICAgIHRpbWVmcmFtZTogJzEyMCcsXG4gICAgICBpZ25vcmU6ICcxMjAnLFxuICAgICAgaWZfbWF0Y2hlZF9zaWQ6ICczODAxJyxcbiAgICAgIHNhbWVfc291cmNlX2lwOiAnJyxcbiAgICB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJ10sXG4gICAgZ3BnMTM6IFsnNC4xMiddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNiddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7XG4gICAgICB0YWN0aWM6IFsnQ29sbGVjdGlvbicsICdJbXBhY3QnXSxcbiAgICAgIGlkOiBbJ1QxMTE0JywgJ1QxNDk5J10sXG4gICAgICB0ZWNobmlxdWU6IFsnRW1haWwgQ29sbGVjdGlvbicsICdFbmRwb2ludCBEZW5pYWwgb2YgU2VydmljZSddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ211bHRpcGxlX3NwYW0nLCAnbXMnLCAnZXhjaGFuZ2UnXSxcbiAgICBkZXNjcmlwdGlvbjogJ21zLWV4Y2hhbmdlOiBNdWx0aXBsZSBlLW1haWwgYXR0ZW1wdHMgdG8gYW4gaW52YWxpZCBhY2NvdW50LicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwNTAtbXMtZXhjaGFuZ2VfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDM4NTIsXG4gICAgbGV2ZWw6IDksXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczoge1xuICAgICAgZnJlcXVlbmN5OiAnMTQnLFxuICAgICAgdGltZWZyYW1lOiAnMTIwJyxcbiAgICAgIGlnbm9yZTogJzI0MCcsXG4gICAgICBpZl9tYXRjaGVkX3NpZDogJzM4MDInLFxuICAgICAgc2FtZV9zb3VyY2VfaXA6ICcnLFxuICAgIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb2xsZWN0aW9uJywgJ0ltcGFjdCddLFxuICAgICAgaWQ6IFsnVDExMTQnLCAnVDE0OTknXSxcbiAgICAgIHRlY2huaXF1ZTogWydFbWFpbCBDb2xsZWN0aW9uJywgJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnbXVsdGlwbGVfc3BhbScsICdtcycsICdleGNoYW5nZSddLFxuICAgIGRlc2NyaXB0aW9uOiAnbXMtZXhjaGFuZ2U6IE11bHRpcGxlIGUtbWFpbCA1MDAgZXJyb3IgY29kZSAoc3BhbSkuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA1NS1jb3VyaWVyX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzOTA0LFxuICAgIGxldmVsOiAzLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnMzkwMCcsIG1hdGNoOiAnXkxPR0lOLCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuMScsICc3LjInXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0luaXRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMDc4J10sIHRlY2huaXF1ZTogWydWYWxpZCBBY2NvdW50cyddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLCAnc3lzbG9nJywgJ2NvdXJpZXInXSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvdXJpZXIgKGltYXAvcG9wMykgYXV0aGVudGljYXRpb24gc3VjY2Vzcy4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDU1LWNvdXJpZXJfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDM5MTAsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnMTInLCB0aW1lZnJhbWU6ICczMCcsIGlmX21hdGNoZWRfc2lkOiAnMzkwMicsIHNhbWVfc291cmNlX2lwOiAnJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuMi40JywgJzEwLjIuNScsICcxMS40J10sXG4gICAgZ3BnMTM6IFsnNy4xJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnLCAnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDcmVkZW50aWFsIEFjY2VzcyddLCBpZDogWydUMTExMCddLCB0ZWNobmlxdWU6IFsnQnJ1dGUgRm9yY2UnXSB9LFxuICAgIGdyb3VwczogWydhdXRoZW50aWNhdGlvbl9mYWlsdXJlcycsICdzeXNsb2cnLCAnY291cmllciddLFxuICAgIGRlc2NyaXB0aW9uOiAnQ291cmllciBicnV0ZSBmb3JjZSAobXVsdGlwbGUgZmFpbGVkIGxvZ2lucykuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA1NS1jb3VyaWVyX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiAzOTExLFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzE3JywgdGltZWZyYW1lOiAnMzAnLCBpZl9tYXRjaGVkX3NpZDogJzM5MDEnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjYuMScsICcxMS40J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M3LjInLCAnQ0M3LjMnLCAnQ0M2LjEnLCAnQ0M2LjgnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ3JlZGVudGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDExMTAnXSwgdGVjaG5pcXVlOiBbJ0JydXRlIEZvcmNlJ10gfSxcbiAgICBncm91cHM6IFsncmVjb24nLCAnc3lzbG9nJywgJ2NvdXJpZXInXSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvdXJpZXI6IE11bHRpcGxlIGNvbm5lY3Rpb24gYXR0ZW1wdHMgZnJvbSBzYW1lIHNvdXJjZS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDY1LXBpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNDMyMyxcbiAgICBsZXZlbDogMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQzMTQnLCBpZDogJ142LTYwNTAwNScgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuOCddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDEwNzgnXSwgdGVjaG5pcXVlOiBbJ1ZhbGlkIEFjY291bnRzJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fc3VjY2VzcycsICdzeXNsb2cnLCAncGl4J10sXG4gICAgZGVzY3JpcHRpb246ICdQSVg6IFN1Y2Nlc3NmdWwgbG9naW4uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA2NS1waXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQzMjUsXG4gICAgbGV2ZWw6IDgsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0MzEzJywgaWQ6ICdeNC00MDUwMDEnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb21tYW5kIGFuZCBDb250cm9sJ10sXG4gICAgICBpZDogWydUMTA5NSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ1N0YW5kYXJkIE5vbi1BcHBsaWNhdGlvbiBMYXllciBQcm90b2NvbCddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdwaXgnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1BJWDogQVJQIGNvbGxpc2lvbiBkZXRlY3RlZC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDY1LXBpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNDMzNSxcbiAgICBsZXZlbDogMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQzMTQnLCBpZDogJ142LTExMzAwNCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuMScsICc3LjInXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0luaXRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMDc4J10sIHRlY2huaXF1ZTogWydWYWxpZCBBY2NvdW50cyddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLCAnc3lzbG9nJywgJ3BpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUElYOiBBQUEgKFZQTikgYXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDY1LXBpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNDMzNixcbiAgICBsZXZlbDogOCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQzMTQnLCBpZDogJ142LTExMzAwNicgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc3LjEnLCAnNy41J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnLCAnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDExMzMnXSwgdGVjaG5pcXVlOiBbJ0V4dGVybmFsIFJlbW90ZSBTZXJ2aWNlcyddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCcsICdzeXNsb2cnLCAncGl4J10sXG4gICAgZGVzY3JpcHRpb246ICdQSVg6IEFBQSAoVlBOKSB1c2VyIGxvY2tlZCBvdXQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA2NS1waXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQzMzcsXG4gICAgbGV2ZWw6IDgsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0MzEyJywgaWQ6ICdeMy0yMDEwMDgnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0luaXRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMTMzJ10sIHRlY2huaXF1ZTogWydFeHRlcm5hbCBSZW1vdGUgU2VydmljZXMnXSB9LFxuICAgIGdyb3VwczogWydzZXJ2aWNlX2F2YWlsYWJpbGl0eScsICdzeXNsb2cnLCAncGl4J10sXG4gICAgZGVzY3JpcHRpb246ICdQSVg6IFRoZSBQSVggaXMgZGlzYWxsb3dpbmcgbmV3IGNvbm5lY3Rpb25zLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwNjUtcGl4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA0MzM5LFxuICAgIGxldmVsOiA4LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNDMxNCcsIGlkOiAnXjUtMTExMDAzJyB9LFxuICAgIHBjaV9kc3M6IFsnMS4xLjEnLCAnMTAuNCddLFxuICAgIGdwZzEzOiBbJzQuMTMnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYS4xJywgJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0NNLjMnLCAnQ00uNScsICdBVS44J10sXG4gICAgdHNjOiBbJ0NDOC4xJywgJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0RlZmVuc2UgRXZhc2lvbiddLCBpZDogWydUMTA4OSddLCB0ZWNobmlxdWU6IFsnRGlzYWJsaW5nIFNlY3VyaXR5IFRvb2xzJ10gfSxcbiAgICBncm91cHM6IFsnY29uZmlnX2NoYW5nZWQnLCAnc3lzbG9nJywgJ3BpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUElYOiBGaXJld2FsbCBjb25maWd1cmF0aW9uIGRlbGV0ZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA2NS1waXhfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQzNDAsXG4gICAgbGV2ZWw6IDgsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0MzE0JywgaWQ6ICdeNS0xMTEwMDV8XjUtMTExMDA0fF41LTExMTAwMnxeNS0xMTEwMDcnIH0sXG4gICAgcGNpX2RzczogWycxLjEuMScsICcxMC40J10sXG4gICAgZ3BnMTM6IFsnNC4xMyddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5hLjEnLCAnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQ00uMycsICdDTS41JywgJ0FVLjgnXSxcbiAgICB0c2M6IFsnQ0M4LjEnLCAnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnRGVmZW5zZSBFdmFzaW9uJ10sIGlkOiBbJ1QxMDg5J10sIHRlY2huaXF1ZTogWydEaXNhYmxpbmcgU2VjdXJpdHkgVG9vbHMnXSB9LFxuICAgIGdyb3VwczogWydjb25maWdfY2hhbmdlZCcsICdzeXNsb2cnLCAncGl4J10sXG4gICAgZGVzY3JpcHRpb246ICdQSVg6IEZpcmV3YWxsIGNvbmZpZ3VyYXRpb24gY2hhbmdlZC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDY1LXBpeF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNDM0MixcbiAgICBsZXZlbDogOCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQzMTQnLCBpZDogJ141LTUwMjEwMXxeNS01MDIxMDInIH0sXG4gICAgcGNpX2RzczogWyc4LjEuMicsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc0LjEzJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnLCAnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYS4yLkknLCAnMTY0LjMxMi5hLjIuSUknLCAnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQUMuMicsICdJQS40JywgJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbJ0RlZmVuc2UgRXZhc2lvbicsICdJbml0aWFsIEFjY2VzcyddLFxuICAgICAgaWQ6IFsnVDEwODknLCAnVDExMzMnXSxcbiAgICAgIHRlY2huaXF1ZTogWydEaXNhYmxpbmcgU2VjdXJpdHkgVG9vbHMnLCAnRXh0ZXJuYWwgUmVtb3RlIFNlcnZpY2VzJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnYWRkdXNlcicsICdhY2NvdW50X2NoYW5nZWQnLCAnc3lzbG9nJywgJ3BpeCddLFxuICAgIGRlc2NyaXB0aW9uOiAnUElYOiBVc2VyIGNyZWF0ZWQgb3IgbW9kaWZpZWQgb24gdGhlIEZpcmV3YWxsLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwNjUtcGl4X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA0Mzg2LFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzEwJywgdGltZWZyYW1lOiAnMjQwJywgaWZfbWF0Y2hlZF9zaWQ6ICc0MzM0Jywgc2FtZV9zb3VyY2VfaXA6ICcnIH0sXG4gICAgcGNpX2RzczogWycxMS40JywgJzEwLjIuNCcsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc3LjEnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnU0kuNCcsICdBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDcmVkZW50aWFsIEFjY2VzcycsICdJbml0aWFsIEFjY2VzcyddLFxuICAgICAgaWQ6IFsnVDExMTAnLCAnVDExMzMnXSxcbiAgICAgIHRlY2huaXF1ZTogWydCcnV0ZSBGb3JjZScsICdFeHRlcm5hbCBSZW1vdGUgU2VydmljZXMnXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydhdXRoZW50aWNhdGlvbl9mYWlsdXJlcycsICdzeXNsb2cnLCAncGl4J10sXG4gICAgZGVzY3JpcHRpb246ICdQSVg6IE11bHRpcGxlIEFBQSAoVlBOKSBhdXRoZW50aWNhdGlvbiBmYWlsdXJlcy4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDcwLW5ldHNjcmVlbmZ3X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA0NTA1LFxuICAgIGxldmVsOiAxMSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQ1MDMnLCBpZDogJ14wMDAyNycgfSxcbiAgICBwY2lfZHNzOiBbJzEuNCcsICcxMC42LjEnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYS4xJywgJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NDLjcnLCAnQVUuNiddLFxuICAgIHRzYzogWydDQzYuNycsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbXBhY3QnXSwgaWQ6IFsnVDE0ODUnXSwgdGVjaG5pcXVlOiBbJ0RhdGEgRGVzdHJ1Y3Rpb24nXSB9LFxuICAgIGdyb3VwczogWydzZXJ2aWNlX2F2YWlsYWJpbGl0eScsICduZXRzY3JlZW5mdyddLFxuICAgIGRlc2NyaXB0aW9uOiAnTmV0c2NyZWVuIEVyYXNlIHNlcXVlbmNlIHN0YXJ0ZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA3MC1uZXRzY3JlZW5md19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNDUwNixcbiAgICBsZXZlbDogOCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzQ1MDEnLCBpZDogJ14wMDAwMicgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNScsICcxMC4yLjInXSxcbiAgICBncGcxMzogWyc3LjgnXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43JywgJ0FDLjYnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDEwNzgnXSwgdGVjaG5pcXVlOiBbJ1ZhbGlkIEFjY291bnRzJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fc3VjY2VzcycsICduZXRzY3JlZW5mdyddLFxuICAgIGRlc2NyaXB0aW9uOiAnTmV0c2NyZWVuIGZpcmV3YWxsOiBTdWNjZXNzZnVsbCBhZG1pbiBsb2dpbicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwNzAtbmV0c2NyZWVuZndfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQ1MDcsXG4gICAgbGV2ZWw6IDgsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0NTAyJywgaWQ6ICdeMDA1MTUnIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjUnLCAnMTAuMi4yJ10sXG4gICAgZ3BnMTM6IFsnNy44J10sXG4gICAgZ2RwcjogWydJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNycsICdBQy42J10sXG4gICAgdHNjOiBbJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0luaXRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMDc4J10sIHRlY2huaXF1ZTogWydWYWxpZCBBY2NvdW50cyddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLCAnbmV0c2NyZWVuZncnXSxcbiAgICBkZXNjcmlwdGlvbjogJ05ldHNjcmVlbiBmaXJld2FsbDogU3VjY2Vzc2Z1bGwgYWRtaW4gbG9naW4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDcwLW5ldHNjcmVlbmZ3X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA0NTA5LFxuICAgIGxldmVsOiA4LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNDUwNCcsIGlkOiAnXjAwNzY3JyB9LFxuICAgIHBjaV9kc3M6IFsnMS4xLjEnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmEuMSddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0NNLjMnLCAnQ00uNSddLFxuICAgIHRzYzogWydDQzguMSddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydEZWZlbnNlIEV2YXNpb24nXSwgaWQ6IFsnVDEwODknXSwgdGVjaG5pcXVlOiBbJ0Rpc2FibGluZyBTZWN1cml0eSBUb29scyddIH0sXG4gICAgZ3JvdXBzOiBbJ2NvbmZpZ19jaGFuZ2VkJywgJ25ldHNjcmVlbmZ3J10sXG4gICAgZGVzY3JpcHRpb246ICdOZXRzY3JlZW4gZmlyZXdhbGw6IGNvbmZpZ3VyYXRpb24gY2hhbmdlZC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDcwLW5ldHNjcmVlbmZ3X3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA0NTUwLFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBmcmVxdWVuY3k6ICc2JyxcbiAgICAgIHRpbWVmcmFtZTogJzE4MCcsXG4gICAgICBpZ25vcmU6ICc2MCcsXG4gICAgICBpZl9tYXRjaGVkX3NpZDogJzQ1MDMnLFxuICAgICAgc2FtZV9zb3VyY2VfaXA6ICcnLFxuICAgIH0sXG4gICAgcGNpX2RzczogWycxLjQnLCAnMTAuNi4xJywgJzExLjQnXSxcbiAgICBncGcxMzogWyc0LjEnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYS4xJywgJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NDLjcnLCAnQVUuNicsICdTSS40J10sXG4gICAgdHNjOiBbJ0NDNi43JywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNi4xJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWyduZXRzY3JlZW5mdyddLFxuICAgIGRlc2NyaXB0aW9uOiAnTmV0c2NyZWVuIGZpcmV3YWxsOiBNdWx0aXBsZSBjcml0aWNhbCBtZXNzYWdlcyBmcm9tIHNhbWUgc291cmNlIElQLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwNzAtbmV0c2NyZWVuZndfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQ1NTEsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnOCcsIHRpbWVmcmFtZTogJzE4MCcsIGlnbm9yZTogJzYwJywgaWZfbWF0Y2hlZF9zaWQ6ICc0NTAzJyB9LFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbXBhY3QnXSwgaWQ6IFsnVDE0OTknXSwgdGVjaG5pcXVlOiBbJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10gfSxcbiAgICBncm91cHM6IFsnbmV0c2NyZWVuZncnXSxcbiAgICBkZXNjcmlwdGlvbjogJ05ldHNjcmVlbiBmaXJld2FsbDogTXVsdGlwbGUgY3JpdGljYWwgbWVzc2FnZXMuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA3NS1jaXNjby1pb3NfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQ3MjIsXG4gICAgbGV2ZWw6IDMsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0NzE1JywgaWQ6ICdeJVNFQ19MT0dJTi01LUxPR0lOX1NVQ0NFU1MnIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjUnXSxcbiAgICBncGcxMzogWyczLjYnXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0luaXRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMDc4J10sIHRlY2huaXF1ZTogWydWYWxpZCBBY2NvdW50cyddIH0sXG4gICAgZ3JvdXBzOiBbJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLCAnc3lzbG9nJywgJ2Npc2NvX2lvcyddLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2lzY28gSU9TOiBTdWNjZXNzZnVsIGxvZ2luIHRvIHRoZSByb3V0ZXIuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA4MC1zb25pY3dhbGxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQ4MTAsXG4gICAgbGV2ZWw6IDMsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc0ODA2JywgaWQ6ICdeMjM2JCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzMuNiddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDEwNzgnXSwgdGVjaG5pcXVlOiBbJ1ZhbGlkIEFjY291bnRzJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fc3VjY2VzcycsICdzeXNsb2cnLCAnc29uaWN3YWxsJ10sXG4gICAgZGVzY3JpcHRpb246ICdTb25pY1dhbGw6IEZpcmV3YWxsIGFkbWluaXN0cmF0b3IgbG9naW4uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA4MC1zb25pY3dhbGxfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDQ4NTEsXG4gICAgbGV2ZWw6IDEwLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgZnJlcXVlbmN5OiAnOCcsIHRpbWVmcmFtZTogJzEyMCcsIGlnbm9yZTogJzYwJywgaWZfbWF0Y2hlZF9zaWQ6ICc0ODAzJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJ10sXG4gICAgZ3BnMTM6IFsnMy41J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWydzZXJ2aWNlX2F2YWlsYWJpbGl0eScsICdzeXNsb2cnLCAnc29uaWN3YWxsJ10sXG4gICAgZGVzY3JpcHRpb246ICdTb25pY1dhbGw6IE11bHRpcGxlIGZpcmV3YWxsIGVycm9yIG1lc3NhZ2VzLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1MTAzLFxuICAgIGxldmVsOiA5LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTEwMCcsIG1hdGNoOiAnT3ZlcnNpemVkIHBhY2tldCByZWNlaXZlZCBmcm9tJyB9LFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTQ5OSddLCB0ZWNobmlxdWU6IFsnRW5kcG9pbnQgRGVuaWFsIG9mIFNlcnZpY2UnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAnbGludXhrZXJuZWwnXSxcbiAgICBkZXNjcmlwdGlvbjogJ0Vycm9yIG1lc3NhZ2UgZnJvbSB0aGUga2VybmVsLiBQaW5nIG9mIGRlYXRoIGF0dGFjay4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTEwNCxcbiAgICBsZXZlbDogOCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBpZl9zaWQ6ICc1MTAwJyxcbiAgICAgIHJlZ2V4OiBbJ1Byb21pc2N1b3VzIG1vZGUgZW5hYmxlZHwnLCAnZGV2aWNlIFMrIGVudGVyZWQgcHJvbWlzY3VvdXMgbW9kZSddLFxuICAgIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnLCAnMTEuNCddLFxuICAgIGdwZzEzOiBbJzQuMTMnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjYnLCAnU0kuNCddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMycsICdDQzYuMScsICdDQzYuOCddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydEaXNjb3ZlcnknXSwgaWQ6IFsnVDEwNDAnXSwgdGVjaG5pcXVlOiBbJ05ldHdvcmsgU25pZmZpbmcnXSB9LFxuICAgIGdyb3VwczogWydwcm9taXNjJywgJ3N5c2xvZycsICdsaW51eGtlcm5lbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnSW50ZXJmYWNlIGVudGVyZWQgaW4gcHJvbWlzY3VvdXMoc25pZmZpbmcpIG1vZGUuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDUxMDgsXG4gICAgbGV2ZWw6IDEyLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTEwMCcsIG1hdGNoOiAnT3V0IG9mIE1lbW9yeTogJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuNi4xJ10sXG4gICAgZ3BnMTM6IFsnNC4xMiddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuNiddLFxuICAgIHRzYzogWydDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbXBhY3QnXSwgaWQ6IFsnVDE0OTknXSwgdGVjaG5pcXVlOiBbJ0VuZHBvaW50IERlbmlhbCBvZiBTZXJ2aWNlJ10gfSxcbiAgICBncm91cHM6IFsnc2VydmljZV9hdmFpbGFiaWxpdHknLCAnc3lzbG9nJywgJ2xpbnV4a2VybmVsJ10sXG4gICAgZGVzY3JpcHRpb246ICdTeXN0ZW0gcnVubmluZyBvdXQgb2YgbWVtb3J5LiBBdmFpbGFiaWxpdHkgb2YgdGhlIHN5c3RlbSBpcyBpbiByaXNrLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1MTEzLFxuICAgIGxldmVsOiA3LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTEwMCcsIG1hdGNoOiAnS2VybmVsIGxvZyBkYWVtb24gdGVybWluYXRpbmcnIH0sXG4gICAgcGNpX2RzczogWycxMC42LjEnXSxcbiAgICBncGcxMzogWyc0LjE0J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS42J10sXG4gICAgdHNjOiBbJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0ltcGFjdCddLCBpZDogWydUMTUyOSddLCB0ZWNobmlxdWU6IFsnU3lzdGVtIFNodXRkb3duL1JlYm9vdCddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c3RlbV9zaHV0ZG93bicsICdzeXNsb2cnLCAnbGludXhrZXJuZWwnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1N5c3RlbSBpcyBzaHV0dGluZyBkb3duLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1MTMyLFxuICAgIGxldmVsOiAxMSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzUxMDAnLCBtYXRjaDogJ21vZHVsZSB2ZXJpZmljYXRpb24gZmFpbGVkJyB9LFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQZXJzaXN0ZW5jZSddLCBpZDogWydUMTIxNSddLCB0ZWNobmlxdWU6IFsnS2VybmVsIE1vZHVsZXMgYW5kIEV4dGVuc2lvbnMnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAnbGludXhrZXJuZWwnXSxcbiAgICBkZXNjcmlwdGlvbjogJ1Vuc2lnbmVkIGtlcm5lbCBtb2R1bGUgd2FzIGxvYWRlZCcsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwMjAtc3lzbG9nX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1MTMzLFxuICAgIGxldmVsOiAxMSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzUxMDAnLCBtYXRjaDogJ1BLQ1MjNyBzaWduYXR1cmUgbm90IHNpZ25lZCB3aXRoIGEgdHJ1c3RlZCBrZXknIH0sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ1BlcnNpc3RlbmNlJ10sIGlkOiBbJ1QxMjE1J10sIHRlY2huaXF1ZTogWydLZXJuZWwgTW9kdWxlcyBhbmQgRXh0ZW5zaW9ucyddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdsaW51eGtlcm5lbCddLFxuICAgIGRlc2NyaXB0aW9uOiAnU2lnbmVkIGJ1dCB1bnRydXN0ZWQga2VybmVsIG1vZHVsZSB3YXMgbG9hZGVkJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDUzMDIsXG4gICAgbGV2ZWw6IDksXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1MzAxJywgdXNlcjogJ15yb290JyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuMi40JywgJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuOCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJywgJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJywgJ0NDNy40J10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ1ByaXZpbGVnZSBFc2NhbGF0aW9uJ10sIGlkOiBbJ1QxMTY5J10sIHRlY2huaXF1ZTogWydTdWRvJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fZmFpbGVkJywgJ3N5c2xvZycsICdzdSddLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlciBtaXNzZWQgdGhlIHBhc3N3b3JkIHRvIGNoYW5nZSBVSUQgdG8gcm9vdC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTMwMyxcbiAgICBsZXZlbDogMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBpZl9zaWQ6ICc1MzAwJyxcbiAgICAgIHJlZ2V4OiBbXG4gICAgICAgIFwic2Vzc2lvbiBvcGVuZWQgZm9yIHVzZXIgcm9vdHxeJ3N1IHJvb3QnfFwiLFxuICAgICAgICAnXisgUysgUytwcm9vdCR8XlMrIHRvIHJvb3Qgb258XlNVIFMrIFMrICsgUysgUystcm9vdCQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHBjaV9kc3M6IFsnMTAuMi41J10sXG4gICAgZ3BnMTM6IFsnNy42JywgJzcuOCcsICc3LjknXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbml0aWFsIEFjY2VzcyddLCBpZDogWydUMTA3OCddLCB0ZWNobmlxdWU6IFsnVmFsaWQgQWNjb3VudHMnXSB9LFxuICAgIGdyb3VwczogWydhdXRoZW50aWNhdGlvbl9zdWNjZXNzJywgJ3N5c2xvZycsICdzdSddLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlciBzdWNjZXNzZnVsbHkgY2hhbmdlZCBVSUQgdG8gcm9vdC4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTMwNCxcbiAgICBsZXZlbDogMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7XG4gICAgICBpZl9zaWQ6ICc1MzAwJyxcbiAgICAgIHJlZ2V4OiBbJ3Nlc3Npb24gb3BlbmVkIGZvciB1c2VyfHN1Y2NlZWRlZCBmb3J8JywgJ14rfF5TKyB0byB8XlNVIFMrIFMrICsgJ10sXG4gICAgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNSddLFxuICAgIGdwZzEzOiBbJzcuNicsICc3LjgnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydJbml0aWFsIEFjY2VzcyddLCBpZDogWydUMTA3OCddLCB0ZWNobmlxdWU6IFsnVmFsaWQgQWNjb3VudHMnXSB9LFxuICAgIGdyb3VwczogWydhdXRoZW50aWNhdGlvbl9zdWNjZXNzJywgJ3N5c2xvZycsICdzdSddLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlciBzdWNjZXNzZnVsbHkgY2hhbmdlZCBVSUQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU0MDEsXG4gICAgbGV2ZWw6IDUsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1NDAwJywgbWF0Y2g6ICdpbmNvcnJlY3QgcGFzc3dvcmQgYXR0ZW1wdCcgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc3LjgnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQcml2aWxlZ2UgRXNjYWxhdGlvbiddLCBpZDogWydUMTE2OSddLCB0ZWNobmlxdWU6IFsnU3VkbyddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdzdWRvJ10sXG4gICAgZGVzY3JpcHRpb246ICdGYWlsZWQgYXR0ZW1wdCB0byBydW4gc3Vkby4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTQwMixcbiAgICBsZXZlbDogMyxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzU0MDAnLCByZWdleDogJyA7IFVTRVI9cm9vdCA7IENPTU1BTkQ9fCA7IFVTRVI9cm9vdCA7IFRTSUQ9UysgOyBDT01NQU5EPScgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNScsICcxMC4yLjInXSxcbiAgICBncGcxMzogWyc3LjYnLCAnNy44JywgJzcuMTMnXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43JywgJ0FDLjYnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnUHJpdmlsZWdlIEVzY2FsYXRpb24nXSwgaWQ6IFsnVDExNjknXSwgdGVjaG5pcXVlOiBbJ1N1ZG8nXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAnc3VkbyddLFxuICAgIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBzdWRvIHRvIFJPT1QgZXhlY3V0ZWQuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU0MDMsXG4gICAgbGV2ZWw6IDQsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1NDAwJywgaWZfZnRzOiAnJyB9LFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQcml2aWxlZ2UgRXNjYWxhdGlvbiddLCBpZDogWydUMTE2OSddLCB0ZWNobmlxdWU6IFsnU3VkbyddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdzdWRvJ10sXG4gICAgZGVzY3JpcHRpb246ICdGaXJzdCB0aW1lIHVzZXIgZXhlY3V0ZWQgc3Vkby4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTQwNCxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1NDAxJywgbWF0Y2g6ICczIGluY29ycmVjdCBwYXNzd29yZCBhdHRlbXB0cycgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnXSxcbiAgICBncGcxMzogWyc3LjgnXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCcsICdJVl8zMi4yJ10sXG4gICAgaGlwYWE6IFsnMTY0LjMxMi5iJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnQVUuMTQnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQcml2aWxlZ2UgRXNjYWxhdGlvbiddLCBpZDogWydUMTE2OSddLCB0ZWNobmlxdWU6IFsnU3VkbyddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdzdWRvJ10sXG4gICAgZGVzY3JpcHRpb246ICdUaHJlZSBmYWlsZWQgYXR0ZW1wdHMgdG8gcnVuIHN1ZG8nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDIwLXN5c2xvZ19ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTQwNSxcbiAgICBsZXZlbDogNSxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGlmX3NpZDogJzU0MDAnLCBtYXRjaDogJ3VzZXIgTk9UIGluIHN1ZG9lcnMnIH0sXG4gICAgcGNpX2RzczogWycxMC4yLjInLCAnMTAuMi41J10sXG4gICAgZ3BnMTM6IFsnNy44J10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnLCAnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjYnLCAnQUMuNyddLFxuICAgIHRzYzogWydDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydQcml2aWxlZ2UgRXNjYWxhdGlvbiddLCBpZDogWydUMTE2OSddLCB0ZWNobmlxdWU6IFsnU3VkbyddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdzdWRvJ10sXG4gICAgZGVzY3JpcHRpb246ICdVbmF1dGhvcml6ZWQgdXNlciBhdHRlbXB0ZWQgdG8gdXNlIHN1ZG8uJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDAyMC1zeXNsb2dfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU0MDcsXG4gICAgbGV2ZWw6IDMsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1NDAwJywgcmVnZXg6ICcgOyBVU0VSPVMrIDsgQ09NTUFORD18IDsgVVNFUj1TKyA7IFRTSUQ9UysgOyBDT01NQU5EPScgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNScsICcxMC4yLjInXSxcbiAgICBncGcxMzogWyc3LjYnLCAnNy44JywgJzcuMTMnXSxcbiAgICBnZHByOiBbJ0lWXzMyLjInXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnUHJpdmlsZWdlIEVzY2FsYXRpb24nXSwgaWQ6IFsnVDExNjknXSwgdGVjaG5pcXVlOiBbJ1N1ZG8nXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAnc3VkbyddLFxuICAgIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBzdWRvIGV4ZWN1dGVkLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwODUtcGFtX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NTAxLFxuICAgIGxldmVsOiAzLFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTUwMCcsIG1hdGNoOiAnc2Vzc2lvbiBvcGVuZWQgZm9yIHVzZXIgJyB9LFxuICAgIHBjaV9kc3M6IFsnMTAuMi41J10sXG4gICAgZ3BnMTM6IFsnNy44JywgJzcuOSddLFxuICAgIGdkcHI6IFsnSVZfMzIuMiddLFxuICAgIGhpcGFhOiBbJzE2NC4zMTIuYiddLFxuICAgIG5pc3RfODAwXzUzOiBbJ0FVLjE0JywgJ0FDLjcnXSxcbiAgICB0c2M6IFsnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDEwNzgnXSwgdGVjaG5pcXVlOiBbJ1ZhbGlkIEFjY291bnRzJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fc3VjY2VzcycsICdwYW0nLCAnc3lzbG9nJ10sXG4gICAgZGVzY3JpcHRpb246ICdQQU06IExvZ2luIHNlc3Npb24gb3BlbmVkLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwODUtcGFtX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NTUxLFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzgnLCB0aW1lZnJhbWU6ICcxODAnLCBpZl9tYXRjaGVkX3NpZDogJzU1MDMnLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzEwLjIuNCcsICcxMC4yLjUnLCAnMTEuNCddLFxuICAgIGdwZzEzOiBbJzcuOCddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJywgJ0lWXzMyLjInXSxcbiAgICBoaXBhYTogWycxNjQuMzEyLmInXSxcbiAgICBuaXN0XzgwMF81MzogWydBVS4xNCcsICdBQy43JywgJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ3JlZGVudGlhbCBBY2Nlc3MnXSwgaWQ6IFsnVDExMTAnXSwgdGVjaG5pcXVlOiBbJ0JydXRlIEZvcmNlJ10gfSxcbiAgICBncm91cHM6IFsnYXV0aGVudGljYXRpb25fZmFpbHVyZXMnLCAncGFtJywgJ3N5c2xvZyddLFxuICAgIGRlc2NyaXB0aW9uOiAnUEFNOiBNdWx0aXBsZSBmYWlsZWQgbG9naW5zIGluIGEgc21hbGwgcGVyaW9kIG9mIHRpbWUuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA5MC10ZWxuZXRkX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NjAxLFxuICAgIGxldmVsOiA1LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTYwMCcsIG1hdGNoOiAncmVmdXNlZCBjb25uZWN0IGZyb20gJyB9LFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydDb21tYW5kIGFuZCBDb250cm9sJ10sXG4gICAgICBpZDogWydUMTA5NSddLFxuICAgICAgdGVjaG5pcXVlOiBbJ1N0YW5kYXJkIE5vbi1BcHBsaWNhdGlvbiBMYXllciBQcm90b2NvbCddLFxuICAgIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICd0ZWxuZXRkJ10sXG4gICAgZGVzY3JpcHRpb246ICd0ZWxuZXRkOiBDb25uZWN0aW9uIHJlZnVzZWQgYnkgVENQIFdyYXBwZXJzLicsXG4gIH0sXG4gIHtcbiAgICBmaWxlbmFtZTogJzAwOTAtdGVsbmV0ZF9ydWxlcy54bWwnLFxuICAgIHJlbGF0aXZlX2Rpcm5hbWU6ICdydWxlc2V0L3J1bGVzJyxcbiAgICBpZDogNTYzMSxcbiAgICBsZXZlbDogMTAsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBmcmVxdWVuY3k6ICc2JywgdGltZWZyYW1lOiAnMTIwJywgaWZfbWF0Y2hlZF9zaWQ6ICc1NjAyJywgc2FtZV9zb3VyY2VfaXA6ICcnIH0sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnLCAnSVZfMzIuMiddLFxuICAgIG1pdHJlOiB7IHRhY3RpYzogWydDcmVkZW50aWFsIEFjY2VzcyddLCBpZDogWydUMTExMCddLCB0ZWNobmlxdWU6IFsnQnJ1dGUgRm9yY2UnXSB9LFxuICAgIGdyb3VwczogWydzeXNsb2cnLCAndGVsbmV0ZCddLFxuICAgIGRlc2NyaXB0aW9uOiAndGVsbmV0ZDogTXVsdGlwbGUgY29ubmVjdGlvbiBhdHRlbXB0cyBmcm9tIHNhbWUgc291cmNlIChwb3NzaWJsZSBzY2FuKS4nLFxuICB9LFxuICB7XG4gICAgZmlsZW5hbWU6ICcwMDk1LXNzaGRfcnVsZXMueG1sJyxcbiAgICByZWxhdGl2ZV9kaXJuYW1lOiAncnVsZXNldC9ydWxlcycsXG4gICAgaWQ6IDU3MDEsXG4gICAgbGV2ZWw6IDgsXG4gICAgc3RhdHVzOiAnZW5hYmxlZCcsXG4gICAgZGV0YWlsczogeyBpZl9zaWQ6ICc1NzAwJywgbWF0Y2g6ICdCYWQgcHJvdG9jb2wgdmVyc2lvbiBpZGVudGlmaWNhdGlvbicgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogWydJbml0aWFsIEFjY2VzcyddLFxuICAgICAgaWQ6IFsnVDExOTAnXSxcbiAgICAgIHRlY2huaXF1ZTogWydFeHBsb2l0IFB1YmxpYy1GYWNpbmcgQXBwbGljYXRpb24nXSxcbiAgICB9LFxuICAgIGdyb3VwczogWydyZWNvbicsICdzeXNsb2cnLCAnc3NoZCddLFxuICAgIGRlc2NyaXB0aW9uOiAnc3NoZDogUG9zc2libGUgYXR0YWNrIG9uIHRoZSBzc2ggc2VydmVyIChvciB2ZXJzaW9uIGdhdGhlcmluZykuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA5NS1zc2hkX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NzAzLFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzYnLCB0aW1lZnJhbWU6ICczNjAnLCBpZl9tYXRjaGVkX3NpZDogJzU3MDInLCBzYW1lX3NvdXJjZV9pcDogJycgfSxcbiAgICBwY2lfZHNzOiBbJzExLjQnXSxcbiAgICBncGcxMzogWyc0LjEyJ10sXG4gICAgZ2RwcjogWydJVl8zNS43LmQnXSxcbiAgICBuaXN0XzgwMF81MzogWydTSS40J10sXG4gICAgdHNjOiBbJ0NDNi4xJywgJ0NDNi44JywgJ0NDNy4yJywgJ0NDNy4zJ10sXG4gICAgbWl0cmU6IHsgdGFjdGljOiBbJ0NyZWRlbnRpYWwgQWNjZXNzJ10sIGlkOiBbJ1QxMTEwJ10sIHRlY2huaXF1ZTogWydCcnV0ZSBGb3JjZSddIH0sXG4gICAgZ3JvdXBzOiBbJ3N5c2xvZycsICdzc2hkJ10sXG4gICAgZGVzY3JpcHRpb246ICdzc2hkOiBQb3NzaWJsZSBicmVha2luIGF0dGVtcHQgKGhpZ2ggbnVtYmVyIG9mIHJldmVyc2UgbG9va3VwIGVycm9ycykuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA5NS1zc2hkX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NzA1LFxuICAgIGxldmVsOiAxMCxcbiAgICBzdGF0dXM6ICdlbmFibGVkJyxcbiAgICBkZXRhaWxzOiB7IGZyZXF1ZW5jeTogJzYnLCB0aW1lZnJhbWU6ICczNjAnLCBpZl9tYXRjaGVkX3NpZDogJzU3MDQnIH0sXG4gICAgcGNpX2RzczogWycxMS40J10sXG4gICAgZ3BnMTM6IFsnNC4xMiddLFxuICAgIGdkcHI6IFsnSVZfMzUuNy5kJ10sXG4gICAgbmlzdF84MDBfNTM6IFsnU0kuNCddLFxuICAgIHRzYzogWydDQzYuMScsICdDQzYuOCcsICdDQzcuMicsICdDQzcuMyddLFxuICAgIG1pdHJlOiB7XG4gICAgICB0YWN0aWM6IFsnSW5pdGlhbCBBY2Nlc3MnLCAnQ3JlZGVudGlhbCBBY2Nlc3MnXSxcbiAgICAgIGlkOiBbJ1QxMTkwJywgJ1QxMTEwJ10sXG4gICAgICB0ZWNobmlxdWU6IFsnRXhwbG9pdCBQdWJsaWMtRmFjaW5nIEFwcGxpY2F0aW9uJywgJ0JydXRlIEZvcmNlJ10sXG4gICAgfSxcbiAgICBncm91cHM6IFsnc3lzbG9nJywgJ3NzaGQnXSxcbiAgICBkZXNjcmlwdGlvbjogJ3NzaGQ6IFBvc3NpYmxlIHNjYW4gb3IgYnJlYWtpbiBhdHRlbXB0IChoaWdoIG51bWJlciBvZiBsb2dpbiB0aW1lb3V0cykuJyxcbiAgfSxcbiAge1xuICAgIGZpbGVuYW1lOiAnMDA5NS1zc2hkX3J1bGVzLnhtbCcsXG4gICAgcmVsYXRpdmVfZGlybmFtZTogJ3J1bGVzZXQvcnVsZXMnLFxuICAgIGlkOiA1NzA2LFxuICAgIGxldmVsOiA2LFxuICAgIHN0YXR1czogJ2VuYWJsZWQnLFxuICAgIGRldGFpbHM6IHsgaWZfc2lkOiAnNTcwMCcsIG1hdGNoOiAnRGlkIG5vdCByZWNlaXZlIGlkZW50aWZpY2F0aW9uIHN0cmluZyBmcm9tJyB9LFxuICAgIHBjaV9kc3M6IFsnMTEuNCddLFxuICAgIGdwZzEzOiBbJzQuMTInXSxcbiAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgIG5pc3RfODAwXzUzOiBbJ1NJLjQnXSxcbiAgICB0c2M6IFsnQ0M2LjEnLCAnQ0M2LjgnLCAnQ0M3LjInLCAnQ0M3LjMnXSxcbiAgICBtaXRyZTogeyB0YWN0aWM6IFsnQ29tbWFuZCBhbmQgQ29udHJvbCddLCBpZDogWydUMTA0MyddLCB0ZWNobmlxdWU6IFsnQ29tbW9ubHkgVXNlZCBQb3J0J10gfSxcbiAgICBncm91cHM6IFsncmVjb24nLCAnc3lzbG9nJywgJ3NzaGQnXSxcbiAgICBkZXNjcmlwdGlvbjogJ3NzaGQ6IGluc2VjdXJlIGNvbm5lY3Rpb24gYXR0ZW1wdCAoc2NhbikuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhcnJheUxvY2F0aW9uID0gWydFdmVudENoYW5uZWwnLCAnL3Zhci9sb2cvYXV0aC5sb2cnLCAnL3Zhci9sb2cvc2VjdXJlJ107XG4iXX0=