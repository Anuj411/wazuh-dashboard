"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/HIPAA visualizations
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
  _id: 'Wazuh-App-Agents-HIPAA-Burbles',
  _source: {
    title: 'HIPAA requirements',
    visState: JSON.stringify({
      title: 'HIPAA requirements',
      type: 'line',
      params: {
        type: 'line',
        grid: {
          categoryLines: true,
          valueAxis: 'ValueAxis-1'
        },
        categoryAxes: [{
          id: 'CategoryAxis-1',
          type: 'category',
          position: 'bottom',
          show: true,
          style: {},
          scale: {
            type: 'linear'
          },
          labels: {
            show: true,
            filter: true,
            truncate: 100
          },
          title: {}
        }],
        valueAxes: [{
          id: 'ValueAxis-1',
          name: 'LeftAxis-1',
          type: 'value',
          position: 'left',
          show: true,
          style: {},
          scale: {
            type: 'linear',
            mode: 'normal'
          },
          labels: {
            show: true,
            rotate: 0,
            filter: false,
            truncate: 100
          },
          title: {
            text: 'Count'
          }
        }],
        seriesParams: [{
          show: 'true',
          type: 'line',
          mode: 'normal',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: false,
          showCircles: true
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false,
        dimensions: {
          x: {
            accessor: 0,
            format: {
              id: 'date',
              params: {
                pattern: 'YYYY-MM-DD HH:mm'
              }
            },
            params: {
              date: true,
              interval: 'PT12H',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2019-07-24T10:27:37.970Z',
                max: '2019-08-23T10:27:37.970Z'
              }
            },
            aggType: 'date_histogram'
          },
          y: [{
            accessor: 2,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }],
          z: [{
            accessor: 3,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }],
          series: [{
            accessor: 1,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }]
        },
        radiusRatio: 20
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        schema: 'segment',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now-30d',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {},
          customLabel: 'Timestampt'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'count',
        schema: 'radius',
        params: {}
      }]
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-HIPAA-Distributed-By-Level',
  _source: {
    title: 'Requirements distribution by level',
    visState: JSON.stringify({
      title: 'Requirements distribution by level',
      type: 'histogram',
      params: {
        type: 'histogram',
        grid: {
          categoryLines: true,
          valueAxis: 'ValueAxis-1'
        },
        categoryAxes: [{
          id: 'CategoryAxis-1',
          type: 'category',
          position: 'bottom',
          show: true,
          style: {},
          scale: {
            type: 'linear'
          },
          labels: {
            show: true,
            filter: true,
            truncate: 100
          },
          title: {}
        }],
        valueAxes: [{
          id: 'ValueAxis-1',
          name: 'LeftAxis-1',
          type: 'value',
          position: 'left',
          show: true,
          style: {},
          scale: {
            type: 'linear',
            mode: 'normal'
          },
          labels: {
            show: true,
            rotate: 0,
            filter: false,
            truncate: 100
          },
          title: {
            text: 'Count'
          }
        }],
        seriesParams: [{
          show: 'true',
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          showCircles: true
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false,
        labels: {
          show: false
        },
        dimensions: {
          x: {
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          },
          y: [{
            accessor: 2,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }],
          series: [{
            accessor: 1,
            format: {
              id: 'terms',
              params: {
                id: 'number',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }]
        },
        orderBucketsBySum: true
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Level'
        }
      }]
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-HIPAA-Most-Common',
  _source: {
    title: 'Most common alerts',
    visState: JSON.stringify({
      title: 'Most common alerts',
      type: 'tagcloud',
      params: {
        scale: 'linear',
        orientation: 'single',
        minFontSize: 15,
        maxFontSize: 25,
        showLabel: true,
        metric: {
          type: 'vis_dimension',
          accessor: 1,
          format: {
            id: 'string',
            params: {}
          }
        },
        bucket: {
          type: 'vis_dimension',
          accessor: 0,
          format: {
            id: 'terms',
            params: {
              id: 'string',
              otherBucketLabel: 'Other',
              missingBucketLabel: 'Missing'
            }
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }]
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-HIPAA-top-10',
  _source: {
    title: 'Top 10 requirements',
    visState: JSON.stringify({
      title: 'Top 10 requirements',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: true,
        labels: {
          show: false,
          values: true,
          last_level: true,
          truncate: 100
        },
        dimensions: {
          metric: {
            accessor: 1,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }]
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }]
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-HIPAA-Requirements-Stacked-Overtime',
  _source: {
    title: 'Requirements over time',
    visState: JSON.stringify({
      title: 'Requirements over time',
      type: 'histogram',
      params: {
        type: 'histogram',
        grid: {
          categoryLines: false
        },
        categoryAxes: [{
          id: 'CategoryAxis-1',
          type: 'category',
          position: 'bottom',
          show: true,
          style: {},
          scale: {
            type: 'linear'
          },
          labels: {
            show: true,
            filter: true,
            truncate: 100
          },
          title: {}
        }],
        valueAxes: [{
          id: 'ValueAxis-1',
          name: 'LeftAxis-1',
          type: 'value',
          position: 'left',
          show: true,
          style: {},
          scale: {
            type: 'linear',
            mode: 'normal'
          },
          labels: {
            show: true,
            rotate: 0,
            filter: false,
            truncate: 100
          },
          title: {
            text: 'Count'
          }
        }],
        seriesParams: [{
          show: 'true',
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          showCircles: true
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false,
        labels: {
          show: false
        },
        dimensions: {
          x: {
            accessor: 0,
            format: {
              id: 'date',
              params: {
                pattern: 'YYYY-MM-DD HH:mm'
              }
            },
            params: {
              date: true,
              interval: 'PT1H',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2019-08-19T09:19:10.911Z',
                max: '2019-08-23T09:19:10.911Z'
              }
            },
            aggType: 'date_histogram'
          },
          y: [{
            accessor: 1,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }]
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        schema: 'segment',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now-4d',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {},
          customLabel: 'Timestampt'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }]
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-HIPAA-Last-alerts',
  _type: 'visualization',
  _source: {
    title: 'Alerts summary',
    visState: JSON.stringify({
      title: 'Alerts summary',
      type: 'table',
      params: {
        perPage: 10,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: 3,
          direction: 'desc'
        },
        showTotal: false,
        showToolbar: true,
        totalFunc: 'sum',
        dimensions: {
          metrics: [{
            accessor: 3,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }],
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }, {
            accessor: 1,
            format: {
              id: 'terms',
              params: {
                id: 'number',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }, {
            accessor: 2,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing'
              }
            },
            params: {},
            aggType: 'terms'
          }]
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {}
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.hipaa',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Rule level'
        }
      }, {
        id: '5',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.description',
          orderBy: '1',
          order: 'desc',
          size: 200,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Description'
        }
      }]
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
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy1oaXBhYS50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJ2YWx1ZUF4aXMiLCJjYXRlZ29yeUF4ZXMiLCJpZCIsInBvc2l0aW9uIiwic2hvdyIsInN0eWxlIiwic2NhbGUiLCJsYWJlbHMiLCJmaWx0ZXIiLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImFkZFRvb2x0aXAiLCJhZGRMZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsInRpbWVzIiwiYWRkVGltZU1hcmtlciIsImRpbWVuc2lvbnMiLCJ4IiwiYWNjZXNzb3IiLCJmb3JtYXQiLCJwYXR0ZXJuIiwiZGF0ZSIsImludGVydmFsIiwiYm91bmRzIiwibWluIiwibWF4IiwiYWdnVHlwZSIsInkiLCJ6Iiwic2VyaWVzIiwib3RoZXJCdWNrZXRMYWJlbCIsIm1pc3NpbmdCdWNrZXRMYWJlbCIsInJhZGl1c1JhdGlvIiwiYWdncyIsImVuYWJsZWQiLCJzY2hlbWEiLCJmaWVsZCIsInRpbWVSYW5nZSIsImZyb20iLCJ0byIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwiZHJvcF9wYXJ0aWFscyIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJjdXN0b21MYWJlbCIsIm9yZGVyQnkiLCJvcmRlciIsInNpemUiLCJvdGhlckJ1Y2tldCIsIm1pc3NpbmdCdWNrZXQiLCJ1aVN0YXRlSlNPTiIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsImtpYmFuYVNhdmVkT2JqZWN0TWV0YSIsInNlYXJjaFNvdXJjZUpTT04iLCJpbmRleCIsInF1ZXJ5IiwibGFuZ3VhZ2UiLCJfdHlwZSIsIm9yZGVyQnVja2V0c0J5U3VtIiwib3JpZW50YXRpb24iLCJtaW5Gb250U2l6ZSIsIm1heEZvbnRTaXplIiwic2hvd0xhYmVsIiwibWV0cmljIiwiYnVja2V0IiwiaXNEb251dCIsInZhbHVlcyIsImxhc3RfbGV2ZWwiLCJidWNrZXRzIiwicGVyUGFnZSIsInNob3dQYXJ0aWFsUm93cyIsInNob3dNZXRyaWNzQXRBbGxMZXZlbHMiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iLCJzaG93VG90YWwiLCJzaG93VG9vbGJhciIsInRvdGFsRnVuYyIsIm1ldHJpY3MiLCJ2aXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7ZUFXZSxDQUNiO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSxnQ0FEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLG9CQURBO0FBRVBDLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkJILE1BQUFBLEtBQUssRUFBRSxvQkFEZ0I7QUFFdkJJLE1BQUFBLElBQUksRUFBRSxNQUZpQjtBQUd2QkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05ELFFBQUFBLElBQUksRUFBRSxNQURBO0FBRU5FLFFBQUFBLElBQUksRUFBRTtBQUFFQyxVQUFBQSxhQUFhLEVBQUUsSUFBakI7QUFBdUJDLFVBQUFBLFNBQVMsRUFBRTtBQUFsQyxTQUZBO0FBR05DLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLEVBQUUsRUFBRSxnQkFETjtBQUVFTixVQUFBQSxJQUFJLEVBQUUsVUFGUjtBQUdFTyxVQUFBQSxRQUFRLEVBQUUsUUFIWjtBQUlFQyxVQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFQyxVQUFBQSxLQUFLLEVBQUUsRUFMVDtBQU1FQyxVQUFBQSxLQUFLLEVBQUU7QUFBRVYsWUFBQUEsSUFBSSxFQUFFO0FBQVIsV0FOVDtBQU9FVyxVQUFBQSxNQUFNLEVBQUU7QUFBRUgsWUFBQUEsSUFBSSxFQUFFLElB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QUFPLEVBQUUsQ0FySEY7QUFzSFBDLElBQUFBLHFCQUFxQixFQUFFO0FBQ3JCQyxNQUFBQSxnQkFBZ0IsRUFBRXJFLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQy9CcUUsUUFBQUEsS0FBSyxFQUFFLGNBRHdCO0FBRS9CeEQsUUFBQUEsTUFBTSxFQUFFLEVBRnVCO0FBRy9CeUQsUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUF0SGhCO0FBSFgsQ0E1ZmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgZm9yIEFnZW50cy9ISVBBQSB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtSElQQUEtQnVyYmxlcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdISVBBQSByZXF1aXJlbWVudHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdISVBBQSByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IHRydWUsIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnQ291bnQnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogZmFsc2UsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREIEhIOm1tJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdQVDEySCcsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCBISDptbScsXG4gICAgICAgICAgICAgICAgYm91bmRzOiB7IG1pbjogJzIwMTktMDctMjRUMTA6Mjc6MzcuOTcwWicsIG1heDogJzIwMTktMDgtMjNUMTA6Mjc6MzcuOTcwWicgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5OiBbeyBhY2Nlc3NvcjogMiwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH1dLFxuICAgICAgICAgICAgejogW3sgYWNjZXNzb3I6IDMsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWRpdXNSYXRpbzogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTMwZCcsIHRvOiAnbm93JyB9LFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgZHJvcF9wYXJ0aWFsczogZmFsc2UsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnVGltZXN0YW1wdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5oaXBhYScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgaWQ6ICc0JywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAncmFkaXVzJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUhJUEFBLURpc3RyaWJ1dGVkLUJ5LUxldmVsJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1JlcXVpcmVtZW50cyBkaXN0cmlidXRpb24gYnkgbGV2ZWwnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdSZXF1aXJlbWVudHMgZGlzdHJpYnV0aW9uIGJ5IGxldmVsJyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogdHJ1ZSwgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiAnc3RyaW5nJywgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJywgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5OiBbeyBhY2Nlc3NvcjogMiwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH1dLFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9yZGVyQnVja2V0c0J5U3VtOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmhpcGFhJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUhJUEFBLU1vc3QtQ29tbW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01vc3QgY29tbW9uIGFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ01vc3QgY29tbW9uIGFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICd0YWdjbG91ZCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNjYWxlOiAnbGluZWFyJyxcbiAgICAgICAgICBvcmllbnRhdGlvbjogJ3NpbmdsZScsXG4gICAgICAgICAgbWluRm9udFNpemU6IDE1LFxuICAgICAgICAgIG1heEZvbnRTaXplOiAyNSxcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICAgICAgbWV0cmljOiB7IHR5cGU6ICd2aXNfZGltZW5zaW9uJywgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ3N0cmluZycsIHBhcmFtczoge30gfSB9LFxuICAgICAgICAgIGJ1Y2tldDoge1xuICAgICAgICAgICAgdHlwZTogJ3Zpc19kaW1lbnNpb24nLFxuICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIHBhcmFtczogeyBpZDogJ3N0cmluZycsIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaGlwYWEnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1ISVBBQS10b3AtMTAnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDEwIHJlcXVpcmVtZW50cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCAxMCByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmhpcGFhJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUhJUEFBLVJlcXVpcmVtZW50cy1TdGFja2VkLU92ZXJ0aW1lJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1JlcXVpcmVtZW50cyBvdmVyIHRpbWUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdSZXF1aXJlbWVudHMgb3ZlciB0aW1lJyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogZmFsc2UgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREIEhIOm1tJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdQVDFIJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tJyxcbiAgICAgICAgICAgICAgICBib3VuZHM6IHsgbWluOiAnMjAxOS0wOC0xOVQwOToxOToxMC45MTFaJywgbWF4OiAnMjAxOS0wOC0yM1QwOToxOToxMC45MTFaJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAxLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAndGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgdGltZVJhbmdlOiB7IGZyb206ICdub3ctNGQnLCB0bzogJ25vdycgfSxcbiAgICAgICAgICAgICAgdXNlTm9ybWFsaXplZEVzSW50ZXJ2YWw6IHRydWUsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1RpbWVzdGFtcHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaGlwYWEnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1ISVBBQS1MYXN0LWFsZXJ0cycsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRyaWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpY3M6IFt7IGFjY2Vzc29yOiAzLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAyLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5oaXBhYScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUnVsZSBsZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDIwMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=