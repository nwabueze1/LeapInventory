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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");
/* harmony import */ var _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/cardHeader.module.scss */ "./styles/cardHeader.module.scss");
/* harmony import */ var _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\peter\\Projects\\sampleProject\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  const authentification = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const app = authentification.auth();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const handleSubmit = async () => {
    if (email.length < 8) return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('please enter a valid email, must be min 8 xters...');
    if (password.length < 5) return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('please enter a valid password');
    setLoading(true);

    try {
      const res = await app.signInWithEmailAndPassword(email, password);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Signed in successfully');
      router.push('/welcome');
    } catch (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('failed to login');
      setLoading(false);
    }

    setLoading(false);
  };

  return __jsx("div", {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "shadow mt-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, __jsx("h5", {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "LOGIN")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "EMAIL"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "email",
    autoFocus: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "enter your email...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "PASSWORD"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "password...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    animation: "grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 62
    }
  }, "Login")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-success px-2 float-right",
    type: "button",
    onClick: () => {
      router.push('/register');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Register")))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    autoClose: 4000,
    hideProgressBar: false,
    closeButton: true,
    closeOnClick: true,
    enableMultiContainer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ "./styles/cardHeader.module.scss":
/*!***************************************!*\
  !*** ./styles/cardHeader.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "cardHeader_header__p9RUp",
	"div": "cardHeader_div__2PCV4"
};


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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VGaXJlYmFzZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9jYXJkSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiJdLCJuYW1lcyI6WyJhcHAiLCJmaXJlYmFzZSIsImxlbmd0aCIsImRldkNvbmZpZyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXV0aCIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsInRvYXN0IiwiZXJyb3IiLCJyZXMiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInN1Y2Nlc3MiLCJwdXNoIiwic3R5bGVzIiwiZGl2IiwiaGVhZGVyIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbERELENBREQ7QUE0REEsQzs7Ozs7Ozs7Ozs7QUMxRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIEZpcmViYXNlIEFwcCAodGhlIGNvcmUgRmlyZWJhc2UgU0RLKSBpcyBhbHdheXMgcmVxdWlyZWQgYW5kXHJcbi8vIG11c3QgYmUgbGlzdGVkIGJlZm9yZSBvdGhlciBGaXJlYmFzZSBTREtzXHJcbi8vIEZpcmViYXNlIEFwcCAodGhlIGNvcmUgRmlyZWJhc2UgU0RLKSBpcyBhbHdheXMgcmVxdWlyZWQgYW5kXHJcbi8vIG11c3QgYmUgbGlzdGVkIGJlZm9yZSBvdGhlciBGaXJlYmFzZSBTREtzXHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG4vLyBBZGQgdGhlIEZpcmViYXNlIHNlcnZpY2VzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCBkZXZDb25maWcgZnJvbSAnLi4vZGV2Q29uZmlnLmpzb24nO1xyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcblxyXG5jb25zdCBhcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGRldkNvbmZpZykgOiBmaXJlYmFzZS5hcHAoKTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dChhcHApO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBDb250YWluZXIsIEZvcm0sIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jYXJkSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IGF1dGhlbnRpZmljYXRpb24gPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCBhcHAgPSBhdXRoZW50aWZpY2F0aW9uLmF1dGgoKTtcclxuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmIChlbWFpbC5sZW5ndGggPCA4KSByZXR1cm4gdG9hc3QuZXJyb3IoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLCBtdXN0IGJlIG1pbiA4IHh0ZXJzLi4uJyk7XHJcblx0XHRpZiAocGFzc3dvcmQubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZCcpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGFwcC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdTaWduZWQgaW4gc3VjY2Vzc2Z1bGx5Jyk7XHJcblxyXG5cdFx0XHRyb3V0ZXIucHVzaCgnL3dlbGNvbWUnKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcignZmFpbGVkIHRvIGxvZ2luJyk7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PENvbCBsZz17Nn0gY2xhc3NOYW1lPVwibXQtNVwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3cgbXQtOVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+TE9HSU48L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FTUFJTDwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXV0b0ZvY3VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBlbWFpbC4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPlBBU1NXT1JEPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkLi4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIj48L1NwaW5uZXI+IDogPHNwYW4+TG9naW48L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBweC0yIGZsb2F0LXJpZ2h0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlZ2lzdGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8VG9hc3RDb250YWluZXJcclxuXHRcdFx0XHRhdXRvQ2xvc2U9ezQwMDB9XHJcblx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuXHRcdFx0XHRjbG9zZUJ1dHRvblxyXG5cdFx0XHRcdGNsb3NlT25DbGljaz17dHJ1ZX1cclxuXHRcdFx0XHRlbmFibGVNdWx0aUNvbnRhaW5lclxyXG5cdFx0XHQ+PC9Ub2FzdENvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiY2FyZEhlYWRlcl9oZWFkZXJfX3A5UlVwXCIsXG5cdFwiZGl2XCI6IFwiY2FyZEhlYWRlcl9kaXZfXzJQQ1Y0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==