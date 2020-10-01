webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/cardHeader.module.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

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

/***/ }),

/***/ "./styles/cardHeader.module.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwidG9hc3QiLCJlcnJvciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzIiwic3VjY2VzcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQW5DO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksSUFBakIsRUFBWjs7QUFGMkMsa0JBR2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlwQ0csUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBQUEsbUJBS2JKLHNEQUFRLENBQUMsS0FBRCxDQUxLO0FBQUEsTUFLcENLLE9BTG9DO0FBQUEsTUFLM0JDLFVBTDJCOztBQU0zQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQUYsWUFBUSxDQUFDRyxPQUFULENBQWlCQyxLQUFqQjtBQUNBLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUMsWUFBWTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNoQmIsS0FBSyxDQUFDYyxNQUFOLEdBQWUsQ0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FDU0Msb0RBQUssQ0FBQ0MsS0FBTixDQUFZLG9EQUFaLENBRFQ7O0FBQUE7QUFBQSxvQkFFaEJkLFFBQVEsQ0FBQ1ksTUFBVCxHQUFrQixDQUZGO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUVZQyxvREFBSyxDQUFDQyxLQUFOLENBQVksK0JBQVosQ0FGWjs7QUFBQTtBQUdwQlgsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFIb0I7QUFBQTtBQUFBLHFCQUtEUixHQUFHLENBQUNvQiwwQkFBSixDQUErQmpCLEtBQS9CLEVBQXNDRSxRQUF0QyxDQUxDOztBQUFBO0FBS2JnQixpQkFMYTtBQU1uQkgsa0VBQUssQ0FBQ0ksT0FBTixDQUFjLHdCQUFkO0FBRUFiLG9CQUFNLENBQUNjLElBQVAsQ0FBWSxVQUFaO0FBUm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBVVpMLG9EQUFLLENBQUNDLEtBQU4sQ0FBWSxpQkFBWixDQVZZOztBQUFBO0FBYXBCWCx3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlEsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFlQSxTQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBUyxFQUFDLE9BQXRCO0FBQThCLFVBQU0sRUFBQyxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBRUMsTUFBQyxvREFBRCxDQUFNLE9BQU47QUFBYyxhQUFTLE1BQXZCO0FBQXdCLFFBQUksRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERCxFQUtDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBUyxFQUFDLFVBQXRCO0FBQWlDLFVBQU0sRUFBQyxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQUVDLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsYUFBUyxNQUF2QjtBQUF3QixRQUFJLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBTEQsQ0FERCxDQUREO0FBY0E7O0dBM0N1QnBCLEk7VUFNUmMscUQ7OztLQU5RZCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmY2Q3NWNhNjA1NWIzOGRkMmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENvbnRhaW5lciwgRm9ybSwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NhcmRIZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgYXV0aGVudGlmaWNhdGlvbiA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xuXHRjb25zdCBhcHAgPSBhdXRoZW50aWZpY2F0aW9uLmF1dGgoKTtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgb24gcGFnZUxvYWRcblx0XHRpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0aWYgKGVtYWlsLmxlbmd0aCA8IDgpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwsIG11c3QgYmUgbWluIDggeHRlcnMuLi4nKTtcblx0XHRpZiAocGFzc3dvcmQubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZCcpO1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGFwcC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXHRcdFx0dG9hc3Quc3VjY2VzcygnU2lnbmVkIGluIHN1Y2Nlc3NmdWxseScpO1xuXG5cdFx0XHRyb3V0ZXIucHVzaCgnL3dlbGNvbWUnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHRvYXN0LmVycm9yKCdmYWlsZWQgdG8gbG9naW4nKTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH1cblx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PEZvcm0+XG5cdFx0XHRcdDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImVtYWlsXCIgYnNTaXplPVwibGFyZ2VcIj5cblx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIGF1dG9Gb2N1cyB0eXBlPVwiZW1haWxcIj48L0Zvcm0uQ29udHJvbD5cblx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHQ8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJwYXNzd29yZFwiIGJzU2l6ZT1cImxhcmdlXCI+XG5cdFx0XHRcdFx0PEZvcm0uTGFiZWw+cGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0PEZvcm0uQ29udHJvbCBhdXRvRm9jdXMgdHlwZT1cInBhc3N3b3JkXCI+PC9Gb3JtLkNvbnRyb2w+XG5cdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=