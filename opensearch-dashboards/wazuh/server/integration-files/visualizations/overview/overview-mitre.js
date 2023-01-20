"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview MITRE visualizations
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
  _id: 'Wazuh-App-Overview-MITRE',
  _source: {
    title: 'Mitre attack count',
    visState: JSON.stringify({
      aggs: [{
        enabled: true,
        id: '1',
        params: {},
        schema: 'metric',
        type: 'count'
      }, {
        enabled: true,
        id: '2',
        params: {
          field: 'rule.mitre.id',
          customLabel: 'Attack ID',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          size: 244
        },
        schema: 'bucket',
        type: 'terms'
      }],
      params: {
        dimensions: {
          buckets: [],
          metrics: [{
            accessor: 0,
            aggType: 'count',
            format: {
              id: 'number'
            },
            params: {}
          }]
        },
        perPage: 10,
        percentageCol: '',
        showMetricsAtAllLevels: false,
        showPartialRows: false,
        showTotal: false,
        showToolbar: true,
        sort: {
          columnIndex: null,
          direction: null
        },
        totalFunc: 'sum'
      },
      title: 'mitre',
      type: 'table'
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
  _id: 'Wazuh-App-Overview-MITRE-Alerts-Evolution',
  _source: {
    title: 'Mitre alerts evolution',
    visState: JSON.stringify({
      title: 'Alert Evolution',
      type: 'line',
      params: {
        type: 'line',
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
          type: 'line',
          mode: 'normal',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          showCircles: true,
          lineWidth: 2
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false,
        labels: {},
        thresholdLine: {
          show: false,
          value: 10,
          width: 1,
          style: 'full',
          color: '#34130C'
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
              interval: 'PT3H',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2019-11-07T15:45:45.770Z',
                max: '2019-11-14T15:45:45.770Z'
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
            from: 'now-7d',
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
          field: 'rule.mitre.technique',
          customLabel: 'Attack ID',
          orderBy: '1',
          order: 'desc',
          size: 5,
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
  _id: 'Wazuh-App-Overview-MITRE-Attacks-By-Agent',
  _source: {
    title: 'Mitre techniques by agent',
    visState: JSON.stringify({
      title: 'attack by agent',
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
            accessor: 0,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
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
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'rule.mitre.technique',
          orderBy: '1',
          order: 'desc',
          size: 5,
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
  _id: 'Wazuh-App-Overview-MITRE-Attacks-By-Technique',
  _source: {
    title: 'Attacks by technique',
    visState: JSON.stringify({
      title: 'Attacks by tactic',
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
        thresholdLine: {
          show: false,
          value: 10,
          width: 1,
          style: 'full',
          color: '#34130C'
        },
        dimensions: {
          x: null,
          y: [{
            accessor: 1,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          }],
          series: [{
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
        schema: 'group',
        params: {
          field: 'rule.mitre.technique',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'rule.mitre.tactic',
          orderBy: '1',
          order: 'desc',
          size: 5,
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
  _id: 'Wazuh-App-Overview-MITRE-Top-Tactics-By-Agent',
  _source: {
    title: 'Top tactics by agent',
    visState: JSON.stringify({
      title: 'Top tactics by agent - vertical',
      type: 'area',
      params: {
        addLegend: true,
        addTimeMarker: false,
        addTooltip: true,
        categoryAxes: [{
          id: 'CategoryAxis-1',
          labels: {
            filter: true,
            show: true,
            truncate: 10
          },
          position: 'bottom',
          scale: {
            type: 'linear'
          },
          show: true,
          style: {},
          title: {},
          type: 'category'
        }],
        dimensions: {
          x: {
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
        },
        grid: {
          categoryLines: false,
          valueAxis: 'ValueAxis-1'
        },
        labels: {},
        legendPosition: 'right',
        seriesParams: [{
          data: {
            id: '1',
            label: 'Count'
          },
          drawLinesBetweenPoints: true,
          interpolate: 'linear',
          mode: 'normal',
          show: 'true',
          showCircles: true,
          type: 'histogram',
          valueAxis: 'ValueAxis-1'
        }],
        thresholdLine: {
          color: '#34130C',
          show: false,
          style: 'full',
          value: 10,
          width: 1
        },
        times: [],
        type: 'area',
        valueAxes: [{
          id: 'ValueAxis-1',
          labels: {
            filter: false,
            rotate: 0,
            show: true,
            truncate: 100
          },
          name: 'LeftAxis-1',
          position: 'left',
          scale: {
            mode: 'normal',
            type: 'linear'
          },
          show: true,
          style: {},
          title: {
            text: 'Count'
          },
          type: 'value'
        }]
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
        schema: 'group',
        params: {
          field: 'rule.mitre.tactic',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 5,
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
  _id: 'Wazuh-App-Overview-MITRE-Top-Tactics',
  _source: {
    title: 'Top tactics',
    visState: JSON.stringify({
      title: 'Top tactics PIE2',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: false,
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
          field: 'rule.mitre.tactic',
          orderBy: '1',
          order: 'desc',
          size: 10,
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
  _id: 'Wazuh-App-Overview-MITRE-Alerts-summary',
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
          field: 'rule.id',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 50,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Rule ID'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.description',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 20,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Description'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'rule.level',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 12,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Level'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LW1pdHJlLnRzIl0sIm5hbWVzIjpbIl9pZCIsIl9zb3VyY2UiLCJ0aXRsZSIsInZpc1N0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImFnZ3MiLCJlbmFibGVkIiwiaWQiLCJwYXJhbXMiLCJzY2hlbWEiLCJ0eXBlIiwiZmllbGQiLCJjdXN0b21MYWJlbCIsIm1pc3NpbmdCdWNrZXQiLCJtaXNzaW5nQnVja2V0TGFiZWwiLCJvcmRlciIsIm9yZGVyQnkiLCJvdGhlckJ1Y2tldCIsIm90aGVyQnVja2V0TGFiZWwiLCJzaXplIiwiZGltZW5zaW9ucyIsImJ1Y2tldHMiLCJtZXRyaWNzIiwiYWNjZXNzb3IiLCJhZ2dUeXBlIiwiZm9ybWF0IiwicGVyUGFnZSIsInBlcmNlbnRhZ2VDb2wiLCJzaG93TWV0cmljc0F0QWxsTGV2ZWxzIiwic2hvd1BhcnRpYWxSb3dzIiwic2hvd1RvdGFsIiwic2hvd1Rvb2xiYXIiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iLCJ0b3RhbEZ1bmMiLCJ1aVN0YXRlSlNPTiIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsImtpYmFuYVNhdmVkT2JqZWN0TWV0YSIsInNlYXJjaFNvdXJjZUpTT04iLCJpbmRleCIsImZpbHRlciIsInF1ZXJ5IiwibGFuZ3VhZ2UiLCJfdHlwZSIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwiY2F0ZWdvcnlBeGVzIiwicG9zaXRpb24iLCJzaG93Iiwic3R5bGUiLCJzY2FsZSIsImxhYmVscyIsInRydW5jYXRlIiwidmFsdWVBeGVzIiwibmFtZSIsIm1vZGUiLCJyb3RhdGUiLCJ0ZXh0Iiwic2VyaWVzUGFyYW1zIiwiZGF0YSIsImxhYmVsIiwidmFsdWVBeGlzIiwiZHJhd0xpbmVzQmV0d2VlblBvaW50cyIsInNob3dDaXJjbGVzIiwibGluZVdpZHRoIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwidGltZXMiLCJhZGRUaW1lTWFya2VyIiwidGhyZXNob2xkTGluZSIsInZhbHVlIiwid2lkdGgiLCJjb2xvciIsIngiLCJwYXR0ZXJuIiwiZGF0ZSIsImludGVydmFsIiwiYm91bmRzIiwibWluIiwibWF4IiwieSIsInNlcmllcyIsInRpbWVSYW5nZSIsImZyb20iLCJ0byIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwiZHJvcF9wYXJ0aWFscyIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJpc0RvbnV0IiwidmFsdWVzIiwibGFzdF9sZXZlbCIsIm1ldHJpYyIsImludGVycG9sYXRlIiwic2hvd01ldGljc0F0QWxsTGV2ZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUNFQSxFQUFBQSxHQUFHLEVBQUUsMEJBRFA7QUFFRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSxvQkFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCQyxNQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUFFQyxRQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQkMsUUFBQUEsRUFBRSxFQUFFLEdBQXJCO0FBQTBCQyxRQUFBQSxNQUFNLEVBQUUsRUFBbEM7QUFBc0NDLFFBQUFBLE1BQU0sRUFBRSxRQUE5QztBQUF3REMsUUFBQUEsSUFBSSxFQUFFO0FBQTlELE9BREksRUFFSjtBQUNFSixRQUFBQSxPQUFPLEVBQUUsSUFEWDtBQUVFQyxRQUFBQSxFQUFFLEVBQUUsR0FGTjtBQUdFQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkcsVUFBQUEsS0FBSyxFQUFFLGVBREQ7QUFFTkMsVUFBQUEsV0FBVyxFQUFFLFdBRlA7QUFHTkMsVUFBQUEsYUFBYSxFQUFFLEtBSFQ7QUFJTkMsVUFBQUEsa0JBQWtCLEVBQUUsU0FKZDtBQUtOQyxVQUFBQSxLQUFLLEVBQUUsTUFMRDtBQU1OQyxVQUFBQSxPQUFPLEVBQUUsR0FOSDtBQU9OQyxVQUFBQSxXQUFXLEVBQUUsS0FQUDtBQVFOQyxV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dGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctTUlUUkUnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTWl0cmUgYXR0YWNrIGNvdW50JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGVuYWJsZWQ6IHRydWUsIGlkOiAnMScsIHBhcmFtczoge30sIHNjaGVtYTogJ21ldHJpYycsIHR5cGU6ICdjb3VudCcgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUuaWQnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0F0dGFjayBJRCcsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIHNpemU6IDI0NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBidWNrZXRzOiBbXSxcbiAgICAgICAgICAgIG1ldHJpY3M6IFt7IGFjY2Vzc29yOiAwLCBhZ2dUeXBlOiAnY291bnQnLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30gfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBwZXJjZW50YWdlQ29sOiAnJyxcbiAgICAgICAgICBzaG93TWV0cmljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogbnVsbCwgZGlyZWN0aW9uOiBudWxsIH0sXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6ICdtaXRyZScsXG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1NSVRSRS1BbGVydHMtRXZvbHV0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01pdHJlIGFsZXJ0cyBldm9sdXRpb24nLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydCBFdm9sdXRpb24nLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHt9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHsgc2hvdzogZmFsc2UsIHZhbHVlOiAxMCwgd2lkdGg6IDEsIHN0eWxlOiAnZnVsbCcsIGNvbG9yOiAnIzM0MTMwQycgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREIEhIOm1tJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdQVDNIJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tJyxcbiAgICAgICAgICAgICAgICBib3VuZHM6IHsgbWluOiAnMjAxOS0xMS0wN1QxNTo0NTo0NS43NzBaJywgbWF4OiAnMjAxOS0xMS0xNFQxNTo0NTo0NS43NzBaJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAyLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTdkJywgdG86ICdub3cnIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm1pdHJlLnRlY2huaXF1ZScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQXR0YWNrIElEJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU1JVFJFLUF0dGFja3MtQnktQWdlbnQnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTWl0cmUgdGVjaG5pcXVlcyBieSBhZ2VudCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ2F0dGFjayBieSBhZ2VudCcsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgbWV0cmljOiB7IGFjY2Vzc29yOiAwLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdhZ2VudC5uYW1lJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGVjaG5pcXVlJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU1JVFJFLUF0dGFja3MtQnktVGVjaG5pcXVlJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0F0dGFja3MgYnkgdGVjaG5pcXVlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQXR0YWNrcyBieSB0YWN0aWMnLFxuICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiBmYWxzZSB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnQ291bnQnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHsgc2hvdzogZmFsc2UsIHZhbHVlOiAxMCwgd2lkdGg6IDEsIHN0eWxlOiAnZnVsbCcsIGNvbG9yOiAnIzM0MTMwQycgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiBudWxsLFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGVjaG5pcXVlJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGFjdGljJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU1JVFJFLVRvcC1UYWN0aWNzLUJ5LUFnZW50JyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCB0YWN0aWNzIGJ5IGFnZW50JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIHRhY3RpY3MgYnkgYWdlbnQgLSB2ZXJ0aWNhbCcsXG4gICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgZmlsdGVyOiB0cnVlLCBzaG93OiB0cnVlLCB0cnVuY2F0ZTogMTAgfSxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6ICdzdHJpbmcnLCBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLCBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAyLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiBmYWxzZSwgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnIH0sXG4gICAgICAgICAgbGFiZWxzOiB7fSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF0YTogeyBpZDogJzEnLCBsYWJlbDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnBvbGF0ZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHsgY29sb3I6ICcjMzQxMzBDJywgc2hvdzogZmFsc2UsIHN0eWxlOiAnZnVsbCcsIHZhbHVlOiAxMCwgd2lkdGg6IDEgfSxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IGZpbHRlcjogZmFsc2UsIHJvdGF0ZTogMCwgc2hvdzogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNjYWxlOiB7IG1vZGU6ICdub3JtYWwnLCB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGFjdGljJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctTUlUUkUtVG9wLVRhY3RpY3MnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIHRhY3RpY3MnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgdGFjdGljcyBQSUUyJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgbWV0cmljOiB7IGFjY2Vzc29yOiAxLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfSxcbiAgICAgICAgICAgIGJ1Y2tldHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGFjdGljJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1NSVRSRS1BbGVydHMtc3VtbWFyeScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5pZCcsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3tcInZpc1wiOntcInBhcmFtc1wiOntcInNvcnRcIjp7XCJjb2x1bW5JbmRleFwiOjMsXCJkaXJlY3Rpb25cIjpcImRlc2NcIn19fX0nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuIl19