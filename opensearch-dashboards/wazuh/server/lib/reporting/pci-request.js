"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRulesByRequirement = exports.topPCIRequirements = void 0;

var _baseQuery = require("./base-query");

var _constants = require("../../../common/constants");

/*
 * Wazuh app - Specific methods to fetch Wazuh PCI DSS data from Elasticsearch
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

/**
 * Returns top 5 PCI DSS requirements
 * @param {*} context Endpoint context
 * @param {Number} gte Timestamp (ms) from
 * @param {Number} lte Timestamp (ms) to
 * @param {String} filters E.g: cluster.name: wazuh AND rule.groups: vulnerability
 * @returns {Array<String>}
 */
const topPCIRequirements = async (context, gte, lte, filters, pattern = _constants.WAZUH_ALERTS_PATTERN) => {
  if (filters.includes('rule.pci_dss: exists')) {
    filters = filters.replace('AND rule.pci_dss: exists', '');
  }

  ;

  try {
    const base = {};
    Object.assign(base, (0, _baseQuery.Base)(pattern, filters, gte, lte));
    Object.assign(base.aggs, {
      '2': {
        terms: {
          field: 'rule.pci_dss',
          size: 5,
          order: {
            _count: 'desc'
          }
        }
      }
    });
    base.query.bool.must.push({
      exists: {
        field: 'rule.pci_dss'
      }
    });
    const response = await context.core.opensearch.client.asCurrentUser.search({
      index: pattern,
      body: base
    });
    const {
      buckets
    } = response.body.aggregations['2'];
    return buckets.map(item => item.key).sort((a, b) => {
      const a_split = a.split('.');
      const b_split = b.split('.');
      if (parseInt(a_split[0]) > parseInt(b_split[0])) return 1;else if (parseInt(a_split[0]) < parseInt(b_split[0])) return -1;else {
        if (parseInt(a_split[1]) > parseInt(b_split[1])) return 1;else if (parseInt(a_split[1]) < parseInt(b_split[1])) return -1;else {
          if (parseInt(a_split[2]) > parseInt(b_split[2])) return 1;else if (parseInt(a_split[2]) < parseInt(b_split[2])) return -1;
        }
      }
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * Returns top 3 rules for specific PCI DSS requirement
 * @param {*} context Endpoint context
 * @param {Number} gte Timestamp (ms) from
 * @param {Number} lte Timestamp (ms) to
 * @param {String} requirement PCI DSS requirement. E.g: '10.2.3'
 * @param {String} filters E.g: cluster.name: wazuh AND rule.groups: vulnerability
 * @returns {Array<String>}
 */


exports.topPCIRequirements = topPCIRequirements;

const getRulesByRequirement = async (context, gte, lte, filters, requirement, pattern = _constants.WAZUH_ALERTS_PATTERN) => {
  if (filters.includes('rule.pci_dss: exists')) {
    filters = filters.replace('AND rule.pci_dss: exists', '');
  }

  ;

  try {
    const base = {};
    Object.assign(base, (0, _baseQuery.Base)(pattern, filters, gte, lte));
    Object.assign(base.aggs, {
      '2': {
        terms: {
          field: 'rule.description',
          size: 3,
          order: {
            _count: 'desc'
          }
        },
        aggs: {
          '3': {
            terms: {
              field: 'rule.id',
              size: 1,
              order: {
                _count: 'desc'
              }
            }
          }
        }
      }
    });
    base.query.bool.must[0].query_string.query = base.query.bool.must[0].query_string.query + ' AND rule.pci_dss: "' + requirement + '"';
    const response = await context.core.opensearch.client.asCurrentUser.search({
      index: pattern,
      body: base
    });
    const {
      buckets
    } = response.body.aggregations['2'];
    return buckets.reduce((accum, bucket) => {
      if (!bucket || !bucket['3'] || !bucket['3'].buckets || !bucket['3'].buckets[0] || !bucket['3'].buckets[0].key || !bucket.key) {
        return accum;
      }

      ;
      accum.push({
        ruleID: bucket['3'].buckets[0].key,
        ruleDescription: bucket.key
      });
      return accum;
    }, []);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getRulesByRequirement = getRulesByRequirement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBjaS1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbInRvcFBDSVJlcXVpcmVtZW50cyIsImNvbnRleHQiLCJndGUiLCJsdGUiLCJmaWx0ZXJzIiwicGF0dGVybiIsIldBWlVIX0FMRVJUU19QQVRURVJOIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYmFzZSIsIk9iamVjdCIsImFzc2lnbiIsImFnZ3MiLCJ0ZXJtcyIsImZpZWxkIiwic2l6ZSIsIm9yZGVyIiwiX2NvdW50IiwicXVlcnkiLCJib29sIiwibXVzdCIsInB1c2giLCJleGlzdHMiLCJyZXNwb25zZSIsImNvcmUiLCJvcGVuc2VhcmNoIiwiY2xpZW50IiwiYXNDdXJyZW50VXNlciIsInNlYXJjaCIsImluZGV4IiwiYm9keSIsImJ1Y2tldHMiLCJhZ2dyZWdhdGlvbnMiLCJtYXAiLCJpdGVtIiwia2V5Iiwic29ydCIsImEiLCJiIiwiYV9zcGxpdCIsInNwbGl0IiwiYl9zcGxpdCIsInBhcnNlSW50IiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiZ2V0UnVsZXNCeVJlcXVpcmVtZW50IiwicmVxdWlyZW1lbnQiLCJxdWVyeV9zdHJpbmciLCJyZWR1Y2UiLCJhY2N1bSIsImJ1Y2tldCIsInJ1bGVJRCIsInJ1bGVEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBOztBQUNBOztBQVpBOzs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7QUFRTyxNQUFNQSxrQkFBa0IsR0FBRyxPQUNoQ0MsT0FEZ0MsRUFFaENDLEdBRmdDLEVBR2hDQyxHQUhnQyxFQUloQ0MsT0FKZ0MsRUFLaENDLE9BQU8sR0FBR0MsK0JBTHNCLEtBTTdCO0FBQ0gsTUFBSUYsT0FBTyxDQUFDRyxRQUFSLENBQWlCLHNCQUFqQixDQUFKLEVBQThDO0FBQzVDSCxJQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQiwwQkFBaEIsRUFBNEMsRUFBNUMsQ0FBVjtBQUNEOztBQUFBOztBQUVELE1BQUk7QUFDRixVQUFNQyxJ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QUFDZCxXQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0Q7QUFDRixDQXBFTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBTcGVjaWZpYyBtZXRob2RzIHRvIGZldGNoIFdhenVoIFBDSSBEU1MgZGF0YSBmcm9tIEVsYXN0aWNzZWFyY2hcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi9iYXNlLXF1ZXJ5JztcbmltcG9ydCB7IFdBWlVIX0FMRVJUU19QQVRURVJOIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogUmV0dXJucyB0b3AgNSBQQ0kgRFNTIHJlcXVpcmVtZW50c1xuICogQHBhcmFtIHsqfSBjb250ZXh0IEVuZHBvaW50IGNvbnRleHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBndGUgVGltZXN0YW1wIChtcykgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IGx0ZSBUaW1lc3RhbXAgKG1zKSB0b1xuICogQHBhcmFtIHtTdHJpbmd9IGZpbHRlcnMgRS5nOiBjbHVzdGVyLm5hbWU6IHdhenVoIEFORCBydWxlLmdyb3VwczogdnVsbmVyYWJpbGl0eVxuICogQHJldHVybnMge0FycmF5PFN0cmluZz59XG4gKi9cbmV4cG9ydCBjb25zdCB0b3BQQ0lSZXF1aXJlbWVudHMgPSBhc3luYyAoXG4gIGNvbnRleHQsXG4gIGd0ZSxcbiAgbHRlLFxuICBmaWx0ZXJzLFxuICBwYXR0ZXJuID0gV0FaVUhfQUxFUlRTX1BBVFRFUk5cbikgPT4ge1xuICBpZiAoZmlsdGVycy5pbmNsdWRlcygncnVsZS5wY2lfZHNzOiBleGlzdHMnKSkge1xuICAgIGZpbHRlcnMgPSBmaWx0ZXJzLnJlcGxhY2UoJ0FORCBydWxlLnBjaV9kc3M6IGV4aXN0cycsICcnKTtcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IGJhc2UgPSB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24oYmFzZSwgQmFzZShwYXR0ZXJuLCBmaWx0ZXJzLCBndGUsIGx0ZSkpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihiYXNlLmFnZ3MsIHtcbiAgICAgICcyJzoge1xuICAgICAgICB0ZXJtczoge1xuICAgICAgICAgIGZpZWxkOiAncnVsZS5wY2lfZHNzJyxcbiAgICAgICAgICBzaXplOiA1LFxuICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFzZS5xdWVyeS5ib29sLm11c3QucHVzaCh7XG4gICAgICBleGlzdHM6IHtcbiAgICAgICAgZmllbGQ6ICdydWxlLnBjaV9kc3MnXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLnNlYXJjaCh7XG4gICAgICBpbmRleDogcGF0dGVybixcbiAgICAgIGJvZHk6IGJhc2VcbiAgICB9KTtcbiAgICBjb25zdCB7IGJ1Y2tldHMgfSA9IHJlc3BvbnNlLmJvZHkuYWdncmVnYXRpb25zWycyJ107XG5cbiAgICByZXR1cm4gYnVja2V0c1xuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYV9zcGxpdCA9IGEuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgYl9zcGxpdCA9IGIuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KGFfc3BsaXRbMF0pID4gcGFyc2VJbnQoYl9zcGxpdFswXSkpIHJldHVybiAxO1xuICAgICAgICBlbHNlIGlmIChwYXJzZUludChhX3NwbGl0WzBdKSA8IHBhcnNlSW50KGJfc3BsaXRbMF0pKSByZXR1cm4gLTE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChwYXJzZUludChhX3NwbGl0WzFdKSA+IHBhcnNlSW50KGJfc3BsaXRbMV0pKSByZXR1cm4gMTtcbiAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChhX3NwbGl0WzFdKSA8IHBhcnNlSW50KGJfc3BsaXRbMV0pKSByZXR1cm4gLTE7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYV9zcGxpdFsyXSkgPiBwYXJzZUludChiX3NwbGl0WzJdKSkgcmV0dXJuIDE7XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJzZUludChhX3NwbGl0WzJdKSA8IHBhcnNlSW50KGJfc3BsaXRbMl0pKSByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0b3AgMyBydWxlcyBmb3Igc3BlY2lmaWMgUENJIERTUyByZXF1aXJlbWVudFxuICogQHBhcmFtIHsqfSBjb250ZXh0IEVuZHBvaW50IGNvbnRleHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBndGUgVGltZXN0YW1wIChtcykgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IGx0ZSBUaW1lc3RhbXAgKG1zKSB0b1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVpcmVtZW50IFBDSSBEU1MgcmVxdWlyZW1lbnQuIEUuZzogJzEwLjIuMydcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWx0ZXJzIEUuZzogY2x1c3Rlci5uYW1lOiB3YXp1aCBBTkQgcnVsZS5ncm91cHM6IHZ1bG5lcmFiaWxpdHlcbiAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UnVsZXNCeVJlcXVpcmVtZW50ID0gYXN5bmMgKFxuICBjb250ZXh0LFxuICBndGUsXG4gIGx0ZSxcbiAgZmlsdGVycyxcbiAgcmVxdWlyZW1lbnQsXG4gIHBhdHRlcm4gPSBXQVpVSF9BTEVSVFNfUEFUVEVSTlxuKSA9PiB7XG4gIGlmIChmaWx0ZXJzLmluY2x1ZGVzKCdydWxlLnBjaV9kc3M6IGV4aXN0cycpKSB7XG4gICAgZmlsdGVycyA9IGZpbHRlcnMucmVwbGFjZSgnQU5EIHJ1bGUucGNpX2RzczogZXhpc3RzJywgJycpO1xuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYmFzZSA9IHt9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihiYXNlLCBCYXNlKHBhdHRlcm4sIGZpbHRlcnMsIGd0ZSwgbHRlKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGJhc2UuYWdncywge1xuICAgICAgJzInOiB7XG4gICAgICAgIHRlcm1zOiB7XG4gICAgICAgICAgZmllbGQ6ICdydWxlLmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICBzaXplOiAzLFxuICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWdnczoge1xuICAgICAgICAgICczJzoge1xuICAgICAgICAgICAgdGVybXM6IHtcbiAgICAgICAgICAgICAgZmllbGQ6ICdydWxlLmlkJyxcbiAgICAgICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiYXNlLnF1ZXJ5LmJvb2wubXVzdFswXS5xdWVyeV9zdHJpbmcucXVlcnkgPVxuICAgICAgYmFzZS5xdWVyeS5ib29sLm11c3RbMF0ucXVlcnlfc3RyaW5nLnF1ZXJ5ICtcbiAgICAgICcgQU5EIHJ1bGUucGNpX2RzczogXCInICtcbiAgICAgIHJlcXVpcmVtZW50ICtcbiAgICAgICdcIic7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbnRleHQuY29yZS5vcGVuc2VhcmNoLmNsaWVudC5hc0N1cnJlbnRVc2VyLnNlYXJjaCh7XG4gICAgICBpbmRleDogcGF0dGVybixcbiAgICAgIGJvZHk6IGJhc2VcbiAgICB9KTtcbiAgICBjb25zdCB7IGJ1Y2tldHMgfSA9IHJlc3BvbnNlLmJvZHkuYWdncmVnYXRpb25zWycyJ107XG4gICAgcmV0dXJuIGJ1Y2tldHMucmVkdWNlKChhY2N1bSwgYnVja2V0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFidWNrZXQgfHxcbiAgICAgICAgIWJ1Y2tldFsnMyddIHx8XG4gICAgICAgICFidWNrZXRbJzMnXS5idWNrZXRzIHx8XG4gICAgICAgICFidWNrZXRbJzMnXS5idWNrZXRzWzBdIHx8XG4gICAgICAgICFidWNrZXRbJzMnXS5idWNrZXRzWzBdLmtleSB8fFxuICAgICAgICAhYnVja2V0LmtleVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhY2N1bTtcbiAgICAgIH07XG4gICAgICBhY2N1bS5wdXNoKHtydWxlSUQ6IGJ1Y2tldFsnMyddLmJ1Y2tldHNbMF0ua2V5LCBydWxlRGVzY3JpcHRpb246IGJ1Y2tldC5rZXl9KTtcbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCBbXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufVxuXG4iXX0=