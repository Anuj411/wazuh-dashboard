"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_USER_STATUS_RUN_AS = exports.APIUserAllowRunAs = exports.CacheInMemoryAPIUserAllowRunAs = void 0;

var ApiInterceptor = _interopRequireWildcard(require("./api-interceptor"));

var _manageHosts = require("./manage-hosts");

var _logger = require("./logger");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Wazuh app - Service which caches the API user allow run as
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// Private variable to save the cache
const _cache = {}; // Export an interface which interacts with the private cache object

const CacheInMemoryAPIUserAllowRunAs = {
  // Set an entry with API ID, username and allow_run_as
  set: (apiID, username, allow_run_as) => {
    if (!_cache[apiID]) {
      _cache[apiID] = {}; // Create a API ID entry if it doesn't exist in cache object
    }

    ;
    _cache[apiID][username] = allow_run_as;
  },
  // Get the value of an entry with API ID and username from cache
  get: (apiID, username) => _cache[apiID] && typeof _cache[apiID][username] !== 'undefined' ? _cache[apiID][username] : API_USER_STATUS_RUN_AS.ALL_DISABLED,
  // Check if it exists the API ID and username in the cache
  has: (apiID, username) => _cache[apiID] && typeof _cache[apiID][username] !== 'undefined' ? true : false
};
exports.CacheInMemoryAPIUserAllowRunAs = CacheInMemoryAPIUserAllowRunAs;
const manageHosts = new _manageHosts.ManageHosts();
const APIUserAllowRunAs = {
  async check(apiId) {
    try {
      const api = await manageHosts.getHostById(apiId);
      (0, _logger.log)('APIUserAllowRunAs:check', `Check if API user ${api.username} (${apiId}) has run_as`, 'debug'); // Check if api.run_as is false or undefined, then it set to false in cache

      if (!api.run_as) {
        CacheInMemoryAPIUserAllowRunAs.set(apiId, api.username, API_USER_STATUS_RUN_AS.HOST_DISABLED);
      }

      ; // Check if the API user is cached and returns it

      if (CacheInMemoryAPIUserAllowRunAs.has(apiId, api.username)) {
        return CacheInMemoryAPIUserAllowRunAs.get(apiId, api.username);
      }

      ;
      const response = await ApiInterceptor.requestAsInternalUser('get', '/security/users/me', {}, {
        apiHostID: apiId
      });
      const statusUserAllowRunAs = response.data.data.affected_items[0].allow_run_as ? API_USER_STATUS_RUN_AS.ENABLED : API_USER_STATUS_RUN_AS.USER_NOT_ALLOWED; // Cache the run_as for the API user

      CacheInMemoryAPIUserAllowRunAs.set(apiId, api.username, statusUserAllowRunAs);
      return statusUserAllowRunAs;
    } catch (error) {
      (0, _logger.log)('APIUserAllowRunAs:check', error.message || error);
      return API_USER_STATUS_RUN_AS.ALL_DISABLED;
    }
  },

  async canUse(apiId) {
    const ApiUserCanUseStatus = await APIUserAllowRunAs.check(apiId);

    if (ApiUserCanUseStatus === API_USER_STATUS_RUN_AS.USER_NOT_ALLOWED) {
      const api = await manageHosts.getHostById(apiId);
      throw new Error(`API with host ID [${apiId}] misconfigured. The Wazuh API user [${api.username}] is not allowed to use [run_as]. Allow it in the user configuration or set [run_as] host setting with [false] value.`);
    }

    return ApiUserCanUseStatus;
  }

};
/**
 * @example
 *   HOST = set in wazuh.yml config
 *   USER = set in user interface
 *
 * ALL_DISABLED
 *   binary 00 = decimal 0 ---> USER 0 y HOST 0
 * 
 * USER_NOT_ALLOWED
 *   binary 01 = decimal 1 ---> USER 0 y HOST 1
 * 
 * HOST_DISABLED
 *   binary 10 = decimal 2 ---> USER 1 y HOST 0
 * 
 * ENABLED
 *   binary 11 = decimal 3 ---> USER 1 y HOST 1
 */

exports.APIUserAllowRunAs = APIUserAllowRunAs;
let API_USER_STATUS_RUN_AS;
exports.API_USER_STATUS_RUN_AS = API_USER_STATUS_RUN_AS;

(function (API_USER_STATUS_RUN_AS) {
  API_USER_STATUS_RUN_AS[API_USER_STATUS_RUN_AS["ALL_DISABLED"] = 0] = "ALL_DISABLED";
  API_USER_STATUS_RUN_AS[API_USER_STATUS_RUN_AS["USER_NOT_ALLOWED"] = 1] = "USER_NOT_ALLOWED";
  API_USER_STATUS_RUN_AS[API_USER_STATUS_RUN_AS["HOST_DISABLED"] = 2] = "HOST_DISABLED";
  API_USER_STATUS_RUN_AS[API_USER_STATUS_RUN_AS["ENABLED"] = 3] = "ENABLED";
})(API_USER_STATUS_RUN_AS || (exports.API_USER_STATUS_RUN_AS = API_USER_STATUS_RUN_AS = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhY2hlLWFwaS11c2VyLWhhcy1ydW4tYXMudHMiXSwibmFtZXMiOlsiX2NhY2hlIiwiQ2FjaGVJbk1lbW9yeUFQSVVzZXJBbGxvd1J1bkFzIiwic2V0IiwiYXBpSUQiLCJ1c2VybmFtZSIsImFsbG93X3J1bl9hcyIsImdldCIsIkFQSV9VU0VSX1NUQVRVU19SVU5fQVMiLCJBTExfRElTQUJMRUQiLCJoYXMiLCJtYW5hZ2VIb3N0cyIsIk1hbmFnZUhvc3RzIiwiQVBJVXNlckFsbG93UnVuQXMiLCJjaGVjayIsImFwaUlkIiwiYXBpIiwiZ2V0SG9zdEJ5SWQiLCJydW5fYXMiLCJIT1NUX0RJU0FCTEVEIiwicmVzcG9uc2UiLCJBcGlJbnRlcmNlcHRvciIsInJlcXVlc3RBc0ludGVybmFsVXNlciIsImFwaUhvc3RJRCIsInN0YXR1c1VzZXJBbGxvd1J1bkFzIiwiZGF0YSIsImFmZmVjdGVkX2l0ZW1zIiwiRU5BQkxFRCIsIlVTRVJfTk9UX0FMTE9XRUQiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYW5Vc2UiLCJBcGlVc2VyQ2FuVXNlU3RhdHVzIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFXQTs7QUFDQTs7QUFDQTs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7O0FBY0E7QUFDQSxNQUFNQSxNQUFNLEdBQUcsRUFBZixDLENBRUE7O0FBQ08sTUFBTUMsOEJBQThCLEdBQUc7QUFDNUM7QUFDQUMsRUFBQUEsR0FBRyxFQUFFLENBQUNDLEtBQUQsRUFBZ0JDLFFBQWhCLEVBQWtDQyxZQUFsQyxLQUFrRTtBQUNyRSxRQUFHLENBQUNMLE1BQU0sQ0FBQ0csS0FBRCxDQUFWLEVBQWtCO0FBQ2hCSCxNQUFBQSxNQUFNLENBQUNHLEtBQUQsQ0FBTixHQUFnQixFQUFoQixDQURnQixDQUNJO0FBQ3JCOztBQUFBO0FBQ0RILElBQUFBLE1BQU0sQ0FBQ0csS0FBRCxDQUFOLENBQWNDLFFBQWQsSUFBMEJDLFlBQTFCO0FBQ0QsR0FQMkM7QUFRNUM7QUFDQUMsRUFBQUEsR0FBRyxF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QXVDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCWXhCLHNCOzs7V0FBQUEsc0I7QUFBQUEsRUFBQUEsc0IsQ0FBQUEsc0I7QUFBQUEsRUFBQUEsc0IsQ0FBQUEsc0I7QUFBQUEsRUFBQUEsc0IsQ0FBQUEsc0I7QUFBQUEsRUFBQUEsc0IsQ0FBQUEsc0I7R0FBQUEsc0Isc0NBQUFBLHNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIFNlcnZpY2Ugd2hpY2ggY2FjaGVzIHRoZSBBUEkgdXNlciBhbGxvdyBydW4gYXNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgKiBhcyBBcGlJbnRlcmNlcHRvciBmcm9tICcuL2FwaS1pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBNYW5hZ2VIb3N0cyB9IGZyb20gJy4vbWFuYWdlLWhvc3RzJztcbmltcG9ydCB7IGxvZyB9IGZyb20gJy4vbG9nZ2VyJztcbi8vIFByaXZhdGUgdmFyaWFibGUgdG8gc2F2ZSB0aGUgY2FjaGVcbmNvbnN0IF9jYWNoZSA9IHt9O1xuXG4vLyBFeHBvcnQgYW4gaW50ZXJmYWNlIHdoaWNoIGludGVyYWN0cyB3aXRoIHRoZSBwcml2YXRlIGNhY2hlIG9iamVjdFxuZXhwb3J0IGNvbnN0IENhY2hlSW5NZW1vcnlBUElVc2VyQWxsb3dSdW5BcyA9IHtcbiAgLy8gU2V0IGFuIGVudHJ5IHdpdGggQVBJIElELCB1c2VybmFtZSBhbmQgYWxsb3dfcnVuX2FzXG4gIHNldDogKGFwaUlEOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIGFsbG93X3J1bl9hcyA6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGlmKCFfY2FjaGVbYXBpSURdKXtcbiAgICAgIF9jYWNoZVthcGlJRF0gPSB7fTsgLy8gQ3JlYXRlIGEgQVBJIElEIGVudHJ5IGlmIGl0IGRvZXNuJ3QgZXhpc3QgaW4gY2FjaGUgb2JqZWN0XG4gICAgfTtcbiAgICBfY2FjaGVbYXBpSURdW3VzZXJuYW1lXSA9IGFsbG93X3J1bl9hcztcbiAgfSxcbiAgLy8gR2V0IHRoZSB2YWx1ZSBvZiBhbiBlbnRyeSB3aXRoIEFQSSBJRCBhbmQgdXNlcm5hbWUgZnJvbSBjYWNoZVxuICBnZXQ6IChhcGlJRDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nKTogbnVtYmVyID0+ICBfY2FjaGVbYXBpSURdICYmIHR5cGVvZiBfY2FjaGVbYXBpSURdW3VzZXJuYW1lXSAhPT0gJ3VuZGVmaW5lZCcgPyBfY2FjaGVbYXBpSURdW3VzZXJuYW1lXSA6IEFQSV9VU0VSX1NUQVRVU19SVU5fQVMuQUxMX0RJU0FCTEVELFxuICAvLyBDaGVjayBpZiBpdCBleGlzdHMgdGhlIEFQSSBJRCBhbmQgdXNlcm5hbWUgaW4gdGhlIGNhY2hlXG4gIGhhczogKGFwaUlEOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IF9jYWNoZVthcGlJRF0gJiYgdHlwZW9mIF9jYWNoZVthcGlJRF1bdXNlcm5hbWVdICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZVxufTtcblxuY29uc3QgbWFuYWdlSG9zdHMgPSBuZXcgTWFuYWdlSG9zdHMoKTtcblxuZXhwb3J0IGNvbnN0IEFQSVVzZXJBbGxvd1J1bkFzID0ge1xuICBhc3luYyBjaGVjayhhcGlJZDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+e1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IGFwaSA9IGF3YWl0IG1hbmFnZUhvc3RzLmdldEhvc3RCeUlkKGFwaUlkKTtcbiAgICAgIGxvZygnQVBJVXNlckFsbG93UnVuQXM6Y2hlY2snLCBgQ2hlY2sgaWYgQVBJIHVzZXIgJHthcGkudXNlcm5hbWV9ICgke2FwaUlkfSkgaGFzIHJ1bl9hc2AsICdkZWJ1ZycpO1xuICAgICAgLy8gQ2hlY2sgaWYgYXBpLnJ1bl9hcyBpcyBmYWxzZSBvciB1bmRlZmluZWQsIHRoZW4gaXQgc2V0IHRvIGZhbHNlIGluIGNhY2hlXG4gICAgICBpZighYXBpLnJ1bl9hcyl7XG4gICAgICAgIENhY2hlSW5NZW1vcnlBUElVc2VyQWxsb3dSdW5Bcy5zZXQoYXBpSWQsIGFwaS51c2VybmFtZSwgQVBJX1VTRVJfU1RBVFVTX1JVTl9BUy5IT1NUX0RJU0FCTEVEKTtcbiAgICAgIH07XG4gICAgICAvLyBDaGVjayBpZiB0aGUgQVBJIHVzZXIgaXMgY2FjaGVkIGFuZCByZXR1cm5zIGl0XG4gICAgICBpZihDYWNoZUluTWVtb3J5QVBJVXNlckFsbG93UnVuQXMuaGFzKGFwaUlkLCBhcGkudXNlcm5hbWUpKXtcbiAgICAgICAgcmV0dXJuIENhY2hlSW5NZW1vcnlBUElVc2VyQWxsb3dSdW5Bcy5nZXQoYXBpSWQsIGFwaS51c2VybmFtZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGlJbnRlcmNlcHRvci5yZXF1ZXN0QXNJbnRlcm5hbFVzZXIoXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnL3NlY3VyaXR5L3VzZXJzL21lJyxcbiAgICAgICAge30sXG4gICAgICAgIHsgYXBpSG9zdElEOiBhcGlJZCB9XG4gICAgICApO1xuICAgICAgY29uc3Qgc3RhdHVzVXNlckFsbG93UnVuQXMgPSByZXNwb25zZS5kYXRhLmRhdGEuYWZmZWN0ZWRfaXRlbXNbMF0uYWxsb3dfcnVuX2FzID8gQVBJX1VTRVJfU1RBVFVTX1JVTl9BUy5FTkFCTEVEIDogQVBJX1VTRVJfU1RBVFVTX1JVTl9BUy5VU0VSX05PVF9BTExPV0VEO1xuXG4gICAgICAvLyBDYWNoZSB0aGUgcnVuX2FzIGZvciB0aGUgQVBJIHVzZXJcbiAgICAgIENhY2hlSW5NZW1vcnlBUElVc2VyQWxsb3dSdW5Bcy5zZXQoYXBpSWQsIGFwaS51c2VybmFtZSwgc3RhdHVzVXNlckFsbG93UnVuQXMpO1xuICAgICAgcmV0dXJuIHN0YXR1c1VzZXJBbGxvd1J1bkFzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBsb2coJ0FQSVVzZXJBbGxvd1J1bkFzOmNoZWNrJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gQVBJX1VTRVJfU1RBVFVTX1JVTl9BUy5BTExfRElTQUJMRUQ7XG4gICAgfVxuICB9LFxuICBhc3luYyBjYW5Vc2UoYXBpSWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyIHwgbmV2ZXI+e1xuICAgIGNvbnN0IEFwaVVzZXJDYW5Vc2VTdGF0dXMgPSBhd2FpdCBBUElVc2VyQWxsb3dSdW5Bcy5jaGVjayhhcGlJZCk7XG4gICAgaWYoQXBpVXNlckNhblVzZVN0YXR1cyA9PT0gQVBJX1VTRVJfU1RBVFVTX1JVTl9BUy5VU0VSX05PVF9BTExPV0VEKXtcbiAgICAgIGNvbnN0IGFwaSA9IGF3YWl0IG1hbmFnZUhvc3RzLmdldEhvc3RCeUlkKGFwaUlkKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIHdpdGggaG9zdCBJRCBbJHthcGlJZH1dIG1pc2NvbmZpZ3VyZWQuIFRoZSBXYXp1aCBBUEkgdXNlciBbJHthcGkudXNlcm5hbWV9XSBpcyBub3QgYWxsb3dlZCB0byB1c2UgW3J1bl9hc10uIEFsbG93IGl0IGluIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb3Igc2V0IFtydW5fYXNdIGhvc3Qgc2V0dGluZyB3aXRoIFtmYWxzZV0gdmFsdWUuYCk7XG4gICAgfVxuICAgIHJldHVybiBBcGlVc2VyQ2FuVXNlU3RhdHVzO1xuICB9XG59O1xuXG4vKipcbiAqIEBleGFtcGxlXG4gKiAgIEhPU1QgPSBzZXQgaW4gd2F6dWgueW1sIGNvbmZpZ1xuICogICBVU0VSID0gc2V0IGluIHVzZXIgaW50ZXJmYWNlXG4gKlxuICogQUxMX0RJU0FCTEVEXG4gKiAgIGJpbmFyeSAwMCA9IGRlY2ltYWwgMCAtLS0+IFVTRVIgMCB5IEhPU1QgMFxuICogXG4gKiBVU0VSX05PVF9BTExPV0VEXG4gKiAgIGJpbmFyeSAwMSA9IGRlY2ltYWwgMSAtLS0+IFVTRVIgMCB5IEhPU1QgMVxuICogXG4gKiBIT1NUX0RJU0FCTEVEXG4gKiAgIGJpbmFyeSAxMCA9IGRlY2ltYWwgMiAtLS0+IFVTRVIgMSB5IEhPU1QgMFxuICogXG4gKiBFTkFCTEVEXG4gKiAgIGJpbmFyeSAxMSA9IGRlY2ltYWwgMyAtLS0+IFVTRVIgMSB5IEhPU1QgMVxuICovXG5leHBvcnQgZW51bSBBUElfVVNFUl9TVEFUVVNfUlVOX0FTe1xuICBBTExfRElTQUJMRUQgPSAwLCAvLyBXYXp1aCBIT1NUIGFuZCBVU0VSIEFQSSB1c2VyIGNvbmZpZ3VyZWQgd2l0aCBydW5fYXM9ZmFsc2Ugb3IgdW5kZWZpbmVkXG4gIFVTRVJfTk9UX0FMTE9XRUQgPSAxLCAvLyBXYXp1aCBIT1NUIEFQSSB1c2VyIGNvbmZpZ3VyZWQgd2l0aCBydW5fYXMgPSBUUlVFIGluIHdhenVoLnltbCBidXQgaXQgaGFzIG5vdCBydW5fYXMgaW4gV2F6dWggQVBJXG4gIEhPU1RfRElTQUJMRUQgPSAyLCAvLyBXYXp1aCBIT1NUIEFQSSB1c2VyIGNvbmZpZ3VyZWQgd2l0aCBydW5fYXM9ZmFsc2UgaW4gd2F6dWgueW1sIGJ1dCBpdCBoYXMgbm90IHJ1bl9hcyBpbiBXYXp1aCBBUElcbiAgRU5BQkxFRCA9IDMgLy8gV2F6dWggQVBJIHVzZXIgY29uZmlndXJlZCB3aXRoIHJ1bl9hcz10cnVlIGFuZCBhbGxvdyBydW5fYXNcbn1cbiJdfQ==