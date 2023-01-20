"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/GDPR visualizations
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
  _id: 'Wazuh-App-Overview-GDPR-Requirements-heatmap',
  _source: {
    title: 'GDPR requirements over time',
    visState: JSON.stringify({
      title: 'Alerts by action over time',
      type: 'area',
      params: {
        type: 'area',
        grid: {
          categoryLines: true,
          style: {
            color: '#eee'
          },
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
          type: 'area',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          drawLinesBetweenPoints: true,
          showCircles: true,
          interpolate: 'cardinal',
          valueAxis: 'ValueAxis-1'
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false
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
            from: 'now-24h',
            to: 'now',
            mode: 'quick'
          },
          useNormalizedEsInterval: true,
          interval: 'auto',
          time_zone: 'Europe/Berlin',
          drop_partials: false,
          customInterval: '2h',
          min_doc_count: 1,
          extended_bounds: {}
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.gdpr',
          size: 5,
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
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
          language: 'lucene',
          query: ''
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GDPR-Requirements-Agents-heatmap',
  _type: 'visualization',
  _source: {
    title: 'Last alerts',
    visState: JSON.stringify({
      title: 'Last alerts',
      type: 'heatmap',
      params: {
        type: 'heatmap',
        addTooltip: true,
        addLegend: true,
        enableHover: false,
        legendPosition: 'right',
        times: [],
        colorsNumber: 10,
        colorSchema: 'Greens',
        setColorRange: false,
        colorsRange: [],
        invertColors: false,
        percentageMode: false,
        valueAxes: [{
          show: false,
          id: 'ValueAxis-1',
          type: 'value',
          scale: {
            type: 'linear',
            defaultYExtents: false
          },
          labels: {
            show: false,
            rotate: 0,
            overwriteColor: false,
            color: '#555'
          }
        }]
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
          field: 'rule.gdpr',
          size: 5,
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirements'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'agent.name',
          size: 5,
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agents'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 13': 'rgb(247,252,245)',
          '13 - 26': 'rgb(233,247,228)',
          '26 - 39': 'rgb(211,238,205)',
          '39 - 52': 'rgb(184,227,177)',
          '52 - 65': 'rgb(152,213,148)',
          '65 - 78': 'rgb(116,196,118)',
          '78 - 91': 'rgb(75,176,98)',
          '91 - 104': 'rgb(47,152,79)',
          '104 - 117': 'rgb(21,127,59)',
          '117 - 130': 'rgb(0,100,40)'
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Overview-GDPR-requirements',
  _source: {
    title: 'GDPR requirements',
    visState: JSON.stringify({
      title: 'GDPR requirements',
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
                pattern: 'YYYY-MM-DD'
              }
            },
            params: {
              date: true,
              interval: 'P1D',
              format: 'YYYY-MM-DD'
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
        radiusRatio: 50
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
            from: 'now-1h',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.gdpr',
          orderBy: '1',
          order: 'desc',
          size: 50,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'count',
        schema: 'radius',
        params: {}
      }]
    }),
    uiStateJSON: '{"vis":{"legendOpen":false}}',
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
  _id: 'Wazuh-App-Overview-GDPR-Agents',
  _source: {
    title: 'GDPR Agents',
    visState: JSON.stringify({
      title: 'GDPR Agents',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: false
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
          field: 'agent.name',
          size: 10,
          order: 'desc',
          orderBy: '1'
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
  _id: 'Wazuh-App-Overview-GDPR-Requirements-by-agent',
  _source: {
    title: 'GDPR Requirements by agent',
    visState: JSON.stringify({
      title: 'GDPR Requirements by agent',
      type: 'histogram',
      params: {
        type: 'histogram',
        grid: {
          categoryLines: false,
          style: {
            color: '#eee'
          }
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
            truncate: 100,
            rotate: 0
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
        radiusRatio: 51
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
          field: 'rule.gdpr',
          size: 5,
          order: 'desc',
          orderBy: '1',
          customLabel: 'GDPR Requirements'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'agent.name',
          size: 5,
          order: 'desc',
          orderBy: '1'
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
  _id: 'Wazuh-App-Overview-GDPR-Last-alerts',
  _type: 'visualization',
  _source: {
    title: 'GDPR Last alerts',
    visState: JSON.stringify({
      title: 'GDPR Last alerts',
      type: 'table',
      params: {
        perPage: 10,
        showPartialRows: false,
        showMeticsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        showToolbar: true,
        totalFunc: 'sum'
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
        schema: 'bucket',
        params: {
          field: 'agent.name',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 50,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Agent name'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.gdpr',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Requirement'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.description',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Rule description'
        }
      }]
    }),
    uiStateJSON: '{"vis":{"params":{"sort":{"columnIndex":3,"direction":"desc"}}}}',
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
}, {
  _id: 'Wazuh-App-Overview-GDPR-Alerts-summary',
  _type: 'visualization',
  _source: {
    title: 'Alerts summary',
    visState: JSON.stringify({
      title: 'Alerts summary',
      type: 'table',
      params: {
        perPage: 10,
        showPartialRows: false,
        showMeticsAtAllLevels: false,
        sort: {
          columnIndex: 3,
          direction: 'desc'
        },
        showTotal: false,
        showToolbar: true,
        totalFunc: 'sum'
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
        schema: 'bucket',
        params: {
          field: 'agent.name',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 50,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Agent name'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.gdpr',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Requirement'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.description',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Rule description'
        }
      }]
    }),
    uiStateJSON: '{"vis":{"params":{"sort":{"columnIndex":3,"direction":"desc"}}}}',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWdkcHIudHMiXSwibmFtZXMiOlsiX2lkIiwiX3NvdXJjZSIsInRpdGxlIiwidmlzU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInBhcmFtcyIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwic3R5bGUiLCJjb2xvciIsInZhbHVlQXhpcyIsImNhdGVnb3J5QXhlcyIsImlkIiwicG9zaXRpb24iLCJzaG93Iiwic2NhbGUiLCJsYWJlbHMiLCJmaWx0ZXIiLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImludGVycG9sYXRlIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwidGltZXMiLCJhZGRUaW1lTWFya2VyIiwiYWdncyIsImVuYWJsZWQiLCJzY2hlbWEiLCJmaWVsZCIsInRpbWVSYW5nZSIsImZyb20iLCJ0byIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwiaW50ZXJ2YWwiLCJ0aW1lX3pvbmUiLCJkcm9wX3BhcnRpYWxzIiwiY3VzdG9tSW50ZXJ2YWwiLCJtaW5fZG9jX2NvdW50IiwiZXh0ZW5kZWRfYm91bmRzIiwic2l6ZSIsIm9yZGVyIiwib3JkZXJCeSIsIm90aGVyQnVja2V0Iiwib3RoZXJCdWNrZXRMYWJlbCIsIm1pc3NpbmdCdWNrZXQiLCJtaXNzaW5nQnVja2V0TGFiZWwiLCJ1aVN0YXRlSlNPTiIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsImtpYmFuYVNhdmVkT2JqZWN0TWV0YSIsInNlYXJjaFNvdXJjZUpTT04iLCJpbmRleCIsInF1ZXJ5IiwibGFuZ3VhZ2UiLCJfdHlwZSIsImVuYWJsZUhvdmVyIiwiY29sb3JzTnVtYmVyIiwiY29sb3JTY2hlbWEiLCJzZXRDb2xvclJhbmdlIiwiY29sb3JzUmFuZ2UiLCJpbnZlcnRDb2xvcnMiLCJwZXJjZW50YWdlTW9kZSIsImRlZmF1bHRZRXh0ZW50cyIsIm92ZXJ3cml0ZUNvbG9yIiwiY3VzdG9tTGFiZWwiLCJ2aXMiLCJkZWZhdWx0Q29sb3JzIiwiZGltZW5zaW9ucyIsIngiLCJhY2Nlc3NvciIsImZvcm1hdCIsInBhdHRlcm4iLCJkYXRlIiwiYWdnVHlwZSIsInkiLCJ6Iiwic2VyaWVzIiwicmFkaXVzUmF0aW8iLCJpc0RvbnV0IiwicGVyUGFnZSIsInNob3dQYXJ0aWFsUm93cyIsInNob3dNZXRpY3NBdEFsbExldmVscyIsInNvcnQiLCJjb2x1bW5JbmRleCIsImRpcmVjdGlvbiIsInNob3dUb3RhbCIsInNob3dUb29sYmFyIiwidG90YWxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUNFQSxFQUFBQSxHQUFHLEVBQUUsOENBRFA7QUFFRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSw2QkFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsNEJBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsTUFGaUI7QUFHdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUNORCxRQUFBQSxJQUFJLEVBQUUsTUFEQTtBQUVORSxRQUFBQSxJQUFJLEVBQUU7QUFBRUMsVUFBQUEsYUFBYSxFQUFFLElBQWpCO0FBQXVCQyxVQUFBQSxLQUFLLEVBQUU7QUFBRUMsWUFBQUEsS0FBSyxFQUFFO0FBQVQsV0FBOUI7QUFBaURDLFVBQUFBLFNBQVMsRUFBRTtBQUE1RCxTQUZBO0FBR05DLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLEVBQUUsRUFBRSxnQkFETjtBQUVFUixVQUFBQSxJQUFJLEVBQUUsVUFGUjtBQUdFUyxVQUFBQSxRQUFRLEVBQUUsUUFIWjtBQUlFQyxVQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFTixVQUFBQSxLQUFLLEVB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T0FIWjtBQUlOQyxVQUFBQSxhQUFhLEVBQUUsS0FKVDtBQUtOQyxVQUFBQSxrQkFBa0IsRUFBRSxTQUxkO0FBTU5OLFVBQUFBLElBQUksRUFBRSxFQU5BO0FBT05DLFVBQUFBLEtBQUssRUFBRSxNQVBEO0FBUU5DLFVBQUFBLE9BQU8sRUFBRSxHQVJIO0FBU051QixVQUFBQSxXQUFXLEVBQUU7QUFUUDtBQUxWLE9BcENJO0FBWmlCLEtBQWYsQ0FGSDtBQXFFUGxCLElBQUFBLFdBQVcsRUFBRSxrRUFyRU47QUFzRVBDLElBQUFBLFdBQVcsRUFBRSxFQXRFTjtBQXVFUEMsSUFBQUEsT0FBTyxFQUFFLENBdkVGO0FBd0VQQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUNyQkMsTUFBQUEsZ0JBQWdCLEVBQUUxRCxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUMvQjBELFFBQUFBLEtBQUssRUFBRSxjQUR3QjtBQUUvQjVDLFFBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQjZDLFFBQUFBLEtBQUssRUFBRTtBQUFFQSxVQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFBQSxRQUFRLEVBQUU7QUFBdkI7QUFId0IsT0FBZjtBQURHO0FBeEVoQjtBQUhYLENBM2hCYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgT3ZlcnZpZXcvR0RQUiB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HRFBSLVJlcXVpcmVtZW50cy1oZWF0bWFwJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0dEUFIgcmVxdWlyZW1lbnRzIG92ZXIgdGltZScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBieSBhY3Rpb24gb3ZlciB0aW1lJyxcbiAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiB0cnVlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0sIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdjYXJkaW5hbCcsXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTI0aCcsIHRvOiAnbm93JywgbW9kZTogJ3F1aWNrJyB9LFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgdGltZV96b25lOiAnRXVyb3BlL0JlcmxpbicsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBjdXN0b21JbnRlcnZhbDogJzJoJyxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmdkcHInLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR0RQUi1SZXF1aXJlbWVudHMtQWdlbnRzLWhlYXRtYXAnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdMYXN0IGFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0xhc3QgYWxlcnRzJyxcbiAgICAgICAgdHlwZTogJ2hlYXRtYXAnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGVhdG1hcCcsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgZW5hYmxlSG92ZXI6IGZhbHNlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBjb2xvcnNOdW1iZXI6IDEwLFxuICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW5zJyxcbiAgICAgICAgICBzZXRDb2xvclJhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb2xvcnNSYW5nZTogW10sXG4gICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIGRlZmF1bHRZRXh0ZW50czogZmFsc2UgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlLCByb3RhdGU6IDAsIG92ZXJ3cml0ZUNvbG9yOiBmYWxzZSwgY29sb3I6ICcjNTU1JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmdkcHInLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQWdlbnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7XG4gICAgICAgICAgZGVmYXVsdENvbG9yczoge1xuICAgICAgICAgICAgJzAgLSAxMyc6ICdyZ2IoMjQ3LDI1MiwyNDUpJyxcbiAgICAgICAgICAgICcxMyAtIDI2JzogJ3JnYigyMzMsMjQ3LDIyOCknLFxuICAgICAgICAgICAgJzI2IC0gMzknOiAncmdiKDIxMSwyMzgsMjA1KScsXG4gICAgICAgICAgICAnMzkgLSA1Mic6ICdyZ2IoMTg0LDIyNywxNzcpJyxcbiAgICAgICAgICAgICc1MiAtIDY1JzogJ3JnYigxNTIsMjEzLDE0OCknLFxuICAgICAgICAgICAgJzY1IC0gNzgnOiAncmdiKDExNiwxOTYsMTE4KScsXG4gICAgICAgICAgICAnNzggLSA5MSc6ICdyZ2IoNzUsMTc2LDk4KScsXG4gICAgICAgICAgICAnOTEgLSAxMDQnOiAncmdiKDQ3LDE1Miw3OSknLFxuICAgICAgICAgICAgJzEwNCAtIDExNyc6ICdyZ2IoMjEsMTI3LDU5KScsXG4gICAgICAgICAgICAnMTE3IC0gMTMwJzogJ3JnYigwLDEwMCw0MCknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdEUFItcmVxdWlyZW1lbnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0dEUFIgcmVxdWlyZW1lbnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnR0RQUiByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IHRydWUsIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnQ291bnQnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogZmFsc2UsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczogeyBkYXRlOiB0cnVlLCBpbnRlcnZhbDogJ1AxRCcsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHo6IFt7IGFjY2Vzc29yOiAzLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFkaXVzUmF0aW86IDUwLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHsgZnJvbTogJ25vdy0xaCcsIHRvOiAnbm93JyB9LFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgZHJvcF9wYXJ0aWFsczogZmFsc2UsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5nZHByJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBpZDogJzQnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdyYWRpdXMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne1widmlzXCI6e1wibGVnZW5kT3BlblwiOmZhbHNlfX0nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HRFBSLUFnZW50cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdHRFBSIEFnZW50cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0dEUFIgQWdlbnRzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdhZ2VudC5uYW1lJywgc2l6ZTogMTAsIG9yZGVyOiAnZGVzYycsIG9yZGVyQnk6ICcxJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HRFBSLVJlcXVpcmVtZW50cy1ieS1hZ2VudCcsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdHRFBSIFJlcXVpcmVtZW50cyBieSBhZ2VudCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0dEUFIgUmVxdWlyZW1lbnRzIGJ5IGFnZW50JyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogZmFsc2UsIHN0eWxlOiB7IGNvbG9yOiAnI2VlZScgfSB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAsIHJvdGF0ZTogMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgcmFkaXVzUmF0aW86IDUxLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmdkcHInLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnR0RQUiBSZXF1aXJlbWVudHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2FnZW50Lm5hbWUnLCBzaXplOiA1LCBvcmRlcjogJ2Rlc2MnLCBvcmRlckJ5OiAnMScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR0RQUi1MYXN0LWFsZXJ0cycsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0dEUFIgTGFzdCBhbGVydHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdHRFBSIExhc3QgYWxlcnRzJyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0aWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IG51bGwsIGRpcmVjdGlvbjogbnVsbCB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdhZ2VudC5uYW1lJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDUwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQWdlbnQgbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZ2RwcicsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3tcInZpc1wiOntcInBhcmFtc1wiOntcInNvcnRcIjp7XCJjb2x1bW5JbmRleFwiOjMsXCJkaXJlY3Rpb25cIjpcImRlc2NcIn19fX0nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR0RQUi1BbGVydHMtc3VtbWFyeScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50IG5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmdkcHInLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSdWxlIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7XCJ2aXNcIjp7XCJwYXJhbXNcIjp7XCJzb3J0XCI6e1wiY29sdW1uSW5kZXhcIjozLFwiZGlyZWN0aW9uXCI6XCJkZXNjXCJ9fX19JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==