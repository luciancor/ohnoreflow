const { classes: Cc, interfaces: Ci, utils: Cu } = Components;
const global = this;

if (typeof ChromeUtils === 'undefined') {
  this.ChromeUtils = Components.utils;
}
const RESOURCE_HOST = 'cliqz';

ChromeUtils.import('resource://gre/modules/Services.jsm');
ChromeUtils.import('resource://gre/modules/XPCOMUtils.jsm');
Components.utils.importGlobalProperties([
  'TextEncoder',
  'TextDecoder',
  'btoa',
  'atob',
  'XMLHttpRequest',
  'indexedDB',
  'crypto',
]);
XPCOMUtils.defineLazyServiceGetter(
  this,
  'resProto',
  '@mozilla.org/network/protocol;1?name=resource',
  'nsISubstitutingProtocolHandler',
);


this.cliqz = class extends ExtensionAPI {
  getAPI(context) {
    return {
      cliqz: {
        start: function(baseURL) {
          debugger;
          if (resProto.setSubstitutionWithFlags) {
            resProto.setSubstitutionWithFlags(
              RESOURCE_HOST,
              Services.io.newURI(baseURL + 'api/cliqz/chrome/content/'),
              resProto.ALLOW_CONTENT_ACCESS,
            );
          }

          ChromeUtils.import(baseURL + 'api/cliqz/modules/CLIQZ.jsm');
          Services.scriptloader.loadSubScriptWithOptions(baseURL + 'api/cliqz/chrome/content/runloop.js', { target: global, ignoreCache: true });
          Services.scriptloader.loadSubScriptWithOptions(baseURL + 'api/cliqz/chrome/content/core/app.bundle.js', { target: { global: global }, ignoreCache: true });

          global.app = new global.App({
            version: 4,
            meta: "",
          });


            global.app.start();
            CLIQZ.app = global.app;
            CLIQZ.config = global.config;
            CLIQZ.CliqzUtils = global.CliqzUtils;
        },
        stop: function() {
          resProto.setSubstitution(RESOURCE_HOST, null);

          if (global.app) {
            global.app.stop(
              aReason === APP_SHUTDOWN,
              aReason === ADDON_DISABLE || aReason === ADDON_UNINSTALL,
              TELEMETRY_SIGNAL[aReason] || aReason,
              {
                meta: aData,
              },
            );
          }

          Components.utils.unload(baseURL + 'api/cliqz/modules/CLIQZ.jsm');
          global.stopTimers();
        },
      },
    };
  }
}

