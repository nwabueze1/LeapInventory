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
/* harmony import */ var _components_utils_paginate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils/paginate */ "./components/utils/paginate.tsx");




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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState3[0],
      setCurrentpage = _useState3[1];

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
    setCurrentpage(page);
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
  var customersPaginate = Object(_components_utils_paginate__WEBPACK_IMPORTED_MODULE_10__["paginate"])(customers, currentPage, pageSize);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 8
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 10
    }
  }, "S/N"), __jsx("th", {
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
  }, "person")), __jsx("th", {
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
  }, "mail")), __jsx("th", {
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
  }, "address")), __jsx("th", {
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
  }, "contact_phone")), __jsx("th", {
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
  }, "add")), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 10
    }
  }, __jsx("span", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "delete")))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 8
    }
  }, customersPaginate.map(function (customer, index) {
    return __jsx("tr", {
      key: customer.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 10
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, index + 1), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, customer.name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, customer.email), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, customer.address), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, customer.phone), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return handleEdit(customer._id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 12
      }
    }, "Edit")), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
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
        lineNumber: 127,
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
      lineNumber: 135,
      columnNumber: 7
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 6
    }
  }))));
}

_s(Customers, "PRXX1T2Ry9K9VAs0O7eyotazY7w=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJDdXN0b21lcnMiLCJ1c2VTdGF0ZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRwYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXBwIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGVDb25maXJtIiwiY29uZmlybSIsImFsbEN1c3RvbWVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIl9pZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b2FzdCIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwicHVzaCIsImN1c3RvbWVyc1BhZ2luYXRlIiwicGFnaW5hdGUiLCJtYXAiLCJjdXN0b21lciIsImluZGV4IiwibmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsInBob25lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWWUsU0FBU0EsU0FBVCxHQUFrQztBQUFBOztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFtQixFQUFuQixDQURNO0FBQUEsTUFDekNDLFNBRHlDO0FBQUEsTUFDOUJDLFlBRDhCOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUV6Q0csUUFGeUM7QUFBQSxNQUUvQkMsV0FG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QUFBQTtBQUFBO0FBQUEsT0FBS0osUUFBUSxDQUFDSyxLQUFkLENBTkQsRUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1yQixVQUFVLENBQUNnQixRQUFRLENBQUN4QixHQUFWLENBQWhCO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBUkQsRUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1SLFlBQVksQ0FBQ2dDLFFBQVEsQ0FBQ3hCLEdBQVYsQ0FBbEI7QUFBQSxPQUFqQjtBQUFtRCxlQUFTLEVBQUMsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxDQVhELENBRHNCO0FBQUEsR0FBdEIsQ0FERixDQXhCRCxDQURELEVBK0NDLE1BQUMscUVBQUQ7QUFDQyxjQUFVLEVBQUVwQixTQUFTLENBQUNrRCxNQUR2QjtBQUVDLGVBQVcsRUFBRTlDLFdBRmQ7QUFHQyxZQUFRLEVBQUVGLFFBSFg7QUFJQyxnQkFBWSxFQUFFMkIsZ0JBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRCxDQVZELEVBZ0VDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRCxDQURELENBREQsQ0FERDtBQXdFQTs7R0EvSHVCL0IsUztVQUlSUyxxRDs7O0tBSlFULFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjhjZWE0OTNhZDE5NDU1NWUwNTA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRm9ybUNvbnRyb2wsIElucHV0R3JvdXAsIFNwaW5uZXIsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEF1dGhHdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhlbnRpZmljYXRpb24nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL3BhZ2luYXRlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDQpO1xyXG5cdGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudHBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgYXBwID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XHJcblx0Y29uc3QgZmlyZXN0b3JlID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3UgYW50IHRvIGRlbGV0ZSB0aGlzIGRvY3VtZW50PycpO1xyXG5cdFx0aWYgKGRlbGV0ZUNvbmZpcm0pIHtcclxuXHRcdFx0Ly91cGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IGN1c3RvbWVycztcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWQgPSBhbGxDdXN0b21lcnMuZmlsdGVyKChtKSA9PiBtLl9pZCAhPT0gaWQpO1xyXG5cdFx0XHRzZXRDdXN0b21lcnMoZmlsdGVyZWQpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKCdjYW50IHBlcmZvcm0gdGhpcyBvcGVyYXRpb24nKTtcclxuXHRcdFx0XHRzZXRDdXN0b21lcnMoYWxsQ3VzdG9tZXJzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9jYWxsIHRoZSBkYXRhYmFzZSB0byBkZWxldGUgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkXHJcblxyXG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdC8vIHJvdXRlci5wdXNoKGBjdXN0b21lcnNGb3JtLyR7aWR9YCk7XHJcblx0XHQvL2ZpbmQgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGdpdmUgaWQgYW5kIGVkaXRcclxuXHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRDdXJyZW50cGFnZShwYWdlKTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lcnMoKSB7XHJcblx0XHRcdGNvbnN0IGNpdGllc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjaXRpZXNSZWYuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBjdXN0b21lcnM6IEFycmF5PEN1c3RvbWVycz4gPSBbXTtcclxuXHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50SWQgPSBkb2MuaWQ7XHJcblx0XHRcdFx0bGV0IGFwcE9iaiA9IHsgLi4uZG9jLmRhdGEoKSwgWydfaWQnXTogY3VycmVudElkIH07XHJcblx0XHRcdFx0Y3VzdG9tZXJzLnB1c2goYXBwT2JqIGFzIEN1c3RvbWVycyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY3VzdG9tZXJzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRDdXN0b21lcnMoY3VzdG9tZXJzKTtcclxuXHRcdH1cclxuXHRcdGdldEN1c3RvbWVycygpO1xyXG5cdH0sIFtdKTtcclxuXHRjb25zdCBjdXN0b21lcnNQYWdpbmF0ZSA9IHBhZ2luYXRlKGN1c3RvbWVycywgY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEF1dGhHdWFyZD5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0Q3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxyXG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlMvTjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWFpbDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkcmVzczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y29udGFjdF9waG9uZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2N1c3RvbWVyc1BhZ2luYXRlLm1hcCgoY3VzdG9tZXIsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2N1c3RvbWVyLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57Y3VzdG9tZXIubmFtZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2N1c3RvbWVyLmVtYWlsfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5hZGRyZXNzfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntjdXN0b21lci5waG9uZX08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoY3VzdG9tZXIuX2lkKX0+RWRpdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoY3VzdG9tZXIuX2lkKX0gY2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREZWxldGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zQ291bnQ9e2N1c3RvbWVycy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0F1dGhHdWFyZD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=