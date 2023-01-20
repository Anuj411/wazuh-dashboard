"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginPlatformTemplate = void 0;

/*
 * Wazuh app - Module for Kibana template
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const pluginPlatformTemplate = {
  order: 0,
  template: '.kibana*',
  settings: {
    'index.refresh_interval': '5s'
  },
  mappings: {
    properties: {
      type: {
        type: 'keyword'
      },
      updated_at: {
        type: 'date'
      },
      config: {
        properties: {
          buildNum: {
            type: 'keyword'
          }
        }
      },
      'index-pattern': {
        properties: {
          fieldFormatMap: {
            type: 'text'
          },
          fields: {
            type: 'text'
          },
          intervalName: {
            type: 'keyword'
          },
          notExpandable: {
            type: 'boolean'
          },
          sourceFilters: {
            type: 'text'
          },
          timeFieldName: {
            type: 'keyword'
          },
          title: {
            type: 'text'
          }
        }
      },
      visualization: {
        properties: {
          description: {
            type: 'text'
          },
          kibanaSavedObjectMeta: {
            properties: {
              searchSourceJSON: {
                type: 'text'
              }
            }
          },
          savedSearchId: {
            type: 'keyword'
          },
          title: {
            type: 'text'
          },
          uiStateJSON: {
            type: 'text'
          },
          version: {
            type: 'integer'
          },
          visState: {
            type: 'text'
          }
        }
      },
      search: {
        properties: {
          columns: {
            type: 'keyword'
          },
          description: {
            type: 'text'
          },
          hits: {
            type: 'integer'
          },
          kibanaSavedObjectMeta: {
            properties: {
              searchSourceJSON: {
                type: 'text'
              }
            }
          },
          sort: {
            type: 'keyword'
          },
          title: {
            type: 'text'
          },
          version: {
            type: 'integer'
          }
        }
      },
      dashboard: {
        properties: {
          description: {
            type: 'text'
          },
          hits: {
            type: 'integer'
          },
          kibanaSavedObjectMeta: {
            properties: {
              searchSourceJSON: {
                type: 'text'
              }
            }
          },
          optionsJSON: {
            type: 'text'
          },
          panelsJSON: {
            type: 'text'
          },
          refreshInterval: {
            properties: {
              display: {
                type: 'keyword'
              },
              pause: {
                type: 'boolean'
              },
              section: {
                type: 'integer'
              },
              value: {
                type: 'integer'
              }
            }
          },
          timeFrom: {
            type: 'keyword'
          },
          timeRestore: {
            type: 'boolean'
          },
          timeTo: {
            type: 'keyword'
          },
          title: {
            type: 'text'
          },
          uiStateJSON: {
            type: 'text'
          },
          version: {
            type: 'integer'
          }
        }
      },
      url: {
        properties: {
          accessCount: {
            type: 'long'
          },
          accessDate: {
            type: 'date'
          },
          createDate: {
            type: 'date'
          },
          url: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
                ignore_above: 2048
              }
            }
          }
        }
      },
      server: {
        properties: {
          uuid: {
            type: 'keyword'
          }
        }
      },
      'timelion-sheet': {
        properties: {
          description: {
            type: 'text'
          },
          hits: {
            type: 'integer'
          },
          kibanaSavedObjectMeta: {
            properties: {
              searchSourceJSON: {
                type: 'text'
              }
            }
          },
          timelion_chart_height: {
            type: 'integer'
          },
          timelion_columns: {
            type: 'integer'
          },
          timelion_interval: {
            type: 'keyword'
          },
          timelion_other_interval: {
            type: 'keyword'
          },
          timelion_rows: {
            type: 'integer'
          },
          timelion_sheet: {
            type: 'text'
          },
          title: {
            type: 'text'
          },
          version: {
            type: 'integer'
          }
        }
      },
      'graph-workspace': {
        properties: {
          description: {
            type: 'text'
          },
          kibanaSavedObjectMeta: {
            properties: {
              searchSourceJSON: {
                type: 'text'
              }
            }
          },
          numLinks: {
            type: 'integer'
          },
          numVertices: {
            type: 'integer'
          },
          title: {
            type: 'text'
          },
          version: {
            type: 'integer'
          },
          wsState: {
            type: 'text'
          }
        }
      }
    }
  }
};
exports.pluginPlatformTemplate = pluginPlatformTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpYmFuYS10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6WyJwbHVnaW5QbGF0Zm9ybVRlbXBsYXRlIiwib3JkZXIiLCJ0ZW1wbGF0ZSIsInNldHRpbmdzIiwibWFwcGluZ3MiLCJwcm9wZXJ0aWVzIiwidHlwZSIsInVwZGF0ZWRfYXQiLCJjb25maWciLCJidWlsZE51bSIsImZpZWxkRm9ybWF0TWFwIiwiZmllbGRzIiwiaW50ZXJ2YWxOYW1lIiwibm90RXhwYW5kYWJsZSIsInNvdXJjZUZpbHRlcnMiLCJ0aW1lRmllbGROYW1lIiwidGl0bGUiLCJ2aXN1YWxpemF0aW9uIiwiZGVzY3JpcHRpb24iLCJraWJhbmFTYXZlZE9iamVjdE1ldGEiLCJzZWFyY2hTb3VyY2VKU09OIiwic2F2ZWRTZWFyY2hJZCIsInVpU3RhdGVKU09OIiwidmVyc2lvbiIsInZpc1N0YXRlIiwic2VhcmNoIiwiY29sdW1ucyIsImhpdHMiLCJzb3J0IiwiZGFzaGJvYXJkIiwib3B0aW9uc0pTT04iLCJwYW5lbHNKU09OIiwicmVmcmVzaEludGVydmFsIiwiZGlzcGxheSIsInBhdXNlIiwic2VjdGlvbiIsInZhbHVlIiwidGltZUZyb20iLCJ0aW1lUmVzdG9yZSIsInRpbWVUbyIsInVybCIsImFjY2Vzc0NvdW50IiwiYWNjZXNzRGF0ZSIsImNyZWF0ZURhdGUiLCJrZXl3b3JkIiwiaWdub3JlX2Fib3ZlIiwic2VydmVyIiwidXVpZCIsInRpbWVsaW9uX2NoYXJ0X2hlaWdodCIsInRpbWVsaW9uX2NvbHVtbnMiLCJ0aW1lbGlvbl9pbnRlcnZhbCIsInRpbWVsaW9uX290aGVyX2ludGVydmFsIiwidGltZWxpb25fcm93cyIsInRpbWVsaW9uX3NoZWV0IiwibnVtTGlua3MiLCJudW1WZXJ0aWNlcyIsIndzU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFXTyxNQUFNQSxzQkFBc0IsR0FBRztBQUNwQ0MsRUFBQUEsS0FBSyxFQUFFLENBRDZCO0FBRXBDQyxFQUFBQSxR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QUFFO0FBQ1BsRCxZQUFBQSxJQUFJLEVBQUU7QUFEQztBQXZCQztBQURLO0FBaE9UO0FBREo7QUFOMEIsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBLaWJhbmEgdGVtcGxhdGVcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5leHBvcnQgY29uc3QgcGx1Z2luUGxhdGZvcm1UZW1wbGF0ZSA9IHtcbiAgb3JkZXI6IDAsXG4gIHRlbXBsYXRlOiAnLmtpYmFuYSonLFxuICBzZXR0aW5nczoge1xuICAgICdpbmRleC5yZWZyZXNoX2ludGVydmFsJzogJzVzJ1xuICB9LFxuICBtYXBwaW5nczoge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogJ2tleXdvcmQnXG4gICAgICB9LFxuICAgICAgdXBkYXRlZF9hdDoge1xuICAgICAgICB0eXBlOiAnZGF0ZSdcbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGJ1aWxkTnVtOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnaW5kZXgtcGF0dGVybic6IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGZpZWxkRm9ybWF0TWFwOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnRlcnZhbE5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbm90RXhwYW5kYWJsZToge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2VGaWx0ZXJzOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVGaWVsZE5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZpc3VhbGl6YXRpb246IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNhdmVkU2VhcmNoSWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdWlTdGF0ZUpTT046IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmVyc2lvbjoge1xuICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXNTdGF0ZToge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBjb2x1bW5zOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpdHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHNlYXJjaFNvdXJjZUpTT046IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgdHlwZTogJ2tleXdvcmQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpdHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIHNlYXJjaFNvdXJjZUpTT046IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uc0pTT046IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFuZWxzSlNPTjoge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWZyZXNoSW50ZXJ2YWw6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXVzZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVGcm9tOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVSZXN0b3JlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVUbzoge1xuICAgICAgICAgICAgdHlwZTogJ2tleXdvcmQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1aVN0YXRlSlNPTjoge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGFjY2Vzc0NvdW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnbG9uZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjY2Vzc0RhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlRGF0ZToge1xuICAgICAgICAgICAgdHlwZTogJ2RhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICBrZXl3b3JkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgIGlnbm9yZV9hYm92ZTogMjA0OFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VydmVyOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICB1dWlkOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAndGltZWxpb24tc2hlZXQnOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaXRzOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVsaW9uX2NoYXJ0X2hlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aW1lbGlvbl9jb2x1bW5zOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVsaW9uX2ludGVydmFsOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVsaW9uX290aGVyX2ludGVydmFsOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpbWVsaW9uX3Jvd3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGltZWxpb25fc2hlZXQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmVyc2lvbjoge1xuICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ2dyYXBoLXdvcmtzcGFjZSc6IHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bUxpbmtzOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bVZlcnRpY2VzOiB7XG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZlcnNpb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd3NTdGF0ZToge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIl19