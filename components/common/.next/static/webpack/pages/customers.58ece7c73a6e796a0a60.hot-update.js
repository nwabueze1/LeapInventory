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
  }, "Name ", __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
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
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, customersPaginate.map(function (customer, index) {
    return __jsx("tr", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, index + 1), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, customer.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, customer.email), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, customer.address), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, customer.phone), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return onEdit(customer);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 8
      }
    }, "Edit")), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 47,
        columnNumber: 8
      }
    }, __jsx("span", {
      className: "material-icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZS50c3giXSwibmFtZXMiOlsiQ3VzdG9tZXJzVGFibGUiLCJwcm9wcyIsImN1c3RvbWVyc1BhZ2luYXRlIiwib25EZWxldGUiLCJvbkVkaXQiLCJvblNvcnQiLCJjdXJzb3IiLCJjb2xvciIsImFsaWduU2VsZiIsIm1hcCIsImN1c3RvbWVyIiwiaW5kZXgiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWlEO0FBQUE7O0FBQUEsTUFDdkRDLGlCQUR1RCxHQUNGRCxLQURFLENBQ3ZEQyxpQkFEdUQ7QUFBQSxNQUNwQ0MsUUFEb0MsR0FDRkYsS0FERSxDQUNwQ0UsUUFEb0M7QUFBQSxNQUMxQkMsTUFEMEIsR0FDRkgsS0FERSxDQUMxQkcsTUFEMEI7QUFBQSxNQUNsQkMsTUFEa0IsR0FDRkosS0FERSxDQUNsQkksTUFEa0I7QUFHL0QsU0FDQyxNQUFDLHFEQUFEO0FBQU8sYUFBUyxFQUFDLDJCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUM7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxNQUFNLENBQUMsTUFBRCxDQUFaO0FBQUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ007QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtB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QXJEdUJoQixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVycy41OGVjZTdjNzNhNmU3OTZhMGE2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyc1RhYmxlKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgeyBjdXN0b21lcnNQYWdpbmF0ZSwgb25EZWxldGUsIG9uRWRpdCwgb25Tb3J0IH06IGFueSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLXNtIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuXHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdDx0ciBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJwYS0yXCI+Uy9OPC90aD5cclxuXHRcdFx0XHRcdDx0aCBvbkNsaWNrPXsoKSA9PiBvblNvcnQoJ25hbWUnKX0+XHJcblx0XHRcdFx0XHRcdE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnZW1haWwnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGRtLXJlZFwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgYWxpZ25TZWxmOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRtYWlsXHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggb25DbGljaz17KCkgPT4gb25Tb3J0KCdhZGRyZXNzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmdwc19maXhlZDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggb25DbGljaz17KCkgPT4gb25Tb3J0KCdwaG9uZScpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jb250YWN0X3Bob25lPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0PC90aGVhZD5cclxuXHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdHtjdXN0b21lcnNQYWdpbmF0ZS5tYXAoKGN1c3RvbWVyOiBhbnksIGluZGV4OiBhbnkpID0+IChcclxuXHRcdFx0XHRcdDx0ciBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0PHRkPntpbmRleCArIDF9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5uYW1lfTwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLmVtYWlsfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIuYWRkcmVzc308L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLnBob25lfTwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkVkaXQoY3VzdG9tZXIpfT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGN1c3RvbWVyLl9pZCl9IGNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC90Ym9keT5cclxuXHRcdDwvVGFibGU+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9