webpackHotUpdate_N_E("pages/welcome",{

/***/ "./pages/welcome.tsx":
/*!***************************!*\
  !*** ./pages/welcome.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Welcome; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");



var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\welcome.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Welcome() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var registereduser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleLogOut = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var confirmTask;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              confirmTask = confirm('are you sure you want to logOut');

              if (!confirmTask) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return registereduser.auth().signOut();

            case 5:
              setLoading(false);
              router.push('/');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, "Sample Welcome page", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "danger",
    className: "btn btn-md",
    onClick: handleLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, !loading ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "LouOut") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    animation: "border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 39
    }
  })));
}

_s(Welcome, "l34UqbMakcjIr2ihM8b2i0T0eQ8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Welcome;

var _c;

$RefreshReg$(_c, "Welcome");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2VsY29tZS50c3giXSwibmFtZXMiOlsiV2VsY29tZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWdpc3RlcmVkdXNlciIsInVzZUNvbnRleHQiLCJ1c2VGaXJlYmFzZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUxvZ091dCIsImNvbmZpcm1UYXNrIiwiY29uZmlybSIsImF1dGgiLCJzaWduT3V0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFnQztBQUFBOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxLQUFELENBRFE7QUFBQSxNQUN2Q0MsT0FEdUM7QUFBQSxNQUM5QkMsVUFEOEI7O0FBRTlDLE1BQU1DLGNBQWMsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBakM7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFlBQVk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJOLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ01PLHlCQUZjLEdBRUFDLE9BQU8sQ0FBQyxpQ0FBRCxDQUZQOztBQUFBLG1CQUdoQkQsV0FIZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJYk4sY0FBYyxDQUFDUSxJQUFmLEdBQXNCQyxPQUF0QixFQUphOztBQUFBO0FBS25CVix3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBSSxvQkFBTSxDQUFDTyxJQUFQLENBQVksR0FBWjs7QUFObUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFVQSxTQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFQyxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQXlCLGFBQVMsRUFBQyxZQUFuQztBQUFnRCxXQUFPLEVBQUVBLFlBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxDQUFDUCxPQUFELEdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFYLEdBQWlDLE1BQUMsdURBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURuQyxDQUZELENBREQ7QUFRQTs7R0F0QnVCRixPO1VBR1JRLHFEOzs7S0FIUVIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93ZWxjb21lLjQyYjhiMGVhMDZjMDhiODcxY2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lKCk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgcmVnaXN0ZXJlZHVzZXIgPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBoYW5kbGVMb2dPdXQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y29uc3QgY29uZmlybVRhc2sgPSBjb25maXJtKCdhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nT3V0Jyk7XHJcblx0XHRpZiAoY29uZmlybVRhc2spIHtcclxuXHRcdFx0YXdhaXQgcmVnaXN0ZXJlZHVzZXIuYXV0aCgpLnNpZ25PdXQoKTtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdHJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdFNhbXBsZSBXZWxjb21lIHBhZ2VcclxuXHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0+XHJcblx0XHRcdFx0eyFsb2FkaW5nID8gPHNwYW4+TG91T3V0PC9zcGFuPiA6IDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiPjwvU3Bpbm5lcj59XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9