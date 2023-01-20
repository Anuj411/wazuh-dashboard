"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfiguration = getConfiguration;

var _fs = _interopRequireDefault(require("fs"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _constants = require("../../common/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Module to parse the configuration file
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
let cachedConfiguration = null;
let lastAssign = new Date().getTime();

function getConfiguration(isUpdating = false) {
  try {
    const now = new Date().getTime();
    const dateDiffer = now - lastAssign;

    if (!cachedConfiguration || dateDiffer >= _constants.WAZUH_CONFIGURATION_CACHE_TIME || isUpdating) {
      const raw = _fs.default.readFileSync(_constants.WAZUH_DATA_CONFIG_APP_PATH, {
        encoding: 'utf-8'
      });

      const file = _jsYaml.default.load(raw);

      for (const host of file.hosts) {
        Object.keys(host).forEach(k => {
          host[k].password = '*****';
        });
      }

      cachedConfiguration = { ...file
      };
      lastAssign = now;
    }

    return cachedConfiguration;
  } catch (error) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbImNhY2hlZENvbmZpZ3VyYXRpb24iLCJsYXN0QXNzaWduIiwiRGF0ZSIsImdldFRpbWUiLCJnZXRDb25maWd1cmF0aW9uIiwiaXNVcGRhdGluZyIsIm5vdyIsImRhdGVEaWZmZXIiLCJXQVpVSF9DT05GSUdVUkFUSU9OX0NBQ0hFX1RJTUUiLCJyYXciLCJmcyIsInJlYWRGaWxlU3luYyIsIldBWlVIX0RBVEFfQ09ORklHX0FQUF9QQVRIIiwiZW5jb2RpbmciLCJmaWxlIiwieW1sIiwibG9hZCIsImhvc3QiLCJob3N0cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsInBhc3N3b3JkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFXQTs7QUFDQTs7QUFDQTs7OztBQWJBOzs7Ozs7Ozs7OztBQWVBLElBQUlBLG1CQUF3QixHQUFHLElBQS9CO0FBQ0EsSUFBSUMsVUFBa0IsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBekI7O0FBRU8sU0FBU0MsZ0JBQVQsQ0FBMEJDLFVBQW1CLEdBQUcsS0FBaEQsRUFBdUQ7QUFDNUQsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxJQUFJSixJQUFKLEdBQVdDLE9BQVgsRUFBWjtBQUNBLFVBQU1JLFVBQVUsR0FBR0QsR0FBRyxHQUFHTCxVQUF6Qjs7QUFDQSxRQUFJLENBQUNELG1CQUFELElBQXdCTyxVQUFVLElBQUlDLHlDQUF0QyxJQUF3RUgsVUFBNUUsRUFBd0Y7QUFDdEYsWUFBTUksR0FBRyxHQUFHQyxZQUFHQyxZQUFILENBQWdCQyxxQ0FBaEIsRUFBNEM7QUFBRUMsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBNUMsQ0FBWjs7QUFDQSxZQUFNQyxJQUFJLEdBQUdDLGdCQUFJQyxJQUFKLENBQVNQLEdBQVQsQ0FBYjs7QUFFQSxXQUFLLE1BQU1RLElBQVgsSUFBbUJILElBQUksQ0FBQ0ksS0FBeEIsRUFBK0I7QUFDN0JDLFFBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxPQUFsQixDQUEyQkMsQ0FBRCxJQUFPO0FBQy9CTCxVQUFBQSxJQUFJLENBQUNLLENBQUQsQ0FBSixDQUFRQyxRQUFSLEdBQW1CLE9BQW5CO0FBQ0QsU0FGRDtBQUdEOztBQUNEdkIsTUFBQUEsbUJBQW1CLEdBQUcsRUFBRSxHQUFHYztBQUFMLE9BQXRCO0FBQ0FiLE1BQUFBLFVBQVUsR0FBR0ssR0FBYjtBQUNEOztBQUNELFdBQU9OLG1CQUFQO0FBQ0QsR0FoQkQsQ0FnQkUsT0FBT3dCLEtBQVAsRUFBYztBQUNkLFdBQU8sS0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIHRvIHBhcnNlIHRoZSBjb25maWd1cmF0aW9uIGZpbGVcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHltbCBmcm9tICdqcy15YW1sJztcbmltcG9ydCB7IFdBWlVIX0RBVEFfQ09ORklHX0FQUF9QQVRILCBXQVpVSF9DT05GSUdVUkFUSU9OX0NBQ0hFX1RJTUUgfSBmcm9tICcuLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxubGV0IGNhY2hlZENvbmZpZ3VyYXRpb246IGFueSA9IG51bGw7XG5sZXQgbGFzdEFzc2lnbjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWd1cmF0aW9uKGlzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGRhdGVEaWZmZXIgPSBub3cgLSBsYXN0QXNzaWduO1xuICAgIGlmICghY2FjaGVkQ29uZmlndXJhdGlvbiB8fCBkYXRlRGlmZmVyID49IFdBWlVIX0NPTkZJR1VSQVRJT05fQ0FDSEVfVElNRSB8fCBpc1VwZGF0aW5nKSB7XG4gICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMoV0FaVUhfREFUQV9DT05GSUdfQVBQX1BBVEgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgICBjb25zdCBmaWxlID0geW1sLmxvYWQocmF3KTtcblxuICAgICAgZm9yIChjb25zdCBob3N0IG9mIGZpbGUuaG9zdHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaG9zdCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgIGhvc3Rba10ucGFzc3dvcmQgPSAnKioqKionO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhY2hlZENvbmZpZ3VyYXRpb24gPSB7IC4uLmZpbGUgfTtcbiAgICAgIGxhc3RBc3NpZ24gPSBub3c7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRDb25maWd1cmF0aW9uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19