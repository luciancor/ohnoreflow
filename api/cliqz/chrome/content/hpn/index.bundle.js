(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.CliqzGlobal = global.CliqzGlobal || {})));
}(this, (function (exports) { 'use strict';

/* global Components, console */
try {
  Components.utils.import('resource://gre/modules/Console.jsm');
} catch (e) {
  // Older version of Firefox
  Components.utils.import('resource://gre/modules/devtools/Console.jsm');
}

/* global window */
var window$1 = typeof window !== 'undefined' ? window : undefined;

/* global global, Services, Components, XPCOMUtils, window */

Components.utils.import('resource://gre/modules/XPCOMUtils.jsm');
Components.utils.import('resource://gre/modules/Services.jsm');

// TODO: @remusao webrequest-pipeline/page-store require chrome


const fakeGlobal = Object.create(null);

/**
 * exporting a global object to allow access to javascript buildins like
 * Object, Symbol
 */
/* eslint-disable func-names, prefer-arrow-callback, new-cap */
const safeGlobal = new Proxy(fakeGlobal, {
  get(target, key) {
    if (fakeGlobal[key]) {
      return fakeGlobal[key];
    }

    if (typeof window !== 'undefined') {
      return window[key];
    }

    if (typeof global !== 'undefined') {
      return global[key];
    }

    return undefined;
  }
});

/* eslint no-console: 'off' */

const prefs$1 = Services.prefs.getBranch('');
const complexRegEx = /^chrome:\/\/.+\/locale\/.+\.properties/;

function prefixPref(pref) {
  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'extensions.cliqz.';

  return `${prefix}${pref}`;
}

function getPref(key, defaultValue, prefix) {
  const pref = prefixPref(key, prefix);
  try {
    switch (prefs$1.getPrefType(pref)) {
      case 128:
        return prefs$1.getBoolPref(pref);
      case 32:
        {
          let charVal = prefs$1.getCharPref(pref);

          // it might be a complex value
          if (complexRegEx.test(charVal)) {
            try {
              charVal = prefs$1.getComplexValue(pref, Components.interfaces.nsIPrefLocalizedString).data;
            } catch (e) {
              console.log(`Error fetching pref: ${pref}`);
            }
          }

          return charVal;
        }
      case 64:
        return prefs$1.getIntPref(pref);
      default:
        return defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
}

function setPref(key, value, prefix) {
  const pref = prefixPref(key, prefix);

  switch (typeof value) {
    case 'boolean':
      prefs$1.setBoolPref(pref, value);break;
    case 'number':
      prefs$1.setIntPref(pref, value);break;
    case 'string':
      prefs$1.setCharPref(pref, value);break;
    default:
      Services.console.logStringMessage(`WARNING: Unable to save "${pref}`);break;
  }
}

function hasPref(key, prefix) {
  const pref = prefixPref(key, prefix);
  return prefs$1.getPrefType(pref) !== 0;
}

function clearPref(key, prefix) {
  const pref = prefixPref(key, prefix);
  prefs$1.clearUserPref(pref);
}

function enableChangeEvents() {}

function disableChangeEvents() {}

function init$1() {
  return Promise.resolve();
}

var prefs = {
  /**
   * Get a value from preferences db
   * @param {string}  pref - preference identifier
   * @param {*=}      defautlValue - returned value in case pref is not defined
   * @param {string=} prefix - prefix for pref
   */
  get: getPref,
  /**
   * Set a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  set: setPref,
  /**
   * Check if there is a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  has: hasPref,
  /**
   * Clear value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  clear: clearPref,

  enableChangeEvents,

  disableChangeEvents,

  /**
   * Set a value of type object in preferences db
   * @param {string}  pref - preference identifier
   */
  getObject(key) {
    return JSON.parse(this.get(key, '{}'));
  },

  /**
   * Set a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {object|function}
   */
  setObject(key, value) {
    if (value instanceof Function) {
      const prevValue = this.getObject(key);
      const newValue = value(prevValue);
      this.setObject(key, newValue);
    } else if (typeof value === 'object') {
      this.set(key, JSON.stringify(value));
    } else {
      throw new TypeError();
    }
  },

  init: init$1

};

// detect dev flag on react-native
const devMode = typeof global !== 'undefined' && global.__DEV__ === true;
// either take flag from prefs, or global dev mode flag
// We need to put a try, catch, to avoid content-scripts throwing error,
// while trying to get the prefs.
// Should look for a cleaner solutions at some point. for isLoggingEnabled, isDeveloper.

function isLoggingEnabled() {
  try {
    return prefs.get('showConsoleLogs', devMode || false);
  } catch (ee) {
    return false;
  }
}

function isDeveloper() {
  try {
    return prefs.get('developer', devMode || false);
  } catch (ee) {
    return false;
  }
}

let log;
let error;
let debug;
let warn;

if (isLoggingEnabled()) {
  log = console.log.bind(console, 'Cliqz');
  error = console.error.bind(console, 'Cliqz error');
  warn = console.warn.bind(console, 'Cliqz warning');
  if (isDeveloper()) {
    debug = log;
  } else {
    debug = () => {};
  }
} else {
  log = () => {};
  error = () => {};
  debug = () => {};
  warn = () => {};
}

var console$1 = {
  log,
  error,
  debug,
  warn
};

function nextTick(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return Promise.resolve().then(() => fn(...args));
}

/*
 * This method implements the publish subscribe design pattern
 *
 * Event naming scheme:
 *    cliqz.module_name.event_name
 *
 *  single sender -> multiple potential recipients
 *    for example: cliqz.core.urlbar_focus (inform others about urlbar focus)
 *    module_name describes sender
 *  multiple potential senders -> single recipient
 *    for example: cliqz.msg_center.show_message (tell the message center to show a message)
 *    module_name describes recipient (this is more like a RPC)
 */

const CliqzEvents = {
  // use a javascript object to push the message ids and the callbacks
  cache: {},
  tickCallbacks: [],
  /*
   * Publish events of interest with a specific id
   */
  queue: [],

  pub(id) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    const callbacks = (CliqzEvents.cache[id] || []).map(ev => nextTick(() => {
      ev.call(null, ...args);
    }).catch(e => {
      console$1.error(`CliqzEvents error: ${id}`, e);
    }));

    const finishedPromise = Promise.all(callbacks).then(() => {
      const index = this.queue.indexOf(finishedPromise);
      this.queue.splice(index, 1);
      if (this.queue.length === 0) {
        this.triggerNextTick();
      }
    });
    this.queue.push(finishedPromise);
  },

  triggerNextTick() {
    this.tickCallbacks.forEach(cb => {
      try {
        cb();
      } catch (e) {
        // empty
      }
    });
    this.tickCallbacks = [];
  },

  nextTick() {
    let cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};

    this.tickCallbacks = this.tickCallbacks || [];
    this.tickCallbacks.push(cb);
  },

  /* Subscribe to events of interest
   * with a specific id and a callback
   * to be executed when the event is observed
   */
  sub(id, fn) {
    CliqzEvents.cache[id] = CliqzEvents.cache[id] || [];
    CliqzEvents.cache[id].push(fn);
  },

  subscribe(eventName, callback, that) {
    let cb;
    if (that) {
      cb = callback.bind(that);
    } else {
      cb = callback;
    }

    CliqzEvents.sub(eventName, cb);

    return {
      unsubscribe() {
        CliqzEvents.un_sub(eventName, cb);
      }
    };
  },

  un_sub(id, fn) {
    if (!CliqzEvents.cache[id] || CliqzEvents.cache[id].length === 0) {
      console$1.error(id, 'Trying to unsubscribe event that had no subscribers');
      return;
    }

    const index = CliqzEvents.cache[id].indexOf(fn);
    if (index > -1) {
      CliqzEvents.cache[id].splice(index, 1);
    } else {
      console$1.error(id, 'Trying to unsubscribe an unknown listener');
    }
  },

  clean_channel(id) {
    if (!CliqzEvents.cache[id]) {
      throw new Error('Trying to unsubscribe an unknown channel');
    }
    CliqzEvents.cache[id] = [];
  },

  /**
   * Adds a listener to eventTarget for events of type eventType, and republishes them
   *  through CliqzEvents with id cliqzEventName.
   */
  proxyEvent(cliqzEventName, eventTarget, eventType) {
    let propagate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let transform = arguments[4];

    const publisher = CliqzEvents.pub.bind(CliqzEvents, cliqzEventName);

    function handler() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      const _args = transform ? transform.call(null, ...args) : args;
      publisher.call(null, ..._args);
    }

    eventTarget.addEventListener(eventType, handler, propagate);
    return {
      unsubscribe() {
        eventTarget.removeEventListener(eventType, handler);
      }
    };
  },

  nextId: function nextId() {
    nextId.id = nextId.id || 0;
    nextId.id += 1;
    return nextId.id;
  },

  purge() {
    this.cache = {};
    this.tickCallbacks = [];
    this.queue = [];
  }
};

/* eslint no-param-reassign: 'off' */

// source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function completeAssign(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(source => {
    const descriptors = Object.keys(source).reduce((_descriptors, key) => {
      _descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return _descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    if (typeof Symbol !== 'undefined') {
      Object.getOwnPropertySymbols(source).forEach(sym => {
        const descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
    }
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var background = function (originalBackground) {
  const background = completeAssign({}, originalBackground);
  const bgInit = background.init;
  const bgUnload = background.unload;
  const bgEvents = background.events;

  // bind actions to background object
  Object.keys(background.actions || {}).forEach(action => {
    background.actions[action] = background.actions[action].bind(background);
  });

  background.init = function init() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    const promise = Promise.resolve(bgInit.apply(background, args));

    Object.keys(bgEvents || {}).forEach(event => {
      bgEvents[event] = bgEvents[event].bind(background);
      CliqzEvents.sub(event, bgEvents[event]);
    });
    return promise;
  };

  background.unload = function unload() {
    Object.keys(bgEvents || {}).forEach(event => {
      CliqzEvents.un_sub(event, bgEvents[event]);
    });

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    bgUnload.apply(background, args);
  };

  return background;
};

var config = {
  "platform": "firefox",
  "baseURL": "resource://cliqz/",
  "testsBasePath": "./build/cliqz@cliqz.com/chrome/content",
  "testem_launchers": ["unit-node", "Chrome"],
  "testem_launchers_ci": ["unit-node"],
  "pack": "cd build && fab package:version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "publish": "cd build && fab publish:beta=$CLIQZ_BETA,channel=$CLIQZ_CHANNEL,pre=$CLIQZ_PRE_RELEASE,version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "settings": {
    "ANOLYSIS_BACKEND_URL": "https://anolysis.privacy.cliqz.com",
    "BACKGROUND_IMAGE_URL": "https://cdn.cliqz.com/brands-database/database/",
    "BW_URL": "https://antiphishing.cliqz.com/api/bwlist?md5=",
    "CAMPAIGN_SERVER": "https://fec.cliqz.com/message/",
    "CDN_BASEURL": "https://cdn.cliqz.com",
    "CLIQZ_SAVE_URL": "https://cliqz.com/q=",
    "CONFIG_PROVIDER": "https://api.cliqz.com/api/v1/config",
    "ENDPOINT_ANONPATTERNSURL": "https://cdn.cliqz.com/human-web/patterns-anon",
    "ENDPOINT_BLIND_SIGNER": "https://hpn-sign.cliqz.com/sign",
    "ENDPOINT_CONFIGURL": "https://safe-browsing.cliqz.com/config",
    "ENDPOINT_HPNV2_COLLECTOR": "https://collector-hpn.cliqz.com",
    "ENDPOINT_HPNV2_CONFIG": "https://collector-hpn.cliqz.com/config",
    "ENDPOINT_HPNV2_JOIN": "https://collector-hpn.cliqz.com/join",
    "ENDPOINT_KEYS_PROVIDER": "https://hpn-collector.cliqz.com/signerKey?q=1",
    "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://hpn-collector.cliqz.com/v2/lookuptable?q=1",
    "ENDPOINT_PATTERNSURL": "https://cdn.cliqz.com/human-web/patterns",
    "ENDPOINT_PROXY_LIST_PROVIDER": "https://hpn-collector.cliqz.com/v2/proxyList?q=1",
    "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.cliqz.com/",
    "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.cliqz.com/config",
    "ENDPOINT_SOURCE_MAP_PROVIDER": "https://hpn-collector.cliqz.com/sourcemapjson?q=1",
    "ENDPOINT_URL": "https://api.cliqz.com/api/v1/rich-header?path=/map&bmresult=",
    "ENDPOINT_USER_REG": "https://hpn-sign.cliqz.com/register",
    "FEEDBACK": "https://cliqz.com/feedback/",
    "HB_NEWS": "hb-news.cliqz.com",
    "HOMPAGE_URL": "https://cliqz.com/",
    "INVENTORY_URL": "https://cdn.cliqz.com/browser-f/fun-demo/inventoryv2.txt.gz",
    "JOBS_URL": "https://cliqz.com/jobs/",
    "OFFERS_BE_BASE_URL": "https://offers-api.cliqz.com",
    "OFFER_TELEMETRY": "https://offers-api.cliqz.com/api/v1/savesignal",
    "OFFER_TELEMETRY_PREFIX": "https://offers-api.cliqz.com",
    "PRIVACY_SCORE_URL": "https://anti-tracking.cliqz.com/api/v1/score?",
    "RESULTS_PROVIDER": "https://api.cliqz.com/api/v2/results?nrh=1&q=",
    "RESULTS_PROVIDER_LOG": "https://api.cliqz.com/api/v1/logging?q=",
    "RESULTS_PROVIDER_PING": "https://api.cliqz.com/ping",
    "RICH_HEADER": "https://api.cliqz.com/api/v2/rich-header?path=/v2/map",
    "RICH_HEADER_PROXY_URL": "hb-news.cliqz.com",
    "ROTATED_TOP_NEWS": "rotated-top-news.cliqz.com",
    "SAFE_BROWSING": "https://safe-browsing.cliqz.com",
    "STATISTICS": "https://stats.cliqz.com",
    "SUGGESTIONS_URL": "https://cliqz.com/search?q=",
    "SUPPORT_URL": "https://cliqz.com/support/",
    "TEAM_URL": "https://cliqz.com/team/",
    "TELEMETRY_ENDPOINT": "https://safebrowsing-experiment.cliqz.com",
    "TRACKER_PROXY_PROXY_PEERS_DEFAULT": "https://p2p-signaling-proxypeer.cliqz.com/peers",
    "TRACKER_PROXY_PROXY_PEERS_EXIT_DEFAULT": "https://p2p-signaling-proxypeer.cliqz.com/exitNodes",
    "TRACKER_PROXY_PROXY_SIGNALING_DEFAULT": "wss://p2p-signaling-proxypeer.cliqz.com",
    "TRIQZ_URL": "https://cliqz.com/tips",
    "TUTORIAL_URL": "https://cliqz.com/home/onboarding",
    "UNINSTALL": "https://cliqz.com/home/offboarding",
    "id": "cliqz@cliqz.com",
    "name": "Cliqz",
    "channel": "04",
    "homepageURL": "https://cliqz.com/",
    "freshTabNews": true,
    "showDataCollectionMessage": true,
    "antitrackingButton": true,
    "showNewBrandAlert": false,
    "suggestions": false,
    "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
    "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
    "HW_CHANNEL": "ff-amo",
    "HPN_CHANNEL": "cliqz",
    "NEW_TAB_URL": "chrome://cliqz/content/freshtab/home.html",
    "ICONS": {
      "active": {
        "default": "control-center/images/cc-active.svg",
        "dark": "control-center/images/cc-active-dark.svg"
      },
      "inactive": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      },
      "critical": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      }
    },
    "BACKGROUNDS": {
      "active": "#471647",
      "inactive": "#471647",
      "critical": "#471647",
      "off": "#471647"
    },
    "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "se"],
    "antitrackingPlaceholder": "cliqz.com/tracking",
    "antitrackingHeader": "CLIQZ-AntiTracking",
    "frameScriptWhitelist": []
  },
  "default_prefs": {
    "modules.history-analyzer.enabled": false
  },
  "modules": ["core", "core-cliqz", "dropdown", "firefox-specific", "static", "geolocation", "ui", "last-query", "human-web", "anti-phishing", "context-menu", "freshtab", "webrequest-pipeline", "antitracking", "performance", "hpn", "control-center", "offers-v2", "offers-cc", "browser-panel", "message-center", "offboarding", "anolysis", "market-analysis", "abtests", "search"],
  "subprojects": [{
    "src": "node_modules/@cliqz-oss/dexie/dist",
    "include": ["dexie.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/@cliqz-oss/pouchdb/dist",
    "include": ["pouchdb.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/handlebars/dist",
    "include": ["handlebars.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/jquery/dist",
    "include": ["jquery.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/mathjs/dist",
    "include": ["math.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/moment/min",
    "include": ["moment.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/moment-range/dist",
    "include": ["moment-range.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/pako/dist",
    "include": ["pako.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/react/umd",
    "include": ["react.production.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/react-dom/umd",
    "include": ["react-dom.production.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/rxjs/bundles",
    "include": ["Rx.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/simple-statistics/dist",
    "include": ["simple-statistics.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tldjs",
    "include": ["tld.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/css",
    "include": ["tooltipster.bundle.min.css"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/js",
    "include": ["tooltipster.bundle.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/css/plugins/tooltipster/sideTip/themes",
    "include": ["tooltipster-sideTip-shadow.min.css"],
    "dest": "vendor"
  }, {
    "src": "node_modules/ua-parser-js/dist",
    "include": ["ua-parser.min.js"],
    "dest": "vendor"
  }],
  "systemDefault": {
    "transpiler": false,
    "packageConfigPaths": ["node_modules/*/package.json"],
    "map": {
      "handlebars": "node_modules/handlebars/dist/handlebars.min.js",
      "jquery": "node_modules/jquery/dist/jquery.min.js",
      "mathjs": "node_modules/mathjs/dist/math.min.js",
      "BigInt": "node_modules/BigInt/src/BigInt.js",
      "react": "node_modules/react/cjs/react.production.min.js",
      "chai": "node_modules/chai/chai.js",
      "chai-dom": "node_modules/chai-dom/chai-dom.js",
      "react-dom": "node_modules/react-dom/cjs/react-dom.production.min.js",
      "qrcodejs": "node_modules/qrcodejs/qrcode.min.js",
      "plugin-json": "node_modules/systemjs-plugin-json/json.js",
      "pako": "node_modules/pako/dist/pako.js",
      "fast-url-parser": "modules/platform/lib/fast-url-parser"
    },
    "paths": {
      "specific/*": "./specific/firefox/*",
      "modules/*": "modules/*",
      "modules": "modules",
      "node_modules/*": "./node_modules/*",
      "*": "./node_modules/*"
    },
    "meta": {
      "specific/*": {
        "format": "global"
      },
      "BigInt": {
        "format": "cjs"
      },
      "*.json": {
        "loader": "plugin-json"
      }
    },
    "packages": {
      "object-assign": {
        "main": "./index.js"
      },
      "modules": {
        "defaultJSExtensions": true,
        "map": {
          "./platform/tldjs": "node_modules/tldjs/index.js"
        },
        "meta": {
          "./platform/lib/zlib.lib.js": {
            "format": "cjs"
          },
          "./platform/lib/sanitize-filename.js": {
            "format": "system"
          },
          "./platform/lib/cron-parser.js": {
            "format": "system"
          },
          "./platform/video-downloader/lib/ytdl-core.js": {
            "format": "system"
          },
          "./platform/lib/fast-url-parser.js": {
            "format": "system"
          },
          "./platform/lib/deep-equal.js": {
            "format": "system"
          },
          "./platform/lib/ajv.js": {
            "format": "system"
          },
          "./platform/lib/jsep.js": {
            "format": "system"
          },
          "*/templates.js": {
            "format": "system"
          }
        }
      }
    }
  },
  "builderDefault": {
    "externals": ["react", "react-dom", "jquery", "handlebars", "mathjs"],
    "globalDeps": {
      "react": "React",
      "react-dom": "ReactDOM",
      "jquery": "$",
      "handlebars": "Handlebars",
      "mathjs": "mathLib"
    },
    "sourceMaps": false,
    "lowResSourceMaps": true,
    "sourceMapContents": true,
    "globalName": "CliqzGlobal",
    "rollup": true
  },
  "bundleConfigs": {
    "modules/core/app.bundle.js": {
      "systemConfig": {
        "transpiler": false,
        "packageConfigPaths": ["node_modules/*/package.json"],
        "map": {
          "handlebars": "node_modules/handlebars/dist/handlebars.min.js",
          "jquery": "node_modules/jquery/dist/jquery.min.js",
          "mathjs": "node_modules/mathjs/dist/math.min.js",
          "BigInt": "node_modules/BigInt/src/BigInt.js",
          "react": "node_modules/react/cjs/react.production.min.js",
          "chai": "node_modules/chai/chai.js",
          "chai-dom": "node_modules/chai-dom/chai-dom.js",
          "react-dom": "node_modules/react-dom/cjs/react-dom.production.min.js",
          "qrcodejs": "node_modules/qrcodejs/qrcode.min.js",
          "plugin-json": "node_modules/systemjs-plugin-json/json.js",
          "pako": "node_modules/pako/dist/pako.js",
          "fast-url-parser": "modules/platform/lib/fast-url-parser"
        },
        "paths": {
          "specific/*": "./specific/firefox/*",
          "modules/*": "modules/*",
          "modules": "modules",
          "node_modules/*": "./node_modules/*",
          "*": "./node_modules/*"
        },
        "meta": {
          "specific/*": {
            "format": "global"
          },
          "BigInt": {
            "format": "cjs"
          },
          "*.json": {
            "loader": "plugin-json"
          }
        },
        "packages": {
          "object-assign": {
            "main": "./index.js"
          },
          "modules": {
            "defaultJSExtensions": true,
            "map": {
              "./platform/tldjs": "node_modules/tldjs/index.js"
            },
            "meta": {
              "./platform/lib/zlib.lib.js": {
                "format": "cjs"
              },
              "./platform/lib/sanitize-filename.js": {
                "format": "system"
              },
              "./platform/lib/cron-parser.js": {
                "format": "system"
              },
              "./platform/video-downloader/lib/ytdl-core.js": {
                "format": "system"
              },
              "./platform/lib/fast-url-parser.js": {
                "format": "system"
              },
              "./platform/lib/deep-equal.js": {
                "format": "system"
              },
              "./platform/lib/ajv.js": {
                "format": "system"
              },
              "./platform/lib/jsep.js": {
                "format": "system"
              },
              "*/templates.js": {
                "format": "system"
              }
            }
          },
          "modules/dropdown": {
            "handlebars": "../platform/lib/handlebars"
          }
        }
      },
      "builderConfig": {
        "externals": ["mathjs"],
        "globalDeps": {
          "mathjs": "mathLib"
        },
        "sourceMaps": false,
        "lowResSourceMaps": true,
        "sourceMapContents": true,
        "globalName": "CliqzGlobal",
        "rollup": true
      }
    }
  },
  "environment": "production",
  "sourceMaps": false,
  "debugPages": true,
  "EXTENSION_VERSION": "2.27.1",
  "instrumentFunctions": ""
};

// Directly exporting this was breaking process-script bundle.
const def = {
  isMobile: false,
  isFirefox: true,
  isChromium: false,
  isEdge: false,
  platformName: 'firefox',
  isOnionMode: prefs.get('onion-mode')
};

const appInfo = Components.classes['@mozilla.org/xre/app-info;1'];
const versionChecker = Components.classes['@mozilla.org/xpcom/version-comparator;1'].getService(Components.interfaces.nsIVersionComparator);

function isPlatformAtLeastInVersion(minVersion) {
  const hostVersion = appInfo.getService(Components.interfaces.nsIXULAppInfo).version;
  return versionChecker.compare(hostVersion, minVersion) >= 0;
}

const OS$1 = appInfo.getService(Components.interfaces.nsIXULRuntime).OS.toLowerCase();
const OS_VERSION = Services.sysinfo.getProperty('version');

function notImplemented() {
  throw new Error('Not implemented');
}


const isMobile = def.isMobile;
const isChromium = def.isChromium;

const platformName = def.platformName;
const isCliqzBrowser = config.settings.channel === '40';

const isOnionMode = !!def.isOnionMode;


function isWindows() {
  return OS$1 && OS$1.indexOf('win') === 0;
}

function isMac() {
  return OS$1 && OS$1.indexOf('darwin') === 0;
}

function isLinux() {
  return OS$1 && OS$1.indexOf('linux') === 0;
}

// not available in older FF versions
/* eslint no-bitwise: 'off' */
/* global OS */

try {
  Components.utils.import('resource://gre/modules/osfile.jsm');
} catch (e) {
  // Nothing
}

function getFullPath(filePath) {
  const path = Array.isArray(filePath) ? filePath : [filePath];
  return OS.Path.join(OS.Constants.Path.profileDir, ...path);
}

function encodeText(text) {
  return new TextEncoder().encode(text);
}

function decodeText(array) {
  return new TextDecoder().decode(array);
}

function readFile$1(filePath) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  let isText = _ref.isText;

  return OS.File.read(getFullPath(filePath)).then(data => isText ? decodeText(data) : data);
}

function writeFile$1(filePath, data) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  let isText = _ref2.isText;

  return OS.File.writeAtomic(getFullPath(filePath), isText ? encodeText(data) : data);
}

// Not atomic truncating write


function mkdir$1(dirPath) {
  return OS.File.makeDir(getFullPath(dirPath), { ignoreExisting: true });
}



function fileExists$1(path) {
  return OS.File.exists(getFullPath(path));
}



// Opens given path file for appending, and resolves to file descriptor object,
// which can be used as input for writeStringFile and close functions


// Writes to open file


// Closes open file

const notImplementedPromise = () => new Promise(() => notImplemented());

/**
 * Read file from default location.
 *
 * @param {string|Array} path
 * @param {Object} options - {bool} isText: decodes data before returning
 * @returns {Promise}
 */


/**
 * Write to file from default location.
 *
 * @param {string|Array} path
 * @param {data} data - in a format accepted by the platform
 * @param {Object} options - {bool} isText: encodes data before writing
 * @returns {Promise}
 */


/**
 * Create directory in default location, does not fail if directory exists.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Similar to writeFile, but this one does not do atomic write. Always truncates file.
 *
 * @param {string|Array} path
 * @param {data} data - in a format accepted by the platform
 * @param {Object} options - {bool} isText: encodes data before writing
 * @returns {Promise}
 */


/**
 * Renames old path to new path.
 *
 * @param {string|Array} oldPath
 * @param {string|Array} newPath
 * @returns {Promise}
 */


/**
 * Returns whether it exists a file with given path or not.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */
const fileExists$$1 = fileExists$1 || notImplementedPromise;

/**
 * Truncates file with given path.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Opens file with given file (creating if does not exist) and return
 * file object to be used in writeFD and closeFD functions.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Writes to given open file.
 *
 * @param {Object} openFile
 * @param {data} data - in a format accepted by the platform
 * @param {Object} options - {bool} isText: encodes data before writing
 * @returns {Promise}
 */


/**
 * Closes given open file.
 *
 * @param {Object} openFile
 * @returns {Promise}
 */


/**
 * Removes file with given path, does not fail if file does not exist.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Creates empty file with given path.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Returns file size.
 *
 * @param {string|Array} path
 * @returns {Promise}
 */


/**
 * Joins the given path components.
 *
 * @param {Array} paths
 * @returns {Promise}
 */

/* global FileUtils */

Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import('resource://gre/modules/FileUtils.jsm');

const connections = new Map();

function open(databaseName) {
  let connection;
  if (!connections.has(databaseName)) {
    const filePath = FileUtils.getFile('ProfD', [databaseName]);
    connection = Services.storage.openDatabase(filePath);
    connections.set(databaseName, connection);
  } else {
    connection = connections.get(databaseName);
  }
  return connection;
}

function close(databaseName) {
  if (!connections.has(databaseName)) {
    return;
  }
  const connection = connections.get(databaseName);
  connections.delete(databaseName);
  // according to docs we should not use close because we use async statements
  // see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageConnection#close()
  connection.asyncClose();
}


// TODO: remove default export

var Storage = class {
  constructor(CliqzSecureMessage) {
    this.CliqzSecureMessage = CliqzSecureMessage;
    this.dbName = 'cliqz.dbhumanweb';

    if (fileExists$$1(this.dbName)) {
      this.connection = open(this.dbName);
    } else {
      this.connection = open(this.dbName);
    }

    // Need to check for create table, even if the DB already exists.
    this.createTable();
  }

  createTable() {
    const localcheck = `create table if not exists localcheck(
      id VARCHAR(24) PRIMARY KEY NOT NULL,
      data VARCHAR(1000000)
    )`;
    (this.connection.executeSimpleSQLAsync || this.connection.executeSimpleSQL)(localcheck);
  }

  close() {
    close(this.dbName);
    this.connnection = null;
  }

  saveRecord(id, data) {
    if (!this.connection) {
      return;
    }
    const st = this.connection.createStatement('INSERT OR REPLACE INTO localcheck (id,data) VALUES (:id, :data)');
    st.params.id = id;
    st.params.data = data;

    st.executeAsync({
      handleError: aError => {
        if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
          console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
        }
      },
      handleCompletion: () => {
        if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
          console$1.log('Insertion success', this.CliqzSecureMessage.LOG_KEY);
        }
      }
    });
  }

  loadRecord(id, callback) {
    const stmt = this.connection.createAsyncStatement('SELECT id, data FROM localcheck WHERE id = :id;');
    stmt.params.id = id;

    const res = [];
    stmt.executeAsync({
      handleResult: aResultSet => {
        if (!this.CliqzSecureMessage) {
          return;
        }
        for (let row = aResultSet.getNextRow(); row; row = aResultSet.getNextRow()) {
          if (row.getResultByName('id') === id) {
            res.push(row.getResultByName('data'));
          } else {
            if (this.CliqzSecureMessage.debug) {
              console$1.log('There are more than one record', this.CliqzSecureMessage.LOG_KEY);
            }
            callback(null);
          }
          break;
        }
      },
      handleError: aError => {
        if (!this.CliqzSecureMessage) return;
        if (this.CliqzSecureMessage.debug) {
          console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
        }
        callback(null);
      },
      handleCompletion: () => {
        if (!this.CliqzSecureMessage) {
          return;
        }
        if (res.length === 1) {
          callback(res[0]);
        } else {
          callback(null);
        }
      }
    });
  }

  loadKeys() {
    return new Promise(resolve => {
      this.loadRecord('userKey', data => {
        if (!data) {
          if (this.CliqzSecureMessage.debug) {
            console$1.log('There was no key for the user', this.CliqzSecureMessage.LOG_KEY);
          }
          resolve(null);
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (ee) {
            resolve(null);
          }
        }
      });
    });
  }

  saveKeys(_data) {
    return new Promise(resolve => {
      if (!this.connection) {
        return;
      }
      const st = this.connection.createStatement('INSERT OR REPLACE INTO localcheck (id,data) VALUES (:id, :data)');
      st.params.id = 'userKey';
      st.params.data = JSON.stringify(_data);

      st.executeAsync({
        handleError: aError => {
          if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
            if (this.CliqzSecureMessage.debug) {
              console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
            }
            resolve({ status: false, data: _data });
          }
        },
        handleCompletion: () => {
          if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
            if (this.CliqzSecureMessage.debug) {
              console$1.log('Insertion success', this.CliqzSecureMessage.LOG_KEY);
            }
            resolve({ status: true, data: _data });
          }
        }
      });
    });
  }

  loadLocalCheckTable() {
    this.loadRecord('localTemporalUniq', data => {
      if (!data) {
        if (this.CliqzSecureMessage.debug) {
          console$1.log('There was no data on action stats', this.CliqzSecureMessage.LOG_KEY);
        }
        this.CliqzSecureMessage.localTemporalUniq = {};
      } else {
        try {
          this.CliqzSecureMessage.localTemporalUniq = JSON.parse(data);
        } catch (ee) {
          console$1.log(`Loading local uniq: ${ee}`, this.CliqzSecureMessage.LOG_KEY);
          this.CliqzSecureMessage.localTemporalUniq = {};
        }
      }
    });
  }

  saveLocalCheckTable() {
    if (this.CliqzSecureMessage.localTemporalUniq) {
      this.saveRecord('localTemporalUniq', JSON.stringify(this.CliqzSecureMessage.localTemporalUniq));
    }
  }
};

// String compression used Firefox API.
// Based on https://gist.github.com/Endyl/c12438b6e68bbca1bab5
const CC = Components.Constructor;
const Ci$1 = Components.interfaces;
const Cc$1 = Components.classes;

const UncompressConverter = CC('@mozilla.org/streamconv;1?from=gzip&to=uncompressed', 'nsIStreamConverter', 'asyncConvertData');
const CompressConverter = CC('@mozilla.org/streamconv;1?from=uncompressed&to=gzip', 'nsIStreamConverter', 'asyncConvertData');
const StringInputStream = CC('@mozilla.org/io/string-input-stream;1', 'nsIStringInputStream');

/**
 * For request simulation
 */
function Accumulator() {
  this.buffer = [];
}
Accumulator.prototype = {
  buffer: null,
  onStartRequest() {},
  onStopRequest() {},
  onDataAvailable(aRequest, aContext, aInputStream, aOffset, aCount) {
    const stream = Cc$1['@mozilla.org/binaryinputstream;1'].createInstance(Ci$1.nsIBinaryInputStream);
    stream.setInputStream(aInputStream);

    const input = stream.readByteArray(aCount);

    this.buffer = this.buffer.concat(input);
  }
};

function simulateRequest(aConverter, aStream, aContentLength) {
  aConverter.onStartRequest(null, null);
  aConverter.onDataAvailable(null, null, aStream, 0, aContentLength);
  aConverter.onStopRequest(null, null, 201 /* 417 */);
}

function compressString(aString) {
  // Converts a Javascript string into UTF-8 encoding
  // (see http://ecmanaut.blogspot.de/2006/07/encoding-decoding-utf8-in-javascript.html)
  const utf8String = unescape(encodeURIComponent(aString));
  const accumulator = new Accumulator();
  const converter = new CompressConverter('uncompresssed', 'gzip', accumulator, null);
  const stream = new StringInputStream();
  stream.data = utf8String;
  simulateRequest(converter, stream, utf8String.length);

  return Uint8Array.from(accumulator.buffer);
}

function uncompressString(aString) {
  const accumulator = new Accumulator();
  const converter = new UncompressConverter('gzip', 'uncompressed', accumulator, null);
  const stream = new StringInputStream();
  stream.data = String.fromCharCode.apply(null, aString);
  simulateRequest(converter, stream, aString.length);

  return String.fromCharCode.apply(null, accumulator.buffer);
}

function compatabilityCheck() {
  return Uint8Array.from !== undefined;
}

/* eslint import/no-mutable-exports: 'off' */
let compress$1 = false;
let decompress$1 = false;

if (compatabilityCheck()) {
  compress$1 = compressString;
  decompress$1 = uncompressString;
}

/**
 *  Compress a string
 *
 *  @param {string} string to compress
 *  @returns {UInt8Array} compressed data
 */
const compress$$1 = compress$1 || false;

/**
 *  Decompress a Gzip compressed string
 *
 *  @param {UInt8Array} gzipped data
 *  @returns {string} decompressed string
 */

/* eslint no-bitwise: 'off' */

const Ci$2 = Components.interfaces;

const XMLHttpRequestFactory = () => {
  if (typeof XMLHttpRequest === 'undefined') {
    // imported by default in bootstrap scope but not present in
    // process scripts by default
    Components.utils.importGlobalProperties(['XMLHttpRequest']);
  }
  return XMLHttpRequest;
};

function setPrivateFlags(request) {
  if (request.channel) {
    request.channel.loadFlags |= Ci$2.nsIRequest.LOAD_ANONYMOUS | Ci$2.nsIRequest.LOAD_BYPASS_CACHE | Ci$2.nsIRequest.INHIBIT_PERSISTENT_CACHING;
  }
}

function setBackgroundRequest(request) {
  request.mozBackgroundRequest = true;
}

/* eslint-disable import/prefer-default-export */
const chromeUrlHandler = false;

/* global fetch */
if (typeof fetch === 'undefined') {
  Components.utils.importGlobalProperties(['fetch']);
}

function fetchFactory() {
  return fetch;
}

/* eslint no-param-reassign: 'off' */

/** Legacy httpHandler implementation, based on XMLHttpRequest.
 *
 *  If you want to make HTTP requests, please check out the fetch API (platform/fetch)
 */
function defaultHttpHandler(method, url, callback, onerror, timeout, data, sync, encoding, background) {
  if (method === 'GET' && url.startsWith('chrome://') && chromeUrlHandler) {
    chromeUrlHandler(url, callback, onerror);
    return undefined;
  }
  const XMLHttpRequest = XMLHttpRequestFactory();
  const req = new XMLHttpRequest();
  req.timestamp = Date.now();
  if (background) {
    setBackgroundRequest(req);
  }
  req.open(method, url, !sync);
  setPrivateFlags(req);
  if (req.overrideMimeType) {
    req.overrideMimeType('application/json');
  }
  req.setRequestHeader('Content-Type', 'application/json');

  // headers for compressed data
  if (encoding) {
    req.setRequestHeader('Content-Encoding', encoding);
  }

  req.onload = () => {
    if (!parseInt) return; // parseInt is not a function after extension disable/uninstall

    const statusClass = parseInt(req.status / 100, 10);
    if (statusClass === 2 || statusClass === 3 || statusClass === 0 /* local files */) {
        if (callback) {
          callback(req);
        }
      } else {
      const error = `loaded with non-200 ${url} (status=${req.status} ${req.statusText}) CLIQZEnvironment.httpHandler`;
      console$1.log(error);
      if (onerror) {
        onerror(error);
      }
    }
  };
  req.onerror = () => {
    const error = `error loading ${url} (status=${req.status} ${req.statusText}) CLIQZEnvironment.httpHandler`;
    console$1.log(error);
    if (onerror) {
      onerror(error);
    }
  };
  req.ontimeout = () => {
    const error = `timeout for ${url} CLIQZEnvironment.httpHandler`;
    console$1.log(error);
    if (onerror) {
      onerror(error);
    }
  };

  if (callback) {
    if (timeout) {
      req.timeout = parseInt(timeout, 10);
    } else {
      req.timeout = ['POST', 'PUT'].indexOf(method) >= 0 ? 10000 : 1000;
    }
  }

  req.send(data);
  return req;
}

let activeHandler = defaultHttpHandler;

function httpHandler() {
  return activeHandler(...arguments);
}

/**
 *  Replace default http handler with fn
 */
function overrideHttpHandler(fn) {
  activeHandler = fn;
}

const compressionAvailable = Boolean(compress$$1);
const compressionExclusions = new Set();

function compressionEnabled(url) {
  return compressionAvailable && !compressionExclusions.has(url);
}

/**
 *  Add a url for which we should not compress when using promiseHttpHandler
 */
function addCompressionExclusion(url) {
  compressionExclusions.add(url);
}

function promiseHttpHandler(method, url, data, timeout, compressedPost) {
  return new Promise((resolve, reject) => {
    // gzip.compress may be false if there is no implementation for this platform
    // or maybe it is not loaded yet
    if (method === 'POST' && compressedPost && compressionEnabled(url)) {
      const dataLength = data.length;
      data = compress$$1(data);
      console$1.log(`Compressed request to ${url}, bytes saved = ${dataLength - data.length} (${(100 * (dataLength - data.length) / dataLength).toFixed(1)}%)`, 'CLIQZEnvironment.httpHandler');
      httpHandler(method, url, resolve, reject, timeout, data, undefined, 'gzip');
    } else {
      httpHandler(method, url, resolve, reject, timeout, data);
    }
  });
}

/* eslint-disable no-param-reassign */
/* global PrivateBrowsingUtils */

// TODO: please just use Components
const Cu = Components.utils;
const Ci = Components.interfaces;
const Cc = Components.classes;


try {
  Cu.import('resource://gre/modules/XPCOMUtils.jsm');
  Cu.import('resource://gre/modules/NewTabUtils.jsm');
} catch (e) {
  // empty
}

const CLIQZEnvironment = {
  setTimeout,
  setInterval,
  clearTimeout,
  clearInterval,
  Promise,
  TEMPLATES_PATH: 'chrome://cliqz/content/static/templates/',
  SKIN_PATH: 'chrome://cliqz/content/static/skin/',
  prefs: Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefService).getBranch(''),
  RERANKERS: [],
  RESULTS_TIMEOUT: 1000, // 1 second
  TEMPLATES: {},
  MESSAGE_TEMPLATES: [],
  PARTIALS: [],
  CLIQZ_ONBOARDING: 'about:onboarding',
  CLIQZ_ONBOARDING_URL: 'chrome://cliqz/content/onboarding-v3/index.html',
  BASE_CONTENT_URL: 'chrome://cliqz/content/',
  BROWSER_ONBOARDING_PREF: 'browserOnboarding',

  init() {},

  unload() {},

  getAllCliqzPrefs() {
    return Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefService).getBranch('extensions.cliqz.').getChildList('');
  },

  isUnknownTemplate(template) {
    return template && CLIQZEnvironment.TEMPLATES.hasOwnProperty.call(CLIQZEnvironment, template) === false;
  },
  isDefaultBrowser() {
    try {
      const shell = Components.classes['@mozilla.org/browser/shell-service;1'].getService(Components.interfaces.nsIShellService);
      if (shell) {
        return shell.isDefaultBrowser(false);
      }
    } catch (e) {
      // empty
    }

    return null;
  },
  openLink(win, url, newTab, newWindow, newPrivateWindow, focus) {
    // make sure there is a protocol (this is required
    // for storing it properly in Firefoxe's history DB)
    if (url.indexOf('://') === -1 && url.trim().indexOf('about:') !== 0) {
      url = `http://${url}`;
    }

    // Firefox history boosts URLs that are typed in the URL bar, autocompleted,
    // or selected from the history dropbdown; thus, mark page the user is
    // going to see as "typed" (i.e, the value Firefox would assign to such URLs)
    try {
      const historyService = Cc['@mozilla.org/browser/nav-history-service;1'].getService(Ci.nsINavHistoryService);
      const ioService = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService);
      const urlObject = ioService.newURI(url, null, null);
      historyService.markPageAsTyped(urlObject);
    } catch (e) {
      // empty
    }

    if (newTab) {
      const tab = win.gBrowser.addTab(url);
      if (focus) {
        win.gBrowser.selectedTab = tab;
      }
      return tab;
    } else if (newWindow) {
      win.open(url, '_blank');
    } else if (newPrivateWindow) {
      win.openLinkIn(url, 'window', { private: true });
    } else {
      // Set urlbar value to url immediately
      if (win.CLIQZ.Core.urlbar) {
        win.CLIQZ.Core.urlbar.value = url;
      }
      // win.openUILink(url);
      win.gBrowser.loadURI(url);
    }
    return undefined;
  },
  copyResult(val) {
    const gClipboardHelper = Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper);
    gClipboardHelper.copyString(val);
  },
  isPrivate(win) {
    // try to get the current active window
    if (!win) {
      win = CLIQZEnvironment.getWindow();
    }

    // return false if we still do not have a window
    if (!win) return false;

    if (win && win.cliqzIsPrivate === undefined) {
      try {
        // Firefox 20+
        Cu.import('resource://gre/modules/PrivateBrowsingUtils.jsm');
        win.cliqzIsPrivate = PrivateBrowsingUtils.isWindowPrivate(win);
      } catch (e) {
        // pre Firefox 20
        try {
          win.cliqzIsPrivate = Cc['@mozilla.org/privatebrowsing;1'].getService(Ci.nsIPrivateBrowsingService).privateBrowsingEnabled;
        } catch (ex) {
          Cu.reportError(ex);
          win.cliqzIsPrivate = true;
        }
      }
    }

    return win.cliqzIsPrivate;
  },

  /**
   * @param {ChromeWindow} win - browser window to check.
   * @return whether |win|'s current tab is in private mode.
  */
  isOnPrivateTab(win) {
    return win && win.gBrowser !== undefined && win.gBrowser.selectedBrowser !== undefined && win.gBrowser.selectedBrowser.loadContext.usePrivateBrowsing;
  },

  getWindow() {
    const wm = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
    return wm.getMostRecentWindow('navigator:browser');
  },
  getWindowID(win) {
    win = win || CLIQZEnvironment.getWindow();
    const util = win.QueryInterface(Ci.nsIInterfaceRequestor).getInterface(Ci.nsIDOMWindowUtils);
    return util.outerWindowID;
  },
  openTabInWindow(win, url) {
    let relatedToCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    win.gBrowser.selectedTab = win.gBrowser.addTab(url, { relatedToCurrent });
  },
  // TODO: move this
  trk: [],
  telemetry: (() => {
    let trkTimer = null;
    let telemetrySeq = -1;
    let telemetryReq = null;
    let telemetrySending = [];
    const TELEMETRY_MAX_SIZE = 500;
    function getNextSeq() {
      if (telemetrySeq === -1) {
        telemetrySeq = prefs.get('telemetrySeq', 0);
      }
      telemetrySeq = (telemetrySeq + 1) % 2147483647;
      return telemetrySeq;
    }
    function pushTelemetryCallback(req) {
      try {
        const response = JSON.parse(req.response);

        if (response.new_session) {
          prefs.set('session', response.new_session);
        }
        telemetrySending = [];
        telemetryReq = null;
      } catch (e) {
        // this can only happen if the callback is called
        // after the extension is turned off
      }
    }
    function pushTelemetryError() {
      // pushTelemetry failed, put data back in queue to be sent again later
      console$1.log(`push telemetry failed: ${telemetrySending.length} elements`, 'pushTelemetry');
      CLIQZEnvironment.trk = telemetrySending.concat(CLIQZEnvironment.trk);

      // Remove some old entries if too many are stored,
      // to prevent unbounded growth when problems with network.
      const slicePos = CLIQZEnvironment.trk.length - TELEMETRY_MAX_SIZE + 100;
      if (slicePos > 0) {
        console$1.log(`discarding ${slicePos}old telemetry data`, 'pushTelemetry');
        CLIQZEnvironment.trk = CLIQZEnvironment.trk.slice(slicePos);
      }

      telemetrySending = [];
      telemetryReq = null;
    }
    function pushTelemetry() {
      prefs.set('telemetrySeq', telemetrySeq);
      if (telemetryReq) return;
      // put current data aside in case of failure
      telemetrySending = CLIQZEnvironment.trk.slice(0);
      CLIQZEnvironment.trk = [];

      console$1.log(`push telemetry data: ${telemetrySending.length} elements`, 'pushTelemetry');

      telemetryReq = promiseHttpHandler('POST', CliqzUtils.STATISTICS, JSON.stringify(telemetrySending), 10000, true);
      telemetryReq.then(pushTelemetryCallback);
      telemetryReq.catch(pushTelemetryError);
    }

    return (msg, instantPush) => {
      // no telemetry in private windows & tabs
      if (msg.type !== 'environment' && CliqzUtils.isPrivateMode()) {
        return;
      }

      console$1.log(msg, 'Utils.telemetry');
      // telemetry in all products can be turned off using the 'telemetry' pref
      if (!prefs.get('telemetry', true)) return;

      // for the Cliqz browser we also turn off the extension telemetry
      // if the user opts-out from the browser health report
      if (isCliqzBrowser && msg.type !== 'environment' && // TEMP: we only let the environment signal go though
      prefs.get('uploadEnabled', true, 'datareporting.healthreport.') !== true) {
        return;
      }
      // datareporting.healthreport.uploadEnabled
      msg.session = prefs.get('session');
      msg.ts = Date.now();
      msg.seq = getNextSeq();

      CLIQZEnvironment.trk.push(msg);
      CLIQZEnvironment.clearTimeout(trkTimer);
      if (instantPush || CLIQZEnvironment.trk.length % 100 === 0) {
        pushTelemetry();
      } else {
        trkTimer = CLIQZEnvironment.setTimeout(pushTelemetry, 60000);
      }
    };
  })(),
  _isSearchServiceInitialized: (() => {
    if (Services.search.init) {
      Services.search.init(() => {
        CLIQZEnvironment._isSearchServiceInitialized = true;
      });
      return false;
    }
    return true;
  })(),
  getDefaultSearchEngine() {
    const searchEngines = CLIQZEnvironment.getSearchEngines();
    return searchEngines.filter(se => se.default)[0];
  },
  getSearchEngines() {
    let blackListed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    const SEARCH_ENGINES = CLIQZEnvironment._isSearchServiceInitialized ? {
      defaultEngine: Services.search.defaultEngine,
      engines: Services.search.getEngines()
    } : {
      defaultEngine: null,
      engines: []
    };

    return SEARCH_ENGINES.engines.filter(e => !e.hidden && e.iconURI != null && blackListed.indexOf(e.name) < 0).map(e => ({
      name: e.name,
      alias: e.alias,
      default: e === SEARCH_ENGINES.defaultEngine,
      icon: e.iconURI.spec,
      base_url: e.searchForm,
      urlDetails: CliqzUtils.getDetailsFromUrl(e.searchForm),
      getSubmissionForQuery(q, type) {
        // 'keyword' is used by one of the Mozilla probes
        // to measure source for search actions
        // https://dxr.mozilla.org/mozilla-central/rev/e4107773cffb1baefd5446666fce22c4d6eb0517/browser/locales/searchplugins/google.xml#15
        const submission = e.getSubmission(q, type, 'keyword');

        // some engines cannot create submissions for all types
        // eg 'application/x-suggestions+json'
        if (submission) {
          return submission.uri.spec;
        }
        return null;
      }
    }));
  },
  _waitForSearchService() {
    return Services.search.init ? new Promise(resolve => Services.search.init(resolve)) : Promise.resolve();
  },
  updateAlias(name, newAlias) {
    CLIQZEnvironment._waitForSearchService().then(() => {
      Services.search.getEngineByName(name).alias = newAlias;
    });
  },
  getEngineByAlias(alias) {
    return CLIQZEnvironment.getSearchEngines().find(engine => engine.alias === alias);
  },
  getEngineByName(name) {
    return CLIQZEnvironment.getSearchEngines().find(engine => engine.name === name);
  },
  addEngineWithDetails(engine) {
    CLIQZEnvironment._waitForSearchService().then(() => {
      const existedEngine = Services.search.getEngineByName(engine.name);
      if (existedEngine) {
        // Update the engine alias in case it has been removed
        if (!existedEngine.alias) {
          existedEngine.alias = engine.key;
        }

        return;
      }

      Services.search.addEngineWithDetails(engine.name, engine.iconURL, engine.key, engine.name, engine.method, engine.url);
      if (engine.encoding) {
        Services.search.getEngineByName(engine.name).wrappedJSObject._queryCharset = engine.encoding;
      }
    });
  },

  restoreHiddenSearchEngines() {
    // YouTube - special case
    const SEARCH_ENGINE_ALIAS = {
      youtube: '#yt',
      'youtube-de': '#yt'
    };
    CLIQZEnvironment._waitForSearchService().then(() => {
      Services.search.getEngines().forEach(e => {
        if (e.hidden === true) {
          e.hidden = false;
          // Restore the alias as well
          if (!e.alias && e.identifier) {
            if (SEARCH_ENGINE_ALIAS[e.identifier]) {
              e.alias = SEARCH_ENGINE_ALIAS[e.identifier];
            } else {
              e.alias = `#${e.identifier.toLowerCase().substring(0, 2)}`;
            }
          }
        }
      });
    });
  },
  /*
      We want to remove the search engine in order to update it by addEngineWithDetails function
      If the search engines are stored in user profile, we can remove them
    */
  removeEngine(name) {
    let engine = Services.search.getEngineByName(name);
    if (engine) {
      Services.search.removeEngine(engine);
    }
    // Check if the engine has been removed or not
    engine = Services.search.getEngineByName(name);
    // If not, search engines cannot be removed since they are stored in global location
    // removeEngine will just hide the engine, we can restore it by unhiding it
    if (engine) {
      engine.hidden = false;
    }
  },
  // from ContextMenu
  openPopup(contextMenu, ev, x, y) {
    contextMenu.openPopupAtScreen(x, y, false);
  },
  getNoResults(q) {
    const res = CLIQZEnvironment.Result.cliqz({
      template: 'noResult',
      snippet: {},
      type: 'rh',
      subType: { empty: true }
    }, q);

    return res;
  }
};

/*
 * In Firefox this method will return undefined is called too early in
 * browser lifecycle. On some older versions like 2x it may even crash
 * entire process.
 */
var getStorage = function () {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'chrome://cliqz/content/';

  const uri = Services.io.newURI(url, '', null);
  const ssm = Components.classes['@mozilla.org/scriptsecuritymanager;1'].getService(Components.interfaces.nsIScriptSecurityManager);

  const principal = ssm.createCodebasePrincipal(uri, {});

  const dsm = Components.classes['@mozilla.org/dom/localStorage-manager;1'].getService(Components.interfaces.nsIDOMStorageManager);

  if (dsm.getLocalStorageForPrincipal) {
    return dsm.getLocalStorageForPrincipal(principal, '');
  }
  // FF57 +
  const win = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser');

  return dsm.createStorage(win, principal, '');
};

/**
* @namespace core
*/
class Storage$1 {
  constructor(url) {
    // if not called as constructor, still act as one
    if (!(this instanceof Storage$1)) {
      return new Storage$1(url);
    }

    this.storage = getStorage.bind(null, url);
    this.url = url;
  }

  getItem(key) {
    try {
      return this.storage().getItem(key);
    } catch (e) {
      // empty
    }
    return undefined;
  }

  setItem(key, value) {
    try {
      return this.storage().setItem(key, value);
    } catch (e) {
      // empty
    }
    return undefined;
  }

  removeItem(key) {
    try {
      return this.storage().removeItem(key);
    } catch (e) {
      // empty
    }
    return undefined;
  }

  clear() {
    try {
      return this.storage().clear();
    } catch (e) {
      // empty
    }
    return undefined;
  }

  /**
   * @method setObject
   * @param key {string}
   * @param object
   */
  setObject(key, object) {
    this.setItem(key, JSON.stringify(object));
  }

  /**
   * @method getObject
   * @param key {string}
   * @param notFound {Boolean}
   */
  getObject(key) {
    let notFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    const o = this.getItem(key);
    if (o) {
      return JSON.parse(o);
    }
    return notFound;
  }
}

var lazyLoader = ((bundle, exportedSymbol) => {
  const url = `${config.baseURL}vendor/${bundle}`;
  let lib = null;

  const load = () => {
    if (lib === null) {
      // in case we load in chrome:// pages, the lib may be loaded on a window
      if (typeof window$1 !== 'undefined') {
        if (window$1[exportedSymbol]) {
          lib = window$1[exportedSymbol];
          return;
        }
      }

      const target = {
        window: safeGlobal
      };

      Services.scriptloader.loadSubScriptWithOptions(url, {
        target,
        ignoreCache: true
      });

      if (target[exportedSymbol] !== undefined) {
        lib = target[exportedSymbol];
      } else {
        lib = target.window[exportedSymbol];
      }
    }
  };

  /* eslint-disable func-names, prefer-arrow-callback, new-cap */
  return new Proxy(function () {}, {
    /**
     * Intercept construction on the proxy.
     */
    construct: (target, argumentsList) => {
      load();
      if (lib) {
        return new lib(...argumentsList);
      }
      return null;
    },

    /**
     * Intercept call on the proxy
     */
    apply: (target, thisArg, argumentsList) => {
      load();
      if (lib) {
        return lib.apply(thisArg, argumentsList);
      }
      return null;
    },

    get: (target, prop) => {
      load();
      if (lib) {
        return lib[prop];
      }
      return null;
    },

    set: (target, key, prop) => {
      load();
      if (lib) {
        lib[key] = prop;
        return true;
      }
      return false;
    }
  });
  /* eslint-enable func-names, prefer-arrow-callback, new-cap */
});

var tldjs = lazyLoader('tld.min.js', 'tldjs');

/**
 * Extrach the domain from an url, ignoring the schema and parameters.
 */
function extractHostname(url) {
  if (typeof url !== 'string') {
    return '';
  }

  let domain = url;

  // We need to check that the index is <= because this protocol could appear
  // as a value of a parameter in the URL.
  const indexOfProtocol = url.indexOf('://');
  if (indexOfProtocol !== -1 && indexOfProtocol <= 6) {
    domain = url.substr(indexOfProtocol + 3);
  }

  const indexOfSlash = domain.indexOf('/');
  if (indexOfSlash !== -1) {
    domain = domain.substr(0, indexOfSlash);
  }

  if (domain.endsWith('.')) {
    domain = domain.substr(0, domain.length - 1);
  }

  return domain;
}

// Use our faster `extractHostname` implementation in tldjs
const tlds = tldjs.fromUserSettings({
  extractHostname,
  validHosts: ['localhost']
});

function getPublicSuffix(url) {
  return tlds.getPublicSuffix(url);
}

/* eslint no-restricted-syntax: 'off' */
/* eslint no-bitwise: 'off' */
/* eslint no-param-reassign: 'off' */
/*
 * This module determines the language of visited pages and
 * creates a list of known languages for a user
 *
 */

// we keep a different preferences namespace than cliqz so that it does not get
// removed after a re-install or sent during a logging signal
const CliqzLanguage$1 = {
  DOMAIN_THRESHOLD: 3,
  READING_THRESHOLD: 10000,
  LOG_KEY: 'CliqzLanguage',
  LOCALE_HASH: 333,
  currentState: {},
  cron: 24 * 60 * 60 * 1000, // default one day
  checkInterval: 5 * 60 * 1000, // default 5 min
  removeHashId: null,

  getLocale() {
    return CliqzUtils.PLATFORM_LANGUAGE;
  },

  // load from the about:config settings
  init(window) {
    CliqzLanguage$1.window = window;
    if (this.removeHashId === null) {
      this.removeHashId = CliqzUtils.setInterval(this.updateTicker.bind(this), this.checkInterval);
    }

    if (CliqzUtils.hasPref('data', 'extensions.cliqz-lang.')) {
      try {
        // catch empty value or malformed json
        CliqzLanguage$1.currentState = JSON.parse(CliqzUtils.getPref('data', {}, 'extensions.cliqz-lang.'));
      } catch (e) {
        // empty
      }
    }
    const localeLangs = [];
    let maxValue = 0;
    // transform legacy data
    Object.keys(CliqzLanguage$1.currentState).forEach(lang => {
      if (CliqzLanguage$1.currentState[lang] === 'locale' || CliqzLanguage$1.currentState[lang].indexOf(257) !== -1) {
        localeLangs.push(lang);
      }

      if (CliqzLanguage$1.currentState[lang] instanceof Array) {
        maxValue = Math.max(maxValue, CliqzLanguage$1.currentState[lang].length);
      }
    });

    if (localeLangs.length) {
      const maxLen = Math.max(CliqzLanguage$1.DOMAIN_THRESHOLD + 1, maxValue);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = localeLangs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          const locale = _step.value;

          const originalArray = CliqzLanguage$1.currentState[locale];
          if (originalArray === 'locale') {
            CliqzLanguage$1.currentState[locale] = CliqzLanguage$1.createHashes(maxLen);
          } else if (originalArray.length < maxLen) {
            CliqzLanguage$1.currentState[locale] = CliqzLanguage$1.createHashes(maxLen);
          }

          // add 'locale' hash
          CliqzLanguage$1.currentState[locale][0] = CliqzLanguage$1.LOCALE_HASH;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    const ll = CliqzLanguage$1.getLocale();
    if (ll && CliqzLanguage$1.currentState[ll] === null) {
      // we found new locale
      CliqzLanguage$1.currentState[ll] = CliqzLanguage$1.createHashes(CliqzLanguage$1.DOMAIN_THRESHOLD + 1);
      // add 'locale' hash
      CliqzLanguage$1.currentState[ll][0] = CliqzLanguage$1.LOCALE_HASH;
    }

    CliqzLanguage$1.cleanCurrentState();
    CliqzLanguage$1.saveCurrentState();

    CliqzUtils.log(CliqzLanguage$1.stateToQueryString(), CliqzLanguage$1.LOG_KEY);
  },
  unload() {
    if (this.removeHashId !== null) {
      CliqzUtils.clearInterval(this.removeHashId);
      this.removeHashId = null;
    }
  },
  updateTicker() {
    let lastUpdate = 0;
    if (CliqzUtils.hasPref('lastUpdate', 'extensions.cliqz-lang.')) {
      try {
        lastUpdate = parseInt(CliqzUtils.getPref('lastUpdate', 0, 'extensions.cliqz-lang.'), 10);
      } catch (e) {
        lastUpdate = 0;
      }
    }
    const currentTime = Date.now();
    if (currentTime > this.cron + lastUpdate) {
      this.removeHash();
      CliqzUtils.setPref('lastUpdate', String(currentTime), 'extensions.cliqz-lang.');
    }
  },
  // create array of unique hashes
  createHashes(maxLen) {
    const hashes = [];
    let i = 0;
    while (i < maxLen) {
      // random hash value: [-256, 255]
      const r = Math.floor(Math.random() * 512) - 256;
      if (hashes.indexOf(r) === -1) {
        hashes.push(r);
        i += 1;
      }
    }
    return hashes;
  },
  // add locale, this is the function hook that will be called for every page load that
  // stays more than 5 seconds active
  addLocale(url, localeStr) {
    const locale = CliqzLanguage$1.normalizeLocale(localeStr);

    if (locale === '' || locale === undefined || locale === null || locale.length !== 2) return;
    if (url === '' || url === undefined || url === null) return;

    // extract domain from url, hash it and update the value
    const urlHash = CliqzLanguage$1.hashCode(CliqzUtils.cleanUrlProtocol(url, true).split('/')[0]) % 256;

    if (!CliqzLanguage$1.currentState[locale]) {
      CliqzLanguage$1.currentState[locale] = [];
    }

    if (CliqzLanguage$1.currentState[locale].indexOf(urlHash) === -1) {
      CliqzLanguage$1.currentState[locale].push(urlHash);
      CliqzUtils.log(`Saving: ${locale} {$urlHash}`, `${CliqzLanguage$1.LOG_KEY} for url ${url}`);
      CliqzLanguage$1.saveCurrentState();
    }
  },
  // do random delete of hash with prob 0.05 (5%)
  removeHash() {
    let changed = false;
    for (const lang in CliqzLanguage$1.currentState) {
      if (CliqzLanguage$1.currentState[lang].length > CliqzLanguage$1.DOMAIN_THRESHOLD + 1) {
        const prob = Math.random();
        if (prob <= 0.05) {
          const ind = Math.floor(Math.random() * CliqzLanguage$1.currentState[lang].length);
          if (CliqzLanguage$1.currentState[lang][ind] !== CliqzLanguage$1.LOCALE_HASH) {
            if (!changed) changed = !changed;
            CliqzUtils.log(`Removing hash ${CliqzLanguage$1.currentState[lang][ind]} for the language ${lang}`);
            CliqzLanguage$1.currentState[lang].splice(ind, 1);
          }
        }
      }
    }
    if (changed) CliqzLanguage$1.saveCurrentState();
  },
  // returns hash of the string
  hashCode(s) {
    return s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  },
  // removes the country from the locale, for instance, de-de => de, en-US => en
  normalizeLocale(str) {
    if (str) return str.split(/-|_/)[0].trim().toLowerCase();
    return str;
  },
  // the function that decided which languages the person understands
  state(distribution) {
    distribution = typeof distribution !== 'undefined' ? distribution : false;
    let langVec = [];
    for (const lang in CliqzLanguage$1.currentState) {
      if (Object.prototype.hasOwnProperty.call(CliqzLanguage$1.currentState, lang)) {
        const len = Object.keys(CliqzLanguage$1.currentState[lang]).length;
        if (len > CliqzLanguage$1.DOMAIN_THRESHOLD) {
          langVec.push([lang, 1.0 / len]);
        }
      }
    }

    langVec = langVec.sort((a, b) => a[1] - b[1]);
    // returns full distribution if asked for it
    if (distribution) {
      return langVec;
    }

    // returns only lang names
    const langVecClean = [];
    for (const index in langVec) {
      if (Object.prototype.hasOwnProperty.call(langVec, index)) {
        langVecClean.push(langVec[index][0]);
      }
    }

    return langVecClean;
  },
  // remove doubled values, normalize languages
  cleanCurrentState() {
    const keys = Object.keys(CliqzLanguage$1.currentState);
    const cleanState = {};
    for (let i = 0; i < keys.length; i += 1) {
      const nkey = CliqzLanguage$1.normalizeLocale(keys[i]);
      cleanState[nkey] = cleanState[nkey] || [];

      for (let j = 0; j < CliqzLanguage$1.currentState[keys[i]].length; j += 1) {
        const value = CliqzLanguage$1.currentState[keys[i]][j];
        if (cleanState[nkey].indexOf(value) === -1) cleanState[nkey].push(value);
      }
    }
    if (cleanState !== CliqzLanguage$1.currentState) {
      CliqzLanguage$1.currentState = cleanState;
      CliqzLanguage$1.saveCurrentState();
    }
  },
  // returns query string with popular languages
  // Limit the lang parameters to top 3
  stateToQueryString() {
    return `&lang=${encodeURIComponent(CliqzLanguage$1.state().slice(0, 3).join(','))}`;
  },
  // Save the current state to preferences,
  saveCurrentState() {
    CliqzUtils.log(`Going to save languages: ${JSON.stringify(CliqzLanguage$1.currentState)}`, CliqzLanguage$1.LOG_KEY);
    CliqzUtils.setPref('data', JSON.stringify(CliqzLanguage$1.currentState || {}), 'extensions.cliqz-lang.');
  }
};

function isURI(text) {
  try {
    Services.io.newURI(text, 'UTF-8', null);
    return true;
  } catch (e) {
    return false;
  }
}



function fixURL(url) {
  let fixedURL = url;
  let redirectedToSearch = false;
  /* eslint-disable no-bitwise */
  const fixupFlags = Services.uriFixup.FIXUP_FLAG_NONE | Services.uriFixup.FIXUP_FLAG_FIX_SCHEME_TYPOS;
  /* eslint-enable no-bitwise */

  try {
    const platformURLFixup = Services.uriFixup.getFixupURIInfo(url, fixupFlags);
    redirectedToSearch = platformURLFixup.keywordAsSent !== '';
    fixedURL = platformURLFixup.fixedURI.spec;
  } catch (e) {
    // uriFixup can fail if URI is malformed or could not be fixed
  }

  if (redirectedToSearch && url.indexOf('://') === -1) {
    // Platform fixup converted URL to search request and there was no protocol in initial URL.
    // Try to fix it again with protocol.
    fixedURL = fixURL(`://${fixedURL}`);
  }

  return fixedURL;
}

/* eslint no-underscore-dangle: off */
/* eslint no-param-reassign: off */
class LRU {
  constructor(size) {
    this.maxSize = size;

    // LRU structure
    this.reset = () => {
      this.cache = new Map();
      this.head = null;
      this.tail = null;
      this.size = 0;
    };
    this.reset();
  }

  /*
   * Check if value associated with `key` is stored in cache.
   * Does not update position of the entry.
   *
   * @param key
   */
  has(key) {
    return this.cache.has(key);
  }

  /* Retrieve value associated with `key` from cache. If it doesn't
   * exist, return `undefined`, otherwise, update position of the
   * entry to "most recent seen".
   *
   * @param key - Key of value we want to get.
   */
  get(key) {
    const node = this.cache.get(key);

    if (node) {
      this._touch(node);
      return node.value;
    }
    return undefined;
  }

  /* Associate a new `value` to `key` in cache. If `key` isn't already
   * present in cache, create a new node at the position "most recent seen".
   * Otherwise, change the value associated with `key` and refresh the
   * position of the entry to "most recent seen".
   *
   * @param key   - Key add to the cache.
   * @param value - Value associated with key.
   */
  set(key, value) {
    let node = this.cache.get(key);

    if (node) {
      // Hit - update value
      node.value = value;
      this._touch(node);
    } else {
      // Miss - Create a new node
      node = this._newNode(key, value);

      // Forget about oldest node
      if (this.size >= this.maxSize) {
        this.cache.delete(this.tail.key);
        this._remove(this.tail);
      }

      this.cache.set(key, node);
      this._pushFront(node);
    }
  }

  // Private interface (Linked List)

  /* Create a new node (key, value) to store in the cache */
  _newNode(key, value) {
    return {
      prev: null,
      next: null,
      key,
      value
    };
  }

  /* Refresh timestamp of `node` by moving it to the front of the list.
   * It the becomes the (key, value) seen most recently.
   */
  _touch(node) {
    this._remove(node);
    this._pushFront(node);
  }

  /* Remove `node` from the list. */
  _remove(node) {
    if (node) {
      // Update previous node
      if (node.prev === null) {
        this.head = node.next;
      } else {
        node.prev.next = node.next;
      }

      // Update next node
      if (node.next === null) {
        this.tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }

      this.size -= 1;
    }
  }

  /* Add `node` in front of the list (most recent element). */
  _pushFront(node) {
    if (node) {
      // Replace first node of the list
      node.prev = null;
      node.next = this.head;

      if (this.head !== null) {
        this.head.prev = node;
      }

      this.head = node;

      // Case: List was empty
      if (this.tail === null) {
        this.tail = node;
      }

      this.size += 1;
    }
  }
}

/* Fixed length lookup cache. Allows expensive operations to be cached for later lookup. Once
 * the cache limit is exceeded, least recently used values are removed.
 */
class FixedSizeCache {
  /* @param {function} buildValue - used to build a new value from key in case of cache miss.
   * @param {number} size - maximum elements stored in cache.
   * @param {function} buildKey - [Optional] used to extract key from argument.
   */
  constructor(buildValue, size, buildKey) {
    this._buildValue = buildValue;
    this._buildKey = buildKey;
    this._maxKeySize = 1000;

    // Statistics
    this._hitCounter = 0;
    this._missCounter = 0;

    this.lru = new LRU(size);
  }

  /* Try to retrieve the value associated with `key` from the cache. If it's
   * not present, build it using `buildValue` and store it in the cache.
   *
   * This method always returns a value either from the LRU cache, or from a
   * direct call to `buildValue`.
   */
  get(argument) {
    const key = this._buildKey ? this._buildKey(argument) : argument;
    let value = this.lru.get(key);

    if (value !== undefined) {
      // Cache hit
      this._hitCounter += 1;
      return value;
    }
    // Cache miss
    this._missCounter += 1;

    // Compute value
    value = this._buildValue(argument);

    // if key is large, don't cache
    if (!key || key.length > this._maxKeySize) {
      return value;
    }

    this.lru.set(key, value);
    return value;
  }
}

// TODO: @chrmod - bring back something like platform quals


function cleanMozillaActions() {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  let action;
  let href = url;
  if (url.indexOf('moz-action:') === 0) {
    const parts = url.match(/^moz-action:([^,]+),(.*)$/);
    action = parts[1];
    href = parts[2];
    try {
      // handle cases like: moz-action:visiturl,{"url": "..."}
      const mozActionUrl = JSON.parse(href).url;
      if (mozActionUrl) {
        href = decodeURIComponent(mozActionUrl);
      }
    } catch (e) {
      // empty
    }
  }
  return [action, href];
}

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* eslint no-param-reassign: 'off' */
/* eslint camelcase: 'off'  */

const UrlRegExp = /^(([a-z\d]([a-z\d-]*[a-z\d])?)\.)+[a-z]{2,}(:\d+)?$/i;

function tryFn(fn) {
  return function () {
    try {
      return fn(...arguments);
    } catch (e) {
      return arguments.length <= 0 ? undefined : arguments[0];
    }
  };
}

const ipv4Part = '0*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])'; // numbers 0 - 255
const ipv4Regex = new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}([:]([0-9])+)?$`); // port number
const ipv6Regex = new RegExp('^\\[?(([0-9]|[a-f]|[A-F])*[:.]+([0-9]|[a-f]|[A-F])+[:.]*)+[\\]]?([:][0-9]+)?$');
const schemeRE = /^(\S+?):(\/\/)?(.*)$/i;

function isIpv4Address(host) {
  return ipv4Regex.test(host);
}

function isIpv6Address(host) {
  return ipv6Regex.test(host);
}

function isIpAddress(host) {
  return isIpv4Address(host) || isIpv6Address(host);
}

function isUrl(input) {
  if (!input) {
    return false;
  }
  // TODO: handle ip addresses
  if (isURI(input)) {
    return true;
  }
  // step 1 remove eventual protocol
  const protocolPos = input.indexOf('://');
  if (protocolPos !== -1 && protocolPos <= 6) {
    input = input.slice(protocolPos + 3);
  }
  // step2 remove path & everything after
  input = input.split('/')[0];
  // step3 run the regex
  return UrlRegExp.test(input) || isIpAddress(input);
}

function isLocalhost(host, isIPv4, isIPv6) {
  if (host === 'localhost') return true;
  if (isIPv4 && host.substr(0, 3) === '127') return true;
  if (isIPv6 && host === '::1') return true;

  return false;
}

// IP Validation



const tryDecodeURI = tryFn(decodeURI);
const tryDecodeURIComponent = tryFn(decodeURIComponent);
const tryEncodeURI = tryFn(encodeURI);
const tryEncodeURIComponent = tryFn(encodeURIComponent);



function stripTrailingSlash(str) {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
}

function _getDetailsFromUrl(_originalUrl) {
  var _cleanMozillaActions = cleanMozillaActions(_originalUrl),
      _cleanMozillaActions2 = _slicedToArray(_cleanMozillaActions, 2);

  const action = _cleanMozillaActions2[0],
        originalUrl = _cleanMozillaActions2[1];
  // exclude protocol

  let url = originalUrl;
  let scheme = '';
  let slashes = '';
  let name = '';
  let tld = '';
  let subdomains = [];
  let path = '';
  let query = '';
  let fragment = '';

  // remove scheme
  const schemeMatch = schemeRE.exec(url);
  if (schemeMatch) {
    scheme = schemeMatch[1];
    slashes = schemeMatch[2] || '';
    url = schemeMatch[3];
  }

  const ssl = scheme === 'https';

  // separate hostname from path, etc. Could be separated from rest by /, ? or #
  let host = url.split(/[/#?]/)[0].toLowerCase();
  path = url.replace(host, '');

  // separate username:password@ from host
  const userpassHost = host.split('@');
  if (userpassHost.length > 1) {
    host = userpassHost[1];
  }

  // Parse Port number
  let port = '';

  let isIPv4 = isIpv4Address(host);
  let isIPv6 = isIpv6Address(host);

  const indexOfColon = host.indexOf(':');
  if ((!isIPv6 || isIPv4) && indexOfColon >= 0) {
    port = host.substr(indexOfColon + 1);
    host = host.substr(0, indexOfColon);
  } else if (isIPv6) {
    // If an IPv6 address has a port number,
    // it will be right after a closing bracket ] : format [ip_v6]:port
    const endOfIP = host.indexOf(']:');
    if (endOfIP >= 0) {
      port = host.split(']:')[1];
      host = host.split(']:')[0].replace('[', '').replace(']', '');
    }
  }

  // extract query and fragment from url
  query = '';
  const queryIdx = path.indexOf('?');
  if (queryIdx !== -1) {
    query = path.substr(queryIdx + 1);
  }

  fragment = '';
  const fragmentIdx = path.indexOf('#');
  if (fragmentIdx !== -1) {
    fragment = path.substr(fragmentIdx + 1);
  }

  // remove query and fragment from path
  path = path.replace(`?${query}`, '');
  path = path.replace(`#${fragment}`, '');
  query = query.replace(`#${fragment}`, '');

  // extra - all path, query and fragment
  let extra = path;
  if (query) {
    extra += `?${query}`;
  }
  if (fragment) {
    extra += `#${fragment}`;
  }

  isIPv4 = isIpv4Address(host);
  isIPv6 = isIpv6Address(host);
  const localhost = isLocalhost(host, isIPv4, isIPv6);

  // find parts of hostname
  if (!isIPv4 && !isIPv6 && !localhost) {
    try {
      let hostWithoutTld = host;
      tld = getPublicSuffix(host);

      if (tld) {
        hostWithoutTld = host.slice(0, -(tld.length + 1)); // +1 for the '.'
      }

      // Get subdomains
      subdomains = hostWithoutTld.split('.');
      // Get the domain name w/o subdomains and w/o TLD
      name = subdomains.pop();

      // remove www if exists
      // TODO: I don't think this is the right place to do this.
      //       Disabled for now, but check there are no issues.
      // host = host.indexOf('www.') == 0 ? host.slice(4) : host;
    } catch (e) {
      name = '';
      host = '';
      // CliqzUtils.log('WARNING Failed for: ' + originalUrl, 'CliqzUtils.getDetailsFromUrl');
    }
  } else {
    name = localhost ? 'localhost' : 'IP';
  }

  // remove www from beginning, we need cleanHost in the friendly url
  let cleanHost = host;
  if (host.toLowerCase().indexOf('www.') === 0) {
    cleanHost = host.slice(4);
  }

  let friendly_url = cleanHost + extra;
  if (scheme && scheme !== 'http' && scheme !== 'https') {
    friendly_url = `${scheme}:${slashes}${friendly_url}`;
  }
  // remove trailing slash from the end
  friendly_url = stripTrailingSlash(friendly_url);

  // Handle case where we have only tld for example http://cliqznas
  if (cleanHost === tld) {
    name = tld;
  }

  const urlDetails = {
    action,
    originalUrl,
    scheme: scheme ? `${scheme}:` : '',
    name,
    domain: tld ? `${name}.${tld}` : '',
    tld,
    subdomains,
    path,
    query,
    fragment,
    extra,
    host,
    cleanHost,
    ssl,
    port,
    friendly_url
  };

  return urlDetails;
}

const urlDetailsCache = new FixedSizeCache(_getDetailsFromUrl, 50);

function getDetailsFromUrl(url) {
  return urlDetailsCache.get(url);
}

/* global crypto */

/* eslint-disable no-bitwise */

// Cryptographically secure Math.random replacement
//
//  Doing the same as Firefox Math.random does, but with a crypto secure 64 bit number instead.
//  The equivalent in C++ is: double(uint64val & 0x1FFFFFFFFFFFFF) / (1 << 53);
//  WARNING: In tests (Linux), considerably slower than Math.random (5-10 times)
function random() {
  const values = crypto.getRandomValues(new Uint32Array(2));
  return (Math.pow(2, 32) * (values[0] & 0x1FFFFF) + values[1]) / Math.pow(2, 53);
}

/** Returns true if the give windowID represents an open browser tab's windowID.
 */
function isWindowActive(windowID) {
  const wm = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
  const browserEnumerator = wm.getEnumerator('navigator:browser');

  // the windowID should be an integer
  const numId = Number(windowID);
  if (numId <= 0) {
    return false;
  }

  while (browserEnumerator.hasMoreElements()) {
    const browserWin = browserEnumerator.getNext();
    const tabbrowser = browserWin.gBrowser;

    // check if tab is open in this window
    const win = tabbrowser.getBrowserForOuterWindowID(numId);

    // check for http URI.
    if (win !== undefined) {
      return win.currentURI && (win.currentURI.schemeIs('http') || win.currentURI.schemeIs('https'));
    }
  }

  return false;
}

function checkIsWindowActive(windowID) {
  return Promise.resolve(isWindowActive(windowID));
}

















/** Reset changed prefs on uninstall */


function getThemeStyle() {
  const selectedThemeID = prefs.get('lightweightThemes.selectedThemeID', '', '');
  return selectedThemeID === 'firefox-compact-dark@mozilla.org' ? 'dark' : 'light';
}

let branch; // cliqz specific prefs
let branchLightweightThemes; // theme specific prefs

const observer = {
  observe: (subject, topic, data) => {
    CliqzEvents.pub('prefchange', data);
  }
};

const observerLightweightThemes = {
  observe: (subject, topic, data) => {
    if (data === 'selectedThemeID') {
      CliqzEvents.pub('hostthemechange', getThemeStyle());
    }
  }
};





function getLocale() {
  try {
    // we need to use Services.locale.defaultLocale starting with
    // Firefox 59 as the other pref was removed
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414390
    return prefs.get('general.useragent.locale', Services.locale.defaultLocale, '');
  } catch (e) {
    return 'en-US';
  }
}







function waitForAsync(fn) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (depth <= 0) {
    return Promise.resolve('waitForAsync max depth');
  }

  return fn().then(value => {
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject();
  }).catch(() => new Promise(resolve => {
    setTimeout(() => {
      resolve(waitForAsync(fn, depth - 1));
    }, 100);
  }));
}



function getCurrentgBrowser() {
  return Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').gBrowser;
}

var getLocaleObject = function (url) {
  // Warning - sync request
  return JSON.parse(httpHandler('GET', url, null, null, null, null, true).response);
};

const SUPPORTED_LANGS = ['de', 'en', 'fr'];

var getSupportedLanguage = function (lang) {
  if (SUPPORTED_LANGS.indexOf(lang) !== -1) {
    return lang;
  }

  return 'en';
};

const getLanguageFromLocale = locale => locale.match(/([a-z]+)(?:[-_]([A-Z]+))?/)[1];

const i18n = {
  locale: {},
  currLocale: '',
  get PLATFORM_LOCALE() {
    return getLocale();
  },
  get PLATFORM_LANGUAGE() {
    return getLanguageFromLocale(this.PLATFORM_LOCALE);
  },
  LOCALE_PATH: `${config.baseURL}static/locale`
};

const getLocaleFile = locale => {
  const url = `${i18n.LOCALE_PATH}/${locale}/messages.json`;
  // Warning - sync request
  const localeObject = getLocaleObject(url, locale);
  i18n.currLocale = locale;
  i18n.locale.default = localeObject;
  i18n.locale[locale] = localeObject;
};

const loadTranslation = () => getLocaleFile(getSupportedLanguage(i18n.PLATFORM_LANGUAGE));

function getMessage(key) {
  let substitutions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!key) {
    return '';
  }

  if (Object.keys(i18n.locale).length === 0) {
    loadTranslation();
  }

  const str = (i18n.locale[i18n.currLocale][key] || { message: key }).message || key;

  let subs = substitutions;

  if (!Array.isArray(substitutions)) {
    subs = [substitutions];
  }

  function replacer(matched, index, dollarSigns) {
    if (index) {
      const i = parseInt(index, 10) - 1;
      return i in subs ? subs[i] : '';
    }

    // For any series of contiguous `$`s, the first is dropped, and
    // the rest remain in the output string.
    return dollarSigns;
  }

  return str.replace(/\$(?:([1-9]\d*)|(\$+))/g, replacer);
}

var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let _provider = null;

function getProvider() {
  if (!_provider) {
    _provider = (
    // history autocomplete provider is removed
    // https://hg.mozilla.org/mozilla-central/rev/44a989cf6c16
    Components.classes['@mozilla.org/autocomplete/search;1?name=history'] || Components.classes['@mozilla.org/autocomplete/search;1?name=unifiedcomplete']).getService(Components.interfaces.nsIAutoCompleteSearch);
  }
  return _provider;
}

/* eslint-disable */

// callback called multiple times
function getHistory(q, callback) {
  let isPrivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  const provider = getProvider();
  let lastMatchCount = 0;
  let searchParams = ['enable-actions', 'prohibit-autofill'];
  if (isPrivate) {
    searchParams.push('disable-private-actions');
    searchParams.push('private-window');
  }

  provider.startSearch(q, searchParams.join(' '), null, {
    onSearchResult: function onSearchResult(ctx, result) {
      const res = [];
      // TODO: remove this check when we switch to a new mixer completely
      for (let i = lastMatchCount; result && i < result.matchCount; i++) {
        let style = result.getStyleAt(i);
        if (result.getValueAt(i).indexOf('https://cliqz.com/search?q=') === 0) {
          continue;
        }

        if (style.includes('heuristic') || style.includes('searchengine')) {
          // filter out "heuristic" and "searchengine" results
          continue;
        }

        if (style.indexOf('switchtab') !== -1) {
          try {
            var _utils$cleanMozillaAc = CliqzUtils.cleanMozillaActions(result.getValueAt(i)),
                _utils$cleanMozillaAc2 = _slicedToArray$1(_utils$cleanMozillaAc, 2);

            let mozAction = _utils$cleanMozillaAc2[0],
                cleanURL = _utils$cleanMozillaAc2[1];

            let label;

            // ignore freshtab, history and cliqz search
            if (cleanURL.indexOf('chrome://cliqz') === 0 || cleanURL.indexOf('resource://cliqz') === 0 || cleanURL.indexOf('https://cliqz.com/search?q=') === 0) {
              continue;
            }

            res.push({
              style: style,
              value: cleanURL,
              image: result.getImageAt(i),
              comment: result.getCommentAt(i),
              label: label || cleanURL
            });
          } catch (e) {
            console$1.log('history result error', e);
          }
        } else {
          res.push({
            style: style,
            value: result.getValueAt(i),
            image: result.getImageAt(i),
            comment: result.getCommentAt(i),
            label: result.getLabelAt(i)
          });
        }
      }
      callback({
        query: q,
        results: res,
        ready: result.searchResult != result.RESULT_NOMATCH_ONGOING && result.searchResult != result.RESULT_SUCCESS_ONGOING
      });

      lastMatchCount = result.matchCount;
    }
  });
}

/* eslint no-param-reassign: 'off' */
/* eslint no-bitwise: 'off' */
/* eslint no-restricted-syntax: 'off' */

const VERTICAL_ENCODINGS = {
  people: 'p',
  news: 'n',
  video: 'v',
  hq: 'h',
  bm: 'm',
  reciperd: 'r',
  game: 'g',
  movie: 'o'
};

let BRANDS_DATABASE = { domains: Object.create(null), palette: ['999'] };

const CliqzUtils = {
  environment: CLIQZEnvironment,
  RESULTS_PROVIDER: config.settings.RESULTS_PROVIDER,
  RICH_HEADER: config.settings.RICH_HEADER,
  RESULTS_PROVIDER_LOG: config.settings.RESULTS_PROVIDER_LOG,
  RESULTS_PROVIDER_PING: config.settings.RESULTS_PROVIDER_PING,
  STATISTICS: config.settings.STATISTICS,
  SAFE_BROWSING: config.settings.SAFE_BROWSING,
  TUTORIAL_URL: config.settings.TUTORIAL_URL,
  UNINSTALL: config.settings.UNINSTALL,
  FEEDBACK: config.settings.FEEDBACK,
  get FEEDBACK_URL() {
    return `${this.FEEDBACK}${this.VERSION}-${config.settings.channel}`;
  },
  RESULTS_TIMEOUT: CLIQZEnvironment.RESULTS_TIMEOUT,

  BRANDS_DATABASE,

  // will be updated from the mixer config endpoint every time new logos are generated
  BRANDS_DATABASE_VERSION: 1521469421408,
  // The ID of the geolocation watcher
  // (function that updates cached geolocation on change)
  GEOLOC_WATCH_ID: null,

  VERTICAL_TEMPLATES: {
    n: 'news',
    p: 'people',
    v: 'video',
    h: 'hq',
    r: 'recipe',
    g: 'cpgame_movie',
    o: 'cpgame_movie'
  },
  hm: null,
  hw: null,
  mc: null,
  TEMPLATES_PATH: CLIQZEnvironment.TEMPLATES_PATH,
  TEMPLATES: CLIQZEnvironment.TEMPLATES,
  MESSAGE_TEMPLATES: CLIQZEnvironment.MESSAGE_TEMPLATES,
  PARTIALS: CLIQZEnvironment.PARTIALS,
  SKIN_PATH: CLIQZEnvironment.SKIN_PATH,
  RERANKERS: CLIQZEnvironment.RERANKERS,
  CLIQZ_ONBOARDING: CLIQZEnvironment.CLIQZ_ONBOARDING,
  CLIQZ_ONBOARDING_URL: CLIQZEnvironment.CLIQZ_ONBOARDING_URL,
  BROWSER_ONBOARDING_PREF: CLIQZEnvironment.BROWSER_ONBOARDING_PREF,
  telemetryHandlers: [CLIQZEnvironment.telemetry],

  init() {
    // cutting cyclic dependency
    CLIQZEnvironment.getLogoDetails = CliqzUtils.getLogoDetails.bind(CliqzUtils);
    CLIQZEnvironment.getDetailsFromUrl = CliqzUtils.getDetailsFromUrl.bind(CliqzUtils);
    CLIQZEnvironment.getLocalizedString = CliqzUtils.getLocalizedString.bind(CliqzUtils);
    CLIQZEnvironment.app = CliqzUtils.app;
    CliqzUtils.log('Initialized', 'CliqzUtils');

    CliqzUtils.tldExtractor = CLIQZEnvironment.tldExtractor || CliqzUtils.genericTldExtractor;
  },
  setLogoDb(db) {
    const domains = Object.create(null);
    db.domains = Object.assign(domains, db.domains);
    BRANDS_DATABASE = db;
    CliqzUtils.BRANDS_DATABASE = BRANDS_DATABASE;
  },
  getLogoDetails(urlDetails) {
    const base = urlDetails.name;
    const baseCore = base.replace(/[-]/g, '');
    const check = (host, rule) => {
      const address = host.lastIndexOf(base);
      const parseddomain = `${host.substr(0, address)}$${host.substr(address + base.length)}`;
      return parseddomain.indexOf(rule) !== -1;
    };
    let result = {};
    const domains = BRANDS_DATABASE.domains;
    const blackTxtColor = '2d2d2d';

    if (base.length === 0) {
      return result;
    }

    if (base === 'IP') {
      result = { text: 'IP', backgroundColor: '9077e3' };
    } else if (domains[base]) {
      for (let i = 0, imax = domains[base].length; i < imax; i += 1) {
        // r = rule, b = background-color, l = logo, t = text, c = color
        const rule = domains[base][i];

        if (check(urlDetails.host, rule.r)) {
          result = {
            backgroundColor: rule.b ? rule.b : null,
            backgroundImage: rule.l ? `url(${config.settings.BACKGROUND_IMAGE_URL}${this.BRANDS_DATABASE_VERSION}/logos/${base}/${rule.r}.svg)` : '',
            text: rule.t,
            color: rule.c ? '' : '#fff',
            brandTxtColor: rule.b ? rule.b : blackTxtColor
          };
          break;
        }
      }
    }
    result.text = result.text || `${baseCore[0] || ''}${baseCore[1] || ''}`.toLowerCase();
    result.backgroundColor = result.backgroundColor || BRANDS_DATABASE.palette[base.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % BRANDS_DATABASE.palette.length];
    result.brandTxtColor = result.brandTxtColor || blackTxtColor;

    const colorID = BRANDS_DATABASE.palette.indexOf(result.backgroundColor);
    const buttonClass = BRANDS_DATABASE.buttons && colorID !== -1 && BRANDS_DATABASE.buttons[colorID] ? BRANDS_DATABASE.buttons[colorID] : 10;

    result.buttonsClass = `cliqz-brands-button-${buttonClass}`;
    result.style = `background-color: #${result.backgroundColor};color:${result.color || '#fff'};`;

    if (result.backgroundImage) {
      result.style += `background-image:${result.backgroundImage}; text-indent: -10em;`;
    }

    return result;
  },
  httpHandler() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const errorHandler = args[3]; // see httpGet or httpPost arguments
    try {
      return httpHandler.call(undefined, ...args);
    } catch (e) {
      if (errorHandler) {
        errorHandler(e);
      } else {
        CliqzUtils.log(e, 'httpHandler failed');
      }
    }
    return undefined;
  },
  httpGet(url, callback, onerror, timeout, _, sync) {
    return CliqzUtils.httpHandler('GET', url, callback, onerror, timeout, _, sync);
  },
  httpPost(url, callback, data, onerror, timeout) {
    return CliqzUtils.httpHandler('POST', url, callback, onerror, timeout, data);
  },
  getLocalStorage(url) {
    return new Storage$1(url);
  },
  /**
   * Loads a resource URL from the xpi.
   *
   * Wraps httpGet in a try-catch clause. We need to do this, because when
   * trying to load a non-existing file from an xpi via xmlhttprequest, Firefox
   * throws a NS_ERROR_FILE_NOT_FOUND exception instead of calling the onerror
   * function.
   *
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=827243 (probably).
   */
  loadResource(url, callback, onerror) {
    try {
      return CliqzUtils.httpGet(url, callback, onerror, 3000);
    } catch (e) {
      CliqzUtils.log(`Could not load resource ${url} from the xpi`, 'CliqzUtils.httpHandler');
      if (onerror) {
        onerror();
      }
    }
    return undefined;
  },
  openTabInWindow: CLIQZEnvironment.openTabInWindow,
  getPref: prefs.get,
  setPref: prefs.set,
  hasPref: prefs.has,
  clearPref: prefs.clear,
  log(msg, key) {
    console$1.log(key, msg);
  },
  getDay() {
    return Math.floor(new Date().getTime() / 86400000);
  },
  getServerDay() {
    const serverDateStr = CliqzUtils.getPref('config_ts', null);
    if (serverDateStr) {
      try {
        const year = serverDateStr.substr(0, 4);
        const month = serverDateStr.substr(4, 2);
        const day = serverDateStr.substr(6, 2);
        const realDate = new Date(`${year}/${month}/${day}`);

        // we need to consider the timezone offset
        return Math.floor((realDate.getTime() - realDate.getTimezoneOffset() * 60 * 1000) / 86400000);
      } catch (e) {
        // fallback to getDay
      }
    }

    return CliqzUtils.getDay();
  },
  // creates a random 'len' long string from the input space
  rand(len, _space) {
    let ret = '';
    let i;
    const space = _space || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const sLen = space.length;

    for (i = 0; i < len; i += 1) {
      ret += space.charAt(Math.floor(random() * sLen));
    }

    return ret;
  },
  hash(s) {
    return s.split('').reduce((a, b) => (a << 4) - a + b.charCodeAt(0) & 0xEFFFFFF, 0);
  },
  cleanMozillaActions: cleanMozillaActions,
  cleanUrlProtocol(url, cleanWWW) {
    if (!url) {
      return '';
    }

    // removes protocol if it's http(s). See CLIQZIUM-218.
    const urlLowered = url.toLowerCase();
    if (urlLowered.startsWith('http://')) {
      url = url.slice(7);
    }
    if (urlLowered.startsWith('https://')) {
      url = url.slice(8);
    }

    // removes the www.
    if (cleanWWW && url.toLowerCase().startsWith('www.')) {
      url = url.slice(4);
    }

    return url;
  },
  genericTldExtractor: getPublicSuffix,
  getDetailsFromUrl: getDetailsFromUrl,
  stripTrailingSlash: stripTrailingSlash,
  isUrl: isUrl,
  // Remove clutter (http, www) from urls
  generalizeUrl(url, skipCorrection) {
    if (!url) {
      return '';
    }
    let val = url.toLowerCase();
    const cleanParts = CliqzUtils.cleanUrlProtocol(val, false).split('/');
    const host = cleanParts[0];
    let pathLength = 0;
    const SYMBOLS = /,|\./g;
    if (!skipCorrection) {
      if (cleanParts.length > 1) {
        pathLength = `/${cleanParts.slice(1).join('/')}`.length;
      }
      if (host.indexOf('www') === 0 && host.length > 4) {
        // only fix symbols in host
        if (SYMBOLS.test(host[3]) && host[4] !== ' ') {
          // replace only issues in the host name, not ever in the path
          val = val.substr(0, val.length - pathLength).replace(SYMBOLS, '.') + (pathLength ? val.substr(-pathLength) : '');
        }
      }
    }
    url = CliqzUtils.cleanUrlProtocol(val, true);
    return url[url.length - 1] === '/' ? url.slice(0, -1) : url;
  },
  // Remove clutter from urls that prevents pattern detection, e.g. checksum
  simplifyUrl(url) {
    let q;
    // Google redirect urls
    if (url.search(/http(s?):\/\/www\.google\..*\/url\?.*url=.*/i) === 0) {
      // Return target URL instead
      url = url.substring(url.lastIndexOf('url=')).split('&')[0];
      url = url.substr(4);
      return decodeURIComponent(url);

      // Remove clutter from Google searches
    } else if (url.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i) === 0) {
      q = url.substring(url.lastIndexOf('q=')).split('&')[0];
      if (q !== 'q=') {
        // tbm defines category (images/news/...)
        const param = url.indexOf('#') !== -1 ? url.substr(url.indexOf('#')) : url.substr(url.indexOf('?'));
        const tbm = param.indexOf('tbm=') !== -1 ? `&${param.substring(param.lastIndexOf('tbm=')).split('&')[0]}` : '';
        return `https://www.google.com/search?${q}${tbm}`;
      }
      return url;
      // Bing
    } else if (url.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i) === 0) {
      q = url.substring(url.indexOf('q=')).split('&')[0];
      if (q !== 'q=') {
        if (url.indexOf('search?') !== -1) {
          return `${url.substr(0, url.indexOf('search?'))}search?${q}`;
        }
        return `${url.substr(0, url.indexOf('/?'))}/?${q}`;
      }
      return url;
      // Yahoo redirect
    } else if (url.search(/http(s?):\/\/r.search\.yahoo\.com\/.*/i) === 0) {
      url = url.substring(url.lastIndexOf('/RU=')).split('/RK=')[0];
      url = url.substr(4);
      return decodeURIComponent(url);
      // Yahoo
    } else if (url.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i) === 0) {
      const p = url.substring(url.indexOf('p=')).split('&')[0];
      if (p !== 'p=' && url.indexOf(';') !== -1) {
        return `${url.substr(0, url.indexOf(';'))}?${p}`;
      }
      return url;
    }
    return url;
  },

  // establishes the connection
  pingCliqzResults() {
    CliqzUtils.httpHandler('HEAD', CliqzUtils.RESULTS_PROVIDER_PING);
  },

  getResultsProviderQueryString(q, _ref) {
    let resultOrder = _ref.resultOrder;

    let numberResults = 5;
    if (CliqzUtils.getPref('languageDedup', false)) {
      numberResults = 7;
    }
    if (CliqzUtils.getPref('modules.context-search.enabled', false)) {
      numberResults = 10;
    }
    return encodeURIComponent(q) + CliqzUtils.encodeSessionParams() + CliqzLanguage$1.stateToQueryString() + CliqzUtils.encodeLocale() + CliqzUtils.encodePlatform() + CliqzUtils.encodeResultOrder(resultOrder) + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true) + // @TODO: remove true
    CliqzUtils.encodeResultCount(numberResults) + CliqzUtils.enncodeQuerySuggestionParam() + CliqzUtils.disableWikiDedup();
  },

  getRichHeaderQueryString(q, loc) {
    // @TODO: should start with &q=
    // eslint-disable-next-line prefer-template
    return '&q=' + encodeURIComponent(q) + CliqzUtils.encodeSessionParams() + CliqzLanguage$1.stateToQueryString() + CliqzUtils.encodeLocale() + CliqzUtils.encodePlatform() + CliqzUtils.encodeResultOrder() + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true, loc && loc.latitude, loc && loc.longitude) + CliqzUtils.disableWikiDedup();
  },
  // used in testing only
  fetchFactory() {
    return fetchFactory();
  },

  getBackendResults(q) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (isOnionMode) {
      return Promise.resolve({
        response: {
          results: [],
          offers: []
        },
        query: q
      });
    }

    const url = CliqzUtils.RESULTS_PROVIDER + CliqzUtils.getResultsProviderQueryString(q, params);
    const fetch$$1 = CliqzUtils.fetchFactory();

    CliqzUtils._sessionSeq += 1;

    // if the user sees the results more than 500ms we consider that he starts a new query
    if (CliqzUtils._queryLastDraw && Date.now() > CliqzUtils._queryLastDraw + 500) {
      CliqzUtils._queryCount += 1;
    }
    CliqzUtils._queryLastDraw = 0; // reset last Draw - wait for the actual draw
    CliqzUtils._queryLastLength = q.length;
    const privacyOptions = {
      credentials: 'omit',
      cache: 'no-store'
    };

    const backendPromise = fetch$$1(url, privacyOptions).then(res => res.json()).then(response => {
      if (prefs.get('myoffrz.experiments.001.position', 'first') === 'last') {
        const offerResults = response.results.filter(r => r.template === 'offer');
        const nonOfferResults = response.results.filter(r => r.template !== 'offer');

        response.results = [...nonOfferResults, ...offerResults];
      }
      if (response.results && (response.results.length > 0 || !config.settings.suggestions) || response.offers && response.offers.length > 0) {
        return {
          response,
          query: q
        };
      }

      return {
        response: {
          results: [],
          offers: []
        },
        query: q
      };
    });

    return backendPromise;
  },

  historySearch: getHistory,

  getSuggestions(query) {
    const defaultEngine = CliqzUtils.getDefaultSearchEngine();
    const url = defaultEngine.getSubmissionForQuery(query, 'application/x-suggestions+json');
    const fetch$$1 = CliqzUtils.fetchFactory();
    if (url) {
      return fetch$$1(url, { credentials: 'omit', cache: 'no-store' }).then(res => res.json());
    }
    return Promise.resolve([query, []]);
  },
  setDefaultCountryIndex() {
    const selectedCountry = prefs.get('backend_country', '');
    const supportedCountries = JSON.parse(prefs.get('config_backends', '["de"]'));
    const unsupportedCountrySelection = supportedCountries.indexOf(selectedCountry) === -1;

    // we only set the prefered backend once at first start
    // or we reset if it's unsupported
    if (selectedCountry === '' || unsupportedCountrySelection) {
      const location = prefs.get('config_location', 'de');
      if (supportedCountries.indexOf(location) !== -1) {
        // supported country
        prefs.set('backend_country', location);
      } else if (CliqzUtils.currLocale === 'de') {
        // unsupported country - fallback to
        //    'de' for german speaking users
        prefs.set('backend_country', 'de');
      } else {
        //    'us' for everybody else
        prefs.set('backend_country', 'us');
      }
    }
  },
  // this is called from the UI. In that case we clear the override
  setCountryIndex(country) {
    prefs.clear('backend_country.override');
    prefs.set('backend_country', country);
  },
  encodePlatform() {
    return `&platform=${isMobile ? '1' : '0'}`;
  },
  encodeLocale() {
    return `&locale=${CliqzUtils.PLATFORM_LOCALE || ''}`;
  },
  encodeCountry() {
    return `&country=${prefs.get('backend_country.override', prefs.get('backend_country', 'de'))}`;
  },
  disableWikiDedup() {
    // disable wikipedia deduplication on the backend side
    const doDedup = CliqzUtils.getPref('languageDedup', false);
    if (doDedup) return '&ddl=0';
    return '';
  },
  getAdultContentFilterState() {
    const data = {
      conservative: 3,
      moderate: 0,
      liberal: 1
    };
    const pref = CliqzUtils.getPref('adultContentFilter', 'moderate');
    return data[pref];
  },
  encodeFilter() {
    return `&adult=${CliqzUtils.getAdultContentFilterState()}`;
  },
  encodeResultCount(count) {
    count = count || 5;
    return `&count=${count}`;
  },
  enncodeQuerySuggestionParam() {
    const suggestionsEnabled = CliqzUtils.getPref('suggestionsEnabled', false) || CliqzUtils.getPref('suggestionChoice', 0) === 1;

    return `&suggest=${suggestionsEnabled ? 1 : 0}`;
  },
  encodeResultType(type) {
    if (type.indexOf('action') !== -1) return ['T'];else if (type.indexOf('cliqz-results') === 0) return CliqzUtils.encodeCliqzResultType(type);else if (type.indexOf('cliqz-pattern') === 0) return ['C'];else if (type === 'cliqz-extra') return ['X'];else if (type === 'cliqz-series') return ['S'];else if (type === 'cliqz-suggestion') return ['Z'];else if (type.indexOf('bookmark') === 0 || type.indexOf('tag') === 0) return ['B'].concat(CliqzUtils.encodeCliqzResultType(type));else if (type.indexOf('favicon') === 0 || type.indexOf('history') === 0) return ['H'].concat(CliqzUtils.encodeCliqzResultType(type));

    // cliqz type = "cliqz-custom sources-X"
    else if (type.indexOf('cliqz-custom') === 0) return type.substr(21);

    return type; // should never happen
  },
  // eg types: [ "H", "m" ], [ "H|instant", "X|11" ]
  isPrivateResultType() {
    let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (type.length === 0) {
      return false;
    }

    const onlyType = type[0].split('|')[0];
    const hasCluster = type.some(a => a.split('|')[0] === 'C');

    if (hasCluster) {
      // we want to be extra carefull and do not send back any cluster information
      return true;
    }

    return 'HBTCS'.indexOf(onlyType) !== -1 && type.length === 1;
  },
  // cliqz type = "cliqz-results sources-XXXXX" or "favicon sources-XXXXX" if combined with history
  encodeCliqzResultType(type) {
    const pos = type.indexOf('sources-');
    if (pos !== -1) {
      return CliqzUtils.encodeSources(type.substr(pos + 8));
    }
    return [];
  },
  // random ID generated at each urlbar focus
  _searchSession: '',
  // number of sequences in each session
  _sessionSeq: 0,
  _queryLastLength: null,
  _queryLastDraw: null,
  // number of queries in search session
  _queryCount: null,
  setSearchSession(rand) {
    CliqzUtils._searchSession = rand;
    CliqzUtils._sessionSeq = 0;
    CliqzUtils._queryCount = 0;
    CliqzUtils._queryLastLength = 0;
    CliqzUtils._queryLastDraw = 0;
  },
  encodeSessionParams() {
    if (CliqzUtils._searchSession.length) {
      // eslint-disable-next-line prefer-template
      return '&s=' + encodeURIComponent(CliqzUtils._searchSession) + '&n=' + CliqzUtils._sessionSeq + '&qc=' + CliqzUtils._queryCount;
    }
    return '';
  },

  encodeLocation(specifySource, lat, lng) {
    // default geolocation 'yes' for funnelCake - 'ask' for everything else
    let locationPref = CliqzUtils.getPref('share_location', config.settings.geolocation || 'ask');
    if (locationPref === 'showOnce') {
      locationPref = 'ask';
    }
    let qs = `&loc_pref=${locationPref}`;

    if (CliqzUtils.USER_LAT && CliqzUtils.USER_LNG || lat && lng) {
      qs += ['&loc=', lat || CliqzUtils.USER_LAT, ',', lng || CliqzUtils.USER_LNG, specifySource ? ',U' : ''].join('');
    }

    return qs;
  },
  encodeSources(sources) {
    return sources.toLowerCase().split(', ').map(s => {
      if (s.indexOf('cache') === 0) {
        // to catch 'cache-*' for specific countries
        return 'd';
      }
      return VERTICAL_ENCODINGS[s] || s;
    });
  },
  isPrivateMode(win) {
    if (!win) {
      win = CliqzUtils.getWindow();
    }
    return CLIQZEnvironment.isPrivate(win) || CLIQZEnvironment.isOnPrivateTab(win);
  },
  telemetry() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return Promise.all(CliqzUtils.telemetryHandlers.map(handler => handler(...args)));
  },
  sendUserFeedback(data) {
    data._type = 'user_feedback';
    // Params: method, url, resolve, reject, timeout, data
    httpHandler('POST', CliqzUtils.STATISTICS, null, null, 10000, JSON.stringify(data));
  },
  encodeResultOrder(resultOrder) {
    return `&o=${encodeURIComponent(JSON.stringify(resultOrder))}`;
  },
  setInterval: CLIQZEnvironment.setInterval,
  setTimeout: CLIQZEnvironment.setTimeout,
  clearTimeout: CLIQZEnvironment.clearTimeout,
  clearInterval: CLIQZEnvironment.clearTimeout,
  Promise: CLIQZEnvironment.Promise,

  /* i18n -- start */
  // TODO: all those should be remove and used from i18n directly
  get locale() {
    return i18n.locale;
  },
  get currLocale() {
    return i18n.currLocale;
  },
  get PLATFORM_LOCALE() {
    return i18n.PLATFORM_LOCALE; // eg: en-US, en-GB, de
  },
  get PLATFORM_LANGUAGE() {
    return i18n.PLATFORM_LANGUAGE; // eg: en, de, es
  },
  get LOCALE_PATH() {
    return i18n.LOCALE_PATH;
  },
  getLanguageFromLocale,
  getLocalizedString: getMessage,
  // gets all the elements with the class 'cliqz-locale' and adds
  // the localized string - key attribute - as content
  localizeDoc(doc) {
    const locale = doc.getElementsByClassName('cliqz-locale');
    for (let i = 0; i < locale.length; i += 1) {
      const el = locale[i];
      el.textContent = getMessage(el.getAttribute('key'));
    }
  },
  /* i18n -- end */
  /* platform -- start */
  isWindows,
  isLinux,
  isMac,
  /* platform -- end */
  getWindow: CLIQZEnvironment.getWindow,
  getWindowID: CLIQZEnvironment.getWindowID,
  /**
   * Bind functions contexts to a specified object.
   * @param {Object} from - An object, whose function properties will be processed.
   * @param {Object} to - An object, which will be the context (this) of processed functions.
   */
  bindObjectFunctions(from, to) {
    for (const funcName in from) {
      if (Object.prototype.hasOwnProperty.call(from, funcName)) {
        const func = from[funcName];
        // Can't compare with prototype of object from a different module.
        if (typeof func === 'function') {
          from[funcName] = func.bind(to);
        }
      }
    }
  },
  tryDecodeURIComponent: tryDecodeURIComponent,
  tryDecodeURI: tryDecodeURI,
  tryEncodeURIComponent: tryEncodeURIComponent,
  tryEncodeURI: tryEncodeURI,
  parseQueryString(qstr) {
    const query = {};
    const a = (qstr || '').split('&');
    for (const i in a) {
      if (Object.prototype.hasOwnProperty.call(a, i)) {
        const b = a[i].split('=');
        query[CliqzUtils.tryDecodeURIComponent(b[0])] = CliqzUtils.tryDecodeURIComponent(b[1]);
      }
    }

    return query;
  },
  roundToDecimal(number, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.round(number * multiplier) / multiplier;
  },
  getAdultFilterState() {
    const data = {
      conservative: {
        name: CliqzUtils.getLocalizedString('always'),
        selected: false
      },
      moderate: {
        name: CliqzUtils.getLocalizedString('always_ask'),
        selected: false
      },
      liberal: {
        name: CliqzUtils.getLocalizedString('never'),
        selected: false
      }
    };
    let state = CliqzUtils.getPref('adultContentFilter', 'moderate');
    if (state === 'showOnce') {
      state = 'moderate';
    }
    data[state].selected = true;

    return data;
  },
  getLocationPermState() {
    const data = {
      yes: {
        name: CliqzUtils.getLocalizedString('always'),
        selected: false
      },
      ask: {
        name: CliqzUtils.getLocalizedString('always_ask'),
        selected: false
      },
      no: {
        name: CliqzUtils.getLocalizedString('never'),
        selected: false
      }
    };
    let currentState = CliqzUtils.getPref('share_location', config.settings.geolocation || 'ask');
    if (currentState === 'showOnce') {
      currentState = 'ask';
    }

    // default geolocation 'yes' for funnelCake - 'ask' for everything else
    data[currentState].selected = true;

    return data;
  },
  getNoResults: CLIQZEnvironment.getNoResults,
  search: CLIQZEnvironment.search,
  distance(lon1, lat1) {
    let lon2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CliqzUtils.USER_LNG;
    let lat2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CliqzUtils.USER_LAT;

    /** Converts numeric degrees to radians */
    function degreesToRad(degree) {
      return degree * Math.PI / 180;
    }

    const R = 6371; // Radius of the earth in km
    if (!lon2 || !lon1 || !lat2 || !lat1) {
      return -1;
    }
    const dLat = degreesToRad(lat2 - lat1); // Javascript functions in radians
    const dLon = degreesToRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degreesToRad(lat1)) * Math.cos(degreesToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  },
  getDefaultSearchEngine: CLIQZEnvironment.getDefaultSearchEngine,
  copyResult: CLIQZEnvironment.copyResult,
  openPopup: CLIQZEnvironment.openPopup,
  getAllCliqzPrefs: CLIQZEnvironment.getAllCliqzPrefs,
  isDefaultBrowser: CLIQZEnvironment.isDefaultBrowser,
  setDefaultSearchEngine: CLIQZEnvironment.setDefaultSearchEngine,
  isUnknownTemplate: CLIQZEnvironment.isUnknownTemplate,
  getEngineByName: CLIQZEnvironment.getEngineByName,
  addEngineWithDetails: CLIQZEnvironment.addEngineWithDetails,
  restoreHiddenSearchEngines: CLIQZEnvironment.restoreHiddenSearchEngines,
  removeEngine: CLIQZEnvironment.removeEngine,
  getEngineByAlias: CLIQZEnvironment.getEngineByAlias,
  getSearchEngines: CLIQZEnvironment.getSearchEngines,
  updateAlias: CLIQZEnvironment.updateAlias,
  openLink: CLIQZEnvironment.openLink,
  getCliqzPrefs() {
    function filterer(entry) {
      // avoid privay leaking prefs ('backup').
      // avoid irrelevant deep prefs (something.otherthing.x.y)
      // avoid prefs sending domains.
      // allow 'enabled' prefs
      return entry.indexOf('.') === -1 && entry.indexOf('backup') === -1 && entry.indexOf('attrackSourceDomainWhitelist') === -1 || entry.indexOf('.enabled') !== -1;
    }

    const cliqzPrefs = {};
    const cliqzPrefsKeys = CliqzUtils.getAllCliqzPrefs().filter(filterer);

    for (let i = 0; i < cliqzPrefsKeys.length; i += 1) {
      cliqzPrefs[cliqzPrefsKeys[i]] = prefs.get(cliqzPrefsKeys[i]);
    }

    return cliqzPrefs;
  },
  promiseHttpHandler,
  fetchAndStoreConfig() {
    return Promise.resolve();
  }
};

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function makeDirRecursive(path) {
  let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _path = _toArray(path);

  const first = _path[0],
        rest = _path.slice(1);

  if (!first) {
    return Promise.resolve();
  }

  return mkdir$1(from.concat(first)).then(() => makeDirRecursive(rest, from.concat(first)));
}

class Storage$2 {
  constructor(filePath) {
    this.filePath = filePath;
  }

  load() {
    return readFile$1(this.filePath);
  }

  save(data) {
    const dirPath = this.filePath.slice(0, -1);
    return makeDirRecursive(dirPath).then(() => {
      try {
        // If TextEncoder is not available just use `data`
        return new TextEncoder().encode(data);
      } catch (e) {
        return data;
      }
    }).then(encoded => writeFile$1(this.filePath, encoded));
  }
}

/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-sparse-arrays */

function toByteArray(data) {
  if (data.buffer) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  return new Uint8Array(data);
}

function _toString(data) {
  const CHUNK_SIZE = 32767;
  const c = [];
  const len = data.length;
  for (let i = 0; i < len; i += CHUNK_SIZE) {
    c.push(String.fromCharCode.apply(null, data.subarray(i, i + CHUNK_SIZE)));
  }
  return c.join('');
}

function _fromString(data) {
  const res = new Uint8Array(data.length);
  const len = data.length;
  for (let i = 0; i < len; i += 1) {
    res[i] = data.charCodeAt(i);
  }
  return res;
}

// http://ecmanaut.blogspot.de/2006/07/encoding-decoding-utf8-in-javascript.html
function _toUTF8(s) {
  return _fromString(unescape(encodeURIComponent(s)));
}

function _fromUTF8(s) {
  return decodeURIComponent(escape(_toString(s)));
}

/* Returns a string given a Uint8Array UTF-8 encoding */
const decoder = TextDecoder ? new TextDecoder() : { decode: _fromUTF8 };
function fromUTF8(bytes) {
  return decoder.decode(toByteArray(bytes));
}

/* Returns a Uint8Array UTF-8 encoding of the given string */
const encoder = TextEncoder ? new TextEncoder() : { encode: _toUTF8 };

const zlibProxy = lazyLoader('pako.min.js', 'pako');

function inflate() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return zlibProxy.inflate.call(zlibProxy, ...args);
}

function deflate() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return zlibProxy.deflate.call(zlibProxy, ...args);
}

// Common durations
const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;

function get(url) {
  return fetch(url).then(response => response.text());
}

/* Abstract away the pattern `onUpdate` trigger list of
 * callbacks. This pattern is used a lot, so it looks worth
 * it to create a base class to handle it.
 */
class UpdateCallbackHandler {
  constructor() {
    this.callbacks = [];
  }

  onUpdate(callback) {
    this.callbacks.push(callback);
  }

  triggerCallbacks(args) {
    return Promise.all(this.callbacks.map(cb => cb(args)));
  }
}

/* A resource is responsible for handling a remote resource persisted on
 * disk. It will be persisted on disk upon each update from remote. It is
 * also able to parse JSON automatically if `dataType` is 'json'.
 */
class Resource {
  constructor(name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.name = typeof name === 'string' ? [name] : name;
    this.remoteURL = options.remoteURL;
    this.dataType = options.dataType || 'json';
    this.filePath = ['cliqz', ...this.name];
    this.chromeURL = options.chromeURL || `${config.baseURL}${this.name.join('/')}`;
    this.storage = new Storage$2(this.filePath);
    this.remoteOnly = options.remoteOnly || platformName === 'mobile';
    this.compress = options.compress || isChromium;
  }

  /**
   * Loads the resource. Load either a cached version of the file available in
   * the profile, or at the chrome URL (if provided) or from remote.
   *
   * @returns a Promise resolving to the resource. This Promise can fail on
   * error (if the remote resource cannot be fetched, or if the parsing
   * fails, for example), thus **you should should add a _catch_** to this
   * promise to handle errors properly.
   */
  load() {
    return this.storage.load().then(data => this.decompressData(data)).then(data => {
      try {
        // data might be a plain string in web extension case
        // for react native the TextDecoder.decode returns an empty string
        return fromUTF8(data) || data;
      } catch (e) {
        return data;
      }
    }).then(data => this.parseData(data)).catch(() => {
      if (this.remoteOnly) {
        return Promise.reject('Should update only from remote');
      }
      return this.updateFromURL(this.chromeURL);
    }).catch(() => this.updateFromRemote());
  }

  /**
   * Tries to update the resource from the `remoteURL`.
   *
   * @returns a Promise resolving to the updated resource. Similarly
   * to the `load` method, the promise can fail, and thus you should
   * had a **catch** close to your promise to handle any exception.
   */
  updateFromRemote() {
    if (this.remoteURL === undefined) {
      return Promise.reject('updateFromRemote: remoteURL is undefined');
    }
    return this.updateFromURL(this.remoteURL);
  }

  /* *****************************************************************
   * Private API
   ***************************************************************** */

  updateFromURL(url) {
    if (url) {
      return get(url).then(this.persist.bind(this));
    }

    return Promise.reject('updateFromURL: url is undefined');
  }

  compressData(data) {
    if (this.compress) {
      return deflate(data, { to: 'string' });
    }
    return data;
  }

  decompressData(data) {
    if (this.compress) {
      try {
        return inflate(data, { to: 'string' });
      } catch (e) {
        return data;
      }
    } else {
      return data;
    }
  }

  persist(data) {
    return this.parseData(data).then(parsed => {
      const saveData = this.compressData(data);
      return this.storage.save(saveData).catch(e => console$1.error('resource-loader error on persist: ', e)).then(() => parsed);
    });
  }

  parseData(data) {
    if (this.dataType === 'json') {
      try {
        const parsed = JSON.parse(data);
        return Promise.resolve(parsed);
      } catch (e) {
        return Promise.reject(`parseData: failed with exception ${e} ${data}`);
      }
    }

    return Promise.resolve(data);
  }
}

class ResourceLoader extends UpdateCallbackHandler {
  constructor(resourceName) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    super();

    this.resource = new Resource(resourceName, options);
    this.cron = options.cron || ONE_HOUR;
    this.updateInterval = options.updateInterval || 10 * ONE_MINUTE;
    this.intervalTimer = CliqzUtils.setInterval(this.updateFromRemote.bind(this), this.updateInterval);
  }

  /**
   * Loads the resource hold by `this.resource`. This can return
   * a failed promise. Please read `Resource.load` doc string for
   * further information.
   */
  load() {
    return this.resource.load();
  }

  /**
   * Updates the resource from remote (maximum one time per `cron`
   * time frame).
   *
   * @returns a Promise which never fails, since this update will be
   * triggered by `setInterval` and thus you cannot catch. If the update
   * fails, then the callback won't be called.
   */
  updateFromRemote() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$force = _ref.force;

    let force = _ref$force === undefined ? false : _ref$force;

    const pref = `resource-loader.lastUpdates.${this.resource.name.join('/')}`;
    const lastUpdate = Number(CliqzUtils.getPref(pref, 0));
    const currentTime = Date.now();

    if (force || currentTime > this.cron + lastUpdate) {
      return this.resource.updateFromRemote().then(data => {
        CliqzUtils.setPref(pref, String(Date.now()));
        return data;
      }).then(data => {
        this.triggerCallbacks(data);
        return data;
      }).catch(() => undefined);
    }
    return Promise.resolve();
  }

  stop() {
    CliqzUtils.clearInterval(this.intervalTimer);
  }
}

class CryptoWorker {
  // the name is optional (it is only relevant for debugging)
  constructor(name) {
    this.worker = new Worker(`${config.baseURL}hpn/worker.bundle.js?name=${name || ''}`, { name });
  }

  set onmessage(fn) {
    this.worker.onmessage = fn;
  }

  postMessage() {
    this.worker.postMessage(...arguments);
  }

  terminate() {
    this.worker.terminate();
  }
}

let app;

class ModuleMissingError extends Error {
  constructor(moduleName) {
    super(`module '${moduleName}' is missing`);
    this.name = 'ModuleMissingError';
  }
}

class ModuleDisabledError extends Error {
  constructor(moduleName) {
    super(`module '${moduleName}' is disabled`);
    this.name = 'ModuleDisabledError';
  }
}

/**
 * Given the promise resulting from a call to `action`, ignore errors resulting
 * from a disabled module. This can be especially useful during extension
 * restart when modules are stopped in arbitrary order and some actions might
 * fail.
 */


class ModuleWrapper {
  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  get module() {
    return app && app.modules[this.moduleName];
  }

  isWindowReady(window) {
    return this.isReady().then(() => this.module.getWindowLoadingPromise(window));
  }

  isReady() {
    if (!this.module) {
      return Promise.reject(new ModuleMissingError(this.moduleName));
    }

    if (this.module.isDisabled) {
      return Promise.reject(new ModuleDisabledError(this.moduleName));
    }

    return this.module.isReady();
  }

  isEnabled() {
    return !!(this.module && !this.module.isDisabled);
  }

  action(actionName) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.isReady().then(() => this.module.background.actions[actionName](...args));
  }

  windowAction(window, actionName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return this.isWindowReady(window).then(() => {
      const windowModule = this.module.getWindowModule(window);
      const action = windowModule.actions[actionName];
      return Promise.resolve(action(...args));
    });
  }
}

var inject = {
  /**
   * Gets a module wrapper.
   * @param {string} -  moduleName Name of the module to be injected
   */
  module(moduleName) {
    return new ModuleWrapper(moduleName);
  }
};

class MessageSender {
  constructor() {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.hpnv2 = inject.module('hpnv2');
    // by default, use CryptoWorker and the global CliqzSecureMessage
    // (unless overwritten by tests)
    const CryptoWorkerImpl = args.CryptoWorker || CryptoWorker;
    this._CliqzSecureMessage = args._CliqzSecureMessage || CliqzSecureMessage;

    this.log('MessageSender: starting crypto worker');
    this.cryptoWorker = new CryptoWorkerImpl('message-sender');

    // in the beginning, there are no pending communications
    this.pendingCommunications = Promise.resolve();
  }

  stop() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { quick: false };

    let quick = _ref.quick;

    const killWorker = () => {
      const worker = this.cryptoWorker;
      if (worker) {
        this.log('MessageSender: stopping crypto worker');
        delete this.cryptoWorker;
        worker.terminate();
      }
    };

    if (quick) {
      killWorker();
      return Promise.resolve();
    }
    return this.pendingCommunications.then(killWorker, killWorker);
  }

  /**
   * This will sequentially send all given messages.
   *
   * Returns a promise that allows to wait for the operation
   * to complete.
   */
  send(messages) {
    messages.forEach(_msg => {
      const msg = _msg;
      if (this.hpnv2.isEnabled()) {
        if (msg && typeof msg === 'object') {
          msg.hpnv2 = true;
        }
        this.hpnv2.action('send', msg).catch(() => {});
      }
      this._sendSingleMessage(msg);
    });

    // There is no real error handling, so we ignore rejected
    // promises. Also avoid Promise.all, as we do not want
    // fail-fast behavior.
    return this.pendingCommunications.then(() => {}, () => {});
  }

  _sendSingleMessage(message) {
    const prevPendingSends = this.pendingCommunications;
    this.pendingCommunications = new Promise((resolve, reject) => {
      const _CliqzSecureMessage = this._CliqzSecureMessage;
      const postMessage = () => {
        if (!this.cryptoWorker) {
          this.log('Discarding message, as the web worker is already stopped.');
          reject();
          return;
        }

        // At this point, we know that the worker is idle,
        // so we can overwrite "onmessage".
        this.cryptoWorker.onmessage = e => {
          if (e.data.type === 'telemetry') {
            _CliqzSecureMessage.localTemporalUniq = e.data.localTemporalUniq;
            _CliqzSecureMessage.storage.saveLocalCheckTable();
          }

          resolve();
        };

        // Passes one message to the web worker, which does the actual sending.
        try {
          this.cryptoWorker.postMessage({
            msg: message,
            type: 'telemetry',
            sourcemap: _CliqzSecureMessage.sourceMap,
            upk: _CliqzSecureMessage.uPK,
            dspk: _CliqzSecureMessage.dsPK,
            sspk: _CliqzSecureMessage.secureLogger,
            routetable: _CliqzSecureMessage.routeTable,
            localTemporalUniq: _CliqzSecureMessage.localTemporalUniq
          });
        } catch (e) {
          this.log('Failed to send message', e);
          reject(e);
        }
      };

      // Wait until all pending messages are sent. Here, it does not
      // matter if sending was successful or not. In both cases,
      // continue with sending the message to the web worker, which
      // will do the actual work (cryptography + HTTP request).
      return prevPendingSends.then(postMessage).catch(postMessage);
    });
    return this.pendingCommunications;
  }

  log() {
    if (this._CliqzSecureMessage.debug) {
      console$1.log(...arguments);
    }
  }
}

/* eslint no-param-reassign: 'off' */

/*
Converts given array to generator like object.
*/


function prunelocalTemporalUniq() {
  if (CliqzSecureMessage.localTemporalUniq && Object.keys(CliqzSecureMessage.localTemporalUniq).length > 0) {
    const currTime = Date.now();
    Object.keys(CliqzSecureMessage.localTemporalUniq).forEach(e => {
      const d = CliqzSecureMessage.localTemporalUniq[e].ts;
      const diff = currTime - d;
      if (diff >= 24 * 60 * 60 * 1000) {
        delete CliqzSecureMessage.localTemporalUniq[e];
      }
    });
    /*
    if(CliqzHumanWeb.actionStats) {
        const itemsLocalValidation = Object.keys(CliqzSecureMessage.localTemporalUniq).length;
        CliqzHumanWeb.actionStats.itemsLocalValidation = itemsLocalValidation;
    }
    */
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* eslint import/prefer-default-export: 'off' */

const OFFER_TELEMETRY_PREFIX = config.settings.OFFER_TELEMETRY_PREFIX;

function getNextProxyAndRotate() {
  // Make sure that that CliqzSecureMessage.queryProxyIP exists,
  // otherwise, sending the message will silently fail.
  //
  // The queryProxyIP contains the proxy's verify endpoint
  // (e.g., "http://<proxy-ip>/verify" or "https://<proxy-url>/verify").
  const proxyUrl = CliqzSecureMessage.proxyIP();
  if (!proxyUrl) {
    throw new Error('Failed to send message, as the list of proxies is empty');
  }
  return proxyUrl;
}

let proxyHttpHandler = null;
function overRideCliqzResults() {
  if (CliqzUtils.getPref('proxyNetwork', true) === false) return;

  if (!proxyHttpHandler) proxyHttpHandler = defaultHttpHandler;

  function httpHandler$$1(method, url, callback, onerror, timeout, data) {
    if (url.startsWith(CliqzUtils.RESULTS_PROVIDER) && CliqzUtils.getPref('hpn-queryv2', false)) {
      const queryProxyUrl = getNextProxyAndRotate();

      const query = url.replace(CliqzUtils.RESULTS_PROVIDER, '');
      const uid = Math.floor(Math.random() * 10000000);
      CliqzSecureMessage.queriesID[uid] = callback;
      CliqzSecureMessage.wCrypto.postMessage({
        msg: { action: 'instant',
          type: 'cliqz',
          ts: '',
          ver: '1.5',
          payload: query,
          rp: CliqzUtils.RESULTS_PROVIDER
        },
        uid,
        type: 'instant',
        sourcemap: CliqzSecureMessage.sourceMap,
        upk: CliqzSecureMessage.uPK,
        dspk: CliqzSecureMessage.dsPK,
        sspk: CliqzSecureMessage.secureLogger,
        queryProxyUrl
      });
      return null;
    } else if (url.startsWith(CliqzUtils.RESULTS_PROVIDER_LOG)) {
      const queryProxyUrl = getNextProxyAndRotate();

      const query = url.replace(CliqzUtils.RESULTS_PROVIDER_LOG, '');
      const uid = Math.floor(Math.random() * 10000000);
      CliqzSecureMessage.queriesID[uid] = callback;
      CliqzSecureMessage.wCrypto.postMessage({
        msg: { action: 'extension-result-telemetry',
          type: 'cliqz',
          ts: '',
          ver: '1.5',
          payload: query
        },
        uid,
        type: 'instant',
        sourcemap: CliqzSecureMessage.sourceMap,
        upk: CliqzSecureMessage.uPK,
        dspk: CliqzSecureMessage.dsPK,
        sspk: CliqzSecureMessage.secureLogger,
        queryProxyUrl
      });
      return null;
    } else if (url === CliqzUtils.SAFE_BROWSING) {
      const batch = JSON.parse(data);
      if (batch.length > 0) {
        batch.forEach(eachMsg => CliqzSecureMessage.telemetry(eachMsg));
      }
      if (callback) {
        callback({ response: '{"success":true}' });
      }
    } else if (url.startsWith(OFFER_TELEMETRY_PREFIX)) {
      const queryProxyUrl = getNextProxyAndRotate();

      const query = url.replace(OFFER_TELEMETRY_PREFIX, '');
      const uid = Math.floor(Math.random() * 10000000);
      CliqzSecureMessage.queriesID[uid] = callback;

      const message = {
        msg: { action: 'offers-api',
          type: 'cliqz',
          ts: '',
          ver: '1.5',
          payload: query,
          rp: OFFER_TELEMETRY_PREFIX,
          body: data
        },
        uid,
        type: 'instant',
        sourcemap: CliqzSecureMessage.sourceMap,
        upk: CliqzSecureMessage.uPK,
        dspk: CliqzSecureMessage.dsPK,
        sspk: CliqzSecureMessage.secureLogger,
        queryProxyUrl
      };
      CliqzSecureMessage.wCrypto.postMessage(message);
      return null;
    } else {
      for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        rest[_key - 6] = arguments[_key];
      }

      return proxyHttpHandler(method, url, callback, onerror, timeout, data, ...rest);
    }
    return null;
  }

  overrideHttpHandler(httpHandler$$1);
  addCompressionExclusion(CliqzUtils.SAFE_BROWSING);
}

var ProxyFilterBase = class {
  constructor() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { position: 0 };

    let position = _ref.position;

    this.position = position;
    this.pps = Components.classes['@mozilla.org/network/protocol-proxy-service;1'].getService(Components.interfaces.nsIProtocolProxyService);
  }

  init() {
    this.pps.registerFilter(this, this.position);
  }

  /**
   * Disable all proxy rules provided by this instance
   * @method destroy
   */
  unload() {
    this.pps.unregisterFilter(this);
  }

  /**
   * See https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIProtocolProxyService
   */
  newProxy(args) {
    // Do not perform DNS lookups on the client, but on the proxy (server-side).
    // Otherwise, it is hard to whitelist our services.
    // (This option is equivalent to 'socks5h://' in curl).
    const flags = Components.interfaces.nsIProxyInfo.TRANSPARENT_PROXY_RESOLVES_HOST;

    return this.pps.newProxyInfo(args.type, args.host, args.port, flags, args.failoverTimeout, args.failoverProxy);
  }

  /**
   * Firefox proxy API entry point - called on new http(s) connection.
   * @method applyFilter
   * @param pps
   * @param url {string}
   * @param defaultProxy
   * @returns aProxy
   */
  applyFilter(pps, url, defaultProxy, cb) {
    const proxy = this.shouldProxy(url) ? this.proxy() : defaultProxy;
    // On Firefox 60+ we need to use the callback
    if (cb && cb.onProxyFilterResult) {
      cb.onProxyFilterResult(proxy);
    } else {
      return proxy;
    }
    return undefined;
  }
};

/*
Picked up from unblock proxy.es
*/

class ProxyFilter extends ProxyFilterBase {
  /**
  * Wrapper for rule-based url proxying: implementation for Firefox
  * @class Proxy
  * @namespace unblock
  * @constructor
  */
  constructor() {
    super();
    this.method = 'socks';
    this.port = 9004;
  }

  shouldProxy(url) {
    const window = CliqzUtils.getWindow();
    return url.scheme === 'https' && CliqzSecureMessage.servicesToProxy.indexOf(url.host) > -1 && (CliqzUtils.getPref('hpn-query', false) || CliqzUtils.isPrivateMode(window));
  }

  proxy() {
    if (!CliqzSecureMessage.proxyList) {
      return undefined;
    }
    const proxyIdx = getRandomIntInclusive(0, CliqzSecureMessage.proxyList.length - 1);
    const proxyHost = CliqzSecureMessage.proxyList[proxyIdx].dns;
    if (CliqzSecureMessage.debug) {
      CliqzUtils.log(`Proxying Query: ${proxyHost}`, CliqzSecureMessage.LOG_KEY);
    }

    if (CliqzSecureMessage.proxyInfoObj[proxyHost]) {
      return CliqzSecureMessage.proxyInfoObj[proxyHost];
    }
    const ob = this.newProxy({
      type: this.method,
      host: proxyHost,
      port: this.port,
      failoverTimeout: 1000,
      failoverProxy: null
    });
    CliqzSecureMessage.proxyInfoObj[proxyHost] = ob;
    return ob;
  }
}

/**
 * @param routingTable  array of proxy information (keys: dns, ip, ssl)
 * @returns the proxy list (unique proxies in the routing table)
 */
function createProxyList(routeTable) {
  const proxyList = [];
  const seenProxies = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = routeTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const proxy = _step.value;

      const key = [proxy.dns, proxy.ip];
      if (!seenProxies[key]) {
        seenProxies[key] = proxy;
        proxyList.push(proxy);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return proxyList;
}

function getProxyVerifyUrl(args) {
  const schema = args.supportsHttps ? 'https' : 'http';
  const host = args.host || args.ip;
  if (!host) {
    throw new Error('Missing host');
  }
  return `${schema}://${host}/v2/verify`;
}

/*
 This module is used for sending the events for purpose of
 human-web, anti-tracking via a secure channel.
*/

/* Global variables
*/
let proxyCounter = 0;

const CliqzSecureMessage = {
  CHANNEL: config.settings.HPN_CHANNEL,
  VERSION: '0.1',
  LOG_KEY: 'securemessage',
  debug: false,
  counter: 0,
  secureLogger: {},
  uPK: {},
  dsPK: {},
  routeTable: null,
  routeTableLoader: null,
  RSAKey: '',
  eventID: {},
  sourceMap: null,
  sourceMapLoader: null,
  tmult: 4,
  tpace: 250,
  SOURCE_MAP_PROVIDER: config.settings.ENDPOINT_SOURCE_MAP_PROVIDER,
  LOOKUP_TABLE_PROVIDER: config.settings.ENDPOINT_LOOKUP_TABLE_PROVIDER,
  KEYS_PROVIDER: config.settings.ENDPOINT_KEYS_PROVIDER,
  proxyList: null,
  proxyStats: {},
  PROXY_LIST_PROVIDER: config.settings.ENDPOINT_PROXY_LIST_PROVIDER,
  BLIND_SIGNER: config.settings.ENDPOINT_BLIND_SIGNER,
  USER_REG: config.settings.ENDPOINT_USER_REG,
  localTemporalUniq: null,
  wCrypto: null,
  queriesID: {},

  // Note: 'collector-hpn.cliqz.com' is the hpnv2 endpoint.
  // For first experiments, build on the existing hpnv1 infrastructure,
  // as hpnv2 does not yet implement a mechanism for stripping IP addresses.
  servicesToProxy: ['api.cliqz.com', 'antiphishing.cliqz.com', 'collector-hpn.cliqz.com'],

  proxyInfoObj: {},
  queryProxyFilter: null,
  pacemaker() {
    CliqzSecureMessage.counter += 1;

    if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 10 === 0) {
      if (CliqzSecureMessage.debug) {
        CliqzUtils.log(`Pacemaker: ${CliqzSecureMessage.counter / CliqzSecureMessage.tmult}`, CliqzSecureMessage.LOG_KEY);
      }
    }

    if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 5 === 0) {
      const currentTime = Date.now();

      if (!CliqzUtils.getWindow() || !CliqzUtils.getWindow().CLIQZ || !CliqzUtils.getWindow().CLIQZ.UI) {
        return;
      }
      const tDiff = currentTime - CliqzUtils.getWindow().CLIQZ.UI.lastInputTime;

      if (tDiff > 0 && tDiff > 1000 * 2 * 1) {
        CliqzSecureMessage.proxyIP();
      }

      if (!CliqzSecureMessage.uPK.publicKeyB64 || !CliqzSecureMessage.uPK.privateKey) {
        CliqzSecureMessage.registerUser();
      }
    }

    if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % (60 * 15 * 1) === 0) {
      if (CliqzSecureMessage.debug) {
        CliqzUtils.log('Clean local temp queue', CliqzSecureMessage.LOG_KEY);
      }
      prunelocalTemporalUniq();
    }
  },
  // ****************************
  // telemetry, PREFER NOT TO SHARE WITH CliqzUtils for safety, blatant rip-off though
  // ****************************
  trk: [],
  trkTimer: null,
  telemetry(msg, instantPush) {
    if (!CliqzSecureMessage || // might be called after the module gets unloaded
    CliqzUtils.getPref('humanWebOptOut', false)) return;

    if (msg) CliqzSecureMessage.trk.push(msg);
    CliqzUtils.clearTimeout(CliqzSecureMessage.trkTimer);
    if (instantPush || CliqzSecureMessage.trk.length % 20 === 0) {
      CliqzSecureMessage.pushTelemetry();
    } else {
      CliqzSecureMessage.trkTimer = CliqzUtils.setTimeout(CliqzSecureMessage.pushTelemetry, 10000);
    }
  },
  _telemetry_req: null,

  telemetry_MAX_SIZE: 500,
  previousDataPost: null,
  pushMessage: [],
  routeHashTable: null,
  queryProxyIP: null,
  performance: null,

  pushTelemetry() {
    // Take all available messages from the 'trk' queue and send them.
    //
    // It is crucial that messages are sent sequentially, otherwise, we
    // will have race conditions due to the use of global variables
    // in CliqzSecureMessage messages sequentially, too.
    const unprocessedMessages = CliqzSecureMessage.trk.splice(0);
    return CliqzSecureMessage.messageSender.send(unprocessedMessages);
  },
  initAtWindow() {},
  init() {
    // Doing it here, because this lib. uses navigator and window objects.
    // Better method appriciated.

    if (CliqzSecureMessage.pacemakerId == null) {
      CliqzSecureMessage.pacemakerId = CliqzUtils.setInterval(CliqzSecureMessage.pacemaker.bind(this), CliqzSecureMessage.tpace, null);
    }

    // TODO: do not pass this to storage
    this.storage = new Storage(this);

    if (!CliqzSecureMessage.localTemporalUniq) this.storage.loadLocalCheckTable();

    // Load source map. Update it once an hour.
    this.sourceMapLoader = new ResourceLoader(['hpn', 'sourcemap.json'], {
      remoteURL: CliqzSecureMessage.SOURCE_MAP_PROVIDER
    });

    this.sourceMapLoader.load().then(e => {
      CliqzSecureMessage.sourceMap = e;
    });

    this.sourceMapLoader.onUpdate(e => {
      CliqzSecureMessage.sourceMap = e;
    });

    // Load lookuptable, which also contains the list of proxy list.
    // Update every 5 minutes.
    this.routeTableLoader = new ResourceLoader(['hpn', 'routeTableV2.json'], {
      remoteURL: CliqzSecureMessage.LOOKUP_TABLE_PROVIDER,
      cron: 1 * 5 * 60 * 1000,
      updateInterval: 1 * 5 * 60 * 1000
    });

    this.routeTableLoader.load().then(fullRouteTable => {
      CliqzSecureMessage._updateRoutingInfo(fullRouteTable);
    }).catch(e => {
      if (CliqzSecureMessage.debug) {
        console$1.error('Failed to update initial routeTable', e);
      }
    });

    this.routeTableLoader.onUpdate(fullRouteTable => {
      CliqzSecureMessage._updateRoutingInfo(fullRouteTable);
    });

    CliqzSecureMessage.dsPK.pubKeyB64 = config.settings.KEY_DS_PUBKEY;
    CliqzSecureMessage.secureLogger.publicKeyB64 = config.settings.KEY_SECURE_LOGGER_PUBKEY;

    if (CliqzUtils.getPref('proxyNetwork', true)) {
      overRideCliqzResults();
    }
    // Check user-key present or not.
    CliqzSecureMessage.registerUser();

    // Register proxy fr query.

    CliqzSecureMessage.queryProxyFilter = new ProxyFilter();
    CliqzSecureMessage.queryProxyFilter.init();

    this.messageSender = new MessageSender();
  },
  unload() {
    CliqzSecureMessage.queryProxyFilter.unload();
    this.storage.saveLocalCheckTable();

    // TODO: Sending messages like this does not work
    // as the shutdown will be faster than sending the
    // messages. As a result, messages are not sent
    // the web worker is not closed.
    //
    // const messageSender_ = this.messageSender;
    // CliqzSecureMessage.pushTelemetry().then(() => {
    //   messageSender_.stop();
    // }).catch((e) => {
    //   messageSender_.stop({ quick: true });
    // });
    //
    // As a workaround, make no attempt to send messages
    // (as it will not succeed anyway) but at least
    // terminate the worker.
    this.messageSender.stop({ quick: true });

    this.sourceMapLoader.stop();
    this.routeTableLoader.stop();
    CliqzUtils.clearTimeout(CliqzSecureMessage.pacemakerId);
    this.storage.close();
  },
  proxyIP() {
    if (!CliqzSecureMessage.proxyList) return undefined;

    if (proxyCounter >= CliqzSecureMessage.proxyList.length) {
      proxyCounter = 0;
    }
    const proxy = CliqzSecureMessage.proxyList[proxyCounter];
    const proxyUrl = getProxyVerifyUrl({
      host: proxy.dns,
      ip: proxy.ip,
      supportsHttps: proxy.ssl
    });
    CliqzSecureMessage.queryProxyIP = proxyUrl;
    proxyCounter += 1;
    return proxyUrl;
  },
  registerUser() {
    this.storage.loadKeys().then(userKey => {
      if (!userKey) {
        const userCrypto = new CryptoWorker();

        userCrypto.onmessage = e => {
          if (e.data.status) {
            const uK = {};
            uK.privateKey = e.data.privateKey;
            uK.publicKey = e.data.publicKey;
            uK.ts = Date.now();
            this.storage.saveKeys(uK).then(response => {
              if (response.status) {
                CliqzSecureMessage.uPK.publicKeyB64 = response.data.publicKey;
                CliqzSecureMessage.uPK.privateKey = response.data.privateKey;
              }
            });
          }
          userCrypto.terminate();
        };

        userCrypto.postMessage({
          type: 'user-key'
        });
      } else {
        CliqzSecureMessage.uPK.publicKeyB64 = userKey.publicKey;
        CliqzSecureMessage.uPK.privateKey = userKey.privateKey;
      }
    });
  },

  _updateRoutingInfo(fullRouteTable) {
    CliqzSecureMessage.routeTable = fullRouteTable[CliqzSecureMessage.CHANNEL];
    CliqzSecureMessage.proxyList = createProxyList(CliqzSecureMessage.routeTable);
    CliqzUtils.log('Updated proxy list and routing table', CliqzSecureMessage.LOG_KEY);

    // make sure "CliqzSecureMessage.queryProxyIP" is initialized
    CliqzSecureMessage.proxyIP();
  }
};

/**
* @namespace hpn
* @class Background
*/
var Background = background({
  /**
  * @method init
  */
  init() {
    const FF48_OR_ABOVE = isPlatformAtLeastInVersion('48.0');

    if (FF48_OR_ABOVE) {
      // We need to use this function, 'load' events do not seem to be firing...
      this.enabled = true;
      this.CliqzSecureMessage = CliqzSecureMessage;
      CliqzSecureMessage.init();
      CliqzSecureMessage.wCrypto = new CryptoWorker('httpHandler');
      CliqzSecureMessage.wCrypto.onmessage = e => {
        if (e.data.type === 'instant') {
          const callback = CliqzSecureMessage.queriesID[e.data.uid];
          delete CliqzSecureMessage.queriesID[e.data.uid];
          if (callback) {
            callback({ response: e.data.res });
          }
        }
      };
    }
  },
  /**
  * @method unload
  */
  unload() {
    if (this.enabled) {
      CliqzSecureMessage.wCrypto.terminate();
      CliqzSecureMessage.unload();
    }
  },

  actions: {
    sha1(s) {
      const promise = new Promise(resolve => {
        const wCrypto = new CryptoWorker();

        wCrypto.onmessage = e => {
          const result = e.data.result;
          wCrypto.terminate();
          resolve(result);
        };

        wCrypto.postMessage({
          msg: s,
          type: 'hw-sha1'
        });
      });
      return promise;
    },
    sendTelemetry(msg) {
      return CliqzSecureMessage.telemetry(msg);
    },

    sendInstantMessage(rp, payload) {
      const queryProxyUrl = CliqzSecureMessage.proxyIP();
      if (!queryProxyUrl) {
        throw new Error('Cannot send message (list of proxies is empty)');
      }

      return new Promise((resolve, reject) => {
        const wCrypto = new CryptoWorker();

        wCrypto.onmessage = e => {
          try {
            const result = JSON.parse(e.data.res).result;
            wCrypto.terminate();
            resolve(result);
          } catch (ee) {
            wCrypto.terminate();
            reject();
          }
        };
        wCrypto.postMessage({
          msg: {
            action: 'instant',
            type: 'cliqz',
            ts: '',
            ver: '1.5',
            payload,
            rp
          },
          uid: '',
          type: 'instant',
          sourcemap: CliqzSecureMessage.sourceMap,
          upk: CliqzSecureMessage.uPK,
          dspk: CliqzSecureMessage.dsPK,
          sspk: CliqzSecureMessage.secureLogger,
          queryProxyUrl
        });
      });
    },

    sendPostMessage(rp, payload, action, data, callback) {
      const queryProxyUrl = CliqzSecureMessage.proxyIP();
      if (!queryProxyUrl) {
        throw new Error('Cannot send message (list of proxies is empty)');
      }

      const uid = Math.floor(Math.random() * 10000000);
      CliqzSecureMessage.queriesID[uid] = callback;
      CliqzSecureMessage.wCrypto.postMessage({
        msg: {
          action,
          type: 'cliqz',
          ts: '',
          ver: '1.5',
          payload,
          rp,
          body: data
        },
        uid: '',
        type: 'instant',
        sourcemap: CliqzSecureMessage.sourceMap,
        upk: CliqzSecureMessage.uPK,
        dspk: CliqzSecureMessage.dsPK,
        sspk: CliqzSecureMessage.secureLogger,
        queryProxyUrl
      });
    }
  }
});

var Window$1 = class {
  constructor(_ref) {
    let window = _ref.window,
        background = _ref.background;

    this.background = background;
    this.window = window;
  }

  init() {
    if (this.background.CliqzSecureMessage) {
      this.background.CliqzSecureMessage.initAtWindow(this.window);
      this.window.CliqzSecureMessage = this.background.CliqzSecureMessage;
      Object.assign(this.window.CliqzSecureMessage, this.background.actions);
    }
  }

  unload() {
    delete this.window.CliqzSecureMessage;
  }

  status() {
    if (this.background.CliqzSecureMessage) {
      return {
        visible: true,
        state: CliqzUtils.getPref('hpn-query')
      };
    }
    return undefined;
  }
};

var hpn = {
  Background,
  Window: Window$1
};

/* globals window */
// FIXME: stop using this file as soon as subproject chrome-test-hw-hpn is killed
window.CliqzSecureMessage = {
  init() {
    this.background = hpn.Background;
    this.loadingPromise = this.background.init();
    return this.loadingPromise;
  },

  telemetry(msg) {
    return this.loadingPromise.then(() => this.background.actions.sendTelemetry(msg));
  },
  sha1(msg) {
    return this.loadingPromise.then(() => this.background.actions.sha1(msg));
  },

  sendInstantMessage(rp, payload) {
    return this.loadingPromise.then(() => this.background.actions.sendInstantMessage(rp, payload));
  }
};

Object.defineProperty(exports, '__esModule', { value: true });

})));
