"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultExt = void 0;

/*
 * Wazuh app - Default extensions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const defaultExt = {
  pci: true,
  gdpr: true,
  hipaa: true,
  nist: true,
  tsc: true,
  audit: true,
  oscap: false,
  ciscat: false,
  aws: false,
  gcp: false,
  virustotal: false,
  osquery: false,
  docker: false
};
exports.defaultExt = defaultExt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtZXh0LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRFeHQiLCJwY2kiLCJnZHByIiwiaGlwYWEiLCJuaXN0IiwidHNjIiwiYXVkaXQiLCJvc2NhcCIsImNpc2NhdCIsImF3cyIsImdjcCIsInZpcnVzdG90YWwiLCJvc3F1ZXJ5IiwiZG9ja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBV08sTUFBTUEsVUFBb0MsR0FBRztBQUNsREMsRUFBQUEsR0FBRyxFQUFFLElBRDZDO0FBRWxEQyxFQUFBQSxJQUFJLEVBQUUsSUFGNEM7QUFHbERDLEVBQUFBLEtBQUssRUFBRSxJQUgyQztBQUlsREMsRUFBQUEsSUFBSSxFQUFFLElBSjRDO0FBS2xEQyxFQUFBQSxHQUFHLEVBQUUsSUFMNkM7QUFNbERDLEVBQUFBLEtBQUssRUFBRSxJQU4yQztBQU9sREMsRUFBQUEsS0FBSyxFQUFFLEtBUDJDO0FBUWxEQyxFQUFBQSxNQUFNLEVBQUUsS0FSMEM7QUFTbERDLEVBQUFBLEdBQUcsRUFBRSxLQVQ2QztBQVVsREMsRUFBQUEsR0FBRyxFQUFFLEtBVjZDO0FBV2xEQyxFQUFBQSxVQUFVLEVBQUUsS0FYc0M7QUFZbERDLEVBQUFBLE9BQU8sRUFBRSxLQVp5QztBQWFsREMsRUFBQUEsTUFBTSxFQUFFO0FBYjBDLENBQTdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIERlZmF1bHQgZXh0ZW5zaW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0RXh0OiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7XG4gIHBjaTogdHJ1ZSxcbiAgZ2RwcjogdHJ1ZSxcbiAgaGlwYWE6IHRydWUsXG4gIG5pc3Q6IHRydWUsXG4gIHRzYzogdHJ1ZSxcbiAgYXVkaXQ6IHRydWUsXG4gIG9zY2FwOiBmYWxzZSxcbiAgY2lzY2F0OiBmYWxzZSxcbiAgYXdzOiBmYWxzZSxcbiAgZ2NwOiBmYWxzZSxcbiAgdmlydXN0b3RhbDogZmFsc2UsXG4gIG9zcXVlcnk6IGZhbHNlLFxuICBkb2NrZXI6IGZhbHNlXG59O1xuIl19