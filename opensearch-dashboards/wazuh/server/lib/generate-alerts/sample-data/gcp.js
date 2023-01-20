"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayRules = exports.arrayType = exports.arraySeverity = exports.arraySourceType = exports.arrayProject = exports.arrayLocation = exports.arraySourceIP = exports.arrayResponseCode = exports.arrayQueryType = exports.arrayQueryName = exports.arrayProtocol = exports.arrayAuthAnswer = void 0;

/*
 * Wazuh app - GCP sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// GCP
const arrayAuthAnswer = ["true", "false"];
exports.arrayAuthAnswer = arrayAuthAnswer;
const arrayProtocol = ['UDP', 'TCP'];
exports.arrayProtocol = arrayProtocol;
const arrayQueryName = ['185.5.205.124.in-addr.arpa.', '98.72.244.104.in-addr.arpa.', 'mirrors.advancedhosters.com.', '41.212.95.203.in-addr.arpa', '41.212.95.203.in-addr.arpa.'];
exports.arrayQueryName = arrayQueryName;
const arrayQueryType = ['PTR', 'PTR', 'PTR', 'PTR', 'PTR', 'A'];
exports.arrayQueryType = arrayQueryType;
const arrayResponseCode = ['NXDOMAIN', 'NOERROR', 'WARNING', 'CRITICAL', 'ALERT', 'EMERGENCY', 'SERVFAIL', 'INFO', 'SUCCESS', 'BADTRUNC', 'BADNAME', 'NOTAUTH'];
exports.arrayResponseCode = arrayResponseCode;
const arraySourceIP = ['163.172.0.0', '1.33.213.199', '83.32.0.0', '154.84.246.205', '75.142.129.202', '171.197.217.149', '77.38.119.17'];
exports.arraySourceIP = arraySourceIP;
const arrayLocation = ['europe-west1', 'us-central1', 'asia-east1', 'australia-southeast1', 'us-west1', 'us-west3', 'us-west2', 'us-west4', 'us-east1', 'us-east2', 'us-east3', 'southamerica-east1'];
exports.arrayLocation = arrayLocation;
const arrayProject = ['wazuh-dev', 'wazuh-prod', 'wazuh-test'];
exports.arrayProject = arrayProject;
const arraySourceType = ['gce-vm', 'internet'];
exports.arraySourceType = arraySourceType;
const arraySeverity = ['ERROR', 'INFO', 'NOTICE', 'CRITICAL', 'EMERGENCY', 'ALERT'];
exports.arraySeverity = arraySeverity;
const arrayType = ['dns_query', 'app_script_function', 'generic_task'];
exports.arrayType = arrayType;
const arrayRules = [{
  level: 12,
  description: "Unable to process query due to a problem with the name server",
  id: "65007",
  firedtimes: 2,
  mail: true,
  groups: ["gcp"]
}, {
  level: 5,
  description: "GCP notice event",
  id: "65001",
  firedtimes: 1,
  mail: true,
  groups: ["gcp"]
}, {
  level: 3,
  description: "DNS external query",
  id: "65032",
  firedtimes: 1,
  mail: true,
  groups: ["gcp"]
}, {
  level: 5,
  description: "GCP warning event from VM 531339229531.instance-1 with source IP 83.32.0.0 from europe-west1",
  id: "65034",
  firedtimes: 1,
  mail: true,
  groups: ["gcp"]
}, {
  level: 9,
  description: "GCP critical event from VM 531339229531.instance-1 with source IP 83.32.0.0 from europe-west1",
  id: "65036",
  firedtimes: 4,
  mail: true,
  groups: ["gcp"]
}, {
  level: 11,
  description: "GCP alert event from VM 531339229531.instance-1 with source IP 83.32.0.0 from europe-west1",
  id: "65037",
  firedtimes: 1,
  mail: true,
  groups: ["gcp"]
}, {
  level: 12,
  description: "GCP emergency event from VM 531339229531.instance-1 with source IP 83.32.0.0 from europe-west1",
  id: "65038",
  firedtimes: 2,
  mail: true,
  groups: ["gcp"]
}, {
  level: 5,
  description: "GCP notice event with source IP 83.32.0.0 from europe-west1 with response code NXDOMAIN",
  id: "65010",
  firedtimes: 2,
  mail: true,
  groups: ["gcp"]
}];
exports.arrayRules = arrayRules;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdjcC5qcyJdLCJuYW1lcyI6WyJhcnJheUF1dGhBbnN3ZXIiLCJhcnJheVByb3RvY29sIiwiYXJyYXlRdWVyeU5hbWUiLCJhcnJheVF1ZXJ5VHlwZSIsImFycmF5UmVzcG9uc2VDb2RlIiwiYXJyYXlTb3VyY2VJUCIsImFycmF5TG9jYXRpb24iLCJhcnJheVByb2plY3QiLCJhcnJheVNvdXJjZVR5cGUiLCJhcnJheVNldmVyaXR5IiwiYXJyYXlUeXBlIiwiYXJyYXlSdWxlcyIsImxldmVsIiwiZGVzY3JpcHRpb24iLCJpZCIsImZpcmVkdGltZXMiLCJtYWlsIiwiZ3JvdXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUE7QUFDTyxNQUFNQSxlQUFlLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUF4Qjs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUF0Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQyw2QkFBRCxFQUFnQyw2QkFBaEMsRUFBK0QsOEJBQS9ELEVBQStGLDRCQUEvRixFQUE2SCw2QkFBN0gsQ0FBdkI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEdBQXBDLENBQXZCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsU0FBeEIsRUFBbUMsVUFBbkMsRUFBK0MsT0FBL0MsRUFBd0QsV0FBeEQsRUFBcUUsVUFBckUsRUFBaUYsTUFBakYsRUFBeUYsU0FBekYsRUFBb0csVUFBcEcsRUFBZ0gsU0FBaEgsRUFBMkgsU0FBM0gsQ0FBMUI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsYUFBRCxFQUFnQixjQUFoQixFQUFnQyxXQUFoQyxFQUE2QyxnQkFBN0MsRUFBK0QsZ0JBQS9ELEVBQWlGLGlCQUFqRixFQUFvRyxjQUFwRyxDQUF0Qjs7QUFD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O0FBR0VDLEVBQUFBLFdBQVcsRUFBRSx5RkFIZjtBQUlFQyxFQUFBQSxFQUFFLEVBQUUsT0FKTjtBQUtFQyxFQUFBQSxVQUFVLEVBQUUsQ0FMZDtBQU1FQyxFQUFBQSxJQUFJLEVBQUUsSUFOUjtBQU9FQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQyxLQUFEO0FBUFYsQ0F2RHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIEdDUCBzYW1wbGUgZGF0YVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuLy8gR0NQXG5leHBvcnQgY29uc3QgYXJyYXlBdXRoQW5zd2VyID0gW1widHJ1ZVwiLCBcImZhbHNlXCJdO1xuZXhwb3J0IGNvbnN0IGFycmF5UHJvdG9jb2wgPSBbJ1VEUCcsICdUQ1AnXTtcbmV4cG9ydCBjb25zdCBhcnJheVF1ZXJ5TmFtZSA9IFsnMTg1LjUuMjA1LjEyNC5pbi1hZGRyLmFycGEuJywgJzk4LjcyLjI0NC4xMDQuaW4tYWRkci5hcnBhLicsICdtaXJyb3JzLmFkdmFuY2VkaG9zdGVycy5jb20uJywgJzQxLjIxMi45NS4yMDMuaW4tYWRkci5hcnBhJywgJzQxLjIxMi45NS4yMDMuaW4tYWRkci5hcnBhLiddO1xuZXhwb3J0IGNvbnN0IGFycmF5UXVlcnlUeXBlID0gWydQVFInLCAnUFRSJywgJ1BUUicsICdQVFInLCAnUFRSJywgJ0EnXTtcbmV4cG9ydCBjb25zdCBhcnJheVJlc3BvbnNlQ29kZSA9IFsnTlhET01BSU4nLCAnTk9FUlJPUicsICdXQVJOSU5HJywgJ0NSSVRJQ0FMJywgJ0FMRVJUJywgJ0VNRVJHRU5DWScsICdTRVJWRkFJTCcsICdJTkZPJywgJ1NVQ0NFU1MnLCAnQkFEVFJVTkMnLCAnQkFETkFNRScsICdOT1RBVVRIJ107XG5leHBvcnQgY29uc3QgYXJyYXlTb3VyY2VJUCA9IFsnMTYzLjE3Mi4wLjAnLCAnMS4zMy4yMTMuMTk5JywgJzgzLjMyLjAuMCcsICcxNTQuODQuMjQ2LjIwNScsICc3NS4xNDIuMTI5LjIwMicsICcxNzEuMTk3LjIxNy4xNDknLCAnNzcuMzguMTE5LjE3J107XG5leHBvcnQgY29uc3QgYXJyYXlMb2NhdGlvbiA9IFsnZXVyb3BlLXdlc3QxJywgJ3VzLWNlbnRyYWwxJywgJ2FzaWEtZWFzdDEnLCAnYXVzdHJhbGlhLXNvdXRoZWFzdDEnLCAndXMtd2VzdDEnLCAndXMtd2VzdDMnLCAndXMtd2VzdDInLCAndXMtd2VzdDQnLCAndXMtZWFzdDEnLCAndXMtZWFzdDInLCAndXMtZWFzdDMnLCAnc291dGhhbWVyaWNhLWVhc3QxJ107XG5leHBvcnQgY29uc3QgYXJyYXlQcm9qZWN0ID0gWyd3YXp1aC1kZXYnLCAnd2F6dWgtcHJvZCcsICd3YXp1aC10ZXN0J107XG5leHBvcnQgY29uc3QgYXJyYXlTb3VyY2VUeXBlID0gWydnY2Utdm0nLCAnaW50ZXJuZXQnXTtcbmV4cG9ydCBjb25zdCBhcnJheVNldmVyaXR5ID0gWydFUlJPUicsICdJTkZPJywgJ05PVElDRScsICdDUklUSUNBTCcsICdFTUVSR0VOQ1knLCAnQUxFUlQnXTtcbmV4cG9ydCBjb25zdCBhcnJheVR5cGUgPSBbJ2Ruc19xdWVyeScsICdhcHBfc2NyaXB0X2Z1bmN0aW9uJywgJ2dlbmVyaWNfdGFzayddO1xuXG5cbmV4cG9ydCBjb25zdCBhcnJheVJ1bGVzID0gW3tcbiAgICBsZXZlbDogMTIsXG4gICAgZGVzY3JpcHRpb246IFwiVW5hYmxlIHRvIHByb2Nlc3MgcXVlcnkgZHVlIHRvIGEgcHJvYmxlbSB3aXRoIHRoZSBuYW1lIHNlcnZlclwiLFxuICAgIGlkOiBcIjY1MDA3XCIsXG4gICAgZmlyZWR0aW1lczogMixcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH0sXG4gIHtcbiAgICBsZXZlbDogNSxcbiAgICBkZXNjcmlwdGlvbjogXCJHQ1Agbm90aWNlIGV2ZW50XCIsXG4gICAgaWQ6IFwiNjUwMDFcIixcbiAgICBmaXJlZHRpbWVzOiAxLFxuICAgIG1haWw6IHRydWUsXG4gICAgZ3JvdXBzOiBbXCJnY3BcIl1cbiAgfSxcbiAge1xuICAgIGxldmVsOiAzLFxuICAgIGRlc2NyaXB0aW9uOiBcIkROUyBleHRlcm5hbCBxdWVyeVwiLFxuICAgIGlkOiBcIjY1MDMyXCIsXG4gICAgZmlyZWR0aW1lczogMSxcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH0sXG4gIHtcbiAgICBsZXZlbDogNSxcbiAgICBkZXNjcmlwdGlvbjogXCJHQ1Agd2FybmluZyBldmVudCBmcm9tIFZNIDUzMTMzOTIyOTUzMS5pbnN0YW5jZS0xIHdpdGggc291cmNlIElQIDgzLjMyLjAuMCBmcm9tIGV1cm9wZS13ZXN0MVwiLFxuICAgIGlkOiBcIjY1MDM0XCIsXG4gICAgZmlyZWR0aW1lczogMSxcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH0sIHtcbiAgICBsZXZlbDogOSxcbiAgICBkZXNjcmlwdGlvbjogXCJHQ1AgY3JpdGljYWwgZXZlbnQgZnJvbSBWTSA1MzEzMzkyMjk1MzEuaW5zdGFuY2UtMSB3aXRoIHNvdXJjZSBJUCA4My4zMi4wLjAgZnJvbSBldXJvcGUtd2VzdDFcIixcbiAgICBpZDogXCI2NTAzNlwiLFxuICAgIGZpcmVkdGltZXM6IDQsXG4gICAgbWFpbDogdHJ1ZSxcbiAgICBncm91cHM6IFtcImdjcFwiXVxuICB9LFxuICB7XG4gICAgbGV2ZWw6IDExLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdDUCBhbGVydCBldmVudCBmcm9tIFZNIDUzMTMzOTIyOTUzMS5pbnN0YW5jZS0xIHdpdGggc291cmNlIElQIDgzLjMyLjAuMCBmcm9tIGV1cm9wZS13ZXN0MVwiLFxuICAgIGlkOiBcIjY1MDM3XCIsXG4gICAgZmlyZWR0aW1lczogMSxcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH0sXG4gIHtcbiAgICBsZXZlbDogMTIsXG4gICAgZGVzY3JpcHRpb246IFwiR0NQIGVtZXJnZW5jeSBldmVudCBmcm9tIFZNIDUzMTMzOTIyOTUzMS5pbnN0YW5jZS0xIHdpdGggc291cmNlIElQIDgzLjMyLjAuMCBmcm9tIGV1cm9wZS13ZXN0MVwiLFxuICAgIGlkOiBcIjY1MDM4XCIsXG4gICAgZmlyZWR0aW1lczogMixcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH0sXG4gIHtcblxuICAgIGxldmVsOiA1LFxuICAgIGRlc2NyaXB0aW9uOiBcIkdDUCBub3RpY2UgZXZlbnQgd2l0aCBzb3VyY2UgSVAgODMuMzIuMC4wIGZyb20gZXVyb3BlLXdlc3QxIHdpdGggcmVzcG9uc2UgY29kZSBOWERPTUFJTlwiLFxuICAgIGlkOiBcIjY1MDEwXCIsXG4gICAgZmlyZWR0aW1lczogMixcbiAgICBtYWlsOiB0cnVlLFxuICAgIGdyb3VwczogW1wiZ2NwXCJdXG4gIH1cbl07XG4iXX0=