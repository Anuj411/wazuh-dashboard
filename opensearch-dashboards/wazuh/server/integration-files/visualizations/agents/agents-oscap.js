"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/OSCAP visualizations
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
  _id: 'Wazuh-App-Agents-OSCAP-Higher-score-metric',
  _source: {
    title: 'Higher score metric',
    visState: JSON.stringify({
      title: 'Higher score metric',
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
        type: 'max',
        schema: 'metric',
        params: {
          field: 'data.oscap.scan.score',
          customLabel: 'Higher score'
        }
      }]
    }),
    uiStateJSON: '{"vis":{"defaultColors":{"0 - 100":"rgb(0,104,55)"}}}',
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
  _id: 'Wazuh-App-Agents-OSCAP-Lower-score-metric',
  _source: {
    title: 'Lower score metric',
    visState: JSON.stringify({
      title: 'Lower score metric',
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
        type: 'min',
        schema: 'metric',
        params: {
          field: 'data.oscap.scan.score',
          customLabel: 'Lower score'
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
  _id: 'Wazuh-App-Agents-OSCAP-Last-score',
  _source: {
    title: 'Last score',
    visState: JSON.stringify({
      title: 'Last score',
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
        type: 'max',
        schema: 'metric',
        params: {
          field: 'timestamp'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.oscap.scan.score',
          size: 1,
          order: 'desc',
          orderBy: '1'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        params: {
          sort: {
            columnIndex: null,
            direction: null
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
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Agents-OSCAP-Last-scan-profile',
  _source: {
    title: 'Last scan profile',
    visState: JSON.stringify({
      title: 'Last scan profile',
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
        type: 'max',
        schema: 'metric',
        params: {
          field: 'timestamp'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.oscap.scan.profile.title',
          size: 1,
          order: 'desc',
          orderBy: '1'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        params: {
          sort: {
            columnIndex: null,
            direction: null
          }
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
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
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
  _id: 'Wazuh-App-Agents-OSCAP-Scans',
  _source: {
    title: 'Scans',
    visState: JSON.stringify({
      title: 'Scans',
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
          field: 'data.oscap.scan.id',
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
  _id: 'Wazuh-App-Agents-OSCAP-Profiles',
  _source: {
    title: 'Profiles',
    visState: JSON.stringify({
      title: 'Profiles',
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
          field: 'data.oscap.scan.profile.title',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }, {
          meta: {
            index: 'wazuh-alerts',
            negate: true,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.groups',
            value: 'syslog',
            params: {
              query: 'syslog',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.groups': {
                query: 'syslog',
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
  _id: 'Wazuh-App-Agents-OSCAP-Content',
  _source: {
    title: 'Content',
    visState: JSON.stringify({
      title: 'Content',
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
          field: 'data.oscap.scan.content',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }, {
          meta: {
            index: 'wazuh-alerts',
            negate: true,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.groups',
            value: 'syslog',
            params: {
              query: 'syslog',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.groups': {
                query: 'syslog',
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
  _id: 'Wazuh-App-Agents-OSCAP-Severity',
  _source: {
    title: 'Severity',
    visState: JSON.stringify({
      title: 'Severity',
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
          field: 'data.oscap.check.severity',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }, {
          meta: {
            index: 'wazuh-alerts',
            negate: true,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'rule.groups',
            value: 'syslog',
            params: {
              query: 'syslog',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'rule.groups': {
                query: 'syslog',
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
  _id: 'Wazuh-App-Agents-OSCAP-Daily-scans-evolution',
  _source: {
    title: 'Daily scans evolution',
    visState: JSON.stringify({
      title: 'Daily scans evolution',
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
        addLegend: false,
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
          interval: 'auto',
          customInterval: '2h',
          min_doc_count: 1,
          extended_bounds: {},
          customLabel: 'Daily scans'
        }
      }]
    }),
    uiStateJSON: '{}',
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
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
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
  _id: 'Wazuh-App-Agents-OSCAP-Top-5-Alerts',
  _source: {
    title: 'Top 5 Alerts',
    visState: JSON.stringify({
      title: 'Top 5 Alerts',
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
          field: 'data.oscap.check.title',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
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
  _id: 'Wazuh-App-Agents-OSCAP-Top-5-High-risk-alerts',
  _source: {
    title: 'Top 5 High risk alerts',
    visState: JSON.stringify({
      title: 'Top 5 High risk alerts',
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
          field: 'data.oscap.check.title',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
                type: 'phrase'
              }
            }
          },
          $state: {
            store: 'appState'
          }
        }, {
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.oscap.check.severity',
            value: 'high',
            params: {
              query: 'high',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.severity': {
                query: 'high',
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
  _id: 'Wazuh-App-Agents-OSCAP-Top-alert',
  _source: {
    title: 'Top alert',
    visState: JSON.stringify({
      title: 'Top alert',
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
          field: 'data.oscap.check.title',
          size: 1,
          order: 'desc',
          orderBy: '1'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        params: {
          sort: {
            columnIndex: null,
            direction: null
          }
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
            key: 'data.oscap.check.result',
            value: 'fail',
            params: {
              query: 'fail',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.oscap.check.result': {
                query: 'fail',
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
  _id: 'Wazuh-App-Agents-OSCAP-Last-alerts',
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
          columnIndex: 2,
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
          field: 'data.oscap.check.title',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 50,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Title'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.oscap.scan.profile.title',
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          size: 5,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Profile'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        params: {
          sort: {
            columnIndex: 2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy1vc2NhcC50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImdhdWdlIiwidmVydGljYWxTcGxpdCIsImF1dG9FeHRlbmQiLCJwZXJjZW50YWdlTW9kZSIsImdhdWdlVHlwZSIsImdhdWdlU3R5bGUiLCJiYWNrU3R5bGUiLCJvcmllbnRhdGlvbiIsImNvbG9yU2NoZW1hIiwiZ2F1Z2VDb2xvck1vZGUiLCJ1c2VSYW5nZSIsImNvbG9yc1JhbmdlIiwiZnJvbSIsInRvIiwiaW52ZXJ0Q29sb3JzIiwibGFiZWxzIiwic2hvdyIsImNvbG9yIiwic2NhbGUiLCJ3aWR0aCIsInN0eWxlIiwiZm9udFNpemUiLCJiZ0NvbG9yIiwibGFiZWxDb2xvciIsInN1YlRleHQiLCJhZ2dzIiwiaWQiLCJlbmFibGVkIiwic2NoZW1hIiwiZmllbGQiLCJjdXN0b21MYWJlbCIsInVpU3RhdGVKU09OIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImluZGV4IiwiZmlsdGVyIiwicXVlcnkiLCJsYW5ndWFnZSIsIl90eXBlIiwidmlzIiwiZGVmYXVsdENvbG9ycyIsInBlclBhZ2UiLCJzaG93UGFydGlhbFJvd3MiLCJzaG93TWV0aWNzQXRBbGxMZXZlbHMiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iLCJzaG93VG90YWwiLCJzaG93VG9vbGJhciIsInRvdGFsRnVuYyIsInNpemUiLCJvcmRlciIsIm9yZGVyQnkiLCJtZXRhIiwibmVnYXRlIiwiZGlzYWJsZWQiLCJhbGlhcyIsImtleSIsInZhbHVlIiwibWF0Y2giLCIkc3RhdGUiLCJzdG9yZSIsImxlZ2VuZFBvc2l0aW9uIiwiaXNEb251dCIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwiY2F0ZWdvcnlBeGVzIiwicG9zaXRpb24iLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsInZhbHVlQXhpcyIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsInRpbWVzIiwiYWRkVGltZU1hcmtlciIsImludGVydmFsIiwiY3VzdG9tSW50ZXJ2YWwiLCJtaW5fZG9jX2NvdW50IiwiZXh0ZW5kZWRfYm91bmRzIiwib3RoZXJCdWNrZXQiLCJvdGhlckJ1Y2tldExhYmVsIiwibWlzc2luZ0J1Y2tldCIsIm1pc3NpbmdCdWNrZXRMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztlQVdlLENBQ2I7QUFDRUEsRUFBQUEsR0FBRyxFQUFFLDRDQURQO0FBRUVDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUscUJBREE7QUFFUEMsSUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN2QkgsTUFBQUEsS0FBSyxFQUFFLHFCQURnQjtBQUV2QkksTUFBQUEsSUFBSSxFQUFFLFFBRmlCO0FBR3ZCQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsVUFBVSxFQUFFLElBRE47QUFFTkMsUUFBQUEsU0FBUyxFQUFFLEtBRkw7QUFHTkgsUUFBQUEsSUFBSSxFQUFFLE9BSEE7QUFJTkksUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLGFBQWEsRUFBRSxLQURWO0FBRUxDLFVBQUFBLFVBQVUsRUFBRSxLQUZQO0FBR0xDLFVBQUFBLGNBQWMsRUFBRSxLQUhYO0FBSUxDLFVBQUFBLFNBQVMsRUFBRSxRQUpOO0FBS0xDLFVBQUFBLFVBQVUsRUFBRSxNQUxQO0FBTUxDLFVBQUFBLFNBQVMsRUFBRSxNQU5OO0FBT0xDLFVBQUFBLFdBQVcsRUFBRSxVQVBSO0FBUUxDLFVBQUFBLFdBQVcsRUFBRSxjQVJSO0FBU0xDLFVBQUFBLGNBQWMs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VUFBQUEsS0FBSyxFQUFFLCtCQUREO0FBRU4yRCxVQUFBQSxXQUFXLEVBQUUsS0FGUDtBQUdOQyxVQUFBQSxnQkFBZ0IsRUFBRSxPQUhaO0FBSU5DLFVBQUFBLGFBQWEsRUFBRSxLQUpUO0FBS05DLFVBQUFBLGtCQUFrQixFQUFFLFNBTGQ7QUFNTnZDLFVBQUFBLElBQUksRUFBRSxDQU5BO0FBT05DLFVBQUFBLEtBQUssRUFBRSxNQVBEO0FBUU5DLFVBQUFBLE9BQU8sRUFBRSxHQVJIO0FBU054QixVQUFBQSxXQUFXLEVBQUU7QUFUUDtBQUxWLE9BbkJJO0FBWmlCLEtBQWYsQ0FGSDtBQW9EUEMsSUFBQUEsV0FBVyxFQUFFckMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDMUI4QyxNQUFBQSxHQUFHLEVBQUU7QUFBRTVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFaUQsVUFBQUEsSUFBSSxFQUFFO0FBQUVDLFlBQUFBLFdBQVcsRUFBRSxDQUFmO0FBQWtCQyxZQUFBQSxTQUFTLEVBQUU7QUFBN0I7QUFBUjtBQUFWO0FBRHFCLEtBQWYsQ0FwRE47QUF1RFBoQixJQUFBQSxXQUFXLEVBQUUsRUF2RE47QUF3RFBDLElBQUFBLE9BQU8sRUFBRSxDQXhERjtBQXlEUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFekMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDL0J5QyxRQUFBQSxLQUFLLEVBQUUsY0FEd0I7QUFFL0JDLFFBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUF6RGhCO0FBSFgsQ0ExMkJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBBZ2VudHMvT1NDQVAgdmlzdWFsaXphdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLU9TQ0FQLUhpZ2hlci1zY29yZS1tZXRyaWMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnSGlnaGVyIHNjb3JlIG1ldHJpYycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0hpZ2hlciBzY29yZSBtZXRyaWMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgZ2F1Z2U6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsU3BsaXQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0V4dGVuZDogZmFsc2UsXG4gICAgICAgICAgICBwZXJjZW50YWdlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBnYXVnZVR5cGU6ICdNZXRyaWMnLFxuICAgICAgICAgICAgZ2F1Z2VTdHlsZTogJ0Z1bGwnLFxuICAgICAgICAgICAgYmFja1N0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIGdhdWdlQ29sb3JNb2RlOiAnTm9uZScsXG4gICAgICAgICAgICB1c2VSYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcnNSYW5nZTogW3sgZnJvbTogMCwgdG86IDEwMCB9XSxcbiAgICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7IHNob3c6IGZhbHNlLCBsYWJlbHM6IGZhbHNlLCBjb2xvcjogJyMzMzMnLCB3aWR0aDogMiB9LFxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMjAsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnbWF4JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLm9zY2FwLnNjYW4uc2NvcmUnLCBjdXN0b21MYWJlbDogJ0hpZ2hlciBzY29yZScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3tcInZpc1wiOntcImRlZmF1bHRDb2xvcnNcIjp7XCIwIC0gMTAwXCI6XCJyZ2IoMCwxMDQsNTUpXCJ9fX0nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtTG93ZXItc2NvcmUtbWV0cmljJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0xvd2VyIHNjb3JlIG1ldHJpYycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0xvd2VyIHNjb3JlIG1ldHJpYycsXG4gICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ2dhdWdlJyxcbiAgICAgICAgICBnYXVnZToge1xuICAgICAgICAgICAgdmVydGljYWxTcGxpdDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvRXh0ZW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGdhdWdlVHlwZTogJ01ldHJpYycsXG4gICAgICAgICAgICBnYXVnZVN0eWxlOiAnRnVsbCcsXG4gICAgICAgICAgICBiYWNrU3R5bGU6ICdGdWxsJyxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbiB0byBSZWQnLFxuICAgICAgICAgICAgZ2F1Z2VDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIHVzZVJhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyBmcm9tOiAwLCB0bzogMTAwIH1dLFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgc2NhbGU6IHsgc2hvdzogZmFsc2UsIGxhYmVsczogZmFsc2UsIGNvbG9yOiAnIzMzMycsIHdpZHRoOiAyIH0sXG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAyMCwgYmdDb2xvcjogZmFsc2UsIGxhYmVsQ29sb3I6IGZhbHNlLCBzdWJUZXh0OiAnJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdtaW4nLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2RhdGEub3NjYXAuc2Nhbi5zY29yZScsIGN1c3RvbUxhYmVsOiAnTG93ZXIgc2NvcmUnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGRlZmF1bHRDb2xvcnM6IHsgJzAgLSAxMDAnOiAncmdiKDAsMTA0LDU1KScgfSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtTGFzdC1zY29yZScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdMYXN0IHNjb3JlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTGFzdCBzY29yZScsXG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBlclBhZ2U6IDEwLFxuICAgICAgICAgIHNob3dQYXJ0aWFsUm93czogZmFsc2UsXG4gICAgICAgICAgc2hvd01ldGljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7IGNvbHVtbkluZGV4OiBudWxsLCBkaXJlY3Rpb246IG51bGwgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdtYXgnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHsgZmllbGQ6ICd0aW1lc3RhbXAnIH0gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiAnZGF0YS5vc2NhcC5zY2FuLnNjb3JlJywgc2l6ZTogMSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiBudWxsLCBkaXJlY3Rpb246IG51bGwgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLU9TQ0FQLUxhc3Qtc2Nhbi1wcm9maWxlJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0xhc3Qgc2NhbiBwcm9maWxlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTGFzdCBzY2FuIHByb2ZpbGUnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogbnVsbCwgZGlyZWN0aW9uOiBudWxsIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnbWF4Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7IGZpZWxkOiAndGltZXN0YW1wJyB9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEub3NjYXAuc2Nhbi5wcm9maWxlLnRpdGxlJyxcbiAgICAgICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IG51bGwsIGRpcmVjdGlvbjogbnVsbCB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdkYXRhLm9zY2FwLmNoZWNrLnJlc3VsdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLU9TQ0FQLVNjYW5zJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1NjYW5zJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnU2NhbnMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiAnZGF0YS5vc2NhcC5zY2FuLmlkJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1PU0NBUC1Qcm9maWxlcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdQcm9maWxlcycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1Byb2ZpbGVzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEub3NjYXAuc2Nhbi5wcm9maWxlLnRpdGxlJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRhLm9zY2FwLmNoZWNrLnJlc3VsdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdydWxlLmdyb3VwcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdzeXNsb2cnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6ICdzeXNsb2cnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ3J1bGUuZ3JvdXBzJzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ3N5c2xvZycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1PU0NBUC1Db250ZW50JyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0NvbnRlbnQnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDb250ZW50JyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2RhdGEub3NjYXAuc2Nhbi5jb250ZW50Jywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAncnVsZS5ncm91cHMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnc3lzbG9nJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc3lzbG9nJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdydWxlLmdyb3Vwcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICdzeXNsb2cnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtU2V2ZXJpdHknLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnU2V2ZXJpdHknLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdTZXZlcml0eScsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLm9zY2FwLmNoZWNrLnNldmVyaXR5Jywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAncnVsZS5ncm91cHMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnc3lzbG9nJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc3lzbG9nJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdydWxlLmdyb3Vwcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICdzeXNsb2cnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtRGFpbHktc2NhbnMtZXZvbHV0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0RhaWx5IHNjYW5zIGV2b2x1dGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0RhaWx5IHNjYW5zIGV2b2x1dGlvbicsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0gfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgICAgICAgIG1vZGU6ICdzdGFja2VkJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGN1c3RvbUludGVydmFsOiAnMmgnLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0RhaWx5IHNjYW5zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtVG9wLTUtQWxlcnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCA1IEFsZXJ0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCA1IEFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLm9zY2FwLmNoZWNrLnRpdGxlJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtT1NDQVAtVG9wLTUtSGlnaC1yaXNrLWFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgNSBIaWdoIHJpc2sgYWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIDUgSGlnaCByaXNrIGFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLm9zY2FwLmNoZWNrLnRpdGxlJywgc2l6ZTogNSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2sucmVzdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ2ZhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEub3NjYXAuY2hlY2suc2V2ZXJpdHknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJ2hpZ2gnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEub3NjYXAuY2hlY2suc2V2ZXJpdHknOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1PU0NBUC1Ub3AtYWxlcnQnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIGFsZXJ0JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIGFsZXJ0JyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0aWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IG51bGwsIGRpcmVjdGlvbjogbnVsbCB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLm9zY2FwLmNoZWNrLnRpdGxlJywgc2l6ZTogMSwgb3JkZXI6ICdkZXNjJywgb3JkZXJCeTogJzEnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiBudWxsLCBkaXJlY3Rpb246IG51bGwgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRhLm9zY2FwLmNoZWNrLnJlc3VsdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWlsJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAnZGF0YS5vc2NhcC5jaGVjay5yZXN1bHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1PU0NBUC1MYXN0LWFsZXJ0cycsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0xhc3QgYWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTGFzdCBhbGVydHMnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMiwgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vc2NhcC5jaGVjay50aXRsZScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1RpdGxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5vc2NhcC5zY2FuLnByb2ZpbGUudGl0bGUnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1Byb2ZpbGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDIsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=