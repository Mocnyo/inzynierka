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

/***/ 0:
/*!*********************************!*\
  !*** multi ./webpack/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./webpack/js/app.js */"./webpack/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9qcy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svanMvdGltZXIvdGltZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIm5hdmJhciIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImN1cnJlbnRUaW1lIiwiaW50ZXJ2YWwiLCJkZXNjcmlwdGlvbiIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUN1cnJlbnRUaW1lIiwiZGVzdHJveWVkIiwiY2xlYXJJbnRlcnZhbCIsImNvbXB1dGVkIiwidGltZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCIkZGF0YSIsImxhcHNlZCIsImhycyIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNlYyIsImNlaWwiLCJtZXRob2RzIiwicmVzZXQiLCJwYXVzZSIsInBvc3RQb3N0IiwiY2xlYXIiLCJyZXN1bWUiLCJzdGFydERhdGUiLCJwYXJzZUludCIsInN0b3BEYXRlIiwiYXhpb3MiLCJwb3N0IiwiVGltZXIiLCJkZXNjcmlwdGlvblRhc2siLCJkYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERheSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwic3RvcFRpbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ3YXRjaCIsIm5ld1RpbWUiLCJvcmlnaW5hbFRpbWUiLCJuZXdTdGF0ZSIsIm5ld1N0YXJ0VGltZSIsInRpbWVzIiwiZGVsaW1pdGVycyIsImdldFRpbWVzIiwiZ2V0Il0s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dkMsU0FBTyxFQUFFO0FBQ0x1QyxZQUFRLEVBQUUsb0JBQVk7QUFBQTs7QUFDbEI5QixrREFBSyxDQUFDK0IsR0FBTixDQUFVLDZCQUFWLEVBQ0tiLElBREwsQ0FDVSxVQUFBQyxRQUFRO0FBQUEsZUFBSyxLQUFJLENBQUN4RCxJQUFMLEdBQVl3RCxRQUFRLENBQUN4RCxJQUExQjtBQUFBLE9BRGxCLFdBRVcsVUFBVTJELEtBQVYsRUFBaUI7QUFDcEJGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsT0FKTDtBQUtIO0FBUEk7QUFYTyxDQUFSLENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpbn4uX21cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+Ll9ub2RlX21vZHVsZXNfYVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInJlcXVpcmUgKCcuL25hdmJhci9uYXZiYXInKTtcbnJlcXVpcmUgKCcuL3RpbWVyL3RpbWVzJyk7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudmFyIG5hdmJhciA9IG5ldyBWdWUoe1xuICAgIGVsOiBcIiNuYXZiYXJcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwYXVzZWRcIixcbiAgICAgICAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IG51bGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RhcnRlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUN1cnJlbnRUaW1lLCAxMDAwKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICB0aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3VycyArICc6JyArIHRoaXMubWludXRlcyArICc6JyArIHRoaXMuc2Vjb25kcztcbiAgICAgICAgfSxcbiAgICAgICAgbWlsbGlzZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbG9jYWxTdG9yYWdlLnN0YXJ0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lIC0gdGhpcy4kZGF0YS5zdGFydFRpbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGhvdXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFwc2VkID0gdGhpcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICB2YXIgaHJzID0gTWF0aC5mbG9vcigobGFwc2VkIC8gMTAwMCAvIDYwIC8gNjApKTtcbiAgICAgICAgICAgIHJldHVybiBocnMgPj0gMTAgPyBocnMgOiAnMCcgKyBocnM7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbnV0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXBzZWQgPSB0aGlzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHZhciBtaW4gPSBNYXRoLmZsb29yKChsYXBzZWQgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIG1pbiA+PSAxMCA/IG1pbiA6ICcwJyArIG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhcHNlZCA9IHRoaXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdmFyIHNlYyA9IE1hdGguY2VpbCgobGFwc2VkIC8gMTAwMCkgJSA2MCk7XG4gICAgICAgICAgICByZXR1cm4gc2VjID49IDEwID8gc2VjIDogJzAnICsgc2VjO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuc3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgICAgICAgdGhpcy5wb3N0UG9zdCgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9IFwic3RhcnRlZFwiO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGRhdGEuc3RhdGUgPT09IFwic3RhcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RQb3N0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gbmV3IERhdGUocGFyc2VJbnQodGhpcy5zdGFydFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBzdG9wRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBwX2Rldi5waHAvYXBpL3RpbWUvdGltZXJzJywge1xuICAgICAgICAgICAgICAgIFRpbWVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGFzazogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogc3RhcnREYXRlLmdldERheSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IHN0YXJ0RGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogc3RhcnREYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IHN0YXJ0RGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWU6e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHN0b3BEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHN0b3BEYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBzdG9wRGF0ZS5nZXREYXkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBzdG9wRGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogc3RvcERhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogc3RvcERhdGUuZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdGltZShuZXdUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uub3JpZ2luYWxUaW1lID0gbmV3VGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydFRpbWUobmV3U3RhcnRUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xuICAgICAgICB9XG4gICAgfVxufSlcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbnZhciB0aW1lcyA9IG5ldyBWdWUoe1xuICAgIGRlbGltaXRlcnM6IFsnJHsnLCAnfSddLFxuICAgIGVsOiBcIiN0aW1lc1wiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdldFRpbWVzKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFRpbWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2FwcF9kZXYucGhwL2FwaS90aW1lL3RpbWVycycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=