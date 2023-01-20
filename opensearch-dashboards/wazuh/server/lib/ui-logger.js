"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseLogger = require("./base-logger");

var _constants = require("../../common/constants");

/*
 * Wazuh app - Module for ui logging functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
var _default = new _baseLogger.BaseLogger(_constants.WAZUH_UI_LOGS_PLAIN_FILENAME, _constants.WAZUH_UI_LOGS_RAW_FILENAME);

exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWxvZ2dlci50cyJdLCJuYW1lcyI6WyJCYXNlTG9nZ2VyIiwiV0FaVUhfVUlfTE9HU19QTEFJTl9GSUxFTkFNRSIsIldBWlVIX1VJX0xPR1NfUkFXX0ZJTEVOQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0E7O0FBQ0E7O0FBWkE7Ozs7Ozs7Ozs7O2VBaUJlLElBQUlBLHNCQUFKLENBQWVDLHVDQUFmLEVBQTRDQyxxQ0FBNUMsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgZm9yIHVpIGxvZ2dpbmcgZnVuY3Rpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuaW1wb3J0IHsgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZS1sb2dnZXInO1xuaW1wb3J0IHtcbiAgV0FaVUhfVUlfTE9HU19QTEFJTl9GSUxFTkFNRSxcbiAgV0FaVUhfVUlfTE9HU19SQVdfRklMRU5BTUVcbn0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBCYXNlTG9nZ2VyKFdBWlVIX1VJX0xPR1NfUExBSU5fRklMRU5BTUUsV0FaVUhfVUlfTE9HU19SQVdfRklMRU5BTUUpO1xuIl19