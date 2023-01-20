"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayLogs = exports.officeRules = exports.arrayExtendedPropertiesOffice = exports.arrayActorOffice = exports.arrayTargetOffice = exports.arrayUserId = exports.arrayIp = exports.arrayDevicePropertiesOffice = exports.arrayUuidOffice = exports.arrayDecoderOffice = exports.arrayLocationOffice = exports.arrayOfficeGroups = void 0;

/*
 * Wazuh app - Office365 sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const arrayOfficeGroups = ['office365', 'AzureActiveDirectoryStsLogon'];
exports.arrayOfficeGroups = arrayOfficeGroups;
const arrayLocationOffice = 'office365';
exports.arrayLocationOffice = arrayLocationOffice;
const arrayDecoderOffice = [{
  name: 'json'
}];
exports.arrayDecoderOffice = arrayDecoderOffice;
const arrayUuidOffice = ['a8080009-aa85-4d65-a0f0-74fe0331edce', '4e93c8e3-52c1-4a4e-ab69-9e61ccf6cd00', 'd14aa5cb-b070-42f8-8709-0f8afd942fc0', '92a7e893-0f4a-4635-af0d-83891d4ff9c0', 'ce013f05-a783-4186-9d85-5a14998b6111', '4f686e03-7cf6-44a8-9212-b8a91b128082', 'cc58e817-c6d3-4457-b011-54e881e230ec', '825f9d6e-12c0-4b59-807d-1b41c6e48a3a', 'd36253fb-24a1-481c-a199-f778534ccb5f', '9083369e-679b-4e8b-9249-323a51d5bf9c', '6d872bf8-e462-4de8-9e16-c36761050fb7', 'b9a73c0f-55f2-4e95-9626-1c264d02eac3', 'bbab91ad-bc8a-4c86-9010-3c84b39fde0d', 'b5359092-dad2-4060-b93d-3791e4da0dec', 'e8493b26-c1f9-42eb-9756-dfd363149852', 'ca2044fc-32ca-478b-8b0d-ff6fdd3b1e5a', 'a0995136-91d8-4acf-8449-28c275ffb7e3', 'c3482b5d-b1a9-4f44-8df0-a601e18cf5c3', '49fd4642-cfe5-4170-9488-25d847e3579f', '29f96271-5c1b-47ec-9652-a41d5cb17cb4'];
exports.arrayUuidOffice = arrayUuidOffice;
const arrayDevicePropertiesOffice = [{
  Name: 'BrowserType',
  Value: 'Chrome'
}, {
  Name: 'IsCompliantAndManaged',
  Value: 'False'
}, {
  Name: 'SessionId',
  Value: '2a1fb8c4-ceb6-4fa0-826c-3d43f87de897'
}];
exports.arrayDevicePropertiesOffice = arrayDevicePropertiesOffice;
const arrayIp = ['77.231.182.17', '172.217.204.94', '108.177.13.101', '13.226.52.66', '13.226.52.2', '13.226.52.104', '13.226.52.89', '140.82.113.3'];
exports.arrayIp = arrayIp;
const arrayUserId = ['smith@wazuh.com', 'williams@wazuh.com', 'frank@wazuh.com', 'jones@wazuh.com', 'brown@wazuh.com'];
exports.arrayUserId = arrayUserId;
const arrayTargetOffice = [{
  ID: '797f4846-ba00-4fd7-ba43-dac1f8f63013',
  Type: 0
}];
exports.arrayTargetOffice = arrayTargetOffice;
const arrayActorOffice = [{
  ID: 'a39dd957-d295-4548-b537-2055469bafbb',
  Type: 0
}, {
  ID: 'albe@wazuh.com',
  Type: 5
}];
exports.arrayActorOffice = arrayActorOffice;
const arrayExtendedPropertiesOffice = [{
  Name: 'ResultStatusDetail',
  Value: 'Success'
}, {
  Name: 'UserAgent',
  Value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
}, {
  Name: 'RequestType',
  Value: 'OAuth2:Authorize'
}];
exports.arrayExtendedPropertiesOffice = arrayExtendedPropertiesOffice;
const officeRules = {
  1: {
    data: {
      office365: {
        RecordType: 1,
        Subscription: 'Audit.Exchange'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: Events from the Exchange admin audit log.',
      id: '91533',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'ExchangeAdmin', 'hipaa_164.312.b', 'pci_dss_10.2.2', 'pci_dss_10.6.1']
    }
  },
  2: {
    data: {
      office365: {
        RecordType: 2,
        Subscription: 'Audit.Exchange'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: Events from an Exchange mailbox audit log for actions that are performed on a single item, such as creating or receiving an email message.',
      id: '91534',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'ExchangeItem', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  },
  4: {
    data: {
      office365: {
        RecordType: 4,
        Subscription: 'Audit.SharePoint'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: SharePoint events.',
      id: '91536',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'SharePoint', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  },
  6: {
    data: {
      office365: {
        RecordType: 6,
        Subscription: 'Audit.SharePoint'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: SharePoint file operation events.',
      id: '91537',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'SharePointFileOperation', 'hipaa_164.312.b', 'hipaa_164.312.c.1', 'pci_dss_10.6.2', 'pci_dss_11.5']
    }
  },
  8: {
    data: {
      office365: {
        RecordType: 8,
        Subscription: 'Audit.AzureActiveDirectory'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: Azure Active Directory events.',
      id: '91539',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'AzureActiveDirectory', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  },
  14: {
    data: {
      office365: {
        RecordType: 14,
        Subscription: 'Audit.SharePoint'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: SharePoint sharing events.',
      id: '91544',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'SharePoint', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  },
  15: {
    data: {
      office365: {
        RecordType: 15,
        Subscription: 'Audit.AzureActiveDirectory'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: Secure Token Service (STS) logon events in Azure Active Directory.',
      id: '91545',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'AzureActiveDirectoryStsLogon', 'hipaa_164.312.a.2.I,hipaa_164.312.b', 'hipaa_164.312.d', 'hipaa_164.312.e.2.II', 'pci_dss_8.3,pci_dss_10.6.1']
    }
  },
  18: {
    data: {
      office365: {
        RecordType: 18,
        Subscription: 'Audit.General'
      }
    },
    rule: {
      level: 5,
      description: 'Office 365: Admin actions from the Security and Compliance Center.',
      id: '91548',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'SecurityComplianceCenterEOPCmdlet', 'hipaa_164.312.b', 'pci_dss_10.2.2', 'pci_dss_10.6.1']
    }
  },
  36: {
    data: {
      office365: {
        RecordType: 36,
        Subscription: 'Audit.SharePoint'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: SharePoint List events.',
      id: '91564',
      mail: false,
      firedtimes: 3,
      groups: ['office365', 'SharePointListOperation', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  },
  52: {
    data: {
      office365: {
        RecordType: 52,
        Subscription: 'Audit.General'
      }
    },
    rule: {
      level: 3,
      description: 'Office 365: Data Insights REST API events.',
      id: '91580',
      mail: false,
      firedtimes: 4,
      groups: ['office365', 'DataInsightsRestApiAudit', 'hipaa_164.312.b', 'pci_dss_10.6.2']
    }
  }
};
exports.officeRules = officeRules;
const arrayLogs = [{
  Id: '35ab8b89-cfea-4214-5249-08d91a06e537',
  Operation: 'SearchDataInsightsSubscription',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 52,
  UserKey: 'fake@email.not',
  UserType: 5,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  UserId: 'fake@email.not',
  AadAppId: '80ccca67-54bd-44ab-8625-4b79c4dc7775',
  DataType: 'DataInsightsSubscription',
  DatabaseType: 'Directory',
  RelativeUrl: '/DataInsights/DataInsightsService.svc/Find/DataInsightsSubscription?tenantid=0fea4e03-8146-453b-b889-54b4bd11565b',
  ResultCount: '1'
}, {
  Id: '27ee2e95-6f55-4723-f91d-08d91a26b9a4',
  Operation: 'SearchAlert',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 52,
  UserKey: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
  UserType: 0,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  UserId: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
  AadAppId: 'fc780465-2017-40d4-a0c5-307022471b92',
  DataType: 'Alert',
  DatabaseType: 'DataInsights',
  RelativeUrl: '/DataInsights/DataInsightsService.svc/Find/Alert?tenantid=0fea4e03-8146-453b-b889-54b4bd11565b&PageSize=100&Filter=StartDate+eq+2021-04-18T17%3a59%3a40.8820655Z+and+EndDate+eq+2021-05-18T17%3a59%3a40.8820655Z+and+AlertCategory+any+1%2c3%2c7%2c5%2c4+and+AlertSource+eq+%27Office+365+Security+%26+Compliance%27',
  ResultCount: '0'
}, {
  CreationTime: '2021-05-18T17:59:52',
  Id: '7d3a9d35-6c04-4f02-e8fe-08d91a26bc79',
  Operation: 'SearchAlertAggregate',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 52,
  UserKey: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
  UserType: 0,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  UserId: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
  AadAppId: 'fc780465-2017-40d4-a0c5-307022471b92',
  DataType: 'AlertAggregate',
  DatabaseType: 'DataInsights',
  RelativeUrl: '/DataInsights/DataInsightsService.svc/Find/AlertAggregate?tenantid=0fea4e03-8146-453b-b889-54b4bd11565b&PageSize=540&Filter=StartDate+eq+2021-04-18T17%3a59%3a48.3504050Z+and+EndDate+eq+2021-05-18T17%3a59%3a48.3504050Z+and+AlertCategory+any+1%2c3%2c7%2c5%2c4+and+AlertSource+eq+%27Office+365+Security+%26+Compliance%27',
  ResultCount: '0'
}, {
  CreationTime: '2021-05-18T17:59:46',
  Id: 'eb9775cb-59f7-42ea-3ee0-08d91a26b92b',
  Operation: 'ValidaterbacAccessCheck',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 52,
  UserKey: 'fake@email.not',
  UserType: 5,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  UserId: 'fake@email.not',
  AadAppId: 'd6fdaa33-e821-4211-83d0-cf74736489e1',
  DataType: 'rbacAccessCheck',
  RelativeUrl: '/DataInsights/DataInsightsService.svc/validate/rbacAccessCheck?tenantid=0fea4e03-8146-453b-b889-54b4bd11565b',
  ResultCount: '0'
}, {
  CreationTime: '2021-05-18T14:12:53',
  Id: 'c0eada1b-52b2-450d-84df-6d461420d621',
  Operation: 'Get-RetentionCompliancePolicy',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '',
  Parameters: '',
  StartTime: '2021-05-18T14:12:53',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T15:52:26',
  Id: '45a0d7c4-de73-466a-8e6c-c25f9c035714',
  Operation: 'Get-SupervisoryReviewPolicyV2',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '',
  Parameters: '',
  StartTime: '2021-05-18T15:52:26',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T15:52:31',
  Id: 'f9912868-b431-435c-8337-0fc3b4370815',
  Operation: 'Get-SupervisoryReviewReport',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '-StartDate "<SNIP-PII>" -EndDate "<SNIP-PII>" -PageSize "<SNIP-PII>" -Page "<SNIP-PII>"',
  Parameters: '-StartDate "5/12/2021 12:00:00 AM" -EndDate "5/18/2021 11:59:59 PM" -PageSize "300" -Page "1"',
  StartTime: '2021-05-18T15:52:31',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T15:52:30',
  Id: 'dcecd87a-3061-4dea-9bff-4fbfc23ca328',
  Operation: 'Get-SupervisoryReviewOverallProgressReport',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '',
  Parameters: '',
  StartTime: '2021-05-18T15:52:30',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T15:52:30',
  Id: '5641d062-f279-4ca4-9577-50d7ecbfeedb',
  Operation: 'Get-SupervisoryReviewTopCasesReport',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '',
  Parameters: '',
  StartTime: '2021-05-18T15:52:30',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T17:50:15',
  Id: '8c7c9f81-68e9-452b-a22d-1333eb9cd647',
  Operation: 'Get-ComplianceSearchAction',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '-Export "<SNIP-PII>"',
  Parameters: '-Export "True"',
  StartTime: '2021-05-18T17:50:15',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T17:50:12',
  Id: '4692201f-8101-455e-b89d-6727ef75c223',
  Operation: 'Get-ComplianceTag',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '-IncludingLabelState "<SNIP-PII>"',
  Parameters: '-IncludingLabelState "True"',
  StartTime: '2021-05-18T17:50:12',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T17:50:12',
  Id: '7d41f1f2-587c-492f-b6ff-2f9d1a519c60',
  Operation: 'Get-ComplianceSearch',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 2,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: 'EMC',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '-ResultSize "Unlimited"',
  Parameters: '-ResultSize "Unlimited"',
  StartTime: '2021-05-18T17:50:12',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T17:59:45',
  Id: 'ebcfc2bf-8799-413c-add4-6c2b53cb68e7',
  Operation: 'Get-DlpSensitiveInformationType',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 18,
  ResultStatus: 'Success',
  UserKey: 'fake@email.not',
  UserType: 0,
  Version: 1,
  Workload: 'SecurityComplianceCenter',
  ObjectId: '',
  UserId: 'fake@email.not',
  SecurityComplianceCenterEventType: 0,
  ClientApplication: '',
  CmdletVersion: '...',
  EffectiveOrganization: 'wazuh.testytest.com',
  NonPIIParameters: '-Organization "0fea4e03-8146-453b-b889-54b4bd11565b"',
  Parameters: '-Organization "0fea4e03-8146-453b-b889-54b4bd11565b"',
  StartTime: '2021-05-18T17:59:45',
  UserServicePlan: ''
}, {
  CreationTime: '2021-05-18T14:11:41',
  Id: '7aeca226-b3e7-4033-9a7f-d067622e8d00',
  Operation: 'UserLoggedIn',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 15,
  ResultStatus: 'Success',
  UserKey: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
  UserType: 0,
  Version: 1,
  Workload: 'AzureActiveDirectory',
  ClientIP: '190.16.9.176',
  ObjectId: '5f09333a-842c-47da-a157-57da27fcbca5',
  UserId: 'fake@email.not',
  AzureActiveDirectoryEventType: 1,
  ExtendedProperties: [{
    Name: 'ResultStatusDetail',
    Value: 'Redirect'
  }, {
    Name: 'UserAgent',
    Value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
  }, {
    Name: 'RequestType',
    Value: 'OAuth2:Authorize'
  }],
  ModifiedProperties: [],
  Actor: [{
    ID: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 0
  }, {
    ID: 'fake@email.not',
    Type: 5
  }],
  ActorContextId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  ActorIpAddress: '190.16.9.176',
  InterSystemsId: 'a3798792-fef1-4b53-bd44-bbbd94cf0e5c',
  IntraSystemId: '7aeca226-b3e7-4033-9a7f-d067622e8d00',
  SupportTicketId: '',
  Target: [{
    ID: '5f09333a-842c-47da-a157-57da27fcbca5',
    Type: 0
  }],
  TargetContextId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  ApplicationId: '89bee1f7-5e6e-4d8a-9f3d-ecd601259da7',
  DeviceProperties: [{
    Name: 'OS',
    Value: 'Windows 10'
  }, {
    Name: 'BrowserType',
    Value: 'Chrome'
  }, {
    Name: 'IsCompliantAndManaged',
    Value: 'False'
  }, {
    Name: 'SessionId',
    Value: '714c4935-a22d-400d-8563-fbbd8bfc2301'
  }],
  ErrorNumber: '0'
}, {
  CreationTime: '2021-05-18T17:49:11',
  Id: '4e621563-394f-42a9-8a8a-8549e1ffa771',
  Operation: 'Add service principal.',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 8,
  ResultStatus: 'Success',
  UserKey: 'Not Available',
  UserType: 4,
  Version: 1,
  Workload: 'AzureActiveDirectory',
  ObjectId: 'f738ef14-47dc-4564-b53b-45069484ccc7',
  UserId: 'ServicePrincipal_4bf80788-0ec4-481a-ae7b-b71647bf3b57',
  AzureActiveDirectoryEventType: 1,
  ExtendedProperties: [{
    Name: 'additionalDetails',
    Value: '{}'
  }, {
    Name: 'extendedAuditEventCategory',
    Value: 'ServicePrincipal'
  }],
  ModifiedProperties: [{
    Name: 'AccountEnabled',
    NewValue: '[\r\n  true\r\n]',
    OldValue: '[]'
  }, {
    Name: 'AppPrincipalId',
    NewValue: '[\r\n  "f738ef14-47dc-4564-b53b-45069484ccc7"\r\n]',
    OldValue: '[]'
  }, {
    Name: 'DisplayName',
    NewValue: '[\r\n  "Marketplace Api"\r\n]',
    OldValue: '[]'
  }, {
    Name: 'ServicePrincipalName',
    NewValue: '[\r\n  "f738ef14-47dc-4564-b53b-45069484ccc7"\r\n]',
    OldValue: '[]'
  }, {
    Name: 'Credential',
    NewValue: '[\r\n  {\r\n    "CredentialType": 2,\r\n    "KeyStoreId": "291154f0-a9f5-45bb-87be-9c8ee5b6d62c",\r\n    "KeyGroupId": "1c5aa04b-dea5-4284-9908-47edd1e12d13"\r\n  }\r\n]',
    OldValue: '[]'
  }, {
    Name: 'Included Updated Properties',
    NewValue: 'AccountEnabled, AppPrincipalId, DisplayName, ServicePrincipalName, Credential',
    OldValue: ''
  }, {
    Name: 'TargetId.ServicePrincipalNames',
    NewValue: 'f738ef14-47dc-4564-b53b-45069484ccc7',
    OldValue: ''
  }],
  Actor: [{
    ID: 'Windows Azure Service Management API',
    Type: 1
  }, {
    ID: '797f4846-ba00-4fd7-ba43-dac1f8f63013',
    Type: 2
  }, {
    ID: 'ServicePrincipal_4bf80788-0ec4-481a-ae7b-b71647bf3b57',
    Type: 2
  }, {
    ID: '4bf80788-0ec4-481a-ae7b-b71647bf3b57',
    Type: 2
  }, {
    ID: 'ServicePrincipal',
    Type: 2
  }],
  ActorContextId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  InterSystemsId: '9cfba3bb-b478-44aa-a140-465ee7f29274',
  IntraSystemId: '21051805-2413-594a-ab5d-006014005348',
  SupportTicketId: '',
  Target: [{
    ID: 'ServicePrincipal_f6d2eabc-d020-4643-80a8-2b92b163d1de',
    Type: 2
  }, {
    ID: 'f6d2eabc-d020-4643-80a8-2b92b163d1de',
    Type: 2
  }, {
    ID: 'ServicePrincipal',
    Type: 2
  }, {
    ID: 'Marketplace Api',
    Type: 1
  }, {
    ID: 'f738ef14-47dc-4564-b53b-45069484ccc7',
    Type: 2
  }, {
    ID: 'f738ef14-47dc-4564-b53b-45069484ccc7',
    Type: 4
  }],
  TargetContextId: '0fea4e03-8146-453b-b889-54b4bd11565b'
}, {
  CreationTime: '2021-05-18T21:42:25',
  Id: 'af4e552f-0bca-4b02-92c9-4bd430f24f75',
  Operation: 'Change user license.',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 8,
  ResultStatus: 'Success',
  UserKey: '100320014080D3AD@wazuh.com',
  UserType: 0,
  Version: 1,
  Workload: 'AzureActiveDirectory',
  ObjectId: 'fake@email.not',
  UserId: 'fake@email.not',
  AzureActiveDirectoryEventType: 1,
  ExtendedProperties: [{
    Name: 'additionalDetails',
    Value: '{}'
  }, {
    Name: 'extendedAuditEventCategory',
    Value: 'User'
  }],
  ModifiedProperties: [],
  Actor: [{
    ID: 'fake@email.not',
    Type: 5
  }, {
    ID: '100320014080D3AD',
    Type: 3
  }, {
    ID: 'User_910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: 'User',
    Type: 2
  }],
  ActorContextId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  InterSystemsId: '1fd09d6b-54d3-4a58-acfe-71cc2c429d97',
  IntraSystemId: '0a8ae201-e404-4f6f-99db-a3c92a5bd022',
  SupportTicketId: '',
  Target: [{
    ID: 'User_910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: 'User',
    Type: 2
  }, {
    ID: 'fake@email.not',
    Type: 5
  }, {
    ID: '100320014080D3AD',
    Type: 3
  }],
  TargetContextId: '0fea4e03-8146-453b-b889-54b4bd11565b'
}, {
  CreationTime: '2021-05-18T21:42:25',
  Id: 'b27eab84-1ef7-4372-bc68-7213af8ab3fb',
  Operation: 'Update user.',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 8,
  ResultStatus: 'Success',
  UserKey: '100320014080D3AD@wazuh.com',
  UserType: 0,
  Version: 1,
  Workload: 'AzureActiveDirectory',
  ObjectId: 'fake@email.not',
  UserId: 'fake@email.not',
  AzureActiveDirectoryEventType: 1,
  ExtendedProperties: [{
    Name: 'additionalDetails',
    Value: '{"UserType":"Member"}'
  }, {
    Name: 'extendedAuditEventCategory',
    Value: 'User'
  }],
  ModifiedProperties: [{
    Name: 'AssignedLicense',
    NewValue: '[\r\n  "[SkuName=POWER_BI_STANDARD, AccountId=0fea4e03-8146-453b-b889-54b4bd11565b, SkuId=a403ebcc-fae0-4ca2-8c8c-7a907fd6c235, DisabledPlans=[]]"\r\n]',
    OldValue: '[]'
  }, {
    Name: 'AssignedPlan',
    NewValue: '[\r\n  {\r\n    "SubscribedPlanId": "c976d07f-fd0f-49eb-bdc2-26c17481e1c5",\r\n    "ServiceInstance": "AzureAnalysis/SDF",\r\n    "CapabilityStatus": 0,\r\n    "AssignedTimestamp": "2021-05-18T21:42:25.3894164Z",\r\n    "InitialState": null,\r\n    "Capability": null,\r\n    "ServicePlanId": "2049e525-b859-401b-b2a0-e0a31c4b1fe4"\r\n  }\r\n]',
    OldValue: '[]'
  }, {
    Name: 'Included Updated Properties',
    NewValue: 'AssignedLicense, AssignedPlan',
    OldValue: ''
  }, {
    Name: 'TargetId.UserType',
    NewValue: 'Member',
    OldValue: ''
  }],
  Actor: [{
    ID: 'fake@email.not',
    Type: 5
  }, {
    ID: '100320014080D3AD',
    Type: 3
  }, {
    ID: 'User_910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: 'User',
    Type: 2
  }],
  ActorContextId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  InterSystemsId: '1fd09d6b-54d3-4a58-acfe-71cc2c429d97',
  IntraSystemId: '0a8ae201-e404-4f6f-99db-a3c92a5bd022',
  SupportTicketId: '',
  Target: [{
    ID: 'User_910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: '910ed5ca-4ecf-414c-a1be-d53511bfe1a5',
    Type: 2
  }, {
    ID: 'User',
    Type: 2
  }, {
    ID: 'fake@email.not',
    Type: 5
  }, {
    ID: '100320014080D3AD',
    Type: 3
  }],
  TargetContextId: '0fea4e03-8146-453b-b889-54b4bd11565b'
}, {
  CreationTime: '2021-05-20T17:43:00',
  Id: '8c3d0215-66f0-41b0-3205-08d91bb6b63c',
  Operation: 'SharingPolicyChanged',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'OneDrive',
  ClientIP: '20.190.157.27',
  ObjectId: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  UserId: 'fake@email.not',
  CorrelationId: 'fd9ac79d-1100-48aa-92c5-40a73a1d443f',
  EventSource: 'SharePoint',
  ItemType: 'Site',
  Site: 'f49feae4-033d-4028-97d1-3acd55341f69',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  ModifiedProperties: [{
    Name: 'ShareUsingAnonymousLinks',
    NewValue: 'Enabled',
    OldValue: 'Disabled'
  }]
}, {
  CreationTime: '2021-05-20T17:43:00',
  Id: '35a1b515-2a0e-4bd6-d0a3-08d91bb6b639',
  Operation: 'SiteCollectionCreated',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'OneDrive',
  ClientIP: '20.190.157.27',
  ObjectId: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  UserId: 'fake@email.not',
  CorrelationId: 'fd9ac79d-1100-48aa-92c5-40a73a1d443f',
  EventSource: 'SharePoint',
  ItemType: 'Site',
  Site: 'f49feae4-033d-4028-97d1-3acd55341f69',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  EventData: '<SiteCreationSource>API</SiteCreationSource><TenantSettings.ShowCreateSiteCommand>True</TenantSettings.ShowCreateSiteCommand><TenantSettings.UseCustomSiteCreationForm>False</TenantSettings.UseCustomSiteCreationForm>'
}, {
  CreationTime: '2021-05-20T17:43:00',
  Id: '344f9139-f437-4290-9566-08d91bb6b61f',
  Operation: 'SiteCollectionAdminRemoved',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 14,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'OneDrive',
  ClientIP: '20.190.157.27',
  ObjectId: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  UserId: 'fake@email.not',
  CorrelationId: 'fd9ac79d-1100-48aa-92c5-40a73a1d443f',
  EventSource: 'SharePoint',
  ItemType: 'Web',
  Site: 'f49feae4-033d-4028-97d1-3acd55341f69',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: 'a9d15b23-6ac9-43c5-af3c-b4a0916631c1',
  ModifiedProperties: [{
    Name: 'SiteAdmin',
    NewValue: '',
    OldValue: ''
  }],
  TargetUserOrGroupType: 'Member',
  SiteUrl: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  TargetUserOrGroupName: 'SHAREPOINT\\system'
}, {
  CreationTime: '2021-05-20T17:43:00',
  Id: 'd36e4b4d-1e8b-4634-6dd8-08d91bb6b618',
  Operation: 'SiteCollectionAdminAdded',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 14,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'OneDrive',
  ClientIP: '20.190.157.27',
  ObjectId: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  UserId: 'fake@email.not',
  CorrelationId: 'fd9ac79d-1100-48aa-92c5-40a73a1d443f',
  EventSource: 'SharePoint',
  ItemType: 'Web',
  Site: 'f49feae4-033d-4028-97d1-3acd55341f69',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: 'a9d15b23-6ac9-43c5-af3c-b4a0916631c1',
  ModifiedProperties: [{
    Name: 'SiteAdmin',
    NewValue: 'fake@email.not',
    OldValue: ''
  }],
  TargetUserOrGroupType: 'Member',
  SiteUrl: 'https://wazuh-my.sharepoint.com/personal/tomas_turina_wazuh_com',
  TargetUserOrGroupName: 'fake@email.not'
}, {
  CreationTime: '2021-05-20T17:43:22',
  Id: '0d6a62d3-e4bd-44ee-ce8d-08d91bb6c392',
  Operation: 'PageViewed',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/_layouts/15/CreateGroup.aspx',
  UserId: 'fake@email.not',
  CorrelationId: 'ccd0c99f-309b-2000-df13-3fcca9a8c8e1',
  CustomUniqueId: true,
  EventSource: 'SharePoint',
  ItemType: 'Page',
  ListItemUniqueId: '59a8433d-9bb8-cfef-65b7-ef35de00c8f6',
  Site: 'f7fbb805-5f6b-4950-b681-2365eb46081f',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '3b56db49-60e3-410e-acbd-d8765467388a'
}, {
  CreationTime: '2021-05-20T17:45:57',
  Id: '18bb351b-49e1-47df-8f4d-08d91bb71ffd',
  Operation: 'AddedToGroup',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 14,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint',
  UserId: 'fake@email.not',
  CorrelationId: 'f1d0c99f-3094-2000-da82-454f034ca629',
  EventSource: 'SharePoint',
  ItemType: 'Web',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  EventData: '<Group>Site Owners</Group>',
  TargetUserOrGroupType: 'Member',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint',
  TargetUserOrGroupName: 'SHAREPOINT\\system'
}, {
  CreationTime: '2021-05-20T17:46:26',
  Id: '29bde84a-d3ec-4388-4600-08d91bb730bc',
  Operation: 'FileAccessed',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 6,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/Shared Documents/Forms/AllItems.aspx',
  UserId: 'fake@email.not',
  CorrelationId: 'f9d0c99f-b04f-2000-da82-4bb2abf6168f',
  EventSource: 'SharePoint',
  ItemType: 'File',
  ListId: 'fd2ebaf0-900b-4dff-8fc2-d348be51e677',
  ListItemUniqueId: '3c9d8943-846e-41f3-a647-72a5e4e3decf',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  SourceFileExtension: 'aspx',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint/',
  SourceFileName: 'AllItems.aspx',
  SourceRelativeUrl: 'Shared Documents/Forms'
}, {
  CreationTime: '2021-05-20T17:46:25',
  Id: '087e5b68-fc3f-4e01-1efc-08d91bb730b5',
  Operation: 'ListViewed',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 36,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/fd2ebaf0-900b-4dff-8fc2-d348be51e677',
  UserId: 'fake@email.not',
  CorrelationId: 'f9d0c99f-b04f-2000-da82-4bb2abf6168f',
  DoNotDistributeEvent: true,
  EventSource: 'SharePoint',
  ItemType: 'List',
  ListId: 'fd2ebaf0-900b-4dff-8fc2-d348be51e677',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  CustomizedDoclib: false,
  FromApp: true,
  IsDocLib: true,
  ItemCount: 0,
  ListBaseTemplateType: '101',
  ListBaseType: 'DocumentLibrary',
  ListColor: '',
  ListIcon: '',
  Source: 'Unknown',
  TemplateTypeId: '',
  ListTitle: 'fd2ebaf0-900b-4dff-8fc2-d348be51e677'
}, {
  CreationTime: '2021-05-20T17:52:29',
  Id: '41225487-31c1-4e24-b8b0-08d91bb8094c',
  Operation: 'PagePrefetched',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint',
  UserId: 'fake@email.not',
  CorrelationId: '52d1c99f-3000-2000-df13-3ab1e8fb9f92',
  CustomUniqueId: false,
  EventSource: 'SharePoint',
  ItemType: 'Page',
  ListId: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  ListItemUniqueId: '36db3168-c1b2-44e9-9ffd-e9a8e04bb2f5',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7'
}, {
  CreationTime: '2021-05-20T17:51:49',
  Id: 'd930cc5c-2658-45df-6361-08d91bb7f179',
  Operation: 'FileCheckedOut',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 6,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/SitePages/Home.aspx',
  UserId: 'fake@email.not',
  CorrelationId: '48d1c99f-f03c-2000-df13-38983a6608f8',
  EventSource: 'SharePoint',
  ItemType: 'File',
  ListId: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  ListItemUniqueId: '36db3168-c1b2-44e9-9ffd-e9a8e04bb2f5',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  HighPriorityMediaProcessing: false,
  SourceFileExtension: 'aspx',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint/',
  SourceFileName: 'Home.aspx',
  SourceRelativeUrl: 'SitePages'
}, {
  CreationTime: '2021-05-20T17:51:51',
  Id: '89d76362-e493-4c20-3b69-08d91bb7f288',
  Operation: 'ListUpdated',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 36,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  UserId: 'fake@email.not',
  CorrelationId: '48d1c99f-f0a8-2000-da82-41be3f973267',
  DoNotDistributeEvent: true,
  EventSource: 'SharePoint',
  ItemType: 'List',
  ListId: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  CustomizedDoclib: false,
  FromApp: false,
  IsDocLib: true,
  ItemCount: 1,
  ListBaseTemplateType: '119',
  ListBaseType: 'DocumentLibrary',
  ListColor: '',
  ListIcon: '',
  Source: 'Unknown',
  TemplateTypeId: '',
  ListTitle: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3'
}, {
  CreationTime: '2021-05-20T17:52:36',
  Id: '7a91dd8c-560b-4fbe-2585-08d91bb80d46',
  Operation: 'ClientViewSignaled',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/SitePages/Home.aspx',
  UserId: 'fake@email.not',
  CorrelationId: '53d1c99f-b0aa-2000-df13-3efea9e41071',
  CustomUniqueId: false,
  EventSource: 'SharePoint',
  ItemType: 'Page',
  ListId: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  ListItemUniqueId: '36db3168-c1b2-44e9-9ffd-e9a8e04bb2f5',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7'
}, {
  CreationTime: '2021-05-20T17:53:37',
  Id: '9695afcd-19ff-491f-a6ee-08d91bb831d1',
  Operation: 'FileModified',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 6,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/SitePages/Home.aspx',
  UserId: 'fake@email.not',
  CorrelationId: '62d1c99f-d09c-2000-df13-37ddf480e717',
  DoNotDistributeEvent: true,
  EventSource: 'SharePoint',
  ItemType: 'File',
  ListId: 'e4c9ce2e-d8c2-468e-baf5-f362f8c2f2f3',
  ListItemUniqueId: '36db3168-c1b2-44e9-9ffd-e9a8e04bb2f5',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  SourceFileExtension: 'aspx',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint/',
  SourceFileName: 'Home.aspx',
  SourceRelativeUrl: 'SitePages'
}, {
  CreationTime: '2021-05-20T17:57:03',
  Id: '551fd7d5-bac1-4bb4-11d2-08d91bb8ac9e',
  Operation: 'FileAccessedExtended',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 6,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/Shared Documents/Forms/AllItems.aspx',
  UserId: 'fake@email.not',
  CorrelationId: '94d1c99f-20eb-2000-df13-35746d02911e',
  EventSource: 'SharePoint',
  ItemType: 'File',
  ListId: 'fd2ebaf0-900b-4dff-8fc2-d348be51e677',
  ListItemUniqueId: '3c9d8943-846e-41f3-a647-72a5e4e3decf',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  SourceFileExtension: 'aspx',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint/',
  SourceFileName: 'AllItems.aspx',
  SourceRelativeUrl: 'Shared Documents/Forms'
}, {
  CreationTime: '2021-05-20T17:59:55',
  Id: 'eb1f0911-9bed-4f15-10e5-08d91bb91372',
  Operation: 'SiteDeleted',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 6,
  UserKey: 'S-1-0-0',
  UserType: 4,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint',
  UserId: 'AAD to SharePoint Sync',
  CorrelationId: 'bed1c99f-20ee-2000-df13-306cb6803c92',
  EventSource: 'SharePoint',
  ItemType: 'Web',
  ListItemUniqueId: '00000000-0000-0000-0000-000000000000',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: '',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7',
  DestinationFileExtension: '',
  SourceFileExtension: '',
  DestinationFileName: 'TestSharePoint',
  DestinationRelativeUrl: '../../https://wazuh.sharepoint.com/sites',
  SiteUrl: 'https://wazuh.sharepoint.com/sites/TestSharePoint/',
  SourceFileName: 'TestSharePoint',
  SourceRelativeUrl: '..'
}, {
  CreationTime: '2021-05-20T17:59:11',
  Id: '0d20a3e1-e9cb-436c-799f-08d91bb8f92f',
  Operation: 'PageViewedExtended',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 4,
  UserKey: 'i:0h.f|membership|100320014080d3ad@live.com',
  UserType: 0,
  Version: 1,
  Workload: 'SharePoint',
  ClientIP: '190.16.9.176',
  ObjectId: 'https://wazuh.sharepoint.com/sites/TestSharePoint/_layouts/15/online/handlers/SpoSuiteLinks.ashx',
  UserId: 'fake@email.not',
  CorrelationId: 'b4d1c99f-0043-2000-da82-41b63e1d91f4',
  EventSource: 'SharePoint',
  ItemType: 'Page',
  Site: 'dd58ef08-faea-4cb5-847a-35bb5c01e757',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  WebId: '00c32555-e0d8-425f-9fbd-ef5539bfecf7'
}, {
  CreationTime: '2021-05-20T17:44:27',
  Id: '30ef2f70-a12d-4b31-1e70-08d91bb6ea2e',
  Operation: 'Set-Mailbox',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 1,
  ResultStatus: 'True',
  UserKey: 'SpoolsProvisioning-ApplicationAccount@eurprd04.prod.outlook.com',
  UserType: 3,
  Version: 1,
  Workload: 'Exchange',
  ClientIP: '52.233.237.141:40638',
  ObjectId: 'EURPR04A010.prod.outlook.com/Microsoft Exchange Hosted Organizations/wazuh.testytest.com/tomas.turina',
  UserId: 'SpoolsProvisioning-ApplicationAccount@eurprd04.prod.outlook.com',
  AppId: '61109738-7d2b-4a0b-9fe3-660b1ff83505',
  ClientAppId: '',
  ExternalAccess: true,
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'AM9PR04MB8986 (15.20.4150.023)',
  Parameters: [{
    Name: 'Identity',
    Value: 'MGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViXGJkYmI4MjM2LTBmNDgtNGZjNi05Zjc3LTkxNGNkY2MwMmIzYw2'
  }, {
    Name: 'ResourceEmailAddresses',
    Value: 'True'
  }, {
    Name: 'BypassLiveId',
    Value: 'True'
  }, {
    Name: 'Force',
    Value: 'True'
  }, {
    Name: 'DomainController',
    Value: 'HE1PR04A010DC03.EURPR04A010.prod.outlook.com'
  }, {
    Name: 'EmailAddresses',
    Value: 'SIP:fake@email.not;SMTP:fake@email.not;SPO:SPO_f49feae4-033d-4028-97d1-3acd55341f69@SPO_0fea4e03-8146-453b-b889-54b4bd11565b'
  }],
  SessionId: ''
}, {
  CreationTime: '2021-05-20T17:45:59',
  Id: '48c00930-b25d-4ccc-ccb3-08d91bb720f6',
  Operation: 'ModifyFolderPermissions',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 2,
  ResultStatus: 'Succeeded',
  UserKey: 'S-1-5-18',
  UserType: 2,
  Version: 1,
  Workload: 'Exchange',
  ClientIP: '::1',
  UserId: 'S-1-5-18',
  ClientIPAddress: '::1',
  ClientInfoString: 'Client=WebServices;Action=ConfigureGroupMailbox',
  ExternalAccess: true,
  InternalLogonType: 1,
  LogonType: 1,
  LogonUserSid: 'S-1-5-18',
  MailboxGuid: 'fc108b45-9d51-4b87-a473-9d5a0e404966',
  MailboxOwnerMasterAccountSid: 'S-1-5-10',
  MailboxOwnerSid: 'S-1-5-21-2986565805-1835265550-1383574073-20743067',
  MailboxOwnerUPN: 'TestSharePoint@wazuh.com',
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'AS8PR04MB8465 (15.20.4150.023)\r\n',
  Item: {
    Id: 'LgAAAAA6tVhba3JWSaGmky7/7OvfAQDRwKc47c1sT4Waab6O4zbPAAAAAAENAAAC',
    ParentFolder: {
      Id: 'LgAAAAA6tVhba3JWSaGmky7/7OvfAQDRwKc47c1sT4Waab6O4zbPAAAAAAENAAAC',
      MemberRights: 'ReadAny, Create, EditOwned, DeleteOwned, EditAny, DeleteAny, Visible, FreeBusySimple, FreeBusyDetailed',
      MemberSid: 'S-1-8-4228942661-1267178833-1520268196-1716076558-1',
      MemberUpn: 'Member@local',
      Name: 'Calendar',
      Path: '\\Calendar'
    }
  }
}, {
  CreationTime: '2021-05-20T17:45:58',
  Id: 'bb03b48e-609d-477b-cb80-08d91bb72077',
  Operation: 'Create',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 2,
  ResultStatus: 'Succeeded',
  UserKey: 'S-1-5-18',
  UserType: 2,
  Version: 1,
  Workload: 'Exchange',
  ClientIP: '::1',
  UserId: 'S-1-5-18',
  ClientIPAddress: '::1',
  ClientInfoString: 'Client=WebServices;Action=ConfigureGroupMailbox',
  ExternalAccess: true,
  InternalLogonType: 1,
  LogonType: 1,
  LogonUserSid: 'S-1-5-18',
  MailboxGuid: 'fc108b45-9d51-4b87-a473-9d5a0e404966',
  MailboxOwnerMasterAccountSid: 'S-1-5-10',
  MailboxOwnerSid: 'S-1-5-21-2986565805-1835265550-1383574073-20743067',
  MailboxOwnerUPN: 'TestSharePoint@wazuh.com',
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'AS8PR04MB8465 (15.20.4150.023)\r\n',
  Item: {
    Attachments: 'warming_email_03_2017_calendar.png (646b); warming_email_03_2017_conversation.png (661b); warming_email_03_2017_links.png (1450b); google_play_store_badge.png (4871b); apple_store_badge.png (4493b); windows_store_badge.png (3728b); warming_email_03_2017_files.png (856b); warming_email_03_2017_sharePoint.png (1479b)',
    Id: 'RgAAAAA6tVhba3JWSaGmky7/7OvfBwDRwKc47c1sT4Waab6O4zbPAAAAAAEMAADRwKc47c1sT4Waab6O4zbPAAAAAAk9AAAJ',
    InternetMessageId: '<AS8PR04MB846542106D3939F2D1952D05D32A9@AS8PR04MB8465.eurprd04.prod.outlook.com>',
    IsRecord: false,
    ParentFolder: {
      Id: 'LgAAAAA6tVhba3JWSaGmky7/7OvfAQDRwKc47c1sT4Waab6O4zbPAAAAAAEMAAAB',
      Path: '\\Inbox'
    },
    Subject: 'The new TestSharePoint group is ready'
  }
}, {
  CreationTime: '2021-05-20T17:59:59',
  Id: 'e855fb12-2d48-45f3-ac8d-08d91bb91569',
  Operation: 'Remove-UnifiedGroup',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 1,
  ResultStatus: 'True',
  UserKey: 'NT AUTHORITY\\SYSTEM (w3wp)',
  UserType: 2,
  Version: 1,
  Workload: 'Exchange',
  ClientIP: '[2a01:111:f402:ac00::f134]:51514',
  ObjectId: 'TestSharePoint_b47e06bf-895d-48c4-8ae4-a0fdc60ec249',
  UserId: 'NT AUTHORITY\\SYSTEM (w3wp)',
  AppId: '00000003-0000-0ff1-ce00-000000000000',
  ClientAppId: '00000003-0000-0ff1-ce00-000000000000',
  ExternalAccess: false,
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'VI1PR04MB6125 (15.20.4129.033)',
  Parameters: [{
    Name: 'Identity',
    Value: 'b47e06bf-895d-48c4-8ae4-a0fdc60ec249'
  }],
  SessionId: ''
}, {
  CreationTime: '2021-05-20T18:04:37',
  Id: 'f111c82c-7961-473d-112a-08d91bb9bb91',
  Operation: 'Set-UnifiedGroup',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 1,
  ResultStatus: 'True',
  UserKey: 'SpoolsProvisioning-ApplicationAccount@eurprd04.prod.outlook.com',
  UserType: 3,
  Version: 1,
  Workload: 'Exchange',
  ClientIP: '51.144.33.14:58849',
  ObjectId: 'EURPR04A010.prod.outlook.com/Microsoft Exchange Hosted Organizations/wazuh.testytest.com/Soft Deleted Objects/TestSharePoint_b47e06bf-895d-48c4-8ae4-a0fdc60ec249',
  UserId: 'SpoolsProvisioning-ApplicationAccount@eurprd04.prod.outlook.com',
  AppId: '61109738-7d2b-4a0b-9fe3-660b1ff83505',
  ClientAppId: '',
  ExternalAccess: true,
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'VI1PR0402MB3326 (15.20.4129.033)',
  Parameters: [{
    Name: 'Identity',
    Value: 'MGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViXDFlYjFjNjZhLTRhYWQtNGY2Mi04NjAzLTdjMDRkZTIxYWE3Mg2'
  }, {
    Name: 'EmailAddresses',
    Value: 'smtp:TestSharePoint@wazuh.testytest.com;SMTP:TestSharePoint@wazuh.com'
  }, {
    Name: 'IncludeSoftDeletedObjects',
    Value: 'True'
  }],
  SessionId: ''
}, {
  CreationTime: '2021-05-20T18:59:49',
  Id: '32229114-e357-4b56-9d08-08d91bc1717c',
  Operation: 'Set-User',
  OrganizationId: '0fea4e03-8146-453b-b889-54b4bd11565b',
  RecordType: 1,
  ResultStatus: 'True',
  UserKey: 'NT AUTHORITY\\SYSTEM (Microsoft.Exchange.Management.ForwardSync)',
  UserType: 3,
  Version: 1,
  Workload: 'Exchange',
  ObjectId: 'EURPR04A010.prod.outlook.com/Microsoft Exchange Hosted Organizations/wazuh.testytest.com/tomas.turina',
  UserId: 'NT AUTHORITY\\SYSTEM (Microsoft.Exchange.Management.ForwardSync)',
  AppId: '',
  ClientAppId: '',
  ExternalAccess: true,
  OrganizationName: 'wazuh.testytest.com',
  OriginatingServer: 'DB8PR04MB7065 (15.20.4150.023)',
  Parameters: [{
    Name: 'Identity',
    Value: '0fea4e03-8146-453b-b889-54b4bd11565b\\bdbb8236-0f48-4fc6-9f77-914cdcc02b3c'
  }, {
    Name: 'SyncMailboxLocationGuids',
    Value: 'True'
  }, {
    Name: 'ErrorAction',
    Value: 'Stop'
  }, {
    Name: 'WarningAction',
    Value: 'SilentlyContinue'
  }]
}];
exports.arrayLogs = arrayLogs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZS5qcyJdLCJuYW1lcyI6WyJhcnJheU9mZmljZUdyb3VwcyIsImFycmF5TG9jYXRpb25PZmZpY2UiLCJhcnJheURlY29kZXJPZmZpY2UiLCJuYW1lIiwiYXJyYXlVdWlkT2ZmaWNlIiwiYXJyYXlEZXZpY2VQcm9wZXJ0aWVzT2ZmaWNlIiwiTmFtZSIsIlZhbHVlIiwiYXJyYXlJcCIsImFycmF5VXNlcklkIiwiYXJyYXlUYXJnZXRPZmZpY2UiLCJJRCIsIlR5cGUiLCJhcnJheUFjdG9yT2ZmaWNlIiwiYXJyYXlFeHRlbmRlZFByb3BlcnRpZXNPZmZpY2UiLCJvZmZpY2VSdWxlcyIsImRhdGEiLCJvZmZpY2UzNjUiLCJSZWNvcmRUeXBlIiwiU3Vic2NyaXB0aW9uIiwicnVsZSIsImxldmVsIiwiZGVzY3JpcHRpb24iLCJpZCIsIm1haWwiLCJmaXJlZHRpbWVzIiwiZ3JvdXBzIiwiYXJyYXlMb2dzIiwiSWQiLCJPcGVyYXRpb24iLCJPcmdhbml6YXRpb25JZCIsIlVzZXJLZXkiLCJVc2VyVHlwZSIsIlZlcnNpb24iLCJXb3JrbG9hZCIsIlVzZXJJZCIsIkFhZEFwcElkIiwiRGF0YVR5cGUiLCJEYXRhYmFzZVR5cGUiLCJSZWxhdGl2ZVVybCIsIlJlc3VsdENvdW50IiwiQ3JlYXRpb25UaW1lIiwiUmVzdWx0U3RhdHVzIiwiT2JqZWN0SWQiLCJTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFdmVudFR5cGUiLCJDbGllbnRBcHBsaWNhdGlvbiIsIkNtZGxldFZlcnNpb24iLCJFZmZlY3RpdmVPcmdhbml6YXRpb24iLCJOb25QSUlQYXJhbWV0ZXJzIiwiUGFyYW1ldGVycyIsIlN0YXJ0VGltZSIsIlVzZXJTZXJ2aWNlUGxhbiIsIkNsaWVudElQIiwiQXp1cmVBY3RpdmVEaXJlY3RvcnlFdmVudFR5cGUiLCJFeHRlbmRlZFByb3BlcnRpZXMiLCJNb2RpZmllZFByb3BlcnRpZXMiLCJBY3RvciIsIkFjdG9yQ29udGV4dElkIiwiQWN0b3JJcEFkZHJlc3MiLCJJbnRlclN5c3RlbXNJZCIsIkludHJhU3lzdGVtSWQiLCJTdXBwb3J0VGlja2V0SWQiLCJUYXJnZXQiLCJUYXJnZXRDb250ZXh0SWQiLCJBcHBsaWNhdGlvbklkIiwiRGV2aWNlUHJvcGVydGllcyIsIkVycm9yTnVtYmVyIiwiTmV3VmFsdWUiLCJPbGRWYWx1ZSIsIkNvcnJlbGF0aW9uSWQiLCJFdmVudFNvdXJjZSIsIkl0ZW1UeXBlIiwiU2l0ZSIsIlVzZXJBZ2VudCIsIkV2ZW50RGF0YSIsIldlYklkIiwiVGFyZ2V0VXNlck9yR3JvdXBUeXBlIiwiU2l0ZVVybCIsIlRhcmdldFVzZXJPckdyb3VwTmFtZSIsIkN1c3RvbVVuaXF1ZUlkIiwiTGlzdEl0ZW1VbmlxdWVJZCIsIkxpc3RJZCIsIlNvdXJjZUZpbGVFeHRlbnNpb24iLCJTb3VyY2VGaWxlTmFtZSIsIlNvdXJjZVJlbGF0aXZlVXJsIiwiRG9Ob3REaXN0cmlidXRlRXZlbnQiLCJDdXN0b21pemVkRG9jbGliIiwiRnJvbUFwcCIsIklzRG9jTGliIiwiSXRlbUNvdW50IiwiTGlzdEJhc2VUZW1wbGF0ZVR5cGUiLCJMaXN0QmFzZVR5cGUiLCJMaXN0Q29sb3IiLCJMaXN0SWNvbiIsIlNvdXJjZSIsIlRlbXBsYXRlVHlwZUlkIiwiTGlzdFRpdGxlIiwiSGlnaFByaW9yaXR5TWVkaWFQcm9jZXNzaW5nIiwiRGVzdGluYXRpb25GaWxlRXh0ZW5zaW9uIiwiRGVzdGluYXRpb25GaWxlTmFtZSIsIkRlc3RpbmF0aW9uUmVsYXRpdmVVcmwiLCJBcHBJZCIsIkNsaWVudEFwcElkIiwiRXh0ZXJuYWxBY2Nlc3MiLCJPcmdhbml6YXRpb25OYW1lIiwiT3JpZ2luYXRpbmdTZXJ2ZXIiLCJTZXNzaW9uSWQiLCJDbGllbnRJUEFkZHJlc3MiLCJDbGllbnRJbmZvU3RyaW5nIiwiSW50ZXJuYWxMb2dvblR5cGUiLCJMb2dvblR5cGUiLCJMb2dvblVzZXJTaWQiLCJNYWlsYm94R3VpZCIsIk1haWxib3hPd25lck1hc3RlckFjY291bnRTaWQiLCJNYWlsYm94T3duZXJTaWQiLCJNYWlsYm94T3duZXJVUE4iLCJJdGVtIiwiUGFyZW50Rm9sZGVyIiwiTWVtYmVyUmlnaHRzIiwiTWVtYmVyU2lkIiwiTWVtYmVyVXBuIiwiUGF0aCIsIkF0dGFjaG1lbnRzIiwiSW50ZXJuZXRNZXNzYWdlSWQiLCJJc1JlY29yZCIsIlN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZTyxNQUFNQSxpQkFBaUIsR0FBRyxDQUFDLFdBQUQsRUFBYyw4QkFBZCxDQUExQjs7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxXQUE1Qjs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxDQUNoQztBQUNFQyxFQUFBQSxJQUFJLEVBQUU7QUFEUixDQURnQyxDQUEzQjs7QUFNQSxNQUFNQyxlQUFlLEdBQUcsQ0FDN0Isc0NBRDZCLEVBRTdCLHNDQUY2QixFQUc3QixzQ0FINkIsRUFJN0Isc0NBSjZCLEVBSzdCLHNDQUw2QixFQU03QixzQ0FONkIsRUFPN0Isc0NBUDZCLEVBUTdCLHNDQVI2QixFQVM3QixzQ0FUNkIsRUFVN0Isc0NBVjZCLEVBVzdCLHNDQVg2QixFQVk3QixzQ0FaNkIsRUFhN0Isc0NBYjZCLEVBYzdCLHNDQWQ2QixFQWU3QixzQ0FmNkIsRUFnQjdCLHNDQWhCNkIsRUFpQjdCLHNDQWpCNkIsRUFrQjdCLHNDQWxCNkIsRUFtQjdCLHNDQW5CNkIsRUFvQjdCLHNDQXBCNkIsQ0FBeEI7O0FBdUJBLE1BQU1DLDJCQUEyQixHQUFHLENBQ3pDO0FBQ0VDLEVBQUFBLElBQUksRUFBRSxhQURSO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBRHlDLEVBS3pDO0FBQ0VELEVBQUFBLElBQUksRUFBRSx1QkFEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQUx5QyxFQVN6QztBQUNFRCxFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQVR5QyxDQUFwQzs7QUFlQSxNQUFNQyxPQUFPLEdBQUcsQ0FDckIsZUFEcUIsRUFFckIsZ0JB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RVIsRUFBQUEsTUFBTSxFQUFFLGtFQWJWO0FBY0VrRSxFQUFBQSxLQUFLLEVBQUUsRUFkVDtBQWVFQyxFQUFBQSxXQUFXLEVBQUUsRUFmZjtBQWdCRUMsRUFBQUEsY0FBYyxFQUFFLElBaEJsQjtBQWlCRUMsRUFBQUEsZ0JBQWdCLEVBQUUscUJBakJwQjtBQWtCRUMsRUFBQUEsaUJBQWlCLEVBQUUsZ0NBbEJyQjtBQW1CRXhELEVBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0UzQyxJQUFBQSxJQUFJLEVBQUUsVUFEUjtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQURVLEVBS1Y7QUFDRUQsSUFBQUEsSUFBSSxFQUFFLDBCQURSO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBTFUsRUFTVjtBQUNFRCxJQUFBQSxJQUFJLEVBQUUsYUFEUjtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQVRVLEVBYVY7QUFDRUQsSUFBQUEsSUFBSSxFQUFFLGVBRFI7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FiVTtBQW5CZCxDQWh2Q3VCLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE9mZmljZTM2NSBzYW1wbGUgZGF0YVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGFycmF5T2ZmaWNlR3JvdXBzID0gWydvZmZpY2UzNjUnLCAnQXp1cmVBY3RpdmVEaXJlY3RvcnlTdHNMb2dvbiddO1xuXG5leHBvcnQgY29uc3QgYXJyYXlMb2NhdGlvbk9mZmljZSA9ICdvZmZpY2UzNjUnO1xuXG5leHBvcnQgY29uc3QgYXJyYXlEZWNvZGVyT2ZmaWNlID0gW1xuICB7XG4gICAgbmFtZTogJ2pzb24nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFycmF5VXVpZE9mZmljZSA9IFtcbiAgJ2E4MDgwMDA5LWFhODUtNGQ2NS1hMGYwLTc0ZmUwMzMxZWRjZScsXG4gICc0ZTkzYzhlMy01MmMxLTRhNGUtYWI2OS05ZTYxY2NmNmNkMDAnLFxuICAnZDE0YWE1Y2ItYjA3MC00MmY4LTg3MDktMGY4YWZkOTQyZmMwJyxcbiAgJzkyYTdlODkzLTBmNGEtNDYzNS1hZjBkLTgzODkxZDRmZjljMCcsXG4gICdjZTAxM2YwNS1hNzgzLTQxODYtOWQ4NS01YTE0OTk4YjYxMTEnLFxuICAnNGY2ODZlMDMtN2NmNi00NGE4LTkyMTItYjhhOTFiMTI4MDgyJyxcbiAgJ2NjNThlODE3LWM2ZDMtNDQ1Ny1iMDExLTU0ZTg4MWUyMzBlYycsXG4gICc4MjVmOWQ2ZS0xMmMwLTRiNTktODA3ZC0xYjQxYzZlNDhhM2EnLFxuICAnZDM2MjUzZmItMjRhMS00ODFjLWExOTktZjc3ODUzNGNjYjVmJyxcbiAgJzkwODMzNjllLTY3OWItNGU4Yi05MjQ5LTMyM2E1MWQ1YmY5YycsXG4gICc2ZDg3MmJmOC1lNDYyLTRkZTgtOWUxNi1jMzY3NjEwNTBmYjcnLFxuICAnYjlhNzNjMGYtNTVmMi00ZTk1LTk2MjYtMWMyNjRkMDJlYWMzJyxcbiAgJ2JiYWI5MWFkLWJjOGEtNGM4Ni05MDEwLTNjODRiMzlmZGUwZCcsXG4gICdiNTM1OTA5Mi1kYWQyLTQwNjAtYjkzZC0zNzkxZTRkYTBkZWMnLFxuICAnZTg0OTNiMjYtYzFmOS00MmViLTk3NTYtZGZkMzYzMTQ5ODUyJyxcbiAgJ2NhMjA0NGZjLTMyY2EtNDc4Yi04YjBkLWZmNmZkZDNiMWU1YScsXG4gICdhMDk5NTEzNi05MWQ4LTRhY2YtODQ0OS0yOGMyNzVmZmI3ZTMnLFxuICAnYzM0ODJiNWQtYjFhOS00ZjQ0LThkZjAtYTYwMWUxOGNmNWMzJyxcbiAgJzQ5ZmQ0NjQyLWNmZTUtNDE3MC05NDg4LTI1ZDg0N2UzNTc5ZicsXG4gICcyOWY5NjI3MS01YzFiLTQ3ZWMtOTY1Mi1hNDFkNWNiMTdjYjQnLFxuXTtcblxuZXhwb3J0IGNvbnN0IGFycmF5RGV2aWNlUHJvcGVydGllc09mZmljZSA9IFtcbiAge1xuICAgIE5hbWU6ICdCcm93c2VyVHlwZScsXG4gICAgVmFsdWU6ICdDaHJvbWUnLFxuICB9LFxuICB7XG4gICAgTmFtZTogJ0lzQ29tcGxpYW50QW5kTWFuYWdlZCcsXG4gICAgVmFsdWU6ICdGYWxzZScsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiAnU2Vzc2lvbklkJyxcbiAgICBWYWx1ZTogJzJhMWZiOGM0LWNlYjYtNGZhMC04MjZjLTNkNDNmODdkZTg5NycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYXJyYXlJcCA9IFtcbiAgJzc3LjIzMS4xODIuMTcnLFxuICAnMTcyLjIxNy4yMDQuOTQnLFxuICAnMTA4LjE3Ny4xMy4xMDEnLFxuICAnMTMuMjI2LjUyLjY2JyxcbiAgJzEzLjIyNi41Mi4yJyxcbiAgJzEzLjIyNi41Mi4xMDQnLFxuICAnMTMuMjI2LjUyLjg5JyxcbiAgJzE0MC44Mi4xMTMuMycsXG5dO1xuZXhwb3J0IGNvbnN0IGFycmF5VXNlcklkID0gW1xuICAnc21pdGhAd2F6dWguY29tJyxcbiAgJ3dpbGxpYW1zQHdhenVoLmNvbScsXG4gICdmcmFua0B3YXp1aC5jb20nLFxuICAnam9uZXNAd2F6dWguY29tJyxcbiAgJ2Jyb3duQHdhenVoLmNvbScsXG5dO1xuZXhwb3J0IGNvbnN0IGFycmF5VGFyZ2V0T2ZmaWNlID0gW1xuICB7XG4gICAgSUQ6ICc3OTdmNDg0Ni1iYTAwLTRmZDctYmE0My1kYWMxZjhmNjMwMTMnLFxuICAgIFR5cGU6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYXJyYXlBY3Rvck9mZmljZSA9IFtcbiAge1xuICAgIElEOiAnYTM5ZGQ5NTctZDI5NS00NTQ4LWI1MzctMjA1NTQ2OWJhZmJiJyxcbiAgICBUeXBlOiAwLFxuICB9LFxuICB7XG4gICAgSUQ6ICdhbGJlQHdhenVoLmNvbScsXG4gICAgVHlwZTogNSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhcnJheUV4dGVuZGVkUHJvcGVydGllc09mZmljZSA9IFtcbiAge1xuICAgIE5hbWU6ICdSZXN1bHRTdGF0dXNEZXRhaWwnLFxuICAgIFZhbHVlOiAnU3VjY2VzcycsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiAnVXNlckFnZW50JyxcbiAgICBWYWx1ZTpcbiAgICAgICdNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MS4wLjQ0NzIuNzcgU2FmYXJpLzUzNy4zNicsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiAnUmVxdWVzdFR5cGUnLFxuICAgIFZhbHVlOiAnT0F1dGgyOkF1dGhvcml6ZScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgb2ZmaWNlUnVsZXMgPSB7XG4gIDE6IHtcbiAgICBkYXRhOiB7XG4gICAgICBvZmZpY2UzNjU6IHtcbiAgICAgICAgUmVjb3JkVHlwZTogMSxcbiAgICAgICAgU3Vic2NyaXB0aW9uOiAnQXVkaXQuRXhjaGFuZ2UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJ1bGU6IHtcbiAgICAgIGxldmVsOiAzLFxuICAgICAgZGVzY3JpcHRpb246ICdPZmZpY2UgMzY1OiBFdmVudHMgZnJvbSB0aGUgRXhjaGFuZ2UgYWRtaW4gYXVkaXQgbG9nLicsXG4gICAgICBpZDogJzkxNTMzJyxcbiAgICAgIG1haWw6IGZhbHNlLFxuICAgICAgZmlyZWR0aW1lczogMyxcbiAgICAgIGdyb3VwczogWydvZmZpY2UzNjUnLCAnRXhjaGFuZ2VBZG1pbicsICdoaXBhYV8xNjQuMzEyLmInLCAncGNpX2Rzc18xMC4yLjInLCAncGNpX2Rzc18xMC42LjEnXSxcbiAgICB9LFxuICB9LFxuICAyOiB7XG4gICAgZGF0YToge1xuICAgICAgb2ZmaWNlMzY1OiB7XG4gICAgICAgIFJlY29yZFR5cGU6IDIsXG4gICAgICAgIFN1YnNjcmlwdGlvbjogJ0F1ZGl0LkV4Y2hhbmdlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBydWxlOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnT2ZmaWNlIDM2NTogRXZlbnRzIGZyb20gYW4gRXhjaGFuZ2UgbWFpbGJveCBhdWRpdCBsb2cgZm9yIGFjdGlvbnMgdGhhdCBhcmUgcGVyZm9ybWVkIG9uIGEgc2luZ2xlIGl0ZW0sIHN1Y2ggYXMgY3JlYXRpbmcgb3IgcmVjZWl2aW5nIGFuIGVtYWlsIG1lc3NhZ2UuJyxcbiAgICAgIGlkOiAnOTE1MzQnLFxuICAgICAgbWFpbDogZmFsc2UsXG4gICAgICBmaXJlZHRpbWVzOiAzLFxuICAgICAgZ3JvdXBzOiBbJ29mZmljZTM2NScsICdFeGNoYW5nZUl0ZW0nLCAnaGlwYWFfMTY0LjMxMi5iJywgJ3BjaV9kc3NfMTAuNi4yJ10sXG4gICAgfSxcbiAgfSxcbiAgNDoge1xuICAgIGRhdGE6IHtcbiAgICAgIG9mZmljZTM2NToge1xuICAgICAgICBSZWNvcmRUeXBlOiA0LFxuICAgICAgICBTdWJzY3JpcHRpb246ICdBdWRpdC5TaGFyZVBvaW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBydWxlOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnT2ZmaWNlIDM2NTogU2hhcmVQb2ludCBldmVudHMuJyxcbiAgICAgIGlkOiAnOTE1MzYnLFxuICAgICAgbWFpbDogZmFsc2UsXG4gICAgICBmaXJlZHRpbWVzOiAzLFxuICAgICAgZ3JvdXBzOiBbJ29mZmljZTM2NScsICdTaGFyZVBvaW50JywgJ2hpcGFhXzE2NC4zMTIuYicsICdwY2lfZHNzXzEwLjYuMiddLFxuICAgIH0sXG4gIH0sXG4gIDY6IHtcbiAgICBkYXRhOiB7XG4gICAgICBvZmZpY2UzNjU6IHtcbiAgICAgICAgUmVjb3JkVHlwZTogNixcbiAgICAgICAgU3Vic2NyaXB0aW9uOiAnQXVkaXQuU2hhcmVQb2ludCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcnVsZToge1xuICAgICAgbGV2ZWw6IDMsXG4gICAgICBkZXNjcmlwdGlvbjogJ09mZmljZSAzNjU6IFNoYXJlUG9pbnQgZmlsZSBvcGVyYXRpb24gZXZlbnRzLicsXG4gICAgICBpZDogJzkxNTM3JyxcbiAgICAgIG1haWw6IGZhbHNlLFxuICAgICAgZmlyZWR0aW1lczogMyxcbiAgICAgIGdyb3VwczogW1xuICAgICAgICAnb2ZmaWNlMzY1JyxcbiAgICAgICAgJ1NoYXJlUG9pbnRGaWxlT3BlcmF0aW9uJyxcbiAgICAgICAgJ2hpcGFhXzE2NC4zMTIuYicsXG4gICAgICAgICdoaXBhYV8xNjQuMzEyLmMuMScsXG4gICAgICAgICdwY2lfZHNzXzEwLjYuMicsXG4gICAgICAgICdwY2lfZHNzXzExLjUnLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICA4OiB7XG4gICAgZGF0YToge1xuICAgICAgb2ZmaWNlMzY1OiB7XG4gICAgICAgIFJlY29yZFR5cGU6IDgsXG4gICAgICAgIFN1YnNjcmlwdGlvbjogJ0F1ZGl0LkF6dXJlQWN0aXZlRGlyZWN0b3J5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBydWxlOiB7XG4gICAgICBsZXZlbDogMyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnT2ZmaWNlIDM2NTogQXp1cmUgQWN0aXZlIERpcmVjdG9yeSBldmVudHMuJyxcbiAgICAgIGlkOiAnOTE1MzknLFxuICAgICAgbWFpbDogZmFsc2UsXG4gICAgICBmaXJlZHRpbWVzOiAzLFxuICAgICAgZ3JvdXBzOiBbJ29mZmljZTM2NScsICdBenVyZUFjdGl2ZURpcmVjdG9yeScsICdoaXBhYV8xNjQuMzEyLmInLCAncGNpX2Rzc18xMC42LjInXSxcbiAgICB9LFxuICB9LFxuICAxNDoge1xuICAgIGRhdGE6IHtcbiAgICAgIG9mZmljZTM2NToge1xuICAgICAgICBSZWNvcmRUeXBlOiAxNCxcbiAgICAgICAgU3Vic2NyaXB0aW9uOiAnQXVkaXQuU2hhcmVQb2ludCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcnVsZToge1xuICAgICAgbGV2ZWw6IDMsXG4gICAgICBkZXNjcmlwdGlvbjogJ09mZmljZSAzNjU6IFNoYXJlUG9pbnQgc2hhcmluZyBldmVudHMuJyxcbiAgICAgIGlkOiAnOTE1NDQnLFxuICAgICAgbWFpbDogZmFsc2UsXG4gICAgICBmaXJlZHRpbWVzOiAzLFxuICAgICAgZ3JvdXBzOiBbJ29mZmljZTM2NScsICdTaGFyZVBvaW50JywgJ2hpcGFhXzE2NC4zMTIuYicsICdwY2lfZHNzXzEwLjYuMiddLFxuICAgIH0sXG4gIH0sXG4gIDE1OiB7XG4gICAgZGF0YToge1xuICAgICAgb2ZmaWNlMzY1OiB7XG4gICAgICAgIFJlY29yZFR5cGU6IDE1LFxuICAgICAgICBTdWJzY3JpcHRpb246ICdBdWRpdC5BenVyZUFjdGl2ZURpcmVjdG9yeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcnVsZToge1xuICAgICAgbGV2ZWw6IDMsXG4gICAgICBkZXNjcmlwdGlvbjogJ09mZmljZSAzNjU6IFNlY3VyZSBUb2tlbiBTZXJ2aWNlIChTVFMpIGxvZ29uIGV2ZW50cyBpbiBBenVyZSBBY3RpdmUgRGlyZWN0b3J5LicsXG4gICAgICBpZDogJzkxNTQ1JyxcbiAgICAgIG1haWw6IGZhbHNlLFxuICAgICAgZmlyZWR0aW1lczogMyxcbiAgICAgIGdyb3VwczogW1xuICAgICAgICAnb2ZmaWNlMzY1JyxcbiAgICAgICAgJ0F6dXJlQWN0aXZlRGlyZWN0b3J5U3RzTG9nb24nLFxuICAgICAgICAnaGlwYWFfMTY0LjMxMi5hLjIuSSxoaXBhYV8xNjQuMzEyLmInLFxuICAgICAgICAnaGlwYWFfMTY0LjMxMi5kJyxcbiAgICAgICAgJ2hpcGFhXzE2NC4zMTIuZS4yLklJJyxcbiAgICAgICAgJ3BjaV9kc3NfOC4zLHBjaV9kc3NfMTAuNi4xJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgMTg6IHtcbiAgICBkYXRhOiB7XG4gICAgICBvZmZpY2UzNjU6IHtcbiAgICAgICAgUmVjb3JkVHlwZTogMTgsXG4gICAgICAgIFN1YnNjcmlwdGlvbjogJ0F1ZGl0LkdlbmVyYWwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJ1bGU6IHtcbiAgICAgIGxldmVsOiA1LFxuICAgICAgZGVzY3JpcHRpb246ICdPZmZpY2UgMzY1OiBBZG1pbiBhY3Rpb25zIGZyb20gdGhlIFNlY3VyaXR5IGFuZCBDb21wbGlhbmNlIENlbnRlci4nLFxuICAgICAgaWQ6ICc5MTU0OCcsXG4gICAgICBtYWlsOiBmYWxzZSxcbiAgICAgIGZpcmVkdGltZXM6IDMsXG4gICAgICBncm91cHM6IFtcbiAgICAgICAgJ29mZmljZTM2NScsXG4gICAgICAgICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFT1BDbWRsZXQnLFxuICAgICAgICAnaGlwYWFfMTY0LjMxMi5iJyxcbiAgICAgICAgJ3BjaV9kc3NfMTAuMi4yJyxcbiAgICAgICAgJ3BjaV9kc3NfMTAuNi4xJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgMzY6IHtcbiAgICBkYXRhOiB7XG4gICAgICBvZmZpY2UzNjU6IHtcbiAgICAgICAgUmVjb3JkVHlwZTogMzYsXG4gICAgICAgIFN1YnNjcmlwdGlvbjogJ0F1ZGl0LlNoYXJlUG9pbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJ1bGU6IHtcbiAgICAgIGxldmVsOiAzLFxuICAgICAgZGVzY3JpcHRpb246ICdPZmZpY2UgMzY1OiBTaGFyZVBvaW50IExpc3QgZXZlbnRzLicsXG4gICAgICBpZDogJzkxNTY0JyxcbiAgICAgIG1haWw6IGZhbHNlLFxuICAgICAgZmlyZWR0aW1lczogMyxcbiAgICAgIGdyb3VwczogWydvZmZpY2UzNjUnLCAnU2hhcmVQb2ludExpc3RPcGVyYXRpb24nLCAnaGlwYWFfMTY0LjMxMi5iJywgJ3BjaV9kc3NfMTAuNi4yJ10sXG4gICAgfSxcbiAgfSxcbiAgNTI6IHtcbiAgICBkYXRhOiB7XG4gICAgICBvZmZpY2UzNjU6IHtcbiAgICAgICAgUmVjb3JkVHlwZTogNTIsXG4gICAgICAgIFN1YnNjcmlwdGlvbjogJ0F1ZGl0LkdlbmVyYWwnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJ1bGU6IHtcbiAgICAgIGxldmVsOiAzLFxuICAgICAgZGVzY3JpcHRpb246ICdPZmZpY2UgMzY1OiBEYXRhIEluc2lnaHRzIFJFU1QgQVBJIGV2ZW50cy4nLFxuICAgICAgaWQ6ICc5MTU4MCcsXG4gICAgICBtYWlsOiBmYWxzZSxcbiAgICAgIGZpcmVkdGltZXM6IDQsXG4gICAgICBncm91cHM6IFsnb2ZmaWNlMzY1JywgJ0RhdGFJbnNpZ2h0c1Jlc3RBcGlBdWRpdCcsICdoaXBhYV8xNjQuMzEyLmInLCAncGNpX2Rzc18xMC42LjInXSxcbiAgICB9LFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBhcnJheUxvZ3MgPSBbXG4gIHtcbiAgICBJZDogJzM1YWI4Yjg5LWNmZWEtNDIxNC01MjQ5LTA4ZDkxYTA2ZTUzNycsXG4gICAgT3BlcmF0aW9uOiAnU2VhcmNoRGF0YUluc2lnaHRzU3Vic2NyaXB0aW9uJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNTIsXG4gICAgVXNlcktleTogJ2Zha2VAZW1haWwubm90JyxcbiAgICBVc2VyVHlwZTogNSxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgQWFkQXBwSWQ6ICc4MGNjY2E2Ny01NGJkLTQ0YWItODYyNS00Yjc5YzRkYzc3NzUnLFxuICAgIERhdGFUeXBlOiAnRGF0YUluc2lnaHRzU3Vic2NyaXB0aW9uJyxcbiAgICBEYXRhYmFzZVR5cGU6ICdEaXJlY3RvcnknLFxuICAgIFJlbGF0aXZlVXJsOlxuICAgICAgJy9EYXRhSW5zaWdodHMvRGF0YUluc2lnaHRzU2VydmljZS5zdmMvRmluZC9EYXRhSW5zaWdodHNTdWJzY3JpcHRpb24/dGVuYW50aWQ9MGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZXN1bHRDb3VudDogJzEnLFxuICB9LFxuICB7XG4gICAgSWQ6ICcyN2VlMmU5NS02ZjU1LTQ3MjMtZjkxZC0wOGQ5MWEyNmI5YTQnLFxuICAgIE9wZXJhdGlvbjogJ1NlYXJjaEFsZXJ0JyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNTIsXG4gICAgVXNlcktleTogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NlY3VyaXR5Q29tcGxpYW5jZUNlbnRlcicsXG4gICAgVXNlcklkOiAnOTEwZWQ1Y2EtNGVjZi00MTRjLWExYmUtZDUzNTExYmZlMWE1JyxcbiAgICBBYWRBcHBJZDogJ2ZjNzgwNDY1LTIwMTctNDBkNC1hMGM1LTMwNzAyMjQ3MWI5MicsXG4gICAgRGF0YVR5cGU6ICdBbGVydCcsXG4gICAgRGF0YWJhc2VUeXBlOiAnRGF0YUluc2lnaHRzJyxcbiAgICBSZWxhdGl2ZVVybDpcbiAgICAgICcvRGF0YUluc2lnaHRzL0RhdGFJbnNpZ2h0c1NlcnZpY2Uuc3ZjL0ZpbmQvQWxlcnQ/dGVuYW50aWQ9MGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJlBhZ2VTaXplPTEwMCZGaWx0ZXI9U3RhcnREYXRlK2VxKzIwMjEtMDQtMThUMTclM2E1OSUzYTQwLjg4MjA2NTVaK2FuZCtFbmREYXRlK2VxKzIwMjEtMDUtMThUMTclM2E1OSUzYTQwLjg4MjA2NTVaK2FuZCtBbGVydENhdGVnb3J5K2FueSsxJTJjMyUyYzclMmM1JTJjNCthbmQrQWxlcnRTb3VyY2UrZXErJTI3T2ZmaWNlKzM2NStTZWN1cml0eSslMjYrQ29tcGxpYW5jZSUyNycsXG4gICAgUmVzdWx0Q291bnQ6ICcwJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTc6NTk6NTInLFxuICAgIElkOiAnN2QzYTlkMzUtNmMwNC00ZjAyLWU4ZmUtMDhkOTFhMjZiYzc5JyxcbiAgICBPcGVyYXRpb246ICdTZWFyY2hBbGVydEFnZ3JlZ2F0ZScsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDUyLFxuICAgIFVzZXJLZXk6ICc5MTBlZDVjYS00ZWNmLTQxNGMtYTFiZS1kNTM1MTFiZmUxYTUnLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXInLFxuICAgIFVzZXJJZDogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgQWFkQXBwSWQ6ICdmYzc4MDQ2NS0yMDE3LTQwZDQtYTBjNS0zMDcwMjI0NzFiOTInLFxuICAgIERhdGFUeXBlOiAnQWxlcnRBZ2dyZWdhdGUnLFxuICAgIERhdGFiYXNlVHlwZTogJ0RhdGFJbnNpZ2h0cycsXG4gICAgUmVsYXRpdmVVcmw6XG4gICAgICAnL0RhdGFJbnNpZ2h0cy9EYXRhSW5zaWdodHNTZXJ2aWNlLnN2Yy9GaW5kL0FsZXJ0QWdncmVnYXRlP3RlbmFudGlkPTBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YiZQYWdlU2l6ZT01NDAmRmlsdGVyPVN0YXJ0RGF0ZStlcSsyMDIxLTA0LTE4VDE3JTNhNTklM2E0OC4zNTA0MDUwWithbmQrRW5kRGF0ZStlcSsyMDIxLTA1LTE4VDE3JTNhNTklM2E0OC4zNTA0MDUwWithbmQrQWxlcnRDYXRlZ29yeSthbnkrMSUyYzMlMmM3JTJjNSUyYzQrYW5kK0FsZXJ0U291cmNlK2VxKyUyN09mZmljZSszNjUrU2VjdXJpdHkrJTI2K0NvbXBsaWFuY2UlMjcnLFxuICAgIFJlc3VsdENvdW50OiAnMCcsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDE3OjU5OjQ2JyxcbiAgICBJZDogJ2ViOTc3NWNiLTU5ZjctNDJlYS0zZWUwLTA4ZDkxYTI2YjkyYicsXG4gICAgT3BlcmF0aW9uOiAnVmFsaWRhdGVyYmFjQWNjZXNzQ2hlY2snLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiA1MixcbiAgICBVc2VyS2V5OiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFVzZXJUeXBlOiA1LFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXInLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBBYWRBcHBJZDogJ2Q2ZmRhYTMzLWU4MjEtNDIxMS04M2QwLWNmNzQ3MzY0ODllMScsXG4gICAgRGF0YVR5cGU6ICdyYmFjQWNjZXNzQ2hlY2snLFxuICAgIFJlbGF0aXZlVXJsOlxuICAgICAgJy9EYXRhSW5zaWdodHMvRGF0YUluc2lnaHRzU2VydmljZS5zdmMvdmFsaWRhdGUvcmJhY0FjY2Vzc0NoZWNrP3RlbmFudGlkPTBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVzdWx0Q291bnQ6ICcwJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTQ6MTI6NTMnLFxuICAgIElkOiAnYzBlYWRhMWItNTJiMi00NTBkLTg0ZGYtNmQ0NjE0MjBkNjIxJyxcbiAgICBPcGVyYXRpb246ICdHZXQtUmV0ZW50aW9uQ29tcGxpYW5jZVBvbGljeScsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDE4LFxuICAgIFJlc3VsdFN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgIFVzZXJLZXk6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgVXNlclR5cGU6IDIsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NlY3VyaXR5Q29tcGxpYW5jZUNlbnRlcicsXG4gICAgT2JqZWN0SWQ6ICcnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFdmVudFR5cGU6IDAsXG4gICAgQ2xpZW50QXBwbGljYXRpb246ICdFTUMnLFxuICAgIENtZGxldFZlcnNpb246ICcuLi4nLFxuICAgIEVmZmVjdGl2ZU9yZ2FuaXphdGlvbjogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE5vblBJSVBhcmFtZXRlcnM6ICcnLFxuICAgIFBhcmFtZXRlcnM6ICcnLFxuICAgIFN0YXJ0VGltZTogJzIwMjEtMDUtMThUMTQ6MTI6NTMnLFxuICAgIFVzZXJTZXJ2aWNlUGxhbjogJycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDE1OjUyOjI2JyxcbiAgICBJZDogJzQ1YTBkN2M0LWRlNzMtNDY2YS04ZTZjLWMyNWY5YzAzNTcxNCcsXG4gICAgT3BlcmF0aW9uOiAnR2V0LVN1cGVydmlzb3J5UmV2aWV3UG9saWN5VjInLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxOCxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFVzZXJUeXBlOiAyLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXInLFxuICAgIE9iamVjdElkOiAnJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyRXZlbnRUeXBlOiAwLFxuICAgIENsaWVudEFwcGxpY2F0aW9uOiAnRU1DJyxcbiAgICBDbWRsZXRWZXJzaW9uOiAnLi4uJyxcbiAgICBFZmZlY3RpdmVPcmdhbml6YXRpb246ICd3YXp1aC50ZXN0eXRlc3QuY29tJyxcbiAgICBOb25QSUlQYXJhbWV0ZXJzOiAnJyxcbiAgICBQYXJhbWV0ZXJzOiAnJyxcbiAgICBTdGFydFRpbWU6ICcyMDIxLTA1LTE4VDE1OjUyOjI2JyxcbiAgICBVc2VyU2VydmljZVBsYW46ICcnLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0xOFQxNTo1MjozMScsXG4gICAgSWQ6ICdmOTkxMjg2OC1iNDMxLTQzNWMtODMzNy0wZmMzYjQzNzA4MTUnLFxuICAgIE9wZXJhdGlvbjogJ0dldC1TdXBlcnZpc29yeVJldmlld1JlcG9ydCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDE4LFxuICAgIFJlc3VsdFN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgIFVzZXJLZXk6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgVXNlclR5cGU6IDIsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NlY3VyaXR5Q29tcGxpYW5jZUNlbnRlcicsXG4gICAgT2JqZWN0SWQ6ICcnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFdmVudFR5cGU6IDAsXG4gICAgQ2xpZW50QXBwbGljYXRpb246ICdFTUMnLFxuICAgIENtZGxldFZlcnNpb246ICcuLi4nLFxuICAgIEVmZmVjdGl2ZU9yZ2FuaXphdGlvbjogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE5vblBJSVBhcmFtZXRlcnM6XG4gICAgICAnLVN0YXJ0RGF0ZSBcIjxTTklQLVBJST5cIiAtRW5kRGF0ZSBcIjxTTklQLVBJST5cIiAtUGFnZVNpemUgXCI8U05JUC1QSUk+XCIgLVBhZ2UgXCI8U05JUC1QSUk+XCInLFxuICAgIFBhcmFtZXRlcnM6XG4gICAgICAnLVN0YXJ0RGF0ZSBcIjUvMTIvMjAyMSAxMjowMDowMCBBTVwiIC1FbmREYXRlIFwiNS8xOC8yMDIxIDExOjU5OjU5IFBNXCIgLVBhZ2VTaXplIFwiMzAwXCIgLVBhZ2UgXCIxXCInLFxuICAgIFN0YXJ0VGltZTogJzIwMjEtMDUtMThUMTU6NTI6MzEnLFxuICAgIFVzZXJTZXJ2aWNlUGxhbjogJycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDE1OjUyOjMwJyxcbiAgICBJZDogJ2RjZWNkODdhLTMwNjEtNGRlYS05YmZmLTRmYmZjMjNjYTMyOCcsXG4gICAgT3BlcmF0aW9uOiAnR2V0LVN1cGVydmlzb3J5UmV2aWV3T3ZlcmFsbFByb2dyZXNzUmVwb3J0JyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogMTgsXG4gICAgUmVzdWx0U3RhdHVzOiAnU3VjY2VzcycsXG4gICAgVXNlcktleTogJ2Zha2VAZW1haWwubm90JyxcbiAgICBVc2VyVHlwZTogMixcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyJyxcbiAgICBPYmplY3RJZDogJycsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFNlY3VyaXR5Q29tcGxpYW5jZUNlbnRlckV2ZW50VHlwZTogMCxcbiAgICBDbGllbnRBcHBsaWNhdGlvbjogJ0VNQycsXG4gICAgQ21kbGV0VmVyc2lvbjogJy4uLicsXG4gICAgRWZmZWN0aXZlT3JnYW5pemF0aW9uOiAnd2F6dWgudGVzdHl0ZXN0LmNvbScsXG4gICAgTm9uUElJUGFyYW1ldGVyczogJycsXG4gICAgUGFyYW1ldGVyczogJycsXG4gICAgU3RhcnRUaW1lOiAnMjAyMS0wNS0xOFQxNTo1MjozMCcsXG4gICAgVXNlclNlcnZpY2VQbGFuOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTU6NTI6MzAnLFxuICAgIElkOiAnNTY0MWQwNjItZjI3OS00Y2E0LTk1NzctNTBkN2VjYmZlZWRiJyxcbiAgICBPcGVyYXRpb246ICdHZXQtU3VwZXJ2aXNvcnlSZXZpZXdUb3BDYXNlc1JlcG9ydCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDE4LFxuICAgIFJlc3VsdFN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgIFVzZXJLZXk6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgVXNlclR5cGU6IDIsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NlY3VyaXR5Q29tcGxpYW5jZUNlbnRlcicsXG4gICAgT2JqZWN0SWQ6ICcnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFdmVudFR5cGU6IDAsXG4gICAgQ2xpZW50QXBwbGljYXRpb246ICdFTUMnLFxuICAgIENtZGxldFZlcnNpb246ICcuLi4nLFxuICAgIEVmZmVjdGl2ZU9yZ2FuaXphdGlvbjogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE5vblBJSVBhcmFtZXRlcnM6ICcnLFxuICAgIFBhcmFtZXRlcnM6ICcnLFxuICAgIFN0YXJ0VGltZTogJzIwMjEtMDUtMThUMTU6NTI6MzAnLFxuICAgIFVzZXJTZXJ2aWNlUGxhbjogJycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDE3OjUwOjE1JyxcbiAgICBJZDogJzhjN2M5ZjgxLTY4ZTktNDUyYi1hMjJkLTEzMzNlYjljZDY0NycsXG4gICAgT3BlcmF0aW9uOiAnR2V0LUNvbXBsaWFuY2VTZWFyY2hBY3Rpb24nLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxOCxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFVzZXJUeXBlOiAyLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXInLFxuICAgIE9iamVjdElkOiAnJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyRXZlbnRUeXBlOiAwLFxuICAgIENsaWVudEFwcGxpY2F0aW9uOiAnRU1DJyxcbiAgICBDbWRsZXRWZXJzaW9uOiAnLi4uJyxcbiAgICBFZmZlY3RpdmVPcmdhbml6YXRpb246ICd3YXp1aC50ZXN0eXRlc3QuY29tJyxcbiAgICBOb25QSUlQYXJhbWV0ZXJzOiAnLUV4cG9ydCBcIjxTTklQLVBJST5cIicsXG4gICAgUGFyYW1ldGVyczogJy1FeHBvcnQgXCJUcnVlXCInLFxuICAgIFN0YXJ0VGltZTogJzIwMjEtMDUtMThUMTc6NTA6MTUnLFxuICAgIFVzZXJTZXJ2aWNlUGxhbjogJycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDE3OjUwOjEyJyxcbiAgICBJZDogJzQ2OTIyMDFmLTgxMDEtNDU1ZS1iODlkLTY3MjdlZjc1YzIyMycsXG4gICAgT3BlcmF0aW9uOiAnR2V0LUNvbXBsaWFuY2VUYWcnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxOCxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFVzZXJUeXBlOiAyLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXInLFxuICAgIE9iamVjdElkOiAnJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyRXZlbnRUeXBlOiAwLFxuICAgIENsaWVudEFwcGxpY2F0aW9uOiAnRU1DJyxcbiAgICBDbWRsZXRWZXJzaW9uOiAnLi4uJyxcbiAgICBFZmZlY3RpdmVPcmdhbml6YXRpb246ICd3YXp1aC50ZXN0eXRlc3QuY29tJyxcbiAgICBOb25QSUlQYXJhbWV0ZXJzOiAnLUluY2x1ZGluZ0xhYmVsU3RhdGUgXCI8U05JUC1QSUk+XCInLFxuICAgIFBhcmFtZXRlcnM6ICctSW5jbHVkaW5nTGFiZWxTdGF0ZSBcIlRydWVcIicsXG4gICAgU3RhcnRUaW1lOiAnMjAyMS0wNS0xOFQxNzo1MDoxMicsXG4gICAgVXNlclNlcnZpY2VQbGFuOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTc6NTA6MTInLFxuICAgIElkOiAnN2Q0MWYxZjItNTg3Yy00OTJmLWI2ZmYtMmY5ZDFhNTE5YzYwJyxcbiAgICBPcGVyYXRpb246ICdHZXQtQ29tcGxpYW5jZVNlYXJjaCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDE4LFxuICAgIFJlc3VsdFN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgIFVzZXJLZXk6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgVXNlclR5cGU6IDIsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NlY3VyaXR5Q29tcGxpYW5jZUNlbnRlcicsXG4gICAgT2JqZWN0SWQ6ICcnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBTZWN1cml0eUNvbXBsaWFuY2VDZW50ZXJFdmVudFR5cGU6IDAsXG4gICAgQ2xpZW50QXBwbGljYXRpb246ICdFTUMnLFxuICAgIENtZGxldFZlcnNpb246ICcuLi4nLFxuICAgIEVmZmVjdGl2ZU9yZ2FuaXphdGlvbjogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE5vblBJSVBhcmFtZXRlcnM6ICctUmVzdWx0U2l6ZSBcIlVubGltaXRlZFwiJyxcbiAgICBQYXJhbWV0ZXJzOiAnLVJlc3VsdFNpemUgXCJVbmxpbWl0ZWRcIicsXG4gICAgU3RhcnRUaW1lOiAnMjAyMS0wNS0xOFQxNzo1MDoxMicsXG4gICAgVXNlclNlcnZpY2VQbGFuOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTc6NTk6NDUnLFxuICAgIElkOiAnZWJjZmMyYmYtODc5OS00MTNjLWFkZDQtNmMyYjUzY2I2OGU3JyxcbiAgICBPcGVyYXRpb246ICdHZXQtRGxwU2Vuc2l0aXZlSW5mb3JtYXRpb25UeXBlJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogMTgsXG4gICAgUmVzdWx0U3RhdHVzOiAnU3VjY2VzcycsXG4gICAgVXNlcktleTogJ2Zha2VAZW1haWwubm90JyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnU2VjdXJpdHlDb21wbGlhbmNlQ2VudGVyJyxcbiAgICBPYmplY3RJZDogJycsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFNlY3VyaXR5Q29tcGxpYW5jZUNlbnRlckV2ZW50VHlwZTogMCxcbiAgICBDbGllbnRBcHBsaWNhdGlvbjogJycsXG4gICAgQ21kbGV0VmVyc2lvbjogJy4uLicsXG4gICAgRWZmZWN0aXZlT3JnYW5pemF0aW9uOiAnd2F6dWgudGVzdHl0ZXN0LmNvbScsXG4gICAgTm9uUElJUGFyYW1ldGVyczogJy1Pcmdhbml6YXRpb24gXCIwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWJcIicsXG4gICAgUGFyYW1ldGVyczogJy1Pcmdhbml6YXRpb24gXCIwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWJcIicsXG4gICAgU3RhcnRUaW1lOiAnMjAyMS0wNS0xOFQxNzo1OTo0NScsXG4gICAgVXNlclNlcnZpY2VQbGFuOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTQ6MTE6NDEnLFxuICAgIElkOiAnN2FlY2EyMjYtYjNlNy00MDMzLTlhN2YtZDA2NzYyMmU4ZDAwJyxcbiAgICBPcGVyYXRpb246ICdVc2VyTG9nZ2VkSW4nLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxNSxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnOTEwZWQ1Y2EtNGVjZi00MTRjLWExYmUtZDUzNTExYmZlMWE1JyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnQXp1cmVBY3RpdmVEaXJlY3RvcnknLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDogJzVmMDkzMzNhLTg0MmMtNDdkYS1hMTU3LTU3ZGEyN2ZjYmNhNScsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIEF6dXJlQWN0aXZlRGlyZWN0b3J5RXZlbnRUeXBlOiAxLFxuICAgIEV4dGVuZGVkUHJvcGVydGllczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnUmVzdWx0U3RhdHVzRGV0YWlsJyxcbiAgICAgICAgVmFsdWU6ICdSZWRpcmVjdCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnVXNlckFnZW50JyxcbiAgICAgICAgVmFsdWU6XG4gICAgICAgICAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ1JlcXVlc3RUeXBlJyxcbiAgICAgICAgVmFsdWU6ICdPQXV0aDI6QXV0aG9yaXplJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBNb2RpZmllZFByb3BlcnRpZXM6IFtdLFxuICAgIEFjdG9yOiBbXG4gICAgICB7XG4gICAgICAgIElEOiAnOTEwZWQ1Y2EtNGVjZi00MTRjLWExYmUtZDUzNTExYmZlMWE1JyxcbiAgICAgICAgVHlwZTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIElEOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgICAgICBUeXBlOiA1LFxuICAgICAgfSxcbiAgICBdLFxuICAgIEFjdG9yQ29udGV4dElkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBBY3RvcklwQWRkcmVzczogJzE5MC4xNi45LjE3NicsXG4gICAgSW50ZXJTeXN0ZW1zSWQ6ICdhMzc5ODc5Mi1mZWYxLTRiNTMtYmQ0NC1iYmJkOTRjZjBlNWMnLFxuICAgIEludHJhU3lzdGVtSWQ6ICc3YWVjYTIyNi1iM2U3LTQwMzMtOWE3Zi1kMDY3NjIyZThkMDAnLFxuICAgIFN1cHBvcnRUaWNrZXRJZDogJycsXG4gICAgVGFyZ2V0OiBbXG4gICAgICB7XG4gICAgICAgIElEOiAnNWYwOTMzM2EtODQyYy00N2RhLWExNTctNTdkYTI3ZmNiY2E1JyxcbiAgICAgICAgVHlwZTogMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBUYXJnZXRDb250ZXh0SWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIEFwcGxpY2F0aW9uSWQ6ICc4OWJlZTFmNy01ZTZlLTRkOGEtOWYzZC1lY2Q2MDEyNTlkYTcnLFxuICAgIERldmljZVByb3BlcnRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ09TJyxcbiAgICAgICAgVmFsdWU6ICdXaW5kb3dzIDEwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdCcm93c2VyVHlwZScsXG4gICAgICAgIFZhbHVlOiAnQ2hyb21lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdJc0NvbXBsaWFudEFuZE1hbmFnZWQnLFxuICAgICAgICBWYWx1ZTogJ0ZhbHNlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdTZXNzaW9uSWQnLFxuICAgICAgICBWYWx1ZTogJzcxNGM0OTM1LWEyMmQtNDAwZC04NTYzLWZiYmQ4YmZjMjMwMScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgRXJyb3JOdW1iZXI6ICcwJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMTc6NDk6MTEnLFxuICAgIElkOiAnNGU2MjE1NjMtMzk0Zi00MmE5LThhOGEtODU0OWUxZmZhNzcxJyxcbiAgICBPcGVyYXRpb246ICdBZGQgc2VydmljZSBwcmluY2lwYWwuJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogOCxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnTm90IEF2YWlsYWJsZScsXG4gICAgVXNlclR5cGU6IDQsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ0F6dXJlQWN0aXZlRGlyZWN0b3J5JyxcbiAgICBPYmplY3RJZDogJ2Y3MzhlZjE0LTQ3ZGMtNDU2NC1iNTNiLTQ1MDY5NDg0Y2NjNycsXG4gICAgVXNlcklkOiAnU2VydmljZVByaW5jaXBhbF80YmY4MDc4OC0wZWM0LTQ4MWEtYWU3Yi1iNzE2NDdiZjNiNTcnLFxuICAgIEF6dXJlQWN0aXZlRGlyZWN0b3J5RXZlbnRUeXBlOiAxLFxuICAgIEV4dGVuZGVkUHJvcGVydGllczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnYWRkaXRpb25hbERldGFpbHMnLFxuICAgICAgICBWYWx1ZTogJ3t9JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdleHRlbmRlZEF1ZGl0RXZlbnRDYXRlZ29yeScsXG4gICAgICAgIFZhbHVlOiAnU2VydmljZVByaW5jaXBhbCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgTW9kaWZpZWRQcm9wZXJ0aWVzOiBbXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdBY2NvdW50RW5hYmxlZCcsXG4gICAgICAgIE5ld1ZhbHVlOiAnW1xcclxcbiAgdHJ1ZVxcclxcbl0nLFxuICAgICAgICBPbGRWYWx1ZTogJ1tdJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdBcHBQcmluY2lwYWxJZCcsXG4gICAgICAgIE5ld1ZhbHVlOiAnW1xcclxcbiAgXCJmNzM4ZWYxNC00N2RjLTQ1NjQtYjUzYi00NTA2OTQ4NGNjYzdcIlxcclxcbl0nLFxuICAgICAgICBPbGRWYWx1ZTogJ1tdJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdEaXNwbGF5TmFtZScsXG4gICAgICAgIE5ld1ZhbHVlOiAnW1xcclxcbiAgXCJNYXJrZXRwbGFjZSBBcGlcIlxcclxcbl0nLFxuICAgICAgICBPbGRWYWx1ZTogJ1tdJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdTZXJ2aWNlUHJpbmNpcGFsTmFtZScsXG4gICAgICAgIE5ld1ZhbHVlOiAnW1xcclxcbiAgXCJmNzM4ZWYxNC00N2RjLTQ1NjQtYjUzYi00NTA2OTQ4NGNjYzdcIlxcclxcbl0nLFxuICAgICAgICBPbGRWYWx1ZTogJ1tdJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdDcmVkZW50aWFsJyxcbiAgICAgICAgTmV3VmFsdWU6XG4gICAgICAgICAgJ1tcXHJcXG4gIHtcXHJcXG4gICAgXCJDcmVkZW50aWFsVHlwZVwiOiAyLFxcclxcbiAgICBcIktleVN0b3JlSWRcIjogXCIyOTExNTRmMC1hOWY1LTQ1YmItODdiZS05YzhlZTViNmQ2MmNcIixcXHJcXG4gICAgXCJLZXlHcm91cElkXCI6IFwiMWM1YWEwNGItZGVhNS00Mjg0LTk5MDgtNDdlZGQxZTEyZDEzXCJcXHJcXG4gIH1cXHJcXG5dJyxcbiAgICAgICAgT2xkVmFsdWU6ICdbXScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnSW5jbHVkZWQgVXBkYXRlZCBQcm9wZXJ0aWVzJyxcbiAgICAgICAgTmV3VmFsdWU6ICdBY2NvdW50RW5hYmxlZCwgQXBwUHJpbmNpcGFsSWQsIERpc3BsYXlOYW1lLCBTZXJ2aWNlUHJpbmNpcGFsTmFtZSwgQ3JlZGVudGlhbCcsXG4gICAgICAgIE9sZFZhbHVlOiAnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdUYXJnZXRJZC5TZXJ2aWNlUHJpbmNpcGFsTmFtZXMnLFxuICAgICAgICBOZXdWYWx1ZTogJ2Y3MzhlZjE0LTQ3ZGMtNDU2NC1iNTNiLTQ1MDY5NDg0Y2NjNycsXG4gICAgICAgIE9sZFZhbHVlOiAnJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBBY3RvcjogW1xuICAgICAge1xuICAgICAgICBJRDogJ1dpbmRvd3MgQXp1cmUgU2VydmljZSBNYW5hZ2VtZW50IEFQSScsXG4gICAgICAgIFR5cGU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzc5N2Y0ODQ2LWJhMDAtNGZkNy1iYTQzLWRhYzFmOGY2MzAxMycsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ1NlcnZpY2VQcmluY2lwYWxfNGJmODA3ODgtMGVjNC00ODFhLWFlN2ItYjcxNjQ3YmYzYjU3JyxcbiAgICAgICAgVHlwZTogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIElEOiAnNGJmODA3ODgtMGVjNC00ODFhLWFlN2ItYjcxNjQ3YmYzYjU3JyxcbiAgICAgICAgVHlwZTogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIElEOiAnU2VydmljZVByaW5jaXBhbCcsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgQWN0b3JDb250ZXh0SWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIEludGVyU3lzdGVtc0lkOiAnOWNmYmEzYmItYjQ3OC00NGFhLWExNDAtNDY1ZWU3ZjI5Mjc0JyxcbiAgICBJbnRyYVN5c3RlbUlkOiAnMjEwNTE4MDUtMjQxMy01OTRhLWFiNWQtMDA2MDE0MDA1MzQ4JyxcbiAgICBTdXBwb3J0VGlja2V0SWQ6ICcnLFxuICAgIFRhcmdldDogW1xuICAgICAge1xuICAgICAgICBJRDogJ1NlcnZpY2VQcmluY2lwYWxfZjZkMmVhYmMtZDAyMC00NjQzLTgwYTgtMmI5MmIxNjNkMWRlJyxcbiAgICAgICAgVHlwZTogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIElEOiAnZjZkMmVhYmMtZDAyMC00NjQzLTgwYTgtMmI5MmIxNjNkMWRlJyxcbiAgICAgICAgVHlwZTogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIElEOiAnU2VydmljZVByaW5jaXBhbCcsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ01hcmtldHBsYWNlIEFwaScsXG4gICAgICAgIFR5cGU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ2Y3MzhlZjE0LTQ3ZGMtNDU2NC1iNTNiLTQ1MDY5NDg0Y2NjNycsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ2Y3MzhlZjE0LTQ3ZGMtNDU2NC1iNTNiLTQ1MDY5NDg0Y2NjNycsXG4gICAgICAgIFR5cGU6IDQsXG4gICAgICB9LFxuICAgIF0sXG4gICAgVGFyZ2V0Q29udGV4dElkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMThUMjE6NDI6MjUnLFxuICAgIElkOiAnYWY0ZTU1MmYtMGJjYS00YjAyLTkyYzktNGJkNDMwZjI0Zjc1JyxcbiAgICBPcGVyYXRpb246ICdDaGFuZ2UgdXNlciBsaWNlbnNlLicsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDgsXG4gICAgUmVzdWx0U3RhdHVzOiAnU3VjY2VzcycsXG4gICAgVXNlcktleTogJzEwMDMyMDAxNDA4MEQzQURAd2F6dWguY29tJyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnQXp1cmVBY3RpdmVEaXJlY3RvcnknLFxuICAgIE9iamVjdElkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBBenVyZUFjdGl2ZURpcmVjdG9yeUV2ZW50VHlwZTogMSxcbiAgICBFeHRlbmRlZFByb3BlcnRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ2FkZGl0aW9uYWxEZXRhaWxzJyxcbiAgICAgICAgVmFsdWU6ICd7fScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnZXh0ZW5kZWRBdWRpdEV2ZW50Q2F0ZWdvcnknLFxuICAgICAgICBWYWx1ZTogJ1VzZXInLFxuICAgICAgfSxcbiAgICBdLFxuICAgIE1vZGlmaWVkUHJvcGVydGllczogW10sXG4gICAgQWN0b3I6IFtcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgICAgIFR5cGU6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzEwMDMyMDAxNDA4MEQzQUQnLFxuICAgICAgICBUeXBlOiAzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdVc2VyXzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ1VzZXInLFxuICAgICAgICBUeXBlOiAyLFxuICAgICAgfSxcbiAgICBdLFxuICAgIEFjdG9yQ29udGV4dElkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBJbnRlclN5c3RlbXNJZDogJzFmZDA5ZDZiLTU0ZDMtNGE1OC1hY2ZlLTcxY2MyYzQyOWQ5NycsXG4gICAgSW50cmFTeXN0ZW1JZDogJzBhOGFlMjAxLWU0MDQtNGY2Zi05OWRiLWEzYzkyYTViZDAyMicsXG4gICAgU3VwcG9ydFRpY2tldElkOiAnJyxcbiAgICBUYXJnZXQ6IFtcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdVc2VyXzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ1VzZXInLFxuICAgICAgICBUeXBlOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgICAgIFR5cGU6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzEwMDMyMDAxNDA4MEQzQUQnLFxuICAgICAgICBUeXBlOiAzLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFRhcmdldENvbnRleHRJZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTE4VDIxOjQyOjI1JyxcbiAgICBJZDogJ2IyN2VhYjg0LTFlZjctNDM3Mi1iYzY4LTcyMTNhZjhhYjNmYicsXG4gICAgT3BlcmF0aW9uOiAnVXBkYXRlIHVzZXIuJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogOCxcbiAgICBSZXN1bHRTdGF0dXM6ICdTdWNjZXNzJyxcbiAgICBVc2VyS2V5OiAnMTAwMzIwMDE0MDgwRDNBREB3YXp1aC5jb20nLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdBenVyZUFjdGl2ZURpcmVjdG9yeScsXG4gICAgT2JqZWN0SWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIEF6dXJlQWN0aXZlRGlyZWN0b3J5RXZlbnRUeXBlOiAxLFxuICAgIEV4dGVuZGVkUHJvcGVydGllczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnYWRkaXRpb25hbERldGFpbHMnLFxuICAgICAgICBWYWx1ZTogJ3tcIlVzZXJUeXBlXCI6XCJNZW1iZXJcIn0nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ2V4dGVuZGVkQXVkaXRFdmVudENhdGVnb3J5JyxcbiAgICAgICAgVmFsdWU6ICdVc2VyJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBNb2RpZmllZFByb3BlcnRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ0Fzc2lnbmVkTGljZW5zZScsXG4gICAgICAgIE5ld1ZhbHVlOlxuICAgICAgICAgICdbXFxyXFxuICBcIltTa3VOYW1lPVBPV0VSX0JJX1NUQU5EQVJELCBBY2NvdW50SWQ9MGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViLCBTa3VJZD1hNDAzZWJjYy1mYWUwLTRjYTItOGM4Yy03YTkwN2ZkNmMyMzUsIERpc2FibGVkUGxhbnM9W11dXCJcXHJcXG5dJyxcbiAgICAgICAgT2xkVmFsdWU6ICdbXScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnQXNzaWduZWRQbGFuJyxcbiAgICAgICAgTmV3VmFsdWU6XG4gICAgICAgICAgJ1tcXHJcXG4gIHtcXHJcXG4gICAgXCJTdWJzY3JpYmVkUGxhbklkXCI6IFwiYzk3NmQwN2YtZmQwZi00OWViLWJkYzItMjZjMTc0ODFlMWM1XCIsXFxyXFxuICAgIFwiU2VydmljZUluc3RhbmNlXCI6IFwiQXp1cmVBbmFseXNpcy9TREZcIixcXHJcXG4gICAgXCJDYXBhYmlsaXR5U3RhdHVzXCI6IDAsXFxyXFxuICAgIFwiQXNzaWduZWRUaW1lc3RhbXBcIjogXCIyMDIxLTA1LTE4VDIxOjQyOjI1LjM4OTQxNjRaXCIsXFxyXFxuICAgIFwiSW5pdGlhbFN0YXRlXCI6IG51bGwsXFxyXFxuICAgIFwiQ2FwYWJpbGl0eVwiOiBudWxsLFxcclxcbiAgICBcIlNlcnZpY2VQbGFuSWRcIjogXCIyMDQ5ZTUyNS1iODU5LTQwMWItYjJhMC1lMGEzMWM0YjFmZTRcIlxcclxcbiAgfVxcclxcbl0nLFxuICAgICAgICBPbGRWYWx1ZTogJ1tdJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdJbmNsdWRlZCBVcGRhdGVkIFByb3BlcnRpZXMnLFxuICAgICAgICBOZXdWYWx1ZTogJ0Fzc2lnbmVkTGljZW5zZSwgQXNzaWduZWRQbGFuJyxcbiAgICAgICAgT2xkVmFsdWU6ICcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ1RhcmdldElkLlVzZXJUeXBlJyxcbiAgICAgICAgTmV3VmFsdWU6ICdNZW1iZXInLFxuICAgICAgICBPbGRWYWx1ZTogJycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgQWN0b3I6IFtcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgICAgIFR5cGU6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzEwMDMyMDAxNDA4MEQzQUQnLFxuICAgICAgICBUeXBlOiAzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdVc2VyXzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ1VzZXInLFxuICAgICAgICBUeXBlOiAyLFxuICAgICAgfSxcbiAgICBdLFxuICAgIEFjdG9yQ29udGV4dElkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBJbnRlclN5c3RlbXNJZDogJzFmZDA5ZDZiLTU0ZDMtNGE1OC1hY2ZlLTcxY2MyYzQyOWQ5NycsXG4gICAgSW50cmFTeXN0ZW1JZDogJzBhOGFlMjAxLWU0MDQtNGY2Zi05OWRiLWEzYzkyYTViZDAyMicsXG4gICAgU3VwcG9ydFRpY2tldElkOiAnJyxcbiAgICBUYXJnZXQ6IFtcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdVc2VyXzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzkxMGVkNWNhLTRlY2YtNDE0Yy1hMWJlLWQ1MzUxMWJmZTFhNScsXG4gICAgICAgIFR5cGU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJ1VzZXInLFxuICAgICAgICBUeXBlOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSUQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgICAgIFR5cGU6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBJRDogJzEwMDMyMDAxNDA4MEQzQUQnLFxuICAgICAgICBUeXBlOiAzLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFRhcmdldENvbnRleHRJZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjQzOjAwJyxcbiAgICBJZDogJzhjM2QwMjE1LTY2ZjAtNDFiMC0zMjA1LTA4ZDkxYmI2YjYzYycsXG4gICAgT3BlcmF0aW9uOiAnU2hhcmluZ1BvbGljeUNoYW5nZWQnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiA0LFxuICAgIFVzZXJLZXk6ICdpOjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTQwODBkM2FkQGxpdmUuY29tJyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnT25lRHJpdmUnLFxuICAgIENsaWVudElQOiAnMjAuMTkwLjE1Ny4yNycsXG4gICAgT2JqZWN0SWQ6ICdodHRwczovL3dhenVoLW15LnNoYXJlcG9pbnQuY29tL3BlcnNvbmFsL3RvbWFzX3R1cmluYV93YXp1aF9jb20nLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnZmQ5YWM3OWQtMTEwMC00OGFhLTkyYzUtNDBhNzNhMWQ0NDNmJyxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnU2l0ZScsXG4gICAgU2l0ZTogJ2Y0OWZlYWU0LTAzM2QtNDAyOC05N2QxLTNhY2Q1NTM0MWY2OScsXG4gICAgVXNlckFnZW50OlxuICAgICAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYnLFxuICAgIE1vZGlmaWVkUHJvcGVydGllczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnU2hhcmVVc2luZ0Fub255bW91c0xpbmtzJyxcbiAgICAgICAgTmV3VmFsdWU6ICdFbmFibGVkJyxcbiAgICAgICAgT2xkVmFsdWU6ICdEaXNhYmxlZCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjQzOjAwJyxcbiAgICBJZDogJzM1YTFiNTE1LTJhMGUtNGJkNi1kMGEzLTA4ZDkxYmI2YjYzOScsXG4gICAgT3BlcmF0aW9uOiAnU2l0ZUNvbGxlY3Rpb25DcmVhdGVkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNCxcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ09uZURyaXZlJyxcbiAgICBDbGllbnRJUDogJzIwLjE5MC4xNTcuMjcnLFxuICAgIE9iamVjdElkOiAnaHR0cHM6Ly93YXp1aC1teS5zaGFyZXBvaW50LmNvbS9wZXJzb25hbC90b21hc190dXJpbmFfd2F6dWhfY29tJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgQ29ycmVsYXRpb25JZDogJ2ZkOWFjNzlkLTExMDAtNDhhYS05MmM1LTQwYTczYTFkNDQzZicsXG4gICAgRXZlbnRTb3VyY2U6ICdTaGFyZVBvaW50JyxcbiAgICBJdGVtVHlwZTogJ1NpdGUnLFxuICAgIFNpdGU6ICdmNDlmZWFlNC0wMzNkLTQwMjgtOTdkMS0zYWNkNTUzNDFmNjknLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBFdmVudERhdGE6XG4gICAgICAnPFNpdGVDcmVhdGlvblNvdXJjZT5BUEk8L1NpdGVDcmVhdGlvblNvdXJjZT48VGVuYW50U2V0dGluZ3MuU2hvd0NyZWF0ZVNpdGVDb21tYW5kPlRydWU8L1RlbmFudFNldHRpbmdzLlNob3dDcmVhdGVTaXRlQ29tbWFuZD48VGVuYW50U2V0dGluZ3MuVXNlQ3VzdG9tU2l0ZUNyZWF0aW9uRm9ybT5GYWxzZTwvVGVuYW50U2V0dGluZ3MuVXNlQ3VzdG9tU2l0ZUNyZWF0aW9uRm9ybT4nLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0yMFQxNzo0MzowMCcsXG4gICAgSWQ6ICczNDRmOTEzOS1mNDM3LTQyOTAtOTU2Ni0wOGQ5MWJiNmI2MWYnLFxuICAgIE9wZXJhdGlvbjogJ1NpdGVDb2xsZWN0aW9uQWRtaW5SZW1vdmVkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogMTQsXG4gICAgVXNlcktleTogJ2k6MGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxNDA4MGQzYWRAbGl2ZS5jb20nLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdPbmVEcml2ZScsXG4gICAgQ2xpZW50SVA6ICcyMC4xOTAuMTU3LjI3JyxcbiAgICBPYmplY3RJZDogJ2h0dHBzOi8vd2F6dWgtbXkuc2hhcmVwb2ludC5jb20vcGVyc29uYWwvdG9tYXNfdHVyaW5hX3dhenVoX2NvbScsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICdmZDlhYzc5ZC0xMTAwLTQ4YWEtOTJjNS00MGE3M2ExZDQ0M2YnLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdXZWInLFxuICAgIFNpdGU6ICdmNDlmZWFlNC0wMzNkLTQwMjgtOTdkMS0zYWNkNTUzNDFmNjknLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJ2E5ZDE1YjIzLTZhYzktNDNjNS1hZjNjLWI0YTA5MTY2MzFjMScsXG4gICAgTW9kaWZpZWRQcm9wZXJ0aWVzOiBbXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdTaXRlQWRtaW4nLFxuICAgICAgICBOZXdWYWx1ZTogJycsXG4gICAgICAgIE9sZFZhbHVlOiAnJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBUYXJnZXRVc2VyT3JHcm91cFR5cGU6ICdNZW1iZXInLFxuICAgIFNpdGVVcmw6ICdodHRwczovL3dhenVoLW15LnNoYXJlcG9pbnQuY29tL3BlcnNvbmFsL3RvbWFzX3R1cmluYV93YXp1aF9jb20nLFxuICAgIFRhcmdldFVzZXJPckdyb3VwTmFtZTogJ1NIQVJFUE9JTlRcXFxcc3lzdGVtJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NDM6MDAnLFxuICAgIElkOiAnZDM2ZTRiNGQtMWU4Yi00NjM0LTZkZDgtMDhkOTFiYjZiNjE4JyxcbiAgICBPcGVyYXRpb246ICdTaXRlQ29sbGVjdGlvbkFkbWluQWRkZWQnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxNCxcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ09uZURyaXZlJyxcbiAgICBDbGllbnRJUDogJzIwLjE5MC4xNTcuMjcnLFxuICAgIE9iamVjdElkOiAnaHR0cHM6Ly93YXp1aC1teS5zaGFyZXBvaW50LmNvbS9wZXJzb25hbC90b21hc190dXJpbmFfd2F6dWhfY29tJyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgQ29ycmVsYXRpb25JZDogJ2ZkOWFjNzlkLTExMDAtNDhhYS05MmM1LTQwYTczYTFkNDQzZicsXG4gICAgRXZlbnRTb3VyY2U6ICdTaGFyZVBvaW50JyxcbiAgICBJdGVtVHlwZTogJ1dlYicsXG4gICAgU2l0ZTogJ2Y0OWZlYWU0LTAzM2QtNDAyOC05N2QxLTNhY2Q1NTM0MWY2OScsXG4gICAgVXNlckFnZW50OlxuICAgICAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYnLFxuICAgIFdlYklkOiAnYTlkMTViMjMtNmFjOS00M2M1LWFmM2MtYjRhMDkxNjYzMWMxJyxcbiAgICBNb2RpZmllZFByb3BlcnRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ1NpdGVBZG1pbicsXG4gICAgICAgIE5ld1ZhbHVlOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgICAgICBPbGRWYWx1ZTogJycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgVGFyZ2V0VXNlck9yR3JvdXBUeXBlOiAnTWVtYmVyJyxcbiAgICBTaXRlVXJsOiAnaHR0cHM6Ly93YXp1aC1teS5zaGFyZXBvaW50LmNvbS9wZXJzb25hbC90b21hc190dXJpbmFfd2F6dWhfY29tJyxcbiAgICBUYXJnZXRVc2VyT3JHcm91cE5hbWU6ICdmYWtlQGVtYWlsLm5vdCcsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjQzOjIyJyxcbiAgICBJZDogJzBkNmE2MmQzLWU0YmQtNDRlZS1jZThkLTA4ZDkxYmI2YzM5MicsXG4gICAgT3BlcmF0aW9uOiAnUGFnZVZpZXdlZCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDQsXG4gICAgVXNlcktleTogJ2k6MGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxNDA4MGQzYWRAbGl2ZS5jb20nLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTaGFyZVBvaW50JyxcbiAgICBDbGllbnRJUDogJzE5MC4xNi45LjE3NicsXG4gICAgT2JqZWN0SWQ6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL19sYXlvdXRzLzE1L0NyZWF0ZUdyb3VwLmFzcHgnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnY2NkMGM5OWYtMzA5Yi0yMDAwLWRmMTMtM2ZjY2E5YThjOGUxJyxcbiAgICBDdXN0b21VbmlxdWVJZDogdHJ1ZSxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnUGFnZScsXG4gICAgTGlzdEl0ZW1VbmlxdWVJZDogJzU5YTg0MzNkLTliYjgtY2ZlZi02NWI3LWVmMzVkZTAwYzhmNicsXG4gICAgU2l0ZTogJ2Y3ZmJiODA1LTVmNmItNDk1MC1iNjgxLTIzNjVlYjQ2MDgxZicsXG4gICAgVXNlckFnZW50OlxuICAgICAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYnLFxuICAgIFdlYklkOiAnM2I1NmRiNDktNjBlMy00MTBlLWFjYmQtZDg3NjU0NjczODhhJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NDU6NTcnLFxuICAgIElkOiAnMThiYjM1MWItNDllMS00N2RmLThmNGQtMDhkOTFiYjcxZmZkJyxcbiAgICBPcGVyYXRpb246ICdBZGRlZFRvR3JvdXAnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxNCxcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDogJ2h0dHBzOi8vd2F6dWguc2hhcmVwb2ludC5jb20vc2l0ZXMvVGVzdFNoYXJlUG9pbnQnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnZjFkMGM5OWYtMzA5NC0yMDAwLWRhODItNDU0ZjAzNGNhNjI5JyxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnV2ViJyxcbiAgICBTaXRlOiAnZGQ1OGVmMDgtZmFlYS00Y2I1LTg0N2EtMzViYjVjMDFlNzU3JyxcbiAgICBVc2VyQWdlbnQ6XG4gICAgICAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkwLjAuNDQzMC4yMTIgU2FmYXJpLzUzNy4zNicsXG4gICAgV2ViSWQ6ICcwMGMzMjU1NS1lMGQ4LTQyNWYtOWZiZC1lZjU1MzliZmVjZjcnLFxuICAgIEV2ZW50RGF0YTogJzxHcm91cD5TaXRlIE93bmVyczwvR3JvdXA+JyxcbiAgICBUYXJnZXRVc2VyT3JHcm91cFR5cGU6ICdNZW1iZXInLFxuICAgIFNpdGVVcmw6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50JyxcbiAgICBUYXJnZXRVc2VyT3JHcm91cE5hbWU6ICdTSEFSRVBPSU5UXFxcXHN5c3RlbScsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjQ2OjI2JyxcbiAgICBJZDogJzI5YmRlODRhLWQzZWMtNDM4OC00NjAwLTA4ZDkxYmI3MzBiYycsXG4gICAgT3BlcmF0aW9uOiAnRmlsZUFjY2Vzc2VkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNixcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDpcbiAgICAgICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50L1NoYXJlZCBEb2N1bWVudHMvRm9ybXMvQWxsSXRlbXMuYXNweCcsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICdmOWQwYzk5Zi1iMDRmLTIwMDAtZGE4Mi00YmIyYWJmNjE2OGYnLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdGaWxlJyxcbiAgICBMaXN0SWQ6ICdmZDJlYmFmMC05MDBiLTRkZmYtOGZjMi1kMzQ4YmU1MWU2NzcnLFxuICAgIExpc3RJdGVtVW5pcXVlSWQ6ICczYzlkODk0My04NDZlLTQxZjMtYTY0Ny03MmE1ZTRlM2RlY2YnLFxuICAgIFNpdGU6ICdkZDU4ZWYwOC1mYWVhLTRjYjUtODQ3YS0zNWJiNWMwMWU3NTcnLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJzAwYzMyNTU1LWUwZDgtNDI1Zi05ZmJkLWVmNTUzOWJmZWNmNycsXG4gICAgU291cmNlRmlsZUV4dGVuc2lvbjogJ2FzcHgnLFxuICAgIFNpdGVVcmw6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50LycsXG4gICAgU291cmNlRmlsZU5hbWU6ICdBbGxJdGVtcy5hc3B4JyxcbiAgICBTb3VyY2VSZWxhdGl2ZVVybDogJ1NoYXJlZCBEb2N1bWVudHMvRm9ybXMnLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0yMFQxNzo0NjoyNScsXG4gICAgSWQ6ICcwODdlNWI2OC1mYzNmLTRlMDEtMWVmYy0wOGQ5MWJiNzMwYjUnLFxuICAgIE9wZXJhdGlvbjogJ0xpc3RWaWV3ZWQnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAzNixcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDpcbiAgICAgICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50L2ZkMmViYWYwLTkwMGItNGRmZi04ZmMyLWQzNDhiZTUxZTY3NycsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICdmOWQwYzk5Zi1iMDRmLTIwMDAtZGE4Mi00YmIyYWJmNjE2OGYnLFxuICAgIERvTm90RGlzdHJpYnV0ZUV2ZW50OiB0cnVlLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdMaXN0JyxcbiAgICBMaXN0SWQ6ICdmZDJlYmFmMC05MDBiLTRkZmYtOGZjMi1kMzQ4YmU1MWU2NzcnLFxuICAgIFNpdGU6ICdkZDU4ZWYwOC1mYWVhLTRjYjUtODQ3YS0zNWJiNWMwMWU3NTcnLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJzAwYzMyNTU1LWUwZDgtNDI1Zi05ZmJkLWVmNTUzOWJmZWNmNycsXG4gICAgQ3VzdG9taXplZERvY2xpYjogZmFsc2UsXG4gICAgRnJvbUFwcDogdHJ1ZSxcbiAgICBJc0RvY0xpYjogdHJ1ZSxcbiAgICBJdGVtQ291bnQ6IDAsXG4gICAgTGlzdEJhc2VUZW1wbGF0ZVR5cGU6ICcxMDEnLFxuICAgIExpc3RCYXNlVHlwZTogJ0RvY3VtZW50TGlicmFyeScsXG4gICAgTGlzdENvbG9yOiAnJyxcbiAgICBMaXN0SWNvbjogJycsXG4gICAgU291cmNlOiAnVW5rbm93bicsXG4gICAgVGVtcGxhdGVUeXBlSWQ6ICcnLFxuICAgIExpc3RUaXRsZTogJ2ZkMmViYWYwLTkwMGItNGRmZi04ZmMyLWQzNDhiZTUxZTY3NycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjUyOjI5JyxcbiAgICBJZDogJzQxMjI1NDg3LTMxYzEtNGUyNC1iOGIwLTA4ZDkxYmI4MDk0YycsXG4gICAgT3BlcmF0aW9uOiAnUGFnZVByZWZldGNoZWQnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiA0LFxuICAgIFVzZXJLZXk6ICdpOjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTQwODBkM2FkQGxpdmUuY29tJyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnU2hhcmVQb2ludCcsXG4gICAgQ2xpZW50SVA6ICcxOTAuMTYuOS4xNzYnLFxuICAgIE9iamVjdElkOiAnaHR0cHM6Ly93YXp1aC5zaGFyZXBvaW50LmNvbS9zaXRlcy9UZXN0U2hhcmVQb2ludCcsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICc1MmQxYzk5Zi0zMDAwLTIwMDAtZGYxMy0zYWIxZThmYjlmOTInLFxuICAgIEN1c3RvbVVuaXF1ZUlkOiBmYWxzZSxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnUGFnZScsXG4gICAgTGlzdElkOiAnZTRjOWNlMmUtZDhjMi00NjhlLWJhZjUtZjM2MmY4YzJmMmYzJyxcbiAgICBMaXN0SXRlbVVuaXF1ZUlkOiAnMzZkYjMxNjgtYzFiMi00NGU5LTlmZmQtZTlhOGUwNGJiMmY1JyxcbiAgICBTaXRlOiAnZGQ1OGVmMDgtZmFlYS00Y2I1LTg0N2EtMzViYjVjMDFlNzU3JyxcbiAgICBVc2VyQWdlbnQ6XG4gICAgICAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkwLjAuNDQzMC4yMTIgU2FmYXJpLzUzNy4zNicsXG4gICAgV2ViSWQ6ICcwMGMzMjU1NS1lMGQ4LTQyNWYtOWZiZC1lZjU1MzliZmVjZjcnLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0yMFQxNzo1MTo0OScsXG4gICAgSWQ6ICdkOTMwY2M1Yy0yNjU4LTQ1ZGYtNjM2MS0wOGQ5MWJiN2YxNzknLFxuICAgIE9wZXJhdGlvbjogJ0ZpbGVDaGVja2VkT3V0JyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNixcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDogJ2h0dHBzOi8vd2F6dWguc2hhcmVwb2ludC5jb20vc2l0ZXMvVGVzdFNoYXJlUG9pbnQvU2l0ZVBhZ2VzL0hvbWUuYXNweCcsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICc0OGQxYzk5Zi1mMDNjLTIwMDAtZGYxMy0zODk4M2E2NjA4ZjgnLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdGaWxlJyxcbiAgICBMaXN0SWQ6ICdlNGM5Y2UyZS1kOGMyLTQ2OGUtYmFmNS1mMzYyZjhjMmYyZjMnLFxuICAgIExpc3RJdGVtVW5pcXVlSWQ6ICczNmRiMzE2OC1jMWIyLTQ0ZTktOWZmZC1lOWE4ZTA0YmIyZjUnLFxuICAgIFNpdGU6ICdkZDU4ZWYwOC1mYWVhLTRjYjUtODQ3YS0zNWJiNWMwMWU3NTcnLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJzAwYzMyNTU1LWUwZDgtNDI1Zi05ZmJkLWVmNTUzOWJmZWNmNycsXG4gICAgSGlnaFByaW9yaXR5TWVkaWFQcm9jZXNzaW5nOiBmYWxzZSxcbiAgICBTb3VyY2VGaWxlRXh0ZW5zaW9uOiAnYXNweCcsXG4gICAgU2l0ZVVybDogJ2h0dHBzOi8vd2F6dWguc2hhcmVwb2ludC5jb20vc2l0ZXMvVGVzdFNoYXJlUG9pbnQvJyxcbiAgICBTb3VyY2VGaWxlTmFtZTogJ0hvbWUuYXNweCcsXG4gICAgU291cmNlUmVsYXRpdmVVcmw6ICdTaXRlUGFnZXMnLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0yMFQxNzo1MTo1MScsXG4gICAgSWQ6ICc4OWQ3NjM2Mi1lNDkzLTRjMjAtM2I2OS0wOGQ5MWJiN2YyODgnLFxuICAgIE9wZXJhdGlvbjogJ0xpc3RVcGRhdGVkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogMzYsXG4gICAgVXNlcktleTogJ2k6MGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxNDA4MGQzYWRAbGl2ZS5jb20nLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTaGFyZVBvaW50JyxcbiAgICBDbGllbnRJUDogJzE5MC4xNi45LjE3NicsXG4gICAgT2JqZWN0SWQ6XG4gICAgICAnaHR0cHM6Ly93YXp1aC5zaGFyZXBvaW50LmNvbS9zaXRlcy9UZXN0U2hhcmVQb2ludC9lNGM5Y2UyZS1kOGMyLTQ2OGUtYmFmNS1mMzYyZjhjMmYyZjMnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnNDhkMWM5OWYtZjBhOC0yMDAwLWRhODItNDFiZTNmOTczMjY3JyxcbiAgICBEb05vdERpc3RyaWJ1dGVFdmVudDogdHJ1ZSxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnTGlzdCcsXG4gICAgTGlzdElkOiAnZTRjOWNlMmUtZDhjMi00NjhlLWJhZjUtZjM2MmY4YzJmMmYzJyxcbiAgICBTaXRlOiAnZGQ1OGVmMDgtZmFlYS00Y2I1LTg0N2EtMzViYjVjMDFlNzU3JyxcbiAgICBVc2VyQWdlbnQ6XG4gICAgICAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkwLjAuNDQzMC4yMTIgU2FmYXJpLzUzNy4zNicsXG4gICAgV2ViSWQ6ICcwMGMzMjU1NS1lMGQ4LTQyNWYtOWZiZC1lZjU1MzliZmVjZjcnLFxuICAgIEN1c3RvbWl6ZWREb2NsaWI6IGZhbHNlLFxuICAgIEZyb21BcHA6IGZhbHNlLFxuICAgIElzRG9jTGliOiB0cnVlLFxuICAgIEl0ZW1Db3VudDogMSxcbiAgICBMaXN0QmFzZVRlbXBsYXRlVHlwZTogJzExOScsXG4gICAgTGlzdEJhc2VUeXBlOiAnRG9jdW1lbnRMaWJyYXJ5JyxcbiAgICBMaXN0Q29sb3I6ICcnLFxuICAgIExpc3RJY29uOiAnJyxcbiAgICBTb3VyY2U6ICdVbmtub3duJyxcbiAgICBUZW1wbGF0ZVR5cGVJZDogJycsXG4gICAgTGlzdFRpdGxlOiAnZTRjOWNlMmUtZDhjMi00NjhlLWJhZjUtZjM2MmY4YzJmMmYzJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NTI6MzYnLFxuICAgIElkOiAnN2E5MWRkOGMtNTYwYi00ZmJlLTI1ODUtMDhkOTFiYjgwZDQ2JyxcbiAgICBPcGVyYXRpb246ICdDbGllbnRWaWV3U2lnbmFsZWQnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiA0LFxuICAgIFVzZXJLZXk6ICdpOjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTQwODBkM2FkQGxpdmUuY29tJyxcbiAgICBVc2VyVHlwZTogMCxcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnU2hhcmVQb2ludCcsXG4gICAgQ2xpZW50SVA6ICcxOTAuMTYuOS4xNzYnLFxuICAgIE9iamVjdElkOiAnaHR0cHM6Ly93YXp1aC5zaGFyZXBvaW50LmNvbS9zaXRlcy9UZXN0U2hhcmVQb2ludC9TaXRlUGFnZXMvSG9tZS5hc3B4JyxcbiAgICBVc2VySWQ6ICdmYWtlQGVtYWlsLm5vdCcsXG4gICAgQ29ycmVsYXRpb25JZDogJzUzZDFjOTlmLWIwYWEtMjAwMC1kZjEzLTNlZmVhOWU0MTA3MScsXG4gICAgQ3VzdG9tVW5pcXVlSWQ6IGZhbHNlLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdQYWdlJyxcbiAgICBMaXN0SWQ6ICdlNGM5Y2UyZS1kOGMyLTQ2OGUtYmFmNS1mMzYyZjhjMmYyZjMnLFxuICAgIExpc3RJdGVtVW5pcXVlSWQ6ICczNmRiMzE2OC1jMWIyLTQ0ZTktOWZmZC1lOWE4ZTA0YmIyZjUnLFxuICAgIFNpdGU6ICdkZDU4ZWYwOC1mYWVhLTRjYjUtODQ3YS0zNWJiNWMwMWU3NTcnLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJzAwYzMyNTU1LWUwZDgtNDI1Zi05ZmJkLWVmNTUzOWJmZWNmNycsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjUzOjM3JyxcbiAgICBJZDogJzk2OTVhZmNkLTE5ZmYtNDkxZi1hNmVlLTA4ZDkxYmI4MzFkMScsXG4gICAgT3BlcmF0aW9uOiAnRmlsZU1vZGlmaWVkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNixcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDogJ2h0dHBzOi8vd2F6dWguc2hhcmVwb2ludC5jb20vc2l0ZXMvVGVzdFNoYXJlUG9pbnQvU2l0ZVBhZ2VzL0hvbWUuYXNweCcsXG4gICAgVXNlcklkOiAnZmFrZUBlbWFpbC5ub3QnLFxuICAgIENvcnJlbGF0aW9uSWQ6ICc2MmQxYzk5Zi1kMDljLTIwMDAtZGYxMy0zN2RkZjQ4MGU3MTcnLFxuICAgIERvTm90RGlzdHJpYnV0ZUV2ZW50OiB0cnVlLFxuICAgIEV2ZW50U291cmNlOiAnU2hhcmVQb2ludCcsXG4gICAgSXRlbVR5cGU6ICdGaWxlJyxcbiAgICBMaXN0SWQ6ICdlNGM5Y2UyZS1kOGMyLTQ2OGUtYmFmNS1mMzYyZjhjMmYyZjMnLFxuICAgIExpc3RJdGVtVW5pcXVlSWQ6ICczNmRiMzE2OC1jMWIyLTQ0ZTktOWZmZC1lOWE4ZTA0YmIyZjUnLFxuICAgIFNpdGU6ICdkZDU4ZWYwOC1mYWVhLTRjYjUtODQ3YS0zNWJiNWMwMWU3NTcnLFxuICAgIFVzZXJBZ2VudDpcbiAgICAgICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2JyxcbiAgICBXZWJJZDogJzAwYzMyNTU1LWUwZDgtNDI1Zi05ZmJkLWVmNTUzOWJmZWNmNycsXG4gICAgU291cmNlRmlsZUV4dGVuc2lvbjogJ2FzcHgnLFxuICAgIFNpdGVVcmw6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50LycsXG4gICAgU291cmNlRmlsZU5hbWU6ICdIb21lLmFzcHgnLFxuICAgIFNvdXJjZVJlbGF0aXZlVXJsOiAnU2l0ZVBhZ2VzJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NTc6MDMnLFxuICAgIElkOiAnNTUxZmQ3ZDUtYmFjMS00YmI0LTExZDItMDhkOTFiYjhhYzllJyxcbiAgICBPcGVyYXRpb246ICdGaWxlQWNjZXNzZWRFeHRlbmRlZCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDYsXG4gICAgVXNlcktleTogJ2k6MGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxNDA4MGQzYWRAbGl2ZS5jb20nLFxuICAgIFVzZXJUeXBlOiAwLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTaGFyZVBvaW50JyxcbiAgICBDbGllbnRJUDogJzE5MC4xNi45LjE3NicsXG4gICAgT2JqZWN0SWQ6XG4gICAgICAnaHR0cHM6Ly93YXp1aC5zaGFyZXBvaW50LmNvbS9zaXRlcy9UZXN0U2hhcmVQb2ludC9TaGFyZWQgRG9jdW1lbnRzL0Zvcm1zL0FsbEl0ZW1zLmFzcHgnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnOTRkMWM5OWYtMjBlYi0yMDAwLWRmMTMtMzU3NDZkMDI5MTFlJyxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnRmlsZScsXG4gICAgTGlzdElkOiAnZmQyZWJhZjAtOTAwYi00ZGZmLThmYzItZDM0OGJlNTFlNjc3JyxcbiAgICBMaXN0SXRlbVVuaXF1ZUlkOiAnM2M5ZDg5NDMtODQ2ZS00MWYzLWE2NDctNzJhNWU0ZTNkZWNmJyxcbiAgICBTaXRlOiAnZGQ1OGVmMDgtZmFlYS00Y2I1LTg0N2EtMzViYjVjMDFlNzU3JyxcbiAgICBVc2VyQWdlbnQ6XG4gICAgICAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkwLjAuNDQzMC4yMTIgU2FmYXJpLzUzNy4zNicsXG4gICAgV2ViSWQ6ICcwMGMzMjU1NS1lMGQ4LTQyNWYtOWZiZC1lZjU1MzliZmVjZjcnLFxuICAgIFNvdXJjZUZpbGVFeHRlbnNpb246ICdhc3B4JyxcbiAgICBTaXRlVXJsOiAnaHR0cHM6Ly93YXp1aC5zaGFyZXBvaW50LmNvbS9zaXRlcy9UZXN0U2hhcmVQb2ludC8nLFxuICAgIFNvdXJjZUZpbGVOYW1lOiAnQWxsSXRlbXMuYXNweCcsXG4gICAgU291cmNlUmVsYXRpdmVVcmw6ICdTaGFyZWQgRG9jdW1lbnRzL0Zvcm1zJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NTk6NTUnLFxuICAgIElkOiAnZWIxZjA5MTEtOWJlZC00ZjE1LTEwZTUtMDhkOTFiYjkxMzcyJyxcbiAgICBPcGVyYXRpb246ICdTaXRlRGVsZXRlZCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDYsXG4gICAgVXNlcktleTogJ1MtMS0wLTAnLFxuICAgIFVzZXJUeXBlOiA0LFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdTaGFyZVBvaW50JyxcbiAgICBDbGllbnRJUDogJycsXG4gICAgT2JqZWN0SWQ6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50JyxcbiAgICBVc2VySWQ6ICdBQUQgdG8gU2hhcmVQb2ludCBTeW5jJyxcbiAgICBDb3JyZWxhdGlvbklkOiAnYmVkMWM5OWYtMjBlZS0yMDAwLWRmMTMtMzA2Y2I2ODAzYzkyJyxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnV2ViJyxcbiAgICBMaXN0SXRlbVVuaXF1ZUlkOiAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJyxcbiAgICBTaXRlOiAnZGQ1OGVmMDgtZmFlYS00Y2I1LTg0N2EtMzViYjVjMDFlNzU3JyxcbiAgICBVc2VyQWdlbnQ6ICcnLFxuICAgIFdlYklkOiAnMDBjMzI1NTUtZTBkOC00MjVmLTlmYmQtZWY1NTM5YmZlY2Y3JyxcbiAgICBEZXN0aW5hdGlvbkZpbGVFeHRlbnNpb246ICcnLFxuICAgIFNvdXJjZUZpbGVFeHRlbnNpb246ICcnLFxuICAgIERlc3RpbmF0aW9uRmlsZU5hbWU6ICdUZXN0U2hhcmVQb2ludCcsXG4gICAgRGVzdGluYXRpb25SZWxhdGl2ZVVybDogJy4uLy4uL2h0dHBzOi8vd2F6dWguc2hhcmVwb2ludC5jb20vc2l0ZXMnLFxuICAgIFNpdGVVcmw6ICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50LycsXG4gICAgU291cmNlRmlsZU5hbWU6ICdUZXN0U2hhcmVQb2ludCcsXG4gICAgU291cmNlUmVsYXRpdmVVcmw6ICcuLicsXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjU5OjExJyxcbiAgICBJZDogJzBkMjBhM2UxLWU5Y2ItNDM2Yy03OTlmLTA4ZDkxYmI4ZjkyZicsXG4gICAgT3BlcmF0aW9uOiAnUGFnZVZpZXdlZEV4dGVuZGVkJyxcbiAgICBPcmdhbml6YXRpb25JZDogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgUmVjb3JkVHlwZTogNCxcbiAgICBVc2VyS2V5OiAnaTowaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE0MDgwZDNhZEBsaXZlLmNvbScsXG4gICAgVXNlclR5cGU6IDAsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ1NoYXJlUG9pbnQnLFxuICAgIENsaWVudElQOiAnMTkwLjE2LjkuMTc2JyxcbiAgICBPYmplY3RJZDpcbiAgICAgICdodHRwczovL3dhenVoLnNoYXJlcG9pbnQuY29tL3NpdGVzL1Rlc3RTaGFyZVBvaW50L19sYXlvdXRzLzE1L29ubGluZS9oYW5kbGVycy9TcG9TdWl0ZUxpbmtzLmFzaHgnLFxuICAgIFVzZXJJZDogJ2Zha2VAZW1haWwubm90JyxcbiAgICBDb3JyZWxhdGlvbklkOiAnYjRkMWM5OWYtMDA0My0yMDAwLWRhODItNDFiNjNlMWQ5MWY0JyxcbiAgICBFdmVudFNvdXJjZTogJ1NoYXJlUG9pbnQnLFxuICAgIEl0ZW1UeXBlOiAnUGFnZScsXG4gICAgU2l0ZTogJ2RkNThlZjA4LWZhZWEtNGNiNS04NDdhLTM1YmI1YzAxZTc1NycsXG4gICAgVXNlckFnZW50OlxuICAgICAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYnLFxuICAgIFdlYklkOiAnMDBjMzI1NTUtZTBkOC00MjVmLTlmYmQtZWY1NTM5YmZlY2Y3JyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NDQ6MjcnLFxuICAgIElkOiAnMzBlZjJmNzAtYTEyZC00YjMxLTFlNzAtMDhkOTFiYjZlYTJlJyxcbiAgICBPcGVyYXRpb246ICdTZXQtTWFpbGJveCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDEsXG4gICAgUmVzdWx0U3RhdHVzOiAnVHJ1ZScsXG4gICAgVXNlcktleTogJ1Nwb29sc1Byb3Zpc2lvbmluZy1BcHBsaWNhdGlvbkFjY291bnRAZXVycHJkMDQucHJvZC5vdXRsb29rLmNvbScsXG4gICAgVXNlclR5cGU6IDMsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ0V4Y2hhbmdlJyxcbiAgICBDbGllbnRJUDogJzUyLjIzMy4yMzcuMTQxOjQwNjM4JyxcbiAgICBPYmplY3RJZDpcbiAgICAgICdFVVJQUjA0QTAxMC5wcm9kLm91dGxvb2suY29tL01pY3Jvc29mdCBFeGNoYW5nZSBIb3N0ZWQgT3JnYW5pemF0aW9ucy93YXp1aC50ZXN0eXRlc3QuY29tL3RvbWFzLnR1cmluYScsXG4gICAgVXNlcklkOiAnU3Bvb2xzUHJvdmlzaW9uaW5nLUFwcGxpY2F0aW9uQWNjb3VudEBldXJwcmQwNC5wcm9kLm91dGxvb2suY29tJyxcbiAgICBBcHBJZDogJzYxMTA5NzM4LTdkMmItNGEwYi05ZmUzLTY2MGIxZmY4MzUwNScsXG4gICAgQ2xpZW50QXBwSWQ6ICcnLFxuICAgIEV4dGVybmFsQWNjZXNzOiB0cnVlLFxuICAgIE9yZ2FuaXphdGlvbk5hbWU6ICd3YXp1aC50ZXN0eXRlc3QuY29tJyxcbiAgICBPcmlnaW5hdGluZ1NlcnZlcjogJ0FNOVBSMDRNQjg5ODYgKDE1LjIwLjQxNTAuMDIzKScsXG4gICAgUGFyYW1ldGVyczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnSWRlbnRpdHknLFxuICAgICAgICBWYWx1ZTpcbiAgICAgICAgICAnTUdabFlUUmxNRE10T0RFME5pMDBOVE5pTFdJNE9Ea3ROVFJpTkdKa01URTFOalZpWEdKa1ltSTRNak0yTFRCbU5EZ3ROR1pqTmkwNVpqYzNMVGt4TkdOa1kyTXdNbUl6WXcyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdSZXNvdXJjZUVtYWlsQWRkcmVzc2VzJyxcbiAgICAgICAgVmFsdWU6ICdUcnVlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdCeXBhc3NMaXZlSWQnLFxuICAgICAgICBWYWx1ZTogJ1RydWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ0ZvcmNlJyxcbiAgICAgICAgVmFsdWU6ICdUcnVlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdEb21haW5Db250cm9sbGVyJyxcbiAgICAgICAgVmFsdWU6ICdIRTFQUjA0QTAxMERDMDMuRVVSUFIwNEEwMTAucHJvZC5vdXRsb29rLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnRW1haWxBZGRyZXNzZXMnLFxuICAgICAgICBWYWx1ZTpcbiAgICAgICAgICAnU0lQOmZha2VAZW1haWwubm90O1NNVFA6ZmFrZUBlbWFpbC5ub3Q7U1BPOlNQT19mNDlmZWFlNC0wMzNkLTQwMjgtOTdkMS0zYWNkNTUzNDFmNjlAU1BPXzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgU2Vzc2lvbklkOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NDU6NTknLFxuICAgIElkOiAnNDhjMDA5MzAtYjI1ZC00Y2NjLWNjYjMtMDhkOTFiYjcyMGY2JyxcbiAgICBPcGVyYXRpb246ICdNb2RpZnlGb2xkZXJQZXJtaXNzaW9ucycsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDIsXG4gICAgUmVzdWx0U3RhdHVzOiAnU3VjY2VlZGVkJyxcbiAgICBVc2VyS2V5OiAnUy0xLTUtMTgnLFxuICAgIFVzZXJUeXBlOiAyLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdFeGNoYW5nZScsXG4gICAgQ2xpZW50SVA6ICc6OjEnLFxuICAgIFVzZXJJZDogJ1MtMS01LTE4JyxcbiAgICBDbGllbnRJUEFkZHJlc3M6ICc6OjEnLFxuICAgIENsaWVudEluZm9TdHJpbmc6ICdDbGllbnQ9V2ViU2VydmljZXM7QWN0aW9uPUNvbmZpZ3VyZUdyb3VwTWFpbGJveCcsXG4gICAgRXh0ZXJuYWxBY2Nlc3M6IHRydWUsXG4gICAgSW50ZXJuYWxMb2dvblR5cGU6IDEsXG4gICAgTG9nb25UeXBlOiAxLFxuICAgIExvZ29uVXNlclNpZDogJ1MtMS01LTE4JyxcbiAgICBNYWlsYm94R3VpZDogJ2ZjMTA4YjQ1LTlkNTEtNGI4Ny1hNDczLTlkNWEwZTQwNDk2NicsXG4gICAgTWFpbGJveE93bmVyTWFzdGVyQWNjb3VudFNpZDogJ1MtMS01LTEwJyxcbiAgICBNYWlsYm94T3duZXJTaWQ6ICdTLTEtNS0yMS0yOTg2NTY1ODA1LTE4MzUyNjU1NTAtMTM4MzU3NDA3My0yMDc0MzA2NycsXG4gICAgTWFpbGJveE93bmVyVVBOOiAnVGVzdFNoYXJlUG9pbnRAd2F6dWguY29tJyxcbiAgICBPcmdhbml6YXRpb25OYW1lOiAnd2F6dWgudGVzdHl0ZXN0LmNvbScsXG4gICAgT3JpZ2luYXRpbmdTZXJ2ZXI6ICdBUzhQUjA0TUI4NDY1ICgxNS4yMC40MTUwLjAyMylcXHJcXG4nLFxuICAgIEl0ZW06IHtcbiAgICAgIElkOiAnTGdBQUFBQTZ0VmhiYTNKV1NhR21reTcvN092ZkFRRFJ3S2M0N2Mxc1Q0V2FhYjZPNHpiUEFBQUFBQUVOQUFBQycsXG4gICAgICBQYXJlbnRGb2xkZXI6IHtcbiAgICAgICAgSWQ6ICdMZ0FBQUFBNnRWaGJhM0pXU2FHbWt5Ny83T3ZmQVFEUndLYzQ3YzFzVDRXYWFiNk80emJQQUFBQUFBRU5BQUFDJyxcbiAgICAgICAgTWVtYmVyUmlnaHRzOlxuICAgICAgICAgICdSZWFkQW55LCBDcmVhdGUsIEVkaXRPd25lZCwgRGVsZXRlT3duZWQsIEVkaXRBbnksIERlbGV0ZUFueSwgVmlzaWJsZSwgRnJlZUJ1c3lTaW1wbGUsIEZyZWVCdXN5RGV0YWlsZWQnLFxuICAgICAgICBNZW1iZXJTaWQ6ICdTLTEtOC00MjI4OTQyNjYxLTEyNjcxNzg4MzMtMTUyMDI2ODE5Ni0xNzE2MDc2NTU4LTEnLFxuICAgICAgICBNZW1iZXJVcG46ICdNZW1iZXJAbG9jYWwnLFxuICAgICAgICBOYW1lOiAnQ2FsZW5kYXInLFxuICAgICAgICBQYXRoOiAnXFxcXENhbGVuZGFyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTc6NDU6NTgnLFxuICAgIElkOiAnYmIwM2I0OGUtNjA5ZC00NzdiLWNiODAtMDhkOTFiYjcyMDc3JyxcbiAgICBPcGVyYXRpb246ICdDcmVhdGUnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAyLFxuICAgIFJlc3VsdFN0YXR1czogJ1N1Y2NlZWRlZCcsXG4gICAgVXNlcktleTogJ1MtMS01LTE4JyxcbiAgICBVc2VyVHlwZTogMixcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnRXhjaGFuZ2UnLFxuICAgIENsaWVudElQOiAnOjoxJyxcbiAgICBVc2VySWQ6ICdTLTEtNS0xOCcsXG4gICAgQ2xpZW50SVBBZGRyZXNzOiAnOjoxJyxcbiAgICBDbGllbnRJbmZvU3RyaW5nOiAnQ2xpZW50PVdlYlNlcnZpY2VzO0FjdGlvbj1Db25maWd1cmVHcm91cE1haWxib3gnLFxuICAgIEV4dGVybmFsQWNjZXNzOiB0cnVlLFxuICAgIEludGVybmFsTG9nb25UeXBlOiAxLFxuICAgIExvZ29uVHlwZTogMSxcbiAgICBMb2dvblVzZXJTaWQ6ICdTLTEtNS0xOCcsXG4gICAgTWFpbGJveEd1aWQ6ICdmYzEwOGI0NS05ZDUxLTRiODctYTQ3My05ZDVhMGU0MDQ5NjYnLFxuICAgIE1haWxib3hPd25lck1hc3RlckFjY291bnRTaWQ6ICdTLTEtNS0xMCcsXG4gICAgTWFpbGJveE93bmVyU2lkOiAnUy0xLTUtMjEtMjk4NjU2NTgwNS0xODM1MjY1NTUwLTEzODM1NzQwNzMtMjA3NDMwNjcnLFxuICAgIE1haWxib3hPd25lclVQTjogJ1Rlc3RTaGFyZVBvaW50QHdhenVoLmNvbScsXG4gICAgT3JnYW5pemF0aW9uTmFtZTogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE9yaWdpbmF0aW5nU2VydmVyOiAnQVM4UFIwNE1CODQ2NSAoMTUuMjAuNDE1MC4wMjMpXFxyXFxuJyxcbiAgICBJdGVtOiB7XG4gICAgICBBdHRhY2htZW50czpcbiAgICAgICAgJ3dhcm1pbmdfZW1haWxfMDNfMjAxN19jYWxlbmRhci5wbmcgKDY0NmIpOyB3YXJtaW5nX2VtYWlsXzAzXzIwMTdfY29udmVyc2F0aW9uLnBuZyAoNjYxYik7IHdhcm1pbmdfZW1haWxfMDNfMjAxN19saW5rcy5wbmcgKDE0NTBiKTsgZ29vZ2xlX3BsYXlfc3RvcmVfYmFkZ2UucG5nICg0ODcxYik7IGFwcGxlX3N0b3JlX2JhZGdlLnBuZyAoNDQ5M2IpOyB3aW5kb3dzX3N0b3JlX2JhZGdlLnBuZyAoMzcyOGIpOyB3YXJtaW5nX2VtYWlsXzAzXzIwMTdfZmlsZXMucG5nICg4NTZiKTsgd2FybWluZ19lbWFpbF8wM18yMDE3X3NoYXJlUG9pbnQucG5nICgxNDc5YiknLFxuICAgICAgSWQ6XG4gICAgICAgICdSZ0FBQUFBNnRWaGJhM0pXU2FHbWt5Ny83T3ZmQndEUndLYzQ3YzFzVDRXYWFiNk80emJQQUFBQUFBRU1BQURSd0tjNDdjMXNUNFdhYWI2TzR6YlBBQUFBQUFrOUFBQUonLFxuICAgICAgSW50ZXJuZXRNZXNzYWdlSWQ6XG4gICAgICAgICc8QVM4UFIwNE1CODQ2NTQyMTA2RDM5MzlGMkQxOTUyRDA1RDMyQTlAQVM4UFIwNE1CODQ2NS5ldXJwcmQwNC5wcm9kLm91dGxvb2suY29tPicsXG4gICAgICBJc1JlY29yZDogZmFsc2UsXG4gICAgICBQYXJlbnRGb2xkZXI6IHtcbiAgICAgICAgSWQ6ICdMZ0FBQUFBNnRWaGJhM0pXU2FHbWt5Ny83T3ZmQVFEUndLYzQ3YzFzVDRXYWFiNk80emJQQUFBQUFBRU1BQUFCJyxcbiAgICAgICAgUGF0aDogJ1xcXFxJbmJveCcsXG4gICAgICB9LFxuICAgICAgU3ViamVjdDogJ1RoZSBuZXcgVGVzdFNoYXJlUG9pbnQgZ3JvdXAgaXMgcmVhZHknLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBDcmVhdGlvblRpbWU6ICcyMDIxLTA1LTIwVDE3OjU5OjU5JyxcbiAgICBJZDogJ2U4NTVmYjEyLTJkNDgtNDVmMy1hYzhkLTA4ZDkxYmI5MTU2OScsXG4gICAgT3BlcmF0aW9uOiAnUmVtb3ZlLVVuaWZpZWRHcm91cCcsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDEsXG4gICAgUmVzdWx0U3RhdHVzOiAnVHJ1ZScsXG4gICAgVXNlcktleTogJ05UIEFVVEhPUklUWVxcXFxTWVNURU0gKHczd3ApJyxcbiAgICBVc2VyVHlwZTogMixcbiAgICBWZXJzaW9uOiAxLFxuICAgIFdvcmtsb2FkOiAnRXhjaGFuZ2UnLFxuICAgIENsaWVudElQOiAnWzJhMDE6MTExOmY0MDI6YWMwMDo6ZjEzNF06NTE1MTQnLFxuICAgIE9iamVjdElkOiAnVGVzdFNoYXJlUG9pbnRfYjQ3ZTA2YmYtODk1ZC00OGM0LThhZTQtYTBmZGM2MGVjMjQ5JyxcbiAgICBVc2VySWQ6ICdOVCBBVVRIT1JJVFlcXFxcU1lTVEVNICh3M3dwKScsXG4gICAgQXBwSWQ6ICcwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAnLFxuICAgIENsaWVudEFwcElkOiAnMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwJyxcbiAgICBFeHRlcm5hbEFjY2VzczogZmFsc2UsXG4gICAgT3JnYW5pemF0aW9uTmFtZTogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE9yaWdpbmF0aW5nU2VydmVyOiAnVkkxUFIwNE1CNjEyNSAoMTUuMjAuNDEyOS4wMzMpJyxcbiAgICBQYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIE5hbWU6ICdJZGVudGl0eScsXG4gICAgICAgIFZhbHVlOiAnYjQ3ZTA2YmYtODk1ZC00OGM0LThhZTQtYTBmZGM2MGVjMjQ5JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBTZXNzaW9uSWQ6ICcnLFxuICB9LFxuICB7XG4gICAgQ3JlYXRpb25UaW1lOiAnMjAyMS0wNS0yMFQxODowNDozNycsXG4gICAgSWQ6ICdmMTExYzgyYy03OTYxLTQ3M2QtMTEyYS0wOGQ5MWJiOWJiOTEnLFxuICAgIE9wZXJhdGlvbjogJ1NldC1VbmlmaWVkR3JvdXAnLFxuICAgIE9yZ2FuaXphdGlvbklkOiAnMGZlYTRlMDMtODE0Ni00NTNiLWI4ODktNTRiNGJkMTE1NjViJyxcbiAgICBSZWNvcmRUeXBlOiAxLFxuICAgIFJlc3VsdFN0YXR1czogJ1RydWUnLFxuICAgIFVzZXJLZXk6ICdTcG9vbHNQcm92aXNpb25pbmctQXBwbGljYXRpb25BY2NvdW50QGV1cnByZDA0LnByb2Qub3V0bG9vay5jb20nLFxuICAgIFVzZXJUeXBlOiAzLFxuICAgIFZlcnNpb246IDEsXG4gICAgV29ya2xvYWQ6ICdFeGNoYW5nZScsXG4gICAgQ2xpZW50SVA6ICc1MS4xNDQuMzMuMTQ6NTg4NDknLFxuICAgIE9iamVjdElkOlxuICAgICAgJ0VVUlBSMDRBMDEwLnByb2Qub3V0bG9vay5jb20vTWljcm9zb2Z0IEV4Y2hhbmdlIEhvc3RlZCBPcmdhbml6YXRpb25zL3dhenVoLnRlc3R5dGVzdC5jb20vU29mdCBEZWxldGVkIE9iamVjdHMvVGVzdFNoYXJlUG9pbnRfYjQ3ZTA2YmYtODk1ZC00OGM0LThhZTQtYTBmZGM2MGVjMjQ5JyxcbiAgICBVc2VySWQ6ICdTcG9vbHNQcm92aXNpb25pbmctQXBwbGljYXRpb25BY2NvdW50QGV1cnByZDA0LnByb2Qub3V0bG9vay5jb20nLFxuICAgIEFwcElkOiAnNjExMDk3MzgtN2QyYi00YTBiLTlmZTMtNjYwYjFmZjgzNTA1JyxcbiAgICBDbGllbnRBcHBJZDogJycsXG4gICAgRXh0ZXJuYWxBY2Nlc3M6IHRydWUsXG4gICAgT3JnYW5pemF0aW9uTmFtZTogJ3dhenVoLnRlc3R5dGVzdC5jb20nLFxuICAgIE9yaWdpbmF0aW5nU2VydmVyOiAnVkkxUFIwNDAyTUIzMzI2ICgxNS4yMC40MTI5LjAzMyknLFxuICAgIFBhcmFtZXRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ0lkZW50aXR5JyxcbiAgICAgICAgVmFsdWU6XG4gICAgICAgICAgJ01HWmxZVFJsTURNdE9ERTBOaTAwTlROaUxXSTRPRGt0TlRSaU5HSmtNVEUxTmpWaVhERmxZakZqTmpaaExUUmhZV1F0TkdZMk1pMDROakF6TFRkak1EUmtaVEl4WVdFM01nMicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnRW1haWxBZGRyZXNzZXMnLFxuICAgICAgICBWYWx1ZTogJ3NtdHA6VGVzdFNoYXJlUG9pbnRAd2F6dWgudGVzdHl0ZXN0LmNvbTtTTVRQOlRlc3RTaGFyZVBvaW50QHdhenVoLmNvbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnSW5jbHVkZVNvZnREZWxldGVkT2JqZWN0cycsXG4gICAgICAgIFZhbHVlOiAnVHJ1ZScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgU2Vzc2lvbklkOiAnJyxcbiAgfSxcbiAge1xuICAgIENyZWF0aW9uVGltZTogJzIwMjEtMDUtMjBUMTg6NTk6NDknLFxuICAgIElkOiAnMzIyMjkxMTQtZTM1Ny00YjU2LTlkMDgtMDhkOTFiYzE3MTdjJyxcbiAgICBPcGVyYXRpb246ICdTZXQtVXNlcicsXG4gICAgT3JnYW5pemF0aW9uSWQ6ICcwZmVhNGUwMy04MTQ2LTQ1M2ItYjg4OS01NGI0YmQxMTU2NWInLFxuICAgIFJlY29yZFR5cGU6IDEsXG4gICAgUmVzdWx0U3RhdHVzOiAnVHJ1ZScsXG4gICAgVXNlcktleTogJ05UIEFVVEhPUklUWVxcXFxTWVNURU0gKE1pY3Jvc29mdC5FeGNoYW5nZS5NYW5hZ2VtZW50LkZvcndhcmRTeW5jKScsXG4gICAgVXNlclR5cGU6IDMsXG4gICAgVmVyc2lvbjogMSxcbiAgICBXb3JrbG9hZDogJ0V4Y2hhbmdlJyxcbiAgICBPYmplY3RJZDpcbiAgICAgICdFVVJQUjA0QTAxMC5wcm9kLm91dGxvb2suY29tL01pY3Jvc29mdCBFeGNoYW5nZSBIb3N0ZWQgT3JnYW5pemF0aW9ucy93YXp1aC50ZXN0eXRlc3QuY29tL3RvbWFzLnR1cmluYScsXG4gICAgVXNlcklkOiAnTlQgQVVUSE9SSVRZXFxcXFNZU1RFTSAoTWljcm9zb2Z0LkV4Y2hhbmdlLk1hbmFnZW1lbnQuRm9yd2FyZFN5bmMpJyxcbiAgICBBcHBJZDogJycsXG4gICAgQ2xpZW50QXBwSWQ6ICcnLFxuICAgIEV4dGVybmFsQWNjZXNzOiB0cnVlLFxuICAgIE9yZ2FuaXphdGlvbk5hbWU6ICd3YXp1aC50ZXN0eXRlc3QuY29tJyxcbiAgICBPcmlnaW5hdGluZ1NlcnZlcjogJ0RCOFBSMDRNQjcwNjUgKDE1LjIwLjQxNTAuMDIzKScsXG4gICAgUGFyYW1ldGVyczogW1xuICAgICAge1xuICAgICAgICBOYW1lOiAnSWRlbnRpdHknLFxuICAgICAgICBWYWx1ZTogJzBmZWE0ZTAzLTgxNDYtNDUzYi1iODg5LTU0YjRiZDExNTY1YlxcXFxiZGJiODIzNi0wZjQ4LTRmYzYtOWY3Ny05MTRjZGNjMDJiM2MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ1N5bmNNYWlsYm94TG9jYXRpb25HdWlkcycsXG4gICAgICAgIFZhbHVlOiAnVHJ1ZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBOYW1lOiAnRXJyb3JBY3Rpb24nLFxuICAgICAgICBWYWx1ZTogJ1N0b3AnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgTmFtZTogJ1dhcm5pbmdBY3Rpb24nLFxuICAgICAgICBWYWx1ZTogJ1NpbGVudGx5Q29udGludWUnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbiJdfQ==