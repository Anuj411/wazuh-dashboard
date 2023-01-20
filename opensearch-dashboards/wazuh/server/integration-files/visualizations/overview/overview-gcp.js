"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Overview/GCP visualizations
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
var _default = [// NUEVO DASHBOARD
{
  _id: 'Wazuh-App-Overview-GCP-Alerts-Evolution-By-AuthAnswer',
  _source: {
    title: 'Events over time by auth answer',
    visState: JSON.stringify({
      title: 'Alert evolution by auth result',
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
          type: 'area',
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
        thresholdLine: {
          show: false,
          value: 10,
          width: 1,
          style: 'full',
          color: '#34130C'
        },
        labels: {},
        dimensions: {
          x: null,
          y: [{
            accessor: 0,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
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
          field: 'data.gcp.jsonPayload.authAnswer',
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
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GCP-Top-vmInstances-By-ResponseCode',
  _source: {
    title: 'Top instances by response code',
    visState: JSON.stringify({
      title: 'Top VM instances by response code',
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
          field: 'data.gcp.jsonPayload.vmInstanceName',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'VM Instance Name'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'data.gcp.jsonPayload.responseCode',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Response Code'
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
  _id: 'Wazuh-App-Overview-GCP-Top-ResourceType-By-Project-Id',
  _source: {
    title: 'Resource type by project id',
    visState: JSON.stringify({
      title: 'Top resource type by project',
      type: 'horizontal_bar',
      params: {
        addLegend: true,
        addTimeMarker: false,
        addTooltip: true,
        categoryAxes: [{
          id: 'CategoryAxis-1',
          labels: {
            filter: false,
            rotate: 0,
            show: true,
            truncate: 200
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
        },
        grid: {
          categoryLines: false
        },
        labels: {},
        legendPosition: 'right',
        seriesParams: [{
          data: {
            id: '1',
            label: 'Count'
          },
          drawLinesBetweenPoints: true,
          mode: 'normal',
          show: true,
          showCircles: true,
          type: 'histogram',
          valueAxis: 'ValueAxis-1'
        }],
        times: [],
        type: 'histogram',
        valueAxes: [{
          id: 'ValueAxis-1',
          labels: {
            filter: true,
            rotate: 75,
            show: true,
            truncate: 100
          },
          name: 'LeftAxis-2',
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
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'data.gcp.resource.labels.project_id',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Project ID'
        }
      }, {
        id: '3',
        enabled: true,
        type: 'terms',
        schema: 'group',
        params: {
          field: 'data.gcp.resource.type',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing',
          customLabel: 'Resource type'
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
  _id: 'Wazuh-App-Overview-GCP-Top-ProjectId-By-SourceType',
  _source: {
    title: 'Top project id by sourcetype',
    visState: JSON.stringify({
      title: 'top project id by source type',
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
        id: '4',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'data.gcp.resource.labels.location',
          customLabel: 'Location',
          orderBy: '1',
          order: 'desc',
          size: 5,
          otherBucket: false,
          otherBucketLabel: 'Other',
          missingBucket: false,
          missingBucketLabel: 'Missing'
        }
      }, {
        id: '2',
        enabled: true,
        type: 'terms',
        schema: 'segment',
        params: {
          field: 'data.gcp.resource.labels.project_id',
          customLabel: 'Project ID',
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
          field: 'data.gcp.resource.labels.source_type',
          customLabel: 'Source type',
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
          query: '',
          language: 'lucene'
        }
      })
    }
  },
  _type: 'visualization'
}, {
  _id: 'Wazuh-App-Overview-GCP-Map-By-SourceIp',
  _source: {
    title: 'Top 5 Map by source ip',
    visState: JSON.stringify({
      title: 'Map GCP source IP',
      type: 'tile_map',
      params: {
        colorSchema: 'Green to Red',
        mapType: 'Scaled Circle Markers',
        isDesaturated: false,
        addTooltip: true,
        heatClusterSize: 1.5,
        legendPosition: 'bottomright',
        mapZoom: 2,
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
            accessor: 2,
            format: {
              id: 'number'
            },
            params: {},
            aggType: 'count'
          },
          geohash: {
            accessor: 1,
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
            accessor: 3,
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
          mapZoom: 3,
          mapCenter: {
            lon: 1.3183593750000002,
            lat: 18.06231230454674
          },
          mapBounds: {
            bottom_right: {
              lat: -50.736455137010644,
              lon: 125.68359375000001
            },
            top_left: {
              lat: 68.72044056989829,
              lon: -123.04687500000001
            }
          }
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
  _id: 'Wazuh-App-Overview-GCP-Alerts-summary',
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
          size: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LWdjcC50cyJdLCJuYW1lcyI6WyJfaWQiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJjYXRlZ29yeUF4ZXMiLCJpZCIsInBvc2l0aW9uIiwic2hvdyIsInN0eWxlIiwic2NhbGUiLCJsYWJlbHMiLCJmaWx0ZXIiLCJ0cnVuY2F0ZSIsInZhbHVlQXhlcyIsIm5hbWUiLCJtb2RlIiwicm90YXRlIiwidGV4dCIsInNlcmllc1BhcmFtcyIsImRhdGEiLCJsYWJlbCIsImRyYXdMaW5lc0JldHdlZW5Qb2ludHMiLCJzaG93Q2lyY2xlcyIsImludGVycG9sYXRlIiwidmFsdWVBeGlzIiwiYWRkVG9vbHRpcCIsImFkZExlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwidGltZXMiLCJhZGRUaW1lTWFya2VyIiwidGhyZXNob2xkTGluZSIsInZhbHVlIiwid2lkdGgiLCJjb2xvciIsImRpbWVuc2lvbnMiLCJ4IiwieSIsImFjY2Vzc29yIiwiZm9ybWF0IiwiYWdnVHlwZSIsImFnZ3MiLCJlbmFibGVkIiwic2NoZW1hIiwiZmllbGQiLCJ1c2VOb3JtYWxpemVkRXNJbnRlcnZhbCIsImludGVydmFsIiwiZHJvcF9wYXJ0aWFscyIsIm1pbl9kb2NfY291bnQiLCJleHRlbmRlZF9ib3VuZHMiLCJvcmRlckJ5Iiwib3JkZXIiLCJzaXplIiwib3RoZXJCdWNrZXQiLCJvdGhlckJ1Y2tldExhYmVsIiwibWlzc2luZ0J1Y2tldCIsIm1pc3NpbmdCdWNrZXRMYWJlbCIsInVpU3RhdGVKU09OIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImluZGV4IiwicXVlcnkiLCJsYW5ndWFnZSIsIl90eXBlIiwiaXNEb251dCIsInZhbHVlcyIsImxhc3RfbGV2ZWwiLCJtZXRyaWMiLCJidWNrZXRzIiwiY3VzdG9tTGFiZWwiLCJzZXJpZXMiLCJjb2xvclNjaGVtYSIsIm1hcFR5cGUiLCJpc0Rlc2F0dXJhdGVkIiwiaGVhdENsdXN0ZXJTaXplIiwibWFwWm9vbSIsIm1hcENlbnRlciIsIndtcyIsIm9wdGlvbnMiLCJ0cmFuc3BhcmVudCIsImdlb2hhc2giLCJwcmVjaXNpb24iLCJ1c2VHZW9jZW50cm9pZCIsImdlb2NlbnRyb2lkIiwiYXV0b1ByZWNpc2lvbiIsImlzRmlsdGVyZWRCeUNvbGxhciIsImxvbiIsImxhdCIsIm1hcEJvdW5kcyIsImJvdHRvbV9yaWdodCIsInRvcF9sZWZ0IiwicGVyUGFnZSIsInNob3dQYXJ0aWFsUm93cyIsInNob3dNZXRpY3NBdEFsbExldmVscyIsInNvcnQiLCJjb2x1bW5JbmRleCIsImRpcmVjdGlvbiIsInNob3dUb3RhbCIsInNob3dUb29sYmFyIiwidG90YWxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUVBO0FBQ0VBLEVBQUFBLEdBQUcsRUFBRSx1REFEUDtBQUVFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFLGlDQURBO0FBRVBDLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkJILE1BQUFBLEtBQUssRUFBRSxnQ0FEZ0I7QUFFdkJJLE1BQUFBLElBQUksRUFBRSxNQUZpQjtBQUd2QkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05ELFFBQUFBLElBQUksRUFBRSxNQURBO0FBRU5FLFFBQUFBLElBQUksRUFBRTtBQUFFQyxVQUFBQSxhQUFhLEVBQUU7QUFBakIsU0FGQTtBQUdOQyxRQUFBQSxZQUFZLEVBQUUsQ0FDWjtBQUNFQyxVQUFBQSxFQUFFLEVBQUUsZ0JBRE47QUFFRUwsVUFBQUEsSUFBSSxFQUFFLFVBRlI7QUFHRU0sVUFBQUEsUUFBUSxFQUFFLFFBSFo7QUFJRUMsVUFBQUEsSUFBSSxFQUFFLElBSlI7QUFLRUMsVUFBQUEsS0FBSyxFQUFFLEVBTFQ7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YSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgT3ZlcnZpZXcvR0NQIHZpc3VhbGl6YXRpb25zXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICAvLyBOVUVWTyBEQVNIQk9BUkRcblxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdDUC1BbGVydHMtRXZvbHV0aW9uLUJ5LUF1dGhBbnN3ZXInLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnRXZlbnRzIG92ZXIgdGltZSBieSBhdXRoIGFuc3dlcicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ0FsZXJ0IGV2b2x1dGlvbiBieSBhdXRoIHJlc3VsdCcsXG4gICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgIGdyaWQ6IHsgY2F0ZWdvcnlMaW5lczogZmFsc2UgfSxcbiAgICAgICAgICBjYXRlZ29yeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdDYXRlZ29yeUF4aXMtMScsXG4gICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgZmlsdGVyOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWx1ZUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIG5hbWU6ICdMZWZ0QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICBzY2FsZTogeyB0eXBlOiAnbGluZWFyJywgbW9kZTogJ25vcm1hbCcgfSxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IHNob3c6IHRydWUsIHJvdGF0ZTogMCwgZmlsdGVyOiBmYWxzZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnQ291bnQnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzUGFyYW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3c6ICd0cnVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICBtb2RlOiAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdDb3VudCcsIGlkOiAnMScgfSxcbiAgICAgICAgICAgICAgZHJhd0xpbmVzQmV0d2VlblBvaW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGludGVycG9sYXRlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgdmFsdWVBeGlzOiAnVmFsdWVBeGlzLTEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHRpbWVzOiBbXSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICB0aHJlc2hvbGRMaW5lOiB7IHNob3c6IGZhbHNlLCB2YWx1ZTogMTAsIHdpZHRoOiAxLCBzdHlsZTogJ2Z1bGwnLCBjb2xvcjogJyMzNDEzMEMnIH0sXG4gICAgICAgICAgbGFiZWxzOiB7fSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICB4OiBudWxsLFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDAsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdhdXRvJyxcbiAgICAgICAgICAgICAgZHJvcF9wYXJ0aWFsczogZmFsc2UsXG4gICAgICAgICAgICAgIG1pbl9kb2NfY291bnQ6IDEsXG4gICAgICAgICAgICAgIGV4dGVuZGVkX2JvdW5kczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnZ3JvdXAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AuanNvblBheWxvYWQuYXV0aEFuc3dlcicsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HQ1AtVG9wLXZtSW5zdGFuY2VzLUJ5LVJlc3BvbnNlQ29kZScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgaW5zdGFuY2VzIGJ5IHJlc3BvbnNlIGNvZGUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdUb3AgVk0gaW5zdGFuY2VzIGJ5IHJlc3BvbnNlIGNvZGUnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AuanNvblBheWxvYWQudm1JbnN0YW5jZU5hbWUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1ZNIEluc3RhbmNlIE5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AuanNvblBheWxvYWQucmVzcG9uc2VDb2RlJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXNwb25zZSBDb2RlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdDUC1Ub3AtUmVzb3VyY2VUeXBlLUJ5LVByb2plY3QtSWQnLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnUmVzb3VyY2UgdHlwZSBieSBwcm9qZWN0IGlkJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnVG9wIHJlc291cmNlIHR5cGUgYnkgcHJvamVjdCcsXG4gICAgICAgIHR5cGU6ICdob3Jpem9udGFsX2JhcicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBhZGRUaW1lTWFya2VyOiBmYWxzZSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IGZpbHRlcjogZmFsc2UsIHJvdGF0ZTogMCwgc2hvdzogdHJ1ZSwgdHJ1bmNhdGU6IDIwMCB9LFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogJ3N0cmluZycsIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogW3sgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9XSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBncmlkOiB7IGNhdGVnb3J5TGluZXM6IGZhbHNlIH0sXG4gICAgICAgICAgbGFiZWxzOiB7fSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF0YTogeyBpZDogJzEnLCBsYWJlbDogJ0NvdW50JyB9LFxuICAgICAgICAgICAgICBkcmF3TGluZXNCZXR3ZWVuUG9pbnRzOiB0cnVlLFxuICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgc2hvd0NpcmNsZXM6IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIHR5cGU6ICdoaXN0b2dyYW0nLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbGFiZWxzOiB7IGZpbHRlcjogdHJ1ZSwgcm90YXRlOiA3NSwgc2hvdzogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgICAgICBuYW1lOiAnTGVmdEF4aXMtMicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHNjYWxlOiB7IG1vZGU6ICdub3JtYWwnLCB0eXBlOiAnbGluZWFyJyB9LFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AucmVzb3VyY2UubGFiZWxzLnByb2plY3RfaWQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1Byb2plY3QgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2dyb3VwJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEuZ2NwLnJlc291cmNlLnR5cGUnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1Jlc291cmNlIHR5cGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtT3ZlcnZpZXctR0NQLVRvcC1Qcm9qZWN0SWQtQnktU291cmNlVHlwZScsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgcHJvamVjdCBpZCBieSBzb3VyY2V0eXBlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAndG9wIHByb2plY3QgaWQgYnkgc291cmNlIHR5cGUnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzogeyBhY2Nlc3NvcjogMSwgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LCBwYXJhbXM6IHt9LCBhZ2dUeXBlOiAnY291bnQnIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDIsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiA0LFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ2RhdGEuZ2NwLnJlc291cmNlLmxhYmVscy5sb2NhdGlvbicsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnTG9jYXRpb24nLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AucmVzb3VyY2UubGFiZWxzLnByb2plY3RfaWQnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1Byb2plY3QgSUQnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAnZGF0YS5nY3AucmVzb3VyY2UubGFiZWxzLnNvdXJjZV90eXBlJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdTb3VyY2UgdHlwZScsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1PdmVydmlldy1HQ1AtTWFwLUJ5LVNvdXJjZUlwJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCA1IE1hcCBieSBzb3VyY2UgaXAnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdNYXAgR0NQIHNvdXJjZSBJUCcsXG4gICAgICAgIHR5cGU6ICd0aWxlX21hcCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvbG9yU2NoZW1hOiAnR3JlZW4gdG8gUmVkJyxcbiAgICAgICAgICBtYXBUeXBlOiAnU2NhbGVkIENpcmNsZSBNYXJrZXJzJyxcbiAgICAgICAgICBpc0Rlc2F0dXJhdGVkOiBmYWxzZSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGhlYXRDbHVzdGVyU2l6ZTogMS41LFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnYm90dG9tcmlnaHQnLFxuICAgICAgICAgIG1hcFpvb206IDIsXG4gICAgICAgICAgbWFwQ2VudGVyOiBbMCwgMF0sXG4gICAgICAgICAgd21zOiB7IGVuYWJsZWQ6IGZhbHNlLCBvcHRpb25zOiB7IGZvcm1hdDogJ2ltYWdlL3BuZycsIHRyYW5zcGFyZW50OiB0cnVlIH0gfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWM6IHsgYWNjZXNzb3I6IDIsIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSwgcGFyYW1zOiB7fSwgYWdnVHlwZTogJ2NvdW50JyB9LFxuICAgICAgICAgICAgZ2VvaGFzaDoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHsgcHJlY2lzaW9uOiAyLCB1c2VHZW9jZW50cm9pZDogdHJ1ZSB9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZ2VvaGFzaF9ncmlkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW9jZW50cm9pZDoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMyxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnZ2VvX2NlbnRyb2lkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ2dlb2hhc2hfZ3JpZCcsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ0dlb0xvY2F0aW9uLmxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgYXV0b1ByZWNpc2lvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgcHJlY2lzaW9uOiAyLFxuICAgICAgICAgICAgICB1c2VHZW9jZW50cm9pZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNGaWx0ZXJlZEJ5Q29sbGFyOiB0cnVlLFxuICAgICAgICAgICAgICBtYXBab29tOiAzLFxuICAgICAgICAgICAgICBtYXBDZW50ZXI6IHsgbG9uOiAxLjMxODM1OTM3NTAwMDAwMDIsIGxhdDogMTguMDYyMzEyMzA0NTQ2NzQgfSxcbiAgICAgICAgICAgICAgbWFwQm91bmRzOiB7XG4gICAgICAgICAgICAgICAgYm90dG9tX3JpZ2h0OiB7IGxhdDogLTUwLjczNjQ1NTEzNzAxMDY0NCwgbG9uOiAxMjUuNjgzNTkzNzUwMDAwMDEgfSxcbiAgICAgICAgICAgICAgICB0b3BfbGVmdDogeyBsYXQ6IDY4LjcyMDQ0MDU2OTg5ODI5LCBsb246IC0xMjMuMDQ2ODc1MDAwMDAwMDEgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLU92ZXJ2aWV3LUdDUC1BbGVydHMtc3VtbWFyeScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ0FsZXJ0cyBzdW1tYXJ5JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnRzIHN1bW1hcnknLFxuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgICBzaG93UGFydGlhbFJvd3M6IGZhbHNlLFxuICAgICAgICAgIHNob3dNZXRpY3NBdEFsbExldmVsczogZmFsc2UsXG4gICAgICAgICAgc29ydDogeyBjb2x1bW5JbmRleDogMywgZGlyZWN0aW9uOiAnZGVzYycgfSxcbiAgICAgICAgICBzaG93VG90YWw6IGZhbHNlLFxuICAgICAgICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgICAgICAgIHRvdGFsRnVuYzogJ3N1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5pZCcsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiA1MCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1J1bGUgSUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ2J1Y2tldCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIHNpemU6IDEwMCxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5sZXZlbCcsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBzaXplOiAxMixcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ0xldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7XCJ2aXNcIjp7XCJwYXJhbXNcIjp7XCJzb3J0XCI6e1wiY29sdW1uSW5kZXhcIjozLFwiZGlyZWN0aW9uXCI6XCJkZXNjXCJ9fX19JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==