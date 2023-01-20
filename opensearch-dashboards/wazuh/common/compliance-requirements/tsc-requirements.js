"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tscRequirementsFile = void 0;

/*
 * Wazuh app - Module for TSC requirements
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const tscRequirementsFile = {
  'A1.1': 'The entity maintains, monitors, and evaluates current processing capacity and use of system components (infrastructure, data, and software) to manage capacity demand and to enable the implementation of additional capacity to help meet its objectives.',
  'A1.2': 'The entity authorizes, designs, develops or acquires, implements, operates, approves, maintains, and monitors environmental protections, software, data backup processes, and recovery infrastructure to meet its objectives.',
  'CC5.1': 'The entity selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.',
  'CC5.2': 'The entity also selects and develops general control activities over technology to support the achievement of objectives.',
  'CC6.1': "The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives.",
  'CC6.2': 'Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users whose access is administered by the entity. For those users whose access is administered by the entity, user system credentials are removed when user access is no longer authorized.',
  'CC6.3': 'The entity authorizes, modifies, or removes access to data, software, functions, and other protected information assets based on roles, responsibilities, or the system design and changes, giving consideration to the concepts of least privilege and segregation of duties, to meet the entity’s objectives.',
  'CC6.4': 'The entity restricts physical access to facilities and protected information assets (for example, data center facilities, backup media storage, and other sensitive locations) to authorized personnel to meet the entity’s objectives',
  'CC6.6': 'The entity implements logical access security measures to protect against threats from sources outside its system boundaries.',
  'CC6.7': 'The entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes, and protects it during transmission, movement, or removal to meet the entity’s objectives.',
  'CC6.8': 'The entity implements controls to prevent or detect and act upon the introduction of unauthorized or malicious software to meet the entity’s objectives.',
  'CC7.1': 'To meet its objectives, the entity uses detection and monitoring procedures to identify (1) changes to configurations that result in the introduction of new vulnerabilities, and (2) susceptibilities to newly discovered vulnerabilities.',
  'CC7.2': "The entity monitors system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity's ability to meet its objectives; anomalies are analyzed to determine whether they represent security events.",
  'CC7.3': 'The entity evaluates security events to determine whether they could or have resulted in a failure of the entity to meet its objectives (security incidents) and, if so, takes actions to prevent or address such failures.',
  'CC7.4': 'The entity responds to identified security incidents by executing a defined incident-response program to understand, contain, remediate, and communicate security incidents, as appropriate.',
  'CC8.1': 'The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures to meet its objectives',
  'PI1.4': 'The entity implements policies and procedures to make available or deliver output completely, accurately, and timely in accordance with specifications to meet the entity’s objectives.',
  'PI1.5': 'The entity implements policies and procedures to store inputs, items in processing, and outputs completely, accurately, and timely in accordance with system specifications to meet the entity’s objectives.'
};
exports.tscRequirementsFile = tscRequirementsFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzYy1yZXF1aXJlbWVudHMudHMiXSwibmFtZXMiOlsidHNjUmVxdWlyZW1lbnRzRmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVdPLE1BQU1BLG1CQUFtQixHQUFHO0FBQ2pDLFVBQ0UsNFBBRitCO0FBR2pDLFVBQ0UsK05BSitCO0FBS2pDLFdBQ0Usc0pBTitCO0FBT2pDLFdBQ0UsMkhBUitCO0FBU2pDLFdBQ0UsbU1BVitCO0FBV2pDLFdBQ0UsMlRBWitCO0FBYWpDLFdBQ0UsaVRBZCtCO0FBZWpDLFdBQ0Usd09BaEIrQjtBQWlCakMsV0FDRSwrSEFsQitCO0FBbUJqQyxXQUNFLGlPQXBCK0I7QUFxQmpDLFdBQ0UsMEpBdEIrQjtBQXVCakMsV0FDRSw2T0F4QitCO0FBeUJqQyxXQUNFLG1TQTFCK0I7QUEyQmpDLFdBQ0UsNk5BNUIrQjtBQTZCakMsV0FDRSw4TEE5QitCO0FBK0JqQyxXQUNFLCtMQWhDK0I7QUFpQ2pDLFdBQ0UseUxBbEMrQjtBQW1DakMsV0FDRTtBQXBDK0IsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2F6dWggYXBwIC0gTW9kdWxlIGZvciBUU0MgcmVxdWlyZW1lbnRzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHRzY1JlcXVpcmVtZW50c0ZpbGUgPSB7XG4gICdBMS4xJzpcbiAgICAnVGhlIGVudGl0eSBtYWludGFpbnMsIG1vbml0b3JzLCBhbmQgZXZhbHVhdGVzIGN1cnJlbnQgcHJvY2Vzc2luZyBjYXBhY2l0eSBhbmQgdXNlIG9mIHN5c3RlbSBjb21wb25lbnRzIChpbmZyYXN0cnVjdHVyZSwgZGF0YSwgYW5kIHNvZnR3YXJlKSB0byBtYW5hZ2UgY2FwYWNpdHkgZGVtYW5kIGFuZCB0byBlbmFibGUgdGhlIGltcGxlbWVudGF0aW9uIG9mIGFkZGl0aW9uYWwgY2FwYWNpdHkgdG8gaGVscCBtZWV0IGl0cyBvYmplY3RpdmVzLicsXG4gICdBMS4yJzpcbiAgICAnVGhlIGVudGl0eSBhdXRob3JpemVzLCBkZXNpZ25zLCBkZXZlbG9wcyBvciBhY3F1aXJlcywgaW1wbGVtZW50cywgb3BlcmF0ZXMsIGFwcHJvdmVzLCBtYWludGFpbnMsIGFuZCBtb25pdG9ycyBlbnZpcm9ubWVudGFsIHByb3RlY3Rpb25zLCBzb2Z0d2FyZSwgZGF0YSBiYWNrdXAgcHJvY2Vzc2VzLCBhbmQgcmVjb3ZlcnkgaW5mcmFzdHJ1Y3R1cmUgdG8gbWVldCBpdHMgb2JqZWN0aXZlcy4nLFxuICAnQ0M1LjEnOlxuICAgICdUaGUgZW50aXR5IHNlbGVjdHMgYW5kIGRldmVsb3BzIGNvbnRyb2wgYWN0aXZpdGllcyB0aGF0IGNvbnRyaWJ1dGUgdG8gdGhlIG1pdGlnYXRpb24gb2Ygcmlza3MgdG8gdGhlIGFjaGlldmVtZW50IG9mIG9iamVjdGl2ZXMgdG8gYWNjZXB0YWJsZSBsZXZlbHMuJyxcbiAgJ0NDNS4yJzpcbiAgICAnVGhlIGVudGl0eSBhbHNvIHNlbGVjdHMgYW5kIGRldmVsb3BzIGdlbmVyYWwgY29udHJvbCBhY3Rpdml0aWVzIG92ZXIgdGVjaG5vbG9neSB0byBzdXBwb3J0IHRoZSBhY2hpZXZlbWVudCBvZiBvYmplY3RpdmVzLicsXG4gICdDQzYuMSc6XG4gICAgXCJUaGUgZW50aXR5IGltcGxlbWVudHMgbG9naWNhbCBhY2Nlc3Mgc2VjdXJpdHkgc29mdHdhcmUsIGluZnJhc3RydWN0dXJlLCBhbmQgYXJjaGl0ZWN0dXJlcyBvdmVyIHByb3RlY3RlZCBpbmZvcm1hdGlvbiBhc3NldHMgdG8gcHJvdGVjdCB0aGVtIGZyb20gc2VjdXJpdHkgZXZlbnRzIHRvIG1lZXQgdGhlIGVudGl0eSdzIG9iamVjdGl2ZXMuXCIsXG4gICdDQzYuMic6XG4gICAgJ1ByaW9yIHRvIGlzc3Vpbmcgc3lzdGVtIGNyZWRlbnRpYWxzIGFuZCBncmFudGluZyBzeXN0ZW0gYWNjZXNzLCB0aGUgZW50aXR5IHJlZ2lzdGVycyBhbmQgYXV0aG9yaXplcyBuZXcgaW50ZXJuYWwgYW5kIGV4dGVybmFsIHVzZXJzIHdob3NlIGFjY2VzcyBpcyBhZG1pbmlzdGVyZWQgYnkgdGhlIGVudGl0eS4gRm9yIHRob3NlIHVzZXJzIHdob3NlIGFjY2VzcyBpcyBhZG1pbmlzdGVyZWQgYnkgdGhlIGVudGl0eSwgdXNlciBzeXN0ZW0gY3JlZGVudGlhbHMgYXJlIHJlbW92ZWQgd2hlbiB1c2VyIGFjY2VzcyBpcyBubyBsb25nZXIgYXV0aG9yaXplZC4nLFxuICAnQ0M2LjMnOlxuICAgICdUaGUgZW50aXR5IGF1dGhvcml6ZXMsIG1vZGlmaWVzLCBvciByZW1vdmVzIGFjY2VzcyB0byBkYXRhLCBzb2Z0d2FyZSwgZnVuY3Rpb25zLCBhbmQgb3RoZXIgcHJvdGVjdGVkIGluZm9ybWF0aW9uIGFzc2V0cyBiYXNlZCBvbiByb2xlcywgcmVzcG9uc2liaWxpdGllcywgb3IgdGhlIHN5c3RlbSBkZXNpZ24gYW5kIGNoYW5nZXMsIGdpdmluZyBjb25zaWRlcmF0aW9uIHRvIHRoZSBjb25jZXB0cyBvZiBsZWFzdCBwcml2aWxlZ2UgYW5kIHNlZ3JlZ2F0aW9uIG9mIGR1dGllcywgdG8gbWVldCB0aGUgZW50aXR54oCZcyBvYmplY3RpdmVzLicsXG4gICdDQzYuNCc6XG4gICAgJ1RoZSBlbnRpdHkgcmVzdHJpY3RzIHBoeXNpY2FsIGFjY2VzcyB0byBmYWNpbGl0aWVzIGFuZCBwcm90ZWN0ZWQgaW5mb3JtYXRpb24gYXNzZXRzIChmb3IgZXhhbXBsZSwgZGF0YSBjZW50ZXIgZmFjaWxpdGllcywgYmFja3VwIG1lZGlhIHN0b3JhZ2UsIGFuZCBvdGhlciBzZW5zaXRpdmUgbG9jYXRpb25zKSB0byBhdXRob3JpemVkIHBlcnNvbm5lbCB0byBtZWV0IHRoZSBlbnRpdHnigJlzIG9iamVjdGl2ZXMnLFxuICAnQ0M2LjYnOlxuICAgICdUaGUgZW50aXR5IGltcGxlbWVudHMgbG9naWNhbCBhY2Nlc3Mgc2VjdXJpdHkgbWVhc3VyZXMgdG8gcHJvdGVjdCBhZ2FpbnN0IHRocmVhdHMgZnJvbSBzb3VyY2VzIG91dHNpZGUgaXRzIHN5c3RlbSBib3VuZGFyaWVzLicsXG4gICdDQzYuNyc6XG4gICAgJ1RoZSBlbnRpdHkgcmVzdHJpY3RzIHRoZSB0cmFuc21pc3Npb24sIG1vdmVtZW50LCBhbmQgcmVtb3ZhbCBvZiBpbmZvcm1hdGlvbiB0byBhdXRob3JpemVkIGludGVybmFsIGFuZCBleHRlcm5hbCB1c2VycyBhbmQgcHJvY2Vzc2VzLCBhbmQgcHJvdGVjdHMgaXQgZHVyaW5nIHRyYW5zbWlzc2lvbiwgbW92ZW1lbnQsIG9yIHJlbW92YWwgdG8gbWVldCB0aGUgZW50aXR54oCZcyBvYmplY3RpdmVzLicsXG4gICdDQzYuOCc6XG4gICAgJ1RoZSBlbnRpdHkgaW1wbGVtZW50cyBjb250cm9scyB0byBwcmV2ZW50IG9yIGRldGVjdCBhbmQgYWN0IHVwb24gdGhlIGludHJvZHVjdGlvbiBvZiB1bmF1dGhvcml6ZWQgb3IgbWFsaWNpb3VzIHNvZnR3YXJlIHRvIG1lZXQgdGhlIGVudGl0eeKAmXMgb2JqZWN0aXZlcy4nLFxuICAnQ0M3LjEnOlxuICAgICdUbyBtZWV0IGl0cyBvYmplY3RpdmVzLCB0aGUgZW50aXR5IHVzZXMgZGV0ZWN0aW9uIGFuZCBtb25pdG9yaW5nIHByb2NlZHVyZXMgdG8gaWRlbnRpZnkgKDEpIGNoYW5nZXMgdG8gY29uZmlndXJhdGlvbnMgdGhhdCByZXN1bHQgaW4gdGhlIGludHJvZHVjdGlvbiBvZiBuZXcgdnVsbmVyYWJpbGl0aWVzLCBhbmQgKDIpIHN1c2NlcHRpYmlsaXRpZXMgdG8gbmV3bHkgZGlzY292ZXJlZCB2dWxuZXJhYmlsaXRpZXMuJyxcbiAgJ0NDNy4yJzpcbiAgICBcIlRoZSBlbnRpdHkgbW9uaXRvcnMgc3lzdGVtIGNvbXBvbmVudHMgYW5kIHRoZSBvcGVyYXRpb24gb2YgdGhvc2UgY29tcG9uZW50cyBmb3IgYW5vbWFsaWVzIHRoYXQgYXJlIGluZGljYXRpdmUgb2YgbWFsaWNpb3VzIGFjdHMsIG5hdHVyYWwgZGlzYXN0ZXJzLCBhbmQgZXJyb3JzIGFmZmVjdGluZyB0aGUgZW50aXR5J3MgYWJpbGl0eSB0byBtZWV0IGl0cyBvYmplY3RpdmVzOyBhbm9tYWxpZXMgYXJlIGFuYWx5emVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZXkgcmVwcmVzZW50IHNlY3VyaXR5IGV2ZW50cy5cIixcbiAgJ0NDNy4zJzpcbiAgICAnVGhlIGVudGl0eSBldmFsdWF0ZXMgc2VjdXJpdHkgZXZlbnRzIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZXkgY291bGQgb3IgaGF2ZSByZXN1bHRlZCBpbiBhIGZhaWx1cmUgb2YgdGhlIGVudGl0eSB0byBtZWV0IGl0cyBvYmplY3RpdmVzIChzZWN1cml0eSBpbmNpZGVudHMpIGFuZCwgaWYgc28sIHRha2VzIGFjdGlvbnMgdG8gcHJldmVudCBvciBhZGRyZXNzIHN1Y2ggZmFpbHVyZXMuJyxcbiAgJ0NDNy40JzpcbiAgICAnVGhlIGVudGl0eSByZXNwb25kcyB0byBpZGVudGlmaWVkIHNlY3VyaXR5IGluY2lkZW50cyBieSBleGVjdXRpbmcgYSBkZWZpbmVkIGluY2lkZW50LXJlc3BvbnNlIHByb2dyYW0gdG8gdW5kZXJzdGFuZCwgY29udGFpbiwgcmVtZWRpYXRlLCBhbmQgY29tbXVuaWNhdGUgc2VjdXJpdHkgaW5jaWRlbnRzLCBhcyBhcHByb3ByaWF0ZS4nLFxuICAnQ0M4LjEnOlxuICAgICdUaGUgZW50aXR5IGF1dGhvcml6ZXMsIGRlc2lnbnMsIGRldmVsb3BzIG9yIGFjcXVpcmVzLCBjb25maWd1cmVzLCBkb2N1bWVudHMsIHRlc3RzLCBhcHByb3ZlcywgYW5kIGltcGxlbWVudHMgY2hhbmdlcyB0byBpbmZyYXN0cnVjdHVyZSwgZGF0YSwgc29mdHdhcmUsIGFuZCBwcm9jZWR1cmVzIHRvIG1lZXQgaXRzIG9iamVjdGl2ZXMnLFxuICAnUEkxLjQnOlxuICAgICdUaGUgZW50aXR5IGltcGxlbWVudHMgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgdG8gbWFrZSBhdmFpbGFibGUgb3IgZGVsaXZlciBvdXRwdXQgY29tcGxldGVseSwgYWNjdXJhdGVseSwgYW5kIHRpbWVseSBpbiBhY2NvcmRhbmNlIHdpdGggc3BlY2lmaWNhdGlvbnMgdG8gbWVldCB0aGUgZW50aXR54oCZcyBvYmplY3RpdmVzLicsXG4gICdQSTEuNSc6XG4gICAgJ1RoZSBlbnRpdHkgaW1wbGVtZW50cyBwb2xpY2llcyBhbmQgcHJvY2VkdXJlcyB0byBzdG9yZSBpbnB1dHMsIGl0ZW1zIGluIHByb2Nlc3NpbmcsIGFuZCBvdXRwdXRzIGNvbXBsZXRlbHksIGFjY3VyYXRlbHksIGFuZCB0aW1lbHkgaW4gYWNjb3JkYW5jZSB3aXRoIHN5c3RlbSBzcGVjaWZpY2F0aW9ucyB0byBtZWV0IHRoZSBlbnRpdHnigJlzIG9iamVjdGl2ZXMuJ1xufTtcbiJdfQ==