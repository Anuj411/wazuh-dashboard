"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultFactory = void 0;

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DefaultFactory {
  constructor() {
    _defineProperty(this, "platform", '');
  }

  async getCurrentUser(request, context) {
    return {
      username: 'elastic',
      authContext: {
        username: 'elastic'
      },
      hashUsername: (0, _md.default)('elastic')
    };
  }

}

exports.DefaultFactory = DefaultFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6WyJEZWZhdWx0RmFjdG9yeSIsImdldEN1cnJlbnRVc2VyIiwicmVxdWVzdCIsImNvbnRleHQiLCJ1c2VybmFtZSIsImF1dGhDb250ZXh0IiwiaGFzaFVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7OztBQUVPLE1BQU1BLGNBQU4sQ0FBZ0Q7QUFBQTtBQUFBLHNDQUNsQyxFQURrQztBQUFBOztBQUVyRCxRQUFNQyxjQUFOLENBQXFCQyxPQUFyQixFQUEyREMsT0FBM0QsRUFBMkY7QUFDekYsV0FBTztBQUNMQyxNQUFBQSxRQUFRLEVBQUUsU0FETDtBQUVMQyxNQUFBQSxXQUFXLEVBQUU7QUFBRUQsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FGUjtBQUdMRSxNQUFBQSxZQUFZLEVBQUUsaUJBQUksU0FBSjtBQUhULEtBQVA7QUFLRDs7QUFSb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VjdXJpdHlGYWN0b3J5IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IE9wZW5TZWFyY2hEYXNoYm9hcmRzUmVxdWVzdCwgUmVxdWVzdEhhbmRsZXJDb250ZXh0IH0gZnJvbSAnc3JjL2NvcmUvc2VydmVyJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcblxuZXhwb3J0IGNsYXNzIERlZmF1bHRGYWN0b3J5IGltcGxlbWVudHMgSVNlY3VyaXR5RmFjdG9yeXtcbiAgcGxhdGZvcm06IHN0cmluZyA9ICcnO1xuICBhc3luYyBnZXRDdXJyZW50VXNlcihyZXF1ZXN0OiBPcGVuU2VhcmNoRGFzaGJvYXJkc1JlcXVlc3QsIGNvbnRleHQ/OlJlcXVlc3RIYW5kbGVyQ29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogJ2VsYXN0aWMnLFxuICAgICAgYXV0aENvbnRleHQ6IHsgdXNlcm5hbWU6ICdlbGFzdGljJyB9LFxuICAgICAgaGFzaFVzZXJuYW1lOiBtZDUoJ2VsYXN0aWMnKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==