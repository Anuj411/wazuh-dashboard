"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "WazuhPluginSetup", {
  enumerable: true,
  get: function () {
    return _types.WazuhPluginSetup;
  }
});
Object.defineProperty(exports, "WazuhPluginStart", {
  enumerable: true,
  get: function () {
    return _types.WazuhPluginStart;
  }
});

var _plugin = require("./plugin");

var _types = require("./types");

//  This exports static code and TypeScript types,
//  as well as, plugin platform `plugin()` initializer.
function plugin(initializerContext) {
  return new _plugin.WazuhPlugin(initializerContext);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbInBsdWdpbiIsImluaXRpYWxpemVyQ29udGV4dCIsIldhenVoUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBU0E7O0FBUEE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLGtCQUFoQixFQUE4RDtBQUNuRSxTQUFPLElBQUlDLG1CQUFKLENBQWdCRCxrQkFBaEIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0IH0gZnJvbSAnb3BlbnNlYXJjaF9kYXNoYm9hcmRzL3NlcnZlcic7XG5cbmltcG9ydCB7IFdhenVoUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW4nO1xuXG4vLyAgVGhpcyBleHBvcnRzIHN0YXRpYyBjb2RlIGFuZCBUeXBlU2NyaXB0IHR5cGVzLFxuLy8gIGFzIHdlbGwgYXMsIHBsdWdpbiBwbGF0Zm9ybSBgcGx1Z2luKClgIGluaXRpYWxpemVyLlxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2luKGluaXRpYWxpemVyQ29udGV4dDogUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0KSB7XG4gIHJldHVybiBuZXcgV2F6dWhQbHVnaW4oaW5pdGlhbGl6ZXJDb250ZXh0KTtcbn1cblxuZXhwb3J0IHsgV2F6dWhQbHVnaW5TZXR1cCwgV2F6dWhQbHVnaW5TdGFydCB9IGZyb20gJy4vdHlwZXMnO1xuIl19