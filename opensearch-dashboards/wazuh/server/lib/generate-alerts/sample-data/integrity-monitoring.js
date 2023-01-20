"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulatory = exports.tags = exports.gid_after = exports.uid_after = exports.pathsWindows = exports.pathsLinux = exports.attributes = exports.events = void 0;

/*
 * Wazuh app - FIM sample alerts
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const events = ["modified", "deleted", "added"];
exports.events = events;
const attributes = ["mtime", "inode", "size", "tmp", "md5", "sha1", "sha256"];
exports.attributes = attributes;
const pathsLinux = ["/etc/resolv.conf", "/var/wazuh/queue/fim/db/fim.db-journal", "/var/wazuh/queue/fim/db/fim.db", "/var/osquery/osquery.db/CURRENT", "/etc/sysconfig/network-scripts/ifcfg-eth1", "/etc/filebeat/fields.yml", "/var/log/lastlog", "/tmp/agent.conf", "/etc/elasticsearch/elasticsearch.yml", "/etc/elasticsearch/users", "/etc/elasticsearch/config", "/tmp/wazuh-config", "/run/utmp", "/etc/resolv.conf", "/var/wazuh/queue/fim/db/fim.db", "/var/osquery/osquery.db/CURRENT", "/run/utmp"];
exports.pathsLinux = pathsLinux;
const pathsWindows = ["[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\MpKslDrv", "[x32] HKEY_LOCAL_MACHINE\\Security\\SAM\\Domains\\Account\\Users\\000001F4", "[x32] HKEY_LOCAL_MACHINE\\Security\\SAM\\Domains\\Account\\Users\\000001F5", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\\{54b31d7e-36bf-4bbe-9ab2-106a939cd78c}", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\W32Time\\Config", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\W32Time\\SecureTimeLimits", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\W32Time\\SecureTimeLimits\\RunTime", "[x32] HKEY_LOCAL_MACHINE\\Security\\SAM\\Domains\\Account\\Users\\000001F7", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\SharedAccess\\Epoch", "c:\\programdata\\microsoft\\windows defender\\scans\\mpenginedb.db-wal", "c:\\program files (x86)\\wazuh-agent\\wodles\\syscollector", "c:\\program files (x86)\\wazuh-agent\\rids\\sender_counter", "c:\\program files (x86)\\wazuh-agent\\queue\\fim\\db\\fim.db", "c:\\program files (x86)\\wazuh-agent\\wazuh-agent.state", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\WinDefend", "[x32] HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\bam\\State\\UserSettings\\S-1-5-21-856620481-996501011-1859314257-500"];
exports.pathsWindows = pathsWindows;
const uid_after = ["0", "S-1-5-18", "S-1-5-32-544", "996", "S-1-5-19"];
exports.uid_after = uid_after;
const gid_after = ["994", "0", "993", "190", "22"];
exports.gid_after = gid_after;
const tags = ["tmp"];
exports.tags = tags;
const regulatory = [{
  "firedtimes": 1,
  "mail": false,
  "level": 5,
  "pci_dss": ["11.5"],
  "hipaa": ["164.312.c.1", "164.312.c.2"],
  "description": "File added to the system.",
  "groups": ["wazuh", "syscheck"],
  "id": "554",
  "nist_800_53": ["SI.7"],
  "gpg13": ["4.11"],
  "gdpr": ["II_5.1.f"]
}, {
  "firedtimes": 2,
  "mail": false,
  "level": 7,
  "pci_dss": ["11.5"],
  "hipaa": ["164.312.c.1", "164.312.c.2"],
  "description": "Integrity checksum changed.",
  "groups": ["wazuh", "syscheck"],
  "id": "550",
  "nist_800_53": ["SI.7"],
  "gpg13": ["4.11"],
  "gdpr": ["II_5.1.f"]
}, {
  "firedtimes": 2,
  "mail": false,
  "level": 7,
  "pci_dss": ["11.5"],
  "hipaa": ["164.312.c.1", "164.312.c.2"],
  "description": "File deleted.",
  "groups": ["wazuh", "syscheck"],
  "id": "553",
  "nist_800_53": ["SI.7"],
  "gpg13": ["4.11"],
  "gdpr": ["II_5.1.f"]
}];
exports.regulatory = regulatory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVncml0eS1tb25pdG9yaW5nLmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsImF0dHJpYnV0ZXMiLCJwYXRoc0xpbnV4IiwicGF0aHNXaW5kb3dzIiwidWlkX2FmdGVyIiwiZ2lkX2FmdGVyIiwidGFncyIsInJlZ3VsYXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZTyxNQUFNQSxNQUFNLEdBQUcsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixPQUF4QixDQUFmOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLEtBQTNCLEVBQWtDLEtBQWxDLEVBQXlDLE1BQXpDLEVBQWlELFFBQWpELENBQW5COztBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUN4QixrQkFEd0IsRUFFeEIsd0NBRndCLEVBR3hCLGdDQUh3QixFQUl4QixpQ0FKd0IsRUFLeEIsMkNBTHdCLEVBTXhCLDBCQU53QixFQU94QixrQkFQd0IsRUFReEIsaUJBUndCLEVBU3hCLHNDQVR3QixFQVV4QiwwQkFWd0IsRUFXeEIsMkJBWHdCLEVBWXhCLG1CQVp3QixFQWF4QixXQWJ3QixFQWN4QixrQkFkd0IsRUFleEIsZ0NBZndCLEVBZ0J4QixpQ0FoQndCLEVBaUJ4QixXQWpCd0IsQ0FBbkI7O0FBbUJBLE1BQU1DLFlBQVksR0FBRyxDQUMxQix5RUFEMEIsRUFFMUIsNEVBRjBCLEVBRzFCLDRFQUgwQixFQUkxQixzSUFKMEIsRUFLMUIsZ0ZBTDBCLEVBTTFCLDBGQU4wQixFQU8xQixtR0FQMEIsRUFRMUIsNEVBUjBCLEVBUzFCLG9GQVQwQixFQVUxQix3RUFWMEIsRUFXMUIsNERBWDBCLEVBWTFCLDREQVowQixFQWExQiw4REFiMEIsRUFjMUIseURBZDBCLEVBZTFCLDBFQWYwQixFQWdCMUIsc0lBaEIwQixDQUFyQjs7QUFrQkEsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLFVBQU4sRUFBa0IsY0FBbEIsRUFBa0MsS0FBbEMsRUFBeUMsVUFBekMsQ0FBbEI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQUMsS0FBRCxFQUFRLEdBQVIsRUFBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLElBQTNCLENBQWxCOztBQUNBLE1BQU1DLElBQUksR0FBRyxDQUFDLEtBQUQsQ0FBYjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUN2QixnQkFBYyxDQURTO0FBRXZCLFVBQVEsS0FGZTtBQUd2QixXQUFTLENBSGM7QUFJdkIsYUFBVyxDQUNULE1BRFMsQ0FKWTtBQU92QixXQUFTLENBQ1AsYUFETyxFQUVQLGFBRk8sQ0FQYztBQVd2QixpQkFBZSwyQkFYUTtBQVl2QixZQUFVLENBQ1IsT0FEUSxFQUVSLFVBRlEsQ0FaYTtBQWdCdkIsUUFBTSxLQWhCaUI7QUFpQnZCLGlCQUFlLENBQ2IsTUFEYSxDQWpCUTtBQW9CdkIsV0FBUyxDQUNQLE1BRE8sQ0FwQmM7QUF1QnZCLFVBQVEsQ0FDTixVQURNO0FBdkJlLENBQUQsRUEyQnhCO0FBQ0UsZ0JBQWMsQ0FEaEI7QUFFRSxVQUFRLEtBRlY7QUFHRSxXQUFTLENBSFg7QUFJRSxhQUFXLENBQ1QsTUFEUyxDQUpiO0FBT0UsV0FBUyxDQUNQLGFBRE8sRUFFUCxhQUZPLENBUFg7QUFXRSxpQkFBZSw2QkFYakI7QUFZRSxZQUFVLENBQ1IsT0FEUSxFQUVSLFVBRlEsQ0FaWjtBQWdCRSxRQUFNLEtBaEJSO0FBaUJFLGlCQUFlLENBQ2IsTUFEYSxDQWpCakI7QUFvQkUsV0FBUyxDQUNQLE1BRE8sQ0FwQlg7QUF1QkUsVUFBUSxDQUNOLFVBRE07QUF2QlYsQ0EzQndCLEVBc0R4QjtBQUNFLGdCQUFjLENBRGhCO0FBRUUsVUFBUSxLQUZWO0FBR0UsV0FBUyxDQUhYO0FBSUUsYUFBVyxDQUNULE1BRFMsQ0FKYjtBQU9FLFdBQVMsQ0FDUCxhQURPLEVBRVAsYUFGTyxDQVBYO0FBV0UsaUJBQWUsZUFYakI7QUFZRSxZQUFVLENBQ1IsT0FEUSxFQUVSLFVBRlEsQ0FaWjtBQWdCRSxRQUFNLEtBaEJSO0FBaUJFLGlCQUFlLENBQ2IsTUFEYSxDQWpCakI7QUFvQkUsV0FBUyxDQUNQLE1BRE8sQ0FwQlg7QUF1QkUsVUFBUSxDQUNOLFVBRE07QUF2QlYsQ0F0RHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIEZJTSBzYW1wbGUgYWxlcnRzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgZXZlbnRzID0gW1wibW9kaWZpZWRcIiwgXCJkZWxldGVkXCIsIFwiYWRkZWRcIl07XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IFtcIm10aW1lXCIsIFwiaW5vZGVcIiwgXCJzaXplXCIsIFwidG1wXCIsIFwibWQ1XCIsIFwic2hhMVwiLCBcInNoYTI1NlwiXTtcbmV4cG9ydCBjb25zdCBwYXRoc0xpbnV4ID0gW1xuICBcIi9ldGMvcmVzb2x2LmNvbmZcIixcbiAgXCIvdmFyL3dhenVoL3F1ZXVlL2ZpbS9kYi9maW0uZGItam91cm5hbFwiLFxuICBcIi92YXIvd2F6dWgvcXVldWUvZmltL2RiL2ZpbS5kYlwiLFxuICBcIi92YXIvb3NxdWVyeS9vc3F1ZXJ5LmRiL0NVUlJFTlRcIixcbiAgXCIvZXRjL3N5c2NvbmZpZy9uZXR3b3JrLXNjcmlwdHMvaWZjZmctZXRoMVwiLFxuICBcIi9ldGMvZmlsZWJlYXQvZmllbGRzLnltbFwiLFxuICBcIi92YXIvbG9nL2xhc3Rsb2dcIixcbiAgXCIvdG1wL2FnZW50LmNvbmZcIixcbiAgXCIvZXRjL2VsYXN0aWNzZWFyY2gvZWxhc3RpY3NlYXJjaC55bWxcIixcbiAgXCIvZXRjL2VsYXN0aWNzZWFyY2gvdXNlcnNcIixcbiAgXCIvZXRjL2VsYXN0aWNzZWFyY2gvY29uZmlnXCIsXG4gIFwiL3RtcC93YXp1aC1jb25maWdcIixcbiAgXCIvcnVuL3V0bXBcIixcbiAgXCIvZXRjL3Jlc29sdi5jb25mXCIsXG4gIFwiL3Zhci93YXp1aC9xdWV1ZS9maW0vZGIvZmltLmRiXCIsXG4gIFwiL3Zhci9vc3F1ZXJ5L29zcXVlcnkuZGIvQ1VSUkVOVFwiLFxuICBcIi9ydW4vdXRtcFwiXG5dO1xuZXhwb3J0IGNvbnN0IHBhdGhzV2luZG93cyA9IFtcbiAgXCJbeDMyXSBIS0VZX0xPQ0FMX01BQ0hJTkVcXFxcU3lzdGVtXFxcXEN1cnJlbnRDb250cm9sU2V0XFxcXFNlcnZpY2VzXFxcXE1wS3NsRHJ2XCIsXG4gIFwiW3gzMl0gSEtFWV9MT0NBTF9NQUNISU5FXFxcXFNlY3VyaXR5XFxcXFNBTVxcXFxEb21haW5zXFxcXEFjY291bnRcXFxcVXNlcnNcXFxcMDAwMDAxRjRcIixcbiAgXCJbeDMyXSBIS0VZX0xPQ0FMX01BQ0hJTkVcXFxcU2VjdXJpdHlcXFxcU0FNXFxcXERvbWFpbnNcXFxcQWNjb3VudFxcXFxVc2Vyc1xcXFwwMDAwMDFGNVwiLFxuICBcIlt4MzJdIEhLRVlfTE9DQUxfTUFDSElORVxcXFxTeXN0ZW1cXFxcQ3VycmVudENvbnRyb2xTZXRcXFxcU2VydmljZXNcXFxcVGNwaXBcXFxcUGFyYW1ldGVyc1xcXFxJbnRlcmZhY2VzXFxcXHs1NGIzMWQ3ZS0zNmJmLTRiYmUtOWFiMi0xMDZhOTM5Y2Q3OGN9XCIsXG4gIFwiW3gzMl0gSEtFWV9MT0NBTF9NQUNISU5FXFxcXFN5c3RlbVxcXFxDdXJyZW50Q29udHJvbFNldFxcXFxTZXJ2aWNlc1xcXFxXMzJUaW1lXFxcXENvbmZpZ1wiLFxuICBcIlt4MzJdIEhLRVlfTE9DQUxfTUFDSElORVxcXFxTeXN0ZW1cXFxcQ3VycmVudENvbnRyb2xTZXRcXFxcU2VydmljZXNcXFxcVzMyVGltZVxcXFxTZWN1cmVUaW1lTGltaXRzXCIsXG4gIFwiW3gzMl0gSEtFWV9MT0NBTF9NQUNISU5FXFxcXFN5c3RlbVxcXFxDdXJyZW50Q29udHJvbFNldFxcXFxTZXJ2aWNlc1xcXFxXMzJUaW1lXFxcXFNlY3VyZVRpbWVMaW1pdHNcXFxcUnVuVGltZVwiLFxuICBcIlt4MzJdIEhLRVlfTE9DQUxfTUFDSElORVxcXFxTZWN1cml0eVxcXFxTQU1cXFxcRG9tYWluc1xcXFxBY2NvdW50XFxcXFVzZXJzXFxcXDAwMDAwMUY3XCIsXG4gIFwiW3gzMl0gSEtFWV9MT0NBTF9NQUNISU5FXFxcXFN5c3RlbVxcXFxDdXJyZW50Q29udHJvbFNldFxcXFxTZXJ2aWNlc1xcXFxTaGFyZWRBY2Nlc3NcXFxcRXBvY2hcIixcbiAgXCJjOlxcXFxwcm9ncmFtZGF0YVxcXFxtaWNyb3NvZnRcXFxcd2luZG93cyBkZWZlbmRlclxcXFxzY2Fuc1xcXFxtcGVuZ2luZWRiLmRiLXdhbFwiLFxuICBcImM6XFxcXHByb2dyYW0gZmlsZXMgKHg4NilcXFxcd2F6dWgtYWdlbnRcXFxcd29kbGVzXFxcXHN5c2NvbGxlY3RvclwiLFxuICBcImM6XFxcXHByb2dyYW0gZmlsZXMgKHg4NilcXFxcd2F6dWgtYWdlbnRcXFxccmlkc1xcXFxzZW5kZXJfY291bnRlclwiLFxuICBcImM6XFxcXHByb2dyYW0gZmlsZXMgKHg4NilcXFxcd2F6dWgtYWdlbnRcXFxccXVldWVcXFxcZmltXFxcXGRiXFxcXGZpbS5kYlwiLFxuICBcImM6XFxcXHByb2dyYW0gZmlsZXMgKHg4NilcXFxcd2F6dWgtYWdlbnRcXFxcd2F6dWgtYWdlbnQuc3RhdGVcIixcbiAgXCJbeDMyXSBIS0VZX0xPQ0FMX01BQ0hJTkVcXFxcU3lzdGVtXFxcXEN1cnJlbnRDb250cm9sU2V0XFxcXFNlcnZpY2VzXFxcXFdpbkRlZmVuZFwiLFxuICBcIlt4MzJdIEhLRVlfTE9DQUxfTUFDSElORVxcXFxTeXN0ZW1cXFxcQ3VycmVudENvbnRyb2xTZXRcXFxcU2VydmljZXNcXFxcYmFtXFxcXFN0YXRlXFxcXFVzZXJTZXR0aW5nc1xcXFxTLTEtNS0yMS04NTY2MjA0ODEtOTk2NTAxMDExLTE4NTkzMTQyNTctNTAwXCIsXG5dO1xuZXhwb3J0IGNvbnN0IHVpZF9hZnRlciA9IFtcIjBcIiwgXCJTLTEtNS0xOFwiLCBcIlMtMS01LTMyLTU0NFwiLCBcIjk5NlwiLCBcIlMtMS01LTE5XCJdO1xuZXhwb3J0IGNvbnN0IGdpZF9hZnRlciA9IFtcIjk5NFwiLCBcIjBcIiwgXCI5OTNcIiwgXCIxOTBcIiwgXCIyMlwiXTtcbmV4cG9ydCBjb25zdCB0YWdzID0gW1widG1wXCJdO1xuZXhwb3J0IGNvbnN0IHJlZ3VsYXRvcnkgPSBbe1xuICAgIFwiZmlyZWR0aW1lc1wiOiAxLFxuICAgIFwibWFpbFwiOiBmYWxzZSxcbiAgICBcImxldmVsXCI6IDUsXG4gICAgXCJwY2lfZHNzXCI6IFtcbiAgICAgIFwiMTEuNVwiXG4gICAgXSxcbiAgICBcImhpcGFhXCI6IFtcbiAgICAgIFwiMTY0LjMxMi5jLjFcIixcbiAgICAgIFwiMTY0LjMxMi5jLjJcIlxuICAgIF0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkZpbGUgYWRkZWQgdG8gdGhlIHN5c3RlbS5cIixcbiAgICBcImdyb3Vwc1wiOiBbXG4gICAgICBcIndhenVoXCIsXG4gICAgICBcInN5c2NoZWNrXCJcbiAgICBdLFxuICAgIFwiaWRcIjogXCI1NTRcIixcbiAgICBcIm5pc3RfODAwXzUzXCI6IFtcbiAgICAgIFwiU0kuN1wiXG4gICAgXSxcbiAgICBcImdwZzEzXCI6IFtcbiAgICAgIFwiNC4xMVwiXG4gICAgXSxcbiAgICBcImdkcHJcIjogW1xuICAgICAgXCJJSV81LjEuZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmaXJlZHRpbWVzXCI6IDIsXG4gICAgXCJtYWlsXCI6IGZhbHNlLFxuICAgIFwibGV2ZWxcIjogNyxcbiAgICBcInBjaV9kc3NcIjogW1xuICAgICAgXCIxMS41XCJcbiAgICBdLFxuICAgIFwiaGlwYWFcIjogW1xuICAgICAgXCIxNjQuMzEyLmMuMVwiLFxuICAgICAgXCIxNjQuMzEyLmMuMlwiXG4gICAgXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdyaXR5IGNoZWNrc3VtIGNoYW5nZWQuXCIsXG4gICAgXCJncm91cHNcIjogW1xuICAgICAgXCJ3YXp1aFwiLFxuICAgICAgXCJzeXNjaGVja1wiXG4gICAgXSxcbiAgICBcImlkXCI6IFwiNTUwXCIsXG4gICAgXCJuaXN0XzgwMF81M1wiOiBbXG4gICAgICBcIlNJLjdcIlxuICAgIF0sXG4gICAgXCJncGcxM1wiOiBbXG4gICAgICBcIjQuMTFcIlxuICAgIF0sXG4gICAgXCJnZHByXCI6IFtcbiAgICAgIFwiSUlfNS4xLmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmlyZWR0aW1lc1wiOiAyLFxuICAgIFwibWFpbFwiOiBmYWxzZSxcbiAgICBcImxldmVsXCI6IDcsXG4gICAgXCJwY2lfZHNzXCI6IFtcbiAgICAgIFwiMTEuNVwiXG4gICAgXSxcbiAgICBcImhpcGFhXCI6IFtcbiAgICAgIFwiMTY0LjMxMi5jLjFcIixcbiAgICAgIFwiMTY0LjMxMi5jLjJcIlxuICAgIF0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkZpbGUgZGVsZXRlZC5cIixcbiAgICBcImdyb3Vwc1wiOiBbXG4gICAgICBcIndhenVoXCIsXG4gICAgICBcInN5c2NoZWNrXCJcbiAgICBdLFxuICAgIFwiaWRcIjogXCI1NTNcIixcbiAgICBcIm5pc3RfODAwXzUzXCI6IFtcbiAgICAgIFwiU0kuN1wiXG4gICAgXSxcbiAgICBcImdwZzEzXCI6IFtcbiAgICAgIFwiNC4xMVwiXG4gICAgXSxcbiAgICBcImdkcHJcIjogW1xuICAgICAgXCJJSV81LjEuZlwiXG4gICAgXVxuICB9LFxuXTtcbiJdfQ==