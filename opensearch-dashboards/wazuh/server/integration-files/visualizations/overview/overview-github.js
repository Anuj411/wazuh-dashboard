"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/GitHub visualizations
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
  _id: 'Wazuh-App-Overview-GitHub-Alerts-Evolution-By-Organization',
  _source: {
    title: 'Alerts evolution by organization',
    visState: JSON.stringify({
      title: 'Alerts evolution by organization',
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
            from: 'now-7d',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {},
          customLabel: ''
        },
        schema: 'segment'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.github.org',
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
          type: 'line',
          mode: 'normal',
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
        labels: {},
        orderBucketsBySum: false
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-5-Organizations-By-Alerts',
  _source: {
    title: 'Top 5 organizations by alerts',
    visState: JSON.stringify({
      title: 'Top 5 organizations by alerts',
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
          field: 'data.github.org',
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
        isDonut: false,
        labels: {
          show: false,
          values: true,
          last_level: true,
          truncate: 100
        }
      }
    }),
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Users-With-More-Alerts',
  _source: {
    title: 'Users with more alerts',
    visState: JSON.stringify({
      title: 'Users with more alerts',
      type: 'line',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '4',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.github.org',
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
          field: 'data.github.actor',
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
          type: 'histogram',
          mode: 'stacked',
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
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Alert-Action-Type-By-Organization',
  _source: {
    title: 'Top alerts by alert action type and organization',
    visState: JSON.stringify({
      title: 'Top alerts by alert action type and organization',
      type: 'pie',
      aggs: [{
        id: '1',
        enabled: true,
        type: 'count',
        params: {},
        schema: 'metric'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.github.org',
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
        id: '2',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.github.action',
          orderBy: '1',
          order: 'desc',
          size: 3,
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
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Alert-Summary',
  _source: {
    title: 'Alert summary',
    visState: JSON.stringify({
      title: 'Alert summary',
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
          field: 'agent.name',
          orderBy: '1',
          order: 'desc',
          size: 50,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'bucket'
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        params: {
          field: 'data.github.org',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        },
        schema: 'bucket'
      }, {
        id: '4',
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
        schema: 'bucket'
      }],
      params: {
        perPage: 10,
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Ten-Organizations',
  _source: {
    title: 'Top 10 organizations',
    visState: JSON.stringify({
      title: 'Top 10 Organizations',
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
          field: 'data.github.org',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Organizations'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Countries',
  _source: {
    title: 'Countries',
    visState: JSON.stringify({
      title: 'Top github actors countries',
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
          field: 'data.github.actor_location.country_code',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Top countries '
        },
        schema: 'segment'
      }],
      params: {
        scale: 'linear',
        orientation: 'single',
        minFontSize: 18,
        maxFontSize: 72,
        showLabel: true
      }
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Events',
  _source: {
    title: 'GitHub top events',
    visState: JSON.stringify({
      title: 'Github Top Events',
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
          field: 'data.github.action',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Github Actions'
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
        }
      }
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Stats',
  _source: {
    title: 'GitHub Stats',
    visState: JSON.stringify({
      title: 'Github Stats',
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Organization-Heatmap',
  _source: {
    title: 'GitHub Organization Heatmap',
    visState: JSON.stringify({
      title: 'GitHub Organization Heatmap',
      type: 'heatmap',
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
          field: 'data.github.org',
          orderBy: '1',
          order: 'desc',
          size: 10,
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
          field: 'data.github.action',
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
        type: 'heatmap',
        addTooltip: true,
        addLegend: true,
        enableHover: false,
        legendPosition: 'right',
        times: [],
        colorsNumber: 4,
        colorSchema: 'Blues',
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
        }]
      }
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Ten-Organizations',
  _source: {
    title: 'GitHub top 10 organizations',
    visState: JSON.stringify({
      title: 'Top 10 Organizations',
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
          field: 'data.github.org',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Organizations'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Ten-Actors',
  _source: {
    title: 'Top 10 actors',
    visState: JSON.stringify({
      title: 'Top 10 Actors',
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
          field: 'data.github.actor',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Actors'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Ten-Repositories',
  _source: {
    title: 'Top 10 repositories',
    visState: JSON.stringify({
      title: 'Top 10 Repositories',
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
          field: 'data.github.repo',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Repositories'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Top-Ten-Actions',
  _source: {
    title: 'Top 10 actions',
    visState: JSON.stringify({
      title: 'Top 10 Actions',
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
          field: 'data.github.action',
          orderBy: '1',
          order: 'desc',
          size: 10,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Actions'
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GitHub-Alert-Level-Evolution',
  _source: {
    title: 'Alert level evolution',
    visState: JSON.stringify({
      title: 'Rule Level Over Time',
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
            from: 'now-30d',
            to: 'now'
          },
          useNormalizedEsInterval: true,
          scaleMetricValues: false,
          interval: 'd',
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
          size: 10,
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
          type: 'area',
          mode: 'stacked',
          data: {
            label: 'Count',
            id: '1'
          },
          drawLinesBetweenPoints: true,
          lineWidth: 2,
          showCircles: true,
          interpolate: 'step-after',
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
      searchSourceJSON: '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  },
  _type: 'visualization'
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWdpdGh1Yi50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiYWdncyIsImlkIiwiZW5hYmxlZCIsInBhcmFtcyIsInNjaGVtYSIsImZpZWxkIiwidGltZVJhbmdlIiwiZnJvbSIsInRvIiwidXNlTm9ybWFsaXplZEVzSW50ZXJ2YWwiLCJzY2FsZU1ldHJpY1ZhbHVlcyIsImludGVydmFsIiwiZHJvcF9wYXJ0aWFscyIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJjdXN0b21MYWJlbCIsIm9yZGVyQnkiLCJvcmRlciIsInNpemUiLCJvdGhlckJ1Y2tldCIsIm90aGVyQnVja2V0TGFiZWwiLCJtaXNzaW5nQnVja2V0IiwibWlzc2luZ0J1Y2tldExhYmVsIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJjYXRlZ29yeUF4ZXMiLCJwb3NpdGlvbiIsInNob3ciLCJzdHlsZSIsInNjYWxlIiwibGFiZWxzIiwiZmlsdGVyIiwidHJ1bmNhdGUiLCJyb3RhdGUiLCJ2YWx1ZUF4ZXMiLCJuYW1lIiwibW9kZSIsInRleHQiLCJzZXJpZXNQYXJhbXMiLCJkYXRhIiwibGFiZWwiLCJkcmF3TGluZXNCZXR3ZWVuUG9pbnRzIiwibGluZVdpZHRoIiwic2hvd0NpcmNsZXMiLCJpbnRlcnBvbGF0ZSIsInZhbHVlQXhpcyIsImFkZFRvb2x0aXAiLCJhZGRMZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsInRpbWVzIiwiYWRkVGltZU1hcmtlciIsInRocmVzaG9sZExpbmUiLCJ2YWx1ZSIsIndpZHRoIiwiY29sb3IiLCJvcmRlckJ1Y2tldHNCeVN1bSIsInVpU3RhdGVKU09OIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsIl90eXBlIiwiaXNEb251dCIsInZhbHVlcyIsImxhc3RfbGV2ZWwiLCJwZXJQYWdlIiwic2hvd1BhcnRpYWxSb3dzIiwic2hvd01ldHJpY3NBdEFsbExldmVscyIsInNvcnQiLCJjb2x1bW5JbmRleCIsImRpcmVjdGlvbiIsInNob3dUb3RhbCIsInRvdGFsRnVuYyIsInBlcmNlbnRhZ2VDb2wiLCJ2aXMiLCJvcmllbnRhdGlvbiIsIm1pbkZvbnRTaXplIiwibWF4Rm9udFNpemUiLCJzaG93TGFiZWwiLCJhZ2dyZWdhdGUiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJtZXRyaWMiLCJwZXJjZW50YWdlTW9kZSIsInVzZVJhbmdlcyIsImNvbG9yU2NoZW1hIiwibWV0cmljQ29sb3JNb2RlIiwiY29sb3JzUmFuZ2UiLCJpbnZlcnRDb2xvcnMiLCJiZ0ZpbGwiLCJiZ0NvbG9yIiwibGFiZWxDb2xvciIsInN1YlRleHQiLCJmb250U2l6ZSIsImVuYWJsZUhvdmVyIiwiY29sb3JzTnVtYmVyIiwic2V0Q29sb3JSYW5nZSIsImRlZmF1bHRZRXh0ZW50cyIsIm92ZXJ3cml0ZUNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUNFQSxFQUFBQSxHQUFHLEVBQUUsNERBRFA7QUFFRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSxrQ0FEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsa0NBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsTUFGaUI7QUFHdkJDLE1BQUFBLElBQUksRUFBRSxDQUNKO0FBQ0VDLFFBQUFBLEVBQUUsRUFBRSxHQUROO0FBRUVDLFFBQUFBLE9BQU8sRUFBRSxJQUZYO0FBR0VILFFBQUFBLElBQUksRUFBRSxPQUhSO0FBSUVJLFFBQUFBLE1BQU0sRUFBRSxFQUpWO0FBS0VDLFFBQUFBLE1BQU0sRUFBRTtBQUxWLE9BREksRUFRSjtBQUNFSCxRQUFBQSxFQUFFLEVBQUUsR0FETjtBQUVFQyxRQUFBQSxPQUFPLEVB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LEtBQUssRUFBRSxNQUpNO0FBS2IwQixVQUFBQSxLQUFLLEVBQUU7QUFMTSxTQW5FVDtBQTBFTnhCLFFBQUFBLE1BQU0sRUFBRTtBQTFFRjtBQS9DZSxLQUFmLENBRkg7QUE4SFAwQixJQUFBQSxXQUFXLEVBQUUzRCxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUMxQjRFLE1BQUFBLEdBQUcsRUFBRTtBQUFFdkUsUUFBQUEsTUFBTSxFQUFFO0FBQUVpRSxVQUFBQSxJQUFJLEVBQUU7QUFBRUMsWUFBQUEsV0FBVyxFQUFFLENBQWY7QUFBa0JDLFlBQUFBLFNBQVMsRUFBRTtBQUE3QjtBQUFSO0FBQVY7QUFEcUIsS0FBZixDQTlITjtBQWlJUGIsSUFBQUEsV0FBVyxFQUFFLEVBaklOO0FBa0lQQyxJQUFBQSxPQUFPLEVBQUUsQ0FsSUY7QUFtSVBDLElBQUFBLHFCQUFxQixFQUFFO0FBQ3JCQyxNQUFBQSxnQkFBZ0IsRUFDZDtBQUZtQjtBQW5JaEIsR0FGWDtBQTBJRUMsRUFBQUEsS0FBSyxFQUFFO0FBMUlULENBMWlDYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgT3ZlcnZpZXcvR2l0SHViIHZpc3VhbGl6YXRpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1BbGVydHMtRXZvbHV0aW9uLUJ5LU9yZ2FuaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydHMgZXZvbHV0aW9uIGJ5IG9yZ2FuaXphdGlvbicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0cyBldm9sdXRpb24gYnkgb3JnYW5pemF0aW9uJyxcbiAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlX2hpc3RvZ3JhbScsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB0aW1lUmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnbm93LTdkJyxcbiAgICAgICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVzZU5vcm1hbGl6ZWRFc0ludGVydmFsOiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZU1ldHJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnYXV0bycsXG4gICAgICAgICAgICAgIGRyb3BfcGFydGlhbHM6IGZhbHNlLFxuICAgICAgICAgICAgICBtaW5fZG9jX2NvdW50OiAxLFxuICAgICAgICAgICAgICBleHRlbmRlZF9ib3VuZHM6IHt9LFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5vcmcnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgY2F0ZWdvcnlMaW5lczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgb3JkZXJCdWNrZXRzQnlTdW06IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItVG9wLTUtT3JnYW5pemF0aW9ucy1CeS1BbGVydHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDUgb3JnYW5pemF0aW9ucyBieSBhbGVydHMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgNSBvcmdhbml6YXRpb25zIGJ5IGFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5vcmcnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHRydWUsXG4gICAgICAgICAgICBsYXN0X2xldmVsOiB0cnVlLFxuICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItVXNlcnMtV2l0aC1Nb3JlLUFsZXJ0cycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdVc2VycyB3aXRoIG1vcmUgYWxlcnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVXNlcnMgd2l0aCBtb3JlIGFsZXJ0cycsXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIub3JnJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEuZ2l0aHViLmFjdG9yJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdncm91cCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGNhdGVnb3J5TGluZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2F0ZWdvcnlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQ2F0ZWdvcnlBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgbW9kZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlcmllc1BhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlzdG9ncmFtJyxcbiAgICAgICAgICAgICAgbW9kZTogJ3N0YWNrZWQnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgdGhyZXNob2xkTGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogMTAsXG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIHN0eWxlOiAnZnVsbCcsXG4gICAgICAgICAgICBjb2xvcjogJyNFNzY2NEMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1BbGVydC1BY3Rpb24tVHlwZS1CeS1Pcmdhbml6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIGFsZXJ0cyBieSBhbGVydCBhY3Rpb24gdHlwZSBhbmQgb3JnYW5pemF0aW9uJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIGFsZXJ0cyBieSBhbGVydCBhY3Rpb24gdHlwZSBhbmQgb3JnYW5pemF0aW9uJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEuZ2l0aHViLm9yZycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5hY3Rpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDMsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RfbGV2ZWw6IHRydWUsXG4gICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1BbGVydC1TdW1tYXJ5JyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0IHN1bW1hcnknLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydCBzdW1tYXJ5JyxcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnYWdlbnQubmFtZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5vcmcnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5kZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGVyUGFnZTogMTAsXG4gICAgICAgICAgc2hvd1BhcnRpYWxSb3dzOiBmYWxzZSxcbiAgICAgICAgICBzaG93TWV0cmljc0F0QWxsTGV2ZWxzOiBmYWxzZSxcbiAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICBjb2x1bW5JbmRleDogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAgICAgdG90YWxGdW5jOiAnc3VtJyxcbiAgICAgICAgICBwZXJjZW50YWdlQ29sOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2l0SHViLVRvcC1UZW4tT3JnYW5pemF0aW9ucycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgMTAgb3JnYW5pemF0aW9ucycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCAxMCBPcmdhbml6YXRpb25zJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc2NoZW1hOiAnbWV0cmljJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEuZ2l0aHViLm9yZycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ09yZ2FuaXphdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RfbGV2ZWw6IHRydWUsXG4gICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1Db3VudHJpZXMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnQ291bnRyaWVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIGdpdGh1YiBhY3RvcnMgY291bnRyaWVzJyxcbiAgICAgICAgdHlwZTogJ3RhZ2Nsb3VkJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIuYWN0b3JfbG9jYXRpb24uY291bnRyeV9jb2RlJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnVG9wIGNvdW50cmllcyAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNjYWxlOiAnbGluZWFyJyxcbiAgICAgICAgICBvcmllbnRhdGlvbjogJ3NpbmdsZScsXG4gICAgICAgICAgbWluRm9udFNpemU6IDE4LFxuICAgICAgICAgIG1heEZvbnRTaXplOiA3MixcbiAgICAgICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1Ub3AtRXZlbnRzJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0dpdEh1YiB0b3AgZXZlbnRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnR2l0aHViIFRvcCBFdmVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIuYWN0aW9uJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnR2l0aHViIEFjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHRydWUsXG4gICAgICAgICAgICBsYXN0X2xldmVsOiB0cnVlLFxuICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItU3RhdHMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnR2l0SHViIFN0YXRzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnR2l0aHViIFN0YXRzJyxcbiAgICAgICAgdHlwZTogJ21ldHJpYycsXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdUb3RhbCBBbGVydHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0b3BfaGl0cycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgYWdncmVnYXRlOiAnY29uY2F0JyxcbiAgICAgICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICAgICAgc29ydEZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIHNvcnRPcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ01heCBydWxlIGxldmVsIGRldGVjdGVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiAnbWV0cmljJyxcbiAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZVJhbmdlczogZmFsc2UsXG4gICAgICAgICAgICBjb2xvclNjaGVtYTogJ0dyZWVuIHRvIFJlZCcsXG4gICAgICAgICAgICBtZXRyaWNDb2xvck1vZGU6ICdOb25lJyxcbiAgICAgICAgICAgIGNvbG9yc1JhbmdlOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiAxMDAwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnZlcnRDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYmdGaWxsOiAnIzAwMCcsXG4gICAgICAgICAgICAgIGJnQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICBsYWJlbENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViVGV4dDogJycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2l0SHViLU9yZ2FuaXphdGlvbi1IZWF0bWFwJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0dpdEh1YiBPcmdhbml6YXRpb24gSGVhdG1hcCcsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0dpdEh1YiBPcmdhbml6YXRpb24gSGVhdG1hcCcsXG4gICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIub3JnJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5hY3Rpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnaGVhdG1hcCcsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgZW5hYmxlSG92ZXI6IGZhbHNlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBjb2xvcnNOdW1iZXI6IDQsXG4gICAgICAgICAgY29sb3JTY2hlbWE6ICdCbHVlcycsXG4gICAgICAgICAgc2V0Q29sb3JSYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29sb3JzUmFuZ2U6IFtdLFxuICAgICAgICAgIGludmVydENvbG9yczogZmFsc2UsXG4gICAgICAgICAgcGVyY2VudGFnZU1vZGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFlFeHRlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICAgIG92ZXJ3cml0ZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2l0SHViLVRvcC1UZW4tT3JnYW5pemF0aW9ucycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdHaXRIdWIgdG9wIDEwIG9yZ2FuaXphdGlvbnMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgMTAgT3JnYW5pemF0aW9ucycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5vcmcnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdPcmdhbml6YXRpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHRydWUsXG4gICAgICAgICAgICBsYXN0X2xldmVsOiB0cnVlLFxuICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItVG9wLVRlbi1BY3RvcnMnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDEwIGFjdG9ycycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1RvcCAxMCBBY3RvcnMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIuYWN0b3InLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdBY3RvcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgIGxhc3RfbGV2ZWw6IHRydWUsXG4gICAgICAgICAgICB0cnVuY2F0ZTogMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdpdEh1Yi1Ub3AtVGVuLVJlcG9zaXRvcmllcycsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgMTAgcmVwb3NpdG9yaWVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIDEwIFJlcG9zaXRvcmllcycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHNjaGVtYTogJ21ldHJpYycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdkYXRhLmdpdGh1Yi5yZXBvJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVwb3NpdG9yaWVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHRydWUsXG4gICAgICAgICAgICBsYXN0X2xldmVsOiB0cnVlLFxuICAgICAgICAgICAgdHJ1bmNhdGU6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDMsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046XG4gICAgICAgICAgJ3tcImluZGV4XCI6XCJ3YXp1aC1hbGVydHNcIixcImZpbHRlclwiOltdLFwicXVlcnlcIjp7XCJxdWVyeVwiOlwiXCIsXCJsYW5ndWFnZVwiOlwibHVjZW5lXCJ9fScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HaXRIdWItVG9wLVRlbi1BY3Rpb25zJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCAxMCBhY3Rpb25zJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIDEwIEFjdGlvbnMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5naXRodWIuYWN0aW9uJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVzOiB0cnVlLFxuICAgICAgICAgICAgbGFzdF9sZXZlbDogdHJ1ZSxcbiAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAzLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOlxuICAgICAgICAgICd7XCJpbmRleFwiOlwid2F6dWgtYWxlcnRzXCIsXCJmaWx0ZXJcIjpbXSxcInF1ZXJ5XCI6e1wicXVlcnlcIjpcIlwiLFwibGFuZ3VhZ2VcIjpcImx1Y2VuZVwifX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR2l0SHViLUFsZXJ0LUxldmVsLUV2b2x1dGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdBbGVydCBsZXZlbCBldm9sdXRpb24nLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdSdWxlIExldmVsIE92ZXIgVGltZScsXG4gICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzY2hlbWE6ICdtZXRyaWMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAndGltZXN0YW1wJyxcbiAgICAgICAgICAgICAgdGltZVJhbmdlOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogJ25vdy0zMGQnLFxuICAgICAgICAgICAgICAgIHRvOiAnbm93JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXNlTm9ybWFsaXplZEVzSW50ZXJ2YWw6IHRydWUsXG4gICAgICAgICAgICAgIHNjYWxlTWV0cmljVmFsdWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdkJyxcbiAgICAgICAgICAgICAgZHJvcF9wYXJ0aWFsczogZmFsc2UsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmxldmVsJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpbmVzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRydW5jYXRlOiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgIHNob3dDaXJjbGVzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnRlcnBvbGF0ZTogJ3N0ZXAtYWZ0ZXInLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIHRocmVzaG9sZExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBzdHlsZTogJ2Z1bGwnLFxuICAgICAgICAgICAgY29sb3I6ICcjRTc2NjRDJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjpcbiAgICAgICAgICAne1wiaW5kZXhcIjpcIndhenVoLWFsZXJ0c1wiLFwiZmlsdGVyXCI6W10sXCJxdWVyeVwiOntcInF1ZXJ5XCI6XCJcIixcImxhbmd1YWdlXCI6XCJsdWNlbmVcIn19JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuXTtcbiJdfQ==