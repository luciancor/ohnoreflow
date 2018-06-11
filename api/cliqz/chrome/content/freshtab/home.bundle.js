!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], ["27","10"], false, function($__System) {
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
(function (global, factory) {
	if ('function' === "function" && true) {
		$__System.registerDynamic('f', ['10', '11'], false, function ($__require, $__exports, $__module) {
			if (typeof factory === 'function') {
				return factory.call($__exports, $__exports, $__require('10'), $__require('11'));
			} else {
				return factory;
			}
		});
	} else if (typeof exports !== "undefined") {
		factory(exports, require('react'), require('prop-types'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.React, global.propTypes);
		global.ToggleDisplay = mod.exports;
	}
})(this, function (exports, _react, _propTypes) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = ToggleDisplay;

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	ToggleDisplay.propTypes = {
		tag: _propTypes2.default.string,
		hide: _propTypes2.default.bool,
		show: _propTypes2.default.bool,
		if: _propTypes2.default.bool
	};

	ToggleDisplay.defaultProps = {
		tag: 'span'
	};

	var propsToRemove = Object.keys(ToggleDisplay.propTypes);

	function isDefined(val) {
		return val != null;
	}

	function shouldHide(props) {
		if (isDefined(props.show)) {
			return !props.show;
		} else if (isDefined(props.hide)) {
			return props.hide;
		}
		return false;
	}

	function pickProps(props) {
		var newProps = Object.assign({}, props);
		propsToRemove.forEach(function (prop) {
			if (prop in newProps) {
				delete newProps[prop];
			}
		});
		return newProps;
	}

	function ToggleDisplay(props) {
		if (props.if === false) {
			return null;
		}

		var style = {};
		if (shouldHide(props)) {
			style.display = 'none';
		}

		var Tag = props.tag;
		// prevent our props from being leaked down onto the children
		var newProps = pickProps(props);

		return _react2.default.createElement(Tag, _extends({ style: style }, newProps));
	}
});
$__System.registerDynamic('12', ['13'], true, function ($__require, exports, module) {
  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var emptyFunction = $__require('13');

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction;

  if ('production' !== 'production') {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  module.exports = warning;
});
$__System.registerDynamic('14', ['15', '12', '16'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  if ('production' !== 'production') {
    var invariant = $__require('15');
    var warning = $__require('12');
    var ReactPropTypesSecret = $__require('16');
    var loggedTypeFailures = {};
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ('production' !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
          }
        }
      }
    }
  }

  module.exports = checkPropTypes;
});
$__System.registerDynamic('17', ['13', '15', '12', '16', '14'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var emptyFunction = $__require('13');
  var invariant = $__require('15');
  var warning = $__require('12');

  var ReactPropTypesSecret = $__require('16');
  var checkPropTypes = $__require('14');

  module.exports = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if ('production' !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          } else if ('production' !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunction.thatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        'production' !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        'production' !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          warning(false, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
          return emptyFunction.thatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
});
$__System.registerDynamic("13", [], true, function ($__require, exports, module) {
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  var global = this || self,
      GLOBAL = global;
  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;
});
$__System.registerDynamic('15', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var global = this || self,
      GLOBAL = global;
  var validateFormat = function validateFormat(format) {};

  if ('production' !== 'production') {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  module.exports = invariant;
});
$__System.registerDynamic('16', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;
});
$__System.registerDynamic('18', ['13', '15', '16'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var emptyFunction = $__require('13');
  var invariant = $__require('15');
  var ReactPropTypesSecret = $__require('16');

  module.exports = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    };
    shim.isRequired = shim;
    function getShim() {
      return shim;
    };
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
});
$__System.registerDynamic('11', ['17', '18'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  if ('production' !== 'production') {
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

    var isValidElement = function (object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = $__require('17')(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = $__require('18')();
  }
});
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ('function' === 'function' && 'object' === 'object' && true) {
		// register as 'classnames', consistent with npm package name
		$__System.registerDynamic('19', [], false, function ($__require, $__exports, $__module) {
			return (function () {
				return classNames;
			}).call(this);
		});
	} else {
		window.classNames = classNames;
	}
})();
$__System.registerDynamic('1a', ['1b'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    /**
     * Hide all tooltip
     * @trigger ReactTooltip.hide()
     */
    target.hide = function (target) {
      dispatchGlobalEvent(_constant2.default.GLOBAL.HIDE, { target: target });
    };

    /**
     * Rebuild all tooltip
     * @trigger ReactTooltip.rebuild()
     */
    target.rebuild = function () {
      dispatchGlobalEvent(_constant2.default.GLOBAL.REBUILD);
    };

    /**
     * Show specific tooltip
     * @trigger ReactTooltip.show()
     */
    target.show = function (target) {
      dispatchGlobalEvent(_constant2.default.GLOBAL.SHOW, { target: target });
    };

    target.prototype.globalRebuild = function () {
      if (this.mount) {
        this.unbindListener();
        this.bindListener();
      }
    };

    target.prototype.globalShow = function (event) {
      if (this.mount) {
        // Create a fake event, specific show will limit the type to `solid`
        // only `float` type cares e.clientX e.clientY
        var e = { currentTarget: event.detail.target };
        this.showTooltip(e, true);
      }
    };

    target.prototype.globalHide = function (event) {
      if (this.mount) {
        var hasTarget = event && event.detail && event.detail.target && true || false;
        this.hideTooltip({ currentTarget: hasTarget && event.detail.target }, hasTarget);
      }
    };
  };

  var _constant = $__require('1b');

  var _constant2 = _interopRequireDefault(_constant);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
    // Compatibale with IE
    // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
    var event = void 0;

    if (typeof window.CustomEvent === 'function') {
      event = new window.CustomEvent(eventName, { detail: opts });
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, false, true);
      event.detail = opts;
    }

    window.dispatchEvent(event);
  }; /**
      * Static methods for react-tooltip
      */
});
$__System.registerDynamic('1b', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {

    GLOBAL: {
      HIDE: '__react_tooltip_hide_event',
      REBUILD: '__react_tooltip_rebuild_event',
      SHOW: '__react_tooltip_show_event'
    }
  };
});
$__System.registerDynamic('1c', ['1b'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    target.prototype.bindWindowEvents = function (resizeHide) {
      // ReactTooltip.hide
      window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
      window.addEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide, false);

      // ReactTooltip.rebuild
      window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
      window.addEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild, false);

      // ReactTooltip.show
      window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
      window.addEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow, false);

      // Resize
      if (resizeHide) {
        window.removeEventListener('resize', this.onWindowResize);
        window.addEventListener('resize', this.onWindowResize, false);
      }
    };

    target.prototype.unbindWindowEvents = function () {
      window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
      window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
      window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
      window.removeEventListener('resize', this.onWindowResize);
    };

    /**
     * invoked by resize event of window
     */
    target.prototype.onWindowResize = function () {
      if (!this.mount) return;
      this.hideTooltip();
    };
  };

  var _constant = $__require('1b');

  var _constant2 = _interopRequireDefault(_constant);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
});
$__System.registerDynamic('1d', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    target.prototype.isCustomEvent = function (ele) {
      var event = this.state.event;

      return event || !!ele.getAttribute('data-event');
    };

    /* Bind listener for custom event */
    target.prototype.customBindListener = function (ele) {
      var _this = this;

      var _state = this.state,
          event = _state.event,
          eventOff = _state.eventOff;

      var dataEvent = ele.getAttribute('data-event') || event;
      var dataEventOff = ele.getAttribute('data-event-off') || eventOff;

      dataEvent.split(' ').forEach(function (event) {
        ele.removeEventListener(event, customListener);
        customListener = checkStatus.bind(_this, dataEventOff);
        ele.addEventListener(event, customListener, false);
      });
      if (dataEventOff) {
        dataEventOff.split(' ').forEach(function (event) {
          ele.removeEventListener(event, _this.hideTooltip);
          ele.addEventListener(event, _this.hideTooltip, false);
        });
      }
    };

    /* Unbind listener for custom event */
    target.prototype.customUnbindListener = function (ele) {
      var _state2 = this.state,
          event = _state2.event,
          eventOff = _state2.eventOff;

      var dataEvent = event || ele.getAttribute('data-event');
      var dataEventOff = eventOff || ele.getAttribute('data-event-off');

      ele.removeEventListener(dataEvent, customListener);
      if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
    };
  };

  /**
   * Custom events to control showing and hiding of tooltip
   *
   * @attributes
   * - `event` {String}
   * - `eventOff` {String}
   */

  var checkStatus = function checkStatus(dataEventOff, e) {
    var show = this.state.show;
    var id = this.props.id;

    var dataIsCapture = e.currentTarget.getAttribute('data-iscapture');
    var isCapture = dataIsCapture && dataIsCapture === 'true' || this.props.isCapture;
    var currentItem = e.currentTarget.getAttribute('currentItem');

    if (!isCapture) e.stopPropagation();
    if (show && currentItem === 'true') {
      if (!dataEventOff) this.hideTooltip(e);
    } else {
      e.currentTarget.setAttribute('currentItem', 'true');
      setUntargetItems(e.currentTarget, this.getTargetArray(id));
      this.showTooltip(e);
    }
  };

  var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
    for (var i = 0; i < targetArray.length; i++) {
      if (currentTarget !== targetArray[i]) {
        targetArray[i].setAttribute('currentItem', 'false');
      } else {
        targetArray[i].setAttribute('currentItem', 'true');
      }
    }
  };

  var customListener = void 0;
});
$__System.registerDynamic('1e', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    target.prototype.isCapture = function (currentTarget) {
      var dataIsCapture = currentTarget.getAttribute('data-iscapture');
      return dataIsCapture && dataIsCapture === 'true' || this.props.isCapture || false;
    };
  };
});
$__System.registerDynamic('1f', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    target.prototype.getEffect = function (currentTarget) {
      var dataEffect = currentTarget.getAttribute('data-effect');
      return dataEffect || this.props.effect || 'float';
    };
  };
});
$__System.registerDynamic("20", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target) {
    target.prototype.bindRemovalTracker = function () {
      var _this = this;

      var MutationObserver = getMutationObserverClass();
      if (MutationObserver == null) return;

      var observer = new MutationObserver(function (mutations) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mutation = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = mutation.removedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var element = _step2.value;

                if (element === _this.state.currentTarget) {
                  _this.hideTooltip();
                  return;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
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
      });

      observer.observe(window.document, { childList: true, subtree: true });

      this.removalTracker = observer;
    };

    target.prototype.unbindRemovalTracker = function () {
      if (this.removalTracker) {
        this.removalTracker.disconnect();
        this.removalTracker = null;
      }
    };
  };

  /**
   * Tracking target removing from DOM.
   * It's nessesary to hide tooltip when it's target disappears.
   * Otherwise, the tooltip would be shown forever until another target
   * is triggered.
   *
   * If MutationObserver is not available, this feature just doesn't work.
   */

  // https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
  var getMutationObserverClass = function getMutationObserverClass() {
    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  };
});
$__System.registerDynamic('21', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (e, target, node, place, effect, offset) {
    var tipWidth = node.clientWidth;
    var tipHeight = node.clientHeight;

    var _getCurrentOffset = getCurrentOffset(e, target, effect),
        mouseX = _getCurrentOffset.mouseX,
        mouseY = _getCurrentOffset.mouseY;

    var defaultOffset = getDefaultPosition(effect, target.clientWidth, target.clientHeight, tipWidth, tipHeight);

    var _calculateOffset = calculateOffset(offset),
        extraOffset_X = _calculateOffset.extraOffset_X,
        extraOffset_Y = _calculateOffset.extraOffset_Y;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var _getParent = getParent(node),
        parentTop = _getParent.parentTop,
        parentLeft = _getParent.parentLeft;

    // Get the edge offset of the tooltip


    var getTipOffsetLeft = function getTipOffsetLeft(place) {
      var offset_X = defaultOffset[place].l;
      return mouseX + offset_X + extraOffset_X;
    };
    var getTipOffsetRight = function getTipOffsetRight(place) {
      var offset_X = defaultOffset[place].r;
      return mouseX + offset_X + extraOffset_X;
    };
    var getTipOffsetTop = function getTipOffsetTop(place) {
      var offset_Y = defaultOffset[place].t;
      return mouseY + offset_Y + extraOffset_Y;
    };
    var getTipOffsetBottom = function getTipOffsetBottom(place) {
      var offset_Y = defaultOffset[place].b;
      return mouseY + offset_Y + extraOffset_Y;
    };

    // Judge if the tooltip has over the window(screen)
    var outsideVertical = function outsideVertical() {
      var result = false;
      var newPlace = void 0;
      if (getTipOffsetTop('left') < 0 && getTipOffsetBottom('left') <= windowHeight && getTipOffsetBottom('bottom') <= windowHeight) {
        result = true;
        newPlace = 'bottom';
      } else if (getTipOffsetBottom('left') > windowHeight && getTipOffsetTop('left') >= 0 && getTipOffsetTop('top') >= 0) {
        result = true;
        newPlace = 'top';
      }
      return { result: result, newPlace: newPlace };
    };
    var outsideLeft = function outsideLeft() {
      var _outsideVertical = outsideVertical(),
          result = _outsideVertical.result,
          newPlace = _outsideVertical.newPlace; // Deal with vertical as first priority


      if (result && outsideHorizontal().result) {
        return { result: false }; // No need to change, if change to vertical will out of space
      }
      if (!result && getTipOffsetLeft('left') < 0 && getTipOffsetRight('right') <= windowWidth) {
        result = true; // If vertical ok, but let out of side and right won't out of side
        newPlace = 'right';
      }
      return { result: result, newPlace: newPlace };
    };
    var outsideRight = function outsideRight() {
      var _outsideVertical2 = outsideVertical(),
          result = _outsideVertical2.result,
          newPlace = _outsideVertical2.newPlace;

      if (result && outsideHorizontal().result) {
        return { result: false }; // No need to change, if change to vertical will out of space
      }
      if (!result && getTipOffsetRight('right') > windowWidth && getTipOffsetLeft('left') >= 0) {
        result = true;
        newPlace = 'left';
      }
      return { result: result, newPlace: newPlace };
    };

    var outsideHorizontal = function outsideHorizontal() {
      var result = false;
      var newPlace = void 0;
      if (getTipOffsetLeft('top') < 0 && getTipOffsetRight('top') <= windowWidth && getTipOffsetRight('right') <= windowWidth) {
        result = true;
        newPlace = 'right';
      } else if (getTipOffsetRight('top') > windowWidth && getTipOffsetLeft('top') >= 0 && getTipOffsetLeft('left') >= 0) {
        result = true;
        newPlace = 'left';
      }
      return { result: result, newPlace: newPlace };
    };
    var outsideTop = function outsideTop() {
      var _outsideHorizontal = outsideHorizontal(),
          result = _outsideHorizontal.result,
          newPlace = _outsideHorizontal.newPlace;

      if (result && outsideVertical().result) {
        return { result: false };
      }
      if (!result && getTipOffsetTop('top') < 0 && getTipOffsetBottom('bottom') <= windowHeight) {
        result = true;
        newPlace = 'bottom';
      }
      return { result: result, newPlace: newPlace };
    };
    var outsideBottom = function outsideBottom() {
      var _outsideHorizontal2 = outsideHorizontal(),
          result = _outsideHorizontal2.result,
          newPlace = _outsideHorizontal2.newPlace;

      if (result && outsideVertical().result) {
        return { result: false };
      }
      if (!result && getTipOffsetBottom('bottom') > windowHeight && getTipOffsetTop('top') >= 0) {
        result = true;
        newPlace = 'top';
      }
      return { result: result, newPlace: newPlace };
    };

    // Return new state to change the placement to the reverse if possible
    var outsideLeftResult = outsideLeft();
    var outsideRightResult = outsideRight();
    var outsideTopResult = outsideTop();
    var outsideBottomResult = outsideBottom();

    if (place === 'left' && outsideLeftResult.result) {
      return {
        isNewState: true,
        newState: { place: outsideLeftResult.newPlace }
      };
    } else if (place === 'right' && outsideRightResult.result) {
      return {
        isNewState: true,
        newState: { place: outsideRightResult.newPlace }
      };
    } else if (place === 'top' && outsideTopResult.result) {
      return {
        isNewState: true,
        newState: { place: outsideTopResult.newPlace }
      };
    } else if (place === 'bottom' && outsideBottomResult.result) {
      return {
        isNewState: true,
        newState: { place: outsideBottomResult.newPlace }
      };
    }

    // Return tooltip offset position
    return {
      isNewState: false,
      position: {
        left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
        top: parseInt(getTipOffsetTop(place) - parentTop, 10)
      }
    };
  };

  // Get current mouse offset
  var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
    var boundingClientRect = currentTarget.getBoundingClientRect();
    var targetTop = boundingClientRect.top;
    var targetLeft = boundingClientRect.left;
    var targetWidth = currentTarget.clientWidth;
    var targetHeight = currentTarget.clientHeight;

    if (effect === 'float') {
      return {
        mouseX: e.clientX,
        mouseY: e.clientY
      };
    }
    return {
      mouseX: targetLeft + targetWidth / 2,
      mouseY: targetTop + targetHeight / 2
    };
  };

  // List all possibility of tooltip final offset
  // This is useful in judging if it is necessary for tooltip to switch position when out of window
  /**
   * Calculate the position of tooltip
   *
   * @params
   * - `e` {Event} the event of current mouse
   * - `target` {Element} the currentTarget of the event
   * - `node` {DOM} the react-tooltip object
   * - `place` {String} top / right / bottom / left
   * - `effect` {String} float / solid
   * - `offset` {Object} the offset to default position
   *
   * @return {Object
   * - `isNewState` {Bool} required
   * - `newState` {Object}
   * - `position` {OBject} {left: {Number}, top: {Number}}
   */
  var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
    var top = void 0;
    var right = void 0;
    var bottom = void 0;
    var left = void 0;
    var disToMouse = 3;
    var triangleHeight = 2;
    var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip

    if (effect === 'float') {
      top = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: -(tipHeight + disToMouse + triangleHeight),
        b: -disToMouse
      };
      bottom = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: disToMouse + cursorHeight,
        b: tipHeight + disToMouse + triangleHeight + cursorHeight
      };
      left = {
        l: -(tipWidth + disToMouse + triangleHeight),
        r: -disToMouse,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
      right = {
        l: disToMouse,
        r: tipWidth + disToMouse + triangleHeight,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
    } else if (effect === 'solid') {
      top = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: -(targetHeight / 2 + tipHeight + triangleHeight),
        b: -(targetHeight / 2)
      };
      bottom = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: targetHeight / 2,
        b: targetHeight / 2 + tipHeight + triangleHeight
      };
      left = {
        l: -(tipWidth + targetWidth / 2 + triangleHeight),
        r: -(targetWidth / 2),
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
      right = {
        l: targetWidth / 2,
        r: tipWidth + targetWidth / 2 + triangleHeight,
        t: -(tipHeight / 2),
        b: tipHeight / 2
      };
    }

    return { top: top, bottom: bottom, left: left, right: right };
  };

  // Consider additional offset into position calculation
  var calculateOffset = function calculateOffset(offset) {
    var extraOffset_X = 0;
    var extraOffset_Y = 0;

    if (Object.prototype.toString.apply(offset) === '[object String]') {
      offset = JSON.parse(offset.toString().replace(/\'/g, '\"'));
    }
    for (var key in offset) {
      if (key === 'top') {
        extraOffset_Y -= parseInt(offset[key], 10);
      } else if (key === 'bottom') {
        extraOffset_Y += parseInt(offset[key], 10);
      } else if (key === 'left') {
        extraOffset_X -= parseInt(offset[key], 10);
      } else if (key === 'right') {
        extraOffset_X += parseInt(offset[key], 10);
      }
    }

    return { extraOffset_X: extraOffset_X, extraOffset_Y: extraOffset_Y };
  };

  // Get the offset of the parent elements
  var getParent = function getParent(currentTarget) {
    var currentParent = currentTarget;
    while (currentParent) {
      if (window.getComputedStyle(currentParent).getPropertyValue('transform') !== 'none') break;
      currentParent = currentParent.parentElement;
    }

    var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
    var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;

    return { parentTop: parentTop, parentLeft: parentLeft };
  };
});
$__System.registerDynamic('22', ['10'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (tip, children, getContent, multiline) {
    if (children) return children;
    if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
    if (getContent === null) return null; // Tip not exist and childern is null or undefined

    var regexp = /<br\s*\/?>/;
    if (!multiline || multiline === 'false' || !regexp.test(tip)) {
      // No trim(), so that user can keep their input
      return tip;
    }

    // Multiline tooltip content
    return tip.split(regexp).map(function (d, i) {
      return _react2.default.createElement('span', { key: i, className: 'multi-line' }, d);
    });
  };

  var _react = $__require('10');

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
});
$__System.registerDynamic("23", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseAria = parseAria;
  /**
   * Support aria- and role in ReactTooltip
   *
   * @params props {Object}
   * @return {Object}
   */
  function parseAria(props) {
    var ariaObj = {};
    Object.keys(props).filter(function (prop) {
      // aria-xxx and role is acceptable
      return (/(^aria-\w+$|^role$)/.test(prop)
      );
    }).forEach(function (prop) {
      ariaObj[prop] = props[prop];
    });

    return ariaObj;
  }
});
$__System.registerDynamic("24", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (nodeList) {
    var length = nodeList.length;
    if (nodeList.hasOwnProperty) {
      return Array.prototype.slice.call(nodeList);
    }
    return new Array(length).fill().map(function (index) {
      return nodeList[index];
    });
  };
});
$__System.registerDynamic('25', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = '.__react_component_tooltip{border-radius:3px;display:inline-block;font-size:13px;left:-999em;opacity:0;padding:8px 21px;position:fixed;pointer-events:none;transition:opacity 0.3s ease-out;top:-999em;visibility:hidden;z-index:999}.__react_component_tooltip:before,.__react_component_tooltip:after{content:"";width:0;height:0;position:absolute}.__react_component_tooltip.show{opacity:0.9;margin-top:0px;margin-left:0px;visibility:visible}.__react_component_tooltip.type-dark{color:#fff;background-color:#222}.__react_component_tooltip.type-dark.place-top:after{border-top-color:#222;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-dark.place-bottom:after{border-bottom-color:#222;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-dark.place-left:after{border-left-color:#222;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-dark.place-right:after{border-right-color:#222;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-dark.border{border:1px solid #fff}.__react_component_tooltip.type-dark.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-dark.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-dark.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-dark.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-success{color:#fff;background-color:#8DC572}.__react_component_tooltip.type-success.place-top:after{border-top-color:#8DC572;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-success.place-bottom:after{border-bottom-color:#8DC572;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-success.place-left:after{border-left-color:#8DC572;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-success.place-right:after{border-right-color:#8DC572;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-success.border{border:1px solid #fff}.__react_component_tooltip.type-success.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-success.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-success.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-success.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-warning{color:#fff;background-color:#F0AD4E}.__react_component_tooltip.type-warning.place-top:after{border-top-color:#F0AD4E;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-warning.place-bottom:after{border-bottom-color:#F0AD4E;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-warning.place-left:after{border-left-color:#F0AD4E;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-warning.place-right:after{border-right-color:#F0AD4E;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-warning.border{border:1px solid #fff}.__react_component_tooltip.type-warning.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-warning.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-warning.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-warning.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-error{color:#fff;background-color:#BE6464}.__react_component_tooltip.type-error.place-top:after{border-top-color:#BE6464;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-error.place-bottom:after{border-bottom-color:#BE6464;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-error.place-left:after{border-left-color:#BE6464;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-error.place-right:after{border-right-color:#BE6464;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-error.border{border:1px solid #fff}.__react_component_tooltip.type-error.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-error.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-error.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-error.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-info{color:#fff;background-color:#337AB7}.__react_component_tooltip.type-info.place-top:after{border-top-color:#337AB7;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-info.place-bottom:after{border-bottom-color:#337AB7;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-info.place-left:after{border-left-color:#337AB7;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-info.place-right:after{border-right-color:#337AB7;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-info.border{border:1px solid #fff}.__react_component_tooltip.type-info.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-info.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-info.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-info.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-light{color:#222;background-color:#fff}.__react_component_tooltip.type-light.place-top:after{border-top-color:#fff;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-light.place-bottom:after{border-bottom-color:#fff;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-light.place-left:after{border-left-color:#fff;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-light.place-right:after{border-right-color:#fff;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-light.border{border:1px solid #222}.__react_component_tooltip.type-light.border.place-top:before{border-top:8px solid #222}.__react_component_tooltip.type-light.border.place-bottom:before{border-bottom:8px solid #222}.__react_component_tooltip.type-light.border.place-left:before{border-left:8px solid #222}.__react_component_tooltip.type-light.border.place-right:before{border-right:8px solid #222}.__react_component_tooltip.place-top{margin-top:-10px}.__react_component_tooltip.place-top:before{border-left:10px solid transparent;border-right:10px solid transparent;bottom:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-top:after{border-left:8px solid transparent;border-right:8px solid transparent;bottom:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-bottom{margin-top:10px}.__react_component_tooltip.place-bottom:before{border-left:10px solid transparent;border-right:10px solid transparent;top:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-bottom:after{border-left:8px solid transparent;border-right:8px solid transparent;top:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-left{margin-left:-10px}.__react_component_tooltip.place-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;right:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-left:after{border-top:5px solid transparent;border-bottom:5px solid transparent;right:-6px;top:50%;margin-top:-4px}.__react_component_tooltip.place-right{margin-left:10px}.__react_component_tooltip.place-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;left:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-right:after{border-top:5px solid transparent;border-bottom:5px solid transparent;left:-6px;top:50%;margin-top:-4px}.__react_component_tooltip .multi-line{display:block;padding:2px 0px;text-align:center}';
});
$__System.registerDynamic('26', ['10', '11', '27', '19', '1a', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _class, _class2, _temp;

  /* Decoraters */

  /* Utils */

  /* CSS */

  var _react = $__require('10');

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = $__require('11');

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDom = $__require('27');

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _classnames = $__require('19');

  var _classnames2 = _interopRequireDefault(_classnames);

  var _staticMethods = $__require('1a');

  var _staticMethods2 = _interopRequireDefault(_staticMethods);

  var _windowListener = $__require('1c');

  var _windowListener2 = _interopRequireDefault(_windowListener);

  var _customEvent = $__require('1d');

  var _customEvent2 = _interopRequireDefault(_customEvent);

  var _isCapture = $__require('1e');

  var _isCapture2 = _interopRequireDefault(_isCapture);

  var _getEffect = $__require('1f');

  var _getEffect2 = _interopRequireDefault(_getEffect);

  var _trackRemoval = $__require('20');

  var _trackRemoval2 = _interopRequireDefault(_trackRemoval);

  var _getPosition = $__require('21');

  var _getPosition2 = _interopRequireDefault(_getPosition);

  var _getTipContent = $__require('22');

  var _getTipContent2 = _interopRequireDefault(_getTipContent);

  var _aria = $__require('23');

  var _nodeListToArray = $__require('24');

  var _nodeListToArray2 = _interopRequireDefault(_nodeListToArray);

  var _style = $__require('25');

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ReactTooltip = (0, _staticMethods2.default)(_class = (0, _windowListener2.default)(_class = (0, _customEvent2.default)(_class = (0, _isCapture2.default)(_class = (0, _getEffect2.default)(_class = (0, _trackRemoval2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ReactTooltip, _Component);

    function ReactTooltip(props) {
      _classCallCheck(this, ReactTooltip);

      var _this = _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));

      _this.state = {
        place: 'top', // Direction of tooltip
        type: 'dark', // Color theme of tooltip
        effect: 'float', // float or fixed
        show: false,
        border: false,
        placeholder: '',
        offset: {},
        extraClass: '',
        html: false,
        delayHide: 0,
        delayShow: 0,
        event: props.event || null,
        eventOff: props.eventOff || null,
        currentEvent: null, // Current mouse event
        currentTarget: null, // Current target of mouse event
        ariaProps: (0, _aria.parseAria)(props), // aria- and role attributes
        isEmptyTip: false,
        disable: false
      };

      _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize']);

      _this.mount = true;
      _this.delayShowLoop = null;
      _this.delayHideLoop = null;
      _this.intervalUpdateContent = null;
      return _this;
    }

    /**
     * For unify the bind and unbind listener
     */

    _createClass(ReactTooltip, [{
      key: 'bind',
      value: function bind(methodArray) {
        var _this2 = this;

        methodArray.forEach(function (method) {
          _this2[method] = _this2[method].bind(_this2);
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            insecure = _props.insecure,
            resizeHide = _props.resizeHide;

        if (insecure) {
          this.setStyleHeader(); // Set the style to the <link>
        }
        this.bindListener(); // Bind listener for tooltip
        this.bindWindowEvents(resizeHide); // Bind global event for static method
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        var ariaProps = this.state.ariaProps;

        var newAriaProps = (0, _aria.parseAria)(props);

        var isChanged = Object.keys(newAriaProps).some(function (props) {
          return newAriaProps[props] !== ariaProps[props];
        });
        if (isChanged) {
          this.setState({ ariaProps: newAriaProps });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mount = false;

        this.clearTimer();

        this.unbindListener();
        this.removeScrollListener();
        this.unbindWindowEvents();
      }

      /**
       * Pick out corresponded target elements
       */

    }, {
      key: 'getTargetArray',
      value: function getTargetArray(id) {
        var targetArray = void 0;
        if (!id) {
          targetArray = document.querySelectorAll('[data-tip]:not([data-for])');
        } else {
          var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
          targetArray = document.querySelectorAll('[data-tip][data-for="' + escaped + '"]');
        }
        // targetArray is a NodeList, convert it to a real array
        return (0, _nodeListToArray2.default)(targetArray);
      }

      /**
       * Bind listener to the target elements
       * These listeners used to trigger showing or hiding the tooltip
       */

    }, {
      key: 'bindListener',
      value: function bindListener() {
        var _this3 = this;

        var _props2 = this.props,
            id = _props2.id,
            globalEventOff = _props2.globalEventOff;

        var targetArray = this.getTargetArray(id);

        targetArray.forEach(function (target) {
          var isCaptureMode = _this3.isCapture(target);
          var effect = _this3.getEffect(target);
          if (target.getAttribute('currentItem') === null) {
            target.setAttribute('currentItem', 'false');
          }
          _this3.unbindBasicListener(target);

          if (_this3.isCustomEvent(target)) {
            _this3.customBindListener(target);
            return;
          }

          target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
          if (effect === 'float') {
            target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
          }
          target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
        });

        // Global event to hide tooltip
        if (globalEventOff) {
          window.removeEventListener(globalEventOff, this.hideTooltip);
          window.addEventListener(globalEventOff, this.hideTooltip, false);
        }

        // Track removal of targetArray elements from DOM
        this.bindRemovalTracker();
      }

      /**
       * Unbind listeners on target elements
       */

    }, {
      key: 'unbindListener',
      value: function unbindListener() {
        var _this4 = this;

        var _props3 = this.props,
            id = _props3.id,
            globalEventOff = _props3.globalEventOff;

        var targetArray = this.getTargetArray(id);
        targetArray.forEach(function (target) {
          _this4.unbindBasicListener(target);
          if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
        });

        if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
        this.unbindRemovalTracker();
      }

      /**
       * Invoke this before bind listener and ummount the compont
       * it is necessary to invloke this even when binding custom event
       * so that the tooltip can switch between custom and default listener
       */

    }, {
      key: 'unbindBasicListener',
      value: function unbindBasicListener(target) {
        var isCaptureMode = this.isCapture(target);
        target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
        target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
        target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
      }

      /**
       * When mouse enter, show the tooltip
       */

    }, {
      key: 'showTooltip',
      value: function showTooltip(e, isGlobalCall) {
        var _this5 = this;

        if (isGlobalCall) {
          // Don't trigger other elements belongs to other ReactTooltip
          var targetArray = this.getTargetArray(this.props.id);
          var isMyElement = targetArray.some(function (ele) {
            return ele === e.currentTarget;
          });
          if (!isMyElement || this.state.show) return;
        }
        // Get the tooltip content
        // calculate in this phrase so that tip width height can be detected
        var _props4 = this.props,
            children = _props4.children,
            multiline = _props4.multiline,
            getContent = _props4.getContent;

        var originTooltip = e.currentTarget.getAttribute('data-tip');
        var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;

        // Generate tootlip content
        var content = void 0;
        if (getContent) {
          if (Array.isArray(getContent)) {
            content = getContent[0] && getContent[0]();
          } else {
            content = getContent();
          }
        }
        var placeholder = (0, _getTipContent2.default)(originTooltip, children, content, isMultiline);
        var isEmptyTip = typeof placeholder === 'string' && placeholder === '' || placeholder === null;

        // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
        var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;

        // if it need to skip adding hide listener to scroll
        var scrollHide = true;
        if (e.currentTarget.getAttribute('data-scroll-hide')) {
          scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
        } else if (this.props.scrollHide != null) {
          scrollHide = this.props.scrollHide;
        }

        // To prevent previously created timers from triggering
        this.clearTimer();

        this.setState({
          placeholder: placeholder,
          isEmptyTip: isEmptyTip,
          place: e.currentTarget.getAttribute('data-place') || this.props.place || 'top',
          type: e.currentTarget.getAttribute('data-type') || this.props.type || 'dark',
          effect: switchToSolid && 'solid' || this.getEffect(e.currentTarget),
          offset: e.currentTarget.getAttribute('data-offset') || this.props.offset || {},
          html: e.currentTarget.getAttribute('data-html') ? e.currentTarget.getAttribute('data-html') === 'true' : this.props.html || false,
          delayShow: e.currentTarget.getAttribute('data-delay-show') || this.props.delayShow || 0,
          delayHide: e.currentTarget.getAttribute('data-delay-hide') || this.props.delayHide || 0,
          border: e.currentTarget.getAttribute('data-border') ? e.currentTarget.getAttribute('data-border') === 'true' : this.props.border || false,
          extraClass: e.currentTarget.getAttribute('data-class') || this.props.class || this.props.className || '',
          disable: e.currentTarget.getAttribute('data-tip-disable') ? e.currentTarget.getAttribute('data-tip-disable') === 'true' : this.props.disable || false
        }, function () {
          if (scrollHide) _this5.addScrollListener(e);
          _this5.updateTooltip(e);

          if (getContent && Array.isArray(getContent)) {
            _this5.intervalUpdateContent = setInterval(function () {
              if (_this5.mount) {
                var _getContent = _this5.props.getContent;

                var _placeholder = (0, _getTipContent2.default)(originTooltip, _getContent[0](), isMultiline);
                var _isEmptyTip = typeof _placeholder === 'string' && _placeholder === '';
                _this5.setState({
                  placeholder: _placeholder,
                  isEmptyTip: _isEmptyTip
                });
              }
            }, getContent[1]);
          }
        });
      }

      /**
       * When mouse hover, updatetooltip
       */

    }, {
      key: 'updateTooltip',
      value: function updateTooltip(e) {
        var _this6 = this;

        var _state = this.state,
            delayShow = _state.delayShow,
            show = _state.show,
            isEmptyTip = _state.isEmptyTip,
            disable = _state.disable;
        var afterShow = this.props.afterShow;
        var placeholder = this.state.placeholder;

        var delayTime = show ? 0 : parseInt(delayShow, 10);
        var eventTarget = e.currentTarget;

        if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
        var updateState = function updateState() {
          if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
            (function () {
              var isInvisible = !_this6.state.show;
              _this6.setState({
                currentEvent: e,
                currentTarget: eventTarget,
                show: true
              }, function () {
                _this6.updatePosition();
                if (isInvisible && afterShow) afterShow();
              });
            })();
          }
        };

        clearTimeout(this.delayShowLoop);
        if (delayShow) {
          this.delayShowLoop = setTimeout(updateState, delayTime);
        } else {
          updateState();
        }
      }

      /**
       * When mouse leave, hide tooltip
       */

    }, {
      key: 'hideTooltip',
      value: function hideTooltip(e, hasTarget) {
        var _this7 = this;

        var _state2 = this.state,
            delayHide = _state2.delayHide,
            isEmptyTip = _state2.isEmptyTip,
            disable = _state2.disable;
        var afterHide = this.props.afterHide;

        if (!this.mount) return;
        if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
        if (hasTarget) {
          // Don't trigger other elements belongs to other ReactTooltip
          var targetArray = this.getTargetArray(this.props.id);
          var isMyElement = targetArray.some(function (ele) {
            return ele === e.currentTarget;
          });
          if (!isMyElement || !this.state.show) return;
        }
        var resetState = function resetState() {
          var isVisible = _this7.state.show;
          _this7.setState({
            show: false
          }, function () {
            _this7.removeScrollListener();
            if (isVisible && afterHide) afterHide();
          });
        };

        this.clearTimer();
        if (delayHide) {
          this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
        } else {
          resetState();
        }
      }

      /**
       * Add scroll eventlistener when tooltip show
       * automatically hide the tooltip when scrolling
       */

    }, {
      key: 'addScrollListener',
      value: function addScrollListener(e) {
        var isCaptureMode = this.isCapture(e.currentTarget);
        window.addEventListener('scroll', this.hideTooltip, isCaptureMode);
      }
    }, {
      key: 'removeScrollListener',
      value: function removeScrollListener() {
        window.removeEventListener('scroll', this.hideTooltip);
      }

      // Calculation the position

    }, {
      key: 'updatePosition',
      value: function updatePosition() {
        var _this8 = this;

        var _state3 = this.state,
            currentEvent = _state3.currentEvent,
            currentTarget = _state3.currentTarget,
            place = _state3.place,
            effect = _state3.effect,
            offset = _state3.offset;

        var node = _reactDom2.default.findDOMNode(this);
        var result = (0, _getPosition2.default)(currentEvent, currentTarget, node, place, effect, offset);

        if (result.isNewState) {
          // Switch to reverse placement
          return this.setState(result.newState, function () {
            _this8.updatePosition();
          });
        }
        // Set tooltip position
        node.style.left = result.position.left + 'px';
        node.style.top = result.position.top + 'px';
      }

      /**
       * Set style tag in header
       * in this way we can insert default css
       */

    }, {
      key: 'setStyleHeader',
      value: function setStyleHeader() {
        if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-tooltip"]')) {
          var tag = document.createElement('style');
          tag.id = 'react-tooltip';
          tag.innerHTML = _style2.default;
          document.getElementsByTagName('head')[0].appendChild(tag);
        }
      }

      /**
       * CLear all kinds of timeout of interval
       */

    }, {
      key: 'clearTimer',
      value: function clearTimer() {
        clearTimeout(this.delayShowLoop);
        clearTimeout(this.delayHideLoop);
        clearInterval(this.intervalUpdateContent);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state4 = this.state,
            placeholder = _state4.placeholder,
            extraClass = _state4.extraClass,
            html = _state4.html,
            ariaProps = _state4.ariaProps,
            disable = _state4.disable,
            isEmptyTip = _state4.isEmptyTip;

        var tooltipClass = (0, _classnames2.default)('__react_component_tooltip', { 'show': this.state.show && !disable && !isEmptyTip }, { 'border': this.state.border }, { 'place-top': this.state.place === 'top' }, { 'place-bottom': this.state.place === 'bottom' }, { 'place-left': this.state.place === 'left' }, { 'place-right': this.state.place === 'right' }, { 'type-dark': this.state.type === 'dark' }, { 'type-success': this.state.type === 'success' }, { 'type-warning': this.state.type === 'warning' }, { 'type-error': this.state.type === 'error' }, { 'type-info': this.state.type === 'info' }, { 'type-light': this.state.type === 'light' });

        var Wrapper = this.props.wrapper;
        if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
          Wrapper = ReactTooltip.defaultProps.wrapper;
        }

        if (html) {
          return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass
          }, ariaProps, {
            'data-id': 'tooltip',
            dangerouslySetInnerHTML: { __html: placeholder } }));
        } else {
          return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass
          }, ariaProps, {
            'data-id': 'tooltip' }), placeholder);
        }
      }
    }]);

    return ReactTooltip;
  }(_react.Component), _class2.propTypes = {
    children: _propTypes2.default.any,
    place: _propTypes2.default.string,
    type: _propTypes2.default.string,
    effect: _propTypes2.default.string,
    offset: _propTypes2.default.object,
    multiline: _propTypes2.default.bool,
    border: _propTypes2.default.bool,
    insecure: _propTypes2.default.bool,
    class: _propTypes2.default.string,
    className: _propTypes2.default.string,
    id: _propTypes2.default.string,
    html: _propTypes2.default.bool,
    delayHide: _propTypes2.default.number,
    delayShow: _propTypes2.default.number,
    event: _propTypes2.default.string,
    eventOff: _propTypes2.default.string,
    watchWindow: _propTypes2.default.bool,
    isCapture: _propTypes2.default.bool,
    globalEventOff: _propTypes2.default.string,
    getContent: _propTypes2.default.any,
    afterShow: _propTypes2.default.func,
    afterHide: _propTypes2.default.func,
    disable: _propTypes2.default.bool,
    scrollHide: _propTypes2.default.bool,
    resizeHide: _propTypes2.default.bool,
    wrapper: _propTypes2.default.string
  }, _class2.defaultProps = {
    insecure: true,
    resizeHide: true,
    wrapper: 'div'
  }, _class2.supportedWrappers = ['div', 'span'], _temp)) || _class) || _class) || _class) || _class) || _class) || _class;

  /* export default not fit for standalone, it will exports {default:...} */

  module.exports = ReactTooltip;
});
$__System.register('a', ['10', '27', 'e', '11', 'f', '26'], function (_export, _context) {
  "use strict";

  var React, ReactDOM, Spanan, PropTypes, ToggleDisplay, ReactTooltip;
  return {
    setters: [function (_) {
      React = _.default;
    }, function (_2) {
      ReactDOM = _2.default;
    }, function (_e) {
      Spanan = _e.default;
    }, function (_3) {
      PropTypes = _3.default;
    }, function (_f) {
      ToggleDisplay = _f.default;
    }, function (_4) {
      ReactTooltip = _4.default;
    }],
    execute: function () {

      var CONFIG = {
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

      var _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /* global window */
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

      let INSTANCE = null;

      class Cliqz {
        constructor() {
          const freshtab = createSpananForModule('freshtab');
          const core = createSpananForModule('core');
          const search = createSpananForModule('search');
          const offersV2 = createSpananForModule('offers-v2');
          const api = new Spanan();
          const cliqz = this;

          this.export = api.export;

          api.export({
            renderResults(results) {
              cliqz.storage.setState(() => ({
                results
              }));
            },
            closeNotification(messageId) {
              cliqz.storage.setState(prevState => {
                const messages = Object.assign({}, prevState.messages);
                delete messages[messageId];
                return {
                  messages
                };
              });
            },
            addMessage(message) {
              cliqz.storage.setState(prevState => ({
                messages: _extends$1({}, prevState.messages, {
                  [message.id]: message
                })
              }));
            }
          }, {
            filter(message) {
              return Object.keys(this.actions).indexOf(message.action) >= 0;
            },
            transform: message => {
              if (message.action === 'closeNotification') {
                return {
                  action: message.action,
                  args: [message.messageId]
                };
              } else if (message.action === 'addMessage') {
                return {
                  action: message.action,
                  args: [message.message]
                };
              }
              return message;
            }
          });

          const onPostMessage = event => {
            let message;
            try {
              message = JSON.parse(event.data);
            } catch (e) {
              return;
            }

            api.handleMessage(message);
            core.handleMessage(message);
            freshtab.handleMessage(message);
            offersV2.handleMessage(message);
          };

          const onMessage = message => {
            const msg = {
              uuid: message.requestId,
              response: message.response,
              action: message.action,
              args: message.args
            };

            if (isCliqzContentScriptMsg(message)) {
              core.handleMessage(msg);
              freshtab.handleMessage(msg);
              offersV2.handleMessage(msg);
              return;
            }

            api.handleMessage(msg);
          };

          checkIfChromeReady().then(() => {
            chrome.runtime.onMessage.addListener(onMessage);
            window.addEventListener('message', onPostMessage);

            window.addEventListener('unload', () => {
              chrome.runtime.onMessage.removeListener(onMessage);
              window.removeEventListener('message', onPostMessage);
            });
          });

          this.freshtab = freshtab.createProxy();
          this.core = core.createProxy();
          this.offersV2 = offersV2.createProxy();
          this.search = search.createProxy();
        }

        static getInstance() {
          if (!INSTANCE) {
            INSTANCE = new Cliqz();
          }

          return INSTANCE;
        }

        setStorage(storage) {
          this.storage = storage;
        }
      }

      var cliqz = Cliqz.getInstance();

      function Logo(props) {
        const hasBgImage = props.logo.backgroundImage !== undefined;
        return React.createElement('div', null, hasBgImage ? React.createElement('div', {
          className: 'logo',
          style: {
            color: props.logo.color,
            textIndent: '-1000em',
            backgroundImage: props.logo.backgroundImage,
            backgroundColor: `#${props.logo.backgroundColor}`
          }
        }, props.logo.text) : React.createElement('div', {
          className: 'logo',
          style: {
            color: props.logo.color,
            backgroundColor: `#${props.logo.backgroundColor}`
          }
        }, props.logo.text));
      }

      Logo.propTypes = {
        logo: PropTypes.shape({
          color: PropTypes.string,
          backgroundImage: PropTypes.string,
          backgroundColor: PropTypes.string,
          text: PropTypes.string
        })
      };

      function SpeedDial(props) {
        return React.createElement('div', { className: 'dial', title: props.dial.url }, React.createElement('a', {
          href: props.dial.url,
          onClick: () => {
            props.visitSpeedDial();
          }
        }, React.createElement(Logo, { logo: props.dial.logo }), React.createElement('button', {
          className: 'delete',
          onClick: e => {
            e.preventDefault();
            e.stopPropagation();
            props.removeSpeedDial(props.dial);
          }
        }, 'X'), React.createElement('div', { className: 'title' }, props.dial.displayTitle)));
      }

      SpeedDial.propTypes = {
        dial: PropTypes.shape({
          logo: {},
          url: PropTypes.string,
          displayTitle: PropTypes.string
        }),
        removeSpeedDial: PropTypes.func
      };

      /* globals chrome */
      function t(key) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        return chrome.i18n.getMessage(`freshtab_${key}`, params);
      }

      function tt(key) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        return chrome.i18n.getMessage(key, params);
      }

      var _extends$3 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /**
       * Automatically derive anolysis schema name from `signal`.
       * Format should be: 'freshtab.{type}.{action}[.{target}[.{element}]]
       *
       * The complete list of signals can be found in:
       * ./modules/anolysis/sources/metrics/
       */
      function mkAnolysisSchemaName(_ref) {
        let type = _ref.type,
            action = _ref.action,
            target = _ref.target;

        let schemaName = `freshtab.${type}.${action}`;
        if (target) {
          schemaName = `${schemaName}.${target}`;
        }
        return schemaName;
      }

      var telemetry = function (signal) {
        cliqz.core.sendTelemetry(_extends$3({}, signal, { version: '2.0' }), false, // not instant push
        mkAnolysisSchemaName(signal));
      };

      function speedDialClickSignal(isCustom, index) {
        const target = isCustom ? 'favorite' : 'topsite';

        telemetry({
          type: 'home',
          action: 'click',
          target,
          index
        });
      }

      function speedDialDeleteSignal(isCustom, index) {
        const target = isCustom ? 'delete_favorite' : 'delete_topsite';

        telemetry({
          type: 'home',
          action: 'click',
          target,
          index
        });
      }

      function favoriteAddSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          target: 'add_favorite'
        });
      }

      function addFormCloseSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          view: 'add_favorite',
          target: 'close'
        });
      }

      function addFormSubmitSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          view: 'add_favorite',
          target: 'add'
        });
      }

      function deleteUndoSignal(speedDial) {
        const target = speedDial.custom ? 'undo_delete_favorite' : 'undo_delete_topsite';

        telemetry({
          type: 'home',
          action: 'click',
          view: 'notification',
          target
        });
      }

      function undoCloseSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          view: 'notification',
          target: 'close'
        });
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

      const DEFAULT_STATE = Object.freeze({
        show: true,
        value: '',
        errorDuplicate: false,
        errorInValid: false
      });

      class AddSpeedDial extends React.Component {
        static get propTypes() {
          return {
            addSpeedDial: PropTypes.func
          };
        }

        constructor(props) {
          super(props);
          this.freshtab = cliqz.freshtab;
          this.state = _extends$2({}, DEFAULT_STATE);

          this.handleClick = this.handleClick.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleClick(event) {
          event.preventDefault();
          if (this.state.show) {
            favoriteAddSignal();
            this.setState(_extends$2({}, DEFAULT_STATE));
          } else {
            addFormCloseSignal();
          }

          this.setState({
            show: !this.state.show
          });
        }

        handleChange(event) {
          this.setState({ value: event.target.value });
        }

        handleSubmit(event) {
          event.preventDefault();
          addFormSubmitSignal();
          const url = this.input.value.trim();
          if (!url) {
            return;
          }

          this.freshtab.addSpeedDial(url, null).then(resp => {
            if (resp.error) {
              if (resp.reason.indexOf('duplicate') > -1) {
                this.setState({
                  errorDuplicate: true
                });
              } else {
                this.setState({
                  errorInValid: true
                });
              }
            } else {
              this.setState({
                value: ''
              });
              this.setState({
                show: !this.state.show
              });

              this.props.addSpeedDial(resp);
            }
          });
        }

        render() {
          return React.createElement('div', { className: 'dial dial-plus' }, React.createElement(ToggleDisplay, { show: this.state.show }, React.createElement('button', { className: 'plus-dial-icon', onClick: this.handleClick })), React.createElement(ToggleDisplay, { hide: this.state.show }, React.createElement('form', {
            name: 'addForm',
            className: 'addDialForm',
            onSubmit: this.handleSubmit
          }, React.createElement('button', {
            className: 'hideAddForm',
            type: 'button',
            role: 'link',
            onClick: this.handleClick
          }), React.createElement('input', {
            name: 'addUrl',
            type: 'text',
            className: 'addUrl',
            placeholder: t('app_speed_dial_input_placeholder'),
            value: this.state.value,
            onChange: this.handleChange,
            ref: el => {
              // TODO: Fix me
              if (!el) {
                return;
              }
              this.input = el;
              this.input.focus();
            }
          }), React.createElement('button', { className: 'submit', type: 'submit' }, t('app_speed_dial_add'))), React.createElement('div', { className: 'flex-container' }, this.state.errorDuplicate && React.createElement('div', { className: 'error' }, t('app_speed_dial_exists_already')), this.state.errorInvalid && React.createElement('div', { className: 'error' }, t('app.speed_dial_not_valid')))));
        }
      }

      class SpeedDialsRow extends React.Component {
        static get propTypes() {
          return {
            type: PropTypes.string,
            dials: PropTypes.array,
            removeSpeedDial: PropTypes.func,
            addSpeedDial: PropTypes.func,
            getSpeedDials: PropTypes.func
          };
        }

        constructor(props) {
          super(props);
          this.resetAll = this.resetAll.bind(this);
        }

        componentWillMount() {
          this.state = {
            isCustom: this.props.type === 'custom',
            showAddButton: () => {
              if (!this.state.isCustom) {
                return null;
              }
              return this.state.displayAddBtn();
            },
            displayAddBtn: () => this.props.dials.length < 6
          };
        }

        removeSpeedDial(dial, index) {
          speedDialDeleteSignal(this.state.isCustom, index);

          this.props.removeSpeedDial(dial, index);
        }

        visitSpeedDial(index) {
          speedDialClickSignal(this.state.isCustom, index);
        }

        resetAll() {
          cliqz.freshtab.resetAllHistory().then(() => {
            this.closeUndo('history');
            this.props.getSpeedDials();
          });

          cliqz.core.sendTelemetry({
            type: 'home',
            action: 'click',
            target_type: 'reset-all-history'
          });
        }

        render() {
          return React.createElement('div', null, React.createElement('div', { className: 'dials-row' }, this.props.dials.slice(0, 6).map((dial, i) => React.createElement(SpeedDial, {
            dial: dial,
            removeSpeedDial: () => this.removeSpeedDial(dial, i),
            visitSpeedDial: () => this.visitSpeedDial(i)
          })), this.state.showAddButton() && React.createElement(AddSpeedDial, { addSpeedDial: this.props.addSpeedDial })));
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

      const urlBarBaseSignal = {
        type: 'home',
        target: 'search_bar'
      };

      function urlBarFocusSignal() {
        telemetry(_extends$5({}, urlBarBaseSignal, {
          action: 'focus'
        }));
      }

      function urlBarBlurSignal() {
        telemetry(_extends$5({}, urlBarBaseSignal, {
          action: 'blur'
        }));
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

      const SPECIAL_KEYS = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 91, 224];
      const styles = {
        transition: 'all 0.3s ease-in-out'
      };

      class Urlbar extends React.Component {
        constructor(props) {
          super(props);

          this.handleInput = () => {};

          this.state = {
            value: '',
            visible: true
          };

          this.handleKeyDown = this.handleKeyDown.bind(this);
          this.handlePaste = this.handlePaste.bind(this);
        }

        componentDidMount() {
          this.textInput.addEventListener('focus', urlBarFocusSignal);
          this.textInput.addEventListener('blur', urlBarBlurSignal);
        }

        componentWillReceiveProps(nextProps) {
          this.setState({
            visible: nextProps.visible
          });
        }

        componentWillUnmount() {
          this.textInput.removeEventListener('focus', urlBarFocusSignal);
          this.textInput.removeEventListener('blur', urlBarBlurSignal);
        }

        _queryCliqz(input) {
          cliqz.core.queryCliqz(input);

          cliqz.core.sendTelemetry({
            type: 'home',
            action: 'search_keystroke'
          });

          setTimeout(() => {
            this.textInput.value = '';
            this.textInput.style.visibility = 'hidden';
          }, 0);
        }

        handlePaste(ev) {
          ev.clipboardData.items[0].getAsString(text => this._queryCliqz(text));
        }

        handleKeyDown(ev) {
          const value = ev.target.value;
          let input = SPECIAL_KEYS.indexOf(ev.which) > -1 ? '' : ev.key;
          this.setState({
            value
          });

          if (ev.keyCode === 13) {
            input = value;
          }

          // ignore TAB
          if (ev.keyCode === 9) {
            ev.preventDefault();
          }

          if (!input || ev.metaKey || ev.ctrlKey) {
            return;
          }

          this._queryCliqz(input);
        }

        get classes() {
          return 'search';
        }

        render() {
          return React.createElement('div', {
            className: this.classes,
            style: _extends$4({}, styles, { opacity: this.state.visible })
          }, React.createElement('input', {
            type: 'text',
            ref: input => {
              this.textInput = input;
            },
            placeholder: t('urlbar_placeholder'),
            onKeyDown: this.handleKeyDown,
            onInput: this.handleInput,
            onPaste: this.handlePaste
          }));
        }
      }

      var _extends$6 = Object.assign || function (target) {
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

      class UrlbarWithResults extends Urlbar {
        constructor() {
          var _temp;

          return _temp = super(...arguments), this.actions = {
            openLink: url => {
              window.location.href = url;
            },
            setHeight: height => {
              this.setHeight(height);
            }
          }, this.handleKeyDown = ev => {
            switch (ev.key) {
              case 'ArrowUp':
                {
                  this.previousResult();
                  break;
                }
              case 'ArrowDown':
                {
                  this.nextResult();
                  break;
                }
              case 'Enter':
                {
                  this.dropdownAction.handleEnter({});
                  break;
                }
              case 'Escape':
                {
                  this.setHeight(0);
                  break;
                }
              default:
                break;
            }
          }, this.handleInput = () => {
            const query = this.textInput.value;
            if (query) {
              cliqz.search.startSearch(query);
            }
          }, this.onMessage = event => {
            if (!this.iframeWrapper) {
              return;
            }

            const message = event.data;

            if (message.type === 'response') {
              this.iframeWrapper.dispatch({
                uuid: message.uuid,
                response: message.response
              });
              return;
            }

            if (message.target === 'cliqz-renderer') {
              this.iframeWrapper.handleMessage(message);
            }
          }, this.createIframeWrapper = iframe => {
            if (!iframe) {
              return;
            }

            this.iframe = iframe;

            const iframeWrapper = new Spanan(_ref => {
              let action = _ref.action,
                  rest = _objectWithoutProperties(_ref, ['action']);

              iframe.contentWindow.postMessage(_extends$6({
                target: 'cliqz-dropdown',
                action
              }, rest), '*');
            });

            this.iframeWrapper = iframeWrapper;

            // Somehow the chrome.i18n object is missing on iframes in Chrome
            try {
              // eslint-disable-next-line
              iframe.contentWindow.chrome.i18n = chrome.i18n;
            } catch (e) {
              // throws on platform firefox, but i18n is there already
            }

            iframe.contentWindow.addEventListener('message', this.onMessage);

            iframeWrapper.export(this.actions, {
              respond(response, request) {
                iframe.contentWindow.postMessage({
                  type: 'response',
                  uuid: request.uuid,
                  response
                }, '*');
              }
            });

            this.dropdownAction = iframeWrapper.createProxy();
          }, _temp;
        }

        get classes() {
          return [super.classes, 'with-results'].join(' ');
        }

        get maxHeight() {
          return window.innerHeight - 140;
        }

        setHeight(height) {
          if (!this.iframe) {
            return;
          }

          const newHeight = Math.min(this.maxHeight, height);
          const heightInPx = `${newHeight}px`;
          this.iframe.style.height = heightInPx;
        }

        nextResult() {
          return this.dropdownAction.nextResult();
        }

        previousResult() {
          return this.dropdownAction.previousResult();
        }

        componentWillReceiveProps(props) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.iframe) {
              return;
            }

            const firstResult = props.results && props.results[0];
            if (!firstResult) {
              if (_this.textInput && !_this.textInput.value) {
                _this.setHeight(0);
              }
              return;
            }

            var _ref2 = yield _this.dropdownAction.render({
              rawResults: props.results,
              query: firstResult.text,
              queriedAt: Date.now()
            }, {
              assistantStates: {
                adult: {},
                location: {},
                offers: {},
                settings: {}
              },
              padding: 50,
              maxHeight: _this.maxHeight
            });

            const height = _ref2.height,
                  result = _ref2.result;

            _this.selectedResult = result;
            _this.setHeight(height);
          })();
        }

        componentWillUnmount() {
          this.iframe.contentWindow.removeEventListener('message', this.onMessage);
        }

        render() {
          return React.createElement('div', null, super.render(), React.createElement('div', { className: 'results' }, React.createElement('iframe', {
            title: 'Results',
            ref: this.createIframeWrapper,
            src: '../dropdown/dropdown.html'
          })));
        }
      }

      function getElement(ev) {
        const elem = ev.target;
        let element = elem.classList[0].replace(/news-/g, '');
        if (elem.classList.contains('read-more-button')) {
          element = 'read_more';
        }
        return element;
      }

      function newsClickSignal(ev, type, index, edition) {
        const element = getElement(ev);
        let target = type;
        target = type.replace(/-/g, ''); // remove '-'' from breaking-news
        telemetry({
          type: 'home',
          action: 'click',
          target,
          index,
          element,
          edition
        });
      }

      function newsPaginationClickSignal(index) {
        telemetry({
          type: 'home',
          action: 'click',
          target: 'news_pagination',
          index
        });
      }

      function newsHoverSignal(ev, target, index, hoverTime, edition) {
        const element = getElement(ev);
        telemetry({
          type: 'home',
          action: 'hover',
          target,
          index,
          hover_time: hoverTime,
          element,
          edition
        });
      }

      /* global window */
      const ROTATION_INTERVAL = 15000;

      class Pagination extends React.Component {
        static get propTypes() {
          return {
            items: PropTypes.array,
            onChangePage: PropTypes.func,
            isNewsHover: PropTypes.bool
          };
        }

        constructor(props) {
          super(props);
          this.state = {
            pager: {}
          };

          this.timer = null;
          this.setPageSize = this.setPageSize.bind(this);
          this.onKeyDown = this.onKeyDown.bind(this);
        }

        componentDidMount() {
          this.timer = setInterval(() => this.tick(), ROTATION_INTERVAL);
          window.addEventListener('keydown', this.onKeyDown);
        }

        componentDidUpdate(prevProps) {
          if (this.props.items !== prevProps.items) {
            this.setPage(1);
          }
        }

        componentWillUnmount() {
          clearInterval(this.timer);
          window.removeEventListener('keydown', this.onKeyDown);
        }

        onKeyDown(ev) {
          if (ev.key === 'ArrowLeft') {
            this.prevPage();
            ev.preventDefault();
          }

          if (ev.key === 'ArrowRight') {
            this.nextPage();
            ev.preventDefault();
          }
        }

        onPageSelected(page) {
          newsPaginationClickSignal(page - 1);
          this.setPage(page);
        }

        getPager(totalItems) {
          let currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          let pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

          const totalPages = Math.ceil(totalItems / pageSize);
          const startIndex = (currentPage - 1) * pageSize;
          const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

          const pages = [];
          for (let i = 1; i <= totalPages; i += 1) {
            pages.push(i);
          }

          return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startIndex,
            endIndex,
            pages
          };
        }

        setPage(page) {
          const items = this.props.items;
          let pager = this.state.pager;
          const pageSize = pager.pageSize;

          pager = this.getPager(items.length, page, pageSize);

          if (page < 1 || page > pager.totalPages) {
            return;
          }

          const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
          this.setState({ pager });

          this.props.onChangePage(pageOfItems);

          clearInterval(this.timer);
          this.timer = setInterval(() => this.tick(), ROTATION_INTERVAL);
        }

        setPageSize(size) {
          const pager = this.state.pager;
          pager.pageSize = size;
          this.setState(pager);
          this.setPage(1);
        }

        nextPage() {
          const pager = this.state.pager;
          let nextPage = pager.currentPage + 1;
          if (nextPage > pager.pages.length) {
            nextPage = 1;
          }
          this.setPage(nextPage);
        }

        prevPage() {
          const pager = this.state.pager;
          let nextPage = pager.currentPage - 1;
          if (nextPage === 0) {
            nextPage = pager.pages.length;
          }
          this.setPage(nextPage);
        }

        rotateNews() {
          const pager = this.state.pager;
          const currentPage = this.state.pager.currentPage;
          const totalPages = this.state.pager.totalPages;
          if (currentPage === totalPages) {
            pager.currentPage = 1;
          } else {
            pager.currentPage = currentPage + 1;
          }
          this.setState({
            pager
          });
          this.setPage(this.state.pager.currentPage);
        }

        tick() {
          if (!this.props.isNewsHover) {
            this.rotateNews();
          }
        }

        render() {
          const pager = this.state.pager;
          if (!pager.pages || pager.pages.length <= 1) {
            return null;
          }

          const newsItems = pager.pages.map(page => React.createElement('button', {
            href: '#',
            key: page,
            className: `dash ${page === pager.currentPage ? 'active' : ''}`,
            onClick: () => this.onPageSelected(page)
          }, React.createElement('span', { className: 'overflow-hidden' }, page)));
          return React.createElement('div', { className: 'news-pagination' }, newsItems);
        }
      }

      let startEnter = 0;

      class Article extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            isBreakingNews: false
          };

          this.onMouseEnter = this.onMouseEnter.bind(this);
          this.onMouseLeave = this.onMouseLeave.bind(this);
        }

        onMouseEnter() {
          startEnter = Date.now();
        }

        onMouseLeave(ev) {
          const elapsed = Date.now() - startEnter;
          const type = this.props.article.type;
          const index = this.props.index;
          const edition = this.props.article.edition;
          startEnter = 0;
          if (elapsed > 2000) {
            newsHoverSignal(ev, type, index, elapsed, edition);
          }
        }

        truncate(text, maxChars) {
          let requiresSpace = true;
          if (this.props.newsLanguage === 'fr') {
            requiresSpace = false;
          }
          const dots = '...';
          const truncation = requiresSpace ? ` ${dots}` : dots;
          let str = text.trim();
          const limit = maxChars;
          if (str.length > limit) {
            str = str.substring(0, limit);
            str = str.substr(0, Math.min(str.length, str.lastIndexOf(' ')));
            if (str[str.length - 1] !== '.') {
              str += truncation;
            }
          }

          return str;
        }

        get isBreakingNews() {
          return this.props.article.type === 'breaking-news';
        }

        render() {
          return React.createElement('a', {
            href: this.props.article.url,
            onClick: ev => newsClickSignal(ev, this.props.article.type, this.props.index, this.props.article.edition),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            'data-index': this.props.index
          }, React.createElement('div', { className: 'header' }, React.createElement(Logo, { logo: this.props.article.logo }), React.createElement('div', { className: 'url' }, this.props.article.displayUrl)), React.createElement('div', { className: 'news-title' }, this.isBreakingNews && React.createElement('span', { className: 'breaking-news' }, this.props.article.breaking_label ? this.props.article.breaking_label : t('app_news_breaking_news'), '\xA0'), this.truncate(this.props.article.title, this.props.maxChars - 20)), React.createElement('div', { className: 'news-description' }, this.truncate(this.props.article.description, this.props.maxChars + 15)), React.createElement('div', { className: 'read-more-button' }, t('app_news_read_more')));
        }
      }

      Article.propTypes = {
        article: PropTypes.shape({
          type: PropTypes.string,
          url: PropTypes.string,
          displayUrl: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          breaking_label: PropTypes.bool,
          logo: PropTypes.shape({}),
          edition: PropTypes.string
        }),
        index: PropTypes.number,
        maxChars: PropTypes.number
      };

      var _extends$7 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /* global window */

      const styles$1 = {
        transition: 'opacity 0.3s ease-in-out'
      };

      const threeNewsBreakpoint = 1023;
      const twoNewsBreakpoint = 919;
      const largeBreakpoint = 1600;

      class News extends React.Component {
        static get propTypes() {
          return {
            news: PropTypes.array
          };
        }

        constructor(props) {
          super(props);
          this.state = {
            pageOfItems: [],
            isNewsHover: false,
            boxClassName: '',
            opacity: 1,
            currentPageSize: 0,
            articleCharsLimit: 120
          };

          this.onChangePage = this.onChangePage.bind(this);
          this.onMouseEnter = this.onMouseEnter.bind(this);
          this.onMouseLeave = this.onMouseLeave.bind(this);
          this.didResize = this.didResize.bind(this);
          this.updatePageSize = this.updatePageSize.bind(this);
        }

        componentDidMount() {
          window.addEventListener('resize', this.didResize);
          this.updatePageSize(window.innerWidth);
        }
        componentWillUnmount() {
          window.removeEventListener('resize', this.didResize);
        }

        onMouseEnter() {
          this.setState({ isNewsHover: true });
        }

        onMouseLeave() {
          this.setState({ isNewsHover: false });
        }

        onChangePage(pageOfItems) {
          if (this.state.pageOfItems.length === 0) {
            this.setState({
              pageOfItems,
              opacity: 1
            });
            return;
          }
          this.setState({
            pageOfItems: this.state.pageOfItems,
            opacity: 0
          });
          setTimeout(() => {
            this.setState({
              pageOfItems,
              opacity: 1
            });
          }, 300);
        }

        didResize(event) {
          const width = event.target.innerWidth;
          this.updatePageSize(width);
        }

        updatePageSize(width) {
          if (width > threeNewsBreakpoint) {
            if (this.state.currentPageSize === 3) {
              return;
            }
            this._pagination.setPageSize(3);
            this.setState({ currentPageSize: 3 });
            if (width > largeBreakpoint) {
              this.setState({ articleCharsLimit: 150 });
            } else {
              this.setState({ articleCharsLimit: 100 });
            }
          } else if (width > twoNewsBreakpoint) {
            if (this.state.currentPageSize === 2) {
              return;
            }
            this._pagination.setPageSize(2);
            this.setState({ currentPageSize: 2 });
            this.setState({ articleCharsLimit: 110 });
          } else {
            if (this.state.currentPageSize === 1) {
              return;
            }
            this._pagination.setPageSize(1);
            this.setState({ currentPageSize: 1 });
            this.setState({ articleCharsLimit: 160 });
          }
        }

        render() {
          return React.createElement('div', { className: 'news' }, React.createElement(Pagination, {
            ref: pagination => {
              this._pagination = pagination;
            },
            items: this.props.news.data,
            onChangePage: this.onChangePage,
            isNewsHover: this.state.isNewsHover
          }), React.createElement('div', { className: 'news-container', style: _extends$7({}, styles$1, { opacity: this.state.opacity }) }, React.createElement('div', { className: 'news-content' }, this.state.pageOfItems.map((article, index) => React.createElement('div', {
            className: 'box',
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          }, React.createElement(Article, {
            article: article,
            index: this._pagination.state.pager.pageSize * (this._pagination.state.pager.currentPage - 1) + index,
            currentPage: this._pagination.state.pager.currentPage,
            pageSize: this._pagination.state.pager.pageSize,
            maxChars: this.state.articleCharsLimit,
            newsLanguage: this.props.newsLanguage
          }))))));
        }
      }

      class Switch extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            isChecked: false
          };
          this._handleChange = this._handleChange.bind(this);
        }

        componentWillReceiveProps(nextProps) {
          this.setState({ isChecked: nextProps.isChecked });
        }

        _handleChange() {
          this.props.toggleComponent();
          this.setState({ isChecked: !this.state.isChecked });
        }

        render() {
          return React.createElement('div', { className: 'switch-container' }, React.createElement('label', {
            htmlFor: 'switch'
          }, React.createElement('input', {
            name: this.props.name,
            checked: this.state.isChecked,
            onChange: this._handleChange,
            className: 'switch',
            type: 'checkbox',
            tabIndex: '-1'
          }), React.createElement('div', null, React.createElement('span', null, React.createElement('g', { className: 'icon icon-toolbar grid-view' })), React.createElement('span', null, React.createElement('g', { className: 'icon icon-toolbar ticket-view' })), React.createElement('div', null))));
        }
      }

      Switch.propTypes = {
        toggleComponent: PropTypes.func,
        name: PropTypes.string
      };

      class BackgroundImage extends React.Component {
        constructor(props) {
          super(props);

          this.selectBackground = this.selectBackground.bind(this);
        }

        selectBackground() {
          this.props.onBackgroundImageChanged(this.props.bg);
        }

        render() {
          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return React.createElement('div', { onClick: this.selectBackground }, React.createElement('img', {
            alt: '',
            'data-bg': this.props.bg,
            width: '71',
            src: this.props.src,
            className: this.props.isActive ? 'active' : ''
          }), React.createElement('span', { className: 'selected-img' }, React.createElement('img', {
            alt: '',
            src: './images/bg-check.svg'
          })));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }

      BackgroundImage.propTypes = {
        isActive: PropTypes.boolean,
        bg: PropTypes.string,
        src: PropTypes.string,
        onBackgroundImageChanged: PropTypes.func
      };

      var _extends$8 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      const settingsBaseSignal = {
        type: 'home',
        view: 'settings'
      };

      function settingsCloseSignal() {
        telemetry(_extends$8({}, settingsBaseSignal, {
          action: 'click',
          target: 'close'
        }));
      }

      function settingsRestoreTopSitesSignal() {
        telemetry(_extends$8({}, settingsBaseSignal, {
          action: 'click',
          target: 'restore_topsites'
        }));
      }

      function settingsBackgroundSelectSignal(bg) {
        const BACKGROUNDS = {
          'bg-light': 'light',
          'bg-dark': 'dark',
          'bg-blue': 'alps',
          'bg-winter': 'winter',
          'bg-spring': 'spring'
        };

        const state = BACKGROUNDS[bg];

        telemetry(_extends$8({}, settingsBaseSignal, {
          action: 'click',
          target: 'background_image',
          state
        }));
      }

      function settingsComponentsToggleSignal(component, oldState) {
        const COMPONENTS = {
          historyDials: 'topsites',
          customDials: 'favorites',
          search: 'search_bar',
          news: 'news',
          cliqzTheme: 'cliqz_theme',
          background: 'background'
        };

        const target = COMPONENTS[component];
        const state = oldState ? 'off' : 'on';

        telemetry(_extends$8({}, settingsBaseSignal, {
          action: 'click',
          target,
          state
        }));
      }

      function newsSelectionChangeSignal(country) {
        const state = country || 'automatic';
        telemetry(_extends$8({}, settingsBaseSignal, {
          action: 'click',
          target: 'news_language',
          state
        }));
      }

      const DEFAULT_BG = 'bg-spring';
      const FALLBACK_BG = 'bg-light';
      const NO_BG = 'bg-default';

      class Settings extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            componentsState: {
              historyDials: {},
              customDials: {},
              search: {},
              news: {},
              background: {}
            }
          };
          this.onBackgroundImageChanged = this.onBackgroundImageChanged.bind(this);
          this.onNewsSelectionChanged = this.onNewsSelectionChanged.bind(this);
        }

        componentWillReceiveProps(nextProps) {
          this.setState({ componentsState: nextProps.componentsState });
        }

        onBackgroundImageChanged(bg) {
          settingsBackgroundSelectSignal(bg);
          this.props.onBackgroundImageChanged(bg);
        }

        onNewsSelectionChanged(changeEvent) {
          this.props.onNewsSelectionChanged(changeEvent.target.value);
        }

        onCloseButtonClick() {
          settingsCloseSignal();
          this.props.toggle();
        }

        render() {
          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return React.createElement('div', null, React.createElement('div', {
            id: 'settings-panel',
            className: this.props.isOpen ? 'visible ' : ''
          }, React.createElement('button', {
            onClick: () => this.onCloseButtonClick(),
            tabIndex: '-1',
            className: 'close'
          }, 'Close'), React.createElement('div', { className: 'settings-header' }, React.createElement('h1', null, t('app_settings_header'))), this.props.isBlueThemeSupported && React.createElement('div', { className: 'settings-row' }, React.createElement('span', { className: 'label' }, 'Cliqz Theme'), React.createElement(Switch, {
            name: 'blueTheme',
            isChecked: this.props.blueTheme,
            toggleComponent: () => this.props.toggleBlueTheme()
          })), React.createElement('div', { className: 'settings-row' }, React.createElement('span', { className: 'label' }, t('app_settings_background_label')), React.createElement(Switch, {
            name: 'background',
            isChecked: this.state.componentsState.background.image !== NO_BG,
            toggleComponent: () => this.props.toggleBackground()
          })), this.state.componentsState.background.image === NO_BG ? '' : React.createElement('div', { className: 'settings-row' }, React.createElement('ul', { className: 'background-selection-list' }, this.props.isBlueBackgroundSupported && React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-blue',
            src: './images/bg-alps-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-blue' || !this.state.componentsState.background.image
          })), React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-light',
            src: './images/bg-light-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-light'
          })), React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-dark',
            src: './images/bg-dark-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-dark'
          })), React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-winter',
            src: './images/bg-winter-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-winter'
          })), React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-matterhorn',
            src: './images/bg-matterhorn-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-matterhorn'
          })), React.createElement('li', null, React.createElement(BackgroundImage, {
            onBackgroundImageChanged: this.onBackgroundImageChanged,
            bg: 'bg-spring',
            src: './images/bg-spring-thumbnail.png',
            isActive: this.state.componentsState.background.image === 'bg-spring'
          })))), React.createElement('div', { className: 'settings-row' }, React.createElement('span', { className: 'label' }, t('app_settings_most_visited_label')), React.createElement(Switch, {
            isChecked: this.state.componentsState.historyDials.visible,
            toggleComponent: () => this.props.toggleComponent('historyDials')
          }), React.createElement('button', {
            className: 'link',
            tabIndex: '-1',
            disabled: !this.props.hasHistorySpeedDialsToRestore,
            onClick: () => this.props.restoreHistorySpeedDials()
          }, t('app_settings_most_visited_restore'))), React.createElement('div', { className: 'settings-row' }, React.createElement('span', { className: 'label' }, t('app_settings_favorites_label')), React.createElement(Switch, {
            isChecked: this.state.componentsState.customDials.visible,
            toggleComponent: () => this.props.toggleComponent('customDials')
          })), React.createElement('div', { className: 'settings-row' }, React.createElement('span', { className: 'label' }, t('app_settings_search_label')), React.createElement(Switch, {
            isChecked: this.state.componentsState.search.visible,
            toggleComponent: () => this.props.toggleComponent('search')
          })), React.createElement('div', { className: 'settings-row' }, React.createElement('div', null, React.createElement('span', { className: 'label' }, t('app_settings_news_label')), React.createElement(Switch, {
            isChecked: this.state.componentsState.news.visible,
            toggleComponent: () => this.props.toggleComponent('news')
          })), !this.state.componentsState.news.visible ? '' : React.createElement('div', null, React.createElement('form', null, React.createElement('div', { className: 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-2' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-2',
            value: 'de',
            checked: this.state.componentsState.news.preferedCountry === 'de',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_de'))), React.createElement('div', { className: 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-5' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-5',
            value: 'de-tr-en',
            checked: this.state.componentsState.news.preferedCountry === 'de-tr-en',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_de_tr_en'))), React.createElement('div', { className: this.props.focusNews ? 'focused radio' : 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-3' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-3',
            value: 'fr',
            checked: this.state.componentsState.news.preferedCountry === 'fr',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_fr'))), React.createElement('div', { className: 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-4' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-4',
            value: 'intl',
            checked: this.state.componentsState.news.preferedCountry === 'intl',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_en'))), React.createElement('div', { className: 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-6' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-6',
            value: 'us',
            checked: this.state.componentsState.news.preferedCountry === 'us',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_us'))), React.createElement('div', { className: 'radio' }, React.createElement('label', { htmlFor: 'news-radio-selector-7' }, React.createElement('input', {
            type: 'radio',
            tabIndex: '-1',
            name: 'news',
            id: 'news-radio-selector-7',
            value: 'gb',
            checked: this.state.componentsState.news.preferedCountry === 'gb',
            onChange: this.onNewsSelectionChanged
          }), t('app_settings_news_language_gb'))))))));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }

      Settings.propTypes = {
        onBackgroundImageChanged: PropTypes.func,
        onNewsSelectionChanged: PropTypes.func,
        toggle: PropTypes.func,
        isOpen: PropTypes.bool,
        focusNews: PropTypes.bool,
        blueTheme: PropTypes.bool,
        isBlueThemeSupported: PropTypes.func,
        isBlueBackgroundSupported: PropTypes.func,
        toggleComponent: PropTypes.func,
        toggleBlueTheme: PropTypes.func,
        toggleBackground: PropTypes.func,
        restoreHistorySpeedDials: PropTypes.func,
        hasHistorySpeedDialsToRestore: PropTypes.bool
      };

      function messageShowSignal() {
        let messageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        telemetry({
          type: 'home',
          view: 'banner',
          action: 'show',
          topic: messageId
        });
      }

      function messageClickSignal() {
        let messageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        telemetry({
          type: 'home',
          view: 'banner',
          action: 'click',
          target: 'ok',
          topic: messageId
        });
      }

      function messageCloseSignal() {
        let messageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        telemetry({
          type: 'home',
          view: 'banner',
          action: 'click',
          target: 'close',
          topic: messageId
        });
      }

      function messageSkipSignal() {
        let messageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        telemetry({
          type: 'home',
          view: 'banner',
          action: 'click',
          target: 'later',
          topic: messageId
        });
      }

      var _extends$9 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      class TopMessages extends React.Component {
        componentDidMount() {
          if (this.props.messages.length > 0) {
            // Set shown time for the visible message (i.e the first one)
            const message = this.props.messages[0];
            messageShowSignal(message.id);
            cliqz.freshtab.setMessageShownTime(message);
          }
        }

        handleCTAClick(message) {
          messageClickSignal(message.id);
          cliqz.freshtab.countMessageClick(message);
          this.props.handleLinkClick(message);
        }

        handleLaterClick(message) {
          messageSkipSignal(message.id);
          cliqz.freshtab.skipMessage(message);
        }

        handleCloseClick(message) {
          messageCloseSignal(message.id);
          const messageId = message.id;
          const handler = message.handler;
          cliqz.freshtab.dismissMessage(messageId, handler);
          cliqz.storage.setState(prevState => {
            const prev = prevState;
            const messages = _extends$9({}, prev.messages);
            delete messages[messageId];
            return {
              messages
            };
          });
        }

        render() {
          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return React.createElement('div', { id: 'topNotificationBox' }, this.props.messages.map(message => React.createElement('div', {
            key: message.id,
            className: `top-notification-box ${message.type}`
          }, React.createElement('div', {
            className: 'close',
            onClick: () => this.handleCloseClick(message)
          }), React.createElement('div', {
            className: 'content',
            style: {
              backgroundImage: `url(${message.icon})`,
              paddingLeft: message.icon ? '70px' : '0px'
            }
          }, React.createElement('div', null, React.createElement('h1', { title: message.title }, message.title), message.description && React.createElement('p', null, message.description)), React.createElement('div', null, React.createElement('button', {
            className: 'cta-btn',
            onClick: () => this.handleCTAClick(message)
          }, message.cta_text), message.later_text && React.createElement('button', {
            className: 'later-btn',
            onClick: () => this.handleLaterClick(message)
          }, message.later_text))))));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }

      TopMessages.propTypes = {
        messages: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          map: PropTypes.func
        }),
        handleLinkClick: PropTypes.func
      };

      function messageShowSignal$1() {
        telemetry({
          type: 'home',
          view: 'message',
          action: 'show'
        });
      }

      function messageClickSignal$1() {
        let messageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        telemetry({
          type: 'home',
          view: 'message',
          action: 'click',
          target: 'ok',
          topic: messageId
        });
      }

      function messageCloseSignal$1() {
        telemetry({
          type: 'home',
          view: 'message',
          action: 'click',
          target: 'close'
        });
      }

      var _extends$10 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      class MiddleMessages extends React.Component {
        componentDidMount() {
          messageShowSignal$1();
        }

        handleCTAClick(message) {
          messageClickSignal$1(message.id);
          cliqz.freshtab.countMessageClick(message);
          this.props.handleLinkClick(message);
        }

        handleCloseClick(message) {
          messageCloseSignal$1();
          const messageId = message.id;
          const handler = message.handler;
          cliqz.freshtab.dismissMessage(messageId, handler);
          cliqz.storage.setState(prevState => {
            const prev = prevState;
            const messages = _extends$10({}, prev.messages);
            delete messages[messageId];
            return {
              messages
            };
          });
        }

        render() {
          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return React.createElement('div', null, this.props.messages.map(message => React.createElement('div', {
            key: message.id,
            className: `middle-notification-box ${message.type}`
          }, React.createElement('div', {
            className: 'close',
            onClick: () => this.handleCloseClick(message)
          }), React.createElement('div', {
            className: 'icon',
            style: {
              backgroundImage: `url(${message.icon})`,
              backgroundSize: message.icon_dimensions ? message.icon_dimensions.width : null,
              width: message.icon_dimensions ? message.icon_dimensions.width : null,
              height: message.icon_dimensions ? message.icon_dimensions.height : null
            }
          }), React.createElement('div', {
            className: 'content',
            style: { width: `calc(100% - ${message.icon_dimensions ? message.icon_dimensions.width : null}px)` }
          }, React.createElement('h1', null, message.title), React.createElement('p', null, message.description), React.createElement('button', {
            className: 'cta-btn',
            onClick: () => this.handleCTAClick(message)
          }, message.cta_text), message.buttons && message.buttons.length > 0 && React.createElement('div', { className: 'buttons' }, message.buttons.map(button => React.createElement('a', {
            key: button.id,
            href: button.link[this.props.locale],
            target: '_blank'
          }, React.createElement('img', {
            alt: button.id,
            className: button.class,
            src: `./images/${button.src}`
          }))))))));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }

      MiddleMessages.propTypes = {
        messages: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          map: PropTypes.func
        }),
        handleLinkClick: PropTypes.func
      };

      class MessageCenter extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            top: [],
            middle: []
          };
        }

        componentWillReceiveProps(nextProps) {
          const messages = nextProps.messages;
          const top = [];
          const middle = [];
          Object.keys(messages).forEach(message => {
            if (messages[message].position === 'top') {
              top.push(messages[message]);
            } else {
              middle.push(messages[message]);
            }
          });

          this.setState({
            top,
            middle
          });
        }

        render() {
          const position = this.props.position;
          if (position === 'top' && this.state.top.length > 0) {
            return React.createElement(TopMessages, {
              messages: this.state.top,
              handleLinkClick: this.props.handleLinkClick
            });
          } else if (position === 'middle' && this.state.middle.length > 0) {
            return React.createElement(MiddleMessages, {
              messages: this.state.middle,
              settingsIcon: this.props.settingsElem,
              handleLinkClick: this.props.handleLinkClick,
              locale: this.props.locale
            });
          }
          return null;
        }
      }

      MessageCenter.propTypes = {
        position: PropTypes.string,
        settingsElem: PropTypes.string,
        handleLinkClick: PropTypes.func
      };

      function sendOffersMessage(offerId, actionId) {
        let signalType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'offer-action-signal';

        const message = {
          origin: 'cliqz-tab',
          type: signalType,
          data: {
            action_id: actionId,
            offer_id: offerId
          }
        };

        cliqz.offersV2.processRealEstateMessage(message);
      }

      function sendOfferShownMessage(offerId, actionId, counter) {
        const message = {
          origin: 'cliqz-tab',
          type: 'offer-action-signal',
          data: {
            action_id: actionId,
            offer_id: offerId,
            counter
          }
        };

        cliqz.offersV2.processRealEstateMessage(message);
      }

      function Title(props) {
        return React.createElement('div', { className: 'title-container' }, React.createElement('div', {
          className: 'title',
          style: { color: props.color }
        }, React.createElement('a', {
          href: props.url,
          onClick: () => {
            sendOffersMessage(props.offer_id, 'offer_ca_action');
            sendOffersMessage(props.offer_id, 'offer_title');
          }
        }, props.title)));
      }

      function Logo$2(props) {
        return React.createElement('a', {
          href: props.url,
          onClick: () => {
            sendOffersMessage(props.offer_id, 'offer_ca_action');
            sendOffersMessage(props.offer_id, 'offer_logo');
          }
        }, React.createElement('div', {
          className: `logo ${props.data.logo_class}`,
          style: {
            color: 'red',
            textIndent: '-1000em',
            backgroundImage: `url(${props.data.logo_url})`
          }
        }));
      }

      function Benefit(props) {
        return React.createElement('div', { className: 'benefit' }, React.createElement('a', {
          href: props.url,
          onClick: () => {
            sendOffersMessage(props.offer_id, 'offer_ca_action');
            sendOffersMessage(props.offer_id, 'offer_benefit');
          }
        }, props.benefit));
      }

      function Headline(props) {
        return React.createElement('div', { className: 'headline-container' }, React.createElement('div', {
          className: 'headline',
          style: { color: props.color }
        }, React.createElement('a', {
          href: props.url,
          onClick: () => {
            sendOffersMessage(props.offer_id, 'offer_ca_action');
            sendOffersMessage(props.offer_id, 'offer_headline');
          }
        }, props.headline)));
      }

      function HeadlineBenefit(props) {
        return React.createElement('div', { className: 'headline-benefit-ctner' }, React.createElement(Benefit, {
          benefit: props.benefit,
          url: props.url,
          offer_id: props.offer_id
        }), React.createElement(Headline, {
          headline: props.headline,
          color: props.color,
          url: props.url,
          offer_id: props.offer_id
        }));
      }

      const largeBreakpoint$1 = 1600;
      const mediumBreakpoint = 1024;
      const xMediumBreakpoint = 920;
      const smallBreakpoint = 650;

      function Label(props) {
        return React.createElement('span', { className: props.label }, tt(`offers_${props.label}`));
      }

      function SpecialFlags(props) {
        const labels = props.labels || [];
        const weeklyOffer = labels.indexOf('offer_of_the_week') > -1;
        const bestOffer = labels.indexOf('best_offer') > -1;
        const exclusive = labels.indexOf('exclusive') > -1;
        // Show only Weekly offer if is both weekly offer & best_offer and not exclusive
        if (labels && weeklyOffer && bestOffer && !exclusive) {
          return React.createElement(Label, { label: 'offer_of_the_week' });
        }
        return labels && labels.slice(0, 2).map(label => React.createElement(Label, { label: label }));
      }

      class Content extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            multiplier: 1.15
          };

          this.didResize = this.didResize.bind(this);
          this.updateLeftContainerWidth = this.updateLeftContainerWidth.bind(this);
        }

        componentDidMount() {
          window.addEventListener('resize', this.didResize);
          this.updateLeftContainerWidth(window.innerWidth);
        }

        componentWillUnmount() {
          window.removeEventListener('resize', this.didResize);
        }

        updateLeftContainerWidth(width) {
          if (width >= largeBreakpoint$1) {
            this.setState({ multiplier: 0.9 });
          } else if (width >= mediumBreakpoint) {
            this.setState({ multiplier: 1.15 });
          } else if (width >= xMediumBreakpoint) {
            this.setState({ multiplier: 0.8 });
          } else if (width >= smallBreakpoint) {
            this.setState({ multiplier: 1.2 });
          }
        }

        didResize(event) {
          const width = event.target.innerWidth;
          this.updateLeftContainerWidth(width);
        }

        calculateMaxWidth(characters, hasTitle) {
          const multiplier = this.state.multiplier;
          let width = characters * multiplier;
          if (hasTitle) {
            width = characters * 0.82;
          }
          return `${width}%`;
        }

        changeFontSize(characters) {
          let shouldChange = false;
          if (characters > 80) {
            shouldChange = true;
          }
          return shouldChange;
        }

        render() {
          const benefitOrHeadline = this.props.data.benefit && this.props.data.headline;
          let heading;
          let numOfCharacters;
          let hasTitle = false;
          if (benefitOrHeadline) {
            heading = React.createElement(HeadlineBenefit, {
              headline: this.props.data.headline,
              benefit: this.props.data.benefit,
              color: this.props.data.titleColor,
              url: this.props.data.call_to_action.url,
              offer_id: this.props.offer_id
            });
            numOfCharacters = this.props.data.headline.length;
          } else {
            heading = React.createElement(Title, {
              title: this.props.data.title,
              color: this.props.data.titleColor,
              url: this.props.data.call_to_action.url,
              offer_id: this.props.offer_id
            });
            numOfCharacters = this.props.data.title.length;
            hasTitle = true;
          }
          return React.createElement('div', { className: 'content clearfix' }, React.createElement('div', {
            className: 'left-container',
            style: {
              width: this.calculateMaxWidth(numOfCharacters, hasTitle)
            }
          }, React.createElement('div', { className: 'special-flags' }, React.createElement(SpecialFlags, { labels: this.props.data.labels })), heading), React.createElement('div', { className: 'right-container' }, React.createElement('div', { className: 'top-row' }, React.createElement('div', { className: `logo-container ${this.props.data.logo_class}` }, React.createElement(Logo$2, {
            data: this.props.data,
            offer_id: this.props.offer_id,
            url: this.props.data.call_to_action.url
          })), React.createElement('span', {
            className: `expires ${this.props.validity && this.props.validity.isExpiredSoon ? 'red' : ''}`
          }, this.props.validity.text)), React.createElement('p', {
            className: `offer-description ${this.changeFontSize(this.props.data.desc.length) ? 'small' : ''}`
          }, React.createElement('a', {
            href: this.props.data.call_to_action.url
            // data-tip={props.data.desc}
            , 'data-type': 'light',
            'data-class': 'light-tooltip',
            onClick: () => {
              sendOffersMessage(this.props.offer_id, 'offer_ca_action');
              sendOffersMessage(this.props.offer_id, 'offer_description');
            }
          }, this.props.data.desc))));
        }
      }

      function offerShowSignal() {
        telemetry({
          type: 'offrz',
          view: 'tab',
          action: 'show'
        });
      }

      function offerClickSignal(target) {
        if (!target) {
          return;
        }

        telemetry({
          type: 'offrz',
          view: 'tab',
          action: 'click',
          target
        });
      }

      function offerHoverSignal(target) {
        if (!target) {
          return;
        }

        telemetry({
          type: 'offrz',
          view: 'tab',
          action: 'hover',
          target
        });
      }

      class Code extends React.Component {
        constructor(props) {
          super(props);
          this.state = Object.freeze({
            show: true
          });
          this.handleClick = this.handleClick.bind(this);
        }

        copyToClipboard() {
          const range = document.createRange();
          range.selectNodeContents(this._code);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand('copy');
        }

        handleClick() {
          const offer = this.props.offer;
          this.setState({
            show: !this.state.show
          });

          this.copyToClipboard();
          sendOffersMessage(offer.offer_id, 'code_copied');
          offerClickSignal('copy_code');
          setTimeout(() => {
            this.setState({ show: true });
          }, 5000);
        }

        render() {
          return React.createElement('div', null, React.createElement('span', {
            className: 'code',
            ref: code => {
              this._code = code;
            }
          }, this.props.data.code), React.createElement('span', { className: 'divider' }, '\xB7'), React.createElement(ToggleDisplay, { show: this.state.show }, React.createElement('span', {
            role: 'presentation',
            className: 'copy-code',
            onClick: this.handleClick
          }, tt('offers_copy_code'))), React.createElement(ToggleDisplay, { hide: this.state.show }, React.createElement('span', { className: 'code-copied' }, tt('offers_code_copied'))));
        }
      }

      class Footer extends React.Component {
        constructor(props) {
          super(props);
          this.handleHover = this.handleHover.bind(this);
        }
        get anchorClasses() {
          const offerTpl = this.props.data;
          return ['cta-btn', offerTpl.call_to_action.text.length > 13 ? 'small-font' : ''].join(' ');
        }

        handleHover() {
          offerHoverSignal('conditions');
        }

        render() {
          return React.createElement('div', { className: 'footer flex-container' }, React.createElement(Code, {
            data: this.props.data,
            offer: this.props.offer
          }), React.createElement('div', { className: 'right-container' }, this.props.data.conditions && React.createElement('span', null, React.createElement('span', {
            className: 'tooltip',
            ref: el => {
              this.tooltip = el;
            },
            'data-tip': this.props.data.conditions,
            onMouseOver: this.handleHover
          }, t('app_conditions')), React.createElement('img', {
            className: 'info-icon tooltip tooltipstered',
            ref: el => {
              this.tooltip = el;
            },
            'data-tip': this.props.data.conditions,
            src: './images/info-icon-hover.svg',
            alt: t('app_conditions'),
            onMouseOver: this.handleHover
          })), React.createElement('a', {
            href: this.props.data.call_to_action.url,
            className: this.anchorClasses,
            target: '_blank',
            onClick: this.props.handleVoucherClick
          }, React.createElement('span', null, this.props.data.call_to_action.text))));
        }
      }

      class OfferFeedback extends React.Component {
        constructor(props) {
          super(props);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleOptionChange = this.handleOptionChange.bind(this);
          this.handleTextareaChange = this.handleTextareaChange.bind(this);
          this.handleCloseClick = this.handleCloseClick.bind(this);
          this.state = {
            selectedOption: null,
            submitDisabled: true,
            showForm: true
          };
        }

        handleTextareaChange() {
          this.setState({
            submitDisabled: false
          });
        }

        handleOptionChange(event) {
          this.setState({
            selectedOption: event.target.value,
            submitDisabled: false
          });
        }

        handleSubmit() {
          if (this.state.submitDisabled) {
            return;
          }

          this.setState({
            showForm: false
          });
          const comments = this._comment.value;
          const vote = this.state.selectedOption;

          telemetry({
            type: 'offrz',
            view: 'tab',
            action: 'click',
            target: 'remove_offer',
            comments,
            vote
          });
          this.props.submitFeedbackForm(vote, comments);
        }

        handleCloseClick() {
          cliqz.storage.setState(state => ({
            offers: state.offers.filter(res => res.offer_id !== this.props.offer_id)
          }));
        }

        render() {
          return React.createElement('div', { className: 'offer-middle-feedback offer-container' }, React.createElement('button', {
            className: 'close',
            onClick: this.handleCloseClick
          }), React.createElement(ToggleDisplay, { show: this.state.showForm }, React.createElement('h2', null, tt('offers_hub_feedback_title')), React.createElement('div', { className: 'flex-container' }, React.createElement('div', { className: 'col1' }, React.createElement('ul', null, React.createElement('li', null, React.createElement('input', {
            type: 'radio',
            name: 'remove_feedback',
            id: 'feedback_option1',
            value: 'already_used',
            onChange: this.handleOptionChange
          }), React.createElement('label', { htmlFor: 'feedback_option1' }, tt('offers_hub_feedback_option1'))), React.createElement('li', null, React.createElement('input', {
            name: 'remove_feedback',
            id: 'feedback_option2',
            value: 'not_good_deal',
            type: 'radio',
            onChange: this.handleOptionChange
          }), React.createElement('label', { htmlFor: 'feedback_option2' }, tt('offers_hub_feedback_option2'))), React.createElement('li', null, React.createElement('input', {
            name: 'remove_feedback',
            id: 'feedback_option3',
            value: 'not_relevant',
            type: 'radio',
            onChange: this.handleOptionChange
          }), React.createElement('label', { htmlFor: 'feedback_option3' }, tt('offers_hub_feedback_option3'))))), React.createElement('div', { className: 'col2' }, React.createElement('textarea', {
            id: 'feedback_option4_textarea',
            rows: '2',
            placeholder: tt('offers_hub_feedback_option4'),
            ref: comment => {
              this._comment = comment;
            },
            onChange: this.handleTextareaChange
          })), React.createElement('div', { className: 'col3' }, React.createElement('div', { className: 'notification' }, tt('offers_offer_removed')), React.createElement('button', {
            className: 'cta-btn',
            type: 'button',
            onClick: this.handleSubmit,
            disabled: this.state.submitDisabled
          }, React.createElement('span', null, tt('offers_send_feedback')))))), React.createElement(ToggleDisplay, { hide: this.state.showForm }, React.createElement('div', { className: 'vertical-align' }, React.createElement('div', { className: 'thank-you' }, React.createElement('h3', null, tt('offers_hub_feedback_thank_you')), React.createElement('p', null, tt('offers_feedback_thank_you'))))));
        }
      }

      class Offer extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showOffer: true,
            showFeedback: false
          };
          this.handleVoucherClick = this.handleVoucherClick.bind(this);
          this.handleCloseClick = this.handleCloseClick.bind(this);
        }

        componentDidMount() {
          offerShowSignal();
        }

        handleVoucherClick() {
          const offer = this.props.offer;
          sendOffersMessage(offer.offer_id, 'offer_ca_action');
          offerClickSignal('use');
        }

        handleCloseClick() {
          const offer = this.props.offer;
          const offerId = offer.offer_id;

          this.setState({
            showOffer: false,
            showFeedback: true
          });

          sendOffersMessage(offerId, 'offer_removed', 'remove-offer');
          offerClickSignal('remove');
        }

        get domain() {
          const offerTpl = this.props.offer.offer_info.ui_info.template_data;
          return offerTpl.call_to_action.url.match('^(?:https?:)?(?://)?(?:[^@\n]+@)?(?:www.)?([^:/\n]+)')[1];
        }

        render() {
          const offer = this.props.offer;
          const offerTpl = this.props.offer.offer_info.ui_info.template_data;
          const offerId = offer.offer_id;
          const validity = offer.validity;
          return (
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            React.createElement('div', { className: 'middle-notification-box offer' }, React.createElement('div', {
              className: 'offer-middle-notification notification offer-container',
              role: 'button',
              'data-id': offer.offer_id,
              style: { display: this.state.showOffer ? 'block' : 'none' }
            }, React.createElement('button', {
              className: 'close',
              onClick: this.handleCloseClick
            }), React.createElement(Content, {
              data: offerTpl,
              offer_id: offerId,
              validity: validity
            }), React.createElement(Footer, {
              data: offerTpl,
              offer: this.props.offer,
              handleVoucherClick: this.handleVoucherClick
            }), React.createElement(ReactTooltip, { afterShow: () => {
                sendOffersMessage(offer.offer_id, 'offer_more_info');
              } })), React.createElement('div', { style: { display: this.state.showFeedback ? 'block' : 'none' } }, React.createElement(OfferFeedback, {
              submitFeedbackForm: this.props.submitFeedbackForm,
              offer_id: offer.offer_id
            })), React.createElement('div', { className: 'anzeige' }, tt('ad_label')))
            /* eslint-enable jsx-a11y/no-static-element-interactions */

          );
        }
      }

      Offer.propTypes = {
        offer: PropTypes.shape({
          offer_info: PropTypes.shape({
            ui_info: PropTypes.shape({
              template_data: PropTypes.shape({})
            })
          })
        })
      };

      /* global window */
      class MiddleMessagesOffer extends React.Component {
        constructor() {
          super(...arguments);

          this.handleScroll = this.handleScroll.bind(this);
          this.scrollFinished = this.scrollFinished.bind(this);
          this.handleVisibility = this.handleVisibility.bind(this);

          this.shownOffers = {};
          this.lastSeenElements = [];
        }

        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
          window.addEventListener('resize', this.handleScroll);
          window.addEventListener('visibilitychange', this.handleVisibility);
          this.scrollFinished();
        }

        componentDidUpdate() {
          this.scrollFinished();
        }

        componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
          window.removeEventListener('resize', this.handleScroll);
          window.removeEventListener('visibilitychange', this.handleVisibility);
        }

        handleVisibility(ev) {
          if (ev && ev.type === 'visibilitychange' && window.document.hidden) {
            this.lastSeenElements = [];
            return;
          }

          this.scrollFinished();
        }

        // TODO: @salvador, please rethink and document this logic, we want complete
        // test covrage for it.
        scrollFinished() {
          const offset = 100;
          const currentSeenElements = [];

          const allOffers = this.offersWrapper && this.offersWrapper.querySelectorAll('.offer-middle-notification') || [];

          allOffers.forEach(el => {
            const offerId = el.getAttribute('data-id');
            const elmTop = el.getBoundingClientRect().top;
            const elmHight = el.clientHeight;

            if (elmTop + offset >= 0 && elmTop + elmHight - offset <= window.innerHeight) {
              currentSeenElements.push(offerId);
            }
            const difference = currentSeenElements.filter(x => this.lastSeenElements.indexOf(x) === -1);

            for (let i = 0; i < difference.length; i += 1) {
              const visOfferId = difference[i];

              if (this.shownOffers[visOfferId]) {
                this.shownOffers[visOfferId] += 1;
              } else {
                this.shownOffers[visOfferId] = 1;
                sendOffersMessage(visOfferId, 'offer_dsp_session');
              }
              // offerID, Action, Counter
              sendOfferShownMessage(visOfferId, 'offer_shown', 1);
            }

            this.lastSeenElements = currentSeenElements;
          });
        }

        handleScroll() {
          if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
          }

          this.scrollTimer = window.setTimeout(this.scrollFinished, 350);
        }

        render() {
          return React.createElement('div', { ref: el => {
              this.offersWrapper = el;
            } }, this.props.offers.map(offer => React.createElement(Offer, {
            offer: offer,
            key: offer.offer_id,
            submitFeedbackForm: this.props.submitFeedbackForm
          })));
        }
      }

      MiddleMessagesOffer.propTypes = {
        offers: PropTypes.shape({
          map: PropTypes.func,
          length: PropTypes.Number
        })
      };

      class UndoDialRemoval extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            visible: false
          };
        }

        handleUndoRemoval() {
          this.setState({ visible: false });
          this.props.undoRemoval();
        }

        handleUndoClose() {
          this.setState({ visible: false });
          this.props.closeUndo();
        }

        render() {
          const classes = ['undo-notification-box'];
          if (this.props.isSettingsOpen) {
            classes.push('padded');
          }
          if (this.props.visible) {
            classes.push('visible');
          }

          return React.createElement('div', { className: classes.join(' ') }, React.createElement('span', {
            className: 'removed-dial'
          }, this.props.dial.displayTitle), '\xA0', t('app_speed_dial_removed'), React.createElement('button', {
            id: 'undo-close',
            className: 'undo',
            onClick: () => this.handleUndoRemoval()
          }, t('app_speed_dial_undo')), React.createElement('button', {
            id: 'undo-notification-close',
            className: 'close',
            onClick: () => this.handleUndoClose()
          }, 'X'));
        }
      }

      UndoDialRemoval.propTypes = {
        dial: PropTypes.shape({
          displayTitle: PropTypes.string
        }),
        undoRemoval: PropTypes.func,
        closeUndo: PropTypes.func,
        isSettingsOpen: PropTypes.func
      };

      let start = 0;
      let focusTotalTime = 0;
      let displayTotalTime = 0;
      let focusStart;
      let blurStart = 0;
      let focusTime = 0;
      let blurCount = 0;
      let unloadingStarted = false;
      let focus = true;

      function historyClickSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          target: 'history'
        });
      }

      function settingsClickSignal() {
        telemetry({
          type: 'home',
          action: 'click',
          target: 'settings'
        });
      }

      function homeConfigsStatusSignal(state, tabIndex) {
        const newsTypes = state.news.data.reduce((hash, curr) => {
          let newsType = `${curr.type}_count`;
          newsType = newsType.replace(/-/g, ''); // remove '-'' from breaking-news
          const news = hash;
          news[newsType] = hash[newsType] || 0;
          news[newsType] += 1;
          return news;
        }, {});

        start = new Date().getTime();
        focusStart = start;

        telemetry({
          type: 'home',
          action: 'focus',
          home_id: tabIndex
        });

        telemetry(Object.assign({
          type: 'home',
          action: 'show',
          favorite_count: state.dials.custom.length,
          topsite_count: state.dials.history.length,
          is_favorites_on: state.config.componentsState.customDials.visible,
          is_topsites_on: state.config.componentsState.historyDials.visible,
          is_search_bar_on: state.config.componentsState.search.visible,
          is_news_on: state.config.componentsState.news.visible
        }, newsTypes));
      }

      function sendHomeUnloadSignal(_ref) {
        let tabIndex = _ref.tabIndex;

        if (unloadingStarted) {
          return;
        }
        unloadingStarted = true;
        displayTotalTime = new Date().getTime() - start;
        focusTotalTime += new Date().getTime() - focusStart;
        telemetry({
          type: 'home',
          action: 'hide',
          display_time: displayTotalTime,
          focus_time: focusTotalTime,
          blur_count: blurCount,
          home_id: tabIndex
        });
      }

      function sendHomeBlurSignal(_ref2) {
        let tabIndex = _ref2.tabIndex;

        focus = false;
        blurStart = new Date().getTime();
        focusTotalTime += blurStart - focusStart;
        focusTime = blurStart - focusStart;
        blurCount += 1;
        telemetry({
          type: 'home',
          action: 'blur',
          focus_time: focusTime,
          home_id: tabIndex
        });
      }

      function sendHomeFocusSignal(_ref3) {
        let tabIndex = _ref3.tabIndex;

        if (focus) {
          return;
        }
        focusStart = new Date().getTime();
        telemetry({
          type: 'home',
          action: 'focus',
          home_id: tabIndex
        });
      }

      /* global localStorage */

      const localStore = {
        setItem(key, value) {
          localStorage.setItem(key, value);
        },
        getItem(key) {
          return localStorage.getItem(key);
        }
      };

      const dummyStore = {
        setItem() {},
        getItem() {}
      };

      const getStore = () => {
        try {
          // test if localStorage is available - if so it should not throw
          localStorage.getItem('<whatever>');

          return localStore;
        } catch (e) {
          return dummyStore;
        }
      };

      var localStorage$1 = getStore();

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /* global window */
      /* global document */
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.freshtab = cliqz.freshtab;
          cliqz.setStorage({
            setState: this.setState.bind(this)
          });

          this.state = {
            config: {
              componentsState: {
                historyDials: {},
                customDials: {},
                search: {},
                news: {},
                background: {},
                blueTheme: false,
                isBrowser: false
              }
            },
            dials: {
              history: [],
              custom: []
            },
            offers: [],
            news: {
              version: '',
              data: []
            },
            results: [],
            removedDials: [],
            messages: {},
            isSettingsOpen: false,
            focusNews: false,
            hasHistorySpeedDialsToRestore: false
          };

          window.state = this.state;

          this.getSpeedDials = this.getSpeedDials.bind(this);
          this.addSpeedDial = this.addSpeedDial.bind(this);
          this.removeSpeedDial = this.removeSpeedDial.bind(this);
          this.handleClick = this.handleClick.bind(this);
          this.undoRemoval = this.undoRemoval.bind(this);
          this.closeUndo = this.closeUndo.bind(this);
          this.toggleComponent = this.toggleComponent.bind(this);
          this.toggleBlueTheme = this.toggleBlueTheme.bind(this);
          this.toggleBackground = this.toggleBackground.bind(this);
          this.submitFeedbackForm = this.submitFeedbackForm.bind(this);
        }

        componentDidMount() {
          window.addEventListener('click', this.handleClick);
          cliqz.freshtab.getTabIndex().then(tabIndex => {
            this.tabIndex = tabIndex;
            window.addEventListener('beforeunload', () => sendHomeUnloadSignal({ tabIndex }));
            window.addEventListener('blur', () => sendHomeBlurSignal({ tabIndex }));
            window.addEventListener('focus', () => sendHomeFocusSignal({ tabIndex }));
          });

          Promise.all([this.getNews(), this.getConfig(), this.getSpeedDials(), this.getOffers()]).then(() => {
            this.onFinishedLoading();
          });
        }

        componentWillUnmount() {
          window.removeEventListener('click', this.handleClick);
          window.removeEventListener('beforeunload', sendHomeUnloadSignal);
          window.removeEventListener('blur', sendHomeBlurSignal);
          window.removeEventListener('focus', sendHomeFocusSignal);
        }

        onHistoryClick() {
          historyClickSignal();
        }

        onMessageClicked(message) {
          const url = message.cta_url;
          let action;
          if (url.startsWith('home-action')) {
            action = url.split(':')[1];
            if (action === 'settings') {
              this.toggleSettings();
            }
            if (action === 'settings&news') {
              this.toggleSettings();
              this.focusNews();
            }
            if (action === 'openImportDialog') {
              this.freshtab.openImportDialog();
            }
          } else {
            window.location = url;
          }
        }

        onBackgroundImageChanged(bg) {
          cliqz.freshtab.saveBackgroundImage(bg);
          this.updateTheme(bg);

          // TODO: state object is too deep - we should squash it
          this.setState(prevState => ({
            config: _extends({}, prevState.config, {
              componentsState: _extends({}, prevState.config.componentsState, {
                background: _extends({}, prevState.config.componentsState.background, {
                  image: bg
                })
              })
            })
          }));
        }

        onNewsSelectionChanged(country) {
          newsSelectionChangeSignal(country);
          cliqz.freshtab.updateTopNewsCountry(country);

          // TODO: state object is too deep - we should squash it
          this.setState(prevState => ({
            focusNews: false,
            config: _extends({}, prevState.config, {
              componentsState: _extends({}, prevState.config.componentsState, {
                news: _extends({}, prevState.config.componentsState.news, {
                  preferedCountry: country
                })
              })
            })
          }));

          this.getNews();
        }

        onFinishedLoading() {
          homeConfigsStatusSignal(this.state, this.tabIndex);
        }

        getConfig() {
          return this.freshtab.getConfig().then(config => {
            const bgImage = config.componentsState.background.image;
            this.updateTheme(bgImage);
            this.setState({ config, messages: config.messages });
          });
        }

        getSpeedDials() {
          // TODO Backend should return only visible dials
          return this.freshtab.getSpeedDials().then(dials => this.setState({ dials }));
        }

        getNews() {
          // TODO backend should return news only if they are visible
          return this.freshtab.getNews().then(data => {
            this.setState({
              news: {
                version: data.version,
                data: data.news
              }
            });
          });
        }

        getOffers() {
          var _this = this;

          return this.freshtab.getOffers().then(function () {
            let offers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            _this.setState({ offers });
          });
        }

        /*
         * theme is also set inside of home.html
         */
        updateTheme(bg) {
          localStorage$1.setItem('theme', bg);
          const classList = document.body.classList;

          if (classList.contains(`theme-${bg}`)) {
            return;
          }

          document.body.className.split(' ').forEach(className => {
            if (className.indexOf('theme-') === 0) {
              classList.remove(className);
            }
          });
          classList.add(`theme-${bg}`);
        }

        restoreHistorySpeedDials() {
          settingsRestoreTopSitesSignal();
          return this.freshtab.resetAllHistory().then(dials => this.setState({
            dials,
            // keep only custom dials
            removedDials: this.state.removedDials.filter(d => d.custom),
            hasHistorySpeedDialsToRestore: false
          }));
        }

        get recentlyRemovedDial() {
          const len = this.state.removedDials.length;
          if (len === 0) {
            return {};
          }
          return this.state.removedDials[len - 1];
        }

        toggleSettings() {
          if (!this.state.isSettingsOpen) {
            settingsClickSignal();
          } else {
            this.setState({
              focusNews: false
            });
          }

          this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
          });

          this.freshtab.checkForHistorySpeedDialsToRestore().then(has => this.setState({ hasHistorySpeedDialsToRestore: has }));
        }

        focusNews() {
          this.setState({
            focusNews: true
          });
        }

        handleClick(el) {
          if (this.urlbarElem) {
            this.urlbarElem.textInput.style.visibility = 'visible';
          }
          const settingsPanel = document.querySelector('#settings-panel');
          if (!settingsPanel.contains(el.target) && el.target.id !== 'settings-btn' && el.target.className !== 'cta-btn' && el.target.className !== 'close' && el.target.id !== 'undo-notification-close' && el.target.id !== 'undo-close' && this.state.isSettingsOpen) {
            this.setState({ isSettingsOpen: false });
          }
        }

        removeSpeedDial(dial, index) {
          const isCustom = dial.custom;
          const dialType = isCustom ? 'custom' : 'history';
          const newItems = this.state.dials[dialType].filter(item => item !== dial);

          this.setState({
            dials: _extends({}, this.state.dials, {
              [dialType]: newItems
            })
          });

          this.freshtab.removeSpeedDial(dial);

          this.setState({
            removedDials: [...this.state.removedDials, _extends({}, dial, {
              removedAt: index
            })]
          });
        }

        addSpeedDial(dial, index) {
          const dialType = dial.custom ? 'custom' : 'history';
          const oldDials = this.state.dials[dialType];
          let dials;

          if (index === undefined) {
            dials = [...oldDials, dial];
          } else {
            dials = [...oldDials.slice(0, index), dial, ...oldDials.slice(index)];
          }

          this.setState({
            dials: _extends({}, this.state.dials, {
              [dialType]: dials
            })
          });
        }

        undoRemoval() {
          const speedDial = this.state.removedDials.pop();

          deleteUndoSignal(speedDial);

          if (speedDial.custom) {
            this._reAddSpeedDial.call(this, speedDial);
          } else {
            cliqz.freshtab.revertHistorySpeedDial(speedDial.url);
            this.addSpeedDial(speedDial, speedDial.removedAt);
          }
        }

        _reAddSpeedDial(dial) {
          const index = dial.removedAt;
          this.addSpeedDial(dial, index);
          cliqz.freshtab.addSpeedDial(dial.url, index).then(() => {
            const newItems = this.state.removedDials.filter(item => item !== dial);
            this.setState({
              removedDials: newItems
            });
          });
        }

        closeUndo() {
          undoCloseSignal();
          this.setState({
            removedDials: []
          });
        }

        toggleComponent(component) {
          cliqz.freshtab.toggleComponent(component);
          const config = this.state.config;
          const componentState = config.componentsState[component];
          settingsComponentsToggleSignal(component, componentState.visible);
          this.setState({
            config: _extends({}, config, {
              componentsState: _extends({}, config.componentsState, {
                [component]: _extends({}, componentState, {
                  visible: !componentState.visible
                })
              })
            })
          });
        }

        toggleBlueTheme() {
          const oldState = this.state.config.blueTheme;
          settingsComponentsToggleSignal('cliqzTheme', oldState);
          cliqz.freshtab.toggleBlueTheme();
          this.setState({
            config: _extends({}, this.state.config, {
              blueTheme: !this.state.config.blueTheme
            })
          });
        }

        _hasNoBg() {
          return this.state.config.componentsState.background.image === NO_BG;
        }

        toggleBackground() {
          const oldState = this.state.config.componentsState.background.image;
          const isOn = oldState !== NO_BG;
          settingsComponentsToggleSignal('background', isOn);
          let newBg;
          if (this._hasNoBg()) {
            newBg = this.state.config.isBlueBackgroundSupported ? DEFAULT_BG : FALLBACK_BG;
          } else {
            newBg = NO_BG;
          }
          this.onBackgroundImageChanged(newBg);
        }

        submitFeedbackForm(vote, comments) {
          cliqz.freshtab.sendUserFeedback({
            data: {
              target: 'myoffrz',
              vote,
              comments
            }
          });
        }

        get shouldShowMiddleUrlBar() {
          const searchConfig = this.state.config.componentsState.search;
          return searchConfig.visible && (!searchConfig.mode || searchConfig.mode === 'urlbar');
        }

        get shouldShowTopUrlBar() {
          const searchConfig = this.state.config.componentsState.search;
          return searchConfig.visible && searchConfig.mode === 'search';
        }

        render() {
          return React.createElement('div', {
            id: 'app'
          }, React.createElement(UndoDialRemoval, {
            dial: this.recentlyRemovedDial,
            undoRemoval: this.undoRemoval,
            closeUndo: this.closeUndo,
            isSettingsOpen: this.state.isSettingsOpen,
            visible: this.state.removedDials.length > 0
          }), React.createElement(MessageCenter, {
            position: 'top',
            locale: this.state.config.locale,
            messages: this.state.messages,
            handleLinkClick: msg => this.onMessageClicked(msg)
          }), React.createElement('aside', { className: 'aside' }, this.state.config.isHistoryEnabled && React.createElement('a', { href: CONFIG.settings.NEW_TAB_URL, id: 'cliqz-home' }, 'Home'), this.state.config.isHistoryEnabled && React.createElement('a', {
            href: CONFIG.settings.HISTORY_URL,
            id: 'cliqz-history',
            onClick: () => this.onHistoryClick()
          }, 'History')), React.createElement('section', { id: 'main-content' }, React.createElement('div', { className: 'fixed-container' }, this.shouldShowTopUrlBar && React.createElement('section', { id: 'section-url-bar' }, React.createElement(UrlbarWithResults, {
            ref: c => {
              this.urlbarElem = c;
            },
            visible: this.state.config.componentsState.search.visible,
            results: this.state.results
          })), React.createElement('section', { id: 'section-top' }), this.state.config.componentsState.historyDials.visible && React.createElement('section', { id: 'section-most-visited' }, React.createElement('div', { className: 'dial-header' }, this.state.dials.history.length > 0 && t('app_speed_dials_row_history')), React.createElement(SpeedDialsRow, {
            dials: this.state.dials.history,
            type: 'history',
            removeSpeedDial: this.removeSpeedDial,
            addSpeedDial: this.addSpeedDial,
            getSpeedDials: this.getSpeedDials
          })), this.state.config.componentsState.customDials.visible && React.createElement('section', { id: 'section-favorites' }, React.createElement('div', { className: 'dial-header with-line' }, t('app_speed_dials_row_custom')), React.createElement(SpeedDialsRow, {
            dials: this.state.dials.custom,
            type: 'custom',
            addSpeedDial: this.addSpeedDial,
            removeSpeedDial: this.removeSpeedDial
          })), React.createElement('section', { id: 'section-middle' }, this.shouldShowMiddleUrlBar && React.createElement('div', { id: 'section-url-bar' }, React.createElement(Urlbar, {
            ref: c => {
              this.urlbarElem = c;
            },
            visible: this.state.config.componentsState.search.visible
          })), this.state.offers.length === 0 && React.createElement(MessageCenter, {
            position: 'middle',
            locale: this.state.config.locale,
            messages: this.state.messages,
            handleLinkClick: msg => this.onMessageClicked(msg)
          }), this.state.offers.length > 0 && React.createElement(MiddleMessagesOffer, {
            offers: this.state.offers,
            submitFeedbackForm: this.submitFeedbackForm
          })), this.state.config.componentsState.news.visible && React.createElement('section', { id: 'section-news' }, React.createElement(News, {
            news: this.state.news,
            newsLanguage: this.state.config.componentsState.news.preferedCountry
          })), React.createElement('section', { id: 'section-bottom' }))), React.createElement('aside', { className: 'aside' }, React.createElement(Settings, {
            onBackgroundImageChanged: bg => this.onBackgroundImageChanged(bg),
            onNewsSelectionChanged: country => this.onNewsSelectionChanged(country),
            toggleComponent: this.toggleComponent,
            toggleBlueTheme: this.toggleBlueTheme,
            blueTheme: this.state.config.blueTheme,
            isBlueThemeSupported: this.state.config.isBlueThemeSupported,
            toggleBackground: this.toggleBackground,
            isBlueBackgroundSupported: this.state.config.isBlueBackgroundSupported,
            isBrowser: this.state.config.isBrowser,
            isOpen: this.state.isSettingsOpen,
            focusNews: this.state.focusNews,
            componentsState: this.state.config.componentsState,
            hasHistorySpeedDialsToRestore: this.state.hasHistorySpeedDialsToRestore,
            toggle: () => this.toggleSettings(),
            restoreHistorySpeedDials: () => this.restoreHistorySpeedDials()
          }), this.state.isSettingsOpen || React.createElement('button', {
            id: 'settings-btn',
            onClick: () => this.toggleSettings()
          }, 'Settings')));
        }
      }

      /* global document */
      checkIfChromeReady().then(() => {
        ReactDOM.render(React.createElement(App, {}, null), document.getElementById('root'));
      });
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["react-dom","react"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("react-dom"), require("react"));
  else
    CliqzGlobal = factory(ReactDOM, React);
});