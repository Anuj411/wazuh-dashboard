"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/VirusTotal visualizations
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
  _id: 'Wazuh-App-Overview-Virustotal-Last-Files-Pie',
  _type: 'visualization',
  _source: {
    title: 'Last files',
    visState: JSON.stringify({
      title: 'Last files',
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
        params: {
          customLabel: 'Files'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'data.virustotal.source.file',
          size: 5,
          order: 'desc',
          orderBy: '1'
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Files-Table',
  _type: 'visualization',
  _source: {
    title: 'Files',
    visState: JSON.stringify({
      title: 'Files',
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
        params: {
          customLabel: 'Count'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.virustotal.source.file',
          size: 10,
          order: 'desc',
          orderBy: '1',
          customLabel: 'File'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'data.virustotal.permalink',
          size: 1,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Link'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Total-Malicious',
  _type: 'visualization',
  _source: {
    title: 'Total Malicious',
    visState: JSON.stringify({
      title: 'Total Malicious',
      type: 'metric',
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
            fontSize: 20
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Total malicious files'
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
            key: 'data.virustotal.malicious',
            value: '1',
            params: {
              query: '1',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.malicious': {
                query: '1',
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Total-Positives',
  _type: 'visualization',
  _source: {
    title: 'Total Positives',
    visState: JSON.stringify({
      title: 'Total Positives',
      type: 'metric',
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
            fontSize: 20
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Total positive files'
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
            type: 'exists',
            key: 'data.virustotal.positives',
            value: 'exists'
          },
          exists: {
            field: 'data.virustotal.positives'
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
            key: 'data.virustotal.positives',
            value: '0',
            params: {
              query: 0,
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.positives': {
                query: 0,
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Malicious-Evolution',
  _type: 'visualization',
  _source: {
    title: 'Malicious Evolution',
    visState: JSON.stringify({
      title: 'Malicious Evolution',
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
            text: 'Malicious'
          }
        }],
        seriesParams: [{
          show: 'true',
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Malicious',
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
        params: {
          customLabel: 'Malicious'
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: false,
            disabled: false,
            alias: null,
            type: 'exists',
            key: 'data.virustotal.malicious',
            value: 'exists'
          },
          exists: {
            field: 'data.virustotal.malicious'
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
            key: 'data.virustotal.malicious',
            value: '0',
            params: {
              query: 0,
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.malicious': {
                query: 0,
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Total',
  _type: 'visualization',
  _source: {
    title: 'Total',
    visState: JSON.stringify({
      title: 'Total',
      type: 'metric',
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
            fontSize: 20
          }
        }
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Total scans'
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
            type: 'exists',
            key: 'data.virustotal',
            value: 'exists'
          },
          exists: {
            field: 'data.virustotal'
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Malicious-Per-Agent-Table',
  _type: 'visualization',
  _source: {
    title: 'Malicious Per Agent Table',
    visState: JSON.stringify({
      title: 'Malicious Per Agent Table',
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
        type: 'cardinality',
        schema: 'metric',
        params: {
          field: 'data.virustotal.source.md5',
          customLabel: 'Malicious detected files'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'bucket',
        params: {
          field: 'agent.name',
          size: 16,
          order: 'desc',
          orderBy: '1',
          customLabel: 'Agent'
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: true,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.virustotal.malicious',
            value: '0',
            params: {
              query: '0',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.malicious': {
                query: '0',
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Malicious-Per-Agent',
  _type: 'visualization',
  _source: {
    title: 'Top 5 agents with unique malicious files',
    visState: JSON.stringify({
      title: 'Top 5 agents with unique malicious files',
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
        type: 'cardinality',
        schema: 'metric',
        params: {
          field: 'data.virustotal.source.md5'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
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
        filter: [{
          meta: {
            index: 'wazuh-alerts',
            negate: true,
            disabled: false,
            alias: null,
            type: 'phrase',
            key: 'data.virustotal.malicious',
            value: '0',
            params: {
              query: '0',
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.malicious': {
                query: '0',
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Alerts-Evolution',
  _type: 'visualization',
  _source: {
    title: 'Positives Heatmap',
    visState: JSON.stringify({
      title: 'Alerts evolution by agents',
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
              intervalOpenSearchValue: 3,
              intervalOpenSearchUnit: 'h',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2020-04-17T12:11:35.943Z',
                max: '2020-04-24T12:11:35.944Z'
              }
            },
            label: 'timestamp per 3 hours',
            aggType: 'date_histogram'
          },
          y: [{
            accessor: 2,
            format: {
              id: 'number'
            },
            params: {},
            label: 'Count',
            aggType: 'count'
          }],
          series: [{
            accessor: 1,
            format: {
              id: 'string',
              params: {
                parsedUrl: {
                  origin: 'http://localhost:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Top 5 unusual terms in agent.name',
            aggType: 'significant_terms'
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
            from: 'now-7d',
            to: 'now'
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
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 7': 'rgb(247,251,255)',
          '7 - 13': 'rgb(219,233,246)',
          '13 - 20': 'rgb(187,214,235)',
          '20 - 26': 'rgb(137,190,220)',
          '26 - 33': 'rgb(83,158,205)',
          '33 - 39': 'rgb(42,123,186)',
          '39 - 45': 'rgb(11,85,159)'
        },
        legendOpen: true
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
            type: 'exists',
            key: 'data.virustotal.positives',
            value: 'exists'
          },
          exists: {
            field: 'data.virustotal.positives'
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
            key: 'data.virustotal.positives',
            value: '0',
            params: {
              query: 0,
              type: 'phrase'
            }
          },
          query: {
            match: {
              'data.virustotal.positives': {
                query: 0,
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
  }
}, {
  _id: 'Wazuh-App-Overview-Virustotal-Alerts-summary',
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
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXZpcnVzdG90YWwudHMiXSwibmFtZXMiOlsiX2lkIiwiX3R5cGUiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwiaXNEb251dCIsImxhYmVscyIsInNob3ciLCJ2YWx1ZXMiLCJsYXN0X2xldmVsIiwidHJ1bmNhdGUiLCJhZ2dzIiwiaWQiLCJlbmFibGVkIiwic2NoZW1hIiwiY3VzdG9tTGFiZWwiLCJmaWVsZCIsInNpemUiLCJvcmRlciIsIm9yZGVyQnkiLCJ1aVN0YXRlSlNPTiIsInZpcyIsImxlZ2VuZE9wZW4iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwiaW5kZXgiLCJmaWx0ZXIiLCJxdWVyeSIsImxhbmd1YWdlIiwicGVyUGFnZSIsInNob3dQYXJ0aWFsUm93cyIsInNob3dNZXRpY3NBdEFsbExldmVscyIsInNvcnQiLCJjb2x1bW5JbmRleCIsImRpcmVjdGlvbiIsInNob3dUb3RhbCIsInNob3dUb29sYmFyIiwidG90YWxGdW5jIiwibWV0cmljIiwicGVyY2VudGFnZU1vZGUiLCJ1c2VSYW5nZXMiLCJjb2xvclNjaGVtYSIsIm1ldHJpY0NvbG9yTW9kZSIsImNvbG9yc1JhbmdlIiwiZnJvbSIsInRvIiwiaW52ZXJ0Q29sb3JzIiwic3R5bGUiLCJiZ0ZpbGwiLCJiZ0NvbG9yIiwibGFiZWxDb2xvciIsInN1YlRleHQiLCJmb250U2l6ZSIsIm1ldGEiLCJuZWdhdGUiLCJkaXNhYmxlZCIsImFsaWFzIiwia2V5IiwidmFsdWUiLCJtYXRjaCIsIiRzdGF0ZSIsInN0b3JlIiwiZXhpc3RzIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJjb2xvciIsImNhdGVnb3J5QXhlcyIsInBvc2l0aW9uIiwic2NhbGUiLCJ2YWx1ZUF4ZXMiLCJuYW1lIiwibW9kZSIsInJvdGF0ZSIsInRleHQiLCJzZXJpZXNQYXJhbXMiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZUF4aXMiLCJkcmF3TGluZXNCZXR3ZWVuUG9pbnRzIiwic2hvd0NpcmNsZXMiLCJ0aW1lcyIsImFkZFRpbWVNYXJrZXIiLCJpbnRlcnZhbCIsImN1c3RvbUludGVydmFsIiwibWluX2RvY19jb3VudCIsImV4dGVuZGVkX2JvdW5kcyIsImxpbmVXaWR0aCIsInRocmVzaG9sZExpbmUiLCJ3aWR0aCIsImRpbWVuc2lvbnMiLCJ4IiwiYWNjZXNzb3IiLCJmb3JtYXQiLCJwYXR0ZXJuIiwiZGF0ZSIsImludGVydmFsT3BlblNlYXJjaFZhbHVlIiwiaW50ZXJ2YWxPcGVuU2VhcmNoVW5pdCIsImJvdW5kcyIsIm1pbiIsIm1heCIsImFnZ1R5cGUiLCJ5Iiwic2VyaWVzIiwicGFyc2VkVXJsIiwib3JpZ2luIiwicGF0aG5hbWUiLCJiYXNlUGF0aCIsInJhZGl1c1JhdGlvIiwidGltZVJhbmdlIiwidXNlTm9ybWFsaXplZEVzSW50ZXJ2YWwiLCJzY2FsZU1ldHJpY1ZhbHVlcyIsImRyb3BfcGFydGlhbHMiLCJvdGhlckJ1Y2tldCIsIm90aGVyQnVja2V0TGFiZWwiLCJtaXNzaW5nQnVja2V0IiwibWlzc2luZ0J1Y2tldExhYmVsIiwiZGVmYXVsdENvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztlQVdlLENBQ2I7QUFDRUEsRUFBQUEsR0FBRyxFQUFFLDhDQURQO0FBRUVDLEVBQUFBLEtBQUssRUFBRSxlQUZUO0FBR0VDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsWUFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsWUFEZ0I7QUFFdkJJLE1BQUFBLElBQUksRUFBRSxLQUZpQjtBQUd2QkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05ELFFBQUFBLElBQUksRUFB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QUFFQSxVQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFBQSxRQUFRLEVBQUU7QUFBdkI7QUFId0IsT0FBZjtBQURHO0FBMUVoQjtBQUhYLENBM3pCYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgT3ZlcnZpZXcvVmlydXNUb3RhbCB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1WaXJ1c3RvdGFsLUxhc3QtRmlsZXMtUGllJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTGFzdCBmaWxlcycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0xhc3QgZmlsZXMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ0ZpbGVzJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdkYXRhLnZpcnVzdG90YWwuc291cmNlLmZpbGUnLCBzaXplOiA1LCBvcmRlcjogJ2Rlc2MnLCBvcmRlckJ5OiAnMScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoeyB2aXM6IHsgbGVnZW5kT3BlbjogdHJ1ZSB9IH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctVmlydXN0b3RhbC1GaWxlcy1UYWJsZScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0ZpbGVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnRmlsZXMnLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMiwgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGN1c3RvbUxhYmVsOiAnQ291bnQnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS52aXJ1c3RvdGFsLnNvdXJjZS5maWxlJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdGaWxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS52aXJ1c3RvdGFsLnBlcm1hbGluaycsXG4gICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdMaW5rJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAyLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LVZpcnVzdG90YWwtVG90YWwtTWFsaWNpb3VzJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG90YWwgTWFsaWNpb3VzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG90YWwgTWFsaWNpb3VzJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZVJhbmdlczogZmFsc2UsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBtZXRyaWNDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyBmcm9tOiAwLCB0bzogMTAwMDAgfV0sXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSB9LFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGJnRmlsbDogJyMwMDAnLCBiZ0NvbG9yOiBmYWxzZSwgbGFiZWxDb2xvcjogZmFsc2UsIHN1YlRleHQ6ICcnLCBmb250U2l6ZTogMjAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ1RvdGFsIG1hbGljaW91cyBmaWxlcycgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6ICcxJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdkYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzJzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJzEnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctVmlydXN0b3RhbC1Ub3RhbC1Qb3NpdGl2ZXMnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3RhbCBQb3NpdGl2ZXMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3RhbCBQb3NpdGl2ZXMnLFxuICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlUmFuZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIG1ldHJpY0NvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFt7IGZyb206IDAsIHRvOiAxMDAwMCB9XSxcbiAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlIH0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmdGaWxsOiAnIzAwMCcsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycsIGZvbnRTaXplOiAyMCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGN1c3RvbUxhYmVsOiAnVG90YWwgcG9zaXRpdmUgZmlsZXMnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2V4aXN0cycsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS52aXJ1c3RvdGFsLnBvc2l0aXZlcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdleGlzdHMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleGlzdHM6IHtcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEudmlydXN0b3RhbC5wb3NpdGl2ZXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgICAgICAgbmVnYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRhLnZpcnVzdG90YWwucG9zaXRpdmVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IDAsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAnZGF0YS52aXJ1c3RvdGFsLnBvc2l0aXZlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1WaXJ1c3RvdGFsLU1hbGljaW91cy1Fdm9sdXRpb24nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdNYWxpY2lvdXMgRXZvbHV0aW9uJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTWFsaWNpb3VzIEV2b2x1dGlvbicsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlLCBzdHlsZTogeyBjb2xvcjogJyNlZWUnIH0gfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnTWFsaWNpb3VzJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdNYWxpY2lvdXMnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgY3VzdG9tTGFiZWw6ICdNYWxpY2lvdXMnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGN1c3RvbUludGVydmFsOiAnMmgnLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXhpc3RzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2V4aXN0cycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4aXN0czoge1xuICAgICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS52aXJ1c3RvdGFsLm1hbGljaW91cycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogMCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICdkYXRhLnZpcnVzdG90YWwubWFsaWNpb3VzJzoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LVZpcnVzdG90YWwtVG90YWwnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3RhbCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvdGFsJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZVJhbmdlczogZmFsc2UsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBtZXRyaWNDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyBmcm9tOiAwLCB0bzogMTAwMDAgfV0sXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSB9LFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGJnRmlsbDogJyMwMDAnLCBiZ0NvbG9yOiBmYWxzZSwgbGFiZWxDb2xvcjogZmFsc2UsIHN1YlRleHQ6ICcnLCBmb250U2l6ZTogMjAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBjdXN0b21MYWJlbDogJ1RvdGFsIHNjYW5zJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdleGlzdHMnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEudmlydXN0b3RhbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdleGlzdHMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleGlzdHM6IHtcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEudmlydXN0b3RhbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICRzdGF0ZToge1xuICAgICAgICAgICAgICAgIHN0b3JlOiAnYXBwU3RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LVZpcnVzdG90YWwtTWFsaWNpb3VzLVBlci1BZ2VudC1UYWJsZScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01hbGljaW91cyBQZXIgQWdlbnQgVGFibGUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdNYWxpY2lvdXMgUGVyIEFnZW50IFRhYmxlJyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0aWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IDIsIGRpcmVjdGlvbjogJ2Rlc2MnIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY2FyZGluYWxpdHknLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEudmlydXN0b3RhbC5zb3VyY2UubWQ1JyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdNYWxpY2lvdXMgZGV0ZWN0ZWQgZmlsZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdhZ2VudC5uYW1lJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTYsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMiwgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJzAnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1WaXJ1c3RvdGFsLU1hbGljaW91cy1QZXItQWdlbnQnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgNSBhZ2VudHMgd2l0aCB1bmlxdWUgbWFsaWNpb3VzIGZpbGVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIDUgYWdlbnRzIHdpdGggdW5pcXVlIG1hbGljaW91cyBmaWxlcycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjYXJkaW5hbGl0eScsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiAnZGF0YS52aXJ1c3RvdGFsLnNvdXJjZS5tZDUnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ2FnZW50Lm5hbWUnLCBzaXplOiA1LCBvcmRlcjogJ2Rlc2MnLCBvcmRlckJ5OiAnMScgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICAgICAgICBuZWdhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogJzAnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEudmlydXN0b3RhbC5tYWxpY2lvdXMnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaHJhc2UnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAkc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzdG9yZTogJ2FwcFN0YXRlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1WaXJ1c3RvdGFsLUFsZXJ0cy1Fdm9sdXRpb24nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdQb3NpdGl2ZXMgSGVhdG1hcCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBldm9sdXRpb24gYnkgYWdlbnRzJyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogZmFsc2UgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICB0aHJlc2hvbGRMaW5lOiB7IHNob3c6IGZhbHNlLCB2YWx1ZTogMTAsIHdpZHRoOiAxLCBzdHlsZTogJ2Z1bGwnLCBjb2xvcjogJyNFNzY2NEMnIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnZGF0ZScsIHBhcmFtczogeyBwYXR0ZXJuOiAnWVlZWS1NTS1ERCBISDptbScgfSB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGludGVydmFsOiAnUFQzSCcsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxPcGVuU2VhcmNoVmFsdWU6IDMsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxPcGVuU2VhcmNoVW5pdDogJ2gnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW0nLFxuICAgICAgICAgICAgICAgIGJvdW5kczogeyBtaW46ICcyMDIwLTA0LTE3VDEyOjExOjM1Ljk0M1onLCBtYXg6ICcyMDIwLTA0LTI0VDEyOjExOjM1Ljk0NFonIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiAndGltZXN0YW1wIHBlciAzIGhvdXJzJyxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMixcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAnY291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkVXJsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDo1NjAxJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hcHAva2liYW5hJyxcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlUGF0aDogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RvcCA1IHVudXN1YWwgdGVybXMgaW4gYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3NpZ25pZmljYW50X3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWRpdXNSYXRpbzogNTAsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTdkJywgdG86ICdub3cnIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHtcbiAgICAgICAgICBkZWZhdWx0Q29sb3JzOiB7XG4gICAgICAgICAgICAnMCAtIDcnOiAncmdiKDI0NywyNTEsMjU1KScsXG4gICAgICAgICAgICAnNyAtIDEzJzogJ3JnYigyMTksMjMzLDI0NiknLFxuICAgICAgICAgICAgJzEzIC0gMjAnOiAncmdiKDE4NywyMTQsMjM1KScsXG4gICAgICAgICAgICAnMjAgLSAyNic6ICdyZ2IoMTM3LDE5MCwyMjApJyxcbiAgICAgICAgICAgICcyNiAtIDMzJzogJ3JnYig4MywxNTgsMjA1KScsXG4gICAgICAgICAgICAnMzMgLSAzOSc6ICdyZ2IoNDIsMTIzLDE4NiknLFxuICAgICAgICAgICAgJzM5IC0gNDUnOiAncmdiKDExLDg1LDE1OSknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVnZW5kT3BlbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdleGlzdHMnLFxuICAgICAgICAgICAgICAgIGtleTogJ2RhdGEudmlydXN0b3RhbC5wb3NpdGl2ZXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZXhpc3RzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhpc3RzOiB7XG4gICAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLnZpcnVzdG90YWwucG9zaXRpdmVzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0YS52aXJ1c3RvdGFsLnBvc2l0aXZlcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAwLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3BocmFzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEudmlydXN0b3RhbC5wb3NpdGl2ZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGhyYXNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6ICdhcHBTdGF0ZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctVmlydXN0b3RhbC1BbGVydHMtc3VtbWFyeScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5pZCcsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUnVsZSBJRCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdMZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==