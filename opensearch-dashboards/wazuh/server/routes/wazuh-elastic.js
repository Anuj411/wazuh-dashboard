"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WazuhElasticRoutes = WazuhElasticRoutes;

var _controllers = require("../controllers");

var _configSchema = require("@osd/config-schema");

var _constants = require("../../common/constants");

/*
 * Wazuh app - Module for Wazuh-Elastic routes
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
function WazuhElasticRoutes(router) {
  const ctrl = new _controllers.WazuhElasticCtrl();

  const schemaSampleAlertsCategories = _configSchema.schema.oneOf([_constants.WAZUH_SAMPLE_ALERTS_CATEGORY_SECURITY, _constants.WAZUH_SAMPLE_ALERTS_CATEGORY_AUDITING_POLICY_MONITORING, _constants.WAZUH_SAMPLE_ALERTS_CATEGORY_THREAT_DETECTION].map(category => _configSchema.schema.literal(category))); // Endpoints


  router.get({
    path: '/elastic/security/current-platform',
    validate: false
  }, async (context, request, response) => ctrl.getCurrentPlatform(context, request, response));
  router.get({
    path: '/elastic/visualizations/{tab}/{pattern}',
    validate: {
      params: _configSchema.schema.object({
        tab: _configSchema.schema.string(),
        pattern: _configSchema.schema.string()
      })
    }
  }, async (context, request, response) => ctrl.createVis(context, request, response));
  router.post({
    path: '/elastic/visualizations/{tab}/{pattern}',
    validate: {
      params: _configSchema.schema.object({
        tab: _configSchema.schema.string(),
        pattern: _configSchema.schema.string()
      }),
      body: _configSchema.schema.any()
    }
  }, async (context, request, response) => ctrl.createClusterVis(context, request, response));
  router.get({
    path: '/elastic/template/{pattern}',
    validate: {
      params: _configSchema.schema.object({
        pattern: _configSchema.schema.string()
      })
    }
  }, async (context, request, response) => ctrl.getTemplate(context, request, response));
  router.get({
    path: '/elastic/index-patterns/{pattern}',
    validate: {
      params: _configSchema.schema.object({
        pattern: _configSchema.schema.string()
      })
    }
  }, async (context, request, response) => ctrl.checkPattern(context, request, response));
  router.get({
    path: '/elastic/top/{mode}/{cluster}/{field}/{pattern}',
    validate: {
      params: _configSchema.schema.object({
        mode: _configSchema.schema.string(),
        cluster: _configSchema.schema.string(),
        field: _configSchema.schema.string(),
        pattern: _configSchema.schema.string()
      }),
      query: _configSchema.schema.object({
        agentsList: _configSchema.schema.string()
      })
    }
  }, async (context, request, response) => ctrl.getFieldTop(context, request, response));
  router.get({
    path: '/elastic/samplealerts',
    validate: false
  }, async (context, request, response) => ctrl.haveSampleAlerts(context, request, response));
  router.get({
    path: '/elastic/samplealerts/{category}',
    validate: {
      params: _configSchema.schema.object({
        category: schemaSampleAlertsCategories
      })
    }
  }, async (context, request, response) => ctrl.haveSampleAlertsOfCategory(context, request, response));
  router.post({
    path: '/elastic/samplealerts/{category}',
    validate: {
      params: _configSchema.schema.object({
        category: schemaSampleAlertsCategories
      }),
      body: _configSchema.schema.any()
    }
  }, async (context, request, response) => ctrl.createSampleAlerts(context, request, response));
  router.delete({
    path: '/elastic/samplealerts/{category}',
    validate: {
      params: _configSchema.schema.object({
        category: schemaSampleAlertsCategories
      })
    }
  }, async (context, request, response) => ctrl.deleteSampleAlerts(context, request, response));
  router.post({
    path: '/elastic/alerts',
    validate: {
      body: _configSchema.schema.any()
    }
  }, async (context, request, response) => ctrl.alerts(context, request, response));
  router.get({
    path: '/elastic/statistics',
    validate: false
  }, async (context, request, response) => ctrl.existStatisticsIndices(context, request, response));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhenVoLWVsYXN0aWMudHMiXSwibmFtZXMiOlsiV2F6dWhFbGFzdGljUm91dGVzIiwicm91dGVyIiwiY3RybCIsIldhenVoRWxhc3RpY0N0cmwiLCJzY2hlbWFTYW1wbGVBbGVydHNDYXRlZ29yaWVzIiwic2NoZW1hIiwib25lT2YiLCJXQVpVSF9TQU1QTEVfQUxFUlRTX0NBVEVHT1JZX1NFQ1VSSVRZIiwiV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SWV9BVURJVElOR19QT0xJQ1lfTU9OSVRPUklORyIsIldBWlVIX1NBTVBMRV9BTEVSVFNfQ0FURUdPUllfVEhSRUFUX0RFVEVDVElPTiIsIm1hcCIsImNhdGVnb3J5IiwibGl0ZXJhbCIsImdldCIsInBhdGgiLCJ2YWxpZGF0ZSIsImNvbnRleHQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJnZXRDdXJyZW50UGxhdGZvcm0iLCJwYXJhbXMiLCJvYmplY3QiLCJ0YWIiLCJzdHJpbmciLCJwYXR0ZXJuIiwiY3JlYXRlVmlzIiwicG9zdCIsImJvZHkiLCJhbnkiLCJjcmVhdGVDbHVzdGVyVmlzIiwiZ2V0VGVtcGxhdGUiLCJjaGVja1BhdHRlcm4iLCJtb2RlIiwiY2x1c3RlciIsImZpZWxkIiwicXVlcnkiLCJhZ2VudHNMaXN0IiwiZ2V0RmllbGRUb3AiLCJoYXZlU2FtcGxlQWxlcnRzIiwiaGF2ZVNhbXBsZUFsZXJ0c09mQ2F0ZWdvcnkiLCJjcmVhdGVTYW1wbGVBbGVydHMiLCJkZWxldGUiLCJkZWxldGVTYW1wbGVBbGVydHMiLCJhbGVydHMiLCJleGlzdFN0YXRpc3RpY3NJbmRpY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0E7O0FBRUE7O0FBQ0E7O0FBZEE7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLGtCQUFULENBQTRCQyxNQUE1QixFQUE2QztBQUNsRCxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsNkJBQUosRUFBYjs7QUFDQSxRQUFNQyw0QkFBNEIsR0FBR0MscUJBQU9DLEtBQVAsQ0FBYSxDQUNoREMs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RSxxQkFEUjtBQUVFQyxJQUFBQSxRQUFRLEVBQUU7QUFGWixHQURGLEVBS0UsT0FBT0MsT0FBUCxFQUFnQkMsT0FBaEIsRUFBeUJDLFFBQXpCLEtBQXNDaEIsSUFBSSxDQUFDMEMsc0JBQUwsQ0FBNEI1QixPQUE1QixFQUFxQ0MsT0FBckMsRUFBOENDLFFBQTlDLENBTHhDO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBXYXp1aC1FbGFzdGljIHJvdXRlc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmltcG9ydCB7IFdhenVoRWxhc3RpY0N0cmwgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSAnb3BlbnNlYXJjaF9kYXNoYm9hcmRzL3NlcnZlcic7XG5pbXBvcnQgeyBzY2hlbWEgfSBmcm9tICdAb3NkL2NvbmZpZy1zY2hlbWEnO1xuaW1wb3J0IHsgV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SWV9TRUNVUklUWSwgV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SWV9BVURJVElOR19QT0xJQ1lfTU9OSVRPUklORywgV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SWV9USFJFQVRfREVURUNUSU9OIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBXYXp1aEVsYXN0aWNSb3V0ZXMocm91dGVyOiBJUm91dGVyKSB7XG4gIGNvbnN0IGN0cmwgPSBuZXcgV2F6dWhFbGFzdGljQ3RybCgpO1xuICBjb25zdCBzY2hlbWFTYW1wbGVBbGVydHNDYXRlZ29yaWVzID0gc2NoZW1hLm9uZU9mKFtcbiAgICBXQVpVSF9TQU1QTEVfQUxFUlRTX0NBVEVHT1JZX1NFQ1VSSVRZLFxuICAgIFdBWlVIX1NBTVBMRV9BTEVSVFNfQ0FURUdPUllfQVVESVRJTkdfUE9MSUNZX01PTklUT1JJTkcsXG4gICAgV0FaVUhfU0FNUExFX0FMRVJUU19DQVRFR09SWV9USFJFQVRfREVURUNUSU9OXG4gIF0ubWFwKGNhdGVnb3J5ID0+IHNjaGVtYS5saXRlcmFsKGNhdGVnb3J5KSkpO1xuXG4gIC8vIEVuZHBvaW50c1xuICByb3V0ZXIuZ2V0KFxuICAgIHtcbiAgICAgIHBhdGg6ICcvZWxhc3RpYy9zZWN1cml0eS9jdXJyZW50LXBsYXRmb3JtJyxcbiAgICAgIHZhbGlkYXRlOiBmYWxzZSxcbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5nZXRDdXJyZW50UGxhdGZvcm0oY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvdmlzdWFsaXphdGlvbnMve3RhYn0ve3BhdHRlcm59JyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIHBhcmFtczogc2NoZW1hLm9iamVjdCh7XG4gICAgICAgICAgdGFiOiBzY2hlbWEuc3RyaW5nKCksXG4gICAgICAgICAgcGF0dGVybjogc2NoZW1hLnN0cmluZygpLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5jcmVhdGVWaXMoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLnBvc3QoXG4gICAge1xuICAgICAgcGF0aDogJy9lbGFzdGljL3Zpc3VhbGl6YXRpb25zL3t0YWJ9L3twYXR0ZXJufScsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBwYXJhbXM6IHNjaGVtYS5vYmplY3Qoe1xuICAgICAgICAgIHRhYjogc2NoZW1hLnN0cmluZygpLFxuICAgICAgICAgIHBhdHRlcm46IHNjaGVtYS5zdHJpbmcoKSxcbiAgICAgICAgfSksXG4gICAgICAgIGJvZHk6IHNjaGVtYS5hbnkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBjdHJsLmNyZWF0ZUNsdXN0ZXJWaXMoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvdGVtcGxhdGUve3BhdHRlcm59JyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIHBhcmFtczogc2NoZW1hLm9iamVjdCh7XG4gICAgICAgICAgcGF0dGVybjogc2NoZW1hLnN0cmluZygpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBjdHJsLmdldFRlbXBsYXRlKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKVxuICApO1xuXG4gIHJvdXRlci5nZXQoXG4gICAge1xuICAgICAgcGF0aDogJy9lbGFzdGljL2luZGV4LXBhdHRlcm5zL3twYXR0ZXJufScsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBwYXJhbXM6IHNjaGVtYS5vYmplY3Qoe1xuICAgICAgICAgIHBhdHRlcm46IHNjaGVtYS5zdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5jaGVja1BhdHRlcm4oY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvdG9wL3ttb2RlfS97Y2x1c3Rlcn0ve2ZpZWxkfS97cGF0dGVybn0nLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgcGFyYW1zOiBzY2hlbWEub2JqZWN0KHtcbiAgICAgICAgICBtb2RlOiBzY2hlbWEuc3RyaW5nKCksXG4gICAgICAgICAgY2x1c3Rlcjogc2NoZW1hLnN0cmluZygpLFxuICAgICAgICAgIGZpZWxkOiBzY2hlbWEuc3RyaW5nKCksXG4gICAgICAgICAgcGF0dGVybjogc2NoZW1hLnN0cmluZygpLFxuICAgICAgICB9KSxcbiAgICAgICAgcXVlcnk6IHNjaGVtYS5vYmplY3Qoe1xuICAgICAgICAgIGFnZW50c0xpc3Q6IHNjaGVtYS5zdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5nZXRGaWVsZFRvcChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSlcbiAgKTtcblxuICByb3V0ZXIuZ2V0KFxuICAgIHtcbiAgICAgIHBhdGg6ICcvZWxhc3RpYy9zYW1wbGVhbGVydHMnLFxuICAgICAgdmFsaWRhdGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBjdHJsLmhhdmVTYW1wbGVBbGVydHMoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvc2FtcGxlYWxlcnRzL3tjYXRlZ29yeX0nLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgcGFyYW1zOiBzY2hlbWEub2JqZWN0KHtcbiAgICAgICAgICBjYXRlZ29yeTogc2NoZW1hU2FtcGxlQWxlcnRzQ2F0ZWdvcmllcyxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhc3luYyAoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpID0+IGN0cmwuaGF2ZVNhbXBsZUFsZXJ0c09mQ2F0ZWdvcnkoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLnBvc3QoXG4gICAge1xuICAgICAgcGF0aDogJy9lbGFzdGljL3NhbXBsZWFsZXJ0cy97Y2F0ZWdvcnl9JyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIHBhcmFtczogc2NoZW1hLm9iamVjdCh7XG4gICAgICAgICAgY2F0ZWdvcnk6IHNjaGVtYVNhbXBsZUFsZXJ0c0NhdGVnb3JpZXMsXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBzY2hlbWEuYW55KClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhc3luYyAoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpID0+IGN0cmwuY3JlYXRlU2FtcGxlQWxlcnRzKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKVxuICApO1xuXG4gIHJvdXRlci5kZWxldGUoXG4gICAge1xuICAgICAgcGF0aDogJy9lbGFzdGljL3NhbXBsZWFsZXJ0cy97Y2F0ZWdvcnl9JyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIHBhcmFtczogc2NoZW1hLm9iamVjdCh7XG4gICAgICAgICAgY2F0ZWdvcnk6IHNjaGVtYVNhbXBsZUFsZXJ0c0NhdGVnb3JpZXMsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKSA9PiBjdHJsLmRlbGV0ZVNhbXBsZUFsZXJ0cyhjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSlcbiAgKTtcblxuICByb3V0ZXIucG9zdChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvYWxlcnRzJyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIGJvZHk6IHNjaGVtYS5hbnkoKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5hbGVydHMoY29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UpXG4gICk7XG5cbiAgcm91dGVyLmdldChcbiAgICB7XG4gICAgICBwYXRoOiAnL2VsYXN0aWMvc3RhdGlzdGljcycsXG4gICAgICB2YWxpZGF0ZTogZmFsc2VcbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCByZXF1ZXN0LCByZXNwb25zZSkgPT4gY3RybC5leGlzdFN0YXRpc3RpY3NJbmRpY2VzKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKVxuICApO1xufVxuIl19