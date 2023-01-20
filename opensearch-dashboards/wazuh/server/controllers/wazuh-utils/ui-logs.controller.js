"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiLogsCtrl = void 0;

var _errorResponse = require("../../lib/error-response");

var _readLastLines = require("read-last-lines");

var _constants = require("../../../common/constants");

var _uiLogger = _interopRequireDefault(require("../../lib/ui-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Class for UI Logs functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// Require some libraries
class UiLogsCtrl {
  /**
   * Constructor
   * @param {*} server
   */
  constructor() {}
  /**
   * Returns Wazuh ui logs
   * @param {Object} response
   * @returns {Array<String>} app logs or ErrorResponse
   */


  async getUiLogs(response) {
    try {
      return _uiLogger.default.initDirectory().then(async () => {
        if (!_uiLogger.default.checkFileExist(_constants.WAZUH_UI_LOGS_RAW_PATH)) {
          return response.ok({
            body: {
              error: 0,
              rawLogs: []
            }
          });
        } else {
          let arrayLog = await this.getUiFileLogs(_constants.WAZUH_UI_LOGS_RAW_PATH);
          return response.ok({
            body: {
              error: 0,
              rawLogs: arrayLog.filter(item => typeof item === 'string' && item.length)
            }
          });
        }
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)(error.message || error, 3036, 500, response);
    }
  }
  /**
   * Add new UI Log entry in ui logs file
   * @param request
   * @param response
   * @returns success message or ErrorResponse
   */


  async createUiLogs(request, response) {
    try {
      const {
        location,
        message,
        level
      } = request.body;
      await _uiLogger.default.log(location, message, level);
      return response.ok({
        body: {
          statusCode: 200,
          error: 0,
          message: 'Log has been added'
        }
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)(error.message || error, 3021, 500, response);
    }
  }
  /**
   * Get UI logs from specific log file
   * @param filepath
   * @returns Array
   */


  async getUiFileLogs(filepath) {
    try {
      const lastLogs = await (0, _readLastLines.read)(filepath, 50);
      return lastLogs.split('\n');
    } catch (err) {
      throw err;
    }
  }

}

exports.UiLogsCtrl = UiLogsCtrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWxvZ3MuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJVaUxvZ3NDdHJsIiwiY29uc3RydWN0b3IiLCJnZXRVaUxvZ3MiLCJyZXNwb25zZSIsInVpTG9nZ2VyIiwiaW5pdERpcmVjdG9yeSIsInRoZW4iLCJjaGVja0ZpbGVFeGlzdCIsIldBWlVIX1VJX0xPR1NfUkFXX1BBVEgiLCJvayIsImJvZHkiLCJlcnJvciIsInJhd0xvZ3MiLCJhcnJheUxvZyIsImdldFVpRmlsZUxvZ3MiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVzc2FnZSIsImNyZWF0ZVVpTG9ncyIsInJlcXVlc3QiLCJsb2NhdGlvbiIsImxldmVsIiwibG9nIiwic3RhdHVzQ29kZSIsImZpbGVwYXRoIiwibGFzdExvZ3MiLCJzcGxpdCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWFBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBakJBOzs7Ozs7Ozs7OztBQVlBO0FBT08sTUFBTUEsVUFBTixDQUFpQjtBQUN0Qjs7OztBQUlBQyxFQUFBQSxXQUFXLEdBQUcsQ0FBRTtBQUVoQjs7Ozs7OztBQUtBLFFBQU1DLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQStEO0FBQzdELFFBQUk7QUFDRixhQUFPQyxrQkFBU0MsYUFBVCxHQUF5QkMsSUFBekIsQ0FBOEIsWUFBWTtBQUMvQyxZQUFJLENBQUNGLGtCQUFTRyxjQUFULENBQXdCQyxpQ0FBeEIsQ0FBTCxFQUFzRDtBQUNwRCxpQkFBT0wsUUFBUSxDQUFDTSxFQUFULENBQVk7QUFDakJDLFlBQUFBLElBQUksRUFBRTtBQUNKQyxjQUFBQSxLQUFLLEVBQUUsQ0FESDtBQUVKQyxjQUFBQSxPQUFPLEVBQUU7QUFGTDtBQURXLFdBQVosQ0FBUDtBQU1ELFNBUEQsTUFPTztBQUNMLGNBQUlDLFFBQVEsR0FBRyxNQUFNLEtBQUtDLGFBQUwsQ0FBbUJOLGlDQUFuQixDQUFyQjtBQUNBLGlCQUFPTCxRQUFRLENBQUNNLEVBQVQsQ0FBWTtBQUNqQkMsWUFBQUEsSUFBSSxFQUFFO0FBQ0pDLGNBQUFBLEtBQUssRUFBRSxDQURIO0FBRUpDLGNBQUFBLE9BQU8sRUFBRUMsUUFBUSxDQUFDRSxNQUFULENBQWlCQyxJQUFELElBQVUsT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsSUFBSSxDQUFDQyxNQUEzRDtBQUZMO0FBRFcsV0FBWixDQUFQO0FBTUQ7QUFDRixPQWpCTSxDQUFQO0FBa0JELEtBbkJELENBbUJFLE9BQU9OLEtBQVAsRUFBYztBQUNkLGFBQU8sa0NBQWNBLEtBQUssQ0FBQ08sT0FBTixJQUFpQlAsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEMsR0FBNUMsRUFBaURSLFFBQWpELENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7O0FBTUEsUUFBTWdCLFlBQU4sQ0FBbUJDLE9BQW5CLEVBQXlEakIsUUFBekQsRUFBd0c7QUFDdEcsUUFBSTtBQUNGLFlBQU07QUFBRWtCLFFBQUFBLFFBQUY7QUFBWUgsUUFBQUEsT0FBWjtBQUFxQkksUUFBQUE7QUFBckIsVUFBK0JGLE9BQU8sQ0FBQ1YsSUFBN0M7QUFDQSxZQUFNTixrQkFBU21CLEdBQVQsQ0FBYUYsUUFBYixFQUF1QkgsT0FBdkIsRUFBZ0NJLEtBQWhDLENBQU47QUFDQSxhQUFPbkIsUUFBUSxDQUFDTSxFQUFULENBQVk7QUFDakJDLFFBQUFBLElBQUksRUFBRTtBQUNKYyxVQUFBQSxVQUFVLEVBQUUsR0FEUjtBQUVKYixVQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKTyxVQUFBQSxPQUFPLEVBQUU7QUFITDtBQURXLE9BQVosQ0FBUDtBQU9ELEtBVkQsQ0FVRSxPQUFPUCxLQUFQLEVBQWM7QUFDZCxhQUFPLGtDQUFjQSxLQUFLLENBQUNPLE9BQU4sSUFBaUJQLEtBQS9CLEVBQXNDLElBQXRDLEVBQTRDLEdBQTVDLEVBQWlEUixRQUFqRCxDQUFQO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O0FBS0EsUUFBTVcsYUFBTixDQUFvQlcsUUFBcEIsRUFBOEI7QUFDNUIsUUFBSTtBQUNGLFlBQU1DLFFBQVEsR0FBRyxNQUFNLHlCQUFLRCxRQUFMLEVBQWUsRUFBZixDQUF2QjtBQUNBLGFBQU9DLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLElBQWYsQ0FBUDtBQUNELEtBSEQsQ0FHRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixZQUFNQSxHQUFOO0FBQ0Q7QUFDRjs7QUF2RXFCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIENsYXNzIGZvciBVSSBMb2dzIGZ1bmN0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuLy8gUmVxdWlyZSBzb21lIGxpYnJhcmllc1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gJy4uLy4uL2xpYi9lcnJvci1yZXNwb25zZSc7XG5pbXBvcnQgeyByZWFkIH0gZnJvbSAncmVhZC1sYXN0LWxpbmVzJztcbmltcG9ydCB7IFdBWlVIX1VJX0xPR1NfUkFXX1BBVEggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkgfSBmcm9tICdzcmMvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHVpTG9nZ2VyIGZyb20gJy4uLy4uL2xpYi91aS1sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVWlMb2dzQ3RybCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0geyp9IHNlcnZlclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFdhenVoIHVpIGxvZ3NcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fSBhcHAgbG9ncyBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBnZXRVaUxvZ3MocmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB1aUxvZ2dlci5pbml0RGlyZWN0b3J5KCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdWlMb2dnZXIuY2hlY2tGaWxlRXhpc3QoV0FaVUhfVUlfTE9HU19SQVdfUEFUSCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICBlcnJvcjogMCxcbiAgICAgICAgICAgICAgcmF3TG9nczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhcnJheUxvZyA9IGF3YWl0IHRoaXMuZ2V0VWlGaWxlTG9ncyhXQVpVSF9VSV9MT0dTX1JBV19QQVRIKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICBlcnJvcjogMCxcbiAgICAgICAgICAgICAgcmF3TG9nczogYXJyYXlMb2cuZmlsdGVyKChpdGVtKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5sZW5ndGgpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IsIDMwMzYsIDUwMCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IFVJIExvZyBlbnRyeSBpbiB1aSBsb2dzIGZpbGVcbiAgICogQHBhcmFtIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHN1Y2Nlc3MgbWVzc2FnZSBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBjcmVhdGVVaUxvZ3MocmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBsb2NhdGlvbiwgbWVzc2FnZSwgbGV2ZWwgfSA9IHJlcXVlc3QuYm9keTtcbiAgICAgIGF3YWl0IHVpTG9nZ2VyLmxvZyhsb2NhdGlvbiwgbWVzc2FnZSwgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICBlcnJvcjogMCxcbiAgICAgICAgICBtZXNzYWdlOiAnTG9nIGhhcyBiZWVuIGFkZGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gRXJyb3JSZXNwb25zZShlcnJvci5tZXNzYWdlIHx8IGVycm9yLCAzMDIxLCA1MDAsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IFVJIGxvZ3MgZnJvbSBzcGVjaWZpYyBsb2cgZmlsZVxuICAgKiBAcGFyYW0gZmlsZXBhdGhcbiAgICogQHJldHVybnMgQXJyYXlcbiAgICovXG4gIGFzeW5jIGdldFVpRmlsZUxvZ3MoZmlsZXBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGFzdExvZ3MgPSBhd2FpdCByZWFkKGZpbGVwYXRoLCA1MCk7XG4gICAgICByZXR1cm4gbGFzdExvZ3Muc3BsaXQoJ1xcbicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuIl19