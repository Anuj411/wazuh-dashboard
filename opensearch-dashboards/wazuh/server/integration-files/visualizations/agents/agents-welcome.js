"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Module for Agents/GCP visualizations
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
  _id: 'Wazuh-App-Agents-Welcome-Top-PCI',
  _type: 'visualization',
  _source: {
    title: 'Top 5 rules',
    visState: JSON.stringify({
      title: 'top pci requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          field: 'rule.pci_dss',
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Top-GDPR',
  _type: 'visualization',
  _source: {
    title: 'Top 5 GDPR',
    visState: JSON.stringify({
      title: 'top gdpr requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          field: 'rule.gdpr',
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Top-HIPAA',
  _type: 'visualization',
  _source: {
    title: 'Top 5 HIPAA',
    visState: JSON.stringify({
      title: 'top hipaa requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          size: 5,
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Top-NIST-800-53',
  _type: 'visualization',
  _source: {
    title: 'Top 5 NIST-800-53',
    visState: JSON.stringify({
      title: 'top NIST-800-53 requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          size: 5,
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Top-GPG-13',
  _type: 'visualization',
  _source: {
    title: 'Top 5 GPG-13',
    visState: JSON.stringify({
      title: 'top GPG-13 requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          field: 'rule.gpg13',
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Top-TSC',
  _type: 'visualization',
  _source: {
    title: 'Top 5 TSC',
    visState: JSON.stringify({
      title: 'top TSC requirements',
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
            label: 'Count',
            aggType: 'count'
          },
          buckets: [{
            accessor: 0,
            format: {
              id: 'terms',
              params: {
                id: 'string',
                otherBucketLabel: 'Other',
                missingBucketLabel: 'Missing',
                parsedUrl: {
                  origin: 'http://172.16.1.2:5601',
                  pathname: '/app/kibana',
                  basePath: ''
                }
              }
            },
            params: {},
            label: 'Requirement',
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
          field: 'rule.tsc',
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}, {
  _id: 'Wazuh-App-Agents-Welcome-Events-Evolution',
  _type: 'visualization',
  _source: {
    title: 'Events evolution',
    visState: JSON.stringify({
      title: 'event evolution',
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
        addLegend: false,
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
        dimensions: {
          x: null,
          y: [{
            accessor: 0,
            format: {
              id: 'number'
            },
            params: {},
            label: 'Count',
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
          scaleMetricValues: false,
          interval: 'auto',
          drop_partials: false,
          min_doc_count: 1,
          extended_bounds: {}
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
        query: {
          query: '',
          language: 'lucene'
        },
        filter: []
      })
    }
  }
}];
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50cy13ZWxjb21lLnRzIl0sIm5hbWVzIjpbIl9pZCIsIl90eXBlIiwiX3NvdXJjZSIsInRpdGxlIiwidmlzU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsInBhcmFtcyIsImFkZFRvb2x0aXAiLCJhZGRMZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsImlzRG9udXQiLCJsYWJlbHMiLCJzaG93IiwidmFsdWVzIiwibGFzdF9sZXZlbCIsInRydW5jYXRlIiwiZGltZW5zaW9ucyIsIm1ldHJpYyIsImFjY2Vzc29yIiwiZm9ybWF0IiwiaWQiLCJsYWJlbCIsImFnZ1R5cGUiLCJidWNrZXRzIiwib3RoZXJCdWNrZXRMYWJlbCIsIm1pc3NpbmdCdWNrZXRMYWJlbCIsInBhcnNlZFVybCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiYmFzZVBhdGgiLCJhZ2dzIiwiZW5hYmxlZCIsInNjaGVtYSIsImZpZWxkIiwib3JkZXJCeSIsIm9yZGVyIiwic2l6ZSIsIm90aGVyQnVja2V0IiwibWlzc2luZ0J1Y2tldCIsImN1c3RvbUxhYmVsIiwidWlTdGF0ZUpTT04iLCJ2aXMiLCJzb3J0IiwiY29sdW1uSW5kZXgiLCJkaXJlY3Rpb24iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwiaW5kZXgiLCJxdWVyeSIsImxhbmd1YWdlIiwiZmlsdGVyIiwiZ3JpZCIsImNhdGVnb3J5TGluZXMiLCJjYXRlZ29yeUF4ZXMiLCJwb3NpdGlvbiIsInN0eWxlIiwic2NhbGUiLCJ2YWx1ZUF4ZXMiLCJuYW1lIiwibW9kZSIsInJvdGF0ZSIsInRleHQiLCJzZXJpZXNQYXJhbXMiLCJkYXRhIiwidmFsdWVBeGlzIiwiZHJhd0xpbmVzQmV0d2VlblBvaW50cyIsImxpbmVXaWR0aCIsImludGVycG9sYXRlIiwic2hvd0NpcmNsZXMiLCJ0aW1lcyIsImFkZFRpbWVNYXJrZXIiLCJ0aHJlc2hvbGRMaW5lIiwidmFsdWUiLCJ3aWR0aCIsImNvbG9yIiwieCIsInkiLCJ1c2VOb3JtYWxpemVkRXNJbnRlcnZhbCIsInNjYWxlTWV0cmljVmFsdWVzIiwiaW50ZXJ2YWwiLCJkcm9wX3BhcnRpYWxzIiwibWluX2RvY19jb3VudCIsImV4dGVuZGVkX2JvdW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztlQVdlLENBQ2I7QUFDRUEsRUFBQUEsR0FBRyxFQUFFLGtDQURQO0FBRUVDLEVBQUFBLEtBQUssRUFBRSxlQUZUO0FBR0VDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsYUFEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUsc0JBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsS0FGaUI7QUFHdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUNORCxRQUFBQSxJQUFJLEVBQUUsS0FEQTtBQUVORSxRQUFBQSxVQUFVLEVBQUUsSUFGTjtBQUdOQyxRQUFBQSxTQUFTLEVBQUUsSUFITDtBQUlOQyxRQUFBQSxjQUFjLEVBQUUsT0FKVjtBQUtOQyxRQUFBQSxPQUFPLEVBQUUsSUFMSDtBQU1OQyxRQUFBQSxNQUFNLEVBQUU7QUFBRUMsVUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsVUFBQUEsTUFBTSxFQUFFLElBQXZCO0FBQTZCQyxVQUFBQSxVQUFVLEVBQUUsSUFBekM7QUFBK0NDLFVBQUFBLFFBQVEsRUFBRTtBQUF6RCxTQU5GO0FBT05DLFFBQUFBLFVBQVUsRUFBRTtBQUNWQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsUUFBUSxFQUFFLENBREo7QUFFTkMsWUFBQUEsTUFBTSxFQUFFO0FBQUVDLGNBQUFBLEVBQUUsRUFBRTtBQUFOLGFBRkY7QUFHTmQsWUFBQUEsTUFBTSxFQUFFLEVBSEY7QUFJTmUsWUFBQUEsS0FBSyxFQUFFLE9BSkQ7QUFLTkMsWUFBQUEsT0FBTyxFQUFFO0FBTEgsV0FERTtBQVFW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LEVBQUUsV0FERDtBQUVOOEMsVUFBQUEsdUJBQXVCLEVBQUUsSUFGbkI7QUFHTkMsVUFBQUEsaUJBQWlCLEVBQUUsS0FIYjtBQUlOQyxVQUFBQSxRQUFRLEVBQUUsTUFKSjtBQUtOQyxVQUFBQSxhQUFhLEVBQUUsS0FMVDtBQU1OQyxVQUFBQSxhQUFhLEVBQUUsQ0FOVDtBQU9OQyxVQUFBQSxlQUFlLEVBQUU7QUFQWDtBQUxWLE9BRkk7QUFoRWlCLEtBQWYsQ0FGSDtBQXFGUDVDLElBQUFBLFdBQVcsRUFBRXJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQzFCcUMsTUFBQUEsR0FBRyxFQUFFO0FBQUVuQyxRQUFBQSxNQUFNLEVBQUU7QUFBRW9DLFVBQUFBLElBQUksRUFBRTtBQUFFQyxZQUFBQSxXQUFXLEVBQUUsQ0FBZjtBQUFrQkMsWUFBQUEsU0FBUyxFQUFFO0FBQTdCO0FBQVI7QUFBVjtBQURxQixLQUFmLENBckZOO0FBd0ZQQyxJQUFBQSxXQUFXLEVBQUUsRUF4Rk47QUF5RlBDLElBQUFBLE9BQU8sRUFBRSxDQXpGRjtBQTBGUEMsSUFBQUEscUJBQXFCLEVBQUU7QUFDckJDLE1BQUFBLGdCQUFnQixFQUFFN0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDL0I2QyxRQUFBQSxLQUFLLEVBQUUsY0FEd0I7QUFFL0JDLFFBQUFBLEtBQUssRUFBRTtBQUFFQSxVQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFBQSxRQUFRLEVBQUU7QUFBdkIsU0FGd0I7QUFHL0JDLFFBQUFBLE1BQU0sRUFBRTtBQUh1QixPQUFmO0FBREc7QUExRmhCO0FBSFgsQ0F2ZWEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgZm9yIEFnZW50cy9HQ1AgdmlzdWFsaXphdGlvbnNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLVdlbGNvbWUtVG9wLVBDSScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCA1IHJ1bGVzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAndG9wIHBjaSByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybDoge1xuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogJ2h0dHA6Ly8xNzIuMTYuMS4yOjU2MDEnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FwcC9raWJhbmEnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUucGNpX2RzcycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDIsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtV2VsY29tZS1Ub3AtR0RQUicsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1RvcCA1IEdEUFInLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICd0b3AgZ2RwciByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybDoge1xuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogJ2h0dHA6Ly8xNzIuMTYuMS4yOjU2MDEnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FwcC9raWJhbmEnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuZ2RwcicsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDIsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtV2VsY29tZS1Ub3AtSElQQUEnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgNSBISVBBQScsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ3RvcCBoaXBhYSByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybDoge1xuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogJ2h0dHA6Ly8xNzIuMTYuMS4yOjU2MDEnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FwcC9raWJhbmEnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUuaGlwYWEnLFxuICAgICAgICAgICAgICBvcmRlckJ5OiAnMScsXG4gICAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICBjdXN0b21MYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAyLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtQWdlbnRzLVdlbGNvbWUtVG9wLU5JU1QtODAwLTUzJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDUgTklTVC04MDAtNTMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICd0b3AgTklTVC04MDAtNTMgcmVxdWlyZW1lbnRzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgIGFkZFRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgYWRkTGVnZW5kOiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGlzRG9udXQ6IHRydWUsXG4gICAgICAgICAgbGFiZWxzOiB7IHNob3c6IGZhbHNlLCB2YWx1ZXM6IHRydWUsIGxhc3RfbGV2ZWw6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBtZXRyaWM6IHtcbiAgICAgICAgICAgICAgYWNjZXNzb3I6IDEsXG4gICAgICAgICAgICAgIGZvcm1hdDogeyBpZDogJ251bWJlcicgfSxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgbGFiZWw6ICdDb3VudCcsXG4gICAgICAgICAgICAgIGFnZ1R5cGU6ICdjb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnVja2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWNjZXNzb3I6IDAsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXRMYWJlbDogJ01pc3NpbmcnLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRVcmw6IHtcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46ICdodHRwOi8vMTcyLjE2LjEuMjo1NjAxJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hcHAva2liYW5hJyxcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlUGF0aDogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1JlcXVpcmVtZW50JyxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAndGVybXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGVybXMnLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLm5pc3RfODAwXzUzJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMiwgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1XZWxjb21lLVRvcC1HUEctMTMnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdUb3AgNSBHUEctMTMnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICd0b3AgR1BHLTEzIHJlcXVpcmVtZW50cycsXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBpc0RvbnV0OiB0cnVlLFxuICAgICAgICAgIGxhYmVsczogeyBzaG93OiBmYWxzZSwgdmFsdWVzOiB0cnVlLCBsYXN0X2xldmVsOiB0cnVlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgbWV0cmljOiB7XG4gICAgICAgICAgICAgIGFjY2Vzc29yOiAxLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sXG4gICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgIGxhYmVsOiAnQ291bnQnLFxuICAgICAgICAgICAgICBhZ2dUeXBlOiAnY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1Y2tldHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjY2Vzc29yOiAwLFxuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd0ZXJtcycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkVXJsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiAnaHR0cDovLzE3Mi4xNi4xLjI6NTYwMScsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYXBwL2tpYmFuYScsXG4gICAgICAgICAgICAgICAgICAgICAgYmFzZVBhdGg6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICAgICAgYWdnVHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW1xuICAgICAgICAgIHsgaWQ6ICcxJywgZW5hYmxlZDogdHJ1ZSwgdHlwZTogJ2NvdW50Jywgc2NoZW1hOiAnbWV0cmljJywgcGFyYW1zOiB7fSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogJ3Rlcm1zJyxcbiAgICAgICAgICAgIHNjaGVtYTogJ3NlZ21lbnQnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiAncnVsZS5ncGcxMycsXG4gICAgICAgICAgICAgIG9yZGVyQnk6ICcxJyxcbiAgICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgICAgb3RoZXJCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldExhYmVsOiAnT3RoZXInLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2aXM6IHsgcGFyYW1zOiB7IHNvcnQ6IHsgY29sdW1uSW5kZXg6IDIsIGRpcmVjdGlvbjogJ2Rlc2MnIH0gfSB9LFxuICAgICAgfSksXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLWFsZXJ0cycsXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1BZ2VudHMtV2VsY29tZS1Ub3AtVFNDJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnVG9wIDUgVFNDJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAndG9wIFRTQyByZXF1aXJlbWVudHMnLFxuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgYWRkVG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICBhZGRMZWdlbmQ6IHRydWUsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgaXNEb251dDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogZmFsc2UsIHZhbHVlczogdHJ1ZSwgbGFzdF9sZXZlbDogdHJ1ZSwgdHJ1bmNhdGU6IDEwMCB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIG1ldHJpYzoge1xuICAgICAgICAgICAgICBhY2Nlc3NvcjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiB7IGlkOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgYWdnVHlwZTogJ2NvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWNrZXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndGVybXMnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJCdWNrZXRMYWJlbDogJ090aGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0J1Y2tldExhYmVsOiAnTWlzc2luZycsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybDoge1xuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogJ2h0dHA6Ly8xNzIuMTYuMS4yOjU2MDEnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FwcC9raWJhbmEnLFxuICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVxdWlyZW1lbnQnLFxuICAgICAgICAgICAgICAgIGFnZ1R5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtcbiAgICAgICAgICB7IGlkOiAnMScsIGVuYWJsZWQ6IHRydWUsIHR5cGU6ICdjb3VudCcsIHNjaGVtYTogJ21ldHJpYycsIHBhcmFtczoge30gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXJtcycsXG4gICAgICAgICAgICBzY2hlbWE6ICdzZWdtZW50JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBmaWVsZDogJ3J1bGUudHNjJyxcbiAgICAgICAgICAgICAgb3JkZXJCeTogJzEnLFxuICAgICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgICAgICBvdGhlckJ1Y2tldDogZmFsc2UsXG4gICAgICAgICAgICAgIG90aGVyQnVja2V0TGFiZWw6ICdPdGhlcicsXG4gICAgICAgICAgICAgIG1pc3NpbmdCdWNrZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICBtaXNzaW5nQnVja2V0TGFiZWw6ICdNaXNzaW5nJyxcbiAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6ICdSZXF1aXJlbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZpczogeyBwYXJhbXM6IHsgc29ydDogeyBjb2x1bW5JbmRleDogMiwgZGlyZWN0aW9uOiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtYWxlcnRzJyxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLUFnZW50cy1XZWxjb21lLUV2ZW50cy1Fdm9sdXRpb24nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdFdmVudHMgZXZvbHV0aW9uJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnZXZlbnQgZXZvbHV0aW9uJyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgZ3JpZDogeyBjYXRlZ29yeUxpbmVzOiBmYWxzZSB9LFxuICAgICAgICAgIGNhdGVnb3J5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0NhdGVnb3J5QXhpcy0xJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInIH0sXG4gICAgICAgICAgICAgIGxhYmVsczogeyBzaG93OiB0cnVlLCBmaWx0ZXI6IHRydWUsIHRydW5jYXRlOiAxMDAgfSxcbiAgICAgICAgICAgICAgdGl0bGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlQXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ1ZhbHVlQXhpcy0xJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0xlZnRBeGlzLTEnLFxuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgIHNjYWxlOiB7IHR5cGU6ICdsaW5lYXInLCBtb2RlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgICBsYWJlbHM6IHsgc2hvdzogdHJ1ZSwgcm90YXRlOiAwLCBmaWx0ZXI6IGZhbHNlLCB0cnVuY2F0ZTogMTAwIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdDb3VudCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZXJpZXNQYXJhbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICBtb2RlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ0NvdW50JywgaWQ6ICcxJyB9LFxuICAgICAgICAgICAgICB2YWx1ZUF4aXM6ICdWYWx1ZUF4aXMtMScsXG4gICAgICAgICAgICAgIGRyYXdMaW5lc0JldHdlZW5Qb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICBzaG93Q2lyY2xlczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICAgIGFkZExlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgdGltZXM6IFtdLFxuICAgICAgICAgIGFkZFRpbWVNYXJrZXI6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgdGhyZXNob2xkTGluZTogeyBzaG93OiBmYWxzZSwgdmFsdWU6IDEwLCB3aWR0aDogMSwgc3R5bGU6ICdmdWxsJywgY29sb3I6ICcjRTc2NjRDJyB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IG51bGwsXG4gICAgICAgICAgICB5OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NvcjogMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHsgaWQ6ICdudW1iZXInIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvdW50JyxcbiAgICAgICAgICAgICAgICBhZ2dUeXBlOiAnY291bnQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBlbmFibGVkOiB0cnVlLCB0eXBlOiAnY291bnQnLCBzY2hlbWE6ICdtZXRyaWMnLCBwYXJhbXM6IHt9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZV9oaXN0b2dyYW0nLFxuICAgICAgICAgICAgc2NoZW1hOiAnc2VnbWVudCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICd0aW1lc3RhbXAnLFxuICAgICAgICAgICAgICB1c2VOb3JtYWxpemVkRXNJbnRlcnZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgc2NhbGVNZXRyaWNWYWx1ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICBpbnRlcnZhbDogJ2F1dG8nLFxuICAgICAgICAgICAgICBkcm9wX3BhcnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluX2RvY19jb3VudDogMSxcbiAgICAgICAgICAgICAgZXh0ZW5kZWRfYm91bmRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmlzOiB7IHBhcmFtczogeyBzb3J0OiB7IGNvbHVtbkluZGV4OiAyLCBkaXJlY3Rpb246ICdkZXNjJyB9IH0gfSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1hbGVydHMnLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuIl19