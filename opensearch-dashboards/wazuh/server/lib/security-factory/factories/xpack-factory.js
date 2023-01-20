"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XpackFactory = void 0;

var _constants = require("../../../../common/constants");

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class XpackFactory {
  constructor(security) {
    this.security = security;

    _defineProperty(this, "platform", _constants.WAZUH_SECURITY_PLUGIN_XPACK_SECURITY);
  }

  async getCurrentUser(request) {
    try {
      const authContext = await this.security.authc.getCurrentUser(request);
      if (!authContext) return {
        username: 'elastic',
        authContext: {
          username: 'elastic'
        }
      };
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
    return authContext['username'];
  }

}

exports.XpackFactory = XpackFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhwYWNrLWZhY3RvcnkudHMiXSwibmFtZXMiOlsiWHBhY2tGYWN0b3J5IiwiY29uc3RydWN0b3IiLCJzZWN1cml0eSIsIldBWlVIX1NFQ1VSSVRZX1BMVUdJTl9YUEFDS19TRUNVUklUWSIsImdldEN1cnJlbnRVc2VyIiwicmVxdWVzdCIsImF1dGhDb250ZXh0IiwiYXV0aGMiLCJ1c2VybmFtZSIsImdldFVzZXJOYW1lIiwiaGFzaFVzZXJuYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsWUFBTixDQUErQztBQUVwREMsRUFBQUEsV0FBVyxDQUFTQyxRQUFULEVBQXdDO0FBQUEsU0FBL0JBLFFBQStCLEdBQS9CQSxRQUErQjs7QUFBQSxzQ0FEaENDLCtDQUNnQztBQUFFOztBQUVyRCxRQUFNQyxjQUFOLENBQXFCQyxPQUFyQixFQUE2QztBQUMzQyxRQUFJO0FBQ0YsWUFBTUMsV0FBVyxHQUFHLE1BQU0sS0FBS0osUUFBTCxDQUFjSyxLQUFkLENBQW9CSCxjQUFwQixDQUFtQ0MsT0FBbkMsQ0FBMUI7QUFDQSxVQUFHLENBQUNDLFdBQUosRUFBaUIsT0FBTztBQUFDRSxRQUFBQSxRQUFRLEVBQUUsU0FBWDtBQUFzQkYsUUFBQUEsV0FBVyxFQUFFO0FBQUVFLFVBQUFBLFFBQVEsRUFBRTtBQUFaO0FBQW5DLE9BQVA7QUFDakIsWUFBTUEsUUFBUSxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJILFdBQWpCLENBQWpCO0FBQ0EsYUFBTztBQUFFRSxRQUFBQSxRQUFGO0FBQVlGLFFBQUFBLFdBQVo7QUFBeUJJLFFBQUFBLFlBQVksRUFBRSxpQkFBSUYsUUFBSjtBQUF2QyxPQUFQO0FBQ0QsS0FMRCxDQUtFLE9BQU9HLEtBQVAsRUFBYztBQUNkLFlBQU1BLEtBQU47QUFDRDtBQUNGOztBQUVERixFQUFBQSxXQUFXLENBQUNILFdBQUQsRUFBa0I7QUFDM0IsV0FBT0EsV0FBVyxDQUFDLFVBQUQsQ0FBbEI7QUFDRDs7QUFqQm1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlY3VyaXR5RmFjdG9yeSB9IGZyb20gJy4uLydcbmltcG9ydCB7IFNlY3VyaXR5UGx1Z2luU2V0dXAgfSBmcm9tICd4LXBhY2svcGx1Z2lucy9zZWN1cml0eS9zZXJ2ZXInO1xuaW1wb3J0IHsgS2liYW5hUmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL3NlcnZlcic7XG5pbXBvcnQgeyBXQVpVSF9TRUNVUklUWV9QTFVHSU5fWFBBQ0tfU0VDVVJJVFkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcblxuZXhwb3J0IGNsYXNzIFhwYWNrRmFjdG9yeSBpbXBsZW1lbnRzIElTZWN1cml0eUZhY3Rvcnkge1xuICBwbGF0Zm9ybTogc3RyaW5nID0gV0FaVUhfU0VDVVJJVFlfUExVR0lOX1hQQUNLX1NFQ1VSSVRZO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyaXR5OiBTZWN1cml0eVBsdWdpblNldHVwKSB7fVxuXG4gIGFzeW5jIGdldEN1cnJlbnRVc2VyKHJlcXVlc3Q6IEtpYmFuYVJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXV0aENvbnRleHQgPSBhd2FpdCB0aGlzLnNlY3VyaXR5LmF1dGhjLmdldEN1cnJlbnRVc2VyKHJlcXVlc3QpO1xuICAgICAgaWYoIWF1dGhDb250ZXh0KSByZXR1cm4ge3VzZXJuYW1lOiAnZWxhc3RpYycsIGF1dGhDb250ZXh0OiB7IHVzZXJuYW1lOiAnZWxhc3RpYyd9fTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5nZXRVc2VyTmFtZShhdXRoQ29udGV4dCk7XG4gICAgICByZXR1cm4geyB1c2VybmFtZSwgYXV0aENvbnRleHQsIGhhc2hVc2VybmFtZTogbWQ1KHVzZXJuYW1lKSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjsgXG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlck5hbWUoYXV0aENvbnRleHQ6YW55KSB7XG4gICAgcmV0dXJuIGF1dGhDb250ZXh0Wyd1c2VybmFtZSddO1xuICB9XG59Il19