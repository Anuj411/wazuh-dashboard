"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayAsPromise = void 0;

/**
 * 
 * @param timeMs Time in milliseconds
 * @returns Promise
 */
const delayAsPromise = timeMs => new Promise(resolve => setTimeout(resolve, timeMs));

exports.delayAsPromise = delayAsPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnRzIl0sIm5hbWVzIjpbImRlbGF5QXNQcm9taXNlIiwidGltZU1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS08sTUFBTUEsY0FBYyxHQUFJQyxNQUFELElBQW9CLElBQUlDLE9BQUosQ0FBWUMsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsTUFBVixDQUFqQyxDQUEzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAcGFyYW0gdGltZU1zIFRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gKiBAcmV0dXJucyBQcm9taXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxheUFzUHJvbWlzZSA9ICh0aW1lTXM6IG51bWJlcikgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVNcykpOyJdfQ==