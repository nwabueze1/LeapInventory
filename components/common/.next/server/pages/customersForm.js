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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/customersForm.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Authentification.tsx":
/*!*****************************************!*\
  !*** ./components/Authentification.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirebase */ "./components/useFirebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScreenLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenLoader */ "./components/ScreenLoader.tsx");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\Authentification.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AuthGuard({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const app = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_useFirebase__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const auth = app.auth();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observable = auth.onAuthStateChanged(function (user) {
      if (user) {
        // free screen to render
        setUser(auth.currentUser);
      } else {
        // navigate else where
        router.push('/');
      }
    });
    return function () {
      observable();
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !user ? __jsx(_ScreenLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 20
    }
  }) : children);
}

/***/ }),

/***/ "./components/ScreenLoader.tsx":
/*!*************************************!*\
  !*** ./components/ScreenLoader.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\ScreenLoader.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ScreenLoader({
  msg
}) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      flex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex justify-content-center",
    style: {
      height: '100vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "my-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    role: "status",
    style: {
      width: '3rem',
      height: '3rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }), __jsx("h5", {
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, msg ? msg : 'Loading...'))))));
}

/***/ }),

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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devConfig_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devConfig.json */ "./devConfig.json");
var _devConfig_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../devConfig.json */ "./devConfig.json", 1);
 // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

 // Add the Firebase services that you want to use



 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = !firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_devConfig_json__WEBPACK_IMPORTED_MODULE_4__) : firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.app();
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

/***/ "./pages/customersForm.tsx":
/*!*********************************!*\
  !*** ./pages/customersForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomersForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Authentification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Authentification */ "./components/Authentification.tsx");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\customersForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CustomersForm() {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const app = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const firestore = app.firestore();

  const AddCustomer = async () => {
    if (name.length < 5) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('customer name must be grater that 5 characters');
    if (email.length < 7) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('customer email must be grater that 7 characters');
    if (address.length < 5) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('customer address must be grater that 5 characters');
    if (phone.length < 7) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('customer phone number must be grater that 7 characters');
    if (name.length > 100 || email.length > 50 || address.length > 100 || phone.length > 20) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Invalid Request');
    setLoading(true);
    const now = Date.now();
    const newCustomer = {
      id: `${now}`,
      name: name,
      email: email,
      phone: phone,
      address: address,
      type: 'One-off'
    };

    try {
      //call the backend to add the customer
      const res = await firestore.collection('customers').add(newCustomer);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('customer added to the database');
      setLoading(false);
      console.log(res);
      router.push('/customers');
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Cant connect to database now');
    }

    setLoading(false);
  };

  const handleEdit = async id => {
    const customers = await firestore.collection('customers').doc(id);
    router.push(`customers/${id}`);
  };

  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    style: {
      backgroundBlendMode: '-moz-initial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: AddCustomer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }, "Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "enter full name" // ref={inputRef}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "enter  email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 10
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 10
    }
  }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: address,
    onChange: e => setAddress(e.target.value),
    placeholder: "enter  address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 10
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "enter  phoneNumber",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "ml-2 btn-secondary mb-0 pb-1",
    onClick: AddCustomer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    variant: "ligth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 70
    }
  }, "Insert")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
    style: {
      backgroundBlendMode: '-moz-initial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
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

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoZW50aWZpY2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjcmVlbkxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VGaXJlYmFzZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tZXJzRm9ybS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbIkF1dGhHdWFyZCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImFwcCIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJhdXRoIiwidXNlRWZmZWN0Iiwib2JzZXJ2YWJsZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImN1cnJlbnRVc2VyIiwicHVzaCIsIlNjcmVlbkxvYWRlciIsIm1zZyIsImZsZXgiLCJoZWlnaHQiLCJ3aWR0aCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJkZXZDb25maWciLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDdXN0b21lcnNGb3JtIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VGaXJlYmFzZSIsImZpcmVzdG9yZSIsIkFkZEN1c3RvbWVyIiwidG9hc3QiLCJlcnJvciIsIm5vdyIsIkRhdGUiLCJuZXdDdXN0b21lciIsImlkIiwidHlwZSIsInJlcyIsImNvbGxlY3Rpb24iLCJhZGQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJjdXN0b21lcnMiLCJkb2MiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUE2RDtBQUMzRSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFT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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLDhCQUFsQjtBQUFpRCxXQUFPLEVBQUVwQixXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VKLE9BQU8sR0FBRyxNQUFDLHVEQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFdBQU8sRUFBQyxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ3RCxDQURELENBeENELENBRkQsRUFnREMsTUFBQyxvREFBRCxDQUFNLE1BQU47QUFBYSxTQUFLLEVBQUU7QUFBRXFCLHlCQUFtQixFQUFFO0FBQXZCLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREQsQ0FERCxDQURELEVBcURDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJERCxDQURELENBREQ7QUEyREEsQzs7Ozs7Ozs7Ozs7QUN4SEQseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvY3VzdG9tZXJzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY3VzdG9tZXJzRm9ybS50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuL3VzZUZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2NyZWVuTG9hZGVyIGZyb20gJy4vU2NyZWVuTG9hZGVyJztcclxuXHJcbmludGVyZmFjZSBBdXRoR3VhcmRQcm9wIHtcclxuXHRjaGlsZHJlbjogQXJyYXk8SlNYLkVsZW1lbnQ+IHwgSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhHdWFyZCh7IGNoaWxkcmVuIH06IEF1dGhHdWFyZFByb3ApOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8ZmlyZWJhc2UuVXNlciB8IG51bGw+KG51bGwpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuXHRjb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7XHJcblx0XHRcdGlmICh1c2VyKSB7XHJcblx0XHRcdFx0Ly8gZnJlZSBzY3JlZW4gdG8gcmVuZGVyXHJcblx0XHRcdFx0c2V0VXNlcihhdXRoLmN1cnJlbnRVc2VyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBuYXZpZ2F0ZSBlbHNlIHdoZXJlXHJcblx0XHRcdFx0cm91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvYnNlcnZhYmxlKCk7XHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cdHJldHVybiA8PnshdXNlciA/IDxTY3JlZW5Mb2FkZXIgLz4gOiBjaGlsZHJlbn08Lz47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbnRlcmZhY2UgU2NyZWVuTG9hZGVyUHJvcHMge1xyXG5cdG1zZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuTG9hZGVyKHsgbXNnIH06IFNjcmVlbkxvYWRlclByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8Um93IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcblx0XHRcdFx0PENvbCBsZz17MTJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiIHN0eWxlPXt7IHdpZHRoOiAnM3JlbScsIGhlaWdodDogJzNyZW0nIH19IC8+XHJcblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm10LTNcIj57bXNnID8gbXNnIDogJ0xvYWRpbmcuLi4nfTwvaDU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdDwvUm93PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBGaXJlYmFzZSBBcHAgKHRoZSBjb3JlIEZpcmViYXNlIFNESykgaXMgYWx3YXlzIHJlcXVpcmVkIGFuZFxyXG4vLyBtdXN0IGJlIGxpc3RlZCBiZWZvcmUgb3RoZXIgRmlyZWJhc2UgU0RLc1xyXG4vLyBGaXJlYmFzZSBBcHAgKHRoZSBjb3JlIEZpcmViYXNlIFNESykgaXMgYWx3YXlzIHJlcXVpcmVkIGFuZFxyXG4vLyBtdXN0IGJlIGxpc3RlZCBiZWZvcmUgb3RoZXIgRmlyZWJhc2UgU0RLc1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuLy8gQWRkIHRoZSBGaXJlYmFzZSBzZXJ2aWNlcyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5pbXBvcnQgZGV2Q29uZmlnIGZyb20gJy4uL2RldkNvbmZpZy5qc29uJztcclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChkZXZDb25maWcpIDogZmlyZWJhc2UuYXBwKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQoYXBwKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIEZvcm0sIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBBdXRoR3VhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoZW50aWZpY2F0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyc0Zvcm0oKSB7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xyXG5cdGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcclxuXHRjb25zdCBBZGRDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmIChuYW1lLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcignY3VzdG9tZXIgbmFtZSBtdXN0IGJlIGdyYXRlciB0aGF0IDUgY2hhcmFjdGVycycpO1xyXG5cdFx0aWYgKGVtYWlsLmxlbmd0aCA8IDcpIHJldHVybiB0b2FzdC5lcnJvcignY3VzdG9tZXIgZW1haWwgbXVzdCBiZSBncmF0ZXIgdGhhdCA3IGNoYXJhY3RlcnMnKTtcclxuXHRcdGlmIChhZGRyZXNzLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcignY3VzdG9tZXIgYWRkcmVzcyBtdXN0IGJlIGdyYXRlciB0aGF0IDUgY2hhcmFjdGVycycpO1xyXG5cdFx0aWYgKHBob25lLmxlbmd0aCA8IDcpIHJldHVybiB0b2FzdC5lcnJvcignY3VzdG9tZXIgcGhvbmUgbnVtYmVyIG11c3QgYmUgZ3JhdGVyIHRoYXQgNyBjaGFyYWN0ZXJzJyk7XHJcblx0XHRpZiAobmFtZS5sZW5ndGggPiAxMDAgfHwgZW1haWwubGVuZ3RoID4gNTAgfHwgYWRkcmVzcy5sZW5ndGggPiAxMDAgfHwgcGhvbmUubGVuZ3RoID4gMjApXHJcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcignSW52YWxpZCBSZXF1ZXN0Jyk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdGNvbnN0IG5ld0N1c3RvbWVyOiBDdXN0b21lcnMgPSB7XHJcblx0XHRcdGlkOiBgJHtub3d9YCxcclxuXHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0ZW1haWw6IGVtYWlsLFxyXG5cdFx0XHRwaG9uZTogcGhvbmUsXHJcblx0XHRcdGFkZHJlc3M6IGFkZHJlc3MsXHJcblx0XHRcdHR5cGU6ICdPbmUtb2ZmJyxcclxuXHRcdH07XHJcblx0XHR0cnkge1xyXG5cdFx0XHQvL2NhbGwgdGhlIGJhY2tlbmQgdG8gYWRkIHRoZSBjdXN0b21lclxyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJykuYWRkKG5ld0N1c3RvbWVyKTtcclxuXHRcdFx0dG9hc3Quc3VjY2VzcygnY3VzdG9tZXIgYWRkZWQgdG8gdGhlIGRhdGFiYXNlJyk7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRyb3V0ZXIucHVzaCgnL2N1c3RvbWVycycpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dG9hc3QuZXJyb3IoJ0NhbnQgY29ubmVjdCB0byBkYXRhYmFzZSBub3cnKTtcclxuXHRcdH1cclxuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBjdXN0b21lcnMgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJykuZG9jKGlkKTtcclxuXHRcdHJvdXRlci5wdXNoKGBjdXN0b21lcnMvJHtpZH1gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEF1dGhHdWFyZD5cclxuXHRcdFx0PFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNVwiPlxyXG5cdFx0XHRcdDxDb2wgbGc9ezR9PlxyXG5cdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnLW1vei1pbml0aWFsJyB9fT48L0NhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtIG9uU3VibWl0PXtBZGRDdXN0b21lcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW50ZXIgZnVsbCBuYW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyByZWY9e2lucHV0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVudGVyICBlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5BZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthZGRyZXNzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbnRlciAgYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5waG9uZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGhvbmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVudGVyICBwaG9uZU51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yIGJ0bi1zZWNvbmRhcnkgbWItMCBwYi0xXCIgb25DbGljaz17QWRkQ3VzdG9tZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJsaWd0aFwiIC8+IDogPHNwYW4+SW5zZXJ0PC9zcGFuPn1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDxDYXJkLkZvb3RlciBzdHlsZT17eyBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnLW1vei1pbml0aWFsJyB9fT48L0NhcmQuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdDwvQXV0aEd1YXJkPlxyXG5cdCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9