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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      address = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      id = _useState7[0],
      setId = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      pageSize = _useState8[0],
      setPageSize = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState9[0],
      setCurrentpage = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    path: 'title',
    order: 'asc'
  }),
      sortColumns = _useState10[0],
      setSortColumn = _useState10[1];

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
      var updatedCustomers, allCustomers;
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
              setLoading(true);
              _context2.prev = 5;
              _context2.next = 8;
              return firestore.collection('customers').doc(id).update({
                name: name,
                email: email,
                address: address,
                phone: phone
              });

            case 8:
              updatedCustomers = _context2.sent;
              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success('Updated successfully');
              allCustomers = _objectSpread(_objectSpread({}, customers), {}, {
                updatedCustomers: updatedCustomers
              });
              setCustomers(allCustomers);
              setLoading(false);
              router.reload();
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](5);
              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Can't connect with database for now"));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 16]]);
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
      lineNumber: 130,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
      lineNumber: 142,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 151,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
      columnNumber: 11
    }
  }, "Update")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 190,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
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
      lineNumber: 203,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }))))));
}

_s(Customers, "mMElz47YIZX+b1xI0R1bLFLiBVI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZSIsInNldFBob25lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJpZCIsInNldElkIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudHBhZ2UiLCJwYXRoIiwib3JkZXIiLCJzb3J0Q29sdW1ucyIsInNldFNvcnRDb2x1bW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVDb25maXJtIiwiY29uZmlybSIsImFsbEN1c3RvbWVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIl9pZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b2FzdCIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwiY3VzdG9tZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZVNvcnQiLCJzb3J0Q29sdW1uIiwiaGFuZGxlVXBkYXRlIiwibGVuZ3RoIiwidXBkYXRlIiwidXBkYXRlZEN1c3RvbWVycyIsInJlbG9hZCIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsImNpdGllc1JlZiIsImdldCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImN1cnJlbnRJZCIsImFwcE9iaiIsImRhdGEiLCJwdXNoIiwic29ydGVkIiwib3JkZXJCeSIsInBhZ2luYXRlZEN1c3RvbWVycyIsInBhZ2luYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QTs7R0F2THVCL0MsUztVQVdSeUIscUQ7OztLQVhRekIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuNWM3NWEyY2E3ODkyYTE4NjE5MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDYXJkLFxyXG5cdENvbCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybSxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0SW5wdXRHcm91cCxcclxuXHRSb3csXHJcblx0U3Bpbm5lcixcclxuXHRUYWJsZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZSc7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJzIHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGFkZHJlc3M6IHN0cmluZztcclxuXHRwaG9uZTogc3RyaW5nO1xyXG5cdHR5cGU6ICdSb2FzdGVyJyB8ICdPbmUtb2ZmJztcclxuXHRfaWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVycygpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlPEFycmF5PEN1c3RvbWVycz4+KFtdKTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDEwKTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtzb3J0Q29sdW1ucywgc2V0U29ydENvbHVtbl0gPSB1c2VTdGF0ZSh7IHBhdGg6ICd0aXRsZScsIG9yZGVyOiAnYXNjJyB9KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBhcHAgPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCBmaXJlc3RvcmUgPSBhcHAuZmlyZXN0b3JlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBkZWxldGVDb25maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSBhbnQgdG8gZGVsZXRlIHRoaXMgZG9jdW1lbnQ/Jyk7XHJcblx0XHRpZiAoZGVsZXRlQ29uZmlybSkge1xyXG5cdFx0XHQvL3VwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgYWxsQ3VzdG9tZXJzID0gY3VzdG9tZXJzO1xyXG5cdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEN1c3RvbWVycy5maWx0ZXIoKG0pID0+IG0uX2lkICE9PSBpZCk7XHJcblx0XHRcdHNldEN1c3RvbWVycyhmaWx0ZXJlZCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpLmRvYyhpZCkuZGVsZXRlKCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0dG9hc3QuZXJyb3IoJ2NhbnQgcGVyZm9ybSB0aGlzIG9wZXJhdGlvbicpO1xyXG5cdFx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL2NhbGwgdGhlIGRhdGFiYXNlIHRvIGRlbGV0ZSB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWRcclxuXHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ2RlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoY3VzdG9tZXI6IEN1c3RvbWVycykgPT4ge1xyXG5cdFx0c2V0TmFtZShjdXN0b21lci5uYW1lKTtcclxuXHRcdHNldEVtYWlsKGN1c3RvbWVyLmVtYWlsKTtcclxuXHRcdHNldFBob25lKGN1c3RvbWVyLnBob25lKTtcclxuXHRcdHNldEFkZHJlc3MoY3VzdG9tZXIuYWRkcmVzcyk7XHJcblx0XHRzZXRJZChjdXN0b21lci5faWQpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEN1cnJlbnRwYWdlKHBhZ2UpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU29ydCA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IHNvcnRDb2x1bW4gPSB7IC4uLnNvcnRDb2x1bW5zIH07XHJcblx0XHRpZiAoc29ydENvbHVtbi5wYXRoID09PSBwYXRoKSBzb3J0Q29sdW1uLm9yZGVyID0gc29ydENvbHVtbi5vcmRlciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzb3J0Q29sdW1uLnBhdGggPSBwYXRoO1xyXG5cdFx0XHRzb3J0Q29sdW1uLm9yZGVyID0gJ2FzYyc7XHJcblx0XHR9XHJcblx0XHRzZXRTb3J0Q29sdW1uKHNvcnRDb2x1bW4pO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGlmIChuYW1lLmxlbmd0aCA8IDUgfHwgZW1haWwubGVuZ3RoIDwgNSkgcmV0dXJuIHRvYXN0LmVycm9yKCdOYW1lIGFuZCBFbWFpbCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA1IGNoYXJhY3RlcicpO1xyXG5cdFx0aWYgKGFkZHJlc3MubGVuZ3RoIDwgNSB8fCBwaG9uZS5sZW5ndGggPCA1KVxyXG5cdFx0XHRyZXR1cm4gdG9hc3QuZXJyb3IoJ0FkZHJlc3MgYW5kIFBob25lIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA1IGNoYXJhY3RlcnMnKTtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkQ3VzdG9tZXJzID0gYXdhaXQgZmlyZXN0b3JlXHJcblx0XHRcdFx0LmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpXHJcblx0XHRcdFx0LmRvYyhpZClcclxuXHRcdFx0XHQudXBkYXRlKHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCBhZGRyZXNzOiBhZGRyZXNzLCBwaG9uZTogcGhvbmUgfSk7XHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1VwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IHsgLi4uY3VzdG9tZXJzLCB1cGRhdGVkQ3VzdG9tZXJzIH07XHJcblx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gdG9hc3QuZXJyb3IoXCJDYW4ndCBjb25uZWN0IHdpdGggZGF0YWJhc2UgZm9yIG5vd1wiKTtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzKCkge1xyXG5cdFx0XHRjb25zdCBjaXRpZXNSZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJyk7XHJcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgY2l0aWVzUmVmLmdldCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgY3VzdG9tZXJzOiBBcnJheTxDdXN0b21lcnM+ID0gW107XHJcblxyXG5cdFx0XHRzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudElkID0gZG9jLmlkO1xyXG5cdFx0XHRcdGxldCBhcHBPYmogPSB7IC4uLmRvYy5kYXRhKCksIFsnX2lkJ106IGN1cnJlbnRJZCB9O1xyXG5cdFx0XHRcdGN1c3RvbWVycy5wdXNoKGFwcE9iaiBhcyBDdXN0b21lcnMpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1c3RvbWVycyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGN1c3RvbWVycyk7XHJcblx0XHR9XHJcblx0XHRnZXRDdXN0b21lcnMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHNvcnRlZCA9IF8ub3JkZXJCeShjdXN0b21lcnMsIFtzb3J0Q29sdW1ucy5wYXRoXSwgW3NvcnRDb2x1bW5zLm9yZGVyXSk7XHJcblx0Y29uc3QgcGFnaW5hdGVkQ3VzdG9tZXJzID0gcGFnaW5hdGUoc29ydGVkLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aEd1YXJkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBsLTBcIj5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBsZz17NH0gY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJwci0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1PkVkaXQgQ3VzdG9tZXJzPC9oNT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZS4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvRm9ybS5Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsLi4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QWRkcmVzczwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFkZHJlc3MuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FkZHJlc3N9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+UGhvbmU8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJjb250YWN0Li4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwaG9uZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZShpZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VXBkYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIGxnPXs4fSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5IZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRDdXN0b21lcnNcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jdXN0b21lcnNGb3JtJyl9IGNsYXNzTmFtZT1cImJ0bi1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q3VzdG9tZXJzVGFibGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tZXJzUGFnaW5hdGU9e3BhZ2luYXRlZEN1c3RvbWVyc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25EZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25FZGl0PXtoYW5kbGVFZGl0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNvcnQ9e2hhbmRsZVNvcnR9XHJcblx0XHRcdFx0XHRcdFx0XHQ+PC9DdXN0b21lcnNUYWJsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1zQ291bnQ9e2N1c3RvbWVycy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFnZVNpemU9e3BhZ2VTaXplfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHQ+PC9QYWdpbmF0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0F1dGhHdWFyZD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=