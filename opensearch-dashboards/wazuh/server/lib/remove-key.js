"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanKeys = cleanKeys;

/*
 * Wazuh app - Useful function for removing sensible keys
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
function cleanKeys(response) {
  // Remove agent key
  if (response.data.data.internal_key) {
    response.data.data.internal_key = '********';
  } // Remove cluster key (/com/cluster)


  if (response.data.data.node_type && response.data.data.key) {
    response.data.data.key = '********';
  } // Remove cluster key (/manager/configuration)


  if (response.data.data.cluster && response.data.data.cluster.node_type && response.data.data.cluster.key) {
    response.data.data.cluster.key = '********';
  } // Remove AWS keys


  if (response.data.data.wmodules) {
    response.data.data.wmodules.map(item => {
      if (item['aws-s3']) {
        if (item['aws-s3'].buckets) {
          item['aws-s3'].buckets.map(item => {
            item.access_key = '********';
            item.secret_key = '********';
          });
        }

        if (item['aws-s3'].services) {
          item['aws-s3'].services.map(item => {
            item.access_key = '********';
            item.secret_key = '********';
          });
        }
      }
    });
  } // Remove integrations keys


  if (response.data.data.integration) {
    response.data.data.integration.map(item => item.api_key = '********');
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1rZXkudHMiXSwibmFtZXMiOlsiY2xlYW5LZXlzIiwicmVzcG9uc2UiLCJkYXRhIiwiaW50ZXJuYWxfa2V5Iiwibm9kZV90eXBlIiwia2V5IiwiY2x1c3RlciIsIndtb2R1bGVzIiwibWFwIiwiaXRlbSIsImJ1Y2tldHMiLCJhY2Nlc3Nfa2V5Iiwic2VjcmV0X2tleSIsInNlcnZpY2VzIiwiaW50ZWdyYXRpb24iLCJhcGlfa2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsU0FBVCxDQUFtQkMsUUFBbkIsRUFBdUM7QUFDNUM7QUFDQSxNQUFJQSxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkMsWUFBdkIsRUFBcUM7QUFDbkNGLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxZQUFuQixHQUFrQyxVQUFsQztBQUNELEdBSjJDLENBTTVDOzs7QUFDQSxNQUFJRixRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkUsU0FBbkIsSUFBZ0NILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CRyxHQUF2RCxFQUE0RDtBQUMxREosSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJHLEdBQW5CLEdBQXlCLFVBQXpCO0FBQ0QsR0FUMkMsQ0FXNUM7OztBQUNBLE1BQ0VKLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CSSxPQUFuQixJQUNBTCxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkksT0FBbkIsQ0FBMkJGLFNBRDNCLElBRUFILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CSSxPQUFuQixDQUEyQkQsR0FIN0IsRUFJRTtBQUNBSixJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkksT0FBbkIsQ0FBMkJELEdBQTNCLEdBQWlDLFVBQWpDO0FBQ0QsR0FsQjJDLENBb0I1Qzs7O0FBQ0EsTUFBSUosUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJLLFFBQXZCLEVBQWlDO0FBQy9CTixJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkssUUFBbkIsQ0FBNEJDLEdBQTVCLENBQWdDQyxJQUFJLElBQUk7QUFDdEMsVUFBSUEsSUFBSSxDQUFDLFFBQUQsQ0FBUixFQUFvQjtBQUNsQixZQUFJQSxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWVDLE9BQW5CLEVBQTRCO0FBQzFCRCxVQUFBQSxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWVDLE9BQWYsQ0FBdUJGLEdBQXZCLENBQTJCQyxJQUFJLElBQUk7QUFDakNBLFlBQUFBLElBQUksQ0FBQ0UsVUFBTCxHQUFrQixVQUFsQjtBQUNBRixZQUFBQSxJQUFJLENBQUNHLFVBQUwsR0FBa0IsVUFBbEI7QUFDRCxXQUhEO0FBSUQ7O0FBQ0QsWUFBSUgsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlSSxRQUFuQixFQUE2QjtBQUMzQkosVUFBQUEsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlSSxRQUFmLENBQXdCTCxHQUF4QixDQUE0QkMsSUFBSSxJQUFJO0FBQ2xDQSxZQUFBQSxJQUFJLENBQUNFLFVBQUwsR0FBa0IsVUFBbEI7QUFDQUYsWUFBQUEsSUFBSSxDQUFDRyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7QUFDRixLQWZEO0FBZ0JELEdBdEMyQyxDQXdDNUM7OztBQUNBLE1BQUlYLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CWSxXQUF2QixFQUFvQztBQUNsQ2IsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJZLFdBQW5CLENBQStCTixHQUEvQixDQUFtQ0MsSUFBSSxJQUFLQSxJQUFJLENBQUNNLE9BQUwsR0FBZSxVQUEzRDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gVXNlZnVsIGZ1bmN0aW9uIGZvciByZW1vdmluZyBzZW5zaWJsZSBrZXlzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuS2V5cyhyZXNwb25zZTogYW55KTogYW55IHtcbiAgLy8gUmVtb3ZlIGFnZW50IGtleVxuICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLmludGVybmFsX2tleSkge1xuICAgIHJlc3BvbnNlLmRhdGEuZGF0YS5pbnRlcm5hbF9rZXkgPSAnKioqKioqKionO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGNsdXN0ZXIga2V5ICgvY29tL2NsdXN0ZXIpXG4gIGlmIChyZXNwb25zZS5kYXRhLmRhdGEubm9kZV90eXBlICYmIHJlc3BvbnNlLmRhdGEuZGF0YS5rZXkpIHtcbiAgICByZXNwb25zZS5kYXRhLmRhdGEua2V5ID0gJyoqKioqKioqJztcbiAgfVxuXG4gIC8vIFJlbW92ZSBjbHVzdGVyIGtleSAoL21hbmFnZXIvY29uZmlndXJhdGlvbilcbiAgaWYgKFxuICAgIHJlc3BvbnNlLmRhdGEuZGF0YS5jbHVzdGVyICYmXG4gICAgcmVzcG9uc2UuZGF0YS5kYXRhLmNsdXN0ZXIubm9kZV90eXBlICYmXG4gICAgcmVzcG9uc2UuZGF0YS5kYXRhLmNsdXN0ZXIua2V5XG4gICkge1xuICAgIHJlc3BvbnNlLmRhdGEuZGF0YS5jbHVzdGVyLmtleSA9ICcqKioqKioqKic7XG4gIH1cblxuICAvLyBSZW1vdmUgQVdTIGtleXNcbiAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS53bW9kdWxlcykge1xuICAgIHJlc3BvbnNlLmRhdGEuZGF0YS53bW9kdWxlcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbVsnYXdzLXMzJ10pIHtcbiAgICAgICAgaWYgKGl0ZW1bJ2F3cy1zMyddLmJ1Y2tldHMpIHtcbiAgICAgICAgICBpdGVtWydhd3MtczMnXS5idWNrZXRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWNjZXNzX2tleSA9ICcqKioqKioqKic7XG4gICAgICAgICAgICBpdGVtLnNlY3JldF9rZXkgPSAnKioqKioqKionO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtWydhd3MtczMnXS5zZXJ2aWNlcykge1xuICAgICAgICAgIGl0ZW1bJ2F3cy1zMyddLnNlcnZpY2VzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWNjZXNzX2tleSA9ICcqKioqKioqKic7XG4gICAgICAgICAgICBpdGVtLnNlY3JldF9rZXkgPSAnKioqKioqKionO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgaW50ZWdyYXRpb25zIGtleXNcbiAgaWYgKHJlc3BvbnNlLmRhdGEuZGF0YS5pbnRlZ3JhdGlvbikge1xuICAgIHJlc3BvbnNlLmRhdGEuZGF0YS5pbnRlZ3JhdGlvbi5tYXAoaXRlbSA9PiAoaXRlbS5hcGlfa2V5ID0gJyoqKioqKioqJykpO1xuICB9XG59XG4iXX0=