"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monitoringTemplate = void 0;

/*
 * Wazuh app - Module for monitoring template
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const monitoringTemplate = {
  order: 0,
  settings: {
    'index.refresh_interval': '5s'
  },
  mappings: {
    properties: {
      timestamp: {
        type: 'date',
        format: 'dateOptionalTime'
      },
      status: {
        type: 'keyword'
      },
      ip: {
        type: 'keyword'
      },
      host: {
        type: 'keyword'
      },
      name: {
        type: 'keyword'
      },
      id: {
        type: 'keyword'
      },
      cluster: {
        properties: {
          name: {
            type: 'keyword'
          }
        }
      }
    }
  }
};
exports.monitoringTemplate = monitoringTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JpbmctdGVtcGxhdGUudHMiXSwibmFtZXMiOlsibW9uaXRvcmluZ1RlbXBsYXRlIiwib3JkZXIiLCJzZXR0aW5ncyIsIm1hcHBpbmdzIiwicHJvcGVydGllcyIsInRpbWVzdGFtcCIsInR5cGUiLCJmb3JtYXQiLCJzdGF0dXMiLCJpcCIsImhvc3QiLCJuYW1lIiwiaWQiLCJjbHVzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBV08sTUFBTUEsa0JBQWtCLEdBQUc7QUFDaENDLEVBQUFBLEtBQUssRUFBRSxDQUR5QjtBQUVoQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ1IsOEJBQTBCO0FBRGxCLEdBRnNCO0FBS2hDQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLE1BQUFBLFNBQVMsRUFBRTtBQUNUQyxRQUFBQSxJQUFJLEVBQUUsTUFERztBQUVUQyxRQUFBQSxNQUFNLEVBQUU7QUFGQyxPQUREO0FBS1ZDLE1BQUFBLE1BQU0sRUFBRTtBQUNORixRQUFBQSxJQUFJLEVBQUU7QUFEQSxPQUxFO0FBUVZHLE1BQUFBLEVBQUUsRUFBRTtBQUNGSCxRQUFBQSxJQUFJLEVBQUU7QUFESixPQVJNO0FBV1ZJLE1BQUFBLElBQUksRUFBRTtBQUNKSixRQUFBQSxJQUFJLEVBQUU7QUFERixPQVhJO0FBY1ZLLE1BQUFBLElBQUksRUFBRTtBQUNKTCxRQUFBQSxJQUFJLEVBQUU7QUFERixPQWRJO0FBaUJWTSxNQUFBQSxFQUFFLEVBQUU7QUFDRk4sUUFBQUEsSUFBSSxFQUFFO0FBREosT0FqQk07QUFvQlZPLE1BQUFBLE9BQU8sRUFBRTtBQUNQVCxRQUFBQSxVQUFVLEVBQUU7QUFDVk8sVUFBQUEsSUFBSSxFQUFFO0FBQ0pMLFlBQUFBLElBQUksRUFBRTtBQURGO0FBREk7QUFETDtBQXBCQztBQURKO0FBTHNCLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSBmb3IgbW9uaXRvcmluZyB0ZW1wbGF0ZVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBjb25zdCBtb25pdG9yaW5nVGVtcGxhdGUgPSB7XG4gIG9yZGVyOiAwLFxuICBzZXR0aW5nczoge1xuICAgICdpbmRleC5yZWZyZXNoX2ludGVydmFsJzogJzVzJ1xuICB9LFxuICBtYXBwaW5nczoge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHRpbWVzdGFtcDoge1xuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGZvcm1hdDogJ2RhdGVPcHRpb25hbFRpbWUnXG4gICAgICB9LFxuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgfSxcbiAgICAgIGlwOiB7XG4gICAgICAgIHR5cGU6ICdrZXl3b3JkJ1xuICAgICAgfSxcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgdHlwZTogJ2tleXdvcmQnXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgIH0sXG4gICAgICBjbHVzdGVyOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAna2V5d29yZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iXX0=