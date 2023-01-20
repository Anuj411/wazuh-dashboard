"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobs = void 0;
const jobs = {
  'manager-stats-remoted': {
    status: true,
    method: "GET",
    request: '/manager/stats/remoted?pretty',
    params: {},
    interval: '0 */5 * * * *',
    index: {
      name: 'statistics',
      creation: 'w',
      mapping: '{"remoted": ${data.affected_items[0]}, "apiName": ${apiName}, "cluster": "false"}'
    }
  },
  'manager-stats-analysisd': {
    status: true,
    method: "GET",
    request: '/manager/stats/analysisd?pretty',
    params: {},
    interval: '0 */5 * * * *',
    index: {
      name: 'statistics',
      creation: 'w',
      mapping: '{"analysisd": ${data.affected_items[0]}, "apiName": ${apiName}, "cluster": "false"}'
    }
  },
  'cluster-stats-remoted': {
    status: true,
    method: "GET",
    request: {
      request: '/cluster/{nodeName}/stats/remoted?pretty',
      params: {
        nodeName: {
          request: '/cluster/nodes?select=name'
        }
      }
    },
    params: {},
    interval: '0 */5 * * * *',
    index: {
      name: 'statistics',
      creation: 'w',
      mapping: '{"remoted": ${data.affected_items[0]}, "apiName": ${apiName}, "nodeName": ${nodeName}, "cluster": "true"}'
    }
  },
  'cluster-stats-analysisd': {
    status: true,
    method: "GET",
    request: {
      request: '/cluster/{nodeName}/stats/analysisd?pretty',
      params: {
        nodeName: {
          request: '/cluster/nodes?select=name'
        }
      }
    },
    params: {},
    interval: '0 */5 * * * *',
    index: {
      name: 'statistics',
      creation: 'w',
      mapping: '{"analysisd": ${data.affected_items[0]}, "apiName": ${apiName}, "nodeName": ${nodeName}, "cluster": "true"}'
    }
  }
};
exports.jobs = jobs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRlZmluZWQtam9icy50cyJdLCJuYW1lcyI6WyJqb2JzIiwic3RhdHVzIiwibWV0aG9kIiwicmVxdWVzdCIsInBhcmFtcyIsImludGVydmFsIiwiaW5kZXgiLCJuYW1lIiwiY3JlYXRpb24iLCJtYXBwaW5nIiwibm9kZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQXNCTyxNQUFNQSxJQUEwQixHQUFHO0FBQ3hDLDJCQUF5QjtBQUN2QkMsSUFBQUEsTUFBTSxFQUFFLElBRGU7QUFFdkJDLElBQUFBLE1BQU0sRUFBRSxLQUZlO0FBR3ZCQyxJQUFBQSxPQUFPLEVBQUUsK0JBSGM7QUFJdkJDLElBQUFBLE1BQU0sRUFBRSxFQUplO0FBS3ZCQyxJQUFBQSxRQUFRLEVBQUUsZUFMYTtBQU12QkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxHQUZMO0FBR0xDLE1BQUFBLE9BQU8sRUFBRTtBQUhKO0FBTmdCLEdBRGU7QUFheEMsNkJBQTJCO0FBQ3pCUixJQUFBQSxNQUFNLEVBQUUsSUFEaUI7QUFFekJDLElBQUFBLE1BQU0sRUFBRSxLQUZpQjtBQUd6QkMsSUFBQUEsT0FBTyxFQUFFLGlDQUhnQjtBQUl6QkMsSUFBQUEsTUFBTSxFQUFFLEVBSmlCO0FBS3pCQyxJQUFBQSxRQUFRLEVBQUUsZUFMZTtBQU16QkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxHQUZMO0FBR0xDLE1BQUFBLE9BQU8sRUFBRTtBQUhKO0FBTmtCLEdBYmE7QUF5QnhDLDJCQUF5QjtBQUN2QlIsSUFBQUEsTUFBTSxFQUFFLElBRGU7QUFFdkJDLElBQUFBLE1BQU0sRUFBRSxLQUZlO0FBR3ZCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEEsTUFBQUEsT0FBTyxFQUFFLDBDQURGO0FBRVBDLE1BQUFBLE1BQU0sRUFBRTtBQUNOTSxRQUFBQSxRQUFRLEVBQUU7QUFDUlAsVUFBQUEsT0FBTyxFQUFFO0FBREQ7QUFESjtBQUZELEtBSGM7QUFXdkJDLElBQUFBLE1BQU0sRUFBRSxFQVhlO0FBWXZCQyxJQUFBQSxRQUFRLEVBQUUsZUFaYTtBQWF2QkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBQyxZQURBO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxHQUZMO0FBR0xDLE1BQUFBLE9BQU8sRUFBRTtBQUhKO0FBYmdCLEdBekJlO0FBNEN4Qyw2QkFBMkI7QUFDekJSLElBQUFBLE1BQU0sRUFBRSxJQURpQjtBQUV6QkMsSUFBQUEsTUFBTSxFQUFFLEtBRmlCO0FBR3pCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEEsTUFBQUEsT0FBTyxFQUFFLDRDQURGO0FBRVBDLE1BQUFBLE1BQU0sRUFBRTtBQUNOTSxRQUFBQSxRQUFRLEVBQUU7QUFDUlAsVUFBQUEsT0FBTyxFQUFFO0FBREQ7QUFESjtBQUZELEtBSGdCO0FBV3pCQyxJQUFBQSxNQUFNLEVBQUUsRUFYaUI7QUFZekJDLElBQUFBLFFBQVEsRUFBRSxlQVplO0FBYXpCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsTUFBQUEsUUFBUSxFQUFFLEdBRkw7QUFHTEMsTUFBQUEsT0FBTyxFQUFFO0FBSEo7QUFia0I7QUE1Q2EsQ0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSW5kZXhDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUpvYiB7XG4gIHN0YXR1czogYm9vbGVhblxuICBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJ1xuICByZXF1ZXN0OiBzdHJpbmcgfCBJUmVxdWVzdFxuICBwYXJhbXM6IHt9XG4gIGludGVydmFsOiBzdHJpbmdcbiAgaW5kZXg6IElJbmRleENvbmZpZ3VyYXRpb25cbiAgYXBpcz86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlcXVlc3Qge1xuICByZXF1ZXN0OiBzdHJpbmdcbiAgcGFyYW1zOiB7XG4gICAgW2tleTpzdHJpbmddOiB7XG4gICAgICByZXF1ZXN0Pzogc3RyaW5nXG4gICAgICBsaXN0Pzogc3RyaW5nW11cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGpvYnM6IHtba2V5OnN0cmluZ106IElKb2J9ID0ge1xuICAnbWFuYWdlci1zdGF0cy1yZW1vdGVkJzoge1xuICAgIHN0YXR1czogdHJ1ZSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgcmVxdWVzdDogJy9tYW5hZ2VyL3N0YXRzL3JlbW90ZWQ/cHJldHR5JyxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGludGVydmFsOiAnMCAqLzUgKiAqICogKicsXG4gICAgaW5kZXg6IHtcbiAgICAgIG5hbWU6ICdzdGF0aXN0aWNzJyxcbiAgICAgIGNyZWF0aW9uOiAndycsXG4gICAgICBtYXBwaW5nOiAne1wicmVtb3RlZFwiOiAke2RhdGEuYWZmZWN0ZWRfaXRlbXNbMF19LCBcImFwaU5hbWVcIjogJHthcGlOYW1lfSwgXCJjbHVzdGVyXCI6IFwiZmFsc2VcIn0nLFxuICAgIH1cbiAgfSxcbiAgJ21hbmFnZXItc3RhdHMtYW5hbHlzaXNkJzoge1xuICAgIHN0YXR1czogdHJ1ZSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgcmVxdWVzdDogJy9tYW5hZ2VyL3N0YXRzL2FuYWx5c2lzZD9wcmV0dHknLFxuICAgIHBhcmFtczoge30sXG4gICAgaW50ZXJ2YWw6ICcwICovNSAqICogKiAqJyxcbiAgICBpbmRleDoge1xuICAgICAgbmFtZTogJ3N0YXRpc3RpY3MnLFxuICAgICAgY3JlYXRpb246ICd3JyxcbiAgICAgIG1hcHBpbmc6ICd7XCJhbmFseXNpc2RcIjogJHtkYXRhLmFmZmVjdGVkX2l0ZW1zWzBdfSwgXCJhcGlOYW1lXCI6ICR7YXBpTmFtZX0sIFwiY2x1c3RlclwiOiBcImZhbHNlXCJ9JyxcbiAgICB9XG4gIH0sXG4gICdjbHVzdGVyLXN0YXRzLXJlbW90ZWQnOiB7XG4gICAgc3RhdHVzOiB0cnVlLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICByZXF1ZXN0OiB7XG4gICAgICByZXF1ZXN0OiAnL2NsdXN0ZXIve25vZGVOYW1lfS9zdGF0cy9yZW1vdGVkP3ByZXR0eScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbm9kZU5hbWU6IHtcbiAgICAgICAgICByZXF1ZXN0OiAnL2NsdXN0ZXIvbm9kZXM/c2VsZWN0PW5hbWUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcmFtczoge30sXG4gICAgaW50ZXJ2YWw6ICcwICovNSAqICogKiAqJyxcbiAgICBpbmRleDoge1xuICAgICAgbmFtZTonc3RhdGlzdGljcycsXG4gICAgICBjcmVhdGlvbjogJ3cnLFxuICAgICAgbWFwcGluZzogJ3tcInJlbW90ZWRcIjogJHtkYXRhLmFmZmVjdGVkX2l0ZW1zWzBdfSwgXCJhcGlOYW1lXCI6ICR7YXBpTmFtZX0sIFwibm9kZU5hbWVcIjogJHtub2RlTmFtZX0sIFwiY2x1c3RlclwiOiBcInRydWVcIn0nLFxuICAgIH1cbiAgfSxcbiAgJ2NsdXN0ZXItc3RhdHMtYW5hbHlzaXNkJzoge1xuICAgIHN0YXR1czogdHJ1ZSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgcmVxdWVzdDoge1xuICAgICAgcmVxdWVzdDogJy9jbHVzdGVyL3tub2RlTmFtZX0vc3RhdHMvYW5hbHlzaXNkP3ByZXR0eScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbm9kZU5hbWU6IHtcbiAgICAgICAgICByZXF1ZXN0OiAnL2NsdXN0ZXIvbm9kZXM/c2VsZWN0PW5hbWUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcmFtczoge30sXG4gICAgaW50ZXJ2YWw6ICcwICovNSAqICogKiAqJyxcbiAgICBpbmRleDoge1xuICAgICAgbmFtZTogJ3N0YXRpc3RpY3MnLFxuICAgICAgY3JlYXRpb246ICd3JyxcbiAgICAgIG1hcHBpbmc6ICd7XCJhbmFseXNpc2RcIjogJHtkYXRhLmFmZmVjdGVkX2l0ZW1zWzBdfSwgXCJhcGlOYW1lXCI6ICR7YXBpTmFtZX0sIFwibm9kZU5hbWVcIjogJHtub2RlTmFtZX0sIFwiY2x1c3RlclwiOiBcInRydWVcIn0nLFxuICAgIH1cbiAgfSxcbn0iXX0=