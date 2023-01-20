"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WazuhUtilsCtrl = void 0;

var _errorResponse = require("../../lib/error-response");

var _getConfiguration = require("../../lib/get-configuration");

var _readLastLines = require("read-last-lines");

var _updateConfiguration = require("../../lib/update-configuration");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _constants = require("../../../common/constants");

var _manageHosts = require("../../lib/manage-hosts");

var _cookie = require("../../lib/cookie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Class for Wazuh-API functions
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
const updateConfigurationFile = new _updateConfiguration.UpdateConfigurationFile();

class WazuhUtilsCtrl {
  /**
   * Constructor
   * @param {*} server
   */
  constructor() {
    this.manageHosts = new _manageHosts.ManageHosts();
  }
  /**
   * Returns the wazuh.yml file parsed
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} Configuration File or ErrorResponse
   */


  getConfigurationFile(context, request, response) {
    try {
      const configFile = (0, _getConfiguration.getConfiguration)();
      return response.ok({
        body: {
          statusCode: 200,
          error: 0,
          data: configFile || {}
        }
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)(error.message || error, 3019, 500, response);
    }
  }
  /**
   * Returns the wazuh.yml file in raw
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} Configuration File or ErrorResponse
   */


  async updateConfigurationFile(context, request, response) {
    try {
      // Check if user has administrator role in token
      const token = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-token');

      if (!token) {
        return (0, _errorResponse.ErrorResponse)('No token provided', 401, 401, response);
      }

      ;
      const decodedToken = (0, _jwtDecode.default)(token);

      if (!decodedToken) {
        return (0, _errorResponse.ErrorResponse)('No permissions in token', 401, 401, response);
      }

      ;

      if (!decodedToken.rbac_roles || !decodedToken.rbac_roles.includes(_constants.WAZUH_ROLE_ADMINISTRATOR_ID)) {
        return (0, _errorResponse.ErrorResponse)('No administrator role', 401, 401, response);
      }

      ;
      response; // Check the provided token is valid

      const apiHostID = (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-api');

      if (!apiHostID) {
        return (0, _errorResponse.ErrorResponse)('No API id provided', 401, 401, response);
      }

      ;
      const responseTokenIsWorking = await context.wazuh.api.client.asCurrentUser.request('GET', '/', {}, {
        apiHostID
      });

      if (responseTokenIsWorking.status !== 200) {
        return (0, _errorResponse.ErrorResponse)('Token is not valid', 401, 401, response);
      }

      ;
      const result = await updateConfigurationFile.updateConfiguration(request);
      return response.ok({
        body: {
          statusCode: 200,
          error: 0,
          data: result
        }
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)(error.message || error, 3021, 500, response);
    }
  }
  /**
   * Returns Wazuh app logs
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Array<String>} app logs or ErrorResponse
   */


  async getAppLogs(context, request, response) {
    try {
      const lastLogs = await (0, _readLastLines.read)(_constants.WAZUH_DATA_LOGS_RAW_PATH, 50);
      const spliterLog = lastLogs.split('\n');
      return spliterLog && Array.isArray(spliterLog) ? response.ok({
        body: {
          error: 0,
          lastLogs: spliterLog.filter(item => typeof item === 'string' && item.length)
        }
      }) : response.ok({
        error: 0,
        lastLogs: []
      });
    } catch (error) {
      return (0, _errorResponse.ErrorResponse)(error.message || error, 3036, 500, response);
    }
  }

}

exports.WazuhUtilsCtrl = WazuhUtilsCtrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhenVoLXV0aWxzLnRzIl0sIm5hbWVzIjpbInVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlIiwiVXBkYXRlQ29uZmlndXJhdGlvbkZpbGUiLCJXYXp1aFV0aWxzQ3RybCIsImNvbnN0cnVjdG9yIiwibWFuYWdlSG9zdHMiLCJNYW5hZ2VIb3N0cyIsImdldENvbmZpZ3VyYXRpb25GaWxlIiwiY29udGV4dCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbmZpZ0ZpbGUiLCJvayIsImJvZHkiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInRva2VuIiwiaGVhZGVycyIsImNvb2tpZSIsImRlY29kZWRUb2tlbiIsInJiYWNfcm9sZXMiLCJpbmNsdWRlcyIsIldBWlVIX1JPTEVfQURNSU5JU1RSQVRPUl9JRCIsImFwaUhvc3RJRCIsInJlc3BvbnNlVG9rZW5Jc1dvcmtpbmciLCJ3YXp1aCIsImFwaSIsImNsaWVudCIsImFzQ3VycmVudFVzZXIiLCJzdGF0dXMiLCJyZXN1bHQiLCJ1cGRhdGVDb25maWd1cmF0aW9uIiwiZ2V0QXBwTG9ncyIsImxhc3RMb2dzIiwiV0FaVUhfREFUQV9MT0dTX1JBV19QQVRIIiwic3BsaXRlckxvZyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiaXRlbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBckJBOzs7Ozs7Ozs7OztBQVlBO0FBV0EsTUFBTUEsdUJBQXVCLEdBQUcsSUFBSUMsNENBQUosRUFBaEM7O0FBRU8sTUFBTUMsY0FBTixDQUFxQjtBQUMxQjs7OztBQUlBQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixTQUFLQyxXQUFMLEdBQW1CLElBQUlDLHdCQUFKLEVBQW5CO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0FDLEVBQUFBLG9CQUFvQixDQUFDQyxPQUFELEVBQWlDQyxPQUFqQyxFQUF1RUMsUUFBdkUsRUFBc0g7QUFDeEksUUFBSTtBQUNGLFlBQU1DLFVBQVUsR0FBRyx5Q0FBbkI7QUFFQSxhQUFPRCxRQUFRLENBQUNFLEVBQVQsQ0FBWTtBQUNqQkMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLFVBQVUsRUFBRSxHQURSO0FBRUpDLFVBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pDLFVBQUFBLElBQUksRUFBRUwsVUFBVSxJQUFJO0FBSGhCO0FBRFcsT0FBWixDQUFQO0FBT0QsS0FWRCxDQVVFLE9BQU9JLEtBQVAsRUFBYztBQUNkLGFBQU8sa0NBQWNBLEtBQUssQ0FBQ0UsT0FBTixJQUFpQkYsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEMsR0FBNUMsRUFBaURMLFFBQWpELENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7OztBQU9BLFFBQU1ULHVCQUFOLENBQThCTyxPQUE5QixFQUE4REMsT0FBOUQsRUFBb0dDLFFBQXBHLEVBQW1KO0FBQ2pKLFFBQUk7QUFDRjtBQUNBLFlBQU1RLEtBQUssR0FBRyxrQ0FBcUJULE9BQU8sQ0FBQ1UsT0FBUixDQUFnQkMsTUFBckMsRUFBNEMsVUFBNUMsQ0FBZDs7QUFDQSxVQUFHLENBQUNGLEtBQUosRUFBVTtBQUNSLGVBQU8sa0NBQWMsbUJBQWQsRUFBbUMsR0FBbkMsRUFBd0MsR0FBeEMsRUFBNkNSLFFBQTdDLENBQVA7QUFDRDs7QUFBQTtBQUNELFlBQU1XLFlBQVksR0FBRyx3QkFBVUgsS0FBVixDQUFyQjs7QUFDQSxVQUFHLENBQUNHLFlBQUosRUFBaUI7QUFDZixlQUFPLGtDQUFjLHlCQUFkLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1EWCxRQUFuRCxDQUFQO0FBQ0Q7O0FBQUE7O0FBQ0QsVUFBRyxDQUFDVyxZQUFZLENBQUNDLFVBQWQsSUFBNEIsQ0FBQ0QsWUFBWSxDQUFDQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ0Msc0NBQWpDLENBQWhDLEVBQThGO0FBQzVGLGVBQU8sa0NBQWMsdUJBQWQsRUFBdUMsR0FBdkMsRUFBNEMsR0FBNUMsRUFBaURkLFFBQWpELENBQVA7QUFDRDs7QUFBQTtBQUFDQSxNQUFBQSxRQUFRLENBWlIsQ0FhRjs7QUFDQSxZQUFNZSxTQUFTLEdBQUcsa0NBQXFCaEIsT0FBTyxDQUFDVSxPQUFSLENBQWdCQyxNQUFyQyxFQUE0QyxRQUE1QyxDQUFsQjs7QUFDQSxVQUFJLENBQUNLLFNBQUwsRUFBZ0I7QUFDZCxlQUFPLGtDQUFjLG9CQUFkLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDZixRQUE5QyxDQUFQO0FBQ0Q7O0FBQUE7QUFDRCxZQUFNZ0Isc0JBQXNCLEdBQUcsTUFBTWxCLE9BQU8sQ0FBQ21CLEtBQVIsQ0FBY0MsR0FBZCxDQUFrQkMsTUFBbEIsQ0FBeUJDLGFBQXpCLENBQXVDckIsT0FBdkMsQ0FBK0MsS0FBL0MsRUFBc0QsR0FBdEQsRUFBMkQsRUFBM0QsRUFBK0Q7QUFBQ2dCLFFBQUFBO0FBQUQsT0FBL0QsQ0FBckM7O0FBQ0EsVUFBR0Msc0JBQXNCLENBQUNLLE1BQXZCLEtBQWtDLEdBQXJDLEVBQXlDO0FBQ3ZDLGVBQU8sa0NBQWMsb0JBQWQsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOENyQixRQUE5QyxDQUFQO0FBQ0Q7O0FBQUE7QUFDRCxZQUFNc0IsTUFBTSxHQUFHLE1BQU0vQix1QkFBdUIsQ0FBQ2dDLG1CQUF4QixDQUE0Q3hCLE9BQTVDLENBQXJCO0FBQ0EsYUFBT0MsUUFBUSxDQUFDRSxFQUFULENBQVk7QUFDakJDLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxVQUFVLEVBQUUsR0FEUjtBQUVKQyxVQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKQyxVQUFBQSxJQUFJLEVBQUVnQjtBQUhGO0FBRFcsT0FBWixDQUFQO0FBT0QsS0E5QkQsQ0E4QkUsT0FBT2pCLEtBQVAsRUFBYztBQUNkLGFBQU8sa0NBQWNBLEtBQUssQ0FBQ0UsT0FBTixJQUFpQkYsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEMsR0FBNUMsRUFBaURMLFFBQWpELENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7OztBQU9BLFFBQU13QixVQUFOLENBQWlCMUIsT0FBakIsRUFBaURDLE9BQWpELEVBQXVGQyxRQUF2RixFQUFzSTtBQUNwSSxRQUFJO0FBQ0YsWUFBTXlCLFFBQVEsR0FBRyxNQUFNLHlCQUNyQkMsbUNBRHFCLEVBRXJCLEVBRnFCLENBQXZCO0FBSUEsWUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxJQUFmLENBQW5CO0FBQ0EsYUFBT0QsVUFBVSxJQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsVUFBZCxDQUFkLEdBQ0gzQixRQUFRLENBQUNFLEVBQVQsQ0FBWTtBQUNaQyxRQUFBQSxJQUFJLEVBQUU7QUFDSkUsVUFBQUEsS0FBSyxFQUFFLENBREg7QUFFSm9CLFVBQUFBLFFBQVEsRUFBRUUsVUFBVSxDQUFDSSxNQUFYLENBQ1JDLElBQUksSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQWhCLElBQTRCQSxJQUFJLENBQUNDLE1BRGpDO0FBRk47QUFETSxPQUFaLENBREcsR0FTSGpDLFFBQVEsQ0FBQ0UsRUFBVCxDQUFZO0FBQUVHLFFBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlvQixRQUFBQSxRQUFRLEVBQUU7QUFBdEIsT0FBWixDQVRKO0FBVUQsS0FoQkQsQ0FnQkUsT0FBT3BCLEtBQVAsRUFBYztBQUNkLGFBQU8sa0NBQWNBLEtBQUssQ0FBQ0UsT0FBTixJQUFpQkYsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEMsR0FBNUMsRUFBaURMLFFBQWpELENBQVA7QUFDRDtBQUNGOztBQXRHeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gQ2xhc3MgZm9yIFdhenVoLUFQSSBmdW5jdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5cbi8vIFJlcXVpcmUgc29tZSBsaWJyYXJpZXNcbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9saWIvZXJyb3ItcmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9nZXQtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyByZWFkIH0gZnJvbSAncmVhZC1sYXN0LWxpbmVzJztcbmltcG9ydCB7IFVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlIH0gZnJvbSAnLi4vLi4vbGliL3VwZGF0ZS1jb25maWd1cmF0aW9uJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyBXQVpVSF9ST0xFX0FETUlOSVNUUkFUT1JfSUQsIFdBWlVIX0RBVEFfTE9HU19SQVdfUEFUSCwgV0FaVUhfVUlfTE9HU19SQVdfUEFUSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTWFuYWdlSG9zdHMgfSBmcm9tICcuLi8uLi9saWIvbWFuYWdlLWhvc3RzJztcbmltcG9ydCB7IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgUmVxdWVzdEhhbmRsZXJDb250ZXh0LCBPcGVuU2VhcmNoRGFzaGJvYXJkc1Jlc3BvbnNlRmFjdG9yeSB9IGZyb20gJ3NyYy9jb3JlL3NlcnZlcic7XG5pbXBvcnQgeyBnZXRDb29raWVWYWx1ZUJ5TmFtZSB9IGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuXG5jb25zdCB1cGRhdGVDb25maWd1cmF0aW9uRmlsZSA9IG5ldyBVcGRhdGVDb25maWd1cmF0aW9uRmlsZSgpO1xuXG5leHBvcnQgY2xhc3MgV2F6dWhVdGlsc0N0cmwge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHsqfSBzZXJ2ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFuYWdlSG9zdHMgPSBuZXcgTWFuYWdlSG9zdHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3YXp1aC55bWwgZmlsZSBwYXJzZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENvbmZpZ3VyYXRpb24gRmlsZSBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBnZXRDb25maWd1cmF0aW9uRmlsZShjb250ZXh0OiBSZXF1ZXN0SGFuZGxlckNvbnRleHQsIHJlcXVlc3Q6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgcmVzcG9uc2U6IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZ0ZpbGUgPSBnZXRDb25maWd1cmF0aW9uKCk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5vayh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgZXJyb3I6IDAsXG4gICAgICAgICAgZGF0YTogY29uZmlnRmlsZSB8fCB7fVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgMzAxOSwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdhenVoLnltbCBmaWxlIGluIHJhd1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICogQHJldHVybnMge09iamVjdH0gQ29uZmlndXJhdGlvbiBGaWxlIG9yIEVycm9yUmVzcG9uc2VcbiAgICovXG4gIGFzeW5jIHVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlKGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgYWRtaW5pc3RyYXRvciByb2xlIGluIHRva2VuXG4gICAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZVZhbHVlQnlOYW1lKHJlcXVlc3QuaGVhZGVycy5jb29raWUsJ3d6LXRva2VuJyk7XG4gICAgICBpZighdG9rZW4pe1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnTm8gdG9rZW4gcHJvdmlkZWQnLCA0MDEsIDQwMSwgcmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgICBpZighZGVjb2RlZFRva2VuKXtcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoJ05vIHBlcm1pc3Npb25zIGluIHRva2VuJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBpZighZGVjb2RlZFRva2VuLnJiYWNfcm9sZXMgfHwgIWRlY29kZWRUb2tlbi5yYmFjX3JvbGVzLmluY2x1ZGVzKFdBWlVIX1JPTEVfQURNSU5JU1RSQVRPUl9JRCkpe1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnTm8gYWRtaW5pc3RyYXRvciByb2xlJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07cmVzcG9uc2VcbiAgICAgIC8vIENoZWNrIHRoZSBwcm92aWRlZCB0b2tlbiBpcyB2YWxpZFxuICAgICAgY29uc3QgYXBpSG9zdElEID0gZ2V0Q29va2llVmFsdWVCeU5hbWUocmVxdWVzdC5oZWFkZXJzLmNvb2tpZSwnd3otYXBpJyk7XG4gICAgICBpZiggIWFwaUhvc3RJRCApe1xuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSgnTm8gQVBJIGlkIHByb3ZpZGVkJywgNDAxLCA0MDEsIHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZVRva2VuSXNXb3JraW5nID0gYXdhaXQgY29udGV4dC53YXp1aC5hcGkuY2xpZW50LmFzQ3VycmVudFVzZXIucmVxdWVzdCgnR0VUJywgJy8nLCB7fSwge2FwaUhvc3RJRH0pO1xuICAgICAgaWYocmVzcG9uc2VUb2tlbklzV29ya2luZy5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgIHJldHVybiBFcnJvclJlc3BvbnNlKCdUb2tlbiBpcyBub3QgdmFsaWQnLCA0MDEsIDQwMSwgcmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlLnVwZGF0ZUNvbmZpZ3VyYXRpb24ocmVxdWVzdCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgIGVycm9yOiAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgMzAyMSwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgV2F6dWggYXBwIGxvZ3NcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fSBhcHAgbG9ncyBvciBFcnJvclJlc3BvbnNlXG4gICAqL1xuICBhc3luYyBnZXRBcHBMb2dzKGNvbnRleHQ6IFJlcXVlc3RIYW5kbGVyQ29udGV4dCwgcmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCByZXNwb25zZTogT3BlblNlYXJjaERhc2hib2FyZHNSZXNwb25zZUZhY3RvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGFzdExvZ3MgPSBhd2FpdCByZWFkKFxuICAgICAgICBXQVpVSF9EQVRBX0xPR1NfUkFXX1BBVEgsXG4gICAgICAgIDUwXG4gICAgICApO1xuICAgICAgY29uc3Qgc3BsaXRlckxvZyA9IGxhc3RMb2dzLnNwbGl0KCdcXG4nKTtcbiAgICAgIHJldHVybiBzcGxpdGVyTG9nICYmIEFycmF5LmlzQXJyYXkoc3BsaXRlckxvZylcbiAgICAgICAgPyByZXNwb25zZS5vayh7XG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgZXJyb3I6IDAsXG4gICAgICAgICAgICBsYXN0TG9nczogc3BsaXRlckxvZy5maWx0ZXIoXG4gICAgICAgICAgICAgIGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0ubGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICA6IHJlc3BvbnNlLm9rKHsgZXJyb3I6IDAsIGxhc3RMb2dzOiBbXSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSB8fCBlcnJvciwgMzAzNiwgNTAwLCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cblxufVxuIl19