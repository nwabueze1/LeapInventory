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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {//focus the input element on pageLoad
    // inputRef.current.focus();
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

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "email",
    bsSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    autoFocus: true,
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "password",
    bsSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    autoFocus: true,
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwidG9hc3QiLCJlcnJvciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzIiwic3VjY2VzcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQW5DO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksSUFBakIsRUFBWjs7QUFGMkMsa0JBR2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlwQ0csUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBQUEsbUJBS2JKLHNEQUFRLENBQUMsS0FBRCxDQUxLO0FBQUEsTUFLcENLLE9BTG9DO0FBQUEsTUFLM0JDLFVBTDJCOztBQU0zQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQUMseURBQVMsQ0FBQyxZQUFNLENBQ2Y7QUFDQTtBQUNBLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUMsWUFBWTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQlgsS0FBSyxDQUFDWSxNQUFOLEdBQWUsQ0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FDU0Msb0RBQUssQ0FBQ0MsS0FBTixDQUFZLG9EQUFaLENBRFQ7O0FBQUE7QUFBQSxvQkFFaEJaLFFBQVEsQ0FBQ1UsTUFBVCxHQUFrQixDQUZGO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUVZQyxvREFBSyxDQUFDQyxLQUFOLENBQVksK0JBQVosQ0FGWjs7QUFBQTtBQUdwQlQsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFIb0I7QUFBQTtBQUFBLHFCQUtEUixHQUFHLENBQUNrQiwwQkFBSixDQUErQmYsS0FBL0IsRUFBc0NFLFFBQXRDLENBTEM7O0FBQUE7QUFLYmMsaUJBTGE7QUFNbkJILGtFQUFLLENBQUNJLE9BQU4sQ0FBYyx3QkFBZDtBQUVBWCxvQkFBTSxDQUFDWSxJQUFQLENBQVksVUFBWjtBQVJtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQVVaTCxvREFBSyxDQUFDQyxLQUFOLENBQVksaUJBQVosQ0FWWTs7QUFBQTtBQWFwQlQsd0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBYm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpNLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBZUEsU0FDQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxPQUF0QjtBQUE4QixVQUFNLEVBQUMsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQUVDLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsYUFBUyxNQUF2QjtBQUF3QixRQUFJLEVBQUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQsRUFLQyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLGFBQVMsRUFBQyxVQUF0QjtBQUFpQyxVQUFNLEVBQUMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFFQyxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLGFBQVMsTUFBdkI7QUFBd0IsUUFBSSxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUxELENBREQsQ0FERDtBQWNBOztHQTNDdUJsQixJO1VBTVJjLHFEOzs7S0FOUWQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmQwYmFmMDc5ZGM1ZDdhZDQ4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBDb250YWluZXIsIEZvcm0sIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jYXJkSGVhZGVyLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IGF1dGhlbnRpZmljYXRpb24gPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcblx0Y29uc3QgYXBwID0gYXV0aGVudGlmaWNhdGlvbi5hdXRoKCk7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvL2ZvY3VzIHRoZSBpbnB1dCBlbGVtZW50IG9uIHBhZ2VMb2FkXG5cdFx0Ly8gaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmIChlbWFpbC5sZW5ndGggPCA4KSByZXR1cm4gdG9hc3QuZXJyb3IoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLCBtdXN0IGJlIG1pbiA4IHh0ZXJzLi4uJyk7XG5cdFx0aWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgcGFzc3dvcmQnKTtcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBhcHAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1NpZ25lZCBpbiBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0cm91dGVyLnB1c2goJy93ZWxjb21lJyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcignZmFpbGVkIHRvIGxvZ2luJyk7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9XG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lcj5cblx0XHRcdDxGb3JtPlxuXHRcdFx0XHQ8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJlbWFpbFwiIGJzU2l6ZT1cImxhcmdlXCI+XG5cdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0PEZvcm0uQ29udHJvbCBhdXRvRm9jdXMgdHlwZT1cImVtYWlsXCI+PC9Gb3JtLkNvbnRyb2w+XG5cdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0PEZvcm0uR3JvdXAgY29udHJvbElkPVwicGFzc3dvcmRcIiBic1NpemU9XCJsYXJnZVwiPlxuXHRcdFx0XHRcdDxGb3JtLkxhYmVsPnBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgYXV0b0ZvY3VzIHR5cGU9XCJwYXNzd29yZFwiPjwvRm9ybS5Db250cm9sPlxuXHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9