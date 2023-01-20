"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = Base;

/*
 * Wazuh app - Base query for reporting queries
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
function Base(pattern, filters, gte, lte) {
  return {
    // index: pattern,
    from: 0,
    size: 500,
    aggs: {},
    sort: [],
    script_fields: {},
    query: {
      bool: {
        must: [{
          query_string: {
            query: filters,
            analyze_wildcard: true,
            default_field: '*'
          }
        }, {
          range: {
            timestamp: {
              gte: gte,
              lte: lte,
              format: 'epoch_millis'
            }
          }
        }],
        must_not: []
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtcXVlcnkudHMiXSwibmFtZXMiOlsiQmFzZSIsInBhdHRlcm4iLCJmaWx0ZXJzIiwiZ3RlIiwibHRlIiwiZnJvbSIsInNpemUiLCJhZ2dzIiwic29ydCIsInNjcmlwdF9maWVsZHMiLCJxdWVyeSIsImJvb2wiLCJtdXN0IiwicXVlcnlfc3RyaW5nIiwiYW5hbHl6ZV93aWxkY2FyZCIsImRlZmF1bHRfZmllbGQiLCJyYW5nZSIsInRpbWVzdGFtcCIsImZvcm1hdCIsIm11c3Rfbm90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQStCQyxPQUEvQixFQUE2Q0MsR0FBN0MsRUFBMERDLEdBQTFELEVBQXVFO0FBQzVFLFNBQU87QUFDTDtBQUVBQyxJQUFBQSxJQUFJLEVBQUUsQ0FIRDtBQUlMQyxJQUFBQSxJQUFJLEVBQUUsR0FKRDtBQUtMQyxJQUFBQSxJQUFJLEVBQUUsRUFMRDtBQU1MQyxJQUFBQSxJQUFJLEVBQUUsRUFORDtBQU9MQyxJQUFBQSxhQUFhLEVBQUUsRUFQVjtBQVFMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLElBQUksRUFBRSxDQUNKO0FBQ0VDLFVBQUFBLFlBQVksRUFBRTtBQUNaSCxZQUFBQSxLQUFLLEVBQUVSLE9BREs7QUFFWlksWUFBQUEsZ0JBQWdCLEVBQUUsSUFGTjtBQUdaQyxZQUFBQSxhQUFhLEVBQUU7QUFISDtBQURoQixTQURJLEVBUUo7QUFDRUMsVUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFlBQUFBLFNBQVMsRUFBRTtBQUNUZCxjQUFBQSxHQUFHLEVBQUVBLEdBREk7QUFFVEMsY0FBQUEsR0FBRyxFQUFFQSxHQUZJO0FBR1RjLGNBQUFBLE1BQU0sRUFBRTtBQUhDO0FBRE47QUFEVCxTQVJJLENBREY7QUFtQkpDLFFBQUFBLFFBQVEsRUFBRTtBQW5CTjtBQUREO0FBUkYsR0FBUDtBQWdDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBCYXNlIHF1ZXJ5IGZvciByZXBvcnRpbmcgcXVlcmllc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlKHBhdHRlcm46IHN0cmluZywgZmlsdGVyczogYW55LCBndGU6IG51bWJlciwgbHRlOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBpbmRleDogcGF0dGVybixcbiAgICBcbiAgICBmcm9tOiAwLFxuICAgIHNpemU6IDUwMCxcbiAgICBhZ2dzOiB7fSxcbiAgICBzb3J0OiBbXSxcbiAgICBzY3JpcHRfZmllbGRzOiB7fSxcbiAgICBxdWVyeToge1xuICAgICAgYm9vbDoge1xuICAgICAgICBtdXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnlfc3RyaW5nOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBmaWx0ZXJzLFxuICAgICAgICAgICAgICBhbmFseXplX3dpbGRjYXJkOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0X2ZpZWxkOiAnKidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgIHRpbWVzdGFtcDoge1xuICAgICAgICAgICAgICAgIGd0ZTogZ3RlLFxuICAgICAgICAgICAgICAgIGx0ZTogbHRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ2Vwb2NoX21pbGxpcydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbXVzdF9ub3Q6IFtdXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19