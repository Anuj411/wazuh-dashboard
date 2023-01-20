"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgentConfiguration = void 0;

var _web_documentation = require("../../../common/services/web_documentation");

/*
 * Wazuh app - Agent configuration request objet for exporting it
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const AgentConfiguration = {
  configurations: [{
    title: 'Main configurations',
    sections: [{
      subtitle: 'Global configuration',
      desc: 'Logging settings that apply to the agent',
      config: [{
        component: 'com',
        configuration: 'logging'
      }],
      labels: [{
        plain: 'Write internal logs in plain text',
        json: 'Write internal logs in JSON format',
        server: 'List of managers to connect'
      }]
    }, {
      subtitle: 'Communication',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/client.html'),
      desc: 'Settings related to the connection with the manager',
      config: [{
        component: 'agent',
        configuration: 'client'
      }],
      labels: [{
        crypto_method: 'Method used to encrypt communications',
        auto_restart: 'Auto-restart the agent when receiving valid configuration from manager',
        notify_time: 'Time (in seconds) between agent checkings to the manager',
        'time-reconnect': 'Time (in seconds) before attempting to reconnect',
        server: 'List of managers to connect',
        'config-profile': 'Configuration profiles',
        remote_conf: 'Remote configuration is enabled'
      }]
    }, {
      subtitle: 'Anti-flooding settings',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/capabilities/antiflooding.html'),
      desc: 'Agent bucket parameters to avoid event flooding',
      config: [{
        component: 'agent',
        configuration: 'buffer'
      }],
      labels: [{
        disabled: 'Buffer disabled',
        queue_size: 'Queue size',
        events_per_second: 'Events per second'
      }]
    }, {
      subtitle: 'Agent labels',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/labels.html'),
      desc: 'User-defined information about the agent included in alerts',
      config: [{
        component: 'agent',
        configuration: 'labels'
      }]
    }]
  }, {
    title: 'Auditing and policy monitoring',
    sections: [{
      subtitle: 'Policy monitoring',
      docuLink: (0, _web_documentation.webDocumentationLink)('pci-dss/policy-monitoring.html'),
      desc: 'Configuration to ensure compliance with security policies, standards and hardening guides',
      config: [{
        component: 'syscheck',
        configuration: 'rootcheck'
      }],
      wodle: [{
        name: 'sca'
      }],
      labels: [{
        disabled: 'Policy monitoring service disabled',
        base_directory: 'Base directory',
        rootkit_files: 'Rootkit files database path',
        rootkit_trojans: 'Rootkit trojans database path',
        scanall: 'Scan the entire system',
        skip_nfs: 'Skip scan on CIFS/NFS mounts',
        frequency: 'Frequency (in seconds) to run the scan',
        check_dev: 'Check /dev path',
        check_files: 'Check files',
        check_if: 'Check network interfaces',
        check_pids: 'Check processes IDs',
        check_ports: 'Check network ports',
        check_sys: 'Check anomalous system objects',
        check_trojans: 'Check trojans',
        check_unixaudit: 'Check UNIX audit',
        system_audit: 'UNIX audit files paths',
        enabled: 'Security configuration assessment enabled',
        scan_on_start: 'Scan on start',
        interval: 'Interval',
        policies: 'Policies'
      }],
      tabs: ['General', 'Security configuration assessment']
    }, {
      subtitle: 'OpenSCAP',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-openscap.html'),
      desc: 'Configuration assessment and automation of compliance monitoring using SCAP checks',
      wodle: [{
        name: 'open-scap'
      }],
      labels: [{
        content: 'Evaluations',
        disabled: 'OpenSCAP integration disabled',
        'scan-on-start': 'Scan on start',
        interval: 'Interval between scan executions',
        timeout: 'Timeout (in seconds) for scan executions'
      }]
    }, {
      subtitle: 'CIS-CAT',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-ciscat.html'),
      desc: 'Configuration assessment using CIS scanner and SCAP checks',
      wodle: [{
        name: 'cis-cat'
      }],
      labels: [{
        disabled: 'CIS-CAT integration disabled',
        'scan-on-start': 'Scan on start',
        interval: 'Interval between scan executions',
        java_path: 'Path to Java executable directory',
        ciscat_path: 'Path to CIS-CAT executable directory',
        timeout: 'Timeout (in seconds) for scan executions',
        content: 'Benchmarks'
      }]
    }]
  }, {
    title: 'System threats and incident response',
    sections: [{
      subtitle: 'Osquery',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-osquery.html'),
      desc: 'Expose an operating system as a high-performance relational database',
      wodle: [{
        name: 'osquery'
      }],
      labels: [{
        disabled: 'Osquery integration disabled',
        run_daemon: 'Auto-run the Osquery daemon',
        add_labels: 'Use defined labels as decorators',
        log_path: 'Path to the Osquery results log file',
        config_path: 'Path to the Osquery configuration file'
      }]
    }, {
      subtitle: 'Inventory data',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-syscollector.html'),
      desc: 'Gather relevant information about system OS, hardware, networking and packages',
      wodle: [{
        name: 'syscollector'
      }],
      labels: [{
        disabled: 'Syscollector integration disabled',
        'scan-on-start': 'Scan on start',
        interval: 'Interval between system scans',
        network: 'Scan network interfaces',
        os: 'Scan operating system info',
        hardware: 'Scan hardware info',
        packages: 'Scan installed packages',
        ports: 'Scan listening network ports',
        ports_all: 'Scan all network ports',
        processes: 'Scan current processes'
      }]
    }, {
      subtitle: 'Active response',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/active-response.html'),
      desc: 'Active threat addressing by immediate response',
      config: [{
        component: 'com',
        configuration: 'active-response'
      }],
      labels: [{
        disabled: 'Active response disabled',
        ca_store: 'Use the following list of root CA certificates',
        ca_verification: 'Validate WPKs using root CA certificate'
      }]
    }, {
      subtitle: 'Commands',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-command.html'),
      desc: 'Configuration options of the Command wodle',
      wodle: [{
        name: 'command'
      }],
      labels: [{
        disabled: 'Command disabled',
        run_on_start: 'Run on start',
        ignore_output: 'Ignore command output',
        skip_verification: 'Ignore checksum verification',
        interval: 'Interval between executions',
        tag: 'Command name',
        command: 'Command to execute',
        verify_md5: 'Verify MD5 sum',
        verify_sha1: 'Verify SHA1 sum',
        verify_sha256: 'Verify SHA256 sum'
      }]
    }, {
      subtitle: 'Docker listener',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/wodle-docker.html'),
      desc: 'Monitor and collect the activity from Docker containers such as creation, running, starting, stopping or pausing events',
      wodle: [{
        name: 'docker-listener'
      }],
      labels: [{
        disabled: 'Docker listener disabled',
        run_on_start: 'Run the listener immediately when service is started',
        interval: 'Waiting time to rerun the listener in case it fails',
        attempts: 'Number of attempts to execute the listener'
      }]
    }]
  }, {
    title: 'Log data analysis',
    sections: [{
      subtitle: 'Log collection',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/capabilities/log-data-collection/index.html'),
      desc: 'Log analysis from text files, Windows events or syslog outputs',
      config: [{
        component: 'logcollector',
        configuration: 'localfile',
        filterBy: 'logformat'
      }, {
        component: 'logcollector',
        configuration: 'socket'
      }],
      labels: [{
        logformat: 'Log format',
        log_format: 'Log format',
        alias: 'Command alias',
        ignore_binaries: 'Ignore binaries',
        target: 'Redirect output to this socket',
        frequency: 'Interval between command executions',
        file: 'Log location',
        location: 'Log location',
        socket: 'Output sockets',
        syslog: 'Syslog',
        command: 'Command',
        full_command: 'Full command',
        audit: 'Audit'
      }],
      options: {
        hideHeader: true
      }
    }, {
      subtitle: 'Integrity monitoring',
      docuLink: (0, _web_documentation.webDocumentationLink)('user-manual/reference/ossec-conf/syscheck.html'),
      desc: 'Identify changes in content, permissions, ownership, and attributes of files',
      config: [{
        component: 'syscheck',
        configuration: 'syscheck',
        matrix: true
      }],
      tabs: ['General', 'Who data'],
      labels: [{
        disabled: 'Integrity monitoring disabled',
        frequency: 'Interval (in seconds) to run the integrity scan',
        skip_nfs: 'Skip scan on CIFS/NFS mounts',
        scan_on_start: 'Scan on start',
        directories: 'Monitored directories',
        nodiff: 'No diff directories',
        ignore: 'Ignored files and directories',
        restart_audit: 'Restart audit',
        startup_healthcheck: 'Startup healthcheck'
      }],
      opts: {
        realtime: 'RT',
        check_whodata: 'WD',
        report_changes: 'Changes',
        check_md5sum: 'MD5',
        check_sha1sum: 'SHA1',
        check_perm: 'Per.',
        check_size: 'Size',
        check_owner: 'Owner',
        check_group: 'Group',
        check_mtime: 'MT',
        check_inode: 'Inode',
        check_sha256sum: 'SHA256',
        follow_symbolic_link: 'SL'
      }
    }]
  }]
};
exports.AgentConfiguration = AgentConfiguration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50LWNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOlsiQWdlbnRDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbnMiLCJ0aXRsZSIsInNlY3Rpb25zIiwic3VidGl0bGUiLCJkZXNjIiwiY29uZmlnIiwiY29tcG9uZW50IiwiY29uZmlndXJhdGlvbiIsImxhYmVscyIsInBsYWluIiwianNvbiIsInNlcnZlciIsImRvY3VMaW5rIiwiY3J5cHRvX21ldGhvZCIsImF1dG9fcmVzdGFydCIsIm5vdGlmeV90aW1lIiwicmVtb3RlX2NvbmYiLCJkaXNhYmxlZCIsInF1ZXVlX3NpemUiLCJldmVudHNfcGVyX3NlY29uZCIsIndvZGxlIiwibmFtZSIsImJhc2VfZGlyZWN0b3J5Iiwicm9vdGtpdF9maWxlcyIsInJvb3RraXRfdHJvamFucyIsInNjYW5hbGwiLCJza2lwX25mcyIsImZyZXF1ZW5jeSIsImNoZWNrX2RldiIsImNoZWNrX2ZpbGVzIiwiY2hlY2tfaWYiLCJjaGVja19waWRzIiwiY2hlY2tfcG9ydHMiLCJjaGVja19zeXMiLCJjaGVja190cm9qYW5zIiwiY2hlY2tfdW5peGF1ZGl0Iiwic3lzdGVtX2F1ZGl0IiwiZW5hYmxlZCIsInNjYW5fb25fc3RhcnQiLCJpbnRlcnZhbCIsInBvbGljaWVzIiwidGFicyIsImNvbnRlbnQiLCJ0aW1lb3V0IiwiamF2YV9wYXRoIiwiY2lzY2F0X3BhdGgiLCJydW5fZGFlbW9uIiwiYWRkX2xhYmVscyIsImxvZ19wYXRoIiwiY29uZmlnX3BhdGgiLCJuZXR3b3JrIiwib3MiLCJoYXJkd2FyZSIsInBhY2thZ2VzIiwicG9ydHMiLCJwb3J0c19hbGwiLCJwcm9jZXNzZXMiLCJjYV9zdG9yZSIsImNhX3ZlcmlmaWNhdGlvbiIsInJ1bl9vbl9zdGFydCIsImlnbm9yZV9vdXRwdXQiLCJza2lwX3ZlcmlmaWNhdGlvbiIsInRhZyIsImNvbW1hbmQiLCJ2ZXJpZnlfbWQ1IiwidmVyaWZ5X3NoYTEiLCJ2ZXJpZnlfc2hhMjU2IiwiYXR0ZW1wdHMiLCJmaWx0ZXJCeSIsImxvZ2Zvcm1hdCIsImxvZ19mb3JtYXQiLCJhbGlhcyIsImlnbm9yZV9iaW5hcmllcyIsInRhcmdldCIsImZpbGUiLCJsb2NhdGlvbiIsInNvY2tldCIsInN5c2xvZyIsImZ1bGxfY29tbWFuZCIsImF1ZGl0Iiwib3B0aW9ucyIsImhpZGVIZWFkZXIiLCJtYXRyaXgiLCJkaXJlY3RvcmllcyIsIm5vZGlmZiIsImlnbm9yZSIsInJlc3RhcnRfYXVkaXQiLCJzdGFydHVwX2hlYWx0aGNoZWNrIiwib3B0cyIsInJlYWx0aW1lIiwiY2hlY2tfd2hvZGF0YSIsInJlcG9ydF9jaGFuZ2VzIiwiY2hlY2tfbWQ1c3VtIiwiY2hlY2tfc2hhMXN1bSIsImNoZWNrX3Blcm0iLCJjaGVja19zaXplIiwiY2hlY2tfb3duZXIiLCJjaGVja19ncm91cCIsImNoZWNrX210aW1lIiwiY2hlY2tfaW5vZGUiLCJjaGVja19zaGEyNTZzdW0iLCJmb2xsb3dfc3ltYm9saWNfbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7OztBQVdPLE1BQU1BLGtCQUFrQixHQUFHO0FBQ2hDQyxFQUFBQSxjQUFjLEVBQUUsQ0FDZDtBQUNFQyxJQUFBQSxLQUFLLEVBQUUscUJBRFQ7QUFFRUMsSUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUMsTUFBQUEsUUFBUSxFQUFFLHNCQURaO0FBRUVDLE1BQUFBLElBQUksRUFBRSwwQ0FGUjtBQUdFQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBYjtBQUFvQkMsUUFBQUEsYUFBYSxFQUFFO0FBQW5DLE9BQUQsQ0FIVjtBQUlFQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFBQSxLQUFLLEVBQUUsbUNBRFQ7QUFFRUMsUUFBQUEsSUFBSSxFQUFFLG9DQUZSO0FBR0VDLFFBQUFBLE1BQU0sRUFBRTtBQUhWLE9BRE07QUFKVixLQURRLEVBYVI7QUFDRVIsTUFBQUEsUUFBUSxFQUFFLGVBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQiw4Q0FBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUscURBSFI7QUFJRUMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLE9BQWI7QUFBc0JDLFFBQUFBLGFBQWEsRUFBRTtBQUFyQyxPQUFELENBSlY7QUFLRUMsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRUssUUFBQUEsYUFBYSxFQUFFLHVDQURqQjtBQUVFQyxRQUFBQSxZQUFZLEVBQ1Ysd0VBSEo7QUFJRUMsUUFBQUEsV0FBVyxFQUNULDBEQUxKO0FBTUUsMEJBQ0Usa0RBUEo7QUFRRUosUUFBQUEsTUFBTSxFQUFFLDZCQVJWO0FBU0UsMEJBQWtCLHdCQVRwQjtBQVVFSyxRQUFBQSxXQUFXLEVBQUU7QUFWZixPQURNO0FBTFYsS0FiUSxFQWlDUjtBQUNFYixNQUFBQSxRQUFRLEVBQUUsd0JBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQiw0Q0FBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUsaURBSFI7QUFJRUMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLE9BQWI7QUFBc0JDLFFBQUFBLGFBQWEsRUFBRTtBQUFyQyxPQUFELENBSlY7QUFLRUMsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRVMsUUFBQUEsUUFBUSxFQUFFLGlCQURaO0FBRUVDLFFBQUFBLFVBQVUsRUFBRSxZQUZkO0FBR0VDLFFBQUFBLGlCQUFpQixFQUFFO0FBSHJCLE9BRE07QUFMVixLQWpDUSxFQThDUjtBQUNFaEIsTUFBQUEsUUFBUSxFQUFFLGNBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQiw4Q0FBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUsNkRBSFI7QUFJRUMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLE9BQWI7QUFBc0JDLFFBQUFBLGFBQWEsRUFBRTtBQUFyQyxPQUFEO0FBSlYsS0E5Q1E7QUFGWixHQURjLEVBeURkO0FBQ0VOLElBQUFBLEtBQUssRUFBRSxnQ0FEVDtBQUVFQyxJQUFBQSxRQUFRLEVBQUUsQ0FDUjtBQUNFQyxNQUFBQSxRQUFRLEVBQUUsbUJBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQixnQ0FBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQ0YsMkZBSko7QUFLRUMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLFVBQWI7QUFBeUJDLFFBQUFBLGFBQWEsRUFBRTtBQUF4QyxPQUFELENBTFY7QUFNRWEsTUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBRCxDQU5UO0FBT0ViLE1BQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VTLFFBQUFBLFFBQVEsRUFBRSxvQ0FEWjtBQUVFSyxRQUFBQSxjQUFjLEVBQUUsZ0JBRmxCO0FBR0VDLFFBQUFBLGFBQWEsRUFBRSw2QkFIakI7QUFJRUMsUUFBQUEsZUFBZSxFQUFFLCtCQUpuQjtBQUtFQyxRQUFBQSxPQUFPLEVBQUUsd0JBTFg7QUFNRUMsUUFBQUEsUUFBUSxFQUFFLDhCQU5aO0FBT0VDLFFBQUFBLFNBQVMsRUFBRSx3Q0FQYjtBQVFFQyxRQUFBQSxTQUFTLEVBQUUsaUJBUmI7QUFTRUMsUUFBQUEsV0FBVyxFQUFFLGFBVGY7QUFVRUMsUUFBQUEsUUFBUSxFQUFFLDBCQVZaO0FBV0VDLFFBQUFBLFVBQVUsRUFBRSxxQkFYZDtBQVlFQyxRQUFBQSxXQUFXLEVBQUUscUJBWmY7QUFhRUMsUUFBQUEsU0FBUyxFQUFFLGdDQWJiO0FBY0VDLFFBQUFBLGFBQWEsRUFBRSxlQWRqQjtBQWVFQyxRQUFBQSxlQUFlLEVBQUUsa0JBZm5CO0FBZ0JFQyxRQUFBQSxZQUFZLEVBQUUsd0JBaEJoQjtBQWlCRUMsUUFBQUEsT0FBTyxFQUFFLDJDQWpCWDtBQWtCRUMsUUFBQUEsYUFBYSxFQUFFLGVBbEJqQjtBQW1CRUMsUUFBQUEsUUFBUSxFQUFFLFVBbkJaO0FBb0JFQyxRQUFBQSxRQUFRLEVBQUU7QUFwQlosT0FETSxDQVBWO0FBK0JFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksbUNBQVo7QUEvQlIsS0FEUSxFQWtDUjtBQUNFdEMsTUFBQUEsUUFBUSxFQUFFLFVBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQixzREFBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQ0Ysb0ZBSko7QUFLRWdCLE1BQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQ0FMVDtBQU1FYixNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFa0MsUUFBQUEsT0FBTyxFQUFFLGFBRFg7QUFFRXpCLFFBQUFBLFFBQVEsRUFBRSwrQkFGWjtBQUdFLHlCQUFpQixlQUhuQjtBQUlFc0IsUUFBQUEsUUFBUSxFQUFFLGtDQUpaO0FBS0VJLFFBQUFBLE9BQU8sRUFBRTtBQUxYLE9BRE07QUFOVixLQWxDUSxFQWtEUjtBQUNFeEMsTUFBQUEsUUFBUSxFQUFFLFNBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQixvREFBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUsNERBSFI7QUFJRWdCLE1BQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQ0FKVDtBQUtFYixNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFUyxRQUFBQSxRQUFRLEVBQUUsOEJBRFo7QUFFRSx5QkFBaUIsZUFGbkI7QUFHRXNCLFFBQUFBLFFBQVEsRUFBRSxrQ0FIWjtBQUlFSyxRQUFBQSxTQUFTLEVBQUUsbUNBSmI7QUFLRUMsUUFBQUEsV0FBVyxFQUFFLHNDQUxmO0FBTUVGLFFBQUFBLE9BQU8sRUFBRSwwQ0FOWDtBQU9FRCxRQUFBQSxPQUFPLEVBQUU7QUFQWCxPQURNO0FBTFYsS0FsRFE7QUFGWixHQXpEYyxFQWdJZDtBQUNFekMsSUFBQUEsS0FBSyxFQUFFLHNDQURUO0FBRUVDLElBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VDLE1BQUFBLFFBQVEsRUFBRSxTQURaO0FBRUVTLE1BQUFBLFFBQVEsRUFBRSw2Q0FBcUIscURBQXJCLENBRlo7QUFHRVIsTUFBQUEsSUFBSSxFQUNGLHNFQUpKO0FBS0VnQixNQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELENBTFQ7QUFNRWIsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRVMsUUFBQUEsUUFBUSxFQUFFLDhCQURaO0FBRUU2QixRQUFBQSxVQUFVLEVBQUUsNkJBRmQ7QUFHRUMsUUFBQUEsVUFBVSxFQUFFLGtDQUhkO0FBSUVDLFFBQUFBLFFBQVEsRUFBRSxzQ0FKWjtBQUtFQyxRQUFBQSxXQUFXLEVBQUU7QUFMZixPQURNO0FBTlYsS0FEUSxFQWlCUjtBQUNFOUMsTUFBQUEsUUFBUSxFQUFFLGdCQURaO0FBRUVTLE1BQUFBLFFBQVEsRUFBRSw2Q0FBcUIsMERBQXJCLENBRlo7QUFHRVIsTUFBQUEsSUFBSSxFQUNGLGdGQUpKO0FBS0VnQixNQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFELENBTFQ7QUFNRWIsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRVMsUUFBQUEsUUFBUSxFQUFFLG1DQURaO0FBRUUseUJBQWlCLGVBRm5CO0FBR0VzQixRQUFBQSxRQUFRLEVBQUUsK0JBSFo7QUFJRVcsUUFBQUEsT0FBTyxFQUFFLHlCQUpYO0FBS0VDLFFBQUFBLEVBQUUsRUFBRSw0QkFMTjtBQU1FQyxRQUFBQSxRQUFRLEVBQUUsb0JBTlo7QUFPRUMsUUFBQUEsUUFBUSxFQUFFLHlCQVBaO0FBUUVDLFFBQUFBLEtBQUssRUFBRSw4QkFSVDtBQVNFQyxRQUFBQSxTQUFTLEVBQUUsd0JBVGI7QUFVRUMsUUFBQUEsU0FBUyxFQUFFO0FBVmIsT0FETTtBQU5WLEtBakJRLEVBc0NSO0FBQ0VyRCxNQUFBQSxRQUFRLEVBQUUsaUJBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQix1REFBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUsZ0RBSFI7QUFJRUMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLGFBQWEsRUFBRTtBQUFuQyxPQUFELENBSlY7QUFLRUMsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRVMsUUFBQUEsUUFBUSxFQUFFLDBCQURaO0FBRUV3QyxRQUFBQSxRQUFRLEVBQUUsZ0RBRlo7QUFHRUMsUUFBQUEsZUFBZSxFQUFFO0FBSG5CLE9BRE07QUFMVixLQXRDUSxFQW1EUjtBQUNFdkQsTUFBQUEsUUFBUSxFQUFFLFVBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQixxREFBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQUUsNENBSFI7QUFJRWdCLE1BQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQ0FKVDtBQUtFYixNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFUyxRQUFBQSxRQUFRLEVBQUUsa0JBRFo7QUFFRTBDLFFBQUFBLFlBQVksRUFBRSxjQUZoQjtBQUdFQyxRQUFBQSxhQUFhLEVBQUUsdUJBSGpCO0FBSUVDLFFBQUFBLGlCQUFpQixFQUFFLDhCQUpyQjtBQUtFdEIsUUFBQUEsUUFBUSxFQUFFLDZCQUxaO0FBTUV1QixRQUFBQSxHQUFHLEVBQUUsY0FOUDtBQU9FQyxRQUFBQSxPQUFPLEVBQUUsb0JBUFg7QUFRRUMsUUFBQUEsVUFBVSxFQUFFLGdCQVJkO0FBU0VDLFFBQUFBLFdBQVcsRUFBRSxpQkFUZjtBQVVFQyxRQUFBQSxhQUFhLEVBQUU7QUFWakIsT0FETTtBQUxWLEtBbkRRLEVBdUVSO0FBQ0UvRCxNQUFBQSxRQUFRLEVBQUUsaUJBRFo7QUFFRVMsTUFBQUEsUUFBUSxFQUFFLDZDQUFxQixvREFBckIsQ0FGWjtBQUdFUixNQUFBQSxJQUFJLEVBQ0YseUhBSko7QUFLRWdCLE1BQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQ0FMVDtBQU1FYixNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFUyxRQUFBQSxRQUFRLEVBQUUsMEJBRFo7QUFFRTBDLFFBQUFBLFlBQVksRUFDVixzREFISjtBQUlFcEIsUUFBQUEsUUFBUSxFQUFFLHFEQUpaO0FBS0U0QixRQUFBQSxRQUFRLEVBQUU7QUFMWixPQURNO0FBTlYsS0F2RVE7QUFGWixHQWhJYyxFQTJOZDtBQUNFbEUsSUFBQUEsS0FBSyxFQUFFLG1CQURUO0FBRUVDLElBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VDLE1BQUFBLFFBQVEsRUFBRSxnQkFEWjtBQUVFUyxNQUFBQSxRQUFRLEVBQUUsNkNBQXFCLHlEQUFyQixDQUZaO0FBR0VSLE1BQUFBLElBQUksRUFDRixnRUFKSjtBQUtFQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFBQSxTQUFTLEVBQUUsY0FEYjtBQUVFQyxRQUFBQSxhQUFhLEVBQUUsV0FGakI7QUFHRTZELFFBQUFBLFFBQVEsRUFBRTtBQUhaLE9BRE0sRUFNTjtBQUFFOUQsUUFBQUEsU0FBUyxFQUFFLGNBQWI7QUFBNkJDLFFBQUFBLGFBQWEsRUFBRTtBQUE1QyxPQU5NLENBTFY7QUFhRUMsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRTZELFFBQUFBLFNBQVMsRUFBRSxZQURiO0FBRUVDLFFBQUFBLFVBQVUsRUFBRSxZQUZkO0FBR0VDLFFBQUFBLEtBQUssRUFBRSxlQUhUO0FBSUVDLFFBQUFBLGVBQWUsRUFBRSxpQkFKbkI7QUFLRUMsUUFBQUEsTUFBTSxFQUFFLGdDQUxWO0FBTUU5QyxRQUFBQSxTQUFTLEVBQUUscUNBTmI7QUFPRStDLFFBQUFBLElBQUksRUFBRSxjQVBSO0FBUUVDLFFBQUFBLFFBQVEsRUFBRSxjQVJaO0FBU0VDLFFBQUFBLE1BQU0sRUFBRSxnQkFUVjtBQVVFQyxRQUFBQSxNQUFNLEVBQUUsUUFWVjtBQVdFZCxRQUFBQSxPQUFPLEVBQUUsU0FYWDtBQVlFZSxRQUFBQSxZQUFZLEVBQUUsY0FaaEI7QUFhRUMsUUFBQUEsS0FBSyxFQUFFO0FBYlQsT0FETSxDQWJWO0FBOEJFQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUE5QlgsS0FEUSxFQWlDUjtBQUNFOUUsTUFBQUEsUUFBUSxFQUFFLHNCQURaO0FBRUVTLE1BQUFBLFFBQVEsRUFBRSw2Q0FBcUIsZ0RBQXJCLENBRlo7QUFHRVIsTUFBQUEsSUFBSSxFQUNGLDhFQUpKO0FBS0VDLE1BQUFBLE1BQU0sRUFBRSxDQUNOO0FBQUVDLFFBQUFBLFNBQVMsRUFBRSxVQUFiO0FBQXlCQyxRQUFBQSxhQUFhLEVBQUUsVUFBeEM7QUFBb0QyRSxRQUFBQSxNQUFNLEVBQUU7QUFBNUQsT0FETSxDQUxWO0FBUUV6QyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVcsVUFBWCxDQVJSO0FBU0VqQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFUyxRQUFBQSxRQUFRLEVBQUUsK0JBRFo7QUFFRVUsUUFBQUEsU0FBUyxFQUFFLGlEQUZiO0FBR0VELFFBQUFBLFFBQVEsRUFBRSw4QkFIWjtBQUlFWSxRQUFBQSxhQUFhLEVBQUUsZUFKakI7QUFLRTZDLFFBQUFBLFdBQVcsRUFBRSx1QkFMZjtBQU1FQyxRQUFBQSxNQUFNLEVBQUUscUJBTlY7QUFPRUMsUUFBQUEsTUFBTSxFQUFFLCtCQVBWO0FBUUVDLFFBQUFBLGFBQWEsRUFBRSxlQVJqQjtBQVNFQyxRQUFBQSxtQkFBbUIsRUFBRTtBQVR2QixPQURNLENBVFY7QUFzQkVDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxRQUFRLEVBQUUsSUFETjtBQUVKQyxRQUFBQSxhQUFhLEVBQUUsSUFGWDtBQUdKQyxRQUFBQSxjQUFjLEVBQUUsU0FIWjtBQUlKQyxRQUFBQSxZQUFZLEVBQUUsS0FKVjtBQUtKQyxRQUFBQSxhQUFhLEVBQUUsTUFMWDtBQU1KQyxRQUFBQSxVQUFVLEVBQUUsTUFOUjtBQU9KQyxRQUFBQSxVQUFVLEVBQUUsTUFQUjtBQVFKQyxRQUFBQSxXQUFXLEVBQUUsT0FSVDtBQVNKQyxRQUFBQSxXQUFXLEVBQUUsT0FUVDtBQVVKQyxRQUFBQSxXQUFXLEVBQUUsSUFWVDtBQVdKQyxRQUFBQSxXQUFXLEVBQUUsT0FYVDtBQVlKQyxRQUFBQSxlQUFlLEVBQUUsUUFaYjtBQWFKQyxRQUFBQSxvQkFBb0IsRUFBRTtBQWJsQjtBQXRCUixLQWpDUTtBQUZaLEdBM05jO0FBRGdCLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2ViRG9jdW1lbnRhdGlvbkxpbmsgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL3dlYl9kb2N1bWVudGF0aW9uXCI7XG5cbi8qXG4gKiBXYXp1aCBhcHAgLSBBZ2VudCBjb25maWd1cmF0aW9uIHJlcXVlc3Qgb2JqZXQgZm9yIGV4cG9ydGluZyBpdFxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmV4cG9ydCBjb25zdCBBZ2VudENvbmZpZ3VyYXRpb24gPSB7XG4gIGNvbmZpZ3VyYXRpb25zOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdNYWluIGNvbmZpZ3VyYXRpb25zJyxcbiAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzdWJ0aXRsZTogJ0dsb2JhbCBjb25maWd1cmF0aW9uJyxcbiAgICAgICAgICBkZXNjOiAnTG9nZ2luZyBzZXR0aW5ncyB0aGF0IGFwcGx5IHRvIHRoZSBhZ2VudCcsXG4gICAgICAgICAgY29uZmlnOiBbeyBjb21wb25lbnQ6ICdjb20nLCBjb25maWd1cmF0aW9uOiAnbG9nZ2luZycgfV0sXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBsYWluOiAnV3JpdGUgaW50ZXJuYWwgbG9ncyBpbiBwbGFpbiB0ZXh0JyxcbiAgICAgICAgICAgICAganNvbjogJ1dyaXRlIGludGVybmFsIGxvZ3MgaW4gSlNPTiBmb3JtYXQnLFxuICAgICAgICAgICAgICBzZXJ2ZXI6ICdMaXN0IG9mIG1hbmFnZXJzIHRvIGNvbm5lY3QnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdDb21tdW5pY2F0aW9uJyxcbiAgICAgICAgICBkb2N1TGluazogd2ViRG9jdW1lbnRhdGlvbkxpbmsoJ3VzZXItbWFudWFsL3JlZmVyZW5jZS9vc3NlYy1jb25mL2NsaWVudC5odG1sJyksXG4gICAgICAgICAgZGVzYzogJ1NldHRpbmdzIHJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgbWFuYWdlcicsXG4gICAgICAgICAgY29uZmlnOiBbeyBjb21wb25lbnQ6ICdhZ2VudCcsIGNvbmZpZ3VyYXRpb246ICdjbGllbnQnIH1dLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjcnlwdG9fbWV0aG9kOiAnTWV0aG9kIHVzZWQgdG8gZW5jcnlwdCBjb21tdW5pY2F0aW9ucycsXG4gICAgICAgICAgICAgIGF1dG9fcmVzdGFydDpcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN0YXJ0IHRoZSBhZ2VudCB3aGVuIHJlY2VpdmluZyB2YWxpZCBjb25maWd1cmF0aW9uIGZyb20gbWFuYWdlcicsXG4gICAgICAgICAgICAgIG5vdGlmeV90aW1lOlxuICAgICAgICAgICAgICAgICdUaW1lIChpbiBzZWNvbmRzKSBiZXR3ZWVuIGFnZW50IGNoZWNraW5ncyB0byB0aGUgbWFuYWdlcicsXG4gICAgICAgICAgICAgICd0aW1lLXJlY29ubmVjdCc6XG4gICAgICAgICAgICAgICAgJ1RpbWUgKGluIHNlY29uZHMpIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHJlY29ubmVjdCcsXG4gICAgICAgICAgICAgIHNlcnZlcjogJ0xpc3Qgb2YgbWFuYWdlcnMgdG8gY29ubmVjdCcsXG4gICAgICAgICAgICAgICdjb25maWctcHJvZmlsZSc6ICdDb25maWd1cmF0aW9uIHByb2ZpbGVzJyxcbiAgICAgICAgICAgICAgcmVtb3RlX2NvbmY6ICdSZW1vdGUgY29uZmlndXJhdGlvbiBpcyBlbmFibGVkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN1YnRpdGxlOiAnQW50aS1mbG9vZGluZyBzZXR0aW5ncycsXG4gICAgICAgICAgZG9jdUxpbms6IHdlYkRvY3VtZW50YXRpb25MaW5rKCd1c2VyLW1hbnVhbC9jYXBhYmlsaXRpZXMvYW50aWZsb29kaW5nLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOiAnQWdlbnQgYnVja2V0IHBhcmFtZXRlcnMgdG8gYXZvaWQgZXZlbnQgZmxvb2RpbmcnLFxuICAgICAgICAgIGNvbmZpZzogW3sgY29tcG9uZW50OiAnYWdlbnQnLCBjb25maWd1cmF0aW9uOiAnYnVmZmVyJyB9XSxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICdCdWZmZXIgZGlzYWJsZWQnLFxuICAgICAgICAgICAgICBxdWV1ZV9zaXplOiAnUXVldWUgc2l6ZScsXG4gICAgICAgICAgICAgIGV2ZW50c19wZXJfc2Vjb25kOiAnRXZlbnRzIHBlciBzZWNvbmQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdBZ2VudCBsYWJlbHMnLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvcmVmZXJlbmNlL29zc2VjLWNvbmYvbGFiZWxzLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOiAnVXNlci1kZWZpbmVkIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZ2VudCBpbmNsdWRlZCBpbiBhbGVydHMnLFxuICAgICAgICAgIGNvbmZpZzogW3sgY29tcG9uZW50OiAnYWdlbnQnLCBjb25maWd1cmF0aW9uOiAnbGFiZWxzJyB9XVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0F1ZGl0aW5nIGFuZCBwb2xpY3kgbW9uaXRvcmluZycsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdQb2xpY3kgbW9uaXRvcmluZycsXG4gICAgICAgICAgZG9jdUxpbms6IHdlYkRvY3VtZW50YXRpb25MaW5rKCdwY2ktZHNzL3BvbGljeS1tb25pdG9yaW5nLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgJ0NvbmZpZ3VyYXRpb24gdG8gZW5zdXJlIGNvbXBsaWFuY2Ugd2l0aCBzZWN1cml0eSBwb2xpY2llcywgc3RhbmRhcmRzIGFuZCBoYXJkZW5pbmcgZ3VpZGVzJyxcbiAgICAgICAgICBjb25maWc6IFt7IGNvbXBvbmVudDogJ3N5c2NoZWNrJywgY29uZmlndXJhdGlvbjogJ3Jvb3RjaGVjaycgfV0sXG4gICAgICAgICAgd29kbGU6IFt7IG5hbWU6ICdzY2EnIH1dLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogJ1BvbGljeSBtb25pdG9yaW5nIHNlcnZpY2UgZGlzYWJsZWQnLFxuICAgICAgICAgICAgICBiYXNlX2RpcmVjdG9yeTogJ0Jhc2UgZGlyZWN0b3J5JyxcbiAgICAgICAgICAgICAgcm9vdGtpdF9maWxlczogJ1Jvb3RraXQgZmlsZXMgZGF0YWJhc2UgcGF0aCcsXG4gICAgICAgICAgICAgIHJvb3RraXRfdHJvamFuczogJ1Jvb3RraXQgdHJvamFucyBkYXRhYmFzZSBwYXRoJyxcbiAgICAgICAgICAgICAgc2NhbmFsbDogJ1NjYW4gdGhlIGVudGlyZSBzeXN0ZW0nLFxuICAgICAgICAgICAgICBza2lwX25mczogJ1NraXAgc2NhbiBvbiBDSUZTL05GUyBtb3VudHMnLFxuICAgICAgICAgICAgICBmcmVxdWVuY3k6ICdGcmVxdWVuY3kgKGluIHNlY29uZHMpIHRvIHJ1biB0aGUgc2NhbicsXG4gICAgICAgICAgICAgIGNoZWNrX2RldjogJ0NoZWNrIC9kZXYgcGF0aCcsXG4gICAgICAgICAgICAgIGNoZWNrX2ZpbGVzOiAnQ2hlY2sgZmlsZXMnLFxuICAgICAgICAgICAgICBjaGVja19pZjogJ0NoZWNrIG5ldHdvcmsgaW50ZXJmYWNlcycsXG4gICAgICAgICAgICAgIGNoZWNrX3BpZHM6ICdDaGVjayBwcm9jZXNzZXMgSURzJyxcbiAgICAgICAgICAgICAgY2hlY2tfcG9ydHM6ICdDaGVjayBuZXR3b3JrIHBvcnRzJyxcbiAgICAgICAgICAgICAgY2hlY2tfc3lzOiAnQ2hlY2sgYW5vbWFsb3VzIHN5c3RlbSBvYmplY3RzJyxcbiAgICAgICAgICAgICAgY2hlY2tfdHJvamFuczogJ0NoZWNrIHRyb2phbnMnLFxuICAgICAgICAgICAgICBjaGVja191bml4YXVkaXQ6ICdDaGVjayBVTklYIGF1ZGl0JyxcbiAgICAgICAgICAgICAgc3lzdGVtX2F1ZGl0OiAnVU5JWCBhdWRpdCBmaWxlcyBwYXRocycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6ICdTZWN1cml0eSBjb25maWd1cmF0aW9uIGFzc2Vzc21lbnQgZW5hYmxlZCcsXG4gICAgICAgICAgICAgIHNjYW5fb25fc3RhcnQ6ICdTY2FuIG9uIHN0YXJ0JyxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgIHBvbGljaWVzOiAnUG9saWNpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0YWJzOiBbJ0dlbmVyYWwnLCAnU2VjdXJpdHkgY29uZmlndXJhdGlvbiBhc3Nlc3NtZW50J11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN1YnRpdGxlOiAnT3BlblNDQVAnLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvcmVmZXJlbmNlL29zc2VjLWNvbmYvd29kbGUtb3BlbnNjYXAuaHRtbCcpLFxuICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAnQ29uZmlndXJhdGlvbiBhc3Nlc3NtZW50IGFuZCBhdXRvbWF0aW9uIG9mIGNvbXBsaWFuY2UgbW9uaXRvcmluZyB1c2luZyBTQ0FQIGNoZWNrcycsXG4gICAgICAgICAgd29kbGU6IFt7IG5hbWU6ICdvcGVuLXNjYXAnIH1dLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb250ZW50OiAnRXZhbHVhdGlvbnMnLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJ09wZW5TQ0FQIGludGVncmF0aW9uIGRpc2FibGVkJyxcbiAgICAgICAgICAgICAgJ3NjYW4tb24tc3RhcnQnOiAnU2NhbiBvbiBzdGFydCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnSW50ZXJ2YWwgYmV0d2VlbiBzY2FuIGV4ZWN1dGlvbnMnLFxuICAgICAgICAgICAgICB0aW1lb3V0OiAnVGltZW91dCAoaW4gc2Vjb25kcykgZm9yIHNjYW4gZXhlY3V0aW9ucydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdWJ0aXRsZTogJ0NJUy1DQVQnLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvcmVmZXJlbmNlL29zc2VjLWNvbmYvd29kbGUtY2lzY2F0Lmh0bWwnKSxcbiAgICAgICAgICBkZXNjOiAnQ29uZmlndXJhdGlvbiBhc3Nlc3NtZW50IHVzaW5nIENJUyBzY2FubmVyIGFuZCBTQ0FQIGNoZWNrcycsXG4gICAgICAgICAgd29kbGU6IFt7IG5hbWU6ICdjaXMtY2F0JyB9XSxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICdDSVMtQ0FUIGludGVncmF0aW9uIGRpc2FibGVkJyxcbiAgICAgICAgICAgICAgJ3NjYW4tb24tc3RhcnQnOiAnU2NhbiBvbiBzdGFydCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnSW50ZXJ2YWwgYmV0d2VlbiBzY2FuIGV4ZWN1dGlvbnMnLFxuICAgICAgICAgICAgICBqYXZhX3BhdGg6ICdQYXRoIHRvIEphdmEgZXhlY3V0YWJsZSBkaXJlY3RvcnknLFxuICAgICAgICAgICAgICBjaXNjYXRfcGF0aDogJ1BhdGggdG8gQ0lTLUNBVCBleGVjdXRhYmxlIGRpcmVjdG9yeScsXG4gICAgICAgICAgICAgIHRpbWVvdXQ6ICdUaW1lb3V0IChpbiBzZWNvbmRzKSBmb3Igc2NhbiBleGVjdXRpb25zJyxcbiAgICAgICAgICAgICAgY29udGVudDogJ0JlbmNobWFya3MnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1N5c3RlbSB0aHJlYXRzIGFuZCBpbmNpZGVudCByZXNwb25zZScsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdPc3F1ZXJ5JyxcbiAgICAgICAgICBkb2N1TGluazogd2ViRG9jdW1lbnRhdGlvbkxpbmsoJ3VzZXItbWFudWFsL3JlZmVyZW5jZS9vc3NlYy1jb25mL3dvZGxlLW9zcXVlcnkuaHRtbCcpLFxuICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAnRXhwb3NlIGFuIG9wZXJhdGluZyBzeXN0ZW0gYXMgYSBoaWdoLXBlcmZvcm1hbmNlIHJlbGF0aW9uYWwgZGF0YWJhc2UnLFxuICAgICAgICAgIHdvZGxlOiBbeyBuYW1lOiAnb3NxdWVyeScgfV0sXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiAnT3NxdWVyeSBpbnRlZ3JhdGlvbiBkaXNhYmxlZCcsXG4gICAgICAgICAgICAgIHJ1bl9kYWVtb246ICdBdXRvLXJ1biB0aGUgT3NxdWVyeSBkYWVtb24nLFxuICAgICAgICAgICAgICBhZGRfbGFiZWxzOiAnVXNlIGRlZmluZWQgbGFiZWxzIGFzIGRlY29yYXRvcnMnLFxuICAgICAgICAgICAgICBsb2dfcGF0aDogJ1BhdGggdG8gdGhlIE9zcXVlcnkgcmVzdWx0cyBsb2cgZmlsZScsXG4gICAgICAgICAgICAgIGNvbmZpZ19wYXRoOiAnUGF0aCB0byB0aGUgT3NxdWVyeSBjb25maWd1cmF0aW9uIGZpbGUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdJbnZlbnRvcnkgZGF0YScsXG4gICAgICAgICAgZG9jdUxpbms6IHdlYkRvY3VtZW50YXRpb25MaW5rKCd1c2VyLW1hbnVhbC9yZWZlcmVuY2Uvb3NzZWMtY29uZi93b2RsZS1zeXNjb2xsZWN0b3IuaHRtbCcpLFxuICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAnR2F0aGVyIHJlbGV2YW50IGluZm9ybWF0aW9uIGFib3V0IHN5c3RlbSBPUywgaGFyZHdhcmUsIG5ldHdvcmtpbmcgYW5kIHBhY2thZ2VzJyxcbiAgICAgICAgICB3b2RsZTogW3sgbmFtZTogJ3N5c2NvbGxlY3RvcicgfV0sXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiAnU3lzY29sbGVjdG9yIGludGVncmF0aW9uIGRpc2FibGVkJyxcbiAgICAgICAgICAgICAgJ3NjYW4tb24tc3RhcnQnOiAnU2NhbiBvbiBzdGFydCcsXG4gICAgICAgICAgICAgIGludGVydmFsOiAnSW50ZXJ2YWwgYmV0d2VlbiBzeXN0ZW0gc2NhbnMnLFxuICAgICAgICAgICAgICBuZXR3b3JrOiAnU2NhbiBuZXR3b3JrIGludGVyZmFjZXMnLFxuICAgICAgICAgICAgICBvczogJ1NjYW4gb3BlcmF0aW5nIHN5c3RlbSBpbmZvJyxcbiAgICAgICAgICAgICAgaGFyZHdhcmU6ICdTY2FuIGhhcmR3YXJlIGluZm8nLFxuICAgICAgICAgICAgICBwYWNrYWdlczogJ1NjYW4gaW5zdGFsbGVkIHBhY2thZ2VzJyxcbiAgICAgICAgICAgICAgcG9ydHM6ICdTY2FuIGxpc3RlbmluZyBuZXR3b3JrIHBvcnRzJyxcbiAgICAgICAgICAgICAgcG9ydHNfYWxsOiAnU2NhbiBhbGwgbmV0d29yayBwb3J0cycsXG4gICAgICAgICAgICAgIHByb2Nlc3NlczogJ1NjYW4gY3VycmVudCBwcm9jZXNzZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdBY3RpdmUgcmVzcG9uc2UnLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvcmVmZXJlbmNlL29zc2VjLWNvbmYvYWN0aXZlLXJlc3BvbnNlLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOiAnQWN0aXZlIHRocmVhdCBhZGRyZXNzaW5nIGJ5IGltbWVkaWF0ZSByZXNwb25zZScsXG4gICAgICAgICAgY29uZmlnOiBbeyBjb21wb25lbnQ6ICdjb20nLCBjb25maWd1cmF0aW9uOiAnYWN0aXZlLXJlc3BvbnNlJyB9XSxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICdBY3RpdmUgcmVzcG9uc2UgZGlzYWJsZWQnLFxuICAgICAgICAgICAgICBjYV9zdG9yZTogJ1VzZSB0aGUgZm9sbG93aW5nIGxpc3Qgb2Ygcm9vdCBDQSBjZXJ0aWZpY2F0ZXMnLFxuICAgICAgICAgICAgICBjYV92ZXJpZmljYXRpb246ICdWYWxpZGF0ZSBXUEtzIHVzaW5nIHJvb3QgQ0EgY2VydGlmaWNhdGUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdDb21tYW5kcycsXG4gICAgICAgICAgZG9jdUxpbms6IHdlYkRvY3VtZW50YXRpb25MaW5rKCd1c2VyLW1hbnVhbC9yZWZlcmVuY2Uvb3NzZWMtY29uZi93b2RsZS1jb21tYW5kLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOiAnQ29uZmlndXJhdGlvbiBvcHRpb25zIG9mIHRoZSBDb21tYW5kIHdvZGxlJyxcbiAgICAgICAgICB3b2RsZTogW3sgbmFtZTogJ2NvbW1hbmQnIH1dLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogJ0NvbW1hbmQgZGlzYWJsZWQnLFxuICAgICAgICAgICAgICBydW5fb25fc3RhcnQ6ICdSdW4gb24gc3RhcnQnLFxuICAgICAgICAgICAgICBpZ25vcmVfb3V0cHV0OiAnSWdub3JlIGNvbW1hbmQgb3V0cHV0JyxcbiAgICAgICAgICAgICAgc2tpcF92ZXJpZmljYXRpb246ICdJZ25vcmUgY2hlY2tzdW0gdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdJbnRlcnZhbCBiZXR3ZWVuIGV4ZWN1dGlvbnMnLFxuICAgICAgICAgICAgICB0YWc6ICdDb21tYW5kIG5hbWUnLFxuICAgICAgICAgICAgICBjb21tYW5kOiAnQ29tbWFuZCB0byBleGVjdXRlJyxcbiAgICAgICAgICAgICAgdmVyaWZ5X21kNTogJ1ZlcmlmeSBNRDUgc3VtJyxcbiAgICAgICAgICAgICAgdmVyaWZ5X3NoYTE6ICdWZXJpZnkgU0hBMSBzdW0nLFxuICAgICAgICAgICAgICB2ZXJpZnlfc2hhMjU2OiAnVmVyaWZ5IFNIQTI1NiBzdW0nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3VidGl0bGU6ICdEb2NrZXIgbGlzdGVuZXInLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvcmVmZXJlbmNlL29zc2VjLWNvbmYvd29kbGUtZG9ja2VyLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgJ01vbml0b3IgYW5kIGNvbGxlY3QgdGhlIGFjdGl2aXR5IGZyb20gRG9ja2VyIGNvbnRhaW5lcnMgc3VjaCBhcyBjcmVhdGlvbiwgcnVubmluZywgc3RhcnRpbmcsIHN0b3BwaW5nIG9yIHBhdXNpbmcgZXZlbnRzJyxcbiAgICAgICAgICB3b2RsZTogW3sgbmFtZTogJ2RvY2tlci1saXN0ZW5lcicgfV0sXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiAnRG9ja2VyIGxpc3RlbmVyIGRpc2FibGVkJyxcbiAgICAgICAgICAgICAgcnVuX29uX3N0YXJ0OlxuICAgICAgICAgICAgICAgICdSdW4gdGhlIGxpc3RlbmVyIGltbWVkaWF0ZWx5IHdoZW4gc2VydmljZSBpcyBzdGFydGVkJyxcbiAgICAgICAgICAgICAgaW50ZXJ2YWw6ICdXYWl0aW5nIHRpbWUgdG8gcmVydW4gdGhlIGxpc3RlbmVyIGluIGNhc2UgaXQgZmFpbHMnLFxuICAgICAgICAgICAgICBhdHRlbXB0czogJ051bWJlciBvZiBhdHRlbXB0cyB0byBleGVjdXRlIHRoZSBsaXN0ZW5lcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTG9nIGRhdGEgYW5hbHlzaXMnLFxuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN1YnRpdGxlOiAnTG9nIGNvbGxlY3Rpb24nLFxuICAgICAgICAgIGRvY3VMaW5rOiB3ZWJEb2N1bWVudGF0aW9uTGluaygndXNlci1tYW51YWwvY2FwYWJpbGl0aWVzL2xvZy1kYXRhLWNvbGxlY3Rpb24vaW5kZXguaHRtbCcpLFxuICAgICAgICAgIGRlc2M6XG4gICAgICAgICAgICAnTG9nIGFuYWx5c2lzIGZyb20gdGV4dCBmaWxlcywgV2luZG93cyBldmVudHMgb3Igc3lzbG9nIG91dHB1dHMnLFxuICAgICAgICAgIGNvbmZpZzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdsb2djb2xsZWN0b3InLFxuICAgICAgICAgICAgICBjb25maWd1cmF0aW9uOiAnbG9jYWxmaWxlJyxcbiAgICAgICAgICAgICAgZmlsdGVyQnk6ICdsb2dmb3JtYXQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBjb21wb25lbnQ6ICdsb2djb2xsZWN0b3InLCBjb25maWd1cmF0aW9uOiAnc29ja2V0JyB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbG9nZm9ybWF0OiAnTG9nIGZvcm1hdCcsXG4gICAgICAgICAgICAgIGxvZ19mb3JtYXQ6ICdMb2cgZm9ybWF0JyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdDb21tYW5kIGFsaWFzJyxcbiAgICAgICAgICAgICAgaWdub3JlX2JpbmFyaWVzOiAnSWdub3JlIGJpbmFyaWVzJyxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnUmVkaXJlY3Qgb3V0cHV0IHRvIHRoaXMgc29ja2V0JyxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiAnSW50ZXJ2YWwgYmV0d2VlbiBjb21tYW5kIGV4ZWN1dGlvbnMnLFxuICAgICAgICAgICAgICBmaWxlOiAnTG9nIGxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgbG9jYXRpb246ICdMb2cgbG9jYXRpb24nLFxuICAgICAgICAgICAgICBzb2NrZXQ6ICdPdXRwdXQgc29ja2V0cycsXG4gICAgICAgICAgICAgIHN5c2xvZzogJ1N5c2xvZycsXG4gICAgICAgICAgICAgIGNvbW1hbmQ6ICdDb21tYW5kJyxcbiAgICAgICAgICAgICAgZnVsbF9jb21tYW5kOiAnRnVsbCBjb21tYW5kJyxcbiAgICAgICAgICAgICAgYXVkaXQ6ICdBdWRpdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wdGlvbnM6IHsgaGlkZUhlYWRlcjogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdWJ0aXRsZTogJ0ludGVncml0eSBtb25pdG9yaW5nJyxcbiAgICAgICAgICBkb2N1TGluazogd2ViRG9jdW1lbnRhdGlvbkxpbmsoJ3VzZXItbWFudWFsL3JlZmVyZW5jZS9vc3NlYy1jb25mL3N5c2NoZWNrLmh0bWwnKSxcbiAgICAgICAgICBkZXNjOlxuICAgICAgICAgICAgJ0lkZW50aWZ5IGNoYW5nZXMgaW4gY29udGVudCwgcGVybWlzc2lvbnMsIG93bmVyc2hpcCwgYW5kIGF0dHJpYnV0ZXMgb2YgZmlsZXMnLFxuICAgICAgICAgIGNvbmZpZzogW1xuICAgICAgICAgICAgeyBjb21wb25lbnQ6ICdzeXNjaGVjaycsIGNvbmZpZ3VyYXRpb246ICdzeXNjaGVjaycsIG1hdHJpeDogdHJ1ZSB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0YWJzOiBbJ0dlbmVyYWwnLCdXaG8gZGF0YSddLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogJ0ludGVncml0eSBtb25pdG9yaW5nIGRpc2FibGVkJyxcbiAgICAgICAgICAgICAgZnJlcXVlbmN5OiAnSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRvIHJ1biB0aGUgaW50ZWdyaXR5IHNjYW4nLFxuICAgICAgICAgICAgICBza2lwX25mczogJ1NraXAgc2NhbiBvbiBDSUZTL05GUyBtb3VudHMnLFxuICAgICAgICAgICAgICBzY2FuX29uX3N0YXJ0OiAnU2NhbiBvbiBzdGFydCcsXG4gICAgICAgICAgICAgIGRpcmVjdG9yaWVzOiAnTW9uaXRvcmVkIGRpcmVjdG9yaWVzJyxcbiAgICAgICAgICAgICAgbm9kaWZmOiAnTm8gZGlmZiBkaXJlY3RvcmllcycsXG4gICAgICAgICAgICAgIGlnbm9yZTogJ0lnbm9yZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzJyxcbiAgICAgICAgICAgICAgcmVzdGFydF9hdWRpdDogJ1Jlc3RhcnQgYXVkaXQnLFxuICAgICAgICAgICAgICBzdGFydHVwX2hlYWx0aGNoZWNrOiAnU3RhcnR1cCBoZWFsdGhjaGVjaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgIHJlYWx0aW1lOiAnUlQnLFxuICAgICAgICAgICAgY2hlY2tfd2hvZGF0YTogJ1dEJyxcbiAgICAgICAgICAgIHJlcG9ydF9jaGFuZ2VzOiAnQ2hhbmdlcycsXG4gICAgICAgICAgICBjaGVja19tZDVzdW06ICdNRDUnLFxuICAgICAgICAgICAgY2hlY2tfc2hhMXN1bTogJ1NIQTEnLFxuICAgICAgICAgICAgY2hlY2tfcGVybTogJ1Blci4nLFxuICAgICAgICAgICAgY2hlY2tfc2l6ZTogJ1NpemUnLFxuICAgICAgICAgICAgY2hlY2tfb3duZXI6ICdPd25lcicsXG4gICAgICAgICAgICBjaGVja19ncm91cDogJ0dyb3VwJyxcbiAgICAgICAgICAgIGNoZWNrX210aW1lOiAnTVQnLFxuICAgICAgICAgICAgY2hlY2tfaW5vZGU6ICdJbm9kZScsXG4gICAgICAgICAgICBjaGVja19zaGEyNTZzdW06ICdTSEEyNTYnLFxuICAgICAgICAgICAgZm9sbG93X3N5bWJvbGljX2xpbms6ICdTTCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4iXX0=