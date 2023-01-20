"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
// Vulnerability
const data = [{
  "rule": {
    "level": 7,
    "description": "CVE-2017-18018 affects coreutils",
    "id": "23504",
    "firedtimes": 1
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "coreutils",
        "version": "8.28-1ubuntu1",
        "architecture": "amd64",
        "condition": "Package less or equal than 8.29"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "1.900000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "high",
            "availability": "none"
          },
          "base_score": "4.700000"
        }
      },
      "cve": "CVE-2017-18018",
      "title": "CVE-2017-18018 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "In GNU Coreutils through 8.29, chown-core.c in chown and chgrp does not prevent replacement of a plain file with a symlink during use of the POSIX \"-R -L\" options, which allows local users to modify the ownership of arbitrary files by leveraging a race condition.",
      "severity": "Medium",
      "published": "2018-01-04",
      "updated": "2018-01-19",
      "state": "Fixed",
      "cwe_reference": "CWE-362",
      "references": ["http://lists.gnu.org/archive/html/coreutils/2017-12/msg00045.html", "https://nvd.nist.gov/vuln/detail/CVE-2017-18018", "http://people.canonical.com/~ubuntu-security/cve/2017/CVE-2017-18018.html", "http://www.openwall.com/lists/oss-security/2018/01/04/3", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-18018", "https://lists.gnu.org/archive/html/coreutils/2017-12/msg00072.html", "https://lists.gnu.org/archive/html/coreutils/2017-12/msg00073.html"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-17540 affects imagemagick",
    "id": "23504",
    "firedtimes": 2
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "imagemagick",
        "version": "8:6.9.7.4+dfsg-16ubuntu6.8",
        "architecture": "amd64",
        "condition": "Package less than 7.0.8-54"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        }
      },
      "cve": "CVE-2019-17540",
      "title": "ImageMagick before 7.0.8-54 has a heap-based buffer overflow in ReadPSInfo in coders/ps.c.",
      "severity": "Medium",
      "published": "2019-10-14",
      "updated": "2019-10-23",
      "state": "Fixed",
      "cwe_reference": "CWE-120",
      "references": ["https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=15826", "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=942578", "https://github.com/ImageMagick/ImageMagick/compare/7.0.8-53...7.0.8-54", "https://github.com/ImageMagick/ImageMagick/compare/master@%7B2019-07-15%7D...master@%7B2019-07-17%7D", "https://security-tracker.debian.org/tracker/CVE-2019-17540", "https://nvd.nist.gov/vuln/detail/CVE-2019-17540"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-17540 affects libmagickcore-6.q16-3",
    "id": "23504",
    "firedtimes": 5
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libmagickcore-6.q16-3",
        "source": "imagemagick",
        "version": "8:6.9.7.4+dfsg-16ubuntu6.8",
        "architecture": "amd64",
        "condition": "Package less than 7.0.8-54"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        }
      },
      "cve": "CVE-2019-17540",
      "title": "ImageMagick before 7.0.8-54 has a heap-based buffer overflow in ReadPSInfo in coders/ps.c.",
      "severity": "Medium",
      "published": "2019-10-14",
      "updated": "2019-10-23",
      "state": "Fixed",
      "cwe_reference": "CWE-120",
      "references": ["https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=15826", "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=942578", "https://github.com/ImageMagick/ImageMagick/compare/7.0.8-53...7.0.8-54", "https://github.com/ImageMagick/ImageMagick/compare/master@%7B2019-07-15%7D...master@%7B2019-07-17%7D", "https://security-tracker.debian.org/tracker/CVE-2019-17540", "https://nvd.nist.gov/vuln/detail/CVE-2019-17540"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-1000035 affects unzip",
    "id": "23505",
    "firedtimes": 1
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "unzip",
        "version": "6.0-21ubuntu1",
        "architecture": "amd64",
        "condition": "Package less or equal than 6.00"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-1000035",
      "title": "CVE-2018-1000035 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "A heap-based buffer overflow exists in Info-Zip UnZip version <= 6.00 in the processing of password-protected archives that allows an attacker to perform a denial of service or to possibly achieve code execution.",
      "severity": "High",
      "published": "2018-02-09",
      "updated": "2020-01-29",
      "state": "Fixed",
      "cwe_reference": "CWE-119",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889838"],
      "references": ["https://lists.debian.org/debian-lts-announce/2020/01/msg00026.html", "https://sec-consult.com/en/blog/advisories/multiple-vulnerabilities-in-infozip-unzip/index.html", "https://security.gentoo.org/glsa/202003-58", "https://nvd.nist.gov/vuln/detail/CVE-2018-1000035", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-1000035.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000035", "https://www.sec-consult.com/en/blog/advisories/multiple-vulnerabilities-in-infozip-unzip/index.html"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-1000035 affects unzip",
    "id": "23505",
    "firedtimes": 1
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "unzip",
        "version": "6.0-21ubuntu1",
        "architecture": "amd64",
        "condition": "Package less or equal than 6.00"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-1000035",
      "title": "CVE-2018-1000035 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "A heap-based buffer overflow exists in Info-Zip UnZip version <= 6.00 in the processing of password-protected archives that allows an attacker to perform a denial of service or to possibly achieve code execution.",
      "severity": "High",
      "published": "2018-02-09",
      "updated": "2020-01-29",
      "state": "Fixed",
      "cwe_reference": "CWE-119",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889838"],
      "references": ["https://lists.debian.org/debian-lts-announce/2020/01/msg00026.html", "https://sec-consult.com/en/blog/advisories/multiple-vulnerabilities-in-infozip-unzip/index.html", "https://security.gentoo.org/glsa/202003-58", "https://nvd.nist.gov/vuln/detail/CVE-2018-1000035", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-1000035.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000035", "https://www.sec-consult.com/en/blog/advisories/multiple-vulnerabilities-in-infozip-unzip/index.html"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2020-1747 affects python3-yaml",
    "id": "23505",
    "firedtimes": 44
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "python3-yaml",
        "source": "pyyaml",
        "version": "3.12-1build2",
        "architecture": "amd64",
        "condition": "Package less than 5.3.1"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "10"
        }
      },
      "cve": "CVE-2020-1747",
      "title": "A vulnerability was discovered in the PyYAML library in versions before 5.3.1, where it is susceptible to arbitrary code execution when it processes untrusted YAML files through the full_load method or with the FullLoader loader. Applications that use the library to process untrusted input may be vulnerable to this flaw. An attacker could use this flaw to execute arbitrary code on the system by abusing the python/object/new constructor.",
      "severity": "High",
      "published": "2020-03-24",
      "updated": "2020-05-11",
      "state": "Fixed",
      "cwe_reference": "CWE-20",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-04/msg00017.html", "http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00017.html", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2020-1747", "https://github.com/yaml/pyyaml/pull/386", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/K5HEPD7LEVDPCITY5IMDYWXUMX37VFMY/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/WORRFHPQVAFKKXXWLSSW6XKUYLWM6CSH/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZBJA3SGNJKCAYPSHOHWY3KBCWNM5NYK2/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1747"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2019-1552 affects openssl",
    "id": "23503",
    "firedtimes": 11
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "openssl",
        "version": "1.1.1-1ubuntu2.1~18.04.6",
        "architecture": "amd64",
        "condition": "Package greater or equal than 1.1.1 and less or equal than 1.1.1c"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "1.900000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "low",
            "availability": "none"
          },
          "base_score": "3.300000"
        }
      },
      "cve": "CVE-2019-1552",
      "title": "OpenSSL has internal defaults for a directory tree where it can find a configuration file as well as certificates used for verification in TLS. This directory is most commonly referred to as OPENSSLDIR, and is configurable with the --prefix / --openssldir configuration options. For OpenSSL versions 1.1.0 and 1.1.1, the mingw configuration targets assume that resulting programs and libraries are installed in a Unix-like environment and the default prefix for program installation as well as for OPENSSLDIR should be '/usr/local'. However, mingw programs are Windows programs, and as such, find themselves looking at sub-directories of 'C:/usr/local', which may be world writable, which enables untrusted users to modify OpenSSL's default configuration, insert CA certificates, modify (or even replace) existing engine modules, etc. For OpenSSL 1.0.2, '/usr/local/ssl' is used as default for OPENSSLDIR on all Unix and Windows targets, including Visual C builds. However, some build instructions for the diverse Windows targets on 1.0.2 encourage you to specify your own --prefix. OpenSSL versions 1.1.1, 1.1.0 and 1.0.2 are affected by this issue. Due to the limited scope of affected deployments this has been assessed as low severity and therefore we are not creating new releases at this time. Fixed in OpenSSL 1.1.1d (Affected 1.1.1-1.1.1c). Fixed in OpenSSL 1.1.0l (Affected 1.1.0-1.1.0k). Fixed in OpenSSL 1.0.2t (Affected 1.0.2-1.0.2s).",
      "severity": "Low",
      "published": "2019-07-30",
      "updated": "2019-08-23",
      "state": "Fixed",
      "cwe_reference": "CWE-295",
      "references": ["https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=54aa9d51b09d67e90db443f682cface795f5af9e", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=b15a19c148384e73338aa7c5b12652138e35ed28", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=d333ebaf9c77332754a9d5e111e2f53e1de54fdd", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=e32bc855a81a2d48d215c506bdeb4f598045f7e9", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/EWC42UXL5GHTU5G77VKBF6JYUUNGSHOM/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/Y3IVFGSERAZLNJCK35TEM2R4726XIH3Z/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZBEV5QGDRFUZDMNECFXUSN5FMYOZDE4V/", "https://security.netapp.com/advisory/ntap-20190823-0006/", "https://support.f5.com/csp/article/K94041354", "https://support.f5.com/csp/article/K94041354?utm_source=f5support&amp;utm_medium=RSS", "https://www.openssl.org/news/secadv/20190730.txt", "https://www.oracle.com/security-alerts/cpuapr2020.html", "https://www.oracle.com/security-alerts/cpujan2020.html", "https://www.oracle.com/technetwork/security-advisory/cpuoct2019-5072832.html", "https://www.tenable.com/security/tns-2019-08", "https://www.tenable.com/security/tns-2019-09", "https://nvd.nist.gov/vuln/detail/CVE-2019-1552"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2020-1747 affects python3-yaml",
    "id": "23505",
    "firedtimes": 44
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "python3-yaml",
        "source": "pyyaml",
        "version": "3.12-1build2",
        "architecture": "amd64",
        "condition": "Package less than 5.3.1"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "10"
        }
      },
      "cve": "CVE-2020-1747",
      "title": "A vulnerability was discovered in the PyYAML library in versions before 5.3.1, where it is susceptible to arbitrary code execution when it processes untrusted YAML files through the full_load method or with the FullLoader loader. Applications that use the library to process untrusted input may be vulnerable to this flaw. An attacker could use this flaw to execute arbitrary code on the system by abusing the python/object/new constructor.",
      "severity": "High",
      "published": "2020-03-24",
      "updated": "2020-05-11",
      "state": "Fixed",
      "cwe_reference": "CWE-20",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-04/msg00017.html", "http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00017.html", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2020-1747", "https://github.com/yaml/pyyaml/pull/386", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/K5HEPD7LEVDPCITY5IMDYWXUMX37VFMY/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/WORRFHPQVAFKKXXWLSSW6XKUYLWM6CSH/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZBJA3SGNJKCAYPSHOHWY3KBCWNM5NYK2/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1747"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-18684 affects sudo",
    "id": "23504",
    "firedtimes": 87
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "sudo",
        "version": "1.8.21p2-3ubuntu1.2",
        "architecture": "amd64",
        "condition": "Package less or equal than 1.8.29"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "6.900000"
        }
      },
      "cve": "CVE-2019-18684",
      "title": "** DISPUTED ** Sudo through 1.8.29 allows local users to escalate to root if they have write access to file descriptor 3 of the sudo process. This occurs because of a race condition between determining a uid, and the setresuid and openat system calls. The attacker can write \"ALL ALL=(ALL) NOPASSWD:ALL\" to /proc/#####/fd/3 at a time when Sudo is prompting for a password. NOTE: This has been disputed due to the way Linux /proc works. It has been argued that writing to /proc/#####/fd/3 would only be viable if you had permission to write to /etc/sudoers. Even with write permission to /proc/#####/fd/3, it would not help you write to /etc/sudoers.",
      "severity": "Medium",
      "published": "2019-11-04",
      "updated": "2019-11-08",
      "state": "Fixed",
      "cwe_reference": "CWE-362",
      "references": ["https://gist.github.com/oxagast/51171aa161074188a11d96cbef884bbd", "https://nvd.nist.gov/vuln/detail/CVE-2019-18684"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-20482 affects tar",
    "id": "23504",
    "firedtimes": 88
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "tar",
        "version": "1.29b-2ubuntu0.1",
        "architecture": "amd64",
        "condition": "Package less or equal than 1.30"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "1.900000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "4.700000"
        }
      },
      "cve": "CVE-2018-20482",
      "title": "CVE-2018-20482 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "GNU Tar through 1.30, when --sparse is used, mishandles file shrinkage during read access, which allows local users to cause a denial of service (infinite read loop in sparse_dump_region in sparse.c) by modifying a file that is supposed to be archived by a different user's process (e.g., a system backup running as root).",
      "severity": "Medium",
      "published": "2018-12-26",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "CWE-835",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=917377", "https://bugzilla.redhat.com/show_bug.cgi?id=1662346"],
      "references": ["http://git.savannah.gnu.org/cgit/tar.git/commit/?id=c15c42ccd1e2377945fd0414eca1a49294bff454", "http://lists.gnu.org/archive/html/bug-tar/2018-12/msg00023.html", "http://lists.opensuse.org/opensuse-security-announce/2019-04/msg00077.html", "http://www.securityfocus.com/bid/106354", "https://lists.debian.org/debian-lts-announce/2018/12/msg00023.html", "https://news.ycombinator.com/item?id=18745431", "https://security.gentoo.org/glsa/201903-05", "https://twitter.com/thatcks/status/1076166645708668928", "https://utcc.utoronto.ca/~cks/space/blog/sysadmin/TarFindingTruncateBug", "https://nvd.nist.gov/vuln/detail/CVE-2018-20482", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-20482.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20482"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2015-2987 affects ed",
    "id": "23503",
    "firedtimes": 9
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "ed",
        "version": "1.10-2.1",
        "architecture": "amd64",
        "condition": "Package less or equal than 3.4"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "high",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "2.600000"
        }
      },
      "cve": "CVE-2015-2987",
      "title": "Type74 ED before 4.0 misuses 128-bit ECB encryption for small files, which makes it easier for attackers to obtain plaintext data via differential cryptanalysis of a file with an original length smaller than 128 bits.",
      "severity": "Low",
      "published": "2015-08-28",
      "updated": "2015-08-31",
      "state": "Fixed",
      "cwe_reference": "CWE-17",
      "references": ["http://jvn.jp/en/jp/JVN91474878/index.html", "http://jvndb.jvn.jp/jvndb/JVNDB-2015-000119", "http://type74.org/edman5-1.php", "http://type74org.blog14.fc2.com/blog-entry-1384.html", "https://nvd.nist.gov/vuln/detail/CVE-2015-2987"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-8769 affects elfutils",
    "id": "23505",
    "firedtimes": 45
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "elfutils",
        "version": "0.170-0.4ubuntu0.1",
        "architecture": "amd64",
        "condition": "Package matches a vulnerable version"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-8769",
      "title": "elfutils 0.170 has a buffer over-read in the ebl_dynamic_tag_name function of libebl/ebldynamictagname.c because SYMTAB_SHNDX is unsupported.",
      "severity": "High",
      "published": "2018-03-18",
      "updated": "2019-10-03",
      "state": "Pending confirmation",
      "cwe_reference": "CWE-125",
      "references": ["https://sourceware.org/bugzilla/show_bug.cgi?id=22976", "https://nvd.nist.gov/vuln/detail/CVE-2018-8769"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2019-1552 affects openssl",
    "id": "23503",
    "firedtimes": 11
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "openssl",
        "version": "1.1.1-1ubuntu2.1~18.04.6",
        "architecture": "amd64",
        "condition": "Package greater or equal than 1.1.1 and less or equal than 1.1.1c"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "1.900000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "low",
            "availability": "none"
          },
          "base_score": "3.300000"
        }
      },
      "cve": "CVE-2019-1552",
      "title": "OpenSSL has internal defaults for a directory tree where it can find a configuration file as well as certificates used for verification in TLS. This directory is most commonly referred to as OPENSSLDIR, and is configurable with the --prefix / --openssldir configuration options. For OpenSSL versions 1.1.0 and 1.1.1, the mingw configuration targets assume that resulting programs and libraries are installed in a Unix-like environment and the default prefix for program installation as well as for OPENSSLDIR should be '/usr/local'. However, mingw programs are Windows programs, and as such, find themselves looking at sub-directories of 'C:/usr/local', which may be world writable, which enables untrusted users to modify OpenSSL's default configuration, insert CA certificates, modify (or even replace) existing engine modules, etc. For OpenSSL 1.0.2, '/usr/local/ssl' is used as default for OPENSSLDIR on all Unix and Windows targets, including Visual C builds. However, some build instructions for the diverse Windows targets on 1.0.2 encourage you to specify your own --prefix. OpenSSL versions 1.1.1, 1.1.0 and 1.0.2 are affected by this issue. Due to the limited scope of affected deployments this has been assessed as low severity and therefore we are not creating new releases at this time. Fixed in OpenSSL 1.1.1d (Affected 1.1.1-1.1.1c). Fixed in OpenSSL 1.1.0l (Affected 1.1.0-1.1.0k). Fixed in OpenSSL 1.0.2t (Affected 1.0.2-1.0.2s).",
      "severity": "Low",
      "published": "2019-07-30",
      "updated": "2019-08-23",
      "state": "Fixed",
      "cwe_reference": "CWE-295",
      "references": ["https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=54aa9d51b09d67e90db443f682cface795f5af9e", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=b15a19c148384e73338aa7c5b12652138e35ed28", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=d333ebaf9c77332754a9d5e111e2f53e1de54fdd", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=e32bc855a81a2d48d215c506bdeb4f598045f7e9", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/EWC42UXL5GHTU5G77VKBF6JYUUNGSHOM/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/Y3IVFGSERAZLNJCK35TEM2R4726XIH3Z/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZBEV5QGDRFUZDMNECFXUSN5FMYOZDE4V/", "https://security.netapp.com/advisory/ntap-20190823-0006/", "https://support.f5.com/csp/article/K94041354", "https://support.f5.com/csp/article/K94041354?utm_source=f5support&amp;utm_medium=RSS", "https://www.openssl.org/news/secadv/20190730.txt", "https://www.oracle.com/security-alerts/cpuapr2020.html", "https://www.oracle.com/security-alerts/cpujan2020.html", "https://www.oracle.com/technetwork/security-advisory/cpuoct2019-5072832.html", "https://www.tenable.com/security/tns-2019-08", "https://www.tenable.com/security/tns-2019-09", "https://nvd.nist.gov/vuln/detail/CVE-2019-1552"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2020-1752 affects libc-bin",
    "id": "23503",
    "firedtimes": 12
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libc-bin",
        "source": "glibc",
        "version": "2.27-3ubuntu1",
        "architecture": "amd64",
        "condition": "Package less than 2.32.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.700000"
        }
      },
      "cve": "CVE-2020-1752",
      "title": "CVE-2020-1752 on Ubuntu 18.04 LTS (bionic) - medium.",
      "rationale": "A use-after-free vulnerability introduced in glibc upstream version 2.14 was found in the way the tilde expansion was carried out. Directory paths containing an initial tilde followed by a valid username were affected by this issue. A local attacker could exploit this flaw by creating a specially crafted path that, when processed by the glob function, would potentially lead to arbitrary code execution. This was fixed in version 2.32.",
      "severity": "Low",
      "published": "2020-04-30",
      "updated": "2020-05-18",
      "state": "Fixed",
      "cwe_reference": "CWE-416",
      "references": ["https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2020-1752", "https://security.netapp.com/advisory/ntap-20200511-0005/", "https://sourceware.org/bugzilla/show_bug.cgi?id=25414", "https://sourceware.org/git/gitweb.cgi?p=glibc.git;h=ddc650e9b3dc916eab417ce9f79e67337b05035c", "https://nvd.nist.gov/vuln/detail/CVE-2020-1752", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1752.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1752", "https://sourceware.org/git/?p=glibc.git;a=commitdiff;h=263e6175999bc7f5adb8b32fd12fcfae3f0bb05a;hp=37db4539dd8b5c098d9235249c5d2aedaa67d7d1"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2020-1752 affects multiarch-support",
    "id": "23503",
    "firedtimes": 17
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "multiarch-support",
        "source": "glibc",
        "version": "2.27-3ubuntu1",
        "architecture": "amd64",
        "condition": "Package less than 2.32.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.700000"
        }
      },
      "cve": "CVE-2020-1752",
      "title": "CVE-2020-1752 on Ubuntu 18.04 LTS (bionic) - medium.",
      "rationale": "A use-after-free vulnerability introduced in glibc upstream version 2.14 was found in the way the tilde expansion was carried out. Directory paths containing an initial tilde followed by a valid username were affected by this issue. A local attacker could exploit this flaw by creating a specially crafted path that, when processed by the glob function, would potentially lead to arbitrary code execution. This was fixed in version 2.32.",
      "severity": "Low",
      "published": "2020-04-30",
      "updated": "2020-05-18",
      "state": "Fixed",
      "cwe_reference": "CWE-416",
      "references": ["https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2020-1752", "https://security.netapp.com/advisory/ntap-20200511-0005/", "https://sourceware.org/bugzilla/show_bug.cgi?id=25414", "https://sourceware.org/git/gitweb.cgi?p=glibc.git;h=ddc650e9b3dc916eab417ce9f79e67337b05035c", "https://nvd.nist.gov/vuln/detail/CVE-2020-1752", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1752.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1752", "https://sourceware.org/git/?p=glibc.git;a=commitdiff;h=263e6175999bc7f5adb8b32fd12fcfae3f0bb05a;hp=37db4539dd8b5c098d9235249c5d2aedaa67d7d1"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2019-19645 affects libsqlite3-0",
    "id": "23503",
    "firedtimes": 18
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libsqlite3-0",
        "source": "sqlite3",
        "version": "3.22.0-1ubuntu0.3",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "2.100000"
        }
      },
      "cve": "CVE-2019-19645",
      "title": "CVE-2019-19645 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "alter.c in SQLite through 3.30.1 allows attackers to trigger infinite recursion via certain types of self-referential views in conjunction with ALTER TABLE statements.",
      "severity": "Low",
      "published": "2019-12-09",
      "updated": "2019-12-23",
      "state": "Unfixed",
      "cwe_reference": "CWE-674",
      "references": ["https://github.com/sqlite/sqlite/commit/38096961c7cd109110ac21d3ed7dad7e0cb0ae06", "https://security.netapp.com/advisory/ntap-20191223-0001/", "https://www.oracle.com/security-alerts/cpuapr2020.html", "https://nvd.nist.gov/vuln/detail/CVE-2019-19645", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-19645.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-19645"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2019-19645 affects sqlite3",
    "id": "23503",
    "firedtimes": 19
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "sqlite3",
        "version": "3.22.0-1ubuntu0.3",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "2.100000"
        }
      },
      "cve": "CVE-2019-19645",
      "title": "CVE-2019-19645 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "alter.c in SQLite through 3.30.1 allows attackers to trigger infinite recursion via certain types of self-referential views in conjunction with ALTER TABLE statements.",
      "severity": "Low",
      "published": "2019-12-09",
      "updated": "2019-12-23",
      "state": "Unfixed",
      "cwe_reference": "CWE-674",
      "references": ["https://github.com/sqlite/sqlite/commit/38096961c7cd109110ac21d3ed7dad7e0cb0ae06", "https://security.netapp.com/advisory/ntap-20191223-0001/", "https://www.oracle.com/security-alerts/cpuapr2020.html", "https://nvd.nist.gov/vuln/detail/CVE-2019-19645", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-19645.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-19645"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2013-4235 affects login",
    "id": "23503",
    "firedtimes": 20
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "login",
        "source": "shadow",
        "version": "1:4.5-1ubuntu2",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.300000"
        }
      },
      "cve": "CVE-2013-4235",
      "title": "CVE-2013-4235 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "shadow: TOCTOU (time-of-check time-of-use) race condition when copying and removing directory trees",
      "severity": "Low",
      "published": "2019-12-03",
      "updated": "2019-12-13",
      "state": "Unfixed",
      "cwe_reference": "CWE-367",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=778950", "https://bugzilla.redhat.com/show_bug.cgi?id=884658"],
      "references": ["https://access.redhat.com/security/cve/cve-2013-4235", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4235", "https://security-tracker.debian.org/tracker/CVE-2013-4235", "https://nvd.nist.gov/vuln/detail/CVE-2013-4235", "http://people.canonical.com/~ubuntu-security/cve/2013/CVE-2013-4235.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-4235"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2013-4235 affects passwd",
    "id": "23503",
    "firedtimes": 21
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "passwd",
        "source": "shadow",
        "version": "1:4.5-1ubuntu2",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.300000"
        }
      },
      "cve": "CVE-2013-4235",
      "title": "CVE-2013-4235 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "shadow: TOCTOU (time-of-check time-of-use) race condition when copying and removing directory trees",
      "severity": "Low",
      "published": "2019-12-03",
      "updated": "2019-12-13",
      "state": "Unfixed",
      "cwe_reference": "CWE-367",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=778950", "https://bugzilla.redhat.com/show_bug.cgi?id=884658"],
      "references": ["https://access.redhat.com/security/cve/cve-2013-4235", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4235", "https://security-tracker.debian.org/tracker/CVE-2013-4235", "https://nvd.nist.gov/vuln/detail/CVE-2013-4235", "http://people.canonical.com/~ubuntu-security/cve/2013/CVE-2013-4235.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-4235"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2013-4235 affects login",
    "id": "23503",
    "firedtimes": 20
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "login",
        "source": "shadow",
        "version": "1:4.5-1ubuntu2",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.300000"
        }
      },
      "cve": "CVE-2013-4235",
      "title": "CVE-2013-4235 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "shadow: TOCTOU (time-of-check time-of-use) race condition when copying and removing directory trees",
      "severity": "Low",
      "published": "2019-12-03",
      "updated": "2019-12-13",
      "state": "Unfixed",
      "cwe_reference": "CWE-367",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=778950", "https://bugzilla.redhat.com/show_bug.cgi?id=884658"],
      "references": ["https://access.redhat.com/security/cve/cve-2013-4235", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4235", "https://security-tracker.debian.org/tracker/CVE-2013-4235", "https://nvd.nist.gov/vuln/detail/CVE-2013-4235", "http://people.canonical.com/~ubuntu-security/cve/2013/CVE-2013-4235.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-4235"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-1003010 affects git",
    "id": "23504",
    "firedtimes": 162
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "git",
        "version": "1:2.17.1-1ubuntu0.7",
        "architecture": "amd64",
        "condition": "Package less or equal than 3.9.1"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "4.300000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "low",
            "availability": "none"
          },
          "base_score": "4.300000"
        }
      },
      "cve": "CVE-2019-1003010",
      "title": "A cross-site request forgery vulnerability exists in Jenkins Git Plugin 3.9.1 and earlier in src/main/java/hudson/plugins/git/GitTagAction.java that allows attackers to create a Git tag in a workspace and attach corresponding metadata to a build record.",
      "severity": "Medium",
      "published": "2019-02-06",
      "updated": "2019-04-26",
      "state": "Fixed",
      "cwe_reference": "CWE-352",
      "references": ["https://access.redhat.com/errata/RHBA-2019:0326", "https://access.redhat.com/errata/RHBA-2019:0327", "https://jenkins.io/security/advisory/2019-01-28/#SECURITY-1095", "https://nvd.nist.gov/vuln/detail/CVE-2019-1003010"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2020-9366 affects screen",
    "id": "23505",
    "firedtimes": 77
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "screen",
        "version": "4.6.2-1ubuntu1",
        "architecture": "amd64",
        "condition": "Package less than 4.8.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        }
      },
      "cve": "CVE-2020-9366",
      "title": "A buffer overflow was found in the way GNU Screen before 4.8.0 treated the special escape OSC 49. Specially crafted output, or a special program, could corrupt memory and crash Screen or possibly have unspecified other impact.",
      "severity": "High",
      "published": "2020-02-24",
      "updated": "2020-03-30",
      "state": "Fixed",
      "cwe_reference": "CWE-120",
      "references": ["http://www.openwall.com/lists/oss-security/2020/02/25/1", "https://lists.gnu.org/archive/html/screen-devel/2020-02/msg00007.html", "https://security.gentoo.org/glsa/202003-62", "https://www.openwall.com/lists/oss-security/2020/02/06/3", "https://nvd.nist.gov/vuln/detail/CVE-2020-9366"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2019-15847 affects gcc",
    "id": "23505",
    "firedtimes": 86
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "gcc",
        "source": "gcc-defaults",
        "version": "4:7.4.0-1ubuntu2.3",
        "architecture": "amd64",
        "condition": "Package less than 10.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "7.500000"
        }
      },
      "cve": "CVE-2019-15847",
      "title": "CVE-2019-15847 on Ubuntu 18.04 LTS (bionic) - negligible.",
      "rationale": "The POWER9 backend in GNU Compiler Collection (GCC) before version 10 could optimize multiple calls of the __builtin_darn intrinsic into a single call, thus reducing the entropy of the random number generator. This occurred because a volatile operation was not specified. For example, within a single execution of a program, the output of every __builtin_darn() call may be the same.",
      "severity": "High",
      "published": "2019-09-02",
      "updated": "2020-05-26",
      "state": "Fixed",
      "cwe_reference": "CWE-331",
      "bugzilla_references": ["https://gcc.gnu.org/bugzilla/show_bug.cgi?id=91481"],
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00056.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00057.html", "http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00058.html", "https://gcc.gnu.org/bugzilla/show_bug.cgi?id=91481", "https://nvd.nist.gov/vuln/detail/CVE-2019-15847", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-15847.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-15847"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2017-14988 affects libopenexr22",
    "id": "23504",
    "firedtimes": 189
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libopenexr22",
        "source": "openexr",
        "version": "2.2.0-11.1ubuntu1.2",
        "architecture": "amd64",
        "condition": "Package matches a vulnerable version"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "4.300000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "5.500000"
        }
      },
      "cve": "CVE-2017-14988",
      "title": "** DISPUTED ** Header::readfrom in IlmImf/ImfHeader.cpp in OpenEXR 2.2.0 allows remote attackers to cause a denial of service (excessive memory allocation) via a crafted file that is accessed with the ImfOpenInputFile function in IlmImf/ImfCRgbaFile.cpp. NOTE: The maintainer and multiple third parties believe that this vulnerability isn't valid.",
      "severity": "Medium",
      "published": "2017-10-03",
      "updated": "2019-09-23",
      "state": "Pending confirmation",
      "cwe_reference": "CWE-400",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-08/msg00063.html", "https://github.com/openexr/openexr/issues/248", "https://nvd.nist.gov/vuln/detail/CVE-2017-14988"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2020-1927 affects apache2",
    "id": "23504",
    "firedtimes": 190
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "apache2",
        "version": "2.4.29-1ubuntu4.13",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5.800000"
        }
      },
      "cve": "CVE-2020-1927",
      "title": "CVE-2020-1927 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "In Apache HTTP Server 2.4.0 to 2.4.41, redirects configured with mod_rewrite that were intended to be self-referential might be fooled by encoded newlines and redirect instead to an an unexpected URL within the request URL.",
      "severity": "Medium",
      "published": "2020-04-02",
      "updated": "2020-04-03",
      "state": "Unfixed",
      "cwe_reference": "CWE-601",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00002.html", "http://www.openwall.com/lists/oss-security/2020/04/03/1", "http://www.openwall.com/lists/oss-security/2020/04/04/1", "https://httpd.apache.org/security/vulnerabilities_24.html", "https://lists.apache.org/thread.html/r10b853ea87dd150b0e76fda3f8254dfdb23dd05fa55596405b58478e@%3Ccvs.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r1719675306dfbeaceff3dc63ccad3de2d5615919ca3c13276948b9ac@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r52a52fd60a258f5999a8fa5424b30d9fd795885f9ff4828d889cd201@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r70ba652b79ba224b2cbc0a183078b3a49df783b419903e3dcf4d78c7@%3Ccvs.httpd.apache.org%3E", "https://security.netapp.com/advisory/ntap-20200413-0002/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1927", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1927.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1927", "https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1927"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2020-1927 affects apache2-bin",
    "id": "23504",
    "firedtimes": 191
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "apache2-bin",
        "source": "apache2",
        "version": "2.4.29-1ubuntu4.13",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5.800000"
        }
      },
      "cve": "CVE-2020-1927",
      "title": "CVE-2020-1927 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "In Apache HTTP Server 2.4.0 to 2.4.41, redirects configured with mod_rewrite that were intended to be self-referential might be fooled by encoded newlines and redirect instead to an an unexpected URL within the request URL.",
      "severity": "Medium",
      "published": "2020-04-02",
      "updated": "2020-04-03",
      "state": "Unfixed",
      "cwe_reference": "CWE-601",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00002.html", "http://www.openwall.com/lists/oss-security/2020/04/03/1", "http://www.openwall.com/lists/oss-security/2020/04/04/1", "https://httpd.apache.org/security/vulnerabilities_24.html", "https://lists.apache.org/thread.html/r10b853ea87dd150b0e76fda3f8254dfdb23dd05fa55596405b58478e@%3Ccvs.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r1719675306dfbeaceff3dc63ccad3de2d5615919ca3c13276948b9ac@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r52a52fd60a258f5999a8fa5424b30d9fd795885f9ff4828d889cd201@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r70ba652b79ba224b2cbc0a183078b3a49df783b419903e3dcf4d78c7@%3Ccvs.httpd.apache.org%3E", "https://security.netapp.com/advisory/ntap-20200413-0002/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1927", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1927.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1927", "https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1927"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2020-1927 affects apache2-data",
    "id": "23504",
    "firedtimes": 192
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "apache2-data",
        "source": "apache2",
        "version": "2.4.29-1ubuntu4.13",
        "architecture": "all",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5.800000"
        }
      },
      "cve": "CVE-2020-1927",
      "title": "CVE-2020-1927 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "In Apache HTTP Server 2.4.0 to 2.4.41, redirects configured with mod_rewrite that were intended to be self-referential might be fooled by encoded newlines and redirect instead to an an unexpected URL within the request URL.",
      "severity": "Medium",
      "published": "2020-04-02",
      "updated": "2020-04-03",
      "state": "Unfixed",
      "cwe_reference": "CWE-601",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00002.html", "http://www.openwall.com/lists/oss-security/2020/04/03/1", "http://www.openwall.com/lists/oss-security/2020/04/04/1", "https://httpd.apache.org/security/vulnerabilities_24.html", "https://lists.apache.org/thread.html/r10b853ea87dd150b0e76fda3f8254dfdb23dd05fa55596405b58478e@%3Ccvs.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r1719675306dfbeaceff3dc63ccad3de2d5615919ca3c13276948b9ac@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r52a52fd60a258f5999a8fa5424b30d9fd795885f9ff4828d889cd201@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r70ba652b79ba224b2cbc0a183078b3a49df783b419903e3dcf4d78c7@%3Ccvs.httpd.apache.org%3E", "https://security.netapp.com/advisory/ntap-20200413-0002/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1927", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1927.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1927", "https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1927"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2020-1927 affects apache2-utils",
    "id": "23504",
    "firedtimes": 193
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "apache2-utils",
        "source": "apache2",
        "version": "2.4.29-1ubuntu4.13",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5.800000"
        }
      },
      "cve": "CVE-2020-1927",
      "title": "CVE-2020-1927 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "In Apache HTTP Server 2.4.0 to 2.4.41, redirects configured with mod_rewrite that were intended to be self-referential might be fooled by encoded newlines and redirect instead to an an unexpected URL within the request URL.",
      "severity": "Medium",
      "published": "2020-04-02",
      "updated": "2020-04-03",
      "state": "Unfixed",
      "cwe_reference": "CWE-601",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-05/msg00002.html", "http://www.openwall.com/lists/oss-security/2020/04/03/1", "http://www.openwall.com/lists/oss-security/2020/04/04/1", "https://httpd.apache.org/security/vulnerabilities_24.html", "https://lists.apache.org/thread.html/r10b853ea87dd150b0e76fda3f8254dfdb23dd05fa55596405b58478e@%3Ccvs.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r1719675306dfbeaceff3dc63ccad3de2d5615919ca3c13276948b9ac@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r52a52fd60a258f5999a8fa5424b30d9fd795885f9ff4828d889cd201@%3Cdev.httpd.apache.org%3E", "https://lists.apache.org/thread.html/r70ba652b79ba224b2cbc0a183078b3a49df783b419903e3dcf4d78c7@%3Ccvs.httpd.apache.org%3E", "https://security.netapp.com/advisory/ntap-20200413-0002/", "https://nvd.nist.gov/vuln/detail/CVE-2020-1927", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-1927.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1927", "https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1927"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-15919 affects openssh-client",
    "id": "23504",
    "firedtimes": 197
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "openssh-client",
        "source": "openssh",
        "version": "1:7.6p1-4ubuntu0.3",
        "architecture": "amd64",
        "condition": "Package greater or equal than 5.9 and less or equal than 7.8"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "low",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5.300000"
        }
      },
      "cve": "CVE-2018-15919",
      "title": "CVE-2018-15919 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "Remotely observable behaviour in auth-gss2.c in OpenSSH through 7.8 could be used by remote attackers to detect existence of users on a target system when GSS2 is in use. NOTE: the discoverer states 'We understand that the OpenSSH developers do not want to treat such a username enumeration (or \"oracle\") as a vulnerability.'",
      "severity": "Medium",
      "published": "2018-08-28",
      "updated": "2019-03-07",
      "state": "Fixed",
      "cwe_reference": "CWE-200",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=907503", "https://bugzilla.novell.com/show_bug.cgi?id=CVE-2018-15919"],
      "references": ["http://seclists.org/oss-sec/2018/q3/180", "http://www.securityfocus.com/bid/105163", "https://security.netapp.com/advisory/ntap-20181221-0001/", "https://nvd.nist.gov/vuln/detail/CVE-2018-15919", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-15919.html", "http://www.openwall.com/lists/oss-security/2018/08/27/2", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-15919"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-15919 affects openssh-server",
    "id": "23504",
    "firedtimes": 198
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "openssh-server",
        "source": "openssh",
        "version": "1:7.6p1-4ubuntu0.3",
        "architecture": "amd64",
        "condition": "Package greater or equal than 5.9 and less or equal than 7.8"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "low",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5.300000"
        }
      },
      "cve": "CVE-2018-15919",
      "title": "CVE-2018-15919 on Ubuntu 18.04 LTS (bionic) - low.",
      "rationale": "Remotely observable behaviour in auth-gss2.c in OpenSSH through 7.8 could be used by remote attackers to detect existence of users on a target system when GSS2 is in use. NOTE: the discoverer states 'We understand that the OpenSSH developers do not want to treat such a username enumeration (or \"oracle\") as a vulnerability.'",
      "severity": "Medium",
      "published": "2018-08-28",
      "updated": "2019-03-07",
      "state": "Fixed",
      "cwe_reference": "CWE-200",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=907503", "https://bugzilla.novell.com/show_bug.cgi?id=CVE-2018-15919"],
      "references": ["http://seclists.org/oss-sec/2018/q3/180", "http://www.securityfocus.com/bid/105163", "https://security.netapp.com/advisory/ntap-20181221-0001/", "https://nvd.nist.gov/vuln/detail/CVE-2018-15919", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-15919.html", "http://www.openwall.com/lists/oss-security/2018/08/27/2", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-15919"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-17595 affects ncurses-base",
    "id": "23504",
    "firedtimes": 222
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "ncurses-base",
        "source": "ncurses",
        "version": "6.1-1ubuntu1.18.04",
        "architecture": "all",
        "condition": "Package less than 6.1.20191012"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "5.800000"
        }
      },
      "cve": "CVE-2019-17595",
      "title": "CVE-2019-17595 on Ubuntu 18.04 LTS (bionic) - negligible.",
      "rationale": "There is a heap-based buffer over-read in the fmt_entry function in tinfo/comp_hash.c in the terminfo library in ncurses before 6.1-20191012.",
      "severity": "Medium",
      "published": "2019-10-14",
      "updated": "2019-12-23",
      "state": "Fixed",
      "cwe_reference": "CWE-125",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=942401"],
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-11/msg00059.html", "http://lists.opensuse.org/opensuse-security-announce/2019-11/msg00061.html", "https://lists.gnu.org/archive/html/bug-ncurses/2019-10/msg00013.html", "https://lists.gnu.org/archive/html/bug-ncurses/2019-10/msg00045.html", "https://nvd.nist.gov/vuln/detail/CVE-2019-17595", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-17595.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17595"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-17543 affects liblz4-1",
    "id": "23504",
    "firedtimes": 244
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "liblz4-1",
        "source": "lz4",
        "version": "0.0~r131-2ubuntu2",
        "architecture": "amd64",
        "condition": "Package less than 1.9.2"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "6.800000"
        }
      },
      "cve": "CVE-2019-17543",
      "title": "CVE-2019-17543 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "LZ4 before 1.9.2 has a heap-based buffer overflow in LZ4_write32 (related to LZ4_compress_destSize), affecting applications that call LZ4_compress_fast with a large input. (This issue can also lead to data corruption.) NOTE: the vendor states \"only a few specific / uncommon usages of the API are at risk.\"",
      "severity": "Medium",
      "published": "2019-10-14",
      "updated": "2019-10-24",
      "state": "Fixed",
      "cwe_reference": "CWE-120",
      "bugzilla_references": ["https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=15941", "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=943680"],
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00069.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00070.html", "https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=15941", "https://github.com/lz4/lz4/compare/v1.9.1...v1.9.2", "https://github.com/lz4/lz4/issues/801", "https://github.com/lz4/lz4/pull/756", "https://github.com/lz4/lz4/pull/760", "https://lists.apache.org/thread.html/25015588b770d67470b7ba7ea49a305d6735dd7f00eabe7d50ec1e17@%3Cissues.arrow.apache.org%3E", "https://lists.apache.org/thread.html/543302d55e2d2da4311994e9b0debdc676bf3fd05e1a2be3407aa2d6@%3Cissues.arrow.apache.org%3E", "https://lists.apache.org/thread.html/793012683dc0fa6819b7c2560e6cf990811014c40c7d75412099c357@%3Cissues.arrow.apache.org%3E", "https://lists.apache.org/thread.html/9ff0606d16be2ab6a81619e1c9e23c3e251756638e36272c8c8b7fa3@%3Cissues.arrow.apache.org%3E", "https://lists.apache.org/thread.html/f0038c4fab2ee25aee849ebeff6b33b3aa89e07ccfb06b5c87b36316@%3Cissues.arrow.apache.org%3E", "https://lists.apache.org/thread.html/f506bc371d4a068d5d84d7361293568f61167d3a1c3e91f0def2d7d3@%3Cdev.arrow.apache.org%3E", "https://nvd.nist.gov/vuln/detail/CVE-2019-17543", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-17543.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17543"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-20217 affects libkrb5-3",
    "id": "23504",
    "firedtimes": 254
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libkrb5-3",
        "source": "krb5",
        "version": "1.13.2+dfsg-5ubuntu2.1",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "single",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "3.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "high",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "5.300000"
        }
      },
      "cve": "CVE-2018-20217",
      "title": "CVE-2018-20217 on Ubuntu 16.04 LTS (xenial) - medium.",
      "rationale": "A Reachable Assertion issue was discovered in the KDC in MIT Kerberos 5 (aka krb5) before 1.17. If an attacker can obtain a krbtgt ticket using an older encryption type (single-DES, triple-DES, or RC4), the attacker can crash the KDC by making an S4U2Self request.",
      "severity": "Medium",
      "published": "2018-12-26",
      "updated": "2019-10-03",
      "state": "Unfixed",
      "cwe_reference": "CWE-617",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=917387", "http://krbdev.mit.edu/rt/Ticket/Display.html?id=8763"],
      "references": ["http://krbdev.mit.edu/rt/Ticket/Display.html?id=8763", "https://github.com/krb5/krb5/commit/5e6d1796106df8ba6bc1973ee0917c170d929086", "https://lists.debian.org/debian-lts-announce/2019/01/msg00020.html", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/2KNHELH4YHNT6H2ESJWX2UIDXLBNGB2O/", "https://security.netapp.com/advisory/ntap-20190416-0006/", "https://nvd.nist.gov/vuln/detail/CVE-2018-20217", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-20217.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20217"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-14036 affects accountsservice",
    "id": "23504",
    "firedtimes": 256
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "accountsservice",
        "version": "0.6.40-2ubuntu11.3",
        "architecture": "amd64",
        "condition": "Package less than 0.6.50"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "single",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "4"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "6.500000"
        }
      },
      "cve": "CVE-2018-14036",
      "title": "CVE-2018-14036 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "Directory Traversal with ../ sequences occurs in AccountsService before 0.6.50 because of an insufficient path check in user_change_icon_file_authorized_cb() in user.c.",
      "severity": "Medium",
      "published": "2018-07-13",
      "updated": "2018-09-06",
      "state": "Fixed",
      "cwe_reference": "CWE-22",
      "bugzilla_references": ["https://bugs.freedesktop.org/show_bug.cgi?id=107085", "https://bugzilla.suse.com/show_bug.cgi?id=1099699"],
      "references": ["http://www.openwall.com/lists/oss-security/2018/07/02/2", "http://www.securityfocus.com/bid/104757", "https://bugs.freedesktop.org/show_bug.cgi?id=107085", "https://bugzilla.suse.com/show_bug.cgi?id=1099699", "https://cgit.freedesktop.org/accountsservice/commit/?id=f9abd359f71a5bce421b9ae23432f539a067847a", "https://nvd.nist.gov/vuln/detail/CVE-2018-14036", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-14036.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-14036"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2017-7244 affects libpcre3",
    "id": "23504",
    "firedtimes": 265
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libpcre3",
        "source": "pcre3",
        "version": "2:8.38-3.1",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "4.300000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "5.500000"
        }
      },
      "cve": "CVE-2017-7244",
      "title": "CVE-2017-7244 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "The _pcre32_xclass function in pcre_xclass.c in libpcre1 in PCRE 8.40 allows remote attackers to cause a denial of service (invalid memory read) via a crafted file.",
      "severity": "Medium",
      "published": "2017-03-23",
      "updated": "2018-08-17",
      "state": "Unfixed",
      "cwe_reference": "CWE-125",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=858683", "https://bugs.exim.org/show_bug.cgi?id=2052", "https://bugs.exim.org/show_bug.cgi?id=2054"],
      "references": ["http://www.securityfocus.com/bid/97067", "https://access.redhat.com/errata/RHSA-2018:2486", "https://blogs.gentoo.org/ago/2017/03/20/libpcre-invalid-memory-read-in-_pcre32_xclass-pcre_xclass-c/", "https://security.gentoo.org/glsa/201710-25", "https://nvd.nist.gov/vuln/detail/CVE-2017-7244", "http://people.canonical.com/~ubuntu-security/cve/2017/CVE-2017-7244.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7244"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2020-8631 affects grub-legacy-ec2",
    "id": "23503",
    "firedtimes": 32
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "grub-legacy-ec2",
        "source": "cloud-init",
        "version": "19.4-33-gbb4131a2-0ubuntu1~16.04.1",
        "architecture": "all",
        "condition": "Package less or equal than 19.4"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "2.100000"
        }
      },
      "cve": "CVE-2020-8631",
      "title": "CVE-2020-8631 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "cloud-init through 19.4 relies on Mersenne Twister for a random password, which makes it easier for attackers to predict passwords, because rand_str in cloudinit/util.py calls the random.choice function.",
      "severity": "Low",
      "published": "2020-02-05",
      "updated": "2020-02-21",
      "state": "Fixed",
      "cwe_reference": "CWE-330",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2020-03/msg00042.html", "https://bugs.launchpad.net/ubuntu/+source/cloud-init/+bug/1860795", "https://github.com/canonical/cloud-init/pull/204", "https://lists.debian.org/debian-lts-announce/2020/02/msg00021.html", "https://nvd.nist.gov/vuln/detail/CVE-2020-8631", "http://people.canonical.com/~ubuntu-security/cve/2020/CVE-2020-8631.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8631"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2019-20079 affects vim",
    "id": "23505",
    "firedtimes": 109
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "vim",
        "version": "2:7.4.1689-3ubuntu1.4",
        "architecture": "amd64",
        "condition": "Package less than 8.1.2136"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        }
      },
      "cve": "CVE-2019-20079",
      "title": "The autocmd feature in window.c in Vim before 8.1.2136 accesses freed memory.",
      "severity": "High",
      "published": "2019-12-30",
      "updated": "2020-03-30",
      "state": "Fixed",
      "cwe_reference": "CWE-416",
      "references": ["https://github.com/vim/vim/commit/ec66c41d84e574baf8009dbc0bd088d2bc5b2421", "https://github.com/vim/vim/compare/v8.1.2135...v8.1.2136", "https://packetstormsecurity.com/files/154898", "https://usn.ubuntu.com/4309-1/", "https://nvd.nist.gov/vuln/detail/CVE-2019-20079"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2016-4484 affects cryptsetup",
    "id": "23504",
    "firedtimes": 290
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "cryptsetup",
        "version": "2:1.6.6-5ubuntu2.1",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.1.7.3-2"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "7.200000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "physical",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "6.800000"
        }
      },
      "cve": "CVE-2016-4484",
      "title": "CVE-2016-4484 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "The Debian initrd script for the cryptsetup package 2:1.7.3-2 and earlier allows physically proximate attackers to gain shell access via many log in attempts with an invalid password.",
      "severity": "Medium",
      "published": "2017-01-23",
      "updated": "2017-01-26",
      "state": "Fixed",
      "cwe_reference": "CWE-287",
      "bugzilla_references": ["https://launchpad.net/bugs/1660701"],
      "references": ["http://hmarco.org/bugs/CVE-2016-4484/CVE-2016-4484_cryptsetup_initrd_shell.html", "http://www.openwall.com/lists/oss-security/2016/11/14/13", "http://www.openwall.com/lists/oss-security/2016/11/15/1", "http://www.openwall.com/lists/oss-security/2016/11/15/4", "http://www.openwall.com/lists/oss-security/2016/11/16/6", "http://www.securityfocus.com/bid/94315", "https://gitlab.com/cryptsetup/cryptsetup/commit/ef8a7d82d8d3716ae9b58179590f7908981fa0cb", "https://nvd.nist.gov/vuln/detail/CVE-2016-4484", "http://people.canonical.com/~ubuntu-security/cve/2016/CVE-2016-4484.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-4484"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2019-13050 affects gnupg",
    "id": "23505",
    "firedtimes": 114
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "gnupg",
        "version": "1.4.20-1ubuntu3.3",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.2.16"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "7.500000"
        }
      },
      "cve": "CVE-2019-13050",
      "title": "CVE-2019-13050 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "Interaction between the sks-keyserver code through 1.2.0 of the SKS keyserver network, and GnuPG through 2.2.16, makes it risky to have a GnuPG keyserver configuration line referring to a host on the SKS keyserver network. Retrieving data from this network may cause a persistent denial of service, because of a Certificate Spamming Attack.",
      "severity": "High",
      "published": "2019-06-29",
      "updated": "2019-07-09",
      "state": "Fixed",
      "cwe_reference": "CWE-297",
      "bugzilla_references": ["https://bugs.launchpad.net/bugs/1844059", "https://bugzilla.suse.com/show_bug.cgi?id=CVE-2019-13050", "https://dev.gnupg.org/T4591", "https://dev.gnupg.org/T4607", "https://dev.gnupg.org/T4628"],
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-08/msg00039.html", "https://gist.github.com/rjhansen/67ab921ffb4084c865b3618d6955275f", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/AUK2YRO6QIH64WP2LRA5D4LACTXQPPU4/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/CP4ON34YEXEZDZOXXWV43KVGGO6WZLJ5/", "https://lists.gnupg.org/pipermail/gnupg-announce/2019q3/000439.html", "https://support.f5.com/csp/article/K08654551", "https://support.f5.com/csp/article/K08654551?utm_source=f5support&amp;utm_medium=RSS", "https://twitter.com/lambdafu/status/1147162583969009664", "https://nvd.nist.gov/vuln/detail/CVE-2019-13050", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-13050.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13050"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-7738 affects mount",
    "id": "23505",
    "firedtimes": 128
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "mount",
        "source": "util-linux",
        "version": "2.27.1-6ubuntu3.10",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.31"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "7.200000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-7738",
      "title": "CVE-2018-7738 on Ubuntu 16.04 LTS (xenial) - negligible.",
      "rationale": "In util-linux before 2.32-rc1, bash-completion/umount allows local users to gain privileges by embedding shell commands in a mountpoint name, which is mishandled during a umount command (within Bash) by a different user, as demonstrated by logging in as root and entering umount followed by a tab character for autocompletion.",
      "severity": "High",
      "published": "2018-03-07",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "NVD-CWE-noinfo",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=892179", "https://github.com/karelzak/util-linux/issues/539"],
      "references": ["http://www.securityfocus.com/bid/103367", "https://bugs.debian.org/892179", "https://github.com/karelzak/util-linux/commit/75f03badd7ed9f1dd951863d75e756883d3acc55", "https://github.com/karelzak/util-linux/issues/539", "https://www.debian.org/security/2018/dsa-4134", "https://nvd.nist.gov/vuln/detail/CVE-2018-7738", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-7738.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-7738"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-7738 affects util-linux",
    "id": "23505",
    "firedtimes": 129
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "util-linux",
        "version": "2.27.1-6ubuntu3.10",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.31"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "7.200000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-7738",
      "title": "CVE-2018-7738 on Ubuntu 16.04 LTS (xenial) - negligible.",
      "rationale": "In util-linux before 2.32-rc1, bash-completion/umount allows local users to gain privileges by embedding shell commands in a mountpoint name, which is mishandled during a umount command (within Bash) by a different user, as demonstrated by logging in as root and entering umount followed by a tab character for autocompletion.",
      "severity": "High",
      "published": "2018-03-07",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "NVD-CWE-noinfo",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=892179", "https://github.com/karelzak/util-linux/issues/539"],
      "references": ["http://www.securityfocus.com/bid/103367", "https://bugs.debian.org/892179", "https://github.com/karelzak/util-linux/commit/75f03badd7ed9f1dd951863d75e756883d3acc55", "https://github.com/karelzak/util-linux/issues/539", "https://www.debian.org/security/2018/dsa-4134", "https://nvd.nist.gov/vuln/detail/CVE-2018-7738", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-7738.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-7738"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-7738 affects uuid-runtime",
    "id": "23505",
    "firedtimes": 130
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "uuid-runtime",
        "source": "util-linux",
        "version": "2.27.1-6ubuntu3.10",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.31"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "7.200000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-7738",
      "title": "CVE-2018-7738 on Ubuntu 16.04 LTS (xenial) - negligible.",
      "rationale": "In util-linux before 2.32-rc1, bash-completion/umount allows local users to gain privileges by embedding shell commands in a mountpoint name, which is mishandled during a umount command (within Bash) by a different user, as demonstrated by logging in as root and entering umount followed by a tab character for autocompletion.",
      "severity": "High",
      "published": "2018-03-07",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "NVD-CWE-noinfo",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=892179", "https://github.com/karelzak/util-linux/issues/539"],
      "references": ["http://www.securityfocus.com/bid/103367", "https://bugs.debian.org/892179", "https://github.com/karelzak/util-linux/commit/75f03badd7ed9f1dd951863d75e756883d3acc55", "https://github.com/karelzak/util-linux/issues/539", "https://www.debian.org/security/2018/dsa-4134", "https://nvd.nist.gov/vuln/detail/CVE-2018-7738", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-7738.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-7738"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 5,
    "description": "CVE-2019-1547 affects libssl1.0.0",
    "id": "23503",
    "firedtimes": 35
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libssl1.0.0",
        "source": "openssl",
        "version": "1.0.2g-1ubuntu4.15",
        "architecture": "amd64",
        "condition": "Package greater or equal than 1.0.2 and less or equal than 1.0.2s"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "1.900000"
        }
      },
      "cve": "CVE-2019-1547",
      "title": "CVE-2019-1547 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "Normally in OpenSSL EC groups always have a co-factor present and this is used in side channel resistant code paths. However, in some cases, it is possible to construct a group using explicit parameters (instead of using a named curve). In those cases it is possible that such a group does not have the cofactor present. This can occur even where all the parameters match a known named curve. If such a curve is used then OpenSSL falls back to non-side channel resistant code paths which may result in full key recovery during an ECDSA signature operation. In order to be vulnerable an attacker would have to have the ability to time the creation of a large number of signatures where explicit parameters with no co-factor present are in use by an application using libcrypto. For the avoidance of doubt libssl is not vulnerable because explicit parameters are never used. Fixed in OpenSSL 1.1.1d (Affected 1.1.1-1.1.1c). Fixed in OpenSSL 1.1.0l (Affected 1.1.0-1.1.0k). Fixed in OpenSSL 1.0.2t (Affected 1.0.2-1.0.2s).",
      "severity": "Low",
      "published": "2019-09-10",
      "updated": "2019-09-12",
      "state": "Fixed",
      "cwe_reference": "CWE-311",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-09/msg00054.html", "http://lists.opensuse.org/opensuse-security-announce/2019-09/msg00072.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00012.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00016.html", "http://packetstormsecurity.com/files/154467/Slackware-Security-Advisory-openssl-Updates.html", "https://arxiv.org/abs/1909.01785", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=21c856b75d81eff61aa63b4f036bb64a85bf6d46", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=30c22fa8b1d840036b8e203585738df62a03cec8", "https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=7c1709c2da5414f5b6133d00a03fc8c5bf996c7a", "https://lists.debian.org/debian-lts-announce/2019/09/msg00026.html", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/GY6SNRJP2S7Y42GIIDO3HXPNMDYN2U3A/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZN4VVQJ3JDCHGIHV4Y2YTXBYQZ6PWQ7E/", "https://seclists.org/bugtraq/2019/Oct/0", "https://seclists.org/bugtraq/2019/Oct/1", "https://seclists.org/bugtraq/2019/Sep/25", "https://security.gentoo.org/glsa/201911-04", "https://security.netapp.com/advisory/ntap-20190919-0002/", "https://security.netapp.com/advisory/ntap-20200122-0002/", "https://support.f5.com/csp/article/K73422160?utm_source=f5support&amp;utm_medium=RSS", "https://www.debian.org/security/2019/dsa-4539", "https://www.debian.org/security/2019/dsa-4540", "https://www.openssl.org/news/secadv/20190910.txt", "https://www.oracle.com/security-alerts/cpuapr2020.html", "https://www.oracle.com/security-alerts/cpujan2020.html", "https://www.oracle.com/technetwork/security-advisory/cpuoct2019-5072832.html", "https://www.tenable.com/security/tns-2019-08", "https://www.tenable.com/security/tns-2019-09", "https://nvd.nist.gov/vuln/detail/CVE-2019-1547", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-1547.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-1547", "https://usn.ubuntu.com/usn/usn-4376-1"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2019-3843 affects systemd",
    "id": "23505",
    "firedtimes": 134
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "systemd",
        "version": "229-4ubuntu21.27",
        "architecture": "amd64",
        "condition": "Package less than 242"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "4.600000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2019-3843",
      "title": "It was discovered that a systemd service that uses DynamicUser property can create a SUID/SGID binary that would be allowed to run as the transient service UID/GID even after the service is terminated. A local attacker may use this flaw to access resources that will be owned by a potentially different service in the future, when the UID/GID will be recycled.",
      "severity": "High",
      "published": "2019-04-26",
      "updated": "2019-06-19",
      "state": "Fixed",
      "cwe_reference": "CWE-264",
      "references": ["http://www.securityfocus.com/bid/108116", "https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2019-3843", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/5JXQAKSTMABZ46EVCRMW62DHWYHTTFES/", "https://security.netapp.com/advisory/ntap-20190619-0002/", "https://usn.ubuntu.com/4269-1/", "https://nvd.nist.gov/vuln/detail/CVE-2019-3843"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-11727 affects thunderbird",
    "id": "23504",
    "firedtimes": 312
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "thunderbird",
        "version": "1:68.8.0+build2-0ubuntu0.16.04.2",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "low",
            "availability": "none"
          },
          "base_score": "5.300000"
        }
      },
      "cve": "CVE-2019-11727",
      "title": "CVE-2019-11727 on Ubuntu 16.04 LTS (xenial) - medium.",
      "rationale": "A vulnerability exists where it possible to force Network Security Services (NSS) to sign CertificateVerify with PKCS#1 v1.5 signatures when those are the only ones advertised by server in CertificateRequest in TLS 1.3. PKCS#1 v1.5 signatures should not be used for TLS 1.3 messages. This vulnerability affects Firefox < 68.",
      "severity": "Medium",
      "published": "2019-07-23",
      "updated": "2019-07-30",
      "state": "Unfixed",
      "cwe_reference": "CWE-295",
      "bugzilla_references": ["https://bugzilla.mozilla.org/show_bug.cgi?id=1552208"],
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00009.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00010.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00011.html", "http://lists.opensuse.org/opensuse-security-announce/2019-10/msg00017.html", "http://lists.opensuse.org/opensuse-security-announce/2020-01/msg00006.html", "https://access.redhat.com/errata/RHSA-2019:1951", "https://bugzilla.mozilla.org/show_bug.cgi?id=1552208", "https://security.gentoo.org/glsa/201908-12", "https://www.mozilla.org/security/advisories/mfsa2019-21/", "https://nvd.nist.gov/vuln/detail/CVE-2019-11727", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-11727.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-11727", "https://usn.ubuntu.com/usn/usn-4054-1", "https://usn.ubuntu.com/usn/usn-4060-1", "https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11727"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2019-18276 affects bash",
    "id": "23505",
    "firedtimes": 158
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "bash",
        "version": "4.3-14ubuntu1.4",
        "architecture": "amd64",
        "condition": "Package less or equal than 5.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "complete",
            "integrity_impact": "complete",
            "availability": "complete"
          },
          "base_score": "7.200000"
        }
      },
      "cve": "CVE-2019-18276",
      "title": "CVE-2019-18276 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "An issue was discovered in disable_priv_mode in shell.c in GNU Bash through 5.0 patch 11. By default, if Bash is run with its effective UID not equal to its real UID, it will drop privileges by setting its effective UID to its real UID. However, it does so incorrectly. On Linux and other systems that support \"saved UID\" functionality, the saved UID is not dropped. An attacker with command execution in the shell can use \"enable -f\" for runtime loading of a new builtin, which can be a shared object that calls setuid() and therefore regains privileges. However, binaries running with an effective UID of 0 are unaffected.",
      "severity": "High",
      "published": "2019-11-28",
      "updated": "2020-04-30",
      "state": "Fixed",
      "cwe_reference": "CWE-273",
      "bugzilla_references": ["https://bugzilla.suse.com/show_bug.cgi?id=1158028"],
      "references": ["http://packetstormsecurity.com/files/155498/Bash-5.0-Patch-11-Privilege-Escalation.html", "https://github.com/bminor/bash/commit/951bdaad7a18cc0dc1036bba86b18b90874d39ff", "https://security.netapp.com/advisory/ntap-20200430-0003/", "https://www.youtube.com/watch?v=-wGtxJ8opa8", "https://nvd.nist.gov/vuln/detail/CVE-2019-18276", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-18276.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18276"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2017-9502 affects curl",
    "id": "23504",
    "firedtimes": 334
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "curl",
        "version": "7.47.0-1ubuntu2.14",
        "architecture": "amd64",
        "condition": "Package less or equal than 7.54.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "5"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "low"
          },
          "base_score": "5.300000"
        }
      },
      "cve": "CVE-2017-9502",
      "title": "In curl before 7.54.1 on Windows and DOS, libcurl's default protocol function, which is the logic that allows an application to set which protocol libcurl should attempt to use when given a URL without a scheme part, had a flaw that could lead to it overwriting a heap based memory buffer with seven bytes. If the default protocol is specified to be FILE or a file: URL lacks two slashes, the given \"URL\" starts with a drive letter, and libcurl is built for Windows or DOS, then libcurl would copy the path 7 bytes off, so that the end of the given path would write beyond the malloc buffer (7 bytes being the length in bytes of the ascii string \"file://\").",
      "severity": "Medium",
      "published": "2017-06-14",
      "updated": "2017-07-08",
      "state": "Fixed",
      "cwe_reference": "CWE-119",
      "references": ["http://openwall.com/lists/oss-security/2017/06/14/1", "http://www.securityfocus.com/bid/99120", "http://www.securitytracker.com/id/1038697", "https://curl.haxx.se/docs/adv_20170614.html", "https://nvd.nist.gov/vuln/detail/CVE-2017-9502"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 10,
    "description": "CVE-2018-20483 affects wget",
    "id": "23505",
    "firedtimes": 175
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "wget",
        "version": "1.17.1-1ubuntu1.5",
        "architecture": "amd64",
        "condition": "Package less than 1.20.1"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "2.100000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "low",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "7.800000"
        }
      },
      "cve": "CVE-2018-20483",
      "title": "set_file_metadata in xattr.c in GNU Wget before 1.20.1 stores a file's origin URL in the user.xdg.origin.url metadata attribute of the extended attributes of the downloaded file, which allows local users to obtain sensitive information (e.g., credentials contained in the URL) by reading this attribute, as demonstrated by getfattr. This also applies to Referer information in the user.xdg.referrer.url metadata attribute. According to 2016-07-22 in the Wget ChangeLog, user.xdg.origin.url was partially based on the behavior of fwrite_xattr in tool_xattr.c in curl.",
      "severity": "High",
      "published": "2018-12-26",
      "updated": "2019-04-09",
      "state": "Fixed",
      "cwe_reference": "CWE-255",
      "references": ["http://git.savannah.gnu.org/cgit/wget.git/tree/NEWS", "http://www.securityfocus.com/bid/106358", "https://access.redhat.com/errata/RHSA-2019:3701", "https://security.gentoo.org/glsa/201903-08", "https://security.netapp.com/advisory/ntap-20190321-0002/", "https://twitter.com/marcan42/status/1077676739877232640", "https://usn.ubuntu.com/3943-1/", "https://nvd.nist.gov/vuln/detail/CVE-2018-20483"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-1010204 affects binutils",
    "id": "23504",
    "firedtimes": 369
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "binutils",
        "version": "2.26.1-1ubuntu1~16.04.8",
        "architecture": "amd64",
        "condition": "Package greater or equal than 2.21 and less or equal than 2.31.1"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "4.300000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "5.500000"
        }
      },
      "cve": "CVE-2019-1010204",
      "title": "CVE-2019-1010204 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "GNU binutils gold gold v1.11-v1.16 (GNU binutils v2.21-v2.31.1) is affected by: Improper Input Validation, Signed/Unsigned Comparison, Out-of-bounds Read. The impact is: Denial of service. The component is: gold/fileread.cc:497, elfcpp/elfcpp_file.h:644. The attack vector is: An ELF file with an invalid e_shoff header field must be opened.",
      "severity": "Medium",
      "published": "2019-07-23",
      "updated": "2019-08-22",
      "state": "Fixed",
      "cwe_reference": "CWE-125",
      "bugzilla_references": ["https://sourceware.org/bugzilla/show_bug.cgi?id=23765"],
      "references": ["https://security.netapp.com/advisory/ntap-20190822-0001/", "https://sourceware.org/bugzilla/show_bug.cgi?id=23765", "https://support.f5.com/csp/article/K05032915?utm_source=f5support&amp;utm_medium=RSS", "https://nvd.nist.gov/vuln/detail/CVE-2019-1010204", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-1010204.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-1010204"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-14855 affects dirmngr",
    "id": "23504",
    "firedtimes": 382
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "dirmngr",
        "source": "gnupg2",
        "version": "2.1.11-6ubuntu2.1",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "none",
            "availability": "none"
          },
          "base_score": "5"
        }
      },
      "cve": "CVE-2019-14855",
      "title": "CVE-2019-14855 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "A flaw was found in the way certificate signatures could be forged using collisions found in the SHA-1 algorithm. An attacker could use this weakness to create forged certificate signatures. This issue affects GnuPG versions before 2.2.18.",
      "severity": "Medium",
      "published": "2020-03-20",
      "updated": "2020-03-24",
      "state": "Unfixed",
      "cwe_reference": "CWE-327",
      "bugzilla_references": ["https://dev.gnupg.org/T4755"],
      "references": ["https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2019-14855", "https://dev.gnupg.org/T4755", "https://lists.gnupg.org/pipermail/gnupg-announce/2019q4/000442.html", "https://rwc.iacr.org/2020/slides/Leurent.pdf", "https://nvd.nist.gov/vuln/detail/CVE-2019-14855", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-14855.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14855", "https://eprint.iacr.org/2020/014.pdf"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2016-5011 affects uuid-runtime",
    "id": "23504",
    "firedtimes": 395
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "uuid-runtime",
        "source": "util-linux",
        "version": "2.27.1-6ubuntu3.10",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "complete"
          },
          "base_score": "4.700000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "physical",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "4.300000"
        }
      },
      "cve": "CVE-2016-5011",
      "title": "CVE-2016-5011 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "The parse_dos_extended function in partitions/dos.c in the libblkid library in util-linux allows physically proximate attackers to cause a denial of service (memory consumption) via a crafted MSDOS partition table with an extended partition boot record at zero offset.",
      "severity": "Medium",
      "published": "2017-04-11",
      "updated": "2017-04-17",
      "state": "Unfixed",
      "cwe_reference": "CWE-399",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=830802", "https://bugzilla.redhat.com/show_bug.cgi?id=1349536"],
      "references": ["http://rhn.redhat.com/errata/RHSA-2016-2605.html", "http://www.openwall.com/lists/oss-security/2016/07/11/2", "http://www.securityfocus.com/bid/91683", "http://www.securitytracker.com/id/1036272", "http://www-01.ibm.com/support/docview.wss?uid=isg3T1024543", "http://www-01.ibm.com/support/docview.wss?uid=nas8N1021801", "https://git.kernel.org/pub/scm/utils/util-linux/util-linux.git/commit/?id=7164a1c3", "https://nvd.nist.gov/vuln/detail/CVE-2016-5011", "http://people.canonical.com/~ubuntu-security/cve/2016/CVE-2016-5011.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-5011"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2015-5191 affects open-vm-tools",
    "id": "23504",
    "firedtimes": 396
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "open-vm-tools",
        "version": "2:10.2.0-3~ubuntu0.16.04.1",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "3.700000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "high",
            "privileges_required": "low",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "6.700000"
        }
      },
      "cve": "CVE-2015-5191",
      "title": "CVE-2015-5191 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "VMware Tools prior to 10.0.9 contains multiple file system races in libDeployPkg, related to the use of hard-coded paths under /tmp. Successful exploitation of this issue may result in a local privilege escalation. CVSS:3.0/AV:L/AC:H/PR:L/UI:R/S:U/C:H/I:H/A:H",
      "severity": "Medium",
      "published": "2017-07-28",
      "updated": "2017-08-08",
      "state": "Unfixed",
      "cwe_reference": "CWE-362",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=869633"],
      "references": ["http://www.securityfocus.com/bid/100011", "http://www.securitytracker.com/id/1039013", "https://www.vmware.com/security/advisories/VMSA-2017-0013.html", "https://nvd.nist.gov/vuln/detail/CVE-2015-5191", "http://people.canonical.com/~ubuntu-security/cve/2015/CVE-2015-5191.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-5191"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2018-8975 affects netpbm",
    "id": "23504",
    "firedtimes": 397
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "netpbm",
        "source": "netpbm-free",
        "version": "2:10.0-15.3",
        "architecture": "amd64",
        "condition": "Package less or equal than 10.81.03"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "medium",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "partial"
          },
          "base_score": "4.300000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "local",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "required",
            "scope": "unchanged",
            "confidentiality_impact": "none",
            "integrity_impact": "none",
            "availability": "high"
          },
          "base_score": "5.500000"
        }
      },
      "cve": "CVE-2018-8975",
      "title": "The pm_mallocarray2 function in lib/util/mallocvar.c in Netpbm through 10.81.03 allows remote attackers to cause a denial of service (heap-based buffer over-read) via a crafted image file, as demonstrated by pbmmask.",
      "severity": "Medium",
      "published": "2018-03-25",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "CWE-125",
      "references": ["http://lists.opensuse.org/opensuse-security-announce/2019-04/msg00056.html", "https://github.com/xiaoqx/pocs/blob/master/netpbm", "https://nvd.nist.gov/vuln/detail/CVE-2018-8975"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 7,
    "description": "CVE-2019-19232 affects sudo",
    "id": "23504",
    "firedtimes": 398
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "sudo",
        "version": "1.8.16-0ubuntu1.9",
        "architecture": "amd64",
        "condition": "Package less or equal than 1.8.29"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "none",
            "integrity_impact": "partial",
            "availability": "none"
          },
          "base_score": "5"
        }
      },
      "cve": "CVE-2019-19232",
      "title": "CVE-2019-19232 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "** DISPUTED ** In Sudo through 1.8.29, an attacker with access to a Runas ALL sudoer account can impersonate a nonexistent user by invoking sudo with a numeric uid that is not associated with any user. NOTE: The software maintainer believes that this is not a vulnerability because running a command via sudo as a user not present in the local password database is an intentional feature. Because this behavior surprised some users, sudo 1.8.30 introduced an option to enable/disable this behavior with the default being disabled. However, this does not change the fact that sudo was behaving as intended, and as documented, in earlier versions.",
      "severity": "Medium",
      "published": "2019-12-19",
      "updated": "2020-01-30",
      "state": "Fixed",
      "cwe_reference": "NVD-CWE-noinfo",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=947225"],
      "references": ["http://seclists.org/fulldisclosure/2020/Mar/31", "https://access.redhat.com/security/cve/cve-2019-19232", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/I6TKF36KOQUVJNBHSVJFA7BU3CCEYD2F/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/IY6DZ7WMDKU4ZDML6MJLDAPG42B5WVUC/", "https://quickview.cloudapps.cisco.com/quickview/bug/CSCvs58103", "https://quickview.cloudapps.cisco.com/quickview/bug/CSCvs58812", "https://quickview.cloudapps.cisco.com/quickview/bug/CSCvs58979", "https://quickview.cloudapps.cisco.com/quickview/bug/CSCvs76870", "https://security.netapp.com/advisory/ntap-20200103-0004/", "https://support.apple.com/en-gb/HT211100", "https://support.apple.com/kb/HT211100", "https://support2.windriver.com/index.php?page=cve&on=view&id=CVE-2019-19232", "https://support2.windriver.com/index.php?page=defects&on=view&id=LIN1018-5506", "https://www.bsi.bund.de/SharedDocs/Warnmeldungen/DE/CB/2019/12/warnmeldung_cb-k20-0001.html", "https://www.oracle.com/security-alerts/bulletinapr2020.html", "https://www.sudo.ws/devel.html#1.8.30b2", "https://www.sudo.ws/stable.html", "https://www.tenable.com/plugins/nessus/133936", "https://nvd.nist.gov/vuln/detail/CVE-2019-19232", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-19232.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-19232"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2017-12588 affects rsyslog",
    "id": "23506",
    "firedtimes": 64
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "rsyslog",
        "version": "8.16.0-1ubuntu3.1",
        "architecture": "amd64",
        "condition": "Package less or equal than 8.27.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2017-12588",
      "title": "The zmq3 input and output modules in rsyslog before 8.28.0 interpreted description fields as format strings, possibly allowing a format string attack with unspecified impact.",
      "severity": "Critical",
      "published": "2017-08-06",
      "updated": "2017-08-14",
      "state": "Fixed",
      "cwe_reference": "CWE-134",
      "references": ["https://github.com/rsyslog/rsyslog/blob/master/ChangeLog", "https://github.com/rsyslog/rsyslog/commit/062d0c671a29f7c6f7dff4a2f1f35df375bbb30b", "https://github.com/rsyslog/rsyslog/pull/1565", "https://nvd.nist.gov/vuln/detail/CVE-2017-12588"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2017-18342 affects python3-yaml",
    "id": "23506",
    "firedtimes": 65
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "python3-yaml",
        "source": "pyyaml",
        "version": "3.11-3build1",
        "architecture": "amd64",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2017-18342",
      "title": "CVE-2017-18342 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "In PyYAML before 5.1, the yaml.load() API could execute arbitrary code if used with untrusted data. The load() function has been deprecated in version 5.1 and the 'UnsafeLoader' has been introduced for backward compatibility with the function.",
      "severity": "Critical",
      "published": "2018-06-27",
      "updated": "2019-06-24",
      "state": "Unfixed",
      "cwe_reference": "CWE-20",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=902878"],
      "references": ["https://github.com/marshmallow-code/apispec/issues/278", "https://github.com/yaml/pyyaml/blob/master/CHANGES", "https://github.com/yaml/pyyaml/issues/193", "https://github.com/yaml/pyyaml/pull/74", "https://github.com/yaml/pyyaml/wiki/PyYAML-yaml.load(input)-Deprecation", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/JEX7IPV5P2QJITAMA5Z63GQCZA5I6NVZ/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/KSQQMRUQSXBSUXLCRD3TSZYQ7SEZRKCE/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/M6JCFGEIEOFMWWIXGHSELMKQDD4CV2BA/", "https://security.gentoo.org/glsa/202003-45", "https://nvd.nist.gov/vuln/detail/CVE-2017-18342", "http://people.canonical.com/~ubuntu-security/cve/2017/CVE-2017-18342.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-18342"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2017-15994 affects rsync",
    "id": "23506",
    "firedtimes": 66
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "rsync",
        "version": "3.1.1-3ubuntu1.3",
        "architecture": "amd64",
        "condition": "Package less or equal than 3.1.2"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2017-15994",
      "title": "rsync 3.1.3-development before 2017-10-24 mishandles archaic checksums, which makes it easier for remote attackers to bypass intended access restrictions. NOTE: the rsync development branch has significant use beyond the rsync developers, e.g., the code has been copied for use in various GitHub projects.",
      "severity": "Critical",
      "published": "2017-10-29",
      "updated": "2019-10-03",
      "state": "Fixed",
      "cwe_reference": "CWE-354",
      "references": ["https://git.samba.org/?p=rsync.git;a=commit;h=7b8a4ecd6ff9cdf4e5d3850ebf822f1e989255b3", "https://git.samba.org/?p=rsync.git;a=commit;h=9a480deec4d20277d8e20bc55515ef0640ca1e55", "https://git.samba.org/?p=rsync.git;a=commit;h=c252546ceeb0925eb8a4061315e3ff0a8c55b48b", "https://nvd.nist.gov/vuln/detail/CVE-2017-15994"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2019-9169 affects libc6",
    "id": "23506",
    "firedtimes": 68
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libc6",
        "source": "glibc",
        "version": "2.23-0ubuntu11",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.29"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2019-9169",
      "title": "CVE-2019-9169 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "In the GNU C Library (aka glibc or libc6) through 2.29, proceed_next_node in posix/regexec.c has a heap-based buffer over-read via an attempted case-insensitive regular-expression match.",
      "severity": "Critical",
      "published": "2019-02-26",
      "updated": "2019-04-16",
      "state": "Fixed",
      "cwe_reference": "CWE-125",
      "bugzilla_references": ["https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34140", "https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34142", "https://sourceware.org/bugzilla/show_bug.cgi?id=24114"],
      "references": ["http://www.securityfocus.com/bid/107160", "https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34140", "https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34142", "https://kc.mcafee.com/corporate/index?page=content&id=SB10278", "https://security.netapp.com/advisory/ntap-20190315-0002/", "https://sourceware.org/bugzilla/show_bug.cgi?id=24114", "https://sourceware.org/git/gitweb.cgi?p=glibc.git;a=commit;h=583dd860d5b833037175247230a328f0050dbfe9", "https://support.f5.com/csp/article/K54823184", "https://nvd.nist.gov/vuln/detail/CVE-2019-9169", "http://people.canonical.com/~ubuntu-security/cve/2019/CVE-2019-9169.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9169"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2017-15088 affects krb5-locales",
    "id": "23506",
    "firedtimes": 73
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "krb5-locales",
        "source": "krb5",
        "version": "1.13.2+dfsg-5ubuntu2.1",
        "architecture": "all",
        "condition": "Package unfixed"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2017-15088",
      "title": "CVE-2017-15088 on Ubuntu 16.04 LTS (xenial) - negligible.",
      "rationale": "plugins/preauth/pkinit/pkinit_crypto_openssl.c in MIT Kerberos 5 (aka krb5) through 1.15.2 mishandles Distinguished Name (DN) fields, which allows remote attackers to execute arbitrary code or cause a denial of service (buffer overflow and application crash) in situations involving untrusted X.509 data, related to the get_matching_data and X509_NAME_oneline_ex functions. NOTE: this has security relevance only in use cases outside of the MIT Kerberos distribution, e.g., the use of get_matching_data in KDC certauth plugin code that is specific to Red Hat.",
      "severity": "Critical",
      "published": "2017-11-23",
      "updated": "2019-10-09",
      "state": "Unfixed",
      "cwe_reference": "CWE-119",
      "bugzilla_references": ["http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=871698"],
      "references": ["http://www.securityfocus.com/bid/101594", "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=871698", "https://bugzilla.redhat.com/show_bug.cgi?id=1504045", "https://github.com/krb5/krb5/commit/fbb687db1088ddd894d975996e5f6a4252b9a2b4", "https://github.com/krb5/krb5/pull/707", "https://nvd.nist.gov/vuln/detail/CVE-2017-15088", "http://people.canonical.com/~ubuntu-security/cve/2017/CVE-2017-15088.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15088"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2018-6485 affects libc-bin",
    "id": "23506",
    "firedtimes": 78
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libc-bin",
        "source": "glibc",
        "version": "2.23-0ubuntu11",
        "architecture": "amd64",
        "condition": "Package less or equal than 2.26"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2018-6485",
      "title": "CVE-2018-6485 on Ubuntu 16.04 LTS (xenial) - medium.",
      "rationale": "An integer overflow in the implementation of the posix_memalign in memalign functions in the GNU C Library (aka glibc or libc6) 2.26 and earlier could cause these functions to return a pointer to a heap area that is too small, potentially leading to heap corruption.",
      "severity": "Critical",
      "published": "2018-02-01",
      "updated": "2019-12-10",
      "state": "Fixed",
      "cwe_reference": "CWE-190",
      "bugzilla_references": ["http://bugs.debian.org/878159", "https://sourceware.org/bugzilla/show_bug.cgi?id=22343"],
      "references": ["http://bugs.debian.org/878159", "http://www.securityfocus.com/bid/102912", "https://access.redhat.com/errata/RHBA-2019:0327", "https://access.redhat.com/errata/RHSA-2018:3092", "https://security.netapp.com/advisory/ntap-20190404-0003/", "https://sourceware.org/bugzilla/show_bug.cgi?id=22343", "https://usn.ubuntu.com/4218-1/", "https://www.oracle.com/technetwork/security-advisory/cpuapr2019-5072813.html", "https://nvd.nist.gov/vuln/detail/CVE-2018-6485", "http://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-6485.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-6485", "https://usn.ubuntu.com/usn/usn-4218-1"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2016-7944 affects libxfixes3",
    "id": "23506",
    "firedtimes": 82
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libxfixes3",
        "source": "libxfixes",
        "version": "1:5.0.1-2",
        "architecture": "amd64",
        "condition": "Package less or equal than 5.0.2"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2016-7944",
      "title": "CVE-2016-7944 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "Integer overflow in X.org libXfixes before 5.0.3 on 32-bit platforms might allow remote X servers to gain privileges via a length value of INT_MAX, which triggers the client to stop reading data and get out of sync.",
      "severity": "Critical",
      "published": "2016-12-13",
      "updated": "2017-07-01",
      "state": "Fixed",
      "cwe_reference": "CWE-190",
      "bugzilla_references": ["https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=840442"],
      "references": ["http://www.openwall.com/lists/oss-security/2016/10/04/2", "http://www.openwall.com/lists/oss-security/2016/10/04/4", "http://www.securityfocus.com/bid/93361", "http://www.securitytracker.com/id/1036945", "https://cgit.freedesktop.org/xorg/lib/libXfixes/commit/?id=61c1039ee23a2d1de712843bed3480654d7ef42e", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/4CE6VJWBMOWLSCH4OP4TAEPIA7NP53ON/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/GE43MDCRGS4R7MRRZNVSLREHRLU5OHCV/", "https://lists.x.org/archives/xorg-announce/2016-October/002720.html", "https://security.gentoo.org/glsa/201704-03", "https://nvd.nist.gov/vuln/detail/CVE-2016-7944", "http://people.canonical.com/~ubuntu-security/cve/2016/CVE-2016-7944.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7944"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2016-7947 affects libxrandr2",
    "id": "23506",
    "firedtimes": 83
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libxrandr2",
        "source": "libxrandr",
        "version": "2:1.5.0-1",
        "architecture": "amd64",
        "condition": "Package less or equal than 1.5.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2016-7947",
      "title": "CVE-2016-7947 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "Multiple integer overflows in X.org libXrandr before 1.5.1 allow remote X servers to trigger out-of-bounds write operations via a crafted response.",
      "severity": "Critical",
      "published": "2016-12-13",
      "updated": "2017-07-01",
      "state": "Fixed",
      "cwe_reference": "CWE-787",
      "references": ["http://www.openwall.com/lists/oss-security/2016/10/04/2", "http://www.openwall.com/lists/oss-security/2016/10/04/4", "http://www.securityfocus.com/bid/93365", "http://www.securitytracker.com/id/1036945", "https://cgit.freedesktop.org/xorg/lib/libXrandr/commit/?id=a0df3e1c7728205e5c7650b2e6dce684139254a6", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/74FFOHWYIKQZTJLRJWDMJ4W3WYBELUUG/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/Y7662OZWCSTLRPKS6R3E4Y4M26BSVAAM/", "https://lists.x.org/archives/xorg-announce/2016-October/002720.html", "https://security.gentoo.org/glsa/201704-03", "https://nvd.nist.gov/vuln/detail/CVE-2016-7947", "http://people.canonical.com/~ubuntu-security/cve/2016/CVE-2016-7947.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7947"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}, {
  "rule": {
    "level": 13,
    "description": "CVE-2016-7948 affects libxrandr2",
    "id": "23506",
    "firedtimes": 84
  },
  "data": {
    "vulnerability": {
      "package": {
        "name": "libxrandr2",
        "source": "libxrandr",
        "version": "2:1.5.0-1",
        "architecture": "amd64",
        "condition": "Package less or equal than 1.5.0"
      },
      "cvss": {
        "cvss2": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "authentication": "none",
            "confidentiality_impact": "partial",
            "integrity_impact": "partial",
            "availability": "partial"
          },
          "base_score": "7.500000"
        },
        "cvss3": {
          "vector": {
            "attack_vector": "network",
            "access_complexity": "low",
            "privileges_required": "none",
            "user_interaction": "none",
            "scope": "unchanged",
            "confidentiality_impact": "high",
            "integrity_impact": "high",
            "availability": "high"
          },
          "base_score": "9.800000"
        }
      },
      "cve": "CVE-2016-7948",
      "title": "CVE-2016-7948 on Ubuntu 16.04 LTS (xenial) - low.",
      "rationale": "X.org libXrandr before 1.5.1 allows remote X servers to trigger out-of-bounds write operations by leveraging mishandling of reply data.",
      "severity": "Critical",
      "published": "2016-12-13",
      "updated": "2017-07-01",
      "state": "Fixed",
      "cwe_reference": "CWE-787",
      "references": ["http://www.openwall.com/lists/oss-security/2016/10/04/2", "http://www.openwall.com/lists/oss-security/2016/10/04/4", "http://www.securityfocus.com/bid/93373", "http://www.securitytracker.com/id/1036945", "https://cgit.freedesktop.org/xorg/lib/libXrandr/commit/?id=a0df3e1c7728205e5c7650b2e6dce684139254a6", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/74FFOHWYIKQZTJLRJWDMJ4W3WYBELUUG/", "https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/Y7662OZWCSTLRPKS6R3E4Y4M26BSVAAM/", "https://lists.x.org/archives/xorg-announce/2016-October/002720.html", "https://security.gentoo.org/glsa/201704-03", "https://nvd.nist.gov/vuln/detail/CVE-2016-7948", "http://people.canonical.com/~ubuntu-security/cve/2016/CVE-2016-7948.html", "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7948"],
      "assigner": "cve@mitre.org",
      "cve_version": "4.0"
    }
  }
}];
exports.data = data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ1bG5lcmFiaWxpdGllcy5qcyJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLElBQUksR0FBRyxDQUNsQjtBQUFDLFVBQU87QUFBQyxhQUFRLENBQVQ7QUFBVyxtQkFBYyxrQ0FBekI7QUFBNEQsVUFBSyxPQUFqRTtBQUF5RSxrQkFBYTtBQUF0RixHQUFSO0FBQWlHLFVBQU87QUFBQyxxQkFBZ0I7QUFBQyxpQkFBVTtBQUFDLGdCQUFPLFdBQVI7QUFBb0IsbUJBQVUsZUFBOUI7QUFBOEMsd0JBQWUsT0FBN0Q7QUFBcUUscUJBQVk7QUFBakYsT0FBWDtBQUErSCxjQUFPO0FBQUMsaUJBQVE7QUFBQyxvQkFBUztBQUFDLDZCQUFnQixPQUFqQjtBQUF5QixpQ0FBb0IsUUFBN0M7QUFBc0QsOEJBQWlCLE1BQXZFO0FBQThFLHNDQUF5QixNQUF2RztBQUE4RyxnQ0FBbUIsU0FBakk7QUFBMkksNEJBQWU7QUFBMUosV0FBVjtBQUE0Syx3QkFBYTtBQUF6TCxTQUFUO0FBQThNLGlCQUFRO0FBQUMsb0JBQVM7QUFBQyw2QkFBZ0IsT0FBakI7QUFBeUIsaUNBQW9CLE1BQTdDO0FBQW9ELG1DQUFzQixLQUExRTtBQUFnRixnQ0FBbUIsTUFBbkc7QUFBMEcscUJBQVEsV0FBbEg7QUFBOEgsc0NBQXlCLE1BQXZKO0FBQThKLGdDQUFtQixNQUFqTDtBQUF3TCw0QkFBZTtBQUF2TSxXQUFWO0FBQXlOLHdCQUFhO0FBQXRPO0FBQXROLE9BQXRJO0FBQStrQixhQUFNLGdCQUFybEI7QUFBc21CLGVBQVEsb0RBQTltQjtBQUFtcUIsbUJBQVksMlFBQS9xQjtBQUEyN0Isa0JBQVcsUUFBdDhCO0FBQSs4QixtQkFBWSxZQUEzOUI7QUFBdytCLGlCQUFVLFlBQWwvQjtBQUErL0IsZUFBUSxPQUF2Z0M7QUFBK2dDLHVCQUFnQixTQUEvaEM7QUFBeWlDLG9CQUFhLENBQUMsbUVBQUQsRUFBcUUsaURBQXJFLEVBQXVILDJFQUF2SCxFQUFt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QUFhLENBQUMseURBQUQsRUFBMkQseURBQTNELEVBQXFILHdDQUFySCxFQUE4SiwyQ0FBOUosRUFBME0scUdBQTFNLEVBQWdULGtJQUFoVCxFQUFtYixrSUFBbmIsRUFBc2pCLHFFQUF0akIsRUFBNG5CLDRDQUE1bkIsRUFBeXFCLGdEQUF6cUIsRUFBMHRCLDBFQUExdEIsRUFBcXlCLDhEQUFyeUIsQ0FBOThCO0FBQW16RCxrQkFBVyxlQUE5ekQ7QUFBODBELHFCQUFjO0FBQTUxRDtBQUFqQjtBQUExRyxDQS9Ea0IsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZ1bG5lcmFiaWxpdHlcblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctMTgwMTggYWZmZWN0cyBjb3JldXRpbHNcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjF9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiY29yZXV0aWxzXCIsXCJ2ZXJzaW9uXCI6XCI4LjI4LTF1YnVudHUxXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDguMjlcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjEuOTAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImhpZ2hcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcImxvd1wiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNC43MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxNy0xODAxOFwiLFwidGl0bGVcIjpcIkNWRS0yMDE3LTE4MDE4IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIkluIEdOVSBDb3JldXRpbHMgdGhyb3VnaCA4LjI5LCBjaG93bi1jb3JlLmMgaW4gY2hvd24gYW5kIGNoZ3JwIGRvZXMgbm90IHByZXZlbnQgcmVwbGFjZW1lbnQgb2YgYSBwbGFpbiBmaWxlIHdpdGggYSBzeW1saW5rIGR1cmluZyB1c2Ugb2YgdGhlIFBPU0lYIFxcXCItUiAtTFxcXCIgb3B0aW9ucywgd2hpY2ggYWxsb3dzIGxvY2FsIHVzZXJzIHRvIG1vZGlmeSB0aGUgb3duZXJzaGlwIG9mIGFyYml0cmFyeSBmaWxlcyBieSBsZXZlcmFnaW5nIGEgcmFjZSBjb25kaXRpb24uXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMDEtMDRcIixcInVwZGF0ZWRcIjpcIjIwMTgtMDEtMTlcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTM2MlwiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5nbnUub3JnL2FyY2hpdmUvaHRtbC9jb3JldXRpbHMvMjAxNy0xMi9tc2cwMDA0NS5odG1sXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxNy0xODAxOFwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTcvQ1ZFLTIwMTctMTgwMTguaHRtbFwiLFwiaHR0cDovL3d3dy5vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMTgvMDEvMDQvM1wiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxNy0xODAxOFwiLFwiaHR0cHM6Ly9saXN0cy5nbnUub3JnL2FyY2hpdmUvaHRtbC9jb3JldXRpbHMvMjAxNy0xMi9tc2cwMDA3Mi5odG1sXCIsXCJodHRwczovL2xpc3RzLmdudS5vcmcvYXJjaGl2ZS9odG1sL2NvcmV1dGlscy8yMDE3LTEyL21zZzAwMDczLmh0bWxcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE3NTQwIGFmZmVjdHMgaW1hZ2VtYWdpY2tcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjJ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiaW1hZ2VtYWdpY2tcIixcInZlcnNpb25cIjpcIjg6Ni45LjcuNCtkZnNnLTE2dWJ1bnR1Ni44XCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDcuMC44LTU0XCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjYuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTc1NDBcIixcInRpdGxlXCI6XCJJbWFnZU1hZ2ljayBiZWZvcmUgNy4wLjgtNTQgaGFzIGEgaGVhcC1iYXNlZCBidWZmZXIgb3ZlcmZsb3cgaW4gUmVhZFBTSW5mbyBpbiBjb2RlcnMvcHMuYy5cIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0xMC0xNFwiLFwidXBkYXRlZFwiOlwiMjAxOS0xMC0yM1wiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTIwXCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL29zcy1mdXp6L2lzc3Vlcy9kZXRhaWw/aWQ9MTU4MjZcIixcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9OTQyNTc4XCIsXCJodHRwczovL2dpdGh1Yi5jb20vSW1hZ2VNYWdpY2svSW1hZ2VNYWdpY2svY29tcGFyZS83LjAuOC01My4uLjcuMC44LTU0XCIsXCJodHRwczovL2dpdGh1Yi5jb20vSW1hZ2VNYWdpY2svSW1hZ2VNYWdpY2svY29tcGFyZS9tYXN0ZXJAJTdCMjAxOS0wNy0xNSU3RC4uLm1hc3RlckAlN0IyMDE5LTA3LTE3JTdEXCIsXCJodHRwczovL3NlY3VyaXR5LXRyYWNrZXIuZGViaWFuLm9yZy90cmFja2VyL0NWRS0yMDE5LTE3NTQwXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0xNzU0MFwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMTc1NDAgYWZmZWN0cyBsaWJtYWdpY2tjb3JlLTYucTE2LTNcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjV9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwibGlibWFnaWNrY29yZS02LnExNi0zXCIsXCJzb3VyY2VcIjpcImltYWdlbWFnaWNrXCIsXCJ2ZXJzaW9uXCI6XCI4OjYuOS43LjQrZGZzZy0xNnVidW50dTYuOFwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3MgdGhhbiA3LjAuOC01NFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI2LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTE3NTQwXCIsXCJ0aXRsZVwiOlwiSW1hZ2VNYWdpY2sgYmVmb3JlIDcuMC44LTU0IGhhcyBhIGhlYXAtYmFzZWQgYnVmZmVyIG92ZXJmbG93IGluIFJlYWRQU0luZm8gaW4gY29kZXJzL3BzLmMuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMTAtMTRcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMjNcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTEyMFwiLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9vc3MtZnV6ei9pc3N1ZXMvZGV0YWlsP2lkPTE1ODI2XCIsXCJodHRwczovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTk0MjU3OFwiLFwiaHR0cHM6Ly9naXRodWIuY29tL0ltYWdlTWFnaWNrL0ltYWdlTWFnaWNrL2NvbXBhcmUvNy4wLjgtNTMuLi43LjAuOC01NFwiLFwiaHR0cHM6Ly9naXRodWIuY29tL0ltYWdlTWFnaWNrL0ltYWdlTWFnaWNrL2NvbXBhcmUvbWFzdGVyQCU3QjIwMTktMDctMTUlN0QuLi5tYXN0ZXJAJTdCMjAxOS0wNy0xNyU3RFwiLFwiaHR0cHM6Ly9zZWN1cml0eS10cmFja2VyLmRlYmlhbi5vcmcvdHJhY2tlci9DVkUtMjAxOS0xNzU0MFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTc1NDBcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMCxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOC0xMDAwMDM1IGFmZmVjdHMgdW56aXBcIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjF9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwidW56aXBcIixcInZlcnNpb25cIjpcIjYuMC0yMXVidW50dTFcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gNi4wMFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI2LjgwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcInJlcXVpcmVkXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE4LTEwMDAwMzVcIixcInRpdGxlXCI6XCJDVkUtMjAxOC0xMDAwMDM1IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIkEgaGVhcC1iYXNlZCBidWZmZXIgb3ZlcmZsb3cgZXhpc3RzIGluIEluZm8tWmlwIFVuWmlwIHZlcnNpb24gPD0gNi4wMCBpbiB0aGUgcHJvY2Vzc2luZyBvZiBwYXNzd29yZC1wcm90ZWN0ZWQgYXJjaGl2ZXMgdGhhdCBhbGxvd3MgYW4gYXR0YWNrZXIgdG8gcGVyZm9ybSBhIGRlbmlhbCBvZiBzZXJ2aWNlIG9yIHRvIHBvc3NpYmx5IGFjaGlldmUgY29kZSBleGVjdXRpb24uXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTAyLTA5XCIsXCJ1cGRhdGVkXCI6XCIyMDIwLTAxLTI5XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMTlcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9ODg5ODM4XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vbGlzdHMuZGViaWFuLm9yZy9kZWJpYW4tbHRzLWFubm91bmNlLzIwMjAvMDEvbXNnMDAwMjYuaHRtbFwiLFwiaHR0cHM6Ly9zZWMtY29uc3VsdC5jb20vZW4vYmxvZy9hZHZpc29yaWVzL211bHRpcGxlLXZ1bG5lcmFiaWxpdGllcy1pbi1pbmZvemlwLXVuemlwL2luZGV4Lmh0bWxcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMjAwMy01OFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtMTAwMDAzNVwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTgvQ1ZFLTIwMTgtMTAwMDAzNS5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE4LTEwMDAwMzVcIixcImh0dHBzOi8vd3d3LnNlYy1jb25zdWx0LmNvbS9lbi9ibG9nL2Fkdmlzb3JpZXMvbXVsdGlwbGUtdnVsbmVyYWJpbGl0aWVzLWluLWluZm96aXAtdW56aXAvaW5kZXguaHRtbFwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEwLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTEwMDAwMzUgYWZmZWN0cyB1bnppcFwiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6MX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJ1bnppcFwiLFwidmVyc2lvblwiOlwiNi4wLTIxdWJ1bnR1MVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiA2LjAwXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjYuODAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwicmVxdWlyZWRcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjcuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTgtMTAwMDAzNVwiLFwidGl0bGVcIjpcIkNWRS0yMDE4LTEwMDAwMzUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiQSBoZWFwLWJhc2VkIGJ1ZmZlciBvdmVyZmxvdyBleGlzdHMgaW4gSW5mby1aaXAgVW5aaXAgdmVyc2lvbiA8PSA2LjAwIGluIHRoZSBwcm9jZXNzaW5nIG9mIHBhc3N3b3JkLXByb3RlY3RlZCBhcmNoaXZlcyB0aGF0IGFsbG93cyBhbiBhdHRhY2tlciB0byBwZXJmb3JtIGEgZGVuaWFsIG9mIHNlcnZpY2Ugb3IgdG8gcG9zc2libHkgYWNoaWV2ZSBjb2RlIGV4ZWN1dGlvbi5cIixcInNldmVyaXR5XCI6XCJIaWdoXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMDItMDlcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDEtMjlcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTExOVwiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHA6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz04ODk4MzhcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9saXN0cy5kZWJpYW4ub3JnL2RlYmlhbi1sdHMtYW5ub3VuY2UvMjAyMC8wMS9tc2cwMDAyNi5odG1sXCIsXCJodHRwczovL3NlYy1jb25zdWx0LmNvbS9lbi9ibG9nL2Fkdmlzb3JpZXMvbXVsdGlwbGUtdnVsbmVyYWJpbGl0aWVzLWluLWluZm96aXAtdW56aXAvaW5kZXguaHRtbFwiLFwiaHR0cHM6Ly9zZWN1cml0eS5nZW50b28ub3JnL2dsc2EvMjAyMDAzLTU4XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOC0xMDAwMDM1XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOC9DVkUtMjAxOC0xMDAwMDM1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTgtMTAwMDAzNVwiLFwiaHR0cHM6Ly93d3cuc2VjLWNvbnN1bHQuY29tL2VuL2Jsb2cvYWR2aXNvcmllcy9tdWx0aXBsZS12dWxuZXJhYmlsaXRpZXMtaW4taW5mb3ppcC11bnppcC9pbmRleC5odG1sXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTAsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMjAtMTc0NyBhZmZlY3RzIHB5dGhvbjMteWFtbFwiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6NDR9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwicHl0aG9uMy15YW1sXCIsXCJzb3VyY2VcIjpcInB5eWFtbFwiLFwidmVyc2lvblwiOlwiMy4xMi0xYnVpbGQyXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDUuMy4xXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImNvbXBsZXRlXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJjb21wbGV0ZVwifSxcImJhc2Vfc2NvcmVcIjpcIjEwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMjAtMTc0N1wiLFwidGl0bGVcIjpcIkEgdnVsbmVyYWJpbGl0eSB3YXMgZGlzY292ZXJlZCBpbiB0aGUgUHlZQU1MIGxpYnJhcnkgaW4gdmVyc2lvbnMgYmVmb3JlIDUuMy4xLCB3aGVyZSBpdCBpcyBzdXNjZXB0aWJsZSB0byBhcmJpdHJhcnkgY29kZSBleGVjdXRpb24gd2hlbiBpdCBwcm9jZXNzZXMgdW50cnVzdGVkIFlBTUwgZmlsZXMgdGhyb3VnaCB0aGUgZnVsbF9sb2FkIG1ldGhvZCBvciB3aXRoIHRoZSBGdWxsTG9hZGVyIGxvYWRlci4gQXBwbGljYXRpb25zIHRoYXQgdXNlIHRoZSBsaWJyYXJ5IHRvIHByb2Nlc3MgdW50cnVzdGVkIGlucHV0IG1heSBiZSB2dWxuZXJhYmxlIHRvIHRoaXMgZmxhdy4gQW4gYXR0YWNrZXIgY291bGQgdXNlIHRoaXMgZmxhdyB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIG9uIHRoZSBzeXN0ZW0gYnkgYWJ1c2luZyB0aGUgcHl0aG9uL29iamVjdC9uZXcgY29uc3RydWN0b3IuXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDIwLTAzLTI0XCIsXCJ1cGRhdGVkXCI6XCIyMDIwLTA1LTExXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yMFwiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAyMC0wNC9tc2cwMDAxNy5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMjAtMDUvbXNnMDAwMTcuaHRtbFwiLFwiaHR0cHM6Ly9idWd6aWxsYS5yZWRoYXQuY29tL3Nob3dfYnVnLmNnaT9pZD1DVkUtMjAyMC0xNzQ3XCIsXCJodHRwczovL2dpdGh1Yi5jb20veWFtbC9weXlhbWwvcHVsbC8zODZcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvSzVIRVBEN0xFVkRQQ0lUWTVJTURZV1hVTVgzN1ZGTVkvXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL1dPUlJGSFBRVkFGS0tYWFdMU1NXNlhLVVlMV002Q1NIL1wiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9aQkpBM1NHTkpLQ0FZUFNIT0hXWTNLQkNXTk01TllLMi9cIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDIwLTE3NDdcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE1NTIgYWZmZWN0cyBvcGVuc3NsXCIsXCJpZFwiOlwiMjM1MDNcIixcImZpcmVkdGltZXNcIjoxMX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJvcGVuc3NsXCIsXCJ2ZXJzaW9uXCI6XCIxLjEuMS0xdWJ1bnR1Mi4xfjE4LjA0LjZcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBncmVhdGVyIG9yIGVxdWFsIHRoYW4gMS4xLjEgYW5kIGxlc3Mgb3IgZXF1YWwgdGhhbiAxLjEuMWNcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjEuOTAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibG93XCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJsb3dcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjMuMzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTU1MlwiLFwidGl0bGVcIjpcIk9wZW5TU0wgaGFzIGludGVybmFsIGRlZmF1bHRzIGZvciBhIGRpcmVjdG9yeSB0cmVlIHdoZXJlIGl0IGNhbiBmaW5kIGEgY29uZmlndXJhdGlvbiBmaWxlIGFzIHdlbGwgYXMgY2VydGlmaWNhdGVzIHVzZWQgZm9yIHZlcmlmaWNhdGlvbiBpbiBUTFMuIFRoaXMgZGlyZWN0b3J5IGlzIG1vc3QgY29tbW9ubHkgcmVmZXJyZWQgdG8gYXMgT1BFTlNTTERJUiwgYW5kIGlzIGNvbmZpZ3VyYWJsZSB3aXRoIHRoZSAtLXByZWZpeCAvIC0tb3BlbnNzbGRpciBjb25maWd1cmF0aW9uIG9wdGlvbnMuIEZvciBPcGVuU1NMIHZlcnNpb25zIDEuMS4wIGFuZCAxLjEuMSwgdGhlIG1pbmd3IGNvbmZpZ3VyYXRpb24gdGFyZ2V0cyBhc3N1bWUgdGhhdCByZXN1bHRpbmcgcHJvZ3JhbXMgYW5kIGxpYnJhcmllcyBhcmUgaW5zdGFsbGVkIGluIGEgVW5peC1saWtlIGVudmlyb25tZW50IGFuZCB0aGUgZGVmYXVsdCBwcmVmaXggZm9yIHByb2dyYW0gaW5zdGFsbGF0aW9uIGFzIHdlbGwgYXMgZm9yIE9QRU5TU0xESVIgc2hvdWxkIGJlICcvdXNyL2xvY2FsJy4gSG93ZXZlciwgbWluZ3cgcHJvZ3JhbXMgYXJlIFdpbmRvd3MgcHJvZ3JhbXMsIGFuZCBhcyBzdWNoLCBmaW5kIHRoZW1zZWx2ZXMgbG9va2luZyBhdCBzdWItZGlyZWN0b3JpZXMgb2YgJ0M6L3Vzci9sb2NhbCcsIHdoaWNoIG1heSBiZSB3b3JsZCB3cml0YWJsZSwgd2hpY2ggZW5hYmxlcyB1bnRydXN0ZWQgdXNlcnMgdG8gbW9kaWZ5IE9wZW5TU0wncyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24sIGluc2VydCBDQSBjZXJ0aWZpY2F0ZXMsIG1vZGlmeSAob3IgZXZlbiByZXBsYWNlKSBleGlzdGluZyBlbmdpbmUgbW9kdWxlcywgZXRjLiBGb3IgT3BlblNTTCAxLjAuMiwgJy91c3IvbG9jYWwvc3NsJyBpcyB1c2VkIGFzIGRlZmF1bHQgZm9yIE9QRU5TU0xESVIgb24gYWxsIFVuaXggYW5kIFdpbmRvd3MgdGFyZ2V0cywgaW5jbHVkaW5nIFZpc3VhbCBDIGJ1aWxkcy4gSG93ZXZlciwgc29tZSBidWlsZCBpbnN0cnVjdGlvbnMgZm9yIHRoZSBkaXZlcnNlIFdpbmRvd3MgdGFyZ2V0cyBvbiAxLjAuMiBlbmNvdXJhZ2UgeW91IHRvIHNwZWNpZnkgeW91ciBvd24gLS1wcmVmaXguIE9wZW5TU0wgdmVyc2lvbnMgMS4xLjEsIDEuMS4wIGFuZCAxLjAuMiBhcmUgYWZmZWN0ZWQgYnkgdGhpcyBpc3N1ZS4gRHVlIHRvIHRoZSBsaW1pdGVkIHNjb3BlIG9mIGFmZmVjdGVkIGRlcGxveW1lbnRzIHRoaXMgaGFzIGJlZW4gYXNzZXNzZWQgYXMgbG93IHNldmVyaXR5IGFuZCB0aGVyZWZvcmUgd2UgYXJlIG5vdCBjcmVhdGluZyBuZXcgcmVsZWFzZXMgYXQgdGhpcyB0aW1lLiBGaXhlZCBpbiBPcGVuU1NMIDEuMS4xZCAoQWZmZWN0ZWQgMS4xLjEtMS4xLjFjKS4gRml4ZWQgaW4gT3BlblNTTCAxLjEuMGwgKEFmZmVjdGVkIDEuMS4wLTEuMS4waykuIEZpeGVkIGluIE9wZW5TU0wgMS4wLjJ0IChBZmZlY3RlZCAxLjAuMi0xLjAuMnMpLlwiLFwic2V2ZXJpdHlcIjpcIkxvd1wiLFwicHVibGlzaGVkXCI6XCIyMDE5LTA3LTMwXCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA4LTIzXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yOTVcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpdC5vcGVuc3NsLm9yZy9naXR3ZWIvP3A9b3BlbnNzbC5naXQ7YT1jb21taXRkaWZmO2g9NTRhYTlkNTFiMDlkNjdlOTBkYjQ0M2Y2ODJjZmFjZTc5NWY1YWY5ZVwiLFwiaHR0cHM6Ly9naXQub3BlbnNzbC5vcmcvZ2l0d2ViLz9wPW9wZW5zc2wuZ2l0O2E9Y29tbWl0ZGlmZjtoPWIxNWExOWMxNDgzODRlNzMzMzhhYTdjNWIxMjY1MjEzOGUzNWVkMjhcIixcImh0dHBzOi8vZ2l0Lm9wZW5zc2wub3JnL2dpdHdlYi8/cD1vcGVuc3NsLmdpdDthPWNvbW1pdGRpZmY7aD1kMzMzZWJhZjljNzczMzI3NTRhOWQ1ZTExMWUyZjUzZTFkZTU0ZmRkXCIsXCJodHRwczovL2dpdC5vcGVuc3NsLm9yZy9naXR3ZWIvP3A9b3BlbnNzbC5naXQ7YT1jb21taXRkaWZmO2g9ZTMyYmM4NTVhODFhMmQ0OGQyMTVjNTA2YmRlYjRmNTk4MDQ1ZjdlOVwiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9FV0M0MlVYTDVHSFRVNUc3N1ZLQkY2SllVVU5HU0hPTS9cIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvWTNJVkZHU0VSQVpMTkpDSzM1VEVNMlI0NzI2WElIM1ovXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL1pCRVY1UUdEUkZVWkRNTkVDRlhVU041Rk1ZT1pERTRWL1wiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTA4MjMtMDAwNi9cIixcImh0dHBzOi8vc3VwcG9ydC5mNS5jb20vY3NwL2FydGljbGUvSzk0MDQxMzU0XCIsXCJodHRwczovL3N1cHBvcnQuZjUuY29tL2NzcC9hcnRpY2xlL0s5NDA0MTM1ND91dG1fc291cmNlPWY1c3VwcG9ydCZhbXA7dXRtX21lZGl1bT1SU1NcIixcImh0dHBzOi8vd3d3Lm9wZW5zc2wub3JnL25ld3Mvc2VjYWR2LzIwMTkwNzMwLnR4dFwiLFwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS9zZWN1cml0eS1hbGVydHMvY3B1YXByMjAyMC5odG1sXCIsXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3NlY3VyaXR5LWFsZXJ0cy9jcHVqYW4yMDIwLmh0bWxcIixcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vdGVjaG5ldHdvcmsvc2VjdXJpdHktYWR2aXNvcnkvY3B1b2N0MjAxOS01MDcyODMyLmh0bWxcIixcImh0dHBzOi8vd3d3LnRlbmFibGUuY29tL3NlY3VyaXR5L3Rucy0yMDE5LTA4XCIsXCJodHRwczovL3d3dy50ZW5hYmxlLmNvbS9zZWN1cml0eS90bnMtMjAxOS0wOVwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTU1MlwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEwLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDIwLTE3NDcgYWZmZWN0cyBweXRob24zLXlhbWxcIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjQ0fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcInB5dGhvbjMteWFtbFwiLFwic291cmNlXCI6XCJweXlhbWxcIixcInZlcnNpb25cIjpcIjMuMTItMWJ1aWxkMlwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3MgdGhhbiA1LjMuMVwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiY29tcGxldGVcIixcImF2YWlsYWJpbGl0eVwiOlwiY29tcGxldGVcIn0sXCJiYXNlX3Njb3JlXCI6XCIxMFwifX0sXCJjdmVcIjpcIkNWRS0yMDIwLTE3NDdcIixcInRpdGxlXCI6XCJBIHZ1bG5lcmFiaWxpdHkgd2FzIGRpc2NvdmVyZWQgaW4gdGhlIFB5WUFNTCBsaWJyYXJ5IGluIHZlcnNpb25zIGJlZm9yZSA1LjMuMSwgd2hlcmUgaXQgaXMgc3VzY2VwdGlibGUgdG8gYXJiaXRyYXJ5IGNvZGUgZXhlY3V0aW9uIHdoZW4gaXQgcHJvY2Vzc2VzIHVudHJ1c3RlZCBZQU1MIGZpbGVzIHRocm91Z2ggdGhlIGZ1bGxfbG9hZCBtZXRob2Qgb3Igd2l0aCB0aGUgRnVsbExvYWRlciBsb2FkZXIuIEFwcGxpY2F0aW9ucyB0aGF0IHVzZSB0aGUgbGlicmFyeSB0byBwcm9jZXNzIHVudHJ1c3RlZCBpbnB1dCBtYXkgYmUgdnVsbmVyYWJsZSB0byB0aGlzIGZsYXcuIEFuIGF0dGFja2VyIGNvdWxkIHVzZSB0aGlzIGZsYXcgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBvbiB0aGUgc3lzdGVtIGJ5IGFidXNpbmcgdGhlIHB5dGhvbi9vYmplY3QvbmV3IGNvbnN0cnVjdG9yLlwiLFwic2V2ZXJpdHlcIjpcIkhpZ2hcIixcInB1Ymxpc2hlZFwiOlwiMjAyMC0wMy0yNFwiLFwidXBkYXRlZFwiOlwiMjAyMC0wNS0xMVwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMjBcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMjAtMDQvbXNnMDAwMTcuaHRtbFwiLFwiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDIwLTA1L21zZzAwMDE3Lmh0bWxcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9Q1ZFLTIwMjAtMTc0N1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL3lhbWwvcHl5YW1sL3B1bGwvMzg2XCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0s1SEVQRDdMRVZEUENJVFk1SU1EWVdYVU1YMzdWRk1ZL1wiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9XT1JSRkhQUVZBRktLWFhXTFNTVzZYS1VZTFdNNkNTSC9cIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvWkJKQTNTR05KS0NBWVBTSE9IV1kzS0JDV05NNU5ZSzIvXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAyMC0xNzQ3XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xODY4NCBhZmZlY3RzIHN1ZG9cIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjg3fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcInN1ZG9cIixcInZlcnNpb25cIjpcIjEuOC4yMXAyLTN1YnVudHUxLjJcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMS44LjI5XCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiY29tcGxldGVcIixcImF2YWlsYWJpbGl0eVwiOlwiY29tcGxldGVcIn0sXCJiYXNlX3Njb3JlXCI6XCI2LjkwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTE4Njg0XCIsXCJ0aXRsZVwiOlwiKiogRElTUFVURUQgKiogU3VkbyB0aHJvdWdoIDEuOC4yOSBhbGxvd3MgbG9jYWwgdXNlcnMgdG8gZXNjYWxhdGUgdG8gcm9vdCBpZiB0aGV5IGhhdmUgd3JpdGUgYWNjZXNzIHRvIGZpbGUgZGVzY3JpcHRvciAzIG9mIHRoZSBzdWRvIHByb2Nlc3MuIFRoaXMgb2NjdXJzIGJlY2F1c2Ugb2YgYSByYWNlIGNvbmRpdGlvbiBiZXR3ZWVuIGRldGVybWluaW5nIGEgdWlkLCBhbmQgdGhlIHNldHJlc3VpZCBhbmQgb3BlbmF0IHN5c3RlbSBjYWxscy4gVGhlIGF0dGFja2VyIGNhbiB3cml0ZSBcXFwiQUxMIEFMTD0oQUxMKSBOT1BBU1NXRDpBTExcXFwiIHRvIC9wcm9jLyMjIyMjL2ZkLzMgYXQgYSB0aW1lIHdoZW4gU3VkbyBpcyBwcm9tcHRpbmcgZm9yIGEgcGFzc3dvcmQuIE5PVEU6IFRoaXMgaGFzIGJlZW4gZGlzcHV0ZWQgZHVlIHRvIHRoZSB3YXkgTGludXggL3Byb2Mgd29ya3MuIEl0IGhhcyBiZWVuIGFyZ3VlZCB0aGF0IHdyaXRpbmcgdG8gL3Byb2MvIyMjIyMvZmQvMyB3b3VsZCBvbmx5IGJlIHZpYWJsZSBpZiB5b3UgaGFkIHBlcm1pc3Npb24gdG8gd3JpdGUgdG8gL2V0Yy9zdWRvZXJzLiBFdmVuIHdpdGggd3JpdGUgcGVybWlzc2lvbiB0byAvcHJvYy8jIyMjIy9mZC8zLCBpdCB3b3VsZCBub3QgaGVscCB5b3Ugd3JpdGUgdG8gL2V0Yy9zdWRvZXJzLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE5LTExLTA0XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTExLTA4XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0zNjJcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpc3QuZ2l0aHViLmNvbS9veGFnYXN0LzUxMTcxYWExNjEwNzQxODhhMTFkOTZjYmVmODg0YmJkXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0xODY4NFwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTgtMjA0ODIgYWZmZWN0cyB0YXJcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjg4fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcInRhclwiLFwidmVyc2lvblwiOlwiMS4yOWItMnVidW50dTAuMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAxLjMwXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCIxLjkwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJoaWdoXCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJsb3dcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjQuNzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTgtMjA0ODJcIixcInRpdGxlXCI6XCJDVkUtMjAxOC0yMDQ4MiBvbiBVYnVudHUgMTguMDQgTFRTIChiaW9uaWMpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJHTlUgVGFyIHRocm91Z2ggMS4zMCwgd2hlbiAtLXNwYXJzZSBpcyB1c2VkLCBtaXNoYW5kbGVzIGZpbGUgc2hyaW5rYWdlIGR1cmluZyByZWFkIGFjY2Vzcywgd2hpY2ggYWxsb3dzIGxvY2FsIHVzZXJzIHRvIGNhdXNlIGEgZGVuaWFsIG9mIHNlcnZpY2UgKGluZmluaXRlIHJlYWQgbG9vcCBpbiBzcGFyc2VfZHVtcF9yZWdpb24gaW4gc3BhcnNlLmMpIGJ5IG1vZGlmeWluZyBhIGZpbGUgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBhcmNoaXZlZCBieSBhIGRpZmZlcmVudCB1c2VyJ3MgcHJvY2VzcyAoZS5nLiwgYSBzeXN0ZW0gYmFja3VwIHJ1bm5pbmcgYXMgcm9vdCkuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMTItMjZcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMDNcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTgzNVwiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHA6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz05MTczNzdcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9MTY2MjM0NlwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vZ2l0LnNhdmFubmFoLmdudS5vcmcvY2dpdC90YXIuZ2l0L2NvbW1pdC8/aWQ9YzE1YzQyY2NkMWUyMzc3OTQ1ZmQwNDE0ZWNhMWE0OTI5NGJmZjQ1NFwiLFwiaHR0cDovL2xpc3RzLmdudS5vcmcvYXJjaGl2ZS9odG1sL2J1Zy10YXIvMjAxOC0xMi9tc2cwMDAyMy5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMDQvbXNnMDAwNzcuaHRtbFwiLFwiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTA2MzU0XCIsXCJodHRwczovL2xpc3RzLmRlYmlhbi5vcmcvZGViaWFuLWx0cy1hbm5vdW5jZS8yMDE4LzEyL21zZzAwMDIzLmh0bWxcIixcImh0dHBzOi8vbmV3cy55Y29tYmluYXRvci5jb20vaXRlbT9pZD0xODc0NTQzMVwiLFwiaHR0cHM6Ly9zZWN1cml0eS5nZW50b28ub3JnL2dsc2EvMjAxOTAzLTA1XCIsXCJodHRwczovL3R3aXR0ZXIuY29tL3RoYXRja3Mvc3RhdHVzLzEwNzYxNjY2NDU3MDg2Njg5MjhcIixcImh0dHBzOi8vdXRjYy51dG9yb250by5jYS9+Y2tzL3NwYWNlL2Jsb2cvc3lzYWRtaW4vVGFyRmluZGluZ1RydW5jYXRlQnVnXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOC0yMDQ4MlwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTgvQ1ZFLTIwMTgtMjA0ODIuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOC0yMDQ4MlwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjUsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTUtMjk4NyBhZmZlY3RzIGVkXCIsXCJpZFwiOlwiMjM1MDNcIixcImZpcmVkdGltZXNcIjo5fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImVkXCIsXCJ2ZXJzaW9uXCI6XCIxLjEwLTIuMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAzLjRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwiaGlnaFwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjIuNjAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTUtMjk4N1wiLFwidGl0bGVcIjpcIlR5cGU3NCBFRCBiZWZvcmUgNC4wIG1pc3VzZXMgMTI4LWJpdCBFQ0IgZW5jcnlwdGlvbiBmb3Igc21hbGwgZmlsZXMsIHdoaWNoIG1ha2VzIGl0IGVhc2llciBmb3IgYXR0YWNrZXJzIHRvIG9idGFpbiBwbGFpbnRleHQgZGF0YSB2aWEgZGlmZmVyZW50aWFsIGNyeXB0YW5hbHlzaXMgb2YgYSBmaWxlIHdpdGggYW4gb3JpZ2luYWwgbGVuZ3RoIHNtYWxsZXIgdGhhbiAxMjggYml0cy5cIixcInNldmVyaXR5XCI6XCJMb3dcIixcInB1Ymxpc2hlZFwiOlwiMjAxNS0wOC0yOFwiLFwidXBkYXRlZFwiOlwiMjAxNS0wOC0zMVwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTdcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vanZuLmpwL2VuL2pwL0pWTjkxNDc0ODc4L2luZGV4Lmh0bWxcIixcImh0dHA6Ly9qdm5kYi5qdm4uanAvanZuZGIvSlZOREItMjAxNS0wMDAxMTlcIixcImh0dHA6Ly90eXBlNzQub3JnL2VkbWFuNS0xLnBocFwiLFwiaHR0cDovL3R5cGU3NG9yZy5ibG9nMTQuZmMyLmNvbS9ibG9nLWVudHJ5LTEzODQuaHRtbFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTUtMjk4N1wiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEwLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTg3NjkgYWZmZWN0cyBlbGZ1dGlsc1wiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6NDV9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiZWxmdXRpbHNcIixcInZlcnNpb25cIjpcIjAuMTcwLTAuNHVidW50dTAuMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIG1hdGNoZXMgYSB2dWxuZXJhYmxlIHZlcnNpb25cIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNi44MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJyZXF1aXJlZFwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOC04NzY5XCIsXCJ0aXRsZVwiOlwiZWxmdXRpbHMgMC4xNzAgaGFzIGEgYnVmZmVyIG92ZXItcmVhZCBpbiB0aGUgZWJsX2R5bmFtaWNfdGFnX25hbWUgZnVuY3Rpb24gb2YgbGliZWJsL2VibGR5bmFtaWN0YWduYW1lLmMgYmVjYXVzZSBTWU1UQUJfU0hORFggaXMgdW5zdXBwb3J0ZWQuXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTAzLTE4XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTEwLTAzXCIsXCJzdGF0ZVwiOlwiUGVuZGluZyBjb25maXJtYXRpb25cIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMjVcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL3NvdXJjZXdhcmUub3JnL2J1Z3ppbGxhL3Nob3dfYnVnLmNnaT9pZD0yMjk3NlwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtODc2OVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjUsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMTU1MiBhZmZlY3RzIG9wZW5zc2xcIixcImlkXCI6XCIyMzUwM1wiLFwiZmlyZWR0aW1lc1wiOjExfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcIm9wZW5zc2xcIixcInZlcnNpb25cIjpcIjEuMS4xLTF1YnVudHUyLjF+MTguMDQuNlwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGdyZWF0ZXIgb3IgZXF1YWwgdGhhbiAxLjEuMSBhbmQgbGVzcyBvciBlcXVhbCB0aGFuIDEuMS4xY1wifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiMS45MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJsb3dcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcImxvd1wiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiMy4zMDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xNTUyXCIsXCJ0aXRsZVwiOlwiT3BlblNTTCBoYXMgaW50ZXJuYWwgZGVmYXVsdHMgZm9yIGEgZGlyZWN0b3J5IHRyZWUgd2hlcmUgaXQgY2FuIGZpbmQgYSBjb25maWd1cmF0aW9uIGZpbGUgYXMgd2VsbCBhcyBjZXJ0aWZpY2F0ZXMgdXNlZCBmb3IgdmVyaWZpY2F0aW9uIGluIFRMUy4gVGhpcyBkaXJlY3RvcnkgaXMgbW9zdCBjb21tb25seSByZWZlcnJlZCB0byBhcyBPUEVOU1NMRElSLCBhbmQgaXMgY29uZmlndXJhYmxlIHdpdGggdGhlIC0tcHJlZml4IC8gLS1vcGVuc3NsZGlyIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gRm9yIE9wZW5TU0wgdmVyc2lvbnMgMS4xLjAgYW5kIDEuMS4xLCB0aGUgbWluZ3cgY29uZmlndXJhdGlvbiB0YXJnZXRzIGFzc3VtZSB0aGF0IHJlc3VsdGluZyBwcm9ncmFtcyBhbmQgbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgaW4gYSBVbml4LWxpa2UgZW52aXJvbm1lbnQgYW5kIHRoZSBkZWZhdWx0IHByZWZpeCBmb3IgcHJvZ3JhbSBpbnN0YWxsYXRpb24gYXMgd2VsbCBhcyBmb3IgT1BFTlNTTERJUiBzaG91bGQgYmUgJy91c3IvbG9jYWwnLiBIb3dldmVyLCBtaW5ndyBwcm9ncmFtcyBhcmUgV2luZG93cyBwcm9ncmFtcywgYW5kIGFzIHN1Y2gsIGZpbmQgdGhlbXNlbHZlcyBsb29raW5nIGF0IHN1Yi1kaXJlY3RvcmllcyBvZiAnQzovdXNyL2xvY2FsJywgd2hpY2ggbWF5IGJlIHdvcmxkIHdyaXRhYmxlLCB3aGljaCBlbmFibGVzIHVudHJ1c3RlZCB1c2VycyB0byBtb2RpZnkgT3BlblNTTCdzIGRlZmF1bHQgY29uZmlndXJhdGlvbiwgaW5zZXJ0IENBIGNlcnRpZmljYXRlcywgbW9kaWZ5IChvciBldmVuIHJlcGxhY2UpIGV4aXN0aW5nIGVuZ2luZSBtb2R1bGVzLCBldGMuIEZvciBPcGVuU1NMIDEuMC4yLCAnL3Vzci9sb2NhbC9zc2wnIGlzIHVzZWQgYXMgZGVmYXVsdCBmb3IgT1BFTlNTTERJUiBvbiBhbGwgVW5peCBhbmQgV2luZG93cyB0YXJnZXRzLCBpbmNsdWRpbmcgVmlzdWFsIEMgYnVpbGRzLiBIb3dldmVyLCBzb21lIGJ1aWxkIGluc3RydWN0aW9ucyBmb3IgdGhlIGRpdmVyc2UgV2luZG93cyB0YXJnZXRzIG9uIDEuMC4yIGVuY291cmFnZSB5b3UgdG8gc3BlY2lmeSB5b3VyIG93biAtLXByZWZpeC4gT3BlblNTTCB2ZXJzaW9ucyAxLjEuMSwgMS4xLjAgYW5kIDEuMC4yIGFyZSBhZmZlY3RlZCBieSB0aGlzIGlzc3VlLiBEdWUgdG8gdGhlIGxpbWl0ZWQgc2NvcGUgb2YgYWZmZWN0ZWQgZGVwbG95bWVudHMgdGhpcyBoYXMgYmVlbiBhc3Nlc3NlZCBhcyBsb3cgc2V2ZXJpdHkgYW5kIHRoZXJlZm9yZSB3ZSBhcmUgbm90IGNyZWF0aW5nIG5ldyByZWxlYXNlcyBhdCB0aGlzIHRpbWUuIEZpeGVkIGluIE9wZW5TU0wgMS4xLjFkIChBZmZlY3RlZCAxLjEuMS0xLjEuMWMpLiBGaXhlZCBpbiBPcGVuU1NMIDEuMS4wbCAoQWZmZWN0ZWQgMS4xLjAtMS4xLjBrKS4gRml4ZWQgaW4gT3BlblNTTCAxLjAuMnQgKEFmZmVjdGVkIDEuMC4yLTEuMC4ycykuXCIsXCJzZXZlcml0eVwiOlwiTG93XCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMDctMzBcIixcInVwZGF0ZWRcIjpcIjIwMTktMDgtMjNcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTI5NVwiLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vZ2l0Lm9wZW5zc2wub3JnL2dpdHdlYi8/cD1vcGVuc3NsLmdpdDthPWNvbW1pdGRpZmY7aD01NGFhOWQ1MWIwOWQ2N2U5MGRiNDQzZjY4MmNmYWNlNzk1ZjVhZjllXCIsXCJodHRwczovL2dpdC5vcGVuc3NsLm9yZy9naXR3ZWIvP3A9b3BlbnNzbC5naXQ7YT1jb21taXRkaWZmO2g9YjE1YTE5YzE0ODM4NGU3MzMzOGFhN2M1YjEyNjUyMTM4ZTM1ZWQyOFwiLFwiaHR0cHM6Ly9naXQub3BlbnNzbC5vcmcvZ2l0d2ViLz9wPW9wZW5zc2wuZ2l0O2E9Y29tbWl0ZGlmZjtoPWQzMzNlYmFmOWM3NzMzMjc1NGE5ZDVlMTExZTJmNTNlMWRlNTRmZGRcIixcImh0dHBzOi8vZ2l0Lm9wZW5zc2wub3JnL2dpdHdlYi8/cD1vcGVuc3NsLmdpdDthPWNvbW1pdGRpZmY7aD1lMzJiYzg1NWE4MWEyZDQ4ZDIxNWM1MDZiZGViNGY1OTgwNDVmN2U5XCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0VXQzQyVVhMNUdIVFU1Rzc3VktCRjZKWVVVTkdTSE9NL1wiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9ZM0lWRkdTRVJBWkxOSkNLMzVURU0yUjQ3MjZYSUgzWi9cIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvWkJFVjVRR0RSRlVaRE1ORUNGWFVTTjVGTVlPWkRFNFYvXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDE5MDgyMy0wMDA2L1wiLFwiaHR0cHM6Ly9zdXBwb3J0LmY1LmNvbS9jc3AvYXJ0aWNsZS9LOTQwNDEzNTRcIixcImh0dHBzOi8vc3VwcG9ydC5mNS5jb20vY3NwL2FydGljbGUvSzk0MDQxMzU0P3V0bV9zb3VyY2U9ZjVzdXBwb3J0JmFtcDt1dG1fbWVkaXVtPVJTU1wiLFwiaHR0cHM6Ly93d3cub3BlbnNzbC5vcmcvbmV3cy9zZWNhZHYvMjAxOTA3MzAudHh0XCIsXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3NlY3VyaXR5LWFsZXJ0cy9jcHVhcHIyMDIwLmh0bWxcIixcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vc2VjdXJpdHktYWxlcnRzL2NwdWphbjIwMjAuaHRtbFwiLFwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS90ZWNobmV0d29yay9zZWN1cml0eS1hZHZpc29yeS9jcHVvY3QyMDE5LTUwNzI4MzIuaHRtbFwiLFwiaHR0cHM6Ly93d3cudGVuYWJsZS5jb20vc2VjdXJpdHkvdG5zLTIwMTktMDhcIixcImh0dHBzOi8vd3d3LnRlbmFibGUuY29tL3NlY3VyaXR5L3Rucy0yMDE5LTA5XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0xNTUyXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NSxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAyMC0xNzUyIGFmZmVjdHMgbGliYy1iaW5cIixcImlkXCI6XCIyMzUwM1wiLFwiZmlyZWR0aW1lc1wiOjEyfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImxpYmMtYmluXCIsXCJzb3VyY2VcIjpcImdsaWJjXCIsXCJ2ZXJzaW9uXCI6XCIyLjI3LTN1YnVudHUxXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDIuMzIuMFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwiaGlnaFwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjMuNzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMjAtMTc1MlwiLFwidGl0bGVcIjpcIkNWRS0yMDIwLTE3NTIgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIG1lZGl1bS5cIixcInJhdGlvbmFsZVwiOlwiQSB1c2UtYWZ0ZXItZnJlZSB2dWxuZXJhYmlsaXR5IGludHJvZHVjZWQgaW4gZ2xpYmMgdXBzdHJlYW0gdmVyc2lvbiAyLjE0IHdhcyBmb3VuZCBpbiB0aGUgd2F5IHRoZSB0aWxkZSBleHBhbnNpb24gd2FzIGNhcnJpZWQgb3V0LiBEaXJlY3RvcnkgcGF0aHMgY29udGFpbmluZyBhbiBpbml0aWFsIHRpbGRlIGZvbGxvd2VkIGJ5IGEgdmFsaWQgdXNlcm5hbWUgd2VyZSBhZmZlY3RlZCBieSB0aGlzIGlzc3VlLiBBIGxvY2FsIGF0dGFja2VyIGNvdWxkIGV4cGxvaXQgdGhpcyBmbGF3IGJ5IGNyZWF0aW5nIGEgc3BlY2lhbGx5IGNyYWZ0ZWQgcGF0aCB0aGF0LCB3aGVuIHByb2Nlc3NlZCBieSB0aGUgZ2xvYiBmdW5jdGlvbiwgd291bGQgcG90ZW50aWFsbHkgbGVhZCB0byBhcmJpdHJhcnkgY29kZSBleGVjdXRpb24uIFRoaXMgd2FzIGZpeGVkIGluIHZlcnNpb24gMi4zMi5cIixcInNldmVyaXR5XCI6XCJMb3dcIixcInB1Ymxpc2hlZFwiOlwiMjAyMC0wNC0zMFwiLFwidXBkYXRlZFwiOlwiMjAyMC0wNS0xOFwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtNDE2XCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWd6aWxsYS5yZWRoYXQuY29tL3Nob3dfYnVnLmNnaT9pZD1DVkUtMjAyMC0xNzUyXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDIwMDUxMS0wMDA1L1wiLFwiaHR0cHM6Ly9zb3VyY2V3YXJlLm9yZy9idWd6aWxsYS9zaG93X2J1Zy5jZ2k/aWQ9MjU0MTRcIixcImh0dHBzOi8vc291cmNld2FyZS5vcmcvZ2l0L2dpdHdlYi5jZ2k/cD1nbGliYy5naXQ7aD1kZGM2NTBlOWIzZGM5MTZlYWI0MTdjZTlmNzllNjczMzdiMDUwMzVjXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAyMC0xNzUyXCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAyMC9DVkUtMjAyMC0xNzUyLmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMjAtMTc1MlwiLFwiaHR0cHM6Ly9zb3VyY2V3YXJlLm9yZy9naXQvP3A9Z2xpYmMuZ2l0O2E9Y29tbWl0ZGlmZjtoPTI2M2U2MTc1OTk5YmM3ZjVhZGI4YjMyZmQxMmZjZmFlM2YwYmIwNWE7aHA9MzdkYjQ1MzlkZDhiNWMwOThkOTIzNTI0OWM1ZDJhZWRhYTY3ZDdkMVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjUsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMjAtMTc1MiBhZmZlY3RzIG11bHRpYXJjaC1zdXBwb3J0XCIsXCJpZFwiOlwiMjM1MDNcIixcImZpcmVkdGltZXNcIjoxN30sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJtdWx0aWFyY2gtc3VwcG9ydFwiLFwic291cmNlXCI6XCJnbGliY1wiLFwidmVyc2lvblwiOlwiMi4yNy0zdWJ1bnR1MVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3MgdGhhbiAyLjMyLjBcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImhpZ2hcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCIzLjcwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDIwLTE3NTJcIixcInRpdGxlXCI6XCJDVkUtMjAyMC0xNzUyIG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBtZWRpdW0uXCIsXCJyYXRpb25hbGVcIjpcIkEgdXNlLWFmdGVyLWZyZWUgdnVsbmVyYWJpbGl0eSBpbnRyb2R1Y2VkIGluIGdsaWJjIHVwc3RyZWFtIHZlcnNpb24gMi4xNCB3YXMgZm91bmQgaW4gdGhlIHdheSB0aGUgdGlsZGUgZXhwYW5zaW9uIHdhcyBjYXJyaWVkIG91dC4gRGlyZWN0b3J5IHBhdGhzIGNvbnRhaW5pbmcgYW4gaW5pdGlhbCB0aWxkZSBmb2xsb3dlZCBieSBhIHZhbGlkIHVzZXJuYW1lIHdlcmUgYWZmZWN0ZWQgYnkgdGhpcyBpc3N1ZS4gQSBsb2NhbCBhdHRhY2tlciBjb3VsZCBleHBsb2l0IHRoaXMgZmxhdyBieSBjcmVhdGluZyBhIHNwZWNpYWxseSBjcmFmdGVkIHBhdGggdGhhdCwgd2hlbiBwcm9jZXNzZWQgYnkgdGhlIGdsb2IgZnVuY3Rpb24sIHdvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYXJiaXRyYXJ5IGNvZGUgZXhlY3V0aW9uLiBUaGlzIHdhcyBmaXhlZCBpbiB2ZXJzaW9uIDIuMzIuXCIsXCJzZXZlcml0eVwiOlwiTG93XCIsXCJwdWJsaXNoZWRcIjpcIjIwMjAtMDQtMzBcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDUtMThcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTQxNlwiLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9Q1ZFLTIwMjAtMTc1MlwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAyMDA1MTEtMDAwNS9cIixcImh0dHBzOi8vc291cmNld2FyZS5vcmcvYnVnemlsbGEvc2hvd19idWcuY2dpP2lkPTI1NDE0XCIsXCJodHRwczovL3NvdXJjZXdhcmUub3JnL2dpdC9naXR3ZWIuY2dpP3A9Z2xpYmMuZ2l0O2g9ZGRjNjUwZTliM2RjOTE2ZWFiNDE3Y2U5Zjc5ZTY3MzM3YjA1MDM1Y1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMjAtMTc1MlwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMjAvQ1ZFLTIwMjAtMTc1Mi5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDIwLTE3NTJcIixcImh0dHBzOi8vc291cmNld2FyZS5vcmcvZ2l0Lz9wPWdsaWJjLmdpdDthPWNvbW1pdGRpZmY7aD0yNjNlNjE3NTk5OWJjN2Y1YWRiOGIzMmZkMTJmY2ZhZTNmMGJiMDVhO2hwPTM3ZGI0NTM5ZGQ4YjVjMDk4ZDkyMzUyNDljNWQyYWVkYWE2N2Q3ZDFcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE5NjQ1IGFmZmVjdHMgbGlic3FsaXRlMy0wXCIsXCJpZFwiOlwiMjM1MDNcIixcImZpcmVkdGltZXNcIjoxOH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJzcWxpdGUzLTBcIixcInNvdXJjZVwiOlwic3FsaXRlM1wiLFwidmVyc2lvblwiOlwiMy4yMi4wLTF1YnVudHUwLjNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCIyLjEwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTE5NjQ1XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktMTk2NDUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiYWx0ZXIuYyBpbiBTUUxpdGUgdGhyb3VnaCAzLjMwLjEgYWxsb3dzIGF0dGFja2VycyB0byB0cmlnZ2VyIGluZmluaXRlIHJlY3Vyc2lvbiB2aWEgY2VydGFpbiB0eXBlcyBvZiBzZWxmLXJlZmVyZW50aWFsIHZpZXdzIGluIGNvbmp1bmN0aW9uIHdpdGggQUxURVIgVEFCTEUgc3RhdGVtZW50cy5cIixcInNldmVyaXR5XCI6XCJMb3dcIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0xMi0wOVwiLFwidXBkYXRlZFwiOlwiMjAxOS0xMi0yM1wiLFwic3RhdGVcIjpcIlVuZml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS02NzRcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpdGh1Yi5jb20vc3FsaXRlL3NxbGl0ZS9jb21taXQvMzgwOTY5NjFjN2NkMTA5MTEwYWMyMWQzZWQ3ZGFkN2UwY2IwYWUwNlwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTEyMjMtMDAwMS9cIixcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vc2VjdXJpdHktYWxlcnRzL2NwdWFwcjIwMjAuaHRtbFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTk2NDVcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTE5NjQ1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTktMTk2NDVcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE5NjQ1IGFmZmVjdHMgc3FsaXRlM1wiLFwiaWRcIjpcIjIzNTAzXCIsXCJmaXJlZHRpbWVzXCI6MTl9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwic3FsaXRlM1wiLFwidmVyc2lvblwiOlwiMy4yMi4wLTF1YnVudHUwLjNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCIyLjEwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTE5NjQ1XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktMTk2NDUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiYWx0ZXIuYyBpbiBTUUxpdGUgdGhyb3VnaCAzLjMwLjEgYWxsb3dzIGF0dGFja2VycyB0byB0cmlnZ2VyIGluZmluaXRlIHJlY3Vyc2lvbiB2aWEgY2VydGFpbiB0eXBlcyBvZiBzZWxmLXJlZmVyZW50aWFsIHZpZXdzIGluIGNvbmp1bmN0aW9uIHdpdGggQUxURVIgVEFCTEUgc3RhdGVtZW50cy5cIixcInNldmVyaXR5XCI6XCJMb3dcIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0xMi0wOVwiLFwidXBkYXRlZFwiOlwiMjAxOS0xMi0yM1wiLFwic3RhdGVcIjpcIlVuZml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS02NzRcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpdGh1Yi5jb20vc3FsaXRlL3NxbGl0ZS9jb21taXQvMzgwOTY5NjFjN2NkMTA5MTEwYWMyMWQzZWQ3ZGFkN2UwY2IwYWUwNlwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTEyMjMtMDAwMS9cIixcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vc2VjdXJpdHktYWxlcnRzL2NwdWFwcjIwMjAuaHRtbFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTk2NDVcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTE5NjQ1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTktMTk2NDVcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDEzLTQyMzUgYWZmZWN0cyBsb2dpblwiLFwiaWRcIjpcIjIzNTAzXCIsXCJmaXJlZHRpbWVzXCI6MjB9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwibG9naW5cIixcInNvdXJjZVwiOlwic2hhZG93XCIsXCJ2ZXJzaW9uXCI6XCIxOjQuNS0xdWJ1bnR1MlwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjMuMzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTMtNDIzNVwiLFwidGl0bGVcIjpcIkNWRS0yMDEzLTQyMzUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwic2hhZG93OiBUT0NUT1UgKHRpbWUtb2YtY2hlY2sgdGltZS1vZi11c2UpIHJhY2UgY29uZGl0aW9uIHdoZW4gY29weWluZyBhbmQgcmVtb3ZpbmcgZGlyZWN0b3J5IHRyZWVzXCIsXCJzZXZlcml0eVwiOlwiTG93XCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMTItMDNcIixcInVwZGF0ZWRcIjpcIjIwMTktMTItMTNcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMzY3XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz03Nzg5NTBcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9ODg0NjU4XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYWNjZXNzLnJlZGhhdC5jb20vc2VjdXJpdHkvY3ZlL2N2ZS0yMDEzLTQyMzVcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9Q1ZFLTIwMTMtNDIzNVwiLFwiaHR0cHM6Ly9zZWN1cml0eS10cmFja2VyLmRlYmlhbi5vcmcvdHJhY2tlci9DVkUtMjAxMy00MjM1XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxMy00MjM1XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxMy9DVkUtMjAxMy00MjM1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTMtNDIzNVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjUsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTMtNDIzNSBhZmZlY3RzIHBhc3N3ZFwiLFwiaWRcIjpcIjIzNTAzXCIsXCJmaXJlZHRpbWVzXCI6MjF9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwicGFzc3dkXCIsXCJzb3VyY2VcIjpcInNoYWRvd1wiLFwidmVyc2lvblwiOlwiMTo0LjUtMXVidW50dTJcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCIzLjMwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDEzLTQyMzVcIixcInRpdGxlXCI6XCJDVkUtMjAxMy00MjM1IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcInNoYWRvdzogVE9DVE9VICh0aW1lLW9mLWNoZWNrIHRpbWUtb2YtdXNlKSByYWNlIGNvbmRpdGlvbiB3aGVuIGNvcHlpbmcgYW5kIHJlbW92aW5nIGRpcmVjdG9yeSB0cmVlc1wiLFwic2V2ZXJpdHlcIjpcIkxvd1wiLFwicHVibGlzaGVkXCI6XCIyMDE5LTEyLTAzXCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTEyLTEzXCIsXCJzdGF0ZVwiOlwiVW5maXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTM2N1wiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9Nzc4OTUwXCIsXCJodHRwczovL2J1Z3ppbGxhLnJlZGhhdC5jb20vc2hvd19idWcuY2dpP2lkPTg4NDY1OFwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2FjY2Vzcy5yZWRoYXQuY29tL3NlY3VyaXR5L2N2ZS9jdmUtMjAxMy00MjM1XCIsXCJodHRwczovL2J1Z3ppbGxhLnJlZGhhdC5jb20vc2hvd19idWcuY2dpP2lkPUNWRS0yMDEzLTQyMzVcIixcImh0dHBzOi8vc2VjdXJpdHktdHJhY2tlci5kZWJpYW4ub3JnL3RyYWNrZXIvQ1ZFLTIwMTMtNDIzNVwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTMtNDIzNVwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTMvQ1ZFLTIwMTMtNDIzNS5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDEzLTQyMzVcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDEzLTQyMzUgYWZmZWN0cyBsb2dpblwiLFwiaWRcIjpcIjIzNTAzXCIsXCJmaXJlZHRpbWVzXCI6MjB9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwibG9naW5cIixcInNvdXJjZVwiOlwic2hhZG93XCIsXCJ2ZXJzaW9uXCI6XCIxOjQuNS0xdWJ1bnR1MlwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjMuMzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTMtNDIzNVwiLFwidGl0bGVcIjpcIkNWRS0yMDEzLTQyMzUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwic2hhZG93OiBUT0NUT1UgKHRpbWUtb2YtY2hlY2sgdGltZS1vZi11c2UpIHJhY2UgY29uZGl0aW9uIHdoZW4gY29weWluZyBhbmQgcmVtb3ZpbmcgZGlyZWN0b3J5IHRyZWVzXCIsXCJzZXZlcml0eVwiOlwiTG93XCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMTItMDNcIixcInVwZGF0ZWRcIjpcIjIwMTktMTItMTNcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMzY3XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz03Nzg5NTBcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9ODg0NjU4XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYWNjZXNzLnJlZGhhdC5jb20vc2VjdXJpdHkvY3ZlL2N2ZS0yMDEzLTQyMzVcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9Q1ZFLTIwMTMtNDIzNVwiLFwiaHR0cHM6Ly9zZWN1cml0eS10cmFja2VyLmRlYmlhbi5vcmcvdHJhY2tlci9DVkUtMjAxMy00MjM1XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxMy00MjM1XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxMy9DVkUtMjAxMy00MjM1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTMtNDIzNVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMTAwMzAxMCBhZmZlY3RzIGdpdFwiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MTYyfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImdpdFwiLFwidmVyc2lvblwiOlwiMToyLjE3LjEtMXVidW50dTAuN1wiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAzLjkuMVwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCI0LjMwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwicmVxdWlyZWRcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcImxvd1wiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNC4zMDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xMDAzMDEwXCIsXCJ0aXRsZVwiOlwiQSBjcm9zcy1zaXRlIHJlcXVlc3QgZm9yZ2VyeSB2dWxuZXJhYmlsaXR5IGV4aXN0cyBpbiBKZW5raW5zIEdpdCBQbHVnaW4gMy45LjEgYW5kIGVhcmxpZXIgaW4gc3JjL21haW4vamF2YS9odWRzb24vcGx1Z2lucy9naXQvR2l0VGFnQWN0aW9uLmphdmEgdGhhdCBhbGxvd3MgYXR0YWNrZXJzIHRvIGNyZWF0ZSBhIEdpdCB0YWcgaW4gYSB3b3Jrc3BhY2UgYW5kIGF0dGFjaCBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIHRvIGEgYnVpbGQgcmVjb3JkLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE5LTAyLTA2XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA0LTI2XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0zNTJcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2FjY2Vzcy5yZWRoYXQuY29tL2VycmF0YS9SSEJBLTIwMTk6MDMyNlwiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9lcnJhdGEvUkhCQS0yMDE5OjAzMjdcIixcImh0dHBzOi8vamVua2lucy5pby9zZWN1cml0eS9hZHZpc29yeS8yMDE5LTAxLTI4LyNTRUNVUklUWS0xMDk1XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0xMDAzMDEwXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTAsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMjAtOTM2NiBhZmZlY3RzIHNjcmVlblwiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6Nzd9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwic2NyZWVuXCIsXCJ2ZXJzaW9uXCI6XCI0LjYuMi0xdWJ1bnR1MVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3MgdGhhbiA0LjguMFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDIwLTkzNjZcIixcInRpdGxlXCI6XCJBIGJ1ZmZlciBvdmVyZmxvdyB3YXMgZm91bmQgaW4gdGhlIHdheSBHTlUgU2NyZWVuIGJlZm9yZSA0LjguMCB0cmVhdGVkIHRoZSBzcGVjaWFsIGVzY2FwZSBPU0MgNDkuIFNwZWNpYWxseSBjcmFmdGVkIG91dHB1dCwgb3IgYSBzcGVjaWFsIHByb2dyYW0sIGNvdWxkIGNvcnJ1cHQgbWVtb3J5IGFuZCBjcmFzaCBTY3JlZW4gb3IgcG9zc2libHkgaGF2ZSB1bnNwZWNpZmllZCBvdGhlciBpbXBhY3QuXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDIwLTAyLTI0XCIsXCJ1cGRhdGVkXCI6XCIyMDIwLTAzLTMwXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMjBcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAyMC8wMi8yNS8xXCIsXCJodHRwczovL2xpc3RzLmdudS5vcmcvYXJjaGl2ZS9odG1sL3NjcmVlbi1kZXZlbC8yMDIwLTAyL21zZzAwMDA3Lmh0bWxcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMjAwMy02MlwiLFwiaHR0cHM6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDIwLzAyLzA2LzNcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDIwLTkzNjZcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMCxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xNTg0NyBhZmZlY3RzIGdjY1wiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6ODZ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiZ2NjXCIsXCJzb3VyY2VcIjpcImdjYy1kZWZhdWx0c1wiLFwidmVyc2lvblwiOlwiNDo3LjQuMC0xdWJ1bnR1Mi4zXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDEwLjBcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNVwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy41MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xNTg0N1wiLFwidGl0bGVcIjpcIkNWRS0yMDE5LTE1ODQ3IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBuZWdsaWdpYmxlLlwiLFwicmF0aW9uYWxlXCI6XCJUaGUgUE9XRVI5IGJhY2tlbmQgaW4gR05VIENvbXBpbGVyIENvbGxlY3Rpb24gKEdDQykgYmVmb3JlIHZlcnNpb24gMTAgY291bGQgb3B0aW1pemUgbXVsdGlwbGUgY2FsbHMgb2YgdGhlIF9fYnVpbHRpbl9kYXJuIGludHJpbnNpYyBpbnRvIGEgc2luZ2xlIGNhbGwsIHRodXMgcmVkdWNpbmcgdGhlIGVudHJvcHkgb2YgdGhlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLiBUaGlzIG9jY3VycmVkIGJlY2F1c2UgYSB2b2xhdGlsZSBvcGVyYXRpb24gd2FzIG5vdCBzcGVjaWZpZWQuIEZvciBleGFtcGxlLCB3aXRoaW4gYSBzaW5nbGUgZXhlY3V0aW9uIG9mIGEgcHJvZ3JhbSwgdGhlIG91dHB1dCBvZiBldmVyeSBfX2J1aWx0aW5fZGFybigpIGNhbGwgbWF5IGJlIHRoZSBzYW1lLlwiLFwic2V2ZXJpdHlcIjpcIkhpZ2hcIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0wOS0wMlwiLFwidXBkYXRlZFwiOlwiMjAyMC0wNS0yNlwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMzMxXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9nY2MuZ251Lm9yZy9idWd6aWxsYS9zaG93X2J1Zy5jZ2k/aWQ9OTE0ODFcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDE5LTEwL21zZzAwMDU2Lmh0bWxcIixcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAxOS0xMC9tc2cwMDA1Ny5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMjAtMDUvbXNnMDAwNTguaHRtbFwiLFwiaHR0cHM6Ly9nY2MuZ251Lm9yZy9idWd6aWxsYS9zaG93X2J1Zy5jZ2k/aWQ9OTE0ODFcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTE1ODQ3XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOS9DVkUtMjAxOS0xNTg0Ny5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE5LTE1ODQ3XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxNy0xNDk4OCBhZmZlY3RzIGxpYm9wZW5leHIyMlwiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MTg5fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImxpYm9wZW5leHIyMlwiLFwic291cmNlXCI6XCJvcGVuZXhyXCIsXCJ2ZXJzaW9uXCI6XCIyLjIuMC0xMS4xdWJ1bnR1MS4yXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbWF0Y2hlcyBhIHZ1bG5lcmFibGUgdmVyc2lvblwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI0LjMwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcInJlcXVpcmVkXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI1LjUwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE3LTE0OTg4XCIsXCJ0aXRsZVwiOlwiKiogRElTUFVURUQgKiogSGVhZGVyOjpyZWFkZnJvbSBpbiBJbG1JbWYvSW1mSGVhZGVyLmNwcCBpbiBPcGVuRVhSIDIuMi4wIGFsbG93cyByZW1vdGUgYXR0YWNrZXJzIHRvIGNhdXNlIGEgZGVuaWFsIG9mIHNlcnZpY2UgKGV4Y2Vzc2l2ZSBtZW1vcnkgYWxsb2NhdGlvbikgdmlhIGEgY3JhZnRlZCBmaWxlIHRoYXQgaXMgYWNjZXNzZWQgd2l0aCB0aGUgSW1mT3BlbklucHV0RmlsZSBmdW5jdGlvbiBpbiBJbG1JbWYvSW1mQ1JnYmFGaWxlLmNwcC4gTk9URTogVGhlIG1haW50YWluZXIgYW5kIG11bHRpcGxlIHRoaXJkIHBhcnRpZXMgYmVsaWV2ZSB0aGF0IHRoaXMgdnVsbmVyYWJpbGl0eSBpc24ndCB2YWxpZC5cIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxNy0xMC0wM1wiLFwidXBkYXRlZFwiOlwiMjAxOS0wOS0yM1wiLFwic3RhdGVcIjpcIlBlbmRpbmcgY29uZmlybWF0aW9uXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtNDAwXCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDE5LTA4L21zZzAwMDYzLmh0bWxcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZXhyL29wZW5leHIvaXNzdWVzLzI0OFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTctMTQ5ODhcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDIwLTE5MjcgYWZmZWN0cyBhcGFjaGUyXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjoxOTB9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiYXBhY2hlMlwiLFwidmVyc2lvblwiOlwiMi40LjI5LTF1YnVudHU0LjEzXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgdW5maXhlZFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCI1LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDIwLTE5MjdcIixcInRpdGxlXCI6XCJDVkUtMjAyMC0xOTI3IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIkluIEFwYWNoZSBIVFRQIFNlcnZlciAyLjQuMCB0byAyLjQuNDEsIHJlZGlyZWN0cyBjb25maWd1cmVkIHdpdGggbW9kX3Jld3JpdGUgdGhhdCB3ZXJlIGludGVuZGVkIHRvIGJlIHNlbGYtcmVmZXJlbnRpYWwgbWlnaHQgYmUgZm9vbGVkIGJ5IGVuY29kZWQgbmV3bGluZXMgYW5kIHJlZGlyZWN0IGluc3RlYWQgdG8gYW4gYW4gdW5leHBlY3RlZCBVUkwgd2l0aGluIHRoZSByZXF1ZXN0IFVSTC5cIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAyMC0wNC0wMlwiLFwidXBkYXRlZFwiOlwiMjAyMC0wNC0wM1wiLFwic3RhdGVcIjpcIlVuZml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS02MDFcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMjAtMDUvbXNnMDAwMDIuaHRtbFwiLFwiaHR0cDovL3d3dy5vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMjAvMDQvMDMvMVwiLFwiaHR0cDovL3d3dy5vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMjAvMDQvMDQvMVwiLFwiaHR0cHM6Ly9odHRwZC5hcGFjaGUub3JnL3NlY3VyaXR5L3Z1bG5lcmFiaWxpdGllc18yNC5odG1sXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvcjEwYjg1M2VhODdkZDE1MGIwZTc2ZmRhM2Y4MjU0ZGZkYjIzZGQwNWZhNTU1OTY0MDViNTg0NzhlQCUzQ2N2cy5odHRwZC5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvcjE3MTk2NzUzMDZkZmJlYWNlZmYzZGM2M2NjYWQzZGUyZDU2MTU5MTljYTNjMTMyNzY5NDhiOWFjQCUzQ2Rldi5odHRwZC5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvcjUyYTUyZmQ2MGEyNThmNTk5OWE4ZmE1NDI0YjMwZDlmZDc5NTg4NWY5ZmY0ODI4ZDg4OWNkMjAxQCUzQ2Rldi5odHRwZC5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvcjcwYmE2NTJiNzliYTIyNGIyY2JjMGExODMwNzhiM2E0OWRmNzgzYjQxOTkwM2UzZGNmNGQ3OGM3QCUzQ2N2cy5odHRwZC5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDIwMDQxMy0wMDAyL1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMjAtMTkyN1wiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMjAvQ1ZFLTIwMjAtMTkyNy5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDIwLTE5MjdcIixcImh0dHBzOi8vaHR0cGQuYXBhY2hlLm9yZy9zZWN1cml0eS92dWxuZXJhYmlsaXRpZXNfMjQuaHRtbCNDVkUtMjAyMC0xOTI3XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAyMC0xOTI3IGFmZmVjdHMgYXBhY2hlMi1iaW5cIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjE5MX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJhcGFjaGUyLWJpblwiLFwic291cmNlXCI6XCJhcGFjaGUyXCIsXCJ2ZXJzaW9uXCI6XCIyLjQuMjktMXVidW50dTQuMTNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjUuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMjAtMTkyN1wiLFwidGl0bGVcIjpcIkNWRS0yMDIwLTE5Mjcgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiSW4gQXBhY2hlIEhUVFAgU2VydmVyIDIuNC4wIHRvIDIuNC40MSwgcmVkaXJlY3RzIGNvbmZpZ3VyZWQgd2l0aCBtb2RfcmV3cml0ZSB0aGF0IHdlcmUgaW50ZW5kZWQgdG8gYmUgc2VsZi1yZWZlcmVudGlhbCBtaWdodCBiZSBmb29sZWQgYnkgZW5jb2RlZCBuZXdsaW5lcyBhbmQgcmVkaXJlY3QgaW5zdGVhZCB0byBhbiBhbiB1bmV4cGVjdGVkIFVSTCB3aXRoaW4gdGhlIHJlcXVlc3QgVVJMLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDIwLTA0LTAyXCIsXCJ1cGRhdGVkXCI6XCIyMDIwLTA0LTAzXCIsXCJzdGF0ZVwiOlwiVW5maXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTYwMVwiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAyMC0wNS9tc2cwMDAwMi5odG1sXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAyMC8wNC8wMy8xXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAyMC8wNC8wNC8xXCIsXCJodHRwczovL2h0dHBkLmFwYWNoZS5vcmcvc2VjdXJpdHkvdnVsbmVyYWJpbGl0aWVzXzI0Lmh0bWxcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC9yMTBiODUzZWE4N2RkMTUwYjBlNzZmZGEzZjgyNTRkZmRiMjNkZDA1ZmE1NTU5NjQwNWI1ODQ3OGVAJTNDY3ZzLmh0dHBkLmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC9yMTcxOTY3NTMwNmRmYmVhY2VmZjNkYzYzY2NhZDNkZTJkNTYxNTkxOWNhM2MxMzI3Njk0OGI5YWNAJTNDZGV2Lmh0dHBkLmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC9yNTJhNTJmZDYwYTI1OGY1OTk5YThmYTU0MjRiMzBkOWZkNzk1ODg1ZjlmZjQ4MjhkODg5Y2QyMDFAJTNDZGV2Lmh0dHBkLmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC9yNzBiYTY1MmI3OWJhMjI0YjJjYmMwYTE4MzA3OGIzYTQ5ZGY3ODNiNDE5OTAzZTNkY2Y0ZDc4YzdAJTNDY3ZzLmh0dHBkLmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vc2VjdXJpdHkubmV0YXBwLmNvbS9hZHZpc29yeS9udGFwLTIwMjAwNDEzLTAwMDIvXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAyMC0xOTI3XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAyMC9DVkUtMjAyMC0xOTI3Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMjAtMTkyN1wiLFwiaHR0cHM6Ly9odHRwZC5hcGFjaGUub3JnL3NlY3VyaXR5L3Z1bG5lcmFiaWxpdGllc18yNC5odG1sI0NWRS0yMDIwLTE5MjdcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDIwLTE5MjcgYWZmZWN0cyBhcGFjaGUyLWRhdGFcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjE5Mn0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJhcGFjaGUyLWRhdGFcIixcInNvdXJjZVwiOlwiYXBhY2hlMlwiLFwidmVyc2lvblwiOlwiMi40LjI5LTF1YnVudHU0LjEzXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFsbFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNS44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAyMC0xOTI3XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMjAtMTkyNyBvbiBVYnVudHUgMTguMDQgTFRTIChiaW9uaWMpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJJbiBBcGFjaGUgSFRUUCBTZXJ2ZXIgMi40LjAgdG8gMi40LjQxLCByZWRpcmVjdHMgY29uZmlndXJlZCB3aXRoIG1vZF9yZXdyaXRlIHRoYXQgd2VyZSBpbnRlbmRlZCB0byBiZSBzZWxmLXJlZmVyZW50aWFsIG1pZ2h0IGJlIGZvb2xlZCBieSBlbmNvZGVkIG5ld2xpbmVzIGFuZCByZWRpcmVjdCBpbnN0ZWFkIHRvIGFuIGFuIHVuZXhwZWN0ZWQgVVJMIHdpdGhpbiB0aGUgcmVxdWVzdCBVUkwuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMjAtMDQtMDJcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDQtMDNcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtNjAxXCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDIwLTA1L21zZzAwMDAyLmh0bWxcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDIwLzA0LzAzLzFcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDIwLzA0LzA0LzFcIixcImh0dHBzOi8vaHR0cGQuYXBhY2hlLm9yZy9zZWN1cml0eS92dWxuZXJhYmlsaXRpZXNfMjQuaHRtbFwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3IxMGI4NTNlYTg3ZGQxNTBiMGU3NmZkYTNmODI1NGRmZGIyM2RkMDVmYTU1NTk2NDA1YjU4NDc4ZUAlM0NjdnMuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3IxNzE5Njc1MzA2ZGZiZWFjZWZmM2RjNjNjY2FkM2RlMmQ1NjE1OTE5Y2EzYzEzMjc2OTQ4YjlhY0AlM0NkZXYuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3I1MmE1MmZkNjBhMjU4ZjU5OTlhOGZhNTQyNGIzMGQ5ZmQ3OTU4ODVmOWZmNDgyOGQ4ODljZDIwMUAlM0NkZXYuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3I3MGJhNjUyYjc5YmEyMjRiMmNiYzBhMTgzMDc4YjNhNDlkZjc4M2I0MTk5MDNlM2RjZjRkNzhjN0AlM0NjdnMuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAyMDA0MTMtMDAwMi9cIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDIwLTE5MjdcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDIwL0NWRS0yMDIwLTE5MjcuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAyMC0xOTI3XCIsXCJodHRwczovL2h0dHBkLmFwYWNoZS5vcmcvc2VjdXJpdHkvdnVsbmVyYWJpbGl0aWVzXzI0Lmh0bWwjQ1ZFLTIwMjAtMTkyN1wiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMjAtMTkyNyBhZmZlY3RzIGFwYWNoZTItdXRpbHNcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjE5M30sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJhcGFjaGUyLXV0aWxzXCIsXCJzb3VyY2VcIjpcImFwYWNoZTJcIixcInZlcnNpb25cIjpcIjIuNC4yOS0xdWJ1bnR1NC4xM1wiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNS44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAyMC0xOTI3XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMjAtMTkyNyBvbiBVYnVudHUgMTguMDQgTFRTIChiaW9uaWMpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJJbiBBcGFjaGUgSFRUUCBTZXJ2ZXIgMi40LjAgdG8gMi40LjQxLCByZWRpcmVjdHMgY29uZmlndXJlZCB3aXRoIG1vZF9yZXdyaXRlIHRoYXQgd2VyZSBpbnRlbmRlZCB0byBiZSBzZWxmLXJlZmVyZW50aWFsIG1pZ2h0IGJlIGZvb2xlZCBieSBlbmNvZGVkIG5ld2xpbmVzIGFuZCByZWRpcmVjdCBpbnN0ZWFkIHRvIGFuIGFuIHVuZXhwZWN0ZWQgVVJMIHdpdGhpbiB0aGUgcmVxdWVzdCBVUkwuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMjAtMDQtMDJcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDQtMDNcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtNjAxXCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDIwLTA1L21zZzAwMDAyLmh0bWxcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDIwLzA0LzAzLzFcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDIwLzA0LzA0LzFcIixcImh0dHBzOi8vaHR0cGQuYXBhY2hlLm9yZy9zZWN1cml0eS92dWxuZXJhYmlsaXRpZXNfMjQuaHRtbFwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3IxMGI4NTNlYTg3ZGQxNTBiMGU3NmZkYTNmODI1NGRmZGIyM2RkMDVmYTU1NTk2NDA1YjU4NDc4ZUAlM0NjdnMuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3IxNzE5Njc1MzA2ZGZiZWFjZWZmM2RjNjNjY2FkM2RlMmQ1NjE1OTE5Y2EzYzEzMjc2OTQ4YjlhY0AlM0NkZXYuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3I1MmE1MmZkNjBhMjU4ZjU5OTlhOGZhNTQyNGIzMGQ5ZmQ3OTU4ODVmOWZmNDgyOGQ4ODljZDIwMUAlM0NkZXYuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL3I3MGJhNjUyYjc5YmEyMjRiMmNiYzBhMTgzMDc4YjNhNDlkZjc4M2I0MTk5MDNlM2RjZjRkNzhjN0AlM0NjdnMuaHR0cGQuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAyMDA0MTMtMDAwMi9cIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDIwLTE5MjdcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDIwL0NWRS0yMDIwLTE5MjcuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAyMC0xOTI3XCIsXCJodHRwczovL2h0dHBkLmFwYWNoZS5vcmcvc2VjdXJpdHkvdnVsbmVyYWJpbGl0aWVzXzI0Lmh0bWwjQ1ZFLTIwMjAtMTkyN1wiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTgtMTU5MTkgYWZmZWN0cyBvcGVuc3NoLWNsaWVudFwiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MTk3fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcIm9wZW5zc2gtY2xpZW50XCIsXCJzb3VyY2VcIjpcIm9wZW5zc2hcIixcInZlcnNpb25cIjpcIjE6Ny42cDEtNHVidW50dTAuM1wiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGdyZWF0ZXIgb3IgZXF1YWwgdGhhbiA1LjkgYW5kIGxlc3Mgb3IgZXF1YWwgdGhhbiA3LjhcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNVwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibG93XCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCI1LjMwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE4LTE1OTE5XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTgtMTU5MTkgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiUmVtb3RlbHkgb2JzZXJ2YWJsZSBiZWhhdmlvdXIgaW4gYXV0aC1nc3MyLmMgaW4gT3BlblNTSCB0aHJvdWdoIDcuOCBjb3VsZCBiZSB1c2VkIGJ5IHJlbW90ZSBhdHRhY2tlcnMgdG8gZGV0ZWN0IGV4aXN0ZW5jZSBvZiB1c2VycyBvbiBhIHRhcmdldCBzeXN0ZW0gd2hlbiBHU1MyIGlzIGluIHVzZS4gTk9URTogdGhlIGRpc2NvdmVyZXIgc3RhdGVzICdXZSB1bmRlcnN0YW5kIHRoYXQgdGhlIE9wZW5TU0ggZGV2ZWxvcGVycyBkbyBub3Qgd2FudCB0byB0cmVhdCBzdWNoIGEgdXNlcm5hbWUgZW51bWVyYXRpb24gKG9yIFxcXCJvcmFjbGVcXFwiKSBhcyBhIHZ1bG5lcmFiaWxpdHkuJ1wiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTA4LTI4XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTAzLTA3XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yMDBcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9OTA3NTAzXCIsXCJodHRwczovL2J1Z3ppbGxhLm5vdmVsbC5jb20vc2hvd19idWcuY2dpP2lkPUNWRS0yMDE4LTE1OTE5XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9zZWNsaXN0cy5vcmcvb3NzLXNlYy8yMDE4L3EzLzE4MFwiLFwiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTA1MTYzXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDE4MTIyMS0wMDAxL1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtMTU5MTlcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE4L0NWRS0yMDE4LTE1OTE5Lmh0bWxcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE4LzA4LzI3LzJcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTgtMTU5MTlcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTE1OTE5IGFmZmVjdHMgb3BlbnNzaC1zZXJ2ZXJcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjE5OH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJvcGVuc3NoLXNlcnZlclwiLFwic291cmNlXCI6XCJvcGVuc3NoXCIsXCJ2ZXJzaW9uXCI6XCIxOjcuNnAxLTR1YnVudHUwLjNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBncmVhdGVyIG9yIGVxdWFsIHRoYW4gNS45IGFuZCBsZXNzIG9yIGVxdWFsIHRoYW4gNy44XCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjVcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImxvd1wiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNS4zMDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOC0xNTkxOVwiLFwidGl0bGVcIjpcIkNWRS0yMDE4LTE1OTE5IG9uIFVidW50dSAxOC4wNCBMVFMgKGJpb25pYykgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIlJlbW90ZWx5IG9ic2VydmFibGUgYmVoYXZpb3VyIGluIGF1dGgtZ3NzMi5jIGluIE9wZW5TU0ggdGhyb3VnaCA3LjggY291bGQgYmUgdXNlZCBieSByZW1vdGUgYXR0YWNrZXJzIHRvIGRldGVjdCBleGlzdGVuY2Ugb2YgdXNlcnMgb24gYSB0YXJnZXQgc3lzdGVtIHdoZW4gR1NTMiBpcyBpbiB1c2UuIE5PVEU6IHRoZSBkaXNjb3ZlcmVyIHN0YXRlcyAnV2UgdW5kZXJzdGFuZCB0aGF0IHRoZSBPcGVuU1NIIGRldmVsb3BlcnMgZG8gbm90IHdhbnQgdG8gdHJlYXQgc3VjaCBhIHVzZXJuYW1lIGVudW1lcmF0aW9uIChvciBcXFwib3JhY2xlXFxcIikgYXMgYSB2dWxuZXJhYmlsaXR5LidcIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxOC0wOC0yOFwiLFwidXBkYXRlZFwiOlwiMjAxOS0wMy0wN1wiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMjAwXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTkwNzUwM1wiLFwiaHR0cHM6Ly9idWd6aWxsYS5ub3ZlbGwuY29tL3Nob3dfYnVnLmNnaT9pZD1DVkUtMjAxOC0xNTkxOVwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vc2VjbGlzdHMub3JnL29zcy1zZWMvMjAxOC9xMy8xODBcIixcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzEwNTE2M1wiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxODEyMjEtMDAwMS9cIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE4LTE1OTE5XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOC9DVkUtMjAxOC0xNTkxOS5odG1sXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxOC8wOC8yNy8yXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE4LTE1OTE5XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xNzU5NSBhZmZlY3RzIG5jdXJzZXMtYmFzZVwiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MjIyfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcIm5jdXJzZXMtYmFzZVwiLFwic291cmNlXCI6XCJuY3Vyc2VzXCIsXCJ2ZXJzaW9uXCI6XCI2LjEtMXVidW50dTEuMTguMDRcIixcImFyY2hpdGVjdHVyZVwiOlwiYWxsXCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDYuMS4yMDE5MTAxMlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI1LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTE3NTk1XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktMTc1OTUgb24gVWJ1bnR1IDE4LjA0IExUUyAoYmlvbmljKSAtIG5lZ2xpZ2libGUuXCIsXCJyYXRpb25hbGVcIjpcIlRoZXJlIGlzIGEgaGVhcC1iYXNlZCBidWZmZXIgb3Zlci1yZWFkIGluIHRoZSBmbXRfZW50cnkgZnVuY3Rpb24gaW4gdGluZm8vY29tcF9oYXNoLmMgaW4gdGhlIHRlcm1pbmZvIGxpYnJhcnkgaW4gbmN1cnNlcyBiZWZvcmUgNi4xLTIwMTkxMDEyLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE5LTEwLTE0XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTEyLTIzXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMjVcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwczovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTk0MjQwMVwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMTEvbXNnMDAwNTkuaHRtbFwiLFwiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDE5LTExL21zZzAwMDYxLmh0bWxcIixcImh0dHBzOi8vbGlzdHMuZ251Lm9yZy9hcmNoaXZlL2h0bWwvYnVnLW5jdXJzZXMvMjAxOS0xMC9tc2cwMDAxMy5odG1sXCIsXCJodHRwczovL2xpc3RzLmdudS5vcmcvYXJjaGl2ZS9odG1sL2J1Zy1uY3Vyc2VzLzIwMTktMTAvbXNnMDAwNDUuaHRtbFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTc1OTVcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTE3NTk1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTktMTc1OTVcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE3NTQzIGFmZmVjdHMgbGlibHo0LTFcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjI0NH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJsejQtMVwiLFwic291cmNlXCI6XCJsejRcIixcInZlcnNpb25cIjpcIjAuMH5yMTMxLTJ1YnVudHUyXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDEuOS4yXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjYuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTc1NDNcIixcInRpdGxlXCI6XCJDVkUtMjAxOS0xNzU0MyBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJMWjQgYmVmb3JlIDEuOS4yIGhhcyBhIGhlYXAtYmFzZWQgYnVmZmVyIG92ZXJmbG93IGluIExaNF93cml0ZTMyIChyZWxhdGVkIHRvIExaNF9jb21wcmVzc19kZXN0U2l6ZSksIGFmZmVjdGluZyBhcHBsaWNhdGlvbnMgdGhhdCBjYWxsIExaNF9jb21wcmVzc19mYXN0IHdpdGggYSBsYXJnZSBpbnB1dC4gKFRoaXMgaXNzdWUgY2FuIGFsc28gbGVhZCB0byBkYXRhIGNvcnJ1cHRpb24uKSBOT1RFOiB0aGUgdmVuZG9yIHN0YXRlcyBcXFwib25seSBhIGZldyBzcGVjaWZpYyAvIHVuY29tbW9uIHVzYWdlcyBvZiB0aGUgQVBJIGFyZSBhdCByaXNrLlxcXCJcIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0xMC0xNFwiLFwidXBkYXRlZFwiOlwiMjAxOS0xMC0yNFwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTIwXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL29zcy1mdXp6L2lzc3Vlcy9kZXRhaWw/aWQ9MTU5NDFcIixcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9OTQzNjgwXCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAxOS0xMC9tc2cwMDA2OS5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMTAvbXNnMDAwNzAuaHRtbFwiLFwiaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL29zcy1mdXp6L2lzc3Vlcy9kZXRhaWw/aWQ9MTU5NDFcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9sejQvbHo0L2NvbXBhcmUvdjEuOS4xLi4udjEuOS4yXCIsXCJodHRwczovL2dpdGh1Yi5jb20vbHo0L2x6NC9pc3N1ZXMvODAxXCIsXCJodHRwczovL2dpdGh1Yi5jb20vbHo0L2x6NC9wdWxsLzc1NlwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2x6NC9sejQvcHVsbC83NjBcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC8yNTAxNTU4OGI3NzBkNjc0NzBiN2JhN2VhNDlhMzA1ZDY3MzVkZDdmMDBlYWJlN2Q1MGVjMWUxN0AlM0Npc3N1ZXMuYXJyb3cuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sLzU0MzMwMmQ1NWUyZDJkYTQzMTE5OTRlOWIwZGViZGM2NzZiZjNmZDA1ZTFhMmJlMzQwN2FhMmQ2QCUzQ2lzc3Vlcy5hcnJvdy5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvNzkzMDEyNjgzZGMwZmE2ODE5YjdjMjU2MGU2Y2Y5OTA4MTEwMTRjNDBjN2Q3NTQxMjA5OWMzNTdAJTNDaXNzdWVzLmFycm93LmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vbGlzdHMuYXBhY2hlLm9yZy90aHJlYWQuaHRtbC85ZmYwNjA2ZDE2YmUyYWI2YTgxNjE5ZTFjOWUyM2MzZTI1MTc1NjYzOGUzNjI3MmM4YzhiN2ZhM0AlM0Npc3N1ZXMuYXJyb3cuYXBhY2hlLm9yZyUzRVwiLFwiaHR0cHM6Ly9saXN0cy5hcGFjaGUub3JnL3RocmVhZC5odG1sL2YwMDM4YzRmYWIyZWUyNWFlZTg0OWViZWZmNmIzM2IzYWE4OWUwN2NjZmIwNmI1Yzg3YjM2MzE2QCUzQ2lzc3Vlcy5hcnJvdy5hcGFjaGUub3JnJTNFXCIsXCJodHRwczovL2xpc3RzLmFwYWNoZS5vcmcvdGhyZWFkLmh0bWwvZjUwNmJjMzcxZDRhMDY4ZDVkODRkNzM2MTI5MzU2OGY2MTE2N2QzYTFjM2U5MWYwZGVmMmQ3ZDNAJTNDZGV2LmFycm93LmFwYWNoZS5vcmclM0VcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTE3NTQzXCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOS9DVkUtMjAxOS0xNzU0My5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE5LTE3NTQzXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOC0yMDIxNyBhZmZlY3RzIGxpYmtyYjUtM1wiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MjU0fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImxpYmtyYjUtM1wiLFwic291cmNlXCI6XCJrcmI1XCIsXCJ2ZXJzaW9uXCI6XCIxLjEzLjIrZGZzZy01dWJ1bnR1Mi4xXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgdW5maXhlZFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJtZWRpdW1cIixcImF1dGhlbnRpY2F0aW9uXCI6XCJzaW5nbGVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjMuNTAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwiaGlnaFwiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibG93XCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI1LjMwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE4LTIwMjE3XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTgtMjAyMTcgb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIG1lZGl1bS5cIixcInJhdGlvbmFsZVwiOlwiQSBSZWFjaGFibGUgQXNzZXJ0aW9uIGlzc3VlIHdhcyBkaXNjb3ZlcmVkIGluIHRoZSBLREMgaW4gTUlUIEtlcmJlcm9zIDUgKGFrYSBrcmI1KSBiZWZvcmUgMS4xNy4gSWYgYW4gYXR0YWNrZXIgY2FuIG9idGFpbiBhIGtyYnRndCB0aWNrZXQgdXNpbmcgYW4gb2xkZXIgZW5jcnlwdGlvbiB0eXBlIChzaW5nbGUtREVTLCB0cmlwbGUtREVTLCBvciBSQzQpLCB0aGUgYXR0YWNrZXIgY2FuIGNyYXNoIHRoZSBLREMgYnkgbWFraW5nIGFuIFM0VTJTZWxmIHJlcXVlc3QuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMTItMjZcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMDNcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtNjE3XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTkxNzM4N1wiLFwiaHR0cDovL2tyYmRldi5taXQuZWR1L3J0L1RpY2tldC9EaXNwbGF5Lmh0bWw/aWQ9ODc2M1wiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8va3JiZGV2Lm1pdC5lZHUvcnQvVGlja2V0L0Rpc3BsYXkuaHRtbD9pZD04NzYzXCIsXCJodHRwczovL2dpdGh1Yi5jb20va3JiNS9rcmI1L2NvbW1pdC81ZTZkMTc5NjEwNmRmOGJhNmJjMTk3M2VlMDkxN2MxNzBkOTI5MDg2XCIsXCJodHRwczovL2xpc3RzLmRlYmlhbi5vcmcvZGViaWFuLWx0cy1hbm5vdW5jZS8yMDE5LzAxL21zZzAwMDIwLmh0bWxcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvMktOSEVMSDRZSE5UNkgyRVNKV1gyVUlEWExCTkdCMk8vXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDE5MDQxNi0wMDA2L1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtMjAyMTdcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE4L0NWRS0yMDE4LTIwMjE3Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTgtMjAyMTdcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTE0MDM2IGFmZmVjdHMgYWNjb3VudHNzZXJ2aWNlXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjoyNTZ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiYWNjb3VudHNzZXJ2aWNlXCIsXCJ2ZXJzaW9uXCI6XCIwLjYuNDAtMnVidW50dTExLjNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIHRoYW4gMC42LjUwXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcInNpbmdsZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiNFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibG93XCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCI2LjUwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE4LTE0MDM2XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTgtMTQwMzYgb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiRGlyZWN0b3J5IFRyYXZlcnNhbCB3aXRoIC4uLyBzZXF1ZW5jZXMgb2NjdXJzIGluIEFjY291bnRzU2VydmljZSBiZWZvcmUgMC42LjUwIGJlY2F1c2Ugb2YgYW4gaW5zdWZmaWNpZW50IHBhdGggY2hlY2sgaW4gdXNlcl9jaGFuZ2VfaWNvbl9maWxlX2F1dGhvcml6ZWRfY2IoKSBpbiB1c2VyLmMuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMDctMTNcIixcInVwZGF0ZWRcIjpcIjIwMTgtMDktMDZcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTIyXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmZyZWVkZXNrdG9wLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA3MDg1XCIsXCJodHRwczovL2J1Z3ppbGxhLnN1c2UuY29tL3Nob3dfYnVnLmNnaT9pZD0xMDk5Njk5XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE4LzA3LzAyLzJcIixcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzEwNDc1N1wiLFwiaHR0cHM6Ly9idWdzLmZyZWVkZXNrdG9wLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA3MDg1XCIsXCJodHRwczovL2J1Z3ppbGxhLnN1c2UuY29tL3Nob3dfYnVnLmNnaT9pZD0xMDk5Njk5XCIsXCJodHRwczovL2NnaXQuZnJlZWRlc2t0b3Aub3JnL2FjY291bnRzc2VydmljZS9jb21taXQvP2lkPWY5YWJkMzU5ZjcxYTViY2U0MjFiOWFlMjM0MzJmNTM5YTA2Nzg0N2FcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE4LTE0MDM2XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOC9DVkUtMjAxOC0xNDAzNi5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE4LTE0MDM2XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxNy03MjQ0IGFmZmVjdHMgbGlicGNyZTNcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjI2NX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJwY3JlM1wiLFwic291cmNlXCI6XCJwY3JlM1wiLFwidmVyc2lvblwiOlwiMjo4LjM4LTMuMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNC4zMDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJyZXF1aXJlZFwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiNS41MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxNy03MjQ0XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTctNzI0NCBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJUaGUgX3BjcmUzMl94Y2xhc3MgZnVuY3Rpb24gaW4gcGNyZV94Y2xhc3MuYyBpbiBsaWJwY3JlMSBpbiBQQ1JFIDguNDAgYWxsb3dzIHJlbW90ZSBhdHRhY2tlcnMgdG8gY2F1c2UgYSBkZW5pYWwgb2Ygc2VydmljZSAoaW52YWxpZCBtZW1vcnkgcmVhZCkgdmlhIGEgY3JhZnRlZCBmaWxlLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE3LTAzLTIzXCIsXCJ1cGRhdGVkXCI6XCIyMDE4LTA4LTE3XCIsXCJzdGF0ZVwiOlwiVW5maXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTEyNVwiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9ODU4NjgzXCIsXCJodHRwczovL2J1Z3MuZXhpbS5vcmcvc2hvd19idWcuY2dpP2lkPTIwNTJcIixcImh0dHBzOi8vYnVncy5leGltLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjA1NFwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC85NzA2N1wiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9lcnJhdGEvUkhTQS0yMDE4OjI0ODZcIixcImh0dHBzOi8vYmxvZ3MuZ2VudG9vLm9yZy9hZ28vMjAxNy8wMy8yMC9saWJwY3JlLWludmFsaWQtbWVtb3J5LXJlYWQtaW4tX3BjcmUzMl94Y2xhc3MtcGNyZV94Y2xhc3MtYy9cIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMTcxMC0yNVwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTctNzI0NFwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTcvQ1ZFLTIwMTctNzI0NC5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE3LTcyNDRcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo1LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDIwLTg2MzEgYWZmZWN0cyBncnViLWxlZ2FjeS1lYzJcIixcImlkXCI6XCIyMzUwM1wiLFwiZmlyZWR0aW1lc1wiOjMyfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImdydWItbGVnYWN5LWVjMlwiLFwic291cmNlXCI6XCJjbG91ZC1pbml0XCIsXCJ2ZXJzaW9uXCI6XCIxOS40LTMzLWdiYjQxMzFhMi0wdWJ1bnR1MX4xNi4wNC4xXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFsbFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAxOS40XCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCIyLjEwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDIwLTg2MzFcIixcInRpdGxlXCI6XCJDVkUtMjAyMC04NjMxIG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcImNsb3VkLWluaXQgdGhyb3VnaCAxOS40IHJlbGllcyBvbiBNZXJzZW5uZSBUd2lzdGVyIGZvciBhIHJhbmRvbSBwYXNzd29yZCwgd2hpY2ggbWFrZXMgaXQgZWFzaWVyIGZvciBhdHRhY2tlcnMgdG8gcHJlZGljdCBwYXNzd29yZHMsIGJlY2F1c2UgcmFuZF9zdHIgaW4gY2xvdWRpbml0L3V0aWwucHkgY2FsbHMgdGhlIHJhbmRvbS5jaG9pY2UgZnVuY3Rpb24uXCIsXCJzZXZlcml0eVwiOlwiTG93XCIsXCJwdWJsaXNoZWRcIjpcIjIwMjAtMDItMDVcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDItMjFcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTMzMFwiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAyMC0wMy9tc2cwMDA0Mi5odG1sXCIsXCJodHRwczovL2J1Z3MubGF1bmNocGFkLm5ldC91YnVudHUvK3NvdXJjZS9jbG91ZC1pbml0LytidWcvMTg2MDc5NVwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhbm9uaWNhbC9jbG91ZC1pbml0L3B1bGwvMjA0XCIsXCJodHRwczovL2xpc3RzLmRlYmlhbi5vcmcvZGViaWFuLWx0cy1hbm5vdW5jZS8yMDIwLzAyL21zZzAwMDIxLmh0bWxcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDIwLTg2MzFcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDIwL0NWRS0yMDIwLTg2MzEuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAyMC04NjMxXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTAsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMjAwNzkgYWZmZWN0cyB2aW1cIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjEwOX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJ2aW1cIixcInZlcnNpb25cIjpcIjI6Ny40LjE2ODktM3VidW50dTEuNFwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3MgdGhhbiA4LjEuMjEzNlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTIwMDc5XCIsXCJ0aXRsZVwiOlwiVGhlIGF1dG9jbWQgZmVhdHVyZSBpbiB3aW5kb3cuYyBpbiBWaW0gYmVmb3JlIDguMS4yMTM2IGFjY2Vzc2VzIGZyZWVkIG1lbW9yeS5cIixcInNldmVyaXR5XCI6XCJIaWdoXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMTItMzBcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDMtMzBcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTQxNlwiLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vZ2l0aHViLmNvbS92aW0vdmltL2NvbW1pdC9lYzY2YzQxZDg0ZTU3NGJhZjgwMDlkYmMwYmQwODhkMmJjNWIyNDIxXCIsXCJodHRwczovL2dpdGh1Yi5jb20vdmltL3ZpbS9jb21wYXJlL3Y4LjEuMjEzNS4uLnY4LjEuMjEzNlwiLFwiaHR0cHM6Ly9wYWNrZXRzdG9ybXNlY3VyaXR5LmNvbS9maWxlcy8xNTQ4OThcIixcImh0dHBzOi8vdXNuLnVidW50dS5jb20vNDMwOS0xL1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMjAwNzlcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE2LTQ0ODQgYWZmZWN0cyBjcnlwdHNldHVwXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjoyOTB9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiY3J5cHRzZXR1cFwiLFwidmVyc2lvblwiOlwiMjoxLjYuNi01dWJ1bnR1Mi4xXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDIuMS43LjMtMlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiY29tcGxldGVcIixcImludGVncml0eV9pbXBhY3RcIjpcImNvbXBsZXRlXCIsXCJhdmFpbGFiaWxpdHlcIjpcImNvbXBsZXRlXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy4yMDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcInBoeXNpY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI2LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE2LTQ0ODRcIixcInRpdGxlXCI6XCJDVkUtMjAxNi00NDg0IG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIlRoZSBEZWJpYW4gaW5pdHJkIHNjcmlwdCBmb3IgdGhlIGNyeXB0c2V0dXAgcGFja2FnZSAyOjEuNy4zLTIgYW5kIGVhcmxpZXIgYWxsb3dzIHBoeXNpY2FsbHkgcHJveGltYXRlIGF0dGFja2VycyB0byBnYWluIHNoZWxsIGFjY2VzcyB2aWEgbWFueSBsb2cgaW4gYXR0ZW1wdHMgd2l0aCBhbiBpbnZhbGlkIHBhc3N3b3JkLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE3LTAxLTIzXCIsXCJ1cGRhdGVkXCI6XCIyMDE3LTAxLTI2XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yODdcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwczovL2xhdW5jaHBhZC5uZXQvYnVncy8xNjYwNzAxXCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9obWFyY28ub3JnL2J1Z3MvQ1ZFLTIwMTYtNDQ4NC9DVkUtMjAxNi00NDg0X2NyeXB0c2V0dXBfaW5pdHJkX3NoZWxsLmh0bWxcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE2LzExLzE0LzEzXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxNi8xMS8xNS8xXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxNi8xMS8xNS80XCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxNi8xMS8xNi82XCIsXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC85NDMxNVwiLFwiaHR0cHM6Ly9naXRsYWIuY29tL2NyeXB0c2V0dXAvY3J5cHRzZXR1cC9jb21taXQvZWY4YTdkODJkOGQzNzE2YWU5YjU4MTc5NTkwZjc5MDg5ODFmYTBjYlwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTYtNDQ4NFwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTYvQ1ZFLTIwMTYtNDQ4NC5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE2LTQ0ODRcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMCxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xMzA1MCBhZmZlY3RzIGdudXBnXCIsXCJpZFwiOlwiMjM1MDVcIixcImZpcmVkdGltZXNcIjoxMTR9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwiZ251cGdcIixcInZlcnNpb25cIjpcIjEuNC4yMC0xdWJ1bnR1My4zXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDIuMi4xNlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI1XCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE5LTEzMDUwXCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktMTMwNTAgb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiSW50ZXJhY3Rpb24gYmV0d2VlbiB0aGUgc2tzLWtleXNlcnZlciBjb2RlIHRocm91Z2ggMS4yLjAgb2YgdGhlIFNLUyBrZXlzZXJ2ZXIgbmV0d29yaywgYW5kIEdudVBHIHRocm91Z2ggMi4yLjE2LCBtYWtlcyBpdCByaXNreSB0byBoYXZlIGEgR251UEcga2V5c2VydmVyIGNvbmZpZ3VyYXRpb24gbGluZSByZWZlcnJpbmcgdG8gYSBob3N0IG9uIHRoZSBTS1Mga2V5c2VydmVyIG5ldHdvcmsuIFJldHJpZXZpbmcgZGF0YSBmcm9tIHRoaXMgbmV0d29yayBtYXkgY2F1c2UgYSBwZXJzaXN0ZW50IGRlbmlhbCBvZiBzZXJ2aWNlLCBiZWNhdXNlIG9mIGEgQ2VydGlmaWNhdGUgU3BhbW1pbmcgQXR0YWNrLlwiLFwic2V2ZXJpdHlcIjpcIkhpZ2hcIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0wNi0yOVwiLFwidXBkYXRlZFwiOlwiMjAxOS0wNy0wOVwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMjk3XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmxhdW5jaHBhZC5uZXQvYnVncy8xODQ0MDU5XCIsXCJodHRwczovL2J1Z3ppbGxhLnN1c2UuY29tL3Nob3dfYnVnLmNnaT9pZD1DVkUtMjAxOS0xMzA1MFwiLFwiaHR0cHM6Ly9kZXYuZ251cGcub3JnL1Q0NTkxXCIsXCJodHRwczovL2Rldi5nbnVwZy5vcmcvVDQ2MDdcIixcImh0dHBzOi8vZGV2LmdudXBnLm9yZy9UNDYyOFwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMDgvbXNnMDAwMzkuaHRtbFwiLFwiaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcmpoYW5zZW4vNjdhYjkyMWZmYjQwODRjODY1YjM2MThkNjk1NTI3NWZcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvQVVLMllSTzZRSUg2NFdQMkxSQTVENExBQ1RYUVBQVTQvXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0NQNE9OMzRZRVhFWkRaT1hYV1Y0M0tWR0dPNldaTEo1L1wiLFwiaHR0cHM6Ly9saXN0cy5nbnVwZy5vcmcvcGlwZXJtYWlsL2dudXBnLWFubm91bmNlLzIwMTlxMy8wMDA0MzkuaHRtbFwiLFwiaHR0cHM6Ly9zdXBwb3J0LmY1LmNvbS9jc3AvYXJ0aWNsZS9LMDg2NTQ1NTFcIixcImh0dHBzOi8vc3VwcG9ydC5mNS5jb20vY3NwL2FydGljbGUvSzA4NjU0NTUxP3V0bV9zb3VyY2U9ZjVzdXBwb3J0JmFtcDt1dG1fbWVkaXVtPVJTU1wiLFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sYW1iZGFmdS9zdGF0dXMvMTE0NzE2MjU4Mzk2OTAwOTY2NFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTktMTMwNTBcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTEzMDUwLmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTktMTMwNTBcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMCxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOC03NzM4IGFmZmVjdHMgbW91bnRcIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjEyOH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJtb3VudFwiLFwic291cmNlXCI6XCJ1dGlsLWxpbnV4XCIsXCJ2ZXJzaW9uXCI6XCIyLjI3LjEtNnVidW50dTMuMTBcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMi4zMVwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiY29tcGxldGVcIixcImludGVncml0eV9pbXBhY3RcIjpcImNvbXBsZXRlXCIsXCJhdmFpbGFiaWxpdHlcIjpcImNvbXBsZXRlXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy4yMDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJsb3dcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjcuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTgtNzczOFwiLFwidGl0bGVcIjpcIkNWRS0yMDE4LTc3Mzggb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIG5lZ2xpZ2libGUuXCIsXCJyYXRpb25hbGVcIjpcIkluIHV0aWwtbGludXggYmVmb3JlIDIuMzItcmMxLCBiYXNoLWNvbXBsZXRpb24vdW1vdW50IGFsbG93cyBsb2NhbCB1c2VycyB0byBnYWluIHByaXZpbGVnZXMgYnkgZW1iZWRkaW5nIHNoZWxsIGNvbW1hbmRzIGluIGEgbW91bnRwb2ludCBuYW1lLCB3aGljaCBpcyBtaXNoYW5kbGVkIGR1cmluZyBhIHVtb3VudCBjb21tYW5kICh3aXRoaW4gQmFzaCkgYnkgYSBkaWZmZXJlbnQgdXNlciwgYXMgZGVtb25zdHJhdGVkIGJ5IGxvZ2dpbmcgaW4gYXMgcm9vdCBhbmQgZW50ZXJpbmcgdW1vdW50IGZvbGxvd2VkIGJ5IGEgdGFiIGNoYXJhY3RlciBmb3IgYXV0b2NvbXBsZXRpb24uXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTAzLTA3XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTEwLTAzXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIk5WRC1DV0Utbm9pbmZvXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTg5MjE3OVwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2thcmVsemFrL3V0aWwtbGludXgvaXNzdWVzLzUzOVwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC8xMDMzNjdcIixcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnLzg5MjE3OVwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2thcmVsemFrL3V0aWwtbGludXgvY29tbWl0Lzc1ZjAzYmFkZDdlZDlmMWRkOTUxODYzZDc1ZTc1Njg4M2QzYWNjNTVcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9rYXJlbHphay91dGlsLWxpbnV4L2lzc3Vlcy81MzlcIixcImh0dHBzOi8vd3d3LmRlYmlhbi5vcmcvc2VjdXJpdHkvMjAxOC9kc2EtNDEzNFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtNzczOFwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTgvQ1ZFLTIwMTgtNzczOC5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE4LTc3MzhcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMCxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOC03NzM4IGFmZmVjdHMgdXRpbC1saW51eFwiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6MTI5fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcInV0aWwtbGludXhcIixcInZlcnNpb25cIjpcIjIuMjcuMS02dWJ1bnR1My4xMFwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAyLjMxXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiY29tcGxldGVcIixcImF2YWlsYWJpbGl0eVwiOlwiY29tcGxldGVcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjIwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcImxvd1wiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOC03NzM4XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTgtNzczOCBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbmVnbGlnaWJsZS5cIixcInJhdGlvbmFsZVwiOlwiSW4gdXRpbC1saW51eCBiZWZvcmUgMi4zMi1yYzEsIGJhc2gtY29tcGxldGlvbi91bW91bnQgYWxsb3dzIGxvY2FsIHVzZXJzIHRvIGdhaW4gcHJpdmlsZWdlcyBieSBlbWJlZGRpbmcgc2hlbGwgY29tbWFuZHMgaW4gYSBtb3VudHBvaW50IG5hbWUsIHdoaWNoIGlzIG1pc2hhbmRsZWQgZHVyaW5nIGEgdW1vdW50IGNvbW1hbmQgKHdpdGhpbiBCYXNoKSBieSBhIGRpZmZlcmVudCB1c2VyLCBhcyBkZW1vbnN0cmF0ZWQgYnkgbG9nZ2luZyBpbiBhcyByb290IGFuZCBlbnRlcmluZyB1bW91bnQgZm9sbG93ZWQgYnkgYSB0YWIgY2hhcmFjdGVyIGZvciBhdXRvY29tcGxldGlvbi5cIixcInNldmVyaXR5XCI6XCJIaWdoXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMDMtMDdcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMDNcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiTlZELUNXRS1ub2luZm9cIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9ODkyMTc5XCIsXCJodHRwczovL2dpdGh1Yi5jb20va2FyZWx6YWsvdXRpbC1saW51eC9pc3N1ZXMvNTM5XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzEwMzM2N1wiLFwiaHR0cHM6Ly9idWdzLmRlYmlhbi5vcmcvODkyMTc5XCIsXCJodHRwczovL2dpdGh1Yi5jb20va2FyZWx6YWsvdXRpbC1saW51eC9jb21taXQvNzVmMDNiYWRkN2VkOWYxZGQ5NTE4NjNkNzVlNzU2ODgzZDNhY2M1NVwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2thcmVsemFrL3V0aWwtbGludXgvaXNzdWVzLzUzOVwiLFwiaHR0cHM6Ly93d3cuZGViaWFuLm9yZy9zZWN1cml0eS8yMDE4L2RzYS00MTM0XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOC03NzM4XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOC9DVkUtMjAxOC03NzM4Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTgtNzczOFwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEwLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTc3MzggYWZmZWN0cyB1dWlkLXJ1bnRpbWVcIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjEzMH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJ1dWlkLXJ1bnRpbWVcIixcInNvdXJjZVwiOlwidXRpbC1saW51eFwiLFwidmVyc2lvblwiOlwiMi4yNy4xLTZ1YnVudHUzLjEwXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDIuMzFcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImNvbXBsZXRlXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJjb21wbGV0ZVwifSxcImJhc2Vfc2NvcmVcIjpcIjcuMjAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibG93XCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE4LTc3MzhcIixcInRpdGxlXCI6XCJDVkUtMjAxOC03NzM4IG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBuZWdsaWdpYmxlLlwiLFwicmF0aW9uYWxlXCI6XCJJbiB1dGlsLWxpbnV4IGJlZm9yZSAyLjMyLXJjMSwgYmFzaC1jb21wbGV0aW9uL3Vtb3VudCBhbGxvd3MgbG9jYWwgdXNlcnMgdG8gZ2FpbiBwcml2aWxlZ2VzIGJ5IGVtYmVkZGluZyBzaGVsbCBjb21tYW5kcyBpbiBhIG1vdW50cG9pbnQgbmFtZSwgd2hpY2ggaXMgbWlzaGFuZGxlZCBkdXJpbmcgYSB1bW91bnQgY29tbWFuZCAod2l0aGluIEJhc2gpIGJ5IGEgZGlmZmVyZW50IHVzZXIsIGFzIGRlbW9uc3RyYXRlZCBieSBsb2dnaW5nIGluIGFzIHJvb3QgYW5kIGVudGVyaW5nIHVtb3VudCBmb2xsb3dlZCBieSBhIHRhYiBjaGFyYWN0ZXIgZm9yIGF1dG9jb21wbGV0aW9uLlwiLFwic2V2ZXJpdHlcIjpcIkhpZ2hcIixcInB1Ymxpc2hlZFwiOlwiMjAxOC0wMy0wN1wiLFwidXBkYXRlZFwiOlwiMjAxOS0xMC0wM1wiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJOVkQtQ1dFLW5vaW5mb1wiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHA6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz04OTIxNzlcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9rYXJlbHphay91dGlsLWxpbnV4L2lzc3Vlcy81MzlcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTAzMzY3XCIsXCJodHRwczovL2J1Z3MuZGViaWFuLm9yZy84OTIxNzlcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9rYXJlbHphay91dGlsLWxpbnV4L2NvbW1pdC83NWYwM2JhZGQ3ZWQ5ZjFkZDk1MTg2M2Q3NWU3NTY4ODNkM2FjYzU1XCIsXCJodHRwczovL2dpdGh1Yi5jb20va2FyZWx6YWsvdXRpbC1saW51eC9pc3N1ZXMvNTM5XCIsXCJodHRwczovL3d3dy5kZWJpYW4ub3JnL3NlY3VyaXR5LzIwMTgvZHNhLTQxMzRcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE4LTc3MzhcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE4L0NWRS0yMDE4LTc3MzguaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOC03NzM4XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NSxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xNTQ3IGFmZmVjdHMgbGlic3NsMS4wLjBcIixcImlkXCI6XCIyMzUwM1wiLFwiZmlyZWR0aW1lc1wiOjM1fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImxpYnNzbDEuMC4wXCIsXCJzb3VyY2VcIjpcIm9wZW5zc2xcIixcInZlcnNpb25cIjpcIjEuMC4yZy0xdWJ1bnR1NC4xNVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGdyZWF0ZXIgb3IgZXF1YWwgdGhhbiAxLjAuMiBhbmQgbGVzcyBvciBlcXVhbCB0aGFuIDEuMC4yc1wifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJub25lXCJ9LFwiYmFzZV9zY29yZVwiOlwiMS45MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xNTQ3XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktMTU0NyBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJOb3JtYWxseSBpbiBPcGVuU1NMIEVDIGdyb3VwcyBhbHdheXMgaGF2ZSBhIGNvLWZhY3RvciBwcmVzZW50IGFuZCB0aGlzIGlzIHVzZWQgaW4gc2lkZSBjaGFubmVsIHJlc2lzdGFudCBjb2RlIHBhdGhzLiBIb3dldmVyLCBpbiBzb21lIGNhc2VzLCBpdCBpcyBwb3NzaWJsZSB0byBjb25zdHJ1Y3QgYSBncm91cCB1c2luZyBleHBsaWNpdCBwYXJhbWV0ZXJzIChpbnN0ZWFkIG9mIHVzaW5nIGEgbmFtZWQgY3VydmUpLiBJbiB0aG9zZSBjYXNlcyBpdCBpcyBwb3NzaWJsZSB0aGF0IHN1Y2ggYSBncm91cCBkb2VzIG5vdCBoYXZlIHRoZSBjb2ZhY3RvciBwcmVzZW50LiBUaGlzIGNhbiBvY2N1ciBldmVuIHdoZXJlIGFsbCB0aGUgcGFyYW1ldGVycyBtYXRjaCBhIGtub3duIG5hbWVkIGN1cnZlLiBJZiBzdWNoIGEgY3VydmUgaXMgdXNlZCB0aGVuIE9wZW5TU0wgZmFsbHMgYmFjayB0byBub24tc2lkZSBjaGFubmVsIHJlc2lzdGFudCBjb2RlIHBhdGhzIHdoaWNoIG1heSByZXN1bHQgaW4gZnVsbCBrZXkgcmVjb3ZlcnkgZHVyaW5nIGFuIEVDRFNBIHNpZ25hdHVyZSBvcGVyYXRpb24uIEluIG9yZGVyIHRvIGJlIHZ1bG5lcmFibGUgYW4gYXR0YWNrZXIgd291bGQgaGF2ZSB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIHRpbWUgdGhlIGNyZWF0aW9uIG9mIGEgbGFyZ2UgbnVtYmVyIG9mIHNpZ25hdHVyZXMgd2hlcmUgZXhwbGljaXQgcGFyYW1ldGVycyB3aXRoIG5vIGNvLWZhY3RvciBwcmVzZW50IGFyZSBpbiB1c2UgYnkgYW4gYXBwbGljYXRpb24gdXNpbmcgbGliY3J5cHRvLiBGb3IgdGhlIGF2b2lkYW5jZSBvZiBkb3VidCBsaWJzc2wgaXMgbm90IHZ1bG5lcmFibGUgYmVjYXVzZSBleHBsaWNpdCBwYXJhbWV0ZXJzIGFyZSBuZXZlciB1c2VkLiBGaXhlZCBpbiBPcGVuU1NMIDEuMS4xZCAoQWZmZWN0ZWQgMS4xLjEtMS4xLjFjKS4gRml4ZWQgaW4gT3BlblNTTCAxLjEuMGwgKEFmZmVjdGVkIDEuMS4wLTEuMS4waykuIEZpeGVkIGluIE9wZW5TU0wgMS4wLjJ0IChBZmZlY3RlZCAxLjAuMi0xLjAuMnMpLlwiLFwic2V2ZXJpdHlcIjpcIkxvd1wiLFwicHVibGlzaGVkXCI6XCIyMDE5LTA5LTEwXCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA5LTEyXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0zMTFcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMDkvbXNnMDAwNTQuaHRtbFwiLFwiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDE5LTA5L21zZzAwMDcyLmh0bWxcIixcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAxOS0xMC9tc2cwMDAxMi5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMTAvbXNnMDAwMTYuaHRtbFwiLFwiaHR0cDovL3BhY2tldHN0b3Jtc2VjdXJpdHkuY29tL2ZpbGVzLzE1NDQ2Ny9TbGFja3dhcmUtU2VjdXJpdHktQWR2aXNvcnktb3BlbnNzbC1VcGRhdGVzLmh0bWxcIixcImh0dHBzOi8vYXJ4aXYub3JnL2Ficy8xOTA5LjAxNzg1XCIsXCJodHRwczovL2dpdC5vcGVuc3NsLm9yZy9naXR3ZWIvP3A9b3BlbnNzbC5naXQ7YT1jb21taXRkaWZmO2g9MjFjODU2Yjc1ZDgxZWZmNjFhYTYzYjRmMDM2YmI2NGE4NWJmNmQ0NlwiLFwiaHR0cHM6Ly9naXQub3BlbnNzbC5vcmcvZ2l0d2ViLz9wPW9wZW5zc2wuZ2l0O2E9Y29tbWl0ZGlmZjtoPTMwYzIyZmE4YjFkODQwMDM2YjhlMjAzNTg1NzM4ZGY2MmEwM2NlYzhcIixcImh0dHBzOi8vZ2l0Lm9wZW5zc2wub3JnL2dpdHdlYi8/cD1vcGVuc3NsLmdpdDthPWNvbW1pdGRpZmY7aD03YzE3MDljMmRhNTQxNGY1YjYxMzNkMDBhMDNmYzhjNWJmOTk2YzdhXCIsXCJodHRwczovL2xpc3RzLmRlYmlhbi5vcmcvZGViaWFuLWx0cy1hbm5vdW5jZS8yMDE5LzA5L21zZzAwMDI2Lmh0bWxcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvR1k2U05SSlAyUzdZNDJHSUlETzNIWFBOTURZTjJVM0EvXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL1pONFZWUUozSkRDSEdJSFY0WTJZVFhCWVFaNlBXUTdFL1wiLFwiaHR0cHM6Ly9zZWNsaXN0cy5vcmcvYnVndHJhcS8yMDE5L09jdC8wXCIsXCJodHRwczovL3NlY2xpc3RzLm9yZy9idWd0cmFxLzIwMTkvT2N0LzFcIixcImh0dHBzOi8vc2VjbGlzdHMub3JnL2J1Z3RyYXEvMjAxOS9TZXAvMjVcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMTkxMS0wNFwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTA5MTktMDAwMi9cIixcImh0dHBzOi8vc2VjdXJpdHkubmV0YXBwLmNvbS9hZHZpc29yeS9udGFwLTIwMjAwMTIyLTAwMDIvXCIsXCJodHRwczovL3N1cHBvcnQuZjUuY29tL2NzcC9hcnRpY2xlL0s3MzQyMjE2MD91dG1fc291cmNlPWY1c3VwcG9ydCZhbXA7dXRtX21lZGl1bT1SU1NcIixcImh0dHBzOi8vd3d3LmRlYmlhbi5vcmcvc2VjdXJpdHkvMjAxOS9kc2EtNDUzOVwiLFwiaHR0cHM6Ly93d3cuZGViaWFuLm9yZy9zZWN1cml0eS8yMDE5L2RzYS00NTQwXCIsXCJodHRwczovL3d3dy5vcGVuc3NsLm9yZy9uZXdzL3NlY2Fkdi8yMDE5MDkxMC50eHRcIixcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vc2VjdXJpdHktYWxlcnRzL2NwdWFwcjIwMjAuaHRtbFwiLFwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS9zZWN1cml0eS1hbGVydHMvY3B1amFuMjAyMC5odG1sXCIsXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3RlY2huZXR3b3JrL3NlY3VyaXR5LWFkdmlzb3J5L2NwdW9jdDIwMTktNTA3MjgzMi5odG1sXCIsXCJodHRwczovL3d3dy50ZW5hYmxlLmNvbS9zZWN1cml0eS90bnMtMjAxOS0wOFwiLFwiaHR0cHM6Ly93d3cudGVuYWJsZS5jb20vc2VjdXJpdHkvdG5zLTIwMTktMDlcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTE1NDdcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTE1NDcuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOS0xNTQ3XCIsXCJodHRwczovL3Vzbi51YnVudHUuY29tL3Vzbi91c24tNDM3Ni0xXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTAsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMzg0MyBhZmZlY3RzIHN5c3RlbWRcIixcImlkXCI6XCIyMzUwNVwiLFwiZmlyZWR0aW1lc1wiOjEzNH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJzeXN0ZW1kXCIsXCJ2ZXJzaW9uXCI6XCIyMjktNHVidW50dTIxLjI3XCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyB0aGFuIDI0MlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNC42MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJsb3dcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjcuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMzg0M1wiLFwidGl0bGVcIjpcIkl0IHdhcyBkaXNjb3ZlcmVkIHRoYXQgYSBzeXN0ZW1kIHNlcnZpY2UgdGhhdCB1c2VzIER5bmFtaWNVc2VyIHByb3BlcnR5IGNhbiBjcmVhdGUgYSBTVUlEL1NHSUQgYmluYXJ5IHRoYXQgd291bGQgYmUgYWxsb3dlZCB0byBydW4gYXMgdGhlIHRyYW5zaWVudCBzZXJ2aWNlIFVJRC9HSUQgZXZlbiBhZnRlciB0aGUgc2VydmljZSBpcyB0ZXJtaW5hdGVkLiBBIGxvY2FsIGF0dGFja2VyIG1heSB1c2UgdGhpcyBmbGF3IHRvIGFjY2VzcyByZXNvdXJjZXMgdGhhdCB3aWxsIGJlIG93bmVkIGJ5IGEgcG90ZW50aWFsbHkgZGlmZmVyZW50IHNlcnZpY2UgaW4gdGhlIGZ1dHVyZSwgd2hlbiB0aGUgVUlEL0dJRCB3aWxsIGJlIHJlY3ljbGVkLlwiLFwic2V2ZXJpdHlcIjpcIkhpZ2hcIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0wNC0yNlwiLFwidXBkYXRlZFwiOlwiMjAxOS0wNi0xOVwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMjY0XCIsXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTA4MTE2XCIsXCJodHRwczovL2J1Z3ppbGxhLnJlZGhhdC5jb20vc2hvd19idWcuY2dpP2lkPUNWRS0yMDE5LTM4NDNcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvNUpYUUFLU1RNQUJaNDZFVkNSTVc2MkRIV1lIVFRGRVMvXCIsXCJodHRwczovL3NlY3VyaXR5Lm5ldGFwcC5jb20vYWR2aXNvcnkvbnRhcC0yMDE5MDYxOS0wMDAyL1wiLFwiaHR0cHM6Ly91c24udWJ1bnR1LmNvbS80MjY5LTEvXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0zODQzXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xMTcyNyBhZmZlY3RzIHRodW5kZXJiaXJkXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjozMTJ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwidGh1bmRlcmJpcmRcIixcInZlcnNpb25cIjpcIjE6NjguOC4wK2J1aWxkMi0wdWJ1bnR1MC4xNi4wNC4yXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgdW5maXhlZFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCI1XCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJsb3dcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjUuMzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTE3MjdcIixcInRpdGxlXCI6XCJDVkUtMjAxOS0xMTcyNyBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbWVkaXVtLlwiLFwicmF0aW9uYWxlXCI6XCJBIHZ1bG5lcmFiaWxpdHkgZXhpc3RzIHdoZXJlIGl0IHBvc3NpYmxlIHRvIGZvcmNlIE5ldHdvcmsgU2VjdXJpdHkgU2VydmljZXMgKE5TUykgdG8gc2lnbiBDZXJ0aWZpY2F0ZVZlcmlmeSB3aXRoIFBLQ1MjMSB2MS41IHNpZ25hdHVyZXMgd2hlbiB0aG9zZSBhcmUgdGhlIG9ubHkgb25lcyBhZHZlcnRpc2VkIGJ5IHNlcnZlciBpbiBDZXJ0aWZpY2F0ZVJlcXVlc3QgaW4gVExTIDEuMy4gUEtDUyMxIHYxLjUgc2lnbmF0dXJlcyBzaG91bGQgbm90IGJlIHVzZWQgZm9yIFRMUyAxLjMgbWVzc2FnZXMuIFRoaXMgdnVsbmVyYWJpbGl0eSBhZmZlY3RzIEZpcmVmb3ggPCA2OC5cIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0wNy0yM1wiLFwidXBkYXRlZFwiOlwiMjAxOS0wNy0zMFwiLFwic3RhdGVcIjpcIlVuZml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yOTVcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTUyMjA4XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAxOS0xMC9tc2cwMDAwOS5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMTAvbXNnMDAwMTAuaHRtbFwiLFwiaHR0cDovL2xpc3RzLm9wZW5zdXNlLm9yZy9vcGVuc3VzZS1zZWN1cml0eS1hbm5vdW5jZS8yMDE5LTEwL21zZzAwMDExLmh0bWxcIixcImh0dHA6Ly9saXN0cy5vcGVuc3VzZS5vcmcvb3BlbnN1c2Utc2VjdXJpdHktYW5ub3VuY2UvMjAxOS0xMC9tc2cwMDAxNy5odG1sXCIsXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMjAtMDEvbXNnMDAwMDYuaHRtbFwiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9lcnJhdGEvUkhTQS0yMDE5OjE5NTFcIixcImh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE1NTIyMDhcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMTkwOC0xMlwiLFwiaHR0cHM6Ly93d3cubW96aWxsYS5vcmcvc2VjdXJpdHkvYWR2aXNvcmllcy9tZnNhMjAxOS0yMS9cIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTExNzI3XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOS9DVkUtMjAxOS0xMTcyNy5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE5LTExNzI3XCIsXCJodHRwczovL3Vzbi51YnVudHUuY29tL3Vzbi91c24tNDA1NC0xXCIsXCJodHRwczovL3Vzbi51YnVudHUuY29tL3Vzbi91c24tNDA2MC0xXCIsXCJodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9zZWN1cml0eS9hZHZpc29yaWVzL21mc2EyMDE5LTIxLyNDVkUtMjAxOS0xMTcyN1wiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEwLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTE4Mjc2IGFmZmVjdHMgYmFzaFwiLFwiaWRcIjpcIjIzNTA1XCIsXCJmaXJlZHRpbWVzXCI6MTU4fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImJhc2hcIixcInZlcnNpb25cIjpcIjQuMy0xNHVidW50dTEuNFwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiA1LjBcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImNvbXBsZXRlXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJjb21wbGV0ZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJjb21wbGV0ZVwifSxcImJhc2Vfc2NvcmVcIjpcIjcuMjAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTgyNzZcIixcInRpdGxlXCI6XCJDVkUtMjAxOS0xODI3NiBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJBbiBpc3N1ZSB3YXMgZGlzY292ZXJlZCBpbiBkaXNhYmxlX3ByaXZfbW9kZSBpbiBzaGVsbC5jIGluIEdOVSBCYXNoIHRocm91Z2ggNS4wIHBhdGNoIDExLiBCeSBkZWZhdWx0LCBpZiBCYXNoIGlzIHJ1biB3aXRoIGl0cyBlZmZlY3RpdmUgVUlEIG5vdCBlcXVhbCB0byBpdHMgcmVhbCBVSUQsIGl0IHdpbGwgZHJvcCBwcml2aWxlZ2VzIGJ5IHNldHRpbmcgaXRzIGVmZmVjdGl2ZSBVSUQgdG8gaXRzIHJlYWwgVUlELiBIb3dldmVyLCBpdCBkb2VzIHNvIGluY29ycmVjdGx5LiBPbiBMaW51eCBhbmQgb3RoZXIgc3lzdGVtcyB0aGF0IHN1cHBvcnQgXFxcInNhdmVkIFVJRFxcXCIgZnVuY3Rpb25hbGl0eSwgdGhlIHNhdmVkIFVJRCBpcyBub3QgZHJvcHBlZC4gQW4gYXR0YWNrZXIgd2l0aCBjb21tYW5kIGV4ZWN1dGlvbiBpbiB0aGUgc2hlbGwgY2FuIHVzZSBcXFwiZW5hYmxlIC1mXFxcIiBmb3IgcnVudGltZSBsb2FkaW5nIG9mIGEgbmV3IGJ1aWx0aW4sIHdoaWNoIGNhbiBiZSBhIHNoYXJlZCBvYmplY3QgdGhhdCBjYWxscyBzZXR1aWQoKSBhbmQgdGhlcmVmb3JlIHJlZ2FpbnMgcHJpdmlsZWdlcy4gSG93ZXZlciwgYmluYXJpZXMgcnVubmluZyB3aXRoIGFuIGVmZmVjdGl2ZSBVSUQgb2YgMCBhcmUgdW5hZmZlY3RlZC5cIixcInNldmVyaXR5XCI6XCJIaWdoXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTktMTEtMjhcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDQtMzBcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTI3M1wiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVnemlsbGEuc3VzZS5jb20vc2hvd19idWcuY2dpP2lkPTExNTgwMjhcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3BhY2tldHN0b3Jtc2VjdXJpdHkuY29tL2ZpbGVzLzE1NTQ5OC9CYXNoLTUuMC1QYXRjaC0xMS1Qcml2aWxlZ2UtRXNjYWxhdGlvbi5odG1sXCIsXCJodHRwczovL2dpdGh1Yi5jb20vYm1pbm9yL2Jhc2gvY29tbWl0Lzk1MWJkYWFkN2ExOGNjMGRjMTAzNmJiYTg2YjE4YjkwODc0ZDM5ZmZcIixcImh0dHBzOi8vc2VjdXJpdHkubmV0YXBwLmNvbS9hZHZpc29yeS9udGFwLTIwMjAwNDMwLTAwMDMvXCIsXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PS13R3R4SjhvcGE4XCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOS0xODI3NlwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTkvQ1ZFLTIwMTktMTgyNzYuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOS0xODI3NlwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctOTUwMiBhZmZlY3RzIGN1cmxcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjMzNH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJjdXJsXCIsXCJ2ZXJzaW9uXCI6XCI3LjQ3LjAtMXVidW50dTIuMTRcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gNy41NC4wXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjVcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwibG93XCJ9LFwiYmFzZV9zY29yZVwiOlwiNS4zMDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxNy05NTAyXCIsXCJ0aXRsZVwiOlwiSW4gY3VybCBiZWZvcmUgNy41NC4xIG9uIFdpbmRvd3MgYW5kIERPUywgbGliY3VybCdzIGRlZmF1bHQgcHJvdG9jb2wgZnVuY3Rpb24sIHdoaWNoIGlzIHRoZSBsb2dpYyB0aGF0IGFsbG93cyBhbiBhcHBsaWNhdGlvbiB0byBzZXQgd2hpY2ggcHJvdG9jb2wgbGliY3VybCBzaG91bGQgYXR0ZW1wdCB0byB1c2Ugd2hlbiBnaXZlbiBhIFVSTCB3aXRob3V0IGEgc2NoZW1lIHBhcnQsIGhhZCBhIGZsYXcgdGhhdCBjb3VsZCBsZWFkIHRvIGl0IG92ZXJ3cml0aW5nIGEgaGVhcCBiYXNlZCBtZW1vcnkgYnVmZmVyIHdpdGggc2V2ZW4gYnl0ZXMuIElmIHRoZSBkZWZhdWx0IHByb3RvY29sIGlzIHNwZWNpZmllZCB0byBiZSBGSUxFIG9yIGEgZmlsZTogVVJMIGxhY2tzIHR3byBzbGFzaGVzLCB0aGUgZ2l2ZW4gXFxcIlVSTFxcXCIgc3RhcnRzIHdpdGggYSBkcml2ZSBsZXR0ZXIsIGFuZCBsaWJjdXJsIGlzIGJ1aWx0IGZvciBXaW5kb3dzIG9yIERPUywgdGhlbiBsaWJjdXJsIHdvdWxkIGNvcHkgdGhlIHBhdGggNyBieXRlcyBvZmYsIHNvIHRoYXQgdGhlIGVuZCBvZiB0aGUgZ2l2ZW4gcGF0aCB3b3VsZCB3cml0ZSBiZXlvbmQgdGhlIG1hbGxvYyBidWZmZXIgKDcgYnl0ZXMgYmVpbmcgdGhlIGxlbmd0aCBpbiBieXRlcyBvZiB0aGUgYXNjaWkgc3RyaW5nIFxcXCJmaWxlOi8vXFxcIikuXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTctMDYtMTRcIixcInVwZGF0ZWRcIjpcIjIwMTctMDctMDhcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTExOVwiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly9vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMTcvMDYvMTQvMVwiLFwiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvOTkxMjBcIixcImh0dHA6Ly93d3cuc2VjdXJpdHl0cmFja2VyLmNvbS9pZC8xMDM4Njk3XCIsXCJodHRwczovL2N1cmwuaGF4eC5zZS9kb2NzL2Fkdl8yMDE3MDYxNC5odG1sXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxNy05NTAyXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTAsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTgtMjA0ODMgYWZmZWN0cyB3Z2V0XCIsXCJpZFwiOlwiMjM1MDVcIixcImZpcmVkdGltZXNcIjoxNzV9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwid2dldFwiLFwidmVyc2lvblwiOlwiMS4xNy4xLTF1YnVudHUxLjVcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIHRoYW4gMS4yMC4xXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJub25lXCIsXCJhdmFpbGFiaWxpdHlcIjpcIm5vbmVcIn0sXCJiYXNlX3Njb3JlXCI6XCIyLjEwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcImxvd1wiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOC0yMDQ4M1wiLFwidGl0bGVcIjpcInNldF9maWxlX21ldGFkYXRhIGluIHhhdHRyLmMgaW4gR05VIFdnZXQgYmVmb3JlIDEuMjAuMSBzdG9yZXMgYSBmaWxlJ3Mgb3JpZ2luIFVSTCBpbiB0aGUgdXNlci54ZGcub3JpZ2luLnVybCBtZXRhZGF0YSBhdHRyaWJ1dGUgb2YgdGhlIGV4dGVuZGVkIGF0dHJpYnV0ZXMgb2YgdGhlIGRvd25sb2FkZWQgZmlsZSwgd2hpY2ggYWxsb3dzIGxvY2FsIHVzZXJzIHRvIG9idGFpbiBzZW5zaXRpdmUgaW5mb3JtYXRpb24gKGUuZy4sIGNyZWRlbnRpYWxzIGNvbnRhaW5lZCBpbiB0aGUgVVJMKSBieSByZWFkaW5nIHRoaXMgYXR0cmlidXRlLCBhcyBkZW1vbnN0cmF0ZWQgYnkgZ2V0ZmF0dHIuIFRoaXMgYWxzbyBhcHBsaWVzIHRvIFJlZmVyZXIgaW5mb3JtYXRpb24gaW4gdGhlIHVzZXIueGRnLnJlZmVycmVyLnVybCBtZXRhZGF0YSBhdHRyaWJ1dGUuIEFjY29yZGluZyB0byAyMDE2LTA3LTIyIGluIHRoZSBXZ2V0IENoYW5nZUxvZywgdXNlci54ZGcub3JpZ2luLnVybCB3YXMgcGFydGlhbGx5IGJhc2VkIG9uIHRoZSBiZWhhdmlvciBvZiBmd3JpdGVfeGF0dHIgaW4gdG9vbF94YXR0ci5jIGluIGN1cmwuXCIsXCJzZXZlcml0eVwiOlwiSGlnaFwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTEyLTI2XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA0LTA5XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0yNTVcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vZ2l0LnNhdmFubmFoLmdudS5vcmcvY2dpdC93Z2V0LmdpdC90cmVlL05FV1NcIixcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzEwNjM1OFwiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9lcnJhdGEvUkhTQS0yMDE5OjM3MDFcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMTkwMy0wOFwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTAzMjEtMDAwMi9cIixcImh0dHBzOi8vdHdpdHRlci5jb20vbWFyY2FuNDIvc3RhdHVzLzEwNzc2NzY3Mzk4NzcyMzI2NDBcIixcImh0dHBzOi8vdXNuLnVidW50dS5jb20vMzk0My0xL1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtMjA0ODNcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE5LTEwMTAyMDQgYWZmZWN0cyBiaW51dGlsc1wiLFwiaWRcIjpcIjIzNTA0XCIsXCJmaXJlZHRpbWVzXCI6MzY5fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImJpbnV0aWxzXCIsXCJ2ZXJzaW9uXCI6XCIyLjI2LjEtMXVidW50dTF+MTYuMDQuOFwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGdyZWF0ZXIgb3IgZXF1YWwgdGhhbiAyLjIxIGFuZCBsZXNzIG9yIGVxdWFsIHRoYW4gMi4zMS4xXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjQuMzAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwicmVxdWlyZWRcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjUuNTAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTktMTAxMDIwNFwiLFwidGl0bGVcIjpcIkNWRS0yMDE5LTEwMTAyMDQgb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiR05VIGJpbnV0aWxzIGdvbGQgZ29sZCB2MS4xMS12MS4xNiAoR05VIGJpbnV0aWxzIHYyLjIxLXYyLjMxLjEpIGlzIGFmZmVjdGVkIGJ5OiBJbXByb3BlciBJbnB1dCBWYWxpZGF0aW9uLCBTaWduZWQvVW5zaWduZWQgQ29tcGFyaXNvbiwgT3V0LW9mLWJvdW5kcyBSZWFkLiBUaGUgaW1wYWN0IGlzOiBEZW5pYWwgb2Ygc2VydmljZS4gVGhlIGNvbXBvbmVudCBpczogZ29sZC9maWxlcmVhZC5jYzo0OTcsIGVsZmNwcC9lbGZjcHBfZmlsZS5oOjY0NC4gVGhlIGF0dGFjayB2ZWN0b3IgaXM6IEFuIEVMRiBmaWxlIHdpdGggYW4gaW52YWxpZCBlX3Nob2ZmIGhlYWRlciBmaWVsZCBtdXN0IGJlIG9wZW5lZC5cIixcInNldmVyaXR5XCI6XCJNZWRpdW1cIixcInB1Ymxpc2hlZFwiOlwiMjAxOS0wNy0yM1wiLFwidXBkYXRlZFwiOlwiMjAxOS0wOC0yMlwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTI1XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9zb3VyY2V3YXJlLm9yZy9idWd6aWxsYS9zaG93X2J1Zy5jZ2k/aWQ9MjM3NjVcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTA4MjItMDAwMS9cIixcImh0dHBzOi8vc291cmNld2FyZS5vcmcvYnVnemlsbGEvc2hvd19idWcuY2dpP2lkPTIzNzY1XCIsXCJodHRwczovL3N1cHBvcnQuZjUuY29tL2NzcC9hcnRpY2xlL0swNTAzMjkxNT91dG1fc291cmNlPWY1c3VwcG9ydCZhbXA7dXRtX21lZGl1bT1SU1NcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTEwMTAyMDRcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTEwMTAyMDQuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOS0xMDEwMjA0XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6NyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxOS0xNDg1NSBhZmZlY3RzIGRpcm1uZ3JcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjM4Mn0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJkaXJtbmdyXCIsXCJzb3VyY2VcIjpcImdudXBnMlwiLFwidmVyc2lvblwiOlwiMi4xLjExLTZ1YnVudHUyLjFcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjVcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xNDg1NVwiLFwidGl0bGVcIjpcIkNWRS0yMDE5LTE0ODU1IG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIkEgZmxhdyB3YXMgZm91bmQgaW4gdGhlIHdheSBjZXJ0aWZpY2F0ZSBzaWduYXR1cmVzIGNvdWxkIGJlIGZvcmdlZCB1c2luZyBjb2xsaXNpb25zIGZvdW5kIGluIHRoZSBTSEEtMSBhbGdvcml0aG0uIEFuIGF0dGFja2VyIGNvdWxkIHVzZSB0aGlzIHdlYWtuZXNzIHRvIGNyZWF0ZSBmb3JnZWQgY2VydGlmaWNhdGUgc2lnbmF0dXJlcy4gVGhpcyBpc3N1ZSBhZmZlY3RzIEdudVBHIHZlcnNpb25zIGJlZm9yZSAyLjIuMTguXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMjAtMDMtMjBcIixcInVwZGF0ZWRcIjpcIjIwMjAtMDMtMjRcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMzI3XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9kZXYuZ251cGcub3JnL1Q0NzU1XCJdLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9Q1ZFLTIwMTktMTQ4NTVcIixcImh0dHBzOi8vZGV2LmdudXBnLm9yZy9UNDc1NVwiLFwiaHR0cHM6Ly9saXN0cy5nbnVwZy5vcmcvcGlwZXJtYWlsL2dudXBnLWFubm91bmNlLzIwMTlxNC8wMDA0NDIuaHRtbFwiLFwiaHR0cHM6Ly9yd2MuaWFjci5vcmcvMjAyMC9zbGlkZXMvTGV1cmVudC5wZGZcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTE0ODU1XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOS9DVkUtMjAxOS0xNDg1NS5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE5LTE0ODU1XCIsXCJodHRwczovL2VwcmludC5pYWNyLm9yZy8yMDIwLzAxNC5wZGZcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE2LTUwMTEgYWZmZWN0cyB1dWlkLXJ1bnRpbWVcIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjM5NX0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJ1dWlkLXJ1bnRpbWVcIixcInNvdXJjZVwiOlwidXRpbC1saW51eFwiLFwidmVyc2lvblwiOlwiMi4yNy4xLTZ1YnVudHUzLjEwXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgdW5maXhlZFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibWVkaXVtXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwibm9uZVwiLFwiYXZhaWxhYmlsaXR5XCI6XCJjb21wbGV0ZVwifSxcImJhc2Vfc2NvcmVcIjpcIjQuNzAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJwaHlzaWNhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwicmVxdWlyZWRcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjQuMzAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTYtNTAxMVwiLFwidGl0bGVcIjpcIkNWRS0yMDE2LTUwMTEgb24gVWJ1bnR1IDE2LjA0IExUUyAoeGVuaWFsKSAtIGxvdy5cIixcInJhdGlvbmFsZVwiOlwiVGhlIHBhcnNlX2Rvc19leHRlbmRlZCBmdW5jdGlvbiBpbiBwYXJ0aXRpb25zL2Rvcy5jIGluIHRoZSBsaWJibGtpZCBsaWJyYXJ5IGluIHV0aWwtbGludXggYWxsb3dzIHBoeXNpY2FsbHkgcHJveGltYXRlIGF0dGFja2VycyB0byBjYXVzZSBhIGRlbmlhbCBvZiBzZXJ2aWNlIChtZW1vcnkgY29uc3VtcHRpb24pIHZpYSBhIGNyYWZ0ZWQgTVNET1MgcGFydGl0aW9uIHRhYmxlIHdpdGggYW4gZXh0ZW5kZWQgcGFydGl0aW9uIGJvb3QgcmVjb3JkIGF0IHplcm8gb2Zmc2V0LlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE3LTA0LTExXCIsXCJ1cGRhdGVkXCI6XCIyMDE3LTA0LTE3XCIsXCJzdGF0ZVwiOlwiVW5maXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTM5OVwiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHA6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz04MzA4MDJcIixcImh0dHBzOi8vYnVnemlsbGEucmVkaGF0LmNvbS9zaG93X2J1Zy5jZ2k/aWQ9MTM0OTUzNlwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vcmhuLnJlZGhhdC5jb20vZXJyYXRhL1JIU0EtMjAxNi0yNjA1Lmh0bWxcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE2LzA3LzExLzJcIixcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzkxNjgzXCIsXCJodHRwOi8vd3d3LnNlY3VyaXR5dHJhY2tlci5jb20vaWQvMTAzNjI3MlwiLFwiaHR0cDovL3d3dy0wMS5pYm0uY29tL3N1cHBvcnQvZG9jdmlldy53c3M/dWlkPWlzZzNUMTAyNDU0M1wiLFwiaHR0cDovL3d3dy0wMS5pYm0uY29tL3N1cHBvcnQvZG9jdmlldy53c3M/dWlkPW5hczhOMTAyMTgwMVwiLFwiaHR0cHM6Ly9naXQua2VybmVsLm9yZy9wdWIvc2NtL3V0aWxzL3V0aWwtbGludXgvdXRpbC1saW51eC5naXQvY29tbWl0Lz9pZD03MTY0YTFjM1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTYtNTAxMVwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTYvQ1ZFLTIwMTYtNTAxMS5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE2LTUwMTFcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE1LTUxOTEgYWZmZWN0cyBvcGVuLXZtLXRvb2xzXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjozOTZ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwib3Blbi12bS10b29sc1wiLFwidmVyc2lvblwiOlwiMjoxMC4yLjAtM351YnVudHUwLjE2LjA0LjFcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSB1bmZpeGVkXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibG9jYWxcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJoaWdoXCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiMy43MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcImxvY2FsXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwiaGlnaFwiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibG93XCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJyZXF1aXJlZFwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiNi43MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxNS01MTkxXCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTUtNTE5MSBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJWTXdhcmUgVG9vbHMgcHJpb3IgdG8gMTAuMC45IGNvbnRhaW5zIG11bHRpcGxlIGZpbGUgc3lzdGVtIHJhY2VzIGluIGxpYkRlcGxveVBrZywgcmVsYXRlZCB0byB0aGUgdXNlIG9mIGhhcmQtY29kZWQgcGF0aHMgdW5kZXIgL3RtcC4gU3VjY2Vzc2Z1bCBleHBsb2l0YXRpb24gb2YgdGhpcyBpc3N1ZSBtYXkgcmVzdWx0IGluIGEgbG9jYWwgcHJpdmlsZWdlIGVzY2FsYXRpb24uIENWU1M6My4wL0FWOkwvQUM6SC9QUjpML1VJOlIvUzpVL0M6SC9JOkgvQTpIXCIsXCJzZXZlcml0eVwiOlwiTWVkaXVtXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTctMDctMjhcIixcInVwZGF0ZWRcIjpcIjIwMTctMDgtMDhcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMzYyXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTg2OTYzM1wiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC8xMDAwMTFcIixcImh0dHA6Ly93d3cuc2VjdXJpdHl0cmFja2VyLmNvbS9pZC8xMDM5MDEzXCIsXCJodHRwczovL3d3dy52bXdhcmUuY29tL3NlY3VyaXR5L2Fkdmlzb3JpZXMvVk1TQS0yMDE3LTAwMTMuaHRtbFwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTUtNTE5MVwiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTUvQ1ZFLTIwMTUtNTE5MS5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE1LTUxOTFcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjo3LFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE4LTg5NzUgYWZmZWN0cyBuZXRwYm1cIixcImlkXCI6XCIyMzUwNFwiLFwiZmlyZWR0aW1lc1wiOjM5N30sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJuZXRwYm1cIixcInNvdXJjZVwiOlwibmV0cGJtLWZyZWVcIixcInZlcnNpb25cIjpcIjI6MTAuMC0xNS4zXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDEwLjgxLjAzXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcIm1lZGl1bVwiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjQuMzAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJsb2NhbFwiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwicmVxdWlyZWRcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcIm5vbmVcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjUuNTAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTgtODk3NVwiLFwidGl0bGVcIjpcIlRoZSBwbV9tYWxsb2NhcnJheTIgZnVuY3Rpb24gaW4gbGliL3V0aWwvbWFsbG9jdmFyLmMgaW4gTmV0cGJtIHRocm91Z2ggMTAuODEuMDMgYWxsb3dzIHJlbW90ZSBhdHRhY2tlcnMgdG8gY2F1c2UgYSBkZW5pYWwgb2Ygc2VydmljZSAoaGVhcC1iYXNlZCBidWZmZXIgb3Zlci1yZWFkKSB2aWEgYSBjcmFmdGVkIGltYWdlIGZpbGUsIGFzIGRlbW9uc3RyYXRlZCBieSBwYm1tYXNrLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTAzLTI1XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTEwLTAzXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMjVcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vbGlzdHMub3BlbnN1c2Uub3JnL29wZW5zdXNlLXNlY3VyaXR5LWFubm91bmNlLzIwMTktMDQvbXNnMDAwNTYuaHRtbFwiLFwiaHR0cHM6Ly9naXRodWIuY29tL3hpYW9xeC9wb2NzL2Jsb2IvbWFzdGVyL25ldHBibVwiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTgtODk3NVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjcsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktMTkyMzIgYWZmZWN0cyBzdWRvXCIsXCJpZFwiOlwiMjM1MDRcIixcImZpcmVkdGltZXNcIjozOTh9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwic3Vkb1wiLFwidmVyc2lvblwiOlwiMS44LjE2LTB1YnVudHUxLjlcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMS44LjI5XCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcIm5vbmVcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwibm9uZVwifSxcImJhc2Vfc2NvcmVcIjpcIjVcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS0xOTIzMlwiLFwidGl0bGVcIjpcIkNWRS0yMDE5LTE5MjMyIG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIioqIERJU1BVVEVEICoqIEluIFN1ZG8gdGhyb3VnaCAxLjguMjksIGFuIGF0dGFja2VyIHdpdGggYWNjZXNzIHRvIGEgUnVuYXMgQUxMIHN1ZG9lciBhY2NvdW50IGNhbiBpbXBlcnNvbmF0ZSBhIG5vbmV4aXN0ZW50IHVzZXIgYnkgaW52b2tpbmcgc3VkbyB3aXRoIGEgbnVtZXJpYyB1aWQgdGhhdCBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIGFueSB1c2VyLiBOT1RFOiBUaGUgc29mdHdhcmUgbWFpbnRhaW5lciBiZWxpZXZlcyB0aGF0IHRoaXMgaXMgbm90IGEgdnVsbmVyYWJpbGl0eSBiZWNhdXNlIHJ1bm5pbmcgYSBjb21tYW5kIHZpYSBzdWRvIGFzIGEgdXNlciBub3QgcHJlc2VudCBpbiB0aGUgbG9jYWwgcGFzc3dvcmQgZGF0YWJhc2UgaXMgYW4gaW50ZW50aW9uYWwgZmVhdHVyZS4gQmVjYXVzZSB0aGlzIGJlaGF2aW9yIHN1cnByaXNlZCBzb21lIHVzZXJzLCBzdWRvIDEuOC4zMCBpbnRyb2R1Y2VkIGFuIG9wdGlvbiB0byBlbmFibGUvZGlzYWJsZSB0aGlzIGJlaGF2aW9yIHdpdGggdGhlIGRlZmF1bHQgYmVpbmcgZGlzYWJsZWQuIEhvd2V2ZXIsIHRoaXMgZG9lcyBub3QgY2hhbmdlIHRoZSBmYWN0IHRoYXQgc3VkbyB3YXMgYmVoYXZpbmcgYXMgaW50ZW5kZWQsIGFuZCBhcyBkb2N1bWVudGVkLCBpbiBlYXJsaWVyIHZlcnNpb25zLlwiLFwic2V2ZXJpdHlcIjpcIk1lZGl1bVwiLFwicHVibGlzaGVkXCI6XCIyMDE5LTEyLTE5XCIsXCJ1cGRhdGVkXCI6XCIyMDIwLTAxLTMwXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIk5WRC1DV0Utbm9pbmZvXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz05NDcyMjVcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3NlY2xpc3RzLm9yZy9mdWxsZGlzY2xvc3VyZS8yMDIwL01hci8zMVwiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9zZWN1cml0eS9jdmUvY3ZlLTIwMTktMTkyMzJcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvSTZUS0YzNktPUVVWSk5CSFNWSkZBN0JVM0NDRVlEMkYvXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0lZNkRaN1dNREtVNFpETUw2TUpMREFQRzQyQjVXVlVDL1wiLFwiaHR0cHM6Ly9xdWlja3ZpZXcuY2xvdWRhcHBzLmNpc2NvLmNvbS9xdWlja3ZpZXcvYnVnL0NTQ3ZzNTgxMDNcIixcImh0dHBzOi8vcXVpY2t2aWV3LmNsb3VkYXBwcy5jaXNjby5jb20vcXVpY2t2aWV3L2J1Zy9DU0N2czU4ODEyXCIsXCJodHRwczovL3F1aWNrdmlldy5jbG91ZGFwcHMuY2lzY28uY29tL3F1aWNrdmlldy9idWcvQ1NDdnM1ODk3OVwiLFwiaHR0cHM6Ly9xdWlja3ZpZXcuY2xvdWRhcHBzLmNpc2NvLmNvbS9xdWlja3ZpZXcvYnVnL0NTQ3ZzNzY4NzBcIixcImh0dHBzOi8vc2VjdXJpdHkubmV0YXBwLmNvbS9hZHZpc29yeS9udGFwLTIwMjAwMTAzLTAwMDQvXCIsXCJodHRwczovL3N1cHBvcnQuYXBwbGUuY29tL2VuLWdiL0hUMjExMTAwXCIsXCJodHRwczovL3N1cHBvcnQuYXBwbGUuY29tL2tiL0hUMjExMTAwXCIsXCJodHRwczovL3N1cHBvcnQyLndpbmRyaXZlci5jb20vaW5kZXgucGhwP3BhZ2U9Y3ZlJm9uPXZpZXcmaWQ9Q1ZFLTIwMTktMTkyMzJcIixcImh0dHBzOi8vc3VwcG9ydDIud2luZHJpdmVyLmNvbS9pbmRleC5waHA/cGFnZT1kZWZlY3RzJm9uPXZpZXcmaWQ9TElOMTAxOC01NTA2XCIsXCJodHRwczovL3d3dy5ic2kuYnVuZC5kZS9TaGFyZWREb2NzL1dhcm5tZWxkdW5nZW4vREUvQ0IvMjAxOS8xMi93YXJubWVsZHVuZ19jYi1rMjAtMDAwMS5odG1sXCIsXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3NlY3VyaXR5LWFsZXJ0cy9idWxsZXRpbmFwcjIwMjAuaHRtbFwiLFwiaHR0cHM6Ly93d3cuc3Vkby53cy9kZXZlbC5odG1sIzEuOC4zMGIyXCIsXCJodHRwczovL3d3dy5zdWRvLndzL3N0YWJsZS5odG1sXCIsXCJodHRwczovL3d3dy50ZW5hYmxlLmNvbS9wbHVnaW5zL25lc3N1cy8xMzM5MzZcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTE5MjMyXCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOS9DVkUtMjAxOS0xOTIzMi5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE5LTE5MjMyXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctMTI1ODggYWZmZWN0cyByc3lzbG9nXCIsXCJpZFwiOlwiMjM1MDZcIixcImZpcmVkdGltZXNcIjo2NH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJyc3lzbG9nXCIsXCJ2ZXJzaW9uXCI6XCI4LjE2LjAtMXVidW50dTMuMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiA4LjI3LjBcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy41MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjkuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTctMTI1ODhcIixcInRpdGxlXCI6XCJUaGUgem1xMyBpbnB1dCBhbmQgb3V0cHV0IG1vZHVsZXMgaW4gcnN5c2xvZyBiZWZvcmUgOC4yOC4wIGludGVycHJldGVkIGRlc2NyaXB0aW9uIGZpZWxkcyBhcyBmb3JtYXQgc3RyaW5ncywgcG9zc2libHkgYWxsb3dpbmcgYSBmb3JtYXQgc3RyaW5nIGF0dGFjayB3aXRoIHVuc3BlY2lmaWVkIGltcGFjdC5cIixcInNldmVyaXR5XCI6XCJDcml0aWNhbFwiLFwicHVibGlzaGVkXCI6XCIyMDE3LTA4LTA2XCIsXCJ1cGRhdGVkXCI6XCIyMDE3LTA4LTE0XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMzRcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpdGh1Yi5jb20vcnN5c2xvZy9yc3lzbG9nL2Jsb2IvbWFzdGVyL0NoYW5nZUxvZ1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL3JzeXNsb2cvcnN5c2xvZy9jb21taXQvMDYyZDBjNjcxYTI5ZjdjNmY3ZGZmNGEyZjFmMzVkZjM3NWJiYjMwYlwiLFwiaHR0cHM6Ly9naXRodWIuY29tL3JzeXNsb2cvcnN5c2xvZy9wdWxsLzE1NjVcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE3LTEyNTg4XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctMTgzNDIgYWZmZWN0cyBweXRob24zLXlhbWxcIixcImlkXCI6XCIyMzUwNlwiLFwiZmlyZWR0aW1lc1wiOjY1fSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcInB5dGhvbjMteWFtbFwiLFwic291cmNlXCI6XCJweXlhbWxcIixcInZlcnNpb25cIjpcIjMuMTEtM2J1aWxkMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy41MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjkuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTctMTgzNDJcIixcInRpdGxlXCI6XCJDVkUtMjAxNy0xODM0MiBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJJbiBQeVlBTUwgYmVmb3JlIDUuMSwgdGhlIHlhbWwubG9hZCgpIEFQSSBjb3VsZCBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGlmIHVzZWQgd2l0aCB1bnRydXN0ZWQgZGF0YS4gVGhlIGxvYWQoKSBmdW5jdGlvbiBoYXMgYmVlbiBkZXByZWNhdGVkIGluIHZlcnNpb24gNS4xIGFuZCB0aGUgJ1Vuc2FmZUxvYWRlcicgaGFzIGJlZW4gaW50cm9kdWNlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBmdW5jdGlvbi5cIixcInNldmVyaXR5XCI6XCJDcml0aWNhbFwiLFwicHVibGlzaGVkXCI6XCIyMDE4LTA2LTI3XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA2LTI0XCIsXCJzdGF0ZVwiOlwiVW5maXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTIwXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTkwMjg3OFwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwczovL2dpdGh1Yi5jb20vbWFyc2htYWxsb3ctY29kZS9hcGlzcGVjL2lzc3Vlcy8yNzhcIixcImh0dHBzOi8vZ2l0aHViLmNvbS95YW1sL3B5eWFtbC9ibG9iL21hc3Rlci9DSEFOR0VTXCIsXCJodHRwczovL2dpdGh1Yi5jb20veWFtbC9weXlhbWwvaXNzdWVzLzE5M1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL3lhbWwvcHl5YW1sL3B1bGwvNzRcIixcImh0dHBzOi8vZ2l0aHViLmNvbS95YW1sL3B5eWFtbC93aWtpL1B5WUFNTC15YW1sLmxvYWQoaW5wdXQpLURlcHJlY2F0aW9uXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0pFWDdJUFY1UDJRSklUQU1BNVo2M0dRQ1pBNUk2TlZaL1wiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9LU1FRTVJVUVNYQlNVWExDUkQzVFNaWVE3U0VaUktDRS9cIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvTTZKQ0ZHRUlFT0ZNV1dJWEdIU0VMTUtRREQ0Q1YyQkEvXCIsXCJodHRwczovL3NlY3VyaXR5LmdlbnRvby5vcmcvZ2xzYS8yMDIwMDMtNDVcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE3LTE4MzQyXCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxNy9DVkUtMjAxNy0xODM0Mi5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE3LTE4MzQyXCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctMTU5OTQgYWZmZWN0cyByc3luY1wiLFwiaWRcIjpcIjIzNTA2XCIsXCJmaXJlZHRpbWVzXCI6NjZ9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwicnN5bmNcIixcInZlcnNpb25cIjpcIjMuMS4xLTN1YnVudHUxLjNcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMy4xLjJcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy41MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjkuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTctMTU5OTRcIixcInRpdGxlXCI6XCJyc3luYyAzLjEuMy1kZXZlbG9wbWVudCBiZWZvcmUgMjAxNy0xMC0yNCBtaXNoYW5kbGVzIGFyY2hhaWMgY2hlY2tzdW1zLCB3aGljaCBtYWtlcyBpdCBlYXNpZXIgZm9yIHJlbW90ZSBhdHRhY2tlcnMgdG8gYnlwYXNzIGludGVuZGVkIGFjY2VzcyByZXN0cmljdGlvbnMuIE5PVEU6IHRoZSByc3luYyBkZXZlbG9wbWVudCBicmFuY2ggaGFzIHNpZ25pZmljYW50IHVzZSBiZXlvbmQgdGhlIHJzeW5jIGRldmVsb3BlcnMsIGUuZy4sIHRoZSBjb2RlIGhhcyBiZWVuIGNvcGllZCBmb3IgdXNlIGluIHZhcmlvdXMgR2l0SHViIHByb2plY3RzLlwiLFwic2V2ZXJpdHlcIjpcIkNyaXRpY2FsXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTctMTAtMjlcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMDNcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTM1NFwiLFwicmVmZXJlbmNlc1wiOltcImh0dHBzOi8vZ2l0LnNhbWJhLm9yZy8/cD1yc3luYy5naXQ7YT1jb21taXQ7aD03YjhhNGVjZDZmZjljZGY0ZTVkMzg1MGViZjgyMmYxZTk4OTI1NWIzXCIsXCJodHRwczovL2dpdC5zYW1iYS5vcmcvP3A9cnN5bmMuZ2l0O2E9Y29tbWl0O2g9OWE0ODBkZWVjNGQyMDI3N2Q4ZTIwYmM1NTUxNWVmMDY0MGNhMWU1NVwiLFwiaHR0cHM6Ly9naXQuc2FtYmEub3JnLz9wPXJzeW5jLmdpdDthPWNvbW1pdDtoPWMyNTI1NDZjZWViMDkyNWViOGE0MDYxMzE1ZTNmZjBhOGM1NWI0OGJcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE3LTE1OTk0XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTktOTE2OSBhZmZlY3RzIGxpYmM2XCIsXCJpZFwiOlwiMjM1MDZcIixcImZpcmVkdGltZXNcIjo2OH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJjNlwiLFwic291cmNlXCI6XCJnbGliY1wiLFwidmVyc2lvblwiOlwiMi4yMy0wdWJ1bnR1MTFcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMi4yOVwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiOS44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOS05MTY5XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTktOTE2OSBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJJbiB0aGUgR05VIEMgTGlicmFyeSAoYWthIGdsaWJjIG9yIGxpYmM2KSB0aHJvdWdoIDIuMjksIHByb2NlZWRfbmV4dF9ub2RlIGluIHBvc2l4L3JlZ2V4ZWMuYyBoYXMgYSBoZWFwLWJhc2VkIGJ1ZmZlciBvdmVyLXJlYWQgdmlhIGFuIGF0dGVtcHRlZCBjYXNlLWluc2Vuc2l0aXZlIHJlZ3VsYXItZXhwcmVzc2lvbiBtYXRjaC5cIixcInNldmVyaXR5XCI6XCJDcml0aWNhbFwiLFwicHVibGlzaGVkXCI6XCIyMDE5LTAyLTI2XCIsXCJ1cGRhdGVkXCI6XCIyMDE5LTA0LTE2XCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS0xMjVcIixcImJ1Z3ppbGxhX3JlZmVyZW5jZXNcIjpbXCJodHRwczovL2RlYmJ1Z3MuZ251Lm9yZy9jZ2kvYnVncmVwb3J0LmNnaT9idWc9MzQxNDBcIixcImh0dHBzOi8vZGViYnVncy5nbnUub3JnL2NnaS9idWdyZXBvcnQuY2dpP2J1Zz0zNDE0MlwiLFwiaHR0cHM6Ly9zb3VyY2V3YXJlLm9yZy9idWd6aWxsYS9zaG93X2J1Zy5jZ2k/aWQ9MjQxMTRcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTA3MTYwXCIsXCJodHRwczovL2RlYmJ1Z3MuZ251Lm9yZy9jZ2kvYnVncmVwb3J0LmNnaT9idWc9MzQxNDBcIixcImh0dHBzOi8vZGViYnVncy5nbnUub3JnL2NnaS9idWdyZXBvcnQuY2dpP2J1Zz0zNDE0MlwiLFwiaHR0cHM6Ly9rYy5tY2FmZWUuY29tL2NvcnBvcmF0ZS9pbmRleD9wYWdlPWNvbnRlbnQmaWQ9U0IxMDI3OFwiLFwiaHR0cHM6Ly9zZWN1cml0eS5uZXRhcHAuY29tL2Fkdmlzb3J5L250YXAtMjAxOTAzMTUtMDAwMi9cIixcImh0dHBzOi8vc291cmNld2FyZS5vcmcvYnVnemlsbGEvc2hvd19idWcuY2dpP2lkPTI0MTE0XCIsXCJodHRwczovL3NvdXJjZXdhcmUub3JnL2dpdC9naXR3ZWIuY2dpP3A9Z2xpYmMuZ2l0O2E9Y29tbWl0O2g9NTgzZGQ4NjBkNWI4MzMwMzcxNzUyNDcyMzBhMzI4ZjAwNTBkYmZlOVwiLFwiaHR0cHM6Ly9zdXBwb3J0LmY1LmNvbS9jc3AvYXJ0aWNsZS9LNTQ4MjMxODRcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE5LTkxNjlcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE5L0NWRS0yMDE5LTkxNjkuaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxOS05MTY5XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTctMTUwODggYWZmZWN0cyBrcmI1LWxvY2FsZXNcIixcImlkXCI6XCIyMzUwNlwiLFwiZmlyZWR0aW1lc1wiOjczfSxcImRhdGFcIjp7XCJ2dWxuZXJhYmlsaXR5XCI6e1wicGFja2FnZVwiOntcIm5hbWVcIjpcImtyYjUtbG9jYWxlc1wiLFwic291cmNlXCI6XCJrcmI1XCIsXCJ2ZXJzaW9uXCI6XCIxLjEzLjIrZGZzZy01dWJ1bnR1Mi4xXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFsbFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIHVuZml4ZWRcIn0sXCJjdnNzXCI6e1wiY3ZzczJcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJhdXRoZW50aWNhdGlvblwiOlwibm9uZVwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwicGFydGlhbFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJwYXJ0aWFsXCJ9LFwiYmFzZV9zY29yZVwiOlwiNy41MDAwMDBcIn0sXCJjdnNzM1wiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcInByaXZpbGVnZXNfcmVxdWlyZWRcIjpcIm5vbmVcIixcInVzZXJfaW50ZXJhY3Rpb25cIjpcIm5vbmVcIixcInNjb3BlXCI6XCJ1bmNoYW5nZWRcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcImhpZ2hcIixcImludGVncml0eV9pbXBhY3RcIjpcImhpZ2hcIixcImF2YWlsYWJpbGl0eVwiOlwiaGlnaFwifSxcImJhc2Vfc2NvcmVcIjpcIjkuODAwMDAwXCJ9fSxcImN2ZVwiOlwiQ1ZFLTIwMTctMTUwODhcIixcInRpdGxlXCI6XCJDVkUtMjAxNy0xNTA4OCBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbmVnbGlnaWJsZS5cIixcInJhdGlvbmFsZVwiOlwicGx1Z2lucy9wcmVhdXRoL3BraW5pdC9wa2luaXRfY3J5cHRvX29wZW5zc2wuYyBpbiBNSVQgS2VyYmVyb3MgNSAoYWthIGtyYjUpIHRocm91Z2ggMS4xNS4yIG1pc2hhbmRsZXMgRGlzdGluZ3Vpc2hlZCBOYW1lIChETikgZmllbGRzLCB3aGljaCBhbGxvd3MgcmVtb3RlIGF0dGFja2VycyB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIG9yIGNhdXNlIGEgZGVuaWFsIG9mIHNlcnZpY2UgKGJ1ZmZlciBvdmVyZmxvdyBhbmQgYXBwbGljYXRpb24gY3Jhc2gpIGluIHNpdHVhdGlvbnMgaW52b2x2aW5nIHVudHJ1c3RlZCBYLjUwOSBkYXRhLCByZWxhdGVkIHRvIHRoZSBnZXRfbWF0Y2hpbmdfZGF0YSBhbmQgWDUwOV9OQU1FX29uZWxpbmVfZXggZnVuY3Rpb25zLiBOT1RFOiB0aGlzIGhhcyBzZWN1cml0eSByZWxldmFuY2Ugb25seSBpbiB1c2UgY2FzZXMgb3V0c2lkZSBvZiB0aGUgTUlUIEtlcmJlcm9zIGRpc3RyaWJ1dGlvbiwgZS5nLiwgdGhlIHVzZSBvZiBnZXRfbWF0Y2hpbmdfZGF0YSBpbiBLREMgY2VydGF1dGggcGx1Z2luIGNvZGUgdGhhdCBpcyBzcGVjaWZpYyB0byBSZWQgSGF0LlwiLFwic2V2ZXJpdHlcIjpcIkNyaXRpY2FsXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTctMTEtMjNcIixcInVwZGF0ZWRcIjpcIjIwMTktMTAtMDlcIixcInN0YXRlXCI6XCJVbmZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTE5XCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cDovL2J1Z3MuZGViaWFuLm9yZy9jZ2ktYmluL2J1Z3JlcG9ydC5jZ2k/YnVnPTg3MTY5OFwiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC8xMDE1OTRcIixcImh0dHBzOi8vYnVncy5kZWJpYW4ub3JnL2NnaS1iaW4vYnVncmVwb3J0LmNnaT9idWc9ODcxNjk4XCIsXCJodHRwczovL2J1Z3ppbGxhLnJlZGhhdC5jb20vc2hvd19idWcuY2dpP2lkPTE1MDQwNDVcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9rcmI1L2tyYjUvY29tbWl0L2ZiYjY4N2RiMTA4OGRkZDg5NGQ5NzU5OTZlNWY2YTQyNTJiOWEyYjRcIixcImh0dHBzOi8vZ2l0aHViLmNvbS9rcmI1L2tyYjUvcHVsbC83MDdcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE3LTE1MDg4XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxNy9DVkUtMjAxNy0xNTA4OC5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE3LTE1MDg4XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbiAge1wicnVsZVwiOntcImxldmVsXCI6MTMsXCJkZXNjcmlwdGlvblwiOlwiQ1ZFLTIwMTgtNjQ4NSBhZmZlY3RzIGxpYmMtYmluXCIsXCJpZFwiOlwiMjM1MDZcIixcImZpcmVkdGltZXNcIjo3OH0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJjLWJpblwiLFwic291cmNlXCI6XCJnbGliY1wiLFwidmVyc2lvblwiOlwiMi4yMy0wdWJ1bnR1MTFcIixcImFyY2hpdGVjdHVyZVwiOlwiYW1kNjRcIixcImNvbmRpdGlvblwiOlwiUGFja2FnZSBsZXNzIG9yIGVxdWFsIHRoYW4gMi4yNlwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiOS44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxOC02NDg1XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTgtNjQ4NSBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbWVkaXVtLlwiLFwicmF0aW9uYWxlXCI6XCJBbiBpbnRlZ2VyIG92ZXJmbG93IGluIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgcG9zaXhfbWVtYWxpZ24gaW4gbWVtYWxpZ24gZnVuY3Rpb25zIGluIHRoZSBHTlUgQyBMaWJyYXJ5IChha2EgZ2xpYmMgb3IgbGliYzYpIDIuMjYgYW5kIGVhcmxpZXIgY291bGQgY2F1c2UgdGhlc2UgZnVuY3Rpb25zIHRvIHJldHVybiBhIHBvaW50ZXIgdG8gYSBoZWFwIGFyZWEgdGhhdCBpcyB0b28gc21hbGwsIHBvdGVudGlhbGx5IGxlYWRpbmcgdG8gaGVhcCBjb3JydXB0aW9uLlwiLFwic2V2ZXJpdHlcIjpcIkNyaXRpY2FsXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTgtMDItMDFcIixcInVwZGF0ZWRcIjpcIjIwMTktMTItMTBcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTE5MFwiLFwiYnVnemlsbGFfcmVmZXJlbmNlc1wiOltcImh0dHA6Ly9idWdzLmRlYmlhbi5vcmcvODc4MTU5XCIsXCJodHRwczovL3NvdXJjZXdhcmUub3JnL2J1Z3ppbGxhL3Nob3dfYnVnLmNnaT9pZD0yMjM0M1wiXSxcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vYnVncy5kZWJpYW4ub3JnLzg3ODE1OVwiLFwiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvMTAyOTEyXCIsXCJodHRwczovL2FjY2Vzcy5yZWRoYXQuY29tL2VycmF0YS9SSEJBLTIwMTk6MDMyN1wiLFwiaHR0cHM6Ly9hY2Nlc3MucmVkaGF0LmNvbS9lcnJhdGEvUkhTQS0yMDE4OjMwOTJcIixcImh0dHBzOi8vc2VjdXJpdHkubmV0YXBwLmNvbS9hZHZpc29yeS9udGFwLTIwMTkwNDA0LTAwMDMvXCIsXCJodHRwczovL3NvdXJjZXdhcmUub3JnL2J1Z3ppbGxhL3Nob3dfYnVnLmNnaT9pZD0yMjM0M1wiLFwiaHR0cHM6Ly91c24udWJ1bnR1LmNvbS80MjE4LTEvXCIsXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3RlY2huZXR3b3JrL3NlY3VyaXR5LWFkdmlzb3J5L2NwdWFwcjIwMTktNTA3MjgxMy5odG1sXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxOC02NDg1XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxOC9DVkUtMjAxOC02NDg1Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTgtNjQ4NVwiLFwiaHR0cHM6Ly91c24udWJ1bnR1LmNvbS91c24vdXNuLTQyMTgtMVwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEzLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE2LTc5NDQgYWZmZWN0cyBsaWJ4Zml4ZXMzXCIsXCJpZFwiOlwiMjM1MDZcIixcImZpcmVkdGltZXNcIjo4Mn0sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJ4Zml4ZXMzXCIsXCJzb3VyY2VcIjpcImxpYnhmaXhlc1wiLFwidmVyc2lvblwiOlwiMTo1LjAuMS0yXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDUuMC4yXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjcuNTAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI5LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE2LTc5NDRcIixcInRpdGxlXCI6XCJDVkUtMjAxNi03OTQ0IG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIkludGVnZXIgb3ZlcmZsb3cgaW4gWC5vcmcgbGliWGZpeGVzIGJlZm9yZSA1LjAuMyBvbiAzMi1iaXQgcGxhdGZvcm1zIG1pZ2h0IGFsbG93IHJlbW90ZSBYIHNlcnZlcnMgdG8gZ2FpbiBwcml2aWxlZ2VzIHZpYSBhIGxlbmd0aCB2YWx1ZSBvZiBJTlRfTUFYLCB3aGljaCB0cmlnZ2VycyB0aGUgY2xpZW50IHRvIHN0b3AgcmVhZGluZyBkYXRhIGFuZCBnZXQgb3V0IG9mIHN5bmMuXCIsXCJzZXZlcml0eVwiOlwiQ3JpdGljYWxcIixcInB1Ymxpc2hlZFwiOlwiMjAxNi0xMi0xM1wiLFwidXBkYXRlZFwiOlwiMjAxNy0wNy0wMVwiLFwic3RhdGVcIjpcIkZpeGVkXCIsXCJjd2VfcmVmZXJlbmNlXCI6XCJDV0UtMTkwXCIsXCJidWd6aWxsYV9yZWZlcmVuY2VzXCI6W1wiaHR0cHM6Ly9idWdzLmRlYmlhbi5vcmcvY2dpLWJpbi9idWdyZXBvcnQuY2dpP2J1Zz04NDA0NDJcIl0sXCJyZWZlcmVuY2VzXCI6W1wiaHR0cDovL3d3dy5vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMTYvMTAvMDQvMlwiLFwiaHR0cDovL3d3dy5vcGVud2FsbC5jb20vbGlzdHMvb3NzLXNlY3VyaXR5LzIwMTYvMTAvMDQvNFwiLFwiaHR0cDovL3d3dy5zZWN1cml0eWZvY3VzLmNvbS9iaWQvOTMzNjFcIixcImh0dHA6Ly93d3cuc2VjdXJpdHl0cmFja2VyLmNvbS9pZC8xMDM2OTQ1XCIsXCJodHRwczovL2NnaXQuZnJlZWRlc2t0b3Aub3JnL3hvcmcvbGliL2xpYlhmaXhlcy9jb21taXQvP2lkPTYxYzEwMzllZTIzYTJkMWRlNzEyODQzYmVkMzQ4MDY1NGQ3ZWY0MmVcIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvNENFNlZKV0JNT1dMU0NINE9QNFRBRVBJQTdOUDUzT04vXCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlL0dFNDNNRENSR1M0UjdNUlJaTlZTTFJFSFJMVTVPSENWL1wiLFwiaHR0cHM6Ly9saXN0cy54Lm9yZy9hcmNoaXZlcy94b3JnLWFubm91bmNlLzIwMTYtT2N0b2Jlci8wMDI3MjAuaHRtbFwiLFwiaHR0cHM6Ly9zZWN1cml0eS5nZW50b28ub3JnL2dsc2EvMjAxNzA0LTAzXCIsXCJodHRwczovL252ZC5uaXN0Lmdvdi92dWxuL2RldGFpbC9DVkUtMjAxNi03OTQ0XCIsXCJodHRwOi8vcGVvcGxlLmNhbm9uaWNhbC5jb20vfnVidW50dS1zZWN1cml0eS9jdmUvMjAxNi9DVkUtMjAxNi03OTQ0Lmh0bWxcIixcImh0dHBzOi8vY3ZlLm1pdHJlLm9yZy9jZ2ktYmluL2N2ZW5hbWUuY2dpP25hbWU9Q1ZFLTIwMTYtNzk0NFwiXSxcImFzc2lnbmVyXCI6XCJjdmVAbWl0cmUub3JnXCIsXCJjdmVfdmVyc2lvblwiOlwiNC4wXCJ9fX0sXG4gIHtcInJ1bGVcIjp7XCJsZXZlbFwiOjEzLFwiZGVzY3JpcHRpb25cIjpcIkNWRS0yMDE2LTc5NDcgYWZmZWN0cyBsaWJ4cmFuZHIyXCIsXCJpZFwiOlwiMjM1MDZcIixcImZpcmVkdGltZXNcIjo4M30sXCJkYXRhXCI6e1widnVsbmVyYWJpbGl0eVwiOntcInBhY2thZ2VcIjp7XCJuYW1lXCI6XCJsaWJ4cmFuZHIyXCIsXCJzb3VyY2VcIjpcImxpYnhyYW5kclwiLFwidmVyc2lvblwiOlwiMjoxLjUuMC0xXCIsXCJhcmNoaXRlY3R1cmVcIjpcImFtZDY0XCIsXCJjb25kaXRpb25cIjpcIlBhY2thZ2UgbGVzcyBvciBlcXVhbCB0aGFuIDEuNS4wXCJ9LFwiY3Zzc1wiOntcImN2c3MyXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwiYXV0aGVudGljYXRpb25cIjpcIm5vbmVcIixcImNvbmZpZGVudGlhbGl0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImludGVncml0eV9pbXBhY3RcIjpcInBhcnRpYWxcIixcImF2YWlsYWJpbGl0eVwiOlwicGFydGlhbFwifSxcImJhc2Vfc2NvcmVcIjpcIjcuNTAwMDAwXCJ9LFwiY3ZzczNcIjp7XCJ2ZWN0b3JcIjp7XCJhdHRhY2tfdmVjdG9yXCI6XCJuZXR3b3JrXCIsXCJhY2Nlc3NfY29tcGxleGl0eVwiOlwibG93XCIsXCJwcml2aWxlZ2VzX3JlcXVpcmVkXCI6XCJub25lXCIsXCJ1c2VyX2ludGVyYWN0aW9uXCI6XCJub25lXCIsXCJzY29wZVwiOlwidW5jaGFuZ2VkXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJoaWdoXCIsXCJhdmFpbGFiaWxpdHlcIjpcImhpZ2hcIn0sXCJiYXNlX3Njb3JlXCI6XCI5LjgwMDAwMFwifX0sXCJjdmVcIjpcIkNWRS0yMDE2LTc5NDdcIixcInRpdGxlXCI6XCJDVkUtMjAxNi03OTQ3IG9uIFVidW50dSAxNi4wNCBMVFMgKHhlbmlhbCkgLSBsb3cuXCIsXCJyYXRpb25hbGVcIjpcIk11bHRpcGxlIGludGVnZXIgb3ZlcmZsb3dzIGluIFgub3JnIGxpYlhyYW5kciBiZWZvcmUgMS41LjEgYWxsb3cgcmVtb3RlIFggc2VydmVycyB0byB0cmlnZ2VyIG91dC1vZi1ib3VuZHMgd3JpdGUgb3BlcmF0aW9ucyB2aWEgYSBjcmFmdGVkIHJlc3BvbnNlLlwiLFwic2V2ZXJpdHlcIjpcIkNyaXRpY2FsXCIsXCJwdWJsaXNoZWRcIjpcIjIwMTYtMTItMTNcIixcInVwZGF0ZWRcIjpcIjIwMTctMDctMDFcIixcInN0YXRlXCI6XCJGaXhlZFwiLFwiY3dlX3JlZmVyZW5jZVwiOlwiQ1dFLTc4N1wiLFwicmVmZXJlbmNlc1wiOltcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE2LzEwLzA0LzJcIixcImh0dHA6Ly93d3cub3BlbndhbGwuY29tL2xpc3RzL29zcy1zZWN1cml0eS8yMDE2LzEwLzA0LzRcIixcImh0dHA6Ly93d3cuc2VjdXJpdHlmb2N1cy5jb20vYmlkLzkzMzY1XCIsXCJodHRwOi8vd3d3LnNlY3VyaXR5dHJhY2tlci5jb20vaWQvMTAzNjk0NVwiLFwiaHR0cHM6Ly9jZ2l0LmZyZWVkZXNrdG9wLm9yZy94b3JnL2xpYi9saWJYcmFuZHIvY29tbWl0Lz9pZD1hMGRmM2UxYzc3MjgyMDVlNWM3NjUwYjJlNmRjZTY4NDEzOTI1NGE2XCIsXCJodHRwczovL2xpc3RzLmZlZG9yYXByb2plY3Qub3JnL2FyY2hpdmVzL2xpc3QvcGFja2FnZS1hbm5vdW5jZUBsaXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9tZXNzYWdlLzc0RkZPSFdZSUtRWlRKTFJKV0RNSjRXM1dZQkVMVVVHL1wiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS9ZNzY2Mk9aV0NTVExSUEtTNlIzRTRZNE0yNkJTVkFBTS9cIixcImh0dHBzOi8vbGlzdHMueC5vcmcvYXJjaGl2ZXMveG9yZy1hbm5vdW5jZS8yMDE2LU9jdG9iZXIvMDAyNzIwLmh0bWxcIixcImh0dHBzOi8vc2VjdXJpdHkuZ2VudG9vLm9yZy9nbHNhLzIwMTcwNC0wM1wiLFwiaHR0cHM6Ly9udmQubmlzdC5nb3YvdnVsbi9kZXRhaWwvQ1ZFLTIwMTYtNzk0N1wiLFwiaHR0cDovL3Blb3BsZS5jYW5vbmljYWwuY29tL351YnVudHUtc2VjdXJpdHkvY3ZlLzIwMTYvQ1ZFLTIwMTYtNzk0Ny5odG1sXCIsXCJodHRwczovL2N2ZS5taXRyZS5vcmcvY2dpLWJpbi9jdmVuYW1lLmNnaT9uYW1lPUNWRS0yMDE2LTc5NDdcIl0sXCJhc3NpZ25lclwiOlwiY3ZlQG1pdHJlLm9yZ1wiLFwiY3ZlX3ZlcnNpb25cIjpcIjQuMFwifX19LFxuICB7XCJydWxlXCI6e1wibGV2ZWxcIjoxMyxcImRlc2NyaXB0aW9uXCI6XCJDVkUtMjAxNi03OTQ4IGFmZmVjdHMgbGlieHJhbmRyMlwiLFwiaWRcIjpcIjIzNTA2XCIsXCJmaXJlZHRpbWVzXCI6ODR9LFwiZGF0YVwiOntcInZ1bG5lcmFiaWxpdHlcIjp7XCJwYWNrYWdlXCI6e1wibmFtZVwiOlwibGlieHJhbmRyMlwiLFwic291cmNlXCI6XCJsaWJ4cmFuZHJcIixcInZlcnNpb25cIjpcIjI6MS41LjAtMVwiLFwiYXJjaGl0ZWN0dXJlXCI6XCJhbWQ2NFwiLFwiY29uZGl0aW9uXCI6XCJQYWNrYWdlIGxlc3Mgb3IgZXF1YWwgdGhhbiAxLjUuMFwifSxcImN2c3NcIjp7XCJjdnNzMlwiOntcInZlY3RvclwiOntcImF0dGFja192ZWN0b3JcIjpcIm5ldHdvcmtcIixcImFjY2Vzc19jb21wbGV4aXR5XCI6XCJsb3dcIixcImF1dGhlbnRpY2F0aW9uXCI6XCJub25lXCIsXCJjb25maWRlbnRpYWxpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJpbnRlZ3JpdHlfaW1wYWN0XCI6XCJwYXJ0aWFsXCIsXCJhdmFpbGFiaWxpdHlcIjpcInBhcnRpYWxcIn0sXCJiYXNlX3Njb3JlXCI6XCI3LjUwMDAwMFwifSxcImN2c3MzXCI6e1widmVjdG9yXCI6e1wiYXR0YWNrX3ZlY3RvclwiOlwibmV0d29ya1wiLFwiYWNjZXNzX2NvbXBsZXhpdHlcIjpcImxvd1wiLFwicHJpdmlsZWdlc19yZXF1aXJlZFwiOlwibm9uZVwiLFwidXNlcl9pbnRlcmFjdGlvblwiOlwibm9uZVwiLFwic2NvcGVcIjpcInVuY2hhbmdlZFwiLFwiY29uZmlkZW50aWFsaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiaW50ZWdyaXR5X2ltcGFjdFwiOlwiaGlnaFwiLFwiYXZhaWxhYmlsaXR5XCI6XCJoaWdoXCJ9LFwiYmFzZV9zY29yZVwiOlwiOS44MDAwMDBcIn19LFwiY3ZlXCI6XCJDVkUtMjAxNi03OTQ4XCIsXCJ0aXRsZVwiOlwiQ1ZFLTIwMTYtNzk0OCBvbiBVYnVudHUgMTYuMDQgTFRTICh4ZW5pYWwpIC0gbG93LlwiLFwicmF0aW9uYWxlXCI6XCJYLm9yZyBsaWJYcmFuZHIgYmVmb3JlIDEuNS4xIGFsbG93cyByZW1vdGUgWCBzZXJ2ZXJzIHRvIHRyaWdnZXIgb3V0LW9mLWJvdW5kcyB3cml0ZSBvcGVyYXRpb25zIGJ5IGxldmVyYWdpbmcgbWlzaGFuZGxpbmcgb2YgcmVwbHkgZGF0YS5cIixcInNldmVyaXR5XCI6XCJDcml0aWNhbFwiLFwicHVibGlzaGVkXCI6XCIyMDE2LTEyLTEzXCIsXCJ1cGRhdGVkXCI6XCIyMDE3LTA3LTAxXCIsXCJzdGF0ZVwiOlwiRml4ZWRcIixcImN3ZV9yZWZlcmVuY2VcIjpcIkNXRS03ODdcIixcInJlZmVyZW5jZXNcIjpbXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxNi8xMC8wNC8yXCIsXCJodHRwOi8vd3d3Lm9wZW53YWxsLmNvbS9saXN0cy9vc3Mtc2VjdXJpdHkvMjAxNi8xMC8wNC80XCIsXCJodHRwOi8vd3d3LnNlY3VyaXR5Zm9jdXMuY29tL2JpZC85MzM3M1wiLFwiaHR0cDovL3d3dy5zZWN1cml0eXRyYWNrZXIuY29tL2lkLzEwMzY5NDVcIixcImh0dHBzOi8vY2dpdC5mcmVlZGVza3RvcC5vcmcveG9yZy9saWIvbGliWHJhbmRyL2NvbW1pdC8/aWQ9YTBkZjNlMWM3NzI4MjA1ZTVjNzY1MGIyZTZkY2U2ODQxMzkyNTRhNlwiLFwiaHR0cHM6Ly9saXN0cy5mZWRvcmFwcm9qZWN0Lm9yZy9hcmNoaXZlcy9saXN0L3BhY2thZ2UtYW5ub3VuY2VAbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvbWVzc2FnZS83NEZGT0hXWUlLUVpUSkxSSldETUo0VzNXWUJFTFVVRy9cIixcImh0dHBzOi8vbGlzdHMuZmVkb3JhcHJvamVjdC5vcmcvYXJjaGl2ZXMvbGlzdC9wYWNrYWdlLWFubm91bmNlQGxpc3RzLmZlZG9yYXByb2plY3Qub3JnL21lc3NhZ2UvWTc2NjJPWldDU1RMUlBLUzZSM0U0WTRNMjZCU1ZBQU0vXCIsXCJodHRwczovL2xpc3RzLngub3JnL2FyY2hpdmVzL3hvcmctYW5ub3VuY2UvMjAxNi1PY3RvYmVyLzAwMjcyMC5odG1sXCIsXCJodHRwczovL3NlY3VyaXR5LmdlbnRvby5vcmcvZ2xzYS8yMDE3MDQtMDNcIixcImh0dHBzOi8vbnZkLm5pc3QuZ292L3Z1bG4vZGV0YWlsL0NWRS0yMDE2LTc5NDhcIixcImh0dHA6Ly9wZW9wbGUuY2Fub25pY2FsLmNvbS9+dWJ1bnR1LXNlY3VyaXR5L2N2ZS8yMDE2L0NWRS0yMDE2LTc5NDguaHRtbFwiLFwiaHR0cHM6Ly9jdmUubWl0cmUub3JnL2NnaS1iaW4vY3ZlbmFtZS5jZ2k/bmFtZT1DVkUtMjAxNi03OTQ4XCJdLFwiYXNzaWduZXJcIjpcImN2ZUBtaXRyZS5vcmdcIixcImN2ZV92ZXJzaW9uXCI6XCI0LjBcIn19fSxcbl07XG4iXX0=