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
      pageSize = props.pageSize,
      onPageChange = props.onPageChange,
      currentPage = props.currentPage;
  console.log(currentPage);
  var pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  var pages = _.range(1, pagesCount + 1);

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("ul", {
    className: "pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, pages.map(function (page) {
    return __jsx("li", {
      className: "page-item ",
      key: page,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 6
      }
    }, __jsx("a", {
      className: "page-link",
      onClick: function onClick() {
        return onPageChange(page);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiXyIsIlBhZ2luYXRpb24iLCJwcm9wcyIsIml0ZW1zQ291bnQiLCJwYWdlU2l6ZSIsIm9uUGFnZUNoYW5nZSIsImN1cnJlbnRQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VzQ291bnQiLCJNYXRoIiwiY2VpbCIsInBhZ2VzIiwicmFuZ2UiLCJtYXAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7Ozs7QUFDQSxJQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsK0NBQUQsQ0FBakI7O0FBQ0E7O0FBR0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBLE1BQzFCQyxVQUQwQixHQUMwQkQsS0FEMUIsQ0FDMUJDLFVBRDBCO0FBQUEsTUFDZEMsUUFEYyxHQUMwQkYsS0FEMUIsQ0FDZEUsUUFEYztBQUFBLE1BQ0pDLFlBREksR0FDMEJILEtBRDFCLENBQ0pHLFlBREk7QUFBQSxNQUNVQyxXQURWLEdBQzBCSixLQUQxQixDQUNVSSxXQURWO0FBRWxDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLE1BQU1HLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVSLFVBQVUsR0FBR0MsUUFBdkIsQ0FBbkI7QUFDQSxNQUFJSyxVQUFVLEtBQUssQ0FBbkIsRUFBc0IsT0FBTyxJQUFQOztBQUN0QixNQUFNRyxLQUFLLEdBQUdaLENBQUMsQ0FBQ2EsS0FBRixDQUFRLENBQVIsRUFBV0osVUFBVSxHQUFHLENBQXhCLENBQWQ7O0FBQ0EsU0FDQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUcsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1Y7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUEyQixTQUFHLEVBQUVBLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQXlCLGFBQU8sRUFBRTtBQUFBLGVBQU1WLFlBQVksQ0FBQ1UsSUFBRCxDQUFsQjtBQUFBLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUEsSUFERixDQURELENBRFU7QUFBQSxHQUFWLENBREYsQ0FERCxDQUREO0FBYUEsQ0FuQkQ7O0tBQU1kLFU7QUFvQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVycy5kNWFiMTE3ZGI1Nzg1ODcxYmExMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbnRlcmZhY2UgUGFnaW5hdGlvbiB7fVxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHByb3BzOiBhbnkpID0+IHtcclxuXHRjb25zdCB7IGl0ZW1zQ291bnQsIHBhZ2VTaXplLCBvblBhZ2VDaGFuZ2UsIGN1cnJlbnRQYWdlIH0gPSBwcm9wcztcclxuXHRjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XHJcblx0Y29uc3QgcGFnZXNDb3VudCA9IE1hdGguY2VpbChpdGVtc0NvdW50IC8gcGFnZVNpemUpO1xyXG5cdGlmIChwYWdlc0NvdW50ID09PSAxKSByZXR1cm4gbnVsbDtcclxuXHRjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCArIDEpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TmF2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG5cdFx0XHRcdHtwYWdlcy5tYXAoKHBhZ2U6IGFueSkgPT4gKFxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBcIiBrZXk9e3BhZ2V9PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UocGFnZSl9PlxyXG5cdFx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9OYXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==