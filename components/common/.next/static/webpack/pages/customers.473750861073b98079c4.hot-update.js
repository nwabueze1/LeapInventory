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
  var paginatedCustomers = Object(_components_utils_paginate__WEBPACK_IMPORTED_MODULE_10__["paginate"])(customers, currentPage, pageSize);
  return __jsx(_components_Authentification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 8
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, __jsx(_components_customersTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    customersPaginate: paginatedCustomers,
    onDelete: handleDelete,
    onEdit: handleEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 95,
      columnNumber: 7
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJDdXN0b21lcnMiLCJ1c2VTdGF0ZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRwYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXBwIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGVDb25maXJtIiwiY29uZmlybSIsImFsbEN1c3RvbWVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIl9pZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b2FzdCIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJjaXRpZXNSZWYiLCJnZXQiLCJzbmFwc2hvdCIsImZvckVhY2giLCJjdXJyZW50SWQiLCJhcHBPYmoiLCJkYXRhIiwicHVzaCIsInBhZ2luYXRlZEN1c3RvbWVycyIsInBhZ2luYXRlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWWUsU0FBU0EsU0FBVCxHQUFrQztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFtQixFQUFuQixDQURNO0FBQUEsTUFDekNDLFNBRHlDO0FBQUEsTUFDOUJDLFlBRDhCOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUV6Q0csUUFGeUM7QUFBQSxNQUUvQkMsV0FGK0I7O0FBQUEsbUJBR1ZKLHNEQUFRLENBQUMsQ0FBRCxDQUhFO0FBQUEsTUFHekNLLFdBSHlDO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFQztBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1JLE1BQU0sQ0FBQ2tDLElBQVAsQ0FBWSxnQkFBWixDQUFOO0FBQUEsS0FBakI7QUFBc0QsYUFBUyxFQUFDLFVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxDQUZELENBREQsRUFVQyxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUNDLHFCQUFpQixFQUFFQyxrQkFEcEI7QUFFQyxZQUFRLEVBQUU3QixZQUZYO0FBR0MsVUFBTSxFQUFFZ0IsVUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFNQyxNQUFDLHFFQUFEO0FBQ0MsY0FBVSxFQUFFNUIsU0FBUyxDQUFDMkMsTUFEdkI7QUFFQyxlQUFXLEVBQUV2QyxXQUZkO0FBR0MsWUFBUSxFQUFFRixRQUhYO0FBSUMsZ0JBQVksRUFBRTJCLGdCQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxDQVZELEVBdUJDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRCxDQURELENBREQsQ0FERDtBQStCQTs7R0F0RnVCL0IsUztVQUlSUyxxRDs7O0tBSlFULFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLjQ3Mzc1MDg2MTA3M2I5ODA3OWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENhcmQsIENvbnRhaW5lciwgRm9ybUNvbnRyb2wsIElucHV0R3JvdXAsIFNwaW5uZXIsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHVzZUZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEF1dGhHdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhlbnRpZmljYXRpb24nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL3BhZ2luYXRlJztcclxuaW1wb3J0IEN1c3RvbWVyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tZXJzVGFibGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lcnMge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0YWRkcmVzczogc3RyaW5nO1xyXG5cdHBob25lOiBzdHJpbmc7XHJcblx0dHlwZTogJ1JvYXN0ZXInIHwgJ09uZS1vZmYnO1xyXG5cdF9pZD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzKCk6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGU8QXJyYXk8Q3VzdG9tZXJzPj4oW10pO1xyXG5cdGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoNCk7XHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBhcHAgPSB1c2VDb250ZXh0KHVzZUZpcmViYXNlKTtcclxuXHRjb25zdCBmaXJlc3RvcmUgPSBhcHAuZmlyZXN0b3JlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBkZWxldGVDb25maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSBhbnQgdG8gZGVsZXRlIHRoaXMgZG9jdW1lbnQ/Jyk7XHJcblx0XHRpZiAoZGVsZXRlQ29uZmlybSkge1xyXG5cdFx0XHQvL3VwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgYWxsQ3VzdG9tZXJzID0gY3VzdG9tZXJzO1xyXG5cdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEN1c3RvbWVycy5maWx0ZXIoKG0pID0+IG0uX2lkICE9PSBpZCk7XHJcblx0XHRcdHNldEN1c3RvbWVycyhmaWx0ZXJlZCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpLmRvYyhpZCkuZGVsZXRlKCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0dG9hc3QuZXJyb3IoJ2NhbnQgcGVyZm9ybSB0aGlzIG9wZXJhdGlvbicpO1xyXG5cdFx0XHRcdHNldEN1c3RvbWVycyhhbGxDdXN0b21lcnMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL2NhbGwgdGhlIGRhdGFiYXNlIHRvIGRlbGV0ZSB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWRcclxuXHJcblx0XHRcdHRvYXN0LnN1Y2Nlc3MoJ2RlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Ly8gcm91dGVyLnB1c2goYGN1c3RvbWVyc0Zvcm0vJHtpZH1gKTtcclxuXHRcdC8vZmluZCB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgZ2l2ZSBpZCBhbmQgZWRpdFxyXG5cdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEN1cnJlbnRwYWdlKHBhZ2UpO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVycygpIHtcclxuXHRcdFx0Y29uc3QgY2l0aWVzUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNpdGllc1JlZi5nZXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGN1c3RvbWVyczogQXJyYXk8Q3VzdG9tZXJzPiA9IFtdO1xyXG5cclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRJZCA9IGRvYy5pZDtcclxuXHRcdFx0XHRsZXQgYXBwT2JqID0geyAuLi5kb2MuZGF0YSgpLCBbJ19pZCddOiBjdXJyZW50SWQgfTtcclxuXHRcdFx0XHRjdXN0b21lcnMucHVzaChhcHBPYmogYXMgQ3VzdG9tZXJzKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXN0b21lcnMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNldEN1c3RvbWVycyhjdXN0b21lcnMpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0Q3VzdG9tZXJzKCk7XHJcblx0fSwgW10pO1xyXG5cdGNvbnN0IHBhZ2luYXRlZEN1c3RvbWVycyA9IHBhZ2luYXRlKGN1c3RvbWVycywgY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEF1dGhHdWFyZD5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0Q3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDxDdXN0b21lcnNUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdGN1c3RvbWVyc1BhZ2luYXRlPXtwYWdpbmF0ZWRDdXN0b21lcnN9XHJcblx0XHRcdFx0XHRcdFx0b25EZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRvbkVkaXQ9e2hhbmRsZUVkaXR9XHJcblx0XHRcdFx0XHRcdD48L0N1c3RvbWVyc1RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zQ291bnQ9e2N1c3RvbWVycy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdD48L1BhZ2luYXRpb24+XHJcblx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdDxUb2FzdENvbnRhaW5lcj48L1RvYXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0F1dGhHdWFyZD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=