"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WazuhPlugin = void 0;

var _securityFactory = require("./lib/security-factory");

var _routes = require("./routes");

var _start = require("./start");

var _cookie = require("./lib/cookie");

var ApiInterceptor = _interopRequireWildcard(require("./lib/api-interceptor"));

var _operators = require("rxjs/operators");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WazuhPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;

    _defineProperty(this, "logger", void 0);

    this.logger = initializerContext.logger.get();
  }

  async setup(core, plugins) {
    this.logger.debug('Wazuh-wui: Setup');
    const wazuhSecurity = await (0, _securityFactory.SecurityObj)(plugins);
    const serverInfo = core.http.getServerInfo();
    core.http.registerRouteHandlerContext('wazuh', (context, request) => {
      return {
        logger: this.logger,
        server: {
          info: serverInfo
        },
        plugins,
        security: wazuhSecurity,
        api: {
          client: {
            asInternalUser: {
              authenticate: async apiHostID => await ApiInterceptor.authenticate(apiHostID),
              request: async (method, path, data, options) => await ApiInterceptor.requestAsInternalUser(method, path, data, options)
            },
            asCurrentUser: {
              authenticate: async apiHostID => await ApiInterceptor.authenticate(apiHostID, (await wazuhSecurity.getCurrentUser(request, context)).authContext),
              request: async (method, path, data, options) => await ApiInterceptor.requestAsCurrentUser(method, path, data, { ...options,
                token: (0, _cookie.getCookieValueByName)(request.headers.cookie, 'wz-token')
              })
            }
          }
        }
      };
    }); // Add custom headers to the responses

    core.http.registerOnPreResponse((request, response, toolkit) => {
      const additionalHeaders = {
        'x-frame-options': 'sameorigin'
      };
      return toolkit.next({
        headers: additionalHeaders
      });
    }); // Routes

    const router = core.http.createRouter();
    (0, _routes.setupRoutes)(router);
    return {};
  }

  async start(core) {
    const globalConfiguration = await this.initializerContext.config.legacy.globalConfig$.pipe((0, _operators.first)()).toPromise();
    const wazuhApiClient = {
      client: {
        asInternalUser: {
          authenticate: async apiHostID => await ApiInterceptor.authenticate(apiHostID),
          request: async (method, path, data, options) => await ApiInterceptor.requestAsInternalUser(method, path, data, options)
        }
      }
    };
    const contextServer = {
      config: globalConfiguration
    }; // Initialize

    (0, _start.jobInitializeRun)({
      core,
      wazuh: {
        logger: this.logger.get('initialize'),
        api: wazuhApiClient
      },
      server: contextServer
    }); // Migration tasks

    (0, _start.jobMigrationTasksRun)({
      core,
      wazuh: {
        logger: this.logger.get('migration-task'),
        api: wazuhApiClient
      },
      server: contextServer
    }); // Monitoring

    (0, _start.jobMonitoringRun)({
      core,
      wazuh: {
        logger: this.logger.get('monitoring'),
        api: wazuhApiClient
      },
      server: contextServer
    }); // Scheduler

    (0, _start.jobSchedulerRun)({
      core,
      wazuh: {
        logger: this.logger.get('cron-scheduler'),
        api: wazuhApiClient
      },
      server: contextServer
    }); // Queue

    (0, _start.jobQueueRun)({
      core,
      wazuh: {
        logger: this.logger.get('queue'),
        api: wazuhApiClient
      },
      server: contextServer
    });
    return {};
  }

  stop() {}

}

exports.WazuhPlugin = WazuhPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi50cyJdLCJuYW1lcyI6WyJXYXp1aFBsdWdpbiIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbGl6ZXJDb250ZXh0IiwibG9nZ2VyIiwiZ2V0Iiwic2V0dXAiLCJjb3JlIiwicGx1Z2lucyIsImRlYnVnIiwid2F6dWhTZWN1cml0eSIsInNlcnZlckluZm8iLCJodHRwIiwiZ2V0U2VydmVySW5mbyIsInJlZ2lzdGVyUm91dGVIYW5kbGVyQ29udGV4dCIsImNvbnRleHQiLCJyZXF1ZXN0Iiwic2VydmVyIiwiaW5mbyIsInNlY3VyaXR5IiwiYXBpIiwiY2xpZW50IiwiYXNJbnRlcm5hbFVzZXIiLCJhdXRoZW50aWNhdGUiLCJhcGlIb3N0SUQiLCJBcGlJbnRlcmNlcHRvciIsIm1ldGhvZCIsInBhdGgiLCJkYXRhIiwib3B0aW9ucyIsInJlcXVlc3RBc0ludGVybmFsVXNlciIsImFzQ3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImF1dGhDb250ZXh0IiwicmVxdWVzdEFzQ3VycmVudFVzZXIiLCJ0b2tlbiIsImhlYWRlcnMiLCJjb29raWUiLCJyZWdpc3Rlck9uUHJlUmVzcG9uc2UiLCJyZXNwb25zZSIsInRvb2xraXQiLCJhZGRpdGlvbmFsSGVhZGVycyIsIm5leHQiLCJyb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJzdGFydCIsImdsb2JhbENvbmZpZ3VyYXRpb24iLCJjb25maWciLCJsZWdhY3kiLCJnbG9iYWxDb25maWckIiwicGlwZSIsInRvUHJvbWlzZSIsIndhenVoQXBpQ2xpZW50IiwiY29udGV4dFNlcnZlciIsIndhenVoIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQTZCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7QUF3Qk8sTUFBTUEsV0FBTixDQUF3RTtBQUc3RUMsRUFBQUEsV0FBVyxDQUFrQkMsa0JBQWxCLEVBQWdFO0FBQUEsU0FBOUNBLGtCQUE4QyxHQUE5Q0Esa0JBQThDOztBQUFBOztBQUN6RSxT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UTtBQU1mbkMsTUFBQUEsTUFBTSxFQUFFb0M7QUFOTyxLQUFqQixFQXBDa0MsQ0E2Q2xDOztBQUNBLGdDQUFnQjtBQUNkOUMsTUFBQUEsSUFEYztBQUVkK0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xsRCxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFBTCxDQUFZQyxHQUFaLENBQWdCLGdCQUFoQixDQURIO0FBRUxlLFFBQUFBLEdBQUcsRUFBRWdDO0FBRkEsT0FGTztBQU1kbkMsTUFBQUEsTUFBTSxFQUFFb0M7QUFOTSxLQUFoQixFQTlDa0MsQ0F1RGxDOztBQUNBLDRCQUFZO0FBQ1Y5QyxNQUFBQSxJQURVO0FBRVYrQyxNQUFBQSxLQUFLLEVBQUU7QUFDTGxELFFBQUFBLE1BQU0sRUFBRSxLQUFLQSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsT0FBaEIsQ0FESDtBQUVMZSxRQUFBQSxHQUFHLEVBQUVnQztBQUZBLE9BRkc7QUFNVm5DLE1BQUFBLE1BQU0sRUFBRW9DO0FBTkUsS0FBWjtBQVFBLFdBQU8sRUFBUDtBQUNEOztBQUVNRSxFQUFBQSxJQUFQLEdBQWMsQ0FBRzs7QUF0SDREIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIEVsYXN0aWNzZWFyY2ggQi5WLiB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvclxuICogbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWUgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGhcbiAqIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0XG4gKiBvd25lcnNoaXAuIEVsYXN0aWNzZWFyY2ggQi5WLiBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyXG4gKiB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5XG4gKiBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIENvcmVTZXR1cCxcbiAgQ29yZVN0YXJ0LFxuICBMb2dnZXIsXG4gIFBsdWdpbixcbiAgUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0LFxuICBTaGFyZWRHbG9iYWxDb25maWcsXG59IGZyb20gJ29wZW5zZWFyY2hfZGFzaGJvYXJkcy9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBXYXp1aFBsdWdpblNldHVwLCBXYXp1aFBsdWdpblN0YXJ0LCBQbHVnaW5TZXR1cCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2VjdXJpdHlPYmosIElTZWN1cml0eUZhY3RvcnkgfSBmcm9tICcuL2xpYi9zZWN1cml0eS1mYWN0b3J5JztcbmltcG9ydCB7IHNldHVwUm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgam9iSW5pdGlhbGl6ZVJ1biwgam9iTW9uaXRvcmluZ1J1biwgam9iU2NoZWR1bGVyUnVuLCBqb2JRdWV1ZVJ1biwgam9iTWlncmF0aW9uVGFza3NSdW4gfSBmcm9tICcuL3N0YXJ0JztcbmltcG9ydCB7IGdldENvb2tpZVZhbHVlQnlOYW1lIH0gZnJvbSAnLi9saWIvY29va2llJztcbmltcG9ydCAqIGFzIEFwaUludGVyY2VwdG9yICBmcm9tICcuL2xpYi9hcGktaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgc2NoZW1hLCBUeXBlT2YgfSBmcm9tICdAb3NkL2NvbmZpZy1zY2hlbWEnO1xuaW1wb3J0IHR5cGUgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBtb2R1bGUgJ29wZW5zZWFyY2hfZGFzaGJvYXJkcy9zZXJ2ZXInIHtcbiAgaW50ZXJmYWNlIFJlcXVlc3RIYW5kbGVyQ29udGV4dCB7XG4gICAgd2F6dWg6IHtcbiAgICAgIGxvZ2dlcjogTG9nZ2VyLFxuICAgICAgcGx1Z2luczogUGx1Z2luU2V0dXAsXG4gICAgICBzZWN1cml0eTogSVNlY3VyaXR5RmFjdG9yeVxuICAgICAgYXBpOiB7XG4gICAgICAgIGNsaWVudDoge1xuICAgICAgICAgIGFzSW50ZXJuYWxVc2VyOiB7XG4gICAgICAgICAgICBhdXRoZW50aWNhdGU6IChhcGlIb3N0SUQ6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmc+XG4gICAgICAgICAgICByZXF1ZXN0OiAobWV0aG9kOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zOiB7YXBpSG9zdElEOiBzdHJpbmcsIGZvcmNlUmVmcmVzaD86Ym9vbGVhbn0pID0+IFByb21pc2U8YW55PlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXNDdXJyZW50VXNlcjoge1xuICAgICAgICAgICAgYXV0aGVudGljYXRlOiAoYXBpSG9zdElEOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nPlxuICAgICAgICAgICAgcmVxdWVzdDogKG1ldGhvZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9uczoge2FwaUhvc3RJRDogc3RyaW5nLCBmb3JjZVJlZnJlc2g/OmJvb2xlYW59KSA9PiBQcm9taXNlPGFueT5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXp1aFBsdWdpbiBpbXBsZW1lbnRzIFBsdWdpbjxXYXp1aFBsdWdpblNldHVwLCBXYXp1aFBsdWdpblN0YXJ0PiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbml0aWFsaXplckNvbnRleHQ6IFBsdWdpbkluaXRpYWxpemVyQ29udGV4dCkge1xuICAgIHRoaXMubG9nZ2VyID0gaW5pdGlhbGl6ZXJDb250ZXh0LmxvZ2dlci5nZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzZXR1cChjb3JlOiBDb3JlU2V0dXAsIHBsdWdpbnM6IFBsdWdpblNldHVwKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ1dhenVoLXd1aTogU2V0dXAnKTtcblxuICAgIGNvbnN0IHdhenVoU2VjdXJpdHkgPSBhd2FpdCBTZWN1cml0eU9iaihwbHVnaW5zKTtcbiAgICBjb25zdCBzZXJ2ZXJJbmZvID0gY29yZS5odHRwLmdldFNlcnZlckluZm8oKTtcblxuICAgIGNvcmUuaHR0cC5yZWdpc3RlclJvdXRlSGFuZGxlckNvbnRleHQoJ3dhenVoJywgKGNvbnRleHQsIHJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIsXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgIGluZm86IHNlcnZlckluZm8sXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnMsXG4gICAgICAgIHNlY3VyaXR5OiB3YXp1aFNlY3VyaXR5LFxuICAgICAgICBhcGk6IHtcbiAgICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgIGFzSW50ZXJuYWxVc2VyOiB7XG4gICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZTogYXN5bmMgKGFwaUhvc3RJRCkgPT4gYXdhaXQgQXBpSW50ZXJjZXB0b3IuYXV0aGVudGljYXRlKGFwaUhvc3RJRCksXG4gICAgICAgICAgICAgIHJlcXVlc3Q6IGFzeW5jIChtZXRob2QsIHBhdGgsIGRhdGEsIG9wdGlvbnMpID0+IGF3YWl0IEFwaUludGVyY2VwdG9yLnJlcXVlc3RBc0ludGVybmFsVXNlcihtZXRob2QsIHBhdGgsIGRhdGEsIG9wdGlvbnMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzQ3VycmVudFVzZXI6IHtcbiAgICAgICAgICAgICAgYXV0aGVudGljYXRlOiBhc3luYyAoYXBpSG9zdElEKSA9PiBhd2FpdCBBcGlJbnRlcmNlcHRvci5hdXRoZW50aWNhdGUoYXBpSG9zdElELCAoYXdhaXQgd2F6dWhTZWN1cml0eS5nZXRDdXJyZW50VXNlcihyZXF1ZXN0LCBjb250ZXh0KSkuYXV0aENvbnRleHQpLFxuICAgICAgICAgICAgICByZXF1ZXN0OiBhc3luYyAobWV0aG9kLCBwYXRoLCBkYXRhLCBvcHRpb25zKSA9PiBhd2FpdCBBcGlJbnRlcmNlcHRvci5yZXF1ZXN0QXNDdXJyZW50VXNlcihtZXRob2QsIHBhdGgsIGRhdGEsIHsuLi5vcHRpb25zLCB0b2tlbjogZ2V0Q29va2llVmFsdWVCeU5hbWUocmVxdWVzdC5oZWFkZXJzLmNvb2tpZSwgJ3d6LXRva2VuJyl9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgY3VzdG9tIGhlYWRlcnMgdG8gdGhlIHJlc3BvbnNlc1xuICAgIGNvcmUuaHR0cC5yZWdpc3Rlck9uUHJlUmVzcG9uc2UoKHJlcXVlc3QsIHJlc3BvbnNlLCB0b29sa2l0KSA9PiB7XG4gICAgICBjb25zdCBhZGRpdGlvbmFsSGVhZGVycyA9IHtcbiAgICAgICAgJ3gtZnJhbWUtb3B0aW9ucyc6ICdzYW1lb3JpZ2luJyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gdG9vbGtpdC5uZXh0KHsgaGVhZGVyczogYWRkaXRpb25hbEhlYWRlcnMgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSb3V0ZXNcbiAgICBjb25zdCByb3V0ZXIgPSBjb3JlLmh0dHAuY3JlYXRlUm91dGVyKCk7XG4gICAgc2V0dXBSb3V0ZXMocm91dGVyKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzdGFydChjb3JlOiBDb3JlU3RhcnQpIHtcbiAgICBjb25zdCBnbG9iYWxDb25maWd1cmF0aW9uOiBTaGFyZWRHbG9iYWxDb25maWcgPSBhd2FpdCB0aGlzLmluaXRpYWxpemVyQ29udGV4dC5jb25maWcubGVnYWN5Lmdsb2JhbENvbmZpZyQucGlwZShmaXJzdCgpKS50b1Byb21pc2UoKTtcbiAgICBjb25zdCB3YXp1aEFwaUNsaWVudCA9IHtcbiAgICAgIGNsaWVudDoge1xuICAgICAgICBhc0ludGVybmFsVXNlcjoge1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZTogYXN5bmMgKGFwaUhvc3RJRCkgPT4gYXdhaXQgQXBpSW50ZXJjZXB0b3IuYXV0aGVudGljYXRlKGFwaUhvc3RJRCksXG4gICAgICAgICAgcmVxdWVzdDogYXN5bmMgKG1ldGhvZCwgcGF0aCwgZGF0YSwgb3B0aW9ucykgPT4gYXdhaXQgQXBpSW50ZXJjZXB0b3IucmVxdWVzdEFzSW50ZXJuYWxVc2VyKG1ldGhvZCwgcGF0aCwgZGF0YSwgb3B0aW9ucyksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udGV4dFNlcnZlciA9IHtcbiAgICAgIGNvbmZpZzogZ2xvYmFsQ29uZmlndXJhdGlvblxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplXG4gICAgam9iSW5pdGlhbGl6ZVJ1bih7XG4gICAgICBjb3JlLFxuICAgICAgd2F6dWg6IHtcbiAgICAgICAgbG9nZ2VyOiB0aGlzLmxvZ2dlci5nZXQoJ2luaXRpYWxpemUnKSxcbiAgICAgICAgYXBpOiB3YXp1aEFwaUNsaWVudFxuICAgICAgfSxcbiAgICAgIHNlcnZlcjogY29udGV4dFNlcnZlclxuICAgIH0pO1xuXG4gICAgLy8gTWlncmF0aW9uIHRhc2tzXG4gICAgam9iTWlncmF0aW9uVGFza3NSdW4oe1xuICAgICAgY29yZSwgXG4gICAgICB3YXp1aDoge1xuICAgICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLmdldCgnbWlncmF0aW9uLXRhc2snKSxcbiAgICAgICAgYXBpOiB3YXp1aEFwaUNsaWVudFxuICAgICAgfSxcbiAgICAgIHNlcnZlcjogY29udGV4dFNlcnZlclxuICAgIH0pO1xuXG4gICAgLy8gTW9uaXRvcmluZ1xuICAgIGpvYk1vbml0b3JpbmdSdW4oe1xuICAgICAgY29yZSxcbiAgICAgIHdhenVoOiB7XG4gICAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIuZ2V0KCdtb25pdG9yaW5nJyksXG4gICAgICAgIGFwaTogd2F6dWhBcGlDbGllbnRcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXI6IGNvbnRleHRTZXJ2ZXJcbiAgICB9KTtcblxuICAgIC8vIFNjaGVkdWxlclxuICAgIGpvYlNjaGVkdWxlclJ1bih7XG4gICAgICBjb3JlLFxuICAgICAgd2F6dWg6IHtcbiAgICAgICAgbG9nZ2VyOiB0aGlzLmxvZ2dlci5nZXQoJ2Nyb24tc2NoZWR1bGVyJyksXG4gICAgICAgIGFwaTogd2F6dWhBcGlDbGllbnRcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXI6IGNvbnRleHRTZXJ2ZXJcbiAgICB9KTtcblxuICAgIC8vIFF1ZXVlXG4gICAgam9iUXVldWVSdW4oe1xuICAgICAgY29yZSxcbiAgICAgIHdhenVoOiB7XG4gICAgICAgIGxvZ2dlcjogdGhpcy5sb2dnZXIuZ2V0KCdxdWV1ZScpLFxuICAgICAgICBhcGk6IHdhenVoQXBpQ2xpZW50XG4gICAgICB9LFxuICAgICAgc2VydmVyOiBjb250ZXh0U2VydmVyXG4gICAgfSk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7IH1cbn1cbiJdfQ==