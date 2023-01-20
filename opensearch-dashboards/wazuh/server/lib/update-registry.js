"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateRegistry = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _logger = require("./logger");

var _constants = require("../../common/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UpdateRegistry {
  constructor() {
    _defineProperty(this, "busy", void 0);

    _defineProperty(this, "file", void 0);

    this.busy = false;
    this.file = _constants.WAZUH_DATA_CONFIG_REGISTRY_PATH;
  }
  /**
   * Reads the Wazuh registry content
   */


  async readContent() {
    try {
      (0, _logger.log)('update-registry:readContent', 'Reading wazuh-registry.json content', 'debug');
      const content = await _fs.default.readFileSync(this.file, {
        encoding: 'utf-8'
      });
      return JSON.parse(content);
    } catch (error) {
      (0, _logger.log)('update-registry:readContent', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Get the hosts and their cluster info stored in the registry
   */


  async getHosts() {
    try {
      (0, _logger.log)('update-registry:getHosts', 'Getting hosts from registry', 'debug');
      const content = await this.readContent();
      return content.hosts || {};
    } catch (error) {
      (0, _logger.log)('update-registry:getHosts', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Returns the cluster information associated to an API id
   * @param {String} id
   */


  async getHostById(id) {
    try {
      if (!id) throw new Error('API id is missing');
      const hosts = await this.getHosts();
      return hosts.id || {};
    } catch (error) {
      (0, _logger.log)('update-registry:getClusterInfoByAPI', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Writes the wazuh-registry.json
   * @param {Object} content
   */


  async writeContent(content) {
    try {
      (0, _logger.log)('update-registry:writeContent', 'Writting wazuh-registry.json content', 'debug');

      if (this.busy) {
        throw new Error('Another process is updating the registry file');
      }

      this.busy = true;
      await _fs.default.writeFileSync(this.file, JSON.stringify(content));
      this.busy = false;
    } catch (error) {
      (0, _logger.log)('update-registry:writeContent', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Checks if the host exist in order to update the data, otherwise creates it
   * @param {String} id
   * @param {Object} hosts
   */


  checkHost(id, hosts) {
    try {
      return Object.keys(hosts).includes(id);
    } catch (error) {
      (0, _logger.log)('update-registry:checkHost', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Migrates the cluster information and extensions associated to an API id
   * @param {String} id
   * @param {Object} clusterInfo
   * @param {Object} clusterExtensions
   */


  async migrateToRegistry(id, clusterInfo, clusterExtensions) {
    try {
      const content = await this.readContent();
      if (!Object.keys(content).includes('hosts')) Object.assign(content, {
        hosts: {}
      });
      const info = {
        cluster_info: clusterInfo,
        extensions: clusterExtensions
      };
      content.hosts[id] = info;
      await this.writeContent(content);
      (0, _logger.log)('update-registry:migrateToRegistry', `API ${id} was properly migrated`, 'debug');
      return info;
    } catch (error) {
      (0, _logger.log)('update-registry:migrateToRegistry', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Updates the cluster-information or manager-information in the registry
   * @param {String} id
   * @param {Object} clusterInfo
   */


  async updateClusterInfo(id, clusterInfo) {
    try {
      const content = await this.readContent(); // Checks if not exists in order to create

      if (!content.hosts[id]) content.hosts[id] = {};
      content.hosts[id].cluster_info = clusterInfo;
      await this.writeContent(content);
      (0, _logger.log)('update-registry:updateClusterInfo', `API ${id} information was properly updated`, 'debug');
      return id;
    } catch (error) {
      (0, _logger.log)('update-registry:updateClusterInfo', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Updates the cluster-information or manager-information in the registry
   * @param {String} id
   * @param {Object} clusterInfo
   */


  async updateAPIExtensions(id, extensions) {
    try {
      const content = await this.readContent();
      if (content.hosts[id]) content.hosts[id].extensions = extensions;
      await this.writeContent(content);
      (0, _logger.log)('update-registry:updateAPIExtensions', `API ${id} extensions were properly updated`, 'debug');
      return id;
    } catch (error) {
      (0, _logger.log)('update-registry:updateAPIHostname', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Remove the given ids from the registry host entries
   * @param {Array} ids
   */


  async removeHostEntries(ids) {
    try {
      (0, _logger.log)('update-registry:removeHostEntry', 'Removing entry', 'debug');
      const content = await this.readContent();
      ids.forEach(id => delete content.hosts[id]);
      await this.writeContent(content);
    } catch (error) {
      (0, _logger.log)('update-registry:removeHostEntry', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Compare the hosts from wazuh.yml and the host in the wazuh-registry.json file in order to remove the orphan registry register
   * @param {Array} hosts
   */


  async removeOrphanEntries(hosts) {
    try {
      (0, _logger.log)('update-registry:removeOrphanEntries', 'Checking orphan registry entries', 'debug');
      const entries = await this.getHosts();
      const hostsKeys = hosts.map(h => {
        return h.id;
      });
      const entriesKeys = Object.keys(entries);
      const diff = entriesKeys.filter(e => {
        return !hostsKeys.includes(e);
      });
      await this.removeHostEntries(diff);
    } catch (error) {
      (0, _logger.log)('update-registry:removeOrphanEntries', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Returns the token information associated to an API id
   * @param {String} id
   */


  async getTokenById(id) {
    try {
      if (!id) throw new Error('API id is missing');
      const hosts = await this.getHosts();
      return hosts[id] ? hosts[id].token || null : null;
    } catch (error) {
      (0, _logger.log)('update-registry:getTokenById', error.message || error);
      return Promise.reject(error);
    }
  }
  /**
   * Updates the token in the registry
   * @param {String} id
   * @param {String} token
   */


  async updateTokenByHost(id, token) {
    try {
      const content = await this.readContent(); // Checks if not exists in order to create

      if (!content.hosts[id]) content.hosts[id] = {};
      content.hosts[id].token = token;
      await this.writeContent(content);
      (0, _logger.log)('update-registry:updateToken', `API ${id} information was properly updated`, 'debug');
      return id;
    } catch (error) {
      (0, _logger.log)('update-registry:updateToken', error.message || error);
      return Promise.reject(error);
    }
  }

}

exports.UpdateRegistry = UpdateRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1yZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJVcGRhdGVSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiYnVzeSIsImZpbGUiLCJXQVpVSF9EQVRBX0NPTkZJR19SRUdJU1RSWV9QQVRIIiwicmVhZENvbnRlbnQiLCJjb250ZW50IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZWplY3QiLCJnZXRIb3N0cyIsImhvc3RzIiwiZ2V0SG9zdEJ5SWQiLCJpZCIsIkVycm9yIiwid3JpdGVDb250ZW50Iiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImNoZWNrSG9zdCIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsIm1pZ3JhdGVUb1JlZ2lzdHJ5IiwiY2x1c3RlckluZm8iLCJjbHVzdGVyRXh0ZW5zaW9ucyIsImFzc2lnbiIsImluZm8iLCJjbHVzdGVyX2luZm8iLCJleHRlbnNpb25zIiwidXBkYXRlQ2x1c3RlckluZm8iLCJ1cGRhdGVBUElFeHRlbnNpb25zIiwicmVtb3ZlSG9zdEVudHJpZXMiLCJpZHMiLCJmb3JFYWNoIiwicmVtb3ZlT3JwaGFuRW50cmllcyIsImVudHJpZXMiLCJob3N0c0tleXMiLCJtYXAiLCJoIiwiZW50cmllc0tleXMiLCJkaWZmIiwiZmlsdGVyIiwiZSIsImdldFRva2VuQnlJZCIsInRva2VuIiwidXBkYXRlVG9rZW5CeUhvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFXQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sTUFBTUEsY0FBTixDQUFxQjtBQUcxQkMsRUFBQUEsV0FBVyxHQUFHO0FBQUE7O0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVlDLDBDQUFaO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxRQUFNQyxXQUFOLEdBQW9CO0FBQ2xCLFFBQUk7QUFDRix1QkFBSSw2QkFBSixFQUFtQyxx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RUFBRCxDQUFMLEdBQVlGLEtBQUssQ0FBQ0UsRUFBRCxDQUFMLENBQVUrQixLQUFWLElBQW1CLElBQS9CLEdBQXNDLElBQTdDO0FBQ0QsS0FKRCxDQUlFLE9BQU90QyxLQUFQLEVBQWM7QUFDZCx1QkFBSSw4QkFBSixFQUFvQ0EsS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFyRDtBQUNBLGFBQU9FLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxLQUFmLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7QUFLQSxRQUFNdUMsaUJBQU4sQ0FBd0JoQyxFQUF4QixFQUE0QitCLEtBQTVCLEVBQW1DO0FBQ2pDLFFBQUk7QUFDRixZQUFNNUMsT0FBTyxHQUFHLE1BQU0sS0FBS0QsV0FBTCxFQUF0QixDQURFLENBRUY7O0FBQ0EsVUFBSSxDQUFDQyxPQUFPLENBQUNXLEtBQVIsQ0FBY0UsRUFBZCxDQUFMLEVBQXdCYixPQUFPLENBQUNXLEtBQVIsQ0FBY0UsRUFBZCxJQUFvQixFQUFwQjtBQUN4QmIsTUFBQUEsT0FBTyxDQUFDVyxLQUFSLENBQWNFLEVBQWQsRUFBa0IrQixLQUFsQixHQUEwQkEsS0FBMUI7QUFDQSxZQUFNLEtBQUs3QixZQUFMLENBQWtCZixPQUFsQixDQUFOO0FBQ0EsdUJBQUksNkJBQUosRUFBb0MsT0FBTWEsRUFBRyxtQ0FBN0MsRUFBaUYsT0FBakY7QUFDQSxhQUFPQSxFQUFQO0FBQ0QsS0FSRCxDQVFFLE9BQU9QLEtBQVAsRUFBYztBQUNkLHVCQUFJLDZCQUFKLEVBQW1DQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQXBEO0FBQ0EsYUFBT0UsT0FBTyxDQUFDQyxNQUFSLENBQWVILEtBQWYsQ0FBUDtBQUNEO0FBQ0Y7O0FBOU55QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXYXp1aCBhcHAgLSBNb2R1bGUgdG8gdXBkYXRlIHRoZSBjb25maWd1cmF0aW9uIGZpbGVcbiAqIENvcHlyaWdodCAoQykgMjAxNS0yMDIyIFdhenVoLCBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBGaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvbiB0aGUgTElDRU5TRSBmaWxlLlxuICovXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgV0FaVUhfREFUQV9DT05GSUdfUkVHSVNUUllfUEFUSCB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlUmVnaXN0cnkge1xuICBidXN5OiBib29sZWFuO1xuICBmaWxlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuZmlsZSA9IFdBWlVIX0RBVEFfQ09ORklHX1JFR0lTVFJZX1BBVEg7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIFdhenVoIHJlZ2lzdHJ5IGNvbnRlbnRcbiAgICovXG4gIGFzeW5jIHJlYWRDb250ZW50KCkge1xuICAgIHRyeSB7XG4gICAgICBsb2coJ3VwZGF0ZS1yZWdpc3RyeTpyZWFkQ29udGVudCcsICdSZWFkaW5nIHdhenVoLXJlZ2lzdHJ5Lmpzb24gY29udGVudCcsICdkZWJ1ZycpO1xuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyh0aGlzLmZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6cmVhZENvbnRlbnQnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG9zdHMgYW5kIHRoZWlyIGNsdXN0ZXIgaW5mbyBzdG9yZWQgaW4gdGhlIHJlZ2lzdHJ5XG4gICAqL1xuICBhc3luYyBnZXRIb3N0cygpIHtcbiAgICB0cnkge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6Z2V0SG9zdHMnLCAnR2V0dGluZyBob3N0cyBmcm9tIHJlZ2lzdHJ5JywgJ2RlYnVnJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5yZWFkQ29udGVudCgpO1xuICAgICAgcmV0dXJuIGNvbnRlbnQuaG9zdHMgfHwge307XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5OmdldEhvc3RzJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbHVzdGVyIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgdG8gYW4gQVBJIGlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKi9cbiAgYXN5bmMgZ2V0SG9zdEJ5SWQoaWQpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFpZCkgdGhyb3cgbmV3IEVycm9yKCdBUEkgaWQgaXMgbWlzc2luZycpO1xuICAgICAgY29uc3QgaG9zdHMgPSBhd2FpdCB0aGlzLmdldEhvc3RzKCk7XG4gICAgICByZXR1cm4gaG9zdHMuaWQgfHwge307XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5OmdldENsdXN0ZXJJbmZvQnlBUEknLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB0aGUgd2F6dWgtcmVnaXN0cnkuanNvblxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGVudFxuICAgKi9cbiAgYXN5bmMgd3JpdGVDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0cnkge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6d3JpdGVDb250ZW50JywgJ1dyaXR0aW5nIHdhenVoLXJlZ2lzdHJ5Lmpzb24gY29udGVudCcsICdkZWJ1ZycpO1xuICAgICAgaWYgKHRoaXMuYnVzeSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fub3RoZXIgcHJvY2VzcyBpcyB1cGRhdGluZyB0aGUgcmVnaXN0cnkgZmlsZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZVN5bmModGhpcy5maWxlLCBKU09OLnN0cmluZ2lmeShjb250ZW50KSk7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6d3JpdGVDb250ZW50JywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGhvc3QgZXhpc3QgaW4gb3JkZXIgdG8gdXBkYXRlIHRoZSBkYXRhLCBvdGhlcndpc2UgY3JlYXRlcyBpdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGhvc3RzXG4gICAqL1xuICBjaGVja0hvc3QoaWQsIGhvc3RzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhob3N0cykuaW5jbHVkZXMoaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3VwZGF0ZS1yZWdpc3RyeTpjaGVja0hvc3QnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGVzIHRoZSBjbHVzdGVyIGluZm9ybWF0aW9uIGFuZCBleHRlbnNpb25zIGFzc29jaWF0ZWQgdG8gYW4gQVBJIGlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2x1c3RlckluZm9cbiAgICogQHBhcmFtIHtPYmplY3R9IGNsdXN0ZXJFeHRlbnNpb25zXG4gICAqL1xuICBhc3luYyBtaWdyYXRlVG9SZWdpc3RyeShpZCwgY2x1c3RlckluZm8sIGNsdXN0ZXJFeHRlbnNpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLnJlYWRDb250ZW50KCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGNvbnRlbnQpLmluY2x1ZGVzKCdob3N0cycpKSBPYmplY3QuYXNzaWduKGNvbnRlbnQsIHsgaG9zdHM6IHt9IH0pO1xuICAgICAgY29uc3QgaW5mbyA9IHsgY2x1c3Rlcl9pbmZvOiBjbHVzdGVySW5mbywgZXh0ZW5zaW9uczogY2x1c3RlckV4dGVuc2lvbnMgfTtcbiAgICAgIGNvbnRlbnQuaG9zdHNbaWRdID0gaW5mbztcbiAgICAgIGF3YWl0IHRoaXMud3JpdGVDb250ZW50KGNvbnRlbnQpO1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6bWlncmF0ZVRvUmVnaXN0cnknLCBgQVBJICR7aWR9IHdhcyBwcm9wZXJseSBtaWdyYXRlZGAsICdkZWJ1ZycpO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5Om1pZ3JhdGVUb1JlZ2lzdHJ5JywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjbHVzdGVyLWluZm9ybWF0aW9uIG9yIG1hbmFnZXItaW5mb3JtYXRpb24gaW4gdGhlIHJlZ2lzdHJ5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2x1c3RlckluZm9cbiAgICovXG4gIGFzeW5jIHVwZGF0ZUNsdXN0ZXJJbmZvKGlkLCBjbHVzdGVySW5mbykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5yZWFkQ29udGVudCgpO1xuICAgICAgLy8gQ2hlY2tzIGlmIG5vdCBleGlzdHMgaW4gb3JkZXIgdG8gY3JlYXRlXG4gICAgICBpZiAoIWNvbnRlbnQuaG9zdHNbaWRdKSBjb250ZW50Lmhvc3RzW2lkXSA9IHt9O1xuICAgICAgY29udGVudC5ob3N0c1tpZF0uY2x1c3Rlcl9pbmZvID0gY2x1c3RlckluZm87XG4gICAgICBhd2FpdCB0aGlzLndyaXRlQ29udGVudChjb250ZW50KTtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3VwZGF0ZS1yZWdpc3RyeTp1cGRhdGVDbHVzdGVySW5mbycsXG4gICAgICAgIGBBUEkgJHtpZH0gaW5mb3JtYXRpb24gd2FzIHByb3Blcmx5IHVwZGF0ZWRgLFxuICAgICAgICAnZGVidWcnXG4gICAgICApO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3VwZGF0ZS1yZWdpc3RyeTp1cGRhdGVDbHVzdGVySW5mbycsIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY2x1c3Rlci1pbmZvcm1hdGlvbiBvciBtYW5hZ2VyLWluZm9ybWF0aW9uIGluIHRoZSByZWdpc3RyeVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGNsdXN0ZXJJbmZvXG4gICAqL1xuICBhc3luYyB1cGRhdGVBUElFeHRlbnNpb25zKGlkLCBleHRlbnNpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLnJlYWRDb250ZW50KCk7XG4gICAgICBpZihjb250ZW50Lmhvc3RzW2lkXSkgY29udGVudC5ob3N0c1tpZF0uZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgICBhd2FpdCB0aGlzLndyaXRlQ29udGVudChjb250ZW50KTtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3VwZGF0ZS1yZWdpc3RyeTp1cGRhdGVBUElFeHRlbnNpb25zJyxcbiAgICAgICAgYEFQSSAke2lkfSBleHRlbnNpb25zIHdlcmUgcHJvcGVybHkgdXBkYXRlZGAsXG4gICAgICAgICdkZWJ1ZydcbiAgICAgICk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5OnVwZGF0ZUFQSUhvc3RuYW1lJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGdpdmVuIGlkcyBmcm9tIHRoZSByZWdpc3RyeSBob3N0IGVudHJpZXNcbiAgICogQHBhcmFtIHtBcnJheX0gaWRzXG4gICAqL1xuICBhc3luYyByZW1vdmVIb3N0RW50cmllcyhpZHMpIHtcbiAgICB0cnkge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6cmVtb3ZlSG9zdEVudHJ5JywgJ1JlbW92aW5nIGVudHJ5JywgJ2RlYnVnJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5yZWFkQ29udGVudCgpO1xuICAgICAgaWRzLmZvckVhY2goaWQgPT4gZGVsZXRlIGNvbnRlbnQuaG9zdHNbaWRdKTtcbiAgICAgIGF3YWl0IHRoaXMud3JpdGVDb250ZW50KGNvbnRlbnQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2coJ3VwZGF0ZS1yZWdpc3RyeTpyZW1vdmVIb3N0RW50cnknLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgdGhlIGhvc3RzIGZyb20gd2F6dWgueW1sIGFuZCB0aGUgaG9zdCBpbiB0aGUgd2F6dWgtcmVnaXN0cnkuanNvbiBmaWxlIGluIG9yZGVyIHRvIHJlbW92ZSB0aGUgb3JwaGFuIHJlZ2lzdHJ5IHJlZ2lzdGVyXG4gICAqIEBwYXJhbSB7QXJyYXl9IGhvc3RzXG4gICAqL1xuICBhc3luYyByZW1vdmVPcnBoYW5FbnRyaWVzKGhvc3RzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5OnJlbW92ZU9ycGhhbkVudHJpZXMnLCAnQ2hlY2tpbmcgb3JwaGFuIHJlZ2lzdHJ5IGVudHJpZXMnLCAnZGVidWcnKTtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0aGlzLmdldEhvc3RzKCk7XG4gICAgICBjb25zdCBob3N0c0tleXMgPSBob3N0cy5tYXAoaCA9PiB7XG4gICAgICAgIHJldHVybiBoLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBlbnRyaWVzS2V5cyA9IE9iamVjdC5rZXlzKGVudHJpZXMpO1xuICAgICAgY29uc3QgZGlmZiA9IGVudHJpZXNLZXlzLmZpbHRlcihlID0+IHtcbiAgICAgICAgcmV0dXJuICFob3N0c0tleXMuaW5jbHVkZXMoZSk7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlSG9zdEVudHJpZXMoZGlmZik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZygndXBkYXRlLXJlZ2lzdHJ5OnJlbW92ZU9ycGhhbkVudHJpZXMnLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRva2VuIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgdG8gYW4gQVBJIGlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKi9cbiAgYXN5bmMgZ2V0VG9rZW5CeUlkKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcignQVBJIGlkIGlzIG1pc3NpbmcnKTtcbiAgICAgIGNvbnN0IGhvc3RzID0gYXdhaXQgdGhpcy5nZXRIb3N0cygpO1xuICAgICAgcmV0dXJuIGhvc3RzW2lkXSA/IGhvc3RzW2lkXS50b2tlbiB8fCBudWxsIDogbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6Z2V0VG9rZW5CeUlkJywgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB0b2tlbiBpbiB0aGUgcmVnaXN0cnlcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICAgKi9cbiAgYXN5bmMgdXBkYXRlVG9rZW5CeUhvc3QoaWQsIHRva2VuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLnJlYWRDb250ZW50KCk7XG4gICAgICAvLyBDaGVja3MgaWYgbm90IGV4aXN0cyBpbiBvcmRlciB0byBjcmVhdGVcbiAgICAgIGlmICghY29udGVudC5ob3N0c1tpZF0pIGNvbnRlbnQuaG9zdHNbaWRdID0ge307XG4gICAgICBjb250ZW50Lmhvc3RzW2lkXS50b2tlbiA9IHRva2VuO1xuICAgICAgYXdhaXQgdGhpcy53cml0ZUNvbnRlbnQoY29udGVudCk7XG4gICAgICBsb2coJ3VwZGF0ZS1yZWdpc3RyeTp1cGRhdGVUb2tlbicsIGBBUEkgJHtpZH0gaW5mb3JtYXRpb24gd2FzIHByb3Blcmx5IHVwZGF0ZWRgLCAnZGVidWcnKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nKCd1cGRhdGUtcmVnaXN0cnk6dXBkYXRlVG9rZW4nLCBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=