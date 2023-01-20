"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRoutes = void 0;

var _wazuhApi = require("./wazuh-api");

var _wazuhElastic = require("./wazuh-elastic");

var _wazuhHosts = require("./wazuh-hosts");

var _wazuhUtils = require("./wazuh-utils");

var _wazuhReporting = require("./wazuh-reporting");

const setupRoutes = router => {
  (0, _wazuhApi.WazuhApiRoutes)(router);
  (0, _wazuhElastic.WazuhElasticRoutes)(router);
  (0, _wazuhHosts.WazuhHostsRoutes)(router);
  (0, _wazuhUtils.WazuhUtilsRoutes)(router);
  (0, _wazuhReporting.WazuhReportingRoutes)(router);
  (0, _wazuhUtils.UiLogsRoutes)(router);
};

exports.setupRoutes = setupRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbInNldHVwUm91dGVzIiwicm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sTUFBTUEsV0FBVyxHQUFJQyxNQUFELElBQXFCO0FBQzVDLGdDQUFlQSxNQUFmO0FBQ0Esd0NBQW1CQSxNQUFuQjtBQUNBLG9DQUFpQkEsTUFBakI7QUFDQSxvQ0FBaUJBLE1BQWpCO0FBQ0EsNENBQXFCQSxNQUFyQjtBQUNBLGdDQUFhQSxNQUFiO0FBQ0gsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb3V0ZXIgfSBmcm9tICdvcGVuc2VhcmNoX2Rhc2hib2FyZHMvc2VydmVyJztcbmltcG9ydCB7IFdhenVoQXBpUm91dGVzIH0gZnJvbSAnLi93YXp1aC1hcGknO1xuaW1wb3J0IHsgV2F6dWhFbGFzdGljUm91dGVzIH0gZnJvbSBcIi4vd2F6dWgtZWxhc3RpY1wiO1xuaW1wb3J0IHsgV2F6dWhIb3N0c1JvdXRlcyB9IGZyb20gXCIuL3dhenVoLWhvc3RzXCI7XG5pbXBvcnQgeyBXYXp1aFV0aWxzUm91dGVzLCBVaUxvZ3NSb3V0ZXMgfSBmcm9tICcuL3dhenVoLXV0aWxzJ1xuaW1wb3J0IHsgV2F6dWhSZXBvcnRpbmdSb3V0ZXMgfSBmcm9tIFwiLi93YXp1aC1yZXBvcnRpbmdcIjtcblxuZXhwb3J0IGNvbnN0IHNldHVwUm91dGVzID0gKHJvdXRlcjogSVJvdXRlcikgPT4ge1xuICAgIFdhenVoQXBpUm91dGVzKHJvdXRlcik7XG4gICAgV2F6dWhFbGFzdGljUm91dGVzKHJvdXRlcik7XG4gICAgV2F6dWhIb3N0c1JvdXRlcyhyb3V0ZXIpO1xuICAgIFdhenVoVXRpbHNSb3V0ZXMocm91dGVyKTtcbiAgICBXYXp1aFJlcG9ydGluZ1JvdXRlcyhyb3V0ZXIpO1xuICAgIFVpTG9nc1JvdXRlcyhyb3V0ZXIpO1xufTtcbiJdfQ==