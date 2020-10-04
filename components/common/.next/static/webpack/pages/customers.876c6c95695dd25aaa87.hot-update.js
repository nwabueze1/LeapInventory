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

  var handleSort = function handleSort(path) {
    console.log(path);
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
      lineNumber: 80,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, "Customers", __jsx("span", {
    className: "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 8
    }
  }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
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
      lineNumber: 99,
      columnNumber: 7
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzLnRzeCJdLCJuYW1lcyI6WyJDdXN0b21lcnMiLCJ1c2VTdGF0ZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRwYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXBwIiwidXNlQ29udGV4dCIsInVzZUZpcmViYXNlIiwiZmlyZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGVDb25maXJtIiwiY29uZmlybSIsImFsbEN1c3RvbWVycyIsImZpbHRlcmVkIiwiZmlsdGVyIiwibSIsIl9pZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b2FzdCIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJoYW5kbGVTb3J0IiwicGF0aCIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsImNpdGllc1JlZiIsImdldCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImN1cnJlbnRJZCIsImFwcE9iaiIsImRhdGEiLCJwdXNoIiwicGFnaW5hdGVkQ3VzdG9tZXJzIiwicGFnaW5hdGUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZZSxTQUFTQSxTQUFULEdBQWtDO0FBQUE7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQW1CLEVBQW5CLENBRE07QUFBQSxNQUN6Q0MsU0FEeUM7QUFBQSxNQUM5QkMsWUFEOEI7O0FBQUEsbUJBRWhCRixzREFBUSxDQUFDLENBQUQsQ0FGUTtBQUFBLE1BRXpDRyxRQUZ5QztBQUFBLE1BRS9CQyxXQUYrQjs7QUFBQSxtQkFHVkosc0RBQVEsQ0FBQyxDQUFELENBSEU7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UyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuODc2YzZjOTU2OTVkZDI1YWFhODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ2FyZCwgQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgSW5wdXRHcm91cCwgU3Bpbm5lciwgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy91c2VGaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvcGFnaW5hdGUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lcnNUYWJsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVycyB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0ZW1haWw6IHN0cmluZztcclxuXHRhZGRyZXNzOiBzdHJpbmc7XHJcblx0cGhvbmU6IHN0cmluZztcclxuXHR0eXBlOiAnUm9hc3RlcicgfCAnT25lLW9mZic7XHJcblx0X2lkPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lcnMoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZTxBcnJheTxDdXN0b21lcnM+PihbXSk7XHJcblx0Y29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSg0KTtcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGFwcCA9IHVzZUNvbnRleHQodXNlRmlyZWJhc2UpO1xyXG5cdGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IGFudCB0byBkZWxldGUgdGhpcyBkb2N1bWVudD8nKTtcclxuXHRcdGlmIChkZWxldGVDb25maXJtKSB7XHJcblx0XHRcdC8vdXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBhbGxDdXN0b21lcnMgPSBjdXN0b21lcnM7XHJcblx0XHRcdGNvbnN0IGZpbHRlcmVkID0gYWxsQ3VzdG9tZXJzLmZpbHRlcigobSkgPT4gbS5faWQgIT09IGlkKTtcclxuXHRcdFx0c2V0Q3VzdG9tZXJzKGZpbHRlcmVkKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbignY3VzdG9tZXJzJykuZG9jKGlkKS5kZWxldGUoKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHR0b2FzdC5lcnJvcignY2FudCBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uJyk7XHJcblx0XHRcdFx0c2V0Q3VzdG9tZXJzKGFsbEN1c3RvbWVycyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vY2FsbCB0aGUgZGF0YWJhc2UgdG8gZGVsZXRlIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZFxyXG5cclxuXHRcdFx0dG9hc3Quc3VjY2VzcygnZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0Y29uc29sZS5sb2coaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHQvLyByb3V0ZXIucHVzaChgY3VzdG9tZXJzRm9ybS8ke2lkfWApO1xyXG5cdFx0Ly9maW5kIHRoZSBjdXN0b21lciB3aXRoIHRoZSBnaXZlIGlkIGFuZCBlZGl0XHJcblx0XHRjb25zb2xlLmxvZyhpZCk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTb3J0ID0gKHBhdGgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHBhdGgpO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVycygpIHtcclxuXHRcdFx0Y29uc3QgY2l0aWVzUmVmID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpO1xyXG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGNpdGllc1JlZi5nZXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IGN1c3RvbWVyczogQXJyYXk8Q3VzdG9tZXJzPiA9IFtdO1xyXG5cclxuXHRcdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRJZCA9IGRvYy5pZDtcclxuXHRcdFx0XHRsZXQgYXBwT2JqID0geyAuLi5kb2MuZGF0YSgpLCBbJ19pZCddOiBjdXJyZW50SWQgfTtcclxuXHRcdFx0XHRjdXN0b21lcnMucHVzaChhcHBPYmogYXMgQ3VzdG9tZXJzKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXN0b21lcnMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNldEN1c3RvbWVycyhjdXN0b21lcnMpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0Q3VzdG9tZXJzKCk7XHJcblx0fSwgW10pO1xyXG5cdGNvbnN0IHBhZ2luYXRlZEN1c3RvbWVycyA9IHBhZ2luYXRlKGN1c3RvbWVycywgY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEF1dGhHdWFyZD5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdDxDYXJkLkhlYWRlcj5cclxuXHRcdFx0XHRcdFx0Q3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2N1c3RvbWVyc0Zvcm0nKX0gY2xhc3NOYW1lPVwiYnRuLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0NhcmQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdDxDdXN0b21lcnNUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdGN1c3RvbWVyc1BhZ2luYXRlPXtwYWdpbmF0ZWRDdXN0b21lcnN9XHJcblx0XHRcdFx0XHRcdFx0b25EZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRvbkVkaXQ9e2hhbmRsZUVkaXR9XHJcblx0XHRcdFx0XHRcdFx0b25Tb3J0PXtoYW5kbGVTb3J0fVxyXG5cdFx0XHRcdFx0XHQ+PC9DdXN0b21lcnNUYWJsZT5cclxuXHRcdFx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0XHRpdGVtc0NvdW50PXtjdXN0b21lcnMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuXHRcdFx0XHRcdFx0XHRwYWdlU2l6ZT17cGFnZVNpemV9XHJcblx0XHRcdFx0XHRcdFx0b25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHQ+PC9QYWdpbmF0aW9uPlxyXG5cdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHQ8VG9hc3RDb250YWluZXI+PC9Ub2FzdENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9BdXRoR3VhcmQ+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9