"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/NIST visualizations
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
  _id: 'Wazuh-App-Overview-NIST-Requirements-over-time',
  _source: {
    title: 'Requirements over time',
    visState: JSON.stringify({
      title: 'NIST-Requirements-over-time',
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
          type: 'line',
          mode: 'normal',
          data: {
            label: 'Count',
            id: '1'
          },
          valueAxis: 'ValueAxis-1',
          drawLinesBetweenPoints: true,
          showCircles: true,
          interpolate: 'linear'
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
                min: '2019-08-20T12:33:23.360Z',
                max: '2019-08-22T12:33:23.360Z'
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
            from: 'now-2d',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.nist_800_53',
          orderBy: '1',
          order: 'desc',
          size: 50,
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
  _id: 'Wazuh-App-Overview-NIST-Requirements-Agents-heatmap',
  _type: 'visualization',
  _source: {
    title: 'Alerts volume by agent',
    visState: JSON.stringify({
      aggs: [{
        enabled: true,
        id: '1',
        params: {},
        schema: 'metric',
        type: 'count'
      }, {
        enabled: true,
        id: '3',
        params: {
          customLabel: 'Requirement',
          field: 'rule.nist_800_53',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          size: 10
        },
        schema: 'group',
        type: 'terms'
      }, {
        enabled: true,
        id: '2',
        params: {
          customLabel: 'Agent',
          field: 'agent.id',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          order: 'desc',
          orderBy: '1',
          otherBucket: false,
          otherBucketLabel: 'Other',
          size: 5
        },
        schema: 'segment',
        type: 'terms'
      }],
      params: {
        addLegend: true,
        addTooltip: true,
        colorSchema: 'Blues',
        colorsNumber: 10,
        colorsRange: [],
        dimensions: {
          series: [{
            accessor: 0,
            aggType: 'terms',
            format: {
              id: 'terms',
              params: {
                id: 'string',
                missingBucketLabel: 'Missing',
                otherBucketLabel: 'Other'
              }
            },
            params: {}
          }],
          x: {
            accessor: 1,
            aggType: 'terms',
            format: {
              id: 'terms',
              params: {
                id: 'string',
                missingBucketLabel: 'Missing',
                otherBucketLabel: 'Other'
              }
            },
            params: {}
          },
          y: [{
            accessor: 2,
            aggType: 'count',
            format: {
              id: 'number'
            },
            params: {}
          }]
        },
        enableHover: false,
        invertColors: false,
        legendPosition: 'right',
        percentageMode: false,
        setColorRange: false,
        times: [],
        type: 'heatmap',
        valueAxes: [{
          id: 'ValueAxis-1',
          labels: {
            color: 'black',
            overwriteColor: false,
            rotate: 0,
            show: false
          },
          scale: {
            defaultYExtents: false,
            type: 'linear'
          },
          show: false,
          type: 'value'
        }]
      },
      title: 'NIST-Last-alerts',
      type: 'heatmap'
    }),
    uiStateJSON: JSON.stringify({
      vis: {
        defaultColors: {
          '0 - 160': 'rgb(247,251,255)',
          '160 - 320': 'rgb(227,238,249)',
          '320 - 480': 'rgb(208,225,242)',
          '480 - 640': 'rgb(182,212,233)',
          '640 - 800': 'rgb(148,196,223)',
          '800 - 960': 'rgb(107,174,214)',
          '960 - 1,120': 'rgb(74,152,201)',
          '1,120 - 1,280': 'rgb(46,126,188)',
          '1,280 - 1,440': 'rgb(23,100,171)',
          '1,440 - 1,600': 'rgb(8,74,145)'
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
  _id: 'Wazuh-App-Overview-NIST-requirements-by-agents',
  _source: {
    title: 'Requiments distribution by agent',
    visState: JSON.stringify({
      title: 'NIST-Top-requirements-by-agent',
      type: 'area',
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
          show: 'true',
          type: 'histogram',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          drawLinesBetweenPoints: true,
          showCircles: true,
          interpolate: 'linear',
          valueAxis: 'ValueAxis-1'
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
          customLabel: 'Agent'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'rule.nist_800_53',
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
        legendOpen: false
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
  _id: 'Wazuh-App-Overview-NIST-Metrics',
  _source: {
    title: 'Stats',
    visState: JSON.stringify({
      title: 'nist-metrics',
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
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-NIST-Top-10-requirements',
  _source: {
    title: 'Top 10 requirements',
    visState: JSON.stringify({
      title: 'NIST-Top-10-requirements',
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
          field: 'rule.nist_800_53',
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
  _id: 'Wazuh-App-Overview-NIST-Agents',
  _source: {
    title: 'Most active agents',
    visState: JSON.stringify({
      title: 'NIST-Top-10-agents',
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
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Agent'
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
  _id: 'Wazuh-App-Overview-NIST-Alerts-summary',
  _type: 'visualization',
  _source: {
    title: 'Alerts summary',
    visState: JSON.stringify({
      title: 'NIST-Alerts-summary',
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
          field: 'rule.nist_800_53',
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
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LW5pc3QudHMiXSwibmFtZXMiOlsiX2lkIiwiX3NvdXJjZSIsInRpdGxlIiwidmlzU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInBhcmFtcyIsImdyaWQiLCJjYXRlZ29yeUxpbmVzIiwidmFsdWVBeGlzIiwiY2F0ZWdvcnlBeGVzIiwiaWQiLCJwb3NpdGlvbiIsInNob3ciLCJzdHlsZSIsInNjYWxlIiwibGFiZWxzIiwiZmlsdGVyIiwidHJ1bmNhdGUiLCJ2YWx1ZUF4ZXMiLCJuYW1lIiwibW9kZSIsInJvdGF0ZSIsInRleHQiLCJzZXJpZXNQYXJhbXMiLCJkYXRhIiwibGFiZWwiLCJkcmF3TGluZXNCZXR3ZWVuUG9pbnRzIiwic2hvd0NpcmNsZXMiLCJpbnRlcnBvbGF0ZSIsImFkZFRvb2x0aXAiLCJhZGRMZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsInRpbWVzIiwiYWRkVGltZU1hcmtlciIsImRpbWVuc2lvbnMiLCJ4IiwiYWNjZXNzb3IiLCJmb3JtYXQiLCJwYXR0ZXJuIiwiZGF0ZSIsImludGVydmFsIiwiYm91bmRzIiwibWluIiwibWF4IiwiYWdnVHlwZSIsInkiLCJzZXJpZXMiLCJvdGhlckJ1Y2tldExhYmVsIiwibWlzc2luZ0J1Y2tldExhYmVsIiwiYWdncyIsImVuYWJsZWQiLCJzY2hlbWEiLCJmaWVsZCIsInRpbWVSYW5nZSIsImZyb20iLCJ0byIsInVzZU5vcm1hbGl6ZWRFc0ludGVydmFsIiwiZHJvcF9wYXJ0aWFscyIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJvcmRlckJ5Iiwib3JkZXIiLCJzaXplIiwib3RoZXJCdWNrZXQiLCJtaXNzaW5nQnVja2V0IiwiY3VzdG9tTGFiZWwiLCJ1aVN0YXRlSlNPTiIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsImtpYmFuYVNhdmVkT2JqZWN0TWV0YSIsInNlYXJjaFNvdXJjZUpTT04iLCJpbmRleCIsInF1ZXJ5IiwibGFuZ3VhZ2UiLCJfdHlwZSIsImNvbG9yU2NoZW1hIiwiY29sb3JzTnVtYmVyIiwiY29sb3JzUmFuZ2UiLCJlbmFibGVIb3ZlciIsImludmVydENvbG9ycyIsInBlcmNlbnRhZ2VNb2RlIiwic2V0Q29sb3JSYW5nZSIsImNvbG9yIiwib3ZlcndyaXRlQ29sb3IiLCJkZWZhdWx0WUV4dGVudHMiLCJ2aXMiLCJkZWZhdWx0Q29sb3JzIiwibGVnZW5kT3BlbiIsIm1ldHJpYyIsInVzZVJhbmdlcyIsIm1ldHJpY0NvbG9yTW9kZSIsImJnRmlsbCIsImJnQ29sb3IiLCJsYWJlbENvbG9yIiwic3ViVGV4dCIsImZvbnRTaXplIiwibWV0cmljcyIsImlzRG9udXQiLCJ2YWx1ZXMiLCJsYXN0X2xldmVsIiwiYnVja2V0cyIsInBlclBhZ2UiLCJzaG93UGFydGlhbFJvd3MiLCJzaG93TWV0cmljc0F0QWxsTGV2ZWxzIiwic29ydCIsImNvbHVtbkluZGV4IiwiZGlyZWN0aW9uIiwic2hvd1RvdGFsIiwic2hvd1Rvb2xiYXIiLCJ0b3RhbEZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7ZUFXZSxDQUNiO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSxnREFEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLHdCQURBO0FBRVBDLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkJILE1BQUFBLEtBQUssRUFBRSw2QkFEZ0I7QUFFdkJJLE1BQUFBLElBQUksRUFBRSxXQUZpQjtBQUd2QkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05ELFFBQUFBLElBQUksRUFBRSxXQURBO0FBRU5FLFFBQUFBLElBQUksRUFBRTtBQUFFQyxVQUFBQSxhQUFhLEVBQUUsSUFBakI7QUFBdUJDLFVBQUFBLFNBQVMsRUFBRTtBQUFsQyxTQUZBO0FBR05DLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLEVBQUUsRUFBRSxnQkFETjtBQUVFTixVQUFBQSxJQUFJLEVBQUUsVUFGUjtBQUdFTyxV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Z0IsRUFBRXBFLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQy9Cb0UsUUFBQUEsS0FBSyxFQUFFLGNBRHdCO0FBRS9CdkQsUUFBQUEsTUFBTSxFQUFFLEVBRnVCO0FBRy9Cd0QsUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUF0SGhCO0FBSFgsQ0Fua0JhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBPdmVydmlldy9OSVNUIHZpc3VhbGl6YXRpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU5JU1QtUmVxdWlyZW1lbnRzLW92ZXItdGltZScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdSZXF1aXJlbWVudHMgb3ZlciB0aW1lJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTklTVC1SZXF1aXJlbWVudHMtb3Zlci10aW1lJyxcbiAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogdHJ1ZSwgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREIEhIOm1tJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdQVDFIJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tJyxcbiAgICAgICAgICAgICAgICBib3VuZHM6IHsgbWluOiAnMjAxOS0wOC0yMFQxMjozMzoyMy4zNjBaJywgbWF4OiAnMjAxOS0wOC0yMlQxMjozMzoyMy4zNjBaJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAyLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTJkJywgdG86ICdub3cnIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm5pc3RfODAwXzUzJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctTklTVC1SZXF1aXJlbWVudHMtQWdlbnRzLWhlYXRtYXAnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgdm9sdW1lIGJ5IGFnZW50JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGVuYWJsZWQ6IHRydWUsIGlkOiAnMScsIHBhcmFtczoge30sIHNjaGVtYTogJ21ldHJpYycsIHR5cGU6ICdjb3VudCcgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm5pc3RfODAwXzUzJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQWdlbnQnLFxuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50LmlkJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgY29sb3JTY2hlbWE6ICdCbHVlcycsXG4gICAgICAgICAgY29sb3JzTnVtYmVyOiAxMCxcbiAgICAgICAgICBjb2xvcnNSYW5nZTogW10sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogJ3N0cmluZycsIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLCBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGFnZ1R5cGU6ICdjb3VudCcsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZUhvdmVyOiBmYWxzZSxcbiAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICBzZXRDb2xvclJhbmdlOiBmYWxzZSxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgdHlwZTogJ2hlYXRtYXAnLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IGNvbG9yOiAnYmxhY2snLCBvdmVyd3JpdGVDb2xvcjogZmFsc2UsIHJvdGF0ZTogMCwgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgZGVmYXVsdFlFeHRlbnRzOiBmYWxzZSwgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiAnTklTVC1MYXN0LWFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7XG4gICAgICAgICAgZGVmYXVsdENvbG9yczoge1xuICAgICAgICAgICAgJzAgLSAxNjAnOiAncmdiKDI0NywyNTEsMjU1KScsXG4gICAgICAgICAgICAnMTYwIC0gMzIwJzogJ3JnYigyMjcsMjM4LDI0OSknLFxuICAgICAgICAgICAgJzMyMCAtIDQ4MCc6ICdyZ2IoMjA4LDIyNSwyNDIpJyxcbiAgICAgICAgICAgICc0ODAgLSA2NDAnOiAncmdiKDE4MiwyMTIsMjMzKScsXG4gICAgICAgICAgICAnNjQwIC0gODAwJzogJ3JnYigxNDgsMTk2LDIyMyknLFxuICAgICAgICAgICAgJzgwMCAtIDk2MCc6ICdyZ2IoMTA3LDE3NCwyMTQpJyxcbiAgICAgICAgICAgICc5NjAgLSAxLDEyMCc6ICdyZ2IoNzQsMTUyLDIwMSknLFxuICAgICAgICAgICAgJzEsMTIwIC0gMSwyODAnOiAncmdiKDQ2LDEyNiwxODgpJyxcbiAgICAgICAgICAgICcxLDI4MCAtIDEsNDQwJzogJ3JnYigyMywxMDAsMTcxKScsXG4gICAgICAgICAgICAnMSw0NDAgLSAxLDYwMCc6ICdyZ2IoOCw3NCwxNDUpJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1OSVNULXJlcXVpcmVtZW50cy1ieS1hZ2VudHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnUmVxdWltZW50cyBkaXN0cmlidXRpb24gYnkgYWdlbnQnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdOSVNULVRvcC1yZXF1aXJlbWVudHMtYnktYWdlbnQnLFxuICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6ICdzdHJpbmcnLCBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLCBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAyLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50LmlkJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5uaXN0XzgwMF81MycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHsgdmlzOiB7IGxlZ2VuZE9wZW46IGZhbHNlIH0gfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU5JU1QtTWV0cmljcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdTdGF0cycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ25pc3QtbWV0cmljcycsXG4gICAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZVJhbmdlczogZmFsc2UsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBtZXRyaWNDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbeyB0eXBlOiAncmFuZ2UnLCBmcm9tOiAwLCB0bzogMTAwMDAgfV0sXG4gICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSB9LFxuICAgICAgICAgICAgaW52ZXJ0Q29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGJnRmlsbDogJyMwMDAnLCBiZ0NvbG9yOiBmYWxzZSwgbGFiZWxDb2xvcjogZmFsc2UsIHN1YlRleHQ6ICcnLCBmb250U2l6ZTogMjAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpY3M6IFtcbiAgICAgICAgICAgICAgeyB0eXBlOiAndmlzX2RpbWVuc2lvbicsIGFjY2Vzc29yOiAwLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInLCBwYXJhbXM6IHt9IH0gfSxcbiAgICAgICAgICAgICAgeyB0eXBlOiAndmlzX2RpbWVuc2lvbicsIGFjY2Vzc29yOiAxLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInLCBwYXJhbXM6IHt9IH0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGN1c3RvbUxhYmVsOiAnVG90YWwgYWxlcnRzJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnbWF4JyxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6ICdydWxlLmxldmVsJywgY3VzdG9tTGFiZWw6ICdNYXggcnVsZSBsZXZlbCBkZXRlY3RlZCcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctTklTVC1Ub3AtMTAtcmVxdWlyZW1lbnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCAxMCByZXF1aXJlbWVudHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdOSVNULVRvcC0xMC1yZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm5pc3RfODAwXzUzJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctTklTVC1BZ2VudHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnTW9zdCBhY3RpdmUgYWdlbnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnTklTVC1Ub3AtMTAtYWdlbnRzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlLCB2YWx1ZXM6IHRydWUsIGxhc3RfbGV2ZWw6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWM6IHsgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9LFxuICAgICAgICAgICAgYnVja2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LU5JU1QtQWxlcnRzLXN1bW1hcnknLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgc3VtbWFyeScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ05JU1QtQWxlcnRzLXN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRyaWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0sXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpY3M6IFt7IGFjY2Vzc29yOiAzLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAyLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5uaXN0XzgwMF81MycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUnVsZSBsZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==