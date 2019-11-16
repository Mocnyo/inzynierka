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
              month: startDate.getMonth(),
              day: startDate.getDay()
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
              month: stopDate.getMonth(),
              day: stopDate.getDay()
            },
            time: {
              hour: stopDate.getHours(),
              minute: stopDate.getMinutes(),
              second: stopDate.getSeconds()
            }
          }
        }
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svanMvdGltZXIvdGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy93b3JrZXJzL3dvcmtlcnMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIm5hdmJhciIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImN1cnJlbnRUaW1lIiwiaW50ZXJ2YWwiLCJkZXNjcmlwdGlvbiIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUN1cnJlbnRUaW1lIiwiZGVzdHJveWVkIiwiY2xlYXJJbnRlcnZhbCIsImNvbXB1dGVkIiwidGltZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCIkZGF0YSIsImxhcHNlZCIsImhycyIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNlYyIsImNlaWwiLCJtZXRob2RzIiwicmVzZXQiLCJwYXVzZSIsInBvc3RQb3N0IiwiY2xlYXIiLCJyZXN1bWUiLCJzdGFydERhdGUiLCJwYXJzZUludCIsInN0b3BEYXRlIiwiYXhpb3MiLCJwb3N0IiwiVGltZXIiLCJkZXNjcmlwdGlvblRhc2siLCJkYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERheSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwic3RvcFRpbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ3YXRjaCIsIm5ld1RpbWUiLCJvcmlnaW5hbFRpbWUiLCJuZXdTdGF0ZSIsIm5ld1N0YXJ0VGltZSIsInRpbWVzIiwiZGVsaW1pdGVycyIsImdldFRpbWVzIiwiZ2V0IiwidXNlcnMiLCJ0ZWFtcyIsInRlYW1JRCIsImdldFRlYW1zIiwiZ2V0VXNlcnMiLCJpZCIsImdldFVzZXJBY3RpdmUiLCIkYWN0aXZlVGltZSIsImN1cnJlbnREYXRlVGltZSIsInR3b01pbkJlZm9yZSIsInNldE1pbnV0ZXMiLCJ0d29NaW5BZnRlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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QUVPO0FBQ0gsZUFBTyxLQUFQO0FBQ0g7QUFDSjtBQXpCSTtBQWRPLENBQVIsQ0FBWixDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWlufi5fbVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc34uX25vZGVfbW9kdWxlc19hXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwicmVxdWlyZSAoJy4vbmF2YmFyL25hdmJhcicpO1xucmVxdWlyZSAoJy4vdGltZXIvdGltZXMnKTtcbnJlcXVpcmUgKCcuL3dvcmtlcnMvd29ya2VycycpOyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbnZhciBuYXZiYXIgPSBuZXcgVnVlKHtcbiAgICBlbDogXCIjbmF2YmFyXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdGU6IFwicGF1c2VkXCIsXG4gICAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICBjdXJyZW50VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGludGVydmFsOiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5zdGF0ZSA9PT0gXCJzdGFydGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDdXJyZW50VGltZSwgMTAwMCk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMgKyAnOicgKyB0aGlzLm1pbnV0ZXMgKyAnOicgKyB0aGlzLnNlY29uZHM7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbGxpc2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5zdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IGxvY2FsU3RvcmFnZS5zdGFydFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZSAtIHRoaXMuJGRhdGEuc3RhcnRUaW1lO1xuICAgICAgICB9LFxuICAgICAgICBob3VyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhcHNlZCA9IHRoaXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdmFyIGhycyA9IE1hdGguZmxvb3IoKGxhcHNlZCAvIDEwMDAgLyA2MCAvIDYwKSk7XG4gICAgICAgICAgICByZXR1cm4gaHJzID49IDEwID8gaHJzIDogJzAnICsgaHJzO1xuICAgICAgICB9LFxuICAgICAgICBtaW51dGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFwc2VkID0gdGhpcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICB2YXIgbWluID0gTWF0aC5mbG9vcigobGFwc2VkIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICAgICAgICAgIHJldHVybiBtaW4gPj0gMTAgPyBtaW4gOiAnMCcgKyBtaW47XG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXBzZWQgPSB0aGlzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHZhciBzZWMgPSBNYXRoLmNlaWwoKGxhcHNlZCAvIDEwMDApICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIHNlYyA+PSAxMCA/IHNlYyA6ICcwJyArIHNlYztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9IFwic3RhcnRlZFwiO1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5jdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXRlID0gXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIHRoaXMucG9zdFBvc3QoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB9LFxuICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhdGUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRkYXRhLnN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwb3N0UG9zdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRoaXMuc3RhcnRUaW1lKSk7XG4gICAgICAgICAgICB2YXIgc3RvcERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwcF9kZXYucGhwL2FwaS90aW1lL3RpbWVycycsIHtcbiAgICAgICAgICAgICAgICBUaW1lcjoge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRhc2s6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBzdGFydERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IHN0YXJ0RGF0ZS5nZXREYXkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBzdGFydERhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6IHN0YXJ0RGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiBzdGFydERhdGUuZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBzdG9wRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBzdG9wRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogc3RvcERhdGUuZ2V0RGF5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogc3RvcERhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6IHN0b3BEYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IHN0b3BEYXRlLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHRpbWUobmV3VGltZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLm9yaWdpbmFsVGltZSA9IG5ld1RpbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRUaW1lKG5ld1N0YXJ0VGltZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnN0YXJ0VGltZSA9IG5ld1N0YXJ0VGltZTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgdGltZXMgPSBuZXcgVnVlKHtcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30nXSxcbiAgICBlbDogXCIjdGltZXNcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lcygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRUaW1lczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvdGltZS90aW1lcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgdGltZXMgPSBuZXcgVnVlKHtcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30nXSxcbiAgICBlbDogXCIjd29ya2Vyc1wiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJzOiBudWxsLFxuICAgICAgICAgICAgdGVhbXM6IG51bGwsXG4gICAgICAgICAgICB0ZWFtSUQ6IDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdldFRlYW1zKCk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcnModGhpcy50ZWFtSUQpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRVc2VyczogZnVuY3Rpb24gKHRlYW1JRCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvdXNlci90ZWFtL3VzZXJzLycrIHRlYW1JRCArJy90ZWFtL3VzZXJzL2J5L3RlYW0nKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRlYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS90ZWFtL3RlYW1zJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoW3RoaXMudGVhbXMgPSByZXNwb25zZS5kYXRhLCB0aGlzLnRlYW1JRCA9IHJlc3BvbnNlLmRhdGFbMF0uaWRdKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VXNlckFjdGl2ZTogZnVuY3Rpb24gKCRhY3RpdmVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCRhY3RpdmVUaW1lKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHR3b01pbkJlZm9yZSA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgLSAyKTtcbiAgICAgICAgICAgIGxldCB0d29NaW5BZnRlciA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgKyAyKTtcbiAgICAgICAgICAgIGlmICgoZGF0ZSA+IHR3b01pbkJlZm9yZSkgJiYgKGRhdGUgPCB0d29NaW5BZnRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==