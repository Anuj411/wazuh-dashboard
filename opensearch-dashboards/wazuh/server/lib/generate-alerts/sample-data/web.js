"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = exports.userAgents = exports.urls = exports.Protocols = void 0;

/*
 * Wazuh app - Docker sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const Protocols = ['GET'];
exports.Protocols = Protocols;
const urls = ['/', '/index.asp', '/remote/login?lang=en', '/index.php?lang=en', '/phpmyadmin2020/index.php?lang=en', '/pma2020/index.php?lang=en', '/administrator/admin/index.php?lang=en', '	/administrator/pma/index.php?lang=en', '/administrator/db/index.php?lang=en', '/db/phpMyAdmin-3/index.php?lang=en', '/db/myadmin/index.php?lang=en', '/sql/phpMyAdmin/index.php?lang=en', '/sql/phpmyadmin2/index.php?lang=en', '/sql/sqlweb/index.php?lang=en', '/mysql/web/index.php?lang=en', '/wp-content/plugins/portable-phpmyadmin/wp-pma-mod/index.php?lang=en', '/shopdb/index.php?lang=en'];
exports.urls = urls;
const userAgents = [// https://deviceatlas.com/blog/list-of-user-agent-strings
// Desktop 
'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246', 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36', // Smartphones
'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A5370a Safari/604.1', // Tablets 
'Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36', 'Mozilla/5.0 (Linux; Android 6.0.1; SGP771 Build/32.2.A.0.253; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36', 'Mozilla/5.0 (Linux; Android 6.0.1; SHIELD Tablet K1 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Safari/537.36', 'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410/V41020c Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Safari/537.36', // Mobile browsers
'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1', 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30', 'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 7.0; SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 OPR/42.7.2246.114996', 'Mozilla/5.0 (Android 7.0; Mobile; rv:54.0) Gecko/54.0 Firefox/54.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) FxiOS/7.5b3349 Mobile/14F89 Safari/603.2.4', 'Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-G955U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/5.4 Chrome/51.0.2704.106 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 7.0; en-us; MI 5 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.146 Mobile Safari/537.36 XiaoMi/MiuiBrowser/9.0.3', // Consoles
'Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.12 NintendoBrowser/4.3.1.11264.US', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; XBOX_ONE_ED) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393', 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586', 'Mozilla/5.0 (PlayStation 4 3.11) AppleWebKit/537.73 (KHTML, like Gecko)', 'Mozilla/5.0 (PlayStation Vita 3.61) AppleWebKit/537.73 (KHTML, like Gecko) Silk/3.2', 'Mozilla/5.0 (Nintendo 3DS; U; ; en) Version/1.7412.EU'];
exports.userAgents = userAgents;
const data = [{
  "rule": {
    "firedtimes": 6,
    "mail": false,
    "level": 5,
    "pci_dss": ["6.5", "11.4"],
    "description": "Web server 400 error code.",
    "groups": ["web", "accesslog", "attack"],
    "id": "31101",
    "nist_800_53": ["SA.11", "SI.4"],
    "gdpr": ["IV_35.7.d"]
  },
  "location": "/var/log/httpd/access_log",
  "decoder": {
    "name": "web-accesslog"
  },
  "full_log": "{data.srcip} - - [{_date}] \"{data.protocol} {data.url} HTTP/1.1\" {data.id} 219 \"-\" \"{_user_agent}\""
}, {
  "previous_output": "94.111.43.1 - - [24/Apr/2020:07:34:21 +0000] \"GET /phpmyadmin2019/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:20 +0000] \"GET /phpmyadmin2018/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:20 +0000] \"GET /phpmyadmin2017/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:19 +0000] \"GET /phpmyadmin2016/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:19 +0000] \"GET /phpmyadmin2015/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:19 +0000] \"GET /phpmyadmin2014/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:19 +0000] \"GET /phpmyadmin2013/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:18 +0000] \"GET /phpmyadmin2012/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:18 +0000] \"GET /phpmyadmin2011/index.php?lang=en HTTP/1.1\" 404 222 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:17 +0000] \"GET /pma2020/index.php?lang=en HTTP/1.1\" 404 215 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"\n94.111.43.1 - - [24/Apr/2020:07:34:17 +0000] \"GET /pma2019/index.php?lang=en HTTP/1.1\" 404 215 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\"",
  // "data": {
  //   "protocol": "GET",
  //   "srcip": "94.111.43.1",
  //   "id": "404",
  //   "url": "/phpmyadmin2020/index.php?lang=en"
  // },
  "rule": {
    "firedtimes": 8,
    "mail": false,
    "level": 10,
    "pci_dss": ["6.5", "11.4"],
    "description": "Multiple web server 400 error codes from same source ip.",
    "groups": ["web", "accesslog", "web_scan", "recon"],
    "id": "31151",
    "nist_800_53": ["SA.11", "SI.4"],
    "frequency": 14,
    "gdpr": ["IV_35.7.d"]
  },
  "decoder": {
    "name": "web-accesslog"
  },
  "full_log": "{data.srcip} - - [{_date}] \"{data.protocol} {data.url} HTTP/1.1\" {data.id} 222 \"-\" \"{_user_agent}\"",
  "location": "/var/log/httpd/access_log"
}];
exports.data = data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5qcyJdLCJuYW1lcyI6WyJQcm90b2NvbHMiLCJ1cmxzIiwidXNlckFnZW50cyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQyxLQUFELENBQWxCOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDLEdBQUQsRUFBTSxZQUFOLEVBQW9CLHVCQUFwQixFQUE2QyxvQkFBN0MsRUFBbUUsbUNBQW5FLEVBQXdHLDRCQUF4RyxFQUFzSSx3Q0FBdEksRUFBZ0wsdUNBQWhMLEVBQXlOLHFDQUF6TixFQUFnUSxvQ0FBaFEsRUFDcEIsK0JBRG9CLEVBQ2EsbUNBRGIsRUFDa0Qsb0NBRGxELEVBQ3dGLCtCQUR4RixFQUN5SCw4QkFEekgsRUFDeUosc0VBRHpKLEVBQ2lPLDJCQURqTyxDQUFiOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxDQUFFO0FBQzFCO0FBQ0EsZ0ZBRndCLEVBR3hCLGlJQUh3QixFQUl4QixtSEFKd0IsRUFLeEIsc0hBTHdCLEVBTXhCLCtHQU53QixFQVF4QjtBQUNBLDBJQVR3QixFQVV4QiwySUFWd0IsRUFXeEIseUlBWHdCLEVBWXhCLGdKQVp3QixFQWF4Qix5SUFid0IsRUFjeEIsMklBZHdCLEVBZ0J4QjtBQUNBLGlKQWpCd0IsRUFrQnhCLHdKQWxCd0IsRUFtQnhCLDRKQW5Cd0IsRUFvQnhCLG9JQXBCd0IsRUFxQnhCLHdKQXJCd0IsRUF1QnhCO0FBQ0EsMklBeEJ3QixFQXlCeEIsNklBekJ3QixFQTBCeEIsMElBMUJ3QixFQTJCeEIsOEpBM0J3QixFQTRCeEIsb0VBNUJ3QixFQTZCeEIsNklBN0J3QixFQThCeEIscUtBOUJ3QixFQStCeEIscUxBL0J3QixFQWlDeEI7QUFDQSxpSEFsQ3dCLEVBbUN4QiwrSUFuQ3dCLEVBb0N4Qiw4SkFwQ3dCLEVBcUN4Qix5RUFyQ3dCLEVBc0N4QixxRkF0Q3dCLEVBdUN4Qix1REF2Q3dCLENBQW5COztBQTBDQSxNQUFNQyxJQUFJLEdBQUcsQ0FDbEI7QUFDRSxVQUFRO0FBQ04sa0JBQWMsQ0FEUjtBQUVOLFlBQVEsS0FGRjtBQUdOLGFBQVMsQ0FISDtBQUlOLGVBQVcsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUpMO0FBS04sbUJBQWUsNEJBTFQ7QUFNTixjQUFVLENBQUMsS0FBRCxFQUFPLFdBQVAsRUFBbUIsUUFBbkIsQ0FOSjtBQU9OLFVBQU0sT0FQQTtBQVFOLG1CQUFlLENBQUMsT0FBRCxFQUFTLE1BQVQsQ0FSVDtBQVNOLFlBQVEsQ0FBQyxXQUFEO0FBVEYsR0FEVjtBQVlFLGNBQVksMkJBWmQ7QUFhRSxhQUFXO0FBQ1QsWUFBUTtBQURDLEdBYmI7QUFnQkUsY0FBWTtBQWhCZCxDQURrQixFQW1CbEI7QUFDRSxxQkFBbUIsKzlFQURyQjtBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVE7QUFDTixrQkFBYyxDQURSO0FBRU4sWUFBUSxLQUZGO0FBR04sYUFBUyxFQUhIO0FBSU4sZUFBVyxDQUFDLEtBQUQsRUFBTyxNQUFQLENBSkw7QUFLTixtQkFBZSwwREFMVDtBQU1OLGNBQVUsQ0FBQyxLQUFELEVBQU8sV0FBUCxFQUFtQixVQUFuQixFQUE4QixPQUE5QixDQU5KO0FBT04sVUFBTSxPQVBBO0FBUU4sbUJBQWUsQ0FBQyxPQUFELEVBQVMsTUFBVCxDQVJUO0FBU04saUJBQWEsRUFUUDtBQVVOLFlBQVEsQ0FBQyxXQUFEO0FBVkYsR0FSVjtBQW9CRSxhQUFXO0FBQ1QsWUFBUTtBQURDLEdBcEJiO0FBdUJFLGNBQVksMEdBdkJkO0FBd0JFLGNBQVk7QUF4QmQsQ0FuQmtCLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gRG9ja2VyIHNhbXBsZSBkYXRhXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgUHJvdG9jb2xzID0gWydHRVQnXTtcblxuZXhwb3J0IGNvbnN0IHVybHMgPSBbJy8nLCAnL2luZGV4LmFzcCcsICcvcmVtb3RlL2xvZ2luP2xhbmc9ZW4nLCAnL2luZGV4LnBocD9sYW5nPWVuJywgJy9waHBteWFkbWluMjAyMC9pbmRleC5waHA/bGFuZz1lbicsICcvcG1hMjAyMC9pbmRleC5waHA/bGFuZz1lbicsICcvYWRtaW5pc3RyYXRvci9hZG1pbi9pbmRleC5waHA/bGFuZz1lbicsICdcdC9hZG1pbmlzdHJhdG9yL3BtYS9pbmRleC5waHA/bGFuZz1lbicsICcvYWRtaW5pc3RyYXRvci9kYi9pbmRleC5waHA/bGFuZz1lbicsICcvZGIvcGhwTXlBZG1pbi0zL2luZGV4LnBocD9sYW5nPWVuJyxcbicvZGIvbXlhZG1pbi9pbmRleC5waHA/bGFuZz1lbicsICcvc3FsL3BocE15QWRtaW4vaW5kZXgucGhwP2xhbmc9ZW4nLCAnL3NxbC9waHBteWFkbWluMi9pbmRleC5waHA/bGFuZz1lbicsICcvc3FsL3NxbHdlYi9pbmRleC5waHA/bGFuZz1lbicsICcvbXlzcWwvd2ViL2luZGV4LnBocD9sYW5nPWVuJywgJy93cC1jb250ZW50L3BsdWdpbnMvcG9ydGFibGUtcGhwbXlhZG1pbi93cC1wbWEtbW9kL2luZGV4LnBocD9sYW5nPWVuJywgJy9zaG9wZGIvaW5kZXgucGhwP2xhbmc9ZW4nXVxuXG5cbmV4cG9ydCBjb25zdCB1c2VyQWdlbnRzID0gWyAvLyBodHRwczovL2RldmljZWF0bGFzLmNvbS9ibG9nL2xpc3Qtb2YtdXNlci1hZ2VudC1zdHJpbmdzXG4gIC8vIERlc2t0b3AgXG4gICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0OyBydjo1Ny4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzU3LjAnLFxuICAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzQyLjAuMjMxMS4xMzUgU2FmYXJpLzUzNy4zNiBFZGdlLzEyLjI0NicsXG4gICdNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCA4MTcyLjQ1LjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MS4wLjI3MDQuNjQgU2FmYXJpLzUzNy4zNicsXG4gICdNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xMV8yKSBBcHBsZVdlYktpdC82MDEuMy45IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi85LjAuMiBTYWZhcmkvNjAxLjMuOScsXG4gICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCA2LjE7IFdPVzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNDcuMC4yNTI2LjExMSBTYWZhcmkvNTM3LjM2JyxcblxuICAvLyBTbWFydHBob25lc1xuICAnTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDguMC4wOyBTTS1HOTYwRiBCdWlsZC9SMTZOVykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYyLjAuMzIwMi44NCBNb2JpbGUgU2FmYXJpLzUzNy4zNicgLFxuICAnTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDYuMC4xOyBOZXh1cyA2UCBCdWlsZC9NTUIyOVApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS80Ny4wLjI1MjYuODMgTW9iaWxlIFNhZmFyaS81MzcuMzYnLFxuICAnTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMV8wIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNC4xLjM4IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMS4wIE1vYmlsZS8xNUEzNzIgU2FmYXJpLzYwNC4xJyxcbiAgJ01vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTJfMCBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDUuMS4xNSAoS0hUTUwsIGxpa2UgR2Vja28pIENyaU9TLzY5LjAuMzQ5Ny4xMDUgTW9iaWxlLzE1RTE0OCBTYWZhcmkvNjA1LjEnLFxuICAnTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMl8wIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMi4wIE1vYmlsZS8xNUUxNDggU2FmYXJpLzYwNC4xJyxcbiAgJ01vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTFfMCBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDQuMS4zOCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMTEuMCBNb2JpbGUvMTVBNTM3MGEgU2FmYXJpLzYwNC4xJyxcblxuICAvLyBUYWJsZXRzIFxuICAnTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDcuMDsgUGl4ZWwgQyBCdWlsZC9OUkQ5ME07IHd2KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBDaHJvbWUvNTIuMC4yNzQzLjk4IFNhZmFyaS81MzcuMzYnLFxuICAnTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDYuMC4xOyBTR1A3NzEgQnVpbGQvMzIuMi5BLjAuMjUzOyB3dikgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgQ2hyb21lLzUyLjAuMjc0My45OCBTYWZhcmkvNTM3LjM2JyxcbiAgJ01vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA2LjAuMTsgU0hJRUxEIFRhYmxldCBLMSBCdWlsZC9NUkE1OEs7IHd2KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBDaHJvbWUvNTUuMC4yODgzLjkxIFNhZmFyaS81MzcuMzYnLFxuICAnTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDcuMDsgU00tVDgyN1I0IEJ1aWxkL05SRDkwTSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYwLjAuMzExMi4xMTYgU2FmYXJpLzUzNy4zNicsXG4gICdNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNS4wLjI7IExHLVY0MTAvVjQxMDIwYyBCdWlsZC9MUlgyMkcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIENocm9tZS8zNC4wLjE4NDcuMTE4IFNhZmFyaS81MzcuMzYnLFxuXG4gIC8vIE1vYmlsZSBicm93c2Vyc1xuICAnTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMF8zXzEgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjAzLjEuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEwLjAgTW9iaWxlLzE0RTMwNCBTYWZhcmkvNjAyLjEnLFxuICAnTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDQuNC4yOyBlbi11czsgU0NILUk1MzUgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMCcsXG4gICdNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNy4wOyBTTS1HOTMwViBCdWlsZC9OUkQ5ME0pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81OS4wLjMwNzEuMTI1IE1vYmlsZSBTYWZhcmkvNTM3LjM2JyxcbiAgJ01vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA3LjA7IFNNLUEzMTBGIEJ1aWxkL05SRDkwTSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU1LjAuMjg4My45MSBNb2JpbGUgU2FmYXJpLzUzNy4zNiBPUFIvNDIuNy4yMjQ2LjExNDk5NicsXG4gICdNb3ppbGxhLzUuMCAoQW5kcm9pZCA3LjA7IE1vYmlsZTsgcnY6NTQuMCkgR2Vja28vNTQuMCBGaXJlZm94LzU0LjAnLFxuICAnTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMF8zXzIgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjAzLjIuNCAoS0hUTUwsIGxpa2UgR2Vja28pIEZ4aU9TLzcuNWIzMzQ5IE1vYmlsZS8xNEY4OSBTYWZhcmkvNjAzLjIuNCcsXG4gICdNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNy4wOyBTQU1TVU5HIFNNLUc5NTVVIEJ1aWxkL05SRDkwTSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgU2Ftc3VuZ0Jyb3dzZXIvNS40IENocm9tZS81MS4wLjI3MDQuMTA2IE1vYmlsZSBTYWZhcmkvNTM3LjM2JyxcbiAgJ01vemlsbGEvNS4wIChMaW51eDsgVTsgQW5kcm9pZCA3LjA7IGVuLXVzOyBNSSA1IEJ1aWxkL05SRDkwTSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgQ2hyb21lLzUzLjAuMjc4NS4xNDYgTW9iaWxlIFNhZmFyaS81MzcuMzYgWGlhb01pL01pdWlCcm93c2VyLzkuMC4zJyxcblxuICAvLyBDb25zb2xlc1xuICAnTW96aWxsYS81LjAgKE5pbnRlbmRvIFdpaVUpIEFwcGxlV2ViS2l0LzUzNi4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIE5YLzMuMC40LjIuMTIgTmludGVuZG9Ccm93c2VyLzQuMy4xLjExMjY0LlVTJyxcbiAgJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IFhCT1hfT05FX0VEKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNTEuMC4yNzA0Ljc5IFNhZmFyaS81MzcuMzYgRWRnZS8xNC4xNDM5MycsXG4gICdNb3ppbGxhLzUuMCAoV2luZG93cyBQaG9uZSAxMC4wOyBBbmRyb2lkIDQuMi4xOyBYYm94OyBYYm94IE9uZSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzQ2LjAuMjQ4Ni4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IEVkZ2UvMTMuMTA1ODYnLFxuICAnTW96aWxsYS81LjAgKFBsYXlTdGF0aW9uIDQgMy4xMSkgQXBwbGVXZWJLaXQvNTM3LjczIChLSFRNTCwgbGlrZSBHZWNrbyknLFxuICAnTW96aWxsYS81LjAgKFBsYXlTdGF0aW9uIFZpdGEgMy42MSkgQXBwbGVXZWJLaXQvNTM3LjczIChLSFRNTCwgbGlrZSBHZWNrbykgU2lsay8zLjInLFxuICAnTW96aWxsYS81LjAgKE5pbnRlbmRvIDNEUzsgVTsgOyBlbikgVmVyc2lvbi8xLjc0MTIuRVUnXG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIFwicnVsZVwiOiB7XG4gICAgICBcImZpcmVkdGltZXNcIjogNixcbiAgICAgIFwibWFpbFwiOiBmYWxzZSxcbiAgICAgIFwibGV2ZWxcIjogNSxcbiAgICAgIFwicGNpX2Rzc1wiOiBbXCI2LjVcIixcIjExLjRcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2ViIHNlcnZlciA0MDAgZXJyb3IgY29kZS5cIixcbiAgICAgIFwiZ3JvdXBzXCI6IFtcIndlYlwiLFwiYWNjZXNzbG9nXCIsXCJhdHRhY2tcIl0sXG4gICAgICBcImlkXCI6IFwiMzExMDFcIixcbiAgICAgIFwibmlzdF84MDBfNTNcIjogW1wiU0EuMTFcIixcIlNJLjRcIl0sXG4gICAgICBcImdkcHJcIjogW1wiSVZfMzUuNy5kXCJdXG4gICAgfSxcbiAgICBcImxvY2F0aW9uXCI6IFwiL3Zhci9sb2cvaHR0cGQvYWNjZXNzX2xvZ1wiLFxuICAgIFwiZGVjb2RlclwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJ3ZWItYWNjZXNzbG9nXCJcbiAgICB9LFxuICAgIFwiZnVsbF9sb2dcIjogXCJ7ZGF0YS5zcmNpcH0gLSAtIFt7X2RhdGV9XSBcXFwie2RhdGEucHJvdG9jb2x9IHtkYXRhLnVybH0gSFRUUC8xLjFcXFwiIHtkYXRhLmlkfSAyMTkgXFxcIi1cXFwiIFxcXCJ7X3VzZXJfYWdlbnR9XFxcIlwiLFxuICB9LFxuICB7XG4gICAgXCJwcmV2aW91c19vdXRwdXRcIjogXCI5NC4xMTEuNDMuMSAtIC0gWzI0L0Fwci8yMDIwOjA3OjM0OjIxICswMDAwXSBcXFwiR0VUIC9waHBteWFkbWluMjAxOS9pbmRleC5waHA/bGFuZz1lbiBIVFRQLzEuMVxcXCIgNDA0IDIyMiBcXFwiLVxcXCIgXFxcIk1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ny4wLjM4NjUuMTIwIFNhZmFyaS81MzcuMzZcXFwiXFxuOTQuMTExLjQzLjEgLSAtIFsyNC9BcHIvMjAyMDowNzozNDoyMCArMDAwMF0gXFxcIkdFVCAvcGhwbXlhZG1pbjIwMTgvaW5kZXgucGhwP2xhbmc9ZW4gSFRUUC8xLjFcXFwiIDQwNCAyMjIgXFxcIi1cXFwiIFxcXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzcuMC4zODY1LjEyMCBTYWZhcmkvNTM3LjM2XFxcIlxcbjk0LjExMS40My4xIC0gLSBbMjQvQXByLzIwMjA6MDc6MzQ6MjAgKzAwMDBdIFxcXCJHRVQgL3BocG15YWRtaW4yMDE3L2luZGV4LnBocD9sYW5nPWVuIEhUVFAvMS4xXFxcIiA0MDQgMjIyIFxcXCItXFxcIiBcXFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc3LjAuMzg2NS4xMjAgU2FmYXJpLzUzNy4zNlxcXCJcXG45NC4xMTEuNDMuMSAtIC0gWzI0L0Fwci8yMDIwOjA3OjM0OjE5ICswMDAwXSBcXFwiR0VUIC9waHBteWFkbWluMjAxNi9pbmRleC5waHA/bGFuZz1lbiBIVFRQLzEuMVxcXCIgNDA0IDIyMiBcXFwiLVxcXCIgXFxcIk1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ny4wLjM4NjUuMTIwIFNhZmFyaS81MzcuMzZcXFwiXFxuOTQuMTExLjQzLjEgLSAtIFsyNC9BcHIvMjAyMDowNzozNDoxOSArMDAwMF0gXFxcIkdFVCAvcGhwbXlhZG1pbjIwMTUvaW5kZXgucGhwP2xhbmc9ZW4gSFRUUC8xLjFcXFwiIDQwNCAyMjIgXFxcIi1cXFwiIFxcXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzcuMC4zODY1LjEyMCBTYWZhcmkvNTM3LjM2XFxcIlxcbjk0LjExMS40My4xIC0gLSBbMjQvQXByLzIwMjA6MDc6MzQ6MTkgKzAwMDBdIFxcXCJHRVQgL3BocG15YWRtaW4yMDE0L2luZGV4LnBocD9sYW5nPWVuIEhUVFAvMS4xXFxcIiA0MDQgMjIyIFxcXCItXFxcIiBcXFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc3LjAuMzg2NS4xMjAgU2FmYXJpLzUzNy4zNlxcXCJcXG45NC4xMTEuNDMuMSAtIC0gWzI0L0Fwci8yMDIwOjA3OjM0OjE5ICswMDAwXSBcXFwiR0VUIC9waHBteWFkbWluMjAxMy9pbmRleC5waHA/bGFuZz1lbiBIVFRQLzEuMVxcXCIgNDA0IDIyMiBcXFwiLVxcXCIgXFxcIk1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ny4wLjM4NjUuMTIwIFNhZmFyaS81MzcuMzZcXFwiXFxuOTQuMTExLjQzLjEgLSAtIFsyNC9BcHIvMjAyMDowNzozNDoxOCArMDAwMF0gXFxcIkdFVCAvcGhwbXlhZG1pbjIwMTIvaW5kZXgucGhwP2xhbmc9ZW4gSFRUUC8xLjFcXFwiIDQwNCAyMjIgXFxcIi1cXFwiIFxcXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzcuMC4zODY1LjEyMCBTYWZhcmkvNTM3LjM2XFxcIlxcbjk0LjExMS40My4xIC0gLSBbMjQvQXByLzIwMjA6MDc6MzQ6MTggKzAwMDBdIFxcXCJHRVQgL3BocG15YWRtaW4yMDExL2luZGV4LnBocD9sYW5nPWVuIEhUVFAvMS4xXFxcIiA0MDQgMjIyIFxcXCItXFxcIiBcXFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc3LjAuMzg2NS4xMjAgU2FmYXJpLzUzNy4zNlxcXCJcXG45NC4xMTEuNDMuMSAtIC0gWzI0L0Fwci8yMDIwOjA3OjM0OjE3ICswMDAwXSBcXFwiR0VUIC9wbWEyMDIwL2luZGV4LnBocD9sYW5nPWVuIEhUVFAvMS4xXFxcIiA0MDQgMjE1IFxcXCItXFxcIiBcXFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc3LjAuMzg2NS4xMjAgU2FmYXJpLzUzNy4zNlxcXCJcXG45NC4xMTEuNDMuMSAtIC0gWzI0L0Fwci8yMDIwOjA3OjM0OjE3ICswMDAwXSBcXFwiR0VUIC9wbWEyMDE5L2luZGV4LnBocD9sYW5nPWVuIEhUVFAvMS4xXFxcIiA0MDQgMjE1IFxcXCItXFxcIiBcXFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc3LjAuMzg2NS4xMjAgU2FmYXJpLzUzNy4zNlxcXCJcIixcbiAgICAvLyBcImRhdGFcIjoge1xuICAgIC8vICAgXCJwcm90b2NvbFwiOiBcIkdFVFwiLFxuICAgIC8vICAgXCJzcmNpcFwiOiBcIjk0LjExMS40My4xXCIsXG4gICAgLy8gICBcImlkXCI6IFwiNDA0XCIsXG4gICAgLy8gICBcInVybFwiOiBcIi9waHBteWFkbWluMjAyMC9pbmRleC5waHA/bGFuZz1lblwiXG4gICAgLy8gfSxcbiAgICBcInJ1bGVcIjoge1xuICAgICAgXCJmaXJlZHRpbWVzXCI6IDgsXG4gICAgICBcIm1haWxcIjogZmFsc2UsXG4gICAgICBcImxldmVsXCI6IDEwLFxuICAgICAgXCJwY2lfZHNzXCI6IFtcIjYuNVwiLFwiMTEuNFwiXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNdWx0aXBsZSB3ZWIgc2VydmVyIDQwMCBlcnJvciBjb2RlcyBmcm9tIHNhbWUgc291cmNlIGlwLlwiLFxuICAgICAgXCJncm91cHNcIjogW1wid2ViXCIsXCJhY2Nlc3Nsb2dcIixcIndlYl9zY2FuXCIsXCJyZWNvblwiXSxcbiAgICAgIFwiaWRcIjogXCIzMTE1MVwiLFxuICAgICAgXCJuaXN0XzgwMF81M1wiOiBbXCJTQS4xMVwiLFwiU0kuNFwiXSxcbiAgICAgIFwiZnJlcXVlbmN5XCI6IDE0LFxuICAgICAgXCJnZHByXCI6IFtcIklWXzM1LjcuZFwiXVxuICAgIH0sXG4gICAgXCJkZWNvZGVyXCI6IHtcbiAgICAgIFwibmFtZVwiOiBcIndlYi1hY2Nlc3Nsb2dcIlxuICAgIH0sXG4gICAgXCJmdWxsX2xvZ1wiOiBcIntkYXRhLnNyY2lwfSAtIC0gW3tfZGF0ZX1dIFxcXCJ7ZGF0YS5wcm90b2NvbH0ge2RhdGEudXJsfSBIVFRQLzEuMVxcXCIge2RhdGEuaWR9IDIyMiBcXFwiLVxcXCIgXFxcIntfdXNlcl9hZ2VudH1cXFwiXCIsXG4gICAgXCJsb2NhdGlvblwiOiBcIi92YXIvbG9nL2h0dHBkL2FjY2Vzc19sb2dcIixcbiAgfVxuXSJdfQ==