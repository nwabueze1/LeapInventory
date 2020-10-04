webpackHotUpdate_N_E("pages/customers",{

/***/ "./components/customersTable.tsx":
/*!***************************************!*\
  !*** ./components/customersTable.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomersTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\components\\customersTable.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CustomersTable(props) {
  var _this = this;

  var customersPaginate = props.customersPaginate,
      onDelete = props.onDelete,
      onEdit = props.onEdit,
      onSort = props.onSort;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "S/N"), __jsx("th", {
    onClick: function onClick() {
      return onSort('name');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "person")), __jsx("th", {
    onClick: function onClick() {
      return onSort('email');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "mail")), __jsx("th", {
    onClick: function onClick() {
      return onSort('address');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "address")), __jsx("th", {
    onClick: function onClick() {
      return onSort('phone');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "contact_phone")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, customersPaginate.map(function (customer, index) {
    return __jsx("tr", {
      key: customer.id,
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, index + 1), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, customer.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, customer.email), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, customer.address), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, customer.phone), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return onEdit(customer._id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }
    }, "Edit")), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return onDelete(customer._id);
      },
      className: "btn-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }
    }, "Delete")));
  })));
}
_c = CustomersTable;

var _c;

$RefreshReg$(_c, "CustomersTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZS50c3giXSwibmFtZXMiOlsiQ3VzdG9tZXJzVGFibGUiLCJwcm9wcyIsImN1c3RvbWVyc1BhZ2luYXRlIiwib25EZWxldGUiLCJvbkVkaXQiLCJvblNvcnQiLCJtYXAiLCJjdXN0b21lciIsImluZGV4IiwiaWQiLCJjdXJzb3IiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWlEO0FBQUE7O0FBQUEsTUFDdkRDLGlCQUR1RCxHQUNQRCxLQURPLENBQ3ZEQyxpQkFEdUQ7QUFBQSxNQUNwQ0MsUUFEb0MsR0FDUEYsS0FETyxDQUNwQ0UsUUFEb0M7QUFBQSxNQUMxQkMsTUFEMEIsR0FDUEgsS0FETyxDQUMxQkcsTUFEMEI7QUFBQSxNQUNsQkMsTUFEa0IsR0FDUEosS0FETyxDQUNsQkksTUFEa0I7QUFHL0QsU0FDQyxNQUFDLHFEQUFEO0FBQU8sV0FBTyxNQUFkO0FBQWUsWUFBUSxNQUF2QjtBQUF3QixTQUFLLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxFQUVDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLE1BQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsQ0FGRCxFQUtDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLE9BQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsQ0FMRCxFQVFDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLFNBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FSRCxFQVdDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLE9BQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELENBWEQsRUFjQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxDQWRELEVBaUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBakJELENBREQsQ0FERCxFQXdCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VILGlCQUFpQixDQUFDSSxHQUFsQixDQUFzQixVQUFDQyxRQUFELEVBQWdCQyxLQUFoQjtBQUFBLFdBQ3RCO0FBQUksU0FBRyxFQUFFRCxRQUFRLENBQUNFLEVBQWxCO0FBQXNCLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixLQUFLLEdBQUcsQ0FBYixDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxRQUFRLENBQUNJLElBQWQsQ0FGRCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0osUUFBUSxDQUFDSyxLQUFkLENBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtMLFFBQVEsQ0FBQ00sT0FBZCxDQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTixRQUFRLENBQUNPLEtBQWQsQ0FORCxFQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTVYsTUFBTSxDQUFDRyxRQUFRLENBQUNRLEdBQVYsQ0FBWjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQVJELEVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNWixRQUFRLENBQUNJLFFBQVEsQ0FBQ1EsR0FBVixDQUFkO0FBQUEsT0FBakI7QUFBK0MsZUFBUyxFQUFDLFlBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FYRCxDQURzQjtBQUFBLEdBQXRCLENBREYsQ0F4QkQsQ0FERDtBQWdEQTtLQW5EdUJmLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLmRiODgyNWQxN2EyYzgzMDdhZTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzVGFibGUocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCB7IGN1c3RvbWVyc1BhZ2luYXRlLCBvbkRlbGV0ZSwgb25FZGl0LCBvblNvcnQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXI+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGg+Uy9OPC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ25hbWUnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ2VtYWlsJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1haWw8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnYWRkcmVzcycpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGRyZXNzPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ3Bob25lJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNvbnRhY3RfcGhvbmU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0e2N1c3RvbWVyc1BhZ2luYXRlLm1hcCgoY3VzdG9tZXI6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG5cdFx0XHRcdFx0PHRyIGtleT17Y3VzdG9tZXIuaWR9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLm5hbWV9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIuZW1haWx9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5hZGRyZXNzfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIucGhvbmV9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRWRpdChjdXN0b21lci5faWQpfT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGN1c3RvbWVyLl9pZCl9IGNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdERlbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC90Ym9keT5cclxuXHRcdDwvVGFibGU+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9