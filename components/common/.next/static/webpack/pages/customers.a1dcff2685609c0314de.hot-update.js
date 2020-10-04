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
      lineNumber: 106,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "name...",
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "email...",
    value: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "address...",
    value: address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "contact...",
    value: phone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-secondary",
    onClick: handleUpdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "Update")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
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
      lineNumber: 159,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudHBhZ2UiLCJwYXRoIiwib3JkZXIiLCJzb3J0Q29sdW1ucyIsInNldFNvcnRDb2x1bW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZUNvbmZpcm0iLCJjb25maXJtIiwiYWxsQ3VzdG9tZXJzIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtIiwiX2lkIiwiY29sbGVjdGlvbiIsImRvYyIsInRvYXN0IiwiZXJyb3IiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJjdXN0b21lciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwiaGFuZGxlU29ydCIsInNvcnRDb2x1bW4iLCJoYW5kbGVVcGRhdGUiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwicHVzaCIsInNvcnRlZCIsIm9yZGVyQnkiLCJwYWdpbmF0ZWRDdXN0b21lcnMiLCJwYWdpbmF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxDQUFD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LEVBQUVnQyxnQkFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FWRCxFQXdCQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkQsQ0FERCxDQWpDRCxDQURELENBREQsQ0FERDtBQW9FQTs7R0EzSXVCNUMsUztVQVNScUIscUQ7OztLQVRRckIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuYTFkY2ZmMjY4NTYwOWMwMzE0ZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDYXJkLFxyXG5cdENvbCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybSxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0SW5wdXRHcm91cCxcclxuXHRSb3csXHJcblx0U3Bpbm5lcixcclxuXHRUYWJsZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZSc7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoNCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbc29ydENvbHVtbnMsIHNldFNvcnRDb2x1bW5dID0gdXNlU3RhdGUoeyBwYXRoOiAndGl0bGUnLCBvcmRlcjogJ2FzYycgfSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgYXBwID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XHJcblx0Y29uc3QgZmlyZXN0b3JlID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3UgYW50IHRvIGRlbGV0ZSB0aGlzIGRvY3VtZW50PycpO1xyXG5cdFx0aWYgKGRlbGV0ZUNvbmZpcm0pIHtcclxuXHRcdFx0Ly91cGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IGN1c3RvbWVycztcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWQgPSBhbGxDdXN0b21lcnMuZmlsdGVyKChtKSA9PiBtLl9pZCAhPT0gaWQpO1xyXG5cdFx0XHRzZXRDdXN0b21lcnMoZmlsdGVyZWQpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKCdjYW50IHBlcmZvcm0gdGhpcyBvcGVyYXRpb24nKTtcclxuXHRcdFx0XHRzZXRDdXN0b21lcnMoYWxsQ3VzdG9tZXJzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9jYWxsIHRoZSBkYXRhYmFzZSB0byBkZWxldGUgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkXHJcblxyXG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGN1c3RvbWVyOiBDdXN0b21lcnMpID0+IHtcclxuXHRcdHNldE5hbWUoY3VzdG9tZXIubmFtZSk7XHJcblx0XHRzZXRFbWFpbChjdXN0b21lci5lbWFpbCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTb3J0ID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3Qgc29ydENvbHVtbiA9IHsgLi4uc29ydENvbHVtbnMgfTtcclxuXHRcdGlmIChzb3J0Q29sdW1uLnBhdGggPT09IHBhdGgpIHNvcnRDb2x1bW4ub3JkZXIgPSBzb3J0Q29sdW1uLm9yZGVyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHNvcnRDb2x1bW4ucGF0aCA9IHBhdGg7XHJcblx0XHRcdHNvcnRDb2x1bW4ub3JkZXIgPSAnYXNjJztcclxuXHRcdH1cclxuXHRcdHNldFNvcnRDb2x1bW4oc29ydENvbHVtbik7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzKCkge1xyXG5cdFx0XHRjb25zdCBjaXRpZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJyk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2l0aWVzUmVmLmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcnM+ID0gW107XHJcblxyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudElkID0gZG9jLmlkO1xyXG5cdFx0XHRcdGxldCBhcHBPYmogPSB7IC4uLmRvYy5kYXRhKCksIFsnX2lkJ106IGN1cnJlbnRJZCB9O1xyXG5cdFx0XHRcdGN1c3RvbWVycy5wdXNoKGFwcE9iaiBhcyBDdXN0b21lcnMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1c3RvbWVycyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGN1c3RvbWVycyk7XHJcblx0XHR9XHJcblx0XHRnZXRDdXN0b21lcnMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHNvcnRlZCA9IF8ub3JkZXJCeShjdXN0b21lcnMsIFtzb3J0Q29sdW1ucy5wYXRoXSwgW3NvcnRDb2x1bW5zLm9yZGVyXSk7XHJcblx0Y29uc3QgcGFnaW5hdGVkQ3VzdG9tZXJzID0gcGFnaW5hdGUoc29ydGVkLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aEd1YXJkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBsLTBcIj5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBsZz17NH0gY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJwci0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1PkVkaXQgQ3VzdG9tZXJzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5hbWUuLi5cIiB2YWx1ZT17bmFtZX0+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVtYWlsLi4uXCIgdmFsdWU9e2VtYWlsfT48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QWRkcmVzczwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZGRyZXNzLi4uXCIgdmFsdWU9e2FkZHJlc3N9PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5QaG9uZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjb250YWN0Li4uXCIgdmFsdWU9e3Bob25lfT48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgbGc9ezh9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdEN1c3RvbWVyc1xyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDdXN0b21lcnNUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21lcnNQYWdpbmF0ZT17cGFnaW5hdGVkQ3VzdG9tZXJzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkVkaXQ9e2hhbmRsZUVkaXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU29ydD17aGFuZGxlU29ydH1cclxuXHRcdFx0XHRcdFx0XHRcdD48L0N1c3RvbWVyc1RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbXNDb3VudD17Y3VzdG9tZXJzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWdlU2l6ZT17cGFnZVNpemV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PFRvYXN0Q29udGFpbmVyPjwvVG9hc3RDb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvQXV0aEd1YXJkPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==