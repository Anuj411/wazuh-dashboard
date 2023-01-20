"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Cluster monitoring visualizations
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
  _id: 'Wazuh-App-Statistics-remoted-Recv-bytes',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics remoted Recv bytes',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics remoted Recv bytes',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.recv_bytes, q='*').label(recv_bytes),.es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.recv_bytes, q='*').trend().label(Trend).lines(width=1.5)",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-remoted-event-count',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics remoted event count',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics remoted event count',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.evt_count, q='*').label(evt_count),.es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.evt_count, q='*').trend().label(Trend).lines(width=1.5)",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-remoted-messages',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics remoted messages',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics remoted messages',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.msg_sent, q='*').label(msg_sent),.es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.ctrl_msg_count, q='*').label(ctrl_msg_count),.es(index=wazuh-statistics-*,timefield=timestamp,metric=avg:remoted.discarded_count).label(discarded_count),.es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:remoted.dequeued_after_close, q='*').label(dequeued_after_close)",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-remoted-tcp-sessions',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics remoted tcp sessions',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics remoted tcp sessions',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:remoted.tcp_sessions, q='*').label(tcp_sessions)",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Overview-Events-Decoded',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Overview events decoded',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Overview events decode',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_events_decoded, q='*').label('Syscheck Events Decoded').bars(stack=true), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck, q='*').label('Syscollector Events Decoded').bars(stack=true), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_events_decoded, q='*').label('Rootcheck Events Decoded').bars(stack=true), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_events_decoded, q='*').label('SCA Events Decoded').bars(stack=true), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_events_decoded, q='*').label('Other Events Decoded').bars(stack=true), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_events_decoded, q='*').label('Host Info Events Decoded').bars(stack=true)",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Syscheck',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Syscheck',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Syscheck',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_events_decoded, q='*').label('Syscheck Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_edps, q='*').label('Syscheck EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscheck_queue_usage, q='*') ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Syscollector',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Syscollector',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Syscollector',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_events_decoded, q='*').label('syscollector Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_edps, q='*').label('syscollector EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.syscollector_queue_usage, q='*') ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Rootcheck',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Rootcheck',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Rootcheck',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_events_decoded, q='*').label('Rootcheck Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_edps, q='*').label('Rootcheck EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rootcheck_queue_usage) ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-SCA',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics SCA',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics SCA',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_events_decoded, q='*').label('SCA Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_edps, q='*').label('SCA EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.sca_queue_usage, q='*') ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-HostInfo',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics HostInfo',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics HostInfo',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_events_decoded, q='*').label('Host info Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_edps, q='*').label('Host info EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.hostinfo_queue_usage, q='*') ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Other',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Other',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Other',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_events_decoded, q='*').label('Host info Events Decoded'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_edps, q='*').label('Host info EDPS'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_usage, q='*') ).label('Queue Usage').color('green'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_usage, q='*').if(gte, 0.7, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_usage, q='*') ), null) .color('#FFCC11').label('Queue Usage 70%+'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_usage, q='*').if(gte, 0.9, .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.other_queue_usage, q='*') ), null) .color('red').label('Queue Usage 90%+')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Events-By-Node',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Events by Node',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Events by Node',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_processed, q='*') .label('Total'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_processed, q='*', split=nodeName.keyword:5).label('Events processed by Node: $1','^.* > nodeName.keyword:(\\\\S+) > .*')",
        interval: '5m'
      },
      aggs: []
    }),
    visStateByNode: JSON.stringify({
      title: 'Wazuh App Statistics Events by Node',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_processed, q='*') .label('Events processed by Node: NODE_NAME')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Events-Dropped-By-Node',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Events Dropped by Node',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Events Dropped by Node',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_dropped, q='*') .label('Total'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_dropped, q='*', split=nodeName.keyword:5).label('Events dropped by Node: $1','^.* > nodeName.keyword:(\\\\S+) > .*')",
        interval: '5m'
      },
      aggs: []
    }),
    visStateByNode: JSON.stringify({
      title: 'Wazuh App Statistics Events by Node',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=sum:analysisd.events_dropped, q='*') .label('Events dropped by Node: NODE_NAME')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
        filter: [],
        query: {
          query: '',
          language: 'lucene'
        }
      })
    }
  }
}, {
  _id: 'Wazuh-App-Statistics-Analysisd-Queues-Usage',
  _type: 'visualization',
  _source: {
    title: 'Wazuh App Statistics Queues Usage',
    visState: JSON.stringify({
      title: 'Wazuh App Statistics Queues Usage',
      type: 'timelion',
      params: {
        expression: ".es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.event_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.event_queue_usage, q='*') ).label('Event queue usage'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rule_matching_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.rule_matching_queue_usage, q='*') ).label('Rule matching queue usage'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.alerts_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.alerts_queue_usage, q='*') ).label('Alerts log queue usage'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.firewall_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.firewall_queue_usage, q='*') ).label('Firewall log queue usage'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.statistical_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.statistical_queue_usage, q='*') ).label('Statistical log queue usage'), .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.archives_queue_size, q='*').multiply( .es(index=wazuh-statistics-*, timefield=timestamp,metric=avg:analysisd.archives_queue_usage, q='*') ).label('Statistical log queue usage')",
        interval: '5m'
      },
      aggs: []
    }),
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON: JSON.stringify({
        index: 'wazuh-statistics-*',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MudHMiXSwibmFtZXMiOlsiX2lkIiwiX3R5cGUiLCJfc291cmNlIiwidGl0bGUiLCJ2aXNTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwicGFyYW1zIiwiZXhwcmVzc2lvbiIsImludGVydmFsIiwiYWdncyIsInVpU3RhdGVKU09OIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwia2liYW5hU2F2ZWRPYmplY3RNZXRhIiwic2VhcmNoU291cmNlSlNPTiIsImluZGV4IiwiZmlsdGVyIiwicXVlcnkiLCJsYW5ndWFnZSIsInZpc1N0YXRlQnlOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O2VBV2UsQ0FDYjtBQUNFQSxFQUFBQSxHQUFHLEVBQUUseUNBRFA7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLGVBRlQ7QUFHRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSx5Q0FEQTtBQUVQQyxJQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCSCxNQUFBQSxLQUFLLEVBQUUseUNBRGdCO0FBRXZCSSxNQUFBQSxJQUFJLEVBQUUsVUFGaUI7QUFHdkJDLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxVQUFVLEVBQ1IseU9BRkk7QUFHTkMsUUFBQUEsUUFBUSxFQUFFO0FBSEosT0FIZTtBQVF2QkMsTUFBQUEsSUFBSSxFQUFFO0FBUmlCLEtBQWYsQ0FGSDtBQVlQQyxJQUFBQSxXQUFXLEVBQUUsSUFaTjtBQWFQQyxJQUFBQSxXQUFXLEVBQUUsRUFiTjtBQWNQQyxJQUFBQSxPQUFPLEVBQUUsQ0FkRjtBQWVQQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUNyQkMsTUFBQUEsZ0JBQWdCLEVBQUVYLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQy9CVyxRQUFBQSxLQUFLLEVBQUUsb0JBRHdCO0FBRS9CQyxRQUFBQSxNQUFNLEVBQUUsRUFGdUI7QUFHL0JDLFFBQUFBLEtBQUssRUFB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LFFBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFVBQUFBLFFBQVEsRUFBRTtBQUF2QjtBQUh3QixPQUFmO0FBREc7QUFmaEI7QUFIWCxDQXJYYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIENsdXN0ZXIgbW9uaXRvcmluZyB2aXN1YWxpemF0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLXJlbW90ZWQtUmVjdi1ieXRlcycsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIHJlbW90ZWQgUmVjdiBieXRlcycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIHJlbW90ZWQgUmVjdiBieXRlcycsXG4gICAgICAgIHR5cGU6ICd0aW1lbGlvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICBcIi5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzpyZW1vdGVkLnJlY3ZfYnl0ZXMsIHE9JyonKS5sYWJlbChyZWN2X2J5dGVzKSwuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6cmVtb3RlZC5yZWN2X2J5dGVzLCBxPScqJykudHJlbmQoKS5sYWJlbChUcmVuZCkubGluZXMod2lkdGg9MS41KVwiLFxuICAgICAgICAgIGludGVydmFsOiAnNW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLXN0YXRpc3RpY3MtKicsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLXJlbW90ZWQtZXZlbnQtY291bnQnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyByZW1vdGVkIGV2ZW50IGNvdW50JyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgcmVtb3RlZCBldmVudCBjb3VudCcsXG4gICAgICAgIHR5cGU6ICd0aW1lbGlvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICBcIi5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzpyZW1vdGVkLmV2dF9jb3VudCwgcT0nKicpLmxhYmVsKGV2dF9jb3VudCksLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOnJlbW90ZWQuZXZ0X2NvdW50LCBxPScqJykudHJlbmQoKS5sYWJlbChUcmVuZCkubGluZXMod2lkdGg9MS41KVwiLFxuICAgICAgICAgIGludGVydmFsOiAnNW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLXN0YXRpc3RpY3MtKicsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLXJlbW90ZWQtbWVzc2FnZXMnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyByZW1vdGVkIG1lc3NhZ2VzJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgcmVtb3RlZCBtZXNzYWdlcycsXG4gICAgICAgIHR5cGU6ICd0aW1lbGlvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICBcIi5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzpyZW1vdGVkLm1zZ19zZW50LCBxPScqJykubGFiZWwobXNnX3NlbnQpLC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzpyZW1vdGVkLmN0cmxfbXNnX2NvdW50LCBxPScqJykubGFiZWwoY3RybF9tc2dfY291bnQpLC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOnJlbW90ZWQuZGlzY2FyZGVkX2NvdW50KS5sYWJlbChkaXNjYXJkZWRfY291bnQpLC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzpyZW1vdGVkLmRlcXVldWVkX2FmdGVyX2Nsb3NlLCBxPScqJykubGFiZWwoZGVxdWV1ZWRfYWZ0ZXJfY2xvc2UpXCIsXG4gICAgICAgICAgaW50ZXJ2YWw6ICc1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtc3RhdGlzdGljcy0qJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLVN0YXRpc3RpY3MtcmVtb3RlZC10Y3Atc2Vzc2lvbnMnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyByZW1vdGVkIHRjcCBzZXNzaW9ucycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIHJlbW90ZWQgdGNwIHNlc3Npb25zJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9c3VtOnJlbW90ZWQudGNwX3Nlc3Npb25zLCBxPScqJykubGFiZWwodGNwX3Nlc3Npb25zKVwiLFxuICAgICAgICAgIGludGVydmFsOiAnNW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLXN0YXRpc3RpY3MtKicsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLUFuYWx5c2lzZC1PdmVydmlldy1FdmVudHMtRGVjb2RlZCcsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIE92ZXJ2aWV3IGV2ZW50cyBkZWNvZGVkJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgT3ZlcnZpZXcgZXZlbnRzIGRlY29kZScsXG4gICAgICAgIHR5cGU6ICd0aW1lbGlvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICBcIi5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY2hlY2tfZXZlbnRzX2RlY29kZWQsIHE9JyonKS5sYWJlbCgnU3lzY2hlY2sgRXZlbnRzIERlY29kZWQnKS5iYXJzKHN0YWNrPXRydWUpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NoZWNrLCBxPScqJykubGFiZWwoJ1N5c2NvbGxlY3RvciBFdmVudHMgRGVjb2RlZCcpLmJhcnMoc3RhY2s9dHJ1ZSksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qucm9vdGNoZWNrX2V2ZW50c19kZWNvZGVkLCBxPScqJykubGFiZWwoJ1Jvb3RjaGVjayBFdmVudHMgRGVjb2RlZCcpLmJhcnMoc3RhY2s9dHJ1ZSksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc2NhX2V2ZW50c19kZWNvZGVkLCBxPScqJykubGFiZWwoJ1NDQSBFdmVudHMgRGVjb2RlZCcpLmJhcnMoc3RhY2s9dHJ1ZSksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qub3RoZXJfZXZlbnRzX2RlY29kZWQsIHE9JyonKS5sYWJlbCgnT3RoZXIgRXZlbnRzIERlY29kZWQnKS5iYXJzKHN0YWNrPXRydWUpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLmhvc3RpbmZvX2V2ZW50c19kZWNvZGVkLCBxPScqJykubGFiZWwoJ0hvc3QgSW5mbyBFdmVudHMgRGVjb2RlZCcpLmJhcnMoc3RhY2s9dHJ1ZSlcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtU3RhdGlzdGljcy1BbmFseXNpc2QtU3lzY2hlY2snLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBTeXNjaGVjaycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIFN5c2NoZWNrJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjaGVja19ldmVudHNfZGVjb2RlZCwgcT0nKicpLmxhYmVsKCdTeXNjaGVjayBFdmVudHMgRGVjb2RlZCcpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NoZWNrX2VkcHMsIHE9JyonKS5sYWJlbCgnU3lzY2hlY2sgRURQUycpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NoZWNrX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjaGVja19xdWV1ZV91c2FnZSwgcT0nKicpICkubGFiZWwoJ1F1ZXVlIFVzYWdlJykuY29sb3IoJ2dyZWVuJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY2hlY2tfcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuNywgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjaGVja19xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY2hlY2tfcXVldWVfdXNhZ2UsIHE9JyonKSApLCBudWxsKSAuY29sb3IoJyNGRkNDMTEnKS5sYWJlbCgnUXVldWUgVXNhZ2UgNzAlKycpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NoZWNrX3F1ZXVlX3VzYWdlLCBxPScqJykuaWYoZ3RlLCAwLjksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY2hlY2tfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NoZWNrX3F1ZXVlX3VzYWdlLCBxPScqJykgKSwgbnVsbCkgLmNvbG9yKCdyZWQnKS5sYWJlbCgnUXVldWUgVXNhZ2UgOTAlKycpXCIsXG4gICAgICAgICAgaW50ZXJ2YWw6ICc1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtdLFxuICAgICAgfSksXG4gICAgICB1aVN0YXRlSlNPTjogJ3t9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBraWJhbmFTYXZlZE9iamVjdE1ldGE6IHtcbiAgICAgICAgc2VhcmNoU291cmNlSlNPTjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGluZGV4OiAnd2F6dWgtc3RhdGlzdGljcy0qJyxcbiAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiAnJywgbGFuZ3VhZ2U6ICdsdWNlbmUnIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiAnV2F6dWgtQXBwLVN0YXRpc3RpY3MtQW5hbHlzaXNkLVN5c2NvbGxlY3RvcicsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIFN5c2NvbGxlY3RvcicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIFN5c2NvbGxlY3RvcicsXG4gICAgICAgIHR5cGU6ICd0aW1lbGlvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICBcIi5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY29sbGVjdG9yX2V2ZW50c19kZWNvZGVkLCBxPScqJykubGFiZWwoJ3N5c2NvbGxlY3RvciBFdmVudHMgRGVjb2RlZCcpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NvbGxlY3Rvcl9lZHBzLCBxPScqJykubGFiZWwoJ3N5c2NvbGxlY3RvciBFRFBTJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY29sbGVjdG9yX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjb2xsZWN0b3JfcXVldWVfdXNhZ2UsIHE9JyonKSApLmxhYmVsKCdRdWV1ZSBVc2FnZScpLmNvbG9yKCdncmVlbicpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NvbGxlY3Rvcl9xdWV1ZV91c2FnZSwgcT0nKicpLmlmKGd0ZSwgMC43LCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NvbGxlY3Rvcl9xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3lzY29sbGVjdG9yX3F1ZXVlX3VzYWdlLCBxPScqJykgKSwgbnVsbCkgLmNvbG9yKCcjRkZDQzExJykubGFiZWwoJ1F1ZXVlIFVzYWdlIDcwJSsnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjb2xsZWN0b3JfcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuOSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zeXNjb2xsZWN0b3JfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN5c2NvbGxlY3Rvcl9xdWV1ZV91c2FnZSwgcT0nKicpICksIG51bGwpIC5jb2xvcigncmVkJykubGFiZWwoJ1F1ZXVlIFVzYWdlIDkwJSsnKVwiLFxuICAgICAgICAgIGludGVydmFsOiAnNW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLXN0YXRpc3RpY3MtKicsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLUFuYWx5c2lzZC1Sb290Y2hlY2snLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBSb290Y2hlY2snLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBSb290Y2hlY2snLFxuICAgICAgICB0eXBlOiAndGltZWxpb24nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgXCIuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnJvb3RjaGVja19ldmVudHNfZGVjb2RlZCwgcT0nKicpLmxhYmVsKCdSb290Y2hlY2sgRXZlbnRzIERlY29kZWQnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5yb290Y2hlY2tfZWRwcywgcT0nKicpLmxhYmVsKCdSb290Y2hlY2sgRURQUycpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnJvb3RjaGVja19xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qucm9vdGNoZWNrX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnUXVldWUgVXNhZ2UnKS5jb2xvcignZ3JlZW4nKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5yb290Y2hlY2tfcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuNywgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5yb290Y2hlY2tfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnJvb3RjaGVja19xdWV1ZV91c2FnZSwgcT0nKicpICksIG51bGwpIC5jb2xvcignI0ZGQ0MxMScpLmxhYmVsKCdRdWV1ZSBVc2FnZSA3MCUrJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qucm9vdGNoZWNrX3F1ZXVlX3VzYWdlLCBxPScqJykuaWYoZ3RlLCAwLjksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qucm9vdGNoZWNrX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5yb290Y2hlY2tfcXVldWVfdXNhZ2UpICksIG51bGwpIC5jb2xvcigncmVkJykubGFiZWwoJ1F1ZXVlIFVzYWdlIDkwJSsnKVwiLFxuICAgICAgICAgIGludGVydmFsOiAnNW0nLFxuICAgICAgICB9LFxuICAgICAgICBhZ2dzOiBbXSxcbiAgICAgIH0pLFxuICAgICAgdWlTdGF0ZUpTT046ICd7fScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB2ZXJzaW9uOiAxLFxuICAgICAga2liYW5hU2F2ZWRPYmplY3RNZXRhOiB7XG4gICAgICAgIHNlYXJjaFNvdXJjZUpTT046IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpbmRleDogJ3dhenVoLXN0YXRpc3RpY3MtKicsXG4gICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgICBxdWVyeTogeyBxdWVyeTogJycsIGxhbmd1YWdlOiAnbHVjZW5lJyB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLUFuYWx5c2lzZC1TQ0EnLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBTQ0EnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBTQ0EnLFxuICAgICAgICB0eXBlOiAndGltZWxpb24nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgXCIuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnNjYV9ldmVudHNfZGVjb2RlZCwgcT0nKicpLmxhYmVsKCdTQ0EgRXZlbnRzIERlY29kZWQnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zY2FfZWRwcywgcT0nKicpLmxhYmVsKCdTQ0EgRURQUycpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnNjYV9xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc2NhX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnUXVldWUgVXNhZ2UnKS5jb2xvcignZ3JlZW4nKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zY2FfcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuNywgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zY2FfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnNjYV9xdWV1ZV91c2FnZSwgcT0nKicpICksIG51bGwpIC5jb2xvcignI0ZGQ0MxMScpLmxhYmVsKCdRdWV1ZSBVc2FnZSA3MCUrJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc2NhX3F1ZXVlX3VzYWdlLCBxPScqJykuaWYoZ3RlLCAwLjksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc2NhX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5zY2FfcXVldWVfdXNhZ2UsIHE9JyonKSApLCBudWxsKSAuY29sb3IoJ3JlZCcpLmxhYmVsKCdRdWV1ZSBVc2FnZSA5MCUrJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtU3RhdGlzdGljcy1BbmFseXNpc2QtSG9zdEluZm8nLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBIb3N0SW5mbycsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIEhvc3RJbmZvJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ob3N0aW5mb19ldmVudHNfZGVjb2RlZCwgcT0nKicpLmxhYmVsKCdIb3N0IGluZm8gRXZlbnRzIERlY29kZWQnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ob3N0aW5mb19lZHBzLCBxPScqJykubGFiZWwoJ0hvc3QgaW5mbyBFRFBTJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuaG9zdGluZm9fcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLmhvc3RpbmZvX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnUXVldWUgVXNhZ2UnKS5jb2xvcignZ3JlZW4nKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ob3N0aW5mb19xdWV1ZV91c2FnZSwgcT0nKicpLmlmKGd0ZSwgMC43LCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLmhvc3RpbmZvX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ob3N0aW5mb19xdWV1ZV91c2FnZSwgcT0nKicpICksIG51bGwpIC5jb2xvcignI0ZGQ0MxMScpLmxhYmVsKCdRdWV1ZSBVc2FnZSA3MCUrJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuaG9zdGluZm9fcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuOSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ob3N0aW5mb19xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuaG9zdGluZm9fcXVldWVfdXNhZ2UsIHE9JyonKSApLCBudWxsKSAuY29sb3IoJ3JlZCcpLmxhYmVsKCdRdWV1ZSBVc2FnZSA5MCUrJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtU3RhdGlzdGljcy1BbmFseXNpc2QtT3RoZXInLFxuICAgIF90eXBlOiAndmlzdWFsaXphdGlvbicsXG4gICAgX3NvdXJjZToge1xuICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBPdGhlcicsXG4gICAgICB2aXNTdGF0ZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIE90aGVyJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5vdGhlcl9ldmVudHNfZGVjb2RlZCwgcT0nKicpLmxhYmVsKCdIb3N0IGluZm8gRXZlbnRzIERlY29kZWQnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5vdGhlcl9lZHBzLCBxPScqJykubGFiZWwoJ0hvc3QgaW5mbyBFRFBTJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qub3RoZXJfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLm90aGVyX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnUXVldWUgVXNhZ2UnKS5jb2xvcignZ3JlZW4nKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5vdGhlcl9xdWV1ZV91c2FnZSwgcT0nKicpLmlmKGd0ZSwgMC43LCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLm90aGVyX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5vdGhlcl9xdWV1ZV91c2FnZSwgcT0nKicpICksIG51bGwpIC5jb2xvcignI0ZGQ0MxMScpLmxhYmVsKCdRdWV1ZSBVc2FnZSA3MCUrJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qub3RoZXJfcXVldWVfdXNhZ2UsIHE9JyonKS5pZihndGUsIDAuOSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5vdGhlcl9xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Qub3RoZXJfcXVldWVfdXNhZ2UsIHE9JyonKSApLCBudWxsKSAuY29sb3IoJ3JlZCcpLmxhYmVsKCdRdWV1ZSBVc2FnZSA5MCUrJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIF9pZDogJ1dhenVoLUFwcC1TdGF0aXN0aWNzLUFuYWx5c2lzZC1FdmVudHMtQnktTm9kZScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIEV2ZW50cyBieSBOb2RlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgRXZlbnRzIGJ5IE5vZGUnLFxuICAgICAgICB0eXBlOiAndGltZWxpb24nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgXCIuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1zdW06YW5hbHlzaXNkLmV2ZW50c19wcm9jZXNzZWQsIHE9JyonKSAubGFiZWwoJ1RvdGFsJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPXN1bTphbmFseXNpc2QuZXZlbnRzX3Byb2Nlc3NlZCwgcT0nKicsIHNwbGl0PW5vZGVOYW1lLmtleXdvcmQ6NSkubGFiZWwoJ0V2ZW50cyBwcm9jZXNzZWQgYnkgTm9kZTogJDEnLCdeLiogPiBub2RlTmFtZS5rZXl3b3JkOihcXFxcXFxcXFMrKSA+IC4qJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHZpc1N0YXRlQnlOb2RlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgRXZlbnRzIGJ5IE5vZGUnLFxuICAgICAgICB0eXBlOiAndGltZWxpb24nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgXCIuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1zdW06YW5hbHlzaXNkLmV2ZW50c19wcm9jZXNzZWQsIHE9JyonKSAubGFiZWwoJ0V2ZW50cyBwcm9jZXNzZWQgYnkgTm9kZTogTk9ERV9OQU1FJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtU3RhdGlzdGljcy1BbmFseXNpc2QtRXZlbnRzLURyb3BwZWQtQnktTm9kZScsXG4gICAgX3R5cGU6ICd2aXN1YWxpemF0aW9uJyxcbiAgICBfc291cmNlOiB7XG4gICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIEV2ZW50cyBEcm9wcGVkIGJ5IE5vZGUnLFxuICAgICAgdmlzU3RhdGU6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6ICdXYXp1aCBBcHAgU3RhdGlzdGljcyBFdmVudHMgRHJvcHBlZCBieSBOb2RlJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9c3VtOmFuYWx5c2lzZC5ldmVudHNfZHJvcHBlZCwgcT0nKicpIC5sYWJlbCgnVG90YWwnKSwgLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9c3VtOmFuYWx5c2lzZC5ldmVudHNfZHJvcHBlZCwgcT0nKicsIHNwbGl0PW5vZGVOYW1lLmtleXdvcmQ6NSkubGFiZWwoJ0V2ZW50cyBkcm9wcGVkIGJ5IE5vZGU6ICQxJywnXi4qID4gbm9kZU5hbWUua2V5d29yZDooXFxcXFxcXFxTKykgPiAuKicpXCIsXG4gICAgICAgICAgaW50ZXJ2YWw6ICc1bScsXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3M6IFtdLFxuICAgICAgfSksXG4gICAgICB2aXNTdGF0ZUJ5Tm9kZTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZTogJ1dhenVoIEFwcCBTdGF0aXN0aWNzIEV2ZW50cyBieSBOb2RlJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9c3VtOmFuYWx5c2lzZC5ldmVudHNfZHJvcHBlZCwgcT0nKicpIC5sYWJlbCgnRXZlbnRzIGRyb3BwZWQgYnkgTm9kZTogTk9ERV9OQU1FJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6ICdXYXp1aC1BcHAtU3RhdGlzdGljcy1BbmFseXNpc2QtUXVldWVzLVVzYWdlJyxcbiAgICBfdHlwZTogJ3Zpc3VhbGl6YXRpb24nLFxuICAgIF9zb3VyY2U6IHtcbiAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgUXVldWVzIFVzYWdlJyxcbiAgICAgIHZpc1N0YXRlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiAnV2F6dWggQXBwIFN0YXRpc3RpY3MgUXVldWVzIFVzYWdlJyxcbiAgICAgICAgdHlwZTogJ3RpbWVsaW9uJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgIFwiLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5ldmVudF9xdWV1ZV9zaXplLCBxPScqJykubXVsdGlwbHkoIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuZXZlbnRfcXVldWVfdXNhZ2UsIHE9JyonKSApLmxhYmVsKCdFdmVudCBxdWV1ZSB1c2FnZScpLCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnJ1bGVfbWF0Y2hpbmdfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnJ1bGVfbWF0Y2hpbmdfcXVldWVfdXNhZ2UsIHE9JyonKSApLmxhYmVsKCdSdWxlIG1hdGNoaW5nIHF1ZXVlIHVzYWdlJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuYWxlcnRzX3F1ZXVlX3NpemUsIHE9JyonKS5tdWx0aXBseSggLmVzKGluZGV4PXdhenVoLXN0YXRpc3RpY3MtKiwgdGltZWZpZWxkPXRpbWVzdGFtcCxtZXRyaWM9YXZnOmFuYWx5c2lzZC5hbGVydHNfcXVldWVfdXNhZ2UsIHE9JyonKSApLmxhYmVsKCdBbGVydHMgbG9nIHF1ZXVlIHVzYWdlJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuZmlyZXdhbGxfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLmZpcmV3YWxsX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnRmlyZXdhbGwgbG9nIHF1ZXVlIHVzYWdlJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2Quc3RhdGlzdGljYWxfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLnN0YXRpc3RpY2FsX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnU3RhdGlzdGljYWwgbG9nIHF1ZXVlIHVzYWdlJyksIC5lcyhpbmRleD13YXp1aC1zdGF0aXN0aWNzLSosIHRpbWVmaWVsZD10aW1lc3RhbXAsbWV0cmljPWF2ZzphbmFseXNpc2QuYXJjaGl2ZXNfcXVldWVfc2l6ZSwgcT0nKicpLm11bHRpcGx5KCAuZXMoaW5kZXg9d2F6dWgtc3RhdGlzdGljcy0qLCB0aW1lZmllbGQ9dGltZXN0YW1wLG1ldHJpYz1hdmc6YW5hbHlzaXNkLmFyY2hpdmVzX3F1ZXVlX3VzYWdlLCBxPScqJykgKS5sYWJlbCgnU3RhdGlzdGljYWwgbG9nIHF1ZXVlIHVzYWdlJylcIixcbiAgICAgICAgICBpbnRlcnZhbDogJzVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWdnczogW10sXG4gICAgICB9KSxcbiAgICAgIHVpU3RhdGVKU09OOiAne30nLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGtpYmFuYVNhdmVkT2JqZWN0TWV0YToge1xuICAgICAgICBzZWFyY2hTb3VyY2VKU09OOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaW5kZXg6ICd3YXp1aC1zdGF0aXN0aWNzLSonLFxuICAgICAgICAgIGZpbHRlcjogW10sXG4gICAgICAgICAgcXVlcnk6IHsgcXVlcnk6ICcnLCBsYW5ndWFnZTogJ2x1Y2VuZScgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuIl19