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
    autoFocus: true,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwidG9hc3QiLCJlcnJvciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwicmVzIiwic3VjY2VzcyIsInB1c2giLCJzdHlsZXMiLCJkaXYiLCJoZWFkZXIiLCJjb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQW5DO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxnQkFBZ0IsQ0FBQ0ksSUFBakIsRUFBWjs7QUFGMkMsa0JBR2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJWEYsc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlwQ0csUUFKb0M7QUFBQSxNQUkxQkMsV0FKMEI7O0FBQUEsbUJBS2JKLHNEQUFRLENBQUMsS0FBRCxDQUxLO0FBQUEsTUFLcENLLE9BTG9DO0FBQUEsTUFLM0JDLFVBTDJCOztBQU0zQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvREFB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TUFBQyw2REFBRDtBQUNDLGFBQVMsRUFBRSxJQURaO0FBRUMsbUJBQWUsRUFBRSxLQUZsQjtBQUdDLGVBQVcsTUFIWjtBQUlDLGdCQUFZLEVBQUUsSUFKZjtBQUtDLHdCQUFvQixNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRELENBREQ7QUE2REE7O0dBMUZ1QjNCLEk7VUFNUmMscUQ7OztLQU5RZCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmYjQ5NDZiZGJmODNmNTFjODU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIENvbnRhaW5lciwgRm9ybSwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NhcmRIZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgYXV0aGVudGlmaWNhdGlvbiA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xuXHRjb25zdCBhcHAgPSBhdXRoZW50aWZpY2F0aW9uLmF1dGgoKTtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgb24gcGFnZUxvYWRcblx0XHRpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0aWYgKGVtYWlsLmxlbmd0aCA8IDgpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwsIG11c3QgYmUgbWluIDggeHRlcnMuLi4nKTtcblx0XHRpZiAocGFzc3dvcmQubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZCcpO1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGFwcC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXHRcdFx0dG9hc3Quc3VjY2VzcygnU2lnbmVkIGluIHN1Y2Nlc3NmdWxseScpO1xuXG5cdFx0XHRyb3V0ZXIucHVzaCgnL3dlbGNvbWUnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHRvYXN0LmVycm9yKCdmYWlsZWQgdG8gbG9naW4nKTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH1cblx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdn0+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8Q29sIGxnPXs2fSBjbGFzc05hbWU9XCJtdC01XCI+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3cgbXQtOVwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5MT0dJTjwvaDU+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RU1BSUw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPlBBU1NXT1JEPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiPjwvU3Bpbm5lcj4gOiA8c3Bhbj5Mb2dpbjwvc3Bhbj59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC0yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlZ2lzdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8VG9hc3RDb250YWluZXJcblx0XHRcdFx0YXV0b0Nsb3NlPXs0MDAwfVxuXHRcdFx0XHRoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuXHRcdFx0XHRjbG9zZUJ1dHRvblxuXHRcdFx0XHRjbG9zZU9uQ2xpY2s9e3RydWV9XG5cdFx0XHRcdGVuYWJsZU11bHRpQ29udGFpbmVyXG5cdFx0XHQ+PC9Ub2FzdENvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=