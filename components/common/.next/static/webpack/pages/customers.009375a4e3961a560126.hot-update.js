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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(4),
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
              react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success('Updated successfully');
              setLoading(false);
              router.reload();
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](5);
              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Can't connect with database for now"));

            case 16:
              console.log(id);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 13]]);
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
      lineNumber: 128,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    className: "float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "pr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 8
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "Edit Customers")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 158,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Update")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 8
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 10
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 195,
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
      lineNumber: 201,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 8
    }
  }))))));
}

_s(Customers, "fZlLeQZW8VUZXsqB/qaHX/R7Qqg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZSIsInNldFBob25lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJpZCIsInNldElkIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudHBhZ2UiLCJwYXRoIiwib3JkZXIiLCJzb3J0Q29sdW1ucyIsInNldFNvcnRDb2x1bW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJ1c2VDb250ZXh0IiwidXNlRmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVDb25maXJtIiwiY29uZmlybSIsImFsbEN1c3RvbWVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIl9pZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b2FzdCIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwiY3VzdG9tZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZVNvcnQiLCJzb3J0Q29sdW1uIiwiaGFuZGxlVXBkYXRlIiwibGVuZ3RoIiwidXBkYXRlIiwicmVsb2FkIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tZXJzIiwiY2l0aWVzUmVmIiwiZ2V0Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiY3VycmVudElkIiwiYXBwT2JqIiwiZGF0YSIsInB1c2giLCJzb3J0ZWQiLCJvcmRlckJ5IiwicGFnaW5hdGVkQ3VzdG9tZXJzIiwicGFnaW5hdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YTU2MDEyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENhcmQsXHJcblx0Q29sLFxyXG5cdENvbnRhaW5lcixcclxuXHRGb3JtLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1Hcm91cCxcclxuXHRJbnB1dEdyb3VwLFxyXG5cdFJvdyxcclxuXHRTcGlubmVyLFxyXG5cdFRhYmxlLFxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB1c2VGaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBBdXRoR3VhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoZW50aWZpY2F0aW9uJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9wYWdpbmF0ZSc7XHJcbmltcG9ydCBDdXN0b21lcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL2N1c3RvbWVyc1RhYmxlJztcclxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lcnMge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0YWRkcmVzczogc3RyaW5nO1xyXG5cdHBob25lOiBzdHJpbmc7XHJcblx0dHlwZTogJ1JvYXN0ZXInIHwgJ09uZS1vZmYnO1xyXG5cdF9pZD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGU8QXJyYXk8Q3VzdG9tZXJzPj4oW10pO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoNCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbc29ydENvbHVtbnMsIHNldFNvcnRDb2x1bW5dID0gdXNlU3RhdGUoeyBwYXRoOiAndGl0bGUnLCBvcmRlcjogJ2FzYycgfSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgYXBwID0gdXNlQ29udGV4dCh1c2VGaXJlYmFzZSk7XHJcblx0Y29uc3QgZmlyZXN0b3JlID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3UgYW50IHRvIGRlbGV0ZSB0aGlzIGRvY3VtZW50PycpO1xyXG5cdFx0aWYgKGRlbGV0ZUNvbmZpcm0pIHtcclxuXHRcdFx0Ly91cGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGFsbEN1c3RvbWVycyA9IGN1c3RvbWVycztcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWQgPSBhbGxDdXN0b21lcnMuZmlsdGVyKChtKSA9PiBtLl9pZCAhPT0gaWQpO1xyXG5cdFx0XHRzZXRDdXN0b21lcnMoZmlsdGVyZWQpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKCdjYW50IHBlcmZvcm0gdGhpcyBvcGVyYXRpb24nKTtcclxuXHRcdFx0XHRzZXRDdXN0b21lcnMoYWxsQ3VzdG9tZXJzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9jYWxsIHRoZSBkYXRhYmFzZSB0byBkZWxldGUgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkXHJcblxyXG5cdFx0XHR0b2FzdC5zdWNjZXNzKCdkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gKGN1c3RvbWVyOiBDdXN0b21lcnMpID0+IHtcclxuXHRcdHNldE5hbWUoY3VzdG9tZXIubmFtZSk7XHJcblx0XHRzZXRFbWFpbChjdXN0b21lci5lbWFpbCk7XHJcblx0XHRzZXRQaG9uZShjdXN0b21lci5waG9uZSk7XHJcblx0XHRzZXRBZGRyZXNzKGN1c3RvbWVyLmFkZHJlc3MpO1xyXG5cdFx0c2V0SWQoY3VzdG9tZXIuX2lkKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRDdXJyZW50cGFnZShwYWdlKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVNvcnQgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBzb3J0Q29sdW1uID0geyAuLi5zb3J0Q29sdW1ucyB9O1xyXG5cdFx0aWYgKHNvcnRDb2x1bW4ucGF0aCA9PT0gcGF0aCkgc29ydENvbHVtbi5vcmRlciA9IHNvcnRDb2x1bW4ub3JkZXIgPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0c29ydENvbHVtbi5wYXRoID0gcGF0aDtcclxuXHRcdFx0c29ydENvbHVtbi5vcmRlciA9ICdhc2MnO1xyXG5cdFx0fVxyXG5cdFx0c2V0U29ydENvbHVtbihzb3J0Q29sdW1uKTtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAobmFtZS5sZW5ndGggPCA1IHx8IGVtYWlsLmxlbmd0aCA8IDUpIHJldHVybiB0b2FzdC5lcnJvcignTmFtZSBhbmQgRW1haWwgbXVzdCBiZSBncmVhdGVyIHRoYW4gNSBjaGFyYWN0ZXInKTtcclxuXHRcdGlmIChhZGRyZXNzLmxlbmd0aCA8IDUgfHwgcGhvbmUubGVuZ3RoIDwgNSlcclxuXHRcdFx0cmV0dXJuIHRvYXN0LmVycm9yKCdBZGRyZXNzIGFuZCBQaG9uZSBudW1iZXIgbXVzdCBiZSBncmVhdGVyIHRoYW4gNSBjaGFyYWN0ZXJzJyk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgZmlyZXN0b3JlXHJcblx0XHRcdFx0LmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpXHJcblx0XHRcdFx0LmRvYyhpZClcclxuXHRcdFx0XHQudXBkYXRlKHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCBhZGRyZXNzOiBhZGRyZXNzLCBwaG9uZTogcGhvbmUgfSk7XHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ1VwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRyb3V0ZXIucmVsb2FkKCk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiB0b2FzdC5lcnJvcihcIkNhbid0IGNvbm5lY3Qgd2l0aCBkYXRhYmFzZSBmb3Igbm93XCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVycygpIHtcclxuXHRcdFx0Y29uc3QgY2l0aWVzUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNpdGllc1JlZi5nZXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGN1c3RvbWVyczogQXJyYXk8Q3VzdG9tZXJzPiA9IFtdO1xyXG5cclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRJZCA9IGRvYy5pZDtcclxuXHRcdFx0XHRsZXQgYXBwT2JqID0geyAuLi5kb2MuZGF0YSgpLCBbJ19pZCddOiBjdXJyZW50SWQgfTtcclxuXHRcdFx0XHRjdXN0b21lcnMucHVzaChhcHBPYmogYXMgQ3VzdG9tZXJzKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXN0b21lcnMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNldEN1c3RvbWVycyhjdXN0b21lcnMpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0Q3VzdG9tZXJzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBzb3J0ZWQgPSBfLm9yZGVyQnkoY3VzdG9tZXJzLCBbc29ydENvbHVtbnMucGF0aF0sIFtzb3J0Q29sdW1ucy5vcmRlcl0pO1xyXG5cdGNvbnN0IHBhZ2luYXRlZEN1c3RvbWVycyA9IHBhZ2luYXRlKHNvcnRlZCwgY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEF1dGhHdWFyZD5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9XCJwbC0wXCI+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgbGc9ezR9IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwicHItMVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNT5FZGl0IEN1c3RvbWVyczwvaDU+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWUuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L0Zvcm0uQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJlbWFpbC4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhZGRyZXNzLi4uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthZGRyZXNzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPlBob25lPC9Gb3JtLkxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiY29udGFjdC4uLlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGhvbmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9Gb3JtLkNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGUoaWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFVwZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBsZz17OH0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY3VzdG9tZXJzRm9ybScpfSBjbGFzc05hbWU9XCJidG4taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEN1c3RvbWVyc1RhYmxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbWVyc1BhZ2luYXRlPXtwYWdpbmF0ZWRDdXN0b21lcnN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRWRpdD17aGFuZGxlRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25Tb3J0PXtoYW5kbGVTb3J0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PjwvQ3VzdG9tZXJzVGFibGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtc0NvdW50PXtjdXN0b21lcnMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PjwvUGFnaW5hdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8VG9hc3RDb250YWluZXI+PC9Ub2FzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9BdXRoR3VhcmQ+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9