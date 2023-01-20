"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/Audit visualizations
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
  _id: 'Wazuh-App-Agents-Audit-New-files-metric',
  _source: {
    title: 'New files metric',
    visState: JSON.stringify({
      title: 'New files metric',
      type: 'metric',
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'gauge',
        gauge: {
          verticalSplit: false,
          autoExtend: false,
          percentageMode: false,
          gaugeType: 'Metric',
          gaugeStyle: 'Full',
          backStyle: 'Full',
          orientation: 'vertical',
          colorSchema: 'Green to Red',
          gaugeColorMode: 'None',
          useRange: false,
          colorsRange: [{
            from: 0,
            to: 100
          }],
          invertColors: false,
          labels: {
            show: true,
            color: 'black'
          },
          scale: {
            show: false,
            labels: false,
            color: '#333',
            width: 2
          },
          type: 'simple',
          style: {
            fontSize: 20,
            bgColor: false,
            labelColor: false,
            subText: ''
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'New files'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 100': 'rgb(0,104,55)'
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.id',
            value: '80790',
            params: {
              query: '80790',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.id': {
                query: '80790',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-Audit-Read-files-metric',
  _source: {
    title: 'Read files metric',
    visState: JSON.stringify({
      title: 'Read files metric',
      type: 'metric',
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'gauge',
        gauge: {
          verticalSplit: false,
          autoExtend: false,
          percentageMode: false,
          gaugeType: 'Metric',
          gaugeStyle: 'Full',
          backStyle: 'Full',
          orientation: 'vertical',
          colorSchema: 'Green to Red',
          gaugeColorMode: 'None',
          useRange: false,
          colorsRange: [{
            from: 0,
            to: 100
          }],
          invertColors: false,
          labels: {
            show: true,
            color: 'black'
          },
          scale: {
            show: false,
            labels: false,
            color: '#333',
            width: 2
          },
          type: 'simple',
          style: {
            fontSize: 20,
            bgColor: false,
            labelColor: false,
            subText: ''
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Read files'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 100': 'rgb(0,104,55)'
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.id',
            value: '80784',
            params: {
              query: '80784',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.id': {
                query: '80784',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-Audit-Modified-files-metric',
  _source: {
    title: 'Modified files metric',
    visState: JSON.stringify({
      title: 'Modified files metric',
      type: 'metric',
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'gauge',
        gauge: {
          verticalSplit: false,
          autoExtend: false,
          percentageMode: false,
          gaugeType: 'Metric',
          gaugeStyle: 'Full',
          backStyle: 'Full',
          orientation: 'vertical',
          colorSchema: 'Green to Red',
          gaugeColorMode: 'None',
          useRange: false,
          colorsRange: [{
            from: 0,
            to: 100
          }],
          invertColors: false,
          labels: {
            show: true,
            color: 'black'
          },
          scale: {
            show: false,
            labels: false,
            color: '#333',
            width: 2
          },
          type: 'simple',
          style: {
            fontSize: 20,
            bgColor: false,
            labelColor: false,
            subText: ''
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Modified files'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 100': 'rgb(0,104,55)'
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            type: 'phrases',
            key: 'rule.id',
            value: '80781, 80787',
            params: ['80781', '80787'],
            negate: false,
            disabled: false,
            alias: null
          },
          query: {
            bool: {
              should: [{
                match_phrase: {
                  'rule.id': '80781'
                }
              }, {
                match_phrase: {
                  'rule.id': '80787'
                }
              }],
              minimum_should_match: 1
            }
          },
          $state: {
            store: 'appState'
          }
        }],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-Audit-Removed-files-metric',
  _source: {
    title: 'Removed files metric',
    visState: JSON.stringify({
      title: 'Removed files metric',
      type: 'metric',
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'gauge',
        gauge: {
          verticalSplit: false,
          autoExtend: false,
          percentageMode: false,
          gaugeType: 'Metric',
          gaugeStyle: 'Full',
          backStyle: 'Full',
          orientation: 'vertical',
          colorSchema: 'Green to Red',
          gaugeColorMode: 'None',
          useRange: false,
          colorsRange: [{
            from: 0,
            to: 100
          }],
          invertColors: false,
          labels: {
            show: true,
            color: 'black'
          },
          scale: {
            show: false,
            labels: false,
            color: '#333',
            width: 2
          },
          type: 'simple',
          style: {
            fontSize: 20,
            bgColor: false,
            labelColor: false,
            subText: ''
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Removed files'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 100': 'rgb(0,104,55)'
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-alerts',
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.id',
            value: '80791',
            params: {
              query: '80791',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.id': {
                query: '80791',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-Audit-Groups',
  _source: {
    title: 'Groups',
    visState: JSON.stringify({
      title: 'Groups',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: true
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
          field: 'rule.groups',
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
  _id: 'Wazuh-App-Agents-Audit-Files',
  _source: {
    title: 'Files',
    visState: JSON.stringify({
      title: 'Files',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: true
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
          field: 'data.audit.file.name',
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
  _id: 'Wazuh-App-Agents-Audit-Alerts-over-time',
  _source: {
    title: 'Alerts over time',
    visState: JSON.stringify({
      title: 'Alerts over time',
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
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.description',
          size: 5,
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        schema: 'segment',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now-1h',
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
  _id: 'Wazuh-App-Agents-Audit-Commands',
  _source: {
    title: 'Commands',
    visState: JSON.stringify({
      title: 'Commands',
      type: 'pie',
      params: {
        type: 'pie',
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: true
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
          field: 'data.audit.command',
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-Audit-Last-alerts',
  _type: 'visualization',
  _source: {
    title: 'Last alerts',
    visState: JSON.stringify({
      title: 'Last alerts',
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
          size: 50,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Event'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.audit.exe',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Command'
        }
      }, {
        id: '5',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.audit.type',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 5,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Type'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy1hdWRpdC50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImdhdWdlIiwidmVydGljYWxTcGxpdCIsImF1dG9FeHRlbmQiLCJwZXJjZW50YWdlTW9kZSIsImdhdWdlVHlwZSIsImdhdWdlU3R5bGUiLCJiYWNrU3R5bGUiLCJvcmllbnRhdGlvbiIsImNvbG9yU2NoZW1hIiwiZ2F1Z2VDb2xvck1vZGUiLCJ1c2VSYW5nZSIsImNvbG9yc1JhbmdlIiwiZnJvbSIsInRvIiwiaW52ZXJ0Q29sb3JzIiwibGFiZWxzIiwic2hvdyIsImNvbG9yIiwic2NhbGUiLCJ3aWR0aCIsInN0eWxlIiwiZm9udFNpemUiLCJiZ0NvbG9yIiwibGFiZWxDb2xvciIsInN1YlRleHQiLCJhZ2dzIiwiaWQiLCJlbmFibGVkIiwic2NoZW1hIiwiY3VzdG9tTGFiZWwiLCJ1aVN0YXRlSlNPTiIsInZpcyIsImRlZmF1bHRDb2xvcnMiLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwiaW5kZXgiLCJmaWx0ZXIiLCJtZXRhIiwibmVnYXRlIiwiZGlzYWJsZWQiLCJhbGlhcyIsImtleSIsInZhbHVlIiwicXVlcnkiLCJtYXRjaCIsIiRzdGF0ZSIsInN0b3JlIiwibGFuZ3VhZ2UiLCJfdHlwZSIsImJvb2wiLCJzaG91bGQiLCJtYXRjaF9waHJhc2UiLCJtaW5pbXVtX3Nob3VsZF9tYXRjaCIsImxlZ2VuZFBvc2l0aW9uIiwiaXNEb251dCIsImZpZWxkIiwic2l6ZSIsIm9yZGVyIiwib3JkZXJCeSIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwidmFsdWVBeGlzIiwiY2F0ZWdvcnlBeGVzIiwicG9zaXRpb24iLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImludGVycG9sYXRlIiwidGltZXMiLCJhZGRUaW1lTWFya2VyIiwib3RoZXJCdWNrZXQiLCJvdGhlckJ1Y2tldExhYmVsIiwibWlzc2luZ0J1Y2tldCIsIm1pc3NpbmdCdWNrZXRMYWJlbCIsInRpbWVSYW5nZSIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwiaW50ZXJ2YWwiLCJ0aW1lX3pvbmUiLCJkcm9wX3BhcnRpYWxzIiwiY3VzdG9tSW50ZXJ2YWwiLCJtaW5fZG9jX2NvdW50IiwiZXh0ZW5kZWRfYm91bmRzIiwicGVyUGFnZSIsInNob3dQYXJ0aWFsUm93cyIsInNob3dNZXRpY3NBdEFsbExldmVscyIsInNvcnQiLCJjb2x1bW5JbmRleCIsImRpcmVjdGlvbiIsInNob3dUb3RhbCIsInNob3dUb29sYmFyIiwidG90YWxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUNFQSxFQUFBQSxHQUFHLEVBQUUseUNBRFA7QUFFRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSxrQkFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsa0JBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsUUFGaUI7QUFHdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxVQUFVLEVBQUUsSUFETjtBQUVOQyxRQUFBQSxTQUFTLEVBQUUsS0FGTDtBQUdOSCxRQUFBQSxJQUFJLEVBQUUsT0FIQTtBQUlOSSxRQUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsYUFBYSxFQUFFLEtBRFY7QUFFTEMsVUFBQUEsVUFBVSxFQUFFLEtBRlA7QUFHTEMsVUFBQUEsY0FBYyxFQUFFLEtBSFg7QUFJTEMsVUFBQUEsU0FBUyxF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LEtBQWYsQ0FGSDtBQXFFUEMsSUFBQUEsV0FBVyxFQUFFcEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDMUJvQyxNQUFBQSxHQUFHLEVBQUU7QUFBRWxDLFFBQUFBLE1BQU0sRUFBRTtBQUFFa0csVUFBQUEsSUFBSSxFQUFFO0FBQUVDLFlBQUFBLFdBQVcsRUFBRSxDQUFmO0FBQWtCQyxZQUFBQSxTQUFTLEVBQUU7QUFBN0I7QUFBUjtBQUFWO0FBRHFCLEtBQWYsQ0FyRU47QUF3RVBoRSxJQUFBQSxXQUFXLEVBQUUsRUF4RU47QUF5RVBDLElBQUFBLE9BQU8sRUFBRSxDQXpFRjtBQTBFUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFMUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDL0IwQyxRQUFBQSxLQUFLLEVBQUUsY0FEd0I7QUFFL0JDLFFBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQk8sUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFJLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUExRWhCO0FBSFgsQ0E3aEJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBBZ2VudHMvQXVkaXQgdmlzdWFsaXphdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUF1ZGl0LU5ldy1maWxlcy1tZXRyaWMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTmV3IGZpbGVzIG1ldHJpYycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ05ldyBmaWxlcyBtZXRyaWMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ05ldyBmaWxlcycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAncnVsZS5pZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICc4MDc5MCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJzgwNzkwJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdydWxlLmlkJzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJzgwNzkwJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUF1ZGl0LVJlYWQtZmlsZXMtbWV0cmljJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1JlYWQgZmlsZXMgbWV0cmljJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUmVhZCBmaWxlcyBtZXRyaWMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ1JlYWQgZmlsZXMnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGRlZmF1bHRDb2xvcnM6IHsgJzAgLSAxMDAnOiAncmdiKDAsMTA0LDU1KScgfSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ3J1bGUuaWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnODA3ODQnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6ICc4MDc4NCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAncnVsZS5pZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICc4MDc4NCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1BdWRpdC1Nb2RpZmllZC1maWxlcy1tZXRyaWMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTW9kaWZpZWQgZmlsZXMgbWV0cmljJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTW9kaWZpZWQgZmlsZXMgbWV0cmljJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnZ2F1Z2UnLFxuICAgICAgICAgIGdhdWdlOiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFNwbGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9FeHRlbmQ6IGZhbHNlLFxuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2F1Z2VUeXBlOiAnTWV0cmljJyxcbiAgICAgICAgICAgIGdhdWdlU3R5bGU6ICdGdWxsJyxcbiAgICAgICAgICAgIGJhY2tTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBnYXVnZUNvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgdXNlUmFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFt7IGZyb206IDAsIHRvOiAxMDAgfV0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICBzY2FsZTogeyBzaG93OiBmYWxzZSwgbGFiZWxzOiBmYWxzZSwgY29sb3I6ICcjMzMzJywgd2lkdGg6IDIgfSxcbiAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDIwLCBiZ0NvbG9yOiBmYWxzZSwgbGFiZWxDb2xvcjogZmFsc2UsIHN1YlRleHQ6ICcnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgY3VzdG9tTGFiZWw6ICdNb2RpZmllZCBmaWxlcycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZXMnLFxuICAgICAgICAgICAgICAgIGtleTogJ3J1bGUuaWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnODA3ODEsIDgwNzg3JyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFsnODA3ODEnLCAnODA3ODcnXSxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBib29sOiB7XG4gICAgICAgICAgICAgICAgICBzaG91bGQ6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX3BocmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3J1bGUuaWQnOiAnODA3ODEnLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9waHJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdydWxlLmlkJzogJzgwNzg3JyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1fc2hvdWxkX21hdGNoOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUF1ZGl0LVJlbW92ZWQtZmlsZXMtbWV0cmljJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1JlbW92ZWQgZmlsZXMgbWV0cmljJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUmVtb3ZlZCBmaWxlcyBtZXRyaWMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ1JlbW92ZWQgZmlsZXMnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGRlZmF1bHRDb2xvcnM6IHsgJzAgLSAxMDAnOiAncmdiKDAsMTA0LDU1KScgfSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ3J1bGUuaWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnODA3OTEnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6ICc4MDc5MScsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAncnVsZS5pZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICc4MDc5MScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1BdWRpdC1Hcm91cHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnR3JvdXBzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnR3JvdXBzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ3J1bGUuZ3JvdXBzJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1BdWRpdC1GaWxlcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdGaWxlcycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0ZpbGVzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2RhdGEuYXVkaXQuZmlsZS5uYW1lJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1BdWRpdC1BbGVydHMtb3Zlci10aW1lJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBvdmVyIHRpbWUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydHMgb3ZlciB0aW1lJyxcbiAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiB0cnVlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0sIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnY2FyZGluYWwnLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHsgZnJvbTogJ25vdy0xaCcsIHRvOiAnbm93JywgbW9kZTogJ3F1aWNrJyB9LFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgdGltZV96b25lOiAnRXVyb3BlL0JlcmxpbicsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBjdXN0b21JbnRlcnZhbDogJzJoJyxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1BdWRpdC1Db21tYW5kcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdDb21tYW5kcycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0NvbW1hbmRzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2RhdGEuYXVkaXQuY29tbWFuZCcsIHNpemU6IDUsIG9yZGVyOiAnZGVzYycsIG9yZGVyQnk6ICcxJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLUF1ZGl0LUxhc3QtYWxlcnRzJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTGFzdCBhbGVydHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdMYXN0IGFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBlclBhZ2U6IDEwLFxuICAgICAgICAgIHNob3dQYXJ0aWFsUm93czogZmFsc2UsXG4gICAgICAgICAgc2hvd01ldGljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDUwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnRXZlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmF1ZGl0LmV4ZScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0NvbW1hbmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmF1ZGl0LnR5cGUnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1R5cGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=