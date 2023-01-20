"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPluginDataPath = void 0;

var _constants = require("./constants");

/**
 * 
 * @param path Path to file or directory
 * @returns Absolute path to the file or directory with the prefix path of app data path
 */
const getPluginDataPath = (path = '') => `${_constants.PLUGIN_PLATFORM_BASE_INSTALLATION_PATH}${path}`;

exports.getPluginDataPath = getPluginDataPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi50cyJdLCJuYW1lcyI6WyJnZXRQbHVnaW5EYXRhUGF0aCIsInBhdGgiLCJQTFVHSU5fUExBVEZPUk1fQkFTRV9JTlNUQUxMQVRJT05fUEFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7OztBQUtPLE1BQU1BLGlCQUFpQixHQUFHLENBQUNDLElBQVksR0FBRyxFQUFoQixLQUFnQyxHQUFFQyxpREFBdUMsR0FBRUQsSUFBSyxFQUExRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMVUdJTl9QTEFURk9STV9CQVNFX0lOU1RBTExBVElPTl9QQVRIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gcGF0aCBQYXRoIHRvIGZpbGUgb3IgZGlyZWN0b3J5XG4gKiBAcmV0dXJucyBBYnNvbHV0ZSBwYXRoIHRvIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3aXRoIHRoZSBwcmVmaXggcGF0aCBvZiBhcHAgZGF0YSBwYXRoXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EYXRhUGF0aCA9IChwYXRoOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PiBgJHtQTFVHSU5fUExBVEZPUk1fQkFTRV9JTlNUQUxMQVRJT05fUEFUSH0ke3BhdGh9YDsiXX0=