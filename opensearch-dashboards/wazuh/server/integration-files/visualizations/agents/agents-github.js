"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/GitHub visualizations
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
var _default = [{
  _id: 'Wazuh-App-Overview-GitHub-Alerts-Evolution-By-Organization',
  _source: {
    title: 'Alerts evolution by organization',
    visState: JSON.stringify({
      "title": "Alerts evolution by organization",
      "type": "area",
      "aggs": [{
        "id": "1",
        "enabled": true,
        "type": "count",
        "params": {},
        "schema": "metric"
      }, {
        "id": "2",
        "enabled": true,
        "type": "date_histogram",
        "params": {
          "field": "timestamp",
          "timeRange": {
            "from": "now-7d",
            "to": "now"
          },
          "useNormalizedEsInterval": true,
          "scaleMetricValues": false,
          "interval": "auto",
          "drop_partials": false,
          "min_doc_count": 1,
          "extended_bounds": {},
          "customLabel": ""
        },
        "schema": "segment"
      }, {
        "id": "3",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.org",
          "orderBy": "1",
          "order": "desc",
          "size": 5,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "group"
      }],
      "params": {
        "type": "area",
        "grid": {
          "categoryLines": false
        },
        "categoryAxes": [{
          "id": "CategoryAxis-1",
          "type": "category",
          "position": "bottom",
          "show": true,
          "style": {},
          "scale": {
            "type": "linear"
          },
          "labels": {
            "show": true,
            "filter": true,
            "truncate": 100,
            "rotate": 0
          },
          "title": {}
        }],
        "valueAxes": [{
          "id": "ValueAxis-1",
          "name": "LeftAxis-1",
          "type": "value",
          "position": "left",
          "show": true,
          "style": {},
          "scale": {
            "type": "linear",
            "mode": "normal"
          },
          "labels": {
            "show": true,
            "rotate": 0,
            "filter": false,
            "truncate": 100
          },
          "title": {
            "text": "Count"
          }
        }],
        "seriesParams": [{
          "show": true,
          "type": "line",
          "mode": "normal",
          "data": {
            "label": "Count",
            "id": "1"
          },
          "drawLinesBetweenPoints": true,
          "lineWidth": 2,
          "showCircles": true,
          "interpolate": "linear",
          "valueAxis": "ValueAxis-1"
        }],
        "addTooltip": true,
        "addLegend": true,
        "legendPosition": "right",
        "times": [],
        "addTimeMarker": false,
        "thresholdLine": {
          "show": false,
          "value": 10,
          "width": 1,
          "style": "full",
          "color": "#E7664C"
        },
        "labels": {},
        "orderBucketsBySum": false
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-5-Organizations-By-Alerts',
  _source: {
    title: 'Top 5 organizations by alerts',
    visState: JSON.stringify({
      "title": "Top 5 organizations by alerts",
      "type": "pie",
      "aggs": [{
        "id": "1",
        "enabled": true,
        "type": "count",
        "params": {},
        "schema": "metric"
      }, {
        "id": "2",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.org",
          "orderBy": "1",
          "order": "desc",
          "size": 5,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "segment"
      }],
      "params": {
        "type": "pie",
        "addTooltip": true,
        "addLegend": true,
        "legendPosition": "right",
        "isDonut": false,
        "labels": {
          "show": false,
          "values": true,
          "last_level": true,
          "truncate": 100
        }
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Users-With-More-Alerts',
  _source: {
    title: 'Users with more alerts',
    visState: JSON.stringify({
      "title": "Users with more alerts",
      "type": "line",
      "aggs": [{
        "id": "1",
        "enabled": true,
        "type": "count",
        "params": {},
        "schema": "metric"
      }, {
        "id": "4",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.org",
          "orderBy": "1",
          "order": "desc",
          "size": 5,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "segment"
      }, {
        "id": "3",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.actor",
          "orderBy": "1",
          "order": "desc",
          "size": 5,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "group"
      }],
      "params": {
        "type": "line",
        "grid": {
          "categoryLines": false
        },
        "categoryAxes": [{
          "id": "CategoryAxis-1",
          "type": "category",
          "position": "bottom",
          "show": true,
          "style": {},
          "scale": {
            "type": "linear"
          },
          "labels": {
            "show": true,
            "filter": true,
            "truncate": 100
          },
          "title": {}
        }],
        "valueAxes": [{
          "id": "ValueAxis-1",
          "name": "LeftAxis-1",
          "type": "value",
          "position": "left",
          "show": true,
          "style": {},
          "scale": {
            "type": "linear",
            "mode": "normal"
          },
          "labels": {
            "show": true,
            "rotate": 0,
            "filter": false,
            "truncate": 100
          },
          "title": {
            "text": "Count"
          }
        }],
        "seriesParams": [{
          "show": true,
          "type": "histogram",
          "mode": "stacked",
          "data": {
            "label": "Count",
            "id": "1"
          },
          "valueAxis": "ValueAxis-1",
          "drawLinesBetweenPoints": true,
          "lineWidth": 2,
          "interpolate": "linear",
          "showCircles": true
        }],
        "addTooltip": true,
        "addLegend": true,
        "legendPosition": "right",
        "times": [],
        "addTimeMarker": false,
        "labels": {},
        "thresholdLine": {
          "show": false,
          "value": 10,
          "width": 1,
          "style": "full",
          "color": "#E7664C"
        }
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Alert-Action-Type-By-Organization',
  _source: {
    title: 'Top alerts by alert action type and organization',
    visState: JSON.stringify({
      "title": "Top alerts by alert action type and organization",
      "type": "pie",
      "aggs": [{
        "id": "1",
        "enabled": true,
        "type": "count",
        "params": {},
        "schema": "metric"
      }, {
        "id": "3",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.org",
          "orderBy": "1",
          "order": "desc",
          "size": 5,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "segment"
      }, {
        "id": "2",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.action",
          "orderBy": "1",
          "order": "desc",
          "size": 3,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "segment"
      }],
      "params": {
        "type": "pie",
        "addTooltip": true,
        "addLegend": true,
        "legendPosition": "right",
        "isDonut": true,
        "labels": {
          "show": false,
          "values": true,
          "last_level": true,
          "truncate": 100
        }
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Alert-Summary',
  _source: {
    title: 'Alert summary',
    visState: JSON.stringify({
      "title": "Alert summary",
      "type": "table",
      "aggs": [{
        "id": "1",
        "enabled": true,
        "type": "count",
        "params": {},
        "schema": "metric"
      }, {
        "id": "2",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "agent.name",
          "orderBy": "1",
          "order": "desc",
          "size": 50,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "bucket"
      }, {
        "id": "3",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "data.github.org",
          "orderBy": "1",
          "order": "desc",
          "size": 10,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "bucket"
      }, {
        "id": "4",
        "enabled": true,
        "type": "terms",
        "params": {
          "field": "rule.description",
          "orderBy": "1",
          "order": "desc",
          "size": 10,
          "otherBucket": false,
          "otherBucketLabel": "Other",
          "missingBucket": false,
          "missingBucketLabel": "Missing"
        },
        "schema": "bucket"
      }],
      "params": {
        "perPage": 10,
        "showPartialRows": false,
        "showMetricsAtAllLevels": false,
        "sort": {
          "columnIndex": null,
          "direction": null
        },
        "showTotal": false,
        "totalFunc": "sum",
        "percentageCol": ""
      }
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        params: {
          sort: {
            columnIndex: 3,
            direction: 'desc'
          }
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy1naXRodWIudHMiXSwibmFtZXMiOlsiX2lkIiwiX3NvdXJjZSIsInRpdGxlIiwidmlzU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwidWlTdGF0ZUpTT04iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwiX3R5cGUiLCJ2aXMiLCJwYXJhbXMiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7ZUFZZSxDQUNiO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSw0REFEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLGtDQURBO0FBRVBDLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkIsZUFBUyxrQ0FEYztBQUV2QixjQUFRLE1BRmU7QUFHdkIsY0FBUSxDQUNOO0FBQ0UsY0FBTSxHQURSO0FBRUUsbUJBQVcsSUFGYjtBQUdFLGdCQUFRLE9BSFY7QUFJRSxrQkFBVSxFQUpaO0FBS0Usa0JBQVU7QUFMWixPQURNLEVBUU47QUFDRSxjQUFNLEdBRFI7QUFFRSxtQkFBVyxJQUZiO0FBR0UsZ0JBQVEsZ0JBSFY7QUFJRSxrQkFBVTtBQUNSLG1CQUFTLFdBREQ7QUFFUix1QkFBYTtBQUNYLG9CQUFRLFFBREc7QUFFWCxrQkFBTTtBQUZLLFdBRkw7QUFNUixxQ0FBMkIsSUFObkI7QUFPUiwrQkFBcUIsS0FQYjtBQVFSLHNCQUFZLE1BUko7QUFTUiwyQkFBaUIsS0FUVDtBQVVSLDJCQUFpQixDQVZUO0FBV1IsNkJBQW1CLEVBWFg7QUFZUix5QkFBZTtBQVpQLFNBSlo7QUFrQkUsa0JBQVU7QUFsQlosT0FSTSxFQTRCTjtBQUNFLGNBQU0sR0FEUjtBQUVFLG1CQUFXLElBRmI7QUFHRSxnQkFBUSxPQUhWO0FBSUUsa0JBQVU7QUFDUixtQkFBUyxpQkFERDtB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O0FBVVIseUJBQWlCO0FBVlQ7QUE1RGEsS0FBZixDQUZIO0FBMkVQQyxJQUFBQSxXQUFXLEVBQUVGLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQzFCTyxNQUFBQSxHQUFHLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRTtBQUFFQyxZQUFBQSxXQUFXLEVBQUUsQ0FBZjtBQUFrQkMsWUFBQUEsU0FBUyxFQUFFO0FBQTdCO0FBQVI7QUFBVjtBQURxQixLQUFmLENBM0VOO0FBOEVQVCxJQUFBQSxXQUFXLEVBQUUsRUE5RU47QUErRVBDLElBQUFBLE9BQU8sRUFBRSxDQS9FRjtBQWdGUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFO0FBREc7QUFoRmhCLEdBRlg7QUFzRkVDLEVBQUFBLEtBQUssRUFBRTtBQXRGVCxDQWpaYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgQWdlbnRzL0dpdEh1YiB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1BbGVydHMtRXZvbHV0aW9uLUJ5LU9yZ2FuaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgZXZvbHV0aW9uIGJ5IG9yZ2FuaXphdGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxlcnRzIGV2b2x1dGlvbiBieSBvcmdhbml6YXRpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiYXJlYVwiLFxuICAgICAgICBcImFnZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNvdW50XCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0cmljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImRhdGVfaGlzdG9ncmFtXCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgIFwiZmllbGRcIjogXCJ0aW1lc3RhbXBcIixcbiAgICAgICAgICAgICAgXCJ0aW1lUmFuZ2VcIjoge1xuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiBcIm5vdy03ZFwiLFxuICAgICAgICAgICAgICAgIFwidG9cIjogXCJub3dcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwic2NhbGVNZXRyaWNWYWx1ZXNcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwiaW50ZXJ2YWxcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIFwiZHJvcF9wYXJ0aWFsc1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJtaW5fZG9jX2NvdW50XCI6IDEsXG4gICAgICAgICAgICAgIFwiZXh0ZW5kZWRfYm91bmRzXCI6IHt9LFxuICAgICAgICAgICAgICBcImN1c3RvbUxhYmVsXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcInNlZ21lbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGVybXNcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgXCJmaWVsZFwiOiBcImRhdGEuZ2l0aHViLm9yZ1wiLFxuICAgICAgICAgICAgICBcIm9yZGVyQnlcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJcIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0TGFiZWxcIjogXCJPdGhlclwiLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldExhYmVsXCI6IFwiTWlzc2luZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJncm91cFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJlYVwiLFxuICAgICAgICAgIFwiZ3JpZFwiOiB7XG4gICAgICAgICAgICBcImNhdGVnb3J5TGluZXNcIjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2F0ZWdvcnlBeGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIkNhdGVnb3J5QXhpcy0xXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgXCJzaG93XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge30sXG4gICAgICAgICAgICAgIFwic2NhbGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpbmVhclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcbiAgICAgICAgICAgICAgICBcInNob3dcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImZpbHRlclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwidHJ1bmNhdGVcIjogMTAwLFxuICAgICAgICAgICAgICAgIFwicm90YXRlXCI6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ2YWx1ZUF4ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiVmFsdWVBeGlzLTFcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVmdEF4aXMtMVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInNob3dcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7fSxcbiAgICAgICAgICAgICAgXCJzY2FsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwibm9ybWFsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicm90YXRlXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJmaWx0ZXJcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJ0cnVuY2F0ZVwiOiAxMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ291bnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInNlcmllc1BhcmFtc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwic2hvd1wiOiB0cnVlLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgIFwibW9kZVwiOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb3VudFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJkcmF3TGluZXNCZXR3ZWVuUG9pbnRzXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwibGluZVdpZHRoXCI6IDIsXG4gICAgICAgICAgICAgIFwic2hvd0NpcmNsZXNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICBcInZhbHVlQXhpc1wiOiBcIlZhbHVlQXhpcy0xXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYWRkVG9vbHRpcFwiOiB0cnVlLFxuICAgICAgICAgIFwiYWRkTGVnZW5kXCI6IHRydWUsXG4gICAgICAgICAgXCJsZWdlbmRQb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgXCJ0aW1lc1wiOiBbXSxcbiAgICAgICAgICBcImFkZFRpbWVNYXJrZXJcIjogZmFsc2UsXG4gICAgICAgICAgXCJ0aHJlc2hvbGRMaW5lXCI6IHtcbiAgICAgICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEsXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwiZnVsbFwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNFNzY2NENcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsYWJlbHNcIjoge30sXG4gICAgICAgICAgXCJvcmRlckJ1Y2tldHNCeVN1bVwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9XG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1Ub3AtNS1Pcmdhbml6YXRpb25zLUJ5LUFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgNSBvcmdhbml6YXRpb25zIGJ5IGFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInRpdGxlXCI6IFwiVG9wIDUgb3JnYW5pemF0aW9ucyBieSBhbGVydHNcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwicGllXCIsXG4gICAgICAgIFwiYWdnc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY291bnRcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHt9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJtZXRyaWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGVybXNcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgXCJmaWVsZFwiOiBcImRhdGEuZ2l0aHViLm9yZ1wiLFxuICAgICAgICAgICAgICBcIm9yZGVyQnlcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJcIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiA1LFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0TGFiZWxcIjogXCJPdGhlclwiLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldExhYmVsXCI6IFwiTWlzc2luZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJzZWdtZW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJwaWVcIixcbiAgICAgICAgICBcImFkZFRvb2x0aXBcIjogdHJ1ZSxcbiAgICAgICAgICBcImFkZExlZ2VuZFwiOiB0cnVlLFxuICAgICAgICAgIFwibGVnZW5kUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICAgIFwiaXNEb251dFwiOiBmYWxzZSxcbiAgICAgICAgICBcImxhYmVsc1wiOiB7XG4gICAgICAgICAgICBcInNob3dcIjogZmFsc2UsXG4gICAgICAgICAgICBcInZhbHVlc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJsYXN0X2xldmVsXCI6IHRydWUsXG4gICAgICAgICAgICBcInRydW5jYXRlXCI6IDEwMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046ICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfVxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItVXNlcnMtV2l0aC1Nb3JlLUFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdVc2VycyB3aXRoIG1vcmUgYWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidGl0bGVcIjogXCJVc2VycyB3aXRoIG1vcmUgYWxlcnRzXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgXCJhZ2dzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJlbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJjb3VudFwiLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjoge30sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcIm1ldHJpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxuICAgICAgICAgICAgXCJlbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXJtc1wiLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICBcImZpZWxkXCI6IFwiZGF0YS5naXRodWIub3JnXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJCeVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgXCJvcmRlclwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRMYWJlbFwiOiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJtaXNzaW5nQnVja2V0TGFiZWxcIjogXCJNaXNzaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcInNlZ21lbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGVybXNcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgXCJmaWVsZFwiOiBcImRhdGEuZ2l0aHViLmFjdG9yXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJCeVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgXCJvcmRlclwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IDUsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRMYWJlbFwiOiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJtaXNzaW5nQnVja2V0TGFiZWxcIjogXCJNaXNzaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcImdyb3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgXCJncmlkXCI6IHtcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlMaW5lc1wiOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjYXRlZ29yeUF4ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiQ2F0ZWdvcnlBeGlzLTFcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICBcInNob3dcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7fSxcbiAgICAgICAgICAgICAgXCJzY2FsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGluZWFyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZmlsdGVyXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJ0cnVuY2F0ZVwiOiAxMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ2YWx1ZUF4ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiVmFsdWVBeGlzLTFcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVmdEF4aXMtMVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInNob3dcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7fSxcbiAgICAgICAgICAgICAgXCJzY2FsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwibm9ybWFsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicm90YXRlXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJmaWx0ZXJcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJ0cnVuY2F0ZVwiOiAxMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ291bnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInNlcmllc1BhcmFtc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwic2hvd1wiOiB0cnVlLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJoaXN0b2dyYW1cIixcbiAgICAgICAgICAgICAgXCJtb2RlXCI6IFwic3RhY2tlZFwiLFxuICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb3VudFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ2YWx1ZUF4aXNcIjogXCJWYWx1ZUF4aXMtMVwiLFxuICAgICAgICAgICAgICBcImRyYXdMaW5lc0JldHdlZW5Qb2ludHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJsaW5lV2lkdGhcIjogMixcbiAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICBcInNob3dDaXJjbGVzXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYWRkVG9vbHRpcFwiOiB0cnVlLFxuICAgICAgICAgIFwiYWRkTGVnZW5kXCI6IHRydWUsXG4gICAgICAgICAgXCJsZWdlbmRQb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgXCJ0aW1lc1wiOiBbXSxcbiAgICAgICAgICBcImFkZFRpbWVNYXJrZXJcIjogZmFsc2UsXG4gICAgICAgICAgXCJsYWJlbHNcIjoge30sXG4gICAgICAgICAgXCJ0aHJlc2hvbGRMaW5lXCI6IHtcbiAgICAgICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogMTAsXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEsXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwiZnVsbFwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNFNzY2NENcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046ICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfVxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItQWxlcnQtQWN0aW9uLVR5cGUtQnktT3JnYW5pemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCBhbGVydHMgYnkgYWxlcnQgYWN0aW9uIHR5cGUgYW5kIG9yZ2FuaXphdGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInRpdGxlXCI6IFwiVG9wIGFsZXJ0cyBieSBhbGVydCBhY3Rpb24gdHlwZSBhbmQgb3JnYW5pemF0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInBpZVwiLFxuICAgICAgICBcImFnZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNvdW50XCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0cmljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRlcm1zXCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgIFwiZmllbGRcIjogXCJkYXRhLmdpdGh1Yi5vcmdcIixcbiAgICAgICAgICAgICAgXCJvcmRlckJ5XCI6IFwiMVwiLFxuICAgICAgICAgICAgICBcIm9yZGVyXCI6IFwiZGVzY1wiLFxuICAgICAgICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgICAgICAgXCJvdGhlckJ1Y2tldFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJvdGhlckJ1Y2tldExhYmVsXCI6IFwiT3RoZXJcIixcbiAgICAgICAgICAgICAgXCJtaXNzaW5nQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRMYWJlbFwiOiBcIk1pc3NpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwic2VnbWVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJlbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXJtc1wiLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICBcImZpZWxkXCI6IFwiZGF0YS5naXRodWIuYWN0aW9uXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJCeVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgXCJvcmRlclwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IDMsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwib3RoZXJCdWNrZXRMYWJlbFwiOiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJtaXNzaW5nQnVja2V0TGFiZWxcIjogXCJNaXNzaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcInNlZ21lbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInBpZVwiLFxuICAgICAgICAgIFwiYWRkVG9vbHRpcFwiOiB0cnVlLFxuICAgICAgICAgIFwiYWRkTGVnZW5kXCI6IHRydWUsXG4gICAgICAgICAgXCJsZWdlbmRQb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgXCJpc0RvbnV0XCI6IHRydWUsXG4gICAgICAgICAgXCJsYWJlbHNcIjoge1xuICAgICAgICAgICAgXCJzaG93XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ2YWx1ZXNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGFzdF9sZXZlbFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0cnVuY2F0ZVwiOiAxMDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2l0SHViLUFsZXJ0LVN1bW1hcnknLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnQgc3VtbWFyeScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxlcnQgc3VtbWFyeVwiLFxuICAgICAgICBcInR5cGVcIjogXCJ0YWJsZVwiLFxuICAgICAgICBcImFnZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNvdW50XCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0cmljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRlcm1zXCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgIFwiZmllbGRcIjogXCJhZ2VudC5uYW1lXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJCeVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgXCJvcmRlclwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IDUwLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0TGFiZWxcIjogXCJPdGhlclwiLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldExhYmVsXCI6IFwiTWlzc2luZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJidWNrZXRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGVybXNcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgXCJmaWVsZFwiOiBcImRhdGEuZ2l0aHViLm9yZ1wiLFxuICAgICAgICAgICAgICBcIm9yZGVyQnlcIjogXCIxXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJcIjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAxMCxcbiAgICAgICAgICAgICAgXCJvdGhlckJ1Y2tldFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJvdGhlckJ1Y2tldExhYmVsXCI6IFwiT3RoZXJcIixcbiAgICAgICAgICAgICAgXCJtaXNzaW5nQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRMYWJlbFwiOiBcIk1pc3NpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwiYnVja2V0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCI0XCIsXG4gICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRlcm1zXCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgIFwiZmllbGRcIjogXCJydWxlLmRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIFwib3JkZXJCeVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgXCJvcmRlclwiOiBcImRlc2NcIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IDEwLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIm90aGVyQnVja2V0TGFiZWxcIjogXCJPdGhlclwiLFxuICAgICAgICAgICAgICBcIm1pc3NpbmdCdWNrZXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwibWlzc2luZ0J1Y2tldExhYmVsXCI6IFwiTWlzc2luZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJidWNrZXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgIFwicGVyUGFnZVwiOiAxMCxcbiAgICAgICAgICBcInNob3dQYXJ0aWFsUm93c1wiOiBmYWxzZSxcbiAgICAgICAgICBcInNob3dNZXRyaWNzQXRBbGxMZXZlbHNcIjogZmFsc2UsXG4gICAgICAgICAgXCJzb3J0XCI6IHtcbiAgICAgICAgICAgIFwiY29sdW1uSW5kZXhcIjogbnVsbCxcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1RvdGFsXCI6IGZhbHNlLFxuICAgICAgICAgIFwidG90YWxGdW5jXCI6IFwic3VtXCIsXG4gICAgICAgICAgXCJwZXJjZW50YWdlQ29sXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046ICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfVxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfVxuXTtcbiJdfQ==