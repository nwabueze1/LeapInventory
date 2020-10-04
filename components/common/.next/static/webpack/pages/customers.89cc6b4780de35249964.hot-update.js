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
    classname: "pa-2",
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
    className: "material-icons md-red",
    style: {
      color: 'revert',
      transition: 'all 4s'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZS50c3giXSwibmFtZXMiOlsiQ3VzdG9tZXJzVGFibGUiLCJwcm9wcyIsImN1c3RvbWVyc1BhZ2luYXRlIiwib25EZWxldGUiLCJvbkVkaXQiLCJvblNvcnQiLCJjdXJzb3IiLCJjb2xvciIsInRyYW5zaXRpb24iLCJtYXAiLCJjdXN0b21lciIsImluZGV4IiwibmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsInBob25lIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFpRDtBQUFBOztBQUFBLE1BQ3ZEQyxpQkFEdUQsR0FDRkQsS0FERSxDQUN2REMsaUJBRHVEO0FBQUEsTUFDcENDLFFBRG9DLEdBQ0ZGLEtBREUsQ0FDcENFLFFBRG9DO0FBQUEsTUFDMUJDLE1BRDBCLEdBQ0ZILEtBREUsQ0FDMUJHLE1BRDBCO0FBQUEsTUFDbEJDLE1BRGtCLEdBQ0ZKLEtBREUsQ0FDbEJJLE1BRGtCO0FBRy9ELFNBQ0MsTUFBQyxxREFBRDtBQUFPLGFBQVMsRUFBQywyQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxFQUVDO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUQsTUFBTSxDQUFDLE1BQUQsQ0FBWjtBQUFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7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O0tBckR1QmhCLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjg5Y2M2YjQ3ODBkZTM1MjQ5OTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzVGFibGUocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCB7IGN1c3RvbWVyc1BhZ2luYXRlLCBvbkRlbGV0ZSwgb25FZGl0LCBvblNvcnQgfTogYW55ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VGFibGUgY2xhc3NOYW1lPVwidGFibGUtc20gdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0PHRyIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0PHRoIGNsYXNzbmFtZT1cInBhLTJcIj5TL048L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnbmFtZScpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnZW1haWwnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLXJlZFwiIHN0eWxlPXt7IGNvbG9yOiAncmV2ZXJ0JywgdHJhbnNpdGlvbjogJ2FsbCA0cycgfX0+XHJcblx0XHRcdFx0XHRcdFx0bWFpbFxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgnYWRkcmVzcycpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ncHNfZml4ZWQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PHRoIG9uQ2xpY2s9eygpID0+IG9uU29ydCgncGhvbmUnKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y29udGFjdF9waG9uZTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHR7Y3VzdG9tZXJzUGFnaW5hdGUubWFwKChjdXN0b21lcjogYW55LCBpbmRleDogYW55KSA9PiAoXHJcblx0XHRcdFx0XHQ8dHIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIubmFtZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5lbWFpbH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLmFkZHJlc3N9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5waG9uZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25FZGl0KGN1c3RvbWVyKX0+RWRpdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShjdXN0b21lci5faWQpfSBjbGFzc05hbWU9XCJidG4tZGFuZ2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHQ8L1RhYmxlPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==