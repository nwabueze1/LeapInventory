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



var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

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
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx("ul", {
    className: "pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, pages.map(function (page) {
    return __jsx("li", {
      className: page === currentPage ? 'page-item active' : 'page-item',
      key: page,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
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
        lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiXyIsIlByb3BUeXBlcyIsIlBhZ2luYXRpb24iLCJwcm9wcyIsIml0ZW1zQ291bnQiLCJwYWdlU2l6ZSIsIm9uUGFnZUNoYW5nZSIsImN1cnJlbnRQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VzQ291bnQiLCJNYXRoIiwiY2VpbCIsInBhZ2VzIiwicmFuZ2UiLCJtYXAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7Ozs7QUFDQSxJQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsK0NBQUQsQ0FBakI7O0FBQ0E7O0FBQ0EsSUFBTUUsU0FBUyxHQUFHRixtQkFBTyxDQUFDLHNEQUFELENBQXpCOztBQVVBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBZ0I7QUFBQSxNQUMxQkMsVUFEMEIsR0FDMEJELEtBRDFCLENBQzFCQyxVQUQwQjtBQUFBLE1BQ2RDLFFBRGMsR0FDMEJGLEtBRDFCLENBQ2RFLFFBRGM7QUFBQSxNQUNKQyxZQURJLEdBQzBCSCxLQUQxQixDQUNKRyxZQURJO0FBQUEsTUFDVUMsV0FEVixHQUMwQkosS0FEMUIsQ0FDVUksV0FEVjtBQUVsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFDQSxNQUFNRyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVUixVQUFVLEdBQUdDLFFBQXZCLENBQW5CO0FBQ0EsTUFBSUssVUFBVSxLQUFLLENBQW5CLEVBQXNCLE9BQU8sSUFBUDs7QUFDdEIsTUFBTUcsS0FBSyxHQUFHYixDQUFDLENBQUNjLEtBQUYsQ0FBUSxDQUFSLEVBQVdKLFVBQVUsR0FBRyxDQUF4QixDQUFkOztBQUNBLFNBQ0MsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VHLEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNWO0FBQUksZUFBUyxFQUFFQSxJQUFJLEtBQUtULFdBQVQsR0FBdUIsa0JBQXZCLEdBQTRDLFdBQTNEO0FBQXdFLFNBQUcsRUFBRVMsSUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBeUIsYUFBTyxFQUFFO0FBQUEsZUFBTVYsWUFBWSxDQUFDVSxJQUFELENBQWxCO0FBQUEsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQSxJQURGLENBREQsQ0FEVTtBQUFBLEdBQVYsQ0FERixDQURELENBREQ7QUFhQSxDQW5CRDs7S0FBTWQsVTtBQXFCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjYwNzU4ZDYyNjNlOGVhNTc0YjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2luYXRpb24ge1xyXG5cdHByb3BzOiB7XHJcblx0XHRpdGVtc0NvdW50OiBudW1iZXI7XHJcblx0XHRwYWdlU2l6ZTogbnVtYmVyO1xyXG5cdFx0b25QYWdlQ2hhbmdlOiBhbnk7XHJcblx0XHRjdXJyZW50UGFnZTogYW55O1xyXG5cdH07XHJcbn1cclxuY29uc3QgUGFnaW5hdGlvbiA9IChwcm9wczogYW55KSA9PiB7XHJcblx0Y29uc3QgeyBpdGVtc0NvdW50LCBwYWdlU2l6ZSwgb25QYWdlQ2hhbmdlLCBjdXJyZW50UGFnZSB9ID0gcHJvcHM7XHJcblx0Y29uc29sZS5sb2coY3VycmVudFBhZ2UpO1xyXG5cdGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwoaXRlbXNDb3VudCAvIHBhZ2VTaXplKTtcclxuXHRpZiAocGFnZXNDb3VudCA9PT0gMSkgcmV0dXJuIG51bGw7XHJcblx0Y29uc3QgcGFnZXMgPSBfLnJhbmdlKDEsIHBhZ2VzQ291bnQgKyAxKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE5hdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuXHRcdFx0XHR7cGFnZXMubWFwKChwYWdlOiBhbnkpID0+IChcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3BhZ2UgPT09IGN1cnJlbnRQYWdlID8gJ3BhZ2UtaXRlbSBhY3RpdmUnIDogJ3BhZ2UtaXRlbSd9IGtleT17cGFnZX0+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX0+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2V9XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L05hdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==