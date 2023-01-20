"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Wazuh app - Wazuh syscollector process state equivalence
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

/*
 * PROCESS STATE CODES
 *    Here are the different values that the s, stat and state output specifiers (header "STAT" or "S") will display to describe the state of a
 *    process.
 *    D    Uninterruptible sleep (usually IO)
 *    R    Running or runnable (on run queue)
 *    S    Interruptible sleep (waiting for an event to complete)
 *    T    Stopped, either by a job control signal or because it is being traced.
 *    W    paging (not valid since the 2.6.xx kernel)
 *    X    dead (should never be seen)
 *    Z    Defunct ("zombie") process, terminated but not reaped by its parent.
 *
 *    For BSD formats and when the stat keyword is used, additional characters may be displayed:
 *    <    high-priority (not nice to other users)
 *    N    low-priority (nice to other users)
 *    L    has pages locked into memory (for real-time and custom IO)
 *    s    is a session leader
 *    l    is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
 *    +    is in the foreground process group
 */
var _default = {
  t: 'tracing stop',
  P: 'Parked',
  I: 'Idle',
  D: 'Uninterruptible sleep (usually IO)',
  R: 'Running or runnable (on run queue)',
  S: 'Interruptible sleep (waiting for an event to complete)',
  T: 'Stopped, either by a job control signal or because it is being traced.',
  W: 'paging (not valid since the 2.6.xx kernel)',
  X: 'Dead (should never be seen)',
  Z: 'Defunct ("zombie") process, terminated but not reaped by its parent.',
  '<': 'High-priority (not nice to other users)',
  N: 'Low-priority (nice to other users)',
  L: 'Has pages locked into memory (for real-time and custom IO)',
  s: 'Is a session leader',
  l: 'Is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)',
  '+': 'Is in the foreground process group'
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Mtc3RhdGUtZXF1aXZhbGVuY2UudHMiXSwibmFtZXMiOlsidCIsIlAiLCJJIiwiRCIsIlIiLCJTIiwiVCIsIlciLCJYIiwiWiIsIk4iLCJMIiwicyIsImwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBb0JlO0FBQ2JBLEVBQUFBLENBQUMsRUFBRSxjQURVO0FBRWJDLEVBQUFBLENBQUMsRUFBRSxRQUZVO0FBR2JDLEVBQUFBLENBQUMsRUFBRSxNQUhVO0FBSWJDLEVBQUFBLENBQUMsRUFBRSxvQ0FKVTtBQUtiQyxFQUFBQSxDQUFDLEVBQUUsb0NBTFU7QUFNYkMsRUFBQUEsQ0FBQyxFQUFFLHdEQU5VO0FBT2JDLEVBQUFBLENBQUMsRUFBRSx3RUFQVTtBQVFiQyxFQUFBQSxDQUFDLEVBQUUsNENBUlU7QUFTYkMsRUFBQUEsQ0FBQyxFQUFFLDZCQVRVO0FBVWJDLEVBQUFBLENBQUMsRUFBRSxzRUFWVTtBQVdiLE9BQUsseUNBWFE7QUFZYkMsRUFBQUEsQ0FBQyxFQUFFLG9DQVpVO0FBYWJDLEVBQUFBLENBQUMsRUFBRSw0REFiVTtBQWNiQyxFQUFBQSxDQUFDLEVBQUUscUJBZFU7QUFlYkMsRUFBQUEsQ0FBQyxFQUFFLCtEQWZVO0FBZ0JiLE9BQUs7QUFoQlEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBXYXp1aCBzeXNjb2xsZWN0b3IgcHJvY2VzcyBzdGF0ZSBlcXVpdmFsZW5jZVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuLypcbiAqIFBST0NFU1MgU1RBVEUgQ09ERVNcbiAqICAgIEhlcmUgYXJlIHRoZSBkaWZmZXJlbnQgdmFsdWVzIHRoYXQgdGhlIHMsIHN0YXQgYW5kIHN0YXRlIG91dHB1dCBzcGVjaWZpZXJzIChoZWFkZXIgXCJTVEFUXCIgb3IgXCJTXCIpIHdpbGwgZGlzcGxheSB0byBkZXNjcmliZSB0aGUgc3RhdGUgb2YgYVxuICogICAgcHJvY2Vzcy5cbiAqICAgIEQgICAgVW5pbnRlcnJ1cHRpYmxlIHNsZWVwICh1c3VhbGx5IElPKVxuICogICAgUiAgICBSdW5uaW5nIG9yIHJ1bm5hYmxlIChvbiBydW4gcXVldWUpXG4gKiAgICBTICAgIEludGVycnVwdGlibGUgc2xlZXAgKHdhaXRpbmcgZm9yIGFuIGV2ZW50IHRvIGNvbXBsZXRlKVxuICogICAgVCAgICBTdG9wcGVkLCBlaXRoZXIgYnkgYSBqb2IgY29udHJvbCBzaWduYWwgb3IgYmVjYXVzZSBpdCBpcyBiZWluZyB0cmFjZWQuXG4gKiAgICBXICAgIHBhZ2luZyAobm90IHZhbGlkIHNpbmNlIHRoZSAyLjYueHgga2VybmVsKVxuICogICAgWCAgICBkZWFkIChzaG91bGQgbmV2ZXIgYmUgc2VlbilcbiAqICAgIFogICAgRGVmdW5jdCAoXCJ6b21iaWVcIikgcHJvY2VzcywgdGVybWluYXRlZCBidXQgbm90IHJlYXBlZCBieSBpdHMgcGFyZW50LlxuICpcbiAqICAgIEZvciBCU0QgZm9ybWF0cyBhbmQgd2hlbiB0aGUgc3RhdCBrZXl3b3JkIGlzIHVzZWQsIGFkZGl0aW9uYWwgY2hhcmFjdGVycyBtYXkgYmUgZGlzcGxheWVkOlxuICogICAgPCAgICBoaWdoLXByaW9yaXR5IChub3QgbmljZSB0byBvdGhlciB1c2VycylcbiAqICAgIE4gICAgbG93LXByaW9yaXR5IChuaWNlIHRvIG90aGVyIHVzZXJzKVxuICogICAgTCAgICBoYXMgcGFnZXMgbG9ja2VkIGludG8gbWVtb3J5IChmb3IgcmVhbC10aW1lIGFuZCBjdXN0b20gSU8pXG4gKiAgICBzICAgIGlzIGEgc2Vzc2lvbiBsZWFkZXJcbiAqICAgIGwgICAgaXMgbXVsdGktdGhyZWFkZWQgKHVzaW5nIENMT05FX1RIUkVBRCwgbGlrZSBOUFRMIHB0aHJlYWRzIGRvKVxuICogICAgKyAgICBpcyBpbiB0aGUgZm9yZWdyb3VuZCBwcm9jZXNzIGdyb3VwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdDogJ3RyYWNpbmcgc3RvcCcsXG4gIFA6ICdQYXJrZWQnLFxuICBJOiAnSWRsZScsXG4gIEQ6ICdVbmludGVycnVwdGlibGUgc2xlZXAgKHVzdWFsbHkgSU8pJyxcbiAgUjogJ1J1bm5pbmcgb3IgcnVubmFibGUgKG9uIHJ1biBxdWV1ZSknLFxuICBTOiAnSW50ZXJydXB0aWJsZSBzbGVlcCAod2FpdGluZyBmb3IgYW4gZXZlbnQgdG8gY29tcGxldGUpJyxcbiAgVDogJ1N0b3BwZWQsIGVpdGhlciBieSBhIGpvYiBjb250cm9sIHNpZ25hbCBvciBiZWNhdXNlIGl0IGlzIGJlaW5nIHRyYWNlZC4nLFxuICBXOiAncGFnaW5nIChub3QgdmFsaWQgc2luY2UgdGhlIDIuNi54eCBrZXJuZWwpJyxcbiAgWDogJ0RlYWQgKHNob3VsZCBuZXZlciBiZSBzZWVuKScsXG4gIFo6ICdEZWZ1bmN0IChcInpvbWJpZVwiKSBwcm9jZXNzLCB0ZXJtaW5hdGVkIGJ1dCBub3QgcmVhcGVkIGJ5IGl0cyBwYXJlbnQuJyxcbiAgJzwnOiAnSGlnaC1wcmlvcml0eSAobm90IG5pY2UgdG8gb3RoZXIgdXNlcnMpJyxcbiAgTjogJ0xvdy1wcmlvcml0eSAobmljZSB0byBvdGhlciB1c2VycyknLFxuICBMOiAnSGFzIHBhZ2VzIGxvY2tlZCBpbnRvIG1lbW9yeSAoZm9yIHJlYWwtdGltZSBhbmQgY3VzdG9tIElPKScsXG4gIHM6ICdJcyBhIHNlc3Npb24gbGVhZGVyJyxcbiAgbDogJ0lzIG11bHRpLXRocmVhZGVkICh1c2luZyBDTE9ORV9USFJFQUQsIGxpa2UgTlBUTCBwdGhyZWFkcyBkbyknLFxuICAnKyc6ICdJcyBpbiB0aGUgZm9yZWdyb3VuZCBwcm9jZXNzIGdyb3VwJ1xufTtcbiJdfQ==