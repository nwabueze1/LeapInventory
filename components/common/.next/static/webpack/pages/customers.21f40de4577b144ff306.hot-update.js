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
/* harmony import */ var _components_customersTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/customersTable */ "./components/customersTable.tsx");




var _jsxFileName = "C:\\Users\\USER\\Desktop\\typescript\\my-app\\pages\\customers.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

function Customers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      customers = _useState[0],
      setCustomers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      address = _useState5[0],
      setAddress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(4),
      pageSize = _useState6[0],
      setPageSize = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState7[0],
      setCurrentpage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    path: 'title',
    order: 'asc'
  }),
      sortColumns = _useState8[0],
      setSortColumn = _useState8[1];

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

  var handleEdit = function handleEdit(customer) {
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
  };

  var handlePageChange = function handlePageChange(page) {
    setCurrentpage(page);
  };

  var handleSort = function handleSort(path) {
    var sortColumn = _objectSpread({}, sortColumns);

    if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    setSortColumn(sortColumn);
  };

  var handleUpdate = function handleUpdate() {};

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

  var sorted = _.orderBy(customers, [sortColumns.path], [sortColumns.order]);

  var paginatedCustomers = Object(_components_utils_paginate__WEBPACK_IMPORTED_MODULE_10__["paginate"])(sorted, currentPage, pageSize);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "name...",
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "email...",
    value: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "address...",
    value: address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "contact...",
    value: phone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-secondary",
    onClick: handleUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "Update")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return router.push('/customersForm');
    },
    className: "btn-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 8
    }
  }, __jsx(_components_customersTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    customersPaginate: paginatedCustomers,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onSort: handleSort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }), __jsx(_components_common_pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    itemsCount: customers.length,
    currentPage: currentPage,
    pageSize: pageSize,
    onPageChange: handlePageChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 8
    }
  }))))));
}

_s(Customers, "r+muwWu/wh9iT4yLZT+PazG7zmQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudHBhZ2UiLCJwYXRoIiwib3JkZXIiLCJzb3J0Q29sdW1ucyIsInNldFNvcnRDb2x1bW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZUNvbmZpcm0iLCJjb25maXJtIiwiYWxsQ3VzdG9tZXJzIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtIiwiX2lkIiwiY29sbGVjdGlvbiIsImRvYyIsInRvYXN0IiwiZXJyb3IiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJjdXN0b21lciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwiaGFuZGxlU29ydCIsInNvcnRDb2x1bW4iLCJoYW5kbGVVcGRhdGUiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwicHVzaCIsInNvcnRlZCIsIm9yZGVyQnkiLCJwYWdpbmF0ZWRDdXN0b21lcnMiLCJwYWdpbmF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxDQUFD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VSxFQUFFNUMsU0FBUyxDQUFDNkQsTUFEdkI7QUFFQyxlQUFXLEVBQUVqRCxXQUZkO0FBR0MsWUFBUSxFQUFFRixRQUhYO0FBSUMsZ0JBQVksRUFBRWdDLGdCQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRCxDQVZELEVBd0JDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRCxDQURELENBakNELENBREQsQ0FERCxDQUREO0FBb0VBOztHQTdJdUI1QyxTO1VBU1JxQixxRDs7O0tBVFFyQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVycy4yMWY0MGRlNDU3N2IxNDRmZjMwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENhcmQsXHJcblx0Q29sLFxyXG5cdENvbnRhaW5lcixcclxuXHRGb3JtLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1Hcm91cCxcclxuXHRJbnB1dEdyb3VwLFxyXG5cdFJvdyxcclxuXHRTcGlubmVyLFxyXG5cdFRhYmxlLFxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBBdXRoR3VhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoZW50aWZpY2F0aW9uJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9wYWdpbmF0ZSc7XHJcbmltcG9ydCBDdXN0b21lcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL2N1c3RvbWVyc1RhYmxlJztcclxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lcnMge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0YWRkcmVzczogc3RyaW5nO1xyXG5cdHBob25lOiBzdHJpbmc7XHJcblx0dHlwZTogJ1JvYXN0ZXInIHwgJ09uZS1vZmYnO1xyXG5cdF9pZD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGU8QXJyYXk8Q3VzdG9tZXJzPj4oW10pO1xyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSg0KTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtzb3J0Q29sdW1ucywgc2V0U29ydENvbHVtbl0gPSB1c2VTdGF0ZSh7IHBhdGg6ICd0aXRsZScsIG9yZGVyOiAnYXNjJyB9KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBhcHAgPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCBmaXJlc3RvcmUgPSBhcHAuZmlyZXN0b3JlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBkZWxldGVDb25maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSBhbnQgdG8gZGVsZXRlIHRoaXMgZG9jdW1lbnQ/Jyk7XHJcblx0XHRpZiAoZGVsZXRlQ29uZmlybSkge1xyXG5cdFx0XHQvL3VwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgYWxsQ3VzdG9tZXJzID0gY3VzdG9tZXJzO1xyXG5cdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEN1c3RvbWVycy5maWx0ZXIoKG0pID0+IG0uX2lkICE9PSBpZCk7XHJcblx0XHRcdHNldEN1c3RvbWVycyhmaWx0ZXJlZCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpLmRvYyhpZCkuZGVsZXRlKCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0dG9hc3QuZXJyb3IoJ2NhbnQgcGVyZm9ybSB0aGlzIG9wZXJhdGlvbicpO1xyXG5cdFx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL2NhbGwgdGhlIGRhdGFiYXNlIHRvIGRlbGV0ZSB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWRcclxuXHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ2RlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoY3VzdG9tZXI6IEN1c3RvbWVycykgPT4ge1xyXG5cdFx0c2V0TmFtZShjdXN0b21lci5uYW1lKTtcclxuXHRcdHNldEVtYWlsKGN1c3RvbWVyLmVtYWlsKTtcclxuXHRcdHNldFBob25lKGN1c3RvbWVyLnBob25lKTtcclxuXHRcdHNldEFkZHJlc3MoY3VzdG9tZXIuYWRkcmVzcyk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTb3J0ID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3Qgc29ydENvbHVtbiA9IHsgLi4uc29ydENvbHVtbnMgfTtcclxuXHRcdGlmIChzb3J0Q29sdW1uLnBhdGggPT09IHBhdGgpIHNvcnRDb2x1bW4ub3JkZXIgPSBzb3J0Q29sdW1uLm9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHNvcnRDb2x1bW4ucGF0aCA9IHBhdGg7XHJcblx0XHRcdHNvcnRDb2x1bW4ub3JkZXIgPSAnYXNjJztcclxuXHRcdH1cclxuXHRcdHNldFNvcnRDb2x1bW4oc29ydENvbHVtbik7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzKCkge1xyXG5cdFx0XHRjb25zdCBjaXRpZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJyk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2l0aWVzUmVmLmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcnM+ID0gW107XHJcblxyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudElkID0gZG9jLmlkO1xyXG5cdFx0XHRcdGxldCBhcHBPYmogPSB7IC4uLmRvYy5kYXRhKCksIFsnX2lkJ106IGN1cnJlbnRJZCB9O1xyXG5cdFx0XHRcdGN1c3RvbWVycy5wdXNoKGFwcE9iaiBhcyBDdXN0b21lcnMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1c3RvbWVycyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGN1c3RvbWVycyk7XHJcblx0XHR9XHJcblx0XHRnZXRDdXN0b21lcnMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHNvcnRlZCA9IF8ub3JkZXJCeShjdXN0b21lcnMsIFtzb3J0Q29sdW1ucy5wYXRoXSwgW3NvcnRDb2x1bW5zLm9yZGVyXSk7XHJcblx0Y29uc3QgcGFnaW5hdGVkQ3VzdG9tZXJzID0gcGFnaW5hdGUoc29ydGVkLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aEd1YXJkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBsLTBcIj5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBsZz17NH0gY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJwci0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1PkVkaXQgQ3VzdG9tZXJzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5hbWUuLi5cIiB2YWx1ZT17bmFtZX0+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsLi4uXCIgdmFsdWU9e2VtYWlsfT48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QWRkcmVzczwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZGRyZXNzLi4uXCIgdmFsdWU9e2FkZHJlc3N9PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5QaG9uZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjb250YWN0Li4uXCIgdmFsdWU9e3Bob25lfT48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgbGc9ezh9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdEN1c3RvbWVyc1xyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDdXN0b21lcnNUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21lcnNQYWdpbmF0ZT17cGFnaW5hdGVkQ3VzdG9tZXJzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkVkaXQ9e2hhbmRsZUVkaXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU29ydD17aGFuZGxlU29ydH1cclxuXHRcdFx0XHRcdFx0XHRcdD48L0N1c3RvbWVyc1RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbXNDb3VudD17Y3VzdG9tZXJzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWdlU2l6ZT17cGFnZVNpemV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PFRvYXN0Q29udGFpbmVyPjwvVG9hc3RDb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvQXV0aEd1YXJkPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==