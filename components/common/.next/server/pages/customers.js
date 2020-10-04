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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/customers.tsx");
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

/***/ "./components/common/pagination.tsx":
/*!******************************************!*\
  !*** ./components/common/pagination.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\common\\pagination.tsx";

const React = __webpack_require__(/*! react */ "react");

var __jsx = React.createElement;

const _ = __webpack_require__(/*! lodash */ "lodash");



const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange,
    currentPage
  } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("ul", {
    className: "pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, pages.map(page => __jsx("li", {
    className: page === currentPage ? 'page-item active' : 'page-item',
    key: page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "page-link",
    onClick: () => onPageChange(page),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, page)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/customersTable.tsx":
/*!***************************************!*\
  !*** ./components/customersTable.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomersTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\customersTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CustomersTable(props) {
  const {
    customersPaginate,
    onDelete,
    onEdit,
    onSort
  } = props;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "table-sm table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("tr", {
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "S/N"), __jsx("th", {
    onClick: () => onSort('name'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "person")), __jsx("th", {
    onClick: () => onSort('email'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "mail")), __jsx("th", {
    onClick: () => onSort('address'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "address")), __jsx("th", {
    onClick: () => onSort('phone'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "contact_phone")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, customersPaginate.map((customer, index) => __jsx("tr", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, index + 1), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, customer.name), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, customer.email), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, customer.address), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, customer.phone), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => onEdit(customer),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, "Edit")), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => onDelete(customer._id),
    className: "btn-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "delete")))))));
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

/***/ "./components/utils/paginate.tsx":
/*!***************************************!*\
  !*** ./components/utils/paginate.tsx ***!
  \***************************************/
/*! exports provided: paginate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginate", function() { return paginate; });
const _ = __webpack_require__(/*! lodash */ "lodash");

function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

/***/ }),

/***/ "./devConfig.json":
/*!************************!*\
  !*** ./devConfig.json ***!
  \************************/
/*! exports provided: apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiKey\":\"AIzaSyD5y2GiTRTc-mTVHy_Sf3jd5906mbKFOUQ\",\"authDomain\":\"fidelisproject-a25db.firebaseapp.com\",\"databaseURL\":\"https://fidelisproject-a25db.firebaseio.com\",\"projectId\":\"fidelisproject-a25db\",\"storageBucket\":\"fidelisproject-a25db.appspot.com\",\"messagingSenderId\":\"139761333799\",\"appId\":\"1:139761333799:web:2e7d4f4d3fb08a90f20002\",\"measurementId\":\"G-VZ74GFP9WM\"}");

/***/ }),

/***/ "./pages/customers.tsx":
/*!*****************************!*\
  !*** ./pages/customers.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customers; });
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
/* harmony import */ var _components_common_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/pagination */ "./components/common/pagination.tsx");
/* harmony import */ var _components_utils_paginate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/utils/paginate */ "./components/utils/paginate.tsx");
/* harmony import */ var _components_customersTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/customersTable */ "./components/customersTable.tsx");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\customers.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const _ = __webpack_require__(/*! lodash */ "lodash");

function Customers() {
  const {
    0: customers,
    1: setCustomers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: pageSize,
    1: setPageSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const {
    0: currentPage,
    1: setCurrentpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: sortColumns,
    1: setSortColumn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    path: 'title',
    order: 'asc'
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const app = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const firestore = app.firestore();

  const handleDelete = async id => {
    const deleteConfirm = confirm('Are you sure you ant to delete this document?');

    if (deleteConfirm) {
      //update the state
      const allCustomers = customers;
      const filtered = allCustomers.filter(m => m._id !== id);
      setCustomers(filtered);

      try {
        await firestore.collection('customers').doc(id).delete();
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('cant perform this operation');
        setCustomers(allCustomers);
      } //call the database to delete the customer with the id


      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('deleted successfully');
      console.log(id);
    }
  };

  const handleEdit = customer => {
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
    setId(customer._id);
  };

  const handlePageChange = page => {
    setCurrentpage(page);
  };

  const handleSort = path => {
    const sortColumn = _objectSpread({}, sortColumns);

    if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    setSortColumn(sortColumn);
  };

  const handleUpdate = async id => {
    if (name.length < 5 || email.length < 5) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Name and Email must be greater than 5 character');
    if (address.length < 5 || phone.length < 5) return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Address and Phone number must be greater than 5 characters');
    setLoading(true);

    try {
      const updatedCustomers = await firestore.collection('customers').doc(id).update({
        name: name,
        email: email,
        address: address,
        phone: phone
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Updated successfully');

      const allCustomers = _objectSpread(_objectSpread({}, customers), {}, {
        updatedCustomers
      });

      setCustomers(allCustomers);
      setLoading(false);
      router.reload();
    } catch (e) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Can't connect with database for now");
      setLoading(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getCustomers() {
      const citiesRef = firestore.collection('customers');
      const snapshot = await citiesRef.get();
      const customers = [];
      snapshot.forEach(doc => {
        let currentId = doc.id;

        let appObj = _objectSpread(_objectSpread({}, doc.data()), {}, {
          ['_id']: currentId
        });

        customers.push(appObj);
        console.log(customers);
      });
      setCustomers(customers);
    }

    getCustomers();
  }, []);

  const sorted = _.orderBy(customers, [sortColumns.path], [sortColumns.order]);

  const paginatedCustomers = Object(_components_utils_paginate__WEBPACK_IMPORTED_MODULE_7__["paginate"])(sorted, currentPage, pageSize);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "name...",
    value: name,
    onChange: e => setName(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "email...",
    value: email,
    onChange: e => setEmail(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "address...",
    value: address,
    onChange: e => setAddress(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "contact...",
    value: phone,
    onChange: e => setPhone(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn-secondary",
    onClick: () => handleUpdate(id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, !loading ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "Update") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    as: "span",
    animation: "border",
    size: "sm",
    role: "status",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 14
    }
  }), __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 14
    }
  }, "Updating...")))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => router.push('/customersForm'),
    className: "btn-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 8
    }
  }, __jsx(_components_customersTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    customersPaginate: paginatedCustomers,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onSort: handleSort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }), __jsx(_components_common_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    itemsCount: customers.length,
    currentPage: currentPage,
    pageSize: pageSize,
    onPageChange: handlePageChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 8
    }
  }))))));
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoZW50aWZpY2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NjcmVlbkxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VGaXJlYmFzZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy9wYWdpbmF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbIkF1dGhHdWFyZCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImFwcCIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJhdXRoIiwidXNlRWZmZWN0Iiwib2JzZXJ2YWJsZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImN1cnJlbnRVc2VyIiwicHVzaCIsIlNjcmVlbkxvYWRlciIsIm1zZyIsImZsZXgiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlYWN0IiwicmVxdWlyZSIsIl8iLCJQcm9wVHlwZXMiLCJQYWdpbmF0aW9uIiwicHJvcHMiLCJpdGVtc0NvdW50IiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJjdXJyZW50UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlc0NvdW50IiwiTWF0aCIsImNlaWwiLCJwYWdlcyIsInJhbmdlIiwibWFwIiwicGFnZSIsIkN1c3RvbWVyc1RhYmxlIiwiY3VzdG9tZXJzUGFnaW5hdGUiLCJvbkRlbGV0ZSIsIm9uRWRpdCIsIm9uU29ydCIsImN1cnNvciIsImN1c3RvbWVyIiwiaW5kZXgiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiLCJfaWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGV2Q29uZmlnIiwiY3JlYXRlQ29udGV4dCIsInBhZ2luYXRlIiwiaXRlbXMiLCJwYWdlTnVtYmVyIiwic3RhcnRJbmRleCIsInNsaWNlIiwidGFrZSIsInZhbHVlIiwiQ3VzdG9tZXJzIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXROYW1lIiwic2V0RW1haWwiLCJzZXRQaG9uZSIsInNldEFkZHJlc3MiLCJpZCIsInNldElkIiwic2V0UGFnZVNpemUiLCJzZXRDdXJyZW50cGFnZSIsInNvcnRDb2x1bW5zIiwic2V0U29ydENvbHVtbiIsInBhdGgiLCJvcmRlciIsInVzZUZpcmViYXNlIiwiZmlyZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlQ29uZmlybSIsImNvbmZpcm0iLCJhbGxDdXN0b21lcnMiLCJmaWx0ZXJlZCIsImZpbHRlciIsIm0iLCJjb2xsZWN0aW9uIiwiZG9jIiwiZGVsZXRlIiwiZXJyb3IiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJoYW5kbGVFZGl0IiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZVNvcnQiLCJzb3J0Q29sdW1uIiwiaGFuZGxlVXBkYXRlIiwidXBkYXRlZEN1c3RvbWVycyIsInVwZGF0ZSIsInJlbG9hZCIsImUiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJzbmFwc2hvdCIsImdldCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwic29ydGVkIiwib3JkZXJCeSIsInBhZ2luYXRlZEN1c3RvbWVycyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBNkQ7QUFDM0UsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RB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QUFBQTtBQUFBO0FBQUEsSUFERCxFQU9DLE1BQUMscUVBQUQ7QUFDQyxjQUFVLEVBQUVqQyxTQUFTLENBQUNaLE1BRHZCO0FBRUMsZUFBVyxFQUFFekIsV0FGZDtBQUdDLFlBQVEsRUFBRUYsUUFIWDtBQUlDLGdCQUFZLEVBQUV1RSxnQkFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FWRCxFQXdCQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkQsQ0FERCxDQTVERCxDQURELENBREQsQ0FERDtBQStGQSxDOzs7Ozs7Ozs7OztBQy9ORCx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQyIsImZpbGUiOiJwYWdlcy9jdXN0b21lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2N1c3RvbWVycy50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuL3VzZUZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2NyZWVuTG9hZGVyIGZyb20gJy4vU2NyZWVuTG9hZGVyJztcclxuXHJcbmludGVyZmFjZSBBdXRoR3VhcmRQcm9wIHtcclxuXHRjaGlsZHJlbjogQXJyYXk8SlNYLkVsZW1lbnQ+IHwgSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhHdWFyZCh7IGNoaWxkcmVuIH06IEF1dGhHdWFyZFByb3ApOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8ZmlyZWJhc2UuVXNlciB8IG51bGw+KG51bGwpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcclxuXHRjb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7XHJcblx0XHRcdGlmICh1c2VyKSB7XHJcblx0XHRcdFx0Ly8gZnJlZSBzY3JlZW4gdG8gcmVuZGVyXHJcblx0XHRcdFx0c2V0VXNlcihhdXRoLmN1cnJlbnRVc2VyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBuYXZpZ2F0ZSBlbHNlIHdoZXJlXHJcblx0XHRcdFx0cm91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvYnNlcnZhYmxlKCk7XHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cdHJldHVybiA8PnshdXNlciA/IDxTY3JlZW5Mb2FkZXIgLz4gOiBjaGlsZHJlbn08Lz47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbnRlcmZhY2UgU2NyZWVuTG9hZGVyUHJvcHMge1xyXG5cdG1zZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuTG9hZGVyKHsgbXNnIH06IFNjcmVlbkxvYWRlclByb3BzKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8Um93IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcblx0XHRcdFx0PENvbCBsZz17MTJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiIHN0eWxlPXt7IHdpZHRoOiAnM3JlbScsIGhlaWdodDogJzNyZW0nIH19IC8+XHJcblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm10LTNcIj57bXNnID8gbXNnIDogJ0xvYWRpbmcuLi4nfTwvaDU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdDwvUm93PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufVxyXG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9IChwcm9wczogYW55KSA9PiB7XHJcblx0Y29uc3QgeyBpdGVtc0NvdW50LCBwYWdlU2l6ZSwgb25QYWdlQ2hhbmdlLCBjdXJyZW50UGFnZSB9ID0gcHJvcHM7XHJcblx0Y29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xyXG5cdGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoaXRlbXNDb3VudCAvIHBhZ2VTaXplKTtcclxuXHRpZiAocGFnZXNDb3VudCA9PT0gMSkgcmV0dXJuIG51bGw7XHJcblx0Y29uc3QgcGFnZXMgPSBfLnJhbmdlKDEsIHBhZ2VzQ291bnQgKyAxKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE5hdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuXHRcdFx0XHR7cGFnZXMubWFwKChwYWdlOiBhbnkpID0+IChcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3BhZ2UgPT09IGN1cnJlbnRQYWdlID8gJ3BhZ2UtaXRlbSBhY3RpdmUnIDogJ3BhZ2UtaXRlbSd9IGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX0+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L05hdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyc1RhYmxlKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgeyBjdXN0b21lcnNQYWdpbmF0ZSwgb25EZWxldGUsIG9uRWRpdCwgb25Tb3J0IH06IGFueSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLXNtIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdDx0ciBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdDx0aD5TL048L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnbmFtZScpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnZW1haWwnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWFpbDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggb25DbGljaz17KCkgPT4gb25Tb3J0KCdhZGRyZXNzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZHJlc3M8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgncGhvbmUnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y29udGFjdF9waG9uZTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHR7Y3VzdG9tZXJzUGFnaW5hdGUubWFwKChjdXN0b21lcjogYW55LCBpbmRleDogYW55KSA9PiAoXHJcblx0XHRcdFx0XHQ8dHIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIubmFtZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5lbWFpbH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLmFkZHJlc3N9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5waG9uZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25FZGl0KGN1c3RvbWVyKX0+RWRpdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShjdXN0b21lci5faWQpfSBjbGFzc05hbWU9XCJidG4tZGFuZ2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHQ8L1RhYmxlPlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gRmlyZWJhc2UgQXBwICh0aGUgY29yZSBGaXJlYmFzZSBTREspIGlzIGFsd2F5cyByZXF1aXJlZCBhbmRcclxuLy8gbXVzdCBiZSBsaXN0ZWQgYmVmb3JlIG90aGVyIEZpcmViYXNlIFNES3NcclxuLy8gRmlyZWJhc2UgQXBwICh0aGUgY29yZSBGaXJlYmFzZSBTREspIGlzIGFsd2F5cyByZXF1aXJlZCBhbmRcclxuLy8gbXVzdCBiZSBsaXN0ZWQgYmVmb3JlIG90aGVyIEZpcmViYXNlIFNES3NcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbi8vIEFkZCB0aGUgRmlyZWJhc2Ugc2VydmljZXMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuaW1wb3J0IGRldkNvbmZpZyBmcm9tICcuLi9kZXZDb25maWcuanNvbic7XHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZGV2Q29uZmlnKSA6IGZpcmViYXNlLmFwcCgpO1xyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KGFwcCk7XHJcbiIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZShpdGVtczogYW55LCBwYWdlTnVtYmVyOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpIHtcclxuXHRjb25zdCBzdGFydEluZGV4ID0gKHBhZ2VOdW1iZXIgLSAxKSAqIHBhZ2VTaXplO1xyXG5cdHJldHVybiBfKGl0ZW1zKS5zbGljZShzdGFydEluZGV4KS50YWtlKHBhZ2VTaXplKS52YWx1ZSgpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDYXJkLFxyXG5cdENvbCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybSxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0SW5wdXRHcm91cCxcclxuXHRSb3csXHJcblx0U3Bpbm5lcixcclxuXHRUYWJsZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZSc7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDEwKTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtzb3J0Q29sdW1ucywgc2V0U29ydENvbHVtbl0gPSB1c2VTdGF0ZSh7IHBhdGg6ICd0aXRsZScsIG9yZGVyOiAnYXNjJyB9KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBhcHAgPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCBmaXJlc3RvcmUgPSBhcHAuZmlyZXN0b3JlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBkZWxldGVDb25maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSBhbnQgdG8gZGVsZXRlIHRoaXMgZG9jdW1lbnQ/Jyk7XHJcblx0XHRpZiAoZGVsZXRlQ29uZmlybSkge1xyXG5cdFx0XHQvL3VwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgYWxsQ3VzdG9tZXJzID0gY3VzdG9tZXJzO1xyXG5cdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEN1c3RvbWVycy5maWx0ZXIoKG0pID0+IG0uX2lkICE9PSBpZCk7XHJcblx0XHRcdHNldEN1c3RvbWVycyhmaWx0ZXJlZCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpLmRvYyhpZCkuZGVsZXRlKCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0dG9hc3QuZXJyb3IoJ2NhbnQgcGVyZm9ybSB0aGlzIG9wZXJhdGlvbicpO1xyXG5cdFx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL2NhbGwgdGhlIGRhdGFiYXNlIHRvIGRlbGV0ZSB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWRcclxuXHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ2RlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoY3VzdG9tZXI6IEN1c3RvbWVycykgPT4ge1xyXG5cdFx0c2V0TmFtZShjdXN0b21lci5uYW1lKTtcclxuXHRcdHNldEVtYWlsKGN1c3RvbWVyLmVtYWlsKTtcclxuXHRcdHNldFBob25lKGN1c3RvbWVyLnBob25lKTtcclxuXHRcdHNldEFkZHJlc3MoY3VzdG9tZXIuYWRkcmVzcyk7XHJcblx0XHRzZXRJZChjdXN0b21lci5faWQpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEN1cnJlbnRwYWdlKHBhZ2UpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU29ydCA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IHNvcnRDb2x1bW4gPSB7IC4uLnNvcnRDb2x1bW5zIH07XHJcblx0XHRpZiAoc29ydENvbHVtbi5wYXRoID09PSBwYXRoKSBzb3J0Q29sdW1uLm9yZGVyID0gc29ydENvbHVtbi5vcmRlciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzb3J0Q29sdW1uLnBhdGggPSBwYXRoO1xyXG5cdFx0XHRzb3J0Q29sdW1uLm9yZGVyID0gJ2FzYyc7XHJcblx0XHR9XHJcblx0XHRzZXRTb3J0Q29sdW1uKHNvcnRDb2x1bW4pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGlmIChuYW1lLmxlbmd0aCA8IDUgfHwgZW1haWwubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdOYW1lIGFuZCBFbWFpbCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA1IGNoYXJhY3RlcicpO1xyXG5cdFx0aWYgKGFkZHJlc3MubGVuZ3RoIDwgNSB8fCBwaG9uZS5sZW5ndGggPCA1KVxyXG5cdFx0XHRyZXR1cm4gdG9hc3QuZXJyb3IoJ0FkZHJlc3MgYW5kIFBob25lIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA1IGNoYXJhY3RlcnMnKTtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkQ3VzdG9tZXJzID0gYXdhaXQgZmlyZXN0b3JlXHJcblx0XHRcdFx0LmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpXHJcblx0XHRcdFx0LmRvYyhpZClcclxuXHRcdFx0XHQudXBkYXRlKHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCBhZGRyZXNzOiBhZGRyZXNzLCBwaG9uZTogcGhvbmUgfSk7XHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1VwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IHsgLi4uY3VzdG9tZXJzLCB1cGRhdGVkQ3VzdG9tZXJzIH07XHJcblx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gdG9hc3QuZXJyb3IoXCJDYW4ndCBjb25uZWN0IHdpdGggZGF0YWJhc2UgZm9yIG5vd1wiKTtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzKCkge1xyXG5cdFx0XHRjb25zdCBjaXRpZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJyk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2l0aWVzUmVmLmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcnM+ID0gW107XHJcblxyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudElkID0gZG9jLmlkO1xyXG5cdFx0XHRcdGxldCBhcHBPYmogPSB7IC4uLmRvYy5kYXRhKCksIFsnX2lkJ106IGN1cnJlbnRJZCB9O1xyXG5cdFx0XHRcdGN1c3RvbWVycy5wdXNoKGFwcE9iaiBhcyBDdXN0b21lcnMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1c3RvbWVycyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGN1c3RvbWVycyk7XHJcblx0XHR9XHJcblx0XHRnZXRDdXN0b21lcnMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHNvcnRlZCA9IF8ub3JkZXJCeShjdXN0b21lcnMsIFtzb3J0Q29sdW1ucy5wYXRoXSwgW3NvcnRDb2x1bW5zLm9yZGVyXSk7XHJcblx0Y29uc3QgcGFnaW5hdGVkQ3VzdG9tZXJzID0gcGFnaW5hdGUoc29ydGVkLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aEd1YXJkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBsLTBcIj5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBsZz17NH0gY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJwci0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1PkVkaXQgQ3VzdG9tZXJzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZS4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsLi4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QWRkcmVzczwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFkZHJlc3MuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FkZHJlc3N9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+UGhvbmU8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJjb250YWN0Li4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwaG9uZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZShpZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFsb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTcGlubmVyIGFzPVwic3BhblwiIGFuaW1hdGlvbj1cImJvcmRlclwiIHNpemU9XCJzbVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5VcGRhdGluZy4uLjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBsZz17OH0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY3VzdG9tZXJzRm9ybScpfSBjbGFzc05hbWU9XCJidG4taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEN1c3RvbWVyc1RhYmxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbWVyc1BhZ2luYXRlPXtwYWdpbmF0ZWRDdXN0b21lcnN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRWRpdD17aGFuZGxlRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25Tb3J0PXtoYW5kbGVTb3J0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PjwvQ3VzdG9tZXJzVGFibGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtc0NvdW50PXtjdXN0b21lcnMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PjwvUGFnaW5hdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8VG9hc3RDb250YWluZXI+PC9Ub2FzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9BdXRoR3VhcmQ+XHJcblx0KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=