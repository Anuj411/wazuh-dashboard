"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../../../common/constants");

/*
 * Wazuh app - Module for Overview/General visualizations
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
  _id: 'Wazuh-App-Overview-General-Agents-status',
  _source: {
    title: 'Agents status',
    visState: JSON.stringify({
      title: 'Agents Status',
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
          show: true,
          mode: 'normal',
          type: 'line',
          drawLinesBetweenPoints: true,
          showCircles: true,
          interpolate: 'cardinal',
          lineWidth: 3.5,
          data: {
            id: '4',
            label: 'Unique count of id'
          },
          valueAxis: 'ValueAxis-1'
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false
      },
      aggs: [{
        id: '2',
        enabled: true,
        type: 'date_histogram',
        interval: '1ms',
        schema: 'segment',
        params: {
          field: 'timestamp',
          interval: '1ms',
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
          field: 'status',
          size: 5,
          order: 'desc',
          orderBy: '_term'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'cardinality',
        schema: 'metric',
        params: {
          field: 'id'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        colors: {
          active: _constants.UI_COLOR_AGENT_STATUS.active,
          disconnected: _constants.UI_COLOR_AGENT_STATUS.disconnected,
          pending: _constants.UI_COLOR_AGENT_STATUS.pending,
          never_connected: _constants.UI_COLOR_AGENT_STATUS.never_connected
        }
      }
    }),
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-monitoring',
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
  _id: 'Wazuh-App-Overview-General-Metric-alerts',
  _source: {
    title: 'Metric alerts',
    visState: JSON.stringify({
      title: 'Metric Alerts',
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
          customLabel: 'Alerts'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-General-Level-12-alerts',
  _source: {
    title: 'Level 12 alerts',
    visState: JSON.stringify({
      title: 'Count Level 12 Alerts',
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
          customLabel: 'Level 12 or above alerts'
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
          $state: {
            store: 'appState'
          },
          meta: {
            alias: null,
            disabled: false,
            index: 'wazuh-alerts',
            key: 'rule.level',
            negate: false,
            params: {
              gte: 12,
              lt: null
            },
            type: 'range',
            value: '12 to +∞'
          },
          range: {
            'rule.level': {
              gte: 12,
              lt: null
            }
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
  _id: 'Wazuh-App-Overview-General-Authentication-failure',
  _source: {
    title: 'Authentication failure',
    visState: JSON.stringify({
      title: 'Count Authentication Failure',
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
          customLabel: 'Authentication failure'
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
            key: 'rule.groups',
            value: 'win_authentication_failed, authentication_failed, authentication_failures',
            params: ['win_authentication_failed', 'authentication_failed', 'authentication_failures'],
            negate: false,
            disabled: false,
            alias: null
          },
          query: {
            bool: {
              should: [{
                match_phrase: {
                  'rule.groups': 'win_authentication_failed'
                }
              }, {
                match_phrase: {
                  'rule.groups': 'authentication_failed'
                }
              }, {
                match_phrase: {
                  'rule.groups': 'authentication_failures'
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
  _id: 'Wazuh-App-Overview-General-Authentication-success',
  _source: {
    title: 'Authentication success',
    visState: JSON.stringify({
      title: 'Count Authentication Success',
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
          customLabel: 'Authentication success'
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
            key: 'rule.groups',
            value: 'authentication_success',
            params: {
              query: 'authentication_success',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.groups': {
                query: 'authentication_success',
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
  _id: 'Wazuh-App-Overview-General-Alert-level-evolution',
  _source: {
    title: 'Alert level evolution',
    visState: JSON.stringify({
      title: 'Alert level evolution',
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
          field: 'rule.level',
          size: '15',
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
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-General-Alerts-Top-Mitre',
  _source: {
    title: 'Alerts',
    visState: JSON.stringify({
      type: 'pie',
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
          field: 'rule.mitre.technique',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }],
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
        }
      },
      title: 'mitre top'
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
  _id: 'Wazuh-App-Overview-General-Top-5-agents',
  _source: {
    title: 'Top 5 agents',
    visState: JSON.stringify({
      title: 'Top 5 agents',
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
    uiStateJSON: JSON.stringify({
      vis: {
        legendOpen: true
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
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-General-Top-5-agents-Evolution',
  _source: {
    title: 'Top 5 rule groups',
    visState: JSON.stringify({
      type: 'histogram',
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
            from: '2020-07-19T16:18:13.637Z',
            to: '2020-07-28T13:58:33.357Z'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
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
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }],
      params: {
        type: 'area',
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
          show: true,
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          drawLinesBetweenPoints: true,
          lineWidth: 2,
          showCircles: true,
          interpolate: 'linear',
          valueAxis: 'ValueAxis-1'
        }],
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        times: [],
        addTimeMarker: false,
        thresholdLine: {
          show: false,
          value: 10,
          width: 1,
          style: 'full',
          color: '#E7664C'
        },
        labels: {}
      },
      title: 'top 5 agents evolution'
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        legendOpen: true
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
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-General-Alerts-summary',
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
          size: 1000,
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
}, {
  _id: 'Wazuh-App-Overview-General-Alerts-evolution-Top-5-agents',
  _type: 'visualization',
  _source: {
    title: 'Alerts evolution Top 5 agents',
    visState: JSON.stringify({
      title: 'Alerts evolution Top 5 agents',
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
          field: 'agent.name',
          size: 5,
          order: 'desc',
          orderBy: '1'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        schema: 'segment',
        params: {
          field: 'timestamp',
          interval: 'auto',
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
  }
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWdlbmVyYWwudHMiXSwibmFtZXMiOlsiX2lkIiwiX3NvdXJjZSIsInRpdGxlIiwidmlzU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInBhcmFtcyIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwic3R5bGUiLCJjb2xvciIsImNhdGVnb3J5QXhlcyIsImlkIiwicG9zaXRpb24iLCJzaG93Iiwic2NhbGUiLCJsYWJlbHMiLCJmaWx0ZXIiLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImludGVycG9sYXRlIiwibGluZVdpZHRoIiwiZGF0YSIsImxhYmVsIiwidmFsdWVBeGlzIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwidGltZXMiLCJhZGRUaW1lTWFya2VyIiwiYWdncyIsImVuYWJsZWQiLCJpbnRlcnZhbCIsInNjaGVtYSIsImZpZWxkIiwiY3VzdG9tSW50ZXJ2YWwiLCJtaW5fZG9jX2NvdW50IiwiZXh0ZW5kZWRfYm91bmRzIiwic2l6ZSIsIm9yZGVyIiwib3JkZXJCeSIsInVpU3RhdGVKU09OIiwidmlzIiwiY29sb3JzIiwiYWN0aXZlIiwiVUlfQ09MT1JfQUdFTlRfU1RBVFVTIiwiZGlzY29ubmVjdGVkIiwicGVuZGluZyIsIm5ldmVyX2Nvbm5lY3RlZCIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsImtpYmFuYVNhdmVkT2JqZWN0TWV0YSIsInNlYXJjaFNvdXJjZUpTT04iLCJpbmRleCIsInF1ZXJ5IiwibGFuZ3VhZ2UiLCJfdHlwZSIsImdhdWdlIiwidmVydGljYWxTcGxpdCIsImF1dG9FeHRlbmQiLCJwZXJjZW50YWdlTW9kZSIsImdhdWdlVHlwZSIsImdhdWdlU3R5bGUiLCJiYWNrU3R5bGUiLCJvcmllbnRhdGlvbiIsImNvbG9yU2NoZW1hIiwiZ2F1Z2VDb2xvck1vZGUiLCJ1c2VSYW5nZSIsImNvbG9yc1JhbmdlIiwiZnJvbSIsInRvIiwiaW52ZXJ0Q29sb3JzIiwid2lkdGgiLCJmb250U2l6ZSIsImJnQ29sb3IiLCJsYWJlbENvbG9yIiwic3ViVGV4dCIsImN1c3RvbUxhYmVsIiwiZGVmYXVsdENvbG9ycyIsIiRzdGF0ZSIsInN0b3JlIiwibWV0YSIsImFsaWFzIiwiZGlzYWJsZWQiLCJrZXkiLCJuZWdhdGUiLCJndGUiLCJsdCIsInZhbHVlIiwicmFuZ2UiLCJib29sIiwic2hvdWxkIiwibWF0Y2hfcGhyYXNlIiwibWluaW11bV9zaG91bGRfbWF0Y2giLCJtYXRjaCIsInRpbWVSYW5nZSIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwidGltZV96b25lIiwiZHJvcF9wYXJ0aWFscyIsIm90aGVyQnVja2V0Iiwib3RoZXJCdWNrZXRMYWJlbCIsIm1pc3NpbmdCdWNrZXQiLCJtaXNzaW5nQnVja2V0TGFiZWwiLCJpc0RvbnV0IiwidmFsdWVzIiwibGFzdF9sZXZlbCIsImxlZ2VuZE9wZW4iLCJzY2FsZU1ldHJpY1ZhbHVlcyIsInRocmVzaG9sZExpbmUiLCJwZXJQYWdlIiwic2hvd1BhcnRpYWxSb3dzIiwic2hvd01ldGljc0F0QWxsTGV2ZWxzIiwic29ydCIsImNvbHVtbkluZGV4IiwiZGlyZWN0aW9uIiwic2hvd1RvdGFsIiwic2hvd1Rvb2xiYXIiLCJ0b3RhbEZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFXQTs7QUFYQTs7Ozs7Ozs7Ozs7ZUFhZSxDQUNiO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSwwQ0FEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLGVBREE7QUFFUEMsSUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN2QkgsTUFBQUEsS0FBSyxFQUFFLGVBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsV0FGaUI7QUFHdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUNORCxR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RUFBRSxPQUpWO0FBS0VsQyxRQUFBQSxNQUFNLEVBQUU7QUFBRW1DLFVBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCSSxVQUFBQSxJQUFJLEVBQUUsQ0FBN0I7QUFBZ0NDLFVBQUFBLEtBQUssRUFBRSxNQUF2QztBQUErQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQXhEO0FBTFYsT0FGSSxFQVNKO0FBQ0VuQyxRQUFBQSxFQUFFLEVBQUUsR0FETjtBQUVFMEIsUUFBQUEsT0FBTyxFQUFFLElBRlg7QUFHRWpDLFFBQUFBLElBQUksRUFBRSxnQkFIUjtBQUlFbUMsUUFBQUEsTUFBTSxFQUFFLFNBSlY7QUFLRWxDLFFBQUFBLE1BQU0sRUFBRTtBQUNObUMsVUFBQUEsS0FBSyxFQUFFLFdBREQ7QUFFTkYsVUFBQUEsUUFBUSxFQUFFLE1BRko7QUFHTkcsVUFBQUEsY0FBYyxFQUFFLElBSFY7QUFJTkMsVUFBQUEsYUFBYSxFQUFFLENBSlQ7QUFLTkMsVUFBQUEsZUFBZSxFQUFFO0FBTFg7QUFMVixPQVRJO0FBaERpQixLQUFmLENBRkg7QUEwRVBJLElBQUFBLFdBQVcsRUFBRSxJQTFFTjtBQTJFUFEsSUFBQUEsV0FBVyxFQUFFLEVBM0VOO0FBNEVQQyxJQUFBQSxPQUFPLEVBQUUsQ0E1RUY7QUE2RVBDLElBQUFBLHFCQUFxQixFQUFFO0FBQ3JCQyxNQUFBQSxnQkFBZ0IsRUFBRXhELElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQy9Cd0QsUUFBQUEsS0FBSyxFQUFFLGNBRHdCO0FBRS9CM0MsUUFBQUEsTUFBTSxFQUFFLEVBRnVCO0FBRy9CNEMsUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUE3RWhCO0FBSFgsQ0ExeEJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBPdmVydmlldy9HZW5lcmFsIHZpc3VhbGl6YXRpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuaW1wb3J0IHsgVUlfQ09MT1JfQUdFTlRfU1RBVFVTIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdlbmVyYWwtQWdlbnRzLXN0YXR1cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBZ2VudHMgc3RhdHVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWdlbnRzIFN0YXR1cycsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0gfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnBvbGF0ZTogJ2NhcmRpbmFsJyxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAzLjUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgaWQ6ICc0JywgbGFiZWw6ICdVbmlxdWUgY291bnQgb2YgaWQnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBpbnRlcnZhbDogJzFtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnMW1zJyxcbiAgICAgICAgICAgICAgY3VzdG9tSW50ZXJ2YWw6ICcyaCcsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiAnc3RhdHVzJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJ190ZXJtJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY2FyZGluYWxpdHknLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2lkJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBjb2xvcnM6IHsgYWN0aXZlOiBVSV9DT0xPUl9BR0VOVF9TVEFUVVMuYWN0aXZlLCBkaXNjb25uZWN0ZWQ6IFVJX0NPTE9SX0FHRU5UX1NUQVRVUy5kaXNjb25uZWN0ZWQsIHBlbmRpbmc6IFVJX0NPTE9SX0FHRU5UX1NUQVRVUy5wZW5kaW5nLCBuZXZlcl9jb25uZWN0ZWQ6IFVJX0NPTE9SX0FHRU5UX1NUQVRVUy5uZXZlcl9jb25uZWN0ZWQgfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLW1vbml0b3JpbmcnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLU1ldHJpYy1hbGVydHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTWV0cmljIGFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ01ldHJpYyBBbGVydHMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0FsZXJ0cycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLUxldmVsLTEyLWFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdMZXZlbCAxMiBhbGVydHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDb3VudCBMZXZlbCAxMiBBbGVydHMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0xldmVsIDEyIG9yIGFib3ZlIGFsZXJ0cycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgZ3RlOiAxMixcbiAgICAgICAgICAgICAgICAgIGx0OiBudWxsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzEyIHRvICviiJ4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICdydWxlLmxldmVsJzoge1xuICAgICAgICAgICAgICAgICAgZ3RlOiAxMixcbiAgICAgICAgICAgICAgICAgIGx0OiBudWxsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLUF1dGhlbnRpY2F0aW9uLWZhaWx1cmUnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQXV0aGVudGljYXRpb24gZmFpbHVyZScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0NvdW50IEF1dGhlbnRpY2F0aW9uIEZhaWx1cmUnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0F1dGhlbnRpY2F0aW9uIGZhaWx1cmUnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGRlZmF1bHRDb2xvcnM6IHsgJzAgLSAxMDAnOiAncmdiKDAsMTA0LDU1KScgfSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2VzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdydWxlLmdyb3VwcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd3aW5fYXV0aGVudGljYXRpb25fZmFpbGVkLCBhdXRoZW50aWNhdGlvbl9mYWlsZWQsIGF1dGhlbnRpY2F0aW9uX2ZhaWx1cmVzJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICd3aW5fYXV0aGVudGljYXRpb25fZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICdhdXRoZW50aWNhdGlvbl9mYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgJ2F1dGhlbnRpY2F0aW9uX2ZhaWx1cmVzJyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGJvb2w6IHtcbiAgICAgICAgICAgICAgICAgIHNob3VsZDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfcGhyYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncnVsZS5ncm91cHMnOiAnd2luX2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX3BocmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3J1bGUuZ3JvdXBzJzogJ2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX3BocmFzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3J1bGUuZ3JvdXBzJzogJ2F1dGhlbnRpY2F0aW9uX2ZhaWx1cmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1fc2hvdWxkX21hdGNoOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2VuZXJhbC1BdXRoZW50aWNhdGlvbi1zdWNjZXNzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3MnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDb3VudCBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnZ2F1Z2UnLFxuICAgICAgICAgIGdhdWdlOiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFNwbGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9FeHRlbmQ6IGZhbHNlLFxuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2F1Z2VUeXBlOiAnTWV0cmljJyxcbiAgICAgICAgICAgIGdhdWdlU3R5bGU6ICdGdWxsJyxcbiAgICAgICAgICAgIGJhY2tTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBnYXVnZUNvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgdXNlUmFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFt7IGZyb206IDAsIHRvOiAxMDAgfV0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGNvbG9yOiAnYmxhY2snIH0sXG4gICAgICAgICAgICBzY2FsZTogeyBzaG93OiBmYWxzZSwgbGFiZWxzOiBmYWxzZSwgY29sb3I6ICcjMzMzJywgd2lkdGg6IDIgfSxcbiAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDIwLCBiZ0NvbG9yOiBmYWxzZSwgbGFiZWxDb2xvcjogZmFsc2UsIHN1YlRleHQ6ICcnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgY3VzdG9tTGFiZWw6ICdBdXRoZW50aWNhdGlvbiBzdWNjZXNzJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7IHZpczogeyBkZWZhdWx0Q29sb3JzOiB7ICcwIC0gMTAwJzogJ3JnYigwLDEwNCw1NSknIH0gfSB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdydWxlLmdyb3VwcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdhdXRoZW50aWNhdGlvbl9zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnYXV0aGVudGljYXRpb25fc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAncnVsZS5ncm91cHMnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnYXV0aGVudGljYXRpb25fc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdlbmVyYWwtQWxlcnQtbGV2ZWwtZXZvbHV0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0IGxldmVsIGV2b2x1dGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0IGxldmVsIGV2b2x1dGlvbicsXG4gICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogdHJ1ZSwgc3R5bGU6IHsgY29sb3I6ICcjZWVlJyB9LCB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnY2FyZGluYWwnLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHsgZnJvbTogJ25vdy0yNGgnLCB0bzogJ25vdycsIG1vZGU6ICdxdWljaycgfSxcbiAgICAgICAgICAgICAgdXNlTm9ybWFsaXplZEVzSW50ZXJ2YWw6IHRydWUsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIHRpbWVfem9uZTogJ0V1cm9wZS9CZXJsaW4nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY3VzdG9tSW50ZXJ2YWw6ICcyaCcsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIHNpemU6ICcxNScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLUFsZXJ0cy1Ub3AtTWl0cmUnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm1pdHJlLnRlY2huaXF1ZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiAnbWl0cmUgdG9wJyxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdlbmVyYWwtVG9wLTUtYWdlbnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCA1IGFnZW50cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCA1IGFnZW50cycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgbGVnZW5kT3BlbjogdHJ1ZSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLVRvcC01LWFnZW50cy1Fdm9sdXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDUgcnVsZSBncm91cHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnMjAyMC0wNy0xOVQxNjoxODoxMy42MzdaJywgdG86ICcyMDIwLTA3LTI4VDEzOjU4OjMzLjM1N1onIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiBmYWxzZSB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnBvbGF0ZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgdGhyZXNob2xkTGluZTogeyBzaG93OiBmYWxzZSwgdmFsdWU6IDEwLCB3aWR0aDogMSwgc3R5bGU6ICdmdWxsJywgY29sb3I6ICcjRTc2NjRDJyB9LFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiAndG9wIDUgYWdlbnRzIGV2b2x1dGlvbicsXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7IHZpczogeyBsZWdlbmRPcGVuOiB0cnVlIH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdlbmVyYWwtQWxlcnRzLXN1bW1hcnknLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgc3VtbWFyeScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0aWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaWQnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HZW5lcmFsLUFsZXJ0cy1ldm9sdXRpb24tVG9wLTUtYWdlbnRzJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnRzIGV2b2x1dGlvbiBUb3AgNSBhZ2VudHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydHMgZXZvbHV0aW9uIFRvcCA1IGFnZW50cycsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0gfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2FnZW50Lm5hbWUnLCBzaXplOiA1LCBvcmRlcjogJ2Rlc2MnLCBvcmRlckJ5OiAnMScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAndGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgY3VzdG9tSW50ZXJ2YWw6ICcyaCcsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuIl19