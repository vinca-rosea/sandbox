/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/picedit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/es6-promise/auto.js":
/*!******************************************!*\
  !*** ./node_modules/es6-promise/auto.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');


module.exports = __webpack_require__(/*! ./ */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function objectOrFunction(x) {
    var type = _typeof(x);

    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var _isArray = void 0;

  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;
  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;

    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]'; // test for web worker but not in IE10

  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined'; // node

  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  } // vertx


  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {
      characterData: true
    });
    return function () {
      node.data = iterations = ++iterations % 2;
    };
  } // web worker


  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);

  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var vertx = Function('return this')().require('vertx');

      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0; // Decide what async method to use to triggering processing of queued callbacks:

  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;
    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;

    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }
  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.resolve(1);
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */


  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && _typeof(object) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(2);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }

        sealed = true;

        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }

        sealed = true;
        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      var then$$1 = void 0;

      try {
        then$$1 = value.then;
      } catch (error) {
        reject(promise, error);
        return;
      }

      handleMaybeThenable(promise, value, then$$1);
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._state = REJECTED;
    promise._result = reason;
    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;
    parent._onerror = null;
    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = true;

    if (hasCallback) {
      try {
        value = callback(detail);
      } catch (e) {
        succeeded = false;
        error = e;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
    }

    if (promise._state !== PENDING) {// noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (succeeded === false) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;

  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;
        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;

          this._enumerate(input);

          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    Enumerator.prototype._enumerate = function _enumerate(input) {
      for (var i = 0; this._state === PENDING && i < input.length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
      var c = this._instanceConstructor;
      var resolve$$1 = c.resolve;

      if (resolve$$1 === resolve$1) {
        var _then = void 0;

        var error = void 0;
        var didError = false;

        try {
          _then = entry.then;
        } catch (e) {
          didError = true;
          error = e;
        }

        if (_then === then && entry._state !== PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof _then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === Promise$1) {
          var promise = new c(noop);

          if (didError) {
            reject(promise, error);
          } else {
            handleMaybeThenable(promise, entry, _then);
          }

          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function (resolve$$1) {
            return resolve$$1(entry);
          }), i);
        }
      } else {
        this._willSettleAt(resolve$$1(entry), i);
      }
    };

    Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
      var promise = this.promise;

      if (promise._state === PENDING) {
        this._remaining--;

        if (state === REJECTED) {
          reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        fulfill(promise, this._result);
      }
    };

    Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
      var enumerator = this;
      subscribe(promise, undefined, function (value) {
        return enumerator._settledAt(FULFILLED, i, value);
      }, function (reason) {
        return enumerator._settledAt(REJECTED, i, reason);
      });
    };

    return Enumerator;
  }();
  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```
  
    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```
  
    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */


  function all(entries) {
    return new Enumerator(this, entries).promise;
  }
  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.
  
    Example:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```
  
    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```
  
    An example real-world use case is implementing timeouts:
  
    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```
  
    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */


  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;

        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }
  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */


  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }
  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.
  
    Terminology
    -----------
  
    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.
  
    A promise can be in one of three states: pending, fulfilled, or rejected.
  
    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.
  
    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.
  
  
    Basic Usage:
    ------------
  
    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);
  
      // on failure
      reject(reason);
    });
  
    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Advanced Usage:
    ---------------
  
    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.
  
    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
  
        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
  
        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }
  
    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Unlike callbacks, promises are great composable primitives.
  
    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON
  
      return values;
    });
    ```
  
    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */


  var Promise$1 = function () {
    function Promise(resolver) {
      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }
    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */


    Promise.prototype["catch"] = function _catch(onRejection) {
      return this.then(null, onRejection);
    };
    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves
    
      Synchronous example:
    
      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }
    
      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```
    
      Asynchronous example:
    
      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```
    
      @method finally
      @param {Function} callback
      @return {Promise}
    */


    Promise.prototype["finally"] = function _finally(callback) {
      var promise = this;
      var constructor = promise.constructor;

      if (isFunction(callback)) {
        return promise.then(function (value) {
          return constructor.resolve(callback()).then(function () {
            return value;
          });
        }, function (reason) {
          return constructor.resolve(callback()).then(function () {
            throw reason;
          });
        });
      }

      return promise.then(callback, callback);
    };

    return Promise;
  }();

  Promise$1.prototype.then = then;
  Promise$1.all = all;
  Promise$1.race = race;
  Promise$1.resolve = resolve$1;
  Promise$1.reject = reject$1;
  Promise$1._setScheduler = setScheduler;
  Promise$1._setAsap = setAsap;
  Promise$1._asap = asap;
  /*global self*/

  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;

      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {// silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$1;
  } // Strange compat..


  Promise$1.polyfill = polyfill;
  Promise$1.Promise = Promise$1;
  return Promise$1;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/picedit.js":
/*!************************!*\
  !*** ./src/picedit.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_0__);

feather.replace();
var defaultFont = 'Noto Serif JP';
WebFont.load({
  google: {
    families: [defaultFont]
  },
  active: function active() {
    var file = document.querySelector('input[type=file]');
    var download = document.querySelector('#dl');
    var crop = document.querySelector('#crop');
    var keikaku = document.querySelector('#keikaku');
    var balloon1 = document.querySelector('#balloon1');
    var balloon2 = document.querySelector('#balloon2');
    var balloon3 = document.querySelector('#balloon3');
    var clip1 = document.querySelector('#clip1');
    var addText = document.querySelector('#addText');
    var copyRight = document.querySelector('#copyRight');
    var textRange = document.querySelector('#textRange');
    var remove = document.querySelector('#remove');
    var zUp = document.querySelector('#zUp');
    var zDown = document.querySelector('#zDown');
    var gifAnimation = document.querySelector('#gifAnimation');
    var invert = document.querySelector('#invert');
    var grayscale = document.querySelector('#grayscale');
    var brownie = document.querySelector('#brownie');
    var vintage = document.querySelector('#vintage');
    var technicolor = document.querySelector('#technicolor');
    var kodachrome = document.querySelector('#kodachrome');
    var polaroid = document.querySelector('#polaroid');
    var blackwhite = document.querySelector('#blackwhite');
    var canvasWrapper = document.querySelector('#canvasWrapper');
    var sizeHalf = document.querySelector('#sizeHalf');
    var size2_3 = document.querySelector('#size2_3');
    var size2 = document.querySelector('#size2');
    var size4_3 = document.querySelector('#size4_3');
    var menuLoad = document.querySelector('#menuLoad');
    var menuDl = document.querySelector('#menuDl');
    var opacity = document.querySelector('#opacity');
    var matrixTransform = document.querySelector('#matrixTransform');
    var font = document.querySelector('#font');
    var canvas = new fabric.Canvas('canvas1');
    var fontList = [defaultFont, 'Roboto', 'Sawarabi Mincho'];
    var loadfontList = [defaultFont];
    var addedTextAndBalloon = [];
    var image;
    var userAgent = window.navigator.userAgent.toLowerCase();

    for (var i = 0, n = fontList.length; i < n; ++i) {
      var defaultFontOption = document.createElement("option");
      defaultFontOption.text = fontList[i];
      defaultFontOption.value = fontList[i];
      font.add(defaultFontOption);
    }

    $('#fileDialog').modal({
      keyboard: false
    }).modal('show');
    fabric.Object.prototype.set({
      transparentCorners: false,
      borderColor: '#ff00ff',
      cornerColor: '#ff0000'
    });
    file.addEventListener('change', function (e) {
      var fileData = e.target.files[0];
      var reader = new FileReader();
      new Promise(function (resolve) {
        reader.onload = function () {
          resolve(reader.result);
        };

        reader.readAsDataURL(fileData);
      }).then(function (result) {
        fabric.Image.fromURL(result, function (img) {
          canvas.clear();
          canvas.setWidth(img.width);
          canvas.setHeight(img.height);
          img.selectable = false;
          fabric.textureSize = Math.max(img.width, img.height);
          canvas.add(img);
          image = img;
          canvas.renderAll();
        });
        $('#fileDialog').modal('hide');
      });
    }, false);
    sizeHalf.addEventListener('click', function (e) {
      changeImageSize(1 / 2);
    }, false);
    size2_3.addEventListener('click', function (e) {
      changeImageSize(2 / 3);
    }, false);
    size2.addEventListener('click', function (e) {
      changeImageSize(2);
    }, false);
    size4_3.addEventListener('click', function (e) {
      changeImageSize(4 / 3);
    }, false);

    function changeImageSize(ratio) {
      if (image == null) return;
      image.scaleX = image.scaleX * ratio;
      image.scaleY = image.scaleY * ratio;
      canvas.setWidth(image.width * image.scaleX);
      canvas.setHeight(image.height * image.scaleY);
      canvas.renderAll();
    }

    var cropBox;
    crop.addEventListener('click', function (e) {
      if (cropBox == null) {
        cropBox = new fabric.Textbox('この矩形のサイズを調整した後\nもう一度切り抜きボタンを押すと\n矩形にあわせて切り抜きます', {
          backgroundColor: 'blue',
          left: 10,
          top: 10,
          fontFamily: defaultFont,
          fill: '#fff',
          opacity: 0.5
        });
        canvas.add(cropBox);
        canvas.renderAll();
      } else {
        var rect = cropBox.getBoundingRect();
        image.cloneAsImage(function (img) {
          canvas.clear();
          canvas.setWidth(rect.width);
          canvas.setHeight(rect.height);
          img.selectable = false;
          canvas.add(img);
          image = img;
          cropBox = null;
          canvas.renderAll();
        }, {
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
    }, false);
    download.addEventListener('click', function (e) {
      var rawUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      var parse = rawUrl.slice(5).split(/[,;]/);
      var binStr = atob(parse.pop());
      var l = binStr.length;
      var array = new Uint8Array(l);

      for (var _i = 0; _i < l; _i++) {
        array[_i] = binStr.charCodeAt(_i);
      }

      var blob = new Blob([array], {
        type: parse[0]
      });

      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, "output.png");
        return;
      }

      var blobUrl = URL.createObjectURL(blob);
      var tmpLink = document.createElement('a');
      tmpLink.href = blobUrl;
      tmpLink.download = "output.png";
      tmpLink.click();
      setTimeout(function () {
        document.body.removeChild(tmpLink);
        URL.revokeObjectURL(blobUrl);
      }, 60000);
    }, false);
    keikaku.addEventListener('click', function (e) {
      var rect = image.getBoundingRect();
      var textSize = rect.height / 5;
      var smallTextSize = textSize / 5;
      var textBox = new fabric.Textbox('計\n画\n通\nり', {
        left: 10,
        top: 10,
        fontSize: textSize,
        fill: '#000000',
        shadow: '#ffffff 0px 0px 20px',
        fontWeight: 'bold',
        fontFamily: defaultFont,
        lineHeight: 1
      });
      var smallTextBox = new fabric.Textbox('\nけ\n\nい\n\n\nか\n\nく\n\n\nど\n\nお', {
        left: 10 + textSize + 5,
        top: 10,
        fontSize: smallTextSize,
        fill: '#000000',
        shadow: '#ffffff 0px 0px 10px',
        fontWeight: 'bold',
        fontFamily: defaultFont,
        lineHeight: 1
      });
      createObjectPostProcess(textBox);
      canvas.add(textBox);
      canvas.setActiveObject(textBox);
      createObjectPostProcess(smallTextBox);
      canvas.add(smallTextBox);
      canvas.renderAll();
    }, false);
    balloon1.addEventListener('click', function (e) {
      loadSVGFile('svg/e0502_1.svg');
    }, false);
    balloon2.addEventListener('click', function (e) {
      loadSVGFile('svg/e0198_1.svg');
    }, false);
    balloon3.addEventListener('click', function (e) {
      loadSVGFile('svg/e0801_1.svg');
    }, false);
    clip1.addEventListener('click', function (e) {
      loadSVGFile('svg/reiwa-era-kanji.svg');
    }, false);

    function loadSVGFile(path) {
      var path = fabric.loadSVGFromURL(path, function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.scaleX = canvas.width / obj.width / 2;
        obj.scaleY = canvas.height / obj.height / 2;
        canvas.setActiveObject(obj);
        addedTextAndBalloon.push(obj);
        createObjectPostProcess(obj);
        canvas.add(obj).renderAll();
      });
    }

    addText.addEventListener('click', function (e) {
      var textSize = image.height / 5;
      var textBox = new fabric.Textbox('Text', {
        left: 10,
        top: 10,
        fontSize: textSize,
        fill: '#000000',
        shadow: '#ffffff 0px 0px 3px',
        fontWeight: 'bold',
        fontFamily: defaultFont,
        lineHeight: 1
      });
      textBox.on('selected', function () {
        textRange.value = textBox.fontSize;
      });
      createObjectPostProcess(textBox);
      canvas.add(textBox);
      canvas.setActiveObject(textBox);
      addedTextAndBalloon.push(textBox);
      canvas.renderAll();
    }, false);
    copyRight.addEventListener('click', function (e) {
      var textSize = image.height / 5;
      var textBox = new fabric.Textbox('Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.', {
        left: 10,
        top: 10,
        fontSize: 14,
        fill: '#ffffff',
        strokeWidth: 1,
        stroke: "#000000",
        fontFamily: defaultFont,
        lineHeight: 1,
        fontWeight: 'bold',
        breakWords: false
      });
      textBox.on('selected', function () {
        textRange.value = textBox.fontSize;
      });
      createObjectPostProcess(textBox);
      canvas.add(textBox);
      canvas.setActiveObject(textBox);
      canvas.renderAll();
    }, false);
    textRange.addEventListener('input', function (e) {
      var object = canvas.getActiveObject();

      if (object.type == "textbox") {
        object.fontSize = e.currentTarget.value;
        canvas.setActiveObject(object);
      }

      canvas.renderAll();
    }, false);
    font.addEventListener('change', function (e) {
      var object = canvas.getActiveObject();

      if (object.type == "textbox") {
        var fontFamily = e.currentTarget.value;

        if (loadfontList.indexOf(e.currentTarget.value) != -1) {
          object.fontFamily = fontFamily;
          canvas.renderAll();
        } else {
          WebFont.load({
            google: {
              families: [fontFamily]
            },
            active: function active() {
              loadfontList.push(fontFamily);
              object.fontFamily = fontFamily;
              canvas.renderAll();
            }
          });
        }
      }
    });
    matrixTransform.addEventListener('click', function (e) {
      var object = canvas.getActiveObject();

      if (object.type == "textbox") {
        object.text = transformMatrix(object.text);
        canvas.renderAll();
      }
    }, false);

    function transformMatrix(src) {
      var t = src.split('\n');
      var mlen = 0;

      for (var _i2 = 0, _n = t.length; _i2 < _n; ++_i2) {
        if (mlen < t[_i2].length) mlen = t[_i2].length;
      }

      var result = "";

      for (var _i3 = 0; _i3 < mlen; ++_i3) {
        var line = "";

        for (var j = t.length - 1; j >= 0; --j) {
          line += t[j].length <= _i3 ? " " : t[j].charAt(_i3);
        }

        if (_i3 != mlen - 1) {
          line += '\n';
        }

        result += line;
      }

      return result;
    }

    opacity.addEventListener('input', function (e) {
      var object = canvas.getActiveObject();
      object.opacity = e.currentTarget.value;
      canvas.renderAll();
    }, false);
    zUp.addEventListener('click', function (e) {
      var object = canvas.getActiveObject();
      object.moveTo(canvas._objects.length - 1);
      canvas.renderAll();
    }, false);
    zDown.addEventListener('click', function (e) {
      var object = canvas.getActiveObject();
      object.moveTo(1);
      canvas.renderAll();
    }, false);
    remove.addEventListener('click', function (e) {
      var object = canvas.getActiveObject();
      canvas.remove(object);
      canvas.renderAll();
    }, false);
    gifAnimation.addEventListener('click', function (e) {
      var encoder = new GIFEncoder();
      encoder.setRepeat(0); // 0 = loop

      encoder.setDelay(10); //go to next frame every n milliseconds

      encoder.start();
      var addedTextPos = [];

      for (var _i4 = 0, _n2 = addedTextAndBalloon.length; _i4 < _n2; ++_i4) {
        addedTextPos.push([addedTextAndBalloon[_i4], addedTextAndBalloon[_i4].left, addedTextAndBalloon[_i4].top]);
      }

      for (var _i5 = 0; _i5 < 3; ++_i5) {
        for (var j = 0, _n3 = addedTextPos.length; j < _n3; ++j) {
          var target = addedTextPos[j][0];
          var left = addedTextPos[j][1];
          var top = addedTextPos[j][2];
          target.left = left + Math.round(Math.random() * 10) - 5;
          target.top = top + Math.round(Math.random() * 20) - 10;
        }

        canvas.renderAll();
        encoder.addFrame(canvas.getContext());
      }

      encoder.finish();
      var binaryGIF = encoder.stream().getData();
      var rawUrl = 'data:image/gif;base64,' + encode64(binaryGIF);
      var parse = rawUrl.slice(5).split(/[,;]/);
      var binStr = atob(parse.pop());
      var l = binStr.length;
      var array = new Uint8Array(l);

      for (var _i6 = 0; _i6 < l; _i6++) {
        array[_i6] = binStr.charCodeAt(_i6);
      }

      var blob = new Blob([array], {
        type: parse[0]
      });
      var blobUrl = URL.createObjectURL(blob);
      var tmpLink = document.createElement('a');
      tmpLink.href = blobUrl;
      tmpLink.download = "output.gif";
      tmpLink.click();
      setTimeout(function () {
        document.body.removeChild(tmpLink);
        URL.revokeObjectURL(blobUrl);
      }, 60000);
    }, false);
    invert.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Invert());
    }, false);
    grayscale.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Grayscale());
    }, false);
    brownie.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Brownie());
    }, false);
    vintage.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Vintage());
    }, false);
    technicolor.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Technicolor());
    }, false);
    kodachrome.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Kodachrome());
    }, false);
    polaroid.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.Polaroid());
    }, false);
    blackwhite.addEventListener('click', function (e) {
      e.currentTarget.checkd = applyFilter(new fabric.Image.filters.BlackWhite());
    }, false);

    function applyFilter(filter) {
      var found = false;

      for (var _i7 = 0, _n4 = image.filters.length; _i7 < _n4; ++_i7) {
        if (image.filters[_i7].type == filter.type) {
          found = true;
          image.filters.splice(_i7, 1);
          image.applyFilters();
          break;
        }
      }

      if (!found) {
        image.filters.push(filter);
        image.applyFilters();
      }

      canvas.renderAll();
      return !found;
    }

    menuLoad.addEventListener('click', function (e) {
      $('#fileDialog').modal({
        keyboard: false
      }).modal('show');
    }, false);
    menuDl.addEventListener('click', function (e) {
      $('#dlDialog').modal({
        keyboard: false
      }).modal('show');
    }, false);

    function createObjectPostProcess(object) {
      object.on('selected', function () {
        opacity.value = object.opacity;

        if (object.type == 'textbox') {
          font.value = object.fontFamily;
        }
      });
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlL2F1dG8uanMiLCJ3ZWJwYWNrOi8vL2NvbmZpZy92ZXJzaW9uVGVtcGxhdGUudHh0Iiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9hc2FwLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdGhlbi5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlLy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL2VudW1lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9wcm9taXNlL2FsbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmFjZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVqZWN0LmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9waWNlZGl0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicG9seWZpbGwiLCJyZXNvbHZlIiwiX3Jlc29sdmUiLCJ0aGVuIiwib3JpZ2luYWxUaGVuIiwib3JpZ2luYWxSZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsIl9yZWplY3QiLCJSZXNvbHZlIiwiUmVqZWN0IiwicHJvY2VzcyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImciLCJGdW5jdGlvbiIsIndpbmRvdyIsImZlYXRoZXIiLCJyZXBsYWNlIiwiZGVmYXVsdEZvbnQiLCJXZWJGb250IiwibG9hZCIsImdvb2dsZSIsImZhbWlsaWVzIiwiYWN0aXZlIiwiZmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRvd25sb2FkIiwiY3JvcCIsImtlaWtha3UiLCJiYWxsb29uMSIsImJhbGxvb24yIiwiYmFsbG9vbjMiLCJjbGlwMSIsImFkZFRleHQiLCJjb3B5UmlnaHQiLCJ0ZXh0UmFuZ2UiLCJyZW1vdmUiLCJ6VXAiLCJ6RG93biIsImdpZkFuaW1hdGlvbiIsImludmVydCIsImdyYXlzY2FsZSIsImJyb3duaWUiLCJ2aW50YWdlIiwidGVjaG5pY29sb3IiLCJrb2RhY2hyb21lIiwicG9sYXJvaWQiLCJibGFja3doaXRlIiwiY2FudmFzV3JhcHBlciIsInNpemVIYWxmIiwic2l6ZTJfMyIsInNpemUyIiwic2l6ZTRfMyIsIm1lbnVMb2FkIiwibWVudURsIiwib3BhY2l0eSIsIm1hdHJpeFRyYW5zZm9ybSIsImZvbnQiLCJjYW52YXMiLCJmYWJyaWMiLCJDYW52YXMiLCJmb250TGlzdCIsImxvYWRmb250TGlzdCIsImFkZGVkVGV4dEFuZEJhbGxvb24iLCJpbWFnZSIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwibiIsImRlZmF1bHRGb250T3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJ2YWx1ZSIsImFkZCIsIiQiLCJtb2RhbCIsImtleWJvYXJkIiwiT2JqZWN0Iiwic2V0IiwidHJhbnNwYXJlbnRDb3JuZXJzIiwiYm9yZGVyQ29sb3IiLCJjb3JuZXJDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlRGF0YSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJJbWFnZSIsImZyb21VUkwiLCJpbWciLCJjbGVhciIsInNldFdpZHRoIiwid2lkdGgiLCJzZXRIZWlnaHQiLCJoZWlnaHQiLCJzZWxlY3RhYmxlIiwidGV4dHVyZVNpemUiLCJNYXRoIiwibWF4IiwicmVuZGVyQWxsIiwiY2hhbmdlSW1hZ2VTaXplIiwicmF0aW8iLCJzY2FsZVgiLCJzY2FsZVkiLCJjcm9wQm94IiwiVGV4dGJveCIsImJhY2tncm91bmRDb2xvciIsImxlZnQiLCJ0b3AiLCJmb250RmFtaWx5IiwiZmlsbCIsInJlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJjbG9uZUFzSW1hZ2UiLCJyYXdVcmwiLCJ0b0RhdGFVUkwiLCJmb3JtYXQiLCJxdWFsaXR5IiwicGFyc2UiLCJzbGljZSIsInNwbGl0IiwiYmluU3RyIiwiYXRvYiIsInBvcCIsImwiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIm1zU2F2ZUJsb2IiLCJibG9iVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidG1wTGluayIsImhyZWYiLCJjbGljayIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInJldm9rZU9iamVjdFVSTCIsInRleHRTaXplIiwic21hbGxUZXh0U2l6ZSIsInRleHRCb3giLCJmb250U2l6ZSIsInNoYWRvdyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwic21hbGxUZXh0Qm94IiwiY3JlYXRlT2JqZWN0UG9zdFByb2Nlc3MiLCJzZXRBY3RpdmVPYmplY3QiLCJsb2FkU1ZHRmlsZSIsInBhdGgiLCJsb2FkU1ZHRnJvbVVSTCIsIm9iamVjdHMiLCJvcHRpb25zIiwib2JqIiwidXRpbCIsImdyb3VwU1ZHRWxlbWVudHMiLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsImJyZWFrV29yZHMiLCJvYmplY3QiLCJnZXRBY3RpdmVPYmplY3QiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZiIsInRyYW5zZm9ybU1hdHJpeCIsInNyYyIsInQiLCJtbGVuIiwibGluZSIsImoiLCJjaGFyQXQiLCJtb3ZlVG8iLCJfb2JqZWN0cyIsImVuY29kZXIiLCJHSUZFbmNvZGVyIiwic2V0UmVwZWF0Iiwic2V0RGVsYXkiLCJzdGFydCIsImFkZGVkVGV4dFBvcyIsInJvdW5kIiwicmFuZG9tIiwiYWRkRnJhbWUiLCJnZXRDb250ZXh0IiwiZmluaXNoIiwiYmluYXJ5R0lGIiwic3RyZWFtIiwiZ2V0RGF0YSIsImVuY29kZTY0IiwiY2hlY2tkIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJzIiwiSW52ZXJ0IiwiR3JheXNjYWxlIiwiQnJvd25pZSIsIlZpbnRhZ2UiLCJUZWNobmljb2xvciIsIktvZGFjaHJvbWUiLCJQb2xhcm9pZCIsIkJsYWNrV2hpdGUiLCJmaWx0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QU9BckIsVUFBTSxDQUFDNEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFDRSxVQUFDekgsQ0FBRCxFQUFPO0FBQ0xpSCxPQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLEtBQWYsQ0FBcUI7QUFDbkJDLGdCQUFRLEVBQUU7QUFEUyxPQUFyQixFQUVHRCxLQUZILENBRVMsTUFGVDtBQUdELEtBTEgsRUFLSyxLQUxMOztBQU9BLGFBQVM2RSx1QkFBVCxDQUFpQ2EsTUFBakMsRUFBeUM7QUFDdkNBLFlBQU0sQ0FBQ3pLLEVBQVAsQ0FBVSxVQUFWLEVBQXNCLFlBQVk7QUFDaEMyRCxlQUFPLENBQUNpQixLQUFSLEdBQWdCNkYsTUFBTSxDQUFDOUcsT0FBdkI7O0FBQ0EsWUFBRzhHLE1BQU0sQ0FBQ2hDLElBQVAsSUFBZSxTQUFsQixFQUE0QjtBQUMxQjVFLGNBQUksQ0FBQ2UsS0FBTCxHQUFhNkYsTUFBTSxDQUFDcEQsVUFBcEI7QUFDRDtBQUNGLE9BTEQ7QUFNRDtBQUNGO0FBNWZVLENBQWIsRSIsImZpbGUiOiJwaWNlZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGljZWRpdC5qc1wiKTtcbiIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVxdWlyZWQgaW4gQnJvd3NlcmlmeSBhbmQgTm9kZS5qcyBmb3IgYXV0b21hdGljIHBvbHlmaWxsXG4vLyBUbyB1c2UgaXQ6ICByZXF1aXJlKCdlczYtcHJvbWlzZS9hdXRvJyk7XG4ndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJykucG9seWZpbGwoKTtcbiIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgdjQuMi44KzFlNjhkY2U2XG4gKi9cbiIsImV4cG9ydCBmdW5jdGlvbiBvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgeDtcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWF5YmVUaGVuYWJsZSh4KSB7XG4gIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cblxudmFyIF9pc0FycmF5ID0gdm9pZCAwO1xuaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xufSBlbHNlIHtcbiAgX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaXNBcnJheSA9IF9pc0FycmF5OyIsInZhciBsZW4gPSAwO1xudmFyIHZlcnR4TmV4dCA9IHZvaWQgMDtcbnZhciBjdXN0b21TY2hlZHVsZXJGbiA9IHZvaWQgMDtcblxuZXhwb3J0IHZhciBhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gIGxlbiArPSAyO1xuICBpZiAobGVuID09PSAyKSB7XG4gICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgIGlmIChjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgY3VzdG9tU2NoZWR1bGVyRm4oZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXNhcChhc2FwRm4pIHtcbiAgYXNhcCA9IGFzYXBGbjtcbn1cblxudmFyIGJyb3dzZXJXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbnZhciBicm93c2VyR2xvYmFsID0gYnJvd3NlcldpbmRvdyB8fCB7fTtcbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbi8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG52YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBub2RlXG5mdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbn1cblxuLy8gdmVydHhcbmZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gIGlmICh0eXBlb2YgdmVydHhOZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGF0YSA9IGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyO1xuICB9O1xufVxuXG4vLyB3ZWIgd29ya2VyXG5mdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gZXM2LXByb21pc2Ugd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICB9O1xufVxuXG52YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG5cbiAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuICB0cnkge1xuICAgIHZhciB2ZXJ0eCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCkucmVxdWlyZSgndmVydHgnKTtcbiAgICB2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICB9XG59XG5cbnZhciBzY2hlZHVsZUZsdXNoID0gdm9pZCAwO1xuLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbmlmIChpc05vZGUpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG59IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG59IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xufSBlbHNlIGlmIChicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IGF0dGVtcHRWZXJ0eCgpO1xufSBlbHNlIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbn0iLCJpbXBvcnQgeyBpbnZva2VDYWxsYmFjaywgc3Vic2NyaWJlLCBGVUxGSUxMRUQsIFJFSkVDVEVELCBub29wLCBtYWtlUHJvbWlzZSwgUFJPTUlTRV9JRCB9IGZyb20gJy4vLWludGVybmFsJztcblxuaW1wb3J0IHsgYXNhcCB9IGZyb20gJy4vYXNhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaWYgKGNoaWxkW1BST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICBtYWtlUHJvbWlzZShjaGlsZCk7XG4gIH1cblxuICB2YXIgX3N0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuXG4gIGlmIChfc3RhdGUpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbX3N0YXRlIC0gMV07XG4gICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2soX3N0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufSIsImltcG9ydCB7IG5vb3AsIHJlc29sdmUgYXMgX3Jlc29sdmUgfSBmcm9tICcuLi8taW50ZXJuYWwnO1xuXG4vKipcbiAgYFByb21pc2UucmVzb2x2ZWAgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSByZXNvbHZlZCB3aXRoIHRoZVxuICBwYXNzZWQgYHZhbHVlYC4gSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlc29sdmUoMSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKDEpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVzb2x2ZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSB2YWx1ZSB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aFxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIGZ1bGZpbGxlZCB3aXRoIHRoZSBnaXZlblxuICBgdmFsdWVgXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZShvYmplY3QpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gIHJldHVybiBwcm9taXNlO1xufSIsImltcG9ydCB7IG9iamVjdE9yRnVuY3Rpb24sIGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXNhcCB9IGZyb20gJy4vYXNhcCc7XG5cbmltcG9ydCBvcmlnaW5hbFRoZW4gZnJvbSAnLi90aGVuJztcbmltcG9ydCBvcmlnaW5hbFJlc29sdmUgZnJvbSAnLi9wcm9taXNlL3Jlc29sdmUnO1xuXG5leHBvcnQgdmFyIFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgUEVORElORyA9IHZvaWQgMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcblxuZnVuY3Rpb24gc2VsZkZ1bGZpbGxtZW50KCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG59XG5cbmZ1bmN0aW9uIGNhbm5vdFJldHVybk93bigpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbn1cblxuZnVuY3Rpb24gdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gIHRyeSB7XG4gICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gIGFzYXAoZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgdmFyIGVycm9yID0gdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH1cbiAgfSwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IEZVTEZJTExFRCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbikge1xuICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJiB0aGVuID09PSBvcmlnaW5hbFRoZW4gJiYgbWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSBvcmlnaW5hbFJlc29sdmUpIHtcbiAgICBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgIHJlamVjdChwcm9taXNlLCBzZWxmRnVsZmlsbG1lbnQoKSk7XG4gIH0gZWxzZSBpZiAob2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgdGhlbiA9IHZvaWQgMDtcbiAgICB0cnkge1xuICAgICAgdGhlbiA9IHZhbHVlLnRoZW47XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIHRoZW4pO1xuICB9IGVsc2Uge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgfVxuXG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuXG4gIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICBhc2FwKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIF9zdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gIHZhciBsZW5ndGggPSBfc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG5cbiAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICBfc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBSRUpFQ1RFRF0gPSBvblJlamVjdGlvbjtcblxuICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHBhcmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDAsXG4gICAgICBjYWxsYmFjayA9IHZvaWQgMCxcbiAgICAgIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgIGlmIChjaGlsZCkge1xuICAgICAgaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdmFyIGhhc0NhbGxiYWNrID0gaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICB2YWx1ZSA9IHZvaWQgMCxcbiAgICAgIGVycm9yID0gdm9pZCAwLFxuICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcblxuICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBjYWxsYmFjayhkZXRhaWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBkZXRhaWw7XG4gIH1cblxuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAvLyBub29wXG4gIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc3VjY2VlZGVkID09PSBmYWxzZSkge1xuICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgfVxufVxuXG52YXIgaWQgPSAwO1xuZnVuY3Rpb24gbmV4dElkKCkge1xuICByZXR1cm4gaWQrKztcbn1cblxuZnVuY3Rpb24gbWFrZVByb21pc2UocHJvbWlzZSkge1xuICBwcm9taXNlW1BST01JU0VfSURdID0gaWQrKztcbiAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbn1cblxuZXhwb3J0IHsgbmV4dElkLCBtYWtlUHJvbWlzZSwgbm9vcCwgcmVzb2x2ZSwgcmVqZWN0LCBmdWxmaWxsLCBzdWJzY3JpYmUsIHB1Ymxpc2gsIHB1Ymxpc2hSZWplY3Rpb24sIGluaXRpYWxpemVQcm9taXNlLCBpbnZva2VDYWxsYmFjaywgRlVMRklMTEVELCBSRUpFQ1RFRCwgUEVORElORywgaGFuZGxlTWF5YmVUaGVuYWJsZSB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCB7IGlzQXJyYXksIGlzTWF5YmVUaGVuYWJsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm9vcCwgcmVqZWN0LCBmdWxmaWxsLCBzdWJzY3JpYmUsIEZVTEZJTExFRCwgUkVKRUNURUQsIFBFTkRJTkcsIGhhbmRsZU1heWJlVGhlbmFibGUgfSBmcm9tICcuLy1pbnRlcm5hbCc7XG5cbmltcG9ydCB0aGVuIGZyb20gJy4vdGhlbic7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL3Byb21pc2UnO1xuaW1wb3J0IG9yaWdpbmFsUmVzb2x2ZSBmcm9tICcuL3Byb21pc2UvcmVzb2x2ZSc7XG5pbXBvcnQgb3JpZ2luYWxUaGVuIGZyb20gJy4vdGhlbic7XG5pbXBvcnQgeyBtYWtlUHJvbWlzZSwgUFJPTUlTRV9JRCB9IGZyb20gJy4vLWludGVybmFsJztcblxuZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbn07XG5cbnZhciBFbnVtZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG5cbiAgICBpZiAoIXRoaXMucHJvbWlzZVtQUk9NSVNFX0lEXSkge1xuICAgICAgbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgIHRoaXMuX2VudW1lcmF0ZShpbnB1dCk7XG4gICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWplY3QodGhpcy5wcm9taXNlLCB2YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgfVxuICB9XG5cbiAgRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uIF9lbnVtZXJhdGUoaW5wdXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IFBFTkRJTkcgJiYgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgIH1cbiAgfTtcblxuICBFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24gX2VhY2hFbnRyeShlbnRyeSwgaSkge1xuICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICB2YXIgcmVzb2x2ZSA9IGMucmVzb2x2ZTtcblxuXG4gICAgaWYgKHJlc29sdmUgPT09IG9yaWdpbmFsUmVzb2x2ZSkge1xuICAgICAgdmFyIF90aGVuID0gdm9pZCAwO1xuICAgICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICBfdGhlbiA9IGVudHJ5LnRoZW47XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoZW4gPT09IG9yaWdpbmFsVGhlbiAmJiBlbnRyeS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICB9IGVsc2UgaWYgKGMgPT09IFByb21pc2UpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhub29wKTtcbiAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCBfdGhlbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoZW50cnkpO1xuICAgICAgICB9KSwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlKGVudHJ5KSwgaSk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbiBfc2V0dGxlZEF0KHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG5cbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbiBfd2lsbFNldHRsZUF0KHByb21pc2UsIGkpIHtcbiAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICBzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRW51bWVyYXRvcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgRW51bWVyYXRvcjtcbjsiLCJpbXBvcnQgRW51bWVyYXRvciBmcm9tICcuLi9lbnVtZXJhdG9yJztcblxuLyoqXG4gIGBQcm9taXNlLmFsbGAgYWNjZXB0cyBhbiBhcnJheSBvZiBwcm9taXNlcywgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaFxuICBpcyBmdWxmaWxsZWQgd2l0aCBhbiBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXMgZm9yIHRoZSBwYXNzZWQgcHJvbWlzZXMsIG9yXG4gIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuICBlbGVtZW50cyBvZiB0aGUgcGFzc2VkIGl0ZXJhYmxlIHRvIHByb21pc2VzIGFzIGl0IHJ1bnMgdGhpcyBhbGdvcml0aG0uXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlc29sdmUoMik7XG4gIGxldCBwcm9taXNlMyA9IHJlc29sdmUoMyk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcbiAgfSk7XG4gIGBgYFxuXG4gIElmIGFueSBvZiB0aGUgYHByb21pc2VzYCBnaXZlbiB0byBgYWxsYCBhcmUgcmVqZWN0ZWQsIHRoZSBmaXJzdCBwcm9taXNlXG4gIHRoYXQgaXMgcmVqZWN0ZWQgd2lsbCBiZSBnaXZlbiBhcyBhbiBhcmd1bWVudCB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZXMnc1xuICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcbiAgbGV0IHByb21pc2UzID0gcmVqZWN0KG5ldyBFcnJvcihcIjNcIikpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnMgYmVjYXVzZSB0aGVyZSBhcmUgcmVqZWN0ZWQgcHJvbWlzZXMhXG4gIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gZXJyb3IubWVzc2FnZSA9PT0gXCIyXCJcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgYWxsXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gZW50cmllcyBhcnJheSBvZiBwcm9taXNlc1xuICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIGBwcm9taXNlc2AgaGF2ZSBiZWVuXG4gIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQgaWYgYW55IG9mIHRoZW0gYmVjb21lIHJlamVjdGVkLlxuICBAc3RhdGljXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKGVudHJpZXMpIHtcbiAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG4vKipcbiAgYFByb21pc2UucmFjZWAgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoIGlzIHNldHRsZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZVxuICBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBzZXR0bGUuXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDInKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyByZXN1bHQgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgaXQgd2FzIHJlc29sdmVkIGJlZm9yZSBwcm9taXNlMVxuICAgIC8vIHdhcyByZXNvbHZlZC5cbiAgfSk7XG4gIGBgYFxuXG4gIGBQcm9taXNlLnJhY2VgIGlzIGRldGVybWluaXN0aWMgaW4gdGhhdCBvbmx5IHRoZSBzdGF0ZSBvZiB0aGUgZmlyc3RcbiAgc2V0dGxlZCBwcm9taXNlIG1hdHRlcnMuIEZvciBleGFtcGxlLCBldmVuIGlmIG90aGVyIHByb21pc2VzIGdpdmVuIHRvIHRoZVxuICBgcHJvbWlzZXNgIGFycmF5IGFyZ3VtZW50IGFyZSByZXNvbHZlZCwgYnV0IHRoZSBmaXJzdCBzZXR0bGVkIHByb21pc2UgaGFzXG4gIGJlY29tZSByZWplY3RlZCBiZWZvcmUgdGhlIG90aGVyIHByb21pc2VzIGJlY2FtZSBmdWxmaWxsZWQsIHRoZSByZXR1cm5lZFxuICBwcm9taXNlIHdpbGwgYmVjb21lIHJlamVjdGVkOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3Byb21pc2UgMicpKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVuc1xuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIHByb21pc2UgMiBiZWNhbWUgcmVqZWN0ZWQgYmVmb3JlXG4gICAgLy8gcHJvbWlzZSAxIGJlY2FtZSBmdWxmaWxsZWRcbiAgfSk7XG4gIGBgYFxuXG4gIEFuIGV4YW1wbGUgcmVhbC13b3JsZCB1c2UgY2FzZSBpcyBpbXBsZW1lbnRpbmcgdGltZW91dHM6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBQcm9taXNlLnJhY2UoW2FqYXgoJ2Zvby5qc29uJyksIHRpbWVvdXQoNTAwMCldKVxuICBgYGBcblxuICBAbWV0aG9kIHJhY2VcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyB0byBvYnNlcnZlXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHNldHRsZXMgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBmaXJzdCBwYXNzZWRcbiAgcHJvbWlzZSB0byBzZXR0bGUuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFjZShlbnRyaWVzKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKCFpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgbm9vcCwgcmVqZWN0IGFzIF9yZWplY3QgfSBmcm9tICcuLi8taW50ZXJuYWwnO1xuXG4vKipcbiAgYFByb21pc2UucmVqZWN0YCByZXR1cm5zIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBwYXNzZWQgYHJlYXNvbmAuXG4gIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlamVjdFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSByZWFzb24gdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGguXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIGdpdmVuIGByZWFzb25gLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgcmV0dXJuIHByb21pc2U7XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm9vcCwgbmV4dElkLCBQUk9NSVNFX0lELCBpbml0aWFsaXplUHJvbWlzZSB9IGZyb20gJy4vLWludGVybmFsJztcbmltcG9ydCB7IGFzYXAsIHNldEFzYXAsIHNldFNjaGVkdWxlciB9IGZyb20gJy4vYXNhcCc7XG5cbmltcG9ydCBhbGwgZnJvbSAnLi9wcm9taXNlL2FsbCc7XG5pbXBvcnQgcmFjZSBmcm9tICcuL3Byb21pc2UvcmFjZSc7XG5pbXBvcnQgUmVzb2x2ZSBmcm9tICcuL3Byb21pc2UvcmVzb2x2ZSc7XG5pbXBvcnQgUmVqZWN0IGZyb20gJy4vcHJvbWlzZS9yZWplY3QnO1xuaW1wb3J0IHRoZW4gZnJvbSAnLi90aGVuJztcblxuZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xufVxuXG5mdW5jdGlvbiBuZWVkc05ldygpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbn1cblxuLyoqXG4gIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gIFRlcm1pbm9sb2d5XG4gIC0tLS0tLS0tLS0tXG5cbiAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgQmFzaWMgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLVxuXG4gIGBgYGpzXG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gb24gc3VjY2Vzc1xuICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgLy8gb24gZmFpbHVyZVxuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIEFkdmFuY2VkIFVzYWdlOlxuICAtLS0tLS0tLS0tLS0tLS1cblxuICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICBgYGBqc1xuICBQcm9taXNlLmFsbChbXG4gICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9KTtcbiAgYGBgXG5cbiAgQGNsYXNzIFByb21pc2VcbiAgQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXJcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAY29uc3RydWN0b3JcbiovXG5cbnZhciBQcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgdGhpc1tQUk9NSVNFX0lEXSA9IG5leHRJZCgpO1xuICAgIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICBpZiAobm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBuZWVkc1Jlc29sdmVyKCk7XG4gICAgICB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSA/IGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IG5lZWRzTmV3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG4gICBgYGBqc1xuICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICB9KTtcbiAgYGBgXG4gICBDaGFpbmluZ1xuICAtLS0tLS0tLVxuICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHJldHVybiB1c2VyLm5hbWU7XG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICB9KTtcbiAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gIH0pO1xuICBgYGBcbiAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG4gICBgYGBqc1xuICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgcmVhY2hlZFxuICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gIH0pO1xuICBgYGBcbiAgIEFzc2ltaWxhdGlvblxuICAtLS0tLS0tLS0tLS1cbiAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG4gICBgYGBqc1xuICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICB9KTtcbiAgYGBgXG4gICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gIH0pO1xuICBgYGBcbiAgIFNpbXBsZSBFeGFtcGxlXG4gIC0tLS0tLS0tLS0tLS0tXG4gICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gICBgYGBqYXZhc2NyaXB0XG4gIGxldCByZXN1bHQ7XG4gICB0cnkge1xuICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAvLyBzdWNjZXNzXG4gIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgLy8gZmFpbHVyZVxuICB9XG4gIGBgYFxuICAgRXJyYmFjayBFeGFtcGxlXG4gICBgYGBqc1xuICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9XG4gIH0pO1xuICBgYGBcbiAgIFByb21pc2UgRXhhbXBsZTtcbiAgIGBgYGphdmFzY3JpcHRcbiAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyBzdWNjZXNzXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gZmFpbHVyZVxuICB9KTtcbiAgYGBgXG4gICBBZHZhbmNlZCBFeGFtcGxlXG4gIC0tLS0tLS0tLS0tLS0tXG4gICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gICBgYGBqYXZhc2NyaXB0XG4gIGxldCBhdXRob3IsIGJvb2tzO1xuICAgdHJ5IHtcbiAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAvLyBzdWNjZXNzXG4gIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgLy8gZmFpbHVyZVxuICB9XG4gIGBgYFxuICAgRXJyYmFjayBFeGFtcGxlXG4gICBgYGBqc1xuICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuICAgfVxuICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcbiAgIH1cbiAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgfVxuICAgICAgLy8gc3VjY2Vzc1xuICAgIH1cbiAgfSk7XG4gIGBgYFxuICAgUHJvbWlzZSBFeGFtcGxlO1xuICAgYGBgamF2YXNjcmlwdFxuICBmaW5kQXV0aG9yKCkuXG4gICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAvLyBmb3VuZCBib29rc1xuICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gIH0pO1xuICBgYGBcbiAgIEBtZXRob2QgdGhlblxuICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cblxuICAvKipcbiAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuICBgYGBqc1xuICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICB9XG4gIC8vIHN5bmNocm9ub3VzXG4gIHRyeSB7XG4gIGZpbmRBdXRob3IoKTtcbiAgfSBjYXRjaChyZWFzb24pIHtcbiAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgfVxuICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICB9KTtcbiAgYGBgXG4gIEBtZXRob2QgY2F0Y2hcbiAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuXG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICBgZmluYWxseWAgd2lsbCBiZSBpbnZva2VkIHJlZ2FyZGxlc3Mgb2YgdGhlIHByb21pc2UncyBmYXRlIGp1c3QgYXMgbmF0aXZlXG4gICAgdHJ5L2NhdGNoL2ZpbmFsbHkgYmVoYXZlc1xuICBcbiAgICBTeW5jaHJvbm91cyBleGFtcGxlOlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRBdXRob3IoKSB7XG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQXV0aG9yKCk7XG4gICAgfVxuICBcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZpbmRBdXRob3IoKTsgLy8gc3VjY2VlZCBvciBmYWlsXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBhbHdheXMgcnVuc1xuICAgICAgLy8gZG9lc24ndCBhZmZlY3QgdGhlIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICBgYGBcbiAgXG4gICAgQXN5bmNocm9ub3VzIGV4YW1wbGU6XG4gIFxuICAgIGBgYGpzXG4gICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgfSkuZmluYWxseShmdW5jdGlvbigpe1xuICAgICAgLy8gYXV0aG9yIHdhcyBlaXRoZXIgZm91bmQsIG9yIG5vdFxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBAbWV0aG9kIGZpbmFsbHlcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG5cblxuICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gX2ZpbmFsbHkoY2FsbGJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvcjtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gUHJvbWlzZTtcbn0oKTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoZW47XG5leHBvcnQgZGVmYXVsdCBQcm9taXNlO1xuUHJvbWlzZS5hbGwgPSBhbGw7XG5Qcm9taXNlLnJhY2UgPSByYWNlO1xuUHJvbWlzZS5yZXNvbHZlID0gUmVzb2x2ZTtcblByb21pc2UucmVqZWN0ID0gUmVqZWN0O1xuUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gc2V0U2NoZWR1bGVyO1xuUHJvbWlzZS5fc2V0QXNhcCA9IHNldEFzYXA7XG5Qcm9taXNlLl9hc2FwID0gYXNhcDsiLCIvKmdsb2JhbCBzZWxmKi9cbmltcG9ydCBQcm9taXNlIGZyb20gJy4vcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICB2YXIgbG9jYWwgPSB2b2lkIDA7XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWwgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWwgPSBzZWxmO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICB9XG4gIH1cblxuICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgaWYgKFApIHtcbiAgICB2YXIgcHJvbWlzZVRvU3RyaW5nID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcHJvbWlzZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzaWxlbnRseSBpZ25vcmVkXG4gICAgfVxuXG4gICAgaWYgKHByb21pc2VUb1N0cmluZyA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBsb2NhbC5Qcm9taXNlID0gUHJvbWlzZTtcbn0iLCJpbXBvcnQgUHJvbWlzZSBmcm9tICcuL2VzNi1wcm9taXNlL3Byb21pc2UnO1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJy4vZXM2LXByb21pc2UvcG9seWZpbGwnO1xuXG4vLyBTdHJhbmdlIGNvbXBhdC4uXG5Qcm9taXNlLnBvbHlmaWxsID0gcG9seWZpbGw7XG5Qcm9taXNlLlByb21pc2UgPSBQcm9taXNlO1xuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICdlczYtcHJvbWlzZS9hdXRvJztcclxuZmVhdGhlci5yZXBsYWNlKCk7XHJcbmNvbnN0IGRlZmF1bHRGb250ID0gJ05vdG8gU2VyaWYgSlAnO1xyXG5XZWJGb250LmxvYWQoe1xyXG4gIGdvb2dsZToge1xyXG4gICAgZmFtaWxpZXM6IFtkZWZhdWx0Rm9udF1cclxuICB9LFxyXG4gIGFjdGl2ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9ZmlsZV0nKTtcclxuICAgIGNvbnN0IGRvd25sb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RsJyk7XHJcbiAgICBjb25zdCBjcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nyb3AnKTtcclxuICAgIGNvbnN0IGtlaWtha3UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja2Vpa2FrdScpO1xyXG4gICAgY29uc3QgYmFsbG9vbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFsbG9vbjEnKTtcclxuICAgIGNvbnN0IGJhbGxvb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhbGxvb24yJyk7XHJcbiAgICBjb25zdCBiYWxsb29uMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWxsb29uMycpO1xyXG4gICAgY29uc3QgY2xpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpcDEnKTtcclxuICAgIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGV4dCcpO1xyXG4gICAgY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHlSaWdodCcpO1xyXG4gICAgY29uc3QgdGV4dFJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRSYW5nZScpO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZScpO1xyXG4gICAgY29uc3QgelVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3pVcCcpO1xyXG4gICAgY29uc3QgekRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjekRvd24nKTtcclxuICAgIGNvbnN0IGdpZkFuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaWZBbmltYXRpb24nKTtcclxuICAgIGNvbnN0IGludmVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnZlcnQnKTtcclxuICAgIGNvbnN0IGdyYXlzY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmF5c2NhbGUnKTtcclxuICAgIGNvbnN0IGJyb3duaWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnJvd25pZScpO1xyXG4gICAgY29uc3QgdmludGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aW50YWdlJyk7XHJcbiAgICBjb25zdCB0ZWNobmljb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWNobmljb2xvcicpO1xyXG4gICAgY29uc3Qga29kYWNocm9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrb2RhY2hyb21lJyk7XHJcbiAgICBjb25zdCBwb2xhcm9pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2xhcm9pZCcpO1xyXG4gICAgY29uc3QgYmxhY2t3aGl0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGFja3doaXRlJyk7XHJcbiAgICBjb25zdCBjYW52YXNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhc1dyYXBwZXInKTtcclxuICAgIGNvbnN0IHNpemVIYWxmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemVIYWxmJyk7XHJcbiAgICBjb25zdCBzaXplMl8zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemUyXzMnKTtcclxuICAgIGNvbnN0IHNpemUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemUyJyk7XHJcbiAgICBjb25zdCBzaXplNF8zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpemU0XzMnKTtcclxuICAgIGNvbnN0IG1lbnVMb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVMb2FkJyk7XHJcbiAgICBjb25zdCBtZW51RGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudURsJyk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wYWNpdHknKTtcclxuICAgIGNvbnN0IG1hdHJpeFRyYW5zZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXRyaXhUcmFuc2Zvcm0nKTtcclxuICAgIGNvbnN0IGZvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9udCcpO1xyXG4gICAgY29uc3QgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhczEnKTtcclxuICAgIGNvbnN0IGZvbnRMaXN0ID0gW2RlZmF1bHRGb250LCAnUm9ib3RvJywgJ1Nhd2FyYWJpIE1pbmNobyddO1xyXG4gICAgY29uc3QgbG9hZGZvbnRMaXN0ID0gW2RlZmF1bHRGb250XTtcclxuICAgIGNvbnN0IGFkZGVkVGV4dEFuZEJhbGxvb24gPSBbXTtcclxuICAgIGxldCBpbWFnZTtcclxuXHJcbiAgICB2YXIgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGZvbnRMaXN0Lmxlbmd0aDsgaSA8IG47ICsraSkge1xyXG4gICAgICB2YXIgZGVmYXVsdEZvbnRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBkZWZhdWx0Rm9udE9wdGlvbi50ZXh0ID0gZm9udExpc3RbaV07XHJcbiAgICAgIGRlZmF1bHRGb250T3B0aW9uLnZhbHVlID0gZm9udExpc3RbaV07XHJcbiAgICAgIGZvbnQuYWRkKGRlZmF1bHRGb250T3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcjZmlsZURpYWxvZycpLm1vZGFsKHtcclxuICAgICAga2V5Ym9hcmQ6IGZhbHNlXHJcbiAgICB9KS5tb2RhbCgnc2hvdycpO1xyXG5cclxuICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLnNldCh7XHJcbiAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZmMDBmZicsXHJcbiAgICAgIGNvcm5lckNvbG9yOiAnI2ZmMDAwMCdcclxuICAgIH0pO1xyXG5cclxuICAgIGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVEYXRhKTtcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGZhYnJpYy5JbWFnZS5mcm9tVVJMKHJlc3VsdCwgKGltZykgPT4ge1xyXG4gICAgICAgICAgICBjYW52YXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgY2FudmFzLnNldFdpZHRoKGltZy53aWR0aCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGltZy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZhYnJpYy50ZXh0dXJlU2l6ZSA9IE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGQoaW1nKTtcclxuICAgICAgICAgICAgaW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJCgnI2ZpbGVEaWFsb2cnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgc2l6ZUhhbGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNoYW5nZUltYWdlU2l6ZSgxIC8gMik7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBzaXplMl8zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjaGFuZ2VJbWFnZVNpemUoMiAvIDMpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgc2l6ZTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNoYW5nZUltYWdlU2l6ZSgyKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIHNpemU0XzMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNoYW5nZUltYWdlU2l6ZSg0IC8gMyk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VJbWFnZVNpemUocmF0aW8pIHtcclxuICAgICAgaWYgKGltYWdlID09IG51bGwpIHJldHVybjtcclxuICAgICAgaW1hZ2Uuc2NhbGVYID0gaW1hZ2Uuc2NhbGVYICogcmF0aW87XHJcbiAgICAgIGltYWdlLnNjYWxlWSA9IGltYWdlLnNjYWxlWSAqIHJhdGlvO1xyXG4gICAgICBjYW52YXMuc2V0V2lkdGgoaW1hZ2Uud2lkdGggKiBpbWFnZS5zY2FsZVgpO1xyXG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGltYWdlLmhlaWdodCAqIGltYWdlLnNjYWxlWSk7XHJcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3JvcEJveDtcclxuICAgIGNyb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChjcm9wQm94ID09IG51bGwpIHtcclxuICAgICAgICAgIGNyb3BCb3ggPSBuZXcgZmFicmljLlRleHRib3goJ+OBk+OBruefqeW9ouOBruOCteOCpOOCuuOCkuiqv+aVtOOBl+OBn+W+jFxcbuOCguOBhuS4gOW6puWIh+OCiuaKnOOBjeODnOOCv+ODs+OCkuaKvOOBmeOBqFxcbuefqeW9ouOBq+OBguOCj+OBm+OBpuWIh+OCiuaKnOOBjeOBvuOBmScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJywgbGVmdDogMTAsIHRvcDogMTAsIGZvbnRGYW1pbHk6IGRlZmF1bHRGb250LCBmaWxsOiAnI2ZmZicsIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY2FudmFzLmFkZChjcm9wQm94KTtcclxuICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmVjdCA9IGNyb3BCb3guZ2V0Qm91bmRpbmdSZWN0KCk7XHJcbiAgICAgICAgICBpbWFnZS5jbG9uZUFzSW1hZ2UoKGltZykgPT4ge1xyXG4gICAgICAgICAgICBjYW52YXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgY2FudmFzLnNldFdpZHRoKHJlY3Qud2lkdGgpO1xyXG4gICAgICAgICAgICBjYW52YXMuc2V0SGVpZ2h0KHJlY3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1nLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FudmFzLmFkZChpbWcpO1xyXG4gICAgICAgICAgICBpbWFnZSA9IGltZztcclxuICAgICAgICAgICAgY3JvcEJveCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZG93bmxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhd1VybCA9IGNhbnZhcy50b0RhdGFVUkwoe1xyXG4gICAgICAgICAgZm9ybWF0OiAncG5nJyxcclxuICAgICAgICAgIHF1YWxpdHk6IDFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyc2UgPSByYXdVcmwuc2xpY2UoNSkuc3BsaXQoL1ssO10vKTtcclxuICAgICAgICBjb25zdCBiaW5TdHIgPSBhdG9iKHBhcnNlLnBvcCgpKTtcclxuICAgICAgICBjb25zdCBsID0gYmluU3RyLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGwpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgYXJyYXlbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheV0sIHsgdHlwZTogcGFyc2VbMF0gfSk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYikge1xyXG4gICAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIFwib3V0cHV0LnBuZ1wiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGNvbnN0IHRtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgdG1wTGluay5ocmVmID0gYmxvYlVybDtcclxuICAgICAgICB0bXBMaW5rLmRvd25sb2FkID0gXCJvdXRwdXQucG5nXCI7XHJcbiAgICAgICAgdG1wTGluay5jbGljaygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBMaW5rKTtcclxuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVybCk7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAga2Vpa2FrdS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlLmdldEJvdW5kaW5nUmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHRleHRTaXplID0gcmVjdC5oZWlnaHQgLyA1O1xyXG4gICAgICAgIGNvbnN0IHNtYWxsVGV4dFNpemUgPSB0ZXh0U2l6ZSAvIDU7XHJcbiAgICAgICAgY29uc3QgdGV4dEJveCA9IG5ldyBmYWJyaWMuVGV4dGJveCgn6KiIXFxu55S7XFxu6YCaXFxu44KKJywge1xyXG4gICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgZm9udFNpemU6IHRleHRTaXplLFxyXG4gICAgICAgICAgZmlsbDogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgc2hhZG93OiAnI2ZmZmZmZiAwcHggMHB4IDIwcHgnLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogZGVmYXVsdEZvbnQsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNtYWxsVGV4dEJveCA9IG5ldyBmYWJyaWMuVGV4dGJveCgnXFxu44GRXFxuXFxu44GEXFxuXFxuXFxu44GLXFxuXFxu44GPXFxuXFxuXFxu44GpXFxuXFxu44GKJywge1xyXG4gICAgICAgICAgbGVmdDogMTAgKyB0ZXh0U2l6ZSArIDUsXHJcbiAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgZm9udFNpemU6IHNtYWxsVGV4dFNpemUsXHJcbiAgICAgICAgICBmaWxsOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICBzaGFkb3c6ICcjZmZmZmZmIDBweCAwcHggMTBweCcsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBkZWZhdWx0Rm9udCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6IDFcclxuICAgICAgICB9KTtcclxuICAgICAgICBjcmVhdGVPYmplY3RQb3N0UHJvY2Vzcyh0ZXh0Qm94KTtcclxuICAgICAgICBjYW52YXMuYWRkKHRleHRCb3gpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGV4dEJveCk7XHJcbiAgICAgICAgY3JlYXRlT2JqZWN0UG9zdFByb2Nlc3Moc21hbGxUZXh0Qm94KTtcclxuICAgICAgICBjYW52YXMuYWRkKHNtYWxsVGV4dEJveCk7XHJcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYmFsbG9vbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGxvYWRTVkdGaWxlKCdzdmcvZTA1MDJfMS5zdmcnKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGJhbGxvb24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBsb2FkU1ZHRmlsZSgnc3ZnL2UwMTk4XzEuc3ZnJyk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBiYWxsb29uMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgbG9hZFNWR0ZpbGUoJ3N2Zy9lMDgwMV8xLnN2ZycpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgY2xpcDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGxvYWRTVkdGaWxlKCdzdmcvcmVpd2EtZXJhLWthbmppLnN2ZycpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFNWR0ZpbGUocGF0aCkge1xyXG4gICAgICB2YXIgcGF0aCA9IGZhYnJpYy5sb2FkU1ZHRnJvbVVSTChwYXRoLCBmdW5jdGlvbiAob2JqZWN0cywgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBvYmogPSBmYWJyaWMudXRpbC5ncm91cFNWR0VsZW1lbnRzKG9iamVjdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgIG9iai5zY2FsZVggPSBjYW52YXMud2lkdGggLyBvYmoud2lkdGggLyAyO1xyXG4gICAgICAgIG9iai5zY2FsZVkgPSBjYW52YXMuaGVpZ2h0IC8gb2JqLmhlaWdodCAvIDI7XHJcbiAgICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChvYmopO1xyXG4gICAgICAgIGFkZGVkVGV4dEFuZEJhbGxvb24ucHVzaChvYmopO1xyXG4gICAgICAgIGNyZWF0ZU9iamVjdFBvc3RQcm9jZXNzKG9iaik7XHJcbiAgICAgICAgY2FudmFzLmFkZChvYmopLnJlbmRlckFsbCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IGltYWdlLmhlaWdodCAvIDU7XHJcbiAgICAgICAgY29uc3QgdGV4dEJveCA9IG5ldyBmYWJyaWMuVGV4dGJveCgnVGV4dCcsIHtcclxuICAgICAgICAgIGxlZnQ6IDEwLFxyXG4gICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgIGZvbnRTaXplOiB0ZXh0U2l6ZSxcclxuICAgICAgICAgIGZpbGw6ICcjMDAwMDAwJyxcclxuICAgICAgICAgIHNoYWRvdzogJyNmZmZmZmYgMHB4IDBweCAzcHgnLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogZGVmYXVsdEZvbnQsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dEJveC5vbignc2VsZWN0ZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0ZXh0UmFuZ2UudmFsdWUgPSB0ZXh0Qm94LmZvbnRTaXplO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNyZWF0ZU9iamVjdFBvc3RQcm9jZXNzKHRleHRCb3gpO1xyXG4gICAgICAgIGNhbnZhcy5hZGQodGV4dEJveCk7XHJcbiAgICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0ZXh0Qm94KTtcclxuICAgICAgICBhZGRlZFRleHRBbmRCYWxsb29uLnB1c2godGV4dEJveCk7XHJcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG5cclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGNvcHlSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGV4dFNpemUgPSBpbWFnZS5oZWlnaHQgLyA1O1xyXG4gICAgICAgIGNvbnN0IHRleHRCb3ggPSBuZXcgZmFicmljLlRleHRib3goJ0NvcHlyaWdodCAoQykgU1FVQVJFIEVOSVggQ08uLCBMVEQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuJywge1xyXG4gICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgZmlsbDogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXHJcbiAgICAgICAgICBzdHJva2U6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogZGVmYXVsdEZvbnQsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgYnJlYWtXb3JkczogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0Qm94Lm9uKCdzZWxlY3RlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRleHRSYW5nZS52YWx1ZSA9IHRleHRCb3guZm9udFNpemU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3JlYXRlT2JqZWN0UG9zdFByb2Nlc3ModGV4dEJveCk7XHJcbiAgICAgICAgY2FudmFzLmFkZCh0ZXh0Qm94KTtcclxuICAgICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRleHRCb3gpO1xyXG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIHRleHRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgICAgIGlmIChvYmplY3QudHlwZSA9PSBcInRleHRib3hcIikge1xyXG4gICAgICAgICAgb2JqZWN0LmZvbnRTaXplID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgaWYgKG9iamVjdC50eXBlID09IFwidGV4dGJveFwiKSB7XHJcbiAgICAgICAgY29uc3QgZm9udEZhbWlseSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZiAobG9hZGZvbnRMaXN0LmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgb2JqZWN0LmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xyXG4gICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgV2ViRm9udC5sb2FkKHtcclxuICAgICAgICAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgICAgICAgZmFtaWxpZXM6IFtmb250RmFtaWx5XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBsb2FkZm9udExpc3QucHVzaChmb250RmFtaWx5KTtcclxuICAgICAgICAgICAgICBvYmplY3QuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hdHJpeFRyYW5zZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgICAgIGlmIChvYmplY3QudHlwZSA9PSBcInRleHRib3hcIikge1xyXG4gICAgICAgICAgb2JqZWN0LnRleHQgPSB0cmFuc2Zvcm1NYXRyaXgob2JqZWN0LnRleHQpO1xyXG4gICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hdHJpeChzcmMpIHtcclxuICAgICAgY29uc3QgdCA9IHNyYy5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIGxldCBtbGVuID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkge1xyXG4gICAgICAgIGlmIChtbGVuIDwgdFtpXS5sZW5ndGgpIG1sZW4gPSB0W2ldLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtbGVuOyArK2kpIHtcclxuICAgICAgICBsZXQgbGluZSA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHQubGVuZ3RoIC0gMTsgaiA+PSAwOyAtLWopIHtcclxuICAgICAgICAgIGxpbmUgKz0gdFtqXS5sZW5ndGggPD0gaSA/IFwiIFwiIDogdFtqXS5jaGFyQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpICE9IG1sZW4gLSAxKSB7XHJcbiAgICAgICAgICBsaW5lICs9ICdcXG4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gbGluZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIG9wYWNpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgICBvYmplY3Qub3BhY2l0eSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB6VXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgICBvYmplY3QubW92ZVRvKGNhbnZhcy5fb2JqZWN0cy5sZW5ndGggLSAxKTtcclxuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB6RG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgICAgIG9iamVjdC5tb3ZlVG8oMSk7XHJcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgICAgY2FudmFzLnJlbW92ZShvYmplY3QpO1xyXG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGdpZkFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBHSUZFbmNvZGVyKCk7XHJcbiAgICAgICAgZW5jb2Rlci5zZXRSZXBlYXQoMCk7IC8vIDAgPSBsb29wXHJcbiAgICAgICAgZW5jb2Rlci5zZXREZWxheSgxMCk7IC8vZ28gdG8gbmV4dCBmcmFtZSBldmVyeSBuIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIGVuY29kZXIuc3RhcnQoKTtcclxuICAgICAgICBjb25zdCBhZGRlZFRleHRQb3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFkZGVkVGV4dEFuZEJhbGxvb24ubGVuZ3RoOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgICAgICBhZGRlZFRleHRQb3MucHVzaChbYWRkZWRUZXh0QW5kQmFsbG9vbltpXSwgYWRkZWRUZXh0QW5kQmFsbG9vbltpXS5sZWZ0LCBhZGRlZFRleHRBbmRCYWxsb29uW2ldLnRvcF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDAsIG4gPSBhZGRlZFRleHRQb3MubGVuZ3RoOyBqIDwgbjsgKytqKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhZGRlZFRleHRQb3Nbal1bMF07XHJcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gYWRkZWRUZXh0UG9zW2pdWzFdO1xyXG4gICAgICAgICAgICBsZXQgdG9wID0gYWRkZWRUZXh0UG9zW2pdWzJdO1xyXG4gICAgICAgICAgICB0YXJnZXQubGVmdCA9IGxlZnQgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgLSA1O1xyXG4gICAgICAgICAgICB0YXJnZXQudG9wID0gdG9wICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgICBlbmNvZGVyLmFkZEZyYW1lKGNhbnZhcy5nZXRDb250ZXh0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmNvZGVyLmZpbmlzaCgpO1xyXG4gICAgICAgIGNvbnN0IGJpbmFyeUdJRiA9IGVuY29kZXIuc3RyZWFtKCkuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHJhd1VybCA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsJyArIGVuY29kZTY0KGJpbmFyeUdJRik7XHJcbiAgICAgICAgY29uc3QgcGFyc2UgPSByYXdVcmwuc2xpY2UoNSkuc3BsaXQoL1ssO10vKTtcclxuICAgICAgICBjb25zdCBiaW5TdHIgPSBhdG9iKHBhcnNlLnBvcCgpKTtcclxuICAgICAgICBjb25zdCBsID0gYmluU3RyLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGwpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgYXJyYXlbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheV0sIHsgdHlwZTogcGFyc2VbMF0gfSk7XHJcbiAgICAgICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgdG1wTGluay5ocmVmID0gYmxvYlVybDtcclxuICAgICAgICB0bXBMaW5rLmRvd25sb2FkID0gXCJvdXRwdXQuZ2lmXCI7XHJcbiAgICAgICAgdG1wTGluay5jbGljaygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBMaW5rKTtcclxuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVybCk7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgaW52ZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tkID0gYXBwbHlGaWx0ZXIobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLkludmVydCgpKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGdyYXlzY2FsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZCA9IGFwcGx5RmlsdGVyKG5ldyBmYWJyaWMuSW1hZ2UuZmlsdGVycy5HcmF5c2NhbGUoKSk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBicm93bmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tkID0gYXBwbHlGaWx0ZXIobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLkJyb3duaWUoKSk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB2aW50YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tkID0gYXBwbHlGaWx0ZXIobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlZpbnRhZ2UoKSk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB0ZWNobmljb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZCA9IGFwcGx5RmlsdGVyKG5ldyBmYWJyaWMuSW1hZ2UuZmlsdGVycy5UZWNobmljb2xvcigpKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIGtvZGFjaHJvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jaGVja2QgPSBhcHBseUZpbHRlcihuZXcgZmFicmljLkltYWdlLmZpbHRlcnMuS29kYWNocm9tZSgpKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIHBvbGFyb2lkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tkID0gYXBwbHlGaWx0ZXIobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlBvbGFyb2lkKCkpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgYmxhY2t3aGl0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZCA9IGFwcGx5RmlsdGVyKG5ldyBmYWJyaWMuSW1hZ2UuZmlsdGVycy5CbGFja1doaXRlKCkpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHlGaWx0ZXIoZmlsdGVyKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbiA9IGltYWdlLmZpbHRlcnMubGVuZ3RoOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgICAgaWYgKGltYWdlLmZpbHRlcnNbaV0udHlwZSA9PSBmaWx0ZXIudHlwZSkge1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgaW1hZ2UuZmlsdGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBpbWFnZS5hcHBseUZpbHRlcnMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgaW1hZ2UuZmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgaW1hZ2UuYXBwbHlGaWx0ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICByZXR1cm4gIWZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVMb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICAkKCcjZmlsZURpYWxvZycpLm1vZGFsKHtcclxuICAgICAgICAgIGtleWJvYXJkOiBmYWxzZVxyXG4gICAgICAgIH0pLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBtZW51RGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gICAgICAoZSkgPT4ge1xyXG4gICAgICAgICQoJyNkbERpYWxvZycpLm1vZGFsKHtcclxuICAgICAgICAgIGtleWJvYXJkOiBmYWxzZVxyXG4gICAgICAgIH0pLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPYmplY3RQb3N0UHJvY2VzcyhvYmplY3QpIHtcclxuICAgICAgb2JqZWN0Lm9uKCdzZWxlY3RlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvcGFjaXR5LnZhbHVlID0gb2JqZWN0Lm9wYWNpdHk7XHJcbiAgICAgICAgaWYob2JqZWN0LnR5cGUgPT0gJ3RleHRib3gnKXtcclxuICAgICAgICAgIGZvbnQudmFsdWUgPSBvYmplY3QuZm9udEZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9