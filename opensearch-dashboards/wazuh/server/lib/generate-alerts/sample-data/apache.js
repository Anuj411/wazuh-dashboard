"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = exports.decoder = exports.location = void 0;

/*
 * Wazuh app - Apache sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const location = '/var/log/httpd/error_log';
exports.location = location;
const decoder = {
  parent: "apache-errorlog",
  name: "apache-errorlog"
};
exports.decoder = decoder;
const data = [{
  "rule": {
    "firedtimes": 5,
    "mail": false,
    "level": 5,
    "pci_dss": ["6.5.8", "10.2.4"],
    "hipaa": ["164.312.b"],
    "description": "Apache: Attempt to access forbidden directory index.",
    "groups": ["apache", "web", "access_denied"],
    "id": "30306",
    "nist_800_53": ["SA.11", "AU.14", "AC.7"],
    "gdpr": ["IV_35.7.d"]
  },
  "full_log": "[{_timestamp_apache}] [autoindex:error] [pid {_pi_id}] [client {data.srcip}:{data.srcport}] {data.id}: Cannot serve directory /var/www/html/: No matching DirectoryIndex (index.html) found, and server-generated directory index forbidden by Options directive"
}];
exports.data = data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwYWNoZS5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsImRlY29kZXIiLCJwYXJlbnQiLCJuYW1lIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlPLE1BQU1BLFFBQVEsR0FBRywwQkFBakI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUUsaUJBRGE7QUFFckJDLEVBQUFBLElBQUksRUFBRTtBQUZlLENBQWhCOztBQUtBLE1BQU1DLElBQUksR0FBRyxDQUNsQjtBQUNFLFVBQVE7QUFDTixrQkFBYyxDQURSO0FBRU4sWUFBUSxLQUZGO0FBR04sYUFBUyxDQUhIO0FBSU4sZUFBVyxDQUFDLE9BQUQsRUFBUyxRQUFULENBSkw7QUFLTixhQUFTLENBQ1AsV0FETyxDQUxIO0FBUU4sbUJBQWUsc0RBUlQ7QUFTTixjQUFVLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsZUFBaEIsQ0FUSjtBQVVOLFVBQU0sT0FWQTtBQVdOLG1CQUFlLENBQ2IsT0FEYSxFQUViLE9BRmEsRUFHYixNQUhhLENBWFQ7QUFnQk4sWUFBUSxDQUFDLFdBQUQ7QUFoQkYsR0FEVjtBQW1CRSxjQUFZO0FBbkJkLENBRGtCLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gQXBhY2hlIHNhbXBsZSBkYXRhXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgbG9jYXRpb24gPSAnL3Zhci9sb2cvaHR0cGQvZXJyb3JfbG9nJztcblxuZXhwb3J0IGNvbnN0IGRlY29kZXIgPSB7XG4gIHBhcmVudDogXCJhcGFjaGUtZXJyb3Jsb2dcIixcbiAgbmFtZTogXCJhcGFjaGUtZXJyb3Jsb2dcIlxufTtcblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBcInJ1bGVcIjoge1xuICAgICAgXCJmaXJlZHRpbWVzXCI6IDUsXG4gICAgICBcIm1haWxcIjogZmFsc2UsXG4gICAgICBcImxldmVsXCI6IDUsXG4gICAgICBcInBjaV9kc3NcIjogW1wiNi41LjhcIixcIjEwLjIuNFwiXSxcbiAgICAgIFwiaGlwYWFcIjogW1xuICAgICAgICBcIjE2NC4zMTIuYlwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFwYWNoZTogQXR0ZW1wdCB0byBhY2Nlc3MgZm9yYmlkZGVuIGRpcmVjdG9yeSBpbmRleC5cIixcbiAgICAgIFwiZ3JvdXBzXCI6IFtcImFwYWNoZVwiLFwid2ViXCIsXCJhY2Nlc3NfZGVuaWVkXCJdLFxuICAgICAgXCJpZFwiOiBcIjMwMzA2XCIsXG4gICAgICBcIm5pc3RfODAwXzUzXCI6IFtcbiAgICAgICAgXCJTQS4xMVwiLFxuICAgICAgICBcIkFVLjE0XCIsXG4gICAgICAgIFwiQUMuN1wiXG4gICAgICBdLFxuICAgICAgXCJnZHByXCI6IFtcIklWXzM1LjcuZFwiXVxuICAgIH0sXG4gICAgXCJmdWxsX2xvZ1wiOiBcIlt7X3RpbWVzdGFtcF9hcGFjaGV9XSBbYXV0b2luZGV4OmVycm9yXSBbcGlkIHtfcGlfaWR9XSBbY2xpZW50IHtkYXRhLnNyY2lwfTp7ZGF0YS5zcmNwb3J0fV0ge2RhdGEuaWR9OiBDYW5ub3Qgc2VydmUgZGlyZWN0b3J5IC92YXIvd3d3L2h0bWwvOiBObyBtYXRjaGluZyBEaXJlY3RvcnlJbmRleCAoaW5kZXguaHRtbCkgZm91bmQsIGFuZCBzZXJ2ZXItZ2VuZXJhdGVkIGRpcmVjdG9yeSBpbmRleCBmb3JiaWRkZW4gYnkgT3B0aW9ucyBkaXJlY3RpdmVcIixcbiAgfVxuXTsiXX0=