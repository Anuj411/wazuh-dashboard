"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addJobToQueue = addJobToQueue;
exports.jobQueueRun = jobQueueRun;
exports.queue = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _logger = require("../../lib/logger");

var _constants = require("../../../common/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wazuh app - Add delayed jobs to a queue.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
let queue = [];
exports.queue = queue;
;
/**
 * Add a job to the queue.
 * @param job Job to add to queue
 */

function addJobToQueue(job) {
  (0, _logger.log)('queue:addJob', `New job added`, 'debug');
  queue.push(job);
}

;

async function executePendingJobs() {
  try {
    if (!queue || !queue.length) return;
    const now = new Date();
    const pendingJobs = queue.filter(item => item.startAt <= now);
    (0, _logger.log)('queue:executePendingJobs', `Pending jobs: ${pendingJobs.length}`, 'debug');

    if (!pendingJobs || !pendingJobs.length) {
      return;
    }

    ;
    exports.queue = queue = queue.filter(item => item.startAt > now);

    for (const job of pendingJobs) {
      try {
        await job.run();
      } catch (error) {
        continue;
      }

      ;
    }
  } catch (error) {
    exports.queue = queue = [];
    (0, _logger.log)('queue:executePendingJobs', error.message || error);
    return Promise.reject(error);
  }
}
/**
 * Run the job queue it plugin start.
 * @param context 
 */


function jobQueueRun(context) {
  _nodeCron.default.schedule(_constants.WAZUH_QUEUE_CRON_FREQ, async () => {
    try {
      await executePendingJobs();
    } catch (error) {
      (0, _logger.log)('queue:launchCronJob', error.message || error);
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbInF1ZXVlIiwiYWRkSm9iVG9RdWV1ZSIsImpvYiIsInB1c2giLCJleGVjdXRlUGVuZGluZ0pvYnMiLCJsZW5ndGgiLCJub3ciLCJEYXRlIiwicGVuZGluZ0pvYnMiLCJmaWx0ZXIiLCJpdGVtIiwic3RhcnRBdCIsInJ1biIsImVycm9yIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZWplY3QiLCJqb2JRdWV1ZVJ1biIsImNvbnRleHQiLCJjcm9uIiwic2NoZWR1bGUiLCJXQVpVSF9RVUVVRV9DUk9OX0ZSRVEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVdBOztBQUNBOztBQUNBOzs7O0FBYkE7Ozs7Ozs7Ozs7O0FBZU8sSUFBSUEsS0FBSyxHQUFHLEVBQVo7O0FBT047QUFFRDs7Ozs7QUFJTyxTQUFTQyxhQUFULENBQXVCQyxHQUF2QixFQUF1QztBQUM1QyxtQkFBSSxjQUFKLEVBQXFCLGVBQXJCLEVBQXFDLE9BQXJDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXRCxHQUFYO0FBQ0Q7O0FBQUE7O0FBRUQsZUFBZUUsa0JBQWYsR0FBb0M7QUFDbEMsTUFBSTtBQUNGLFFBQUksQ0FBQ0osS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0ssTUFBckIsRUFBNkI7QUFDN0IsVUFBTUMsR0FBUyxHQUFHLElBQUlDLElBQUosRUFBbEI7QUFDQSxVQUFNQyxXQUF3QixHQUFHUixLQUFLLENBQUNTLE1BQU4sQ0FBYUMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JMLEdBQXJDLENBQWpDO0FBQ0EscUJBQ0UsMEJBREYsRUFFRyxpQkFBZ0JFLFdBQVcsQ0FBQ0gsTUFBTyxFQUZ0QyxFQUdFLE9BSEY7O0FBS0EsUUFBSSxDQUFDRyxXQUFELElBQWdCLENBQUNBLFdBQVcsQ0FBQ0gsTUFBakMsRUFBd0M7QUFDdEM7QUFDRDs7QUFBQTtBQUNELG9CQUFBTCxLQUFLLEdBQUdBLEtBQUssQ0FBQ1MsTUFBTixDQUFjQyxJQUFELElBQXFCQSxJQUFJLENBQUNDLE9BQUwsR0FBZUwsR0FBakQsQ0FBUjs7QUFFQSxTQUFLLE1BQU1KLEdBQVgsSUFBa0JNLFdBQWxCLEVBQStCO0FBQzdCLFVBQUk7QUFDRixjQUFNTixHQUFHLENBQUNVLEdBQUosRUFBTjtBQUNELE9BRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZDtBQUNEOztBQUFBO0FBQ0Y7QUFDRixHQXJCRCxDQXFCRSxPQUFPQSxLQUFQLEVBQWM7QUFDZCxvQkFBQWIsS0FBSyxHQUFHLEVBQVI7QUFDQSxxQkFBSSwwQkFBSixFQUFnQ2EsS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFqRDtBQUNBLFdBQU9FLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxLQUFmLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7OztBQUlPLFNBQVNJLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQ25DQyxvQkFBS0MsUUFBTCxDQUNFQyxnQ0FERixFQUVFLFlBQVk7QUFDVixRQUFJO0FBQ0YsWUFBTWpCLGtCQUFrQixFQUF4QjtBQUNELEtBRkQsQ0FFRSxPQUFPUyxLQUFQLEVBQWM7QUFDZCx1QkFBSSxxQkFBSixFQUEyQkEsS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUE1QztBQUNEO0FBQ0YsR0FSSDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIEFkZCBkZWxheWVkIGpvYnMgdG8gYSBxdWV1ZS5cbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgY3JvbiBmcm9tICdub2RlLWNyb24nO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi4vLi4vbGliL2xvZ2dlcic7XG5pbXBvcnQgeyBXQVpVSF9RVUVVRV9DUk9OX0ZSRVEgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuZXhwb3J0IGxldCBxdWV1ZSA9IFtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElRdWV1ZUpvYntcbiAgLyoqIERhdGUgb2JqZWN0IHRvIHN0YXJ0IHRoZSBqb2IgKi9cbiAgc3RhcnRBdDogRGF0ZVxuICAvKiogRnVuY3Rpb24gdG8gZXhlY3V0ZSAqL1xuICBydW46ICgpID0+IHZvaWRcbn07XG5cbi8qKlxuICogQWRkIGEgam9iIHRvIHRoZSBxdWV1ZS5cbiAqIEBwYXJhbSBqb2IgSm9iIHRvIGFkZCB0byBxdWV1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkSm9iVG9RdWV1ZShqb2I6IElRdWV1ZUpvYikge1xuICBsb2coJ3F1ZXVlOmFkZEpvYicsIGBOZXcgam9iIGFkZGVkYCwgJ2RlYnVnJyk7XG4gIHF1ZXVlLnB1c2goam9iKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVQZW5kaW5nSm9icygpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIXF1ZXVlIHx8ICFxdWV1ZS5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHBlbmRpbmdKb2JzOiBJUXVldWVKb2JbXSA9IHF1ZXVlLmZpbHRlcihpdGVtID0+IGl0ZW0uc3RhcnRBdCA8PSBub3cpO1xuICAgIGxvZyhcbiAgICAgICdxdWV1ZTpleGVjdXRlUGVuZGluZ0pvYnMnLFxuICAgICAgYFBlbmRpbmcgam9iczogJHtwZW5kaW5nSm9icy5sZW5ndGh9YCxcbiAgICAgICdkZWJ1ZydcbiAgICApO1xuICAgIGlmICghcGVuZGluZ0pvYnMgfHwgIXBlbmRpbmdKb2JzLmxlbmd0aCl7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgICBxdWV1ZSA9IHF1ZXVlLmZpbHRlcigoaXRlbTogSVF1ZXVlSm9iKSA9PiBpdGVtLnN0YXJ0QXQgPiBub3cpO1xuXG4gICAgZm9yIChjb25zdCBqb2Igb2YgcGVuZGluZ0pvYnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGpvYi5ydW4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcXVldWUgPSBbXTtcbiAgICBsb2coJ3F1ZXVlOmV4ZWN1dGVQZW5kaW5nSm9icycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBSdW4gdGhlIGpvYiBxdWV1ZSBpdCBwbHVnaW4gc3RhcnQuXG4gKiBAcGFyYW0gY29udGV4dCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpvYlF1ZXVlUnVuKGNvbnRleHQpIHtcbiAgY3Jvbi5zY2hlZHVsZShcbiAgICBXQVpVSF9RVUVVRV9DUk9OX0ZSRVEsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZVBlbmRpbmdKb2JzKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2coJ3F1ZXVlOmxhdW5jaENyb25Kb2InLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG4iXX0=