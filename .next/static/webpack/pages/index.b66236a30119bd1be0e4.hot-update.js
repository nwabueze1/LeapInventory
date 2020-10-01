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
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 6,
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "shadow mt-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    className: _styles_cardHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
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
  }, "LOGIN")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
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
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, loading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
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
  }, "Login")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn btn-success l5",
    type: "button",
    onClick: function onClick() {
      router.push('/register');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 82,
      columnNumber: 4
    }
  }));
}

_s(Home, "OrHR5lg18c0+7ia1phZF9bOjsTw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdXRoZW50aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiYXBwIiwiYXV0aCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImxlbmd0aCIsInRvYXN0IiwiZXJyb3IiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInJlcyIsInN1Y2Nlc3MiLCJwdXNoIiwic3R5bGVzIiwiZGl2IiwiaGVhZGVyIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQTZCO0FBQUE7O0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUFuQztBQUNBLE1BQU1DLEdBQUcsR0FBR0gsZ0JBQWdCLENBQUNJLElBQWpCLEVBQVo7O0FBRjJDLGtCQUdqQkMsc0RBQVEsQ0FBQyxFQUFELENBSFM7QUFBQSxNQUdwQ0MsS0FIb0M7QUFBQSxNQUc3QkMsUUFINkI7O0FBQUEsbUJBSVhGLHNEQUFRLENBQUMsRUFBRCxDQUpHO0FBQUEsTUFJcENHLFFBSm9DO0FBQUEsTUFJMUJDLFdBSjBCOztBQUFBLG1CQUtiSixzREFBUSxDQUFDLEtBQUQsQ0FMSztBQUFBLE1BS3BDSyxPQUxvQztBQUFBLE1BSzNCQyxVQUwyQjs7QUFNM0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxZQUFZO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2hCUixLQUFLLENBQUNTLE1BQU4sR0FBZSxDQURDO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUNTQyxvREFBSyxDQUFDQyxLQUFOLENBQVksb0RBQVosQ0FEVDs7QUFBQTtBQUFBLG9CQUVoQlQsUUFBUSxDQUFDTyxNQUFULEdBQWtCLENBRkY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBRVlDLG9EQUFLLENBQUNDLEtBQU4sQ0FBWSwrQkFBWixDQUZaOztBQUFBO0FBR3BCTix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUhvQjtBQUFBO0FBQUEscUJBS0RSLEdBQUcsQ0FBQ2UsMEJBQUosQ0FBK0JaLEtBQS9CLEVBQXNDRSxRQUF0QyxDQUxDOztBQUFBO0FBS2JXLGlCQUxhO0FBTW5CSCxrRUFBSyxDQUFDSSxPQUFOLENBQWMsd0JBQWQ7QUFFQVIsb0JBQU0sQ0FBQ1MsSUFBUCxDQUFZLFVBQVo7QUFSbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FVWkwsb0RBQUssQ0FBQ0MsS0FBTixDQUFZLGlCQUFaLENBVlk7O0FBQUE7QUFhcEJOLHdCQUFVLENBQUMsS0FBRCxDQUFWOztBQWJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaRyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWVBLFNBQ0M7QUFBSyxhQUFTLEVBQUVRLHFFQUFNLENBQUNDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQWEsYUFBUyxFQUFFRCxxRUFBTSxDQUFDRSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsQ0FERCxFQUlDLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBRUMsTUFBQyxvREFBRCxDQUFNLE9BQU47QUFDQyxRQUFJLEVBQUMsT0FETjtBQUVDLGFBQVMsTUFGVjtBQUdDLFNBQUssRUFBRW5CLEtBSFI7QUFJQyxZQUFRLEVBQUUsa0JBQUNvQixDQUFEO0FBQUEsYUFBT25CLFFBQVEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUpYO0FBS0MsZUFBVyxFQUFDLHFCQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQURELEVBV0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQyxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsU0FBSyxFQUFFcEIsUUFGUjtBQUdDLFlBQVEsRUFBRSxrQkFBQ2tCLENBQUQ7QUFBQSxhQUFPakIsV0FBVyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUhYO0FBSUMsZUFBVyxFQUFDLGFBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBWEQsRUFxQkMsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFZCxZQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VKLE9BQU8sR0FBRyxNQUFDLHVEQUFEO0FBQVMsYUFBUyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRG5ELENBREQsRUFJQyxNQUFDLHNEQUFEO0FBQ0MsYUFBUyxFQUFDLG9CQURYO0FBRUMsUUFBSSxFQUFDLFFBRk47QUFHQyxXQUFPLEVBQUUsbUJBQU07QUFDZEUsWUFBTSxDQUFDUyxJQUFQLENBQVksV0FBWjtBQUNBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRCxDQXJCRCxDQURELENBSkQsQ0FERCxDQURELENBREQsQ0FERCxFQWtEQyxNQUFDLDZEQUFEO0FBQ0MsYUFBUyxFQUFFLElBRFo7QUFFQyxtQkFBZSxFQUFFLEtBRmxCO0FBR0MsZUFBVyxNQUhaO0FBSUMsZ0JBQVksRUFBRSxJQUpmO0FBS0Msd0JBQW9CLE1BTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsREQsQ0FERDtBQTREQTs7R0FuRnVCdEIsSTtVQU1SYyxxRDs7O0tBTlFkLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjY2MjM2YTMwMTE5YmQxYmUwZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgQ29udGFpbmVyLCBGb3JtLCBSb3csIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2FyZEhlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBhdXRoZW50aWZpY2F0aW9uID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XG5cdGNvbnN0IGFwcCA9IGF1dGhlbnRpZmljYXRpb24uYXV0aCgpO1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmIChlbWFpbC5sZW5ndGggPCA4KSByZXR1cm4gdG9hc3QuZXJyb3IoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLCBtdXN0IGJlIG1pbiA4IHh0ZXJzLi4uJyk7XG5cdFx0aWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcigncGxlYXNlIGVudGVyIGEgdmFsaWQgcGFzc3dvcmQnKTtcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBhcHAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1NpZ25lZCBpbiBzdWNjZXNzZnVsbHknKTtcblxuXHRcdFx0cm91dGVyLnB1c2goJy93ZWxjb21lJyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcignZmFpbGVkIHRvIGxvZ2luJyk7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9XG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0PENvbCBsZz17Nn0gY2xhc3NOYW1lPVwibXQtNVwiPlxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwic2hhZG93IG10LTlcIj5cblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG5cdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+TE9HSU48L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVNQUlMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIGVtYWlsLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPlBBU1NXT1JEPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInBhc3N3b3JkLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiPjwvU3Bpbm5lcj4gOiA8c3Bhbj5Mb2dpbjwvc3Bhbj59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGw1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlZ2lzdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8VG9hc3RDb250YWluZXJcblx0XHRcdFx0YXV0b0Nsb3NlPXs0MDAwfVxuXHRcdFx0XHRoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuXHRcdFx0XHRjbG9zZUJ1dHRvblxuXHRcdFx0XHRjbG9zZU9uQ2xpY2s9e3RydWV9XG5cdFx0XHRcdGVuYWJsZU11bHRpQ29udGFpbmVyXG5cdFx0XHQ+PC9Ub2FzdENvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=