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
  _id: 'Wazuh-App-Overview-Office-Agents-status',
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
  _id: 'Wazuh-App-Overview-Office-Metric-Alerts',
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
  _id: 'Wazuh-App-Overview-Office-Metric-Max-Rule-Level',
  _source: {
    title: 'Max Rule Level',
    visState: JSON.stringify({
      title: 'Max Rule Level',
      type: 'metric',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'max',
        params: {
          field: 'rule.level',
          customLabel: 'Max Rule Level'
        },
        schema: 'metric'
      }],
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'metric',
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'Labels',
          colorsRange: [{
            from: 0,
            to: 7
          }, {
            from: 7,
            to: 10
          }, {
            from: 10,
            to: 20
          }],
          labels: {
            show: true
          },
          invertColors: false,
          style: {
            bgFill: '#000',
            bgColor: false,
            labelColor: false,
            subText: '',
            fontSize: 26
          }
        }
      }
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
  _id: 'Wazuh-App-Overview-Office-Metric-Suspicious-Downloads',
  _source: {
    title: 'Suspicious Downloads',
    visState: JSON.stringify({
      title: 'Suspicious Downloads Count',
      type: 'metric',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'filters',
        params: {
          filters: [{
            input: {
              query: 'rule.id: "91724"',
              language: 'kuery'
            },
            label: 'Suspicious Downloads'
          }]
        },
        schema: 'group'
      }],
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'metric',
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'Labels',
          colorsRange: [{
            from: 0,
            to: 1
          }],
          labels: {
            show: true
          },
          invertColors: false,
          style: {
            bgFill: '#000',
            bgColor: false,
            labelColor: false,
            subText: '',
            fontSize: 26
          }
        }
      }
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
  _id: 'Wazuh-App-Overview-Office-Metric-Malware-Alerts',
  _source: {
    title: 'Malware Alerts',
    visState: JSON.stringify({
      title: 'Malware Alerts Count',
      type: 'metric',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'filters',
        params: {
          filters: [{
            input: {
              query: 'rule.id: "91556" or rule.id: "91575" or rule.id: "91700" ',
              language: 'kuery'
            },
            label: 'Malware Alerts'
          }]
        },
        schema: 'group'
      }],
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'metric',
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'None',
          colorsRange: [{
            from: 0,
            to: 10000
          }],
          labels: {
            show: true
          },
          invertColors: false,
          style: {
            bgFill: '#000',
            bgColor: false,
            labelColor: false,
            subText: '',
            fontSize: 26
          }
        }
      }
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
  _id: 'Wazuh-App-Overview-Office-Metric-FullAccess-Permissions',
  _source: {
    title: 'Full Access Permissions',
    visState: JSON.stringify({
      title: 'Full Access Permission Count',
      type: 'metric',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'filters',
        params: {
          filters: [{
            input: {
              query: 'rule.id: "91725"',
              language: 'kuery'
            },
            label: 'Full Access Permissions'
          }]
        },
        schema: 'group'
      }],
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'metric',
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'None',
          colorsRange: [{
            from: 0,
            to: 10000
          }],
          labels: {
            show: true
          },
          invertColors: false,
          style: {
            bgFill: '#000',
            bgColor: false,
            labelColor: false,
            subText: '',
            fontSize: 26
          }
        }
      }
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
  _id: 'Wazuh-App-Overview-Office-Level-12-Alerts',
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
  _id: 'Wazuh-App-Overview-Office-Authentication-failure',
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
  _id: 'Wazuh-App-Overview-Office-Authentication-success',
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
  _id: 'Wazuh-App-Overview-Office-Alert-Level-Evolution',
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
  _id: 'Wazuh-App-Overview-Office-Alerts-summary',
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
  _id: 'Wazuh-App-Overview-Office-Metric-Stats',
  _type: 'visualization',
  _source: {
    title: 'Stats',
    visState: JSON.stringify({
      title: 'Metric Stats',
      type: 'metric',
      aggs: [{
        id: '2',
        enabled: true,
        type: 'count',
        params: {
          customLabel: 'Total Alerts'
        },
        schema: 'metric'
      }, {
        id: '1',
        enabled: true,
        type: 'top_hits',
        params: {
          field: 'rule.level',
          aggregate: 'concat',
          size: 1,
          sortField: 'rule.level',
          sortOrder: 'desc',
          customLabel: 'Max rule level detected'
        },
        schema: 'metric'
      }],
      params: {
        addTooltip: true,
        addLegend: false,
        type: 'metric',
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'None',
          colorsRange: [{
            from: 0,
            to: 10000
          }],
          labels: {
            show: true
          },
          invertColors: false,
          style: {
            bgFill: '#000',
            bgColor: false,
            labelColor: false,
            subText: '',
            fontSize: 60
          }
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-IPs-By-User-Table',
  _type: 'visualization',
  _source: {
    title: 'Registered IPs for User',
    visState: JSON.stringify({
      title: 'Registered IPs for User',
      type: 'table',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Actor.ID',
          orderBy: '_key',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Top Users'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'agent.id',
          orderBy: '_key',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agent ID'
        },
        schema: 'bucket'
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        params: {
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agent name'
        },
        schema: 'bucket'
      }],
      params: {
        perPage: 5,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-User-Operation-Level-Table',
  _type: 'visualization',
  _source: {
    title: 'User Operations',
    visState: JSON.stringify({
      title: 'User Operation Level',
      type: 'table',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 500,
          otherBucket: true,
          otherBucketLabel: 'Others',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Users'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Operation',
          orderBy: '1',
          order: 'desc',
          size: 100,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Operation'
        },
        schema: 'bucket'
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Rule level'
        },
        schema: 'bucket'
      }],
      params: {
        perPage: 5,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Client-IP-Operation-Level-Table',
  _type: 'visualization',
  _source: {
    title: 'Client IP Operations',
    visState: JSON.stringify({
      title: 'Client IP Operation Level',
      type: 'table',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.ClientIP',
          orderBy: '1',
          order: 'desc',
          size: 500,
          otherBucket: true,
          otherBucketLabel: 'Others',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Client IP'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Operation',
          orderBy: '1',
          order: 'desc',
          size: 100,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Operation'
        },
        schema: 'bucket'
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Rule level'
        },
        schema: 'bucket'
      }],
      params: {
        perPage: 5,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Top-Events-Pie',
  _type: 'visualization',
  _source: {
    title: 'Top Events',
    visState: JSON.stringify({
      title: 'Cake',
      type: 'pie',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: false,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.description',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
      }],
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
        row: true
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Alerts-Evolution-By-User',
  _type: 'visualization',
  _source: {
    title: 'Alerts evolution over time',
    visState: JSON.stringify({
      title: 'Alerts evolution over time',
      type: 'line',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now-1y',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
          interval: 'h',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Actor.ID',
          orderBy: '1',
          order: 'asc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'group'
      }],
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
          show: true,
          type: 'line',
          mode: 'normal',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
          interpolate: 'linear',
          showCircles: true
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
          color: '#E7664C'
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-User-By-Operation-Result',
  _type: 'visualization',
  _source: {
    title: 'User by Operation result',
    visState: JSON.stringify({
      title: 'User By Operation result',
      type: 'table',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Operation',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Operation'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'User'
        },
        schema: 'bucket'
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.ResultStatus',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Result Status'
        },
        schema: 'bucket'
      }],
      params: {
        perPage: 5,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Rule-Description-Level-Table',
  _type: 'visualization',
  _source: {
    title: 'Rule Description by Level',
    visState: JSON.stringify({
      title: 'Rule Description Level Table',
      type: 'table',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.description',
          orderBy: '1',
          order: 'desc',
          size: 500,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Rule Description'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Rule Level'
        },
        schema: 'bucket'
      }],
      params: {
        perPage: 5,
        showPartialRows: false,
        showMetricsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum',
        percentageCol: ''
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Severity-By-User-Histogram',
  _type: 'visualization',
  _source: {
    title: 'Severity by user',
    visState: JSON.stringify({
      title: 'Severity by User',
      type: 'histogram',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '_key',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Severity'
        },
        schema: 'segment'
      }],
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
          show: true,
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
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
          color: '#E7664C'
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Rule-Level-Histogram',
  _type: 'visualization',
  _source: {
    title: 'Rule level histrogram',
    visState: JSON.stringify({
      title: 'Rule level histogram',
      type: 'area',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now/w',
            to: 'now/w'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
          interval: '3h',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'group'
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
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-IPs-By-User-Barchart',
  _type: 'visualization',
  _source: {
    title: 'IPs by user',
    visState: JSON.stringify({
      title: 'IPs by User',
      type: 'horizontal_bar',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.ClientIP',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'IP'
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'group'
      }],
      params: {
        type: 'histogram',
        grid: {
          categoryLines: false
        },
        categoryAxes: [{
          id: 'CategoryAxis-1',
          type: 'category',
          position: 'left',
          show: true,
          style: {},
          scale: {
            type: 'linear'
          },
          labels: {
            show: true,
            rotate: 0,
            filter: false,
            truncate: 200
          },
          title: {}
        }],
        valueAxes: [{
          id: 'ValueAxis-1',
          name: 'LeftAxis-1',
          type: 'value',
          position: 'bottom',
          show: true,
          style: {},
          scale: {
            type: 'linear',
            mode: 'normal'
          },
          labels: {
            show: true,
            rotate: 75,
            filter: true,
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
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
          showCircles: true
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
          color: '#E7664C'
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Severity-By-User-Barchart',
  _type: 'visualization',
  _source: {
    title: 'Severity by user',
    visState: JSON.stringify({
      title: 'Severity By User Barchart',
      type: 'histogram',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'rule.level',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: true,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 20,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'group'
      }],
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
          show: true,
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
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
          color: '#E7664C'
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Top-Users-By-Subscription-Barchart',
  _type: 'visualization',
  _source: {
    title: 'Top User By Subscription',
    visState: JSON.stringify({
      title: 'Top User By Subscription',
      type: 'histogram',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Subscription',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'group'
      }],
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
          show: true,
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
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
          color: '#E7664C'
        }
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Location',
  _type: 'visualization',
  _source: {
    title: 'Geolocation map',
    visState: JSON.stringify({
      title: 'Geolocation map',
      type: 'tile_map',
      params: {
        colorSchema: 'Green to Red',
        mapType: 'Scaled Circle Markers',
        isDesaturated: false,
        addTooltip: true,
        heatClusterSize: 1.5,
        legendPosition: 'bottomright',
        mapZoom: 1,
        mapCenter: [0, 0],
        wms: {
          enabled: false,
          options: {
            format: 'image/png',
            transparent: true
          }
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
          geohash: {
            accessor: 0,
            format: {
              id: 'string'
            },
            params: {
              precision: 2,
              useGeocentroid: true
            },
            aggType: 'geohash_grid'
          },
          geocentroid: {
            accessor: 2,
            format: {
              id: 'string'
            },
            params: {},
            aggType: 'geo_centroid'
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
        type: 'geohash_grid',
        schema: 'segment',
        params: {
          field: 'GeoLocation.location',
          autoPrecision: true,
          precision: 2,
          useGeocentroid: true,
          isFilteredByCollar: true,
          mapZoom: 1,
          mapCenter: [0, 0]
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      mapZoom: 2,
      mapCenter: [38.685509760012025, -31.816406250000004]
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
  _id: 'Wazuh-App-Overview-Office-Country-Tag-Cloud',
  _type: 'visualization',
  _source: {
    title: 'Country of origin',
    visState: JSON.stringify({
      title: 'Country tag cloud',
      type: 'tagcloud',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'GeoLocation.country_name',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
      }],
      params: {
        scale: 'linear',
        orientation: 'right angled',
        minFontSize: 18,
        maxFontSize: 72,
        showLabel: false
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Alerts-Evolution-By-UserID',
  _type: 'visualization',
  _source: {
    title: 'Alerts by user',
    visState: JSON.stringify({
      title: 'Alerts evolution over time',
      type: 'line',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {
          customLabel: 'Alerts'
        },
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'date_histogram',
        params: {
          field: 'timestamp',
          timeRange: {
            from: 'now-1w',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'User ID'
        },
        schema: 'group'
      }],
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
            text: 'Alerts'
          }
        }],
        seriesParams: [{
          show: true,
          type: 'line',
          mode: 'normal',
          data: {
            label: 'Alerts',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          lineWidth: 2,
          interpolate: 'linear',
          showCircles: true
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
          color: '#E7664C'
        },
        row: true
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Top-Users',
  _type: 'visualization',
  _source: {
    title: 'Top Office Users',
    visState: JSON.stringify({
      title: 'Alerts by user',
      type: 'pie',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.UserId',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'segment'
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
      }
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
}, {
  _id: 'Wazuh-App-Overview-Office-Top-Operations',
  _type: 'visualization',
  _source: {
    title: 'Top Operations',
    visState: JSON.stringify({
      title: 'Top Operations',
      type: 'pie',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.office365.Operation',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Operation'
        },
        schema: 'segment'
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
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LW9mZmljZS50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJzdHlsZSIsImNvbG9yIiwiY2F0ZWdvcnlBeGVzIiwiaWQiLCJwb3NpdGlvbiIsInNob3ciLCJzY2FsZSIsImxhYmVscyIsImZpbHRlciIsInRydW5jYXRlIiwidmFsdWVBeGVzIiwibmFtZSIsIm1vZGUiLCJyb3RhdGUiLCJ0ZXh0Iiwic2VyaWVzUGFyYW1zIiwiZHJhd0xpbmVzQmV0d2VlblBvaW50cyIsInNob3dDaXJjbGVzIiwiaW50ZXJwb2xhdGUiLCJsaW5lV2lkdGgiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZUF4aXMiLCJhZGRUb29sdGlwIiwiYWRkTGVnZW5kIiwibGVnZW5kUG9zaXRpb24iLCJ0aW1lcyIsImFkZFRpbWVNYXJrZXIiLCJhZ2dzIiwiZW5hYmxlZCIsImludGVydmFsIiwic2NoZW1hIiwiZmllbGQiLCJjdXN0b21JbnRlcnZhbCIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJzaXplIiwib3JkZXIiLCJvcmRlckJ5IiwidWlTdGF0ZUpTT04iLCJ2aXMiLCJjb2xvcnMiLCJhY3RpdmUiLCJVSV9DT0xPUl9BR0VOVF9TVEFUVVMiLCJkaXNjb25uZWN0ZWQiLCJwZW5kaW5nIiwibmV2ZXJfY29ubmVjdGVkIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImluZGV4IiwicXVlcnkiLCJsYW5ndWFnZSIsIl90eXBlIiwiZ2F1Z2UiLCJ2ZXJ0aWNhbFNwbGl0IiwiYXV0b0V4dGVuZCIsInBlcmNlbnRhZ2VNb2RlIiwiZ2F1Z2VUeXBlIiwiZ2F1Z2VTdHlsZSIsImJhY2tTdHlsZSIsIm9yaWVudGF0aW9uIiwiY29sb3JTY2hlbWEiLCJnYXVnZUNvbG9yTW9kZSIsInVzZVJhbmdlIiwiY29sb3JzUmFuZ2UiLCJmcm9tIiwidG8iLCJpbnZlcnRDb2xvcnMiLCJ3aWR0aCIsImZvbnRTaXplIiwiYmdDb2xvciIsImxhYmVsQ29sb3IiLCJzdWJUZXh0IiwiY3VzdG9tTGFiZWwiLCJkZWZhdWx0Q29sb3JzIiwibWV0cmljIiwidXNlUmFuZ2VzIiwibWV0cmljQ29sb3JNb2RlIiwiYmdGaWxsIiwiZmlsdGVycyIsImlucHV0IiwiJHN0YXRlIiwic3RvcmUiLCJtZXRhIiwiYWxpYXMiLCJkaXNhYmxlZCIsImtleSIsIm5lZ2F0ZSIsImd0ZSIsImx0IiwidmFsdWUiLCJyYW5nZSIsImJvb2wiLCJzaG91bGQiLCJtYXRjaF9waHJhc2UiLCJtaW5pbXVtX3Nob3VsZF9tYXRjaCIsIm1hdGNoIiwidGltZVJhbmdlIiwidXNlTm9ybWFsaXplZEVzSW50ZXJ2YWwiLCJ0aW1lX3pvbmUiLCJkcm9wX3BhcnRpYWxzIiwib3RoZXJCdWNrZXQiLCJvdGhlckJ1Y2tldExhYmVsIiwibWlzc2luZ0J1Y2tldCIsIm1pc3NpbmdCdWNrZXRMYWJlbCIsInBlclBhZ2UiLCJzaG93UGFydGlhbFJvd3MiLCJzaG93TWV0aWNzQXRBbGxMZXZlbHMiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iLCJzaG93VG90YWwiLCJzaG93VG9vbGJhciIsInRvdGFsRnVuYyIsImFnZ3JlZ2F0ZSIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsInNob3dNZXRyaWNzQXRBbGxMZXZlbHMiLCJwZXJjZW50YWdlQ29sIiwiaXNEb251dCIsInZhbHVlcyIsImxhc3RfbGV2ZWwiLCJyb3ciLCJzY2FsZU1ldHJpY1ZhbHVlcyIsInRocmVzaG9sZExpbmUiLCJtYXBUeXBlIiwiaXNEZXNhdHVyYXRlZCIsImhlYXRDbHVzdGVyU2l6ZSIsIm1hcFpvb20iLCJtYXBDZW50ZXIiLCJ3bXMiLCJvcHRpb25zIiwiZm9ybWF0IiwidHJhbnNwYXJlbnQiLCJkaW1lbnNpb25zIiwiYWNjZXNzb3IiLCJhZ2dUeXBlIiwiZ2VvaGFzaCIsInByZWNpc2lvbiIsInVzZUdlb2NlbnRyb2lkIiwiZ2VvY2VudHJvaWQiLCJhdXRvUHJlY2lzaW9uIiwiaXNGaWx0ZXJlZEJ5Q29sbGFyIiwibWluRm9udFNpemUiLCJtYXhGb250U2l6ZSIsInNob3dMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBOztBQVhBOzs7Ozs7Ozs7OztlQWFlLENBQ2I7QUFDRUEsRUFBQUEsR0FBRyxFQUFFLHlDQURQO0FBRUVDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsZUFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsZUFEZ0I7QUFFdkJJLE1BQUFBLElBQUksRUFBRSxXQUZpQjtBQUd2QkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05ELFFBQUFBLElBQUksRUFBRSxXQURBO0FBRU5FLFFBQUFBLElBQUksRUFBRTtBQUFFQyxVQUFBQSxhQUFhLEVBQUUsS0FBakI7QUFBd0JDLFVBQUFBLEtBQUssRUFBRTtBQUFFQyxZQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUEvQixTQUZBO0FBR05DLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLEVBQUUsRUFBRSxnQkFETjtBQUVFUCxVQUFBQSxJQUFJLEVBQUUsVUFGUjtBQUdFUSxVQUFBQSxRQUFRLEVBQUUsUUFIWjtBQUlFQyxVQUFBQSxJQUFJLEVBQUUsSUFKUjtBQUtFTCxVQUFBQSxLQUFLLEVBQUUsRUFMVDtBQU1FTSxVQUFBQSxLQUFLLEVBQUU7QUFBRVYsWUFBQUEsSUFBSSxFQUFFO0FBQVIsV0FOVDtBQU9FVyxVQUFBQSxNQUFNLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0csWUFBQUEsTUFBTSxFQUFFLElBQXRCO0FBQTRCQyxZQUFBQSxRQUFRLEVBQUU7QUFBdEMsV0FQVjtBQVFFakIsVUFBQUEsS0FBSyxFQUFFO0FBUlQsU0FEWSxDQUhS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OENQUSxJQUFBQSxXQUFXLEVBQUUsRUE5Q047QUErQ1BDLElBQUFBLE9BQU8sRUFBRSxDQS9DRjtBQWdEUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFeEQsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDL0J3RCxRQUFBQSxLQUFLLEVBQUUsY0FEd0I7QUFFL0IzQyxRQUFBQSxNQUFNLEVBQUUsRUFGdUI7QUFHL0I0QyxRQUFBQSxLQUFLLEVBQUU7QUFBRUEsVUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsVUFBQUEsUUFBUSxFQUFFO0FBQXZCO0FBSHdCLE9BQWY7QUFERztBQWhEaEI7QUFIWCxDQS9qRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgZm9yIE92ZXJ2aWV3L0dlbmVyYWwgdmlzdWFsaXphdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgeyBVSV9DT0xPUl9BR0VOVF9TVEFUVVMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLUFnZW50cy1zdGF0dXMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWdlbnRzIHN0YXR1cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FnZW50cyBTdGF0dXMnLFxuICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiBmYWxzZSwgc3R5bGU6IHsgY29sb3I6ICcjZWVlJyB9IH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdjYXJkaW5hbCcsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogMy41LFxuICAgICAgICAgICAgICBkYXRhOiB7IGlkOiAnNCcsIGxhYmVsOiAnVW5pcXVlIGNvdW50IG9mIGlkJyB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgaW50ZXJ2YWw6ICcxbXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICBpbnRlcnZhbDogJzFtcycsXG4gICAgICAgICAgICAgIGN1c3RvbUludGVydmFsOiAnMmgnLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ3N0YXR1cycsIHNpemU6IDUsIG9yZGVyOiAnZGVzYycsIG9yZGVyQnk6ICdfdGVybScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NhcmRpbmFsaXR5JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdpZCcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgY29sb3JzOiB7IGFjdGl2ZTogVUlfQ09MT1JfQUdFTlRfU1RBVFVTLmFjdGl2ZSwgZGlzY29ubmVjdGVkOiBVSV9DT0xPUl9BR0VOVF9TVEFUVVMuZGlzY29ubmVjdGVkLCBwZW5kaW5nOiBVSV9DT0xPUl9BR0VOVF9TVEFUVVMucGVuZGluZywgbmV2ZXJfY29ubmVjdGVkOiBVSV9DT0xPUl9BR0VOVF9TVEFUVVMubmV2ZXJfY29ubmVjdGVkIH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1tb25pdG9yaW5nJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLU1ldHJpYy1BbGVydHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTWV0cmljIGFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ01ldHJpYyBBbGVydHMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0FsZXJ0cycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtTWV0cmljLU1heC1SdWxlLUxldmVsJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01heCBSdWxlIExldmVsJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTWF4IFJ1bGUgTGV2ZWwnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ21heCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdNYXggUnVsZSBMZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VSYW5nZXM6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbiB0byBSZWQnLFxuICAgICAgICAgICAgbWV0cmljQ29sb3JNb2RlOiAnTGFiZWxzJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiA3LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJvbTogNyxcbiAgICAgICAgICAgICAgICB0bzogMTAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAxMCxcbiAgICAgICAgICAgICAgICB0bzogMjAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGJnRmlsbDogJyMwMDAnLFxuICAgICAgICAgICAgICBiZ0NvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGFiZWxDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgIHN1YlRleHQ6ICcnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMjYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7IHZpczogeyBkZWZhdWx0Q29sb3JzOiB7ICcwIC0gMTAwJzogJ3JnYigwLDEwNCw1NSknIH0gfSB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1NZXRyaWMtU3VzcGljaW91cy1Eb3dubG9hZHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnU3VzcGljaW91cyBEb3dubG9hZHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdTdXNwaWNpb3VzIERvd25sb2FkcyBDb3VudCcsXG4gICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdmaWx0ZXJzJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICdydWxlLmlkOiBcIjkxNzI0XCInLFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2t1ZXJ5JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1N1c3BpY2lvdXMgRG93bmxvYWRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VSYW5nZXM6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbiB0byBSZWQnLFxuICAgICAgICAgICAgbWV0cmljQ29sb3JNb2RlOiAnTGFiZWxzJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiAxLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiZ0ZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgICAgYmdDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgIGxhYmVsQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJUZXh0OiAnJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtTWV0cmljLU1hbHdhcmUtQWxlcnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01hbHdhcmUgQWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTWFsd2FyZSBBbGVydHMgQ291bnQnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZmlsdGVycycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAncnVsZS5pZDogXCI5MTU1NlwiIG9yIHJ1bGUuaWQ6IFwiOTE1NzVcIiBvciBydWxlLmlkOiBcIjkxNzAwXCIgJyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdrdWVyeScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNYWx3YXJlIEFsZXJ0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlUmFuZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIG1ldHJpY0NvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IDEwMDAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiZ0ZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgICAgYmdDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgIGxhYmVsQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJUZXh0OiAnJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtTWV0cmljLUZ1bGxBY2Nlc3MtUGVybWlzc2lvbnMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnRnVsbCBBY2Nlc3MgUGVybWlzc2lvbnMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdGdWxsIEFjY2VzcyBQZXJtaXNzaW9uIENvdW50JyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2ZpbHRlcnMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ3J1bGUuaWQ6IFwiOTE3MjVcIicsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAna3VlcnknLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRnVsbCBBY2Nlc3MgUGVybWlzc2lvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZVJhbmdlczogZmFsc2UsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBtZXRyaWNDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiAxMDAwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYmdGaWxsOiAnIzAwMCcsXG4gICAgICAgICAgICAgIGJnQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBsYWJlbENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViVGV4dDogJycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGRlZmF1bHRDb2xvcnM6IHsgJzAgLSAxMDAnOiAncmdiKDAsMTA0LDU1KScgfSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLUxldmVsLTEyLUFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdMZXZlbCAxMiBhbGVydHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDb3VudCBMZXZlbCAxMiBBbGVydHMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0xldmVsIDEyIG9yIGFib3ZlIGFsZXJ0cycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgZ3RlOiAxMixcbiAgICAgICAgICAgICAgICAgIGx0OiBudWxsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzEyIHRvICviiJ4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICdydWxlLmxldmVsJzoge1xuICAgICAgICAgICAgICAgICAgZ3RlOiAxMixcbiAgICAgICAgICAgICAgICAgIGx0OiBudWxsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtQXV0aGVudGljYXRpb24tZmFpbHVyZScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBdXRoZW50aWNhdGlvbiBmYWlsdXJlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQ291bnQgQXV0aGVudGljYXRpb24gRmFpbHVyZScsXG4gICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ2dhdWdlJyxcbiAgICAgICAgICBnYXVnZToge1xuICAgICAgICAgICAgdmVydGljYWxTcGxpdDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvRXh0ZW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGdhdWdlVHlwZTogJ01ldHJpYycsXG4gICAgICAgICAgICBnYXVnZVN0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBiYWNrU3R5bGU6ICdGdWxsJyxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbiB0byBSZWQnLFxuICAgICAgICAgICAgZ2F1Z2VDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIHVzZVJhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyBmcm9tOiAwLCB0bzogMTAwIH1dLFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgc2NhbGU6IHsgc2hvdzogZmFsc2UsIGxhYmVsczogZmFsc2UsIGNvbG9yOiAnIzMzMycsIHdpZHRoOiAyIH0sXG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAyMCwgYmdDb2xvcjogZmFsc2UsIGxhYmVsQ29sb3I6IGZhbHNlLCBzdWJUZXh0OiAnJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGN1c3RvbUxhYmVsOiAnQXV0aGVudGljYXRpb24gZmFpbHVyZScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZXMnLFxuICAgICAgICAgICAgICAgIGtleTogJ3J1bGUuZ3JvdXBzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3dpbl9hdXRoZW50aWNhdGlvbl9mYWlsZWQsIGF1dGhlbnRpY2F0aW9uX2ZhaWxlZCwgYXV0aGVudGljYXRpb25fZmFpbHVyZXMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgJ3dpbl9hdXRoZW50aWNhdGlvbl9mYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgJ2F1dGhlbnRpY2F0aW9uX2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAnYXV0aGVudGljYXRpb25fZmFpbHVyZXMnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgYm9vbDoge1xuICAgICAgICAgICAgICAgICAgc2hvdWxkOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9waHJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdydWxlLmdyb3Vwcyc6ICd3aW5fYXV0aGVudGljYXRpb25fZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfcGhyYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncnVsZS5ncm91cHMnOiAnYXV0aGVudGljYXRpb25fZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfcGhyYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncnVsZS5ncm91cHMnOiAnYXV0aGVudGljYXRpb25fZmFpbHVyZXMnLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbWluaW11bV9zaG91bGRfbWF0Y2g6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtQXV0aGVudGljYXRpb24tc3VjY2VzcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBdXRoZW50aWNhdGlvbiBzdWNjZXNzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQ291bnQgQXV0aGVudGljYXRpb24gU3VjY2VzcycsXG4gICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ2dhdWdlJyxcbiAgICAgICAgICBnYXVnZToge1xuICAgICAgICAgICAgdmVydGljYWxTcGxpdDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvRXh0ZW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGdhdWdlVHlwZTogJ01ldHJpYycsXG4gICAgICAgICAgICBnYXVnZVN0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBiYWNrU3R5bGU6ICdGdWxsJyxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbiB0byBSZWQnLFxuICAgICAgICAgICAgZ2F1Z2VDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIHVzZVJhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyBmcm9tOiAwLCB0bzogMTAwIH1dLFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgc2NhbGU6IHsgc2hvdzogZmFsc2UsIGxhYmVsczogZmFsc2UsIGNvbG9yOiAnIzMzMycsIHdpZHRoOiAyIH0sXG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAyMCwgYmdDb2xvcjogZmFsc2UsIGxhYmVsQ29sb3I6IGZhbHNlLCBzdWJUZXh0OiAnJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGN1c3RvbUxhYmVsOiAnQXV0aGVudGljYXRpb24gc3VjY2VzcycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgZGVmYXVsdENvbG9yczogeyAnMCAtIDEwMCc6ICdyZ2IoMCwxMDQsNTUpJyB9IH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAncnVsZS5ncm91cHMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYXV0aGVudGljYXRpb25fc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ3J1bGUuZ3JvdXBzJzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2F1dGhlbnRpY2F0aW9uX3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtQWxlcnQtTGV2ZWwtRXZvbHV0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0IGxldmVsIGV2b2x1dGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0IGxldmVsIGV2b2x1dGlvbicsXG4gICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogdHJ1ZSwgc3R5bGU6IHsgY29sb3I6ICcjZWVlJyB9LCB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnY2FyZGluYWwnLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHsgZnJvbTogJ25vdy0yNGgnLCB0bzogJ25vdycsIG1vZGU6ICdxdWljaycgfSxcbiAgICAgICAgICAgICAgdXNlTm9ybWFsaXplZEVzSW50ZXJ2YWw6IHRydWUsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIHRpbWVfem9uZTogJ0V1cm9wZS9CZXJsaW4nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY3VzdG9tSW50ZXJ2YWw6ICcyaCcsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIHNpemU6ICcxNScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtQWxlcnRzLXN1bW1hcnknLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgc3VtbWFyeScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0aWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaWQnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtTWV0cmljLVN0YXRzJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnU3RhdHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdNZXRyaWMgU3RhdHMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1RvdGFsIEFsZXJ0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3RvcF9oaXRzJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBhZ2dyZWdhdGU6ICdjb25jYXQnLFxuICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgc29ydE9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTWF4IHJ1bGUgbGV2ZWwgZGV0ZWN0ZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlUmFuZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIG1ldHJpY0NvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IDEwMDAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiZ0ZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgICAgYmdDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgIGxhYmVsQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJUZXh0OiAnJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDYwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1JUHMtQnktVXNlci1UYWJsZScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1JlZ2lzdGVyZWQgSVBzIGZvciBVc2VyJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUmVnaXN0ZXJlZCBJUHMgZm9yIFVzZXInLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5BY3Rvci5JRCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICdfa2V5JyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnVG9wIFVzZXJzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQuaWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnX2tleScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50IElEJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQWdlbnQgbmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiA1LFxuICAgICAgICAgIHNob3dQYXJ0aWFsUm93czogZmFsc2UsXG4gICAgICAgICAgc2hvd01ldHJpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgY29sdW1uSW5kZXg6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgICAgcGVyY2VudGFnZUNvbDogJycsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLVVzZXItT3BlcmF0aW9uLUxldmVsLVRhYmxlJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVXNlciBPcGVyYXRpb25zJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVXNlciBPcGVyYXRpb24gTGV2ZWwnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5Vc2VySWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUwMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcnMnLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnVXNlcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5PcGVyYXRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnT3BlcmF0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgbGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogNSxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRyaWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICAgIGNvbHVtbkluZGV4OiBudWxsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICAgIHBlcmNlbnRhZ2VDb2w6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1DbGllbnQtSVAtT3BlcmF0aW9uLUxldmVsLVRhYmxlJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQ2xpZW50IElQIE9wZXJhdGlvbnMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDbGllbnQgSVAgT3BlcmF0aW9uIExldmVsJyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vZmZpY2UzNjUuQ2xpZW50SVAnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUwMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcnMnLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQ2xpZW50IElQJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vZmZpY2UzNjUuT3BlcmF0aW9uJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMDAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ09wZXJhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSdWxlIGxldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBlclBhZ2U6IDUsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0cmljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICBjb2x1bW5JbmRleDogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgICBwZXJjZW50YWdlQ29sOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtVG9wLUV2ZW50cy1QaWUnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgRXZlbnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQ2FrZScsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RfbGV2ZWw6IHRydWUsXG4gICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcm93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1BbGVydHMtRXZvbHV0aW9uLUJ5LVVzZXInLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgZXZvbHV0aW9uIG92ZXIgdGltZScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBldm9sdXRpb24gb3ZlciB0aW1lJyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnbm93LTF5JyxcbiAgICAgICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnaCcsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vZmZpY2UzNjUuQWN0b3IuSUQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnYXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpbmVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ291bnQnLFxuICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICBpbnRlcnBvbGF0ZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHt9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1Vc2VyLUJ5LU9wZXJhdGlvbi1SZXN1bHQnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdVc2VyIGJ5IE9wZXJhdGlvbiByZXN1bHQnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdVc2VyIEJ5IE9wZXJhdGlvbiByZXN1bHQnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5PcGVyYXRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdPcGVyYXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5Vc2VySWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdVc2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vZmZpY2UzNjUuUmVzdWx0U3RhdHVzJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVzdWx0IFN0YXR1cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiA1LFxuICAgICAgICAgIHNob3dQYXJ0aWFsUm93czogZmFsc2UsXG4gICAgICAgICAgc2hvd01ldHJpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgY29sdW1uSW5kZXg6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgICAgcGVyY2VudGFnZUNvbDogJycsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLVJ1bGUtRGVzY3JpcHRpb24tTGV2ZWwtVGFibGUnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdSdWxlIERlc2NyaXB0aW9uIGJ5IExldmVsJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUnVsZSBEZXNjcmlwdGlvbiBMZXZlbCBUYWJsZScsXG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUwMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUnVsZSBEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSdWxlIExldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBlclBhZ2U6IDUsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0cmljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICBjb2x1bW5JbmRleDogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgICBwZXJjZW50YWdlQ29sOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtU2V2ZXJpdHktQnktVXNlci1IaXN0b2dyYW0nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdTZXZlcml0eSBieSB1c2VyJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnU2V2ZXJpdHkgYnkgVXNlcicsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJ19rZXknLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnU2V2ZXJpdHknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGNhdGVnb3J5TGluZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhyZXNob2xkTGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogMTAsXG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIHN0eWxlOiAnZnVsbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNFNzY2NEMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLVJ1bGUtTGV2ZWwtSGlzdG9ncmFtJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnUnVsZSBsZXZlbCBoaXN0cm9ncmFtJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUnVsZSBsZXZlbCBoaXN0b2dyYW0nLFxuICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZToge1xuICAgICAgICAgICAgICAgIGZyb206ICdub3cvdycsXG4gICAgICAgICAgICAgICAgdG86ICdub3cvdycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnM2gnLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgY2F0ZWdvcnlMaW5lczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLUlQcy1CeS1Vc2VyLUJhcmNoYXJ0JyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnSVBzIGJ5IHVzZXInLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdJUHMgYnkgVXNlcicsXG4gICAgICAgIHR5cGU6ICdob3Jpem9udGFsX2JhcicsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEub2ZmaWNlMzY1LkNsaWVudElQJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdJUCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5Vc2VySWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpbmVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAyMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiA3NSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHt9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1TZXZlcml0eS1CeS1Vc2VyLUJhcmNoYXJ0JyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnU2V2ZXJpdHkgYnkgdXNlcicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1NldmVyaXR5IEJ5IFVzZXIgQmFyY2hhcnQnLFxuICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEub2ZmaWNlMzY1LlVzZXJJZCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpbmVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ291bnQnLFxuICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1Ub3AtVXNlcnMtQnktU3Vic2NyaXB0aW9uLUJhcmNoYXJ0JyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIFVzZXIgQnkgU3Vic2NyaXB0aW9uJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIFVzZXIgQnkgU3Vic2NyaXB0aW9uJyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEub2ZmaWNlMzY1LlVzZXJJZCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5TdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpbmVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdDb3VudCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aHJlc2hvbGRMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAxMCxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgc3R5bGU6ICdmdWxsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0U3NjY0QycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1PZmZpY2UtTG9jYXRpb24nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdHZW9sb2NhdGlvbiBtYXAnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdHZW9sb2NhdGlvbiBtYXAnLFxuICAgICAgICB0eXBlOiAndGlsZV9tYXAnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgbWFwVHlwZTogJ1NjYWxlZCBDaXJjbGUgTWFya2VycycsXG4gICAgICAgICAgaXNEZXNhdHVyYXRlZDogZmFsc2UsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBoZWF0Q2x1c3RlclNpemU6IDEuNSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ2JvdHRvbXJpZ2h0JyxcbiAgICAgICAgICBtYXBab29tOiAxLFxuICAgICAgICAgIG1hcENlbnRlcjogWzAsIDBdLFxuICAgICAgICAgIHdtczogeyBlbmFibGVkOiBmYWxzZSwgb3B0aW9uczogeyBmb3JtYXQ6ICdpbWFnZS9wbmcnLCB0cmFuc3BhcmVudDogdHJ1ZSB9IH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgbWV0cmljOiB7IGFjY2Vzc29yOiAxLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfSxcbiAgICAgICAgICAgIGdlb2hhc2g6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgIGZvcm1hdDogeyBpZDogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7IHByZWNpc2lvbjogMiwgdXNlR2VvY2VudHJvaWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2dlb2hhc2hfZ3JpZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VvY2VudHJvaWQ6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgIGZvcm1hdDogeyBpZDogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2dlb19jZW50cm9pZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdnZW9oYXNoX2dyaWQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdHZW9Mb2NhdGlvbi5sb2NhdGlvbicsXG4gICAgICAgICAgICAgIGF1dG9QcmVjaXNpb246IHRydWUsXG4gICAgICAgICAgICAgIHByZWNpc2lvbjogMixcbiAgICAgICAgICAgICAgdXNlR2VvY2VudHJvaWQ6IHRydWUsXG4gICAgICAgICAgICAgIGlzRmlsdGVyZWRCeUNvbGxhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFwWm9vbTogMSxcbiAgICAgICAgICAgICAgbWFwQ2VudGVyOiBbMCwgMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1hcFpvb206IDIsXG4gICAgICAgIG1hcENlbnRlcjogWzM4LjY4NTUwOTc2MDAxMjAyNSwgLTMxLjgxNjQwNjI1MDAwMDAwNF0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1Db3VudHJ5LVRhZy1DbG91ZCcsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0NvdW50cnkgb2Ygb3JpZ2luJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQ291bnRyeSB0YWcgY2xvdWQnLFxuICAgICAgICB0eXBlOiAndGFnY2xvdWQnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdHZW9Mb2NhdGlvbi5jb3VudHJ5X25hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNjYWxlOiAnbGluZWFyJyxcbiAgICAgICAgICBvcmllbnRhdGlvbjogJ3JpZ2h0IGFuZ2xlZCcsXG4gICAgICAgICAgbWluRm9udFNpemU6IDE4LFxuICAgICAgICAgIG1heEZvbnRTaXplOiA3MixcbiAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU9mZmljZS1BbGVydHMtRXZvbHV0aW9uLUJ5LVVzZXJJRCcsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBieSB1c2VyJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIGV2b2x1dGlvbiBvdmVyIHRpbWUnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBbGVydHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnbm93LTF3JyxcbiAgICAgICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vZmZpY2UzNjUuVXNlcklkJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdVc2VyIElEJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGNhdGVnb3J5TGluZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQWxlcnRzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWxlcnRzJyxcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7fSxcbiAgICAgICAgICB0aHJlc2hvbGRMaW5lOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAxMCxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgc3R5bGU6ICdmdWxsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0U3NjY0QycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByb3c6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLVRvcC1Vc2VycycsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCBPZmZpY2UgVXNlcnMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydHMgYnkgdXNlcicsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5Vc2VySWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RfbGV2ZWw6IHRydWUsXG4gICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctT2ZmaWNlLVRvcC1PcGVyYXRpb25zJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIE9wZXJhdGlvbnMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgT3BlcmF0aW9ucycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLm9mZmljZTM2NS5PcGVyYXRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ09wZXJhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVzOiB0cnVlLFxuICAgICAgICAgICAgbGFzdF9sZXZlbDogdHJ1ZSxcbiAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=