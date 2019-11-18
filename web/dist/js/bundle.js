/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main~._m": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~._node_modules_a"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack/js/app.js":
/*!***************************!*\
  !*** ./webpack/js/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./navbar/navbar */ "./webpack/js/navbar/navbar.js");

__webpack_require__(/*! ./timer/times */ "./webpack/js/timer/times.js");

__webpack_require__(/*! ./workers/workers */ "./webpack/js/workers/workers.js");

/***/ }),

/***/ "./webpack/js/navbar/navbar.js":
/*!*************************************!*\
  !*** ./webpack/js/navbar/navbar.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var navbar = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: "#navbar",
  data: function data() {
    return {
      state: "paused",
      startTime: Date.now(),
      currentTime: Date.now(),
      interval: null,
      description: ""
    };
  },
  mounted: function mounted() {
    if (localStorage.state === "started") {
      this.state = "started";
    }

    this.interval = setInterval(this.updateCurrentTime, 1000);
  },
  destroyed: function destroyed() {
    clearInterval(this.interval);
  },
  computed: {
    time: function time() {
      return this.hours + ':' + this.minutes + ':' + this.seconds;
    },
    milliseconds: function milliseconds() {
      if (localStorage.startTime) {
        this.startTime = localStorage.startTime;
      }

      return this.currentTime - this.$data.startTime;
    },
    hours: function hours() {
      var lapsed = this.milliseconds;
      var hrs = Math.floor(lapsed / 1000 / 60 / 60);
      return hrs >= 10 ? hrs : '0' + hrs;
    },
    minutes: function minutes() {
      var lapsed = this.milliseconds;
      var min = Math.floor(lapsed / 1000 / 60 % 60);
      return min >= 10 ? min : '0' + min;
    },
    seconds: function seconds() {
      var lapsed = this.milliseconds;
      var sec = Math.ceil(lapsed / 1000 % 60);
      return sec >= 10 ? sec : '0' + sec;
    }
  },
  methods: {
    reset: function reset() {
      this.$data.state = "started";
      this.$data.startTime = Date.now();
      this.$data.currentTime = Date.now();
    },
    pause: function pause() {
      this.$data.state = "paused";
      this.postPost();
      localStorage.clear();
    },
    resume: function resume() {
      this.$data.state = "started";
    },
    updateCurrentTime: function updateCurrentTime() {
      if (this.$data.state === "started") {
        this.currentTime = Date.now();
      }
    },
    postPost: function postPost() {
      var startDate = new Date(parseInt(this.startTime));
      var stopDate = new Date(this.currentTime);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('app_dev.php/api/time/timers', {
        Timer: {
          descriptionTask: this.description,
          startTime: {
            date: {
              year: startDate.getFullYear(),
              month: startDate.getMonth() + 1,
              day: startDate.getDate()
            },
            time: {
              hour: startDate.getHours(),
              minute: startDate.getMinutes(),
              second: startDate.getSeconds()
            }
          },
          stopTime: {
            date: {
              year: stopDate.getFullYear(),
              month: stopDate.getMonth() + 1,
              day: stopDate.getDate()
            },
            time: {
              hour: stopDate.getHours(),
              minute: stopDate.getMinutes(),
              second: stopDate.getSeconds()
            }
          }
        }
      }).then(function (response) {})["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    time: function time(newTime) {
      localStorage.originalTime = newTime;
    },
    state: function state(newState) {
      localStorage.state = newState;
    },
    startTime: function startTime(newStartTime) {
      localStorage.startTime = newStartTime;
    }
  }
});

/***/ }),

/***/ "./webpack/js/timer/times.js":
/*!***********************************!*\
  !*** ./webpack/js/timer/times.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var times = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  delimiters: ['${', '}'],
  el: "#times",
  data: function data() {
    return {
      data: null
    };
  },
  mounted: function mounted() {
    this.getTimes();
  },
  methods: {
    getTimes: function getTimes() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/time/timers').then(function (response) {
        return _this.data = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./webpack/js/workers/workers.js":
/*!***************************************!*\
  !*** ./webpack/js/workers/workers.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var times = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  delimiters: ['${', '}'],
  el: "#workers",
  data: function data() {
    return {
      users: null,
      teams: null,
      teamID: 2
    };
  },
  mounted: function mounted() {
    this.getTeams();
    this.getUsers(this.teamID);
  },
  methods: {
    getUsers: function getUsers(teamID) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/user/team/users/' + teamID + '/team/users/by/team').then(function (response) {
        return _this.users = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTeams: function getTeams() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/team/teams').then(function (response) {
        return [_this2.teams = response.data, _this2.teamID = response.data[0].id];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUserActive: function getUserActive($activeTime) {
      var date = new Date($activeTime);
      var currentDateTime = new Date();
      var twoMinBefore = currentDateTime.setMinutes(currentDateTime.getMinutes() - 2);
      var twoMinAfter = currentDateTime.setMinutes(currentDateTime.getMinutes() + 2);

      if (date > twoMinBefore && date < twoMinAfter) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./webpack/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./webpack/js/app.js */"./webpack/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svanMvdGltZXIvdGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy93b3JrZXJzL3dvcmtlcnMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIm5hdmJhciIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImN1cnJlbnRUaW1lIiwiaW50ZXJ2YWwiLCJkZXNjcmlwdGlvbiIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUN1cnJlbnRUaW1lIiwiZGVzdHJveWVkIiwiY2xlYXJJbnRlcnZhbCIsImNvbXB1dGVkIiwidGltZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCIkZGF0YSIsImxhcHNlZCIsImhycyIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNlYyIsImNlaWwiLCJtZXRob2RzIiwicmVzZXQiLCJwYXVzZSIsInBvc3RQb3N0IiwiY2xlYXIiLCJyZXN1bWUiLCJzdGFydERhdGUiLCJwYXJzZUludCIsInN0b3BEYXRlIiwiYXhpb3MiLCJwb3N0IiwiVGltZXIiLCJkZXNjcmlwdGlvblRhc2siLCJkYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsInN0b3BUaW1lIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2F0Y2giLCJuZXdUaW1lIiwib3JpZ2luYWxUaW1lIiwibmV3U3RhdGUiLCJuZXdTdGFydFRpbWUiLCJ0aW1lcyIsImRlbGltaXRlcnMiLCJnZXRUaW1lcyIsImdldCIsInVzZXJzIiwidGVhbXMiLCJ0ZWFtSUQiLCJnZXRUZWFtcyIsImdldFVzZXJzIiwiaWQiLCJnZXRVc2VyQWN0aXZlIiwiJGFjdGl2ZVRpbWUiLCJjdXJyZW50RGF0ZVRpbWUiLCJ0d29NaW5CZWZvcmUiLCJzZXRNaW51dGVzIiwidHdvTWluQWZ0ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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UDtBQUNIO0FBQ0o7QUF6Qkk7QUFkTyxDQUFSLENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpbn4uX21cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+Ll9ub2RlX21vZHVsZXNfYVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInJlcXVpcmUgKCcuL25hdmJhci9uYXZiYXInKTtcbnJlcXVpcmUgKCcuL3RpbWVyL3RpbWVzJyk7XG5yZXF1aXJlICgnLi93b3JrZXJzL3dvcmtlcnMnKTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgbmF2YmFyID0gbmV3IFZ1ZSh7XG4gICAgZWw6IFwiI25hdmJhclwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXRlOiBcInBhdXNlZFwiLFxuICAgICAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgY3VycmVudFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICBpbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uuc3RhdGUgPT09IFwic3RhcnRlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ3VycmVudFRpbWUsIDEwMDApO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzICsgJzonICsgdGhpcy5taW51dGVzICsgJzonICsgdGhpcy5zZWNvbmRzO1xuICAgICAgICB9LFxuICAgICAgICBtaWxsaXNlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWUgLSB0aGlzLiRkYXRhLnN0YXJ0VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgaG91cnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXBzZWQgPSB0aGlzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHZhciBocnMgPSBNYXRoLmZsb29yKChsYXBzZWQgLyAxMDAwIC8gNjAgLyA2MCkpO1xuICAgICAgICAgICAgcmV0dXJuIGhycyA+PSAxMCA/IGhycyA6ICcwJyArIGhycztcbiAgICAgICAgfSxcbiAgICAgICAgbWludXRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhcHNlZCA9IHRoaXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGguZmxvb3IoKGxhcHNlZCAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgICAgICByZXR1cm4gbWluID49IDEwID8gbWluIDogJzAnICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFwc2VkID0gdGhpcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICB2YXIgc2VjID0gTWF0aC5jZWlsKChsYXBzZWQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICAgICAgIHJldHVybiBzZWMgPj0gMTAgPyBzZWMgOiAnMCcgKyBzZWM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhdGUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICAgICAgICB0aGlzLnBvc3RQb3N0KCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZGF0YS5zdGF0ZSA9PT0gXCJzdGFydGVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9zdFBvc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aGlzLnN0YXJ0VGltZSkpO1xuICAgICAgICAgICAgdmFyIHN0b3BEYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcHBfZGV2LnBocC9hcGkvdGltZS90aW1lcnMnLCB7XG4gICAgICAgICAgICAgICAgVGltZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UYXNrOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogc3RhcnREYXRlLmdldE1vbnRoKCkrMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IHN0YXJ0RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogc3RhcnREYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBzdGFydERhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogc3RhcnREYXRlLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdG9wVGltZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogc3RvcERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogc3RvcERhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogc3RvcERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IHN0b3BEYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBzdG9wRGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiBzdG9wRGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGltZShuZXdUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uub3JpZ2luYWxUaW1lID0gbmV3VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydFRpbWUobmV3U3RhcnRUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xuICAgICAgICB9XG4gICAgfVxufSlcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbnZhciB0aW1lcyA9IG5ldyBWdWUoe1xuICAgIGRlbGltaXRlcnM6IFsnJHsnLCAnfSddLFxuICAgIGVsOiBcIiN0aW1lc1wiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdldFRpbWVzKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFRpbWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS90aW1lL3RpbWVycycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSlcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbnZhciB0aW1lcyA9IG5ldyBWdWUoe1xuICAgIGRlbGltaXRlcnM6IFsnJHsnLCAnfSddLFxuICAgIGVsOiBcIiN3b3JrZXJzXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcnM6IG51bGwsXG4gICAgICAgICAgICB0ZWFtczogbnVsbCxcbiAgICAgICAgICAgIHRlYW1JRDogMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2V0VGVhbXMoKTtcbiAgICAgICAgdGhpcy5nZXRVc2Vycyh0aGlzLnRlYW1JRCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFVzZXJzOiBmdW5jdGlvbiAodGVhbUlEKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS91c2VyL3RlYW0vdXNlcnMvJysgdGVhbUlEICsnL3RlYW0vdXNlcnMvYnkvdGVhbScpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMudXNlcnMgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGVhbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBwX2Rldi5waHAvYXBpL3RlYW0vdGVhbXMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IChbdGhpcy50ZWFtcyA9IHJlc3BvbnNlLmRhdGEsIHRoaXMudGVhbUlEID0gcmVzcG9uc2UuZGF0YVswXS5pZF0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVc2VyQWN0aXZlOiBmdW5jdGlvbiAoJGFjdGl2ZVRpbWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoJGFjdGl2ZVRpbWUpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgdHdvTWluQmVmb3JlID0gY3VycmVudERhdGVUaW1lLnNldE1pbnV0ZXMoY3VycmVudERhdGVUaW1lLmdldE1pbnV0ZXMoKSAtIDIpO1xuICAgICAgICAgICAgbGV0IHR3b01pbkFmdGVyID0gY3VycmVudERhdGVUaW1lLnNldE1pbnV0ZXMoY3VycmVudERhdGVUaW1lLmdldE1pbnV0ZXMoKSArIDIpO1xuICAgICAgICAgICAgaWYgKChkYXRlID4gdHdvTWluQmVmb3JlKSAmJiAoZGF0ZSA8IHR3b01pbkFmdGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4iXSwic291cmNlUm9vdCI6IiJ9