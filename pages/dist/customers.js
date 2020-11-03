"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var useFirebase_1 = require("../components/useFirebase");
var router_1 = require("next/router");
var react_toastify_1 = require("react-toastify");
var Authentification_1 = require("../components/Authentification");
var Navigation_1 = require("../components/Navigation");
var table_module_scss_1 = require("../styles/table.module.scss");
function Customers() {
    var _this = this;
    var _a = react_1.useState([]), customers = _a[0], setCustomers = _a[1];
    var _b = react_1.useState([]), categories = _b[0], setCategories = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(''), name = _d[0], setName = _d[1];
    var _e = react_1.useState(''), email = _e[0], setEmail = _e[1];
    var _f = react_1.useState(''), phone = _f[0], setPhone = _f[1];
    var _g = react_1.useState(''), category = _g[0], setCategory = _g[1];
    var _h = react_1.useState(''), address = _h[0], setAddress = _h[1];
    var _j = react_1.useState(''), id = _j[0], setId = _j[1];
    var router = router_1.useRouter();
    var app = react_1.useContext(useFirebase_1["default"]);
    var firestore = app.firestore();
    react_1.useEffect(function () {
        function getCustomers() {
            return __awaiter(this, void 0, void 0, function () {
                var customersRef, snapshot, customers;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            customersRef = firestore.collection('customers');
                            return [4 /*yield*/, customersRef.get()];
                        case 1:
                            snapshot = _a.sent();
                            customers = [];
                            snapshot.forEach(function (doc) {
                                var _a;
                                var appObj = __assign(__assign({}, doc.data()), (_a = {}, _a['_id'] = doc.id, _a));
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                customers.push(appObj);
                            });
                            setCustomers(customers);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function getCategory() {
            return __awaiter(this, void 0, void 0, function () {
                var categoryRef, snapshot, categories;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            categoryRef = firestore.collection('category');
                            return [4 /*yield*/, categoryRef.get()];
                        case 1:
                            snapshot = _a.sent();
                            categories = [];
                            snapshot.forEach(function (doc) {
                                var _a;
                                var appObj = __assign(__assign({}, doc.data()), (_a = {}, _a['_id'] = doc.id, _a));
                                categories.push(appObj);
                            });
                            setCategories(categories);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getCategory();
        getCustomers();
    }, []);
    var reset = function () {
        // this is for reseting all the states vriables to their initial value
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setId('');
        setCategory('');
    };
    var handleAdd = function () { return __awaiter(_this, void 0, void 0, function () {
        var now, newCustomer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (name.length < 5)
                        return [2 /*return*/, react_toastify_1.toast.error('customer name must be grater that 5 characters')];
                    if (email.length < 7)
                        return [2 /*return*/, react_toastify_1.toast.error('customer email must be grater that 7 characters')];
                    if (address.length < 5)
                        return [2 /*return*/, react_toastify_1.toast.error('customer address must be grater that 5 characters')];
                    if (phone.length < 7)
                        return [2 /*return*/, react_toastify_1.toast.error('customer phone number must be grater that 7 characters')];
                    if (category.length < 1)
                        return [2 /*return*/, react_toastify_1.toast.error('please select a category')];
                    if (name.length > 100 || email.length > 50 || address.length > 100 || phone.length > 20)
                        return [2 /*return*/, react_toastify_1.toast.error('Invalid Request')];
                    setLoading(true);
                    now = Date.now();
                    newCustomer = {
                        id: "" + now,
                        name: name,
                        email: email,
                        address: address,
                        category: category,
                        phone: phone,
                        type: 'One-off'
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, firestore.collection('customers').add(newCustomer)];
                case 2:
                    _a.sent();
                    react_toastify_1.toast.success('Customer Added Successfully');
                    setCustomers(__spreadArrays(customers, [newCustomer]));
                    reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, react_toastify_1.toast.error("can't connect to server right now")];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var deleteConfirm, allCustomers, filtered, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deleteConfirm = confirm('Are you sure you ant to delete this document?');
                    if (!deleteConfirm) return [3 /*break*/, 5];
                    allCustomers = customers;
                    filtered = allCustomers.filter(function (m) { return m._id !== id; });
                    setCustomers(filtered);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    //call the database to delete the customer with the id
                    return [4 /*yield*/, firestore.collection('customers').doc(id)["delete"]()];
                case 2:
                    //call the database to delete the customer with the id
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, react_toastify_1.toast.error('cant perform this operation')];
                case 4:
                    react_toastify_1.toast.success('deleted successfully');
                    console.log(id);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleEdit = function (customer) {
        //for populating the form
        setName(customer.name);
        setEmail(customer.email);
        setPhone(customer.phone);
        setAddress(customer.address);
        setCategory(customer.category);
        setId(customer._id);
    };
    var handleUpdate = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var updatedCustomers, allCustomers, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (name.length < 5 || email.length < 5)
                        return [2 /*return*/, react_toastify_1.toast.error('Name and Email must be greater than 5 character')];
                    if (address.length < 5 || phone.length < 5)
                        return [2 /*return*/, react_toastify_1.toast.error('Address and Phone number must be greater than 5 characters')];
                    if (category.length < 1)
                        return [2 /*return*/, react_toastify_1.toast.error('please select a category')];
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, firestore
                            .collection('customers')
                            .doc(id)
                            .update({ name: name, email: email, address: address, phone: phone, category: category })];
                case 2:
                    updatedCustomers = _a.sent();
                    react_toastify_1.toast.success('Updated successfully');
                    allCustomers = __assign(__assign({}, customers), { updatedCustomers: updatedCustomers });
                    setCustomers(allCustomers);
                    setLoading(false);
                    router.reload();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, react_toastify_1.toast.error("Can't connect with database for now")];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(Authentification_1["default"], null,
        react_1["default"].createElement(react_bootstrap_1.Container, { className: table_module_scss_1["default"].Main },
            react_1["default"].createElement(Navigation_1["default"], null),
            react_1["default"].createElement(react_bootstrap_1.Row, { className: "mb-10 pb-12" },
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, className: "float-left" },
                    react_1["default"].createElement(react_bootstrap_1.Card, { className: table_module_scss_1["default"].card },
                        react_1["default"].createElement(react_bootstrap_1.Card.Header, null,
                            react_1["default"].createElement("h5", null, "Edit Customers")),
                        react_1["default"].createElement(react_bootstrap_1.Card.Body, null,
                            react_1["default"].createElement(react_bootstrap_1.Form, null,
                                react_1["default"].createElement(react_bootstrap_1.FormGroup, null,
                                    react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Name"),
                                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "name...", value: name, onChange: function (e) { return setName(e.target.value); } })),
                                react_1["default"].createElement(react_bootstrap_1.FormGroup, null,
                                    react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Email"),
                                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "email...", value: email, onChange: function (e) { return setEmail(e.target.value); } })),
                                react_1["default"].createElement(react_bootstrap_1.Form.Group, null,
                                    react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Category"),
                                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { as: "select", value: category, onChange: function (e) { return setCategory(e.target.value); } },
                                        react_1["default"].createElement("option", null),
                                        categories.map(function (cate) { return (react_1["default"].createElement("option", { key: cate.id }, cate.name)); }))),
                                react_1["default"].createElement(react_bootstrap_1.FormGroup, null,
                                    react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Address"),
                                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "address...", value: address, onChange: function (e) { return setAddress(e.target.value); } })),
                                react_1["default"].createElement(react_bootstrap_1.FormGroup, null,
                                    react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Phone"),
                                    react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "contact...", value: phone, onChange: function (e) { return setPhone(e.target.value); } })),
                                react_1["default"].createElement(react_bootstrap_1.Form.Group, null,
                                    !id ? ( //No Id meaning customer does not exist in the table so we render the create customer button
                                    //to dynamically render this button we call the id of the useState
                                    react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-sm btn-primary", onClick: handleAdd }, loading ? (react_1["default"].createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "ligth" })) : (react_1["default"].createElement("span", { className: table_module_scss_1["default"].text }, "Insert")))) : (
                                    //else their is an id so we render the update button tag
                                    react_1["default"].createElement(react_bootstrap_1.Button, { className: " btn-sm btn-secondary", onClick: function () { return handleUpdate(id); } }, !loading ? (react_1["default"].createElement("span", null, "Update")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement(react_bootstrap_1.Spinner, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }),
                                        react_1["default"].createElement("span", { className: "sr-only" }, "Updating..."))))),
                                    react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-danger float-right", onClick: function () { return reset(); } }, "Reset")))))),
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 9, className: "float-right" },
                    react_1["default"].createElement(react_bootstrap_1.Card, { className: table_module_scss_1["default"].container },
                        react_1["default"].createElement(react_bootstrap_1.Card.Header, null,
                            customers.length === 0 ? (
                            //conditionally render the number of cutomers if no custmers exists in the database we render the firstone
                            react_1["default"].createElement("span", { className: table_module_scss_1["default"].Table }, "There are No customer in the database. checking for updates...")) : (
                            //else we render this
                            react_1["default"].createElement("span", { className: table_module_scss_1["default"].Table },
                                "found ",
                                customers.length,
                                " Customers ")),
                            react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-info float-right", onClick: function () {
                                    router.push('/sales');
                                } }, "Post sales")),
                        react_1["default"].createElement(react_bootstrap_1.Card.Body, null,
                            react_1["default"].createElement(react_bootstrap_1.Table, { className: "table-bordered table-sm " },
                                react_1["default"].createElement("thead", null,
                                    react_1["default"].createElement("tr", null,
                                        react_1["default"].createElement("th", null, "S/N"),
                                        react_1["default"].createElement("th", { className: table_module_scss_1["default"].thead }, "Name"),
                                        react_1["default"].createElement("th", { className: table_module_scss_1["default"].thead }, "Email"),
                                        react_1["default"].createElement("th", { className: table_module_scss_1["default"].thead }, "category"),
                                        react_1["default"].createElement("th", { className: table_module_scss_1["default"].thead }, "address"),
                                        react_1["default"].createElement("th", { className: table_module_scss_1["default"].thead }, "phone"),
                                        react_1["default"].createElement("th", null, "Delete"),
                                        react_1["default"].createElement("th", null, "Edit"))),
                                react_1["default"].createElement("tbody", null, customers.map(function (customer, index) { return (react_1["default"].createElement("tr", { key: customer.id },
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, index + 1),
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, customer.name),
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, customer.email),
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, customer.category),
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, customer.address),
                                    react_1["default"].createElement("td", { className: table_module_scss_1["default"].thead }, customer.phone),
                                    react_1["default"].createElement("td", null,
                                        react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-sm btn-primary", onClick: function () {
                                                handleEdit(customer);
                                            } }, "Edit")),
                                    react_1["default"].createElement("td", null,
                                        react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-sm btn-danger", onClick: function () {
                                                handleDelete(customer._id);
                                            } }, "Delete")))); })))),
                        react_1["default"].createElement(react_toastify_1.ToastContainer, null)))))));
}
exports["default"] = Customers;
