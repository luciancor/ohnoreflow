!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], ["10"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("b", ["c"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _helpers = $__require("c");

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class = function () {
    function _class() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$actions = _ref.actions,
          actions = _ref$actions === undefined ? {} : _ref$actions,
          _ref$respond = _ref.respond,
          respond = _ref$respond === undefined ? function () /* res, req */{} : _ref$respond,
          _ref$filter = _ref.filter,
          filter = _ref$filter === undefined ? function () {
        return true;
      } : _ref$filter,
          _ref$transform = _ref.transform,
          transform = _ref$transform === undefined ? function (r) {
        return r;
      } : _ref$transform,
          errorLogger = _ref.errorLogger,
          _ref$onTerminate = _ref.onTerminate,
          onTerminate = _ref$onTerminate === undefined ? function () {} : _ref$onTerminate;

      _classCallCheck(this, _class);

      this.actions = actions;
      this.onTerminate = onTerminate;
      this.dispatch = this.dispatch.bind(this);
      this.filter = filter;
      this.transform = transform;
      this.respond = respond;
      this.errorLogger = errorLogger;
    }

    _createClass(_class, [{
      key: 'dispatch',
      value: function dispatch(request) {
        var _actions,
            _this = this;

        if (!this.filter || !this.filter(request)) {
          return false;
        }

        var _transform = this.transform(request),
            _transform$args = _transform.args,
            args = _transform$args === undefined ? [] : _transform$args,
            action = _transform.action;

        if (!(0, _helpers.has)(this.actions, action)) {
          return false;
        }

        var res = (_actions = this.actions)[action].apply(_actions, _toConsumableArray(args));

        if (!(res instanceof Promise)) {
          res = Promise.resolve(res);
        }

        res.then(function (response) {
          return _this.respond(response, request);
        });

        return true;
      }
    }, {
      key: 'terminate',
      value: function terminate() {
        this.onTerminate();
      }
    }]);

    return _class;
  }();

  exports.default = _class;
});
$__System.registerDynamic('d', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('');
  };
});
$__System.registerDynamic("c", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // eslint-disable-next-line
  var has = exports.has = function has(o, p) {
    return Object.prototype.hasOwnProperty.call(o, p);
  };
});
$__System.registerDynamic("e", ["b", "d", "c"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _server = $__require("b");

  var _server2 = _interopRequireDefault(_server);

  var _uuid = $__require("d");

  var _uuid2 = _interopRequireDefault(_uuid);

  var _helpers = $__require("c");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // eslint-disable-next-line
  var getDefaultLogger = function getDefaultLogger() {
    return console.error.bind(console);
  };

  var Spanan = function () {
    function Spanan(sendFunction) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          errorLogger = _ref.errorLogger;

      _classCallCheck(this, Spanan);

      this.sendFunction = sendFunction;
      this.callbacks = new Map();
      this.errorLogger = errorLogger || getDefaultLogger();
      this.listeners = [this];
    }

    _createClass(Spanan, [{
      key: 'send',
      value: function send(action) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var resolver = void 0;
        var id = (0, _uuid2.default)();
        var promise = new Promise(function (resolve) {
          resolver = resolve;
        });
        this.callbacks.set(id, function () {
          return resolver.apply(undefined, arguments);
        });
        this.sendFunction({
          action: action,
          args: args,
          uuid: id
        });
        return promise;
      }
    }, {
      key: 'createProxy',
      value: function createProxy() {
        return new Proxy(this, {
          get: function get(target, key) {
            return target.send.bind(target, key);
          }
        });
      }
    }, {
      key: 'dispatch',
      value: function dispatch() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var callback = this.callbacks.get(message.uuid);
        if (!callback || callback && !(0, _helpers.has)(message, 'response')) {
          return false;
        }

        callback(message.response);
        this.callbacks.delete(message.uuid);
        return true;
      }
    }, {
      key: 'handleMessage',
      value: function handleMessage(message) {
        return this.listeners.some(function (listener) {
          try {
            return listener.dispatch(message);
          } catch (e) {
            listener.errorLogger('Spanan dispatch error', e);
            return false;
          }
        });
      }
    }, {
      key: 'export',
      value: function _export(actions) {
        var _this = this;

        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            filter = _ref2.filter,
            transform = _ref2.transform,
            respond = _ref2.respond,
            errorLogger = _ref2.errorLogger;

        var server = new _server2.default({
          actions: actions,
          respond: respond,
          filter: filter,
          transform: transform,
          errorLogger: errorLogger || getDefaultLogger(),
          onTerminate: function onTerminate() {
            _this.listeners = _this.listeners.filter(function (listener) {
              return listener !== server;
            });
          }
        });

        this.listeners.push(server);

        return server;
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.listeners = [];
      }
    }]);

    return Spanan;
  }();

  exports.default = Spanan;
});

'use strict';

$__System.register('f', ['10'], function (_export) {
    if (typeof Handlebars === 'undefined') {
        var Handlebars;
    }
    if (typeof templates === 'undefined') {
        var templates = {};
    }
    return {
        setters: [function (_handlebars) {
            Handlebars = _handlebars['default'];
        }],
        execute: function () {

            if (typeof templates === 'undefined') {
                var templates = {};
            }templates['about'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title h5\">What is Anolysis</div>\n    <div class=\"card-subtitle text-gray\">\n      A brief introduction into our privacy-preserving collection framework\n      for usage data.\n    </div>\n  </div>\n  <div class=\"card-body\">\n      Anolysis is a new approach for collecting usage data\n      without relying on user profiles. The approach is inspired\n      by the principle of group anonymity; making sure that <code>K</code> users \n      are indistinguishable from each other. Users send sanitized browser \n      attributes in the form of a group identity, and usage data through \n      multiple messages, in a way that this data cannot be pieced together and \n      used as an identifier.\n\n      <br /><br />\n      \n      We are able to achieve privacy by design, by representing browser \n      attributes hierarchically in a tree structure and algorithmically creating \n      anonymous groups that guarantee a minimum size of 100.\n\n      <br /><br />\n\n      So here's what you can take away from this:\n      <ul>\n        <li>\n          You get a group ID, shared by at least 100 other users having similar \n          browser attributes.\n        </li>\n        <li>\n          Cliqz is never able to link back to you the messages sent from your \n          browser (explicitly or implicitly).\n        </li>\n        <li>\n          Some messages do not even send your group ID.\n        </li>\n      </ul>\n\n  </div>\n  <div class=\"card-footer\">\n    Drop us a line if you have any questions: \n    <a href=\"mailto:privacy@cliqz.com\" target=\"_top\">privacy@cliqz.com</a>\n  </div>\n</div>";
                }, "useData": true });
            templates['analyses'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "    <li class=\"dem-factor-item\">\n\n      <details class=\"accordion\">\n        <summary class=\"accordion-header\">\n          <i class=\"icon icon-arrow-right mr-1 text-gray\"></i>\n          <span>" + alias2(alias1(depth0 != null ? depth0.name : depth0, depth0)) + "</span>\n        </summary>\n        <div class=\"accordion-body\">\n          <!-- Accordions content -->\n          <pre class=\"code\" data-lang=\"analysis schema\">" + alias2(alias1(depth0 != null ? depth0.schema : depth0, depth0)) + "</pre>\n        </div>\n      </details>\n    </li>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title h5\">Available Analyses</div>\n    <div class=\"card-subtitle text-gray\">\n      An <code>analysis</code> is the way we define client side aggregation \n      \"tasks\" or functions. Each analysis exists to learn something or verify a\n      hypothesis. Concretely, an analysis is a function that accesses\n      metrics collected in the browser during a specified period of time,\n      and creates an aggregation or summary which will be sent to the\n      backend. Each analysis will be triggered automatically by Anolysis\n      once a day, using the metrics collected from the previous day.\n      <div class=\"divider\"></div>\n      Here's a list of all current analyses:\n    </div>\n  </div>\n  <div class=\"card-body\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n  <div class=\"card-footer\">\n    Note: Each analysis is sent separately, and they cannot be linked\n    on the backend.\n  </div>\n</div>";
                }, "useData": true });
            templates['browser_attributes'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = container.escapeExpression;

                    return "        <li class=\"dem-factor-item\">\n            <span class=\"dem-factor-name\">" + alias1((helper = (helper = helpers.key || data && data.key) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "key", "hash": {}, "data": data }) : helper)) + "</span> \n            <code>" + alias1(container.lambda(depth0, depth0)) + "</code>\n        </li>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title h5\">Browser Attributes</div>\n    <div class=\"card-subtitle text-gray\">\n      We care about usage data exclusively to improve the product, and as \n      such, only browser attributes that indicate the product, cohort, platform\n      and distribution are important. Personal data is none of our business.\n    </div>\n  </div>\n  <div class=\"card-body\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n  <div class=\"card-footer\">\n      Sometimes it happens that the combination of the browser attributes,\n      is not shared by many users, which is why <code>Anolysis</code>\n      will safely generalize these attributes until they \n      are shared by at least 100 users. More on this in <a href=\"#group-id\">\n      Group Identity.</a>\n  </div>\n</div>";
                }, "useData": true });
            templates['group_id'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = container.escapeExpression;

                    return "                <li class=\"dem-factor-item\">\n                    <span class=\"dem-factor-name\">" + alias1((helper = (helper = helpers.key || data && data.key) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "key", "hash": {}, "data": data }) : helper)) + "</span> \n                    <code>" + alias1(container.lambda(depth0, depth0)) + "</code>\n                </li>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "                <li class=\"dem-factor-item\">                    \n                    <code class=\"safe\">" + container.escapeExpression(container.lambda(depth0, depth0)) + "</code>\n                </li>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title h5\">Group Identity (GID)</div>\n    <div class=\"card-subtitle text-gray\">\n      This is what the browser sends to accompany usage statistics. We make sure\n    the GID is shared with at least 100 other users.\n    </div>\n  </div>\n  <div class=\"card-body\">\n      <div class=\"columns\">\n          <div class=\"column col-7\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.demographics : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "          </div>\n        <div class=\"divider-vert\" data-content=\"TO\"></div>\n        <div class=\"column col-4\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.parsedGID : depth0, { "name": "each", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </div>\n      </div>\n  </div>\n  <div class=\"card-footer\">\n      " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.gidUpdate : depth0) != null ? stack1.message : stack1, depth0)) + "\n  </div>\n</div>";
                }, "useData": true });
            templates['main'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div class=\"columns\">\n    <div class=\"column col-3\">\n        <ul class=\"nav\">\n            <figure class=\"avatar avatar-lg centered\" data-initial=\"a\" \n            style=\"background-color: #5755d9;\"></figure>\n            <div class=\"divider text-center\" data-content=\"anolysis\"></div>\n            <li class=\"nav-item\">\n                <a href=\"#browser-attributes\">Browser Attributes</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#group-id\">Group ID</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#analyses\">Analyses</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#metrics\">Metrics</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#about\">What is Anolysis</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"column col-9\">\n        <div id=\"browser-attributes\"></div>\n        <div id=\"group-id\"></div>\n        <div id=\"analyses\"></div>\n        <div id=\"metrics\"></div>\n        <div id=\"about\"></div>\n    </div>\n</div>\n";
                }, "useData": true });
            templates['metrics'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "    <li class=\"dem-factor-item\">\n      <details class=\"accordion\">\n        <summary class=\"accordion-header\">\n          <i class=\"icon icon-arrow-right mr-1 text-gray\"></i>\n          <span>" + alias2(alias1(depth0 != null ? depth0.name : depth0, depth0)) + "</span>\n        </summary>\n        <div class=\"accordion-body\">\n          <!-- Accordions content -->\n          <pre class=\"code\" data-lang=\"metric schema\">" + alias2(alias1(depth0 != null ? depth0.schema : depth0, depth0)) + "</pre>\n        </div>\n      </details>\n    </li>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title h5\">Available Metrics</div>\n    <div class=\"card-subtitle text-gray\">\n      A <code>metric</code> is a signal used to measure types of behavior inside \n      the browser (e.g.: when users interact with some components, click on \n      buttons, change settings, select results in the dropdown, etc.). \n      Metrics are generally not meant to be sent to the backend, but will \n      instead be stored by Anolysis and made available for analyses to\n      create aggregations.\n      <div class=\"divider\"></div>\n      Here's a list of all current metrics:\n    </div>\n  </div>\n  <div class=\"card-body\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n  <div class=\"card-footer\">\n    Note: Metrics are stored inside the browser and are never sent to the backend.\n  </div>\n</div>";
                }, "useData": true });

            _export('default', templates);
        }
    };
});

$__System.register('a', ['e', 'f'], function (_export, _context) {
  "use strict";

  var Spanan, templates;
  return {
    setters: [function (_e2) {
      Spanan = _e2.default;
    }, function (_f) {
      templates = _f.default;
    }],
    execute: function () {

      /* eslint-disable */
      /*
       Copyright (c) 2013, Nick Fitzgerald
      
        All rights reserved.
      
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
            Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
            Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
      // https://developer.chrome.com/extensions/content_scripts#match-patterns-globs
      // source: https://github.com/fitzgen/glob-to-regexp

      /* eslint-enable */

      const CHROME_MSG_SOURCE = 'cliqz-content-script';

      function isCliqzContentScriptMsg(msg) {
        return msg.source && msg.source === CHROME_MSG_SOURCE;
      }

      /* global window */

      const isChromeReady = () => typeof chrome === 'object';

      var checkIfChromeReady = function () {
        let waitingInterval;

        return new Promise(resolve => {
          const check = () => isChromeReady() && resolve();

          if (check()) {
            return;
          }

          waitingInterval = window.setInterval(check, 100);
        }).then(() => {
          window.clearInterval(waitingInterval);
        });
      };

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      /* global document, Handlebars */
      function createSpananForModule(moduleName) {
        const spanan = new Spanan(_ref => {
          let uuid = _ref.uuid,
              action = _ref.action,
              args = _ref.args;

          const message = {
            source: CHROME_MSG_SOURCE,
            target: 'cliqz',
            module: moduleName,
            action,
            requestId: uuid,
            args
          };

          chrome.runtime.sendMessage(message, response => spanan.handleMessage({
            uuid,
            response: response.response
          }));
        });
        return spanan;
      }

      const anolysisBridge = createSpananForModule('anolysis');
      const anolysis = anolysisBridge.createProxy();

      function demographicsAndGID() {
        Promise.all([anolysis.getGID(), anolysis.getDemographics(), anolysis.getLastGIDUpdateDate()]).then(_ref2 => {
          var _ref3 = _slicedToArray(_ref2, 3);

          let GID = _ref3[0],
              demographics = _ref3[1],
              lastUpdate = _ref3[2];

          // if GID is ''
          let parsedGID = { status: 'not retrieved yet' };
          try {
            parsedGID = JSON.parse(GID);
          } catch (ex) {}
          // parsedGID has already been assigned to a valid Object


          // Update browser_attributes section
          document.getElementById('browser-attributes').innerHTML = templates.browser_attributes(demographics);

          // Update group-id section
          const gidUpdate = {};
          if (lastUpdate !== undefined) {
            gidUpdate.message = `The GID was anonymously received on date: ${lastUpdate}`;
          } else {
            gidUpdate.message = 'The GID will be anonymously retrieved within the next 24 hours';
          }
          document.getElementById('group-id').innerHTML = templates.group_id({ demographics, parsedGID, gidUpdate });
        });
      }

      function showSignalDefinitions() {
        anolysis.getSignalDefinitions().then(definitions => {
          const analyses = [];
          const metrics = [];
          definitions.forEach(v => {
            const entity = {};
            entity.name = v.name;
            entity.schema = JSON.stringify(v.schema, null, 2);

            if (v.generate !== undefined || v.sendToBackend === true) {
              analyses.push(entity);
            } else {
              metrics.push(entity);
            }
          });
          document.getElementById('analyses').innerHTML = templates.analyses(analyses);
          document.getElementById('metrics').innerHTML = templates.metrics(metrics);
        });
      }

      function showAbout() {
        document.getElementById('about').innerHTML = templates.about();
      }

      // Register and plug in the templates
      Handlebars.partials = templates;
      document.getElementById('main').innerHTML = templates.main();

      checkIfChromeReady().then(() => {
        chrome.runtime.onMessage.addListener(message => {
          if (!isCliqzContentScriptMsg(message)) {
            return;
          }
          anolysisBridge.handleMessage({
            uuid: message.requestId,
            response: message.response
          });
        });

        demographicsAndGID();
        showSignalDefinitions();
        showAbout();
      });
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["handlebars"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("handlebars"));
  else
    CliqzGlobal = factory(Handlebars);
});