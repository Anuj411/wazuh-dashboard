"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/MITRE visualizations
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
  _id: 'Wazuh-App-Agents-MITRE',
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
  _id: 'Wazuh-App-Agents-MITRE-Alerts-Evolution',
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
  _id: 'Wazuh-App-Agents-MITRE-Attacks-By-Agent',
  _source: {
    title: 'Attacks count by agent',
    visState: JSON.stringify({
      title: 'Attacks count by agent',
      type: 'pie',
      params: {
        addLegend: true,
        addTooltip: true,
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
        },
        isDonut: true,
        labels: {
          last_level: true,
          show: false,
          truncate: 100,
          values: true
        },
        legendPosition: 'right',
        type: 'pie'
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
          customLabel: 'Agent name',
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
          field: 'rule.mitre.id',
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
  _id: 'Wazuh-App-Agents-MITRE-Level-By-Tactic',
  _source: {
    title: 'Alerts level by tactic',
    visState: JSON.stringify({
      title: 'Alerts level by tactic',
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
          missingBucketLabel: 'Missing',
          customLabel: 'Attack ID'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'segment',
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
  _id: 'Wazuh-App-Agents-MITRE-Level-By-Attack',
  _source: {
    title: 'Alerts level by attack',
    visState: JSON.stringify({
      title: 'Alerts level by attack',
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
          }, {
            accessor: 4,
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
          missingBucketLabel: 'Missing',
          customLabel: 'Attack ID'
        }
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'segment',
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
  _id: 'Wazuh-App-Agents-MITRE-Attacks-By-Tactic',
  _source: {
    title: 'Top tactics',
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
  _id: 'Wazuh-App-Agents-MITRE-Top-Tactics',
  _source: {
    title: 'Top tactics pie',
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
  _id: 'Wazuh-App-Agents-MITRE-Alerts-summary',
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
          size: 1,
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
          size: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy1taXRyZS50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZ2dzIiwiZW5hYmxlZCIsImlkIiwicGFyYW1zIiwic2NoZW1hIiwidHlwZSIsImZpZWxkIiwiY3VzdG9tTGFiZWwiLCJtaXNzaW5nQnVja2V0IiwibWlzc2luZ0J1Y2tldExhYmVsIiwib3JkZXIiLCJvcmRlckJ5Iiwib3RoZXJCdWNrZXQiLCJvdGhlckJ1Y2tldExhYmVsIiwic2l6ZSIsImRpbWVuc2lvbnMiLCJidWNrZXRzIiwibWV0cmljcyIsImFjY2Vzc29yIiwiYWdnVHlwZSIsImZvcm1hdCIsInBlclBhZ2UiLCJwZXJjZW50YWdlQ29sIiwic2hvd01ldHJpY3NBdEFsbExldmVscyIsInNob3dQYXJ0aWFsUm93cyIsInNob3dUb3RhbCIsInNob3dUb29sYmFyIiwic29ydCIsImNvbHVtbkluZGV4IiwiZGlyZWN0aW9uIiwidG90YWxGdW5jIiwidWlTdGF0ZUpTT04iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwiaW5kZXgiLCJmaWx0ZXIiLCJxdWVyeSIsImxhbmd1YWdlIiwiX3R5cGUiLCJncmlkIiwiY2F0ZWdvcnlMaW5lcyIsImNhdGVnb3J5QXhlcyIsInBvc2l0aW9uIiwic2hvdyIsInN0eWxlIiwic2NhbGUiLCJsYWJlbHMiLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsInZhbHVlQXhpcyIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImxpbmVXaWR0aCIsImFkZFRvb2x0aXAiLCJhZGRMZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsInRpbWVzIiwiYWRkVGltZU1hcmtlciIsInRocmVzaG9sZExpbmUiLCJ2YWx1ZSIsIndpZHRoIiwiY29sb3IiLCJ4IiwicGF0dGVybiIsImRhdGUiLCJpbnRlcnZhbCIsImJvdW5kcyIsIm1pbiIsIm1heCIsInkiLCJzZXJpZXMiLCJ0aW1lUmFuZ2UiLCJmcm9tIiwidG8iLCJ1c2VOb3JtYWxpemVkRXNJbnRlcnZhbCIsImRyb3BfcGFydGlhbHMiLCJtaW5fZG9jX2NvdW50IiwiZXh0ZW5kZWRfYm91bmRzIiwibWV0cmljIiwiaXNEb251dCIsImxhc3RfbGV2ZWwiLCJ2YWx1ZXMiLCJzaG93TWV0aWNzQXRBbGxMZXZlbHMiLCJ2aXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7ZUFXZSxDQUNiO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSx3QkFEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLG9CQURBO0FBRVBDLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkJDLE1BQUFBLElBQUksRUFBRSxDQUNKO0FBQUVDLFFBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCQyxRQUFBQSxFQUFFLEVBQUUsR0FBckI7QUFBMEJDLFFBQUFBLE1BQU0sRUFBRSxFQUFsQztBQUFzQ0MsUUFBQUEsTUFBTSxFQUFFLFFBQTlDO0FBQXdEQyxRQUFBQSxJQUFJLEVBQUU7QUFBOUQsT0FESSxFQUVKO0FBQ0VKLFFBQUFBLE9BQU8sRUFBRSxJQURYO0FBRUVDLFFBQUFBLEVBQUUsRUFBRSxHQUZOO0FBR0VDLFFBQUFBLE1BQU0sRUFBRTtBQUNORyxVQUFBQSxLQUFLLEVBQUUsZUFERDtBQUVOQyxVQUFBQSxXQUFXLEVBQUUsV0FGUDtBQUdOQyxVQUFBQSxhQUFhLEVBQUUsS0FIVDtBQUlOQyxVQUFBQSxrQkFBa0IsRUFBRSxTQUpkO0FBS05DLFVBQUFBLEtBQUssRUFBRSxNQUxEO0FBTU5DLFVBQUFBLE9BQU8sRUFBRSxHQU5IO0FBT05DLFVBQUFBLFdBQVcsRUFBRSxLQVBQO0FBUU5DLFVBQUFBLGdCQUFn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QUFFO0FBQUV3QixVQUFBQSxJQUFJLEVBQUU7QUFBRUMsWUFBQUEsV0FBVyxFQUFFLENBQWY7QUFBa0JDLFlBQUFBLFNBQVMsRUFBRTtBQUE3QjtBQUFSO0FBQVY7QUFEcUIsS0FBZixDQXJFTjtBQXdFUEcsSUFBQUEsV0FBVyxFQUFFLEVBeEVOO0FBeUVQQyxJQUFBQSxPQUFPLEVBQUUsQ0F6RUY7QUEwRVBDLElBQUFBLHFCQUFxQixFQUFFO0FBQ3JCQyxNQUFBQSxnQkFBZ0IsRUFBRXJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQy9CcUMsUUFBQUEsS0FBSyxFQUFFLGNBRHdCO0FBRS9CQyxRQUFBQSxNQUFNLEVBQUUsRUFGdUI7QUFHL0JDLFFBQUFBLEtBQUssRUFBRTtBQUFFQSxVQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFBQSxRQUFRLEVBQUU7QUFBdkI7QUFId0IsT0FBZjtBQURHO0FBMUVoQjtBQUhYLENBenFCYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgQWdlbnRzL01JVFJFIHZpc3VhbGl6YXRpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdNaXRyZSBhdHRhY2sgY291bnQnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgZW5hYmxlZDogdHJ1ZSwgaWQ6ICcxJywgcGFyYW1zOiB7fSwgc2NoZW1hOiAnbWV0cmljJywgdHlwZTogJ2NvdW50JyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS5pZCcsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQXR0YWNrIElEJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgc2l6ZTogMjQ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIGJ1Y2tldHM6IFtdLFxuICAgICAgICAgICAgbWV0cmljczogW3sgYWNjZXNzb3I6IDAsIGFnZ1R5cGU6ICdjb3VudCcsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBlclBhZ2U6IDEwLFxuICAgICAgICAgIHBlcmNlbnRhZ2VDb2w6ICcnLFxuICAgICAgICAgIHNob3dNZXRyaWNzQXRBbGxMZXZlbHM6IGZhbHNlLFxuICAgICAgICAgIHNob3dQYXJ0aWFsUm93czogZmFsc2UsXG4gICAgICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgICAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICBzb3J0OiB7IGNvbHVtbkluZGV4OiBudWxsLCBkaXJlY3Rpb246IG51bGwgfSxcbiAgICAgICAgICB0b3RhbEZ1bmM6ICdzdW0nLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZTogJ21pdHJlJyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRS1BbGVydHMtRXZvbHV0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ01pdHJlIGFsZXJ0cyBldm9sdXRpb24nLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydCBFdm9sdXRpb24nLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBsYWJlbHM6IHt9LFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHsgc2hvdzogZmFsc2UsIHZhbHVlOiAxMCwgd2lkdGg6IDEsIHN0eWxlOiAnZnVsbCcsIGNvbG9yOiAnIzM0MTMwQycgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdkYXRlJywgcGFyYW1zOiB7IHBhdHRlcm46ICdZWVlZLU1NLUREIEhIOm1tJyB9IH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdQVDNIJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tJyxcbiAgICAgICAgICAgICAgICBib3VuZHM6IHsgbWluOiAnMjAxOS0xMS0wN1QxNTo0NTo0NS43NzBaJywgbWF4OiAnMjAxOS0xMS0xNFQxNTo0NTo0NS43NzBaJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IFt7IGFjY2Vzc29yOiAyLCBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sIHBhcmFtczoge30sIGFnZ1R5cGU6ICdjb3VudCcgfV0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiAnbm93LTdkJywgdG86ICdub3cnIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm1pdHJlLnRlY2huaXF1ZScsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQXR0YWNrIElEJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRS1BdHRhY2tzLUJ5LUFnZW50JyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0F0dGFja3MgY291bnQgYnkgYWdlbnQnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBdHRhY2tzIGNvdW50IGJ5IGFnZW50JyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBsYXN0X2xldmVsOiB0cnVlLCBzaG93OiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCwgdmFsdWVzOiB0cnVlIH0sXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2FnZW50Lm5hbWUnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0FnZW50IG5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS5pZCcsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQXR0YWNrIElEJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRS1MZXZlbC1CeS1UYWN0aWMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnRzIGxldmVsIGJ5IHRhY3RpYycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBsZXZlbCBieSB0YWN0aWMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS50YWN0aWMnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0F0dGFjayBJRCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSdWxlIGxldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRS1MZXZlbC1CeS1BdHRhY2snLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQWxlcnRzIGxldmVsIGJ5IGF0dGFjaycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBsZXZlbCBieSBhdHRhY2snLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiA0LFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubWl0cmUudGVjaG5pcXVlJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBdHRhY2sgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUnVsZSBsZXZlbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgbGFuZ3VhZ2U6ICdsdWNlbmUnLCBxdWVyeTogJycgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtTUlUUkUtQXR0YWNrcy1CeS1UYWN0aWMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIHRhY3RpY3MnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBdHRhY2tzIGJ5IHRhY3RpYycsXG4gICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIGZpbHRlcjogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHsgdHlwZTogJ2xpbmVhcicsIG1vZGU6ICdub3JtYWwnIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCByb3RhdGU6IDAsIGZpbHRlcjogZmFsc2UsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiAndHJ1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgYWRkVGltZU1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgICAgdGhyZXNob2xkTGluZTogeyBzaG93OiBmYWxzZSwgdmFsdWU6IDEwLCB3aWR0aDogMSwgc3R5bGU6ICdmdWxsJywgY29sb3I6ICcjMzQxMzBDJyB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IG51bGwsXG4gICAgICAgICAgICB5OiBbeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH1dLFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS50ZWNobmlxdWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS50YWN0aWMnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IGxhbmd1YWdlOiAnbHVjZW5lJywgcXVlcnk6ICcnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLU1JVFJFLVRvcC1UYWN0aWNzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCB0YWN0aWNzIHBpZScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCB0YWN0aWNzIFBJRTInLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogZmFsc2UsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlLCB2YWx1ZXM6IHRydWUsIGxhc3RfbGV2ZWw6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWM6IHsgYWNjZXNzb3I6IDEsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9LFxuICAgICAgICAgICAgYnVja2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5taXRyZS50YWN0aWMnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBsYW5ndWFnZTogJ2x1Y2VuZScsIHF1ZXJ5OiAnJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1NSVRSRS1BbGVydHMtc3VtbWFyeScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5pZCcsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnYnVja2V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUubGV2ZWwnLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0xldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuIl19