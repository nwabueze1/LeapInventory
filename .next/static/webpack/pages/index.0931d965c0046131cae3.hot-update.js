webpackHotUpdate_N_E("pages/index",{

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
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 6,
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "shadow mt-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, __jsx("h5", {
    style: {
      color: '#fff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "LOGIN")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "EMAIL"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "email",
    autoFocus: true,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "email...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "PASSWORD"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    animation: "grow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 67,
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
      lineNumber: 84,
      columnNumber: 4
    }
  }));
}

_s(Home, "ijCwD7PddsOmzQQPuU43nDG5b1o=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwidG9hc3QiLCJlcnJvciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzIiwic3VjY2VzcyIsInB1c2giLCJzdHlsZXMiLCJkaXYiLCJoZWFkZXIiLCJjb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQW5DO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksSUFBakIsRUFBWjs7QUFGMkMsa0JBR2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlwQ0csUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBQUEsbUJBS2JKLHNEQUFRLENBQUMsS0FBRCxDQUxLO0FBQUEsTUFLcENLLE9BTG9DO0FBQUEsTUFLM0JDLFVBTDJCOztBQU0zQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsTUFBTUMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5ERCxDQUREO0FBNkRBOztHQXJGdUJ4QixJO1VBTVJjLHFEOzs7S0FOUWQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTMxZDk2NWMwMDQ2MTMxY2FlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBDb250YWluZXIsIEZvcm0sIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jYXJkSGVhZGVyLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IGF1dGhlbnRpZmljYXRpb24gPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcblx0Y29uc3QgYXBwID0gYXV0aGVudGlmaWNhdGlvbi5hdXRoKCk7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmIChlbWFpbC5sZW5ndGggPCA4KSByZXR1cm4gdG9hc3QuZXJyb3IoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLCBtdXN0IGJlIG1pbiA4IHh0ZXJzLi4uJyk7XG5cdFx0aWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgcGFzc3dvcmQnKTtcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBhcHAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1NpZ25lZCBpbiBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0cm91dGVyLnB1c2goJy93ZWxjb21lJyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcignZmFpbGVkIHRvIGxvZ2luJyk7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9XG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0PENvbCBsZz17Nn0gY2xhc3NOYW1lPVwibXQtNVwiPlxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwic2hhZG93IG10LTlcIj5cblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG5cdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+TE9HSU48L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVNQUlMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbC4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5QQVNTV09SRDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwYXNzd29yZC4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIj48L1NwaW5uZXI+IDogPHNwYW4+TG9naW48L3NwYW4+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInAtMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9yZWdpc3RlcicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZWdpc3RlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0PFRvYXN0Q29udGFpbmVyXG5cdFx0XHRcdGF1dG9DbG9zZT17NDAwMH1cblx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cblx0XHRcdFx0Y2xvc2VCdXR0b25cblx0XHRcdFx0Y2xvc2VPbkNsaWNrPXt0cnVlfVxuXHRcdFx0XHRlbmFibGVNdWx0aUNvbnRhaW5lclxuXHRcdFx0PjwvVG9hc3RDb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9