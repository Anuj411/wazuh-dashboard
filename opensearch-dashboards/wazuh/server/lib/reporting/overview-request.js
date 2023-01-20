"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topLevel15 = void 0;

var _baseQuery = require("./base-query");

var _constants = require("../../../common/constants");

/*
 * Wazuh app - Specific methods to fetch Wazuh overview data from Elasticsearch
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

/**
 * Returns top 3 agents with level 15 alerts
 * @param {*} context Endpoint context
 * @param {Number} gte Timestamp (ms) from
 * @param {Number} lte Timestamp (ms) to
 * @param {String} filters E.g: cluster.name: wazuh AND rule.groups: vulnerability
 * @returns {Array<String>} E.g:['000','130','300']
 */
const topLevel15 = async (context, gte, lte, filters, pattern = _constants.WAZUH_ALERTS_PATTERN) => {
  try {
    const base = {};
    Object.assign(base, (0, _baseQuery.Base)(pattern, filters, gte, lte));
    Object.assign(base.aggs, {
      '2': {
        terms: {
          field: 'agent.id',
          size: 3,
          order: {
            _count: 'desc'
          }
        }
      }
    });
    base.query.bool.must.push({
      match_phrase: {
        'rule.level': {
          query: 15
        }
      }
    });
    const response = await context.core.opensearch.client.asCurrentUser.search({
      index: pattern,
      body: base
    });
    const {
      buckets
    } = response.body.aggregations['2'];
    return buckets.map(item => item.key);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.topLevel15 = topLevel15;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXJlcXVlc3QudHMiXSwibmFtZXMiOlsidG9wTGV2ZWwxNSIsImNvbnRleHQiLCJndGUiLCJsdGUiLCJmaWx0ZXJzIiwicGF0dGVybiIsIldBWlVIX0FMRVJUU19QQVRURVJOIiwiYmFzZSIsIk9iamVjdCIsImFzc2lnbiIsImFnZ3MiLCJ0ZXJtcyIsImZpZWxkIiwic2l6ZSIsIm9yZGVyIiwiX2NvdW50IiwicXVlcnkiLCJib29sIiwibXVzdCIsInB1c2giLCJtYXRjaF9waHJhc2UiLCJyZXNwb25zZSIsImNvcmUiLCJvcGVuc2VhcmNoIiwiY2xpZW50IiwiYXNDdXJyZW50VXNlciIsInNlYXJjaCIsImluZGV4IiwiYm9keSIsImJ1Y2tldHMiLCJhZ2dyZWdhdGlvbnMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0E7O0FBQ0E7O0FBWkE7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7OztBQVFPLE1BQU1BLFVBQVUsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEJDLE9BQTFCLEVBQW1DQyxPQUFPLEdBQUdDLCtCQUE3QyxLQUFzRTtBQUM5RixNQUFJO0FBQ0YsVUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQUMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNGLElBQWQsRUFBb0IscUJBQUtGLE9BQUwsRUFBY0QsT0FBZCxFQUF1QkYsR0FBdkIsRUFBNEJDLEdBQTVCLENBQXBCO0FBRUFLLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixJQUFJLENBQUNHLElBQW5CLEVBQXlCO0FBQ3ZCLFdBQUs7QUFDSEMsUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLEtBQUssRUFBRSxVQURGO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUZEO0FBR0xDLFVBQUFBLEtBQUssRUFBRTtBQUNMQyxZQUFBQSxNQUFNLEVBQUU7QUFESDtBQUhGO0FBREo7QUFEa0IsS0FBekI7QUFZQVIsSUFBQUEsSUFBSSxDQUFDUyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCQyxJQUFyQixDQUEwQjtBQUN4QkMsTUFBQUEsWUFBWSxFQUFFO0FBQ1osc0JBQWM7QUFDWkosVUFBQUEsS0FBSyxFQUFFO0FBREs7QUFERjtBQURVLEtBQTFCO0FBT0EsVUFBTUssUUFBUSxHQUFHLE1BQU1wQixPQUFPLENBQUNxQixJQUFSLENBQWFDLFVBQWIsQ0FBd0JDLE1BQXhCLENBQStCQyxhQUEvQixDQUE2Q0MsTUFBN0MsQ0FBb0Q7QUFDekVDLE1BQUFBLEtBQUssRUFBRXRCLE9BRGtFO0FBRXpFdUIsTUFBQUEsSUFBSSxFQUFFckI7QUFGbUUsS0FBcEQsQ0FBdkI7QUFJQSxVQUFNO0FBQUVzQixNQUFBQTtBQUFGLFFBQWNSLFFBQVEsQ0FBQ08sSUFBVCxDQUFjRSxZQUFkLENBQTJCLEdBQTNCLENBQXBCO0FBRUEsV0FBT0QsT0FBTyxDQUFDRSxHQUFSLENBQVlDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxHQUF6QixDQUFQO0FBQ0QsR0EvQkQsQ0ErQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsV0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNEO0FBQ0YsQ0FuQ00iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gU3BlY2lmaWMgbWV0aG9kcyB0byBmZXRjaCBXYXp1aCBvdmVydmlldyBkYXRhIGZyb20gRWxhc3RpY3NlYXJjaFxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmltcG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UtcXVlcnknO1xuaW1wb3J0IHsgV0FaVUhfQUxFUlRTX1BBVFRFUk4gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRvcCAzIGFnZW50cyB3aXRoIGxldmVsIDE1IGFsZXJ0c1xuICogQHBhcmFtIHsqfSBjb250ZXh0IEVuZHBvaW50IGNvbnRleHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBndGUgVGltZXN0YW1wIChtcykgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IGx0ZSBUaW1lc3RhbXAgKG1zKSB0b1xuICogQHBhcmFtIHtTdHJpbmd9IGZpbHRlcnMgRS5nOiBjbHVzdGVyLm5hbWU6IHdhenVoIEFORCBydWxlLmdyb3VwczogdnVsbmVyYWJpbGl0eVxuICogQHJldHVybnMge0FycmF5PFN0cmluZz59IEUuZzpbJzAwMCcsJzEzMCcsJzMwMCddXG4gKi9cbmV4cG9ydCBjb25zdCB0b3BMZXZlbDE1ID0gYXN5bmMgKGNvbnRleHQsIGd0ZSwgbHRlLCBmaWx0ZXJzLCBwYXR0ZXJuID0gV0FaVUhfQUxFUlRTX1BBVFRFUk4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBiYXNlID0ge307XG5cbiAgICBPYmplY3QuYXNzaWduKGJhc2UsIEJhc2UocGF0dGVybiwgZmlsdGVycywgZ3RlLCBsdGUpKTtcblxuICAgIE9iamVjdC5hc3NpZ24oYmFzZS5hZ2dzLCB7XG4gICAgICAnMic6IHtcbiAgICAgICAgdGVybXM6IHtcbiAgICAgICAgICBmaWVsZDogJ2FnZW50LmlkJyxcbiAgICAgICAgICBzaXplOiAzLFxuICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFzZS5xdWVyeS5ib29sLm11c3QucHVzaCh7XG4gICAgICBtYXRjaF9waHJhc2U6IHtcbiAgICAgICAgJ3J1bGUubGV2ZWwnOiB7XG4gICAgICAgICAgcXVlcnk6IDE1XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLnNlYXJjaCh7XG4gICAgICBpbmRleDogcGF0dGVybixcbiAgICAgIGJvZHk6IGJhc2VcbiAgICB9KTtcbiAgICBjb25zdCB7IGJ1Y2tldHMgfSA9IHJlc3BvbnNlLmJvZHkuYWdncmVnYXRpb25zWycyJ107XG5cbiAgICByZXR1cm4gYnVja2V0cy5tYXAoaXRlbSA9PiBpdGVtLmtleSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufVxuIl19