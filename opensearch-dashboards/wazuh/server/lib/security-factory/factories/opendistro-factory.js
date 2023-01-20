"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpendistroFactory = void 0;

var _constants = require("../../../../common/constants");

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OpendistroFactory {
  constructor(opendistroSecurityKibana) {
    this.opendistroSecurityKibana = opendistroSecurityKibana;

    _defineProperty(this, "platform", _constants.WAZUH_SECURITY_PLUGIN_OPEN_DISTRO_FOR_ELASTICSEARCH);
  }

  async getCurrentUser(request, context) {
    try {
      const params = {
        path: `/_opendistro/_security/api/account`,
        method: 'GET'
      };
      const {
        body: authContext
      } = await context.core.elasticsearch.client.asCurrentUser.transport.request(params);
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

exports.OpendistroFactory = OpendistroFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5kaXN0cm8tZmFjdG9yeS50cyJdLCJuYW1lcyI6WyJPcGVuZGlzdHJvRmFjdG9yeSIsImNvbnN0cnVjdG9yIiwib3BlbmRpc3Ryb1NlY3VyaXR5S2liYW5hIiwiV0FaVUhfU0VDVVJJVFlfUExVR0lOX09QRU5fRElTVFJPX0ZPUl9FTEFTVElDU0VBUkNIIiwiZ2V0Q3VycmVudFVzZXIiLCJyZXF1ZXN0IiwiY29udGV4dCIsInBhcmFtcyIsInBhdGgiLCJtZXRob2QiLCJib2R5IiwiYXV0aENvbnRleHQiLCJjb3JlIiwiZWxhc3RpY3NlYXJjaCIsImNsaWVudCIsImFzQ3VycmVudFVzZXIiLCJ0cmFuc3BvcnQiLCJ1c2VybmFtZSIsImdldFVzZXJOYW1lIiwiaGFzaFVzZXJuYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsaUJBQU4sQ0FBb0Q7QUFHekRDLEVBQUFBLFdBQVcsQ0FBU0Msd0JBQVQsRUFBd0M7QUFBQSxTQUEvQkEsd0JBQStCLEdBQS9CQSx3QkFBK0I7O0FBQUEsc0NBRmhDQyw4REFFZ0M7QUFDbEQ7O0FBRUQsUUFBTUMsY0FBTixDQUFxQkMsT0FBckIsRUFBNkNDLE9BQTdDLEVBQTRFO0FBQzFFLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBQUEsSUFBSSxFQUFHLG9DQURNO0FBRWJDLFFBQUFBLE1BQU0sRUFBRTtBQUZLLE9BQWY7QUFLQSxZQUFNO0FBQUNDLFFBQUFBLElBQUksRUFBRUM7QUFBUCxVQUFzQixNQUFNTCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsYUFBYixDQUEyQkMsTUFBM0IsQ0FBa0NDLGFBQWxDLENBQWdEQyxTQUFoRCxDQUEwRFgsT0FBMUQsQ0FBa0VFLE1BQWxFLENBQWxDO0FBQ0EsWUFBTVUsUUFBUSxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJQLFdBQWpCLENBQWpCO0FBQ0EsYUFBTztBQUFFTSxRQUFBQSxRQUFGO0FBQVlOLFFBQUFBLFdBQVo7QUFBeUJRLFFBQUFBLFlBQVksRUFBRSxpQkFBSUYsUUFBSjtBQUF2QyxPQUFQO0FBQ0QsS0FURCxDQVNFLE9BQU9HLEtBQVAsRUFBYztBQUNkLFlBQU1BLEtBQU47QUFDRDtBQUNGOztBQUVERixFQUFBQSxXQUFXLENBQUNQLFdBQUQsRUFBa0I7QUFDM0IsV0FBT0EsV0FBVyxDQUFDLFdBQUQsQ0FBbEI7QUFDRDs7QUF2QndEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlY3VyaXR5RmFjdG9yeSB9IGZyb20gJy4uLydcbmltcG9ydCB7IEtpYmFuYVJlcXVlc3QsIFJlcXVlc3RIYW5kbGVyQ29udGV4dCB9IGZyb20gJ3NyYy9jb3JlL3NlcnZlcic7XG5pbXBvcnQgeyBXQVpVSF9TRUNVUklUWV9QTFVHSU5fT1BFTl9ESVNUUk9fRk9SX0VMQVNUSUNTRUFSQ0ggfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcblxuZXhwb3J0IGNsYXNzIE9wZW5kaXN0cm9GYWN0b3J5IGltcGxlbWVudHMgSVNlY3VyaXR5RmFjdG9yeSB7XG4gIHBsYXRmb3JtOiBzdHJpbmcgPSBXQVpVSF9TRUNVUklUWV9QTFVHSU5fT1BFTl9ESVNUUk9fRk9SX0VMQVNUSUNTRUFSQ0g7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuZGlzdHJvU2VjdXJpdHlLaWJhbmE6IGFueSkge1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3VycmVudFVzZXIocmVxdWVzdDogS2liYW5hUmVxdWVzdCwgY29udGV4dDpSZXF1ZXN0SGFuZGxlckNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYXRoOiBgL19vcGVuZGlzdHJvL19zZWN1cml0eS9hcGkvYWNjb3VudGAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB7Ym9keTogYXV0aENvbnRleHR9ID0gYXdhaXQgY29udGV4dC5jb3JlLmVsYXN0aWNzZWFyY2guY2xpZW50LmFzQ3VycmVudFVzZXIudHJhbnNwb3J0LnJlcXVlc3QocGFyYW1zKTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5nZXRVc2VyTmFtZShhdXRoQ29udGV4dCk7XG4gICAgICByZXR1cm4geyB1c2VybmFtZSwgYXV0aENvbnRleHQsIGhhc2hVc2VybmFtZTogbWQ1KHVzZXJuYW1lKSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjsgXG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlck5hbWUoYXV0aENvbnRleHQ6YW55KSB7XG4gICAgcmV0dXJuIGF1dGhDb250ZXh0Wyd1c2VyX25hbWUnXVxuICB9XG59Il19