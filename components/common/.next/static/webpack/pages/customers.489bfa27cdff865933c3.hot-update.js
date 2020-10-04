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
    className: "table-sm table-responsive",
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
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("th", {
    className: "pa-2",
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
    className: "material-icons dm-red",
    style: {
      color: 'red',
      alignSelf: 'center'
    },
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
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "gps_fixed")), __jsx("th", {
    onClick: function onClick() {
      return onSort('phone');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    style: {
      color: 'grey'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "contact_phone")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, customersPaginate.map(function (customer, index) {
    return __jsx("tr", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, index + 1), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, customer.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, customer.email), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, customer.address), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, customer.phone), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return onEdit(customer);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 8
      }
    }, "Edit")), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
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
        lineNumber: 49,
        columnNumber: 8
      }
    }, __jsx("span", {
      className: "material-icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "delete"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZS50c3giXSwibmFtZXMiOlsiQ3VzdG9tZXJzVGFibGUiLCJwcm9wcyIsImN1c3RvbWVyc1BhZ2luYXRlIiwib25EZWxldGUiLCJvbkVkaXQiLCJvblNvcnQiLCJjdXJzb3IiLCJjb2xvciIsImFsaWduU2VsZiIsIm1hcCIsImN1c3RvbWVyIiwiaW5kZXgiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWlEO0FBQUE7O0FBQUEsTUFDdkRDLGlCQUR1RCxHQUNGRCxLQURFLENBQ3ZEQyxpQkFEdUQ7QUFBQSxNQUNwQ0MsUUFEb0MsR0FDRkYsS0FERSxDQUNwQ0UsUUFEb0M7QUFBQSxNQUMxQkMsTUFEMEIsR0FDRkgsS0FERSxDQUMxQkcsTUFEMEI7QUFBQSxNQUNsQkMsTUFEa0IsR0FDRkosS0FERSxDQUNsQkksTUFEa0I7QUFHL0QsU0FDQyxNQUFDLHFEQUFEO0FBQU8sYUFBUyxFQUFDLDJCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUM7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxNQUFNLENBQUMsTUFBRCxDQUFaO0FBQUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQUZELEVBS0M7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsT0FBRCxDQUFaO0FBQUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQXdDLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUUsS0FBVDtBQUFnQkMsZUFBUyxFQUFFO0FBQTNCLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQUxELEVBVUM7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNSCxNQUFNLENBQUMsU0FBRCxDQUFaO0FBQUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FWRCxFQWFDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLE9BQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFpQyxTQUFLLEVBQUU7QUFBRUUsV0FBSyxFQUFFO0FBQVQsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxDQWJELEVBa0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELENBbEJELEVBcUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBckJELENBREQsQ0FERCxFQTRCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VMLGlCQUFpQixDQUFDTyxHQUFsQixDQUFzQixVQUFDQyxRQUFELEVBQWdCQyxLQUFoQjtBQUFBLFdBQ3RCO0FBQUksU0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLEtBQUssR0FBRyxDQUFiLENBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELFFBQVEsQ0FBQ0UsSUFBZCxDQUZELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixRQUFRLENBQUNHLEtBQWQsQ0FKRCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsUUFBUSxDQUFDSSxPQUFkLENBTEQsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtKLFFBQVEsQ0FBQ0ssS0FBZCxDQU5ELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNWCxNQUFNLENBQUNNLFFBQUQsQ0FBWjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQVJELEVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNUCxRQUFRLENBQUNPLFFBQVEsQ0FBQ00sR0FBVixDQUFkO0FBQUEsT0FBakI7QUFBK0MsZUFBUyxFQUFDLFlBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFNLGVBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxDQURELENBWEQsQ0FEc0I7QUFBQSxHQUF0QixDQURGLENBNUJELENBREQ7QUFvREE7S0F2RHVCaEIsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuNDg5YmZhMjdjZGZmODY1OTMzYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lcnNUYWJsZShwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IHsgY3VzdG9tZXJzUGFnaW5hdGUsIG9uRGVsZXRlLCBvbkVkaXQsIG9uU29ydCB9OiBhbnkgPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUYWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1zbSB0YWJsZS1yZXNwb25zaXZlXCI+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicGEtMlwiPlMvTjwvdGg+XHJcblx0XHRcdFx0XHQ8dGggb25DbGljaz17KCkgPT4gb25Tb3J0KCduYW1lJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggb25DbGljaz17KCkgPT4gb25Tb3J0KCdlbWFpbCcpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZG0tcmVkXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBhbGlnblNlbGY6ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdG1haWxcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ2FkZHJlc3MnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Z3BzX2ZpeGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ3Bob25lJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScgfX0+XHJcblx0XHRcdFx0XHRcdFx0Y29udGFjdF9waG9uZVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0e2N1c3RvbWVyc1BhZ2luYXRlLm1hcCgoY3VzdG9tZXI6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG5cdFx0XHRcdFx0PHRyIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLm5hbWV9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIuZW1haWx9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5hZGRyZXNzfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIucGhvbmV9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRWRpdChjdXN0b21lcil9PkVkaXQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGUoY3VzdG9tZXIuX2lkKX0gY2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3Rib2R5PlxyXG5cdFx0PC9UYWJsZT5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=