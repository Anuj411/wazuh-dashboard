"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "audit", {
  enumerable: true,
  get: function () {
    return _agentsAudit.default;
  }
});
Object.defineProperty(exports, "fim", {
  enumerable: true,
  get: function () {
    return _agentsFim.default;
  }
});
Object.defineProperty(exports, "general", {
  enumerable: true,
  get: function () {
    return _agentsGeneral.default;
  }
});
Object.defineProperty(exports, "gcp", {
  enumerable: true,
  get: function () {
    return _agentsGcp.default;
  }
});
Object.defineProperty(exports, "oscap", {
  enumerable: true,
  get: function () {
    return _agentsOscap.default;
  }
});
Object.defineProperty(exports, "ciscat", {
  enumerable: true,
  get: function () {
    return _agentsCiscat.default;
  }
});
Object.defineProperty(exports, "pci", {
  enumerable: true,
  get: function () {
    return _agentsPci.default;
  }
});
Object.defineProperty(exports, "gdpr", {
  enumerable: true,
  get: function () {
    return _agentsGdpr.default;
  }
});
Object.defineProperty(exports, "hipaa", {
  enumerable: true,
  get: function () {
    return _agentsHipaa.default;
  }
});
Object.defineProperty(exports, "mitre", {
  enumerable: true,
  get: function () {
    return _agentsMitre.default;
  }
});
Object.defineProperty(exports, "nist", {
  enumerable: true,
  get: function () {
    return _agentsNist.default;
  }
});
Object.defineProperty(exports, "tsc", {
  enumerable: true,
  get: function () {
    return _agentsTsc.default;
  }
});
Object.defineProperty(exports, "pm", {
  enumerable: true,
  get: function () {
    return _agentsPm.default;
  }
});
Object.defineProperty(exports, "virustotal", {
  enumerable: true,
  get: function () {
    return _agentsVirustotal.default;
  }
});
Object.defineProperty(exports, "osquery", {
  enumerable: true,
  get: function () {
    return _agentsOsquery.default;
  }
});
Object.defineProperty(exports, "docker", {
  enumerable: true,
  get: function () {
    return _agentsDocker.default;
  }
});
Object.defineProperty(exports, "welcome", {
  enumerable: true,
  get: function () {
    return _agentsWelcome.default;
  }
});
Object.defineProperty(exports, "aws", {
  enumerable: true,
  get: function () {
    return _agentsAws.default;
  }
});
Object.defineProperty(exports, "github", {
  enumerable: true,
  get: function () {
    return _agentsGithub.default;
  }
});

var _agentsAudit = _interopRequireDefault(require("./agents-audit"));

var _agentsFim = _interopRequireDefault(require("./agents-fim"));

var _agentsGeneral = _interopRequireDefault(require("./agents-general"));

var _agentsGcp = _interopRequireDefault(require("./agents-gcp"));

var _agentsOscap = _interopRequireDefault(require("./agents-oscap"));

var _agentsCiscat = _interopRequireDefault(require("./agents-ciscat"));

var _agentsPci = _interopRequireDefault(require("./agents-pci"));

var _agentsGdpr = _interopRequireDefault(require("./agents-gdpr"));

var _agentsHipaa = _interopRequireDefault(require("./agents-hipaa"));

var _agentsMitre = _interopRequireDefault(require("./agents-mitre"));

var _agentsNist = _interopRequireDefault(require("./agents-nist"));

var _agentsTsc = _interopRequireDefault(require("./agents-tsc"));

var _agentsPm = _interopRequireDefault(require("./agents-pm"));

var _agentsVirustotal = _interopRequireDefault(require("./agents-virustotal"));

var _agentsOsquery = _interopRequireDefault(require("./agents-osquery"));

var _agentsDocker = _interopRequireDefault(require("./agents-docker"));

var _agentsWelcome = _interopRequireDefault(require("./agents-welcome"));

var _agentsAws = _interopRequireDefault(require("./agents-aws"));

var _agentsGithub = _interopRequireDefault(require("./agents-github"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIE1vZHVsZSB0byBleHBvcnQgYWdlbnRzIHZpc3VhbGl6YXRpb25zIHJhdyBjb250ZW50XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUtMjAyMiBXYXp1aCwgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMiBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogRmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgb24gdGhlIExJQ0VOU0UgZmlsZS5cbiAqL1xuaW1wb3J0IGF1ZGl0IGZyb20gJy4vYWdlbnRzLWF1ZGl0JztcbmltcG9ydCBmaW0gZnJvbSAnLi9hZ2VudHMtZmltJztcbmltcG9ydCBnZW5lcmFsIGZyb20gJy4vYWdlbnRzLWdlbmVyYWwnO1xuaW1wb3J0IGdjcCBmcm9tICcuL2FnZW50cy1nY3AnO1xuaW1wb3J0IG9zY2FwIGZyb20gJy4vYWdlbnRzLW9zY2FwJztcbmltcG9ydCBjaXNjYXQgZnJvbSAnLi9hZ2VudHMtY2lzY2F0JztcbmltcG9ydCBwY2kgZnJvbSAnLi9hZ2VudHMtcGNpJztcbmltcG9ydCBnZHByIGZyb20gJy4vYWdlbnRzLWdkcHInO1xuaW1wb3J0IGhpcGFhIGZyb20gJy4vYWdlbnRzLWhpcGFhJztcbmltcG9ydCBtaXRyZSBmcm9tICcuL2FnZW50cy1taXRyZSc7XG5pbXBvcnQgbmlzdCBmcm9tICcuL2FnZW50cy1uaXN0JztcbmltcG9ydCB0c2MgZnJvbSAnLi9hZ2VudHMtdHNjJztcbmltcG9ydCBwbSBmcm9tICcuL2FnZW50cy1wbSc7XG5pbXBvcnQgdmlydXN0b3RhbCBmcm9tICcuL2FnZW50cy12aXJ1c3RvdGFsJztcbmltcG9ydCBvc3F1ZXJ5IGZyb20gJy4vYWdlbnRzLW9zcXVlcnknO1xuaW1wb3J0IGRvY2tlciBmcm9tICcuL2FnZW50cy1kb2NrZXInO1xuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi9hZ2VudHMtd2VsY29tZSc7XG5pbXBvcnQgYXdzIGZyb20gJy4vYWdlbnRzLWF3cyc7XG5pbXBvcnQgZ2l0aHViIGZyb20gJy4vYWdlbnRzLWdpdGh1Yic7XG5cbmV4cG9ydCB7XG4gIGF1ZGl0LFxuICBmaW0sXG4gIGdlbmVyYWwsXG4gIGdjcCxcbiAgb3NjYXAsXG4gIGNpc2NhdCxcbiAgcGNpLFxuICBnZHByLFxuICBoaXBhYSxcbiAgbmlzdCxcbiAgdHNjLFxuICBwbSxcbiAgdmlydXN0b3RhbCxcbiAgb3NxdWVyeSxcbiAgbWl0cmUsXG4gIGRvY2tlcixcbiAgd2VsY29tZSxcbiAgYXdzLFxuICBnaXRodWJcbn07XG4iXX0=