"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookieValueByName = void 0;

/*
 * Wazuh app - Cookie util functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const getCookieValueByName = (cookie, name) => {
  if (!cookie) return;
  const cookieRegExp = new RegExp(`.*${name}=([^;]+)`);
  const [_, cookieNameValue] = cookie.match(cookieRegExp) || [];
  return cookieNameValue;
};

exports.getCookieValueByName = getCookieValueByName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS50cyJdLCJuYW1lcyI6WyJnZXRDb29raWVWYWx1ZUJ5TmFtZSIsImNvb2tpZSIsIm5hbWUiLCJjb29raWVSZWdFeHAiLCJSZWdFeHAiLCJfIiwiY29va2llTmFtZVZhbHVlIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZTyxNQUFNQSxvQkFBb0IsR0FBRyxDQUFDQyxNQUFELEVBQWlCQyxJQUFqQixLQUF3RDtBQUMxRixNQUFJLENBQUNELE1BQUwsRUFBYTtBQUNiLFFBQU1FLFlBQVksR0FBRyxJQUFJQyxNQUFKLENBQVksS0FBSUYsSUFBSyxVQUFyQixDQUFyQjtBQUNBLFFBQU0sQ0FBQ0csQ0FBRCxFQUFJQyxlQUFKLElBQXVCTCxNQUFNLENBQUNNLEtBQVAsQ0FBYUosWUFBYixLQUE4QixFQUEzRDtBQUNBLFNBQU9HLGVBQVA7QUFDRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIENvb2tpZSB1dGlsIGZ1bmN0aW9uc1xuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZVZhbHVlQnlOYW1lID0gKGNvb2tpZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiAoc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICghY29va2llKSByZXR1cm47XG4gIGNvbnN0IGNvb2tpZVJlZ0V4cCA9IG5ldyBSZWdFeHAoYC4qJHtuYW1lfT0oW147XSspYCk7XG4gIGNvbnN0IFtfLCBjb29raWVOYW1lVmFsdWVdID0gY29va2llLm1hdGNoKGNvb2tpZVJlZ0V4cCkgfHwgW107XG4gIHJldHVybiBjb29raWVOYW1lVmFsdWU7XG59Il19