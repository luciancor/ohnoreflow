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
            }templates['adult-question'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"result adult-question\">\n    <p class=\"padded\">\n        " + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "adultInfo", { "name": "local", "hash": {}, "data": data })) + "\n    </p>\n" + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['calculator'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"instant calculator\" >\n    <div class=\"header padded\">\n      <p class=\"title\">\n        <a\n          id=\"calc-answer\"\n          class=\"result\"\n          data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n        >\n          = " + alias4((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "result", "hash": {}, "data": data }) : helper)) + "\n          <span class=\"tooltip\">\n            " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "Click_anywhere_to_copy", { "name": "local", "hash": {}, "data": data })) + "\n          </span>\n        </a>\n    </p>\n\n    </div>\n</div>\n";
                }, "useData": true });
            templates['category'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "<div class=\"category\">\n    " + container.escapeExpression((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "title", "hash": {}, "data": data }) : helper)) + "\n</div>\n";
                }, "useData": true });
            templates['cinema'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"result\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</a>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression;

                    return "    <div class=\"padded\">\n        <div class=\"showtime-title\">\n            <span class=\"showtime-cinema-header\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "cinema_movie_showtimes", { "name": "local", "hash": {}, "data": data })) + " &#183; " + alias3((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.headerTitle : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</span>\n            <span class=\"showtime-city\">&#183; <span class=\"location-icon\"></span> " + alias3((helper = (helper = helpers.cityName || (depth0 != null ? depth0.cityName : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "cityName", "hash": {}, "data": data }) : helper)) + "</span>\n        </div>\n    </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.isMovieEZ : depth0, { "name": "unless", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n<div class=\"movie-cinema\">\n" + ((stack1 = container.invokePartial(partials["partials/local"], depth0, { "name": "partials/local", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isShowtimesAvailable : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/share-location"], depth0, { "name": "partials/share-location", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/movie-cinema/show-time"], depth0, { "name": "partials/movie-cinema/show-time", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['currency'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                    &#183; " + ((stack1 = container.invokePartial(partials["partials/source"], depth0, { "name": "partials/source", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                    &#183; " + ((stack1 = container.invokePartial(partials["partials/timestamp"], depth0, { "name": "partials/timestamp", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"instant currency white-background\" >\n    <div class=\"header padded\">\n        <p class=\"title\">\n            <a\n                class=\"result\"\n                data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n            >\n                = " + alias4((helper = (helper = helpers.toAmount || (depth0 != null ? depth0.toAmount : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "toAmount", "hash": {}, "data": data }) : helper)) + " " + alias4((helper = (helper = helpers.toCurrencyName || (depth0 != null ? depth0.toCurrencyName : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "toCurrencyName", "hash": {}, "data": data }) : helper)) + "\n                <span class=\"tooltip\">\n                    " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "Click_anywhere_to_copy", { "name": "local", "hash": {}, "data": data })) + "\n                </span>\n            </a>\n        </p>\n        <p class=\"subtitle\">\n            <span>\n                " + alias4((helper = (helper = helpers.multiplyer || (depth0 != null ? depth0.multiplyer : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "multiplyer", "hash": {}, "data": data }) : helper)) + " " + alias4((helper = (helper = helpers.fromCurrency || (depth0 != null ? depth0.fromCurrency : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "fromCurrency", "hash": {}, "data": data }) : helper)) + " = " + alias4((helper = (helper = helpers.conversionRate || (depth0 != null ? depth0.conversionRate : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "conversionRate", "hash": {}, "data": data }) : helper)) + " " + alias4((helper = (helper = helpers.toCurrency || (depth0 != null ? depth0.toCurrency : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "toCurrency", "hash": {}, "data": data }) : helper)) + " " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "no_legal_disclaimer", { "name": "local", "hash": {}, "data": data })) + "\n" + ((stack1 = helpers["with"].call(alias1, depth0 != null ? depth0.sourceWrapper : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.updated : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </span>\n        </p>\n    </div>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['dialing-code'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"dialing-code padded\">\n    <p>\n        <img class=\"dial-phone-icon\" src=\"" + alias4((helper = (helper = helpers.phoneIcon || (depth0 != null ? depth0.phoneIcon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "phoneIcon", "hash": {}, "data": data }) : helper)) + "\" alt=\"\"/>\n        <span class=\"dial-code\">+" + alias4((helper = (helper = helpers.dialingCode || (depth0 != null ? depth0.dialingCode : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "dialingCode", "hash": {}, "data": data }) : helper)) + "</span>\n        <img class=\"country-flag\" src=\"" + alias4((helper = (helper = helpers.countryFlag || (depth0 != null ? depth0.countryFlag : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "countryFlag", "hash": {}, "data": data }) : helper)) + "\" alt=\"\"/>\n        <span class=\"dial-country-name\">" + alias4((helper = (helper = helpers.countryName || (depth0 != null ? depth0.countryName : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "countryName", "hash": {}, "data": data }) : helper)) + "</span>\n    </p>\n    <p class=\"dial-code-label\">" + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "dialing_code_label", { "name": "local", "hash": {}, "data": data })) + " 00" + alias4((helper = (helper = helpers.dialingCode || (depth0 != null ? depth0.dialingCode : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "dialingCode", "hash": {}, "data": data }) : helper)) + "</p>\n</div>\n";
                }, "useData": true });
            templates['emphasis'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = (helpers.even || depth0 && depth0.even || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, data && data.index, { "name": "even", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.program(4, data, 0), "data": data })) != null ? stack1 : "";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "<em>" + container.escapeExpression(container.lambda(depth0, depth0)) + "</em>";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return container.escapeExpression(container.lambda(depth0, depth0));
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['flight'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "          <span class=\"flight-status-detail\"> &#183; " + container.escapeExpression((helper = (helper = helpers.statusDetail || (depth0 != null ? depth0.statusDetail : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "statusDetail", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return " strike-through ";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "              <span\n                class=\"estimate-depart-time bold " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.actualTime : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n              >\n                " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.scheduledTime : stack1, depth0)) + "\n              </span>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    return " early\n                  ";
                }, "9": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.lateDeparture : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "10": function (container, depth0, helpers, partials, data) {
                    return " late\n                  ";
                }, "12": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                <span\n                  class=\"estimate-arrival-time bold " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.actualTime : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n                >\n                  " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.scheduledTime : stack1, depth0)) + "\n                </span>\n";
                }, "14": function (container, depth0, helpers, partials, data) {
                    return " early\n                    ";
                }, "16": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.lateArrival : depth0, { "name": "if", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "17": function (container, depth0, helpers, partials, data) {
                    return " late\n                    ";
                }, "19": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                  &#183; " + ((stack1 = container.invokePartial(partials["partials/timestamp"], depth0, { "name": "partials/timestamp", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<div class='result instant flight'>\n  <div class=\"padded\">\n    <div class=\"header\">\n      <span class=\"title\">" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</span>\n    </div>\n    <div class=\"flight-details white-background\" data-status=\"" + alias4((helper = (helper = helpers.flightStatus || (depth0 != null ? depth0.flightStatus : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "flightStatus", "hash": {}, "data": data }) : helper)) + "\">\n\n      <div class=\"flight-status\">\n        <span class=\"flight-status-text\">" + alias4((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "status", "hash": {}, "data": data }) : helper)) + "</span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.statusDetail : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "      </div>\n\n      <div class=\"flight-flex-container\">\n        <span class=\"depart-city\">\n          " + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.locationShortcut : stack1, depth0)) + "\n        </span>\n        <div class=\"flight-progress-container\">\n\n          <div class=\"flight-progress\">\n              <div class=\"flight-progress-bar\" style=\"left:" + alias4((helper = (helper = helpers.planePosition || (depth0 != null ? depth0.planePosition : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "planePosition", "hash": {}, "data": data }) : helper)) + "%\"></div>\n          </div>\n        </div>\n        <span class=\"arrival-city " + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.actualLocation : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n          " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.locationShortcut : stack1, depth0)) + "\n        </span>\n        &#160;\n        <span class=\"actual-arrival-city\">\n          " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.actualLocation : stack1, depth0)) + "\n        </span>\n      </div>\n\n      <div class=\"depart-arrival\">\n        <div class=\"depart\">\n          <div class=\"depart-location\">\n             " + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.locationName : stack1, depth0)) + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showDepartureScheduledTime : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n            <span class=\"depart-time\n                  " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.earlyDeparture : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.program(9, data, 0), "data": data })) != null ? stack1 : "") + "\"\n            >\n              " + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.actualTime : stack1, depth0)) + "\n            </span>\n          </div>\n\n          <div>" + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.estimateActualDate : stack1, depth0)) + " </div>\n          <div class=\"bold\">\n            " + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.terminal : stack1, depth0)) + " &#183; " + alias4(alias5((stack1 = depth0 != null ? depth0.departure : depth0) != null ? stack1.gate : stack1, depth0)) + "\n          </div>\n        </div>\n\n        <div class=\"arrival\">\n          <div class=\"arrival-location\">\n            " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.locationName : stack1, depth0)) + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showArrivalScheduledTime : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "              <span class=\"arrival-time\n                    " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.earlyArrival : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.program(16, data, 0), "data": data })) != null ? stack1 : "") + "\"\n              >\n                " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.actualTime : stack1, depth0)) + "\n              </span>\n          </div>\n          <div>" + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.estimateActualDate : stack1, depth0)) + " </div>\n          <div class=\"bold\">\n            " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.terminal : stack1, depth0)) + " &#183; " + alias4(alias5((stack1 = depth0 != null ? depth0.arrival : depth0) != null ? stack1.gate : stack1, depth0)) + "\n          </div>\n        </div>\n      </div>\n      <p class=\"subtitle flight-timestamp\">\n          <span class=\"flight-timestamp-label\">\n" + ((stack1 = container.invokePartial(partials["partials/source"], depth0, { "name": "partials/source", "data": data, "indent": "              ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.updated : depth0, { "name": "if", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "          </span>\n      </p>\n    </div>\n  </div>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['generic'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"result " + alias4((helper = (helper = helpers.cssClasses || (depth0 != null ? depth0.cssClasses : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "cssClasses", "hash": {}, "data": data }) : helper)) + "\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</a>\n" + ((stack1 = container.invokePartial(partials["partials/share-location"], depth0, { "name": "partials/share-location", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/images"], depth0, { "name": "partials/images", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/lotto"], depth0, { "name": "partials/lotto", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/anchors"], depth0, { "name": "partials/anchors", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/news"], depth0, { "name": "partials/news", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/videos"], depth0, { "name": "partials/videos", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/social-buttons"], depth0, { "name": "partials/social-buttons", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/local"], depth0, { "name": "partials/local", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/offer/injected-offer"], depth0, { "name": "partials/offer/injected-offer", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "");
                }, "usePartial": true, "useData": true });
            templates['history'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = container.escapeExpression,
                        alias2 = depth0 != null ? depth0 : container.nullContext || {},
                        alias3 = helpers.helperMissing,
                        alias4 = "function";

                    return "    <span class=\"timeline\" style=\"background-color: #" + alias1(container.lambda((stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.backgroundColor : stack1, depth0)) + "\"></span>\n\n    <a class=\"result\" data-url=\"" + alias1((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias1((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/images"], depth0, { "name": "partials/images", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </a>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials.generic, depth0, { "name": "generic", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.url : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/lotto"], depth0, { "name": "partials/lotto", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/news"], depth0, { "name": "partials/news", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/offer/injected-offer"], depth0, { "name": "partials/offer/injected-offer", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.results : depth0, { "name": "each", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "");
                }, "usePartial": true, "useData": true });
            templates['lotto'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "      <div class=\"row\">\n        <div class=\"lotto-item-wrapper " + container.escapeExpression((helper = (helper = helpers.classNames || (depth0 != null ? depth0.classNames : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "classNames", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.result : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </div>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.description : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.table : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "      </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "            <div class=\"item\">\n              " + container.escapeExpression(container.lambda(depth0, depth0)) + "\n            </div>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "          <span class=\"description\">" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.description : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "          <div id=\"lotto-table\">\n            <div class=\"table-head\">\n" + ((stack1 = helpers.each.call(alias1, (stack1 = depth0 != null ? depth0.table : depth0) != null ? stack1.columns : stack1, { "name": "each", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </div>\n" + ((stack1 = helpers.each.call(alias1, (stack1 = depth0 != null ? depth0.table : depth0) != null ? stack1.data : stack1, { "name": "each", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "          </div>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    return "                <span>" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n";
                }, "9": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "              <div class=\"table-row\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "              </div>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                    <span>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.program(13, data, 0), "data": data })) != null ? stack1 : "") + "                    </span>\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    return "                            " + container.escapeExpression(container.lambda(depth0, depth0)) + "<br />\n";
                }, "13": function (container, depth0, helpers, partials, data) {
                    return "                            " + container.escapeExpression(container.lambda(depth0, depth0)) + "\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"result\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</a>\n\n<div class=\"padded\">\n  <div class=\"lotto white-background\">\n    <p class=\"lotto-date\">" + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "lotto_gewinnzahlen", { "name": "local", "hash": {}, "data": data })) + " &#8226; " + alias4((helper = (helper = helpers.localeDate || (depth0 != null ? depth0.localeDate : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "localeDate", "hash": {}, "data": data }) : helper)) + "</p>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.lottoResults : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <p class=\"no-guarantee\">" + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "no_guarantee", { "name": "local", "hash": {}, "data": data })) + "</p>\n  </div>\n</div>\n\n" + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "");
                }, "usePartial": true, "useData": true });
            templates['main'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div id=\"cliqz-dropdown\">\n</div>\n";
                }, "useData": true });
            templates['movie'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"result\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</a>\n\n<div class=\"movie-cinema\">\n" + ((stack1 = container.invokePartial(partials["partials/movie-cinema/movie"], depth0, { "name": "partials/movie-cinema/movie", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['navigate-to'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a\n    class=\"result\"\n    data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n    href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\"\n>\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    <div class=\"abstract\">\n        <p>\n            <span class=\"strong\">" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "</span>\n            <span class=\"divider\">&#8212;</span>\n            <span class=\"url\">" + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "visit", { "name": "local", "hash": {}, "data": data })) + "</span>\n        </p>\n    </div>\n</a>\n";
                }, "usePartial": true, "useData": true });
            templates['news-story'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"news-story thumbnail-blocks\">\n    <a class=\"result " + alias4((helper = (helper = helpers.cssClasses || (depth0 != null ? depth0.cssClasses : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "cssClasses", "hash": {}, "data": data }) : helper)) + "\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "        <div class=\"abstract\">\n" + ((stack1 = (helpers.exists || depth0 && depth0.exists || alias2).call(alias1, depth0 != null ? depth0.thumbnail : depth0, { "name": "exists", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n            <div class=\"content white-background\">\n                <p>\n                    <span data-extra=\"title\" class=\"title\">\n                        " + alias4((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.title : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n                    </span>\n                </p>\n\n                <p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.description : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </p>\n                <p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.publishedAt : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.friendlyUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </p>\n            </div>\n        </div>\n    </a>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.thumbnail : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(6, data, 0), "data": data })) != null ? stack1 : "";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "                    <div class=\"thumbnail\">\n                        <img src=\"" + container.escapeExpression((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "thumbnail", "hash": {}, "data": data }) : helper)) + "\" data-extra=\"image\" />\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.duration : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                    </div>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                            <span class=\"duration\">&#9658; " + container.escapeExpression((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "duration", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                    <div class=\"thumbnail\">\n                        <span class=\"mask\"></span>\n                        <span class=\"no-thumbnail\" " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.style : stack1, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ">\n                            " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.text : stack1, depth0)) + "\n                        </span>\n                    </div>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "style=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.style : stack1, depth0)) + "\"";
                }, "9": function (container, depth0, helpers, partials, data) {
                    return "                        <span class=\"description\" data-extra=\"description\">\n                            " + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.description : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n                        </span>\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    return "                        <span class=\"published-at subtitle attention\">\n                            " + container.escapeExpression((helpers.agoline || depth0 && depth0.agoline || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.publishedAt : depth0, { "name": "agoline", "hash": {}, "data": data })) + "\n                        </span>\n";
                }, "13": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                        <span class=\"url\">\n                            " + container.escapeExpression((helper = (helper = helpers.friendlyUrl || (depth0 != null ? depth0.friendlyUrl : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "friendlyUrl", "hash": {}, "data": data }) : helper)) + "\n                        </span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.newsStoryResult : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['offer'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"result offer\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/offer/abstract"], depth0, { "name": "partials/offer/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['partials/abstract'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.thumbnail : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.program(5, data, 0), "data": data })) != null ? stack1 : "";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "            <div class=\"thumbnail\">\n                <img src=\"" + container.escapeExpression((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "thumbnail", "hash": {}, "data": data }) : helper)) + "\" data-extra=\"image\" />\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isVideo : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                <span class=\"duration\">&#9658; " + container.escapeExpression((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "duration", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "            <div class=\"thumbnail\">\n                <span class=\"mask\"></span>\n                <span class=\"no-thumbnail\" " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.style : stack1, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ">\n                    " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.text : stack1, depth0)) + "\n                </span>\n            </div>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "style=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logoDetails : depth0) != null ? stack1.style : stack1, depth0)) + "\"";
                }, "8": function (container, depth0, helpers, partials, data) {
                    return "                <span class=\"divider\">&#8212;</span>\n                <span data-extra=\"url\" class=\"url\">" + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.friendlyUrl : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</span>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    return "              <span class=\"published-at subtitle attention\">\n                  " + container.escapeExpression((helpers.agoline || depth0 && depth0.agoline || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.publishedAt : depth0, { "name": "agoline", "hash": {}, "data": data })) + "\n              </span>\n";
                }, "12": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.isHistory : depth0, { "name": "unless", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                <span class=\"description\" data-extra=\"description\">" + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(alias1, depth0 != null ? depth0.description : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</span>\n";
                }, "13": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.isAd : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "14": function (container, depth0, helpers, partials, data) {
                    return "                        <span class=\"ad\">Anzeige</span>\n";
                }, "16": function (container, depth0, helpers, partials, data) {
                    return "                <span class=\"description\" data-extra=\"full-url\">" + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.url : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</span>\n";
                }, "18": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression;

                    return "                <span class=\"video-views subtitle normal\">\n                    " + alias3((helper = (helper = helpers.videoViews || (depth0 != null ? depth0.videoViews : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "videoViews", "hash": {}, "data": data }) : helper)) + " " + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "views", { "name": "local", "hash": {}, "data": data })) + "\n                </span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing;

                    return "<div class=\"abstract\">\n" + ((stack1 = (helpers.exists || depth0 && depth0.exists || alias2).call(alias1, depth0 != null ? depth0.thumbnail : depth0, { "name": "exists", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n    <div class=\"content\">\n        <p>\n            <span data-extra=\"title\" class=\"title\">" + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.title : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.friendlyUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </p>\n\n        <p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.publishedAt : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.description : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.program(16, data, 0), "data": data })) != null ? stack1 : "") + "\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.videoViews : depth0, { "name": "if", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </p>\n    </div>\n</div>\n";
                }, "useData": true });
            templates['partials/anchors'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"anchors padded\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.anchorResults : depth0, 4, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <a\n                class=\"result\"\n                title=\"" + alias4((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data }) : helper)) + "\"\n                data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n                href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\"\n            >\n                " + alias4((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data }) : helper)) + "\n            </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.anchorResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/buttons'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class='buttons padded'>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.internalResultsLogo : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.internalResults : depth0, depth0 != null ? depth0.internalResultsLimit : depth0, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(4, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "            <span class=\"dot\" style=\"background-color: #" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.backgroundColor : stack1, depth0)) + "\"></span>\n";
                }, "4": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <a\n                id=\"" + alias4((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "elementId", "hash": {}, "data": data }) : helper)) + "\"\n                class=\"result btn " + alias4((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "className", "hash": {}, "data": data }) : helper)) + "\"\n                data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.displayUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            >\n                " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, (helpers.concatLocale || depth0 && depth0.concatLocale || alias2).call(alias1, depths[1] != null ? depths[1].localePrefix : depths[1], depth0 != null ? depth0.title : depth0, { "name": "concatLocale", "hash": {}, "data": data }), { "name": "local", "hash": {}, "data": data })) + "\n            </a>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                    href=\"" + container.escapeExpression((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\"\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.internalResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true, "useDepths": true });
            templates['partials/images'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class='images padded'>\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.imageResults : depth0, 4, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <a\n                class=\"result\"\n                data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n                href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\"\n                data-extra=\"image\"\n            >\n                <img src=\"" + alias4((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "thumbnail", "hash": {}, "data": data }) : helper)) + "\" />\n            </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.imageResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/local'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"padded\">\n        <div class=\"local-result-wrapper white-background clearfix\">\n            <a\n                data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.mapResult : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.mapResult : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                class=\"result local-map\"\n                data-extra=\"map\"\n                >\n            </a>\n            <div class=\"local-info\">\n" + ((stack1 = helpers["if"].call(alias3, depth0 != null ? depth0.address : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias3, depth0 != null ? depth0.phoneNumber : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                <div class=\"other-info\">\n" + ((stack1 = helpers["if"].call(alias3, depth0 != null ? depth0.openingStatus : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias3, depth0 != null ? depth0.ratingImg : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </div>\n            </div>\n        </div>\n    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                    <div class=\"local-address\">\n                        <a\n                            class=\"result address\"\n                            data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.address : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        >\n                            " + alias2(alias1((stack1 = depth0 != null ? depth0.address : depth0) != null ? stack1.displayText : stack1, depth0)) + "\n                        </a>\n" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.distance : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                    </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "                            &#183;\n                            <span class=\"distance\">\n                                " + container.escapeExpression((helpers.distance || depth0 && depth0.distance || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.distance : depth0, { "name": "distance", "hash": {}, "data": data })) + "\n                            </span>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                    <div class=\"local-phone\">\n                        <a\n                            class=\"result\"\n                            data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.phoneNumber : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        >\n                            " + alias2(alias1((stack1 = depth0 != null ? depth0.phoneNumber : depth0) != null ? stack1.displayText : stack1, depth0)) + "\n                        </a>\n                    </div>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                        &#183;\n                        <span>\n                            " + alias2(alias1((stack1 = depth0 != null ? depth0.openingStatus : depth0) != null ? stack1.timeInfo : stack1, depth0)) + "\n                        </span>\n                        <span style=\"color: " + alias2(alias1((stack1 = depth0 != null ? depth0.openingStatus : depth0) != null ? stack1.color : stack1, depth0)) + "\">\n                            " + alias2((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.openingStatus : depth0) != null ? stack1.sttText : stack1, { "name": "local", "hash": {}, "data": data })) + "\n                        </span>\n";
                }, "9": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                        <img class=\"rating-img\" width=\"90\" src=\"" + container.escapeExpression((helper = (helper = helpers.ratingImg || (depth0 != null ? depth0.ratingImg : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "ratingImg", "hash": {}, "data": data }) : helper)) + "\" alt=\"\" />\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.localResult : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/logo'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "            style=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.style : stack1, depth0)) + "\"\n            class=\"logo\"\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.isHistory : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.program(6, data, 0), "data": data })) != null ? stack1 : "") + "        ";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "                class=\"logo logo-blank\"\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    return "                class=\"logo\"\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "style=\"background-color: #" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.backgroundColor : stack1, depth0)) + "\"";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "        <span class=\"icon " + alias4((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data }) : helper)) + "\" data-extra=\"icon-" + alias4((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data }) : helper)) + "\"></span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"icons\">\n\n    <span data-extra=\"logo\"\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.style : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data })) != null ? stack1 : "") + ">\n        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.logo : depth0) != null ? stack1.text : stack1, depth0)) + "\n    </span>\n    <span class=\"micro-logo\" data-extra=\"logo\"\n        " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.logo : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ">\n    </span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.icon : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "useData": true });
            templates['partials/lotto'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression;

                    return "    <div class=\"padded\">\n      <div class=\"lotto white-background\">\n        <p class=\"lotto-date\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "lotto_gewinnzahlen", { "name": "local", "hash": {}, "data": data })) + " &#8226; " + alias3((helper = (helper = helpers.localeDate || (depth0 != null ? depth0.localeDate : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "localeDate", "hash": {}, "data": data }) : helper)) + "</p>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.lottoResults : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        <p class=\"no-guarantee\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "no_guarantee", { "name": "local", "hash": {}, "data": data })) + "</p>\n      </div>\n    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "          <div class=\"row\">\n            <div class=\"lotto-item-wrapper " + container.escapeExpression((helper = (helper = helpers.classNames || (depth0 != null ? depth0.classNames : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "classNames", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.result : depth0, { "name": "each", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </div>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.description : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.table : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "          </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "                <div class=\"item\">\n                  " + container.escapeExpression(container.lambda(depth0, depth0)) + "\n                </div>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "              <span class=\"description\">" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.description : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "              <div id=\"lotto-table\">\n                <div class=\"table-head\">\n" + ((stack1 = helpers.each.call(alias1, (stack1 = depth0 != null ? depth0.table : depth0) != null ? stack1.columns : stack1, { "name": "each", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </div>\n" + ((stack1 = helpers.each.call(alias1, (stack1 = depth0 != null ? depth0.table : depth0) != null ? stack1.data : stack1, { "name": "each", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "              </div>\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    return "                    <span>" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                  <div class=\"table-row\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                  </div>\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "                        <span>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.program(14, data, 0), "data": data })) != null ? stack1 : "") + "                        </span>\n";
                }, "12": function (container, depth0, helpers, partials, data) {
                    return "                                " + container.escapeExpression(container.lambda(depth0, depth0)) + "<br />\n";
                }, "14": function (container, depth0, helpers, partials, data) {
                    return "                                " + container.escapeExpression(container.lambda(depth0, depth0)) + "\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.lottoResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/movie-cinema/movie'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            <div class=\"image\" style=\"background-image: url(" + container.escapeExpression((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "imageUrl", "hash": {}, "data": data }) : helper)) + ")\"></div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                    <span class=\"rating-img\" style=\"background-image: url(" + alias2(alias1((stack1 = depth0 != null ? depth0.ratingInfo : depth0) != null ? stack1.img : stack1, depth0)) + ")\"></span>\n                    <span class=\"score\">\n                        <span class=\"movie-rating-score\">" + alias2(alias1((stack1 = depth0 != null ? depth0.ratingInfo : depth0) != null ? stack1.score : stack1, depth0)) + "</span>\n                        <span class=\"movie-rating-scale\">/ " + alias2(alias1((stack1 = depth0 != null ? depth0.ratingInfo : depth0) != null ? stack1.scale : stack1, depth0)) + "</span>\n                    </span>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                    <a\n                        class=\"result reviews\"\n                        data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.reviewsInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.reviewsInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                    >\n                        " + alias2(alias1((stack1 = depth0 != null ? depth0.reviewsInfo : depth0) != null ? stack1.nVote : stack1, depth0)) + " " + alias2((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.reviewsInfo : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n                    </a>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                    <span class=\"movie-director-label\">" + alias2(alias1((stack1 = depth0 != null ? depth0.directorInfo : depth0) != null ? stack1.title : stack1, depth0)) + ":</span>\n                    <a\n                        class=\"result\"\n                        data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.directorInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.directorInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                    >\n                        " + alias2(alias1((stack1 = depth0 != null ? depth0.directorInfo : depth0) != null ? stack1.name : stack1, depth0)) + "\n                    </a>\n";
                }, "9": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "                    <span class=\"movie-stars-label\">" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(alias1, "cinema_movie_cast", { "name": "local", "hash": {}, "data": data })) + ":</span>\n                    <span class=\"stars-list\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.starsInfo : depth0, { "name": "each", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                    </span>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                        <span>\n                            <a\n                                class=\"result\"\n                                data-url=\"" + alias2(alias1(depth0 != null ? depth0.url : depth0, depth0)) + "\"\n                                href=\"" + alias2(alias1(depth0 != null ? depth0.url : depth0, depth0)) + "\"\n                            >\n                                " + alias2(alias1(depth0 != null ? depth0.title : depth0, depth0)) + "\n                            </a>\n                            " + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : container.nullContext || {}, data && data.last, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.program(13, data, 0), "data": data })) != null ? stack1 : "") + "\n                        </span>\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    return ",";
                }, "13": function (container, depth0, helpers, partials, data) {
                    return " &#183;";
                }, "15": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "                <div class=\"trailer\">\n                    <a\n                        class=\"result\"\n                        data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.trailerInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.trailerInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                    >\n                        <div class=\"trailer-icon\"></div>\n                        <span class=\"movie-trailer-label\">" + alias2((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.trailerInfo : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "</span>\n                    </a>\n                </div>\n";
                }, "17": function (container, depth0, helpers, partials, data) {
                    return "                <div class=\"trailer disabled\">\n                    <span>\n                        <div class=\"trailer-icon\"></div>\n                        <span>" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "cinema_movie_trailer", { "name": "local", "hash": {}, "data": data })) + "</span>\n                    </span>\n                </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = container.lambda,
                        alias3 = container.escapeExpression;

                    return "<div class=\"padded\">\n    <div class=\"movie white-background\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.imageUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        <div class=\"info\">\n            <p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.ratingInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.reviewsInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </p>\n            <p class=\"director\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.directorInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </p>\n            <p class=\"stars\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.starsInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                <span class=\"movie-full-cast\">\n                    <a\n                        class=\"result\"\n                        data-url=\"" + alias3(alias2((stack1 = depth0 != null ? depth0.fullCastInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                        href=\"" + alias3(alias2((stack1 = depth0 != null ? depth0.fullCastInfo : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n                    >\n                        " + alias3((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(alias1, (stack1 = depth0 != null ? depth0.fullCastInfo : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n                    </a>\n                </span>\n            </p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.trailerInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.program(17, data, 0), "data": data })) != null ? stack1 : "") + "        </div>\n    </div>\n</div>\n";
                }, "useData": true });
            templates['partials/movie-cinema/show-time'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"show-time padded\">\n    <div class=\"wrapper dropdown-tabs white-background\">\n        <div class=\"background-placeholder\"></div>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.showTimesInfo : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.showTimesInfo : depth0, { "name": "each", "hash": {}, "fn": container.program(5, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n    <div>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.show : stack1, { "name": "if", "hash": {}, "fn": container.program(8, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <label\n                id=\"tab-" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n                class=\"dropdown-tab " + ((stack1 = helpers["if"].call(alias1, data && data.first, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n            >" + alias4((helper = (helper = helpers.showDate || (depth0 != null ? depth0.showDate : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "showDate", "hash": {}, "data": data }) : helper)) + "</label>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "5": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing;

                    return "            <div id=\"tab-block-" + container.escapeExpression((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n                 class=\"tab-block\"\n            >\n                <div class=\"table\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || alias2).call(alias1, depth0 != null ? depth0.rows : depth0, depths[1] != null ? depths[1].showTimesLimit : depths[1], { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(6, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </div>\n            </div>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["partials/movie-cinema/showtime-row"], depth0, { "name": "partials/movie-cinema/showtime-row", "data": data, "indent": "                        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.escapeExpression;

                    return "            <a\n                class=\"result expand-btn\"\n                data-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n            >\n                " + alias1((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n            </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.isShowtimesAvailable : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true, "useDepths": true });
            templates['partials/movie-cinema/showtime-row'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "        <span class=\"showtime-cinema-name\" title=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.name : stack1, depth0)) + "\">" + alias2(alias1((stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.name : stack1, depth0)) + "</span>\n        <span>\n" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.distance : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            <span class=\"showtime-cinema-address\" title=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.address : stack1, depth0)) + "\">" + alias2(alias1((stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.address : stack1, depth0)) + "</span>\n        </span>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "            <span class=\"distance\">" + container.escapeExpression((helpers.distance || depth0 && depth0.distance || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.cinemaInfo : depth0) != null ? stack1.distance : stack1, { "name": "distance", "hash": {}, "data": data })) + "</span> &#183;\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "        <span class=\"movie-title\" title=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.movieInfo : depth0) != null ? stack1.title : stack1, depth0)) + "\">" + alias2(alias1((stack1 = depth0 != null ? depth0.movieInfo : depth0) != null ? stack1.title : stack1, depth0)) + "</span>\n";
                }, "6": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = container.escapeExpression,
                        alias2 = depth0 != null ? depth0 : container.nullContext || {};

                    return "        <span class=\"show-time-span\">\n            <a\n                class=\"result\"\n                data-extra=\"showtime_row_" + alias1(container.lambda(container.data(data, 1) && container.data(data, 1).index, depth0)) + "\"\n" + ((stack1 = helpers["if"].call(alias2, depth0 != null ? depth0.url : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0, blockParams, depths), "inverse": container.program(9, data, 0, blockParams, depths), "data": data })) != null ? stack1 : "") + "            >\n                " + alias1((helper = (helper = helpers.displayTime || (depth0 != null ? depth0.displayTime : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias2, { "name": "displayTime", "hash": {}, "data": data }) : helper)) + "\n" + ((stack1 = helpers["if"].call(alias2, depth0 != null ? depth0.movieLanguage : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias2, depth0 != null ? depth0.is3D : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </a>\n        </span>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "                    data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n                    href=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n";
                }, "9": function (container, depth0, helpers, partials, data) {
                    return "                    data-url=\"#\"\n                    disabled=\"true\"\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                    <span class=\"movie-language\">" + container.escapeExpression((helper = (helper = helpers.movieLanguage || (depth0 != null ? depth0.movieLanguage : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "movieLanguage", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "13": function (container, depth0, helpers, partials, data) {
                    return "                    <span class=\"movie-3d\">&#183; 3D</span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"show-time-row\">\n    <div class=\"cinema-info table-cell\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.cinemaInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.movieInfo : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n    <div class=\"show-time-info table-cell\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.showTimes : depth0, { "name": "each", "hash": {}, "fn": container.program(6, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n</div>\n";
                }, "useData": true, "useDepths": true });
            templates['partials/news'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"news thumbnail-blocks\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.newsResults : depth0, depth0 != null ? depth0.newsResultsLimit : depth0, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials.generic, depth0, { "name": "generic", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.newsResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/offer/abstract'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"thumbnail\">\n        <img src=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.thumbnail : stack1, depth0)) + "\" data-extra=\"image\" />\n    </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                    <span class=\"divider\">&#8212;</span>\n                    <span data-extra=\"url\" class=\"url\">" + container.escapeExpression((helper = (helper = helpers.friendlyUrl || (depth0 != null ? depth0.friendlyUrl : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "friendlyUrl", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "            <p>\n                <span class=\"ad\">Anzeige</span>\n                <span class=\"description\" data-extra=\"description\">\n                    " + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.description : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n                </span>\n            </p>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"abstract\">\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.thumbnail : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <div class=\"content\">\n        <a\n            class=\"result\"\n            data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n            href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\"\n        >\n            <p>\n                <span data-extra=\"title\" class=\"title\">\n                    " + alias4((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.title : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n                </span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.friendlyUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </p>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.description : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </a>\n        <p>\n" + ((stack1 = container.invokePartial(partials["partials/offer/promo-code"], depth0, { "name": "partials/offer/promo-code", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "        </p>\n    </div>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['partials/offer/injected-offer'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = container.lambda,
                        alias3 = container.escapeExpression;

                    return "<div class=\"injected-offer clearfix padded\">\n    <div class=\"wrapper white-background\">\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.showThumbnail : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        <div class=\"offer-content\">\n            <a\n                class=\"result non-selectable offer-title\"\n                data-url=\"" + alias3(alias2((stack1 = (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.offerSource : stack1) != null ? stack1.url : stack1, depth0)) + "\"\n                href=\"" + alias3(alias2((stack1 = (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.offerSource : stack1) != null ? stack1.url : stack1, depth0)) + "\"\n                data-extra=\"use\"\n            >\n                " + alias3(alias2((stack1 = (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.offerSource : stack1) != null ? stack1.title : stack1, depth0)) + "\n            </a>\n            <p>\n                <span class=\"ad-label\">Anzeige</span>\n                <span class=\"offer-description\" data-extra=\"description\">\n                    " + alias3((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.offerSource : stack1) != null ? stack1.description : stack1, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n                </span>\n            </p>\n        </div>\n    </div>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "        <div class=\"thumbnail\">\n            <img src=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.offerResult : depth0) != null ? stack1.thumbnail : stack1, depth0)) + "\" data-extra=\"image\" />\n        </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.offerResult : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/offer/promo-code'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "    <a\n        class=\"result promo-code\"\n        data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.promoCode : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n        href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.promoCode : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n    >\n        PROMOTION CODE: " + alias2(alias1((stack1 = depth0 != null ? depth0.promoCode : depth0) != null ? stack1.title : stack1, depth0)) + "\n        <span class=\"tooltip-copied\">\n            Kopiert\n        </span>\n        <span class=\"tooltip\">\n            Klicken zum Kopieren\n        </span>\n    </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.offerResult : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/share-location'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "	<div class=\"location\">\n" + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "indent": "\t\t", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "	</div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.shareLocationButtonsWrapper : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/soccer/liga-table'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "        <div class=\"table-row\">\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "rank", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell club-logo\">\n                <div class=\"club-logo-img\" style=\"background-image:url(" + alias4((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo", "hash": {}, "data": data }) : helper)) + ")\"></div>\n            </div>\n            <div class=\"table-cell club-name\">" + alias4((helper = (helper = helpers.club || (depth0 != null ? depth0.club : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "club", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.played || (depth0 != null ? depth0.played : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "played", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.won || (depth0 != null ? depth0.won : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "won", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.lost || (depth0 != null ? depth0.lost : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "lost", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.drawn || (depth0 != null ? depth0.drawn : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "drawn", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "goals", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.goalsDiff || (depth0 != null ? depth0.goalsDiff : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "goalsDiff", "hash": {}, "data": data }) : helper)) + "</div>\n            <div class=\"table-cell\">" + alias4((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "points", "hash": {}, "data": data }) : helper)) + "</div>\n        </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"table\">\n    <div class=\"table-header\">\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.rank : stack1, depth0)) + "</div>\n        <div class=\"table-cell\"></div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.club : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.played : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.won : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.lost : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.drawn : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.goals : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.goalsDiff : stack1, depth0)) + "</div>\n        <div class=\"table-cell\">" + alias2(alias1((stack1 = depth0 != null ? depth0.header : depth0) != null ? stack1.points : stack1, depth0)) + "</div>\n    </div>\n" + ((stack1 = helpers.each.call(alias3, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias3, depth0 != null ? depth0.data : depth0, depth0 != null ? depth0.rowsLimit : depth0, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "useData": true });
            templates['partials/soccer/ligaEZ1Game'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"wrapper\">\n        <div class=\"table\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.ligaEZ1Game : depth0, depth0 != null ? depth0.itemsLimit : depth0, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </div>\n    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["partials/soccer/ticker"], depth0, { "name": "partials/soccer/ticker", "data": data, "indent": "                ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.ligaEZ1Game : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/soccer/ligaEZGroup'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"wrapper dropdown-tabs\">\n        <div class=\"background-placeholder\"></div>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.groupTableHeader : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.ligaEZGroup : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.ligaEZGroup : depth0, { "name": "each", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            <label class=\"dropdown-tab-header\">" + container.escapeExpression((helper = (helper = helpers.groupTableHeader || (depth0 != null ? depth0.groupTableHeader : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "groupTableHeader", "hash": {}, "data": data }) : helper)) + "</label>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <label id=\"tab-" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\" class=\"dropdown-tab " + ((stack1 = helpers["if"].call(alias1, data && data.first, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">" + alias4((helper = (helper = helpers.groupName || (depth0 != null ? depth0.groupName : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "groupName", "hash": {}, "data": data }) : helper)) + "</label>\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "7": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "            <div id=\"tab-block-" + container.escapeExpression((helper = (helper = helpers.index || data && data.index) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n                 class=\"tab-block\"\n            >\n" + ((stack1 = helpers["with"].call(alias1, depth0 != null ? depth0.ligaEZTable : depth0, { "name": "with", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </div>\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["partials/soccer/liga-table"], depth0, { "name": "partials/soccer/liga-table", "data": data, "indent": "                    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.ligaEZGroup : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/soccer/ligaEZTable'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"wrapper\">\n" + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.ligaEZTable : depth0, { "name": "with", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["partials/soccer/liga-table"], depth0, { "name": "partials/soccer/liga-table", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.ligaEZTable : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/soccer/liveTicker'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"wrapper dropdown-tabs\">\n        <div class=\"background-placeholder\"></div>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.liveTicker : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.liveTicker : depth0, { "name": "each", "hash": {}, "fn": container.program(5, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <label\n                id=\"tab-" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n                class=\"dropdown-tab " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isCurrent : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n            >" + alias4((helper = (helper = helpers.round || (depth0 != null ? depth0.round : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "round", "hash": {}, "data": data }) : helper)) + "</label>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "5": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing;

                    return "            <div id=\"tab-block-" + container.escapeExpression((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n                 class=\"tab-block\"\n            >\n                <div class=\"table\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || alias2).call(alias1, depth0 != null ? depth0.allResults : depth0, depths[1] != null ? depths[1].itemsLimit : depths[1], { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(6, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "                </div>\n            </div>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["partials/soccer/ticker"], depth0, { "name": "partials/soccer/ticker", "data": data, "indent": "                        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.liveTicker : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true, "useDepths": true });
            templates['partials/soccer/news-injection'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression;

                    return "    <p class=\"news-injection-title\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "soccer_news_title", { "name": "local", "hash": {}, "data": data })) + "</p>\n    <div class=\"news-injection column-" + alias3((helper = (helper = helpers.numberOfNews || (depth0 != null ? depth0.numberOfNews : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "numberOfNews", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/news"], depth0, { "name": "partials/news", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.newsAvailable : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['partials/soccer/ticker'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "live";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "            <span class=\"is-live\">Live</span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"table-row result non-selectable\" data-extra=\"game_row_" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\">\n    <div class=\"table-cell club-logo\">\n        <div class=\"club-logo-img\" style=\"background-image:url(" + alias4((helper = (helper = helpers.hostLogo || (depth0 != null ? depth0.hostLogo : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "hostLogo", "hash": {}, "data": data }) : helper)) + ")\"></div>\n    </div>\n    <div class=\"table-cell host fixed-width\">" + alias4((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.host : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</div>\n    <div class=\"table-cell scored " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isLive : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n        <span>" + alias4((helper = (helper = helpers.scored || (depth0 != null ? depth0.scored : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "scored", "hash": {}, "data": data }) : helper)) + "</span>\n    </div>\n    <div class=\"table-cell fixed-width\">" + alias4((helpers.emphasis || depth0 && depth0.emphasis || alias2).call(alias1, depth0 != null ? depth0.guest : depth0, depth0 != null ? depth0.query : depth0, 2, true, { "name": "emphasis", "hash": {}, "data": data })) + "</div>\n    <div class=\"table-cell club-logo\">\n        <div class=\"club-logo-img\" style=\"background-image:url(" + alias4((helper = (helper = helpers.guestLogo || (depth0 != null ? depth0.guestLogo : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "guestLogo", "hash": {}, "data": data }) : helper)) + ")\"></div>\n    </div>\n    <div class=\"table-cell time\">" + alias4((helper = (helper = helpers.gameTime || (depth0 != null ? depth0.gameTime : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "gameTime", "hash": {}, "data": data }) : helper)) + "</div>\n    <div class=\"table-cell\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isLive : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n    <div class=\"table-cell\">\n        <div class=\"league-logo\" style=\"background-image: url(" + alias4((helper = (helper = helpers.leagueLogo || (depth0 != null ? depth0.leagueLogo : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "leagueLogo", "hash": {}, "data": data }) : helper)) + ")\" title=\"" + alias4((helper = (helper = helpers.leagueName || (depth0 != null ? depth0.leagueName : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "leagueName", "hash": {}, "data": data }) : helper)) + "\">\n        </div>\n    </div>\n</a>\n";
                }, "useData": true });
            templates['partials/social-buttons'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class='social-buttons " + ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.internalResults : depth0, { "name": "unless", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "'>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.socialResults : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "padded";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <a\n                class=\"result social-icon\"\n                data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n                href=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\"\n            >\n                <div style=\"background-image:url(" + alias4((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "image", "hash": {}, "data": data }) : helper)) + ")\"></div>\n            </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.socialResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['partials/source-timestamp'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression,
                        alias4 = "function";

                    return alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "source", { "name": "local", "hash": {}, "data": data })) + ": " + alias3((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "source", "hash": {}, "data": data }) : helper)) + "\n&#183; " + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "updated", { "name": "local", "hash": {}, "data": data })) + ": " + alias3((helper = (helper = helpers.updated || (depth0 != null ? depth0.updated : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "updated", "hash": {}, "data": data }) : helper));
                }, "useData": true });
            templates['partials/source'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression,
                        alias4 = "function";

                    return alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "source", { "name": "local", "hash": {}, "data": data })) + ": <a class=\"source-link result\" data-url=\"" + alias3((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias3((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\">" + alias3((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "source", "hash": {}, "data": data }) : helper)) + "</a>\n";
                }, "useData": true });
            templates['partials/timestamp'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression;

                    return alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, "updated", { "name": "local", "hash": {}, "data": data })) + ": " + alias3((helpers.agoDuration || depth0 && depth0.agoDuration || alias2).call(alias1, depth0 != null ? depth0.updated : depth0, { "name": "agoDuration", "hash": {}, "data": data }));
                }, "useData": true });
            templates['partials/videos'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"videos thumbnail-blocks\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.videoResults : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials.generic, depth0, { "name": "generic", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.videoResults : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['results'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"cliqz-result history " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.url : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n" + ((stack1 = container.invokePartial(helpers.lookup.call(alias1, depth0, "template", { "name": "lookup", "hash": {}, "data": data }), depth0, { "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "cluster";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"cliqz-result\">\n" + ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, "template", { "name": "lookup", "hash": {}, "data": data }), depth0, { "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.historyResults : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.genericResults : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "");
                }, "usePartial": true, "useData": true });
            templates['search'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "                    " + container.escapeExpression((helper = (helper = helpers.displayText || (depth0 != null ? depth0.displayText : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "displayText", "hash": {}, "data": data }) : helper)) + "\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "                    " + container.escapeExpression((helpers.emphasis || depth0 && depth0.emphasis || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.displayText : depth0, depth0 != null ? depth0.query : depth0, 1, true, { "name": "emphasis", "hash": {}, "data": data })) + "\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "                <span class=\"divider\">&#8212;</span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a class=\"result search\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\">\n    <div class=\"icons\">\n        <span class=\"icon " + alias4((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data }) : helper)) + "\"></span>\n    </div>\n    <div class=\"abstract\">\n        <p>\n            <span class=\"strong\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.defaultSearchResult : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data })) != null ? stack1 : "") + "            </span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.displayText : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            <span class=\"url\">" + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "searchWith", depth0 != null ? depth0.engine : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n        </p>\n    </div>\n</a>\n";
                }, "useData": true });
            templates['sessions'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<a id=\"" + alias4((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "elementId", "hash": {}, "data": data }) : helper)) + "\" class=\"result sessions\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\">\n    <div class=\"icons\">\n        <span class=\"icon history-tool\"></span>\n    </div>\n    <div class=\"abstract\">\n        <p>\n            <span class=\"\">\n                " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, "results_found_in_history", { "name": "local", "hash": {}, "data": data })) + "\n            </span>\n        </p>\n    </div>\n</a>\n";
                }, "useData": true });
            templates['single-video'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"single-video thumbnail-blocks\">\n" + ((stack1 = container.invokePartial(partials.generic, depth0, { "name": "generic", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["with"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.videoResult : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['soccer'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "<a class=\"result soccer-title\" data-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.subResult : depth0) != null ? stack1.url : stack1, depth0)) + "\" href=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.subResult : depth0) != null ? stack1.url : stack1, depth0)) + "\">\n        <span class=\"padded\">" + alias2(alias1((stack1 = depth0 != null ? depth0.subResult : depth0) != null ? stack1.title : stack1, depth0)) + "</span>\n        <span class=\"soccer-domain divider\">&#8212;</span>\n        <span class=\"soccer-domain\">" + alias2((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "soccer_api_provider", { "name": "local", "hash": {}, "data": data })) + "</span>\n    </a>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.escapeExpression;

                    return "                <a class=\"result expand-btn\" data-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.url : stack1, depth0)) + "\">\n                    " + alias1((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n                </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<a class=\"result\" data-url=\"" + alias4((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data }) : helper)) + "\" href=\"" + alias4((helper = (helper = helpers.displayUrl || (depth0 != null ? depth0.displayUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "displayUrl", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials["partials/logo"], depth0, { "name": "partials/logo", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(partials["partials/abstract"], depth0, { "name": "partials/abstract", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</a>\n\n" + ((stack1 = container.invokePartial(partials["partials/buttons"], depth0, { "name": "partials/buttons", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.subResult : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n<div class=\"padded\">\n    <div class=\"soccer\">\n\n" + ((stack1 = container.invokePartial(helpers.lookup.call(alias1, depth0, "currentPartial", { "name": "lookup", "hash": {}, "data": data }), depth0, { "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n        <div>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.show : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n            <a class=\"result powered-by\" data-url=\"" + alias4(alias5((stack1 = depth0 != null ? depth0.poweredByResult : depth0) != null ? stack1.url : stack1, depth0)) + "\" href=\"" + alias4(alias5((stack1 = depth0 != null ? depth0.poweredByResult : depth0) != null ? stack1.url : stack1, depth0)) + "\">\n                " + alias4((helpers.local || depth0 && depth0.local || alias2).call(alias1, (stack1 = depth0 != null ? depth0.poweredByResult : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n            </a>\n        </div>\n\n" + ((stack1 = container.invokePartial(partials["partials/soccer/news-injection"], depth0, { "name": "partials/soccer/news-injection", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "\n    </div>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['time'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "    <div class=\"main-result\">\n        <p class=\"main\">" + alias4((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "time", "hash": {}, "data": data }) : helper)) + " " + alias4((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "location", "hash": {}, "data": data }) : helper)) + "</p>\n        <p class=\"timezone\">" + alias4((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "expression", "hash": {}, "data": data }) : helper)) + ", " + alias4((helper = (helper = helpers.timeZone || (depth0 != null ? depth0.timeZone : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "timeZone", "hash": {}, "data": data }) : helper)) + "</p>\n    </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <div class=\"timezone-results\">\n" + ((stack1 = helpers.each.call(alias1, (helpers.take || depth0 && depth0.take || helpers.helperMissing).call(alias1, depth0 != null ? depth0.timezoneResults : depth0, depth0 != null ? depth0.rowsLimit : depth0, { "name": "take", "hash": {}, "data": data }), { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.show : stack1, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "        <p class='timezone-results-row'>\n            <span class=\"main space\">" + alias4((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "time", "hash": {}, "data": data }) : helper)) + "</span>\n            <span class=\"main city\">" + alias4((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "location", "hash": {}, "data": data }) : helper)) + "</span>\n            <span class=\"timezone\">&#183; " + alias4((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "expression", "hash": {}, "data": data }) : helper)) + " (" + alias4((helper = (helper = helpers.timeZone || (depth0 != null ? depth0.timeZone : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "timeZone", "hash": {}, "data": data }) : helper)) + ")</span>\n        </p>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.escapeExpression;

                    return "        <a class=\"result expand-btn\" data-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.url : stack1, depth0)) + "\">\n            " + alias1((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.expandButton : depth0) != null ? stack1.title : stack1, { "name": "local", "hash": {}, "data": data })) + "\n        </a>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"time padded\">\n" + ((stack1 = helpers["with"].call(alias1, depth0 != null ? depth0.mainResult : depth0, { "name": "with", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.timezoneResults : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "useData": true });
            templates['weather'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "                <div class=\"weather-item\">\n                    <div class=\"date\">" + alias4((helper = (helper = helpers.weekday || (depth0 != null ? depth0.weekday : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "weekday", "hash": {}, "data": data }) : helper)) + "</div>\n                    <img width=\"55\" height=\"55\" src=\"" + alias4((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data }) : helper)) + "\" />\n                    <div class=\"temp\">\n                        " + alias4((helper = (helper = helpers.max || (depth0 != null ? depth0.max : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "max", "hash": {}, "data": data }) : helper)) + "  " + alias4((helper = (helper = helpers.min || (depth0 != null ? depth0.min : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "min", "hash": {}, "data": data }) : helper)) + "\n                    </div>\n                </div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = container.escapeExpression,
                        alias3 = container.lambda;

                    return "<div class=\"result instant weather\">\n    <div class=\"header padded\">\n        <span class=\"title\">" + alias2((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "title", "hash": {}, "data": data }) : helper)) + "</span>\n    </div>\n\n    <div class=\"forecast padded\">\n        <div class=\"forecast-container white-background\">\n            <div class=\"weather-item\">\n                <div class=\"date\">" + alias2(alias3((stack1 = depth0 != null ? depth0.today : depth0) != null ? stack1.date : stack1, depth0)) + "</div>\n                <img width=\"55\" height=\"55\" src=\"" + alias2(alias3((stack1 = depth0 != null ? depth0.today : depth0) != null ? stack1.icon : stack1, depth0)) + "\" />\n                <div class=\"temp\">\n                    " + alias2(alias3((stack1 = depth0 != null ? depth0.today : depth0) != null ? stack1.maxTemp : stack1, depth0)) + " " + alias2(alias3((stack1 = depth0 != null ? depth0.today : depth0) != null ? stack1.minTemp : stack1, depth0)) + "\n                </div>\n            </div>\n\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.forecast : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n            <div class=\"source\">\n                <div class=\"source-container\">\n" + ((stack1 = container.invokePartial(partials["partials/source"], depth0, { "name": "partials/source", "data": data, "indent": "                    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
                }, "usePartial": true, "useData": true });

            _export('default', templates);
        }
    };
});

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
        "use strict";
        /*
        Copyright (c) 2014 Petka Antonov
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        */

        function Url() {
            //For more efficient internal representation and laziness.
            //The non-underscore versions of these properties are accessor functions
            //defined on the prototype.
            this._protocol = null;
            this._href = "";
            this._port = -1;
            this._query = null;

            this.auth = null;
            this.slashes = null;
            this.host = null;
            this.hostname = null;
            this.hash = null;
            this.search = null;
            this.pathname = null;

            this._prependSlash = false;
        }

        var querystring = require("querystring");

        Url.queryString = querystring;

        Url.prototype.parse = function Url$parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
            if (typeof str !== "string") {
                throw new TypeError("Parameter 'url' must be a string, not " + typeof str);
            }
            var start = 0;
            var end = str.length - 1;

            //Trim leading and trailing ws
            while (str.charCodeAt(start) <= 0x20 /*' '*/) start++;
            while (str.charCodeAt(end) <= 0x20 /*' '*/) end--;

            start = this._parseProtocol(str, start, end);

            //Javascript doesn't have host
            if (this._protocol !== "javascript") {
                start = this._parseHost(str, start, end, hostDenotesSlash);
                var proto = this._protocol;
                if (!this.hostname && (this.slashes || proto && !slashProtocols[proto])) {
                    this.hostname = this.host = "";
                }
            }

            if (start <= end) {
                var ch = str.charCodeAt(start);

                if (ch === 0x2F /*'/'*/ || ch === 0x5C /*'\'*/) {
                        this._parsePath(str, start, end, disableAutoEscapeChars);
                    } else if (ch === 0x3F /*'?'*/) {
                        this._parseQuery(str, start, end, disableAutoEscapeChars);
                    } else if (ch === 0x23 /*'#'*/) {
                        this._parseHash(str, start, end, disableAutoEscapeChars);
                    } else if (this._protocol !== "javascript") {
                    this._parsePath(str, start, end, disableAutoEscapeChars);
                } else {
                    //For javascript the pathname is just the rest of it
                    this.pathname = str.slice(start, end + 1);
                }
            }

            if (!this.pathname && this.hostname && this._slashProtocols[this._protocol]) {
                this.pathname = "/";
            }

            if (parseQueryString) {
                var search = this.search;
                if (search == null) {
                    search = this.search = "";
                }
                if (search.charCodeAt(0) === 0x3F /*'?'*/) {
                        search = search.slice(1);
                    }
                //This calls a setter function, there is no .query data property
                this.query = Url.queryString.parse(search);
            }
        };

        Url.prototype.resolve = function Url$resolve(relative) {
            return this.resolveObject(Url.parse(relative, false, true)).format();
        };

        Url.prototype.format = function Url$format() {
            var auth = this.auth || "";

            if (auth) {
                auth = encodeURIComponent(auth);
                auth = auth.replace(/%3A/i, ":");
                auth += "@";
            }

            var protocol = this.protocol || "";
            var pathname = this.pathname || "";
            var hash = this.hash || "";
            var search = this.search || "";
            var query = "";
            var hostname = this.hostname || "";
            var port = this.port || "";
            var host = false;
            var scheme = "";

            //Cache the result of the getter function
            var q = this.query;
            if (q && typeof q === "object") {
                query = Url.queryString.stringify(q);
            }

            if (!search) {
                search = query ? "?" + query : "";
            }

            if (protocol && protocol.charCodeAt(protocol.length - 1) !== 0x3A /*':'*/) protocol += ":";

            if (this.host) {
                host = auth + this.host;
            } else if (hostname) {
                var ip6 = hostname.indexOf(":") > -1;
                if (ip6) hostname = "[" + hostname + "]";
                host = auth + hostname + (port ? ":" + port : "");
            }

            var slashes = this.slashes || (!protocol || slashProtocols[protocol]) && host !== false;

            if (protocol) scheme = protocol + (slashes ? "//" : "");else if (slashes) scheme = "//";

            if (slashes && pathname && pathname.charCodeAt(0) !== 0x2F /*'/'*/) {
                    pathname = "/" + pathname;
                }
            if (search && search.charCodeAt(0) !== 0x3F /*'?'*/) search = "?" + search;
            if (hash && hash.charCodeAt(0) !== 0x23 /*'#'*/) hash = "#" + hash;

            pathname = escapePathName(pathname);
            search = escapeSearch(search);

            return scheme + (host === false ? "" : host) + pathname + search + hash;
        };

        Url.prototype.resolveObject = function Url$resolveObject(relative) {
            if (typeof relative === "string") relative = Url.parse(relative, false, true);

            var result = this._clone();

            // hash is always overridden, no matter what.
            // even href="" will remove it.
            result.hash = relative.hash;

            // if the relative url is empty, then there"s nothing left to do here.
            if (!relative.href) {
                result._href = "";
                return result;
            }

            // hrefs like //foo/bar always cut to the protocol.
            if (relative.slashes && !relative._protocol) {
                relative._copyPropsTo(result, true);

                if (slashProtocols[result._protocol] && result.hostname && !result.pathname) {
                    result.pathname = "/";
                }
                result._href = "";
                return result;
            }

            if (relative._protocol && relative._protocol !== result._protocol) {
                // if it"s a known url protocol, then changing
                // the protocol does weird things
                // first, if it"s not file:, then we MUST have a host,
                // and if there was a path
                // to begin with, then we MUST have a path.
                // if it is file:, then the host is dropped,
                // because that"s known to be hostless.
                // anything else is assumed to be absolute.
                if (!slashProtocols[relative._protocol]) {
                    relative._copyPropsTo(result, false);
                    result._href = "";
                    return result;
                }

                result._protocol = relative._protocol;
                if (!relative.host && relative._protocol !== "javascript") {
                    var relPath = (relative.pathname || "").split("/");
                    while (relPath.length && !(relative.host = relPath.shift()));
                    if (!relative.host) relative.host = "";
                    if (!relative.hostname) relative.hostname = "";
                    if (relPath[0] !== "") relPath.unshift("");
                    if (relPath.length < 2) relPath.unshift("");
                    result.pathname = relPath.join("/");
                } else {
                    result.pathname = relative.pathname;
                }

                result.search = relative.search;
                result.host = relative.host || "";
                result.auth = relative.auth;
                result.hostname = relative.hostname || relative.host;
                result._port = relative._port;
                result.slashes = result.slashes || relative.slashes;
                result._href = "";
                return result;
            }

            var isSourceAbs = result.pathname && result.pathname.charCodeAt(0) === 0x2F /*'/'*/;
            var isRelAbs = relative.host || relative.pathname && relative.pathname.charCodeAt(0) === 0x2F /*'/'*/;
            var mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname;

            var removeAllDots = mustEndAbs;

            var srcPath = result.pathname && result.pathname.split("/") || [];
            var relPath = relative.pathname && relative.pathname.split("/") || [];
            var psychotic = result._protocol && !slashProtocols[result._protocol];

            // if the url is a non-slashed url, then relative
            // links like ../.. should be able
            // to crawl up to the hostname, as well.  This is strange.
            // result.protocol has already been set by now.
            // Later on, put the first path part into the host field.
            if (psychotic) {
                result.hostname = "";
                result._port = -1;
                if (result.host) {
                    if (srcPath[0] === "") srcPath[0] = result.host;else srcPath.unshift(result.host);
                }
                result.host = "";
                if (relative._protocol) {
                    relative.hostname = "";
                    relative._port = -1;
                    if (relative.host) {
                        if (relPath[0] === "") relPath[0] = relative.host;else relPath.unshift(relative.host);
                    }
                    relative.host = "";
                }
                mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
            }

            if (isRelAbs) {
                // it"s absolute.
                result.host = relative.host ? relative.host : result.host;
                result.hostname = relative.hostname ? relative.hostname : result.hostname;
                result.search = relative.search;
                srcPath = relPath;
                // fall through to the dot-handling below.
            } else if (relPath.length) {
                // it"s relative
                // throw away the existing file, and take the new path instead.
                if (!srcPath) srcPath = [];
                srcPath.pop();
                srcPath = srcPath.concat(relPath);
                result.search = relative.search;
            } else if (relative.search) {
                // just pull out the search.
                // like href="?foo".
                // Put this after the other two cases because it simplifies the booleans
                if (psychotic) {
                    result.hostname = result.host = srcPath.shift();
                    //occationaly the auth can get stuck only in host
                    //this especialy happens in cases like
                    //url.resolveObject("mailto:local1@domain1", "local2@domain2")
                    var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                    if (authInHost) {
                        result.auth = authInHost.shift();
                        result.host = result.hostname = authInHost.shift();
                    }
                }
                result.search = relative.search;
                result._href = "";
                return result;
            }

            if (!srcPath.length) {
                // no path at all.  easy.
                // we"ve already handled the other stuff above.
                result.pathname = null;
                result._href = "";
                return result;
            }

            // if a url ENDs in . or .., then it must get a trailing slash.
            // however, if it ends in anything else non-slashy,
            // then it must NOT get a trailing slash.
            var last = srcPath.slice(-1)[0];
            var hasTrailingSlash = (result.host || relative.host) && (last === "." || last === "..") || last === "";

            // strip single dots, resolve double dots to parent dir
            // if the path tries to go above the root, `up` ends up > 0
            var up = 0;
            for (var i = srcPath.length; i >= 0; i--) {
                last = srcPath[i];
                if (last === ".") {
                    srcPath.splice(i, 1);
                } else if (last === "..") {
                    srcPath.splice(i, 1);
                    up++;
                } else if (up) {
                    srcPath.splice(i, 1);
                    up--;
                }
            }

            // if the path is allowed to go above the root, restore leading ..s
            if (!mustEndAbs && !removeAllDots) {
                for (; up--; up) {
                    srcPath.unshift("..");
                }
            }

            if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charCodeAt(0) !== 0x2F /*'/'*/)) {
                srcPath.unshift("");
            }

            if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
                srcPath.push("");
            }

            var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charCodeAt(0) === 0x2F /*'/'*/;

            // put the host back
            if (psychotic) {
                result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
                //occationaly the auth can get stuck only in host
                //this especialy happens in cases like
                //url.resolveObject("mailto:local1@domain1", "local2@domain2")
                var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                if (authInHost) {
                    result.auth = authInHost.shift();
                    result.host = result.hostname = authInHost.shift();
                }
            }

            mustEndAbs = mustEndAbs || result.host && srcPath.length;

            if (mustEndAbs && !isAbsolute) {
                srcPath.unshift("");
            }

            result.pathname = srcPath.length === 0 ? null : srcPath.join("/");
            result.auth = relative.auth || result.auth;
            result.slashes = result.slashes || relative.slashes;
            result._href = "";
            return result;
        };

        var punycode = require("punycode");
        Url.prototype._hostIdna = function Url$_hostIdna(hostname) {
            // IDNA Support: Returns a punycoded representation of "domain".
            // It only converts parts of the domain name that
            // have non-ASCII characters, i.e. it doesn't matter if
            // you call it with a domain that already is ASCII-only.
            return punycode.toASCII(hostname);
        };

        var escapePathName = Url.prototype._escapePathName = function Url$_escapePathName(pathname) {
            if (!containsCharacter2(pathname, 0x23 /*'#'*/, 0x3F /*'?'*/)) {
                return pathname;
            }
            //Avoid closure creation to keep this inlinable
            return _escapePath(pathname);
        };

        var escapeSearch = Url.prototype._escapeSearch = function Url$_escapeSearch(search) {
            if (!containsCharacter2(search, 0x23 /*'#'*/, -1)) return search;
            //Avoid closure creation to keep this inlinable
            return _escapeSearch(search);
        };

        Url.prototype._parseProtocol = function Url$_parseProtocol(str, start, end) {
            var doLowerCase = false;
            var protocolCharacters = this._protocolCharacters;

            for (var i = start; i <= end; ++i) {
                var ch = str.charCodeAt(i);

                if (ch === 0x3A /*':'*/) {
                        var protocol = str.slice(start, i);
                        if (doLowerCase) protocol = protocol.toLowerCase();
                        this._protocol = protocol;
                        return i + 1;
                    } else if (protocolCharacters[ch] === 1) {
                    if (ch < 0x61 /*'a'*/) doLowerCase = true;
                } else {
                    return start;
                }
            }
            return start;
        };

        Url.prototype._parseAuth = function Url$_parseAuth(str, start, end, decode) {
            var auth = str.slice(start, end + 1);
            if (decode) {
                auth = decodeURIComponent(auth);
            }
            this.auth = auth;
        };

        Url.prototype._parsePort = function Url$_parsePort(str, start, end) {
            //Internal format is integer for more efficient parsing
            //and for efficient trimming of leading zeros
            var port = 0;
            //Distinguish between :0 and : (no port number at all)
            var hadChars = false;

            for (var i = start; i <= end; ++i) {
                var ch = str.charCodeAt(i);

                if (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/) {
                        port = 10 * port + (ch - 0x30 /*'0'*/);
                        hadChars = true;
                    } else break;
            }
            if (port === 0 && !hadChars) {
                return 0;
            }

            this._port = port;
            return i - start;
        };

        Url.prototype._parseHost = function Url$_parseHost(str, start, end, slashesDenoteHost) {
            var hostEndingCharacters = this._hostEndingCharacters;
            var first = str.charCodeAt(start);
            var second = str.charCodeAt(start + 1);
            if ((first === 0x2F /*'/'*/ || first === 0x5C /*'\'*/) && (second === 0x2F /*'/'*/ || second === 0x5C /*'\'*/)) {
                this.slashes = true;

                //The string starts with //
                if (start === 0) {
                    //The string is just "//"
                    if (end < 2) return start;
                    //If slashes do not denote host and there is no auth,
                    //there is no host when the string starts with //
                    var hasAuth = containsCharacter(str, 0x40 /*'@'*/, 2, hostEndingCharacters);
                    if (!hasAuth && !slashesDenoteHost) {
                        this.slashes = null;
                        return start;
                    }
                }
                //There is a host that starts after the //
                start += 2;
            }
            //If there is no slashes, there is no hostname if
            //1. there was no protocol at all
            else if (!this._protocol ||
                //2. there was a protocol that requires slashes
                //e.g. in 'http:asd' 'asd' is not a hostname
                slashProtocols[this._protocol]) {
                    return start;
                }

            var doLowerCase = false;
            var idna = false;
            var hostNameStart = start;
            var hostNameEnd = end;
            var lastCh = -1;
            var portLength = 0;
            var charsAfterDot = 0;
            var authNeedsDecoding = false;

            var j = -1;

            //Find the last occurrence of an @-sign until hostending character is met
            //also mark if decoding is needed for the auth portion
            for (var i = start; i <= end; ++i) {
                var ch = str.charCodeAt(i);

                if (ch === 0x40 /*'@'*/) {
                        j = i;
                    }
                    //This check is very, very cheap. Unneeded decodeURIComponent is very
                    //very expensive
                else if (ch === 0x25 /*'%'*/) {
                            authNeedsDecoding = true;
                        } else if (hostEndingCharacters[ch] === 1) {
                        break;
                    }
            }

            //@-sign was found at index j, everything to the left from it
            //is auth part
            if (j > -1) {
                this._parseAuth(str, start, j - 1, authNeedsDecoding);
                //hostname starts after the last @-sign
                start = hostNameStart = j + 1;
            }

            //Host name is starting with a [
            if (str.charCodeAt(start) === 0x5B /*'['*/) {
                    for (var i = start + 1; i <= end; ++i) {
                        var ch = str.charCodeAt(i);

                        //Assume valid IP6 is between the brackets
                        if (ch === 0x5D /*']'*/) {
                                if (str.charCodeAt(i + 1) === 0x3A /*':'*/) {
                                        portLength = this._parsePort(str, i + 2, end) + 1;
                                    }
                                var hostname = str.slice(start + 1, i).toLowerCase();
                                this.hostname = hostname;
                                this.host = this._port > 0 ? "[" + hostname + "]:" + this._port : "[" + hostname + "]";
                                this.pathname = "/";
                                return i + portLength + 1;
                            }
                    }
                    //Empty hostname, [ starts a path
                    return start;
                }

            for (var i = start; i <= end; ++i) {
                if (charsAfterDot > 62) {
                    this.hostname = this.host = str.slice(start, i);
                    return i;
                }
                var ch = str.charCodeAt(i);

                if (ch === 0x3A /*':'*/) {
                        portLength = this._parsePort(str, i + 1, end) + 1;
                        hostNameEnd = i - 1;
                        break;
                    } else if (ch < 0x61 /*'a'*/) {
                        if (ch === 0x2E /*'.'*/) {
                                //Node.js ignores this error
                                /*
                                if (lastCh === DOT || lastCh === -1) {
                                    this.hostname = this.host = "";
                                    return start;
                                }
                                */
                                charsAfterDot = -1;
                            } else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
                                doLowerCase = true;
                            }
                            //Valid characters other than ASCII letters -, _, +, 0-9
                        else if (!(ch === 0x2D /*'-'*/ || ch === 0x5F /*'_'*/ || ch === 0x2B /*'+'*/ || 0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/)) {
                                if (hostEndingCharacters[ch] === 0 && this._noPrependSlashHostEnders[ch] === 0) {
                                    this._prependSlash = true;
                                }
                                hostNameEnd = i - 1;
                                break;
                            }
                    } else if (ch >= 0x7B /*'{'*/) {
                        if (ch <= 0x7E /*'~'*/) {
                                if (this._noPrependSlashHostEnders[ch] === 0) {
                                    this._prependSlash = true;
                                }
                                hostNameEnd = i - 1;
                                break;
                            }
                        idna = true;
                    }
                lastCh = ch;
                charsAfterDot++;
            }

            //Node.js ignores this error
            /*
            if (lastCh === DOT) {
                hostNameEnd--;
            }
            */

            if (hostNameEnd + 1 !== start && hostNameEnd - hostNameStart <= 256) {
                var hostname = str.slice(hostNameStart, hostNameEnd + 1);
                if (doLowerCase) hostname = hostname.toLowerCase();
                if (idna) hostname = this._hostIdna(hostname);
                this.hostname = hostname;
                this.host = this._port > 0 ? hostname + ":" + this._port : hostname;
            }

            return hostNameEnd + 1 + portLength;
        };

        Url.prototype._copyPropsTo = function Url$_copyPropsTo(input, noProtocol) {
            if (!noProtocol) {
                input._protocol = this._protocol;
            }
            input._href = this._href;
            input._port = this._port;
            input._prependSlash = this._prependSlash;
            input.auth = this.auth;
            input.slashes = this.slashes;
            input.host = this.host;
            input.hostname = this.hostname;
            input.hash = this.hash;
            input.search = this.search;
            input.pathname = this.pathname;
        };

        Url.prototype._clone = function Url$_clone() {
            var ret = new Url();
            ret._protocol = this._protocol;
            ret._href = this._href;
            ret._port = this._port;
            ret._prependSlash = this._prependSlash;
            ret.auth = this.auth;
            ret.slashes = this.slashes;
            ret.host = this.host;
            ret.hostname = this.hostname;
            ret.hash = this.hash;
            ret.search = this.search;
            ret.pathname = this.pathname;
            return ret;
        };

        Url.prototype._getComponentEscaped = function Url$_getComponentEscaped(str, start, end, isAfterQuery) {
            var cur = start;
            var i = start;
            var ret = "";
            var autoEscapeMap = isAfterQuery ? this._afterQueryAutoEscapeMap : this._autoEscapeMap;
            for (; i <= end; ++i) {
                var ch = str.charCodeAt(i);
                var escaped = autoEscapeMap[ch];

                if (escaped !== "" && escaped !== undefined) {
                    if (cur < i) ret += str.slice(cur, i);
                    ret += escaped;
                    cur = i + 1;
                }
            }
            if (cur < i + 1) ret += str.slice(cur, i);
            return ret;
        };

        Url.prototype._parsePath = function Url$_parsePath(str, start, end, disableAutoEscapeChars) {
            var pathStart = start;
            var pathEnd = end;
            var escape = false;
            var autoEscapeCharacters = this._autoEscapeCharacters;

            for (var i = start; i <= end; ++i) {
                var ch = str.charCodeAt(i);
                if (ch === 0x23 /*'#'*/) {
                        this._parseHash(str, i, end, disableAutoEscapeChars);
                        pathEnd = i - 1;
                        break;
                    } else if (ch === 0x3F /*'?'*/) {
                        this._parseQuery(str, i, end, disableAutoEscapeChars);
                        pathEnd = i - 1;
                        break;
                    } else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
                    escape = true;
                }
            }

            if (pathStart > pathEnd) {
                this.pathname = "/";
                return;
            }

            var path;
            if (escape) {
                path = this._getComponentEscaped(str, pathStart, pathEnd, false);
            } else {
                path = str.slice(pathStart, pathEnd + 1);
            }
            this.pathname = this._prependSlash ? "/" + path : path;
        };

        Url.prototype._parseQuery = function Url$_parseQuery(str, start, end, disableAutoEscapeChars) {
            var queryStart = start;
            var queryEnd = end;
            var escape = false;
            var autoEscapeCharacters = this._autoEscapeCharacters;

            for (var i = start; i <= end; ++i) {
                var ch = str.charCodeAt(i);

                if (ch === 0x23 /*'#'*/) {
                        this._parseHash(str, i, end, disableAutoEscapeChars);
                        queryEnd = i - 1;
                        break;
                    } else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
                    escape = true;
                }
            }

            if (queryStart > queryEnd) {
                this.search = "";
                return;
            }

            var query;
            if (escape) {
                query = this._getComponentEscaped(str, queryStart, queryEnd, true);
            } else {
                query = str.slice(queryStart, queryEnd + 1);
            }
            this.search = query;
        };

        Url.prototype._parseHash = function Url$_parseHash(str, start, end, disableAutoEscapeChars) {
            if (start > end) {
                this.hash = "";
                return;
            }

            this.hash = disableAutoEscapeChars ? str.slice(start, end + 1) : this._getComponentEscaped(str, start, end, true);
        };

        Object.defineProperty(Url.prototype, "port", {
            get: function () {
                if (this._port >= 0) {
                    return "" + this._port;
                }
                return null;
            },
            set: function (v) {
                if (v == null) {
                    this._port = -1;
                } else {
                    this._port = parseInt(v, 10);
                }
            }
        });

        Object.defineProperty(Url.prototype, "query", {
            get: function () {
                var query = this._query;
                if (query != null) {
                    return query;
                }
                var search = this.search;

                if (search) {
                    if (search.charCodeAt(0) === 0x3F /*'?'*/) {
                            search = search.slice(1);
                        }
                    if (search !== "") {
                        this._query = search;
                        return search;
                    }
                }
                return search;
            },
            set: function (v) {
                this._query = v;
            }
        });

        Object.defineProperty(Url.prototype, "path", {
            get: function () {
                var p = this.pathname || "";
                var s = this.search || "";
                if (p || s) {
                    return p + s;
                }
                return p == null && s ? "/" + s : null;
            },
            set: function () {}
        });

        Object.defineProperty(Url.prototype, "protocol", {
            get: function () {
                var proto = this._protocol;
                return proto ? proto + ":" : proto;
            },
            set: function (v) {
                if (typeof v === "string") {
                    var end = v.length - 1;
                    if (v.charCodeAt(end) === 0x3A /*':'*/) {
                            this._protocol = v.slice(0, end);
                        } else {
                        this._protocol = v;
                    }
                } else if (v == null) {
                    this._protocol = null;
                }
            }
        });

        Object.defineProperty(Url.prototype, "href", {
            get: function () {
                var href = this._href;
                if (!href) {
                    href = this._href = this.format();
                }
                return href;
            },
            set: function (v) {
                this._href = v;
            }
        });

        Url.parse = function Url$Parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
            if (str instanceof Url) return str;
            var ret = new Url();
            ret.parse(str, !!parseQueryString, !!hostDenotesSlash, !!disableAutoEscapeChars);
            return ret;
        };

        Url.format = function Url$Format(obj) {
            if (typeof obj === "string") {
                obj = Url.parse(obj);
            }
            if (!(obj instanceof Url)) {
                return Url.prototype.format.call(obj);
            }
            return obj.format();
        };

        Url.resolve = function Url$Resolve(source, relative) {
            return Url.parse(source, false, true).resolve(relative);
        };

        Url.resolveObject = function Url$ResolveObject(source, relative) {
            if (!source) return relative;
            return Url.parse(source, false, true).resolveObject(relative);
        };

        function _escapePath(pathname) {
            return pathname.replace(/[?#]/g, function (match) {
                return encodeURIComponent(match);
            });
        }

        function _escapeSearch(search) {
            return search.replace(/#/g, function (match) {
                return encodeURIComponent(match);
            });
        }

        //Search `char1` (integer code for a character) in `string`
        //starting from `fromIndex` and ending at `string.length - 1`
        //or when a stop character is found
        function containsCharacter(string, char1, fromIndex, stopCharacterTable) {
            var len = string.length;
            for (var i = fromIndex; i < len; ++i) {
                var ch = string.charCodeAt(i);

                if (ch === char1) {
                    return true;
                } else if (stopCharacterTable[ch] === 1) {
                    return false;
                }
            }
            return false;
        }

        //See if `char1` or `char2` (integer codes for characters)
        //is contained in `string`
        function containsCharacter2(string, char1, char2) {
            for (var i = 0, len = string.length; i < len; ++i) {
                var ch = string.charCodeAt(i);
                if (ch === char1 || ch === char2) return true;
            }
            return false;
        }

        //Makes an array of 128 uint8's which represent boolean values.
        //Spec is an array of ascii code points or ascii code point ranges
        //ranges are expressed as [start, end]

        //Create a table with the characters 0x30-0x39 (decimals '0' - '9') and
        //0x7A (lowercaseletter 'z') as `true`:
        //
        //var a = makeAsciiTable([[0x30, 0x39], 0x7A]);
        //a[0x30]; //1
        //a[0x15]; //0
        //a[0x35]; //1
        function makeAsciiTable(spec) {
            var ret = new Uint8Array(128);
            spec.forEach(function (item) {
                if (typeof item === "number") {
                    ret[item] = 1;
                } else {
                    var start = item[0];
                    var end = item[1];
                    for (var j = start; j <= end; ++j) {
                        ret[j] = 1;
                    }
                }
            });

            return ret;
        }

        var autoEscape = ["<", ">", "\"", "`", " ", "\r", "\n", "\t", "{", "}", "|", "\\", "^", "`", "'"];

        var autoEscapeMap = new Array(128);

        for (var i = 0, len = autoEscapeMap.length; i < len; ++i) {
            autoEscapeMap[i] = "";
        }

        for (var i = 0, len = autoEscape.length; i < len; ++i) {
            var c = autoEscape[i];
            var esc = encodeURIComponent(c);
            if (esc === c) {
                esc = escape(c);
            }
            autoEscapeMap[c.charCodeAt(0)] = esc;
        }
        var afterQueryAutoEscapeMap = autoEscapeMap.slice();
        autoEscapeMap[0x5C /*'\'*/] = "/";

        var slashProtocols = Url.prototype._slashProtocols = {
            http: true,
            https: true,
            gopher: true,
            file: true,
            ftp: true,

            "http:": true,
            "https:": true,
            "gopher:": true,
            "file:": true,
            "ftp:": true
        };

        //Optimize back from normalized object caused by non-identifier keys
        function f() {}
        f.prototype = slashProtocols;

        Url.prototype._protocolCharacters = makeAsciiTable([[0x61 /*'a'*/, 0x7A /*'z'*/], [0x41 /*'A'*/, 0x5A /*'Z'*/], 0x2E /*'.'*/, 0x2B /*'+'*/, 0x2D /*'-'*/
        ]);

        Url.prototype._hostEndingCharacters = makeAsciiTable([0x23 /*'#'*/, 0x3F /*'?'*/, 0x2F /*'/'*/, 0x5C /*'\'*/
        ]);

        Url.prototype._autoEscapeCharacters = makeAsciiTable(autoEscape.map(function (v) {
            return v.charCodeAt(0);
        }));

        //If these characters end a host name, the path will not be prepended a /
        Url.prototype._noPrependSlashHostEnders = makeAsciiTable(["<", ">", "'", "`", " ", "\r", "\n", "\t", "{", "}", "|", "^", "`", "\"", "%", ";"].map(function (v) {
            return v.charCodeAt(0);
        }));

        Url.prototype._autoEscapeMap = autoEscapeMap;
        Url.prototype._afterQueryAutoEscapeMap = afterQueryAutoEscapeMap;

        module.exports = Url;

        Url.replace = function Url$Replace() {
            require.cache.url = {
                exports: Url
            };
        };
    }, { "punycode": 2, "querystring": 5 }], 2: [function (require, module, exports) {
        (function (global) {
            /*! https://mths.be/punycode v1.4.1 by @mathias */
            ;(function (root) {

                /** Detect free variables */
                var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
                var freeModule = typeof module == 'object' && module && !module.nodeType && module;
                var freeGlobal = typeof global == 'object' && global;
                if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
                    root = freeGlobal;
                }

                /**
                 * The `punycode` object.
                 * @name punycode
                 * @type Object
                 */
                var punycode,


                /** Highest positive signed 32-bit float value */
                maxInt = 2147483647,
                    // aka. 0x7FFFFFFF or 2^31-1

                /** Bootstring parameters */
                base = 36,
                    tMin = 1,
                    tMax = 26,
                    skew = 38,
                    damp = 700,
                    initialBias = 72,
                    initialN = 128,
                    // 0x80
                delimiter = '-',
                    // '\x2D'

                /** Regular expressions */
                regexPunycode = /^xn--/,
                    regexNonASCII = /[^\x20-\x7E]/,
                    // unprintable ASCII chars + non-ASCII chars
                regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
                    // RFC 3490 separators

                /** Error messages */
                errors = {
                    'overflow': 'Overflow: input needs wider integers to process',
                    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                    'invalid-input': 'Invalid input'
                },


                /** Convenience shortcuts */
                baseMinusTMin = base - tMin,
                    floor = Math.floor,
                    stringFromCharCode = String.fromCharCode,


                /** Temporary variable */
                key;

                /*--------------------------------------------------------------------------*/

                /**
                 * A generic error utility function.
                 * @private
                 * @param {String} type The error type.
                 * @returns {Error} Throws a `RangeError` with the applicable error message.
                 */
                function error(type) {
                    throw new RangeError(errors[type]);
                }

                /**
                 * A generic `Array#map` utility function.
                 * @private
                 * @param {Array} array The array to iterate over.
                 * @param {Function} callback The function that gets called for every array
                 * item.
                 * @returns {Array} A new array of values returned by the callback function.
                 */
                function map(array, fn) {
                    var length = array.length;
                    var result = [];
                    while (length--) {
                        result[length] = fn(array[length]);
                    }
                    return result;
                }

                /**
                 * A simple `Array#map`-like wrapper to work with domain name strings or email
                 * addresses.
                 * @private
                 * @param {String} domain The domain name or email address.
                 * @param {Function} callback The function that gets called for every
                 * character.
                 * @returns {Array} A new string of characters returned by the callback
                 * function.
                 */
                function mapDomain(string, fn) {
                    var parts = string.split('@');
                    var result = '';
                    if (parts.length > 1) {
                        // In email addresses, only the domain name should be punycoded. Leave
                        // the local part (i.e. everything up to `@`) intact.
                        result = parts[0] + '@';
                        string = parts[1];
                    }
                    // Avoid `split(regex)` for IE8 compatibility. See #17.
                    string = string.replace(regexSeparators, '\x2E');
                    var labels = string.split('.');
                    var encoded = map(labels, fn).join('.');
                    return result + encoded;
                }

                /**
                 * Creates an array containing the numeric code points of each Unicode
                 * character in the string. While JavaScript uses UCS-2 internally,
                 * this function will convert a pair of surrogate halves (each of which
                 * UCS-2 exposes as separate characters) into a single code point,
                 * matching UTF-16.
                 * @see `punycode.ucs2.encode`
                 * @see <https://mathiasbynens.be/notes/javascript-encoding>
                 * @memberOf punycode.ucs2
                 * @name decode
                 * @param {String} string The Unicode input string (UCS-2).
                 * @returns {Array} The new array of code points.
                 */
                function ucs2decode(string) {
                    var output = [],
                        counter = 0,
                        length = string.length,
                        value,
                        extra;
                    while (counter < length) {
                        value = string.charCodeAt(counter++);
                        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                            // high surrogate, and there is a next character
                            extra = string.charCodeAt(counter++);
                            if ((extra & 0xFC00) == 0xDC00) {
                                // low surrogate
                                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                            } else {
                                // unmatched surrogate; only append this code unit, in case the next
                                // code unit is the high surrogate of a surrogate pair
                                output.push(value);
                                counter--;
                            }
                        } else {
                            output.push(value);
                        }
                    }
                    return output;
                }

                /**
                 * Creates a string based on an array of numeric code points.
                 * @see `punycode.ucs2.decode`
                 * @memberOf punycode.ucs2
                 * @name encode
                 * @param {Array} codePoints The array of numeric code points.
                 * @returns {String} The new Unicode string (UCS-2).
                 */
                function ucs2encode(array) {
                    return map(array, function (value) {
                        var output = '';
                        if (value > 0xFFFF) {
                            value -= 0x10000;
                            output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                            value = 0xDC00 | value & 0x3FF;
                        }
                        output += stringFromCharCode(value);
                        return output;
                    }).join('');
                }

                /**
                 * Converts a basic code point into a digit/integer.
                 * @see `digitToBasic()`
                 * @private
                 * @param {Number} codePoint The basic numeric code point value.
                 * @returns {Number} The numeric value of a basic code point (for use in
                 * representing integers) in the range `0` to `base - 1`, or `base` if
                 * the code point does not represent a value.
                 */
                function basicToDigit(codePoint) {
                    if (codePoint - 48 < 10) {
                        return codePoint - 22;
                    }
                    if (codePoint - 65 < 26) {
                        return codePoint - 65;
                    }
                    if (codePoint - 97 < 26) {
                        return codePoint - 97;
                    }
                    return base;
                }

                /**
                 * Converts a digit/integer into a basic code point.
                 * @see `basicToDigit()`
                 * @private
                 * @param {Number} digit The numeric value of a basic code point.
                 * @returns {Number} The basic code point whose value (when used for
                 * representing integers) is `digit`, which needs to be in the range
                 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
                 * used; else, the lowercase form is used. The behavior is undefined
                 * if `flag` is non-zero and `digit` has no uppercase form.
                 */
                function digitToBasic(digit, flag) {
                    //  0..25 map to ASCII a..z or A..Z
                    // 26..35 map to ASCII 0..9
                    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
                }

                /**
                 * Bias adaptation function as per section 3.4 of RFC 3492.
                 * https://tools.ietf.org/html/rfc3492#section-3.4
                 * @private
                 */
                function adapt(delta, numPoints, firstTime) {
                    var k = 0;
                    delta = firstTime ? floor(delta / damp) : delta >> 1;
                    delta += floor(delta / numPoints);
                    for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
                        delta = floor(delta / baseMinusTMin);
                    }
                    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
                }

                /**
                 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
                 * symbols.
                 * @memberOf punycode
                 * @param {String} input The Punycode string of ASCII-only symbols.
                 * @returns {String} The resulting string of Unicode symbols.
                 */
                function decode(input) {
                    // Don't use UCS-2
                    var output = [],
                        inputLength = input.length,
                        out,
                        i = 0,
                        n = initialN,
                        bias = initialBias,
                        basic,
                        j,
                        index,
                        oldi,
                        w,
                        k,
                        digit,
                        t,

                    /** Cached calculation results */
                    baseMinusT;

                    // Handle the basic code points: let `basic` be the number of input code
                    // points before the last delimiter, or `0` if there is none, then copy
                    // the first basic code points to the output.

                    basic = input.lastIndexOf(delimiter);
                    if (basic < 0) {
                        basic = 0;
                    }

                    for (j = 0; j < basic; ++j) {
                        // if it's not a basic code point
                        if (input.charCodeAt(j) >= 0x80) {
                            error('not-basic');
                        }
                        output.push(input.charCodeAt(j));
                    }

                    // Main decoding loop: start just after the last delimiter if any basic code
                    // points were copied; start at the beginning otherwise.

                    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

                        // `index` is the index of the next character to be consumed.
                        // Decode a generalized variable-length integer into `delta`,
                        // which gets added to `i`. The overflow checking is easier
                        // if we increase `i` as we go, then subtract off its starting
                        // value at the end to obtain `delta`.
                        for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

                            if (index >= inputLength) {
                                error('invalid-input');
                            }

                            digit = basicToDigit(input.charCodeAt(index++));

                            if (digit >= base || digit > floor((maxInt - i) / w)) {
                                error('overflow');
                            }

                            i += digit * w;
                            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                            if (digit < t) {
                                break;
                            }

                            baseMinusT = base - t;
                            if (w > floor(maxInt / baseMinusT)) {
                                error('overflow');
                            }

                            w *= baseMinusT;
                        }

                        out = output.length + 1;
                        bias = adapt(i - oldi, out, oldi == 0);

                        // `i` was supposed to wrap around from `out` to `0`,
                        // incrementing `n` each time, so we'll fix that now:
                        if (floor(i / out) > maxInt - n) {
                            error('overflow');
                        }

                        n += floor(i / out);
                        i %= out;

                        // Insert `n` at position `i` of the output
                        output.splice(i++, 0, n);
                    }

                    return ucs2encode(output);
                }

                /**
                 * Converts a string of Unicode symbols (e.g. a domain name label) to a
                 * Punycode string of ASCII-only symbols.
                 * @memberOf punycode
                 * @param {String} input The string of Unicode symbols.
                 * @returns {String} The resulting Punycode string of ASCII-only symbols.
                 */
                function encode(input) {
                    var n,
                        delta,
                        handledCPCount,
                        basicLength,
                        bias,
                        j,
                        m,
                        q,
                        k,
                        t,
                        currentValue,
                        output = [],

                    /** `inputLength` will hold the number of code points in `input`. */
                    inputLength,

                    /** Cached calculation results */
                    handledCPCountPlusOne,
                        baseMinusT,
                        qMinusT;

                    // Convert the input in UCS-2 to Unicode
                    input = ucs2decode(input);

                    // Cache the length
                    inputLength = input.length;

                    // Initialize the state
                    n = initialN;
                    delta = 0;
                    bias = initialBias;

                    // Handle the basic code points
                    for (j = 0; j < inputLength; ++j) {
                        currentValue = input[j];
                        if (currentValue < 0x80) {
                            output.push(stringFromCharCode(currentValue));
                        }
                    }

                    handledCPCount = basicLength = output.length;

                    // `handledCPCount` is the number of code points that have been handled;
                    // `basicLength` is the number of basic code points.

                    // Finish the basic string - if it is not empty - with a delimiter
                    if (basicLength) {
                        output.push(delimiter);
                    }

                    // Main encoding loop:
                    while (handledCPCount < inputLength) {

                        // All non-basic code points < n have been handled already. Find the next
                        // larger one:
                        for (m = maxInt, j = 0; j < inputLength; ++j) {
                            currentValue = input[j];
                            if (currentValue >= n && currentValue < m) {
                                m = currentValue;
                            }
                        }

                        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                        // but guard against overflow
                        handledCPCountPlusOne = handledCPCount + 1;
                        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                            error('overflow');
                        }

                        delta += (m - n) * handledCPCountPlusOne;
                        n = m;

                        for (j = 0; j < inputLength; ++j) {
                            currentValue = input[j];

                            if (currentValue < n && ++delta > maxInt) {
                                error('overflow');
                            }

                            if (currentValue == n) {
                                // Represent delta as a generalized variable-length integer
                                for (q = delta, k = base;; /* no condition */k += base) {
                                    t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                                    if (q < t) {
                                        break;
                                    }
                                    qMinusT = q - t;
                                    baseMinusT = base - t;
                                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                                    q = floor(qMinusT / baseMinusT);
                                }

                                output.push(stringFromCharCode(digitToBasic(q, 0)));
                                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                                delta = 0;
                                ++handledCPCount;
                            }
                        }

                        ++delta;
                        ++n;
                    }
                    return output.join('');
                }

                /**
                 * Converts a Punycode string representing a domain name or an email address
                 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
                 * it doesn't matter if you call it on a string that has already been
                 * converted to Unicode.
                 * @memberOf punycode
                 * @param {String} input The Punycoded domain name or email address to
                 * convert to Unicode.
                 * @returns {String} The Unicode representation of the given Punycode
                 * string.
                 */
                function toUnicode(input) {
                    return mapDomain(input, function (string) {
                        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                    });
                }

                /**
                 * Converts a Unicode string representing a domain name or an email address to
                 * Punycode. Only the non-ASCII parts of the domain name will be converted,
                 * i.e. it doesn't matter if you call it with a domain that's already in
                 * ASCII.
                 * @memberOf punycode
                 * @param {String} input The domain name or email address to convert, as a
                 * Unicode string.
                 * @returns {String} The Punycode representation of the given domain name or
                 * email address.
                 */
                function toASCII(input) {
                    return mapDomain(input, function (string) {
                        return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
                    });
                }

                /*--------------------------------------------------------------------------*/

                /** Define the public API */
                punycode = {
                    /**
                     * A string representing the current Punycode.js version number.
                     * @memberOf punycode
                     * @type String
                     */
                    'version': '1.4.1',
                    /**
                     * An object of methods to convert from JavaScript's internal character
                     * representation (UCS-2) to Unicode code points, and back.
                     * @see <https://mathiasbynens.be/notes/javascript-encoding>
                     * @memberOf punycode
                     * @type Object
                     */
                    'ucs2': {
                        'decode': ucs2decode,
                        'encode': ucs2encode
                    },
                    'decode': decode,
                    'encode': encode,
                    'toASCII': toASCII,
                    'toUnicode': toUnicode
                };

                /** Expose `punycode` */
                // Some AMD build optimizers, like r.js, check for specific condition patterns
                // like the following:
                if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
                    define('punycode', function () {
                        return punycode;
                    });
                } else if (freeExports && freeModule) {
                    if (module.exports == freeExports) {
                        // in Node.js, io.js, or RingoJS v0.8.0+
                        freeModule.exports = punycode;
                    } else {
                        // in Narwhal or RingoJS v0.7.0-
                        for (key in punycode) {
                            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                        }
                    }
                } else {
                    // in Rhino or a web browser
                    root.punycode = punycode;
                }
            })(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 3: [function (require, module, exports) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        'use strict';

        // If obj.hasOwnProperty has been overridden, then calling
        // obj.hasOwnProperty(prop) will break.
        // See: https://github.com/joyent/node/issues/1707

        function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        module.exports = function (qs, sep, eq, options) {
            sep = sep || '&';
            eq = eq || '=';
            var obj = {};

            if (typeof qs !== 'string' || qs.length === 0) {
                return obj;
            }

            var regexp = /\+/g;
            qs = qs.split(sep);

            var maxKeys = 1000;
            if (options && typeof options.maxKeys === 'number') {
                maxKeys = options.maxKeys;
            }

            var len = qs.length;
            // maxKeys <= 0 means that we should not limit keys count
            if (maxKeys > 0 && len > maxKeys) {
                len = maxKeys;
            }

            for (var i = 0; i < len; ++i) {
                var x = qs[i].replace(regexp, '%20'),
                    idx = x.indexOf(eq),
                    kstr,
                    vstr,
                    k,
                    v;

                if (idx >= 0) {
                    kstr = x.substr(0, idx);
                    vstr = x.substr(idx + 1);
                } else {
                    kstr = x;
                    vstr = '';
                }

                k = decodeURIComponent(kstr);
                v = decodeURIComponent(vstr);

                if (!hasOwnProperty(obj, k)) {
                    obj[k] = v;
                } else if (isArray(obj[k])) {
                    obj[k].push(v);
                } else {
                    obj[k] = [obj[k], v];
                }
            }

            return obj;
        };

        var isArray = Array.isArray || function (xs) {
            return Object.prototype.toString.call(xs) === '[object Array]';
        };
    }, {}], 4: [function (require, module, exports) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        'use strict';

        var stringifyPrimitive = function (v) {
            switch (typeof v) {
                case 'string':
                    return v;

                case 'boolean':
                    return v ? 'true' : 'false';

                case 'number':
                    return isFinite(v) ? v : '';

                default:
                    return '';
            }
        };

        module.exports = function (obj, sep, eq, name) {
            sep = sep || '&';
            eq = eq || '=';
            if (obj === null) {
                obj = undefined;
            }

            if (typeof obj === 'object') {
                return map(objectKeys(obj), function (k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                    if (isArray(obj[k])) {
                        return map(obj[k], function (v) {
                            return ks + encodeURIComponent(stringifyPrimitive(v));
                        }).join(sep);
                    } else {
                        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                    }
                }).join(sep);
            }

            if (!name) return '';
            return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
        };

        var isArray = Array.isArray || function (xs) {
            return Object.prototype.toString.call(xs) === '[object Array]';
        };

        function map(xs, f) {
            if (xs.map) return xs.map(f);
            var res = [];
            for (var i = 0; i < xs.length; i++) {
                res.push(f(xs[i], i));
            }
            return res;
        }

        var objectKeys = Object.keys || function (obj) {
            var res = [];
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
            }
            return res;
        };
    }, {}], 5: [function (require, module, exports) {
        'use strict';

        exports.decode = exports.parse = require('./decode');
        exports.encode = exports.stringify = require('./encode');
    }, { "./decode": 3, "./encode": 4 }], 6: [function (require, module, exports) {
        $__System.register("11", [], function (_export) {
            "use strict";

            _export('default', require('fast-url-parser'));

            return {
                setters: [],
                execute: function () {}
            };
        });
    }, { "fast-url-parser": 1 }] }, {}, [6]);
$__System.register('a', ['10', 'e', 'f', '11'], function (_export, _context) {
  "use strict";

  var Handlebars, Spanan, templates, fastUrlParser;
  return {
    setters: [function (_) {
      Handlebars = _.default;
    }, function (_e2) {
      Spanan = _e2.default;
    }, function (_f) {
      templates = _f.default;
    }, function (_2) {
      fastUrlParser = _2.default;
    }],
    execute: function () {

      /* global chrome */
      var i18n = {
        getMessage() {
          return chrome.i18n.getMessage(...arguments) || (arguments.length <= 0 ? undefined : arguments[0]);
        }
      };

      const AGO_CEILINGS = [[0, '', 1], [120, 'ago1Minute', 1], [3600, 'agoXMinutes', 60], [7200, 'ago1Hour', 1], [86400, 'agoXHours', 3600], [172800, 'agoYesterday', 1], [604800, 'agoXDays', 86400], [4838400, 'ago1Month', 1], [29030400, 'agoXMonths', 2419200], [58060800, 'ago1year', 1], [2903040000, 'agoXYears', 29030400]];

      // Make sure the input string is in lower case
      function latinMap(str) {
        const map = [{ "base": "a", "letters": /[\u00E4]|ae/g }, { "base": "o", "letters": /[\u00F6]|oe/g }, { "base": "u", "letters": /[\u00FC]|ue/g }, { "base": "s", "letters": /[\u00DF]|ss/g }];

        map.forEach(mapper => {
          str = str.replace(mapper.letters, mapper.base);
        });

        return str;
      }

      function countRemovedChars(indexes, lBound, hBound) {
        let count = 0;
        indexes.forEach(index => {
          if (index >= lBound && index <= hBound) ++count;
        });
        return count;
      }

      var helpers = {
        take(array, number) {
          return array.slice(0, number || array.length);
        },

        even(value, options) {
          if (value % 2) {
            return options.fn(this);
          } else {
            return options.inverse(this);
          }
        },

        exists(variable, options) {
          if (typeof variable !== 'undefined') {
            return options.fn(this);
          } else {
            return options.inverse(this);
          }
        },

        emphasis() {
          let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          let q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          let minQueryLength = arguments[2];
          let cleanControlChars = arguments[3];

          if (!q) return text;
          q = q.trim();

          if (text && cleanControlChars) {
            text.replace(/[\u0000-\u001F]/g, ' ');
          }

          var map = Array(text.length),
              tokens = latinMap(q.toLowerCase()).split(/\s+|\.+/).filter(function (t) {
            return t && t.length > 1;
          }),
              lowerText = latinMap(text.toLowerCase()),
              out,
              high = false;

          // Store a list of index(es) where a character has been removed
          var indexes = [],
              patt = /ae|oe|ue|ss/g,
              match = null;

          while (match = patt.exec(text.toLowerCase())) {
            indexes.push(match.index);
          }

          var lastRemovedChars = 0,
              currentRemovedChars = 0;

          tokens.forEach(function (token) {
            var poz = lowerText.indexOf(token);
            while (poz !== -1) {
              //Number of characters have been removed before this token
              lastRemovedChars = countRemovedChars(indexes, 0, poz - 1);
              //Number of characters have been remove in this token
              currentRemovedChars = countRemovedChars(indexes, poz, poz + token.length);
              for (var i = poz + lastRemovedChars; i < poz + token.length + currentRemovedChars + lastRemovedChars; i++) map[i] = true;
              poz = lowerText.indexOf(token, poz + 1);
            }
          });

          out = [];
          var current = '';
          for (var i = 0; i < text.length; i++) {
            if (map[i] && !high) {
              out.push(current);
              current = '';
              current += text[i];
              high = true;
            } else if (!map[i] && high) {
              out.push(current);
              current = '';
              current += text[i];
              high = false;
            } else current += text[i];
          }
          out.push(current);

          return new Handlebars.SafeString(templates.emphasis(out));
        },

        local(key) {
          var args = Array.prototype.slice.call(arguments);
          var name = args.shift();
          return i18n.getMessage.apply(null, [name, args]);
        },

        agoline(ts, options) {
          if (!ts) return '';
          var now = new Date().getTime() / 1000,
              seconds = parseInt(now - ts),
              i = 0,
              slot;

          while (slot = AGO_CEILINGS[i++]) if (seconds < slot[0]) return i18n.getMessage(slot[1], parseInt(seconds / slot[2]));
          return '';
        },

        agoDuration(duration, options) {
          if (!duration) return '';
          var seconds = parseInt(duration),
              i = 0,
              slot;

          while (slot = AGO_CEILINGS[i++]) if (seconds < slot[0]) return i18n.getMessage(slot[1], parseInt(seconds / slot[2]));
          return '';
        },

        distance(meters) {
          if (!meters) {
            return null;
          }

          let distance;
          let unit;
          if (meters < 1000) {
            distance = meters.toFixed(0);
            unit = 'm';
          } else {
            distance = (meters / 1000).toFixed(1);
            unit = 'km';
          }
          return `${distance} ${unit}`;
        },

        concatLocale(prefix, locale) {
          if (!prefix) {
            return locale;
          }

          return `${prefix}_${locale}`;
        }
      };

      function isCliqzAction(url) {
        return url.match(/^cliqz-actions,/);
      }

      // TODO: @chrmod - bring back something like platform quals
      function equals(url1, url2) {
        if (!url1 || !url2) {
          return false;
        }

        if (url1 === url2) {
          return true;
        }

        try {
          if (decodeURI(url1) === decodeURI(url2)) {
            return true;
          }
        } catch (e) {
          return false;
        }

        return false;
      }

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

      function urlStripProtocol(url) {
        let resultUrl = url.toLowerCase();
        const toRemove = ['https://', 'http://', 'www2.', 'www.', 'mobile.', 'mobil.', 'm.'];

        for (let i = 0; i < toRemove.length; i += 1) {
          const part = toRemove[i];
          if (resultUrl.startsWith(part)) {
            resultUrl = resultUrl.substr(part.length);
          }
        }

        // remove trailing slash as well to have all urls in the same format
        if (resultUrl[resultUrl.length - 1] === '/') {
          resultUrl = resultUrl.substr(0, resultUrl.length - 1);
        }

        return resultUrl;
      }

      const getEventTarget = ev => {
        let targetElement = ev.originalTarget;

        if (targetElement.nodeType !== 1) {
          targetElement = targetElement.parentElement;
        }

        return targetElement;
      };

      class Dropdown {
        constructor(element, window, actions) {
          this.onMouseUp = ev => {
            const targetElement = getEventTarget(ev);
            const resultElement = targetElement.closest('.result');

            if (!resultElement) {
              return;
            }

            const href = resultElement.dataset.url;
            const result = this.results.find(href);

            if (!result) {
              return;
            }

            if (ev.button === 2) {
              const subresult = isCliqzAction(href) ? result : result.findResultByUrl(href);

              this.actions.openContextMenu(subresult.serialize(), { x: ev.screenX, y: ev.screenY });
            } else {
              result.click(href, ev);
            }
          };

          this.onMouseMove = ev => {
            const targetElement = getEventTarget(ev);

            if (this.lastTarget === targetElement) {
              return;
            }

            this.lastTarget = targetElement;

            const now = Date.now();
            if (now - this.lastMouseMove < 10) {
              return;
            }
            this.lastMouseMove = now;

            // TODO: merge with onMouseUp handler
            const resultElement = targetElement.closest('.result');

            if (!resultElement) {
              this.clearSelection();
              return;
            }

            if (resultElement.classList.contains('non-selectable')) {
              return;
            }

            const href = resultElement.dataset.url;
            const resultIndex = this.results.selectableResults.findIndex(r => equals(r.url, href));

            this.clearSelection();

            if (resultIndex !== -1) {
              this.selectedIndex = resultIndex;
              this.updateSelection();
            }
          };

          this.rootElement = element;
          this.window = window;
          this.actions = actions;
        }

        init() {
          this.rootElement.innerHTML = templates.main();
          this.dropdownElement.addEventListener('click', this.onMouseUp);
          this.dropdownElement.addEventListener('contextmenu', this.onMouseUp);
          this.dropdownElement.addEventListener('mousemove', this.onMouseMove);
        }

        get dropdownElement() {
          return this.rootElement.querySelector('#cliqz-dropdown');
        }

        get selectedResult() {
          return this.results.get(this.selectedIndex);
        }

        nextResult() {
          if (this.selectedIndex === this.results.length - 1) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex += 1;
          }

          return this.updateSelection();
        }

        previousResult() {
          if (this.selectedIndex <= 0) {
            this.selectedIndex = this.results.length - 1;
          } else {
            this.selectedIndex -= 1;
          }

          return this.updateSelection();
        }

        clearSelection() {
          [...this.rootElement.querySelectorAll('a')].forEach(anchor => anchor.classList.remove('selected'));
        }

        selectResult(result) {
          if (!result) {
            return;
          }
          const el = [...this.rootElement.querySelectorAll('a')].find(a => equals(a.dataset.url, result.url));
          if (!el) {
            return;
          }
          el.classList.add('selected');
        }

        updateSelection() {
          this.clearSelection();
          this.selectResult(this.selectedResult);
          this.actions.reportSelection(this.selectedResult.serialize());
          return this.selectedResult;
        }

        clear() {
          this.dropdownElement.innerHTML = '';
        }

        renderResults(results) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          let urlbarAttributes = _ref.urlbarAttributes,
              extensionId = _ref.extensionId;

          this.selectedIndex = 0;
          this.results = results;

          if (extensionId) {
            this.dropdownElement.dataset.extensionId = extensionId;
          }

          // Render and insert templates
          const html = templates.results({
            historyResults: results.historyResults,
            genericResults: results.genericResults
          });
          this.dropdownElement.innerHTML = html;

          if (urlbarAttributes) {
            this.dropdownElement.style.setProperty('--content-padding-start', `${urlbarAttributes.padding}px`);

            const urlbarBottomLine = this.window.document.createElement('div');
            urlbarBottomLine.setAttribute('class', 'urlbar-bottom-line');
            urlbarBottomLine.style.left = `${urlbarAttributes.left}px`;
            urlbarBottomLine.style.width = `${urlbarAttributes.width}px`;

            this.dropdownElement.prepend(urlbarBottomLine);
          }

          // Nofify results that have been rendered
          results.results.forEach(result => {
            if (!result.didRender) {
              return;
            }
            result.didRender(this.dropdownElement);
          });

          // prevent default behavior of anchor tags
          [...this.rootElement.querySelectorAll('a')].forEach(anchor => {
            anchor.setAttribute('onclick', 'return false;');
            anchor.setAttribute('onmousedown', 'return false;');
          });

          this.selectResult(this.results.firstResult);

          const historyResults = this.rootElement.querySelectorAll('.history');
          if (historyResults.length > 0) {
            historyResults[historyResults.length - 1].classList.add('last');
          }
        }

      }

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

      var _extends$3 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /* eslint no-use-before-define: ["error", { "classes": false }] */
      class BaseResult {
        constructor(rawResult, resultTools) {
          this.rawResult = _extends$3({
            data: {}
          }, rawResult);
          this.resultTools = resultTools;
        }

        get template() {
          return 'generic';
        }

        get query() {
          return this.rawResult.text;
        }

        get urlbarValue() {
          return this.displayUrl || this.url;
        }

        get cssClasses() {
          const classes = [];
          if (this.rawResult.isCluster) {
            classes.push('history-cluster');
          }
          return classes.join(' ');
        }

        get kind() {
          return this.rawResult.data.kind || [''];
        }

        get title() {
          return this.rawResult.title || urlStripProtocol(this.rawResult.url || '');
        }

        get meta() {
          return this.rawResult.meta || {};
        }

        get logo() {
          return this.meta.logo;
        }

        get localSource() {
          const data = this.rawResult.data || {};
          return data.localSource || this.rawResult.style || '';
        }

        get friendlyUrl() {
          return this.rawResult.friendlyUrl;
        }

        get historyUrl() {
          var _cleanMozillaActions = cleanMozillaActions(this.meta.originalUrl || this.url),
              _cleanMozillaActions2 = _slicedToArray(_cleanMozillaActions, 2);

          const url = _cleanMozillaActions2[1];

          return url;
        }

        get isActionSwitchTab() {
          return this.localSource.indexOf('switchtab') !== -1;
        }

        get isBookmark() {
          return this.localSource.indexOf('bookmark') !== -1;
        }

        get isCliqzAction() {
          return this.rawResult.url && this.rawResult.url.indexOf('cliqz-actions') === 0;
        }

        get isAdult() {
          const data = this.rawResult.data || {};
          const extra = data.extra || {};
          return extra.adult;
        }

        get isCalculator() {
          const data = this.rawResult.data || {};
          return data.template === 'calculator';
        }

        get isCurrency() {
          const data = this.rawResult.data || {};
          return data.template === 'currency';
        }

        get isSuggestion() {
          const data = this.rawResult.data || {};
          return data.template === 'suggestion';
        }

        get icon() {
          let icon;

          if (this.isBookmark) {
            icon = 'bookmark';
          }

          if (this.isActionSwitchTab) {
            icon = 'switchtab';
          }

          return icon;
        }

        get url() {
          let url = this.rawResult.url;
          if (this.isAd && this.urlAd) {
            url = this.urlAd;
          }

          if (this.isActionSwitchTab) {
            return `moz-action:switchtab,${JSON.stringify({ url: encodeURIComponent(url) })}`;
          }
          return url;
        }

        get displayUrl() {
          return this.rawResult.url;
        }

        get description() {
          return this.rawResult.description || '';
        }

        get image() {
          return this.rawResult.image;
        }

        get source() {
          return this.meta.domain;
        }

        get updated() {
          const data = this.rawResult.data || {};
          const extra = data.extra || {};
          return extra.last_updated_ago;
        }

        get isAd() {
          const data = this.rawResult.data || {};
          const extra = data.extra || {};
          return extra.is_ad && this.resultTools.assistants.offers.isEnabled;
        }

        get urlAd() {
          const data = this.rawResult.data || {};
          const extra = data.extra || {};
          return extra.url_ad;
        }

        get selectableResults() {
          return [...(this.url ? [this] : [])];
        }

        get allResults() {
          return [...this.selectableResults];
        }

        isUrlMatch(href) {
          return equals(this.url, href);
        }

        findResultByUrl(href) {
          return this.allResults.find(r => r.isUrlMatch(href));
        }

        hasUrl(href) {
          return Boolean(this.findResultByUrl(href));
        }

        get isHistory() {
          return this.kind[0] === 'H';
        }

        get isDeletable() {
          return this.isHistory;
        }

        serialize() {
          const topResult = this.resultTools.results.find(this.url);
          const safeResult = JSON.parse(JSON.stringify(this.rawResult));
          return _extends$3({}, safeResult, {
            kind: this.kind,
            query: this.query,
            index: this.resultTools.results.indexOf(topResult),
            isBookmark: this.isBookmark,
            isDeletable: this.isDeletable,
            historyUrl: this.historyUrl
          });
        }

        click(href, ev) {
          if (this.isUrlMatch(href)) {
            const newTab = ev.altKey || ev.metaKey || ev.ctrlKey || ev.button === 1;

            this.resultTools.actions.openLink(this.url, {
              result: this.serialize(),
              resultOrder: this.resultTools.results.kinds,
              newTab,
              eventType: ev instanceof MouseEvent ? 'mouse' : 'keyboard',
              eventOptions: {
                type: ev.type,
                button: ev.button
              }
            });
          } else {
            this.findResultByUrl(href).click(href, ev);
          }
        }

        /*
         * Lifecycle hook
         */
        didRender() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          const allButThisResult = this.allResults.slice(1);
          allButThisResult.forEach(result => result.didRender(...args));
        }
      }

      class Subresult extends BaseResult {
        constructor(parent, rawResult) {
          super(rawResult, parent.resultTools);
          const parentRawResult = parent.rawResult || {};
          const meta = this.rawResult.meta;
          Object.assign(this.rawResult, {
            kind: parentRawResult.kind,
            type: parentRawResult.type,
            provider: parentRawResult.provider,
            meta: _extends$3({}, meta, {
              logo: meta && meta.logo || parentRawResult.meta && parentRawResult.meta.logo
            })
          }, rawResult);
        }
      }

      class LocalInfoResult extends Subresult {
        get mapImg() {
          return this.rawResult.mapImg;
        }
      }

      class TextResult extends Subresult {
        get textType() {
          return this.rawResult.textType;
        }

        get displayText() {
          return this.rawResult.text;
        }

        click(href, ev) {
          this.resultTools.actions.copyToClipboard(this.rawResult.text);
          const el = ev.target;
          el.classList.add('copied');
          setTimeout(() => {
            el.classList.remove('copied');
          }, 1000);
        }
      }

      class ShareLocationButton extends Subresult {
        get elementId() {
          if (!this._elementId) {
            const id = Math.floor(Math.random() * 1000);
            this._elementId = `result-share-location-${id}`;
          }
          return this._elementId;
        }

        get displayUrl() {
          return this.rawResult.text;
        }

        get className() {
          return this.rawResult.className;
        }

        get elementClassName() {
          return this.rawResult.className;
        }

        didRender(dropdownElement) {
          super.didRender(dropdownElement); // TODO @mai do we need this?

          this.element = dropdownElement.querySelector(`#${this.elementId}`);
          this.spinner = dropdownElement.ownerDocument.createElement('div');
          this.spinner.className = 'spinner';
        }

        click(href) {
          this.element.appendChild(this.spinner);

          const action = JSON.parse(href.split('cliqz-actions,')[1]);
          const actionName = action.actionName;

          const signal = {
            type: 'results',
            action: 'click',
            view: 'local'
          };
          if (actionName === 'allowOnce') {
            signal.target = 'share_location_once';
            this.resultTools.actions.telemetry(signal);
          } else if (actionName === 'allow') {
            signal.target = 'share_location_always';
            this.resultTools.actions.telemetry(signal);
          }

          this.rawResult.onButtonClick(actionName);
        }
      }

      class LocalResult extends Subresult {
        get extra() {
          return this.rawResult.extra || {};
        }

        get address() {
          const address = this.extra.address || '';

          if (!address) {
            return null;
          }

          return new TextResult(this, {
            url: `cliqz-actions,${JSON.stringify({ type: 'location', actionName: 'copyAddress' })}`,
            text: address,
            textType: 'local-address'
          });
        }

        get phoneNumber() {
          const phone = this.extra.phonenumber || '';

          if (!phone) {
            return null;
          }

          return new TextResult(this, {
            url: `cliqz-actions,${JSON.stringify({ type: 'location', actionName: 'copyPhoneNumber' })}`,
            text: phone,
            textType: 'local-phone'
          });
        }

        get mapImg() {
          return this.extra.map_img || '';
        }

        get mapUrl() {
          return this.extra.mu || '';
        }

        get allResults() {
          return [this.mapResult, ...this.textResults];
        }

        get mapResult() {
          return new LocalInfoResult(this, {
            url: this.mapUrl,
            title: 'show-map',
            text: this.rawResult.text,
            mapImg: this.mapImg
          });
        }

        get textResults() {
          if (!this._textResults) {
            this._textResults = [];
            if (this.address) {
              this._textResults.push(this.address);
            }

            if (this.phoneNumber) {
              this._textResults.push(this.phoneNumber);
            }
          }

          return this._textResults;
        }

        get distance() {
          return this.extra.distance;
        }

        get ratingImg() {
          const rating = this.extra.rating;
          if (!rating) {
            return null;
          }

          const ratingStars = Math.max(0, Math.min(Math.round(rating), 5));
          return `${this.resultTools.assistants.settings.CDN_BASEURL}/extension/EZ/richresult/stars${ratingStars}.svg`;
        }

        parseTime(timeStr) {
          // e.g. timeStr: 10.30
          const time = timeStr.split('.');
          return {
            hours: parseInt(time[0], 10) || 0,
            minutes: parseInt(time[1], 10) || 0
          };
        }

        get openingStatus() {
          const openingHours = this.extra.opening_hours;
          if (!openingHours) {
            return null;
          }

          const OPENING_COLORS = {
            open: '#A6A6A6',
            closed: '#E64C66',
            open_soon: '#A6A6A6',
            close_soon: '#E64C66'
          };

          let openStatus;
          const timeInfos = [];

          openingHours.filter(el => el.open && el.close).forEach(el => {
            if (openStatus && openStatus !== 'closed') {
              return;
            }

            timeInfos.push(`${el.open.time.replace('.', ':')}-${el.close.time.replace('.', ':')}`);

            const openTime = this.parseTime(el.open.time);
            const closeTime = this.parseTime(el.close.time);
            const t = new Date();
            const minutes = {
              opening: 60 * openTime.hours + openTime.minutes,
              closing: 60 * closeTime.hours + closeTime.minutes
            };

            const now = 60 * t.getHours() + t.getMinutes();

            openStatus = 'closed';

            if (minutes.opening < minutes.closing) {
              if (minutes.opening <= now && now <= minutes.closing - 60) {
                openStatus = 'open';
              }

              if (minutes.closing - 60 < now && now < minutes.closing) {
                openStatus = 'close_soon';
              }
            } else {
              if (minutes.opening <= now || minutes.closing - 60 >= now) {
                openStatus = 'open';
              }

              if (minutes.closing > now && now > minutes.closing - 60) {
                openStatus = 'close_soon';
              }
            }

            const difference = ((minutes.opening - now) % 1440 + 1440) % 1440;
            if (difference < 60) {
              openStatus = 'open_soon';
            }
          });

          if (openStatus) {
            return {
              color: OPENING_COLORS[openStatus],
              sttText: openStatus,
              timeInfo: timeInfos.join(', ')
            };
          }

          return null;
        }
      }

      class TextResult$1 extends Subresult {
        click(href, ev) {
          this.resultTools.actions.copyToClipboard(this.rawResult.title);
          const el = ev.target;
          el.classList.add('copied');

          const signal = {
            type: 'offrz',
            action: 'click',
            view: 'search',
            target: 'copy'
          };

          this.resultTools.actions.telemetry(signal);
        }
      }

      class OfferResult extends Subresult {
        get _offerData() {
          return this.rawResult.offerData;
        }

        get offerSource() {
          if (!this._offerData.is_injected) {
            return null;
          }

          return new Subresult(this, {
            url: this._offerData.url_ad,
            title: this._offerData.title,
            description: this._offerData.description,
            text: this.rawResult.text,
            data: {
              extra: {
                offers_data: this._offerData,
                is_injected_ad: true
              }
            }
          });
        }

        get thumbnail() {
          return this._offerData.thumbnail;
        }

        get showThumbnail() {
          return this.rawResult.showThumbnail;
        }

        get promoCode() {
          const result = new TextResult$1(this, {
            url: `cliqz-actions,${JSON.stringify({ type: 'offer', actionName: 'copy' })}`,
            text: this.rawResult.text,
            title: this._offerData.promo_code
          });

          return result;
        }

        get allResults() {
          return [this.promoCode, ...(this.offerSource ? [this.offerSource] : [])];
        }
      }

      class OffersResult extends BaseResult {
        constructor(rawResult, resultTools) {
          const offers = resultTools.assistants.offers;

          if (!offers.isEnabled) {
            throw new Error('ignore');
          }

          super(rawResult, resultTools);

          this.style = offers.nonOrganicStyle;
          this.locationEnabled = offers.locationEnabled;
        }

        get template() {
          return this.style === 'rich' ? 'offer' : 'generic';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get displayUrl() {
          return this.url;
        }

        get friendlyUrl() {
          return this.rawResult.friendlyUrl || this.url;
        }

        get _offerData() {
          return this._extra.offers_data || {};
        }

        get offerResult() {
          if (this.style !== 'rich') {
            return null;
          }

          const result = new OfferResult(this, {
            offerData: this._offerData,
            text: this.query
          });

          return result;
        }

        get allResults() {
          return [...super.selectableResults, ...(this.offerResult ? this.offerResult.allResults : [])];
        }
      }

      class NewsResult extends Subresult {
        get logo() {
          if (this.rawResult.showLogo) {
            return super.logo;
          }

          return null;
        }

        get logoDetails() {
          if (this.thumbnail === '') {
            return super.logo;
          }

          return null;
        }

        get thumbnail() {
          return this.rawResult.thumbnail;
        }

        get tweetCount() {
          return this.rawResult.tweet_count;
        }

        get publishedAt() {
          return this.rawResult.creation_time;
        }

        get friendlyUrl() {
          return this.rawResult.domain;
        }
      }

      class VideoResult extends Subresult {
        get friendlyUrl() {
          return this.rawResult.friendlyUrl;
        }

        get videoViews() {
          return this.rawResult.views;
        }

        secondsToDuration(s) {
          if (!s) {
            return null;
          }

          const date = new Date(null);
          date.setSeconds(s);
          let result = date.toISOString().substr(11, 8);
          if (result.indexOf('00:') === 0) {
            result = result.substr(3, 5);
          }

          return result;
        }

        get duration() {
          return this.secondsToDuration(this.rawResult.duration);
        }

        get isVideo() {
          return true;
        }

        get thumbnail() {
          return this.rawResult.thumbnail;
        }

        get logo() {
          if (this.rawResult.isSingleVideo) {
            return super.logo;
          }

          return null;
        }
      }

      var _extends$2 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      function getDeepResults(rawResult, type) {
        const deepResults = rawResult.data && rawResult.data.deepResults || [];
        const deepResultsOfType = deepResults.find(dr => dr.type === type) || {
          links: []
        };
        return deepResultsOfType.links || [];
      }

      class ImageResult extends Subresult {
        get thumbnail() {
          return this.rawResult.thumbnail;
        }
      }

      class InternalResult extends Subresult {}

      class SocialResult extends Subresult {}

      class AnchorResult extends Subresult {}

      class GenericResult extends BaseResult {
        constructor(rawResult, resultTools) {
          super(rawResult, resultTools);
          this.internalResultsLimit = 4;

          this.topResultProps = {
            kind: rawResult.kind,
            type: rawResult.type,
            provider: rawResult.provider
          };

          const offers = this.resultTools.assistants.offers;
          if (offers) {
            this.offerStyle = offers.organicStyle;
            this.offerEnabled = offers.isEnabled;
            this.offerLocationEnabled = offers.locationEnabled;
          }
        }

        // cannot limit here - inheriting results may like to have filtering
        get internalResults() {
          if (this.isAskingForLocation) {
            // Hide these buttons when asking for location sharing
            return [];
          }
          const deepLinks = getDeepResults(this.rawResult, 'buttons');

          return deepLinks.map(_ref => {
            let url = _ref.url,
                title = _ref.title;
            return new InternalResult(this, _extends$2({}, this.topResultProps, {
              url,
              title,
              text: this.query
            }));
          });
        }

        get socialResults() {
          const deepLinks = getDeepResults(this.rawResult, 'social');

          return deepLinks.map(_ref2 => {
            let url = _ref2.url,
                image = _ref2.image;
            return new SocialResult(this, _extends$2({}, this.topResultProps, {
              url,
              image,
              text: this.query
            }));
          });
        }

        get imageResults() {
          const deepLinks = getDeepResults(this.rawResult, 'images');
          return deepLinks.map(_ref3 => {
            let image = _ref3.image,
                extra = _ref3.extra;
            return new ImageResult(this, _extends$2({}, this.topResultProps, {
              url: extra && extra.original_image || image,
              thumbnail: image,
              text: this.query
            }));
          });
        }

        get anchorResults() {
          const deepLinks = getDeepResults(this.rawResult, 'simple_links');
          return deepLinks.map(_ref4 => {
            let url = _ref4.url,
                title = _ref4.title;
            return new AnchorResult(this, _extends$2({}, this.topResultProps, {
              url,
              title,
              text: this.query
            }));
          });
        }

        get newsResults() {
          var _this = this;

          const deepLinks = getDeepResults(this.rawResult, 'news');
          return deepLinks.map(function () {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            let url = _ref5.url,
                title = _ref5.title;
            var _ref5$extra = _ref5.extra;
            let extra = _ref5$extra === undefined ? {} : _ref5$extra;
            return new NewsResult(_this, _extends$2({}, _this.topResultProps, {
              url,
              domain: extra.domain,
              title,
              thumbnail: extra.thumbnail,
              description: extra.description,
              creation_time: extra.creation_timestamp,
              tweet_count: extra.tweet_count,
              showLogo: _this.url && fastUrlParser.parse(_this.url).hostname.replace(/^(www\.)/, '') !== fastUrlParser.parse(url).hostname.replace(/^(www\.)/, ''),
              text: _this.query
            }));
          });
        }

        get videoResults() {
          const deepLinks = getDeepResults(this.rawResult, 'videos');
          return deepLinks.map(_ref6 => {
            let url = _ref6.url,
                title = _ref6.title,
                extra = _ref6.extra;
            return new VideoResult(this, _extends$2({}, this.topResultProps, {
              url,
              title,
              thumbnail: extra.thumbnail,
              duration: extra.duration,
              views: extra.views,
              text: this.query
            }));
          });
        }

        /**
         * To be used with the `with` statement in the template
         */
        get shareLocationButtonsWrapper() {
          return {
            internalResults: this.shareLocationButtons,
            internalResultsLimit: 3,
            logo: null
          };
        }

        get isAskingForLocation() {
          const extra = this.rawResult.data.extra || {};
          return (extra.no_location || false) && this.resultTools.assistants.location.isAskingForLocation;
        }

        get selectableResults() {
          return [...super.selectableResults, ...this.shareLocationButtons, ...this.newsResults.slice(0, 3), ...this.videoResults.slice(0, 3), ...this.internalResults.slice(0, this.internalResultsLimit)];
        }

        get allResults() {
          return [...super.allResults, ...this.socialResults, ...this.imageResults, ...this.anchorResults, ...(this.localResult ? [...this.localResult.allResults] : []), ...(this.offerResult ? [...this.offerResult.allResults] : [])];
        }

        get shareLocationButtons() {
          const locationAssistant = this.resultTools.assistants.location;

          if (!this._shareLocationButtons) {
            this._shareLocationButtons = !this.isAskingForLocation ? [] : locationAssistant.actions.map(action => {
              let additionalClassName = '';
              if (action.actionName === 'allowOnce') {
                additionalClassName = 'location-allow-once';
              } else if (action.actionName === 'allow') {
                additionalClassName = 'location-always-show';
              }

              const result = new ShareLocationButton(this, {
                title: action.title,
                url: `cliqz-actions,${JSON.stringify({ type: 'location', actionName: action.actionName })}`,
                text: this.rawResult.text,
                className: additionalClassName,
                onButtonClick: actionName => {
                  locationAssistant[actionName](this.query, this.rawResult).then(_ref7 => {
                    let snippet = _ref7.snippet,
                        locationState = _ref7.locationState;

                    const newRawResult = Object.assign({}, this.rawResult);
                    newRawResult.data.extra = Object.assign({}, newRawResult.data.extra, snippet.extra);

                    // Update Location assistante state
                    Object.assign(this.resultTools.assistants.location, locationState);

                    const newResult = new this.constructor(newRawResult, this.resultTools);
                    this.resultTools.actions.replaceResult(this, newResult);
                  });
                }
              });

              return result;
            });
          }
          return this._shareLocationButtons;
        }

        get localResult() {
          const extra = this.rawResult.data.extra || {};
          if (!extra.address && !extra.phonenummber) {
            return null;
          }

          return new LocalResult(this, {
            extra,
            text: this.query
          });
        }

        get offerResult() {
          if (this._offerResult) {
            return this._offerResult;
          }

          const extra = this.rawResult.data.extra || {};
          const offerData = extra.offers_data || {};

          if (this.isAd || !offerData.is_injected) {
            return null;
          }

          const result = new OfferResult(this, {
            offerData,
            showThumbnail: this.offerStyle === 'rich',
            text: this.query
          });

          this._offerResult = result;

          return result;
        }
      }

      class CalculatorResult extends BaseResult {
        get template() {
          return 'calculator';
        }

        get displayUrl() {
          return this.rawResult.text;
        }

        get query() {
          return (this.rawResult.data.extra || {}).expression || this.rawResult.text;
        }

        get result() {
          return this.rawResult.title || (this.rawResult.data.extra || {}).answer;
        }

        get url() {
          return `cliqz-actions,${JSON.stringify({ type: 'calculator', actionName: 'copy' })}`;
        }

        get allResults() {
          return [this];
        }

        get selectableResults() {
          return [];
        }

        didRender($dropdown) {
          this.$calculator = $dropdown.querySelector('.calculator');
          this.$tooltip = this.$calculator.querySelector('.tooltip');
        }

        click() {
          this.resultTools.actions.copyToClipboard(this.result);
          this.$tooltip.innerText = i18n.getMessage('Copied');
          setTimeout(() => {
            this.$tooltip.style.display = 'none';
          }, 1000);
        }
      }

      class ExpandButton extends BaseResult {
        get displayUrl() {
          return this.rawResult.text;
        }

        get show() {
          return this.rawResult.show;
        }

        click() {
          this.rawResult.onClick();
        }
      }

      class TimeInfo extends BaseResult {
        get time() {
          return this.rawResult.time;
        }

        get location() {
          return this.rawResult.location;
        }

        get expression() {
          return this.rawResult.expression;
        }

        get timeZone() {
          return this.rawResult.timeZone;
        }
      }

      class TimeResult extends GenericResult {
        constructor(rawResult) {
          let allResultsFlat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          super(rawResult, allResultsFlat);

          this.rowsLimit = 3;
        }

        get template() {
          return 'time';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get _timeInfo() {
          return this._extra.time_data || {};
        }

        get mainResult() {
          const mainData = this._timeInfo.main || {};
          return new TimeInfo({
            time: mainData.time,
            location: mainData.mapped_location,
            expression: mainData.expression,
            timeZone: mainData.tz_info
          });
        }

        get timezoneResults() {
          const tzData = this._timeInfo.cities_by_tz;

          if (!tzData) {
            return [];
          }

          const data = tzData.map(tz => new TimeInfo({
            time: tz.time_info.time,
            location: tz.cities.join(', '),
            expression: tz.time_info.expression,
            timeZone: tz.time_info.tz_info
          }));

          return data;
        }

        get expandButton() {
          return new ExpandButton({
            title: 'general_expand_button',
            url: `cliqz-actions,${JSON.stringify({ type: 'time', actionName: 'expand' })}`,
            text: this.rawResult.text,
            show: this.rowsLimit < this.timezoneResults.length,
            onClick: () => {
              const signal = {
                type: 'results',
                action: 'click',
                view: 'EntityTime',
                target: 'show_more'
              };
              this.resultTools.actions.telemetry(signal);

              this.rowsLimit = this.timezoneResults.length;
              this.resultTools.actions.replaceResult(this, this);
            }
          });
        }

        get selectableResults() {
          return [];
        }

        get allResults() {
          return [this.expandButton];
        }
      }

      class CurrencyResult extends BaseResult {
        get template() {
          return 'currency';
        }

        get url() {
          return `cliqz-actions,${JSON.stringify({ type: 'currency', actionName: 'copy' })}`;
        }

        get toAmount() {
          return this.rawResult.data.extra.toAmount.main;
        }

        get fromAmount() {
          return this.rawResult.data.extra.fromAmount;
        }

        get toCurrency() {
          return this.rawResult.data.extra.toCurrency;
        }

        get toCurrencyName() {
          const extra = this.rawResult.data.extra;
          return extra.toCurrencyName || this.toCurrency;
        }

        // FIXME: symbols not displayed (encoding issue?)
        get toSymbol() {
          return this.rawResult.data.extra.toSymbol || this.rawResult.data.extra.toCurrency;
        }

        get fromCurrency() {
          return this.rawResult.data.extra.fromCurrency;
        }

        // FIXME: symbols not displayed (encoding issue?)
        get fromSymbol() {
          // API v2 uses 'formCurrency' instead of 'fromCurrency'
          return this.rawResult.data.extra.formCurrency || this.rawResult.data.extra.fromCurrency;
        }

        get multiplyer() {
          return this.rawResult.data.extra.multiplyer;
        }

        get conversionRate() {
          return this.rawResult.data.extra.mConversionRate;
        }

        get allResults() {
          return [this.sourceWrapper, this];
        }

        get selectableResults() {
          return [];
        }

        didRender($dropdown) {
          this.$currency = $dropdown.querySelector('.currency');
          this.$tooltip = this.$currency.querySelector('.tooltip');
        }

        updateTooltip(text) {
          this.$tooltip.innerText = text;
        }

        hideTooltip() {
          this.$tooltip.style.display = 'none';
        }

        click(href, ev) {
          if (href === this.rawResult.url) {
            this.sourceWrapper.click(href, ev);
            return;
          }

          this.resultTools.actions.copyToClipboard(this.toAmount);
          this.$tooltip.innerText = i18n.getMesasge('Copied');
          setTimeout(() => {
            this.$tooltip.style.display = 'none';
          }, 1000);
        }

        get sourceWrapper() {
          return new Subresult(this, {
            url: this.rawResult.url,
            title: 'source',
            text: this.query,
            meta: this.rawResult.meta
          });
        }
      }

      class WeatherResult extends BaseResult {
        get template() {
          return 'weather';
        }

        get todayDate() {
          return this.rawResult.data.extra.todayWeekday;
        }

        get today() {
          const extra = this.rawResult.data.extra;
          return {
            date: extra.todayWeekday,
            icon: extra.todayIcon,
            minTemp: extra.todayMin,
            maxTemp: extra.todayMax
          };
        }

        get forecast() {
          return this.rawResult.data.extra.forecast;
        }

        get allResults() {
          return [this, ...this.selectableResults];
        }

        get selectableResults() {
          return [];
        }
      }

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

      class DialingCodeResult extends GenericResult {
        get template() {
          return 'dialing-code';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get countryName() {
          return this._extra.country_name;
        }

        get dialingCode() {
          return this._extra.dialing_prefix;
        }

        get countryFlag() {
          return this._extra.flag_uri;
        }

        get phoneIcon() {
          return `${config.baseURL}dropdown/images/phone-icon.svg`;
        }

        get selectableResults() {
          return [];
        }
      }

      class LottoButton extends Subresult {
        get displayUrl() {
          return this.rawResult.text;
        }

        get elementId() {
          return this.rawResult.elementId;
        }

        click() {
          this.rawResult.onClick();
        }
      }

      class LottoResult extends GenericResult {
        get template() {
          return 'lotto';
        }

        get currentLottoType() {
          const extra = this.rawResult.data.extra || {};
          return extra.lotto_type || 'unknown';
        }

        get lottoList() {
          const extra = this.rawResult.data.extra || {};
          const key = Object.keys(extra.lotto_list)[0];
          return extra.lotto_list[key] || {};
        }

        get locale() {
          return 'de-DE'; // Force to show German only
        }

        get localeDate() {
          const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
          const date = this.lottoList.date;
          if (date) {
            return new Date(date).toLocaleDateString(this.locale, options);
          }
          return '';
        }

        get lottoResults() {
          let results = [];

          switch (this.currentLottoType) {
            case '6aus49':
              results = this.get6aus49Results;
              break;
            case 'eurojackpot':
              results = this.getEurojackpotResults;
              break;
            case 'keno':
              results = this.getKenoResults;
              break;
            case 'glueckspirale':
              results = this.getGlueckspiraleResults;
              break;
            default:
              results = [];
          }
          return results;
        }

        get get6aus49Results() {
          const lotto = this.lottoList.lotto;
          const spiel77 = this.lottoList.spiel77;
          const super6 = this.lottoList.super6;

          return [{
            result: lotto.gewinnzahlen.concat(lotto.superzahl),
            classNames: 'circle highlight-last',
            description: 'lotto_superzahl'
          }, {
            result: ['Spiel77'].concat(spiel77.gewinnzahlen.split('')),
            classNames: 'normal bold-first'
          }, {
            result: ['Super6'].concat(super6.gewinnzahlen.split('')),
            classNames: 'normal bold-first'
          }];
        }

        get getEurojackpotResults() {
          const ej = this.lottoList.ej;

          return [{
            result: ej.gewinnzahlen,
            classNames: 'circle',
            description: 'lotto_5aus50'
          }, {
            result: ej.zwei_aus_acht,
            classNames: 'circle',
            description: 'lotto_2aus8'
          }];
        }

        get getKenoResults() {
          const keno = this.lottoList.keno;
          const plus5 = this.lottoList.plus5;

          return [{
            result: keno.gewinnzahlen.slice(0, 10)
          }, {
            result: keno.gewinnzahlen.slice(10, 20)
          }, {
            result: ['plus5'].concat(plus5.gewinnzahlen.split('')),
            classNames: 'normal bold-first'
          }];
        }

        getTableData(rawData) {
          const gs = rawData;
          const dataSet = [];
          const romanNumber = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
          const nKlasse = 7;

          for (let i = 0; i < nKlasse; i += 1) {
            const klasse = romanNumber[i];
            const currenRow = gs.gewinnzahlen[i];
            const gewinnzahlen = typeof currenRow === 'string' ? [currenRow] : currenRow;
            let monatlich = '';

            const currency = gs.waehrung === 'EUR' ? i18n.getMessage('lotto_euro') : '';
            const rente = i18n.getMessage('lotto_rente');

            const anzahl = parseFloat(gs.quoten[i].anzahl).toLocaleString(this.locale, { minimumFractionDigits: 1 }).concat('x');
            let quote = parseFloat(gs.quoten[i].quote).toLocaleString(this.locale, { minimumFractionDigits: 2 }).concat(currency);

            if (gs.quoten[i].text) {
              monatlich = gs.quoten[i].text.split(' ')[0];
              quote = [quote].concat(`(${monatlich}${currency} ${rente})`);
            }

            dataSet.push([klasse, gewinnzahlen, anzahl, quote]);
          }

          return dataSet;
        }

        get getGlueckspiraleResults() {
          const gs = this.lottoList.gs;

          const lottoResults = [{
            result: gs.gewinnzahlen[6][0].split(''),
            description: 'lotto_gewinnklasse7'
          }, {
            result: gs.gewinnzahlen[6][1].split(''),
            description: 'lotto_gewinnklasse7'
          }];

          if (this.showTable) {
            lottoResults.push({
              table: {
                data: this.getTableData(gs),
                columns: ['lotto_klasse', 'lotto_gewinnzahlen', 'lotto_gewinne', 'lotto_quoten']
              }
            });
          }
          return lottoResults;
        }

        get showExpandButton() {
          // Temporarily disable the 'expand' button
          return false; // return this.currentLottoType === 'glueckspirale';
        }

        get internalResults() {
          const buttons = [];
          if (this.showExpandButton && !this.showTable) {
            buttons.push(new LottoButton(this, {
              title: 'lotto_expand',
              url: `cliqz-actions,${JSON.stringify({ type: 'lotto', actionName: 'expand' })}`,
              text: this.rawResult.text,
              elementId: 'lotto-expand-button',
              onClick: () => {
                this.showTable = true;
                this.resultTools.actions.replaceResult(this, this);
              }
            }));
          }
          return [...buttons, ...super.internalResults];
        }
      }

      var _extends$4 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      class HistoryResult extends Subresult {
        get isHistory() {
          return true;
        }
      }

      class HistoryCluster extends GenericResult {
        get isHistory() {
          return true;
        }

        get template() {
          return 'history';
        }

        get description() {
          return null;
        }

        get results() {
          if (!this.historyResults) {
            this.historyResults = this.rawResult.data.urls.map(rawResult => new HistoryResult(this, _extends$4({}, rawResult, {
              url: rawResult.href,
              bulletLogo: true,
              isCluster: true,
              text: this.rawResult.text
            })));
          }
          return this.historyResults;
        }

        get internalResults() {
          const resultUrls = this.results.map(r => r.url);
          return super.internalResults.filter(result => !resultUrls.some(url => equals(result.url, url)));
        }

        get selectableResults() {
          return [...(this.url ? [this] : []), ...this.newsResults, ...this.results, ...this.internalResults.slice(0, this.internalResultsLimit)];
        }

        get internalResultsLogo() {
          const internalResults = this.internalResults || [];
          return internalResults.length > 0 ? this.logo : null;
        }

        // only include news in history cluster for new mixer
        get newsResults() {
          return super.newsResults;
        }

        // only include lotto in history cluster for new mixer
        get lottoResults() {
          const lottoResult = new LottoResult(this.rawResult, this.resultTools);
          return lottoResult.lottoResults;
        }
      }

      class SessionsResult extends BaseResult {
        get elementId() {
          return `result-sessions-${this.rawResult.text}`;
        }

        get template() {
          return 'sessions';
        }

        get displayUrl() {
          return this.rawResult.text;
        }

        get isHistory() {
          return true;
        }

        get isDeletable() {
          return false;
        }
      }

      class AdultAnswerResult extends Subresult {
        get displayUrl() {
          return null;
        }

        get urlbarValue() {
          return this.query;
        }

        get className() {
          return this.rawResult.className;
        }

        click(href) {
          const action = JSON.parse(href.split('cliqz-actions,')[1]);
          const adultAssistant = this.resultTools.assistants.adult;
          const actionName = action.actionName;
          adultAssistant[actionName]();
        }
      }

      class AdultQuestionResult extends BaseResult {
        get template() {
          return 'adult-question';
        }

        get internalResults() {
          return this.resultTools.assistants.adult.actions.map(action => {
            let additionalClassName = '';

            if (action.actionName === 'allowOnce') {
              additionalClassName = 'adult-allow-once';
            }

            const result = new AdultAnswerResult(this, {
              title: action.title,
              url: `cliqz-actions,${JSON.stringify({ type: 'adult', actionName: action.actionName })}`,
              text: this.rawResult.text,
              className: additionalClassName
            });
            return result;
          });
        }

        get selectableResults() {
          return this.internalResults;
        }
      }

      class SupplementarySearchResult extends BaseResult {
        constructor() {
          var _temp;

          return _temp = super(...arguments), this.isNotAutocompleteable = true, _temp;
        }

        isUrlMatch(href) {
          // we need to override isUrlMatch as in some cases the value of
          // 'href' is the bare query and not a full url. Please see the comment
          // from click
          return href === this.suggestion || href === this.url;
        }

        get template() {
          return 'search';
        }

        // it is not history but makes the background color to be light gray
        get isHistory() {
          // it appears as history if its a default search result or
          // as a regular result if its a suggestion
          return this.defaultSearchResult;
        }

        get isDeletable() {
          return false;
        }

        get icon() {
          return 'search';
        }

        get displayText() {
          return this.rawResult.text;
        }

        get suggestion() {
          return this.rawResult.data.suggestion;
        }

        get query() {
          return this.suggestion;
        }

        get engine() {
          return this.rawResult.data.extra.searchEngineName;
        }

        get url() {
          return this.rawResult.data.extra.mozActionUrl;
        }

        get defaultSearchResult() {
          return this.rawResult.provider === 'instant';
        }

        get displayUrl() {
          return this.rawResult.data.suggestion;
        }
      }

      const LIMIT = {
        ligaEZ1Game: {
          rowsLimit: 2,
          maxRowsLimit: 10
        },
        liveTicker: {
          rowsLimit: 2,
          maxRowsLimit: 10
        },
        ligaEZTable: {
          rowsLimit: 6,
          maxRowsLimit: 20
        },
        ligaEZGroup: {
          rowsLimit: 4,
          maxRowsLimit: 4
        }
      };

      class ExpandButton$1 extends BaseResult {
        get displayUrl() {
          return this.rawResult.text;
        }

        get show() {
          return this.rawResult.show;
        }

        click() {
          this.rawResult.onClick();
        }
      }

      class LiveTickerResult extends Subresult {
        get locale() {
          return i18n.getMessage('locale_lang_code');
        }

        getTime(gameTime) {
          const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          };

          const date = gameTime;

          if (date) {
            return new Date(Number(date) * 1000).toLocaleDateString(this.locale, options);
          }

          return '';
        }

        get host() {
          return this.rawResult.match.HOST;
        }

        get hostLogo() {
          return this.rawResult.match.hostLogo;
        }

        get scored() {
          return this.rawResult.match.scored || '- : -';
        }

        get guest() {
          return this.rawResult.match.GUESS;
        }

        get guestLogo() {
          return this.rawResult.match.guestLogo;
        }

        get gameTime() {
          return this.getTime(this.rawResult.match.gameUtcTimestamp);
        }

        get liveOn() {
          return this.rawResult.match.tvChannelLogo;
        }

        get isLive() {
          return this.rawResult.match.isLive;
        }

        get leagueLogo() {
          return this.rawResult.match.leagueLogo;
        }

        get leagueName() {
          return this.rawResult.match.leagueName;
        }
      }

      class LiveTickerRound extends GenericResult {
        get round() {
          return this.rawResult.round;
        }

        get isCurrent() {
          return this.rawResult.isCurrent;
        }

        get allResults() {
          return this.rawResult.week.matches.map(match => new LiveTickerResult(this, {
            match,
            text: this.rawResult.text,
            url: match.live_url
          }));
        }
      }

      class TableItemResult extends BaseResult {
        get rank() {
          return this.rawResult.item.rank;
        }

        get logo() {
          return this.rawResult.item.logo;
        }

        get club() {
          return this.rawResult.item.club;
        }

        get played() {
          return this.rawResult.item.SP;
        }

        get won() {
          return this.rawResult.item.S;
        }

        get lost() {
          return this.rawResult.item.N;
        }

        get drawn() {
          return this.rawResult.item.U;
        }

        get goals() {
          return this.rawResult.item.goals;
        }

        get goalsDiff() {
          return this.rawResult.item.TD;
        }

        get points() {
          return this.rawResult.item.PKT;
        }

        get qualified() {
          return `${this.resultTools.assitants.settings.baseURL}dropdown/images/champions-league.png`;
        }
      }

      class TableResult extends BaseResult {
        get tableHeader() {
          const infoList = this.rawResult.infoList;

          return {
            rank: infoList.rank,
            club: infoList.club,
            played: infoList.SP,
            won: infoList.S,
            lost: infoList.N,
            drawn: infoList.U,
            goals: infoList.goals,
            goalsDiff: infoList.TD,
            points: infoList.PKT
          };
        }

        get tableData() {
          const results = this.rawResult.ranking.map(item => new TableItemResult({
            item
          }, this.resultTools));

          return results;
        }

        get table() {
          return {
            header: this.tableHeader,
            data: this.tableData,
            rowsLimit: this.rawResult.itemsLimit
          };
        }
      }

      class TableGroup extends BaseResult {
        get groupName() {
          return this.rawResult.groupName;
        }

        get ligaEZTable() {
          return this.rawResult.ligaEZTable;
        }
      }

      class SoccerSubResult extends Subresult {}

      class SoccerResult extends GenericResult {

        constructor() {
          super(...arguments);
          this.internalResultsLimit = 4;
          this.newsResultsLimit = 2;
          this.itemsLimit = this.rowsLimit;
        }

        get rowsLimit() {
          return LIMIT[this.currentSubTemplate].rowsLimit;
        }

        get maxRowsLimit() {
          return LIMIT[this.currentSubTemplate].maxRowsLimit;
        }

        get template() {
          return 'soccer';
        }

        get currentSubTemplate() {
          return this.rawResult.data.template;
        }

        get currentPartial() {
          return `partials/soccer/${this.currentSubTemplate}`;
        }

        get extra() {
          return this.rawResult.data.extra || {};
        }

        get allResults() {
          return [...this.selectableResults, ...this.soccerResults, this.expandButton, this.poweredByResult];
        }

        get selectableResults() {
          return [...(this.url ? [this] : []), ...super.internalResults.slice(0, this.internalResultsLimit), ...(this.subResult ? [this.subResult] : []), ...super.newsResults.slice(0, this.newsResultsLimit)];
        }

        get soccerResults() {
          let results = [];

          switch (this.currentSubTemplate) {
            case 'ligaEZ1Game':
              results = this.ligaEZ1Game;
              break;
            case 'liveTicker':
              results = this.liveTicker.map(round => round.allResults).reduce((arr, el) => [...arr, ...el], []);
              break;
            case 'ligaEZTable':
            case 'ligaEZGroup':
              results = [];
              break;
            default:
              results = [];
          }

          return results;
        }

        get ligaEZ1Game() {
          const results = this.extra.matches.map(match => new LiveTickerResult(this, {
            match,
            text: this.query,
            url: match.live_url
          }));

          return results;
        }

        get liveTicker() {
          const results = this.extra.weeks.map(week => new LiveTickerRound({
            round: week.round,
            isCurrent: week.isCurrent,
            week,
            text: this.query
          }, this.resultTools));

          return results;
        }

        get ligaEZTable() {
          const result = new TableResult({
            ranking: this.extra.ranking,
            infoList: this.extra.info_list,
            itemsLimit: this.itemsLimit
          }, this.resultTools);

          return result.table;
        }

        get ligaEZGroup() {
          const results = this.extra.groups.map(item => new TableGroup({
            groupName: item.group,
            group: item,
            ligaEZTable: new TableResult({
              ranking: item.ranking,
              infoList: item.info_list,
              itemsLimit: this.itemsLimit
            }, this.resultTools).table
          }, this.resultTools));

          return results;
        }

        get subResult() {
          if (!this.extra.url || !this.extra.title) {
            return null;
          }

          return new SoccerSubResult(this, {
            url: this.extra.url,
            title: this.extra.title,
            text: this.query
          });
        }

        get newsAvailable() {
          return super.newsResults.length > 0;
        }

        get numberOfNews() {
          if (super.newsResults.length >= this.newsResultsLimit) {
            return this.newsResultsLimit;
          }

          return super.newsResults.length;
        }

        get expandButton() {
          return new ExpandButton$1({
            title: 'soccer_expand_button',
            url: `cliqz-actions,${JSON.stringify({ type: 'soccer', actionName: 'expand' })}`,
            text: this.rawResult.text,
            show: this.itemsLimit < this.maxRowsLimit,
            onClick: () => {
              const signal = {
                type: 'results',
                action: 'click',
                view: 'SoccerEZ',
                target: 'show_more'
              };
              this.resultTools.actions.telemetry(signal);

              this.itemsLimit = this.maxRowsLimit;
              this.resultTools.actions.replaceResult(this, this);
            }
          }, this.resultTools);
        }

        get poweredByResult() {
          return new Subresult(this, {
            url: 'http://www.kicker.de/',
            title: 'soccer_powered_by',
            text: this.query
          });
        }

        get groupTableHeader() {
          return this.extra.group_name;
        }

        didRender($dropdown) {
          super.didRender($dropdown);
          const $allLabels = $dropdown.querySelectorAll('.soccer .dropdown-tab');
          $allLabels.forEach(label => {
            label.addEventListener('click', e => {
              e.preventDefault();
              e.stopPropagation();

              [...$allLabels].forEach(l => l.classList.remove('checked'));
              e.target.classList.add('checked');

              const signal = {
                type: 'results',
                action: 'click',
                view: 'SoccerEZ',
                target: 'tab',
                index: [...$allLabels].indexOf(e.target)
              };
              this.resultTools.actions.updateHeight();
              this.resultTools.actions.telemetry(signal);
            });
          });
        }
      }

      class FlightResult extends BaseResult {
        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get _flightDetails() {
          return this._extra.depart_arrive || {};
        }

        get template() {
          return 'flight';
        }

        get oldApi() {
          return this.rawResult.data.old_api;
        }

        get name() {
          return this._extra.flight_name;
        }

        get flightStatus() {
          return this._extra.flight_status;
        }

        get status() {
          return this._extra.status;
        }

        get statusColor() {
          return this._extra.status_color;
        }

        get statusDetail() {
          return this._extra.status_detail;
        }

        get planeIcon() {
          return this._extra.plane_icon;
        }

        get planePosition() {
          return this._extra.plane_position;
        }

        get showDepartureScheduledTime() {
          return this.departure.scheduledTime !== this.departure.actualTime;
        }

        get showArrivalScheduledTime() {
          return this.arrival.scheduledTime !== this.arrival.actualTime;
        }

        get earlyDeparture() {
          return this.departure.actualTime < this.departure.scheduledTime;
        }

        get lateDeparture() {
          return this.departure.actualTime > this.departure.scheduledTime;
        }

        get earlyArrival() {
          return this.arrival.actualTime < this.arrival.scheduledTime;
        }

        get lateArrival() {
          return this.arrival.actualTime > this.arrival.scheduledTime;
        }

        get departure() {
          const depart = this._flightDetails['0'];
          return {
            locationName: depart.location_name,
            locationShortcut: depart.location_short_name,
            timeColor: depart.time_color,
            scheduledTime: depart.scheduled_time,
            scheduledDate: depart.scheduled_date,
            actualTime: depart.estimate_actual_time,
            terminal: depart.terminal_full,
            gate: depart.gate_full
          };
        }

        get arrival() {
          const arrival = this._flightDetails['1'];
          return {
            locationName: arrival.location_name,
            locationShortcut: arrival.location_short_name,
            actualLocation: arrival.actual_location_short_name || '',
            timeColor: arrival.time_color,
            scheduledTime: arrival.scheduled_time,
            scheduledDate: arrival.scheduled_date,
            actualTime: arrival.estimate_actual_time,
            terminal: arrival.terminal_full,
            gate: arrival.gate_full
          };
        }

        get selectableResults() {
          return [];
        }

        get allResults() {
          return [...(this.url ? [this] : [])];
        }
      }

      class SingleVideoResult extends GenericResult {
        get template() {
          return 'single-video';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get videoResult() {
          const richData = this._extra.rich_data || {};

          return new VideoResult(this, {
            url: this.url,
            title: this.title,
            thumbnail: richData.thumbnail,
            duration: richData.duration,
            views: richData.views,
            isSingleVideo: true,
            text: this.query,
            friendlyUrl: this.friendlyUrl
          });
        }
      }

      class MovieInfo extends Subresult {
        get name() {
          return this.rawResult.name;
        }

        get nVote() {
          return this.rawResult.nVote;
        }
      }

      class MovieResult extends GenericResult {
        get template() {
          return 'movie';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get _richData() {
          return this._extra.rich_data || {};
        }

        get imageUrl() {
          return this._richData.image;
        }

        get ratingInfo() {
          const rating = this._richData.rating;

          if (!rating) {
            return null;
          }

          const img = rating.img;
          const score = rating.val;
          const scale = rating.scale;

          if (img && score && scale) {
            return {
              img,
              score: Math.round(score * 10) / 10,
              scale
            };
          }

          return null;
        }

        // TODO: remove this and replace by new data from big machine
        get reviewsInfo() {
          const rating = this._richData.rating || {};
          const nVote = rating.nVote;

          if (nVote) {
            return new MovieInfo(this, {
              url: `${this.rawResult.url}/ratings`,
              nVote,
              title: 'cinema_movie_reviews'
            });
          }

          return null;
        }

        get directorInfo() {
          const director = this._richData.director || {};

          if (director.info) {
            return new MovieInfo(this, {
              url: director.info.url,
              title: director.title,
              name: director.info.name
            });
          }

          return null;
        }

        get trailerInfo() {
          if (!this._richData.categories) {
            return null;
          }

          const trailerResult = this._richData.categories.find(result => result.title === 'Trailer');

          if (trailerResult) {
            return new MovieInfo(this, {
              url: trailerResult.url,
              title: 'cinema_movie_trailer'
            });
          }

          return null;
        }

        get starsInfo() {
          const cast = this._richData.cast || {};

          if (cast.length) {
            return cast.slice(0, 3).map(star => new MovieInfo(this, {
              url: star.url,
              title: star.name
            }));
          }

          return null;
        }

        // TODO: remove this and replace by new data from big machine
        get fullCastInfo() {
          return new MovieInfo(this, {
            url: `${this.rawResult.url}/fullcredits`,
            title: 'cinema_movie_full_cast'
          });
        }

        get allResults() {
          return [...super.allResults, ...(this.directorInfo ? [this.directorInfo] : []), ...(this.trailerInfo ? [this.trailerInfo] : []), ...(this.reviewsInfo ? [this.reviewsInfo] : []), this.fullCastInfo];
        }
      }

      var _extends$5 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      class ExpandButton$2 extends BaseResult {
        get displayUrl() {
          return this.rawResult.text;
        }

        get show() {
          return this.rawResult.show;
        }

        click() {
          this.rawResult.onClick();
        }
      }

      class ShowTimeInfo extends Subresult {
        get displayTime() {
          return this.rawResult.showTime.start_at.substr(11, 5);
        }

        get is3D() {
          return this.rawResult.showTime.is_3d;
        }

        get movieLanguage() {
          return this.rawResult.showTime.language;
        }
      }

      class ShowTimeRow extends GenericResult {
        get resultType() {
          return this.rawResult.type;
        }

        get cinemaInfo() {
          if (this.resultType === 'movie') {
            return {
              name: this.rawResult.row.name,
              distance: this.rawResult.row.distance ? this.rawResult.row.distance : null,
              address: this.rawResult.row.address
            };
          }

          return null;
        }

        get movieInfo() {
          if (this.resultType === 'cinema') {
            return {
              title: this.rawResult.row.title || ''
            };
          }

          return null;
        }

        get showTimes() {
          return this.rawResult.row.showtimes.map(showTime => new ShowTimeInfo(this, {
            showTime,
            url: showTime.booking_link,
            text: this.rawResult.text
          }), this.resultTools);
        }
      }

      class ShowTimeDate extends GenericResult {
        get showDate() {
          return this.rawResult.date;
        }

        get rows() {
          return this.rawResult.rows.map(row => new ShowTimeRow({
            row,
            type: this.rawResult.type,
            text: this.rawResult.text
          }, this.resultTools));
        }
      }

      class CinemaResult extends GenericResult {
        constructor() {
          var _temp;

          return _temp = super(...arguments), this.showTimesLimit = 2, this.maxRowsLimit = 5, _temp;
        }

        get template() {
          return 'cinema';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get _apiData() {
          return this._extra.data || {};
        }

        get _cinemaData() {
          return this._apiData.cinema || {};
        }

        get _richData() {
          return this._extra.rich_data || {};
        }

        get showTimesInfo() {
          const showDates = this._apiData.showdates;

          if (!showDates) {
            return [];
          }
          const results = showDates.map(date => new ShowTimeDate({
            date: date.date,
            rows: this.isMovieEZ ? date.cinema_list : date.movie_list,
            type: this.isMovieEZ ? 'movie' : 'cinema',
            text: this.query
          }, this.resultTools));

          return results;
        }

        get isShowtimesAvailable() {
          return this.showTimesInfo.length > 0;
        }

        get isMovieEZ() {
          return this.rawResult.data.template === 'movie-showtimes';
        }

        get headerTitle() {
          if (this.isMovieEZ) {
            return this._apiData.title;
          }

          return this._cinemaData.name;
        }

        get cityName() {
          return this._apiData.city;
        }

        get localResult() {
          const cinemaInfo = this._cinemaData;
          if (cinemaInfo.mu && cinemaInfo.address) {
            return new LocalResult(this, {
              extra: cinemaInfo,
              text: this.query
            });
          }

          return null;
        }

        get shareLocationButtonsWrapper() {
          return _extends$5({}, super.shareLocationButtonsWrapper, {
            localePrefix: 'cinema'
          });
        }

        get showTimeResults() {
          const results = this.showTimesInfo.map(date => date.rows.map(row => row.showTimes)).reduce((arr, el) => [...arr, ...el], []).reduce((arr, el) => [...arr, ...el], []);

          return results;
        }

        get expandButton() {
          return new ExpandButton$2({
            title: 'general_expand_button',
            url: `cliqz-actions,${JSON.stringify({ type: 'cinema', actionName: 'expand' })}`,
            text: this.rawResult.text,
            show: this.showTimesLimit < this.maxRowsLimit,
            onClick: () => {
              const signal = {
                type: 'results',
                action: 'click',
                view: 'EntityMovie',
                target: 'show_more'
              };
              this.resultTools.actions.telemetry(signal);

              this.showTimesLimit = this.maxRowsLimit;
              this.resultTools.actions.replaceResult(this, this);
            }
          }, this.resultTools);
        }

        get selectableResults() {
          if (this.isMovieEZ) {
            return [...this.shareLocationButtons];
          }

          return super.selectableResults;
        }

        get allResults() {
          return [...super.allResults, ...this.showTimeResults, this.expandButton];
        }

        didRender($dropdown) {
          super.didRender($dropdown);
          const $allLabels = $dropdown.querySelectorAll('.movie-cinema .dropdown-tab');
          $allLabels.forEach(label => {
            label.addEventListener('click', e => {
              e.preventDefault();
              e.stopPropagation();

              [...$allLabels].forEach(l => l.classList.remove('checked'));
              e.target.classList.add('checked');

              const signal = {
                type: 'results',
                action: 'click',
                view: 'EntityMovie',
                target: 'tab',
                index: [...$allLabels].indexOf(e.target)
              };
              this.resultTools.actions.updateHeight();
              this.resultTools.actions.telemetry(signal);
            });
          });
        }
      }

      class NavigateToResult extends BaseResult {
        get template() {
          return 'navigate-to';
        }

        // it is not history but makes the background color to be light gray
        get isHistory() {
          return true;
        }

        get isDeletable() {
          return false;
        }

        get isActionSwitchTab() {
          return false;
        }

        get kind() {
          return ['navigate-to'];
        }

        get url() {
          return this.rawResult.data.extra.mozActionUrl;
        }

        get displayUrl() {
          return this.rawResult.text;
        }
      }

      class NewsStoryResult extends GenericResult {
        get template() {
          return 'news-story';
        }

        get _extra() {
          return this.rawResult.data.extra || {};
        }

        get _richData() {
          return this._extra.rich_data || {};
        }

        get selectableResults() {
          return [this.newsStoryResult];
        }

        get newsStoryResult() {
          return new NewsResult(this, {
            url: this.url,
            domain: this._richData.source_name,
            title: this.title,
            thumbnail: this._extra.media,
            description: this.description,
            creation_time: this._richData.discovery_timestamp,
            showLogo: true,
            text: this.query
          });
        }
      }

      var _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      class ResultFactory {
        static create(rawResult, resultTools) {
          let Constructor = GenericResult;
          if (['custom', 'noResult'].indexOf(rawResult.data.template) >= 0) {
            throw new Error('ignore');
          }

          if (rawResult.data.template === 'calculator') {
            Constructor = CalculatorResult;
          }

          if (rawResult.data.template === 'currency') {
            Constructor = CurrencyResult;
          }

          if (rawResult.data.template === 'time') {
            Constructor = TimeResult;
          }

          if (rawResult.data.template === 'weatherEZ' || rawResult.data.template === 'weatherAlert') {
            Constructor = WeatherResult;
          }

          if (rawResult.data.template === 'dialing-code') {
            Constructor = DialingCodeResult;
          }

          if (rawResult.data.template === 'lotto') {
            Constructor = LottoResult;
          }

          if (rawResult.data.template === 'offer') {
            Constructor = OffersResult;
          }

          if (rawResult.data.template === 'movie') {
            Constructor = MovieResult;
          }

          if (rawResult.data.template === 'movie-showtimes' || rawResult.data.template === 'cinemaEZ') {
            Constructor = CinemaResult;
          }

          if (rawResult.data.template === 'sessions') {
            Constructor = SessionsResult;
          }

          if (rawResult.data.template === 'ligaEZ1Game' || rawResult.data.template === 'ligaEZTable' || rawResult.data.template === 'ligaEZGroup' || rawResult.data.template === 'liveTicker') {
            Constructor = SoccerResult;
          }

          if (rawResult.data.template === 'news') {
            Constructor = NewsStoryResult;
          }

          if (rawResult.data.template === 'single-video') {
            Constructor = SingleVideoResult;
          }

          if (rawResult.data.template === 'flight') {
            Constructor = FlightResult;
          }

          if (rawResult.data.urls) {
            Constructor = HistoryCluster;
          }

          if (rawResult.type === 'cliqz-pattern' && !rawResult.data.urls) {
            throw new Error('ignore');
          }

          if (rawResult.type === 'navigate-to') {
            Constructor = NavigateToResult;
          }

          if (rawResult.type === 'supplementary-search') {
            Constructor = SupplementarySearchResult;
          }

          return new Constructor(rawResult, resultTools);
        }

        static createAll(rawResults, resultTools) {
          return rawResults.reduce((resultList, rawResult) => {
            try {
              const result = ResultFactory.create(rawResult, resultTools);

              resultList.push(result);
            } catch (e) {
              if (['duplicate', 'ignore'].indexOf(e.message) >= 0) {
                // it is expected to have duplicates
              } else {
                throw e;
              }
            }

            return resultList;
          }, []);
        }
      }

      class Results {
        constructor(_ref, resultTools) {
          let query = _ref.query,
              rawResults = _ref.rawResults,
              queriedAt = _ref.queriedAt;

          this.replaceResult = (oldResult, newResult) => {
            const index = this.indexOf(oldResult);
            this.results.splice(index, 1, newResult);
            this.resultTools.actions.rerender();
          };

          this.resultTools = _extends$1({}, resultTools, {
            actions: _extends$1({}, resultTools.actions, {
              replaceResult: this.replaceResult
            }),
            results: this
          });

          this.query = query;
          this.queriedAt = queriedAt;

          this.results = ResultFactory.createAll(rawResults, this.resultTools);

          if (this.hasAdultResults) {
            if (this.resultTools.assistants.adult.isBlockingAdult) {
              this.results = this.results.filter(result => !result.isAdult);
            }

            if (this.resultTools.assistants.adult.isAskingForAdult) {
              this.addAdultQuestionResult(resultTools);
            }
          }

          if (this.hasCalculatorResults || this.hasCurrencyResults) {
            // we should filter out suggestions if we have calculatpr or currency results
            this.results = this.results.filter(result => !result.isSuggestion);
          }

          this.displayedAt = Date.now();
        }

        get selectableResults() {
          return this.results.reduce((all, result) => [...all, ...result.selectableResults], []);
        }

        get length() {
          return this.selectableResults.length;
        }

        get firstResult() {
          return this.get(0);
        }

        get lastResult() {
          return this.get(this.selectableResults.length - 1);
        }

        get(index) {
          return this.selectableResults[index];
        }

        find(href) {
          return this.results.find(result => {
            if (!result.hasUrl) {
              return false;
            }
            return result.hasUrl(href);
          });
        }

        findSelectable(href) {
          return this.selectableResults.find(r => equals(r.url, href));
        }

        indexOf(result) {
          return this.results.findIndex(r => r === result);
        }

        get kinds() {
          return this.results.map(result => result.kind);
        }

        prepend(result) {
          this.results.unshift(result);
        }

        insertAt(result, index) {
          this.results = [...this.results.slice(0, index), result, ...this.results.slice(index)];
        }

        addAdultQuestionResult() {
          const result = new AdultQuestionResult({
            text: this.query
          }, this.resultTools);
          const insertAtIndex = this.firstResult && this.firstResult.defaultSearchResult ? 1 : 0;
          this.insertAt(result, insertAtIndex);
        }

        get hasHistory() {
          return this.results.some(r => r.isHistory);
        }

        get hasAdultResults() {
          return this.results.some(r => r.isAdult);
        }

        get hasCalculatorResults() {
          return this.results.some(r => r.isCalculator);
        }

        get hasCurrencyResults() {
          return this.results.some(r => r.isCurrency);
        }

        get isAutocompleteable() {
          // isNotAutocompleteable is a little awkward name, but it is
          // set like that so we have not regression for results that lack
          // that property - thus instead of checking is results isAutocompleteable
          // we check if it is not isNotAutocompleteable
          return this.firstResult && !this.firstResult.isNotAutocompleteable;
        }

        get lastHistoryIndex() {
          for (let i = this.results.length - 1; i >= 0; i -= 1) {
            if (this.results[i].isHistory) {
              return i + 1;
            }
          }
          return 0;
        }

        get historyResults() {
          return this.results.slice(0, this.lastHistoryIndex);
        }

        get genericResults() {
          return this.results.slice(this.lastHistoryIndex);
        }
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      function _asyncToGenerator(fn) {
        return function () {
          var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);var value = info.value;
              } catch (error) {
                reject(error);return;
              }if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(function (value) {
                  step("next", value);
                }, function (err) {
                  step("throw", err);
                });
              }
            }return step("next");
          });
        };
      }

      function _objectWithoutProperties(obj, keys) {
        var target = {};for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
        }return target;
      }

      const stylesheet = document.createElement('link');
      stylesheet.setAttribute('rel', 'stylesheet');
      stylesheet.setAttribute('href', `./styles/styles.css?r=${Date.now()}`);
      document.head.appendChild(stylesheet);

      Handlebars.partials = templates;
      Object.keys(helpers).forEach(helperName => {
        Handlebars.registerHelper(helperName, helpers[helperName]);
      });

      const spanan = new Spanan(_ref => {
        let action = _ref.action,
            rest = _objectWithoutProperties(_ref, ['action']);

        window.postMessage(_extends({}, rest, {
          target: 'cliqz-renderer',
          action
        }), '*');
      });
      const importedActions = spanan.createProxy();

      const container$ = document.querySelector('#container');
      const dropdown = new Dropdown(container$, window, importedActions);
      dropdown.init();

      let previousResults;
      let maximumHeight;

      const adjustScroll = height => {
        if (height > maximumHeight) {
          window.document.body.style.overflowY = 'auto';
        } else {
          window.document.body.style.overflowY = 'hidden';
        }
      };

      const updateHeight = () => {
        const height = container$.scrollHeight;
        adjustScroll(height);
        importedActions.setHeight(height);
      };

      const rerender = () => {
        dropdown.renderResults(previousResults);
        updateHeight();
      };

      const exportedActions = {
        clear() {
          dropdown.clear();
        },

        nextResult() {
          const result = dropdown.nextResult();
          return {
            url: result.url,
            urlbarValue: result.urlbarValue
          };
        },

        previousResult() {
          const result = dropdown.previousResult();
          return {
            url: result.url,
            urlbarValue: result.urlbarValue
          };
        },

        handleEnter(_ref2) {
          let newTab = _ref2.newTab;

          const result = dropdown.selectedResult;
          result.click(result.url, {
            metaKey: newTab,
            type: 'keyup'
          });
        },

        render(_ref3) {
          let rawResults = _ref3.rawResults,
              query = _ref3.query,
              queriedAt = _ref3.queriedAt,
              sessionId = _ref3.sessionId;

          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          let assistantStates = _ref4.assistantStates,
              urlbarAttributes = _ref4.urlbarAttributes,
              maxHeight = _ref4.maxHeight;
          return _asyncToGenerator(function* () {
            maximumHeight = maxHeight;

            // Recreating assistants from state and actions
            const assistants = {};
            Object.keys(assistantStates).forEach(function (assistantName) {
              const assistantState = assistantStates[assistantName];
              const assistant = _extends({}, assistantState);
              (assistantState.actions || []).forEach(function (_ref5) {
                let actionName = _ref5.actionName;

                assistant[actionName] = function () {
                  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  return importedActions[`${assistantName}Action`](actionName, ...args);
                };
              });
              assistants[assistantName] = assistant;
            });

            const resultTools = {
              assistants,
              actions: {
                rerender,
                updateHeight,
                telemetry: importedActions.telemetry,
                openLink: importedActions.openLink,
                copyToClipboard: importedActions.copyToClipboard
              }
            };

            // on Firefox 60 there is some wierd optiomization that results in reversed
            // the order of the runloop when innerHTML is called. This happens only for
            // first batch of renders. having nextTick here, makes the problem go away
            yield new Promise(function (resolve) {
              return window.setTimeout(resolve);
            }, 0);

            const results = new Results({
              query,
              rawResults,
              queriedAt
            }, resultTools);

            previousResults = results;

            dropdown.renderResults(results, {
              urlbarAttributes,
              extensionId: assistantStates.settings.id
            });

            const height = container$.scrollHeight;

            adjustScroll(height);

            const firstResult = results.firstResult;
            return {
              result: dropdown.selectedResult && dropdown.selectedResult.serialize(),
              height,
              autocompletion: {
                url: results.isAutocompleteable ? firstResult.url : '',
                title: results.isAutocompleteable ? firstResult.title : ''
              },
              renderedSessionId: sessionId
            };
          })();
        }
      };

      spanan.export(exportedActions, {
        respond(response, request) {
          window.postMessage({
            type: 'response',
            uuid: request.uuid,
            response
          }, '*');
        }
      });

      window.addEventListener('message', ev => {
        const message = ev.data;

        if (message.type === 'response') {
          spanan.dispatch(message);
          return;
        }

        if (message.target === 'cliqz-dropdown') {
          spanan.handleMessage(message);
        }
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