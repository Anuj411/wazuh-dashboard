"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statisticsTemplate = void 0;

/*
 * Wazuh app - Module for statistics template
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const statisticsTemplate = {
  order: 0,
  settings: {
    'index.refresh_interval': '5s'
  },
  "mappings": {
    "dynamic_templates": [{
      "string_as_keyword": {
        "match_mapping_type": "string",
        "mapping": {
          "type": "keyword"
        }
      }
    }],
    "properties": {
      "analysisd": {
        "properties": {
          "alerts_queue_size": {
            "type": "long"
          },
          "alerts_queue_usage": {
            "type": "long"
          },
          "alerts_written": {
            "type": "long"
          },
          "archives_queue_size": {
            "type": "long"
          },
          "archives_queue_usage": {
            "type": "long"
          },
          "dbsync_mdps": {
            "type": "long"
          },
          "dbsync_messages_dispatched": {
            "type": "long"
          },
          "dbsync_queue_size": {
            "type": "long"
          },
          "dbsync_queue_usage": {
            "type": "long"
          },
          "event_queue_size": {
            "type": "long"
          },
          "event_queue_usage": {
            "type": "long"
          },
          "events_dropped": {
            "type": "long"
          },
          "events_edps": {
            "type": "long"
          },
          "events_processed": {
            "type": "long"
          },
          "events_received": {
            "type": "long"
          },
          "firewall_queue_size": {
            "type": "long"
          },
          "firewall_queue_usage": {
            "type": "long"
          },
          "firewall_written": {
            "type": "long"
          },
          "fts_written": {
            "type": "long"
          },
          "hostinfo_edps": {
            "type": "long"
          },
          "hostinfo_events_decoded": {
            "type": "long"
          },
          "hostinfo_queue_size": {
            "type": "long"
          },
          "hostinfo_queue_usage": {
            "type": "long"
          },
          "other_events_decoded": {
            "type": "long"
          },
          "other_events_edps": {
            "type": "long"
          },
          "rootcheck_edps": {
            "type": "long"
          },
          "rootcheck_events_decoded": {
            "type": "long"
          },
          "rootcheck_queue_size": {
            "type": "long"
          },
          "rootcheck_queue_usage": {
            "type": "long"
          },
          "rule_matching_queue_size": {
            "type": "long"
          },
          "rule_matching_queue_usage": {
            "type": "long"
          },
          "sca_edps": {
            "type": "long"
          },
          "sca_events_decoded": {
            "type": "long"
          },
          "sca_queue_size": {
            "type": "long"
          },
          "sca_queue_usage": {
            "type": "long"
          },
          "statistical_queue_size": {
            "type": "long"
          },
          "statistical_queue_usage": {
            "type": "long"
          },
          "syscheck_edps": {
            "type": "long"
          },
          "syscheck_events_decoded": {
            "type": "long"
          },
          "syscheck_queue_size": {
            "type": "long"
          },
          "syscheck_queue_usage": {
            "type": "long"
          },
          "syscollector_edps": {
            "type": "long"
          },
          "syscollector_events_decoded": {
            "type": "long"
          },
          "syscollector_queue_size": {
            "type": "long"
          },
          "syscollector_queue_usage": {
            "type": "long"
          },
          "total_events_decoded": {
            "type": "long"
          },
          "upgrade_queue_size": {
            "type": "long"
          },
          "upgrade_queue_usage": {
            "type": "long"
          },
          "winevt_edps": {
            "type": "long"
          },
          "winevt_events_decoded": {
            "type": "long"
          },
          "winevt_queue_size": {
            "type": "long"
          },
          "winevt_queue_usage": {
            "type": "long"
          }
        }
      },
      "apiName": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "cluster": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "nodeName": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "name": {
        "type": "keyword"
      },
      "remoted": {
        "properties": {
          "ctrl_msg_count": {
            "type": "long"
          },
          "dequeued_after_close": {
            "type": "long"
          },
          "discarded_count": {
            "type": "long"
          },
          "evt_count": {
            "type": "long"
          },
          "msg_sent": {
            "type": "long"
          },
          "queue_size": {
            "type": "keyword"
          },
          "recv_bytes": {
            "type": "long"
          },
          "tcp_sessions": {
            "type": "long"
          },
          "total_queue_size": {
            "type": "long"
          }
        }
      },
      "status": {
        "type": "keyword"
      },
      "timestamp": {
        "type": "date",
        "format": "dateOptionalTime"
      }
    }
  }
};
exports.statisticsTemplate = statisticsTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MtdGVtcGxhdGUudHMiXSwibmFtZXMiOlsic3RhdGlzdGljc1RlbXBsYXRlIiwib3JkZXIiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVdPLE1BQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxFQUFBQSxLQUFLLEVBQUUsQ0FEeUI7QUFFaENDLEVBQUFBLFFBQVEsRUFBRTtBQUNSLDhCQUEwQjtBQURsQixHQUZzQjtBQUtoQyxjQUFhO0FBQ1gseUJBQXNCLENBQ3BCO0FBQ0UsMkJBQXNCO0FBQ3BCLDhCQUF1QixRQURIO0FBRXBCLG1CQUFZO0FBQ1Ysa0JBQVM7QUFEQztBQUZRO0FBRHhCLEtBRG9CLENBRFg7QUFXWCxrQkFBZTtBQUNiLG1CQUFjO0FBQ1osc0JBQWU7QUFDYiwrQkFBc0I7QUFDcEIsb0JBQVM7QUFEVyxXQURUO0FBSWIsZ0NBQXVCO0FBQ3JCLG9CQUFTO0FBRFksV0FKVjtBQU9iLDRCQUFtQjtBQUNqQixvQkFBUztBQURRLFdBUE47QUFVYixpQ0FBd0I7QUFDdEIsb0JBQVM7QUFEYSxXQVZYO0FBYWIsa0NBQXlCO0FBQ3ZCLG9CQUFTO0FBRGMsV0FiWjtBQWdCYix5QkFBZ0I7QUFDZCxvQkFBUztBQURLLFdBaEJIO0FBbUJiLHdDQUErQjtBQUM3QixvQkFBUztBQURvQixXQW5CbEI7QUFzQmIsK0JBQXNCO0FBQ3BCLG9CQUFTO0FBRFcsV0F0QlQ7QUF5QmIsZ0NBQXVCO0FBQ3JCLG9CQUFTO0FBRFksV0F6QlY7QUE0QmIsOEJBQXFCO0FBQ25CLG9CQUFTO0FBRFUsV0E1QlI7QUErQmIsK0JBQXNCO0FBQ3BCLG9CQUFTO0FBRFcsV0EvQlQ7QUFrQ2IsNEJBQW1CO0FBQ2pCLG9CQUFTO0FBRFEsV0FsQ047QUFxQ2IseUJBQWdCO0FBQ2Qsb0JBQVM7QUFESyxXQXJDSDtBQXdDYiw4QkFBcUI7QUFDbkIsb0JBQVM7QUFEVSxXQXhDUjtBQTJDYiw2QkFBb0I7QUFDbEIsb0JBQVM7QUFEUyxXQTNDUDtBQThDYixpQ0FBd0I7QUFDdEIsb0JBQVM7QUFEYSxXQTlDWDtBQWlEYixrQ0FBeUI7QUFDdkIsb0JBQVM7QUFEYyxXQWpEWjtBQW9EYiw4QkFBcUI7QUFDbkIsb0JBQVM7QUFEVSxXQXBEUjtBQXVEYix5QkFBZ0I7QUFDZCxvQkFBUztBQURLLFdBdkRIO0FBMERiLDJCQUFrQjtBQUNoQixvQkFBUztBQURPLFdBMURMO0FBNkRiLHFDQUE0QjtBQUMxQixvQkFBUztBQURpQixXQTdEZjtBQWdFYixpQ0FBd0I7QUFDdEIsb0JBQVM7QUFEYSxXQWhFWDtBQW1FYixrQ0FBeUI7QUFDdkIsb0JBQVM7QUFEYyxXQW5FWjtBQXNFYixrQ0FBeUI7QUFDdkIsb0JBQVM7QUFEYyxXQXRFWjtBQXlFYiwrQkFBc0I7QUFDcEIsb0JBQVM7QUFEVyxXQXpFVDtBQTRFYiw0QkFBbUI7QUFDakIsb0JBQVM7QUFEUSxXQTVFTjtBQStFYixzQ0FBNkI7QUFDM0Isb0JBQVM7QUFEa0IsV0EvRWhCO0FBa0ZiLGtDQUF5QjtBQUN2QixvQkFBUztBQURjLFdBbEZaO0FBcUZiLG1DQUEwQjtBQUN4QixvQkFBUztBQURlLFdBckZiO0FBd0ZiLHNDQUE2QjtBQUMzQixvQkFBUztBQURrQixXQXhGaEI7QUEyRmIsdUNBQThCO0FBQzVCLG9CQUFTO0FBRG1CLFdBM0ZqQjtBQThGYixzQkFBYTtBQUNYLG9CQUFTO0FBREUsV0E5RkE7QUFpR2IsZ0NBQXVCO0FBQ3JCLG9CQUFTO0FBRFksV0FqR1Y7QUFvR2IsNEJBQW1CO0FBQ2pCLG9CQUFTO0FBRFEsV0FwR047QUF1R2IsNkJBQW9CO0FBQ2xCLG9CQUFTO0FBRFMsV0F2R1A7QUEwR2Isb0NBQTJCO0FBQ3pCLG9CQUFTO0FBRGdCLFdBMUdkO0FBNkdiLHFDQUE0QjtBQUMxQixvQkFBUztBQURpQixXQTdHZjtBQWdIYiwyQkFBa0I7QUFDaEIsb0JBQVM7QUFETyxXQWhITDtBQW1IYixxQ0FBNEI7QUFDMUIsb0JBQVM7QUFEaUIsV0FuSGY7QUFzSGIsaUNBQXdCO0FBQ3RCLG9CQUFTO0FBRGEsV0F0SFg7QUF5SGIsa0NBQXlCO0FBQ3ZCLG9CQUFTO0FBRGMsV0F6SFo7QUE0SGIsK0JBQXNCO0FBQ3BCLG9CQUFTO0FBRFcsV0E1SFQ7QUErSGIseUNBQWdDO0FBQzlCLG9CQUFTO0FBRHFCLFdBL0huQjtBQWtJYixxQ0FBNEI7QUFDMUIsb0JBQVM7QUFEaUIsV0FsSWY7QUFxSWIsc0NBQTZCO0FBQzNCLG9CQUFTO0FBRGtCLFdBckloQjtBQXdJYixrQ0FBeUI7QUFDdkIsb0JBQVM7QUFEYyxXQXhJWjtBQTJJYixnQ0FBdUI7QUFDckIsb0JBQVM7QUFEWSxXQTNJVjtBQThJYixpQ0FBd0I7QUFDdEIsb0JBQVM7QUFEYSxXQTlJWDtBQWlKYix5QkFBZ0I7QUFDZCxvQkFBUztBQURLLFdBakpIO0FBb0piLG1DQUEwQjtBQUN4QixvQkFBUztBQURlLFdBcEpiO0FBdUpiLCtCQUFzQjtBQUNwQixvQkFBUztBQURXLFdBdkpUO0FBMEpiLGdDQUF1QjtBQUNyQixvQkFBUztBQURZO0FBMUpWO0FBREgsT0FERDtBQWlLYixpQkFBWTtBQUNWLGdCQUFTLE1BREM7QUFFVixrQkFBVztBQUNULHFCQUFZO0FBQ1Ysb0JBQVMsU0FEQztBQUVWLDRCQUFpQjtBQUZQO0FBREg7QUFGRCxPQWpLQztBQTBLYixpQkFBWTtBQUNWLGdCQUFTLE1BREM7QUFFVixrQkFBVztBQUNULHFCQUFZO0FBQ1Ysb0JBQVMsU0FEQztBQUVWLDRCQUFpQjtBQUZQO0FBREg7QUFGRCxPQTFLQztBQW1MYixrQkFBYTtBQUNYLGdCQUFTLE1BREU7QUFFWCxrQkFBVztBQUNULHFCQUFZO0FBQ1Ysb0JBQVMsU0FEQztBQUVWLDRCQUFpQjtBQUZQO0FBREg7QUFGQSxPQW5MQTtBQTRMYixjQUFTO0FBQ1AsZ0JBQVM7QUFERixPQTVMSTtBQStMYixpQkFBWTtBQUNWLHNCQUFlO0FBQ2IsNEJBQW1CO0FBQ2pCLG9CQUFTO0FBRFEsV0FETjtBQUliLGtDQUF5QjtBQUN2QixvQkFBUztBQURjLFdBSlo7QUFPYiw2QkFBb0I7QUFDbEIsb0JBQVM7QUFEUyxXQVBQO0FBVWIsdUJBQWM7QUFDWixvQkFBUztBQURHLFdBVkQ7QUFhYixzQkFBYTtBQUNYLG9CQUFTO0FBREUsV0FiQTtBQWdCYix3QkFBZTtBQUNiLG9CQUFTO0FBREksV0FoQkY7QUFtQmIsd0JBQWU7QUFDYixvQkFBUztBQURJLFdBbkJGO0FBc0JiLDBCQUFpQjtBQUNmLG9CQUFTO0FBRE0sV0F0Qko7QUF5QmIsOEJBQXFCO0FBQ25CLG9CQUFTO0FBRFU7QUF6QlI7QUFETCxPQS9MQztBQThOYixnQkFBVztBQUNULGdCQUFTO0FBREEsT0E5TkU7QUFpT2IsbUJBQWM7QUFDWixnQkFBUyxNQURHO0FBRVosa0JBQVc7QUFGQztBQWpPRDtBQVhKO0FBTG1CLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3Igc3RhdGlzdGljcyB0ZW1wbGF0ZVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzdGF0aXN0aWNzVGVtcGxhdGUgPSB7XG4gIG9yZGVyOiAwLFxuICBzZXR0aW5nczoge1xuICAgICdpbmRleC5yZWZyZXNoX2ludGVydmFsJzogJzVzJ1xuICB9LFxuICBcIm1hcHBpbmdzXCIgOiB7XG4gICAgXCJkeW5hbWljX3RlbXBsYXRlc1wiIDogW1xuICAgICAge1xuICAgICAgICBcInN0cmluZ19hc19rZXl3b3JkXCIgOiB7XG4gICAgICAgICAgXCJtYXRjaF9tYXBwaW5nX3R5cGVcIiA6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJtYXBwaW5nXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwia2V5d29yZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBcInByb3BlcnRpZXNcIiA6IHtcbiAgICAgIFwiYW5hbHlzaXNkXCIgOiB7XG4gICAgICAgIFwicHJvcGVydGllc1wiIDoge1xuICAgICAgICAgIFwiYWxlcnRzX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYWxlcnRzX3F1ZXVlX3VzYWdlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImFsZXJ0c193cml0dGVuXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImFyY2hpdmVzX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXJjaGl2ZXNfcXVldWVfdXNhZ2VcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGJzeW5jX21kcHNcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGJzeW5jX21lc3NhZ2VzX2Rpc3BhdGNoZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGJzeW5jX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGJzeW5jX3F1ZXVlX3VzYWdlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV2ZW50X3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRfcXVldWVfdXNhZ2VcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRzX2Ryb3BwZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRzX2VkcHNcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRzX3Byb2Nlc3NlZFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldmVudHNfcmVjZWl2ZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZmlyZXdhbGxfcXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJmaXJld2FsbF9xdWV1ZV91c2FnZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJmaXJld2FsbF93cml0dGVuXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZ0c193cml0dGVuXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhvc3RpbmZvX2VkcHNcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaG9zdGluZm9fZXZlbnRzX2RlY29kZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaG9zdGluZm9fcXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJob3N0aW5mb19xdWV1ZV91c2FnZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvdGhlcl9ldmVudHNfZGVjb2RlZFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvdGhlcl9ldmVudHNfZWRwc1wiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyb290Y2hlY2tfZWRwc1wiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyb290Y2hlY2tfZXZlbnRzX2RlY29kZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicm9vdGNoZWNrX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicm9vdGNoZWNrX3F1ZXVlX3VzYWdlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJ1bGVfbWF0Y2hpbmdfcXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJydWxlX21hdGNoaW5nX3F1ZXVlX3VzYWdlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNjYV9lZHBzXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNjYV9ldmVudHNfZGVjb2RlZFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzY2FfcXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzY2FfcXVldWVfdXNhZ2VcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RhdGlzdGljYWxfcXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdGF0aXN0aWNhbF9xdWV1ZV91c2FnZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeXNjaGVja19lZHBzXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5c2NoZWNrX2V2ZW50c19kZWNvZGVkXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5c2NoZWNrX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3lzY2hlY2tfcXVldWVfdXNhZ2VcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3lzY29sbGVjdG9yX2VkcHNcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3lzY29sbGVjdG9yX2V2ZW50c19kZWNvZGVkXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5c2NvbGxlY3Rvcl9xdWV1ZV9zaXplXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5c2NvbGxlY3Rvcl9xdWV1ZV91c2FnZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b3RhbF9ldmVudHNfZGVjb2RlZFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGdyYWRlX3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBncmFkZV9xdWV1ZV91c2FnZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ3aW5ldnRfZWRwc1wiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ3aW5ldnRfZXZlbnRzX2RlY29kZWRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwid2luZXZ0X3F1ZXVlX3NpemVcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwid2luZXZ0X3F1ZXVlX3VzYWdlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJhcGlOYW1lXCIgOiB7XG4gICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsXG4gICAgICAgIFwiZmllbGRzXCIgOiB7XG4gICAgICAgICAgXCJrZXl3b3JkXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwia2V5d29yZFwiLFxuICAgICAgICAgICAgXCJpZ25vcmVfYWJvdmVcIiA6IDI1NlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY2x1c3RlclwiIDoge1xuICAgICAgICBcInR5cGVcIiA6IFwidGV4dFwiLFxuICAgICAgICBcImZpZWxkc1wiIDoge1xuICAgICAgICAgIFwia2V5d29yZFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImtleXdvcmRcIixcbiAgICAgICAgICAgIFwiaWdub3JlX2Fib3ZlXCIgOiAyNTZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vZGVOYW1lXCIgOiB7XG4gICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsXG4gICAgICAgIFwiZmllbGRzXCIgOiB7XG4gICAgICAgICAgXCJrZXl3b3JkXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwia2V5d29yZFwiLFxuICAgICAgICAgICAgXCJpZ25vcmVfYWJvdmVcIiA6IDI1NlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibmFtZVwiIDoge1xuICAgICAgICBcInR5cGVcIiA6IFwia2V5d29yZFwiXG4gICAgICB9LCBcbiAgICAgIFwicmVtb3RlZFwiIDoge1xuICAgICAgICBcInByb3BlcnRpZXNcIiA6IHtcbiAgICAgICAgICBcImN0cmxfbXNnX2NvdW50XCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlcXVldWVkX2FmdGVyX2Nsb3NlXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRlZF9jb3VudFwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJldnRfY291bnRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibXNnX3NlbnRcIiA6IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJsb25nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVldWVfc2l6ZVwiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImtleXdvcmRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWN2X2J5dGVzXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRjcF9zZXNzaW9uc1wiIDoge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImxvbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b3RhbF9xdWV1ZV9zaXplXCIgOiB7XG4gICAgICAgICAgICBcInR5cGVcIiA6IFwibG9uZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdGF0dXNcIiA6IHtcbiAgICAgICAgXCJ0eXBlXCIgOiBcImtleXdvcmRcIlxuICAgICAgfSxcbiAgICAgIFwidGltZXN0YW1wXCIgOiB7XG4gICAgICAgIFwidHlwZVwiIDogXCJkYXRlXCIsXG4gICAgICAgIFwiZm9ybWF0XCIgOiBcImRhdGVPcHRpb25hbFRpbWVcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiJdfQ==