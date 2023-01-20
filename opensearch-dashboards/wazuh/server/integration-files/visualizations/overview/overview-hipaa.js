"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/HIPAA visualizations
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
  _id: 'Wazuh-App-Overview-HIPAA-Tag-cloud',
  _source: {
    title: 'Most common alerts',
    visState: JSON.stringify({
      title: 'Most common alerts',
      type: 'tagcloud',
      params: {
        scale: 'linear',
        orientation: 'single',
        minFontSize: 10,
        maxFontSize: 30,
        showLabel: false,
        metric: {
          type: 'vis_dimension',
          accessor: 1,
          format: {
            id: 'string',
            params: {}
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
          language: 'lucene',
          query: ''
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-HIPAA-Top-10-requirements',
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
  _id: 'Wazuh-App-Overview-HIPAA-Top-10-agents',
  _source: {
    title: 'Most active agents',
    visState: JSON.stringify({
      title: 'Most active agents',
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
          field: 'agent.name',
          customLabel: 'Agent',
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
  _id: 'Wazuh-App-Overview-HIPAA-Metrics',
  _source: {
    title: 'Stats',
    visState: JSON.stringify({
      title: 'Stats',
      type: 'metric',
      params: {
        metric: {
          percentageMode: false,
          useRanges: false,
          colorSchema: 'Green to Red',
          metricColorMode: 'None',
          colorsRange: [{
            type: 'range',
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
        },
        dimensions: {
          metrics: [{
            type: 'vis_dimension',
            accessor: 0,
            format: {
              id: 'number',
              params: {}
            }
          }, {
            type: 'vis_dimension',
            accessor: 1,
            format: {
              id: 'number',
              params: {}
            }
          }]
        },
        addTooltip: true,
        addLegend: false,
        type: 'metric'
      },
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        schema: 'metric',
        params: {
          customLabel: 'Total alerts'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'max',
        schema: 'metric',
        params: {
          field: 'rule.level',
          customLabel: 'Max rule level detected'
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
  _id: 'Wazuh-App-Overview-HIPAA-Alerts-summary',
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
                id: 'string',
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
                id: 'number',
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
        schema: 'bucket',
        params: {
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 50,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agent'
        }
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
          language: 'lucene',
          query: ''
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-HIPAA-Heatmap',
  _source: {
    title: 'Alerts volume by agent',
    visState: JSON.stringify({
      title: 'Alerts volume by agent',
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
            color: 'black'
          }
        }],
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
          field: 'agent.id',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agent ID'
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
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Requirement'
        }
      }]
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 260': 'rgb(247,252,245)',
          '260 - 520': 'rgb(233,247,228)',
          '520 - 780': 'rgb(211,238,205)',
          '780 - 1,040': 'rgb(184,227,177)',
          '1,040 - 1,300': 'rgb(152,213,148)',
          '1,300 - 1,560': 'rgb(116,196,118)',
          '1,560 - 1,820': 'rgb(75,176,98)',
          '1,820 - 2,080': 'rgb(47,152,79)',
          '2,080 - 2,340': 'rgb(21,127,59)',
          '2,340 - 2,600': 'rgb(0,100,40)'
        },
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
          language: 'lucene',
          query: ''
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-HIPAA-Top-10-requirements-over-time-by-agent',
  _source: {
    title: 'Requirements distribution by agent',
    visState: JSON.stringify({
      title: 'Requirements distribution by agent',
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
              id: 'date',
              params: {
                pattern: 'YYYY-MM-DD HH:mm'
              }
            },
            params: {
              date: true,
              interval: 'auto',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2019-08-15T12:25:44.851Z',
                max: '2019-08-22T12:25:44.851Z'
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
        schema: 'group',
        params: {
          field: 'rule.hipaa',
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
  _id: 'Wazuh-App-Overview-HIPAA-Top-requirements-over-time',
  _source: {
    title: 'Requirements evolution over time',
    visState: JSON.stringify({
      title: 'Requirements evolution over time',
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
              id: 'date',
              params: {
                pattern: 'YYYY-MM-DD HH:mm'
              }
            },
            params: {
              date: true,
              interval: 'auto',
              format: 'YYYY-MM-DD HH:mm',
              bounds: {
                min: '2019-08-15T12:25:29.501Z',
                max: '2019-08-22T12:25:29.501Z'
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
          field: 'rule.hipaa',
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
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWhpcGFhLnRzIl0sIm5hbWVzIjpbIl9pZCIsIl9zb3VyY2UiLCJ0aXRsZSIsInZpc1N0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJwYXJhbXMiLCJzY2FsZSIsIm9yaWVudGF0aW9uIiwibWluRm9udFNpemUiLCJtYXhGb250U2l6ZSIsInNob3dMYWJlbCIsIm1ldHJpYyIsImFjY2Vzc29yIiwiZm9ybWF0IiwiaWQiLCJhZ2dzIiwiZW5hYmxlZCIsInNjaGVtYSIsImZpZWxkIiwib3JkZXJCeSIsIm9yZGVyIiwic2l6ZSIsIm90aGVyQnVja2V0Iiwib3RoZXJCdWNrZXRMYWJlbCIsIm1pc3NpbmdCdWNrZXQiLCJtaXNzaW5nQnVja2V0TGFiZWwiLCJjdXN0b21MYWJlbCIsInVpU3RhdGVKU09OIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImluZGV4IiwiZmlsdGVyIiwicXVlcnkiLCJsYW5ndWFnZSIsIl90eXBlIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwiaXNEb251dCIsImxhYmVscyIsInNob3ciLCJ2YWx1ZXMiLCJsYXN0X2xldmVsIiwidHJ1bmNhdGUiLCJkaW1lbnNpb25zIiwiYWdnVHlwZSIsImJ1Y2tldHMiLCJwZXJjZW50YWdlTW9kZSIsInVzZVJhbmdlcyIsImNvbG9yU2NoZW1hIiwibWV0cmljQ29sb3JNb2RlIiwiY29sb3JzUmFuZ2UiLCJmcm9tIiwidG8iLCJpbnZlcnRDb2xvcnMiLCJzdHlsZSIsImJnRmlsbCIsImJnQ29sb3IiLCJsYWJlbENvbG9yIiwic3ViVGV4dCIsImZvbnRTaXplIiwibWV0cmljcyIsInBlclBhZ2UiLCJzaG93UGFydGlhbFJvd3MiLCJzaG93TWV0cmljc0F0QWxsTGV2ZWxzIiwic29ydCIsImNvbHVtbkluZGV4IiwiZGlyZWN0aW9uIiwic2hvd1RvdGFsIiwic2hvd1Rvb2xiYXIiLCJ0b3RhbEZ1bmMiLCJ2aXMiLCJlbmFibGVIb3ZlciIsInRpbWVzIiwiY29sb3JzTnVtYmVyIiwic2V0Q29sb3JSYW5nZSIsInZhbHVlQXhlcyIsImRlZmF1bHRZRXh0ZW50cyIsInJvdGF0ZSIsIm92ZXJ3cml0ZUNvbG9yIiwiY29sb3IiLCJ4IiwieSIsInNlcmllcyIsImRlZmF1bHRDb2xvcnMiLCJsZWdlbmRPcGVuIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJ2YWx1ZUF4aXMiLCJjYXRlZ29yeUF4ZXMiLCJwb3NpdGlvbiIsIm5hbWUiLCJtb2RlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImFkZFRpbWVNYXJrZXIiLCJwYXR0ZXJuIiwiZGF0ZSIsImludGVydmFsIiwiYm91bmRzIiwibWluIiwibWF4IiwidGltZVJhbmdlIiwidXNlTm9ybWFsaXplZEVzSW50ZXJ2YWwiLCJkcm9wX3BhcnRpYWxzIiwibWluX2RvY19jb3VudCIsImV4dGVuZGVkX2JvdW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztlQVdlLENBQ2I7QUFDRUEsRUFBQUEsR0FBRyxFQUFFLG9DQURQO0FBRUVDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsb0JBREE7QUFFUEMsSUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN2QkgsTUFBQUEsS0FBSyxFQUFFLG9CQURnQjtBQUV2QkksTUFBQUEsSUFBSSxFQUFFLFVBRmlCO0FBR3ZCQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsS0FBSyxFQUFFLFFBREQ7QUFFTkMsUUFBQUEsV0FBVyxFQUFFLFFBRlA7QUFHTkMsUUFBQUEsV0FBVyxFQUFFLEVBSFA7QUFJTkMsUUFBQUEsV0FBVyxFQUFFLEVBSlA7QUFLTkMsUUFBQUEsU0FBUyxFQUFFLEtBTEw7QUFNTkMsUUFBQUEsTUFBTSxFQUFFO0FB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T0FKVjtBQUtFWixRQUFBQSxNQUFNLEVBQUU7QUFDTmEsVUFBQUEsS0FBSyxFQUFFLFlBREQ7QUFFTkMsVUFBQUEsT0FBTyxFQUFFLEdBRkg7QUFHTkMsVUFBQUEsS0FBSyxFQUFFLE1BSEQ7QUFJTkMsVUFBQUEsSUFBSSxFQUFFLEVBSkE7QUFLTkMsVUFBQUEsV0FBVyxFQUFFLEtBTFA7QUFNTkMsVUFBQUEsZ0JBQWdCLEVBQUUsT0FOWjtBQU9OQyxVQUFBQSxhQUFhLEVBQUUsS0FQVDtBQVFOQyxVQUFBQSxrQkFBa0IsRUFBRTtBQVJkO0FBTFYsT0FqQkk7QUE5RWlCLEtBQWYsQ0FGSDtBQW1IUEUsSUFBQUEsV0FBVyxFQUFFLElBbkhOO0FBb0hQQyxJQUFBQSxXQUFXLEVBQUUsRUFwSE47QUFxSFBDLElBQUFBLE9BQU8sRUFBRSxDQXJIRjtBQXNIUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFN0IsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDL0I2QixRQUFBQSxLQUFLLEVBQUUsY0FEd0I7QUFFL0JDLFFBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLFFBQVEsRUFBRSxRQUFaO0FBQXNCRCxVQUFBQSxLQUFLLEVBQUU7QUFBN0I7QUFId0IsT0FBZjtBQURHO0FBdEhoQixHQUZYO0FBZ0lFRSxFQUFBQSxLQUFLLEVBQUU7QUFoSVQsQ0FsbkJhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBPdmVydmlldy9ISVBBQSB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1ISVBBQS1UYWctY2xvdWQnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTW9zdCBjb21tb24gYWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTW9zdCBjb21tb24gYWxlcnRzJyxcbiAgICAgICAgdHlwZTogJ3RhZ2Nsb3VkJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2NhbGU6ICdsaW5lYXInLFxuICAgICAgICAgIG9yaWVudGF0aW9uOiAnc2luZ2xlJyxcbiAgICAgICAgICBtaW5Gb250U2l6ZTogMTAsXG4gICAgICAgICAgbWF4Rm9udFNpemU6IDMwLFxuICAgICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgICAgbWV0cmljOiB7IHR5cGU6ICd2aXNfZGltZW5zaW9uJywgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ3N0cmluZycsIHBhcmFtczoge30gfSB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmhpcGFhJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1ISVBBQS1Ub3AtMTAtcmVxdWlyZW1lbnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCAxMCByZXF1aXJlbWVudHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgMTAgcmVxdWlyZW1lbnRzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlLCB2YWx1ZXM6IHRydWUsIGxhc3RfbGV2ZWw6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWM6IHsgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9LFxuICAgICAgICAgICAgYnVja2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5oaXBhYScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctSElQQUEtVG9wLTEwLWFnZW50cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdNb3N0IGFjdGl2ZSBhZ2VudHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdNb3N0IGFjdGl2ZSBhZ2VudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdhZ2VudC5uYW1lJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBZ2VudCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctSElQQUEtTWV0cmljcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdTdGF0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1N0YXRzJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlUmFuZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICAgIG1ldHJpY0NvbG9yTW9kZTogJ05vbmUnLFxuICAgICAgICAgICAgY29sb3JzUmFuZ2U6IFt7IHR5cGU6ICdyYW5nZScsIGZyb206IDAsIHRvOiAxMDAwMCB9XSxcbiAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlIH0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmdGaWxsOiAnIzAwMCcsIGJnQ29sb3I6IGZhbHNlLCBsYWJlbENvbG9yOiBmYWxzZSwgc3ViVGV4dDogJycsIGZvbnRTaXplOiAyMCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgbWV0cmljczogW1xuICAgICAgICAgICAgICB7IHR5cGU6ICd2aXNfZGltZW5zaW9uJywgYWNjZXNzb3I6IDAsIGZvcm1hdDogeyBpZDogJ251bWJlcicsIHBhcmFtczoge30gfSB9LFxuICAgICAgICAgICAgICB7IHR5cGU6ICd2aXNfZGltZW5zaW9uJywgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ251bWJlcicsIHBhcmFtczoge30gfSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgY3VzdG9tTGFiZWw6ICdUb3RhbCBhbGVydHMnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdtYXgnLFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogJ3J1bGUubGV2ZWwnLCBjdXN0b21MYWJlbDogJ01heCBydWxlIGxldmVsIGRldGVjdGVkJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1ISVBBQS1BbGVydHMtc3VtbWFyeScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgc3VtbWFyeScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0cmljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWNzOiBbeyBhY2Nlc3NvcjogMywgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH1dLFxuICAgICAgICAgICAgYnVja2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMixcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaGlwYWEnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgbGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUhJUEFBLUhlYXRtYXAnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnRzIHZvbHVtZSBieSBhZ2VudCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyB2b2x1bWUgYnkgYWdlbnQnLFxuICAgICAgICB0eXBlOiAnaGVhdG1hcCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBlbmFibGVIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGNvbG9yc051bWJlcjogMTAsXG4gICAgICAgICAgY29sb3JTY2hlbWE6ICdHcmVlbnMnLFxuICAgICAgICAgIHNldENvbG9yUmFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbG9yc1JhbmdlOiBbXSxcbiAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgZGVmYXVsdFlFeHRlbnRzOiBmYWxzZSB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHJvdGF0ZTogMCwgb3ZlcndyaXRlQ29sb3I6IGZhbHNlLCBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogJ3N0cmluZycsIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQuaWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50IElEJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmhpcGFhJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHtcbiAgICAgICAgICBkZWZhdWx0Q29sb3JzOiB7XG4gICAgICAgICAgICAnMCAtIDI2MCc6ICdyZ2IoMjQ3LDI1MiwyNDUpJyxcbiAgICAgICAgICAgICcyNjAgLSA1MjAnOiAncmdiKDIzMywyNDcsMjI4KScsXG4gICAgICAgICAgICAnNTIwIC0gNzgwJzogJ3JnYigyMTEsMjM4LDIwNSknLFxuICAgICAgICAgICAgJzc4MCAtIDEsMDQwJzogJ3JnYigxODQsMjI3LDE3NyknLFxuICAgICAgICAgICAgJzEsMDQwIC0gMSwzMDAnOiAncmdiKDE1MiwyMTMsMTQ4KScsXG4gICAgICAgICAgICAnMSwzMDAgLSAxLDU2MCc6ICdyZ2IoMTE2LDE5NiwxMTgpJyxcbiAgICAgICAgICAgICcxLDU2MCAtIDEsODIwJzogJ3JnYig3NSwxNzYsOTgpJyxcbiAgICAgICAgICAgICcxLDgyMCAtIDIsMDgwJzogJ3JnYig0NywxNTIsNzkpJyxcbiAgICAgICAgICAgICcyLDA4MCAtIDIsMzQwJzogJ3JnYigyMSwxMjcsNTkpJyxcbiAgICAgICAgICAgICcyLDM0MCAtIDIsNjAwJzogJ3JnYigwLDEwMCw0MCknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVnZW5kT3BlbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1ISVBBQS1Ub3AtMTAtcmVxdWlyZW1lbnRzLW92ZXItdGltZS1ieS1hZ2VudCcsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdSZXF1aXJlbWVudHMgZGlzdHJpYnV0aW9uIGJ5IGFnZW50JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnUmVxdWlyZW1lbnRzIGRpc3RyaWJ1dGlvbiBieSBhZ2VudCcsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IHRydWUsIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnQ291bnQnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgIGZvcm1hdDogeyBpZDogJ2RhdGUnLCBwYXJhbXM6IHsgcGF0dGVybjogJ1lZWVktTU0tREQgSEg6bW0nIH0gfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW0nLFxuICAgICAgICAgICAgICAgIGJvdW5kczogeyBtaW46ICcyMDE5LTA4LTE1VDEyOjI1OjQ0Ljg1MVonLCBtYXg6ICcyMDE5LTA4LTIyVDEyOjI1OjQ0Ljg1MVonIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5oaXBhYScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctSElQQUEtVG9wLXJlcXVpcmVtZW50cy1vdmVyLXRpbWUnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnUmVxdWlyZW1lbnRzIGV2b2x1dGlvbiBvdmVyIHRpbWUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdSZXF1aXJlbWVudHMgZXZvbHV0aW9uIG92ZXIgdGltZScsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IHRydWUsIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogJ3RydWUnLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnQ291bnQnLCBpZDogJzEnIH0sXG4gICAgICAgICAgICAgIHZhbHVlQXhpczogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgIGZvcm1hdDogeyBpZDogJ2RhdGUnLCBwYXJhbXM6IHsgcGF0dGVybjogJ1lZWVktTU0tREQgSEg6bW0nIH0gfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW0nLFxuICAgICAgICAgICAgICAgIGJvdW5kczogeyBtaW46ICcyMDE5LTA4LTE1VDEyOjI1OjI5LjUwMVonLCBtYXg6ICcyMDE5LTA4LTIyVDEyOjI1OjI5LjUwMVonIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGVfaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAndGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgdGltZVJhbmdlOiB7IGZyb206ICdub3ctN2QnLCB0bzogJ25vdycgfSxcbiAgICAgICAgICAgICAgdXNlTm9ybWFsaXplZEVzSW50ZXJ2YWw6IHRydWUsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaGlwYWEnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuXTtcbiJdfQ==