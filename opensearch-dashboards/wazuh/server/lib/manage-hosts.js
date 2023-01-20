"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageHosts = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _logger = require("./logger");

var _updateRegistry = require("./update-registry");

var _initialWazuhConfig = require("./initial-wazuh-config");

var _constants = require("../../common/constants");

var _filesystem = require("../lib/filesystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ManageHosts {
  constructor() {
    _defineProperty(this, "busy", void 0);

    _defineProperty(this, "file", void 0);

    _defineProperty(this, "updateRegistry", void 0);

    _defineProperty(this, "initialConfig", void 0);

    this.busy = false;
    this.file = _constants.WAZUH_DATA_CONFIG_APP_PATH;
    this.updateRegistry = new _updateRegistry.UpdateRegistry();
    this.initialConfig = _initialWazuhConfig.initialWazuhConfig;
  }
  /**
   * Composes the host structure
   * @param {Object} host
   * @param {String} id
   */


  composeHost(host, id) {
    try {
      (0, _logger.log)('manage-hosts:composeHost', 'Composing host', 'debug');
      return `  - ${!id ? new Date().getTime() : id}:
      url: ${host.url}
      port: ${host.port}
      username: ${host.username || host.user}
      password: ${host.password}`;
    } catch (error) {
      (0, _logger.log)('manage-hosts:composeHost', error.message || error);
      throw error;
    }
  }
  /**
   * Regex to build the host
   * @param {Object} host
   */


  composeRegex(host) {
    try {
      const hostId = Object.keys(host)[0];
      const reg = `\\s*-\\s*${hostId}\\s*:\\s*\\n*\\s*url\\s*:\\s*\\S*\\s*\\n*\\s*port\\s*:\\s*\\S*\\s*\\n*\\s*username\\s*:\\s*\\S*\\s*\\n*\\s*password\\s*:\\s*\\S*`;
      (0, _logger.log)('manage-hosts:composeRegex', 'Composing regex', 'debug');
      return new RegExp(`${reg}`, 'gm');
    } catch (error) {
      (0, _logger.log)('manage-hosts:composeRegex', error.message || error);
      throw error;
    }
  }
  /**
   * Returns the hosts in the wazuh.yml
   */


  async getHosts() {
    try {
      this.checkBusy();
      this.busy = true;
      (0, _filesystem.createDataDirectoryIfNotExists)();
      (0, _filesystem.createDataDirectoryIfNotExists)('config');

      if (!_fs.default.existsSync(_constants.WAZUH_DATA_CONFIG_APP_PATH)) {
        await _fs.default.writeFileSync(this.file, this.initialConfig, {
          encoding: 'utf8',
          mode: 0o600
        });
      }

      const raw = _fs.default.readFileSync(this.file, {
        encoding: 'utf-8'
      });

      this.busy = false;

      const content = _jsYaml.default.load(raw);

      (0, _logger.log)('manage-hosts:getHosts', 'Getting hosts', 'debug');
      const entries = (content || {})['hosts'] || [];
      return entries;
    } catch (error) {
      this.busy = false;
      (0, _logger.log)('manage-hosts:getHosts', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * This function checks if the hosts: key exists in the wazuh.yml for preventing duplicate in case of there's not any host defined
   */


  async checkIfHostsKeyExists() {
    try {
      (0, _logger.log)('manage-hosts:checkIfHostsKeyExists', 'Checking hosts key', 'debug');
      this.busy = true;

      const raw = _fs.default.readFileSync(this.file, {
        encoding: 'utf-8'
      });

      this.busy = false;

      const content = _jsYaml.default.load(raw);

      return Object.keys(content || {}).includes('hosts');
    } catch (error) {
      (0, _logger.log)('manage-hosts:checkIfHostsKeyExists', error.message || error);
      this.busy = false;
      return Promise.reject(error);
    }
  }
  /**
   * Returns the IDs of the current hosts in the wazuh.yml
   */


  async getCurrentHostsIds() {
    try {
      const hosts = await this.getHosts();
      const ids = hosts.map(h => {
        return Object.keys(h)[0];
      });
      (0, _logger.log)('manage-hosts:getCurrentHostsIds', 'Getting hosts ids', 'debug');
      return ids;
    } catch (error) {
      (0, _logger.log)('manage-hosts:getCurrentHostsIds', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Get host by id
   * @param {String} id
   */


  async getHostById(id) {
    try {
      (0, _logger.log)('manage-hosts:getHostById', `Getting host ${id}`, 'debug');
      const hosts = await this.getHosts();
      const host = hosts.filter(h => {
        return Object.keys(h)[0] == id;
      });

      if (host && !host.length) {
        throw new Error('Selected API is no longer available in wazuh.yml');
      }

      const key = Object.keys(host[0])[0];
      const result = Object.assign(host[0][key], {
        id: key
      }) || {};
      return result;
    } catch (error) {
      (0, _logger.log)('manage-hosts:getHostById', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Decodes the API password
   * @param {String} password
   */


  decodeApiPassword(password) {
    return Buffer.from(password, 'base64').toString('ascii');
  }
  /**
   *  Iterate the array with the API entries in given from the .wazuh index in order to create a valid array
   * @param {Object} apiEntries
   */


  transformIndexedApis(apiEntries) {
    const entries = [];

    try {
      apiEntries.map(entry => {
        const id = entry._id;
        const host = entry._source;
        const api = {
          id: id,
          url: host.url,
          port: host.api_port,
          username: host.api_username,
          password: this.decodeApiPassword(host.api_password),
          cluster_info: host.cluster_info,
          extensions: host.extensions
        };
        entries.push(api);
      });
      (0, _logger.log)('manage-hosts:transformIndexedApis', 'Transforming index API schedule to wazuh.yml', 'debug');
    } catch (error) {
      (0, _logger.log)('manage-hosts:transformIndexedApis', error.message || error);
      throw error;
    }

    return entries;
  }
  /**
   * Calls transformIndexedApis() to get the entries to migrate and after that calls addSeveralHosts()
   * @param {Object} apiEntries
   */


  async migrateFromIndex(apiEntries) {
    try {
      const apis = this.transformIndexedApis(apiEntries);
      return await this.addSeveralHosts(apis);
    } catch (error) {
      (0, _logger.log)('manage-hosts:migrateFromIndex', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Receives an array of hosts and checks if any host is already in the wazuh.yml, in this case is removed from the received array and returns the resulting array
   * @param {Array} hosts
   */


  async cleanExistingHosts(hosts) {
    try {
      const currentHosts = await this.getCurrentHostsIds();
      const cleanHosts = hosts.filter(h => {
        return !currentHosts.includes(h.id);
      });
      (0, _logger.log)('manage-hosts:cleanExistingHosts', 'Preventing add existings hosts', 'debug');
      return cleanHosts;
    } catch (error) {
      (0, _logger.log)('manage-hosts:cleanExistingHosts', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Throws an error is the wazuh.yml is busy
   */


  checkBusy() {
    if (this.busy) throw new Error('Another process is writting the configuration file');
  }
  /**
   * Recursive function used to add several APIs entries
   * @param {Array} hosts
   */


  async addSeveralHosts(hosts) {
    try {
      (0, _logger.log)('manage-hosts:addSeveralHosts', 'Adding several', 'debug');
      const hostsToAdd = await this.cleanExistingHosts(hosts);
      if (!hostsToAdd.length) return 'There are not APIs entries to migrate';

      for (let idx in hostsToAdd) {
        const entry = hostsToAdd[idx];
        await this.addHost(entry);
      }

      return 'All APIs entries were migrated to the wazuh.yml';
    } catch (error) {
      (0, _logger.log)('manage-hosts:addSeveralHosts', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Add a single host
   * @param {Obeject} host
   */


  async addHost(host) {
    const id = host.id || new Date().getTime();
    const compose = this.composeHost(host, id);
    let data = await _fs.default.readFileSync(this.file, {
      encoding: 'utf-8'
    });

    try {
      this.checkBusy();
      const hosts = (await this.getHosts()) || [];
      this.busy = true;

      if (!hosts.length) {
        const hostsExists = await this.checkIfHostsKeyExists();
        const result = !hostsExists ? `${data}\nhosts:\n${compose}\n` : `${data}\n${compose}\n`;
        await _fs.default.writeFileSync(this.file, result, 'utf8');
      } else {
        const lastHost = (hosts || []).pop();

        if (lastHost) {
          const lastHostObject = this.composeHost(lastHost[Object.keys(lastHost)[0]], Object.keys(lastHost)[0]);
          const regex = this.composeRegex(lastHost);
          const replace = data.replace(regex, `\n${lastHostObject}\n${compose}\n`);
          await _fs.default.writeFileSync(this.file, replace, 'utf8');
        }
      }

      this.busy = false;
      this.updateRegistry.migrateToRegistry(id, host.cluster_info, host.extensions);
      (0, _logger.log)('manage-hosts:addHost', `Host ${id} was properly added`, 'debug');
      return id;
    } catch (error) {
      this.busy = false;
      (0, _logger.log)('manage-hosts:addHost', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Delete a host from the wazuh.yml
   * @param {Object} req
   */


  async deleteHost(req) {
    let data = await _fs.default.readFileSync(this.file, {
      encoding: 'utf-8'
    });

    try {
      this.checkBusy();
      const hosts = (await this.getHosts()) || [];
      this.busy = true;

      if (!hosts.length) {
        throw new Error('There are not configured hosts.');
      } else {
        const hostsNumber = hosts.length;
        const target = (hosts || []).find(element => {
          return Object.keys(element)[0] === req.params.id;
        });

        if (!target) {
          throw new Error(`Host ${req.params.id} not found.`);
        }

        const regex = this.composeRegex(target);
        const result = data.replace(regex, ``);
        await _fs.default.writeFileSync(this.file, result, 'utf8');

        if (hostsNumber === 1) {
          data = await _fs.default.readFileSync(this.file, {
            encoding: 'utf-8'
          });
          const clearHosts = data.replace(new RegExp(`hosts:\\s*[\\n\\r]`, 'gm'), '');
          await _fs.default.writeFileSync(this.file, clearHosts, 'utf8');
        }
      }

      this.busy = false;
      (0, _logger.log)('manage-hosts:deleteHost', `Host ${req.params.id} was properly deleted`, 'debug');
      return true;
    } catch (error) {
      this.busy = false;
      (0, _logger.log)('manage-hosts:deleteHost', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Updates the hosts information
   * @param {String} id
   * @param {Object} host
   */


  async updateHost(id, host) {
    let data = await _fs.default.readFileSync(this.file, {
      encoding: 'utf-8'
    });

    try {
      this.checkBusy();
      const hosts = (await this.getHosts()) || [];
      this.busy = true;

      if (!hosts.length) {
        throw new Error('There are not configured hosts.');
      } else {
        const target = (hosts || []).find(element => {
          return Object.keys(element)[0] === id;
        });

        if (!target) {
          throw new Error(`Host ${id} not found.`);
        }

        const regex = this.composeRegex(target);
        const result = data.replace(regex, `\n${this.composeHost(host, id)}`);
        await _fs.default.writeFileSync(this.file, result, 'utf8');
      }

      this.busy = false;
      (0, _logger.log)('manage-hosts:updateHost', `Host ${id} was properly updated`, 'debug');
      return true;
    } catch (error) {
      this.busy = false;
      (0, _logger.log)('manage-hosts:updateHost', error.message || error);
      return Promise.reject(error);
    }
  }

}

exports.ManageHosts = ManageHosts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1ob3N0cy50cyJdLCJuYW1lcyI6WyJNYW5hZ2VIb3N0cyIsImNvbnN0cnVjdG9yIiwiYnVzeSIsImZpbGUiLCJXQVpVSF9EQVRBX0NPTkZJR19BUFBfUEFUSCIsInVwZGF0ZVJlZ2lzdHJ5IiwiVXBkYXRlUmVnaXN0cnkiLCJpbml0aWFsQ29uZmlnIiwiaW5pdGlhbFdhenVoQ29uZmlnIiwiY29tcG9zZUhvc3QiLCJob3N0IiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsInVybCIsInBvcnQiLCJ1c2VybmFtZSIsInVzZXIiLCJwYXNzd29yZCIsImVycm9yIiwibWVzc2FnZSIsImNvbXBvc2VSZWdleCIsImhvc3RJZCIsIk9iamVjdCIsImtleXMiLCJyZWciLCJSZWdFeHAiLCJnZXRIb3N0cyIsImNoZWNrQnVzeSIsImZzIiwiZXhpc3RzU3luYyIsIndyaXRlRmlsZVN5bmMiLCJlbmNvZGluZyIsIm1vZGUiLCJyYXciLCJyZWFkRmlsZVN5bmMiLCJjb250ZW50IiwieW1sIiwibG9hZCIsImVudHJpZXMiLCJQcm9taXNlIiwicmVqZWN0IiwiY2hlY2tJZkhvc3RzS2V5RXhpc3RzIiwiaW5jbHVkZXMiLCJnZXRDdXJyZW50SG9zdHNJZHMiLCJob3N0cyIsImlkcyIsIm1hcCIsImgiLCJnZXRIb3N0QnlJZCIsImZpbHRlciIsImxlbmd0aCIsIkVycm9yIiwia2V5IiwicmVzdWx0IiwiYXNzaWduIiwiZGVjb2RlQXBpUGFzc3dvcmQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJ0cmFuc2Zvcm1JbmRleGVkQXBpcyIsImFwaUVudHJpZXMiLCJlbnRyeSIsIl9pZCIsIl9zb3VyY2UiLCJhcGkiLCJhcGlfcG9ydCIsImFwaV91c2VybmFtZSIsImFwaV9wYXNzd29yZCIsImNsdXN0ZXJfaW5mbyIsImV4dGVuc2lvbnMiLCJwdXNoIiwibWlncmF0ZUZyb21JbmRleCIsImFwaXMiLCJhZGRTZXZlcmFsSG9zdHMiLCJjbGVhbkV4aXN0aW5nSG9zdHMiLCJjdXJyZW50SG9zdHMiLCJjbGVhbkhvc3RzIiwiaG9zdHNUb0FkZCIsImlkeCIsImFkZEhvc3QiLCJjb21wb3NlIiwiZGF0YSIsImhvc3RzRXhpc3RzIiwibGFzdEhvc3QiLCJwb3AiLCJsYXN0SG9zdE9iamVjdCIsInJlZ2V4IiwicmVwbGFjZSIsIm1pZ3JhdGVUb1JlZ2lzdHJ5IiwiZGVsZXRlSG9zdCIsInJlcSIsImhvc3RzTnVtYmVyIiwidGFyZ2V0IiwiZmluZCIsImVsZW1lbnQiLCJwYXJhbXMiLCJjbGVhckhvc3RzIiwidXBkYXRlSG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxNQUFNQSxXQUFOLENBQWtCO0FBS3ZCQyxFQUFBQSxXQUFXLEdBQUc7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUMscUNBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQUlDLDhCQUFKLEVBQXRCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkMsc0NBQXJCO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFXO0FBQ3BCLFFBQUk7QUFDRix1QkFBSSwwQkFBSixFQUFnQyxnQkFBaEMsRUFBa0QsT0FBbEQ7QUFDQSxhQUFRLE9BQU0sQ0FBQ0EsRUFBRCxHQUFNLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFOLEdBQTZCRixFQUFHO2FBQ3ZDRCxJQUFJLENBQUNJLEdBQUk7Y0FDUkosSUFBSSxDQUFDSyxJQUFLO2tCQUNOTCxJQUFJLENBQUNNLFFBQUwsSUFBaUJOLElBQUksQ0FBQ08sSUFBSztrQkFDM0JQLElBQUksQ0FBQ1EsUUFBUyxFQUoxQjtBQUtELEtBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCx1QkFBSSwwQkFBSixFQUFnQ0EsS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFqRDtB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QUFDQSx1QkFDRSx5QkFERixFQUVHLFFBQU9TLEVBQUcsdUJBRmIsRUFHRSxPQUhGO0FBS0EsYUFBTyxJQUFQO0FBQ0QsS0F4QkQsQ0F3QkUsT0FBT1EsS0FBUCxFQUFjO0FBQ2QsV0FBS2pCLElBQUwsR0FBWSxLQUFaO0FBQ0EsdUJBQUkseUJBQUosRUFBK0JpQixLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQWhEO0FBQ0EsYUFBT3FCLE9BQU8sQ0FBQ0MsTUFBUixDQUFldEIsS0FBZixDQUFQO0FBQ0Q7QUFDRjs7QUE3V3NCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSB0byB1cGRhdGUgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgVXBkYXRlUmVnaXN0cnkgfSBmcm9tICcuL3VwZGF0ZS1yZWdpc3RyeSc7XG5pbXBvcnQgeyBpbml0aWFsV2F6dWhDb25maWcgfSBmcm9tICcuL2luaXRpYWwtd2F6dWgtY29uZmlnJztcbmltcG9ydCB7IFdBWlVIX0RBVEFfQ09ORklHX0FQUF9QQVRIIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjcmVhdGVEYXRhRGlyZWN0b3J5SWZOb3RFeGlzdHMgfSBmcm9tICcuLi9saWIvZmlsZXN5c3RlbSc7XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VIb3N0cyB7XG4gIGJ1c3k6IGJvb2xlYW47XG4gIGZpbGU6IHN0cmluZztcbiAgdXBkYXRlUmVnaXN0cnk6IFVwZGF0ZVJlZ2lzdHJ5O1xuICBpbml0aWFsQ29uZmlnOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuZmlsZSA9IFdBWlVIX0RBVEFfQ09ORklHX0FQUF9QQVRIO1xuICAgIHRoaXMudXBkYXRlUmVnaXN0cnkgPSBuZXcgVXBkYXRlUmVnaXN0cnkoKTtcbiAgICB0aGlzLmluaXRpYWxDb25maWcgPSBpbml0aWFsV2F6dWhDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIGhvc3Qgc3RydWN0dXJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob3N0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKi9cbiAgY29tcG9zZUhvc3QoaG9zdCwgaWQpIHtcbiAgICB0cnkge1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6Y29tcG9zZUhvc3QnLCAnQ29tcG9zaW5nIGhvc3QnLCAnZGVidWcnKTtcbiAgICAgIHJldHVybiBgICAtICR7IWlkID8gbmV3IERhdGUoKS5nZXRUaW1lKCkgOiBpZH06XG4gICAgICB1cmw6ICR7aG9zdC51cmx9XG4gICAgICBwb3J0OiAke2hvc3QucG9ydH1cbiAgICAgIHVzZXJuYW1lOiAke2hvc3QudXNlcm5hbWUgfHwgaG9zdC51c2VyfVxuICAgICAgcGFzc3dvcmQ6ICR7aG9zdC5wYXNzd29yZH1gO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czpjb21wb3NlSG9zdCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2V4IHRvIGJ1aWxkIHRoZSBob3N0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob3N0XG4gICAqL1xuICBjb21wb3NlUmVnZXgoaG9zdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBob3N0SWQgPSBPYmplY3Qua2V5cyhob3N0KVswXTtcbiAgICAgIGNvbnN0IHJlZyA9IGBcXFxccyotXFxcXHMqJHtob3N0SWR9XFxcXHMqOlxcXFxzKlxcXFxuKlxcXFxzKnVybFxcXFxzKjpcXFxccypcXFxcUypcXFxccypcXFxcbipcXFxccypwb3J0XFxcXHMqOlxcXFxzKlxcXFxTKlxcXFxzKlxcXFxuKlxcXFxzKnVzZXJuYW1lXFxcXHMqOlxcXFxzKlxcXFxTKlxcXFxzKlxcXFxuKlxcXFxzKnBhc3N3b3JkXFxcXHMqOlxcXFxzKlxcXFxTKmA7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czpjb21wb3NlUmVnZXgnLCAnQ29tcG9zaW5nIHJlZ2V4JywgJ2RlYnVnJyk7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChgJHtyZWd9YCwgJ2dtJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmNvbXBvc2VSZWdleCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhvc3RzIGluIHRoZSB3YXp1aC55bWxcbiAgICovXG4gIGFzeW5jIGdldEhvc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNoZWNrQnVzeSgpO1xuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIGNyZWF0ZURhdGFEaXJlY3RvcnlJZk5vdEV4aXN0cygpO1xuICAgICAgY3JlYXRlRGF0YURpcmVjdG9yeUlmTm90RXhpc3RzKCdjb25maWcnKTtcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhXQVpVSF9EQVRBX0NPTkZJR19BUFBfUEFUSCkpIHtcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlU3luYyh0aGlzLmZpbGUsIHRoaXMuaW5pdGlhbENvbmZpZywgeyBlbmNvZGluZzogJ3V0ZjgnLCBtb2RlOiAwbzYwMCB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhdyA9IGZzLnJlYWRGaWxlU3luYyh0aGlzLmZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB5bWwubG9hZChyYXcpO1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6Z2V0SG9zdHMnLCAnR2V0dGluZyBob3N0cycsICdkZWJ1ZycpO1xuICAgICAgY29uc3QgZW50cmllcyA9IChjb250ZW50IHx8IHt9KVsnaG9zdHMnXSB8fCBbXTtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmdldEhvc3RzJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgaG9zdHM6IGtleSBleGlzdHMgaW4gdGhlIHdhenVoLnltbCBmb3IgcHJldmVudGluZyBkdXBsaWNhdGUgaW4gY2FzZSBvZiB0aGVyZSdzIG5vdCBhbnkgaG9zdCBkZWZpbmVkXG4gICAqL1xuICBhc3luYyBjaGVja0lmSG9zdHNLZXlFeGlzdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmNoZWNrSWZIb3N0c0tleUV4aXN0cycsICdDaGVja2luZyBob3N0cyBrZXknLCAnZGVidWcnKTtcbiAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5maWxlLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgICBjb25zdCBjb250ZW50ID0geW1sLmxvYWQocmF3KTtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb250ZW50IHx8IHt9KS5pbmNsdWRlcygnaG9zdHMnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6Y2hlY2tJZkhvc3RzS2V5RXhpc3RzJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEcyBvZiB0aGUgY3VycmVudCBob3N0cyBpbiB0aGUgd2F6dWgueW1sXG4gICAqL1xuICBhc3luYyBnZXRDdXJyZW50SG9zdHNJZHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhvc3RzID0gYXdhaXQgdGhpcy5nZXRIb3N0cygpO1xuICAgICAgY29uc3QgaWRzID0gaG9zdHMubWFwKGggPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaClbMF07XG4gICAgICB9KTtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmdldEN1cnJlbnRIb3N0c0lkcycsICdHZXR0aW5nIGhvc3RzIGlkcycsICdkZWJ1ZycpO1xuICAgICAgcmV0dXJuIGlkcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6Z2V0Q3VycmVudEhvc3RzSWRzJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaG9zdCBieSBpZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICovXG4gIGFzeW5jIGdldEhvc3RCeUlkKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmdldEhvc3RCeUlkJywgYEdldHRpbmcgaG9zdCAke2lkfWAsICdkZWJ1ZycpO1xuICAgICAgY29uc3QgaG9zdHMgPSBhd2FpdCB0aGlzLmdldEhvc3RzKCk7XG4gICAgICBjb25zdCBob3N0ID0gaG9zdHMuZmlsdGVyKGggPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaClbMF0gPT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGlmKGhvc3QgJiYgIWhvc3QubGVuZ3RoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBBUEkgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBpbiB3YXp1aC55bWwnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGhvc3RbMF0pWzBdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihob3N0WzBdW2tleV0sIHsgaWQ6IGtleSB9KSB8fCB7fTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmdldEhvc3RCeUlkJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHRoZSBBUEkgcGFzc3dvcmRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkXG4gICAqL1xuICBkZWNvZGVBcGlQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShwYXNzd29yZCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpO1xuICB9XG5cbiAgLyoqXG4gICAqICBJdGVyYXRlIHRoZSBhcnJheSB3aXRoIHRoZSBBUEkgZW50cmllcyBpbiBnaXZlbiBmcm9tIHRoZSAud2F6dWggaW5kZXggaW4gb3JkZXIgdG8gY3JlYXRlIGEgdmFsaWQgYXJyYXlcbiAgICogQHBhcmFtIHtPYmplY3R9IGFwaUVudHJpZXNcbiAgICovXG4gIHRyYW5zZm9ybUluZGV4ZWRBcGlzKGFwaUVudHJpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGFwaUVudHJpZXMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBlbnRyeS5faWQ7XG4gICAgICAgIGNvbnN0IGhvc3QgPSBlbnRyeS5fc291cmNlO1xuICAgICAgICBjb25zdCBhcGkgPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHVybDogaG9zdC51cmwsXG4gICAgICAgICAgcG9ydDogaG9zdC5hcGlfcG9ydCxcbiAgICAgICAgICB1c2VybmFtZTogaG9zdC5hcGlfdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZGVjb2RlQXBpUGFzc3dvcmQoaG9zdC5hcGlfcGFzc3dvcmQpLFxuICAgICAgICAgIGNsdXN0ZXJfaW5mbzogaG9zdC5jbHVzdGVyX2luZm8sXG4gICAgICAgICAgZXh0ZW5zaW9uczogaG9zdC5leHRlbnNpb25zXG4gICAgICAgIH07XG4gICAgICAgIGVudHJpZXMucHVzaChhcGkpO1xuICAgICAgfSk7XG4gICAgICBsb2coXG4gICAgICAgICdtYW5hZ2UtaG9zdHM6dHJhbnNmb3JtSW5kZXhlZEFwaXMnLFxuICAgICAgICAnVHJhbnNmb3JtaW5nIGluZGV4IEFQSSBzY2hlZHVsZSB0byB3YXp1aC55bWwnLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czp0cmFuc2Zvcm1JbmRleGVkQXBpcycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRyYW5zZm9ybUluZGV4ZWRBcGlzKCkgdG8gZ2V0IHRoZSBlbnRyaWVzIHRvIG1pZ3JhdGUgYW5kIGFmdGVyIHRoYXQgY2FsbHMgYWRkU2V2ZXJhbEhvc3RzKClcbiAgICogQHBhcmFtIHtPYmplY3R9IGFwaUVudHJpZXNcbiAgICovXG4gIGFzeW5jIG1pZ3JhdGVGcm9tSW5kZXgoYXBpRW50cmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcGlzID0gdGhpcy50cmFuc2Zvcm1JbmRleGVkQXBpcyhhcGlFbnRyaWVzKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmFkZFNldmVyYWxIb3N0cyhhcGlzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6bWlncmF0ZUZyb21JbmRleCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjZWl2ZXMgYW4gYXJyYXkgb2YgaG9zdHMgYW5kIGNoZWNrcyBpZiBhbnkgaG9zdCBpcyBhbHJlYWR5IGluIHRoZSB3YXp1aC55bWwsIGluIHRoaXMgY2FzZSBpcyByZW1vdmVkIGZyb20gdGhlIHJlY2VpdmVkIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgYXJyYXlcbiAgICogQHBhcmFtIHtBcnJheX0gaG9zdHNcbiAgICovXG4gIGFzeW5jIGNsZWFuRXhpc3RpbmdIb3N0cyhob3N0cykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXJyZW50SG9zdHMgPSBhd2FpdCB0aGlzLmdldEN1cnJlbnRIb3N0c0lkcygpO1xuICAgICAgY29uc3QgY2xlYW5Ib3N0cyA9IGhvc3RzLmZpbHRlcihoID0+IHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50SG9zdHMuaW5jbHVkZXMoaC5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxvZyhcbiAgICAgICAgJ21hbmFnZS1ob3N0czpjbGVhbkV4aXN0aW5nSG9zdHMnLFxuICAgICAgICAnUHJldmVudGluZyBhZGQgZXhpc3RpbmdzIGhvc3RzJyxcbiAgICAgICAgJ2RlYnVnJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBjbGVhbkhvc3RzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czpjbGVhbkV4aXN0aW5nSG9zdHMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBlcnJvciBpcyB0aGUgd2F6dWgueW1sIGlzIGJ1c3lcbiAgICovXG4gIGNoZWNrQnVzeSgpIHtcbiAgICBpZiAodGhpcy5idXN5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbm90aGVyIHByb2Nlc3MgaXMgd3JpdHRpbmcgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZSBmdW5jdGlvbiB1c2VkIHRvIGFkZCBzZXZlcmFsIEFQSXMgZW50cmllc1xuICAgKiBAcGFyYW0ge0FycmF5fSBob3N0c1xuICAgKi9cbiAgYXN5bmMgYWRkU2V2ZXJhbEhvc3RzKGhvc3RzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmFkZFNldmVyYWxIb3N0cycsICdBZGRpbmcgc2V2ZXJhbCcsICdkZWJ1ZycpO1xuICAgICAgY29uc3QgaG9zdHNUb0FkZCA9IGF3YWl0IHRoaXMuY2xlYW5FeGlzdGluZ0hvc3RzKGhvc3RzKTtcbiAgICAgIGlmICghaG9zdHNUb0FkZC5sZW5ndGgpIHJldHVybiAnVGhlcmUgYXJlIG5vdCBBUElzIGVudHJpZXMgdG8gbWlncmF0ZSc7XG4gICAgICBmb3IgKGxldCBpZHggaW4gaG9zdHNUb0FkZCkge1xuICAgICAgICBjb25zdCBlbnRyeSA9IGhvc3RzVG9BZGRbaWR4XTtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGRIb3N0KGVudHJ5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnQWxsIEFQSXMgZW50cmllcyB3ZXJlIG1pZ3JhdGVkIHRvIHRoZSB3YXp1aC55bWwnO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czphZGRTZXZlcmFsSG9zdHMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNpbmdsZSBob3N0XG4gICAqIEBwYXJhbSB7T2JlamVjdH0gaG9zdFxuICAgKi9cbiAgYXN5bmMgYWRkSG9zdChob3N0KSB7XG4gICAgY29uc3QgaWQgPSBob3N0LmlkIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGNvbXBvc2UgPSB0aGlzLmNvbXBvc2VIb3N0KGhvc3QsIGlkKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyh0aGlzLmZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2hlY2tCdXN5KCk7XG4gICAgICBjb25zdCBob3N0cyA9IChhd2FpdCB0aGlzLmdldEhvc3RzKCkpIHx8IFtdO1xuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIGlmICghaG9zdHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGhvc3RzRXhpc3RzID0gYXdhaXQgdGhpcy5jaGVja0lmSG9zdHNLZXlFeGlzdHMoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIWhvc3RzRXhpc3RzXG4gICAgICAgICAgPyBgJHtkYXRhfVxcbmhvc3RzOlxcbiR7Y29tcG9zZX1cXG5gXG4gICAgICAgICAgOiBgJHtkYXRhfVxcbiR7Y29tcG9zZX1cXG5gO1xuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGVTeW5jKHRoaXMuZmlsZSwgcmVzdWx0LCAndXRmOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFzdEhvc3QgPSAoaG9zdHMgfHwgW10pLnBvcCgpO1xuICAgICAgICBpZiAobGFzdEhvc3QpIHtcbiAgICAgICAgICBjb25zdCBsYXN0SG9zdE9iamVjdCA9IHRoaXMuY29tcG9zZUhvc3QoXG4gICAgICAgICAgICBsYXN0SG9zdFtPYmplY3Qua2V5cyhsYXN0SG9zdClbMF1dLFxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGFzdEhvc3QpWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCByZWdleCA9IHRoaXMuY29tcG9zZVJlZ2V4KGxhc3RIb3N0KTtcbiAgICAgICAgICBjb25zdCByZXBsYWNlID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVnZXgsXG4gICAgICAgICAgICBgXFxuJHtsYXN0SG9zdE9iamVjdH1cXG4ke2NvbXBvc2V9XFxuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlU3luYyh0aGlzLmZpbGUsIHJlcGxhY2UsICd1dGY4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVSZWdpc3RyeS5taWdyYXRlVG9SZWdpc3RyeShcbiAgICAgICAgaWQsXG4gICAgICAgIGhvc3QuY2x1c3Rlcl9pbmZvLFxuICAgICAgICBob3N0LmV4dGVuc2lvbnNcbiAgICAgICk7XG4gICAgICBsb2coJ21hbmFnZS1ob3N0czphZGRIb3N0JywgYEhvc3QgJHtpZH0gd2FzIHByb3Blcmx5IGFkZGVkYCwgJ2RlYnVnJyk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6YWRkSG9zdCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgaG9zdCBmcm9tIHRoZSB3YXp1aC55bWxcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcVxuICAgKi9cbiAgYXN5bmMgZGVsZXRlSG9zdChyZXEpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyh0aGlzLmZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2hlY2tCdXN5KCk7XG4gICAgICBjb25zdCBob3N0cyA9IChhd2FpdCB0aGlzLmdldEhvc3RzKCkpIHx8IFtdO1xuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIGlmICghaG9zdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vdCBjb25maWd1cmVkIGhvc3RzLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaG9zdHNOdW1iZXIgPSBob3N0cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IChob3N0cyB8fCBbXSkuZmluZChlbGVtZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZWxlbWVudClbMF0gPT09IHJlcS5wYXJhbXMuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSG9zdCAke3JlcS5wYXJhbXMuaWR9IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IHRoaXMuY29tcG9zZVJlZ2V4KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVwbGFjZShyZWdleCwgYGApO1xuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGVTeW5jKHRoaXMuZmlsZSwgcmVzdWx0LCAndXRmOCcpO1xuICAgICAgICBpZiAoaG9zdHNOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKHRoaXMuZmlsZSwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICAgICAgICBjb25zdCBjbGVhckhvc3RzID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChgaG9zdHM6XFxcXHMqW1xcXFxuXFxcXHJdYCwgJ2dtJyksXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlU3luYyh0aGlzLmZpbGUsIGNsZWFySG9zdHMsICd1dGY4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgbG9nKFxuICAgICAgICAnbWFuYWdlLWhvc3RzOmRlbGV0ZUhvc3QnLFxuICAgICAgICBgSG9zdCAke3JlcS5wYXJhbXMuaWR9IHdhcyBwcm9wZXJseSBkZWxldGVkYCxcbiAgICAgICAgJ2RlYnVnJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIGxvZygnbWFuYWdlLWhvc3RzOmRlbGV0ZUhvc3QnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGhvc3RzIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gaG9zdFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlSG9zdChpZCwgaG9zdCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKHRoaXMuZmlsZSwgeyBlbmNvZGluZzogJ3V0Zi04JyB9KTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jaGVja0J1c3koKTtcbiAgICAgIGNvbnN0IGhvc3RzID0gKGF3YWl0IHRoaXMuZ2V0SG9zdHMoKSkgfHwgW107XG4gICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgICAgaWYgKCFob3N0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgbm90IGNvbmZpZ3VyZWQgaG9zdHMuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAoaG9zdHMgfHwgW10pLmZpbmQoZWxlbWVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIb3N0ICR7aWR9IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IHRoaXMuY29tcG9zZVJlZ2V4KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVwbGFjZShyZWdleCwgYFxcbiR7dGhpcy5jb21wb3NlSG9zdChob3N0LCBpZCl9YCk7XG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZVN5bmModGhpcy5maWxlLCByZXN1bHQsICd1dGY4Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIGxvZyhcbiAgICAgICAgJ21hbmFnZS1ob3N0czp1cGRhdGVIb3N0JyxcbiAgICAgICAgYEhvc3QgJHtpZH0gd2FzIHByb3Blcmx5IHVwZGF0ZWRgLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgbG9nKCdtYW5hZ2UtaG9zdHM6dXBkYXRlSG9zdCcsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==