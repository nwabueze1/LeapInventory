webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/cardHeader.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/cardHeader.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".cardHeader_header__p9RUp {\n  background-color: #251269;\n  text-align: center;\n  text-shadow: 0.5;\n  font-style: oblique;\n  font-family: \"Times New Roman\", Times, serif;\n  -webkit-text-decoration-color: aliceblue;\n          text-decoration-color: aliceblue;\n  font: #fff;\n}\n\n.cardHeader_div__2PCV4 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["C:/Users/USER/Desktop/typescript/my-app/styles/cardHeader.module.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,4CAAA;EACA,wCAAA;UAAA,gCAAA;EACA,UAAA;AACJ;;AAOA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAJJ","file":"cardHeader.module.scss","sourcesContent":[".header {\r\n    background-color: rgb(37, 18, 105);\r\n    text-align: center;\r\n    text-shadow: 0.5;\r\n    font-style: oblique;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-decoration-color: aliceblue;\r\n    font: #fff;\r\n}\r\n\r\n.container {\r\n    // flex-direction: column;\r\n    // align-self: center;\r\n}\r\n\r\n.div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"]}]);
// Exports
exports.locals = {
	"header": "cardHeader_header__p9RUp",
	"div": "cardHeader_div__2PCV4"
};
module.exports = exports;


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");
/* harmony import */ var _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/cardHeader.module.scss */ "./styles/cardHeader.module.scss");
/* harmony import */ var _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function Home() {
  _s();

  var authentification = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var app = authentification.auth();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //focus the input element on pageLoad
    inputRef.current.focus();
  }, []);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(email.length < 8)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error('please enter a valid email, must be min 8 xters...'));

            case 2:
              if (!(password.length < 5)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error('please enter a valid password'));

            case 4:
              setLoading(true);
              _context.prev = 5;
              _context.next = 8;
              return app.signInWithEmailAndPassword(email, password);

            case 8:
              res = _context.sent;
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Signed in successfully');
              router.push('/welcome');
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              return _context.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error('failed to login'));

            case 17:
              setLoading(false);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 6,
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "shadow mt-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, __jsx("h5", {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "LOGIN")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "EMAIL"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "email",
    ref: inputRef,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "email...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "PASSWORD"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: "password...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    animation: "grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 62
    }
  }, "Login")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    className: "p-2",
    type: "button",
    onClick: function onClick() {
      router.push('/register');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "Register")))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    autoClose: 4000,
    hideProgressBar: false,
    closeButton: true,
    closeOnClick: true,
    enableMultiContainer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }));
}

_s(Home, "rjj0plbcOKS2E/10HlagZ/TIDIo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/cardHeader.module.scss":
/*!***************************************!*\
  !*** ./styles/cardHeader.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./cardHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/cardHeader.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./cardHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/cardHeader.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./cardHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/cardHeader.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NhcmRIZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NhcmRIZWFkZXIubW9kdWxlLnNjc3M/NDM2YyJdLCJuYW1lcyI6WyJIb21lIiwiYXV0aGVudGlmaWNhdGlvbiIsInVzZUNvbnRleHQiLCJ1c2VGaXJlYmFzZSIsImFwcCIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnB1dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImxlbmd0aCIsInRvYXN0IiwiZXJyb3IiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInJlcyIsInN1Y2Nlc3MiLCJwdXNoIiwic3R5bGVzIiwiZGl2IiwiaGVhZGVyIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEJBQThCLDhCQUE4Qix1QkFBdUIscUJBQXFCLHdCQUF3QixtREFBbUQsNkNBQTZDLDZDQUE2QyxlQUFlLEdBQUcsNEJBQTRCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsT0FBTyw0SEFBNEgsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxrRUFBa0UsMkNBQTJDLDJCQUEyQix5QkFBeUIsNEJBQTRCLHFEQUFxRCx5Q0FBeUMsbUJBQW1CLEtBQUssb0JBQW9CLGtDQUFrQyw4QkFBOEIsS0FBSyxjQUFjLHNCQUFzQixnQ0FBZ0MsNEJB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RUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sb2VBQTBSO0FBQ2hTO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsb2VBQTBSOztBQUVwVDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZmZmZDRiZjRhMDdmNGQxZGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZEhlYWRlcl9oZWFkZXJfX3A5UlVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTEyNjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMC41O1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250OiAjZmZmO1xcbn1cXG5cXG4uY2FyZEhlYWRlcl9kaXZfXzJQQ1Y0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL1VTRVIvRGVza3RvcC90eXBlc2NyaXB0L215LWFwcC9zdHlsZXMvY2FyZEhlYWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsVUFBQTtBQUNKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSlwiLFwiZmlsZVwiOlwiY2FyZEhlYWRlci5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxOCwgMTA1KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMC41O1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGZvbnQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiY2FyZEhlYWRlcl9oZWFkZXJfX3A5UlVwXCIsXG5cdFwiZGl2XCI6IFwiY2FyZEhlYWRlcl9kaXZfXzJQQ1Y0XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENvbnRhaW5lciwgRm9ybSwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NhcmRIZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgYXV0aGVudGlmaWNhdGlvbiA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xuXHRjb25zdCBhcHAgPSBhdXRoZW50aWZpY2F0aW9uLmF1dGgoKTtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgb24gcGFnZUxvYWRcblx0XHRpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0aWYgKGVtYWlsLmxlbmd0aCA8IDgpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwsIG11c3QgYmUgbWluIDggeHRlcnMuLi4nKTtcblx0XHRpZiAocGFzc3dvcmQubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZCcpO1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGFwcC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXHRcdFx0dG9hc3Quc3VjY2VzcygnU2lnbmVkIGluIHN1Y2Nlc3NmdWxseScpO1xuXG5cdFx0XHRyb3V0ZXIucHVzaCgnL3dlbGNvbWUnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHRvYXN0LmVycm9yKCdmYWlsZWQgdG8gbG9naW4nKTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH1cblx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdn0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8Q29sIGxnPXs2fSBjbGFzc05hbWU9XCJtdC01XCI+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3cgbXQtOVwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5MT0dJTjwvaDU+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RU1BSUw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWwuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+UEFTU1dPUkQ8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicGFzc3dvcmQuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgPyA8U3Bpbm5lciBhbmltYXRpb249XCJncm93XCI+PC9TcGlubmVyPiA6IDxzcGFuPkxvZ2luPC9zcGFuPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKCcvcmVnaXN0ZXInKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVnaXN0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxUb2FzdENvbnRhaW5lclxuXHRcdFx0XHRhdXRvQ2xvc2U9ezQwMDB9XG5cdFx0XHRcdGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG5cdFx0XHRcdGNsb3NlQnV0dG9uXG5cdFx0XHRcdGNsb3NlT25DbGljaz17dHJ1ZX1cblx0XHRcdFx0ZW5hYmxlTXVsdGlDb250YWluZXJcblx0XHRcdD48L1RvYXN0Q29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vY2FyZEhlYWRlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NhcmRIZWFkZXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9jYXJkSGVhZGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=