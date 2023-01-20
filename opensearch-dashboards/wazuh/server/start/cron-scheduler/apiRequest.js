"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiRequest = void 0;

var ApiInterceptor = _interopRequireWildcard(require("../../lib/api-interceptor.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ApiRequest {
  constructor(request, api, params = {}) {
    _defineProperty(this, "api", void 0);

    _defineProperty(this, "request", void 0);

    _defineProperty(this, "params", void 0);

    this.request = request;
    this.api = api;
    this.params = params;
  }

  async makeRequest() {
    const {
      id,
      url,
      port
    } = this.api;
    const response = await ApiInterceptor.requestAsInternalUser('GET', '/${this.request}', this.params, {
      apiHostID: id
    });
    return response;
  }

  async getData() {
    try {
      const response = await this.makeRequest();
      if (response.status !== 200) throw response;
      return response.data;
    } catch (error) {
      if (error.status === 404) {
        throw {
          error: 404,
          message: error.data.detail
        };
      }

      if (error.response && error.response.status === 401) {
        throw {
          error: 401,
          message: 'Wrong Wazuh API credentials used'
        };
      }

      if (error && error.data && error.data.detail && error.data.detail === 'ECONNRESET') {
        throw {
          error: 3005,
          message: 'Wrong protocol being used to connect to the Wazuh API'
        };
      }

      if (error && error.data && error.data.detail && ['ENOTFOUND', 'EHOSTUNREACH', 'EINVAL', 'EAI_AGAIN', 'ECONNREFUSED'].includes(error.data.detail)) {
        throw {
          error: 3005,
          message: 'Wazuh API is not reachable. Please check your url and port.'
        };
      }

      throw error;
    }
  }

}

exports.ApiRequest = ApiRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaVJlcXVlc3QudHMiXSwibmFtZXMiOlsiQXBpUmVxdWVzdCIsImNvbnN0cnVjdG9yIiwicmVxdWVzdCIsImFwaSIsInBhcmFtcyIsIm1ha2VSZXF1ZXN0IiwiaWQiLCJ1cmwiLCJwb3J0IiwicmVzcG9uc2UiLCJBcGlJbnRlcmNlcHRvciIsInJlcXVlc3RBc0ludGVybmFsVXNlciIsImFwaUhvc3RJRCIsImdldERhdGEiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGV0YWlsIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFlTyxNQUFNQSxVQUFOLENBQWlCO0FBS3RCQyxFQUFBQSxXQUFXLENBQUNDLE9BQUQsRUFBaUJDLEdBQWpCLEVBQTJCQyxNQUFTLEdBQUMsRUFBckMsRUFBMkM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDcEQsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBRUQsUUFBY0MsV0FBZCxHQUFtRDtBQUNqRCxVQUFNO0FBQUNDLE1BQUFBLEVBQUQ7QUFBS0MsTUFBQUEsR0FBTDtBQUFVQyxNQUFBQTtBQUFWLFFBQWtCLEtBQUtMLEdBQTdCO0FBRUEsVUFBTU0sUUFBdUIsR0FBRyxNQUFNQyxjQUFjLENBQUNDLHFCQUFmLENBQ3BDLEtBRG9DLEVBRXBDLGtCQUZvQyxFQUdwQyxLQUFLUCxNQUgrQixFQUlwQztBQUFDUSxNQUFBQSxTQUFTLEVBQUVOO0FBQVosS0FKb0MsQ0FBdEM7QUFNQSxXQUFPRyxRQUFQO0FBQ0Q7O0FBRUQsUUFBYUksT0FBYixHQUF1QztBQUNyQyxRQUFJO0FBQ0YsWUFBTUosUUFBUSxHQUFHLE1BQU0sS0FBS0osV0FBTCxFQUF2QjtBQUNBLFVBQUlJLFFBQVEsQ0FBQ0ssTUFBVCxLQUFvQixHQUF4QixFQUE2QixNQUFNTCxRQUFOO0FBQzdCLGFBQU9BLFFBQVEsQ0FBQ00sSUFBaEI7QUFDRCxLQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsVUFBSUEsS0FBSyxDQUFDRixNQUFOLEtBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGNBQU07QUFBQ0UsVUFBQUEsS0FBSyxFQUFFLEdBQVI7QUFBYUMsVUFBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNELElBQU4sQ0FBV0c7QUFBakMsU0FBTjtBQUNEOztBQUNELFVBQUlGLEtBQUssQ0FBQ1AsUUFBTixJQUFrQk8sS0FBSyxDQUFDUCxRQUFOLENBQWVLLE1BQWYsS0FBMEIsR0FBaEQsRUFBb0Q7QUFDbEQsY0FBTTtBQUFDRSxVQUFBQSxLQUFLLEVBQUUsR0FBUjtBQUFhQyxVQUFBQSxPQUFPLEVBQUU7QUFBdEIsU0FBTjtBQUNEOztBQUNELFVBQUlELEtBQUssSUFBSUEsS0FBSyxDQUFDRCxJQUFmLElBQXVCQyxLQUFLLENBQUNELElBQU4sQ0FBV0csTUFBbEMsSUFBNENGLEtBQUssQ0FBQ0QsSUFBTixDQUFXRyxNQUFYLEtBQXNCLFlBQXRFLEVBQW9GO0FBQ2xGLGNBQU07QUFBQ0YsVUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0MsVUFBQUEsT0FBTyxFQUFFO0FBQXZCLFNBQU47QUFDRDs7QUFDRCxVQUFJRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0QsSUFBZixJQUF1QkMsS0FBSyxDQUFDRCxJQUFOLENBQVdHLE1BQWxDLElBQTRDLENBQUMsV0FBRCxFQUFhLGNBQWIsRUFBNEIsUUFBNUIsRUFBcUMsV0FBckMsRUFBaUQsY0FBakQsRUFBaUVDLFFBQWpFLENBQTBFSCxLQUFLLENBQUNELElBQU4sQ0FBV0csTUFBckYsQ0FBaEQsRUFBOEk7QUFDNUksY0FBTTtBQUFDRixVQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjQyxVQUFBQSxPQUFPLEVBQUU7QUFBdkIsU0FBTjtBQUNEOztBQUNELFlBQU1ELEtBQU47QUFDRDtBQUNGOztBQTNDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH1mcm9tICdheGlvcyc7XG5pbXBvcnQgKiBhcyBBcGlJbnRlcmNlcHRvciAgZnJvbSAnLi4vLi4vbGliL2FwaS1pbnRlcmNlcHRvci5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwaSB7XG4gIGlkOiBzdHJpbmdcbiAgdXNlcjogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgcG9ydDogbnVtYmVyXG4gIGNsdXN0ZXJfaW5mbzoge1xuICAgIG1hbmFnZXI6IHN0cmluZ1xuICAgIGNsdXN0ZXI6ICdEaXNhYmxlZCcgfCAnRW5hYmxlZCdcbiAgICBzdGF0dXM6ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCdcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIHByaXZhdGUgYXBpOiBJQXBpO1xuICBwcml2YXRlIHJlcXVlc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBwYXJhbXM6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6c3RyaW5nLCBhcGk6SUFwaSwgcGFyYW1zOnt9PXt9LCApIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYWtlUmVxdWVzdCgpOlByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIGNvbnN0IHtpZCwgdXJsLCBwb3J0fSA9IHRoaXMuYXBpO1xuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgQXBpSW50ZXJjZXB0b3IucmVxdWVzdEFzSW50ZXJuYWxVc2VyKFxuICAgICAgJ0dFVCcsXG4gICAgICAnLyR7dGhpcy5yZXF1ZXN0fScsXG4gICAgICB0aGlzLnBhcmFtcyxcbiAgICAgIHthcGlIb3N0SUQ6IGlkIH1cbiAgICApXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldERhdGEoKTpQcm9taXNlPG9iamVjdD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgdGhyb3cgcmVzcG9uc2U7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IHtlcnJvcjogNDA0LCBtZXNzYWdlOiBlcnJvci5kYXRhLmRldGFpbH07XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpe1xuICAgICAgICB0aHJvdyB7ZXJyb3I6IDQwMSwgbWVzc2FnZTogJ1dyb25nIFdhenVoIEFQSSBjcmVkZW50aWFscyB1c2VkJ307XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmRldGFpbCAmJiBlcnJvci5kYXRhLmRldGFpbCA9PT0gJ0VDT05OUkVTRVQnKSB7XG4gICAgICAgIHRocm93IHtlcnJvcjogMzAwNSwgbWVzc2FnZTogJ1dyb25nIHByb3RvY29sIGJlaW5nIHVzZWQgdG8gY29ubmVjdCB0byB0aGUgV2F6dWggQVBJJ307XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhLmRldGFpbCAmJiBbJ0VOT1RGT1VORCcsJ0VIT1NUVU5SRUFDSCcsJ0VJTlZBTCcsJ0VBSV9BR0FJTicsJ0VDT05OUkVGVVNFRCddLmluY2x1ZGVzKGVycm9yLmRhdGEuZGV0YWlsKSkge1xuICAgICAgICB0aHJvdyB7ZXJyb3I6IDMwMDUsIG1lc3NhZ2U6ICdXYXp1aCBBUEkgaXMgbm90IHJlYWNoYWJsZS4gUGxlYXNlIGNoZWNrIHlvdXIgdXJsIGFuZCBwb3J0Lid9O1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59Il19