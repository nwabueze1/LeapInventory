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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      id = _useState6[0],
      setId = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(4),
      pageSize = _useState7[0],
      setPageSize = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState8[0],
      setCurrentpage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    path: 'title',
    order: 'asc'
  }),
      sortColumns = _useState9[0],
      setSortColumn = _useState9[1];

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
    setId(customer._id);
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

  var handleUpdate = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(name.length < 5 || email.length < 5)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error('Name and Email must be greater than 5 character'));

            case 2:
              if (!(address.length < 5 || phone.length < 5)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error('Address and Phone number must be greater than 5 characters'));

            case 4:
              _context2.prev = 4;
              _context2.next = 7;
              return firestore.collection('customers').doc(id).update({
                name: name,
                email: email,
                address: address,
                phone: phone
              });

            case 7:
              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success('Updated successfully');
              router.reload();
              _context2.next = 13;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);

            case 13:
              console.log(id);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 11]]);
    }));

    return function handleUpdate(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getCustomers() {
      return _getCustomers.apply(this, arguments);
    }

    function _getCustomers() {
      _getCustomers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var citiesRef, snapshot, customers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                citiesRef = firestore.collection('customers');
                _context3.next = 3;
                return citiesRef.get();

              case 3:
                snapshot = _context3.sent;
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
                return _context3.stop();
            }
          }
        }, _callee3);
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
      lineNumber: 123,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "name...",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "email...",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "address...",
    value: address,
    onChange: function onChange(e) {
      return setAddress(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "contact...",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-secondary",
    onClick: function onClick() {
      return handleUpdate(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, "Update")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 190,
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
      lineNumber: 196,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 8
    }
  }))))));
}

_s(Customers, "hPp5muKr1IxeJ81rSkIEd7t/yRU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaWQiLCJzZXRJZCIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRwYWdlIiwicGF0aCIsIm9yZGVyIiwic29ydENvbHVtbnMiLCJzZXRTb3J0Q29sdW1uIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXBwIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlQ29uZmlybSIsImNvbmZpcm0iLCJhbGxDdXN0b21lcnMiLCJmaWx0ZXJlZCIsImZpbHRlciIsIm0iLCJfaWQiLCJjb2xsZWN0aW9uIiwiZG9jIiwidG9hc3QiLCJlcnJvciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWRpdCIsImN1c3RvbWVyIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJoYW5kbGVTb3J0Iiwic29ydENvbHVtbiIsImhhbmRsZVVwZGF0ZSIsImxlbmd0aCIsInVwZGF0ZSIsInJlbG9hZCIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsImNpdGllc1JlZiIsImdldCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImN1cnJlbnRJZCIsImFwcE9iaiIsImRhdGEiLCJwdXNoIiwic29ydGVkIiwib3JkZXJCeSIsInBhZ2luYXRlZEN1c3RvbWVycyIsInBhZ2luYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFB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QUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVUsTUFBTSxDQUFDd0MsSUFBUCxDQUFZLGdCQUFaLENBQU47QUFBQSxLQUFqQjtBQUFzRCxhQUFTLEVBQUMsVUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELENBRkQsQ0FERCxFQVVDLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1FQUFEO0FBQ0MscUJBQWlCLEVBQUVHLGtCQURwQjtBQUVDLFlBQVEsRUFBRXJDLFlBRlg7QUFHQyxVQUFNLEVBQUVlLFVBSFQ7QUFJQyxVQUFNLEVBQUVJLFVBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0MsTUFBQyxxRUFBRDtBQUNDLGNBQVUsRUFBRTdDLFNBQVMsQ0FBQ2dELE1BRHZCO0FBRUMsZUFBVyxFQUFFbEMsV0FGZDtBQUdDLFlBQVEsRUFBRUYsUUFIWDtBQUlDLGdCQUFZLEVBQUUrQixnQkFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FWRCxFQXdCQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkQsQ0FERCxDQXJERCxDQURELENBREQsQ0FERDtBQXdGQTs7R0FoTHVCN0MsUztVQVVSdUIscUQ7OztLQVZRdkIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuZGY1MmRlMWQxMWMxZDczNGZmZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDYXJkLFxyXG5cdENvbCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybSxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0SW5wdXRHcm91cCxcclxuXHRSb3csXHJcblx0U3Bpbm5lcixcclxuXHRUYWJsZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZSc7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoNCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbc29ydENvbHVtbnMsIHNldFNvcnRDb2x1bW5dID0gdXNlU3RhdGUoeyBwYXRoOiAndGl0bGUnLCBvcmRlcjogJ2FzYycgfSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgYXBwID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XHJcblx0Y29uc3QgZmlyZXN0b3JlID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3UgYW50IHRvIGRlbGV0ZSB0aGlzIGRvY3VtZW50PycpO1xyXG5cdFx0aWYgKGRlbGV0ZUNvbmZpcm0pIHtcclxuXHRcdFx0Ly91cGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IGN1c3RvbWVycztcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWQgPSBhbGxDdXN0b21lcnMuZmlsdGVyKChtKSA9PiBtLl9pZCAhPT0gaWQpO1xyXG5cdFx0XHRzZXRDdXN0b21lcnMoZmlsdGVyZWQpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKCdjYW50IHBlcmZvcm0gdGhpcyBvcGVyYXRpb24nKTtcclxuXHRcdFx0XHRzZXRDdXN0b21lcnMoYWxsQ3VzdG9tZXJzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9jYWxsIHRoZSBkYXRhYmFzZSB0byBkZWxldGUgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkXHJcblxyXG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGN1c3RvbWVyOiBDdXN0b21lcnMpID0+IHtcclxuXHRcdHNldE5hbWUoY3VzdG9tZXIubmFtZSk7XHJcblx0XHRzZXRFbWFpbChjdXN0b21lci5lbWFpbCk7XHJcblx0XHRzZXRQaG9uZShjdXN0b21lci5waG9uZSk7XHJcblx0XHRzZXRBZGRyZXNzKGN1c3RvbWVyLmFkZHJlc3MpO1xyXG5cdFx0c2V0SWQoY3VzdG9tZXIuX2lkKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRDdXJyZW50cGFnZShwYWdlKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNvcnQgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBzb3J0Q29sdW1uID0geyAuLi5zb3J0Q29sdW1ucyB9O1xyXG5cdFx0aWYgKHNvcnRDb2x1bW4ucGF0aCA9PT0gcGF0aCkgc29ydENvbHVtbi5vcmRlciA9IHNvcnRDb2x1bW4ub3JkZXIgPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0c29ydENvbHVtbi5wYXRoID0gcGF0aDtcclxuXHRcdFx0c29ydENvbHVtbi5vcmRlciA9ICdhc2MnO1xyXG5cdFx0fVxyXG5cdFx0c2V0U29ydENvbHVtbihzb3J0Q29sdW1uKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAobmFtZS5sZW5ndGggPCA1IHx8IGVtYWlsLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcignTmFtZSBhbmQgRW1haWwgbXVzdCBiZSBncmVhdGVyIHRoYW4gNSBjaGFyYWN0ZXInKTtcclxuXHRcdGlmIChhZGRyZXNzLmxlbmd0aCA8IDUgfHwgcGhvbmUubGVuZ3RoIDwgNSlcclxuXHRcdFx0cmV0dXJuIHRvYXN0LmVycm9yKCdBZGRyZXNzIGFuZCBQaG9uZSBudW1iZXIgbXVzdCBiZSBncmVhdGVyIHRoYW4gNSBjaGFyYWN0ZXJzJyk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBmaXJlc3RvcmVcclxuXHRcdFx0XHQuY29sbGVjdGlvbignY3VzdG9tZXJzJylcclxuXHRcdFx0XHQuZG9jKGlkKVxyXG5cdFx0XHRcdC51cGRhdGUoeyBuYW1lOiBuYW1lLCBlbWFpbDogZW1haWwsIGFkZHJlc3M6IGFkZHJlc3MsIHBob25lOiBwaG9uZSB9KTtcclxuXHRcdFx0dG9hc3Quc3VjY2VzcygnVXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lcnMoKSB7XHJcblx0XHRcdGNvbnN0IGNpdGllc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjaXRpZXNSZWYuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBjdXN0b21lcnM6IEFycmF5PEN1c3RvbWVycz4gPSBbXTtcclxuXHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50SWQgPSBkb2MuaWQ7XHJcblx0XHRcdFx0bGV0IGFwcE9iaiA9IHsgLi4uZG9jLmRhdGEoKSwgWydfaWQnXTogY3VycmVudElkIH07XHJcblx0XHRcdFx0Y3VzdG9tZXJzLnB1c2goYXBwT2JqIGFzIEN1c3RvbWVycyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY3VzdG9tZXJzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRDdXN0b21lcnMoY3VzdG9tZXJzKTtcclxuXHRcdH1cclxuXHRcdGdldEN1c3RvbWVycygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgc29ydGVkID0gXy5vcmRlckJ5KGN1c3RvbWVycywgW3NvcnRDb2x1bW5zLnBhdGhdLCBbc29ydENvbHVtbnMub3JkZXJdKTtcclxuXHRjb25zdCBwYWdpbmF0ZWRDdXN0b21lcnMgPSBwYWdpbmF0ZShzb3J0ZWQsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBdXRoR3VhcmQ+XHJcblx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPVwicGwtMFwiPlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sIGxnPXs0fSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cInByLTFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5IZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDU+RWRpdCBDdXN0b21lcnM8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuYW1lLi4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWwuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5BZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWRkcmVzcy4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YWRkcmVzc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5QaG9uZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImNvbnRhY3QuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bob25lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlVXBkYXRlKGlkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgbGc9ezh9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdEN1c3RvbWVyc1xyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDdXN0b21lcnNUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21lcnNQYWdpbmF0ZT17cGFnaW5hdGVkQ3VzdG9tZXJzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkVkaXQ9e2hhbmRsZUVkaXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU29ydD17aGFuZGxlU29ydH1cclxuXHRcdFx0XHRcdFx0XHRcdD48L0N1c3RvbWVyc1RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbXNDb3VudD17Y3VzdG9tZXJzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWdlU2l6ZT17cGFnZVNpemV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PFRvYXN0Q29udGFpbmVyPjwvVG9hc3RDb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvQXV0aEd1YXJkPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==