"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchedulerJob = void 0;

var _predefinedJobs = require("./predefined-jobs");

var _wazuhHosts = require("../../controllers/wazuh-hosts");

var _index = require("./index");

var _errorHandler = require("./error-handler");

var _configuredJobs = require("./configured-jobs");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const wazuhHostsController = new _wazuhHosts.WazuhHostsCtrl();
const fakeResponseEndpoint = {
  ok: body => body,
  custom: body => body
};

class SchedulerJob {
  constructor(jobName, context) {
    _defineProperty(this, "jobName", void 0);

    _defineProperty(this, "saveDocument", void 0);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "apiClient", void 0);

    this.jobName = jobName;
    this.context = context;
    this.logger = context.wazuh.logger;
    this.apiClient = context.wazuh.api.client.asInternalUser;
    this.saveDocument = new _index.SaveDocument(context);
  }

  async run() {
    const {
      index,
      status
    } = (0, _configuredJobs.configuredJobs)({})[this.jobName];

    if (!status) {
      return;
    }

    try {
      const hosts = await this.getApiObjects();
      const jobPromises = hosts.map(async host => {
        try {
          const {
            status
          } = (0, _configuredJobs.configuredJobs)({
            host,
            jobName: this.jobName
          })[this.jobName];
          if (!status) return;
          return await this.getResponses(host);
        } catch (error) {
          (0, _errorHandler.ErrorHandler)(error, this.logger);
        }
      });
      const data = (await Promise.all(jobPromises)).filter(promise => !!promise).flat();
      Array.isArray(data) && !!data.length && (await this.saveDocument.save(data, index));
    } catch (error) {
      (0, _errorHandler.ErrorHandler)(error, this.logger);
    }
  }

  async getApiObjects() {
    const {
      apis
    } = _predefinedJobs.jobs[this.jobName];
    const hostsResponse = await wazuhHostsController.getHostsEntries(false, false, fakeResponseEndpoint);
    if (!hostsResponse.body.length) throw {
      error: 10001,
      message: 'No Wazuh host configured in wazuh.yml'
    };

    if (apis && apis.length) {
      return this.filterHosts(hostsResponse.body, apis);
    }

    return hostsResponse.body;
  }

  filterHosts(hosts, apis) {
    const filteredHosts = hosts.filter(host => apis.includes(host.id));

    if (filteredHosts.length <= 0) {
      throw {
        error: 10002,
        message: 'No host was found with the indicated ID'
      };
    }

    return filteredHosts;
  }

  async getResponses(host) {
    const {
      request,
      params
    } = _predefinedJobs.jobs[this.jobName];
    const data = [];

    if (typeof request === 'string') {
      const apiResponse = await this.apiClient.request('GET', request, params, {
        apiHostID: host.id
      });
      data.push({ ...apiResponse.data,
        apiName: host.id
      });
    } else {
      await this.getResponsesForIRequest(host, data);
    }

    return data;
  }

  async getResponsesForIRequest(host, data) {
    const {
      request,
      params
    } = _predefinedJobs.jobs[this.jobName];
    const fieldName = this.getParamName(typeof request !== 'string' && request.request);
    const paramList = await this.getParamList(fieldName, host);

    for (const param of paramList) {
      const paramRequest = typeof request !== 'string' && request.request.replace(/\{.+\}/, param);

      if (!!paramRequest) {
        const apiResponse = await this.apiClient.request('GET', paramRequest, params, {
          apiHostID: host.id
        });
        data.push({ ...apiResponse.data,
          apiName: host.id,
          [fieldName]: param
        });
      }
    }
  }

  getParamName(request) {
    const regexResult = /\{(?<fieldName>.+)\}/.exec(request);
    if (regexResult === null) throw {
      error: 10003,
      message: `The parameter is not found in the Request: ${request}`
    }; // @ts-ignore

    const {
      fieldName
    } = regexResult.groups;
    if (fieldName === undefined || fieldName === '') throw {
      error: 10004,
      message: `Invalid field in the request: {request: ${request}, field: ${fieldName}}`
    };
    return fieldName;
  }

  async getParamList(fieldName, host) {
    const {
      request
    } = _predefinedJobs.jobs[this.jobName]; // @ts-ignore

    const apiResponse = await this.apiClient.request('GET', request.params[fieldName].request, {}, {
      apiHostID: host.id
    });
    const {
      affected_items
    } = apiResponse.data.data;
    if (affected_items === undefined || affected_items.length === 0) throw {
      error: 10005,
      message: `Empty response when tried to get the parameters list: ${JSON.stringify(apiResponse.data)}`
    };
    const values = affected_items.map(this.mapParamList);
    return values;
  }

  mapParamList(item) {
    if (typeof item !== 'object') {
      return item;
    }

    ;
    const keys = Object.keys(item);
    if (keys.length > 1 || keys.length < 0) throw {
      error: 10006,
      message: `More than one key or none were obtained: ${keys}`
    };
    return item[keys[0]];
  }

}

exports.SchedulerJob = SchedulerJob;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlci1qb2IudHMiXSwibmFtZXMiOlsid2F6dWhIb3N0c0NvbnRyb2xsZXIiLCJXYXp1aEhvc3RzQ3RybCIsImZha2VSZXNwb25zZUVuZHBvaW50Iiwib2siLCJib2R5IiwiY3VzdG9tIiwiU2NoZWR1bGVySm9iIiwiY29uc3RydWN0b3IiLCJqb2JOYW1lIiwiY29udGV4dCIsImxvZ2dlciIsIndhenVoIiwiYXBpQ2xpZW50IiwiYXBpIiwiY2xpZW50IiwiYXNJbnRlcm5hbFVzZXIiLCJzYXZlRG9jdW1lbnQiLCJTYXZlRG9jdW1lbnQiLCJydW4iLCJpbmRleCIsInN0YXR1cyIsImhvc3RzIiwiZ2V0QXBpT2JqZWN0cyIsImpvYlByb21pc2VzIiwibWFwIiwiaG9zdCIsImdldFJlc3BvbnNlcyIsImVycm9yIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJwcm9taXNlIiwiZmxhdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInNhdmUiLCJhcGlzIiwiam9icyIsImhvc3RzUmVzcG9uc2UiLCJnZXRIb3N0c0VudHJpZXMiLCJtZXNzYWdlIiwiZmlsdGVySG9zdHMiLCJmaWx0ZXJlZEhvc3RzIiwiaW5jbHVkZXMiLCJpZCIsInJlcXVlc3QiLCJwYXJhbXMiLCJhcGlSZXNwb25zZSIsImFwaUhvc3RJRCIsInB1c2giLCJhcGlOYW1lIiwiZ2V0UmVzcG9uc2VzRm9ySVJlcXVlc3QiLCJmaWVsZE5hbWUiLCJnZXRQYXJhbU5hbWUiLCJwYXJhbUxpc3QiLCJnZXRQYXJhbUxpc3QiLCJwYXJhbSIsInBhcmFtUmVxdWVzdCIsInJlcGxhY2UiLCJyZWdleFJlc3VsdCIsImV4ZWMiLCJncm91cHMiLCJ1bmRlZmluZWQiLCJhZmZlY3RlZF9pdGVtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJtYXBQYXJhbUxpc3QiLCJpdGVtIiwia2V5cyIsIk9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztB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Y0FBYyxDQUFDekMsR0FBZixDQUFtQixLQUFLNkMsWUFBeEIsQ0FBZjtBQUNBLFdBQU9ELE1BQVA7QUFDRDs7QUFFT0MsRUFBQUEsWUFBUixDQUFxQkMsSUFBckIsRUFBMkI7QUFDekIsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLGFBQU9BLElBQVA7QUFDRDs7QUFBQTtBQUNELFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlELElBQVosQ0FBYjtBQUNBLFFBQUdDLElBQUksQ0FBQ25DLE1BQUwsR0FBYyxDQUFkLElBQW1CbUMsSUFBSSxDQUFDbkMsTUFBTCxHQUFjLENBQXBDLEVBQXVDLE1BQU07QUFBRVQsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JlLE1BQUFBLE9BQU8sRUFBRyw0Q0FBMkM2QixJQUFLO0FBQTFFLEtBQU47QUFDdkMsV0FBT0QsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVg7QUFDRDs7QUEvR3VCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9icyB9IGZyb20gJy4vcHJlZGVmaW5lZC1qb2JzJztcbmltcG9ydCB7IFdhenVoSG9zdHNDdHJsIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvd2F6dWgtaG9zdHMnO1xuaW1wb3J0IHsgSUFwaSwgU2F2ZURvY3VtZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2Vycm9yLWhhbmRsZXInO1xuaW1wb3J0IHsgY29uZmlndXJlZEpvYnMgfSBmcm9tICcuL2NvbmZpZ3VyZWQtam9icyc7XG5cbmNvbnN0IHdhenVoSG9zdHNDb250cm9sbGVyID0gbmV3IFdhenVoSG9zdHNDdHJsKCk7XG5cbmNvbnN0IGZha2VSZXNwb25zZUVuZHBvaW50ID0ge1xuICBvazogKGJvZHk6IGFueSkgPT4gYm9keSxcbiAgY3VzdG9tOiAoYm9keTogYW55KSA9PiBib2R5LFxufTtcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJKb2Ige1xuICBqb2JOYW1lOiBzdHJpbmc7XG4gIHNhdmVEb2N1bWVudDogU2F2ZURvY3VtZW50O1xuICBjb250ZXh0OiBhbnk7XG4gIGxvZ2dlcjogYW55O1xuICBhcGlDbGllbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihqb2JOYW1lOiBzdHJpbmcsIGNvbnRleHQpIHtcbiAgICB0aGlzLmpvYk5hbWUgPSBqb2JOYW1lO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5sb2dnZXIgPSBjb250ZXh0LndhenVoLmxvZ2dlcjtcbiAgICB0aGlzLmFwaUNsaWVudCA9IGNvbnRleHQud2F6dWguYXBpLmNsaWVudC5hc0ludGVybmFsVXNlcjtcbiAgICB0aGlzLnNhdmVEb2N1bWVudCA9IG5ldyBTYXZlRG9jdW1lbnQoY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcnVuKCkge1xuICAgIGNvbnN0IHsgaW5kZXgsIHN0YXR1cyB9ID0gY29uZmlndXJlZEpvYnMoe30pW3RoaXMuam9iTmFtZV07XG4gICAgaWYgKCFzdGF0dXMpIHsgcmV0dXJuOyB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhvc3RzID0gYXdhaXQgdGhpcy5nZXRBcGlPYmplY3RzKCk7XG4gICAgICBjb25zdCBqb2JQcm9taXNlcyA9IGhvc3RzLm1hcChhc3luYyBob3N0ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gY29uZmlndXJlZEpvYnMoeyBob3N0LCBqb2JOYW1lOiB0aGlzLmpvYk5hbWUgfSlbdGhpcy5qb2JOYW1lXTtcbiAgICAgICAgICBpZiAoIXN0YXR1cykgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFJlc3BvbnNlcyhob3N0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBFcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMubG9nZ2VyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gKGF3YWl0IFByb21pc2UuYWxsKGpvYlByb21pc2VzKSkuZmlsdGVyKHByb21pc2UgPT4gISFwcm9taXNlKS5mbGF0KCk7XG4gICAgICBBcnJheS5pc0FycmF5KGRhdGEpICYmICEhZGF0YS5sZW5ndGggJiYgYXdhaXQgdGhpcy5zYXZlRG9jdW1lbnQuc2F2ZShkYXRhLCBpbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIEVycm9ySGFuZGxlcihlcnJvciwgdGhpcy5sb2dnZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0QXBpT2JqZWN0cygpIHtcbiAgICBjb25zdCB7IGFwaXMgfSA9IGpvYnNbdGhpcy5qb2JOYW1lXTtcbiAgICBjb25zdCBob3N0c1Jlc3BvbnNlOiB7Ym9keTogSUFwaVtdfSA9IGF3YWl0IHdhenVoSG9zdHNDb250cm9sbGVyLmdldEhvc3RzRW50cmllcyhmYWxzZSwgZmFsc2UsIGZha2VSZXNwb25zZUVuZHBvaW50KTtcbiAgICBpZiAoIWhvc3RzUmVzcG9uc2UuYm9keS5sZW5ndGgpIHRocm93IHtlcnJvcjogMTAwMDEsIG1lc3NhZ2U6ICdObyBXYXp1aCBob3N0IGNvbmZpZ3VyZWQgaW4gd2F6dWgueW1sJyB9XG4gICAgaWYoYXBpcyAmJiBhcGlzLmxlbmd0aCl7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJIb3N0cyhob3N0c1Jlc3BvbnNlLmJvZHksIGFwaXMpO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdHNSZXNwb25zZS5ib2R5O1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJIb3N0cyhob3N0czogSUFwaVtdLCBhcGlzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGZpbHRlcmVkSG9zdHMgPSBob3N0cy5maWx0ZXIoaG9zdCA9PiBhcGlzLmluY2x1ZGVzKGhvc3QuaWQpKTtcbiAgICBpZiAoZmlsdGVyZWRIb3N0cy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhyb3cge2Vycm9yOiAxMDAwMiwgbWVzc2FnZTogJ05vIGhvc3Qgd2FzIGZvdW5kIHdpdGggdGhlIGluZGljYXRlZCBJRCd9O1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRIb3N0cztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0UmVzcG9uc2VzKGhvc3QpOiBQcm9taXNlPG9iamVjdFtdPiB7XG4gICAgY29uc3QgeyByZXF1ZXN0LCBwYXJhbXMgfSA9IGpvYnNbdGhpcy5qb2JOYW1lXTtcbiAgICBjb25zdCBkYXRhOm9iamVjdFtdID0gW107XG4gICAgXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaUNsaWVudC5yZXF1ZXN0KCdHRVQnLCByZXF1ZXN0LCBwYXJhbXMsIHsgYXBpSG9zdElEOiBob3N0LmlkIH0pO1xuICAgICAgZGF0YS5wdXNoKHsuLi5hcGlSZXNwb25zZS5kYXRhLCBhcGlOYW1lOmhvc3QuaWR9KTtcbiAgICB9ZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLmdldFJlc3BvbnNlc0ZvcklSZXF1ZXN0KGhvc3QsIGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0UmVzcG9uc2VzRm9ySVJlcXVlc3QoaG9zdDogYW55LCBkYXRhOiBvYmplY3RbXSkge1xuICAgIGNvbnN0IHsgcmVxdWVzdCwgcGFyYW1zIH0gPSBqb2JzW3RoaXMuam9iTmFtZV07XG4gICAgY29uc3QgZmllbGROYW1lID0gdGhpcy5nZXRQYXJhbU5hbWUodHlwZW9mIHJlcXVlc3QgIT09ICdzdHJpbmcnICYmIHJlcXVlc3QucmVxdWVzdCk7XG4gICAgY29uc3QgcGFyYW1MaXN0ID0gYXdhaXQgdGhpcy5nZXRQYXJhbUxpc3QoZmllbGROYW1lLCBob3N0KTtcbiAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHBhcmFtTGlzdCkge1xuICAgICAgY29uc3QgcGFyYW1SZXF1ZXN0ID0gdHlwZW9mIHJlcXVlc3QgIT09ICdzdHJpbmcnICYmIHJlcXVlc3QucmVxdWVzdC5yZXBsYWNlKC9cXHsuK1xcfS8sIHBhcmFtKTtcbiAgICAgIGlmKCEhcGFyYW1SZXF1ZXN0KXtcbiAgICAgICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaUNsaWVudC5yZXF1ZXN0KCdHRVQnLCBwYXJhbVJlcXVlc3QsIHBhcmFtcywgeyBhcGlIb3N0SUQ6IGhvc3QuaWQgfSk7XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgLi4uYXBpUmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICBhcGlOYW1lOiBob3N0LmlkLFxuICAgICAgICAgIFtmaWVsZE5hbWVdOiBwYXJhbSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFtTmFtZShyZXF1ZXN0KTogc3RyaW5nIHtcbiAgICBjb25zdCByZWdleFJlc3VsdCA9IC9cXHsoPzxmaWVsZE5hbWU+LispXFx9Ly5leGVjKHJlcXVlc3QpO1xuICAgIGlmIChyZWdleFJlc3VsdCA9PT0gbnVsbCkgdGhyb3cge2Vycm9yOiAxMDAwMywgbWVzc2FnZTogYFRoZSBwYXJhbWV0ZXIgaXMgbm90IGZvdW5kIGluIHRoZSBSZXF1ZXN0OiAke3JlcXVlc3R9YH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHsgZmllbGROYW1lIH0gPSByZWdleFJlc3VsdC5ncm91cHM7XG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkTmFtZSA9PT0gJycpIHRocm93IHtlcnJvcjogMTAwMDQsIG1lc3NhZ2U6IGBJbnZhbGlkIGZpZWxkIGluIHRoZSByZXF1ZXN0OiB7cmVxdWVzdDogJHtyZXF1ZXN0fSwgZmllbGQ6ICR7ZmllbGROYW1lfX1gfVxuICAgIHJldHVybiBmaWVsZE5hbWVcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0UGFyYW1MaXN0KGZpZWxkTmFtZSwgaG9zdCkge1xuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gam9ic1t0aGlzLmpvYk5hbWVdO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IHRoaXMuYXBpQ2xpZW50LnJlcXVlc3QoJ0dFVCcsIHJlcXVlc3QucGFyYW1zW2ZpZWxkTmFtZV0ucmVxdWVzdCwge30sIHsgYXBpSG9zdElEOiBob3N0LmlkIH0pO1xuICAgIGNvbnN0IHsgYWZmZWN0ZWRfaXRlbXMgfSA9IGFwaVJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICBpZiAoYWZmZWN0ZWRfaXRlbXMgPT09IHVuZGVmaW5lZCB8fCBhZmZlY3RlZF9pdGVtcy5sZW5ndGggPT09IDAgKSB0aHJvdyB7ZXJyb3I6IDEwMDA1LCBtZXNzYWdlOiBgRW1wdHkgcmVzcG9uc2Ugd2hlbiB0cmllZCB0byBnZXQgdGhlIHBhcmFtZXRlcnMgbGlzdDogJHtKU09OLnN0cmluZ2lmeShhcGlSZXNwb25zZS5kYXRhKX1gfVxuICAgIGNvbnN0IHZhbHVlcyA9IGFmZmVjdGVkX2l0ZW1zLm1hcCh0aGlzLm1hcFBhcmFtTGlzdClcbiAgICByZXR1cm4gdmFsdWVzXG4gIH1cblxuICBwcml2YXRlIG1hcFBhcmFtTGlzdChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9O1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpdGVtKVxuICAgIGlmKGtleXMubGVuZ3RoID4gMSB8fCBrZXlzLmxlbmd0aCA8IDApIHRocm93IHsgZXJyb3I6IDEwMDA2LCBtZXNzYWdlOiBgTW9yZSB0aGFuIG9uZSBrZXkgb3Igbm9uZSB3ZXJlIG9idGFpbmVkOiAke2tleXN9YH1cbiAgICByZXR1cm4gaXRlbVtrZXlzWzBdXTtcbiAgfVxufVxuIl19