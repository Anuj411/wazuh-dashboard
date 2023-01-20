"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALERT_TYPES = exports.SERVER_ADDRESS_WEBHOOK = exports.ACTORS = exports.REPOSITORY_NAMES = exports.USER_NAMES = exports.ORGANIZATION_NAMES = exports.COUNTRY_CODES = exports.DECODER = exports.LOCATION = void 0;

/*
 * Wazuh app - GitHub sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const LOCATION = 'github';
exports.LOCATION = LOCATION;
const DECODER = {
  "name": "json"
};
exports.DECODER = DECODER;
const COUNTRY_CODES = ['AR', 'CA', 'DE', 'ES', 'FR', 'GR', 'IN', 'MX', 'SE', 'US'];
exports.COUNTRY_CODES = COUNTRY_CODES;
const baseElements = Array(10).fill();
const ORGANIZATION_NAMES = baseElements.map((_, index) => `Organization${index + 1}`);
exports.ORGANIZATION_NAMES = ORGANIZATION_NAMES;
const USER_NAMES = baseElements.map((_, index) => `User${index + 1}`);
exports.USER_NAMES = USER_NAMES;
const REPOSITORY_NAMES = baseElements.map((_, index) => `Repo${index + 1}`);
exports.REPOSITORY_NAMES = REPOSITORY_NAMES;
const ACTORS = baseElements.map((_, index) => ({
  name: USER_NAMES[index],
  country_code: COUNTRY_CODES[index]
}));
exports.ACTORS = ACTORS;
const SERVER_ADDRESS_WEBHOOK = ['https://server/webhook', 'https://cool_server/integrations/webhook', 'https://another_server/github_notifications', 'https://my_web/notifications/webhook'];
exports.SERVER_ADDRESS_WEBHOOK = SERVER_ADDRESS_WEBHOOK;
const ALERT_TYPES = [{
  "rule": {
    "level": 5,
    "description": "GitHub Organization audit log export.",
    "id": "91193",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624444988681.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624444988681.000000",
      "action": "org.audit_log_export",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "ElEQJvOCnhWZ2mVpjzYOMw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team create.",
    "id": "91397",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624445678369.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624445678369.000000",
      "action": "team.create",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "_document_id": "cC4uIXPNDz1O1G21Vjs8Vw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team add member.",
    "id": "91393",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624445678470.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624445678470.000000",
      "action": "team.add_member",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "user": "_USER_",
      "_document_id": "0Z4NBBhHM2T4gEuWziZfvQ"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team add member.",
    "id": "91393",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624445927571.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624445927571.000000",
      "action": "team.add_member",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "user": "_USER_",
      "_document_id": "Hi6dpYdi9G5PrEqqTkEYnA"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Repo create.",
    "id": "91318",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_repo"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624445965569.000000",
      "visibility": "private",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "created_at": "1624445965569.000000",
      "action": "repo.create",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "fXwGe7IW-BX8Ze64V_AORg"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624445969188.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624446009635.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Organization audit log export.",
    "id": "91193",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446236415.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446236415.000000",
      "action": "org.audit_log_git_event_export",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "vkV52PbNTZPJRRNLuOZcuw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Organization audit log export.",
    "id": "91193",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446254661.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446254661.000000",
      "action": "org.audit_log_export",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "gwkccTbAcX2WujhEXS3r0Q"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team create.",
    "id": "91397",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446278480.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446278480.000000",
      "action": "team.create",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "_document_id": "Qf6RhFYhb7ysdV8K8ukYFw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team add member.",
    "id": "91393",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446278606.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446278606.000000",
      "action": "team.add_member",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "user": "_USER_",
      "_document_id": "T6DZ-t0-a9yQShoBbUxc_g"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Team destroy.",
    "id": "91399",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446293390.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446293390.000000",
      "action": "team.destroy",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/_REPOSITORY_",
      "_document_id": "ZLC0q4Ka_R4gGw3gWgxc3w"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Team remove member.",
    "id": "91401",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446387691.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446387691.000000",
      "action": "team.remove_member",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/backend",
      "user": "_USER_",
      "_document_id": "PYn3TOghg5FYze673svhgw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Team add member.",
    "id": "91393",
    "firedtimes": 3,
    "mail": false,
    "groups": ["github", "git", "git_team"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446397464.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446397464.000000",
      "action": "team.add_member",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "team": "_ORGANIZATION_/backend",
      "user": "_USER_",
      "_document_id": "z4qIP_kjzjnilIhL8ak0mg"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Dependency graph new repos enable.",
    "id": "91131",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_dependency_graph_new_repos"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446915154.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446915154.000000",
      "action": "dependency_graph_new_repos.enable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "2Az9XCqb-Fe8k0KkLQlk0A"
    }
  }
}, {
  "rule": {
    "level": 12,
    "description": "GitHub Dependency graph new repos disable.",
    "id": "91130",
    "firedtimes": 1,
    "mail": true,
    "groups": ["github", "git", "git_dependency_graph_new_repos"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446916718.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624446916718.000000",
      "action": "dependency_graph_new_repos.disable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "TzBGANy3SmrnxI8GW9bpQA"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Hook create.",
    "id": "91162",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_hook"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624446982688.000000",
      "org": "_ORGANIZATION_",
      "hook_id": "303999727",
      "name": "webhook",
      "created_at": "1624446982688.000000",
      "action": "hook.create",
      "active": "true",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "config": {
        "content_type": "json",
        "insecure_ssl": "0",
        "secret": "********",
        "url": "_SERVER_ADDRESS_WEBHOOK_"
      },
      "events": ["push"],
      "_document_id": "SSlObiXNNtzQzxFooK4-fw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Hook events changed.",
    "id": "91165",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_hook"]
  },
  "data": {
    "integration": "github",
    "github": {
      "org": "_ORGANIZATION_",
      "created_at": "1624447042505.000000",
      "active": "true",
      "actor": "_USER_",
      "@timestamp": "1624447042505.000000",
      "hook_id": "303999727",
      "name": "webhook",
      "action": "hook.events_changed",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "config": {
        "content_type": "json",
        "insecure_ssl": "0",
        "secret": "********",
        "url": "_SERVER_ADDRESS_WEBHOOK_"
      },
      "events": ["push", "create", "deployment", "fork", "issues"],
      "_document_id": "Ba9NJbFnSfJB1zGEn29asw",
      "events_were": ["push"]
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447139607.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git push.",
    "id": "91160",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447520462.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.push",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git push.",
    "id": "91160",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447522682.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.push",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624447527007.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Repo create.",
    "id": "91318",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_repo"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447568303.000000",
      "visibility": "private",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "created_at": "1624447568303.000000",
      "action": "repo.create",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "AcrdSmMW0PpEEmuGWiTcoQ"
    }
  }
}, {
  "rule": {
    "level": 9,
    "description": "GitHub Repo destroy.",
    "id": "91320",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_repo"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447588615.000000",
      "visibility": "private",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "created_at": "1624447588615.000000",
      "action": "repo.destroy",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "H-bRCuWh_FAoZxzW8BV9JA"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git fetch.",
    "id": "91159",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624447744877.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.fetch",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "false"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Organization update default repository permission.",
    "id": "91231",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448015027.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448015027.000000",
      "action": "org.update_default_repository_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "BHpvG7xc2bTNW3ME3nAgDw"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Organization update default repository permission.",
    "id": "91231",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448020670.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448020670.000000",
      "action": "org.update_default_repository_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "t5ZumMJeWBs2CqZT-n4JNA"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Organization update member repository creation permission.",
    "id": "91233",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448034735.000000",
      "visibility": "private_internal",
      "org": "_ORGANIZATION_",
      "created_at": "1624448034735.000000",
      "action": "org.update_member_repository_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "CAwbh8KpE75aa0ajCpRISw"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "GitHub Organization update member repository creation permission.",
    "id": "91233",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448038247.000000",
      "visibility": "internal",
      "org": "_ORGANIZATION_",
      "created_at": "1624448038247.000000",
      "action": "org.update_member_repository_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "s96ibVD5sEyRDxYgQ8gKhQ"
    }
  }
}, {
  "rule": {
    "level": 9,
    "description": "GitHub Private repository forking enable.",
    "id": "91273",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_private_repository_forking"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448046546.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448046546.000000",
      "action": "private_repository_forking.enable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "NZWBrO2Ac02LnG3TFeEykA"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Private repository forking disable.",
    "id": "91274",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_private_repository_forking"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448051193.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448051193.000000",
      "action": "private_repository_forking.disable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "5EkgWPa8Du6ZJ_5oOfU_rg"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Generic rule.",
    "id": "91449",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448069427.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448069427.000000",
      "action": "members_can_create_private_pages.disable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "0rtyFg2GD2-oJyJsOtRZ_A"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Generic rule.",
    "id": "91449",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448073290.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448073290.000000",
      "action": "members_can_create_private_pages.enable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "sSbImF40N-hLe0mfDHkfMg"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Generic rule.",
    "id": "91449",
    "firedtimes": 3,
    "mail": false,
    "groups": ["github", "git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448089991.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448089991.000000",
      "action": "repository_visibility_change.enable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "dWJ-7ZR6DdumQeu01PAGig"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Issues.",
    "id": "91169",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_issues"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448109958.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448109958.000000",
      "action": "issues.deletes_enabled",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "gWT0UNMVFaI8ZPB3tGGsew"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Issues.",
    "id": "91169",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_issues"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448114493.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448114493.000000",
      "action": "issues.deletes_disabled",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "T2hgq3r3yVD23Np6CAD-zQ"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Organization display commenter full name enabled.",
    "id": "91202",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448121171.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448121171.000000",
      "action": "org.display_commenter_full_name_enabled",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "o-Edi8owvz1iPv78RPPSJw"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Organization.",
    "id": "91188",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448125116.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448125116.000000",
      "action": "org.display_commenter_full_name_disabled",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "OxJjqpug2FM8RJuzE1CZpA"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Organization.",
    "id": "91188",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448133245.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448133245.000000",
      "action": "org.enable_reader_discussion_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "5KmA_VkQPn3I6gY4L8qFPA"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Organization.",
    "id": "91188",
    "firedtimes": 3,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448138392.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448138392.000000",
      "action": "org.disable_reader_discussion_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "JQ3JAd3zHmpRpGZYJsJIQw"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Organization enable member team creation permission.",
    "id": "91203",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448148271.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448148271.000000",
      "action": "org.enable_member_team_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "sd2fnKW-Jc_OZI9xm2pyyQ"
    }
  }
}, {
  "rule": {
    "level": 9,
    "description": "GitHub Organization disable member team creation permission.",
    "id": "91198",
    "firedtimes": 1,
    "mail": false,
    "groups": ["github", "git", "git_org"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448154972.000000",
      "org": "_ORGANIZATION_",
      "created_at": "1624448154972.000000",
      "action": "org.disable_member_team_creation_permission",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "ppjVxGQBAQts82at9Az3XQ"
    }
  }
}, {
  "rule": {
    "level": 12,
    "description": "GitHub Repository vulnerability alerts disable.",
    "id": "91367",
    "firedtimes": 1,
    "mail": true,
    "groups": ["github", "git", "git_repository_vulnerability_alerts"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448419210.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "created_at": "1624448419210.000000",
      "action": "repository_vulnerability_alerts.disable",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "user": "_USER_",
      "_document_id": "wgf0uCen5LG4su6jQ2xKDA"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "GitHub Repo create.",
    "id": "91318",
    "firedtimes": 2,
    "mail": false,
    "groups": ["github", "git", "git_repo"]
  },
  "data": {
    "integration": "github",
    "github": {
      "actor": "_USER_",
      "@timestamp": "1624448419470.000000",
      "visibility": "public",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "created_at": "1624448419470.000000",
      "action": "repo.create",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "_document_id": "oLAjZ_DbHvzZlPmRCXr4MA"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 3,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624448422207.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "true"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 4,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624448423987.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "true"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 5,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624448432101.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "true"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 6,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624448487893.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "true"
    }
  }
}, {
  "rule": {
    "level": 3,
    "description": "GitHub Git clone.",
    "id": "91158",
    "firedtimes": 7,
    "mail": false,
    "groups": ["github", "git", "git_git"]
  },
  "data": {
    "integration": "github",
    "github": {
      "@timestamp": "1624448736294.000000",
      "org": "_ORGANIZATION_",
      "repo": "_ORGANIZATION_/_REPOSITORY_",
      "actor_location": {
        "country_code": "_COUNTRY_CODE_"
      },
      "action": "git.clone",
      "transport_protocol_name": "http",
      "transport_protocol": "1",
      "repository": "_ORGANIZATION_/_REPOSITORY_",
      "repository_public": "true"
    }
  }
}];
exports.ALERT_TYPES = ALERT_TYPES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi5qcyJdLCJuYW1lcyI6WyJMT0NBVElPTiIsIkRFQ09ERVIiLCJDT1VOVFJZX0NPREVTIiwiYmFzZUVsZW1lbnRzIiwiQXJyYXkiLCJmaWxsIiwiT1JHQU5JWkFUSU9OX05BTUVTIiwibWFwIiwiXyIsImluZGV4IiwiVVNFUl9OQU1FUyIsIlJFUE9TSVRPUllfTkFNRVMiLCJBQ1RPUlMiLCJuYW1lIiwiY291bnRyeV9jb2RlIiwiU0VSVkVSX0FERFJFU1NfV0VCSE9PSyIsIkFMRVJUX1RZUEVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWU8sTUFBTUEsUUFBUSxHQUFHLFFBQWpCOztBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUFFLFVBQVE7QUFBVixDQUFoQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FDM0IsSUFEMkIsRUFFM0IsSUFGMkIsRUFHM0IsSUFIMkIsRUFJM0IsSUFKMkIsRUFLM0IsSUFMMkIsRUFNM0IsSUFOMkIsRUFPM0IsSUFQMkIsRUFRM0IsSUFSMkIsRUFTM0IsSUFUMkIsRUFVM0IsSUFWMkIsQ0FBdEI7O0FBYVAsTUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsRUFBckI7QUFFTyxNQUFNQyxrQkFBa0IsR0FBR0gsWUFBWSxDQUFDSSxHQUFiLENBQWlCLENBQUNDLENBQUQsRUFBSUMsS0FBSixLQUFlLGVBQWNBLEtBQUssR0FBRyxDQUFFLEVBQXhELENBQTNCOztBQUVBLE1BQU1DLFVBQVUsR0FBR1AsWUFBWSxDQUFDSSxHQUFiLENBQWlCLENBQUNDLENBQUQsRUFBSUMsS0FBSixLQUFlLE9BQU1BLEtBQUssR0FBRyxDQUFFLEVBQWhELENBQW5COztBQUVBLE1BQU1FLGdCQUFnQixHQUFHUixZQUFZLENBQUNJLEdBQWIsQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxLQUFKLEtBQWUsT0FBTUEsS0FBSyxHQUFHLENBQUUsRUFBaEQsQ0FBekI7O0FBRUEsTUFBTUcsTUFB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RHlCLEVBaUR6QjtBQUFFLFVBQVE7QUFBRSxhQUFTLENBQVg7QUFBYyxtQkFBZSxtQkFBN0I7QUFBa0QsVUFBTSxPQUF4RDtBQUFpRSxrQkFBYyxDQUEvRTtBQUFrRixZQUFRLEtBQTFGO0FBQWlHLGNBQVUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixTQUFsQjtBQUEzRyxHQUFWO0FBQXFKLFVBQVE7QUFBRSxtQkFBZSxRQUFqQjtBQUEyQixjQUFVO0FBQUUsb0JBQWMsc0JBQWhCO0FBQXdDLGFBQU8sZ0JBQS9DO0FBQWlFLGNBQVEsNkJBQXpFO0FBQXdHLHdCQUFrQjtBQUFFLHdCQUFnQjtBQUFsQixPQUExSDtBQUFnSyxnQkFBVSxXQUExSztBQUF1TCxpQ0FBMkIsTUFBbE47QUFBME4sNEJBQXNCLEdBQWhQO0FBQXFQLG9CQUFjLDZCQUFuUTtBQUFrUywyQkFBcUI7QUFBdlQ7QUFBckM7QUFBN0osQ0FqRHlCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdhenVoIGFwcCAtIEdpdEh1YiBzYW1wbGUgZGF0YVxuICogQ29weXJpZ2h0IChDKSAyMDE1LTIwMjIgV2F6dWgsIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDIgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIG9uIHRoZSBMSUNFTlNFIGZpbGUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OID0gJ2dpdGh1Yic7XG5cbmV4cG9ydCBjb25zdCBERUNPREVSID0geyBcIm5hbWVcIjogXCJqc29uXCIgfTtcblxuZXhwb3J0IGNvbnN0IENPVU5UUllfQ09ERVMgPSBbXG4gICdBUicsXG4gICdDQScsXG4gICdERScsXG4gICdFUycsXG4gICdGUicsXG4gICdHUicsXG4gICdJTicsXG4gICdNWCcsXG4gICdTRScsXG4gICdVUydcbl07XG5cbmNvbnN0IGJhc2VFbGVtZW50cyA9IEFycmF5KDEwKS5maWxsKCk7XG5cbmV4cG9ydCBjb25zdCBPUkdBTklaQVRJT05fTkFNRVMgPSBiYXNlRWxlbWVudHMubWFwKChfLCBpbmRleCkgPT4gYE9yZ2FuaXphdGlvbiR7aW5kZXggKyAxfWApO1xuXG5leHBvcnQgY29uc3QgVVNFUl9OQU1FUyA9IGJhc2VFbGVtZW50cy5tYXAoKF8sIGluZGV4KSA9PiBgVXNlciR7aW5kZXggKyAxfWApO1xuXG5leHBvcnQgY29uc3QgUkVQT1NJVE9SWV9OQU1FUyA9IGJhc2VFbGVtZW50cy5tYXAoKF8sIGluZGV4KSA9PiBgUmVwbyR7aW5kZXggKyAxfWApO1xuXG5leHBvcnQgY29uc3QgQUNUT1JTID0gYmFzZUVsZW1lbnRzLm1hcCgoXywgaW5kZXgpID0+ICh7IG5hbWU6IFVTRVJfTkFNRVNbaW5kZXhdLCBjb3VudHJ5X2NvZGU6IENPVU5UUllfQ09ERVNbaW5kZXhdIH0pKTtcblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9BRERSRVNTX1dFQkhPT0sgPSBbXG4gICdodHRwczovL3NlcnZlci93ZWJob29rJyxcbiAgJ2h0dHBzOi8vY29vbF9zZXJ2ZXIvaW50ZWdyYXRpb25zL3dlYmhvb2snLFxuICAnaHR0cHM6Ly9hbm90aGVyX3NlcnZlci9naXRodWJfbm90aWZpY2F0aW9ucycsXG4gICdodHRwczovL215X3dlYi9ub3RpZmljYXRpb25zL3dlYmhvb2snLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVTID0gW1xuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gYXVkaXQgbG9nIGV4cG9ydC5cIiwgXCJpZFwiOiBcIjkxMTkzXCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9vcmdcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0NDk4ODY4MS4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ0OTg4NjgxLjAwMDAwMFwiLCBcImFjdGlvblwiOiBcIm9yZy5hdWRpdF9sb2dfZXhwb3J0XCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJfZG9jdW1lbnRfaWRcIjogXCJFbEVRSnZPQ25oV1oybVZwanpZT013XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFRlYW0gY3JlYXRlLlwiLCBcImlkXCI6IFwiOTEzOTdcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3RlYW1cIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0NTY3ODM2OS4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ1Njc4MzY5LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcInRlYW0uY3JlYXRlXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ0ZWFtXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiX2RvY3VtZW50X2lkXCI6IFwiY0M0dUlYUE5EejFPMUcyMVZqczhWd1wiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBUZWFtIGFkZCBtZW1iZXIuXCIsIFwiaWRcIjogXCI5MTM5M1wiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfdGVhbVwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ1Njc4NDcwLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDU2Nzg0NzAuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwidGVhbS5hZGRfbWVtYmVyXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ0ZWFtXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcIjBaNE5CQmhITTJUNGdFdVd6aVpmdlFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgVGVhbSBhZGQgbWVtYmVyLlwiLCBcImlkXCI6IFwiOTEzOTNcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3RlYW1cIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0NTkyNzU3MS4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ1OTI3NTcxLjAwMDAwMFwiLCBcImFjdGlvblwiOiBcInRlYW0uYWRkX21lbWJlclwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwidGVhbVwiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJIaTZkcFlkaTlHNVByRXFxVGtFWW5BXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFJlcG8gY3JlYXRlLlwiLCBcImlkXCI6IFwiOTEzMThcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3JlcG9cIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0NTk2NTU2OS4wMDAwMDBcIiwgXCJ2aXNpYmlsaXR5XCI6IFwicHJpdmF0ZVwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ1OTY1NTY5LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcInJlcG8uY3JlYXRlXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJfZG9jdW1lbnRfaWRcIjogXCJmWHdHZTdJVy1CWDhaZTY0Vl9BT1JnXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdpdCBjbG9uZS5cIiwgXCJpZFwiOiBcIjkxMTU4XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9naXRcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDU5NjkxODguMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiYWN0aW9uXCI6IFwiZ2l0LmNsb25lXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sX25hbWVcIjogXCJodHRwXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sXCI6IFwiMVwiLCBcInJlcG9zaXRvcnlcIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJyZXBvc2l0b3J5X3B1YmxpY1wiOiBcImZhbHNlXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdpdCBjbG9uZS5cIiwgXCJpZFwiOiBcIjkxMTU4XCIsIFwiZmlyZWR0aW1lc1wiOiAyLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9naXRcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDYwMDk2MzUuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiYWN0aW9uXCI6IFwiZ2l0LmNsb25lXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sX25hbWVcIjogXCJodHRwXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sXCI6IFwiMVwiLCBcInJlcG9zaXRvcnlcIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJyZXBvc2l0b3J5X3B1YmxpY1wiOiBcImZhbHNlXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIE9yZ2FuaXphdGlvbiBhdWRpdCBsb2cgZXhwb3J0LlwiLCBcImlkXCI6IFwiOTExOTNcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ2MjM2NDE1LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDYyMzY0MTUuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLmF1ZGl0X2xvZ19naXRfZXZlbnRfZXhwb3J0XCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJfZG9jdW1lbnRfaWRcIjogXCJ2a1Y1MlBiTlRaUEpSUk5MdU9aY3V3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIE9yZ2FuaXphdGlvbiBhdWRpdCBsb2cgZXhwb3J0LlwiLCBcImlkXCI6IFwiOTExOTNcIiwgXCJmaXJlZHRpbWVzXCI6IDIsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ2MjU0NjYxLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDYyNTQ2NjEuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLmF1ZGl0X2xvZ19leHBvcnRcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcIl9kb2N1bWVudF9pZFwiOiBcImd3a2NjVGJBY1gyV3VqaEVYUzNyMFFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgVGVhbSBjcmVhdGUuXCIsIFwiaWRcIjogXCI5MTM5N1wiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfdGVhbVwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ2Mjc4NDgwLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDYyNzg0ODAuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwidGVhbS5jcmVhdGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInRlYW1cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJRZjZSaEZZaGI3eXNkVjhLOHVrWUZ3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFRlYW0gYWRkIG1lbWJlci5cIiwgXCJpZFwiOiBcIjkxMzkzXCIsIFwiZmlyZWR0aW1lc1wiOiAyLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF90ZWFtXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDYyNzg2MDYuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0NjI3ODYwNi4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJ0ZWFtLmFkZF9tZW1iZXJcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInRlYW1cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJ1c2VyXCI6IFwiX1VTRVJfXCIsIFwiX2RvY3VtZW50X2lkXCI6IFwiVDZEWi10MC1hOXlRU2hvQmJVeGNfZ1wiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBUZWFtIGRlc3Ryb3kuXCIsIFwiaWRcIjogXCI5MTM5OVwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfdGVhbVwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ2MjkzMzkwLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDYyOTMzOTAuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwidGVhbS5kZXN0cm95XCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ0ZWFtXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiX2RvY3VtZW50X2lkXCI6IFwiWkxDMHE0S2FfUjRnR3czZ1dneGMzd1wiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBUZWFtIHJlbW92ZSBtZW1iZXIuXCIsIFwiaWRcIjogXCI5MTQwMVwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfdGVhbVwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ2Mzg3NjkxLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDYzODc2OTEuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwidGVhbS5yZW1vdmVfbWVtYmVyXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ0ZWFtXCI6IFwiX09SR0FOSVpBVElPTl8vYmFja2VuZFwiLCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJQWW4zVE9naGc1Rll6ZTY3M3N2aGd3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFRlYW0gYWRkIG1lbWJlci5cIiwgXCJpZFwiOiBcIjkxMzkzXCIsIFwiZmlyZWR0aW1lc1wiOiAzLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF90ZWFtXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDYzOTc0NjQuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0NjM5NzQ2NC4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJ0ZWFtLmFkZF9tZW1iZXJcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInRlYW1cIjogXCJfT1JHQU5JWkFUSU9OXy9iYWNrZW5kXCIsIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcIno0cUlQX2tqempuaWxJaEw4YWswbWdcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgRGVwZW5kZW5jeSBncmFwaCBuZXcgcmVwb3MgZW5hYmxlLlwiLCBcImlkXCI6IFwiOTExMzFcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2RlcGVuZGVuY3lfZ3JhcGhfbmV3X3JlcG9zXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDY5MTUxNTQuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0NjkxNTE1NC4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJkZXBlbmRlbmN5X2dyYXBoX25ld19yZXBvcy5lbmFibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCIyQXo5WENxYi1GZThrMEtrTFFsazBBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAxMiwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBEZXBlbmRlbmN5IGdyYXBoIG5ldyByZXBvcyBkaXNhYmxlLlwiLCBcImlkXCI6IFwiOTExMzBcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiB0cnVlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfZGVwZW5kZW5jeV9ncmFwaF9uZXdfcmVwb3NcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0NjkxNjcxOC4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ2OTE2NzE4LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcImRlcGVuZGVuY3lfZ3JhcGhfbmV3X3JlcG9zLmRpc2FibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJUekJHQU55M1Ntcm54SThHVzlicFFBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEhvb2sgY3JlYXRlLlwiLCBcImlkXCI6IFwiOTExNjJcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2hvb2tcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0Njk4MjY4OC4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImhvb2tfaWRcIjogXCIzMDM5OTk3MjdcIiwgXCJuYW1lXCI6IFwid2ViaG9va1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ2OTgyNjg4LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcImhvb2suY3JlYXRlXCIsIFwiYWN0aXZlXCI6IFwidHJ1ZVwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiY29uZmlnXCI6IHsgXCJjb250ZW50X3R5cGVcIjogXCJqc29uXCIsIFwiaW5zZWN1cmVfc3NsXCI6IFwiMFwiLCBcInNlY3JldFwiOiBcIioqKioqKioqXCIsIFwidXJsXCI6IFwiX1NFUlZFUl9BRERSRVNTX1dFQkhPT0tfXCIgfSwgXCJldmVudHNcIjogW1wicHVzaFwiXSwgXCJfZG9jdW1lbnRfaWRcIjogXCJTU2xPYmlYTk50elF6eEZvb0s0LWZ3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEhvb2sgZXZlbnRzIGNoYW5nZWQuXCIsIFwiaWRcIjogXCI5MTE2NVwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfaG9va1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ3MDQyNTA1LjAwMDAwMFwiLCBcImFjdGl2ZVwiOiBcInRydWVcIiwgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ3MDQyNTA1LjAwMDAwMFwiLCBcImhvb2tfaWRcIjogXCIzMDM5OTk3MjdcIiwgXCJuYW1lXCI6IFwid2ViaG9va1wiLCBcImFjdGlvblwiOiBcImhvb2suZXZlbnRzX2NoYW5nZWRcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcImNvbmZpZ1wiOiB7IFwiY29udGVudF90eXBlXCI6IFwianNvblwiLCBcImluc2VjdXJlX3NzbFwiOiBcIjBcIiwgXCJzZWNyZXRcIjogXCIqKioqKioqKlwiLCBcInVybFwiOiBcIl9TRVJWRVJfQUREUkVTU19XRUJIT09LX1wiIH0sIFwiZXZlbnRzXCI6IFtcInB1c2hcIiwgXCJjcmVhdGVcIiwgXCJkZXBsb3ltZW50XCIsIFwiZm9ya1wiLCBcImlzc3Vlc1wiXSwgXCJfZG9jdW1lbnRfaWRcIjogXCJCYTlOSmJGblNmSkIxekdFbjI5YXN3XCIsIFwiZXZlbnRzX3dlcmVcIjogW1wicHVzaFwiXSB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgR2l0IGNsb25lLlwiLCBcImlkXCI6IFwiOTExNThcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2dpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ3MTM5NjA3LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiYWN0aW9uXCI6IFwiZ2l0LmNsb25lXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sX25hbWVcIjogXCJodHRwXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sXCI6IFwiMVwiLCBcInJlcG9zaXRvcnlcIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJyZXBvc2l0b3J5X3B1YmxpY1wiOiBcImZhbHNlXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdpdCBwdXNoLlwiLCBcImlkXCI6IFwiOTExNjBcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2dpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ3NTIwNDYyLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiYWN0aW9uXCI6IFwiZ2l0LnB1c2hcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xfbmFtZVwiOiBcImh0dHBcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xcIjogXCIxXCIsIFwicmVwb3NpdG9yeVwiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcInJlcG9zaXRvcnlfcHVibGljXCI6IFwiZmFsc2VcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgR2l0IHB1c2guXCIsIFwiaWRcIjogXCI5MTE2MFwiLCBcImZpcmVkdGltZXNcIjogMiwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfZ2l0XCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDc1MjI2ODIuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJhY3Rpb25cIjogXCJnaXQucHVzaFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbF9uYW1lXCI6IFwiaHR0cFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbFwiOiBcIjFcIiwgXCJyZXBvc2l0b3J5XCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwicmVwb3NpdG9yeV9wdWJsaWNcIjogXCJmYWxzZVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBHaXQgY2xvbmUuXCIsIFwiaWRcIjogXCI5MTE1OFwiLCBcImZpcmVkdGltZXNcIjogMiwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfZ2l0XCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ3NTI3MDA3LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImFjdGlvblwiOiBcImdpdC5jbG9uZVwiLCBcInRyYW5zcG9ydF9wcm90b2NvbF9uYW1lXCI6IFwiaHR0cFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbFwiOiBcIjFcIiwgXCJyZXBvc2l0b3J5XCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwicmVwb3NpdG9yeV9wdWJsaWNcIjogXCJmYWxzZVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBSZXBvIGNyZWF0ZS5cIiwgXCJpZFwiOiBcIjkxMzE4XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9yZXBvXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDc1NjgzMDMuMDAwMDAwXCIsIFwidmlzaWJpbGl0eVwiOiBcInByaXZhdGVcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcInJlcG9cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0NzU2ODMwMy4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJyZXBvLmNyZWF0ZVwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiX2RvY3VtZW50X2lkXCI6IFwiQWNyZFNtTVcwUHBFRW11R1dpVGNvUVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogOSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBSZXBvIGRlc3Ryb3kuXCIsIFwiaWRcIjogXCI5MTMyMFwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfcmVwb1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ3NTg4NjE1LjAwMDAwMFwiLCBcInZpc2liaWxpdHlcIjogXCJwcml2YXRlXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDc1ODg2MTUuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwicmVwby5kZXN0cm95XCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJfZG9jdW1lbnRfaWRcIjogXCJILWJSQ3VXaF9GQW9aeHpXOEJWOUpBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdpdCBmZXRjaC5cIiwgXCJpZFwiOiBcIjkxMTU5XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9naXRcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0Nzc0NDg3Ny4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcInJlcG9cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcImFjdGlvblwiOiBcImdpdC5mZXRjaFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbF9uYW1lXCI6IFwiaHR0cFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbFwiOiBcIjFcIiwgXCJyZXBvc2l0b3J5XCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwicmVwb3NpdG9yeV9wdWJsaWNcIjogXCJmYWxzZVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gdXBkYXRlIGRlZmF1bHQgcmVwb3NpdG9yeSBwZXJtaXNzaW9uLlwiLCBcImlkXCI6IFwiOTEyMzFcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MDE1MDI3LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgwMTUwMjcuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLnVwZGF0ZV9kZWZhdWx0X3JlcG9zaXRvcnlfcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiX2RvY3VtZW50X2lkXCI6IFwiQkhwdkc3eGMyYlROVzNNRTNuQWdEd1wiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gdXBkYXRlIGRlZmF1bHQgcmVwb3NpdG9yeSBwZXJtaXNzaW9uLlwiLCBcImlkXCI6IFwiOTEyMzFcIiwgXCJmaXJlZHRpbWVzXCI6IDIsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MDIwNjcwLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgwMjA2NzAuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLnVwZGF0ZV9kZWZhdWx0X3JlcG9zaXRvcnlfcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiX2RvY3VtZW50X2lkXCI6IFwidDVadW1NSmVXQnMyQ3FaVC1uNEpOQVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gdXBkYXRlIG1lbWJlciByZXBvc2l0b3J5IGNyZWF0aW9uIHBlcm1pc3Npb24uXCIsIFwiaWRcIjogXCI5MTIzM1wiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfb3JnXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDgwMzQ3MzUuMDAwMDAwXCIsIFwidmlzaWJpbGl0eVwiOiBcInByaXZhdGVfaW50ZXJuYWxcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MDM0NzM1LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcIm9yZy51cGRhdGVfbWVtYmVyX3JlcG9zaXRvcnlfY3JlYXRpb25fcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiX2RvY3VtZW50X2lkXCI6IFwiQ0F3Ymg4S3BFNzVhYTBhakNwUklTd1wiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gdXBkYXRlIG1lbWJlciByZXBvc2l0b3J5IGNyZWF0aW9uIHBlcm1pc3Npb24uXCIsIFwiaWRcIjogXCI5MTIzM1wiLCBcImZpcmVkdGltZXNcIjogMiwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfb3JnXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDgwMzgyNDcuMDAwMDAwXCIsIFwidmlzaWJpbGl0eVwiOiBcImludGVybmFsXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0ODAzODI0Ny4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJvcmcudXBkYXRlX21lbWJlcl9yZXBvc2l0b3J5X2NyZWF0aW9uX3Blcm1pc3Npb25cIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcIl9kb2N1bWVudF9pZFwiOiBcInM5NmliVkQ1c0V5UkR4WWdROGdLaFFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDksIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgUHJpdmF0ZSByZXBvc2l0b3J5IGZvcmtpbmcgZW5hYmxlLlwiLCBcImlkXCI6IFwiOTEyNzNcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3ByaXZhdGVfcmVwb3NpdG9yeV9mb3JraW5nXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDgwNDY1NDYuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0ODA0NjU0Ni4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJwcml2YXRlX3JlcG9zaXRvcnlfZm9ya2luZy5lbmFibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJOWldCck8yQWMwMkxuRzNURmVFeWtBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFByaXZhdGUgcmVwb3NpdG9yeSBmb3JraW5nIGRpc2FibGUuXCIsIFwiaWRcIjogXCI5MTI3NFwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfcHJpdmF0ZV9yZXBvc2l0b3J5X2ZvcmtpbmdcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODA1MTE5My4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MDUxMTkzLjAwMDAwMFwiLCBcImFjdGlvblwiOiBcInByaXZhdGVfcmVwb3NpdG9yeV9mb3JraW5nLmRpc2FibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCI1RWtnV1BhOER1NlpKXzVvT2ZVX3JnXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdlbmVyaWMgcnVsZS5cIiwgXCJpZFwiOiBcIjkxNDQ5XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MDY5NDI3LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgwNjk0MjcuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwibWVtYmVyc19jYW5fY3JlYXRlX3ByaXZhdGVfcGFnZXMuZGlzYWJsZVwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcIjBydHlGZzJHRDItb0p5SnNPdFJaX0FcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgR2VuZXJpYyBydWxlLlwiLCBcImlkXCI6IFwiOTE0NDlcIiwgXCJmaXJlZHRpbWVzXCI6IDIsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDgwNzMyOTAuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0ODA3MzI5MC4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJtZW1iZXJzX2Nhbl9jcmVhdGVfcHJpdmF0ZV9wYWdlcy5lbmFibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJzU2JJbUY0ME4taExlMG1mREhrZk1nXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdlbmVyaWMgcnVsZS5cIiwgXCJpZFwiOiBcIjkxNDQ5XCIsIFwiZmlyZWR0aW1lc1wiOiAzLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MDg5OTkxLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgwODk5OTEuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwicmVwb3NpdG9yeV92aXNpYmlsaXR5X2NoYW5nZS5lbmFibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJkV0otN1pSNkRkdW1RZXUwMVBBR2lnXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIElzc3Vlcy5cIiwgXCJpZFwiOiBcIjkxMTY5XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9pc3N1ZXNcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODEwOTk1OC4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MTA5OTU4LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcImlzc3Vlcy5kZWxldGVzX2VuYWJsZWRcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJnV1QwVU5NVkZhSThaUEIzdEdHc2V3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIElzc3Vlcy5cIiwgXCJpZFwiOiBcIjkxMTY5XCIsIFwiZmlyZWR0aW1lc1wiOiAyLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9pc3N1ZXNcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODExNDQ5My4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MTE0NDkzLjAwMDAwMFwiLCBcImFjdGlvblwiOiBcImlzc3Vlcy5kZWxldGVzX2Rpc2FibGVkXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ1c2VyXCI6IFwiX1VTRVJfXCIsIFwiX2RvY3VtZW50X2lkXCI6IFwiVDJoZ3EzcjN5VkQyM05wNkNBRC16UVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogNSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gZGlzcGxheSBjb21tZW50ZXIgZnVsbCBuYW1lIGVuYWJsZWQuXCIsIFwiaWRcIjogXCI5MTIwMlwiLCBcImZpcmVkdGltZXNcIjogMSwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfb3JnXCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcImFjdG9yXCI6IFwiX1VTRVJfXCIsIFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDgxMjExNzEuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0ODEyMTE3MS4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJvcmcuZGlzcGxheV9jb21tZW50ZXJfZnVsbF9uYW1lX2VuYWJsZWRcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJvLUVkaThvd3Z6MWlQdjc4UlBQU0p3XCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIE9yZ2FuaXphdGlvbi5cIiwgXCJpZFwiOiBcIjkxMTg4XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9vcmdcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODEyNTExNi4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MTI1MTE2LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcIm9yZy5kaXNwbGF5X2NvbW1lbnRlcl9mdWxsX25hbWVfZGlzYWJsZWRcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJPeEpqcXB1ZzJGTThSSnV6RTFDWnBBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIE9yZ2FuaXphdGlvbi5cIiwgXCJpZFwiOiBcIjkxMTg4XCIsIFwiZmlyZWR0aW1lc1wiOiAyLCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9vcmdcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODEzMzI0NS4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcImNyZWF0ZWRfYXRcIjogXCIxNjI0NDQ4MTMzMjQ1LjAwMDAwMFwiLCBcImFjdGlvblwiOiBcIm9yZy5lbmFibGVfcmVhZGVyX2Rpc2N1c3Npb25fY3JlYXRpb25fcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcIjVLbUFfVmtRUG4zSTZnWTRMOHFGUEFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgT3JnYW5pemF0aW9uLlwiLCBcImlkXCI6IFwiOTExODhcIiwgXCJmaXJlZHRpbWVzXCI6IDMsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MTM4MzkyLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgxMzgzOTIuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLmRpc2FibGVfcmVhZGVyX2Rpc2N1c3Npb25fY3JlYXRpb25fcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcIkpRM0pBZDN6SG1wUnBHWllKc0pJUXdcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgT3JnYW5pemF0aW9uIGVuYWJsZSBtZW1iZXIgdGVhbSBjcmVhdGlvbiBwZXJtaXNzaW9uLlwiLCBcImlkXCI6IFwiOTEyMDNcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MTQ4MjcxLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgxNDgyNzEuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLmVuYWJsZV9tZW1iZXJfdGVhbV9jcmVhdGlvbl9wZXJtaXNzaW9uXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJ1c2VyXCI6IFwiX1VTRVJfXCIsIFwiX2RvY3VtZW50X2lkXCI6IFwic2QyZm5LVy1KY19PWkk5eG0ycHl5UVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogOSwgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBPcmdhbml6YXRpb24gZGlzYWJsZSBtZW1iZXIgdGVhbSBjcmVhdGlvbiBwZXJtaXNzaW9uLlwiLCBcImlkXCI6IFwiOTExOThcIiwgXCJmaXJlZHRpbWVzXCI6IDEsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X29yZ1wiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJhY3RvclwiOiBcIl9VU0VSX1wiLCBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4MTU0OTcyLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDgxNTQ5NzIuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwib3JnLmRpc2FibGVfbWVtYmVyX3RlYW1fY3JlYXRpb25fcGVybWlzc2lvblwiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwidXNlclwiOiBcIl9VU0VSX1wiLCBcIl9kb2N1bWVudF9pZFwiOiBcInBwalZ4R1FCQVF0czgyYXQ5QXozWFFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDEyLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFJlcG9zaXRvcnkgdnVsbmVyYWJpbGl0eSBhbGVydHMgZGlzYWJsZS5cIiwgXCJpZFwiOiBcIjkxMzY3XCIsIFwiZmlyZWR0aW1lc1wiOiAxLCBcIm1haWxcIjogdHJ1ZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3JlcG9zaXRvcnlfdnVsbmVyYWJpbGl0eV9hbGVydHNcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODQxOTIxMC4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcInJlcG9cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJjcmVhdGVkX2F0XCI6IFwiMTYyNDQ0ODQxOTIxMC4wMDAwMDBcIiwgXCJhY3Rpb25cIjogXCJyZXBvc2l0b3J5X3Z1bG5lcmFiaWxpdHlfYWxlcnRzLmRpc2FibGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcInVzZXJcIjogXCJfVVNFUl9cIiwgXCJfZG9jdW1lbnRfaWRcIjogXCJ3Z2YwdUNlbjVMRzRzdTZqUTJ4S0RBXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIFJlcG8gY3JlYXRlLlwiLCBcImlkXCI6IFwiOTEzMThcIiwgXCJmaXJlZHRpbWVzXCI6IDIsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X3JlcG9cIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiYWN0b3JcIjogXCJfVVNFUl9cIiwgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODQxOTQ3MC4wMDAwMDBcIiwgXCJ2aXNpYmlsaXR5XCI6IFwicHVibGljXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiY3JlYXRlZF9hdFwiOiBcIjE2MjQ0NDg0MTk0NzAuMDAwMDAwXCIsIFwiYWN0aW9uXCI6IFwicmVwby5jcmVhdGVcIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcIl9kb2N1bWVudF9pZFwiOiBcIm9MQWpaX0RiSHZ6WmxQbVJDWHI0TUFcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgR2l0IGNsb25lLlwiLCBcImlkXCI6IFwiOTExNThcIiwgXCJmaXJlZHRpbWVzXCI6IDMsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2dpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODQyMjIwNy4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcInJlcG9cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJhY3Rpb25cIjogXCJnaXQuY2xvbmVcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xfbmFtZVwiOiBcImh0dHBcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xcIjogXCIxXCIsIFwicmVwb3NpdG9yeVwiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcInJlcG9zaXRvcnlfcHVibGljXCI6IFwidHJ1ZVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBHaXQgY2xvbmUuXCIsIFwiaWRcIjogXCI5MTE1OFwiLCBcImZpcmVkdGltZXNcIjogNCwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfZ2l0XCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4NDIzOTg3LjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImFjdGlvblwiOiBcImdpdC5jbG9uZVwiLCBcInRyYW5zcG9ydF9wcm90b2NvbF9uYW1lXCI6IFwiaHR0cFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbFwiOiBcIjFcIiwgXCJyZXBvc2l0b3J5XCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwicmVwb3NpdG9yeV9wdWJsaWNcIjogXCJ0cnVlXCIgfSB9IH0sXG4gIHsgXCJydWxlXCI6IHsgXCJsZXZlbFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIEdpdCBjbG9uZS5cIiwgXCJpZFwiOiBcIjkxMTU4XCIsIFwiZmlyZWR0aW1lc1wiOiA1LCBcIm1haWxcIjogZmFsc2UsIFwiZ3JvdXBzXCI6IFtcImdpdGh1YlwiLCBcImdpdFwiLCBcImdpdF9naXRcIl0gfSwgXCJkYXRhXCI6IHsgXCJpbnRlZ3JhdGlvblwiOiBcImdpdGh1YlwiLCBcImdpdGh1YlwiOiB7IFwiQHRpbWVzdGFtcFwiOiBcIjE2MjQ0NDg0MzIxMDEuMDAwMDAwXCIsIFwib3JnXCI6IFwiX09SR0FOSVpBVElPTl9cIiwgXCJyZXBvXCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwiYWN0b3JfbG9jYXRpb25cIjogeyBcImNvdW50cnlfY29kZVwiOiBcIl9DT1VOVFJZX0NPREVfXCIgfSwgXCJhY3Rpb25cIjogXCJnaXQuY2xvbmVcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xfbmFtZVwiOiBcImh0dHBcIiwgXCJ0cmFuc3BvcnRfcHJvdG9jb2xcIjogXCIxXCIsIFwicmVwb3NpdG9yeVwiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcInJlcG9zaXRvcnlfcHVibGljXCI6IFwidHJ1ZVwiIH0gfSB9LFxuICB7IFwicnVsZVwiOiB7IFwibGV2ZWxcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBHaXQgY2xvbmUuXCIsIFwiaWRcIjogXCI5MTE1OFwiLCBcImZpcmVkdGltZXNcIjogNiwgXCJtYWlsXCI6IGZhbHNlLCBcImdyb3Vwc1wiOiBbXCJnaXRodWJcIiwgXCJnaXRcIiwgXCJnaXRfZ2l0XCJdIH0sIFwiZGF0YVwiOiB7IFwiaW50ZWdyYXRpb25cIjogXCJnaXRodWJcIiwgXCJnaXRodWJcIjogeyBcIkB0aW1lc3RhbXBcIjogXCIxNjI0NDQ4NDg3ODkzLjAwMDAwMFwiLCBcIm9yZ1wiOiBcIl9PUkdBTklaQVRJT05fXCIsIFwicmVwb1wiOiBcIl9PUkdBTklaQVRJT05fL19SRVBPU0lUT1JZX1wiLCBcImFjdG9yX2xvY2F0aW9uXCI6IHsgXCJjb3VudHJ5X2NvZGVcIjogXCJfQ09VTlRSWV9DT0RFX1wiIH0sIFwiYWN0aW9uXCI6IFwiZ2l0LmNsb25lXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sX25hbWVcIjogXCJodHRwXCIsIFwidHJhbnNwb3J0X3Byb3RvY29sXCI6IFwiMVwiLCBcInJlcG9zaXRvcnlcIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJyZXBvc2l0b3J5X3B1YmxpY1wiOiBcInRydWVcIiB9IH0gfSxcbiAgeyBcInJ1bGVcIjogeyBcImxldmVsXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgR2l0IGNsb25lLlwiLCBcImlkXCI6IFwiOTExNThcIiwgXCJmaXJlZHRpbWVzXCI6IDcsIFwibWFpbFwiOiBmYWxzZSwgXCJncm91cHNcIjogW1wiZ2l0aHViXCIsIFwiZ2l0XCIsIFwiZ2l0X2dpdFwiXSB9LCBcImRhdGFcIjogeyBcImludGVncmF0aW9uXCI6IFwiZ2l0aHViXCIsIFwiZ2l0aHViXCI6IHsgXCJAdGltZXN0YW1wXCI6IFwiMTYyNDQ0ODczNjI5NC4wMDAwMDBcIiwgXCJvcmdcIjogXCJfT1JHQU5JWkFUSU9OX1wiLCBcInJlcG9cIjogXCJfT1JHQU5JWkFUSU9OXy9fUkVQT1NJVE9SWV9cIiwgXCJhY3Rvcl9sb2NhdGlvblwiOiB7IFwiY291bnRyeV9jb2RlXCI6IFwiX0NPVU5UUllfQ09ERV9cIiB9LCBcImFjdGlvblwiOiBcImdpdC5jbG9uZVwiLCBcInRyYW5zcG9ydF9wcm90b2NvbF9uYW1lXCI6IFwiaHR0cFwiLCBcInRyYW5zcG9ydF9wcm90b2NvbFwiOiBcIjFcIiwgXCJyZXBvc2l0b3J5XCI6IFwiX09SR0FOSVpBVElPTl8vX1JFUE9TSVRPUllfXCIsIFwicmVwb3NpdG9yeV9wdWJsaWNcIjogXCJ0cnVlXCIgfSB9IH0sXG5dO1xuIl19