"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCron = parseCron;

var _logger = require("./logger");

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _constants = require("../../common/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Module to transform seconds interval to cron readable format
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
function parseCron(interval) {
  try {
    if (!interval) throw new Error('Interval not found');
    const intervalToNumber = parseInt(interval);

    if (!intervalToNumber || typeof intervalToNumber !== 'number') {
      throw new Error('Interval not valid');
    }

    ;

    if (intervalToNumber < 60) {
      // 60 seconds / 1 minute
      throw new Error('Interval too low');
    }

    ;

    if (intervalToNumber >= 84600) {
      throw new Error('Interval too high');
    }

    const minutes = parseInt(intervalToNumber / 60);
    const cronstr = `0 */${minutes} * * * *`;

    if (!_nodeCron.default.validate(cronstr)) {
      throw new Error('Generated cron expression not valid for node-cron module');
    }

    (0, _logger.log)('cron:parse-interval', `Using the next interval: ${cronstr}`, 'debug');
    return cronstr;
  } catch (error) {
    (0, _logger.log)('cron:parse-interval', `Using default value ${_constants.WAZUH_MONITORING_DEFAULT_CRON_FREQ} due to: ${error.message || error}`);
    return _constants.WAZUH_MONITORING_DEFAULT_CRON_FREQ;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLWNyb24udHMiXSwibmFtZXMiOlsicGFyc2VDcm9uIiwiaW50ZXJ2YWwiLCJFcnJvciIsImludGVydmFsVG9OdW1iZXIiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJjcm9uc3RyIiwiY3JvbiIsInZhbGlkYXRlIiwiZXJyb3IiLCJXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfQ1JPTl9GUkVRIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBOztBQUNBOztBQUNBOzs7O0FBYkE7Ozs7Ozs7Ozs7O0FBZU8sU0FBU0EsU0FBVCxDQUFtQkMsUUFBbkIsRUFBcUM7QUFDMUMsTUFBSTtBQUNGLFFBQUksQ0FBQ0EsUUFBTCxFQUFlLE1BQU0sSUFBSUMsS0FBSixDQUFVLG9CQUFWLENBQU47QUFFZixVQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDSCxRQUFELENBQWpDOztBQUVBLFFBQUksQ0FBQ0UsZ0JBQUQsSUFBcUIsT0FBT0EsZ0JBQVAsS0FBNEIsUUFBckQsRUFBOEQ7QUFDNUQsWUFBTSxJQUFJRCxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEOztBQUFBOztBQUNELFFBQUlDLGdCQUFnQixHQUFHLEVBQXZCLEVBQTBCO0FBQUU7QUFDMUIsWUFBTSxJQUFJRCxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNEOztBQUFBOztBQUNELFFBQUlDLGdCQUFnQixJQUFJLEtBQXhCLEVBQThCO0FBQzVCLFlBQU0sSUFBSUQsS0FBSixDQUFVLG1CQUFWLENBQU47QUFDRDs7QUFFRCxVQUFNRyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0QsZ0JBQWdCLEdBQUcsRUFBcEIsQ0FBeEI7QUFFQSxVQUFNRyxPQUFPLEdBQUksT0FBTUQsT0FBUSxVQUEvQjs7QUFFQSxRQUFJLENBQUNFLGtCQUFLQyxRQUFMLENBQWNGLE9BQWQsQ0FBTCxFQUE0QjtBQUMxQixZQUFNLElBQUlKLEtBQUosQ0FDSiwwREFESSxDQUFOO0FBR0Q7O0FBQ0QscUJBQUkscUJBQUosRUFBNEIsNEJBQTJCSSxPQUFRLEVBQS9ELEVBQWtFLE9BQWxFO0FBQ0EsV0FBT0EsT0FBUDtBQUNELEdBMUJELENBMEJFLE9BQU9HLEtBQVAsRUFBYztBQUNkLHFCQUNFLHFCQURGLEVBRUcsdUJBQXNCQyw2Q0FBbUMsWUFBV0QsS0FBSyxDQUFDRSxPQUFOLElBQWlCRixLQUFNLEVBRjlGO0FBSUEsV0FBT0MsNkNBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSB0byB0cmFuc2Zvcm0gc2Vjb25kcyBpbnRlcnZhbCB0byBjcm9uIHJlYWRhYmxlIGZvcm1hdFxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmltcG9ydCB7IGxvZyB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBjcm9uIGZyb20gJ25vZGUtY3Jvbic7XG5pbXBvcnQgeyBXQVpVSF9NT05JVE9SSU5HX0RFRkFVTFRfQ1JPTl9GUkVRIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNyb24oaW50ZXJ2YWw6IHN0cmluZykge1xuICB0cnkge1xuICAgIGlmICghaW50ZXJ2YWwpIHRocm93IG5ldyBFcnJvcignSW50ZXJ2YWwgbm90IGZvdW5kJyk7XG5cbiAgICBjb25zdCBpbnRlcnZhbFRvTnVtYmVyID0gcGFyc2VJbnQoaW50ZXJ2YWwpO1xuXG4gICAgaWYgKCFpbnRlcnZhbFRvTnVtYmVyIHx8IHR5cGVvZiBpbnRlcnZhbFRvTnVtYmVyICE9PSAnbnVtYmVyJyl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVydmFsIG5vdCB2YWxpZCcpO1xuICAgIH07XG4gICAgaWYgKGludGVydmFsVG9OdW1iZXIgPCA2MCl7IC8vIDYwIHNlY29uZHMgLyAxIG1pbnV0ZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcnZhbCB0b28gbG93Jyk7XG4gICAgfTtcbiAgICBpZiAoaW50ZXJ2YWxUb051bWJlciA+PSA4NDYwMCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVydmFsIHRvbyBoaWdoJyk7XG4gICAgfSBcblxuICAgIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChpbnRlcnZhbFRvTnVtYmVyIC8gNjApO1xuXG4gICAgY29uc3QgY3JvbnN0ciA9IGAwICovJHttaW51dGVzfSAqICogKiAqYDtcblxuICAgIGlmICghY3Jvbi52YWxpZGF0ZShjcm9uc3RyKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdHZW5lcmF0ZWQgY3JvbiBleHByZXNzaW9uIG5vdCB2YWxpZCBmb3Igbm9kZS1jcm9uIG1vZHVsZSdcbiAgICAgICk7XG4gICAgfVxuICAgIGxvZygnY3JvbjpwYXJzZS1pbnRlcnZhbCcsIGBVc2luZyB0aGUgbmV4dCBpbnRlcnZhbDogJHtjcm9uc3RyfWAsICdkZWJ1ZycpO1xuICAgIHJldHVybiBjcm9uc3RyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZyhcbiAgICAgICdjcm9uOnBhcnNlLWludGVydmFsJyxcbiAgICAgIGBVc2luZyBkZWZhdWx0IHZhbHVlICR7V0FaVUhfTU9OSVRPUklOR19ERUZBVUxUX0NST05fRlJFUX0gZHVlIHRvOiAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YFxuICAgICk7XG4gICAgcmV0dXJuIFdBWlVIX01PTklUT1JJTkdfREVGQVVMVF9DUk9OX0ZSRVE7XG4gIH1cbn1cbiJdfQ==