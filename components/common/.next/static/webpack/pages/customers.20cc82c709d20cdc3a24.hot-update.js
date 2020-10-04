webpackHotUpdate_N_E("pages/customers",{

/***/ "./components/common/pagination.tsx":
/*!******************************************!*\
  !*** ./components/common/pagination.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\common\\pagination.tsx";

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var __jsx = React.createElement;

var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");



var Pagination = function Pagination(props) {
  var itemsCount = props.itemsCount,
      pageSize = props.pageSize;
  var pagesCount = itemsCount / pageSize;
  if (pagesCount === 1) return null;

  var pages = _.range(1, pagesCount + 1);

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("ul", {
    className: "pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, pages.map(function (page) {
    return __jsx("li", {
      className: "page-item",
      key: page,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }
    }, __jsx("a", {
      className: "page-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, page));
  })));
};

_c = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

var _c;

$RefreshReg$(_c, "Pagination");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiXyIsIlBhZ2luYXRpb24iLCJwcm9wcyIsIml0ZW1zQ291bnQiLCJwYWdlU2l6ZSIsInBhZ2VzQ291bnQiLCJwYWdlcyIsInJhbmdlIiwibWFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOzs7O0FBQ0EsSUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLCtDQUFELENBQWpCOztBQUNBOztBQUdBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBZ0I7QUFBQSxNQUMxQkMsVUFEMEIsR0FDREQsS0FEQyxDQUMxQkMsVUFEMEI7QUFBQSxNQUNkQyxRQURjLEdBQ0RGLEtBREMsQ0FDZEUsUUFEYztBQUVsQyxNQUFNQyxVQUFVLEdBQUdGLFVBQVUsR0FBR0MsUUFBaEM7QUFDQSxNQUFJQyxVQUFVLEtBQUssQ0FBbkIsRUFBc0IsT0FBTyxJQUFQOztBQUN0QixNQUFNQyxLQUFLLEdBQUdOLENBQUMsQ0FBQ08sS0FBRixDQUFRLENBQVIsRUFBV0YsVUFBVSxHQUFHLENBQXhCLENBQWQ7O0FBQ0EsU0FDQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUEwQixTQUFHLEVBQUVBLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJBLElBQTFCLENBREQsQ0FEVTtBQUFBLEdBQVYsQ0FERixDQURELENBREQ7QUFXQSxDQWhCRDs7S0FBTVIsVTtBQWlCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjIwY2M4MmM3MDlkMjBjZGMzYTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmludGVyZmFjZSBQYWdpbmF0aW9uIHt9XHJcbmNvbnN0IFBhZ2luYXRpb24gPSAocHJvcHM6IGFueSkgPT4ge1xyXG5cdGNvbnN0IHsgaXRlbXNDb3VudCwgcGFnZVNpemUgfSA9IHByb3BzO1xyXG5cdGNvbnN0IHBhZ2VzQ291bnQgPSBpdGVtc0NvdW50IC8gcGFnZVNpemU7XHJcblx0aWYgKHBhZ2VzQ291bnQgPT09IDEpIHJldHVybiBudWxsO1xyXG5cdGNvbnN0IHBhZ2VzID0gXy5yYW5nZSgxLCBwYWdlc0NvdW50ICsgMSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxOYXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcblx0XHRcdFx0e3BhZ2VzLm1hcCgocGFnZTogYW55KSA9PiAoXHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCIga2V5PXtwYWdlfT5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+e3BhZ2V9PC9hPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvTmF2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=