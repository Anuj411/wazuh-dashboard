"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = exports.possibleBreakinAttempt = exports.possibleAttackServer = exports.insecureConnectionAttempt = exports.reverseLoockupError = void 0;

/*
 * Wazuh app - SSH sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const reverseLoockupError = {
  location: "/var/log/secure",
  rule: {
    "mail": false,
    "level": 5,
    "pci_dss": ["11.4"],
    "description": "sshd: Reverse lookup error (bad ISP or attack).",
    "groups": ["syslog", "sshd"],
    "mitre": {
      "tactic": ["Lateral Movement"],
      "id": ["T1021"]
    },
    "id": "5702",
    "nist_800_53": ["SI.4"],
    "gpg13": ["4.12"],
    "gdpr": ["IV_35.7.d"]
  },
  full_log: "{predecoder.timestamp} {predecoder.hostname} sshd[15409]: reverse mapping checking getaddrinfo for {data.srcip}.static.impsat.com.co [{data.srcip}] failed - POSSIBLE BREAK-IN ATTEMPT!"
};
exports.reverseLoockupError = reverseLoockupError;
const insecureConnectionAttempt = {
  rule: {
    mail: false,
    level: 6,
    pci_dss: ["11.4"],
    description: "sshd: insecure connection attempt (scan).",
    groups: ["syslog", "sshd", "recon"],
    id: "5706",
    nist_800_53: ["SI.4"],
    gpg13: ["4.12"],
    gdpr: ["IV_35.7.d"]
  },
  full_log: "{predecoder.timestamp} {predecoder.hostname} sshd[15225]: Did not receive identification string from {data.srcip} port {data.srcport}",
  location: "/var/log/secure"
};
exports.insecureConnectionAttempt = insecureConnectionAttempt;
const possibleAttackServer = {
  rule: {
    mail: false,
    level: 8,
    pci_dss: ["11.4"],
    description: "sshd: Possible attack on the ssh server (or version gathering).",
    groups: ["syslog", "sshd", "recon"],
    mitre: {
      tactic: ["Lateral Movement"],
      technique: ["Brute Force", "Remove Services"],
      id: ["T1021"]
    },
    id: "5701",
    nist_800_53: ["SI.4"],
    gpg13: ["4.12"],
    gdpr: ["IV_35.7.d"]
  },
  location: "/var/log/secure",
  full_log: "{predecoder.timestamp} {predecoder.hostname} sshd[15122]: Bad protocol version identification '\\003' from {data.srcip} port {data.srcport}"
};
exports.possibleAttackServer = possibleAttackServer;
const possibleBreakinAttempt = {
  rule: {
    mail: false,
    level: 10,
    pci_dss: ["11.4"],
    description: "sshd: Possible breakin attempt (high number of reverse lookup errors).",
    groups: ["syslog", "sshd"],
    mitre: {
      tactic: ["Lateral Movement"],
      technique: ["Brute Force", "Remove Services"],
      id: ["T1021"]
    },
    id: "5703",
    nist_800_53: ["SI.4"],
    frequency: 6,
    gpg13: ["4.12"],
    gdpr: ["IV_35.7.d"]
  },
  location: "/var/log/secure",
  full_log: "{predecoder.timestamp} {predecoder.hostname} sshd[10385]: reverse mapping checking getaddrinfo for . [{data.srcip}] failed - POSSIBLE BREAK-IN ATTEMPT!"
};
exports.possibleBreakinAttempt = possibleBreakinAttempt;
const data = [reverseLoockupError, insecureConnectionAttempt, possibleAttackServer, possibleBreakinAttempt];
exports.data = data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNzaC5qcyJdLCJuYW1lcyI6WyJyZXZlcnNlTG9vY2t1cEVycm9yIiwibG9jYXRpb24iLCJydWxlIiwiZnVsbF9sb2ciLCJpbnNlY3VyZUNvbm5lY3Rpb25BdHRlbXB0IiwibWFpbCIsImxldmVsIiwicGNpX2RzcyIsImRlc2NyaXB0aW9uIiwiZ3JvdXBzIiwiaWQiLCJuaXN0XzgwMF81MyIsImdwZzEzIiwiZ2RwciIsInBvc3NpYmxlQXR0YWNrU2VydmVyIiwibWl0cmUiLCJ0YWN0aWMiLCJ0ZWNobmlxdWUiLCJwb3NzaWJsZUJyZWFraW5BdHRlbXB0IiwiZnJlcXVlbmN5IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlPLE1BQU1BLG1CQUFtQixHQUFHO0FBQ2pDQyxFQUFBQSxRQUFRLEVBQUUsaUJBRHVCO0FBRWpDQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixZQUFRLEtBREo7QUFFSixhQUFTLENBRkw7QUFHSixlQUFXLENBQUMsTUFBRCxDQUhQO0FBSUosbUJBQWUsaURBSlg7QUFLSixjQUFVLENBQUMsUUFBRCxFQUFVLE1BQVYsQ0FMTjtBQU1KLGFBQVM7QUFDUCxnQkFBVSxDQUFDLGtCQUFELENBREg7QUFFUCxZQUFNLENBQUMsT0FBRDtBQUZDLEtBTkw7QUFVSixVQUFNLE1BVkY7QUFXSixtQkFBZSxDQUFDLE1BQUQsQ0FYWDtBQVlKLGFBQVMsQ0FBQyxNQUFELENBWkw7QUFhSixZQUFRLENBQUMsV0FBRDtBQWJKLEdBRjJCO0FBaUJqQ0MsRUFBQUEsUUFBUSxFQUFFO0FBakJ1QixDQUE1Qjs7QUFvQkEsTUFBTUMseUJBQXlCLEdBQUc7QUFDdkNGLEVBQUFBLElBQUksRUFBRTtBQUNKRyxJQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKQyxJQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxNQUFELENBSEw7QUFJSkMsSUFBQUEsV0FBVyxFQUFFLDJDQUpUO0FBS0pDLElBQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQsRUFBVSxNQUFWLEVBQWlCLE9BQWpCLENBTEo7QUFNSkMsSUFBQUEsRUFBRSxFQUFFLE1BTkE7QUFPSkMsSUFBQUEsV0FBVyxFQUFFLENBQUMsTUFBRCxDQVBUO0FBUUpDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsQ0FSSDtBQVNKQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQyxXQUFEO0FBVEYsR0FEaUM7QUFZdkNWLEVBQUFBLFFBQVEsRUFBRSx1SUFaNkI7QUFhdkNGLEVBQUFBLFFBQVEsRUFBRTtBQWI2QixDQUFsQzs7QUFnQkEsTUFBTWEsb0JBQW9CLEdBQUc7QUFDbENaLEVBQUFBLElBQUksRUFBRTtBQUNKRyxJQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKQyxJQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxNQUFELENBSEw7QUFJSkMsSUFBQUEsV0FBVyxFQUFFLGlFQUpUO0FBS0pDLElBQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQsRUFBVSxNQUFWLEVBQWlCLE9BQWpCLENBTEo7QUFNSk0sSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRSxDQUFDLGtCQUFELENBREg7QUFFTEMsTUFBQUEsU0FBUyxFQUFFLENBQUMsYUFBRCxFQUFlLGlCQUFmLENBRk47QUFHTFAsTUFBQUEsRUFBRSxFQUFFLENBQUMsT0FBRDtBQUhDLEtBTkg7QUFXSkEsSUFBQUEsRUFBRSxFQUFFLE1BWEE7QUFZSkMsSUFBQUEsV0FBVyxFQUFFLENBQUMsTUFBRCxDQVpUO0FBYUpDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsQ0FiSDtBQWNKQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQyxXQUFEO0FBZEYsR0FENEI7QUFpQmxDWixFQUFBQSxRQUFRLEVBQUUsaUJBakJ3QjtBQWtCbENFLEVBQUFBLFFBQVEsRUFBRTtBQWxCd0IsQ0FBN0I7O0FBcUJBLE1BQU1lLHNCQUFzQixHQUFHO0FBQ3BDaEIsRUFBQUEsSUFBSSxFQUFFO0FBQ0pHLElBQUFBLElBQUksRUFBRSxLQURGO0FBRUpDLElBQUFBLEtBQUssRUFBRSxFQUZIO0FBR0pDLElBQUFBLE9BQU8sRUFBRSxDQUFDLE1BQUQsQ0FITDtBQUlKQyxJQUFBQSxXQUFXLEVBQUUsd0VBSlQ7QUFLSkMsSUFBQUEsTUFBTSxFQUFFLENBQUMsUUFBRCxFQUFVLE1BQVYsQ0FMSjtBQU1KTSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFLENBQUMsa0JBQUQsQ0FESDtBQUVMQyxNQUFBQSxTQUFTLEVBQUUsQ0FBQyxhQUFELEVBQWUsaUJBQWYsQ0FGTjtBQUdMUCxNQUFBQSxFQUFFLEVBQUUsQ0FBQyxPQUFEO0FBSEMsS0FOSDtBQVdKQSxJQUFBQSxFQUFFLEVBQUUsTUFYQTtBQVlKQyxJQUFBQSxXQUFXLEVBQUUsQ0FBQyxNQUFELENBWlQ7QUFhSlEsSUFBQUEsU0FBUyxFQUFFLENBYlA7QUFjSlAsSUFBQUEsS0FBSyxFQUFFLENBQUMsTUFBRCxDQWRIO0FBZUpDLElBQUFBLElBQUksRUFBRSxDQUFDLFdBQUQ7QUFmRixHQUQ4QjtBQWtCcENaLEVBQUFBLFFBQVEsRUFBRSxpQkFsQjBCO0FBbUJwQ0UsRUFBQUEsUUFBUSxFQUFFO0FBbkIwQixDQUEvQjs7QUFzQkEsTUFBTWlCLElBQUksR0FBRyxDQUFDcEIsbUJBQUQsRUFBc0JJLHlCQUF0QixFQUFpRFUsb0JBQWpELEVBQXVFSSxzQkFBdkUsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBTU0ggc2FtcGxlIGRhdGFcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5cbmV4cG9ydCBjb25zdCByZXZlcnNlTG9vY2t1cEVycm9yID0ge1xuICBsb2NhdGlvbjogXCIvdmFyL2xvZy9zZWN1cmVcIixcbiAgcnVsZToge1xuICAgIFwibWFpbFwiOiBmYWxzZSxcbiAgICBcImxldmVsXCI6IDUsXG4gICAgXCJwY2lfZHNzXCI6IFtcIjExLjRcIl0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcInNzaGQ6IFJldmVyc2UgbG9va3VwIGVycm9yIChiYWQgSVNQIG9yIGF0dGFjaykuXCIsXG4gICAgXCJncm91cHNcIjogW1wic3lzbG9nXCIsXCJzc2hkXCJdLFxuICAgIFwibWl0cmVcIjoge1xuICAgICAgXCJ0YWN0aWNcIjogW1wiTGF0ZXJhbCBNb3ZlbWVudFwiXSxcbiAgICAgIFwiaWRcIjogW1wiVDEwMjFcIl1cbiAgICB9LFxuICAgIFwiaWRcIjogXCI1NzAyXCIsXG4gICAgXCJuaXN0XzgwMF81M1wiOiBbXCJTSS40XCJdLFxuICAgIFwiZ3BnMTNcIjogW1wiNC4xMlwiXSxcbiAgICBcImdkcHJcIjogW1wiSVZfMzUuNy5kXCJdXG4gIH0sXG4gIGZ1bGxfbG9nOiBcIntwcmVkZWNvZGVyLnRpbWVzdGFtcH0ge3ByZWRlY29kZXIuaG9zdG5hbWV9IHNzaGRbMTU0MDldOiByZXZlcnNlIG1hcHBpbmcgY2hlY2tpbmcgZ2V0YWRkcmluZm8gZm9yIHtkYXRhLnNyY2lwfS5zdGF0aWMuaW1wc2F0LmNvbS5jbyBbe2RhdGEuc3JjaXB9XSBmYWlsZWQgLSBQT1NTSUJMRSBCUkVBSy1JTiBBVFRFTVBUIVwiXG59O1xuXG5leHBvcnQgY29uc3QgaW5zZWN1cmVDb25uZWN0aW9uQXR0ZW1wdCA9IHtcbiAgcnVsZToge1xuICAgIG1haWw6IGZhbHNlLFxuICAgIGxldmVsOiA2LFxuICAgIHBjaV9kc3M6IFtcIjExLjRcIl0sXG4gICAgZGVzY3JpcHRpb246IFwic3NoZDogaW5zZWN1cmUgY29ubmVjdGlvbiBhdHRlbXB0IChzY2FuKS5cIixcbiAgICBncm91cHM6IFtcInN5c2xvZ1wiLFwic3NoZFwiLFwicmVjb25cIl0sXG4gICAgaWQ6IFwiNTcwNlwiLFxuICAgIG5pc3RfODAwXzUzOiBbXCJTSS40XCJdLFxuICAgIGdwZzEzOiBbXCI0LjEyXCJdLFxuICAgIGdkcHI6IFtcIklWXzM1LjcuZFwiXVxuICB9LFxuICBmdWxsX2xvZzogXCJ7cHJlZGVjb2Rlci50aW1lc3RhbXB9IHtwcmVkZWNvZGVyLmhvc3RuYW1lfSBzc2hkWzE1MjI1XTogRGlkIG5vdCByZWNlaXZlIGlkZW50aWZpY2F0aW9uIHN0cmluZyBmcm9tIHtkYXRhLnNyY2lwfSBwb3J0IHtkYXRhLnNyY3BvcnR9XCIsXG4gIGxvY2F0aW9uOiBcIi92YXIvbG9nL3NlY3VyZVwiXG59O1xuXG5leHBvcnQgY29uc3QgcG9zc2libGVBdHRhY2tTZXJ2ZXIgPSB7XG4gIHJ1bGU6IHtcbiAgICBtYWlsOiBmYWxzZSxcbiAgICBsZXZlbDogOCxcbiAgICBwY2lfZHNzOiBbXCIxMS40XCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcInNzaGQ6IFBvc3NpYmxlIGF0dGFjayBvbiB0aGUgc3NoIHNlcnZlciAob3IgdmVyc2lvbiBnYXRoZXJpbmcpLlwiLFxuICAgIGdyb3VwczogW1wic3lzbG9nXCIsXCJzc2hkXCIsXCJyZWNvblwiXSxcbiAgICBtaXRyZToge1xuICAgICAgdGFjdGljOiBbXCJMYXRlcmFsIE1vdmVtZW50XCJdLFxuICAgICAgdGVjaG5pcXVlOiBbXCJCcnV0ZSBGb3JjZVwiLFwiUmVtb3ZlIFNlcnZpY2VzXCJdLFxuICAgICAgaWQ6IFtcIlQxMDIxXCJdXG4gICAgfSxcbiAgICBpZDogXCI1NzAxXCIsXG4gICAgbmlzdF84MDBfNTM6IFtcIlNJLjRcIl0sXG4gICAgZ3BnMTM6IFtcIjQuMTJcIl0sXG4gICAgZ2RwcjogW1wiSVZfMzUuNy5kXCJdXG4gIH0sXG4gIGxvY2F0aW9uOiBcIi92YXIvbG9nL3NlY3VyZVwiLFxuICBmdWxsX2xvZzogXCJ7cHJlZGVjb2Rlci50aW1lc3RhbXB9IHtwcmVkZWNvZGVyLmhvc3RuYW1lfSBzc2hkWzE1MTIyXTogQmFkIHByb3RvY29sIHZlcnNpb24gaWRlbnRpZmljYXRpb24gJ1xcXFwwMDMnIGZyb20ge2RhdGEuc3JjaXB9IHBvcnQge2RhdGEuc3JjcG9ydH1cIixcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3NpYmxlQnJlYWtpbkF0dGVtcHQgPSB7XG4gIHJ1bGU6IHtcbiAgICBtYWlsOiBmYWxzZSxcbiAgICBsZXZlbDogMTAsXG4gICAgcGNpX2RzczogW1wiMTEuNFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCJzc2hkOiBQb3NzaWJsZSBicmVha2luIGF0dGVtcHQgKGhpZ2ggbnVtYmVyIG9mIHJldmVyc2UgbG9va3VwIGVycm9ycykuXCIsXG4gICAgZ3JvdXBzOiBbXCJzeXNsb2dcIixcInNzaGRcIl0sXG4gICAgbWl0cmU6IHtcbiAgICAgIHRhY3RpYzogW1wiTGF0ZXJhbCBNb3ZlbWVudFwiXSxcbiAgICAgIHRlY2huaXF1ZTogW1wiQnJ1dGUgRm9yY2VcIixcIlJlbW92ZSBTZXJ2aWNlc1wiXSxcbiAgICAgIGlkOiBbXCJUMTAyMVwiXVxuICAgIH0sXG4gICAgaWQ6IFwiNTcwM1wiLFxuICAgIG5pc3RfODAwXzUzOiBbXCJTSS40XCJdLFxuICAgIGZyZXF1ZW5jeTogNixcbiAgICBncGcxMzogW1wiNC4xMlwiXSxcbiAgICBnZHByOiBbXCJJVl8zNS43LmRcIl1cbiAgfSxcbiAgbG9jYXRpb246IFwiL3Zhci9sb2cvc2VjdXJlXCIsXG4gIGZ1bGxfbG9nOiBcIntwcmVkZWNvZGVyLnRpbWVzdGFtcH0ge3ByZWRlY29kZXIuaG9zdG5hbWV9IHNzaGRbMTAzODVdOiByZXZlcnNlIG1hcHBpbmcgY2hlY2tpbmcgZ2V0YWRkcmluZm8gZm9yIC4gW3tkYXRhLnNyY2lwfV0gZmFpbGVkIC0gUE9TU0lCTEUgQlJFQUstSU4gQVRURU1QVCFcIixcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gW3JldmVyc2VMb29ja3VwRXJyb3IsIGluc2VjdXJlQ29ubmVjdGlvbkF0dGVtcHQsIHBvc3NpYmxlQXR0YWNrU2VydmVyLCBwb3NzaWJsZUJyZWFraW5BdHRlbXB0XTsiXX0=