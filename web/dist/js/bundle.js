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
/******/ 	deferredModules.push([0,"vendors~._node_modules_a","vendors~._node_modules_luxon_build_cjs-browser_luxon.js~131554dc","vendors~._node_modules_p"]);
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
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_4__);





var times = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  delimiters: ['${', '}'],
  el: "#times",
  data: function data() {
    return {
      data: null,
      projects: null
    };
  },
  mounted: function mounted() {
    this.getTimes();
    this.getProjects();
  },
  components: {
    datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_3__["Datetime"]
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
    getProjects: function getProjects() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/project/projects').then(function (response) {
        return _this2.projects = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleInput: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function ($teamId, $description, $startTime, $stopTime, $project) {
      $startTime = new Date($startTime);
      $stopTime = new Date($stopTime);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('app_dev.php/api/time/timers/' + $teamId, {
        Timer: {
          descriptionTask: $description,
          startTime: {
            date: {
              year: $startTime.getFullYear(),
              month: $startTime.getMonth() + 1,
              day: $startTime.getDate()
            },
            time: {
              hour: $startTime.getHours(),
              minute: $startTime.getMinutes(),
              second: $startTime.getSeconds()
            }
          },
          stopTime: {
            date: {
              year: $stopTime.getFullYear(),
              month: $stopTime.getMonth() + 1,
              day: $stopTime.getDate()
            },
            time: {
              hour: $stopTime.getHours(),
              minute: $stopTime.getMinutes(),
              second: $stopTime.getSeconds()
            }
          },
          project: $project
        }
      }).then(function (response) {})["catch"](function (error) {
        console.log(error);
      });
    }),
    test: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      console.log('asdas');
    })
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

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('app_dev.php/api/user/users/' + teamID + '/users/by/team').then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svanMvdGltZXIvdGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy93b3JrZXJzL3dvcmtlcnMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIm5hdmJhciIsIlZ1ZSIsImVsIiwiZGVsaW1pdGVycyIsImRhdGEiLCJzdGF0ZSIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJjdXJyZW50VGltZSIsImludGVydmFsIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0cyIsInByb2plY3QiLCJwcm9qZWN0TmFtZSIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUN1cnJlbnRUaW1lIiwiZ2V0UHJvamVjdHMiLCJkZXN0cm95ZWQiLCJjbGVhckludGVydmFsIiwiY29tcHV0ZWQiLCJ0aW1lIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsIiRkYXRhIiwibGFwc2VkIiwiaHJzIiwiTWF0aCIsImZsb29yIiwibWluIiwic2VjIiwiY2VpbCIsIm1ldGhvZHMiLCJyZXNldCIsInBhdXNlIiwicG9zdFRpbWUiLCJjbGVhciIsInJlc3VtZSIsInN0YXJ0RGF0ZSIsInBhcnNlSW50Iiwic3RvcERhdGUiLCJheGlvcyIsInBvc3QiLCJUaW1lciIsImRlc2NyaXB0aW9uVGFzayIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwic3RvcFRpbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ3YXRjaCIsIm5ld1RpbWUiLCJvcmlnaW5hbFRpbWUiLCJuZXdTdGF0ZSIsIm5ld1N0YXJ0VGltZSIsIm5hbWUiLCJ0aW1lcyIsImdldFRpbWVzIiwiY29tcG9uZW50cyIsImRhdGV0aW1lIiwiRGF0ZXRpbWUiLCJoYW5kbGVJbnB1dCIsImRlYm91bmNlIiwiJHRlYW1JZCIsIiRkZXNjcmlwdGlvbiIsIiRzdGFydFRpbWUiLCIkc3RvcFRpbWUiLCIkcHJvamVjdCIsInB1dCIsInRlc3QiLCJ0ZWFtcyIsInVzZXJzIiwidGVhbUlEIiwiZ2V0VGVhbXMiLCJnZXRVc2VycyIsImlkIiwiZ2V0VXNlckFjdGl2ZSIsIiRhY3RpdmVUaW1lIiwiY3VycmVudERhdGVUaW1lIiwidHdvTWluQmVmb3JlIiwic2V0TWludXRlcyIsInR3b01pbkFmdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BSkw7QUFLSCxLQWRJO0FBZUw4QixpQkFBYSxFQUFFLHVCQUFVQyxXQUFWLEVBQXVCO0FBQ2xDLFVBQUkvQyxJQUFJLEdBQUcsSUFBSTFDLElBQUosQ0FBU3lGLFdBQVQsQ0FBWDtBQUNBLFVBQUlDLGVBQWUsR0FBRyxJQUFJMUYsSUFBSixFQUF0QjtBQUNBLFVBQUkyRixZQUFZLEdBQUdELGVBQWUsQ0FBQ0UsVUFBaEIsQ0FBMkJGLGVBQWUsQ0FBQ3RDLFVBQWhCLEtBQStCLENBQTFELENBQW5CO0FBQ0EsVUFBSXlDLFdBQVcsR0FBR0gsZUFBZSxDQUFDRSxVQUFoQixDQUEyQkYsZUFBZSxDQUFDdEMsVUFBaEIsS0FBK0IsQ0FBMUQsQ0FBbEI7O0FBQ0EsVUFBS1YsSUFBSSxHQUFHaUQsWUFBUixJQUEwQmpELElBQUksR0FBR21ELFdBQXJDLEVBQW1EO0FBQy9DLGVBQU8sSUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sS0FBUDtBQUNIO0FBQ0o7QUF6Qkk7QUFkTyxDQUFSLENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpbn4uX21cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+Ll9ub2RlX21vZHVsZXNfYVwiLFwidmVuZG9yc34uX25vZGVfbW9kdWxlc19sdXhvbl9idWlsZF9janMtYnJvd3Nlcl9sdXhvbi5qc34xMzE1NTRkY1wiLFwidmVuZG9yc34uX25vZGVfbW9kdWxlc19wXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwicmVxdWlyZSAoJy4vbmF2YmFyL25hdmJhcicpO1xucmVxdWlyZSAoJy4vdGltZXIvdGltZXMnKTtcbnJlcXVpcmUgKCcuL3dvcmtlcnMvd29ya2VycycpOyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbnZhciBuYXZiYXIgPSBuZXcgVnVlKHtcbiAgICBlbDogXCIjbmF2YmFyXCIsXG4gICAgZGVsaW1pdGVyczogWyckeycsICd9J10sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdGU6IFwicGF1c2VkXCIsXG4gICAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICBjdXJyZW50VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGludGVydmFsOiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICBwcm9qZWN0czogbnVsbCxcbiAgICAgICAgICAgIHByb2plY3Q6IG51bGwsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogXCJlbXB0eVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5zdGF0ZSA9PT0gXCJzdGFydGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDdXJyZW50VGltZSwgMTAwMCk7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdHMoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB0aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3VycyArICc6JyArIHRoaXMubWludXRlcyArICc6JyArIHRoaXMuc2Vjb25kcztcbiAgICAgICAgfSxcbiAgICAgICAgbWlsbGlzZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbG9jYWxTdG9yYWdlLnN0YXJ0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lIC0gdGhpcy4kZGF0YS5zdGFydFRpbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGhvdXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFwc2VkID0gdGhpcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICB2YXIgaHJzID0gTWF0aC5mbG9vcigobGFwc2VkIC8gMTAwMCAvIDYwIC8gNjApKTtcbiAgICAgICAgICAgIHJldHVybiBocnMgPj0gMTAgPyBocnMgOiAnMCcgKyBocnM7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbnV0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXBzZWQgPSB0aGlzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLmZsb29yKChsYXBzZWQgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIG1pbiA+PSAxMCA/IG1pbiA6ICcwJyArIG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhcHNlZCA9IHRoaXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdmFyIHNlYyA9IE1hdGguY2VpbCgobGFwc2VkIC8gMTAwMCkgJSA2MCk7XG4gICAgICAgICAgICByZXR1cm4gc2VjID49IDEwID8gc2VjIDogJzAnICsgc2VjO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgICAgICAgdGhpcy5wb3N0VGltZSgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9IFwic3RhcnRlZFwiO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGRhdGEuc3RhdGUgPT09IFwic3RhcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUocGFyc2VJbnQodGhpcy5zdGFydFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBzdG9wRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBwX2Rldi5waHAvYXBpL3RpbWUvdGltZXJzJywge1xuICAgICAgICAgICAgICAgIFRpbWVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGFzazogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHN0YXJ0RGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBzdGFydERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IHN0YXJ0RGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogc3RhcnREYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IHN0YXJ0RGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHN0b3BEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHN0b3BEYXRlLmdldE1vbnRoKCkrMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IHN0b3BEYXRlLmdldERhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBzdG9wRGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogc3RvcERhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogc3RvcERhdGUuZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHRoaXMucHJvamVjdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvamVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBwX2Rldi5waHAvYXBpL3Byb2plY3QvcHJvamVjdHMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnByb2plY3RzID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHRpbWUobmV3VGltZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLm9yaWdpbmFsVGltZSA9IG5ld1RpbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRUaW1lKG5ld1N0YXJ0VGltZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnN0YXJ0VGltZSA9IG5ld1N0YXJ0VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvamVjdE5hbWUobmFtZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3ROYW1lID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcHJvamVjdERlc2NyaXB0aW9uKGRlc2MpIHtcbiAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgICAgIC8vIH1cbiAgICB9XG59KVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHsgRGF0ZXRpbWV9IGZyb20gXCJ2dWUtZGF0ZXRpbWVcIjtcbmltcG9ydCAndnVlLWRhdGV0aW1lL2Rpc3QvdnVlLWRhdGV0aW1lLmNzcydcblxudmFyIHRpbWVzID0gbmV3IFZ1ZSh7XG4gICAgZGVsaW1pdGVyczogWyckeycsICd9J10sXG4gICAgZWw6IFwiI3RpbWVzXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIHByb2plY3RzOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lcygpO1xuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGRhdGV0aW1lOiBEYXRldGltZVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRUaW1lczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCdhcHBfZGV2LnBocC9hcGkvdGltZS90aW1lcnMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvamVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBwX2Rldi5waHAvYXBpL3Byb2plY3QvcHJvamVjdHMnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnByb2plY3RzID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUlucHV0OiBkZWJvdW5jZShmdW5jdGlvbiAoJHRlYW1JZCwgJGRlc2NyaXB0aW9uLCAkc3RhcnRUaW1lLCAkc3RvcFRpbWUsICRwcm9qZWN0KSB7XG4gICAgICAgICAgICAkc3RhcnRUaW1lID0gbmV3IERhdGUoJHN0YXJ0VGltZSk7XG4gICAgICAgICAgICAkc3RvcFRpbWUgPSBuZXcgRGF0ZSgkc3RvcFRpbWUpO1xuXG4gICAgICAgICAgICBheGlvcy5wdXQoJ2FwcF9kZXYucGhwL2FwaS90aW1lL3RpbWVycy8nKyAkdGVhbUlkLCB7XG4gICAgICAgICAgICAgICAgVGltZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UYXNrOiAkZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICRzdGFydFRpbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJHN0YXJ0VGltZS5nZXRNb250aCgpKzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAkc3RhcnRUaW1lLmdldERhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiAkc3RhcnRUaW1lLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiAkc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6ICRzdGFydFRpbWUuZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAkc3RvcFRpbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJHN0b3BUaW1lLmdldE1vbnRoKCkrMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICRzdG9wVGltZS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogJHN0b3BUaW1lLmdldEhvdXJzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiAkc3RvcFRpbWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogJHN0b3BUaW1lLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiAkcHJvamVjdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIHRlc3Q6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc2RhcycpO1xuICAgICAgICB9KVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudmFyIHRlYW1zID0gbmV3IFZ1ZSh7XG4gICAgZGVsaW1pdGVyczogWyckeycsICd9J10sXG4gICAgZWw6IFwiI3dvcmtlcnNcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyczogbnVsbCxcbiAgICAgICAgICAgIHRlYW1zOiBudWxsLFxuICAgICAgICAgICAgdGVhbUlEOiA3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRUZWFtcygpO1xuICAgICAgICB0aGlzLmdldFVzZXJzKHRoaXMudGVhbUlEKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0VXNlcnM6IGZ1bmN0aW9uICh0ZWFtSUQpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnYXBwX2Rldi5waHAvYXBpL3VzZXIvdXNlcnMvJysgdGVhbUlEICsnL3VzZXJzL2J5L3RlYW0nKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRlYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS90ZWFtL3RlYW1zJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoW3RoaXMudGVhbXMgPSByZXNwb25zZS5kYXRhLCB0aGlzLnRlYW1JRCA9IHJlc3BvbnNlLmRhdGFbMF0uaWRdKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VXNlckFjdGl2ZTogZnVuY3Rpb24gKCRhY3RpdmVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCRhY3RpdmVUaW1lKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHR3b01pbkJlZm9yZSA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgLSAyKTtcbiAgICAgICAgICAgIGxldCB0d29NaW5BZnRlciA9IGN1cnJlbnREYXRlVGltZS5zZXRNaW51dGVzKGN1cnJlbnREYXRlVGltZS5nZXRNaW51dGVzKCkgKyAyKTtcbiAgICAgICAgICAgIGlmICgoZGF0ZSA+IHR3b01pbkJlZm9yZSkgJiYgKGRhdGUgPCB0d29NaW5BZnRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==