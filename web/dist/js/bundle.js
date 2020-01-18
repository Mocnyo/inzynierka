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
  delimiters: ['${', '}'],
  data: function data() {
    return {
      state: "paused",
      startTime: Date.now(),
      currentTime: Date.now(),
      interval: null,
      description: "",
      projects: null,
      project: null,
      projectName: "empty"
    };
  },
  mounted: function mounted() {
    if (localStorage.state === "started") {
      this.state = "started";
    }

    this.interval = setInterval(this.updateCurrentTime, 1000);
    this.getProjects();
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
      this.postTime();
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
    postTime: function postTime() {
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
          },
          project: this.project
        }
      }).then(function (response) {})["catch"](function (error) {
        console.log(error);
      });
    },
    getProjects: function getProjects() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/project/projects').then(function (response) {
        return _this.projects = response.data;
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
    },
    projectName: function projectName(name) {
      localStorage.projectName = name;
    } // projectDescription(desc) {
    //     localStorage.description = desc;
    // }

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
    },
    format: function format(value) {}
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


var teams = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  delimiters: ['${', '}'],
  el: "#workers",
  data: function data() {
    return {
      users: null,
      teams: null,
      teamID: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svanMvdGltZXIvdGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy93b3JrZXJzL3dvcmtlcnMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIm5hdmJhciIsIlZ1ZSIsImVsIiwiZGVsaW1pdGVycyIsImRhdGEiLCJzdGF0ZSIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJjdXJyZW50VGltZSIsImludGVydmFsIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0cyIsInByb2plY3QiLCJwcm9qZWN0TmFtZSIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUN1cnJlbnRUaW1lIiwiZ2V0UHJvamVjdHMiLCJkZXN0cm95ZWQiLCJjbGVhckludGVydmFsIiwiY29tcHV0ZWQiLCJ0aW1lIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsIiRkYXRhIiwibGFwc2VkIiwiaHJzIiwiTWF0aCIsImZsb29yIiwibWluIiwic2VjIiwiY2VpbCIsIm1ldGhvZHMiLCJyZXNldCIsInBhdXNlIiwicG9zdFRpbWUiLCJjbGVhciIsInJlc3VtZSIsInN0YXJ0RGF0ZSIsInBhcnNlSW50Iiwic3RvcERhdGUiLCJheGlvcyIsInBvc3QiLCJUaW1lciIsImRlc2NyaXB0aW9uVGFzayIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwic3RvcFRpbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ3YXRjaCIsIm5ld1RpbWUiLCJvcmlnaW5hbFRpbWUiLCJuZXdTdGF0ZSIsIm5ld1N0YXJ0VGltZSIsIm5hbWUiLCJ0aW1lcyIsImdldFRpbWVzIiwiZm9ybWF0IiwidmFsdWUiLCJ0ZWFtcyIsInVzZXJzIiwidGVhbUlEIiwiZ2V0VGVhbXMiLCJnZXRVc2VycyIsImlkIiwiZ2V0VXNlckFjdGl2ZSIsIiRhY3RpdmVUaW1lIiwiY3VycmVudERhdGVUaW1lIiwidHdvTWluQmVmb3JlIiwic2V0TWludXRlcyIsInR3b01pbkFmdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FB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QUssQ0FBQyxNQUFJLENBQUNlLEtBQUwsR0FBYWYsUUFBUSxDQUFDNUQsSUFBdkIsRUFBNkIsTUFBSSxDQUFDNkUsTUFBTCxHQUFjakIsUUFBUSxDQUFDNUQsSUFBVCxDQUFjLENBQWQsRUFBaUJnRixFQUE1RCxDQUFMO0FBQUEsT0FEbEIsV0FFVyxVQUFVbkIsS0FBVixFQUFpQjtBQUNwQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxPQUpMO0FBS0gsS0FkSTtBQWVMb0IsaUJBQWEsRUFBRSx1QkFBVUMsV0FBVixFQUF1QjtBQUNsQyxVQUFJckMsSUFBSSxHQUFHLElBQUkxQyxJQUFKLENBQVMrRSxXQUFULENBQVg7QUFDQSxVQUFJQyxlQUFlLEdBQUcsSUFBSWhGLElBQUosRUFBdEI7QUFDQSxVQUFJaUYsWUFBWSxHQUFHRCxlQUFlLENBQUNFLFVBQWhCLENBQTJCRixlQUFlLENBQUM1QixVQUFoQixLQUErQixDQUExRCxDQUFuQjtBQUNBLFVBQUkrQixXQUFXLEdBQUdILGVBQWUsQ0FBQ0UsVUFBaEIsQ0FBMkJGLGVBQWUsQ0FBQzVCLFVBQWhCLEtBQStCLENBQTFELENBQWxCOztBQUNBLFVBQUtWLElBQUksR0FBR3VDLFlBQVIsSUFBMEJ2QyxJQUFJLEdBQUd5QyxXQUFyQyxFQUFtRDtBQUMvQyxlQUFPLElBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLEtBQVA7QUFDSDtBQUNKO0FBekJJO0FBZE8sQ0FBUixDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5+Ll9tXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfi5fbm9kZV9tb2R1bGVzX2FcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJyZXF1aXJlICgnLi9uYXZiYXIvbmF2YmFyJyk7XG5yZXF1aXJlICgnLi90aW1lci90aW1lcycpO1xucmVxdWlyZSAoJy4vd29ya2Vycy93b3JrZXJzJyk7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudmFyIG5hdmJhciA9IG5ldyBWdWUoe1xuICAgIGVsOiBcIiNuYXZiYXJcIixcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30nXSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwYXVzZWRcIixcbiAgICAgICAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IG51bGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgIHByb2plY3RzOiBudWxsLFxuICAgICAgICAgICAgcHJvamVjdDogbnVsbCxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiBcImVtcHR5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RhcnRlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUN1cnJlbnRUaW1lLCAxMDAwKTtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0cygpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzICsgJzonICsgdGhpcy5taW51dGVzICsgJzonICsgdGhpcy5zZWNvbmRzO1xuICAgICAgICB9LFxuICAgICAgICBtaWxsaXNlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWUgLSB0aGlzLiRkYXRhLnN0YXJ0VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgaG91cnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXBzZWQgPSB0aGlzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHZhciBocnMgPSBNYXRoLmZsb29yKChsYXBzZWQgLyAxMDAwIC8gNjAgLyA2MCkpO1xuICAgICAgICAgICAgcmV0dXJuIGhycyA+PSAxMCA/IGhycyA6ICcwJyArIGhycztcbiAgICAgICAgfSxcbiAgICAgICAgbWludXRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhcHNlZCA9IHRoaXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGguZmxvb3IoKGxhcHNlZCAvIDEwMDAgLyA2MCkgJSA2MCk7XG4gICAgICAgICAgICByZXR1cm4gbWluID49IDEwID8gbWluIDogJzAnICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFwc2VkID0gdGhpcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICB2YXIgc2VjID0gTWF0aC5jZWlsKChsYXBzZWQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICAgICAgIHJldHVybiBzZWMgPj0gMTAgPyBzZWMgOiAnMCcgKyBzZWM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhdGUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICAgICAgICB0aGlzLnBvc3RUaW1lKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZGF0YS5zdGF0ZSA9PT0gXCJzdGFydGVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9zdFRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aGlzLnN0YXJ0VGltZSkpO1xuICAgICAgICAgICAgdmFyIHN0b3BEYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcHBfZGV2LnBocC9hcGkvdGltZS90aW1lcnMnLCB7XG4gICAgICAgICAgICAgICAgVGltZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UYXNrOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogc3RhcnREYXRlLmdldE1vbnRoKCkrMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IHN0YXJ0RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogc3RhcnREYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBzdGFydERhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogc3RhcnREYXRlLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdG9wVGltZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogc3RvcERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogc3RvcERhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogc3RvcERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IHN0b3BEYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBzdG9wRGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiBzdG9wRGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogdGhpcy5wcm9qZWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9qZWN0czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvcHJvamVjdC9wcm9qZWN0cycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMucHJvamVjdHMgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGltZShuZXdUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uub3JpZ2luYWxUaW1lID0gbmV3VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydFRpbWUobmV3U3RhcnRUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0TmFtZShuYW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdE5hbWUgPSBuYW1lO1xuICAgICAgICB9LFxuICAgICAgICAvLyBwcm9qZWN0RGVzY3JpcHRpb24oZGVzYykge1xuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgICAgLy8gfVxuICAgIH1cbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgdGltZXMgPSBuZXcgVnVlKHtcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30nXSxcbiAgICBlbDogXCIjdGltZXNcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lcygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRUaW1lczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvdGltZS90aW1lcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiAodmFsdWUpIHtcblxuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgdGVhbXMgPSBuZXcgVnVlKHtcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30nXSxcbiAgICBlbDogXCIjd29ya2Vyc1wiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJzOiBudWxsLFxuICAgICAgICAgICAgdGVhbXM6IG51bGwsXG4gICAgICAgICAgICB0ZWFtSUQ6IDdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdldFRlYW1zKCk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcnModGhpcy50ZWFtSUQpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRVc2VyczogZnVuY3Rpb24gKHRlYW1JRCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvdXNlci90ZWFtL3VzZXJzLycrIHRlYW1JRCArJy90ZWFtL3VzZXJzL2J5L3RlYW0nKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRlYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS90ZWFtL3RlYW1zJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoW3RoaXMudGVhbXMgPSByZXNwb25zZS5kYXRhLCB0aGlzLnRlYW1JRCA9IHJlc3BvbnNlLmRhdGFbMF0uaWRdKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VXNlckFjdGl2ZTogZnVuY3Rpb24gKCRhY3RpdmVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCRhY3RpdmVUaW1lKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHR3b01pbkJlZm9yZSA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgLSAyKTtcbiAgICAgICAgICAgIGxldCB0d29NaW5BZnRlciA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgKyAyKTtcbiAgICAgICAgICAgIGlmICgoZGF0ZSA+IHR3b01pbkJlZm9yZSkgJiYgKGRhdGUgPCB0d29NaW5BZnRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==