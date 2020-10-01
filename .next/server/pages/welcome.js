module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/welcome.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/useFirebase.tsx":
/*!************************************!*\
  !*** ./components/useFirebase.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devConfig_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devConfig.json */ "./devConfig.json");
var _devConfig_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../devConfig.json */ "./devConfig.json", 1);
 // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

 // Add the Firebase services that you want to use


 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = !firebase_app__WEBPACK_IMPORTED_MODULE_1__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](_devConfig_json__WEBPACK_IMPORTED_MODULE_3__) : firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]();
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(app));

/***/ }),

/***/ "./devConfig.json":
/*!************************!*\
  !*** ./devConfig.json ***!
  \************************/
/*! exports provided: apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiKey\":\"AIzaSyD5y2GiTRTc-mTVHy_Sf3jd5906mbKFOUQ\",\"authDomain\":\"fidelisproject-a25db.firebaseapp.com\",\"databaseURL\":\"https://fidelisproject-a25db.firebaseio.com\",\"projectId\":\"fidelisproject-a25db\",\"storageBucket\":\"fidelisproject-a25db.appspot.com\",\"messagingSenderId\":\"139761333799\",\"appId\":\"1:139761333799:web:2e7d4f4d3fb08a90f20002\",\"measurementId\":\"G-VZ74GFP9WM\"}");

/***/ }),

/***/ "./pages/welcome.tsx":
/*!***************************!*\
  !*** ./pages/welcome.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Welcome; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");
var _jsxFileName = "C:\\Users\\peter\\Projects\\sampleProject\\pages\\welcome.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Welcome() {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const registereduser = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  const handleLogOut = async () => {
    setLoading(true);
    const confirmTask = confirm('are you sure you want to logOut');

    if (confirmTask) {
      await registereduser.auth().signOut();
      router.push('/');
      setLoading(false);
    }

    setLoading(false);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, "Sample Welcome page", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "danger",
    className: "btn btn-md",
    onClick: handleLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, !loading ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "LouOut") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    animation: "border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 39
    }
  })));
}

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VGaXJlYmFzZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvd2VsY29tZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiJdLCJuYW1lcyI6WyJhcHAiLCJmaXJlYmFzZSIsImxlbmd0aCIsImRldkNvbmZpZyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIldlbGNvbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwicmVnaXN0ZXJlZHVzZXIiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVMb2dPdXQiLCJjb25maXJtVGFzayIsImNvbmZpcm0iLCJhdXRoIiwic2lnbk91dCIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTtBQUNBO0FBQ0E7O0NBR0E7O0FBQ0E7Q0FFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQ0MsaURBQUEsQ0FBY0MsTUFBZixHQUF3QkQsMERBQUEsQ0FBdUJFLDRDQUF2QixDQUF4QixHQUE0REYsZ0RBQUEsRUFBeEU7QUFDZUcsd0hBQUssQ0FBQ0MsYUFBTixDQUFvQkwsR0FBcEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxPQUFULEdBQWdDO0FBQzlDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUFqQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDaENQLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxVQUFNUSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxpQ0FBRCxDQUEzQjs7QUFDQSxRQUFJRCxXQUFKLEVBQWlCO0FBQ2hCLFlBQU1OLGNBQWMsQ0FBQ1EsSUFBZixHQUFzQkMsT0FBdEIsRUFBTjtBQUNBTixZQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaO0FBQ0FaLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0E7O0FBQ0RBLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxHQVREOztBQVdBLFNBQ0MsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVDLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsUUFBaEI7QUFBeUIsYUFBUyxFQUFDLFlBQW5DO0FBQWdELFdBQU8sRUFBRU8sWUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLENBQUNSLE9BQUQsR0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVgsR0FBaUMsTUFBQyx1REFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRG5DLENBRkQsQ0FERDtBQVFBLEM7Ozs7Ozs7Ozs7O0FDNUJELHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL3dlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dlbGNvbWUudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gRmlyZWJhc2UgQXBwICh0aGUgY29yZSBGaXJlYmFzZSBTREspIGlzIGFsd2F5cyByZXF1aXJlZCBhbmRcclxuLy8gbXVzdCBiZSBsaXN0ZWQgYmVmb3JlIG90aGVyIEZpcmViYXNlIFNES3NcclxuLy8gRmlyZWJhc2UgQXBwICh0aGUgY29yZSBGaXJlYmFzZSBTREspIGlzIGFsd2F5cyByZXF1aXJlZCBhbmRcclxuLy8gbXVzdCBiZSBsaXN0ZWQgYmVmb3JlIG90aGVyIEZpcmViYXNlIFNES3NcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuXHJcbi8vIEFkZCB0aGUgRmlyZWJhc2Ugc2VydmljZXMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IGRldkNvbmZpZyBmcm9tICcuLi9kZXZDb25maWcuanNvbic7XHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZGV2Q29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KGFwcCk7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWUoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCByZWdpc3RlcmVkdXNlciA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGhhbmRsZUxvZ091dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRjb25zdCBjb25maXJtVGFzayA9IGNvbmZpcm0oJ2FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2dPdXQnKTtcclxuXHRcdGlmIChjb25maXJtVGFzaykge1xyXG5cdFx0XHRhd2FpdCByZWdpc3RlcmVkdXNlci5hdXRoKCkuc2lnbk91dCgpO1xyXG5cdFx0XHRyb3V0ZXIucHVzaCgnLycpO1xyXG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRTYW1wbGUgV2VsY29tZSBwYWdlXHJcblx0XHRcdDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIGNsYXNzTmFtZT1cImJ0biBidG4tbWRcIiBvbkNsaWNrPXtoYW5kbGVMb2dPdXR9PlxyXG5cdFx0XHRcdHshbG9hZGluZyA/IDxzcGFuPkxvdU91dDwvc3Bhbj4gOiA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIj48L1NwaW5uZXI+fVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=