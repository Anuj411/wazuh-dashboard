"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monitoringKnownFields = void 0;

/*
 * Wazuh app - Module for wazuh-monitoring index pattern known fields
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const monitoringKnownFields = [{
  name: '@timestamp',
  type: 'date',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true,
  excluded: true
}, {
  name: 'timestamp',
  type: 'date',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: '_id',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: false
}, {
  name: '_index',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: false
}, {
  name: '_score',
  type: 'number',
  count: 0,
  scripted: false,
  searchable: false,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: '_source',
  type: '_source',
  count: 0,
  scripted: false,
  searchable: false,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: '_type',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: false
}, {
  name: 'dateAdd',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'group',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'host',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: 'id',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: 'ip',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: 'lastKeepAlive',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'cluster.name',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'mergedSum',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'configSum',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'node_name',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'manager',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'name',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: 'os.arch',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.codename',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.major',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.minor',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.name',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.platform',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.uname',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'os.version',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'status',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: true,
  readFromDocValues: true
}, {
  name: 'version',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}, {
  name: 'registerIP',
  type: 'string',
  count: 0,
  scripted: false,
  searchable: true,
  aggregatable: false,
  readFromDocValues: false
}];
exports.monitoringKnownFields = monitoringKnownFields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3Jpbmcta25vd24tZmllbGRzLnRzIl0sIm5hbWVzIjpbIm1vbml0b3JpbmdLbm93bkZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwiY291bnQiLCJzY3JpcHRlZCIsInNlYXJjaGFibGUiLCJhZ2dyZWdhdGFibGUiLCJyZWFkRnJvbURvY1ZhbHVlcyIsImV4Y2x1ZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWU8sTUFBTUEscUJBQXFCLEdBQUcsQ0FDbkM7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLE1BRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLElBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFLElBUHJCO0FBUUVDLEVBQUFBLFFBQVEsRUFBRTtBQVJaLENBRG1DLEVBV25DO0FBQ0VQLEVBQUFBLElBQUksRUFBRSxXQURSO0FBRUVDLEVBQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLEVBQUFBLEtBQUssRUFBRSxDQUhUO0FBSUVDLEVBQUFBLFFBQVEsRUFBRSxLQUpaO0FBS0VDLEVBQUFBLFVBQVUsRUFBRSxJQUxkO0FBTUVDLEVBQUFBLFlBQVksRUFBRSxJQU5oQjtBQU9FQyxFQUFBQSxpQkFBaUIsRUFBRTtBQVByQixDQVhtQyxFQW9CbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLEtBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLElBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBcEJtQyxFQTZCbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLElBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBN0JtQyxFQXNDbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLEtBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLEtBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBdENtQyxFQStDbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLFNBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFNBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLEtBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLEtBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBL0NtQyxFQXdEbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLElBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBeERtQyxFQWlFbkM7QUFDRU4sRUFBQUEsSUFBSSxFQUFFLFNBRFI7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJ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RUMsRUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRUMsRUFBQUEsS0FBSyxFQUFFLENBSFQ7QUFJRUMsRUFBQUEsUUFBUSxFQUFFLEtBSlo7QUFLRUMsRUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRUMsRUFBQUEsWUFBWSxFQUFFLEtBTmhCO0FBT0VDLEVBQUFBLGlCQUFpQixFQUFFO0FBUHJCLENBdlFtQyxDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgZm9yIHdhenVoLW1vbml0b3JpbmcgaW5kZXggcGF0dGVybiBrbm93biBmaWVsZHNcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5cbmV4cG9ydCBjb25zdCBtb25pdG9yaW5nS25vd25GaWVsZHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQHRpbWVzdGFtcCcsXG4gICAgdHlwZTogJ2RhdGUnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogdHJ1ZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogdHJ1ZSxcbiAgICBleGNsdWRlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpbWVzdGFtcCcsXG4gICAgdHlwZTogJ2RhdGUnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogdHJ1ZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogdHJ1ZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ19pZCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiB0cnVlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ19pbmRleCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiB0cnVlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ19zY29yZScsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IGZhbHNlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnX3NvdXJjZScsXG4gICAgdHlwZTogJ19zb3VyY2UnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ190eXBlJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IHRydWUsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGF0ZUFkZCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdncm91cCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdob3N0JyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IHRydWUsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IHRydWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiB0cnVlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaXAnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogdHJ1ZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogdHJ1ZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xhc3RLZWVwQWxpdmUnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY2x1c3Rlci5uYW1lJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ21lcmdlZFN1bScsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdjb25maWdTdW0nLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbm9kZV9uYW1lJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ21hbmFnZXInLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmFtZScsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiB0cnVlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3MuYXJjaCcsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcy5jb2RlbmFtZScsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcy5tYWpvcicsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcy5taW5vcicsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY291bnQ6IDAsXG4gICAgc2NyaXB0ZWQ6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgYWdncmVnYXRhYmxlOiBmYWxzZSxcbiAgICByZWFkRnJvbURvY1ZhbHVlczogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcy5uYW1lJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29zLnBsYXRmb3JtJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29zLnVuYW1lJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29zLnZlcnNpb24nLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IHRydWUsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IHRydWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd2ZXJzaW9uJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjb3VudDogMCxcbiAgICBzY3JpcHRlZDogZmFsc2UsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBhZ2dyZWdhdGFibGU6IGZhbHNlLFxuICAgIHJlYWRGcm9tRG9jVmFsdWVzOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3JlZ2lzdGVySVAnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcmlwdGVkOiBmYWxzZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGFnZ3JlZ2F0YWJsZTogZmFsc2UsXG4gICAgcmVhZEZyb21Eb2NWYWx1ZXM6IGZhbHNlXG4gIH1cbl07XG4iXX0=