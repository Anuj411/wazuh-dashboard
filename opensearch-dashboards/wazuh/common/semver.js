"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.satisfyPluginPlatformVersion = void 0;

var _package = require("../package.json");

var _semver = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Utils related to plugin platform and app versions
 *
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 *
 */

/**
 * 
 * @param requiredPluginPlatformVersion semver condition that should fulfill the plugin platform version
 * @returns if validation is true or false
 */
const satisfyPluginPlatformVersion = requiredPluginPlatformVersion => _semver.default.satisfies(_package.pluginPlatform.version, requiredPluginPlatformVersion);

exports.satisfyPluginPlatformVersion = satisfyPluginPlatformVersion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbXZlci50cyJdLCJuYW1lcyI6WyJzYXRpc2Z5UGx1Z2luUGxhdGZvcm1WZXJzaW9uIiwicmVxdWlyZWRQbHVnaW5QbGF0Zm9ybVZlcnNpb24iLCJzZW12ZXIiLCJzYXRpc2ZpZXMiLCJhcHBQYWNrYWdlUGx1Z2luUGxhdGZvcm0iLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBYUE7O0FBQ0E7Ozs7QUFkQTs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7O0FBS08sTUFBTUEsNEJBQTRCLEdBQUlDLDZCQUFELElBQW9EQyxnQkFBT0MsU0FBUCxDQUFpQkMsd0JBQXlCQyxPQUExQyxFQUFtREosNkJBQW5ELENBQXpGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIFV0aWxzIHJlbGF0ZWQgdG8gcGx1Z2luIHBsYXRmb3JtIGFuZCBhcHAgdmVyc2lvbnNcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqXG4gKi9cbmltcG9ydCB7IHBsdWdpblBsYXRmb3JtIGFzIGFwcFBhY2thZ2VQbHVnaW5QbGF0Zm9ybSB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcic7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gcmVxdWlyZWRQbHVnaW5QbGF0Zm9ybVZlcnNpb24gc2VtdmVyIGNvbmRpdGlvbiB0aGF0IHNob3VsZCBmdWxmaWxsIHRoZSBwbHVnaW4gcGxhdGZvcm0gdmVyc2lvblxuICogQHJldHVybnMgaWYgdmFsaWRhdGlvbiBpcyB0cnVlIG9yIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5UGx1Z2luUGxhdGZvcm1WZXJzaW9uID0gKHJlcXVpcmVkUGx1Z2luUGxhdGZvcm1WZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuID0+IHNlbXZlci5zYXRpc2ZpZXMoYXBwUGFja2FnZVBsdWdpblBsYXRmb3JtLnZlcnNpb24sIHJlcXVpcmVkUGx1Z2luUGxhdGZvcm1WZXJzaW9uKTtcbiJdfQ==