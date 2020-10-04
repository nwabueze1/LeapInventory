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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(4),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState3[0],
      setCurrentpage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    path: 'title',
    order: 'asc'
  }),
      sortColumn = _useState4[0],
      setSortColumn = _useState4[1];

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

  var handleSort = function handleSort(path) {
    var handleSortColumn = _objectSpread({}, sortColumn);

    if (handleSortColumn.path === path) handleSortColumn.order = handleSortColumn.order === 'asc' ? 'desc' : 'asc';else {
      handleSortColumn.path = path;
      handleSortColumn.order = 'asc';
    }
    setSortColumn({
      handleSortColumn: handleSortColumn
    });
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

  var sorted = _.orderBy(customers, [sortColumn.path], [sortColumn.order]);

  var paginatedCustomers = Object(_components_utils_paginate__WEBPACK_IMPORTED_MODULE_10__["paginate"])(sorted, currentPage, pageSize);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 8
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  }, __jsx(_components_customersTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    customersPaginate: paginatedCustomers,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onSort: handleSort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx(_components_common_pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    itemsCount: customers.length,
    currentPage: currentPage,
    pageSize: pageSize,
    onPageChange: handlePageChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }))));
}

_s(Customers, "TnnVVKvt1H7HCZ8Qw7sG3mG40bM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkN1c3RvbWVycyIsInVzZVN0YXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudHBhZ2UiLCJwYXRoIiwib3JkZXIiLCJzb3J0Q29sdW1uIiwic2V0U29ydENvbHVtbiIsInJvdXRlciIsInVzZVJvdXRlciIsImFwcCIsInVzZUNvbnRleHQiLCJ1c2VGaXJlYmFzZSIsImZpcmVzdG9yZSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlQ29uZmlybSIsImNvbmZpcm0iLCJhbGxDdXN0b21lcnMiLCJmaWx0ZXJlZCIsImZpbHRlciIsIm0iLCJfaWQiLCJjb2xsZWN0aW9uIiwiZG9jIiwidG9hc3QiLCJlcnJvciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWRpdCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwiaGFuZGxlU29ydCIsImhhbmRsZVNvcnRDb2x1bW4iLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwicHVzaCIsInNvcnRlZCIsIm9yZGVyQnkiLCJwYWdpbmF0ZWRDdXN0b21lcnMiLCJwYWdpbmF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBakI7O0FBWWUsU0FBU0MsU0FBVCxHQUFrQztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFtQixFQUFuQixDQURNO0FBQUEs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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1RLE1BQU0sQ0FBQ29DLElBQVAsQ0FBWSxnQkFBWixDQUFOO0FBQUEsS0FBakI7QUFBc0QsYUFBUyxFQUFDLFVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxDQUZELENBREQsRUFVQyxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUNDLHFCQUFpQixFQUFFRyxrQkFEcEI7QUFFQyxZQUFRLEVBQUVqQyxZQUZYO0FBR0MsVUFBTSxFQUFFZ0IsVUFIVDtBQUlDLFVBQU0sRUFBRUcsVUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQyxNQUFDLHFFQUFEO0FBQ0MsY0FBVSxFQUFFbkMsU0FBUyxDQUFDbUQsTUFEdkI7QUFFQyxlQUFXLEVBQUUvQyxXQUZkO0FBR0MsWUFBUSxFQUFFRixRQUhYO0FBSUMsZ0JBQVksRUFBRStCLGdCQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRCxDQVZELEVBd0JDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRCxDQURELENBREQsQ0FERDtBQWdDQTs7R0FuR3VCbkMsUztVQUtSYSxxRDs7O0tBTFFiLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjBkNjdlYzNhYTJkZTVhZjU1NTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRm9ybUNvbnRyb2wsIElucHV0R3JvdXAsIFNwaW5uZXIsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEF1dGhHdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhlbnRpZmljYXRpb24nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL3BhZ2luYXRlJztcclxuaW1wb3J0IEN1c3RvbWVyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tZXJzVGFibGUnO1xyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVycyB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0ZW1haWw6IHN0cmluZztcclxuXHRhZGRyZXNzOiBzdHJpbmc7XHJcblx0cGhvbmU6IHN0cmluZztcclxuXHR0eXBlOiAnUm9hc3RlcicgfCAnT25lLW9mZic7XHJcblx0X2lkPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZTxBcnJheTxDdXN0b21lcnM+PihbXSk7XHJcblx0Y29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSg0KTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IFtzb3J0Q29sdW1uLCBzZXRTb3J0Q29sdW1uXSA9IHVzZVN0YXRlKHsgcGF0aDogJ3RpdGxlJywgb3JkZXI6ICdhc2MnIH0pO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xyXG5cdGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IGFudCB0byBkZWxldGUgdGhpcyBkb2N1bWVudD8nKTtcclxuXHRcdGlmIChkZWxldGVDb25maXJtKSB7XHJcblx0XHRcdC8vdXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBhbGxDdXN0b21lcnMgPSBjdXN0b21lcnM7XHJcblx0XHRcdGNvbnN0IGZpbHRlcmVkID0gYWxsQ3VzdG9tZXJzLmZpbHRlcigobSkgPT4gbS5faWQgIT09IGlkKTtcclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGZpbHRlcmVkKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJykuZG9jKGlkKS5kZWxldGUoKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHR0b2FzdC5lcnJvcignY2FudCBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uJyk7XHJcblx0XHRcdFx0c2V0Q3VzdG9tZXJzKGFsbEN1c3RvbWVycyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vY2FsbCB0aGUgZGF0YWJhc2UgdG8gZGVsZXRlIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZFxyXG5cclxuXHRcdFx0dG9hc3Quc3VjY2VzcygnZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHQvLyByb3V0ZXIucHVzaChgY3VzdG9tZXJzRm9ybS8ke2lkfWApO1xyXG5cdFx0Ly9maW5kIHRoZSBjdXN0b21lciB3aXRoIHRoZSBnaXZlIGlkIGFuZCBlZGl0XHJcblx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTb3J0ID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgaGFuZGxlU29ydENvbHVtbjogYW55ID0geyAuLi5zb3J0Q29sdW1uIH07XHJcblx0XHRpZiAoaGFuZGxlU29ydENvbHVtbi5wYXRoID09PSBwYXRoKSBoYW5kbGVTb3J0Q29sdW1uLm9yZGVyID0gaGFuZGxlU29ydENvbHVtbi5vcmRlciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRoYW5kbGVTb3J0Q29sdW1uLnBhdGggPSBwYXRoO1xyXG5cdFx0XHRoYW5kbGVTb3J0Q29sdW1uLm9yZGVyID0gJ2FzYyc7XHJcblx0XHR9XHJcblx0XHRzZXRTb3J0Q29sdW1uKHsgaGFuZGxlU29ydENvbHVtbiB9KTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lcnMoKSB7XHJcblx0XHRcdGNvbnN0IGNpdGllc1JlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKTtcclxuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBjaXRpZXNSZWYuZ2V0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBjdXN0b21lcnM6IEFycmF5PEN1c3RvbWVycz4gPSBbXTtcclxuXHJcblx0XHRcdHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50SWQgPSBkb2MuaWQ7XHJcblx0XHRcdFx0bGV0IGFwcE9iaiA9IHsgLi4uZG9jLmRhdGEoKSwgWydfaWQnXTogY3VycmVudElkIH07XHJcblx0XHRcdFx0Y3VzdG9tZXJzLnB1c2goYXBwT2JqIGFzIEN1c3RvbWVycyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY3VzdG9tZXJzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRDdXN0b21lcnMoY3VzdG9tZXJzKTtcclxuXHRcdH1cclxuXHRcdGdldEN1c3RvbWVycygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgc29ydGVkID0gXy5vcmRlckJ5KGN1c3RvbWVycywgW3NvcnRDb2x1bW4ucGF0aF0sIFtzb3J0Q29sdW1uLm9yZGVyXSk7XHJcblx0Y29uc3QgcGFnaW5hdGVkQ3VzdG9tZXJzID0gcGFnaW5hdGUoc29ydGVkLCBjdXJyZW50UGFnZSwgcGFnZVNpemUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aEd1YXJkPlxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0PENhcmQuSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRDdXN0b21lcnNcclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY3VzdG9tZXJzRm9ybScpfSBjbGFzc05hbWU9XCJidG4taW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRkXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvQ2FyZC5IZWFkZXI+XHJcblxyXG5cdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0PEN1c3RvbWVyc1RhYmxlXHJcblx0XHRcdFx0XHRcdFx0Y3VzdG9tZXJzUGFnaW5hdGU9e3BhZ2luYXRlZEN1c3RvbWVyc31cclxuXHRcdFx0XHRcdFx0XHRvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdG9uRWRpdD17aGFuZGxlRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRvblNvcnQ9e2hhbmRsZVNvcnR9XHJcblx0XHRcdFx0XHRcdD48L0N1c3RvbWVyc1RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zQ291bnQ9e2N1c3RvbWVycy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0F1dGhHdWFyZD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=