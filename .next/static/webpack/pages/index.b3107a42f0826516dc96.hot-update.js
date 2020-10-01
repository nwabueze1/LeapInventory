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
    placeholder: "enter your email...",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwidG9hc3QiLCJlcnJvciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzIiwic3VjY2VzcyIsInB1c2giLCJzdHlsZXMiLCJkaXYiLCJoZWFkZXIiLCJjb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQW5DO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksSUFBakIsRUFBWjs7QUFGMkMsa0JBR2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlwQ0csUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBQUEsbUJBS2JKLHNEQUFRLENBQUMsS0FBRCxDQUxLO0FBQUEsTUFLcENLLE9BTG9DO0FBQUEsTUFLM0JDLFVBTDJCOztBQU0zQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsTUFBTUMs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuREQsQ0FERDtBQTZEQTs7R0FyRnVCeEIsSTtVQU1SYyxxRDs7O0tBTlFkLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjMxMDdhNDJmMDgyNjUxNmRjOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ29udGFpbmVyLCBGb3JtLCBSb3csIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2FyZEhlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBhdXRoZW50aWZpY2F0aW9uID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XG5cdGNvbnN0IGFwcCA9IGF1dGhlbnRpZmljYXRpb24uYXV0aCgpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblx0XHRpZiAoZW1haWwubGVuZ3RoIDwgOCkgcmV0dXJuIHRvYXN0LmVycm9yKCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCwgbXVzdCBiZSBtaW4gOCB4dGVycy4uLicpO1xuXHRcdGlmIChwYXNzd29yZC5sZW5ndGggPCA1KSByZXR1cm4gdG9hc3QuZXJyb3IoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIHBhc3N3b3JkJyk7XG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXBwLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdTaWduZWQgaW4gc3VjY2Vzc2Z1bGx5Jyk7XG5cblx0XHRcdHJvdXRlci5wdXNoKCcvd2VsY29tZScpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdG9hc3QuZXJyb3IoJ2ZhaWxlZCB0byBsb2dpbicpO1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0fVxuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2fT5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxDb2wgbGc9ezZ9IGNsYXNzTmFtZT1cIm10LTVcIj5cblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdyBtdC05XCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuXHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PkxPR0lOPC9oNT5cblx0XHRcdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FTUFJTDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBlbWFpbC4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5QQVNTV09SRDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwYXNzd29yZC4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIj48L1NwaW5uZXI+IDogPHNwYW4+TG9naW48L3NwYW4+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInAtMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9yZWdpc3RlcicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZWdpc3RlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0PFRvYXN0Q29udGFpbmVyXG5cdFx0XHRcdGF1dG9DbG9zZT17NDAwMH1cblx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cblx0XHRcdFx0Y2xvc2VCdXR0b25cblx0XHRcdFx0Y2xvc2VPbkNsaWNrPXt0cnVlfVxuXHRcdFx0XHRlbmFibGVNdWx0aUNvbnRhaW5lclxuXHRcdFx0PjwvVG9hc3RDb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9