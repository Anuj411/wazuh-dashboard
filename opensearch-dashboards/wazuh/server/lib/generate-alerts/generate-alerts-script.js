"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAlert = generateAlert;
exports.generateAlerts = generateAlerts;

var _common = require("./sample-data/common");

var _regulatoryCompliance = require("./sample-data/regulatory-compliance");

var Audit = _interopRequireWildcard(require("./sample-data/audit"));

var Authentication = _interopRequireWildcard(require("./sample-data/authentication"));

var AWS = _interopRequireWildcard(require("./sample-data/aws"));

var IntegrityMonitoring = _interopRequireWildcard(require("./sample-data/integrity-monitoring"));

var CISCAT = _interopRequireWildcard(require("./sample-data/ciscat"));

var GCP = _interopRequireWildcard(require("./sample-data/gcp"));

var Docker = _interopRequireWildcard(require("./sample-data/docker"));

var Mitre = _interopRequireWildcard(require("./sample-data/mitre"));

var Osquery = _interopRequireWildcard(require("./sample-data/osquery"));

var OpenSCAP = _interopRequireWildcard(require("./sample-data/openscap"));

var PolicyMonitoring = _interopRequireWildcard(require("./sample-data/policy-monitoring"));

var Virustotal = _interopRequireWildcard(require("./sample-data/virustotal"));

var Vulnerability = _interopRequireWildcard(require("./sample-data/vulnerabilities"));

var SSH = _interopRequireWildcard(require("./sample-data/ssh"));

var Apache = _interopRequireWildcard(require("./sample-data/apache"));

var Web = _interopRequireWildcard(require("./sample-data/web"));

var GitHub = _interopRequireWildcard(require("./sample-data/github"));

var Office = _interopRequireWildcard(require("./sample-data/office"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Wazuh app - Script to generate sample alerts
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// General
//Alert
const alertIDMax = 6000; // Rule

const ruleDescription = ['Sample alert 1', 'Sample alert 2', 'Sample alert 3', 'Sample alert 4', 'Sample alert 5'];
const ruleMaxLevel = 14;
/**
 * Generate a alert
 * @param {any} params - params to configure the alert
 * @param {boolean} params.aws - if true, set aws fields
 * @param {boolean} params.audit - if true, set System Auditing fields
 * @param {boolean} params.office - if true, set office fields
 * @param {boolean} params.ciscat - if true, set CIS-CAT fields
 * @param {boolean} params.gcp - if true, set GCP fields
 * @param {boolean} params.docker - if true, set Docker fields
 * @param {boolean} params.mitre - if true, set Mitre att&ck fields
 * @param {boolean} params.openscap - if true, set OpenSCAP fields
 * @param {boolean} params.osquery - if true, set Osquery fields
 * @param {boolean} params.rootcheck - if true, set Policy monitoring fields
 * @param {boolean} params.syscheck - if true, set integrity monitoring fields
 * @param {boolean} params.virustotal - if true, set VirusTotal fields
 * @param {boolean} params.vulnerabilities - if true, set vulnerabilities fields
 * @param {boolean} params.pci_dss - if true, set pci_dss fields
 * @param {boolean} params.gdpr - if true, set gdpr fields
 * @param {boolean} params.gpg13 - if true, set gpg13 fields
 * @param {boolean} params.hipaa - if true, set hipaa fields
 * @param {boolean} params.nist_800_53 - if true, set nist_800_53 fields
 * @param {boolean} params.nist_800_53 - if true, set nist_800_53 fields
 * @param {boolean} params.win_authentication_failed - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_win_authentication_failed - probability to add win_authentication_failed to rule.groups. Example: 20 will be 20% of probability to add this to rule.groups
 * @param {boolean} params.authentication_failed - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_authentication_failed - probability to add authentication_failed to rule.groups
 * @param {boolean} params.authentication_failures - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_authentication_failures - probability to add authentication_failures to rule.groups
 * @return {any} - Alert generated
 */

function generateAlert(params) {
  let alert = {
    ['@sampledata']: true,
    timestamp: '2020-01-27T11:08:47.777+0000',
    rule: {
      level: 3,
      description: 'Sample alert',
      id: '5502',
      mail: false,
      groups: []
    },
    agent: {
      id: '000',
      name: 'master'
    },
    manager: {
      name: 'master'
    },
    cluster: {
      name: 'wazuh'
    },
    id: '1580123327.49031',
    predecoder: {},
    decoder: {},
    data: {},
    location: ''
  };
  alert.agent = (0, _common.randomArrayItem)(_common.Agents);
  alert.rule.description = (0, _common.randomArrayItem)(ruleDescription);
  alert.rule.id = `${randomIntervalInteger(1, alertIDMax)}`;
  alert.rule.level = randomIntervalInteger(1, ruleMaxLevel);
  alert.timestamp = randomDate();

  if (params.manager) {
    if (params.manager.name) {
      alert.manager.name = params.manager.name;
    }
  }

  if (params.cluster) {
    if (params.cluster.name) {
      alert.cluster.name = params.cluster.name;
    }

    if (params.cluster.node) {
      alert.cluster.node = params.cluster.node;
    }
  }

  if (params.aws) {
    let randomType = (0, _common.randomArrayItem)(['guarddutyPortProbe', 'apiCall', 'networkConnection', 'iamPolicyGrantGlobal']);
    const beforeDate = new Date(new Date(alert.timestamp) - 3 * 24 * 60 * 60 * 1000);

    switch (randomType) {
      case 'guarddutyPortProbe':
        {
          const typeAlert = AWS.guarddutyPortProbe;
          alert.data = { ...typeAlert.data
          };
          alert.data.integration = 'aws';
          alert.data.aws.region = (0, _common.randomArrayItem)(AWS.region);
          alert.data.aws.resource.instanceDetails = { ...(0, _common.randomArrayItem)(AWS.instanceDetails)
          };
          alert.data.aws.resource.instanceDetails.iamInstanceProfile.arn = interpolateAlertProps(typeAlert.data.aws.resource.instanceDetails.iamInstanceProfile.arn, alert);
          alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
          alert.data.aws.accountId = (0, _common.randomArrayItem)(AWS.accountId);
          alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.action.portProbeAction.portProbeDetails.remoteIpDetails = { ...(0, _common.randomArrayItem)(AWS.remoteIpDetails)
          };
          alert.data.aws.log_info = {
            s3bucket: (0, _common.randomArrayItem)(AWS.buckets),
            log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`
          };
          alert.data.aws.service.count = `${randomIntervalInteger(400, 4000)}`;
          alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.rule = { ...typeAlert.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 50);
          alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);
          alert.decoder = { ...typeAlert.decoder
          };
          alert.location = typeAlert.location;
          break;
        }

      case 'apiCall':
        {
          const typeAlert = AWS.apiCall;
          alert.data = { ...typeAlert.data
          };
          alert.data.integration = 'aws';
          alert.data.aws.region = (0, _common.randomArrayItem)(AWS.region);
          alert.data.aws.resource.accessKeyDetails.userName = (0, _common.randomArrayItem)(_common.Users);
          alert.data.aws.log_info = {
            s3bucket: (0, _common.randomArrayItem)(AWS.buckets),
            log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`
          };
          alert.data.aws.accountId = (0, _common.randomArrayItem)(AWS.accountId);
          alert.data.aws.service.action.awsApiCallAction.remoteIpDetails = { ...(0, _common.randomArrayItem)(AWS.remoteIpDetails)
          };
          alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
          alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
          alert.data.aws.description = interpolateAlertProps(alert.data.aws.description, alert);
          const count = `${randomIntervalInteger(400, 4000)}`;
          alert.data.aws.service.additionalInfo.recentApiCalls.count = count;
          alert.data.aws.service.count = count;
          alert.rule = { ...typeAlert.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 50);
          alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);
          alert.decoder = { ...typeAlert.decoder
          };
          alert.location = typeAlert.location;
          break;
        }

      case 'networkConnection':
        {
          const typeAlert = AWS.networkConnection;
          alert.data = { ...typeAlert.data
          };
          alert.data.integration = 'aws';
          alert.data.aws.region = (0, _common.randomArrayItem)(AWS.region);
          alert.data.aws.resource.instanceDetails = { ...(0, _common.randomArrayItem)(AWS.instanceDetails)
          };
          alert.data.aws.log_info = {
            s3bucket: (0, _common.randomArrayItem)(AWS.buckets),
            log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`
          };
          alert.data.aws.description = interpolateAlertProps(alert.data.aws.description, alert);
          alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
          alert.data.aws.accountId = (0, _common.randomArrayItem)(AWS.accountId);
          alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.action.networkConnectionAction.remoteIpDetails = { ...(0, _common.randomArrayItem)(AWS.remoteIpDetails)
          };
          alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
          alert.data.aws.service.additionalInfo = {
            localPort: `${(0, _common.randomArrayItem)(_common.Ports)}`,
            outBytes: `${randomIntervalInteger(1000, 3000)}`,
            inBytes: `${randomIntervalInteger(1000, 10000)}`,
            unusual: `${randomIntervalInteger(1000, 10000)}`
          };
          alert.data.aws.service.count = `${randomIntervalInteger(400, 4000)}`;
          alert.data.aws.service.action.networkConnectionAction.localIpDetails.ipAddressV4 = alert.data.aws.resource.instanceDetails.networkInterfaces.privateIpAddress;
          alert.data.aws.arn = interpolateAlertProps(typeAlert.data.aws.arn, alert);
          alert.rule = { ...typeAlert.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 50);
          alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);
          alert.decoder = { ...typeAlert.decoder
          };
          alert.location = typeAlert.location;
          break;
        }

      case 'iamPolicyGrantGlobal':
        {
          const typeAlert = AWS.iamPolicyGrantGlobal;
          alert.data = { ...typeAlert.data
          };
          alert.data.integration = 'aws';
          alert.data.aws.region = (0, _common.randomArrayItem)(AWS.region);
          alert.data.aws.summary.Timestamps = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.log_info = {
            s3bucket: (0, _common.randomArrayItem)(AWS.buckets),
            log_file: `macie/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_macie-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s')}-0b1ede94-f399-4e54-8815-1c6587eee3b1//firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`
          };
          alert.data.aws['created-at'] = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
          alert.data.aws.url = interpolateAlertProps(typeAlert.data.aws.url, alert);
          alert.data.aws['alert-arn'] = interpolateAlertProps(typeAlert.data.aws['alert-arn'], alert);
          alert.rule = { ...typeAlert.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 50);
          alert.decoder = { ...typeAlert.decoder
          };
          alert.location = typeAlert.location;
          break;
        }

      default:
        {}
    }

    alert.input = {
      type: 'log'
    };
    alert.GeoLocation = (0, _common.randomArrayItem)(_common.GeoLocation);
  }

  if (params.office) {
    alert.agent = {
      id: '000',
      ip: alert.agent.ip,
      name: alert.agent.name
    };

    if (params.manager && params.manager.name) {
      alert.agent.name = params.manager.name;
    }

    ;
    const beforeDate = new Date(new Date(alert.timestamp) - 3 * 24 * 60 * 60 * 1000);
    const IntraID = (0, _common.randomArrayItem)(Office.arrayUuidOffice);
    const OrgID = (0, _common.randomArrayItem)(Office.arrayUuidOffice);
    const objID = (0, _common.randomArrayItem)(Office.arrayUuidOffice);
    const userKey = (0, _common.randomArrayItem)(Office.arrayUuidOffice);
    const userID = (0, _common.randomArrayItem)(Office.arrayUserId);
    const userType = (0, _common.randomArrayItem)([0, 2, 4]);
    const resultStatus = (0, _common.randomArrayItem)(['Succeeded', 'PartiallySucceeded', 'Failed']);
    const log = (0, _common.randomArrayItem)(Office.arrayLogs);
    const ruleData = Office.officeRules[log.RecordType];
    alert.agent.id = '000';
    alert.rule = ruleData.rule;
    alert.decoder = (0, _common.randomArrayItem)(Office.arrayDecoderOffice);
    alert.GeoLocation = (0, _common.randomArrayItem)(_common.GeoLocation);
    alert.data.integration = 'Office365';
    alert.location = Office.arrayLocationOffice;
    alert.data.office365 = { ...log,
      ...ruleData.data.office365,
      Id: IntraID,
      CreationTime: formatDate(beforeDate, 'Y-M-DTh:m:s.lZ'),
      OrganizationId: OrgID,
      UserType: userType,
      UserKey: userKey,
      ResultStatus: resultStatus,
      ObjectId: objID,
      UserId: userID,
      ClientIP: (0, _common.randomArrayItem)(Office.arrayIp)
    };
  }

  if (params.gcp) {
    alert.rule = (0, _common.randomArrayItem)(GCP.arrayRules);
    alert.data.integration = 'gcp';
    alert.data.gcp = {
      insertId: 'uk1zpe23xcj',
      jsonPayload: {
        authAnswer: GCP.arrayAuthAnswer[Math.floor(GCP.arrayAuthAnswer.length * Math.random())],
        protocol: GCP.arrayProtocol[Math.floor(GCP.arrayProtocol.length * Math.random())],
        queryName: GCP.arrayQueryName[Math.floor(GCP.arrayQueryName.length * Math.random())],
        queryType: GCP.arrayQueryType[Math.floor(GCP.arrayQueryType.length * Math.random())],
        responseCode: GCP.arrayResponseCode[Math.floor(GCP.arrayResponseCode.length * Math.random())],
        sourceIP: GCP.arraySourceIP[Math.floor(GCP.arraySourceIP.length * Math.random())],
        vmInstanceId: '4980113928800839680.000000',
        vmInstanceName: '531339229531.instance-1'
      },
      logName: 'projects/wazuh-dev/logs/dns.googleapis.com%2Fdns_queries',
      receiveTimestamp: '2019-11-11T02:42:05.05853152Z',
      resource: {
        labels: {
          location: GCP.arrayLocation[Math.floor(GCP.arrayLocation.length * Math.random())],
          project_id: GCP.arrayProject[Math.floor(GCP.arrayProject.length * Math.random())],
          source_type: GCP.arraySourceType[Math.floor(GCP.arraySourceType.length * Math.random())],
          target_type: 'external'
        },
        type: GCP.arrayType[Math.floor(GCP.arrayType.length * Math.random())]
      },
      severity: GCP.arraySeverity[Math.floor(GCP.arraySeverity.length * Math.random())],
      timestamp: '2019-11-11T02:42:04.34921449Z'
    };
    alert.GeoLocation = (0, _common.randomArrayItem)(_common.GeoLocation);
  }

  if (params.audit) {
    let dataAudit = (0, _common.randomArrayItem)(Audit.dataAudit);
    alert.data = dataAudit.data;
    alert.data.audit.file ? alert.data.audit.file.name === '' ? alert.data.audit.file.name = (0, _common.randomArrayItem)(Audit.fileName) : null : null;
    alert.rule = dataAudit.rule;
  }

  if (params.ciscat) {
    alert.rule.groups.push('ciscat');
    alert.data.cis = {};
    alert.data.cis.group = (0, _common.randomArrayItem)(CISCAT.group);
    alert.data.cis.fail = randomIntervalInteger(0, 100);
    alert.data.cis.rule_title = (0, _common.randomArrayItem)(CISCAT.ruleTitle);
    alert.data.cis.notchecked = randomIntervalInteger(0, 100);
    alert.data.cis.score = randomIntervalInteger(0, 100);
    alert.data.cis.pass = randomIntervalInteger(0, 100);
    alert.data.cis.timestamp = new Date(randomDate());
    alert.data.cis.error = randomIntervalInteger(0, 1);
    alert.data.cis.benchmark = (0, _common.randomArrayItem)(CISCAT.benchmark);
    alert.data.cis.unknown = randomIntervalInteger(0, 100);
    alert.data.cis.notchecked = randomIntervalInteger(0, 5);
    alert.data.cis.result = (0, _common.randomArrayItem)(CISCAT.result);
  }

  if (params.docker) {
    const dataDocker = (0, _common.randomArrayItem)(Docker.dataDocker);
    alert.data = {};
    alert.data = dataDocker.data;
    alert.rule = dataDocker.rule;
  }

  if (params.mitre) {
    alert.rule = (0, _common.randomArrayItem)(Mitre.arrayMitreRules);
    alert.location = (0, _common.randomArrayItem)(Mitre.arrayLocation);
  }

  if (params.openscap) {
    alert.data = {};
    alert.data.oscap = {};
    const typeAlert = { ...(0, _common.randomArrayItem)(OpenSCAP.data)
    };
    alert.data = { ...typeAlert.data
    };
    alert.rule = { ...typeAlert.rule
    };
    alert.rule.firedtimes = randomIntervalInteger(2, 10);
    alert.input = {
      type: 'log'
    };
    alert.decoder = { ...OpenSCAP.decoder
    };
    alert.location = OpenSCAP.location;

    if (typeAlert.full_log) {
      alert.full_log = interpolateAlertProps(typeAlert.full_log, alert);
    }
  }

  if (params.rootcheck) {
    alert.location = PolicyMonitoring.location;
    alert.decoder = { ...PolicyMonitoring.decoder
    };
    alert.input = {
      type: 'log'
    };
    const alertCategory = (0, _common.randomArrayItem)(['Rootkit', 'Trojan']);

    switch (alertCategory) {
      case 'Rootkit':
        {
          const rootkitCategory = (0, _common.randomArrayItem)(Object.keys(PolicyMonitoring.rootkits));
          const rootkit = (0, _common.randomArrayItem)(PolicyMonitoring.rootkits[rootkitCategory]);
          alert.data = {
            title: interpolateAlertProps(PolicyMonitoring.rootkitsData.data.title, alert, {
              _rootkit_category: rootkitCategory,
              _rootkit_file: rootkit
            })
          };
          alert.rule = { ...PolicyMonitoring.rootkitsData.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 10);
          alert.full_log = alert.data.title;
          break;
        }

      case 'Trojan':
        {
          const trojan = (0, _common.randomArrayItem)(PolicyMonitoring.trojans);
          alert.data = {
            file: trojan.file,
            title: 'Trojaned version of file detected.'
          };
          alert.rule = { ...PolicyMonitoring.trojansData.rule
          };
          alert.rule.firedtimes = randomIntervalInteger(1, 10);
          alert.full_log = interpolateAlertProps(PolicyMonitoring.trojansData.full_log, alert, {
            _trojan_signature: trojan.signature
          });
          break;
        }

      default:
        {}
    }
  }

  if (params.syscheck) {
    alert.rule.groups.push('syscheck');
    alert.syscheck = {};
    alert.syscheck.event = (0, _common.randomArrayItem)(IntegrityMonitoring.events);
    alert.syscheck.path = (0, _common.randomArrayItem)(alert.agent.name === 'Windows' ? IntegrityMonitoring.pathsWindows : IntegrityMonitoring.pathsLinux);
    alert.syscheck.uname_after = (0, _common.randomArrayItem)(_common.Users);
    alert.syscheck.gname_after = 'root';
    alert.syscheck.mtime_after = new Date(randomDate());
    alert.syscheck.size_after = randomIntervalInteger(0, 65);
    alert.syscheck.uid_after = (0, _common.randomArrayItem)(IntegrityMonitoring.uid_after);
    alert.syscheck.gid_after = (0, _common.randomArrayItem)(IntegrityMonitoring.gid_after);
    alert.syscheck.perm_after = 'rw-r--r--';
    alert.syscheck.inode_after = randomIntervalInteger(0, 100000);

    switch (alert.syscheck.event) {
      case 'added':
        alert.rule = IntegrityMonitoring.regulatory[0];
        break;

      case 'modified':
        alert.rule = IntegrityMonitoring.regulatory[1];
        alert.syscheck.mtime_before = new Date(alert.syscheck.mtime_after.getTime() - 1000 * 60);
        alert.syscheck.inode_before = randomIntervalInteger(0, 100000);
        alert.syscheck.sha1_after = (0, _common.randomElements)(40, 'abcdef0123456789');
        alert.syscheck.changed_attributes = [(0, _common.randomArrayItem)(IntegrityMonitoring.attributes)];
        alert.syscheck.md5_after = (0, _common.randomElements)(32, 'abcdef0123456789');
        alert.syscheck.sha256_after = (0, _common.randomElements)(60, 'abcdef0123456789');
        break;

      case 'deleted':
        alert.rule = IntegrityMonitoring.regulatory[2];
        alert.syscheck.tags = [(0, _common.randomArrayItem)(IntegrityMonitoring.tags)];
        alert.syscheck.sha1_after = (0, _common.randomElements)(40, 'abcdef0123456789');
        alert.syscheck.audit = {
          process: {
            name: (0, _common.randomArrayItem)(_common.Paths),
            id: randomIntervalInteger(0, 100000),
            ppid: randomIntervalInteger(0, 100000)
          },
          effective_user: {
            name: (0, _common.randomArrayItem)(_common.Users),
            id: randomIntervalInteger(0, 100)
          },
          user: {
            name: (0, _common.randomArrayItem)(_common.Users),
            id: randomIntervalInteger(0, 100)
          },
          group: {
            name: (0, _common.randomArrayItem)(_common.Users),
            id: randomIntervalInteger(0, 100)
          }
        };
        alert.syscheck.md5_after = (0, _common.randomElements)(32, 'abcdef0123456789');
        alert.syscheck.sha256_after = (0, _common.randomElements)(60, 'abcdef0123456789');
        break;

      default:
        {}
    }
  }

  if (params.virustotal) {
    alert.rule.groups.push('virustotal');
    alert.location = 'virustotal';
    alert.data.virustotal = {};
    alert.data.virustotal.found = (0, _common.randomArrayItem)(['0', '1', '1', '1']);
    alert.data.virustotal.source = {
      sha1: (0, _common.randomElements)(40, 'abcdef0123456789'),
      file: (0, _common.randomArrayItem)(Virustotal.sourceFile),
      alert_id: `${(0, _common.randomElements)(10, '0123456789')}.${(0, _common.randomElements)(7, '0123456789')}`,
      md5: (0, _common.randomElements)(32, 'abcdef0123456789')
    };

    if (alert.data.virustotal.found === '1') {
      alert.data.virustotal.malicious = (0, _common.randomArrayItem)(Virustotal.malicious);
      alert.data.virustotal.positives = `${randomIntervalInteger(0, 65)}`;
      alert.data.virustotal.total = alert.data.virustotal.malicious + alert.data.virustotal.positives;
      alert.rule.description = `VirusTotal: Alert - ${alert.data.virustotal.source.file} - ${alert.data.virustotal.positives} engines detected this file`;
      alert.data.virustotal.permalink = (0, _common.randomArrayItem)(Virustotal.permalink);
      alert.data.virustotal.scan_date = new Date(Date.parse(alert.timestamp) - 4 * 60000);
    } else {
      alert.data.virustotal.malicious = '0';
      alert.rule.description = 'VirusTotal: Alert - No records in VirusTotal database';
    }
  }

  if (params.vulnerabilities) {
    const dataVulnerability = (0, _common.randomArrayItem)(Vulnerability.data);
    alert.rule = { ...dataVulnerability.rule,
      mail: false,
      groups: ['vulnerability-detector'],
      gdpr: ['IV_35.7.d'],
      pci_dss: ['11.2.1', '11.2.3'],
      tsc: ['CC7.1', 'CC7.2']
    };
    alert.location = 'vulnerability-detector';
    alert.decoder = {
      name: 'json'
    };
    alert.data = { ...dataVulnerability.data
    };
  }

  if (params.osquery) {
    alert.rule.groups.push('osquery');
    alert.data.osquery = {};

    if (randomIntervalInteger(0, 5) === 0) {
      alert.rule.description = 'osquery error message';
    } else {
      let dataOsquery = (0, _common.randomArrayItem)(Osquery.dataOsquery);
      alert.data.osquery = dataOsquery.osquery;
      alert.data.osquery.calendarTime = alert.timestamp;
      alert.rule.description = dataOsquery.rule.description;
      randomIntervalInteger(0, 99) === 0 ? alert.data.osquery.action = 'removed' : null;
    }
  } // Regulatory compliance


  if (params.pci_dss || params.regulatory_compliance || params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance)) {
    alert.rule.pci_dss = [(0, _common.randomArrayItem)(_regulatoryCompliance.PCI_DSS)];
  }

  if (params.gdpr || params.regulatory_compliance || params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance)) {
    alert.rule.gdpr = [(0, _common.randomArrayItem)(_regulatoryCompliance.GDPR)];
  }

  if (params.gpg13 || params.regulatory_compliance || params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance)) {
    alert.rule.gpg13 = [(0, _common.randomArrayItem)(_regulatoryCompliance.GPG13)];
  }

  if (params.hipaa || params.regulatory_compliance || params.random_probability_regulatory_compliance && randomIntervalInteger(params.random_probability_regulatory_compliance)) {
    alert.rule.hipaa = [(0, _common.randomArrayItem)(_regulatoryCompliance.HIPAA)];
  }

  if (params.nist_800_83 || params.regulatory_compliance || params.random_probability_regulatory_compliance && randomIntervalInteger(params.random_probability_regulatory_compliance)) {
    alert.rule.nist_800_53 = [(0, _common.randomArrayItem)(_regulatoryCompliance.NIST_800_53)];
  }

  if (params.authentication) {
    alert.data = {
      srcip: (0, _common.randomArrayItem)(_common.IPs),
      srcuser: (0, _common.randomArrayItem)(_common.Users),
      srcport: (0, _common.randomArrayItem)(_common.Ports)
    };
    alert.GeoLocation = (0, _common.randomArrayItem)(_common.GeoLocation);
    alert.decoder = {
      name: 'sshd',
      parent: 'sshd'
    };
    alert.input = {
      type: 'log'
    };
    alert.predecoder = {
      program_name: 'sshd',
      timestamp: formatDate(new Date(alert.timestamp), 'N D h:m:s'),
      hostname: alert.manager.name
    };
    let typeAlert = (0, _common.randomArrayItem)(['invalidLoginPassword', 'invalidLoginUser', 'multipleAuthenticationFailures', 'windowsInvalidLoginPassword', 'userLoginFailed', 'passwordCheckFailed', 'nonExistentUser', 'bruteForceTryingAccessSystem', 'authenticationSuccess', 'maximumAuthenticationAttemptsExceeded']);

    switch (typeAlert) {
      case 'invalidLoginPassword':
        {
          alert.location = Authentication.invalidLoginPassword.location;
          alert.rule = { ...Authentication.invalidLoginPassword.rule
          };
          alert.rule.groups = [...Authentication.invalidLoginPassword.rule.groups];
          alert.full_log = interpolateAlertProps(Authentication.invalidLoginPassword.full_log, alert);
          break;
        }

      case 'invalidLoginUser':
        {
          alert.location = Authentication.invalidLoginUser.location;
          alert.rule = { ...Authentication.invalidLoginUser.rule
          };
          alert.rule.groups = [...Authentication.invalidLoginUser.rule.groups];
          alert.full_log = interpolateAlertProps(Authentication.invalidLoginUser.full_log, alert);
          break;
        }

      case 'multipleAuthenticationFailures':
        {
          alert.location = Authentication.multipleAuthenticationFailures.location;
          alert.rule = { ...Authentication.multipleAuthenticationFailures.rule
          };
          alert.rule.groups = [...Authentication.multipleAuthenticationFailures.rule.groups];
          alert.rule.frequency = randomIntervalInteger(5, 50);
          alert.full_log = interpolateAlertProps(Authentication.multipleAuthenticationFailures.full_log, alert);
          break;
        }

      case 'windowsInvalidLoginPassword':
        {
          alert.location = Authentication.windowsInvalidLoginPassword.location;
          alert.rule = { ...Authentication.windowsInvalidLoginPassword.rule
          };
          alert.rule.groups = [...Authentication.windowsInvalidLoginPassword.rule.groups];
          alert.rule.frequency = randomIntervalInteger(5, 50);
          alert.data.win = { ...Authentication.windowsInvalidLoginPassword.data_win
          };
          alert.data.win.eventdata.ipAddress = (0, _common.randomArrayItem)(_common.IPs);
          alert.data.win.eventdata.ipPort = (0, _common.randomArrayItem)(_common.Ports);
          alert.data.win.system.computer = (0, _common.randomArrayItem)(_common.Win_Hostnames);
          alert.data.win.system.eventID = `${randomIntervalInteger(1, 600)}`;
          alert.data.win.system.eventRecordID = `${randomIntervalInteger(10000, 50000)}`;
          alert.data.win.system.processID = `${randomIntervalInteger(1, 1200)}`;
          alert.data.win.system.systemTime = alert.timestamp;
          alert.data.win.system.processID = `${randomIntervalInteger(1, 1200)}`;
          alert.data.win.system.task = `${randomIntervalInteger(1, 1800)}`;
          alert.data.win.system.threadID = `${randomIntervalInteger(1, 500)}`;
          alert.full_log = interpolateAlertProps(Authentication.windowsInvalidLoginPassword.full_log, alert);
          break;
        }

      case 'userLoginFailed':
        {
          alert.location = Authentication.userLoginFailed.location;
          alert.rule = { ...Authentication.userLoginFailed.rule
          };
          alert.rule.groups = [...Authentication.userLoginFailed.rule.groups];
          alert.data = {
            srcip: (0, _common.randomArrayItem)(_common.IPs),
            dstuser: (0, _common.randomArrayItem)(_common.Users),
            uid: `${randomIntervalInteger(0, 50)}`,
            euid: `${randomIntervalInteger(0, 50)}`,
            tty: 'ssh'
          };
          alert.decoder = { ...Authentication.userLoginFailed.decoder
          };
          alert.full_log = interpolateAlertProps(Authentication.userLoginFailed.full_log, alert);
          break;
        }

      case 'passwordCheckFailed':
        {
          alert.location = Authentication.passwordCheckFailed.location;
          alert.rule = { ...Authentication.passwordCheckFailed.rule
          };
          alert.rule.groups = [...Authentication.passwordCheckFailed.rule.groups];
          alert.data = {
            srcuser: (0, _common.randomArrayItem)(_common.Users)
          };
          alert.predecoder.program_name = 'unix_chkpwd';
          alert.decoder = { ...Authentication.passwordCheckFailed.decoder
          };
          alert.full_log = interpolateAlertProps(Authentication.passwordCheckFailed.full_log, alert);
          break;
        }

      case 'nonExistentUser':
        {
          alert.location = Authentication.nonExistentUser.location;
          alert.rule = { ...Authentication.nonExistentUser.rule
          };
          alert.rule.groups = [...Authentication.nonExistentUser.rule.groups];
          alert.full_log = interpolateAlertProps(Authentication.nonExistentUser.full_log, alert);
          break;
        }

      case 'bruteForceTryingAccessSystem':
        {
          alert.location = Authentication.bruteForceTryingAccessSystem.location;
          alert.rule = { ...Authentication.bruteForceTryingAccessSystem.rule
          };
          alert.rule.groups = [...Authentication.bruteForceTryingAccessSystem.rule.groups];
          alert.full_log = interpolateAlertProps(Authentication.bruteForceTryingAccessSystem.full_log, alert);
          break;
        }

      case 'reverseLoockupError':
        {
          alert.location = Authentication.reverseLoockupError.location;
          alert.rule = { ...Authentication.reverseLoockupError.rule
          };
          alert.rule.groups = [...Authentication.reverseLoockupError.rule.groups];
          alert.data = {
            srcip: (0, _common.randomArrayItem)(_common.IPs)
          };
          alert.full_log = interpolateAlertProps(Authentication.reverseLoockupError.full_log, alert);
        }

      case 'insecureConnectionAttempt':
        {
          alert.location = Authentication.insecureConnectionAttempt.location;
          alert.rule = { ...Authentication.insecureConnectionAttempt.rule
          };
          alert.rule.groups = [...Authentication.insecureConnectionAttempt.rule.groups];
          alert.data = {
            srcip: (0, _common.randomArrayItem)(_common.IPs),
            srcport: (0, _common.randomArrayItem)(_common.Ports)
          };
          alert.full_log = interpolateAlertProps(Authentication.insecureConnectionAttempt.full_log, alert);
        }

      case 'authenticationSuccess':
        {
          alert.location = Authentication.authenticationSuccess.location;
          alert.rule = { ...Authentication.authenticationSuccess.rule
          };
          alert.rule.groups = [...Authentication.authenticationSuccess.rule.groups];
          alert.data = {
            srcip: (0, _common.randomArrayItem)(_common.IPs),
            srcport: (0, _common.randomArrayItem)(_common.Ports),
            dstuser: (0, _common.randomArrayItem)(_common.Users)
          };
          alert.full_log = interpolateAlertProps(Authentication.authenticationSuccess.full_log, alert);
        }

      case 'maximumAuthenticationAttemptsExceeded':
        {
          alert.location = Authentication.maximumAuthenticationAttemptsExceeded.location;
          alert.rule = { ...Authentication.maximumAuthenticationAttemptsExceeded.rule
          };
          alert.rule.groups = [...Authentication.maximumAuthenticationAttemptsExceeded.rule.groups];
          alert.data = {
            srcip: (0, _common.randomArrayItem)(_common.IPs),
            srcport: (0, _common.randomArrayItem)(_common.Ports),
            dstuser: (0, _common.randomArrayItem)(_common.Users)
          };
          alert.full_log = interpolateAlertProps(Authentication.maximumAuthenticationAttemptsExceeded.full_log, alert);
        }

      default:
        {}
    }

    alert.rule.firedtimes = randomIntervalInteger(2, 15);
    alert.rule.tsc = [(0, _common.randomArrayItem)(_regulatoryCompliance.tsc)];
  }

  if (params.ssh) {
    alert.data = {
      srcip: (0, _common.randomArrayItem)(_common.IPs),
      srcuser: (0, _common.randomArrayItem)(_common.Users),
      srcport: (0, _common.randomArrayItem)(_common.Ports)
    };
    alert.GeoLocation = (0, _common.randomArrayItem)(_common.GeoLocation);
    alert.decoder = {
      name: 'sshd',
      parent: 'sshd'
    };
    alert.input = {
      type: 'log'
    };
    alert.predecoder = {
      program_name: 'sshd',
      timestamp: formatDate(new Date(alert.timestamp), 'N D h:m:s'),
      hostname: alert.manager.name
    };
    const typeAlert = (0, _common.randomArrayItem)(SSH.data);
    alert.location = typeAlert.location;
    alert.rule = { ...typeAlert.rule
    };
    alert.rule.groups = [...typeAlert.rule.groups];
    alert.rule.firedtimes = randomIntervalInteger(1, 15);
    alert.full_log = interpolateAlertProps(typeAlert.full_log, alert);
  }

  if (params.windows) {
    alert.rule.groups.push('windows');

    if (params.windows.service_control_manager) {
      alert.predecoder = {
        program_name: 'WinEvtLog',
        timestamp: '2020 Apr 17 05:59:05'
      };
      alert.input = {
        type: 'log'
      };
      alert.data = {
        extra_data: 'Service Control Manager',
        dstuser: 'SYSTEM',
        system_name: (0, _common.randomArrayItem)(_common.Win_Hostnames),
        id: '7040',
        type: 'type',
        status: 'INFORMATION'
      };
      alert.rule.description = 'Windows: Service startup type was changed.';
      alert.rule.firedtimes = randomIntervalInteger(1, 20);
      alert.rule.mail = false;
      alert.rule.level = 3;
      alert.rule.groups.push('windows', 'policy_changed');
      alert.rule.pci = ['10.6'];
      alert.rule.hipaa = ['164.312.b'];
      alert.rule.gdpr = ['IV_35.7.d'];
      alert.rule.nist_800_53 = ['AU.6'];
      alert.rule.info = 'This does not appear to be logged on Windows 2000.';
      alert.location = 'WinEvtLog';
      alert.decoder = {
        parent: 'windows',
        name: 'windows'
      };
      alert.full_log = `2020 Apr 17 05:59:05 WinEvtLog: type: INFORMATION(7040): Service Control Manager: SYSTEM: NT AUTHORITY: ${alert.data.system_name}: Background Intelligent Transfer Service auto start demand start BITS `; //TODO: date

      alert.id = 18145;
      alert.fields = {
        timestamp: alert.timestamp
      };
    }
  }

  if (params.apache) {
    const typeAlert = { ...Apache.data[0]
    }; // there is only one type alert in data array at the moment. Randomize if add more type of alerts to data array

    alert.data = {
      srcip: (0, _common.randomArrayItem)(_common.IPs),
      srcport: (0, _common.randomArrayItem)(_common.Ports),
      id: `AH${randomIntervalInteger(10000, 99999)}`
    };
    alert.GeoLocation = { ...(0, _common.randomArrayItem)(_common.GeoLocation)
    };
    alert.rule = { ...typeAlert.rule
    };
    alert.rule.firedtimes = randomIntervalInteger(2, 10);
    alert.input = {
      type: 'log'
    };
    alert.location = Apache.location;
    alert.decoder = { ...Apache.decoder
    };
    alert.full_log = interpolateAlertProps(typeAlert.full_log, alert, {
      _timestamp_apache: formatDate(new Date(alert.timestamp), 'E N D h:m:s.l Y'),
      _pi_id: randomIntervalInteger(10000, 30000)
    });
  }

  if (params.web) {
    alert.input = {
      type: 'log'
    };
    alert.data = {
      protocol: 'GET',
      srcip: (0, _common.randomArrayItem)(_common.IPs),
      id: '404',
      url: (0, _common.randomArrayItem)(Web.urls)
    };
    alert.GeoLocation = { ...(0, _common.randomArrayItem)(_common.GeoLocation)
    };
    const typeAlert = (0, _common.randomArrayItem)(Web.data);
    const userAgent = (0, _common.randomArrayItem)(Web.userAgents);
    alert.rule = { ...typeAlert.rule
    };
    alert.rule.firedtimes = randomIntervalInteger(1, 10);
    alert.decoder = { ...typeAlert.decoder
    };
    alert.location = typeAlert.location;
    alert.full_log = interpolateAlertProps(typeAlert.full_log, alert, {
      _user_agent: userAgent,
      _date: formatDate(new Date(alert.timestamp), 'D/N/Y:h:m:s +0000')
    });

    if (typeAlert.previous_output) {
      const previousOutput = [];
      const beforeSeconds = 4;

      for (let i = beforeSeconds; i > 0; i--) {
        const beforeDate = new Date(new Date(alert.timestamp) - (2 + i) * 1000);
        previousOutput.push(interpolateAlertProps(typeAlert.full_log, alert, {
          _user_agent: userAgent,
          _date: formatDate(new Date(beforeDate), 'D/N/Y:h:m:s +0000')
        }));
      }

      alert.previous_output = previousOutput.join('\n');
    }
  }

  if (params.github) {
    alert.location = GitHub.LOCATION;
    alert.decoder = GitHub.DECODER;
    const alertType = (0, _common.randomArrayItem)(GitHub.ALERT_TYPES);
    const actor = (0, _common.randomArrayItem)(GitHub.ACTORS);
    alert.data = {
      github: { ...alertType.data.github
      }
    };
    alert.data.github.org = (0, _common.randomArrayItem)(GitHub.ORGANIZATION_NAMES);
    alert.data.github.repo && (alert.data.github.repo = `${alert.data.github.org}/${(0, _common.randomArrayItem)(GitHub.REPOSITORY_NAMES)}`);
    alert.data.github.repository && (alert.data.github.repository = `${alert.data.github.org}/${(0, _common.randomArrayItem)(GitHub.REPOSITORY_NAMES)}`);
    alert.data.github.actor = actor.name;
    alert.data.github.actor_location && alert.data.github.actor_location.country_code && (alert.data.github.actor_location.country_code = actor.country_code);
    alert.data.github.user && (alert.data.github.user = (0, _common.randomArrayItem)(GitHub.USER_NAMES));
    alert.data.github.config && alert.data.github.config.url && (alert.data.github.config.url = (0, _common.randomArrayItem)(GitHub.SERVER_ADDRESS_WEBHOOK));
    alert.data.github['@timestamp'] = alert.timestamp;
    alert.data.github.created_at && (alert.data.github.created_at = alert.timestamp);
    alert.rule = { ...alertType.rule
    };
  }

  return alert;
}
/**
 * Get a random array with unique values
 * @param {[]} array Array to extract the values
 * @param {*} randomMaxRepetitions Number max of random extractions
 * @param {function} sort Funciton to seort elements
 * @return {*} Array with random values extracted of paramater array passed
 */


function randomUniqueValuesFromArray(array, randomMaxRepetitions = 1, sort) {
  const repetitions = randomIntervalInteger(1, randomMaxRepetitions);
  const set = new Set();

  for (let i = 0; i < repetitions; i++) {
    set.add(array[randomIntervalInteger(0, array.length - 1)]);
  }

  return sort ? Array.from(set).sort(sort) : Array.from(set);
}
/**
 * Get a integer within a range
 * @param {number} min - Minimum limit
 * @param {number} max - Maximum limit
 * @returns {number} - Randomized number in interval
 */


function randomIntervalInteger(min, max) {
  return Math.floor(Math.random() * (max - (min - 1))) + min;
}
/**
 * Generate random alerts
 * @param {*} params
 * @param {number} numAlerts - Define number of alerts
 * @return {*} - Random generated alerts defined with params
 */


function generateAlerts(params, numAlerts = 1) {
  const alerts = [];

  for (let i = 0; i < numAlerts; i++) {
    alerts.push(generateAlert(params));
  }

  return alerts;
}
/**
 * Get a random Date in range(7 days ago - now)
 * @returns {date} - Random date in range (7 days ago - now)
 */


function randomDate(inf, sup) {
  const nowTimestamp = Date.now();
  const time = randomIntervalInteger(0, 604800000); // Random 7 days in miliseconds

  const unix_timestamp = nowTimestamp - time; // Last 7 days from now

  const lastWeek = new Date(unix_timestamp);
  return formatDate(lastWeek, 'Y-M-DTh:m:s.l+0000');
}

const formatterNumber = (number, zeros = 0) => ('0'.repeat(zeros) + `${number}`).slice(-zeros);

const monthNames = {
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};
const dayNames = {
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};

function formatDate(date, format) {
  // It could use "moment" library to format strings too
  const tokens = {
    D: d => formatterNumber(d.getDate(), 2),
    // 01-31
    A: d => dayNames.long[d.getDay()],
    // 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    E: d => dayNames.short[d.getDay()],
    // 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    M: d => formatterNumber(d.getMonth() + 1, 2),
    // 01-12
    J: d => monthNames.long[d.getMonth()],
    // 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    N: d => monthNames.short[d.getMonth()],
    // 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    Y: d => d.getFullYear(),
    // 2020
    h: d => formatterNumber(d.getHours(), 2),
    // 00-23
    m: d => formatterNumber(d.getMinutes(), 2),
    // 00-59
    s: d => formatterNumber(d.getSeconds(), 2),
    // 00-59
    l: d => formatterNumber(d.getMilliseconds(), 3) // 000-999

  };
  return format.split('').reduce((accum, token) => {
    if (tokens[token]) {
      return accum + tokens[token](date);
    }

    return accum + token;
  }, '');
}
/**
 *
 * @param {string} str String with interpolations
 * @param {*} alert Alert object
 * @param {*} extra Extra parameters to interpolate what aren't in alert objet. Only admit one level of depth
 */


function interpolateAlertProps(str, alert, extra = {}) {
  const matches = str.match(/{([\w\._]+)}/g);
  return matches && matches.reduce((accum, cur) => {
    const match = cur.match(/{([\w\._]+)}/);
    const items = match[1].split('.');
    const value = items.reduce((a, c) => a && a[c] || extra[c] || undefined, alert) || cur;
    return accum.replace(cur, value);
  }, str) || str;
}
/**
 * Return a random probability
 * @param {number} probability
 * @param {number[=100]} maximum
 */


function randomProbability(probability, maximum = 100) {
  return randomIntervalInteger(0, maximum) <= probability;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWFsZXJ0cy1zY3JpcHQuanMiXSwibmFtZXMiOlsiYWxlcnRJRE1heCIsInJ1bGVEZXNjcmlwdGlvbiIsInJ1bGVNYXhMZXZlbCIsImdlbmVyYXRlQWxlcnQiLCJwYXJhbXMiLCJhbGVydCIsInRpbWVzdGFtcCIsInJ1bGUiLCJsZXZlbCIsImRlc2NyaXB0aW9uIiwiaWQiLCJtYWlsIiwiZ3JvdXBzIiwiYWdlbnQiLCJuYW1lIiwibWFuYWdlciIsImNsdXN0ZXIiLCJwcmVkZWNvZGVyIiwiZGVjb2RlciIsImRhdGEiLCJsb2NhdGlvbiIsIkFnZW50cyIsInJhbmRvbUludGVydmFsSW50ZWdlciIsInJhbmRvbURhdGUiLCJub2RlIiwiYXdzIiwicmFuZG9tVHlwZSIsImJlZm9yZURhdGUiLCJEYXRlIiwidHlwZUFsZXJ0IiwiQVdTIiwiZ3VhcmRkdXR5UG9ydFByb2JlIiwiaW50ZWdyYXRpb24iLCJyZWdpb24iLCJyZXNvdXJjZSIsImluc3RhbmNlRGV0YWlscyIsImlhbUluc3RhbmNlUHJvZmlsZSIsImFybiIsImludGVycG9sYXRlQWxlcnRQcm9wcyIsInRpdGxlIiwiYWNjb3VudElkIiwic2VydmljZSIsImV2ZW50Rmlyc3RTZWVuIiwiZm9ybWF0RGF0ZSIsImV2ZW50TGFzdFNlZW4iLCJhY3Rpb24iLCJwb3J0UHJvYmVBY3Rpb24iLCJwb3J0UHJvYmVEZXRhaWxzIiwicmVtb3RlSXBEZXRhaWxzIiwibG9nX2luZm8iLCJzM2J1Y2tldCIsImJ1Y2tldHMiLCJsb2dfZmlsZSIsImNvdW50IiwiY3JlYXRlZEF0IiwiZmlyZWR0aW1lcyIsImFwaUNhbGwiLCJhY2Nlc3NLZXlEZXRhaWxzIiwidXNlck5hbWUiLCJVc2VycyIsImF3c0FwaUNhbGxBY3Rpb24iLCJhZGRpdGlvbmFsSW5mbyIsInJlY2VudEFwaUNhbGxzIiwibmV0d29ya0Nvbm5lY3Rpb24iLCJuZXR3b3JrQ29ubmVjdGlvbkFjdGlvbiIsImxvY2FsUG9ydCIsIlBvcnRzIiwib3V0Qnl0ZXMiLCJpbkJ5dGVzIiwidW51c3VhbCIsImxvY2FsSXBEZXRhaWxzIiwiaXBBZGRyZXNzVjQiLCJuZXR3b3JrSW50ZXJmYWNlcyIsInByaXZhdGVJcEFkZHJlc3MiLCJpYW1Qb2xpY3lHcmFudEdsb2JhbCIsInN1bW1hcnkiLCJUaW1lc3RhbXBzIiwidXJsIiwiaW5wdXQiLCJ0eXBlIiwiR2VvTG9jYXRpb24iLCJvZmZpY2UiLCJpcCIsIkludHJhSUQiLCJPZmZpY2UiLCJhcnJheVV1aWRPZmZpY2UiLCJPcmdJRCIsIm9iaklEIiwidXNlcktleSIsInVzZXJJRCIsImFycmF5VXNlcklkIiwidXNlclR5cGUiLCJyZXN1bHRTdGF0dXMiLCJsb2ciLCJhcnJheUxvZ3MiLCJydWxlRGF0YSIsIm9mZmljZVJ1bGVzIiwiUmVjb3JkVHlwZSIsImFycmF5RGVjb2Rlck9mZmljZSIsImFycmF5TG9jYXRpb25PZmZpY2UiLCJvZmZpY2UzNjUiLCJJZCIsIkNyZWF0aW9uVGltZSIsIk9yZ2FuaXphdGlvbklkIiwiVXNlclR5cGUiLCJVc2VyS2V5IiwiUmVzdWx0U3RhdHVzIiwiT2JqZWN0SWQiLCJVc2VySWQiLCJDbGllbnRJUCIsImFycmF5SXAiLCJnY3AiLCJHQ1AiLCJhcnJheVJ1bGVzIiwiaW5zZXJ0SWQiLCJqc29uUGF5bG9hZCIsImF1dGhBbnN3ZXIiLCJhcnJheUF1dGhBbnN3ZXIiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJyYW5kb20iLCJwcm90b2NvbCIsImFycmF5UHJvdG9jb2wiLCJxdWVyeU5hbWUiLCJhcnJheVF1ZXJ5TmFtZSIsInF1ZXJ5VHlwZSIsImFycmF5UXVlcnlUeXBlIiwicmVzcG9uc2VDb2RlIiwiYXJyYXlSZXNwb25zZUNvZGUiLCJzb3VyY2VJUCIsImFycmF5U291cmNlSVAiLCJ2bUluc3RhbmNlSWQiLCJ2bUluc3RhbmNlTmFtZSIsImxvZ05hbWUiLCJyZWNlaXZlVGltZXN0YW1wIiwibGFiZWxzIiwiYXJyYXlMb2NhdGlvbiIsInByb2plY3RfaWQiLCJhcnJheVByb2plY3QiLCJzb3VyY2VfdHlwZSIsImFycmF5U291cmNlVHlwZSIsInRhcmdldF90eXBlIiwiYXJyYXlUeXBlIiwic2V2ZXJpdHkiLCJhcnJheVNldmVyaXR5IiwiYXVkaXQiLCJkYXRhQXVkaXQiLCJBdWRpdCIsImZpbGUiLCJmaWxlTmFtZSIsImNpc2NhdCIsInB1c2giLCJjaXMiLCJncm91cCIsIkNJU0NBVCIsImZhaWwiLCJydWxlX3RpdGxlIiwicnVsZVRpdGxlIiwibm90Y2hlY2tlZCIsInNjb3JlIiwicGFzcyIsImVycm9yIiwiYmVuY2htYXJrIiwidW5rbm93biIsInJlc3VsdCIsImRvY2tlciIsImRhdGFEb2NrZXIiLCJEb2NrZXIiLCJtaXRyZSIsIk1pdHJlIiwiYXJyYXlNaXRyZVJ1bGVzIiwib3BlbnNjYXAiLCJvc2NhcCIsIk9wZW5TQ0FQIiwiZnVsbF9sb2ciLCJyb290Y2hlY2siLCJQb2xpY3lNb25pdG9yaW5nIiwiYWxlcnRDYXRlZ29yeSIsInJvb3RraXRDYXRlZ29yeSIsIk9iamVjdCIsImtleXMiLCJyb290a2l0cyIsInJvb3RraXQiLCJyb290a2l0c0RhdGEiLCJfcm9vdGtpdF9jYXRlZ29yeSIsIl9yb290a2l0X2ZpbGUiLCJ0cm9qYW4iLCJ0cm9qYW5zIiwidHJvamFuc0RhdGEiLCJfdHJvamFuX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsInN5c2NoZWNrIiwiZXZlbnQiLCJJbnRlZ3JpdHlNb25pdG9yaW5nIiwiZXZlbnRzIiwicGF0aCIsInBhdGhzV2luZG93cyIsInBhdGhzTGludXgiLCJ1bmFtZV9hZnRlciIsImduYW1lX2FmdGVyIiwibXRpbWVfYWZ0ZXIiLCJzaXplX2FmdGVyIiwidWlkX2FmdGVyIiwiZ2lkX2FmdGVyIiwicGVybV9hZnRlciIsImlub2RlX2FmdGVyIiwicmVndWxhdG9yeSIsIm10aW1lX2JlZm9yZSIsImdldFRpbWUiLCJpbm9kZV9iZWZvcmUiLCJzaGExX2FmdGVyIiwiY2hhbmdlZF9hdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsIm1kNV9hZnRlciIsInNoYTI1Nl9hZnRlciIsInRhZ3MiLCJwcm9jZXNzIiwiUGF0aHMiLCJwcGlkIiwiZWZmZWN0aXZlX3VzZXIiLCJ1c2VyIiwidmlydXN0b3RhbCIsImZvdW5kIiwic291cmNlIiwic2hhMSIsIlZpcnVzdG90YWwiLCJzb3VyY2VGaWxlIiwiYWxlcnRfaWQiLCJtZDUiLCJtYWxpY2lvdXMiLCJwb3NpdGl2ZXMiLCJ0b3RhbCIsInBlcm1hbGluayIsInNjYW5fZGF0ZSIsInBhcnNlIiwidnVsbmVyYWJpbGl0aWVzIiwiZGF0YVZ1bG5lcmFiaWxpdHkiLCJWdWxuZXJhYmlsaXR5IiwiZ2RwciIsInBjaV9kc3MiLCJ0c2MiLCJvc3F1ZXJ5IiwiZGF0YU9zcXVlcnkiLCJPc3F1ZXJ5IiwiY2FsZW5kYXJUaW1lIiwicmVndWxhdG9yeV9jb21wbGlhbmNlIiwicmFuZG9tX3Byb2JhYmlsaXR5X3JlZ3VsYXRvcnlfY29tcGxpYW5jZSIsInJhbmRvbVByb2JhYmlsaXR5IiwiUENJX0RTUyIsIkdEUFIiLCJncGcxMyIsIkdQRzEzIiwiaGlwYWEiLCJISVBBQSIsIm5pc3RfODAwXzgzIiwibmlzdF84MDBfNTMiLCJOSVNUXzgwMF81MyIsImF1dGhlbnRpY2F0aW9uIiwic3JjaXAiLCJJUHMiLCJzcmN1c2VyIiwic3JjcG9ydCIsInBhcmVudCIsInByb2dyYW1fbmFtZSIsImhvc3RuYW1lIiwiQXV0aGVudGljYXRpb24iLCJpbnZhbGlkTG9naW5QYXNzd29yZCIsImludmFsaWRMb2dpblVzZXIiLCJtdWx0aXBsZUF1dGhlbnRpY2F0aW9uRmFpbHVyZXMiLCJmcmVxdWVuY3kiLCJ3aW5kb3dzSW52YWxpZExvZ2luUGFzc3dvcmQiLCJ3aW4iLCJkYXRhX3dpbiIsImV2ZW50ZGF0YSIsImlwQWRkcmVzcyIsImlwUG9ydCIsInN5c3RlbSIsImNvbXB1dGVyIiwiV2luX0hvc3RuYW1lcyIsImV2ZW50SUQiLCJldmVudFJlY29yZElEIiwicHJvY2Vzc0lEIiwic3lzdGVtVGltZSIsInRhc2siLCJ0aHJlYWRJRCIsInVzZXJMb2dpbkZhaWxlZCIsImRzdHVzZXIiLCJ1aWQiLCJldWlkIiwidHR5IiwicGFzc3dvcmRDaGVja0ZhaWxlZCIsIm5vbkV4aXN0ZW50VXNlciIsImJydXRlRm9yY2VUcnlpbmdBY2Nlc3NTeXN0ZW0iLCJyZXZlcnNlTG9vY2t1cEVycm9yIiwiaW5zZWN1cmVDb25uZWN0aW9uQXR0ZW1wdCIsImF1dGhlbnRpY2F0aW9uU3VjY2VzcyIsIm1heGltdW1BdXRoZW50aWNhdGlvbkF0dGVtcHRzRXhjZWVkZWQiLCJzc2giLCJTU0giLCJ3aW5kb3dzIiwic2VydmljZV9jb250cm9sX21hbmFnZXIiLCJleHRyYV9kYXRhIiwic3lzdGVtX25hbWUiLCJzdGF0dXMiLCJwY2kiLCJpbmZvIiwiZmllbGRzIiwiYXBhY2hlIiwiQXBhY2hlIiwiX3RpbWVzdGFtcF9hcGFjaGUiLCJfcGlfaWQiLCJ3ZWIiLCJXZWIiLCJ1cmxzIiwidXNlckFnZW50IiwidXNlckFnZW50cyIsIl91c2VyX2FnZW50IiwiX2RhdGUiLCJwcmV2aW91c19vdXRwdXQiLCJwcmV2aW91c091dHB1dCIsImJlZm9yZVNlY29uZHMiLCJpIiwiam9pbiIsImdpdGh1YiIsIkdpdEh1YiIsIkxPQ0FUSU9OIiwiREVDT0RFUiIsImFsZXJ0VHlwZSIsIkFMRVJUX1RZUEVTIiwiYWN0b3IiLCJBQ1RPUlMiLCJvcmciLCJPUkdBTklaQVRJT05fTkFNRVMiLCJyZXBvIiwiUkVQT1NJVE9SWV9OQU1FUyIsInJlcG9zaXRvcnkiLCJhY3Rvcl9sb2NhdGlvbiIsImNvdW50cnlfY29kZSIsIlVTRVJfTkFNRVMiLCJjb25maWciLCJTRVJWRVJfQUREUkVTU19XRUJIT09LIiwiY3JlYXRlZF9hdCIsInJhbmRvbVVuaXF1ZVZhbHVlc0Zyb21BcnJheSIsImFycmF5IiwicmFuZG9tTWF4UmVwZXRpdGlvbnMiLCJzb3J0IiwicmVwZXRpdGlvbnMiLCJzZXQiLCJTZXQiLCJhZGQiLCJBcnJheSIsImZyb20iLCJtaW4iLCJtYXgiLCJnZW5lcmF0ZUFsZXJ0cyIsIm51bUFsZXJ0cyIsImFsZXJ0cyIsImluZiIsInN1cCIsIm5vd1RpbWVzdGFtcCIsIm5vdyIsInRpbWUiLCJ1bml4X3RpbWVzdGFtcCIsImxhc3RXZWVrIiwiZm9ybWF0dGVyTnVtYmVyIiwibnVtYmVyIiwiemVyb3MiLCJyZXBlYXQiLCJzbGljZSIsIm1vbnRoTmFtZXMiLCJsb25nIiwic2hvcnQiLCJkYXlOYW1lcyIsImRhdGUiLCJmb3JtYXQiLCJ0b2tlbnMiLCJEIiwiZCIsImdldERhdGUiLCJBIiwiZ2V0RGF5IiwiRSIsIk0iLCJnZXRNb250aCIsIkoiLCJOIiwiWSIsImdldEZ1bGxZZWFyIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImwiLCJnZXRNaWxsaXNlY29uZHMiLCJzcGxpdCIsInJlZHVjZSIsImFjY3VtIiwidG9rZW4iLCJzdHIiLCJleHRyYSIsIm1hdGNoZXMiLCJtYXRjaCIsImN1ciIsIml0ZW1zIiwidmFsdWUiLCJhIiwiYyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJwcm9iYWJpbGl0eSIsIm1heGltdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBYUE7O0FBV0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTNDQTs7Ozs7Ozs7Ozs7QUFZQTtBQWlDQTtBQUNBLE1BQU1BLFVBQVUsR0FBRyxJQUFuQixDLENBRUE7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQ3RCLGdCQURzQixFQUV0QixnQkFGc0IsRUFHdEIsZ0JBSHNCLEVBSXRCLGdCQUpzQixFQUt0QixnQkFMc0IsQ0FBeEI7QUFPQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxTQUFTQyxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUM3QixNQUFJQyxLQUFLLEdB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RDs7Ozs7OztBQUtBLFNBQVN6SixpQkFBVCxDQUEyQm9LLFdBQTNCLEVBQXdDQyxPQUFPLEdBQUcsR0FBbEQsRUFBdUQ7QUFDckQsU0FBT3ZZLHFCQUFxQixDQUFDLENBQUQsRUFBSXVZLE9BQUosQ0FBckIsSUFBcUNELFdBQTVDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gU2NyaXB0IHRvIGdlbmVyYXRlIHNhbXBsZSBhbGVydHNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5cbi8vIEdlbmVyYWxcbmltcG9ydCB7XG4gIElQcyxcbiAgVXNlcnMsXG4gIFBvcnRzLFxuICBQYXRocyxcbiAgV2luX0hvc3RuYW1lcyxcbiAgR2VvTG9jYXRpb24sXG4gIEFnZW50cyxcbiAgcmFuZG9tRWxlbWVudHMsXG4gIHJhbmRvbUFycmF5SXRlbSxcbn0gZnJvbSAnLi9zYW1wbGUtZGF0YS9jb21tb24nO1xuaW1wb3J0IHsgUENJX0RTUywgR0RQUiwgSElQQUEsIEdQRzEzLCBOSVNUXzgwMF81MywgdHNjIH0gZnJvbSAnLi9zYW1wbGUtZGF0YS9yZWd1bGF0b3J5LWNvbXBsaWFuY2UnO1xuXG5pbXBvcnQgKiBhcyBBdWRpdCBmcm9tICcuL3NhbXBsZS1kYXRhL2F1ZGl0JztcbmltcG9ydCAqIGFzIEF1dGhlbnRpY2F0aW9uIGZyb20gJy4vc2FtcGxlLWRhdGEvYXV0aGVudGljYXRpb24nO1xuaW1wb3J0ICogYXMgQVdTIGZyb20gJy4vc2FtcGxlLWRhdGEvYXdzJztcbmltcG9ydCAqIGFzIEludGVncml0eU1vbml0b3JpbmcgZnJvbSAnLi9zYW1wbGUtZGF0YS9pbnRlZ3JpdHktbW9uaXRvcmluZyc7XG5pbXBvcnQgKiBhcyBDSVNDQVQgZnJvbSAnLi9zYW1wbGUtZGF0YS9jaXNjYXQnO1xuaW1wb3J0ICogYXMgR0NQIGZyb20gJy4vc2FtcGxlLWRhdGEvZ2NwJztcbmltcG9ydCAqIGFzIERvY2tlciBmcm9tICcuL3NhbXBsZS1kYXRhL2RvY2tlcic7XG5pbXBvcnQgKiBhcyBNaXRyZSBmcm9tICcuL3NhbXBsZS1kYXRhL21pdHJlJztcbmltcG9ydCAqIGFzIE9zcXVlcnkgZnJvbSAnLi9zYW1wbGUtZGF0YS9vc3F1ZXJ5JztcbmltcG9ydCAqIGFzIE9wZW5TQ0FQIGZyb20gJy4vc2FtcGxlLWRhdGEvb3BlbnNjYXAnO1xuaW1wb3J0ICogYXMgUG9saWN5TW9uaXRvcmluZyBmcm9tICcuL3NhbXBsZS1kYXRhL3BvbGljeS1tb25pdG9yaW5nJztcbmltcG9ydCAqIGFzIFZpcnVzdG90YWwgZnJvbSAnLi9zYW1wbGUtZGF0YS92aXJ1c3RvdGFsJztcbmltcG9ydCAqIGFzIFZ1bG5lcmFiaWxpdHkgZnJvbSAnLi9zYW1wbGUtZGF0YS92dWxuZXJhYmlsaXRpZXMnO1xuaW1wb3J0ICogYXMgU1NIIGZyb20gJy4vc2FtcGxlLWRhdGEvc3NoJztcbmltcG9ydCAqIGFzIEFwYWNoZSBmcm9tICcuL3NhbXBsZS1kYXRhL2FwYWNoZSc7XG5pbXBvcnQgKiBhcyBXZWIgZnJvbSAnLi9zYW1wbGUtZGF0YS93ZWInO1xuaW1wb3J0ICogYXMgR2l0SHViIGZyb20gJy4vc2FtcGxlLWRhdGEvZ2l0aHViJztcbmltcG9ydCAqIGFzIE9mZmljZSBmcm9tICcuL3NhbXBsZS1kYXRhL29mZmljZSc7XG5cbi8vQWxlcnRcbmNvbnN0IGFsZXJ0SURNYXggPSA2MDAwO1xuXG4vLyBSdWxlXG5jb25zdCBydWxlRGVzY3JpcHRpb24gPSBbXG4gICdTYW1wbGUgYWxlcnQgMScsXG4gICdTYW1wbGUgYWxlcnQgMicsXG4gICdTYW1wbGUgYWxlcnQgMycsXG4gICdTYW1wbGUgYWxlcnQgNCcsXG4gICdTYW1wbGUgYWxlcnQgNScsXG5dO1xuY29uc3QgcnVsZU1heExldmVsID0gMTQ7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBhbGVydFxuICogQHBhcmFtIHthbnl9IHBhcmFtcyAtIHBhcmFtcyB0byBjb25maWd1cmUgdGhlIGFsZXJ0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5hd3MgLSBpZiB0cnVlLCBzZXQgYXdzIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuYXVkaXQgLSBpZiB0cnVlLCBzZXQgU3lzdGVtIEF1ZGl0aW5nIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMub2ZmaWNlIC0gaWYgdHJ1ZSwgc2V0IG9mZmljZSBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmNpc2NhdCAtIGlmIHRydWUsIHNldCBDSVMtQ0FUIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuZ2NwIC0gaWYgdHJ1ZSwgc2V0IEdDUCBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmRvY2tlciAtIGlmIHRydWUsIHNldCBEb2NrZXIgZmllbGRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5taXRyZSAtIGlmIHRydWUsIHNldCBNaXRyZSBhdHQmY2sgZmllbGRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5vcGVuc2NhcCAtIGlmIHRydWUsIHNldCBPcGVuU0NBUCBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLm9zcXVlcnkgLSBpZiB0cnVlLCBzZXQgT3NxdWVyeSBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLnJvb3RjaGVjayAtIGlmIHRydWUsIHNldCBQb2xpY3kgbW9uaXRvcmluZyBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLnN5c2NoZWNrIC0gaWYgdHJ1ZSwgc2V0IGludGVncml0eSBtb25pdG9yaW5nIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMudmlydXN0b3RhbCAtIGlmIHRydWUsIHNldCBWaXJ1c1RvdGFsIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMudnVsbmVyYWJpbGl0aWVzIC0gaWYgdHJ1ZSwgc2V0IHZ1bG5lcmFiaWxpdGllcyBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLnBjaV9kc3MgLSBpZiB0cnVlLCBzZXQgcGNpX2RzcyBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmdkcHIgLSBpZiB0cnVlLCBzZXQgZ2RwciBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmdwZzEzIC0gaWYgdHJ1ZSwgc2V0IGdwZzEzIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaGlwYWEgLSBpZiB0cnVlLCBzZXQgaGlwYWEgZmllbGRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5uaXN0XzgwMF81MyAtIGlmIHRydWUsIHNldCBuaXN0XzgwMF81MyBmaWVsZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLm5pc3RfODAwXzUzIC0gaWYgdHJ1ZSwgc2V0IG5pc3RfODAwXzUzIGZpZWxkc1xuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMud2luX2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCAtIGlmIHRydWUsIGFkZCB3aW5fYXV0aGVudGljYXRpb25fZmFpbGVkIHRvIHJ1bGUuZ3JvdXBzXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnByb2JhYmlsaXR5X3dpbl9hdXRoZW50aWNhdGlvbl9mYWlsZWQgLSBwcm9iYWJpbGl0eSB0byBhZGQgd2luX2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCB0byBydWxlLmdyb3Vwcy4gRXhhbXBsZTogMjAgd2lsbCBiZSAyMCUgb2YgcHJvYmFiaWxpdHkgdG8gYWRkIHRoaXMgdG8gcnVsZS5ncm91cHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmF1dGhlbnRpY2F0aW9uX2ZhaWxlZCAtIGlmIHRydWUsIGFkZCB3aW5fYXV0aGVudGljYXRpb25fZmFpbGVkIHRvIHJ1bGUuZ3JvdXBzXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnByb2JhYmlsaXR5X2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCAtIHByb2JhYmlsaXR5IHRvIGFkZCBhdXRoZW50aWNhdGlvbl9mYWlsZWQgdG8gcnVsZS5ncm91cHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmF1dGhlbnRpY2F0aW9uX2ZhaWx1cmVzIC0gaWYgdHJ1ZSwgYWRkIHdpbl9hdXRoZW50aWNhdGlvbl9mYWlsZWQgdG8gcnVsZS5ncm91cHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucHJvYmFiaWxpdHlfYXV0aGVudGljYXRpb25fZmFpbHVyZXMgLSBwcm9iYWJpbGl0eSB0byBhZGQgYXV0aGVudGljYXRpb25fZmFpbHVyZXMgdG8gcnVsZS5ncm91cHNcbiAqIEByZXR1cm4ge2FueX0gLSBBbGVydCBnZW5lcmF0ZWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVBbGVydChwYXJhbXMpIHtcbiAgbGV0IGFsZXJ0ID0ge1xuICAgIFsnQHNhbXBsZWRhdGEnXTogdHJ1ZSxcbiAgICB0aW1lc3RhbXA6ICcyMDIwLTAxLTI3VDExOjA4OjQ3Ljc3NyswMDAwJyxcbiAgICBydWxlOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FtcGxlIGFsZXJ0JyxcbiAgICAgIGlkOiAnNTUwMicsXG4gICAgICBtYWlsOiBmYWxzZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfSxcbiAgICBhZ2VudDoge1xuICAgICAgaWQ6ICcwMDAnLFxuICAgICAgbmFtZTogJ21hc3RlcicsXG4gICAgfSxcbiAgICBtYW5hZ2VyOiB7XG4gICAgICBuYW1lOiAnbWFzdGVyJyxcbiAgICB9LFxuICAgIGNsdXN0ZXI6IHtcbiAgICAgIG5hbWU6ICd3YXp1aCcsXG4gICAgfSxcbiAgICBpZDogJzE1ODAxMjMzMjcuNDkwMzEnLFxuICAgIHByZWRlY29kZXI6IHt9LFxuICAgIGRlY29kZXI6IHt9LFxuICAgIGRhdGE6IHt9LFxuICAgIGxvY2F0aW9uOiAnJyxcbiAgfTtcbiAgYWxlcnQuYWdlbnQgPSByYW5kb21BcnJheUl0ZW0oQWdlbnRzKTtcbiAgYWxlcnQucnVsZS5kZXNjcmlwdGlvbiA9IHJhbmRvbUFycmF5SXRlbShydWxlRGVzY3JpcHRpb24pO1xuICBhbGVydC5ydWxlLmlkID0gYCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEsIGFsZXJ0SURNYXgpfWA7XG4gIGFsZXJ0LnJ1bGUubGV2ZWwgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgcnVsZU1heExldmVsKTtcblxuICBhbGVydC50aW1lc3RhbXAgPSByYW5kb21EYXRlKCk7XG5cbiAgaWYgKHBhcmFtcy5tYW5hZ2VyKSB7XG4gICAgaWYgKHBhcmFtcy5tYW5hZ2VyLm5hbWUpIHtcbiAgICAgIGFsZXJ0Lm1hbmFnZXIubmFtZSA9IHBhcmFtcy5tYW5hZ2VyLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5jbHVzdGVyKSB7XG4gICAgaWYgKHBhcmFtcy5jbHVzdGVyLm5hbWUpIHtcbiAgICAgIGFsZXJ0LmNsdXN0ZXIubmFtZSA9IHBhcmFtcy5jbHVzdGVyLm5hbWU7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2x1c3Rlci5ub2RlKSB7XG4gICAgICBhbGVydC5jbHVzdGVyLm5vZGUgPSBwYXJhbXMuY2x1c3Rlci5ub2RlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuYXdzKSB7XG4gICAgbGV0IHJhbmRvbVR5cGUgPSByYW5kb21BcnJheUl0ZW0oW1xuICAgICAgJ2d1YXJkZHV0eVBvcnRQcm9iZScsXG4gICAgICAnYXBpQ2FsbCcsXG4gICAgICAnbmV0d29ya0Nvbm5lY3Rpb24nLFxuICAgICAgJ2lhbVBvbGljeUdyYW50R2xvYmFsJyxcbiAgICBdKTtcblxuICAgIGNvbnN0IGJlZm9yZURhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApIC0gMyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIHN3aXRjaCAocmFuZG9tVHlwZSkge1xuICAgICAgY2FzZSAnZ3VhcmRkdXR5UG9ydFByb2JlJzoge1xuICAgICAgICBjb25zdCB0eXBlQWxlcnQgPSBBV1MuZ3VhcmRkdXR5UG9ydFByb2JlO1xuXG4gICAgICAgIGFsZXJ0LmRhdGEgPSB7IC4uLnR5cGVBbGVydC5kYXRhIH07XG4gICAgICAgIGFsZXJ0LmRhdGEuaW50ZWdyYXRpb24gPSAnYXdzJztcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MucmVnaW9uID0gcmFuZG9tQXJyYXlJdGVtKEFXUy5yZWdpb24pO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5yZXNvdXJjZS5pbnN0YW5jZURldGFpbHMgPSB7IC4uLnJhbmRvbUFycmF5SXRlbShBV1MuaW5zdGFuY2VEZXRhaWxzKSB9O1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5yZXNvdXJjZS5pbnN0YW5jZURldGFpbHMuaWFtSW5zdGFuY2VQcm9maWxlLmFybiA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhcbiAgICAgICAgICB0eXBlQWxlcnQuZGF0YS5hd3MucmVzb3VyY2UuaW5zdGFuY2VEZXRhaWxzLmlhbUluc3RhbmNlUHJvZmlsZS5hcm4sXG4gICAgICAgICAgYWxlcnRcbiAgICAgICAgKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MudGl0bGUgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoYWxlcnQuZGF0YS5hd3MudGl0bGUsIGFsZXJ0KTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MuYWNjb3VudElkID0gcmFuZG9tQXJyYXlJdGVtKEFXUy5hY2NvdW50SWQpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmV2ZW50Rmlyc3RTZWVuID0gZm9ybWF0RGF0ZShiZWZvcmVEYXRlLCAnWS1NLURUaDptOnMubFonKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc2VydmljZS5ldmVudExhc3RTZWVuID0gZm9ybWF0RGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLFxuICAgICAgICAgICdZLU0tRFRoOm06cy5sWidcbiAgICAgICAgKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc2VydmljZS5hY3Rpb24ucG9ydFByb2JlQWN0aW9uLnBvcnRQcm9iZURldGFpbHMucmVtb3RlSXBEZXRhaWxzID0ge1xuICAgICAgICAgIC4uLnJhbmRvbUFycmF5SXRlbShBV1MucmVtb3RlSXBEZXRhaWxzKSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MubG9nX2luZm8gPSB7XG4gICAgICAgICAgczNidWNrZXQ6IHJhbmRvbUFycmF5SXRlbShBV1MuYnVja2V0cyksXG4gICAgICAgICAgbG9nX2ZpbGU6IGBndWFyZGR1dHkvJHtmb3JtYXREYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUoYWxlcnQudGltZXN0YW1wKSxcbiAgICAgICAgICAgICdZL00vRC9oJ1xuICAgICAgICAgICl9L2ZpcmVob3NlX2d1YXJkZHV0eS0xLSR7Zm9ybWF0RGF0ZShcbiAgICAgICAgICAgIG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksXG4gICAgICAgICAgICAnWS1NLUQtaC1tLXMtbCdcbiAgICAgICAgICApfWI1YjliLWVjNjItNGEwNy04NWQ3LWIxNjk5YjljMDMxZS56aXBgLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmNvdW50ID0gYCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDQwMCwgNDAwMCl9YDtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MuY3JlYXRlZEF0ID0gZm9ybWF0RGF0ZShiZWZvcmVEYXRlLCAnWS1NLURUaDptOnMubFonKTtcblxuICAgICAgICBhbGVydC5ydWxlID0geyAuLi50eXBlQWxlcnQucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgNTApO1xuICAgICAgICBhbGVydC5ydWxlLmRlc2NyaXB0aW9uID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKHR5cGVBbGVydC5ydWxlLmRlc2NyaXB0aW9uLCBhbGVydCk7XG5cbiAgICAgICAgYWxlcnQuZGVjb2RlciA9IHsgLi4udHlwZUFsZXJ0LmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSB0eXBlQWxlcnQubG9jYXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYXBpQ2FsbCc6IHtcbiAgICAgICAgY29uc3QgdHlwZUFsZXJ0ID0gQVdTLmFwaUNhbGw7XG5cbiAgICAgICAgYWxlcnQuZGF0YSA9IHsgLi4udHlwZUFsZXJ0LmRhdGEgfTtcbiAgICAgICAgYWxlcnQuZGF0YS5pbnRlZ3JhdGlvbiA9ICdhd3MnO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5yZWdpb24gPSByYW5kb21BcnJheUl0ZW0oQVdTLnJlZ2lvbik7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnJlc291cmNlLmFjY2Vzc0tleURldGFpbHMudXNlck5hbWUgPSByYW5kb21BcnJheUl0ZW0oVXNlcnMpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5sb2dfaW5mbyA9IHtcbiAgICAgICAgICBzM2J1Y2tldDogcmFuZG9tQXJyYXlJdGVtKEFXUy5idWNrZXRzKSxcbiAgICAgICAgICBsb2dfZmlsZTogYGd1YXJkZHV0eS8ke2Zvcm1hdERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLFxuICAgICAgICAgICAgJ1kvTS9EL2gnXG4gICAgICAgICAgKX0vZmlyZWhvc2VfZ3VhcmRkdXR5LTEtJHtmb3JtYXREYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUoYWxlcnQudGltZXN0YW1wKSxcbiAgICAgICAgICAgICdZLU0tRC1oLW0tcy1sJ1xuICAgICAgICAgICl9YjViOWItZWM2Mi00YTA3LTg1ZDctYjE2OTliOWMwMzFlLnppcGAsXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLmFjY291bnRJZCA9IHJhbmRvbUFycmF5SXRlbShBV1MuYWNjb3VudElkKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc2VydmljZS5hY3Rpb24uYXdzQXBpQ2FsbEFjdGlvbi5yZW1vdGVJcERldGFpbHMgPSB7XG4gICAgICAgICAgLi4ucmFuZG9tQXJyYXlJdGVtKEFXUy5yZW1vdGVJcERldGFpbHMpLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmV2ZW50Rmlyc3RTZWVuID0gZm9ybWF0RGF0ZShiZWZvcmVEYXRlLCAnWS1NLURUaDptOnMubFonKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc2VydmljZS5ldmVudExhc3RTZWVuID0gZm9ybWF0RGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLFxuICAgICAgICAgICdZLU0tRFRoOm06cy5sWidcbiAgICAgICAgKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MuY3JlYXRlZEF0ID0gZm9ybWF0RGF0ZShiZWZvcmVEYXRlLCAnWS1NLURUaDptOnMubFonKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MudGl0bGUgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoYWxlcnQuZGF0YS5hd3MudGl0bGUsIGFsZXJ0KTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MuZGVzY3JpcHRpb24gPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoYWxlcnQuZGF0YS5hd3MuZGVzY3JpcHRpb24sIGFsZXJ0KTtcbiAgICAgICAgY29uc3QgY291bnQgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoNDAwLCA0MDAwKX1gO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmFkZGl0aW9uYWxJbmZvLnJlY2VudEFwaUNhbGxzLmNvdW50ID0gY291bnQ7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnNlcnZpY2UuY291bnQgPSBjb3VudDtcblxuICAgICAgICBhbGVydC5ydWxlID0geyAuLi50eXBlQWxlcnQucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgNTApO1xuICAgICAgICBhbGVydC5ydWxlLmRlc2NyaXB0aW9uID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKHR5cGVBbGVydC5ydWxlLmRlc2NyaXB0aW9uLCBhbGVydCk7XG5cbiAgICAgICAgYWxlcnQuZGVjb2RlciA9IHsgLi4udHlwZUFsZXJ0LmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSB0eXBlQWxlcnQubG9jYXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbmV0d29ya0Nvbm5lY3Rpb24nOiB7XG4gICAgICAgIGNvbnN0IHR5cGVBbGVydCA9IEFXUy5uZXR3b3JrQ29ubmVjdGlvbjtcblxuICAgICAgICBhbGVydC5kYXRhID0geyAuLi50eXBlQWxlcnQuZGF0YSB9O1xuICAgICAgICBhbGVydC5kYXRhLmludGVncmF0aW9uID0gJ2F3cyc7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnJlZ2lvbiA9IHJhbmRvbUFycmF5SXRlbShBV1MucmVnaW9uKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MucmVzb3VyY2UuaW5zdGFuY2VEZXRhaWxzID0geyAuLi5yYW5kb21BcnJheUl0ZW0oQVdTLmluc3RhbmNlRGV0YWlscykgfTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MubG9nX2luZm8gPSB7XG4gICAgICAgICAgczNidWNrZXQ6IHJhbmRvbUFycmF5SXRlbShBV1MuYnVja2V0cyksXG4gICAgICAgICAgbG9nX2ZpbGU6IGBndWFyZGR1dHkvJHtmb3JtYXREYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUoYWxlcnQudGltZXN0YW1wKSxcbiAgICAgICAgICAgICdZL00vRC9oJ1xuICAgICAgICAgICl9L2ZpcmVob3NlX2d1YXJkZHV0eS0xLSR7Zm9ybWF0RGF0ZShcbiAgICAgICAgICAgIG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksXG4gICAgICAgICAgICAnWS1NLUQtaC1tLXMtbCdcbiAgICAgICAgICApfWI1YjliLWVjNjItNGEwNy04NWQ3LWIxNjk5YjljMDMxZS56aXBgLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5kZXNjcmlwdGlvbiA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhhbGVydC5kYXRhLmF3cy5kZXNjcmlwdGlvbiwgYWxlcnQpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy50aXRsZSA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhhbGVydC5kYXRhLmF3cy50aXRsZSwgYWxlcnQpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5hY2NvdW50SWQgPSByYW5kb21BcnJheUl0ZW0oQVdTLmFjY291bnRJZCk7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLmNyZWF0ZWRBdCA9IGZvcm1hdERhdGUoYmVmb3JlRGF0ZSwgJ1ktTS1EVGg6bTpzLmxaJyk7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnNlcnZpY2UuYWN0aW9uLm5ldHdvcmtDb25uZWN0aW9uQWN0aW9uLnJlbW90ZUlwRGV0YWlscyA9IHtcbiAgICAgICAgICAuLi5yYW5kb21BcnJheUl0ZW0oQVdTLnJlbW90ZUlwRGV0YWlscyksXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnNlcnZpY2UuZXZlbnRGaXJzdFNlZW4gPSBmb3JtYXREYXRlKGJlZm9yZURhdGUsICdZLU0tRFRoOm06cy5sWicpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmV2ZW50TGFzdFNlZW4gPSBmb3JtYXREYXRlKFxuICAgICAgICAgIG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksXG4gICAgICAgICAgJ1ktTS1EVGg6bTpzLmxaJ1xuICAgICAgICApO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmFkZGl0aW9uYWxJbmZvID0ge1xuICAgICAgICAgIGxvY2FsUG9ydDogYCR7cmFuZG9tQXJyYXlJdGVtKFBvcnRzKX1gLFxuICAgICAgICAgIG91dEJ5dGVzOiBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMTAwMCwgMzAwMCl9YCxcbiAgICAgICAgICBpbkJ5dGVzOiBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMTAwMCwgMTAwMDApfWAsXG4gICAgICAgICAgdW51c3VhbDogYCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEwMDAsIDEwMDAwKX1gLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5zZXJ2aWNlLmNvdW50ID0gYCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDQwMCwgNDAwMCl9YDtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc2VydmljZS5hY3Rpb24ubmV0d29ya0Nvbm5lY3Rpb25BY3Rpb24ubG9jYWxJcERldGFpbHMuaXBBZGRyZXNzVjQgPVxuICAgICAgICAgIGFsZXJ0LmRhdGEuYXdzLnJlc291cmNlLmluc3RhbmNlRGV0YWlscy5uZXR3b3JrSW50ZXJmYWNlcy5wcml2YXRlSXBBZGRyZXNzO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy5hcm4gPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHModHlwZUFsZXJ0LmRhdGEuYXdzLmFybiwgYWxlcnQpO1xuICAgICAgICBhbGVydC5ydWxlID0geyAuLi50eXBlQWxlcnQucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgNTApO1xuICAgICAgICBhbGVydC5ydWxlLmRlc2NyaXB0aW9uID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKHR5cGVBbGVydC5ydWxlLmRlc2NyaXB0aW9uLCBhbGVydCk7XG5cbiAgICAgICAgYWxlcnQuZGVjb2RlciA9IHsgLi4udHlwZUFsZXJ0LmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSB0eXBlQWxlcnQubG9jYXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnaWFtUG9saWN5R3JhbnRHbG9iYWwnOiB7XG4gICAgICAgIGNvbnN0IHR5cGVBbGVydCA9IEFXUy5pYW1Qb2xpY3lHcmFudEdsb2JhbDtcblxuICAgICAgICBhbGVydC5kYXRhID0geyAuLi50eXBlQWxlcnQuZGF0YSB9O1xuICAgICAgICBhbGVydC5kYXRhLmludGVncmF0aW9uID0gJ2F3cyc7XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzLnJlZ2lvbiA9IHJhbmRvbUFycmF5SXRlbShBV1MucmVnaW9uKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3Muc3VtbWFyeS5UaW1lc3RhbXBzID0gZm9ybWF0RGF0ZShiZWZvcmVEYXRlLCAnWS1NLURUaDptOnMubFonKTtcbiAgICAgICAgYWxlcnQuZGF0YS5hd3MubG9nX2luZm8gPSB7XG4gICAgICAgICAgczNidWNrZXQ6IHJhbmRvbUFycmF5SXRlbShBV1MuYnVja2V0cyksXG4gICAgICAgICAgbG9nX2ZpbGU6IGBtYWNpZS8ke2Zvcm1hdERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLFxuICAgICAgICAgICAgJ1kvTS9EL2gnXG4gICAgICAgICAgKX0vZmlyZWhvc2VfbWFjaWUtMS0ke2Zvcm1hdERhdGUoXG4gICAgICAgICAgICBuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLFxuICAgICAgICAgICAgJ1ktTS1ELWgtbS1zJ1xuICAgICAgICAgICl9LTBiMWVkZTk0LWYzOTktNGU1NC04ODE1LTFjNjU4N2VlZTNiMS8vZmlyZWhvc2VfZ3VhcmRkdXR5LTEtJHtmb3JtYXREYXRlKFxuICAgICAgICAgICAgbmV3IERhdGUoYWxlcnQudGltZXN0YW1wKSxcbiAgICAgICAgICAgICdZLU0tRC1oLW0tcy1sJ1xuICAgICAgICAgICl9YjViOWItZWM2Mi00YTA3LTg1ZDctYjE2OTliOWMwMzFlLnppcGAsXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0LmRhdGEuYXdzWydjcmVhdGVkLWF0J10gPSBmb3JtYXREYXRlKGJlZm9yZURhdGUsICdZLU0tRFRoOm06cy5sWicpO1xuICAgICAgICBhbGVydC5kYXRhLmF3cy51cmwgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHModHlwZUFsZXJ0LmRhdGEuYXdzLnVybCwgYWxlcnQpO1xuICAgICAgICBhbGVydC5kYXRhLmF3c1snYWxlcnQtYXJuJ10gPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHModHlwZUFsZXJ0LmRhdGEuYXdzWydhbGVydC1hcm4nXSwgYWxlcnQpO1xuXG4gICAgICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLnR5cGVBbGVydC5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZmlyZWR0aW1lcyA9IHJhbmRvbUludGVydmFsSW50ZWdlcigxLCA1MCk7XG5cbiAgICAgICAgYWxlcnQuZGVjb2RlciA9IHsgLi4udHlwZUFsZXJ0LmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSB0eXBlQWxlcnQubG9jYXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgfVxuICAgIH1cbiAgICBhbGVydC5pbnB1dCA9IHsgdHlwZTogJ2xvZycgfTtcbiAgICBhbGVydC5HZW9Mb2NhdGlvbiA9IHJhbmRvbUFycmF5SXRlbShHZW9Mb2NhdGlvbik7XG4gIH1cblxuICBpZiAocGFyYW1zLm9mZmljZSkge1xuICAgIGFsZXJ0LmFnZW50ID0ge1xuICAgICAgaWQ6ICcwMDAnLFxuICAgICAgaXA6IGFsZXJ0LmFnZW50LmlwLFxuICAgICAgbmFtZTogYWxlcnQuYWdlbnQubmFtZVxuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLm1hbmFnZXIgJiYgcGFyYW1zLm1hbmFnZXIubmFtZSkge1xuICAgICAgYWxlcnQuYWdlbnQubmFtZSA9IHBhcmFtcy5tYW5hZ2VyLm5hbWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGJlZm9yZURhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApIC0gMyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIGNvbnN0IEludHJhSUQgPSByYW5kb21BcnJheUl0ZW0oT2ZmaWNlLmFycmF5VXVpZE9mZmljZSk7XG4gICAgY29uc3QgT3JnSUQgPSByYW5kb21BcnJheUl0ZW0oT2ZmaWNlLmFycmF5VXVpZE9mZmljZSk7XG4gICAgY29uc3Qgb2JqSUQgPSByYW5kb21BcnJheUl0ZW0oT2ZmaWNlLmFycmF5VXVpZE9mZmljZSk7XG4gICAgY29uc3QgdXNlcktleSA9IHJhbmRvbUFycmF5SXRlbShPZmZpY2UuYXJyYXlVdWlkT2ZmaWNlKTtcbiAgICBjb25zdCB1c2VySUQgPSByYW5kb21BcnJheUl0ZW0oT2ZmaWNlLmFycmF5VXNlcklkKTtcbiAgICBjb25zdCB1c2VyVHlwZSA9IHJhbmRvbUFycmF5SXRlbShbMCwgMiwgNF0pO1xuICAgIGNvbnN0IHJlc3VsdFN0YXR1cyA9IHJhbmRvbUFycmF5SXRlbShbJ1N1Y2NlZWRlZCcsICdQYXJ0aWFsbHlTdWNjZWVkZWQnLCAnRmFpbGVkJ10pO1xuICAgIGNvbnN0IGxvZyA9IHJhbmRvbUFycmF5SXRlbShPZmZpY2UuYXJyYXlMb2dzKTtcbiAgICBjb25zdCBydWxlRGF0YSA9IE9mZmljZS5vZmZpY2VSdWxlc1tsb2cuUmVjb3JkVHlwZV07XG5cbiAgICBhbGVydC5hZ2VudC5pZCA9ICcwMDAnXG4gICAgYWxlcnQucnVsZSA9IHJ1bGVEYXRhLnJ1bGU7XG4gICAgYWxlcnQuZGVjb2RlciA9IHJhbmRvbUFycmF5SXRlbShPZmZpY2UuYXJyYXlEZWNvZGVyT2ZmaWNlKTtcbiAgICBhbGVydC5HZW9Mb2NhdGlvbiA9IHJhbmRvbUFycmF5SXRlbShHZW9Mb2NhdGlvbik7XG4gICAgYWxlcnQuZGF0YS5pbnRlZ3JhdGlvbiA9ICdPZmZpY2UzNjUnO1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gT2ZmaWNlLmFycmF5TG9jYXRpb25PZmZpY2U7XG4gICAgYWxlcnQuZGF0YS5vZmZpY2UzNjUgPSB7XG4gICAgICAuLi5sb2csXG4gICAgICAuLi5ydWxlRGF0YS5kYXRhLm9mZmljZTM2NSxcbiAgICAgIElkOiBJbnRyYUlELFxuICAgICAgQ3JlYXRpb25UaW1lOiBmb3JtYXREYXRlKGJlZm9yZURhdGUsICdZLU0tRFRoOm06cy5sWicpLFxuICAgICAgT3JnYW5pemF0aW9uSWQ6IE9yZ0lELFxuICAgICAgVXNlclR5cGU6IHVzZXJUeXBlLFxuICAgICAgVXNlcktleTogdXNlcktleSxcbiAgICAgIFJlc3VsdFN0YXR1czogcmVzdWx0U3RhdHVzLFxuICAgICAgT2JqZWN0SWQ6IG9iaklELFxuICAgICAgVXNlcklkOiB1c2VySUQsXG4gICAgICBDbGllbnRJUDogcmFuZG9tQXJyYXlJdGVtKE9mZmljZS5hcnJheUlwKSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5nY3ApIHtcbiAgICBhbGVydC5ydWxlID0gcmFuZG9tQXJyYXlJdGVtKEdDUC5hcnJheVJ1bGVzKTtcbiAgICBhbGVydC5kYXRhLmludGVncmF0aW9uID0gJ2djcCc7XG4gICAgYWxlcnQuZGF0YS5nY3AgPSB7XG4gICAgICBpbnNlcnRJZDogJ3VrMXpwZTIzeGNqJyxcbiAgICAgIGpzb25QYXlsb2FkOiB7XG4gICAgICAgIGF1dGhBbnN3ZXI6IEdDUC5hcnJheUF1dGhBbnN3ZXJbTWF0aC5mbG9vcihHQ1AuYXJyYXlBdXRoQW5zd2VyLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgcHJvdG9jb2w6IEdDUC5hcnJheVByb3RvY29sW01hdGguZmxvb3IoR0NQLmFycmF5UHJvdG9jb2wubGVuZ3RoICogTWF0aC5yYW5kb20oKSldLFxuICAgICAgICBxdWVyeU5hbWU6IEdDUC5hcnJheVF1ZXJ5TmFtZVtNYXRoLmZsb29yKEdDUC5hcnJheVF1ZXJ5TmFtZS5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV0sXG4gICAgICAgIHF1ZXJ5VHlwZTogR0NQLmFycmF5UXVlcnlUeXBlW01hdGguZmxvb3IoR0NQLmFycmF5UXVlcnlUeXBlLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgcmVzcG9uc2VDb2RlOlxuICAgICAgICAgIEdDUC5hcnJheVJlc3BvbnNlQ29kZVtNYXRoLmZsb29yKEdDUC5hcnJheVJlc3BvbnNlQ29kZS5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV0sXG4gICAgICAgIHNvdXJjZUlQOiBHQ1AuYXJyYXlTb3VyY2VJUFtNYXRoLmZsb29yKEdDUC5hcnJheVNvdXJjZUlQLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgdm1JbnN0YW5jZUlkOiAnNDk4MDExMzkyODgwMDgzOTY4MC4wMDAwMDAnLFxuICAgICAgICB2bUluc3RhbmNlTmFtZTogJzUzMTMzOTIyOTUzMS5pbnN0YW5jZS0xJyxcbiAgICAgIH0sXG4gICAgICBsb2dOYW1lOiAncHJvamVjdHMvd2F6dWgtZGV2L2xvZ3MvZG5zLmdvb2dsZWFwaXMuY29tJTJGZG5zX3F1ZXJpZXMnLFxuICAgICAgcmVjZWl2ZVRpbWVzdGFtcDogJzIwMTktMTEtMTFUMDI6NDI6MDUuMDU4NTMxNTJaJyxcbiAgICAgIHJlc291cmNlOiB7XG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIGxvY2F0aW9uOiBHQ1AuYXJyYXlMb2NhdGlvbltNYXRoLmZsb29yKEdDUC5hcnJheUxvY2F0aW9uLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgICBwcm9qZWN0X2lkOiBHQ1AuYXJyYXlQcm9qZWN0W01hdGguZmxvb3IoR0NQLmFycmF5UHJvamVjdC5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV0sXG4gICAgICAgICAgc291cmNlX3R5cGU6IEdDUC5hcnJheVNvdXJjZVR5cGVbTWF0aC5mbG9vcihHQ1AuYXJyYXlTb3VyY2VUeXBlLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgICB0YXJnZXRfdHlwZTogJ2V4dGVybmFsJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogR0NQLmFycmF5VHlwZVtNYXRoLmZsb29yKEdDUC5hcnJheVR5cGUubGVuZ3RoICogTWF0aC5yYW5kb20oKSldLFxuICAgICAgfSxcbiAgICAgIHNldmVyaXR5OiBHQ1AuYXJyYXlTZXZlcml0eVtNYXRoLmZsb29yKEdDUC5hcnJheVNldmVyaXR5Lmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgIHRpbWVzdGFtcDogJzIwMTktMTEtMTFUMDI6NDI6MDQuMzQ5MjE0NDlaJyxcbiAgICB9O1xuXG4gICAgYWxlcnQuR2VvTG9jYXRpb24gPSByYW5kb21BcnJheUl0ZW0oR2VvTG9jYXRpb24pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hdWRpdCkge1xuICAgIGxldCBkYXRhQXVkaXQgPSByYW5kb21BcnJheUl0ZW0oQXVkaXQuZGF0YUF1ZGl0KTtcbiAgICBhbGVydC5kYXRhID0gZGF0YUF1ZGl0LmRhdGE7XG4gICAgYWxlcnQuZGF0YS5hdWRpdC5maWxlXG4gICAgICA/IGFsZXJ0LmRhdGEuYXVkaXQuZmlsZS5uYW1lID09PSAnJ1xuICAgICAgICA/IChhbGVydC5kYXRhLmF1ZGl0LmZpbGUubmFtZSA9IHJhbmRvbUFycmF5SXRlbShBdWRpdC5maWxlTmFtZSkpXG4gICAgICAgIDogbnVsbFxuICAgICAgOiBudWxsO1xuICAgIGFsZXJ0LnJ1bGUgPSBkYXRhQXVkaXQucnVsZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2lzY2F0KSB7XG4gICAgYWxlcnQucnVsZS5ncm91cHMucHVzaCgnY2lzY2F0Jyk7XG4gICAgYWxlcnQuZGF0YS5jaXMgPSB7fTtcblxuICAgIGFsZXJ0LmRhdGEuY2lzLmdyb3VwID0gcmFuZG9tQXJyYXlJdGVtKENJU0NBVC5ncm91cCk7XG4gICAgYWxlcnQuZGF0YS5jaXMuZmFpbCA9IHJhbmRvbUludGVydmFsSW50ZWdlcigwLCAxMDApO1xuICAgIGFsZXJ0LmRhdGEuY2lzLnJ1bGVfdGl0bGUgPSByYW5kb21BcnJheUl0ZW0oQ0lTQ0FULnJ1bGVUaXRsZSk7XG4gICAgYWxlcnQuZGF0YS5jaXMubm90Y2hlY2tlZCA9IHJhbmRvbUludGVydmFsSW50ZWdlcigwLCAxMDApO1xuICAgIGFsZXJ0LmRhdGEuY2lzLnNjb3JlID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDEwMCk7XG4gICAgYWxlcnQuZGF0YS5jaXMucGFzcyA9IHJhbmRvbUludGVydmFsSW50ZWdlcigwLCAxMDApO1xuICAgIGFsZXJ0LmRhdGEuY2lzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKHJhbmRvbURhdGUoKSk7XG4gICAgYWxlcnQuZGF0YS5jaXMuZXJyb3IgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMCwgMSk7XG4gICAgYWxlcnQuZGF0YS5jaXMuYmVuY2htYXJrID0gcmFuZG9tQXJyYXlJdGVtKENJU0NBVC5iZW5jaG1hcmspO1xuICAgIGFsZXJ0LmRhdGEuY2lzLnVua25vd24gPSByYW5kb21JbnRlcnZhbEludGVnZXIoMCwgMTAwKTtcbiAgICBhbGVydC5kYXRhLmNpcy5ub3RjaGVja2VkID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDUpO1xuICAgIGFsZXJ0LmRhdGEuY2lzLnJlc3VsdCA9IHJhbmRvbUFycmF5SXRlbShDSVNDQVQucmVzdWx0KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZG9ja2VyKSB7XG4gICAgY29uc3QgZGF0YURvY2tlciA9IHJhbmRvbUFycmF5SXRlbShEb2NrZXIuZGF0YURvY2tlcik7XG4gICAgYWxlcnQuZGF0YSA9IHt9O1xuICAgIGFsZXJ0LmRhdGEgPSBkYXRhRG9ja2VyLmRhdGE7XG4gICAgYWxlcnQucnVsZSA9IGRhdGFEb2NrZXIucnVsZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubWl0cmUpIHtcbiAgICBhbGVydC5ydWxlID0gcmFuZG9tQXJyYXlJdGVtKE1pdHJlLmFycmF5TWl0cmVSdWxlcyk7XG4gICAgYWxlcnQubG9jYXRpb24gPSByYW5kb21BcnJheUl0ZW0oTWl0cmUuYXJyYXlMb2NhdGlvbik7XG4gIH1cblxuICBpZiAocGFyYW1zLm9wZW5zY2FwKSB7XG4gICAgYWxlcnQuZGF0YSA9IHt9O1xuICAgIGFsZXJ0LmRhdGEub3NjYXAgPSB7fTtcbiAgICBjb25zdCB0eXBlQWxlcnQgPSB7IC4uLnJhbmRvbUFycmF5SXRlbShPcGVuU0NBUC5kYXRhKSB9O1xuICAgIGFsZXJ0LmRhdGEgPSB7IC4uLnR5cGVBbGVydC5kYXRhIH07XG4gICAgYWxlcnQucnVsZSA9IHsgLi4udHlwZUFsZXJ0LnJ1bGUgfTtcbiAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMiwgMTApO1xuICAgIGFsZXJ0LmlucHV0ID0ge1xuICAgICAgdHlwZTogJ2xvZycsXG4gICAgfTtcbiAgICBhbGVydC5kZWNvZGVyID0geyAuLi5PcGVuU0NBUC5kZWNvZGVyIH07XG4gICAgYWxlcnQubG9jYXRpb24gPSBPcGVuU0NBUC5sb2NhdGlvbjtcbiAgICBpZiAodHlwZUFsZXJ0LmZ1bGxfbG9nKSB7XG4gICAgICBhbGVydC5mdWxsX2xvZyA9IGludGVycG9sYXRlQWxlcnRQcm9wcyh0eXBlQWxlcnQuZnVsbF9sb2csIGFsZXJ0KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFyYW1zLnJvb3RjaGVjaykge1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gUG9saWN5TW9uaXRvcmluZy5sb2NhdGlvbjtcbiAgICBhbGVydC5kZWNvZGVyID0geyAuLi5Qb2xpY3lNb25pdG9yaW5nLmRlY29kZXIgfTtcbiAgICBhbGVydC5pbnB1dCA9IHtcbiAgICAgIHR5cGU6ICdsb2cnLFxuICAgIH07XG5cbiAgICBjb25zdCBhbGVydENhdGVnb3J5ID0gcmFuZG9tQXJyYXlJdGVtKFsnUm9vdGtpdCcsICdUcm9qYW4nXSk7XG5cbiAgICBzd2l0Y2ggKGFsZXJ0Q2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgJ1Jvb3RraXQnOiB7XG4gICAgICAgIGNvbnN0IHJvb3RraXRDYXRlZ29yeSA9IHJhbmRvbUFycmF5SXRlbShPYmplY3Qua2V5cyhQb2xpY3lNb25pdG9yaW5nLnJvb3RraXRzKSk7XG4gICAgICAgIGNvbnN0IHJvb3RraXQgPSByYW5kb21BcnJheUl0ZW0oUG9saWN5TW9uaXRvcmluZy5yb290a2l0c1tyb290a2l0Q2F0ZWdvcnldKTtcbiAgICAgICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgICAgICB0aXRsZTogaW50ZXJwb2xhdGVBbGVydFByb3BzKFBvbGljeU1vbml0b3Jpbmcucm9vdGtpdHNEYXRhLmRhdGEudGl0bGUsIGFsZXJ0LCB7XG4gICAgICAgICAgICBfcm9vdGtpdF9jYXRlZ29yeTogcm9vdGtpdENhdGVnb3J5LFxuICAgICAgICAgICAgX3Jvb3RraXRfZmlsZTogcm9vdGtpdCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uUG9saWN5TW9uaXRvcmluZy5yb290a2l0c0RhdGEucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTApO1xuICAgICAgICBhbGVydC5mdWxsX2xvZyA9IGFsZXJ0LmRhdGEudGl0bGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnVHJvamFuJzoge1xuICAgICAgICBjb25zdCB0cm9qYW4gPSByYW5kb21BcnJheUl0ZW0oUG9saWN5TW9uaXRvcmluZy50cm9qYW5zKTtcbiAgICAgICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgICAgICBmaWxlOiB0cm9qYW4uZmlsZSxcbiAgICAgICAgICB0aXRsZTogJ1Ryb2phbmVkIHZlcnNpb24gb2YgZmlsZSBkZXRlY3RlZC4nLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5ydWxlID0geyAuLi5Qb2xpY3lNb25pdG9yaW5nLnRyb2phbnNEYXRhLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5maXJlZHRpbWVzID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEsIDEwKTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoUG9saWN5TW9uaXRvcmluZy50cm9qYW5zRGF0YS5mdWxsX2xvZywgYWxlcnQsIHtcbiAgICAgICAgICBfdHJvamFuX3NpZ25hdHVyZTogdHJvamFuLnNpZ25hdHVyZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc3lzY2hlY2spIHtcbiAgICBhbGVydC5ydWxlLmdyb3Vwcy5wdXNoKCdzeXNjaGVjaycpO1xuICAgIGFsZXJ0LnN5c2NoZWNrID0ge307XG4gICAgYWxlcnQuc3lzY2hlY2suZXZlbnQgPSByYW5kb21BcnJheUl0ZW0oSW50ZWdyaXR5TW9uaXRvcmluZy5ldmVudHMpO1xuICAgIGFsZXJ0LnN5c2NoZWNrLnBhdGggPSByYW5kb21BcnJheUl0ZW0oXG4gICAgICBhbGVydC5hZ2VudC5uYW1lID09PSAnV2luZG93cydcbiAgICAgICAgPyBJbnRlZ3JpdHlNb25pdG9yaW5nLnBhdGhzV2luZG93c1xuICAgICAgICA6IEludGVncml0eU1vbml0b3JpbmcucGF0aHNMaW51eFxuICAgICk7XG4gICAgYWxlcnQuc3lzY2hlY2sudW5hbWVfYWZ0ZXIgPSByYW5kb21BcnJheUl0ZW0oVXNlcnMpO1xuICAgIGFsZXJ0LnN5c2NoZWNrLmduYW1lX2FmdGVyID0gJ3Jvb3QnO1xuICAgIGFsZXJ0LnN5c2NoZWNrLm10aW1lX2FmdGVyID0gbmV3IERhdGUocmFuZG9tRGF0ZSgpKTtcbiAgICBhbGVydC5zeXNjaGVjay5zaXplX2FmdGVyID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDY1KTtcbiAgICBhbGVydC5zeXNjaGVjay51aWRfYWZ0ZXIgPSByYW5kb21BcnJheUl0ZW0oSW50ZWdyaXR5TW9uaXRvcmluZy51aWRfYWZ0ZXIpO1xuICAgIGFsZXJ0LnN5c2NoZWNrLmdpZF9hZnRlciA9IHJhbmRvbUFycmF5SXRlbShJbnRlZ3JpdHlNb25pdG9yaW5nLmdpZF9hZnRlcik7XG4gICAgYWxlcnQuc3lzY2hlY2sucGVybV9hZnRlciA9ICdydy1yLS1yLS0nO1xuICAgIGFsZXJ0LnN5c2NoZWNrLmlub2RlX2FmdGVyID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDEwMDAwMCk7XG4gICAgc3dpdGNoIChhbGVydC5zeXNjaGVjay5ldmVudCkge1xuICAgICAgY2FzZSAnYWRkZWQnOlxuICAgICAgICBhbGVydC5ydWxlID0gSW50ZWdyaXR5TW9uaXRvcmluZy5yZWd1bGF0b3J5WzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vZGlmaWVkJzpcbiAgICAgICAgYWxlcnQucnVsZSA9IEludGVncml0eU1vbml0b3JpbmcucmVndWxhdG9yeVsxXTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2subXRpbWVfYmVmb3JlID0gbmV3IERhdGUoYWxlcnQuc3lzY2hlY2subXRpbWVfYWZ0ZXIuZ2V0VGltZSgpIC0gMTAwMCAqIDYwKTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2suaW5vZGVfYmVmb3JlID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDEwMDAwMCk7XG4gICAgICAgIGFsZXJ0LnN5c2NoZWNrLnNoYTFfYWZ0ZXIgPSByYW5kb21FbGVtZW50cyg0MCwgJ2FiY2RlZjAxMjM0NTY3ODknKTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2suY2hhbmdlZF9hdHRyaWJ1dGVzID0gW3JhbmRvbUFycmF5SXRlbShJbnRlZ3JpdHlNb25pdG9yaW5nLmF0dHJpYnV0ZXMpXTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2subWQ1X2FmdGVyID0gcmFuZG9tRWxlbWVudHMoMzIsICdhYmNkZWYwMTIzNDU2Nzg5Jyk7XG4gICAgICAgIGFsZXJ0LnN5c2NoZWNrLnNoYTI1Nl9hZnRlciA9IHJhbmRvbUVsZW1lbnRzKDYwLCAnYWJjZGVmMDEyMzQ1Njc4OScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RlbGV0ZWQnOlxuICAgICAgICBhbGVydC5ydWxlID0gSW50ZWdyaXR5TW9uaXRvcmluZy5yZWd1bGF0b3J5WzJdO1xuICAgICAgICBhbGVydC5zeXNjaGVjay50YWdzID0gW3JhbmRvbUFycmF5SXRlbShJbnRlZ3JpdHlNb25pdG9yaW5nLnRhZ3MpXTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2suc2hhMV9hZnRlciA9IHJhbmRvbUVsZW1lbnRzKDQwLCAnYWJjZGVmMDEyMzQ1Njc4OScpO1xuICAgICAgICBhbGVydC5zeXNjaGVjay5hdWRpdCA9IHtcbiAgICAgICAgICBwcm9jZXNzOiB7XG4gICAgICAgICAgICBuYW1lOiByYW5kb21BcnJheUl0ZW0oUGF0aHMpLFxuICAgICAgICAgICAgaWQ6IHJhbmRvbUludGVydmFsSW50ZWdlcigwLCAxMDAwMDApLFxuICAgICAgICAgICAgcHBpZDogcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDEwMDAwMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlZmZlY3RpdmVfdXNlcjoge1xuICAgICAgICAgICAgbmFtZTogcmFuZG9tQXJyYXlJdGVtKFVzZXJzKSxcbiAgICAgICAgICAgIGlkOiByYW5kb21JbnRlcnZhbEludGVnZXIoMCwgMTAwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIG5hbWU6IHJhbmRvbUFycmF5SXRlbShVc2VycyksXG4gICAgICAgICAgICBpZDogcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDEwMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgbmFtZTogcmFuZG9tQXJyYXlJdGVtKFVzZXJzKSxcbiAgICAgICAgICAgIGlkOiByYW5kb21JbnRlcnZhbEludGVnZXIoMCwgMTAwKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5zeXNjaGVjay5tZDVfYWZ0ZXIgPSByYW5kb21FbGVtZW50cygzMiwgJ2FiY2RlZjAxMjM0NTY3ODknKTtcbiAgICAgICAgYWxlcnQuc3lzY2hlY2suc2hhMjU2X2FmdGVyID0gcmFuZG9tRWxlbWVudHMoNjAsICdhYmNkZWYwMTIzNDU2Nzg5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMudmlydXN0b3RhbCkge1xuICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzLnB1c2goJ3ZpcnVzdG90YWwnKTtcbiAgICBhbGVydC5sb2NhdGlvbiA9ICd2aXJ1c3RvdGFsJztcbiAgICBhbGVydC5kYXRhLnZpcnVzdG90YWwgPSB7fTtcbiAgICBhbGVydC5kYXRhLnZpcnVzdG90YWwuZm91bmQgPSByYW5kb21BcnJheUl0ZW0oWycwJywgJzEnLCAnMScsICcxJ10pO1xuXG4gICAgYWxlcnQuZGF0YS52aXJ1c3RvdGFsLnNvdXJjZSA9IHtcbiAgICAgIHNoYTE6IHJhbmRvbUVsZW1lbnRzKDQwLCAnYWJjZGVmMDEyMzQ1Njc4OScpLFxuICAgICAgZmlsZTogcmFuZG9tQXJyYXlJdGVtKFZpcnVzdG90YWwuc291cmNlRmlsZSksXG4gICAgICBhbGVydF9pZDogYCR7cmFuZG9tRWxlbWVudHMoMTAsICcwMTIzNDU2Nzg5Jyl9LiR7cmFuZG9tRWxlbWVudHMoNywgJzAxMjM0NTY3ODknKX1gLFxuICAgICAgbWQ1OiByYW5kb21FbGVtZW50cygzMiwgJ2FiY2RlZjAxMjM0NTY3ODknKSxcbiAgICB9O1xuXG4gICAgaWYgKGFsZXJ0LmRhdGEudmlydXN0b3RhbC5mb3VuZCA9PT0gJzEnKSB7XG4gICAgICBhbGVydC5kYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzID0gcmFuZG9tQXJyYXlJdGVtKFZpcnVzdG90YWwubWFsaWNpb3VzKTtcbiAgICAgIGFsZXJ0LmRhdGEudmlydXN0b3RhbC5wb3NpdGl2ZXMgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMCwgNjUpfWA7XG4gICAgICBhbGVydC5kYXRhLnZpcnVzdG90YWwudG90YWwgPVxuICAgICAgICBhbGVydC5kYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzICsgYWxlcnQuZGF0YS52aXJ1c3RvdGFsLnBvc2l0aXZlcztcbiAgICAgIGFsZXJ0LnJ1bGUuZGVzY3JpcHRpb24gPSBgVmlydXNUb3RhbDogQWxlcnQgLSAke2FsZXJ0LmRhdGEudmlydXN0b3RhbC5zb3VyY2UuZmlsZX0gLSAke2FsZXJ0LmRhdGEudmlydXN0b3RhbC5wb3NpdGl2ZXN9IGVuZ2luZXMgZGV0ZWN0ZWQgdGhpcyBmaWxlYDtcbiAgICAgIGFsZXJ0LmRhdGEudmlydXN0b3RhbC5wZXJtYWxpbmsgPSByYW5kb21BcnJheUl0ZW0oVmlydXN0b3RhbC5wZXJtYWxpbmspO1xuICAgICAgYWxlcnQuZGF0YS52aXJ1c3RvdGFsLnNjYW5fZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoYWxlcnQudGltZXN0YW1wKSAtIDQgKiA2MDAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0LmRhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMgPSAnMCc7XG4gICAgICBhbGVydC5ydWxlLmRlc2NyaXB0aW9uID0gJ1ZpcnVzVG90YWw6IEFsZXJ0IC0gTm8gcmVjb3JkcyBpbiBWaXJ1c1RvdGFsIGRhdGFiYXNlJztcbiAgICB9XG4gIH1cblxuICBpZiAocGFyYW1zLnZ1bG5lcmFiaWxpdGllcykge1xuICAgIGNvbnN0IGRhdGFWdWxuZXJhYmlsaXR5ID0gcmFuZG9tQXJyYXlJdGVtKFZ1bG5lcmFiaWxpdHkuZGF0YSk7XG4gICAgYWxlcnQucnVsZSA9IHtcbiAgICAgIC4uLmRhdGFWdWxuZXJhYmlsaXR5LnJ1bGUsXG4gICAgICBtYWlsOiBmYWxzZSxcbiAgICAgIGdyb3VwczogWyd2dWxuZXJhYmlsaXR5LWRldGVjdG9yJ10sXG4gICAgICBnZHByOiBbJ0lWXzM1LjcuZCddLFxuICAgICAgcGNpX2RzczogWycxMS4yLjEnLCAnMTEuMi4zJ10sXG4gICAgICB0c2M6IFsnQ0M3LjEnLCAnQ0M3LjInXSxcbiAgICB9O1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gJ3Z1bG5lcmFiaWxpdHktZGV0ZWN0b3InO1xuICAgIGFsZXJ0LmRlY29kZXIgPSB7IG5hbWU6ICdqc29uJyB9O1xuICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICAuLi5kYXRhVnVsbmVyYWJpbGl0eS5kYXRhLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFyYW1zLm9zcXVlcnkpIHtcbiAgICBhbGVydC5ydWxlLmdyb3Vwcy5wdXNoKCdvc3F1ZXJ5Jyk7XG4gICAgYWxlcnQuZGF0YS5vc3F1ZXJ5ID0ge307XG4gICAgaWYgKHJhbmRvbUludGVydmFsSW50ZWdlcigwLCA1KSA9PT0gMCkge1xuICAgICAgYWxlcnQucnVsZS5kZXNjcmlwdGlvbiA9ICdvc3F1ZXJ5IGVycm9yIG1lc3NhZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGF0YU9zcXVlcnkgPSByYW5kb21BcnJheUl0ZW0oT3NxdWVyeS5kYXRhT3NxdWVyeSk7XG4gICAgICBhbGVydC5kYXRhLm9zcXVlcnkgPSBkYXRhT3NxdWVyeS5vc3F1ZXJ5O1xuICAgICAgYWxlcnQuZGF0YS5vc3F1ZXJ5LmNhbGVuZGFyVGltZSA9IGFsZXJ0LnRpbWVzdGFtcDtcbiAgICAgIGFsZXJ0LnJ1bGUuZGVzY3JpcHRpb24gPSBkYXRhT3NxdWVyeS5ydWxlLmRlc2NyaXB0aW9uO1xuICAgICAgcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDk5KSA9PT0gMCA/IChhbGVydC5kYXRhLm9zcXVlcnkuYWN0aW9uID0gJ3JlbW92ZWQnKSA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVndWxhdG9yeSBjb21wbGlhbmNlXG4gIGlmIChcbiAgICBwYXJhbXMucGNpX2RzcyB8fFxuICAgIHBhcmFtcy5yZWd1bGF0b3J5X2NvbXBsaWFuY2UgfHxcbiAgICAocGFyYW1zLnJhbmRvbV9wcm9iYWJpbGl0eV9yZWd1bGF0b3J5X2NvbXBsaWFuY2UgJiZcbiAgICAgIHJhbmRvbVByb2JhYmlsaXR5KHBhcmFtcy5yYW5kb21fcHJvYmFiaWxpdHlfcmVndWxhdG9yeV9jb21wbGlhbmNlKSlcbiAgKSB7XG4gICAgYWxlcnQucnVsZS5wY2lfZHNzID0gW3JhbmRvbUFycmF5SXRlbShQQ0lfRFNTKV07XG4gIH1cbiAgaWYgKFxuICAgIHBhcmFtcy5nZHByIHx8XG4gICAgcGFyYW1zLnJlZ3VsYXRvcnlfY29tcGxpYW5jZSB8fFxuICAgIChwYXJhbXMucmFuZG9tX3Byb2JhYmlsaXR5X3JlZ3VsYXRvcnlfY29tcGxpYW5jZSAmJlxuICAgICAgcmFuZG9tUHJvYmFiaWxpdHkocGFyYW1zLnJhbmRvbV9wcm9iYWJpbGl0eV9yZWd1bGF0b3J5X2NvbXBsaWFuY2UpKVxuICApIHtcbiAgICBhbGVydC5ydWxlLmdkcHIgPSBbcmFuZG9tQXJyYXlJdGVtKEdEUFIpXTtcbiAgfVxuICBpZiAoXG4gICAgcGFyYW1zLmdwZzEzIHx8XG4gICAgcGFyYW1zLnJlZ3VsYXRvcnlfY29tcGxpYW5jZSB8fFxuICAgIChwYXJhbXMucmFuZG9tX3Byb2JhYmlsaXR5X3JlZ3VsYXRvcnlfY29tcGxpYW5jZSAmJlxuICAgICAgcmFuZG9tUHJvYmFiaWxpdHkocGFyYW1zLnJhbmRvbV9wcm9iYWJpbGl0eV9yZWd1bGF0b3J5X2NvbXBsaWFuY2UpKVxuICApIHtcbiAgICBhbGVydC5ydWxlLmdwZzEzID0gW3JhbmRvbUFycmF5SXRlbShHUEcxMyldO1xuICB9XG4gIGlmIChcbiAgICBwYXJhbXMuaGlwYWEgfHxcbiAgICBwYXJhbXMucmVndWxhdG9yeV9jb21wbGlhbmNlIHx8XG4gICAgKHBhcmFtcy5yYW5kb21fcHJvYmFiaWxpdHlfcmVndWxhdG9yeV9jb21wbGlhbmNlICYmXG4gICAgICByYW5kb21JbnRlcnZhbEludGVnZXIocGFyYW1zLnJhbmRvbV9wcm9iYWJpbGl0eV9yZWd1bGF0b3J5X2NvbXBsaWFuY2UpKVxuICApIHtcbiAgICBhbGVydC5ydWxlLmhpcGFhID0gW3JhbmRvbUFycmF5SXRlbShISVBBQSldO1xuICB9XG4gIGlmIChcbiAgICBwYXJhbXMubmlzdF84MDBfODMgfHxcbiAgICBwYXJhbXMucmVndWxhdG9yeV9jb21wbGlhbmNlIHx8XG4gICAgKHBhcmFtcy5yYW5kb21fcHJvYmFiaWxpdHlfcmVndWxhdG9yeV9jb21wbGlhbmNlICYmXG4gICAgICByYW5kb21JbnRlcnZhbEludGVnZXIocGFyYW1zLnJhbmRvbV9wcm9iYWJpbGl0eV9yZWd1bGF0b3J5X2NvbXBsaWFuY2UpKVxuICApIHtcbiAgICBhbGVydC5ydWxlLm5pc3RfODAwXzUzID0gW3JhbmRvbUFycmF5SXRlbShOSVNUXzgwMF81MyldO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hdXRoZW50aWNhdGlvbikge1xuICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICBzcmN1c2VyOiByYW5kb21BcnJheUl0ZW0oVXNlcnMpLFxuICAgICAgc3JjcG9ydDogcmFuZG9tQXJyYXlJdGVtKFBvcnRzKSxcbiAgICB9O1xuICAgIGFsZXJ0Lkdlb0xvY2F0aW9uID0gcmFuZG9tQXJyYXlJdGVtKEdlb0xvY2F0aW9uKTtcbiAgICBhbGVydC5kZWNvZGVyID0ge1xuICAgICAgbmFtZTogJ3NzaGQnLFxuICAgICAgcGFyZW50OiAnc3NoZCcsXG4gICAgfTtcbiAgICBhbGVydC5pbnB1dCA9IHtcbiAgICAgIHR5cGU6ICdsb2cnLFxuICAgIH07XG4gICAgYWxlcnQucHJlZGVjb2RlciA9IHtcbiAgICAgIHByb2dyYW1fbmFtZTogJ3NzaGQnLFxuICAgICAgdGltZXN0YW1wOiBmb3JtYXREYXRlKG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksICdOIEQgaDptOnMnKSxcbiAgICAgIGhvc3RuYW1lOiBhbGVydC5tYW5hZ2VyLm5hbWUsXG4gICAgfTtcbiAgICBsZXQgdHlwZUFsZXJ0ID0gcmFuZG9tQXJyYXlJdGVtKFtcbiAgICAgICdpbnZhbGlkTG9naW5QYXNzd29yZCcsXG4gICAgICAnaW52YWxpZExvZ2luVXNlcicsXG4gICAgICAnbXVsdGlwbGVBdXRoZW50aWNhdGlvbkZhaWx1cmVzJyxcbiAgICAgICd3aW5kb3dzSW52YWxpZExvZ2luUGFzc3dvcmQnLFxuICAgICAgJ3VzZXJMb2dpbkZhaWxlZCcsXG4gICAgICAncGFzc3dvcmRDaGVja0ZhaWxlZCcsXG4gICAgICAnbm9uRXhpc3RlbnRVc2VyJyxcbiAgICAgICdicnV0ZUZvcmNlVHJ5aW5nQWNjZXNzU3lzdGVtJyxcbiAgICAgICdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLFxuICAgICAgJ21heGltdW1BdXRoZW50aWNhdGlvbkF0dGVtcHRzRXhjZWVkZWQnLFxuICAgIF0pO1xuXG4gICAgc3dpdGNoICh0eXBlQWxlcnQpIHtcbiAgICAgIGNhc2UgJ2ludmFsaWRMb2dpblBhc3N3b3JkJzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLmludmFsaWRMb2dpblBhc3N3b3JkLmxvY2F0aW9uO1xuICAgICAgICBhbGVydC5ydWxlID0geyAuLi5BdXRoZW50aWNhdGlvbi5pbnZhbGlkTG9naW5QYXNzd29yZC5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzID0gWy4uLkF1dGhlbnRpY2F0aW9uLmludmFsaWRMb2dpblBhc3N3b3JkLnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoQXV0aGVudGljYXRpb24uaW52YWxpZExvZ2luUGFzc3dvcmQuZnVsbF9sb2csIGFsZXJ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdpbnZhbGlkTG9naW5Vc2VyJzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLmludmFsaWRMb2dpblVzZXIubG9jYXRpb247XG4gICAgICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLkF1dGhlbnRpY2F0aW9uLmludmFsaWRMb2dpblVzZXIucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmdyb3VwcyA9IFsuLi5BdXRoZW50aWNhdGlvbi5pbnZhbGlkTG9naW5Vc2VyLnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoQXV0aGVudGljYXRpb24uaW52YWxpZExvZ2luVXNlci5mdWxsX2xvZywgYWxlcnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ211bHRpcGxlQXV0aGVudGljYXRpb25GYWlsdXJlcyc6IHtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSBBdXRoZW50aWNhdGlvbi5tdWx0aXBsZUF1dGhlbnRpY2F0aW9uRmFpbHVyZXMubG9jYXRpb247XG4gICAgICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLkF1dGhlbnRpY2F0aW9uLm11bHRpcGxlQXV0aGVudGljYXRpb25GYWlsdXJlcy5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzID0gWy4uLkF1dGhlbnRpY2F0aW9uLm11bHRpcGxlQXV0aGVudGljYXRpb25GYWlsdXJlcy5ydWxlLmdyb3Vwc107XG4gICAgICAgIGFsZXJ0LnJ1bGUuZnJlcXVlbmN5ID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDUsIDUwKTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoXG4gICAgICAgICAgQXV0aGVudGljYXRpb24ubXVsdGlwbGVBdXRoZW50aWNhdGlvbkZhaWx1cmVzLmZ1bGxfbG9nLFxuICAgICAgICAgIGFsZXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnd2luZG93c0ludmFsaWRMb2dpblBhc3N3b3JkJzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLndpbmRvd3NJbnZhbGlkTG9naW5QYXNzd29yZC5sb2NhdGlvbjtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uQXV0aGVudGljYXRpb24ud2luZG93c0ludmFsaWRMb2dpblBhc3N3b3JkLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4uQXV0aGVudGljYXRpb24ud2luZG93c0ludmFsaWRMb2dpblBhc3N3b3JkLnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQucnVsZS5mcmVxdWVuY3kgPSByYW5kb21JbnRlcnZhbEludGVnZXIoNSwgNTApO1xuICAgICAgICBhbGVydC5kYXRhLndpbiA9IHsgLi4uQXV0aGVudGljYXRpb24ud2luZG93c0ludmFsaWRMb2dpblBhc3N3b3JkLmRhdGFfd2luIH07XG4gICAgICAgIGFsZXJ0LmRhdGEud2luLmV2ZW50ZGF0YS5pcEFkZHJlc3MgPSByYW5kb21BcnJheUl0ZW0oSVBzKTtcbiAgICAgICAgYWxlcnQuZGF0YS53aW4uZXZlbnRkYXRhLmlwUG9ydCA9IHJhbmRvbUFycmF5SXRlbShQb3J0cyk7XG4gICAgICAgIGFsZXJ0LmRhdGEud2luLnN5c3RlbS5jb21wdXRlciA9IHJhbmRvbUFycmF5SXRlbShXaW5fSG9zdG5hbWVzKTtcbiAgICAgICAgYWxlcnQuZGF0YS53aW4uc3lzdGVtLmV2ZW50SUQgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMSwgNjAwKX1gO1xuICAgICAgICBhbGVydC5kYXRhLndpbi5zeXN0ZW0uZXZlbnRSZWNvcmRJRCA9IGAke3JhbmRvbUludGVydmFsSW50ZWdlcigxMDAwMCwgNTAwMDApfWA7XG4gICAgICAgIGFsZXJ0LmRhdGEud2luLnN5c3RlbS5wcm9jZXNzSUQgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTIwMCl9YDtcbiAgICAgICAgYWxlcnQuZGF0YS53aW4uc3lzdGVtLnN5c3RlbVRpbWUgPSBhbGVydC50aW1lc3RhbXA7XG4gICAgICAgIGFsZXJ0LmRhdGEud2luLnN5c3RlbS5wcm9jZXNzSUQgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTIwMCl9YDtcbiAgICAgICAgYWxlcnQuZGF0YS53aW4uc3lzdGVtLnRhc2sgPSBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTgwMCl9YDtcbiAgICAgICAgYWxlcnQuZGF0YS53aW4uc3lzdGVtLnRocmVhZElEID0gYCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEsIDUwMCl9YDtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoXG4gICAgICAgICAgQXV0aGVudGljYXRpb24ud2luZG93c0ludmFsaWRMb2dpblBhc3N3b3JkLmZ1bGxfbG9nLFxuICAgICAgICAgIGFsZXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndXNlckxvZ2luRmFpbGVkJzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLnVzZXJMb2dpbkZhaWxlZC5sb2NhdGlvbjtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uQXV0aGVudGljYXRpb24udXNlckxvZ2luRmFpbGVkLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4uQXV0aGVudGljYXRpb24udXNlckxvZ2luRmFpbGVkLnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICAgICAgZHN0dXNlcjogcmFuZG9tQXJyYXlJdGVtKFVzZXJzKSxcbiAgICAgICAgICB1aWQ6IGAke3JhbmRvbUludGVydmFsSW50ZWdlcigwLCA1MCl9YCxcbiAgICAgICAgICBldWlkOiBgJHtyYW5kb21JbnRlcnZhbEludGVnZXIoMCwgNTApfWAsXG4gICAgICAgICAgdHR5OiAnc3NoJyxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQuZGVjb2RlciA9IHsgLi4uQXV0aGVudGljYXRpb24udXNlckxvZ2luRmFpbGVkLmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoQXV0aGVudGljYXRpb24udXNlckxvZ2luRmFpbGVkLmZ1bGxfbG9nLCBhbGVydCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAncGFzc3dvcmRDaGVja0ZhaWxlZCc6IHtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSBBdXRoZW50aWNhdGlvbi5wYXNzd29yZENoZWNrRmFpbGVkLmxvY2F0aW9uO1xuICAgICAgICBhbGVydC5ydWxlID0geyAuLi5BdXRoZW50aWNhdGlvbi5wYXNzd29yZENoZWNrRmFpbGVkLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4uQXV0aGVudGljYXRpb24ucGFzc3dvcmRDaGVja0ZhaWxlZC5ydWxlLmdyb3Vwc107XG4gICAgICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICAgICAgc3JjdXNlcjogcmFuZG9tQXJyYXlJdGVtKFVzZXJzKSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQucHJlZGVjb2Rlci5wcm9ncmFtX25hbWUgPSAndW5peF9jaGtwd2QnO1xuICAgICAgICBhbGVydC5kZWNvZGVyID0geyAuLi5BdXRoZW50aWNhdGlvbi5wYXNzd29yZENoZWNrRmFpbGVkLmRlY29kZXIgfTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoQXV0aGVudGljYXRpb24ucGFzc3dvcmRDaGVja0ZhaWxlZC5mdWxsX2xvZywgYWxlcnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ25vbkV4aXN0ZW50VXNlcic6IHtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSBBdXRoZW50aWNhdGlvbi5ub25FeGlzdGVudFVzZXIubG9jYXRpb247XG4gICAgICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLkF1dGhlbnRpY2F0aW9uLm5vbkV4aXN0ZW50VXNlci5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzID0gWy4uLkF1dGhlbnRpY2F0aW9uLm5vbkV4aXN0ZW50VXNlci5ydWxlLmdyb3Vwc107XG4gICAgICAgIGFsZXJ0LmZ1bGxfbG9nID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKEF1dGhlbnRpY2F0aW9uLm5vbkV4aXN0ZW50VXNlci5mdWxsX2xvZywgYWxlcnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2JydXRlRm9yY2VUcnlpbmdBY2Nlc3NTeXN0ZW0nOiB7XG4gICAgICAgIGFsZXJ0LmxvY2F0aW9uID0gQXV0aGVudGljYXRpb24uYnJ1dGVGb3JjZVRyeWluZ0FjY2Vzc1N5c3RlbS5sb2NhdGlvbjtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uQXV0aGVudGljYXRpb24uYnJ1dGVGb3JjZVRyeWluZ0FjY2Vzc1N5c3RlbS5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzID0gWy4uLkF1dGhlbnRpY2F0aW9uLmJydXRlRm9yY2VUcnlpbmdBY2Nlc3NTeXN0ZW0ucnVsZS5ncm91cHNdO1xuICAgICAgICBhbGVydC5mdWxsX2xvZyA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi5icnV0ZUZvcmNlVHJ5aW5nQWNjZXNzU3lzdGVtLmZ1bGxfbG9nLFxuICAgICAgICAgIGFsZXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAncmV2ZXJzZUxvb2NrdXBFcnJvcic6IHtcbiAgICAgICAgYWxlcnQubG9jYXRpb24gPSBBdXRoZW50aWNhdGlvbi5yZXZlcnNlTG9vY2t1cEVycm9yLmxvY2F0aW9uO1xuICAgICAgICBhbGVydC5ydWxlID0geyAuLi5BdXRoZW50aWNhdGlvbi5yZXZlcnNlTG9vY2t1cEVycm9yLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4uQXV0aGVudGljYXRpb24ucmV2ZXJzZUxvb2NrdXBFcnJvci5ydWxlLmdyb3Vwc107XG4gICAgICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICAgICAgc3JjaXA6IHJhbmRvbUFycmF5SXRlbShJUHMpLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5mdWxsX2xvZyA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhBdXRoZW50aWNhdGlvbi5yZXZlcnNlTG9vY2t1cEVycm9yLmZ1bGxfbG9nLCBhbGVydCk7XG4gICAgICB9XG4gICAgICBjYXNlICdpbnNlY3VyZUNvbm5lY3Rpb25BdHRlbXB0Jzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLmluc2VjdXJlQ29ubmVjdGlvbkF0dGVtcHQubG9jYXRpb247XG4gICAgICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLkF1dGhlbnRpY2F0aW9uLmluc2VjdXJlQ29ubmVjdGlvbkF0dGVtcHQucnVsZSB9O1xuICAgICAgICBhbGVydC5ydWxlLmdyb3VwcyA9IFsuLi5BdXRoZW50aWNhdGlvbi5pbnNlY3VyZUNvbm5lY3Rpb25BdHRlbXB0LnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICAgICAgc3JjcG9ydDogcmFuZG9tQXJyYXlJdGVtKFBvcnRzKSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHMoXG4gICAgICAgICAgQXV0aGVudGljYXRpb24uaW5zZWN1cmVDb25uZWN0aW9uQXR0ZW1wdC5mdWxsX2xvZyxcbiAgICAgICAgICBhbGVydFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSAnYXV0aGVudGljYXRpb25TdWNjZXNzJzoge1xuICAgICAgICBhbGVydC5sb2NhdGlvbiA9IEF1dGhlbnRpY2F0aW9uLmF1dGhlbnRpY2F0aW9uU3VjY2Vzcy5sb2NhdGlvbjtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uQXV0aGVudGljYXRpb24uYXV0aGVudGljYXRpb25TdWNjZXNzLnJ1bGUgfTtcbiAgICAgICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4uQXV0aGVudGljYXRpb24uYXV0aGVudGljYXRpb25TdWNjZXNzLnJ1bGUuZ3JvdXBzXTtcbiAgICAgICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICAgICAgc3JjcG9ydDogcmFuZG9tQXJyYXlJdGVtKFBvcnRzKSxcbiAgICAgICAgICBkc3R1c2VyOiByYW5kb21BcnJheUl0ZW0oVXNlcnMpLFxuICAgICAgICB9O1xuICAgICAgICBhbGVydC5mdWxsX2xvZyA9IGludGVycG9sYXRlQWxlcnRQcm9wcyhcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi5hdXRoZW50aWNhdGlvblN1Y2Nlc3MuZnVsbF9sb2csXG4gICAgICAgICAgYWxlcnRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ21heGltdW1BdXRoZW50aWNhdGlvbkF0dGVtcHRzRXhjZWVkZWQnOiB7XG4gICAgICAgIGFsZXJ0LmxvY2F0aW9uID0gQXV0aGVudGljYXRpb24ubWF4aW11bUF1dGhlbnRpY2F0aW9uQXR0ZW1wdHNFeGNlZWRlZC5sb2NhdGlvbjtcbiAgICAgICAgYWxlcnQucnVsZSA9IHsgLi4uQXV0aGVudGljYXRpb24ubWF4aW11bUF1dGhlbnRpY2F0aW9uQXR0ZW1wdHNFeGNlZWRlZC5ydWxlIH07XG4gICAgICAgIGFsZXJ0LnJ1bGUuZ3JvdXBzID0gWy4uLkF1dGhlbnRpY2F0aW9uLm1heGltdW1BdXRoZW50aWNhdGlvbkF0dGVtcHRzRXhjZWVkZWQucnVsZS5ncm91cHNdO1xuICAgICAgICBhbGVydC5kYXRhID0ge1xuICAgICAgICAgIHNyY2lwOiByYW5kb21BcnJheUl0ZW0oSVBzKSxcbiAgICAgICAgICBzcmNwb3J0OiByYW5kb21BcnJheUl0ZW0oUG9ydHMpLFxuICAgICAgICAgIGRzdHVzZXI6IHJhbmRvbUFycmF5SXRlbShVc2VycyksXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0LmZ1bGxfbG9nID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKFxuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLm1heGltdW1BdXRoZW50aWNhdGlvbkF0dGVtcHRzRXhjZWVkZWQuZnVsbF9sb2csXG4gICAgICAgICAgYWxlcnRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgIH1cbiAgICB9XG4gICAgYWxlcnQucnVsZS5maXJlZHRpbWVzID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDIsIDE1KTtcbiAgICBhbGVydC5ydWxlLnRzYyA9IFtyYW5kb21BcnJheUl0ZW0odHNjKV07XG4gIH1cblxuICBpZiAocGFyYW1zLnNzaCkge1xuICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICBzcmN1c2VyOiByYW5kb21BcnJheUl0ZW0oVXNlcnMpLFxuICAgICAgc3JjcG9ydDogcmFuZG9tQXJyYXlJdGVtKFBvcnRzKSxcbiAgICB9O1xuICAgIGFsZXJ0Lkdlb0xvY2F0aW9uID0gcmFuZG9tQXJyYXlJdGVtKEdlb0xvY2F0aW9uKTtcbiAgICBhbGVydC5kZWNvZGVyID0ge1xuICAgICAgbmFtZTogJ3NzaGQnLFxuICAgICAgcGFyZW50OiAnc3NoZCcsXG4gICAgfTtcbiAgICBhbGVydC5pbnB1dCA9IHtcbiAgICAgIHR5cGU6ICdsb2cnLFxuICAgIH07XG4gICAgYWxlcnQucHJlZGVjb2RlciA9IHtcbiAgICAgIHByb2dyYW1fbmFtZTogJ3NzaGQnLFxuICAgICAgdGltZXN0YW1wOiBmb3JtYXREYXRlKG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksICdOIEQgaDptOnMnKSxcbiAgICAgIGhvc3RuYW1lOiBhbGVydC5tYW5hZ2VyLm5hbWUsXG4gICAgfTtcbiAgICBjb25zdCB0eXBlQWxlcnQgPSByYW5kb21BcnJheUl0ZW0oU1NILmRhdGEpO1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gdHlwZUFsZXJ0LmxvY2F0aW9uO1xuICAgIGFsZXJ0LnJ1bGUgPSB7IC4uLnR5cGVBbGVydC5ydWxlIH07XG4gICAgYWxlcnQucnVsZS5ncm91cHMgPSBbLi4udHlwZUFsZXJ0LnJ1bGUuZ3JvdXBzXTtcbiAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTUpO1xuICAgIGFsZXJ0LmZ1bGxfbG9nID0gaW50ZXJwb2xhdGVBbGVydFByb3BzKHR5cGVBbGVydC5mdWxsX2xvZywgYWxlcnQpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy53aW5kb3dzKSB7XG4gICAgYWxlcnQucnVsZS5ncm91cHMucHVzaCgnd2luZG93cycpO1xuICAgIGlmIChwYXJhbXMud2luZG93cy5zZXJ2aWNlX2NvbnRyb2xfbWFuYWdlcikge1xuICAgICAgYWxlcnQucHJlZGVjb2RlciA9IHtcbiAgICAgICAgcHJvZ3JhbV9uYW1lOiAnV2luRXZ0TG9nJyxcbiAgICAgICAgdGltZXN0YW1wOiAnMjAyMCBBcHIgMTcgMDU6NTk6MDUnLFxuICAgICAgfTtcbiAgICAgIGFsZXJ0LmlucHV0ID0ge1xuICAgICAgICB0eXBlOiAnbG9nJyxcbiAgICAgIH07XG4gICAgICBhbGVydC5kYXRhID0ge1xuICAgICAgICBleHRyYV9kYXRhOiAnU2VydmljZSBDb250cm9sIE1hbmFnZXInLFxuICAgICAgICBkc3R1c2VyOiAnU1lTVEVNJyxcbiAgICAgICAgc3lzdGVtX25hbWU6IHJhbmRvbUFycmF5SXRlbShXaW5fSG9zdG5hbWVzKSxcbiAgICAgICAgaWQ6ICc3MDQwJyxcbiAgICAgICAgdHlwZTogJ3R5cGUnLFxuICAgICAgICBzdGF0dXM6ICdJTkZPUk1BVElPTicsXG4gICAgICB9O1xuICAgICAgYWxlcnQucnVsZS5kZXNjcmlwdGlvbiA9ICdXaW5kb3dzOiBTZXJ2aWNlIHN0YXJ0dXAgdHlwZSB3YXMgY2hhbmdlZC4nO1xuICAgICAgYWxlcnQucnVsZS5maXJlZHRpbWVzID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEsIDIwKTtcbiAgICAgIGFsZXJ0LnJ1bGUubWFpbCA9IGZhbHNlO1xuICAgICAgYWxlcnQucnVsZS5sZXZlbCA9IDM7XG4gICAgICBhbGVydC5ydWxlLmdyb3Vwcy5wdXNoKCd3aW5kb3dzJywgJ3BvbGljeV9jaGFuZ2VkJyk7XG4gICAgICBhbGVydC5ydWxlLnBjaSA9IFsnMTAuNiddO1xuICAgICAgYWxlcnQucnVsZS5oaXBhYSA9IFsnMTY0LjMxMi5iJ107XG4gICAgICBhbGVydC5ydWxlLmdkcHIgPSBbJ0lWXzM1LjcuZCddO1xuICAgICAgYWxlcnQucnVsZS5uaXN0XzgwMF81MyA9IFsnQVUuNiddO1xuICAgICAgYWxlcnQucnVsZS5pbmZvID0gJ1RoaXMgZG9lcyBub3QgYXBwZWFyIHRvIGJlIGxvZ2dlZCBvbiBXaW5kb3dzIDIwMDAuJztcbiAgICAgIGFsZXJ0LmxvY2F0aW9uID0gJ1dpbkV2dExvZyc7XG4gICAgICBhbGVydC5kZWNvZGVyID0ge1xuICAgICAgICBwYXJlbnQ6ICd3aW5kb3dzJyxcbiAgICAgICAgbmFtZTogJ3dpbmRvd3MnLFxuICAgICAgfTtcbiAgICAgIGFsZXJ0LmZ1bGxfbG9nID0gYDIwMjAgQXByIDE3IDA1OjU5OjA1IFdpbkV2dExvZzogdHlwZTogSU5GT1JNQVRJT04oNzA0MCk6IFNlcnZpY2UgQ29udHJvbCBNYW5hZ2VyOiBTWVNURU06IE5UIEFVVEhPUklUWTogJHthbGVydC5kYXRhLnN5c3RlbV9uYW1lfTogQmFja2dyb3VuZCBJbnRlbGxpZ2VudCBUcmFuc2ZlciBTZXJ2aWNlIGF1dG8gc3RhcnQgZGVtYW5kIHN0YXJ0IEJJVFMgYDsgLy9UT0RPOiBkYXRlXG4gICAgICBhbGVydC5pZCA9IDE4MTQ1O1xuICAgICAgYWxlcnQuZmllbGRzID0ge1xuICAgICAgICB0aW1lc3RhbXA6IGFsZXJ0LnRpbWVzdGFtcCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5hcGFjaGUpIHtcbiAgICBjb25zdCB0eXBlQWxlcnQgPSB7IC4uLkFwYWNoZS5kYXRhWzBdIH07IC8vIHRoZXJlIGlzIG9ubHkgb25lIHR5cGUgYWxlcnQgaW4gZGF0YSBhcnJheSBhdCB0aGUgbW9tZW50LiBSYW5kb21pemUgaWYgYWRkIG1vcmUgdHlwZSBvZiBhbGVydHMgdG8gZGF0YSBhcnJheVxuICAgIGFsZXJ0LmRhdGEgPSB7XG4gICAgICBzcmNpcDogcmFuZG9tQXJyYXlJdGVtKElQcyksXG4gICAgICBzcmNwb3J0OiByYW5kb21BcnJheUl0ZW0oUG9ydHMpLFxuICAgICAgaWQ6IGBBSCR7cmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDEwMDAwLCA5OTk5OSl9YCxcbiAgICB9O1xuICAgIGFsZXJ0Lkdlb0xvY2F0aW9uID0geyAuLi5yYW5kb21BcnJheUl0ZW0oR2VvTG9jYXRpb24pIH07XG4gICAgYWxlcnQucnVsZSA9IHsgLi4udHlwZUFsZXJ0LnJ1bGUgfTtcbiAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMiwgMTApO1xuICAgIGFsZXJ0LmlucHV0ID0geyB0eXBlOiAnbG9nJyB9O1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gQXBhY2hlLmxvY2F0aW9uO1xuICAgIGFsZXJ0LmRlY29kZXIgPSB7IC4uLkFwYWNoZS5kZWNvZGVyIH07XG5cbiAgICBhbGVydC5mdWxsX2xvZyA9IGludGVycG9sYXRlQWxlcnRQcm9wcyh0eXBlQWxlcnQuZnVsbF9sb2csIGFsZXJ0LCB7XG4gICAgICBfdGltZXN0YW1wX2FwYWNoZTogZm9ybWF0RGF0ZShuZXcgRGF0ZShhbGVydC50aW1lc3RhbXApLCAnRSBOIEQgaDptOnMubCBZJyksXG4gICAgICBfcGlfaWQ6IHJhbmRvbUludGVydmFsSW50ZWdlcigxMDAwMCwgMzAwMDApLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy53ZWIpIHtcbiAgICBhbGVydC5pbnB1dCA9IHtcbiAgICAgIHR5cGU6ICdsb2cnLFxuICAgIH07XG4gICAgYWxlcnQuZGF0YSA9IHtcbiAgICAgIHByb3RvY29sOiAnR0VUJyxcbiAgICAgIHNyY2lwOiByYW5kb21BcnJheUl0ZW0oSVBzKSxcbiAgICAgIGlkOiAnNDA0JyxcbiAgICAgIHVybDogcmFuZG9tQXJyYXlJdGVtKFdlYi51cmxzKSxcbiAgICB9O1xuICAgIGFsZXJ0Lkdlb0xvY2F0aW9uID0geyAuLi5yYW5kb21BcnJheUl0ZW0oR2VvTG9jYXRpb24pIH07XG5cbiAgICBjb25zdCB0eXBlQWxlcnQgPSByYW5kb21BcnJheUl0ZW0oV2ViLmRhdGEpO1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJhbmRvbUFycmF5SXRlbShXZWIudXNlckFnZW50cyk7XG4gICAgYWxlcnQucnVsZSA9IHsgLi4udHlwZUFsZXJ0LnJ1bGUgfTtcbiAgICBhbGVydC5ydWxlLmZpcmVkdGltZXMgPSByYW5kb21JbnRlcnZhbEludGVnZXIoMSwgMTApO1xuICAgIGFsZXJ0LmRlY29kZXIgPSB7IC4uLnR5cGVBbGVydC5kZWNvZGVyIH07XG4gICAgYWxlcnQubG9jYXRpb24gPSB0eXBlQWxlcnQubG9jYXRpb247XG4gICAgYWxlcnQuZnVsbF9sb2cgPSBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHModHlwZUFsZXJ0LmZ1bGxfbG9nLCBhbGVydCwge1xuICAgICAgX3VzZXJfYWdlbnQ6IHVzZXJBZ2VudCxcbiAgICAgIF9kYXRlOiBmb3JtYXREYXRlKG5ldyBEYXRlKGFsZXJ0LnRpbWVzdGFtcCksICdEL04vWTpoOm06cyArMDAwMCcpLFxuICAgIH0pO1xuICAgIGlmICh0eXBlQWxlcnQucHJldmlvdXNfb3V0cHV0KSB7XG4gICAgICBjb25zdCBwcmV2aW91c091dHB1dCA9IFtdO1xuICAgICAgY29uc3QgYmVmb3JlU2Vjb25kcyA9IDQ7XG4gICAgICBmb3IgKGxldCBpID0gYmVmb3JlU2Vjb25kczsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBiZWZvcmVEYXRlID0gbmV3IERhdGUobmV3IERhdGUoYWxlcnQudGltZXN0YW1wKSAtICgyICsgaSkgKiAxMDAwKTtcbiAgICAgICAgcHJldmlvdXNPdXRwdXQucHVzaChcbiAgICAgICAgICBpbnRlcnBvbGF0ZUFsZXJ0UHJvcHModHlwZUFsZXJ0LmZ1bGxfbG9nLCBhbGVydCwge1xuICAgICAgICAgICAgX3VzZXJfYWdlbnQ6IHVzZXJBZ2VudCxcbiAgICAgICAgICAgIF9kYXRlOiBmb3JtYXREYXRlKG5ldyBEYXRlKGJlZm9yZURhdGUpLCAnRC9OL1k6aDptOnMgKzAwMDAnKSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgYWxlcnQucHJldmlvdXNfb3V0cHV0ID0gcHJldmlvdXNPdXRwdXQuam9pbignXFxuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5naXRodWIpe1xuICAgIGFsZXJ0LmxvY2F0aW9uID0gR2l0SHViLkxPQ0FUSU9OO1xuICAgIGFsZXJ0LmRlY29kZXIgPSBHaXRIdWIuREVDT0RFUjtcbiAgICBjb25zdCBhbGVydFR5cGUgPSByYW5kb21BcnJheUl0ZW0oR2l0SHViLkFMRVJUX1RZUEVTKTtcbiAgICBjb25zdCBhY3RvciA9IHJhbmRvbUFycmF5SXRlbShHaXRIdWIuQUNUT1JTKTtcbiAgICBhbGVydC5kYXRhID0ge1xuICAgICAgZ2l0aHViIDogeyAuLi5hbGVydFR5cGUuZGF0YS5naXRodWIgfVxuICAgIH07XG4gICAgYWxlcnQuZGF0YS5naXRodWIub3JnID0gcmFuZG9tQXJyYXlJdGVtKEdpdEh1Yi5PUkdBTklaQVRJT05fTkFNRVMpO1xuICAgIGFsZXJ0LmRhdGEuZ2l0aHViLnJlcG8gJiYgKGFsZXJ0LmRhdGEuZ2l0aHViLnJlcG8gPSBgJHthbGVydC5kYXRhLmdpdGh1Yi5vcmd9LyR7cmFuZG9tQXJyYXlJdGVtKEdpdEh1Yi5SRVBPU0lUT1JZX05BTUVTKX1gKTtcbiAgICBhbGVydC5kYXRhLmdpdGh1Yi5yZXBvc2l0b3J5ICYmIChhbGVydC5kYXRhLmdpdGh1Yi5yZXBvc2l0b3J5ID0gYCR7YWxlcnQuZGF0YS5naXRodWIub3JnfS8ke3JhbmRvbUFycmF5SXRlbShHaXRIdWIuUkVQT1NJVE9SWV9OQU1FUyl9YCk7XG4gICAgYWxlcnQuZGF0YS5naXRodWIuYWN0b3IgPSBhY3Rvci5uYW1lO1xuICAgIGFsZXJ0LmRhdGEuZ2l0aHViLmFjdG9yX2xvY2F0aW9uICYmIGFsZXJ0LmRhdGEuZ2l0aHViLmFjdG9yX2xvY2F0aW9uLmNvdW50cnlfY29kZSAmJiAoYWxlcnQuZGF0YS5naXRodWIuYWN0b3JfbG9jYXRpb24uY291bnRyeV9jb2RlID0gYWN0b3IuY291bnRyeV9jb2RlKTtcbiAgICBhbGVydC5kYXRhLmdpdGh1Yi51c2VyICYmIChhbGVydC5kYXRhLmdpdGh1Yi51c2VyID0gcmFuZG9tQXJyYXlJdGVtKEdpdEh1Yi5VU0VSX05BTUVTKSk7XG4gICAgYWxlcnQuZGF0YS5naXRodWIuY29uZmlnICYmIGFsZXJ0LmRhdGEuZ2l0aHViLmNvbmZpZy51cmwgJiYgKGFsZXJ0LmRhdGEuZ2l0aHViLmNvbmZpZy51cmwgPSByYW5kb21BcnJheUl0ZW0oR2l0SHViLlNFUlZFUl9BRERSRVNTX1dFQkhPT0spKTtcbiAgICBhbGVydC5kYXRhLmdpdGh1YlsnQHRpbWVzdGFtcCddID0gYWxlcnQudGltZXN0YW1wO1xuICAgIGFsZXJ0LmRhdGEuZ2l0aHViLmNyZWF0ZWRfYXQgJiYgKGFsZXJ0LmRhdGEuZ2l0aHViLmNyZWF0ZWRfYXQgPSBhbGVydC50aW1lc3RhbXApO1xuICAgIGFsZXJ0LnJ1bGUgPSB7XG4gICAgICAuLi5hbGVydFR5cGUucnVsZVxuICAgIH07XG4gIH1cbiAgXG4gIHJldHVybiBhbGVydDtcbn1cblxuLyoqXG4gKiBHZXQgYSByYW5kb20gYXJyYXkgd2l0aCB1bmlxdWUgdmFsdWVzXG4gKiBAcGFyYW0ge1tdfSBhcnJheSBBcnJheSB0byBleHRyYWN0IHRoZSB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gcmFuZG9tTWF4UmVwZXRpdGlvbnMgTnVtYmVyIG1heCBvZiByYW5kb20gZXh0cmFjdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNvcnQgRnVuY2l0b24gdG8gc2VvcnQgZWxlbWVudHNcbiAqIEByZXR1cm4geyp9IEFycmF5IHdpdGggcmFuZG9tIHZhbHVlcyBleHRyYWN0ZWQgb2YgcGFyYW1hdGVyIGFycmF5IHBhc3NlZFxuICovXG5mdW5jdGlvbiByYW5kb21VbmlxdWVWYWx1ZXNGcm9tQXJyYXkoYXJyYXksIHJhbmRvbU1heFJlcGV0aXRpb25zID0gMSwgc29ydCkge1xuICBjb25zdCByZXBldGl0aW9ucyA9IHJhbmRvbUludGVydmFsSW50ZWdlcigxLCByYW5kb21NYXhSZXBldGl0aW9ucyk7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBldGl0aW9uczsgaSsrKSB7XG4gICAgc2V0LmFkZChhcnJheVtyYW5kb21JbnRlcnZhbEludGVnZXIoMCwgYXJyYXkubGVuZ3RoIC0gMSldKTtcbiAgfVxuICByZXR1cm4gc29ydCA/IEFycmF5LmZyb20oc2V0KS5zb3J0KHNvcnQpIDogQXJyYXkuZnJvbShzZXQpO1xufVxuXG4vKipcbiAqIEdldCBhIGludGVnZXIgd2l0aGluIGEgcmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBNaW5pbXVtIGxpbWl0XG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gTWF4aW11bSBsaW1pdFxuICogQHJldHVybnMge251bWJlcn0gLSBSYW5kb21pemVkIG51bWJlciBpbiBpbnRlcnZhbFxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlcnZhbEludGVnZXIobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSAobWluIC0gMSkpKSArIG1pbjtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gYWxlcnRzXG4gKiBAcGFyYW0geyp9IHBhcmFtc1xuICogQHBhcmFtIHtudW1iZXJ9IG51bUFsZXJ0cyAtIERlZmluZSBudW1iZXIgb2YgYWxlcnRzXG4gKiBAcmV0dXJuIHsqfSAtIFJhbmRvbSBnZW5lcmF0ZWQgYWxlcnRzIGRlZmluZWQgd2l0aCBwYXJhbXNcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVBbGVydHMocGFyYW1zLCBudW1BbGVydHMgPSAxKSB7XG4gIGNvbnN0IGFsZXJ0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFsZXJ0czsgaSsrKSB7XG4gICAgYWxlcnRzLnB1c2goZ2VuZXJhdGVBbGVydChwYXJhbXMpKTtcbiAgfVxuICByZXR1cm4gYWxlcnRzO1xufVxuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBEYXRlIGluIHJhbmdlKDcgZGF5cyBhZ28gLSBub3cpXG4gKiBAcmV0dXJucyB7ZGF0ZX0gLSBSYW5kb20gZGF0ZSBpbiByYW5nZSAoNyBkYXlzIGFnbyAtIG5vdylcbiAqL1xuZnVuY3Rpb24gcmFuZG9tRGF0ZShpbmYsIHN1cCkge1xuICBjb25zdCBub3dUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICBjb25zdCB0aW1lID0gcmFuZG9tSW50ZXJ2YWxJbnRlZ2VyKDAsIDYwNDgwMDAwMCk7IC8vIFJhbmRvbSA3IGRheXMgaW4gbWlsaXNlY29uZHNcblxuICBjb25zdCB1bml4X3RpbWVzdGFtcCA9IG5vd1RpbWVzdGFtcCAtIHRpbWU7IC8vIExhc3QgNyBkYXlzIGZyb20gbm93XG5cbiAgY29uc3QgbGFzdFdlZWsgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcCk7XG4gIHJldHVybiBmb3JtYXREYXRlKGxhc3RXZWVrLCAnWS1NLURUaDptOnMubCswMDAwJyk7XG59XG5cbmNvbnN0IGZvcm1hdHRlck51bWJlciA9IChudW1iZXIsIHplcm9zID0gMCkgPT4gKCcwJy5yZXBlYXQoemVyb3MpICsgYCR7bnVtYmVyfWApLnNsaWNlKC16ZXJvcyk7XG5jb25zdCBtb250aE5hbWVzID0ge1xuICBsb25nOiBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbiAgXSxcbiAgc2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbn07XG5cbmNvbnN0IGRheU5hbWVzID0ge1xuICBsb25nOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gIHNob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxufTtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpIHtcbiAgLy8gSXQgY291bGQgdXNlIFwibW9tZW50XCIgbGlicmFyeSB0byBmb3JtYXQgc3RyaW5ncyB0b29cbiAgY29uc3QgdG9rZW5zID0ge1xuICAgIEQ6IChkKSA9PiBmb3JtYXR0ZXJOdW1iZXIoZC5nZXREYXRlKCksIDIpLCAvLyAwMS0zMVxuICAgIEE6IChkKSA9PiBkYXlOYW1lcy5sb25nW2QuZ2V0RGF5KCldLCAvLyAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXG4gICAgRTogKGQpID0+IGRheU5hbWVzLnNob3J0W2QuZ2V0RGF5KCldLCAvLyAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J1xuICAgIE06IChkKSA9PiBmb3JtYXR0ZXJOdW1iZXIoZC5nZXRNb250aCgpICsgMSwgMiksIC8vIDAxLTEyXG4gICAgSjogKGQpID0+IG1vbnRoTmFtZXMubG9uZ1tkLmdldE1vbnRoKCldLCAvLyAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBOOiAoZCkgPT4gbW9udGhOYW1lcy5zaG9ydFtkLmdldE1vbnRoKCldLCAvLyAnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXG4gICAgWTogKGQpID0+IGQuZ2V0RnVsbFllYXIoKSwgLy8gMjAyMFxuICAgIGg6IChkKSA9PiBmb3JtYXR0ZXJOdW1iZXIoZC5nZXRIb3VycygpLCAyKSwgLy8gMDAtMjNcbiAgICBtOiAoZCkgPT4gZm9ybWF0dGVyTnVtYmVyKGQuZ2V0TWludXRlcygpLCAyKSwgLy8gMDAtNTlcbiAgICBzOiAoZCkgPT4gZm9ybWF0dGVyTnVtYmVyKGQuZ2V0U2Vjb25kcygpLCAyKSwgLy8gMDAtNTlcbiAgICBsOiAoZCkgPT4gZm9ybWF0dGVyTnVtYmVyKGQuZ2V0TWlsbGlzZWNvbmRzKCksIDMpLCAvLyAwMDAtOTk5XG4gIH07XG5cbiAgcmV0dXJuIGZvcm1hdC5zcGxpdCgnJykucmVkdWNlKChhY2N1bSwgdG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW5zW3Rva2VuXSkge1xuICAgICAgcmV0dXJuIGFjY3VtICsgdG9rZW5zW3Rva2VuXShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtICsgdG9rZW47XG4gIH0sICcnKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgd2l0aCBpbnRlcnBvbGF0aW9uc1xuICogQHBhcmFtIHsqfSBhbGVydCBBbGVydCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gZXh0cmEgRXh0cmEgcGFyYW1ldGVycyB0byBpbnRlcnBvbGF0ZSB3aGF0IGFyZW4ndCBpbiBhbGVydCBvYmpldC4gT25seSBhZG1pdCBvbmUgbGV2ZWwgb2YgZGVwdGhcbiAqL1xuZnVuY3Rpb24gaW50ZXJwb2xhdGVBbGVydFByb3BzKHN0ciwgYWxlcnQsIGV4dHJhID0ge30pIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0ci5tYXRjaCgveyhbXFx3XFwuX10rKX0vZyk7XG4gIHJldHVybiAoXG4gICAgKG1hdGNoZXMgJiZcbiAgICAgIG1hdGNoZXMucmVkdWNlKChhY2N1bSwgY3VyKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gY3VyLm1hdGNoKC97KFtcXHdcXC5fXSspfS8pO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG1hdGNoWzFdLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbXMucmVkdWNlKChhLCBjKSA9PiAoYSAmJiBhW2NdKSB8fCBleHRyYVtjXSB8fCB1bmRlZmluZWQsIGFsZXJ0KSB8fCBjdXI7XG4gICAgICAgIHJldHVybiBhY2N1bS5yZXBsYWNlKGN1ciwgdmFsdWUpO1xuICAgICAgfSwgc3RyKSkgfHxcbiAgICBzdHJcbiAgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gcHJvYmFiaWxpdHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9iYWJpbGl0eVxuICogQHBhcmFtIHtudW1iZXJbPTEwMF19IG1heGltdW1cbiAqL1xuZnVuY3Rpb24gcmFuZG9tUHJvYmFiaWxpdHkocHJvYmFiaWxpdHksIG1heGltdW0gPSAxMDApIHtcbiAgcmV0dXJuIHJhbmRvbUludGVydmFsSW50ZWdlcigwLCBtYXhpbXVtKSA8PSBwcm9iYWJpbGl0eTtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVBbGVydCwgZ2VuZXJhdGVBbGVydHMgfTtcbiJdfQ==