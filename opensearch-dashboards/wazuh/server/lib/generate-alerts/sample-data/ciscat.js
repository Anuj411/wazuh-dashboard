"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.result = exports.benchmark = exports.group = exports.ruleTitle = void 0;

/*
 * Wazuh app - CIS-CAT sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// CIS-CAT
// More info https://documentation.wazuh.com/3.12/user-manual/capabilities/policy-monitoring/ciscat/ciscat.html
const ruleTitle = ["CIS-CAT 1", "CIS-CAT 2", "CIS-CAT 3", "CIS-CAT 4", "CIS-CAT 5", "CIS-CAT 6"];
exports.ruleTitle = ruleTitle;
const group = ["Access, Authentication and Authorization", "Logging and Auditing"];
exports.group = group;
const benchmark = ["CIS Ubuntu Linux 16.04 LTS Benchmark"]; // TODO: add more benchmarks

exports.benchmark = benchmark;
const result = ["fail", "errors", "pass", "unknown", "notchecked"];
exports.result = result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpc2NhdC5qcyJdLCJuYW1lcyI6WyJydWxlVGl0bGUiLCJncm91cCIsImJlbmNobWFyayIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlDO0FBQ0Q7QUFDTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixXQUEzQixFQUF3QyxXQUF4QyxFQUFxRCxXQUFyRCxFQUFrRSxXQUFsRSxDQUFsQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQywwQ0FBRCxFQUE2QyxzQkFBN0MsQ0FBZDs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxzQ0FBRCxDQUFsQixDLENBQTREOzs7QUFDNUQsTUFBTUMsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBDSVMtQ0FUIHNhbXBsZSBkYXRhXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG4gLy8gQ0lTLUNBVFxuLy8gTW9yZSBpbmZvIGh0dHBzOi8vZG9jdW1lbnRhdGlvbi53YXp1aC5jb20vMy4xMi91c2VyLW1hbnVhbC9jYXBhYmlsaXRpZXMvcG9saWN5LW1vbml0b3JpbmcvY2lzY2F0L2Npc2NhdC5odG1sXG5leHBvcnQgY29uc3QgcnVsZVRpdGxlID0gW1wiQ0lTLUNBVCAxXCIsIFwiQ0lTLUNBVCAyXCIsIFwiQ0lTLUNBVCAzXCIsIFwiQ0lTLUNBVCA0XCIsIFwiQ0lTLUNBVCA1XCIsIFwiQ0lTLUNBVCA2XCJdO1xuZXhwb3J0IGNvbnN0IGdyb3VwID0gW1wiQWNjZXNzLCBBdXRoZW50aWNhdGlvbiBhbmQgQXV0aG9yaXphdGlvblwiLCBcIkxvZ2dpbmcgYW5kIEF1ZGl0aW5nXCJdO1xuZXhwb3J0IGNvbnN0IGJlbmNobWFyayA9IFtcIkNJUyBVYnVudHUgTGludXggMTYuMDQgTFRTIEJlbmNobWFya1wiXTsgLy8gVE9ETzogYWRkIG1vcmUgYmVuY2htYXJrc1xuZXhwb3J0IGNvbnN0IHJlc3VsdCA9IFtcImZhaWxcIiwgXCJlcnJvcnNcIiwgXCJwYXNzXCIsIFwidW5rbm93blwiLCBcIm5vdGNoZWNrZWRcIl07Il19