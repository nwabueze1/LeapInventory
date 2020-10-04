webpackHotUpdate_N_E("pages/customers",{

/***/ "./pages/customers.tsx":
/*!*****************************!*\
  !*** ./pages/customers.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customers; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_useFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useFirebase */ "./components/useFirebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Authentification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Authentification */ "./components/Authentification.tsx");
/* harmony import */ var _components_common_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/pagination */ "./components/common/pagination.tsx");




var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\customers.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Customers() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      customers = _useState[0],
      setCustomers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(4),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var app = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_useFirebase__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var firestore = app.firestore();

  var handleDelete = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
      var deleteConfirm, allCustomers, filtered;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              deleteConfirm = confirm('Are you sure you ant to delete this document?');

              if (!deleteConfirm) {
                _context.next = 16;
                break;
              }

              //update the state
              allCustomers = customers;
              filtered = allCustomers.filter(function (m) {
                return m._id !== id;
              });
              setCustomers(filtered);
              _context.prev = 5;
              _context.next = 8;
              return firestore.collection('customers').doc(id)["delete"]();

            case 8:
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](5);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error('cant perform this operation');
              setCustomers(allCustomers);

            case 14:
              //call the database to delete the customer with the id
              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success('deleted successfully');
              console.log(id);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 10]]);
    }));

    return function handleDelete(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleEdit = function handleEdit(id) {
    // router.push(`customersForm/${id}`);
    //find the customer with the give id and edit
    console.log(id);
  };

  var handlePageChange = function handlePageChange(page) {
    console.log(page);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getCustomers() {
      return _getCustomers.apply(this, arguments);
    }

    function _getCustomers() {
      _getCustomers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var citiesRef, snapshot, customers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                citiesRef = firestore.collection('customers');
                _context2.next = 3;
                return citiesRef.get();

              case 3:
                snapshot = _context2.sent;
                customers = [];
                snapshot.forEach(function (doc) {
                  var currentId = doc.id;

                  var appObj = _objectSpread(_objectSpread({}, doc.data()), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, '_id', currentId));

                  customers.push(appObj);
                  console.log(customers);
                });
                setCustomers(customers);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _getCustomers.apply(this, arguments);
    }

    getCustomers();
  }, []);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return router.push('/customersForm');
    },
    className: "btn-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 10
    }
  }, "S/N"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "person")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "mail")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "address")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "contact_phone")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 8
    }
  }, customers.map(function (customer, index) {
    return __jsx("tr", {
      key: customer.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 10
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }, index + 1), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, customer.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, customer.email), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, customer.address), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, customer.phone), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return handleEdit(customer._id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 12
      }
    }, "Edit")), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return handleDelete(customer._id);
      },
      className: "btn-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 12
      }
    }, "Delete")));
  }))), __jsx(_components_common_pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    itemsCount: customers.length,
    currentPage: currentPage,
    pageSize: pageSize,
    onPageChange: handlePageChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }))));
}

_s(Customers, "bGXEi2rWuKpJp8NVA4lYs9snL54=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Customers;

var _c;

$RefreshReg$(_c, "Customers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJDdXN0b21lcnMiLCJ1c2VTdGF0ZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZUNvbmZpcm0iLCJjb25maXJtIiwiYWxsQ3VzdG9tZXJzIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtIiwiX2lkIiwiY29sbGVjdGlvbiIsImRvYyIsInRvYXN0IiwiZXJyb3IiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsImNpdGllc1JlZiIsImdldCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImN1cnJlbnRJZCIsImFwcE9iaiIsImRhdGEiLCJwdXNoIiwibWFwIiwiY3VzdG9tZXIiLCJpbmRleCIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJwaG9uZSIsImxlbmd0aCIsImN1cnJlbnRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWWUsU0FBU0EsU0FBVCxHQUFrQztBQUFBOztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFtQixFQUFuQixDQURNO0FBQUEsTUFDekNDLFNBRHlDO0FBQUEsTUFDOUJDLFlBRDhCOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUV6Q0csUUFGeUM7QUFBQSxNQUUvQkMsV0FGK0I7O0FBR2hELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxHQUFH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QTtBQUFBLGNBREQsQ0FSRCxFQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTVIsWUFBWSxDQUFDOEIsUUFBUSxDQUFDdEIsR0FBVixDQUFsQjtBQUFBLE9BQWpCO0FBQW1ELGVBQVMsRUFBQyxZQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELENBWEQsQ0FEYztBQUFBLEdBQWQsQ0FERixDQXhCRCxDQURELEVBK0NDLE1BQUMscUVBQUQ7QUFDQyxjQUFVLEVBQUVsQixTQUFTLENBQUM4QyxNQUR2QjtBQUVDLGVBQVcsRUFBRUMsV0FGZDtBQUdDLFlBQVEsRUFBRTdDLFFBSFg7QUFJQyxnQkFBWSxFQUFFeUIsZ0JBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRCxDQVZELEVBZ0VDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRCxDQURELENBREQsQ0FERDtBQXdFQTs7R0E3SHVCN0IsUztVQUdSTyxxRDs7O0tBSFFQLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjFhYWUzOWY3MjUyNGNmNzQwNTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRm9ybUNvbnRyb2wsIElucHV0R3JvdXAsIFNwaW5uZXIsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEF1dGhHdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhlbnRpZmljYXRpb24nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDQpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xyXG5cdGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IGFudCB0byBkZWxldGUgdGhpcyBkb2N1bWVudD8nKTtcclxuXHRcdGlmIChkZWxldGVDb25maXJtKSB7XHJcblx0XHRcdC8vdXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBhbGxDdXN0b21lcnMgPSBjdXN0b21lcnM7XHJcblx0XHRcdGNvbnN0IGZpbHRlcmVkID0gYWxsQ3VzdG9tZXJzLmZpbHRlcigobSkgPT4gbS5faWQgIT09IGlkKTtcclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGZpbHRlcmVkKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJykuZG9jKGlkKS5kZWxldGUoKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHR0b2FzdC5lcnJvcignY2FudCBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uJyk7XHJcblx0XHRcdFx0c2V0Q3VzdG9tZXJzKGFsbEN1c3RvbWVycyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vY2FsbCB0aGUgZGF0YWJhc2UgdG8gZGVsZXRlIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZFxyXG5cclxuXHRcdFx0dG9hc3Quc3VjY2VzcygnZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHQvLyByb3V0ZXIucHVzaChgY3VzdG9tZXJzRm9ybS8ke2lkfWApO1xyXG5cdFx0Ly9maW5kIHRoZSBjdXN0b21lciB3aXRoIHRoZSBnaXZlIGlkIGFuZCBlZGl0XHJcblx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocGFnZSk7XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzKCkge1xyXG5cdFx0XHRjb25zdCBjaXRpZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJyk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2l0aWVzUmVmLmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcnM+ID0gW107XHJcblxyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudElkID0gZG9jLmlkO1xyXG5cdFx0XHRcdGxldCBhcHBPYmogPSB7IC4uLmRvYy5kYXRhKCksIFsnX2lkJ106IGN1cnJlbnRJZCB9O1xyXG5cdFx0XHRcdGN1c3RvbWVycy5wdXNoKGFwcE9iaiBhcyBDdXN0b21lcnMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1c3RvbWVycyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGN1c3RvbWVycyk7XHJcblx0XHR9XHJcblx0XHRnZXRDdXN0b21lcnMoKTtcclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBdXRoR3VhcmQ+XHJcblx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHQ8Q2FyZC5IZWFkZXI+XHJcblx0XHRcdFx0XHRcdEN1c3RvbWVyc1xyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jdXN0b21lcnNGb3JtJyl9IGNsYXNzTmFtZT1cImJ0bi1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRBZGRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cclxuXHJcblx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHQ8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3Zlcj5cclxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5TL048L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1haWw8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZHJlc3M8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNvbnRhY3RfcGhvbmU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHtjdXN0b21lcnMubWFwKChjdXN0b21lciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17Y3VzdG9tZXIuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5uYW1lfTwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIuZW1haWx9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLmFkZHJlc3N9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLnBob25lfTwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChjdXN0b21lci5faWQpfT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShjdXN0b21lci5faWQpfSBjbGFzc05hbWU9XCJidG4tZGFuZ2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERlbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0aXRlbXNDb3VudD17Y3VzdG9tZXJzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0cGFnZVNpemU9e3BhZ2VTaXplfVxyXG5cdFx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0PjwvUGFnaW5hdGlvbj5cclxuXHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0PFRvYXN0Q29udGFpbmVyPjwvVG9hc3RDb250YWluZXI+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvQXV0aEd1YXJkPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==