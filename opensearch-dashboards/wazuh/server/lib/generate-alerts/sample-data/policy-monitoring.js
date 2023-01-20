"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trojansData = exports.trojans = exports.rootkitsData = exports.rootkits = exports.decoder = exports.location = exports.ruleDescription = exports.title = void 0;

/*
 * Wazuh app - Policy monitoring sample alerts
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
// Policy monitoring
const title = ["Trojaned version of file detected."];
exports.title = title;
const ruleDescription = ["Host-based anomaly detection event (rootcheck).", "System Audit event."];
exports.ruleDescription = ruleDescription;
const location = 'rootcheck';
exports.location = location;
const decoder = {
  name: "rootcheck"
};
exports.decoder = decoder;
const rootkits = {
  Bash: ['/tmp/mcliZokhb', '/tmp/mclzaKmfa'],
  Adore: ['/dev/.shit/red.tgz', '/usr/lib/libt', '/usr/bin/adore'],
  TRK: ['usr/bin/soucemask', '/usr/bin/sourcemask'],
  Volc: ['/usr/lib/volc', '/usr/bin/volc'],
  Ramen: ['/usr/lib/ldlibps.so', '/usr/lib/ldliblogin.so', '/tmp/ramen.tgz'],
  Monkit: ['/lib/defs', '/usr/lib/libpikapp.a'],
  RSHA: ['usr/bin/kr4p', 'usr/bin/n3tstat', 'usr/bin/chsh2'],
  Omega: ['/dev/chr'],
  "Rh-Sharpe": ['/usr/bin/.ps', '/bin/.lpstree', '/bin/ldu', '/bin/lkillall'],
  Showtee: ['/usr/lib/.wormie', '/usr/lib/.kinetic', '/usr/include/addr.h'],
  LDP: ['/dev/.kork', '/bin/.login', '/bin/.ps'],
  Slapper: ['/tmp/.bugtraq', '/tmp/.bugtraq.c', '/tmp/.b', '/tmp/httpd', '/tmp/.font-unix/.cinik'],
  Knark: ['/dev/.pizda', '/proc/knark'],
  ZK: ['/usr/share/.zk', 'etc/1ssue.net', 'usr/X11R6/.zk/xfs'],
  Suspicious: ['etc/rc.d/init.d/rc.modules', 'lib/ldd.so', 'usr/bin/ddc', 'usr/bin/ishit', 'lib/.so', 'usr/bin/atm', 'tmp/.cheese', 'dev/srd0', 'dev/hd7', 'usr/man/man3/psid']
};
exports.rootkits = rootkits;
const rootkitsData = {
  "data": {
    "title": "Rootkit '{_rootkit_category}' detected by the presence of file '{_rootkit_file}'."
  },
  "rule": {
    "firedtimes": 1,
    "mail": false,
    "level": 7,
    "description": "Host-based anomaly detection event (rootcheck).",
    "groups": ["wazuh", "rootcheck"],
    "id": "510",
    "gdpr": ["IV_35.7.d"]
  },
  "full_log": "Rootkit '{_rootkit_category}' detected by the presence of file '{_rootkit_file}'."
};
exports.rootkitsData = rootkitsData;
const trojans = [{
  file: '/usr/bin/grep',
  signature: 'bash|givemer'
}, {
  file: '/usr/bin/egrep',
  signature: 'bash|^/bin/sh|file\.h|proc\.h|/dev/|^/bin/.*sh'
}, {
  file: '/usr/bin/find',
  signature: 'bash|/dev/[^tnlcs]|/prof|/home/virus|file\.h'
}, {
  file: '/usr/bin/lsof',
  signature: '/prof|/dev/[^apcmnfk]|proc\.h|bash|^/bin/sh|/dev/ttyo|/dev/ttyp'
}, {
  file: '/usr/bin/netstat',
  signature: 'bash|^/bin/sh|/dev/[^aik]|/prof|grep|addr\.h'
}, {
  file: '/usr/bin/top',
  signature: '/dev/[^npi3st%]|proc\.h|/prof/'
}, {
  file: '/usr/bin/ps',
  signature: '/dev/ttyo|\.1proc|proc\.h|bash|^/bin/sh'
}, {
  file: '/usr/bin/tcpdump',
  signature: 'bash|^/bin/sh|file\.h|proc\.h|/dev/[^bu]|^/bin/.*sh'
}, {
  file: '/usr/bin/pidof',
  signature: 'bash|^/bin/sh|file\.h|proc\.h|/dev/[^f]|^/bin/.*sh'
}, {
  file: '/usr/bin/fuser',
  signature: 'bash|^/bin/sh|file\.h|proc\.h|/dev/[a-dtz]|^/bin/.*sh'
}, {
  file: '/usr/bin/w',
  signature: 'uname -a|proc\.h|bash'
}];
exports.trojans = trojans;
const trojansData = {
  "rule": {
    "firedtimes": 2,
    "mail": false,
    "level": 7,
    "description": "Host-based anomaly detection event (rootcheck).",
    "groups": ["wazuh", "rootcheck"],
    "id": "510",
    "gdpr": ["IV_35.7.d"]
  },
  "full_log": "Trojaned version of file '{data.file}' detected. Signature used: '{_trojan_signature}' (Generic)."
};
exports.trojansData = trojansData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS1tb25pdG9yaW5nLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwicnVsZURlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJkZWNvZGVyIiwibmFtZSIsInJvb3RraXRzIiwiQmFzaCIsIkFkb3JlIiwiVFJLIiwiVm9sYyIsIlJhbWVuIiwiTW9ua2l0IiwiUlNIQSIsIk9tZWdhIiwiU2hvd3RlZSIsIkxEUCIsIlNsYXBwZXIiLCJLbmFyayIsIlpLIiwiU3VzcGljaW91cyIsInJvb3RraXRzRGF0YSIsInRyb2phbnMiLCJmaWxlIiwic2lnbmF0dXJlIiwidHJvamFuc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQTtBQUNPLE1BQU1BLEtBQUssR0FBRyxDQUFDLG9DQUFELENBQWQ7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQUMsaURBQUQsRUFBb0QscUJBQXBELENBQXhCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxXQUFqQjs7QUFFQSxNQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLElBQUksRUFBRTtBQURlLENBQWhCOztBQUlBLE1BQU1DLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLENBRGdCO0FBRXRCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxvQkFBRCxFQUF1QixlQUF2QixFQUF3QyxnQkFBeEMsQ0FGZTtBQUd0QkMsRUFBQUEsR0FBRyxFQUFFLENBQUMsbUJBQUQsRUFBcUIscUJBQXJCLENBSGlCO0FBSXRCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGVBQWxCLENBSmdCO0FBS3RCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxxQkFBRCxFQUF1Qix3QkFBdkIsRUFBaUQsZ0JBQWpELENBTGU7QUFNdEJDLEVBQUFBLE1BQU0sRUFBRSxDQUFDLFdBQUQsRUFBYyxzQkFBZCxDQU5jO0FBT3RCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxjQUFELEVBQWlC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QUFVekIsY0FBWTtBQVZhLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIFBvbGljeSBtb25pdG9yaW5nIHNhbXBsZSBhbGVydHNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5cbi8vIFBvbGljeSBtb25pdG9yaW5nXG5leHBvcnQgY29uc3QgdGl0bGUgPSBbXCJUcm9qYW5lZCB2ZXJzaW9uIG9mIGZpbGUgZGV0ZWN0ZWQuXCJdO1xuZXhwb3J0IGNvbnN0IHJ1bGVEZXNjcmlwdGlvbiA9IFtcIkhvc3QtYmFzZWQgYW5vbWFseSBkZXRlY3Rpb24gZXZlbnQgKHJvb3RjaGVjaykuXCIsIFwiU3lzdGVtIEF1ZGl0IGV2ZW50LlwiXTtcblxuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gJ3Jvb3RjaGVjayc7XG5cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0ge1xuICBuYW1lOiBcInJvb3RjaGVja1wiXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vdGtpdHMgPSB7XG4gIEJhc2g6IFsnL3RtcC9tY2xpWm9raGInLCAnL3RtcC9tY2x6YUttZmEnXSxcbiAgQWRvcmU6IFsnL2Rldi8uc2hpdC9yZWQudGd6JywgJy91c3IvbGliL2xpYnQnLCAnL3Vzci9iaW4vYWRvcmUnXSxcbiAgVFJLOiBbJ3Vzci9iaW4vc291Y2VtYXNrJywnL3Vzci9iaW4vc291cmNlbWFzayddLFxuICBWb2xjOiBbJy91c3IvbGliL3ZvbGMnLCAnL3Vzci9iaW4vdm9sYyddLFxuICBSYW1lbjogWycvdXNyL2xpYi9sZGxpYnBzLnNvJywnL3Vzci9saWIvbGRsaWJsb2dpbi5zbycsICcvdG1wL3JhbWVuLnRneiddLFxuICBNb25raXQ6IFsnL2xpYi9kZWZzJywgJy91c3IvbGliL2xpYnBpa2FwcC5hJ10sXG4gIFJTSEE6IFsndXNyL2Jpbi9rcjRwJywgJ3Vzci9iaW4vbjN0c3RhdCcsICd1c3IvYmluL2Noc2gyJ10sXG4gIE9tZWdhOiBbJy9kZXYvY2hyJ10sXG4gIFwiUmgtU2hhcnBlXCI6IFsnL3Vzci9iaW4vLnBzJywgJy9iaW4vLmxwc3RyZWUnLCAnL2Jpbi9sZHUnLCAnL2Jpbi9sa2lsbGFsbCddLFxuICBTaG93dGVlOiBbJy91c3IvbGliLy53b3JtaWUnLCcvdXNyL2xpYi8ua2luZXRpYycsJy91c3IvaW5jbHVkZS9hZGRyLmgnXSxcbiAgTERQOiBbJy9kZXYvLmtvcmsnLCAnL2Jpbi8ubG9naW4nLCAnL2Jpbi8ucHMnXSxcbiAgU2xhcHBlcjogWycvdG1wLy5idWd0cmFxJywnL3RtcC8uYnVndHJhcS5jJywgJy90bXAvLmInLCAnL3RtcC9odHRwZCcsICcvdG1wLy5mb250LXVuaXgvLmNpbmlrJ10sXG4gIEtuYXJrOiBbJy9kZXYvLnBpemRhJywgJy9wcm9jL2tuYXJrJ10sXG4gIFpLOiBbJy91c3Ivc2hhcmUvLnprJywgJ2V0Yy8xc3N1ZS5uZXQnLCAndXNyL1gxMVI2Ly56ay94ZnMnXSxcbiAgU3VzcGljaW91czogWydldGMvcmMuZC9pbml0LmQvcmMubW9kdWxlcycsICdsaWIvbGRkLnNvJywgJ3Vzci9iaW4vZGRjJywgJ3Vzci9iaW4vaXNoaXQnLCAnbGliLy5zbycsICd1c3IvYmluL2F0bScsICd0bXAvLmNoZWVzZScsICdkZXYvc3JkMCcsICdkZXYvaGQ3JywgJ3Vzci9tYW4vbWFuMy9wc2lkJ11cbn07XG5cbmV4cG9ydCBjb25zdCByb290a2l0c0RhdGEgPSB7XG4gIFwiZGF0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlJvb3RraXQgJ3tfcm9vdGtpdF9jYXRlZ29yeX0nIGRldGVjdGVkIGJ5IHRoZSBwcmVzZW5jZSBvZiBmaWxlICd7X3Jvb3RraXRfZmlsZX0nLlwiXG4gIH0sXG4gIFwicnVsZVwiOiB7XG4gICAgXCJmaXJlZHRpbWVzXCI6IDEsXG4gICAgXCJtYWlsXCI6IGZhbHNlLFxuICAgIFwibGV2ZWxcIjogNyxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG9zdC1iYXNlZCBhbm9tYWx5IGRldGVjdGlvbiBldmVudCAocm9vdGNoZWNrKS5cIixcbiAgICBcImdyb3Vwc1wiOiBbXCJ3YXp1aFwiLFwicm9vdGNoZWNrXCJdLFxuICAgIFwiaWRcIjogXCI1MTBcIixcbiAgICBcImdkcHJcIjogW1wiSVZfMzUuNy5kXCJdXG4gIH0sXG4gIFwiZnVsbF9sb2dcIjogXCJSb290a2l0ICd7X3Jvb3RraXRfY2F0ZWdvcnl9JyBkZXRlY3RlZCBieSB0aGUgcHJlc2VuY2Ugb2YgZmlsZSAne19yb290a2l0X2ZpbGV9Jy5cIixcbn07XG5cbmV4cG9ydCBjb25zdCB0cm9qYW5zID0gW1xuICB7ZmlsZTogJy91c3IvYmluL2dyZXAnLCBzaWduYXR1cmU6ICdiYXNofGdpdmVtZXInfSxcbiAge2ZpbGU6ICcvdXNyL2Jpbi9lZ3JlcCcsIHNpZ25hdHVyZTogJ2Jhc2h8Xi9iaW4vc2h8ZmlsZVxcLmh8cHJvY1xcLmh8L2Rldi98Xi9iaW4vLipzaCd9LFxuICB7ZmlsZTogJy91c3IvYmluL2ZpbmQnLCBzaWduYXR1cmU6ICdiYXNofC9kZXYvW150bmxjc118L3Byb2Z8L2hvbWUvdmlydXN8ZmlsZVxcLmgnfSxcbiAge2ZpbGU6ICcvdXNyL2Jpbi9sc29mJywgc2lnbmF0dXJlOiAnL3Byb2Z8L2Rldi9bXmFwY21uZmtdfHByb2NcXC5ofGJhc2h8Xi9iaW4vc2h8L2Rldi90dHlvfC9kZXYvdHR5cCd9LFxuICB7ZmlsZTogJy91c3IvYmluL25ldHN0YXQnLCBzaWduYXR1cmU6ICdiYXNofF4vYmluL3NofC9kZXYvW15haWtdfC9wcm9mfGdyZXB8YWRkclxcLmgnfSxcbiAge2ZpbGU6ICcvdXNyL2Jpbi90b3AnLCBzaWduYXR1cmU6ICcvZGV2L1tebnBpM3N0JV18cHJvY1xcLmh8L3Byb2YvJ30sXG4gIHtmaWxlOiAnL3Vzci9iaW4vcHMnLCBzaWduYXR1cmU6ICcvZGV2L3R0eW98XFwuMXByb2N8cHJvY1xcLmh8YmFzaHxeL2Jpbi9zaCd9LFxuICB7ZmlsZTogJy91c3IvYmluL3RjcGR1bXAnLCBzaWduYXR1cmU6ICdiYXNofF4vYmluL3NofGZpbGVcXC5ofHByb2NcXC5ofC9kZXYvW15idV18Xi9iaW4vLipzaCd9LFxuICB7ZmlsZTogJy91c3IvYmluL3BpZG9mJywgc2lnbmF0dXJlOiAnYmFzaHxeL2Jpbi9zaHxmaWxlXFwuaHxwcm9jXFwuaHwvZGV2L1teZl18Xi9iaW4vLipzaCd9LFxuICB7ZmlsZTogJy91c3IvYmluL2Z1c2VyJywgc2lnbmF0dXJlOiAnYmFzaHxeL2Jpbi9zaHxmaWxlXFwuaHxwcm9jXFwuaHwvZGV2L1thLWR0el18Xi9iaW4vLipzaCd9LFxuICB7ZmlsZTogJy91c3IvYmluL3cnLCBzaWduYXR1cmU6ICd1bmFtZSAtYXxwcm9jXFwuaHxiYXNoJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgdHJvamFuc0RhdGEgPSB7XG4gIFwicnVsZVwiOiB7XG4gICAgXCJmaXJlZHRpbWVzXCI6IDIsXG4gICAgXCJtYWlsXCI6IGZhbHNlLFxuICAgIFwibGV2ZWxcIjogNyxcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG9zdC1iYXNlZCBhbm9tYWx5IGRldGVjdGlvbiBldmVudCAocm9vdGNoZWNrKS5cIixcbiAgICBcImdyb3Vwc1wiOiBbXCJ3YXp1aFwiLFwicm9vdGNoZWNrXCJdLFxuICAgIFwiaWRcIjogXCI1MTBcIixcbiAgICBcImdkcHJcIjogW1wiSVZfMzUuNy5kXCJdXG4gIH0sXG4gIFwiZnVsbF9sb2dcIjogXCJUcm9qYW5lZCB2ZXJzaW9uIG9mIGZpbGUgJ3tkYXRhLmZpbGV9JyBkZXRlY3RlZC4gU2lnbmF0dXJlIHVzZWQ6ICd7X3Ryb2phbl9zaWduYXR1cmV9JyAoR2VuZXJpYykuXCIsXG59O1xuIl19