"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenSearchDashboardsSecurityFactory = void 0;

var _constants = require("../../../../common/constants");

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OpenSearchDashboardsSecurityFactory {
  constructor(securityDashboards) {
    this.securityDashboards = securityDashboards;

    _defineProperty(this, "platform", _constants.WAZUH_SECURITY_PLUGIN_OPENSEARCH_DASHBOARDS_SECURITY);
  }

  async getCurrentUser(request, context) {
    try {
      const params = {
        path: `/_opendistro/_security/api/account`,
        method: 'GET'
      };
      const {
        body: authContext
      } = await context.core.opensearch.client.asCurrentUser.transport.request(params);
      const username = this.getUserName(authContext);
      return {
        username,
        authContext,
        hashUsername: (0, _md.default)(username)
      };
    } catch (error) {
      throw error;
    }
  }

  getUserName(authContext) {
    return authContext['user_name'];
  }

}

exports.OpenSearchDashboardsSecurityFactory = OpenSearchDashboardsSecurityFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5zZWFyY2gtZGFzaGJvYXJkcy1zZWN1cml0eS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbIk9wZW5TZWFyY2hEYXNoYm9hcmRzU2VjdXJpdHlGYWN0b3J5IiwiY29uc3RydWN0b3IiLCJzZWN1cml0eURhc2hib2FyZHMiLCJXQVpVSF9TRUNVUklUWV9QTFVHSU5fT1BFTlNFQVJDSF9EQVNIQk9BUkRTX1NFQ1VSSVRZIiwiZ2V0Q3VycmVudFVzZXIiLCJyZXF1ZXN0IiwiY29udGV4dCIsInBhcmFtcyIsInBhdGgiLCJtZXRob2QiLCJib2R5IiwiYXV0aENvbnRleHQiLCJjb3JlIiwib3BlbnNlYXJjaCIsImNsaWVudCIsImFzQ3VycmVudFVzZXIiLCJ0cmFuc3BvcnQiLCJ1c2VybmFtZSIsImdldFVzZXJOYW1lIiwiaGFzaFVzZXJuYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsbUNBQU4sQ0FBc0U7QUFHM0VDLEVBQUFBLFdBQVcsQ0FBU0Msa0JBQVQsRUFBa0M7QUFBQSxTQUF6QkEsa0JBQXlCLEdBQXpCQSxrQkFBeUI7O0FBQUEsc0NBRjFCQywrREFFMEI7QUFDNUM7O0FBRUQsUUFBTUMsY0FBTixDQUFxQkMsT0FBckIsRUFBMkRDLE9BQTNELEVBQTBGO0FBQ3hGLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBQUEsSUFBSSxFQUFHLG9DQURNO0FBRWJDLFFBQUFBLE1BQU0sRUFBRTtBQUZLLE9BQWY7QUFLQSxZQUFNO0FBQUNDLFFBQUFBLElBQUksRUFBRUM7QUFBUCxVQUFzQixNQUFNTCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsVUFBYixDQUF3QkMsTUFBeEIsQ0FBK0JDLGFBQS9CLENBQTZDQyxTQUE3QyxDQUF1RFgsT0FBdkQsQ0FBK0RFLE1BQS9ELENBQWxDO0FBQ0EsWUFBTVUsUUFBUSxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJQLFdBQWpCLENBQWpCO0FBQ0EsYUFBTztBQUFFTSxRQUFBQSxRQUFGO0FBQVlOLFFBQUFBLFdBQVo7QUFBeUJRLFFBQUFBLFlBQVksRUFBRSxpQkFBSUYsUUFBSjtBQUF2QyxPQUFQO0FBQ0QsS0FURCxDQVNFLE9BQU9HLEtBQVAsRUFBYztBQUNkLFlBQU1BLEtBQU47QUFDRDtBQUNGOztBQUVERixFQUFBQSxXQUFXLENBQUNQLFdBQUQsRUFBa0I7QUFDM0IsV0FBT0EsV0FBVyxDQUFDLFdBQUQsQ0FBbEI7QUFDRDs7QUF2QjBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlY3VyaXR5RmFjdG9yeSB9IGZyb20gJy4uJ1xuaW1wb3J0IHsgT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCBSZXF1ZXN0SGFuZGxlckNvbnRleHQgfSBmcm9tICdzcmMvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHsgV0FaVUhfU0VDVVJJVFlfUExVR0lOX09QRU5TRUFSQ0hfREFTSEJPQVJEU19TRUNVUklUWSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xuXG5leHBvcnQgY2xhc3MgT3BlblNlYXJjaERhc2hib2FyZHNTZWN1cml0eUZhY3RvcnkgaW1wbGVtZW50cyBJU2VjdXJpdHlGYWN0b3J5IHtcbiAgcGxhdGZvcm06IHN0cmluZyA9IFdBWlVIX1NFQ1VSSVRZX1BMVUdJTl9PUEVOU0VBUkNIX0RBU0hCT0FSRFNfU0VDVVJJVFk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWN1cml0eURhc2hib2FyZHM6IGFueSkge1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3VycmVudFVzZXIocmVxdWVzdDogT3BlblNlYXJjaERhc2hib2FyZHNSZXF1ZXN0LCBjb250ZXh0OlJlcXVlc3RIYW5kbGVyQ29udGV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHBhdGg6IGAvX29wZW5kaXN0cm8vX3NlY3VyaXR5L2FwaS9hY2NvdW50YCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHtib2R5OiBhdXRoQ29udGV4dH0gPSBhd2FpdCBjb250ZXh0LmNvcmUub3BlbnNlYXJjaC5jbGllbnQuYXNDdXJyZW50VXNlci50cmFuc3BvcnQucmVxdWVzdChwYXJhbXMpO1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLmdldFVzZXJOYW1lKGF1dGhDb250ZXh0KTtcbiAgICAgIHJldHVybiB7IHVzZXJuYW1lLCBhdXRoQ29udGV4dCwgaGFzaFVzZXJuYW1lOiBtZDUodXNlcm5hbWUpIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXJOYW1lKGF1dGhDb250ZXh0OmFueSkge1xuICAgIHJldHVybiBhdXRoQ29udGV4dFsndXNlcl9uYW1lJ11cbiAgfVxufVxuIl19