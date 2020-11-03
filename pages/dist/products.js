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
/* eslint-disable @typescript-eslint/no-unused-vars */
var router_1 = require("next/router");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_toastify_1 = require("react-toastify");
var Navigation_1 = require("../components/Navigation");
var useFirebase_1 = require("../components/useFirebase");
var products_module_scss_1 = require("../styles/products.module.scss");
function Products() {
    var _this = this;
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    var _b = react_1.useState(''), productName = _b[0], setProductName = _b[1];
    var _c = react_1.useState(''), numberInstock = _c[0], setNumberInStock = _c[1];
    var _d = react_1.useState(''), priceCash = _d[0], setPriceCash = _d[1];
    var _e = react_1.useState(''), priceSuperMkt = _e[0], setPriceSuperMkt = _e[1];
    var _f = react_1.useState(''), priceBar = _f[0], setPriceBar = _f[1];
    var _g = react_1.useState(''), id = _g[0], setId = _g[1];
    var router = router_1.useRouter();
    var _h = react_1.useState(false), loading = _h[0], setLoading = _h[1];
    var app = react_1.useContext(useFirebase_1["default"]);
    var firestore = app.firestore();
    var reset = function () {
        setLoading(false);
        setNumberInStock('');
        setPriceBar('');
        setPriceCash('');
        setPriceSuperMkt('');
        setProductName('');
        setId('');
    };
    var addBrand = function () { return __awaiter(_this, void 0, void 0, function () {
        var newProduct, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (productName.length < 5 || numberInstock.length <= 0)
                        return [2 /*return*/, react_toastify_1.toast.error('please ente a valid product name and numberInStock')];
                    if (priceCash.length <= 0 || priceBar.length <= 0 || priceSuperMkt.length <= 0)
                        return [2 /*return*/, react_toastify_1.toast.error('please check that you inputed correctly')];
                    newProduct = {
                        id: "" + Date.now(),
                        name: productName,
                        numberInStock: numberInstock,
                        priceCash: priceCash,
                        type: 'One-off',
                        priceBar: priceBar,
                        priceSuperMkt: priceSuperMkt
                    };
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, firestore.collection('products').add(newProduct)];
                case 2:
                    _a.sent();
                    react_toastify_1.toast.success('Product Added successfully to the database');
                    setProducts(__spreadArrays(products, [newProduct]));
                    reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, react_toastify_1.toast.error('cant connect to the database now')];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        function getProducts() {
            return __awaiter(this, void 0, void 0, function () {
                var productRef, snapshot, products;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            productRef = firestore.collection('products');
                            return [4 /*yield*/, productRef.get()];
                        case 1:
                            snapshot = _a.sent();
                            products = [];
                            snapshot.forEach(function (doc) {
                                var _a;
                                var appObj = __assign(__assign({}, doc.data()), (_a = {}, _a['_id'] = doc.id, _a));
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                products.push(appObj);
                            });
                            setProducts(products);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getProducts();
    }, []);
    var handleEdit = function (product) {
        setNumberInStock(product.numberInStock);
        setPriceBar(product.priceBar);
        setPriceCash(product.priceCash);
        setPriceSuperMkt(product.priceSuperMkt);
        setProductName(product.name);
        setId(product._id);
    };
    var handleDelete = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var deleteConfirm, allProducts, filtered, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deleteConfirm = confirm('Are you sure you want to delete this product');
                    if (!deleteConfirm) return [3 /*break*/, 4];
                    allProducts = products;
                    filtered = allProducts.filter(function (m) { return m.id !== id; });
                    setProducts(filtered);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, firestore.collection('products').doc(id)["delete"]()];
                case 2:
                    _a.sent();
                    react_toastify_1.toast.success('deleted');
                    setProducts(filtered);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, react_toastify_1.toast.error('failed to delete')];
                case 4:
                    console.log(id);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUpdate = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var updatedProduct, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (productName.length < 5 || numberInstock.length <= 0)
                        return [2 /*return*/, react_toastify_1.toast.error('please ente a valid product name and numberInStock')];
                    if (priceCash.length <= 0 || priceBar.length <= 0 || priceSuperMkt.length <= 0)
                        return [2 /*return*/, react_toastify_1.toast.error('please check that you inputed the correct price value')];
                    updatedProduct = {
                        name: productName,
                        numberInStock: numberInstock,
                        priceBar: priceBar,
                        priceCash: priceCash,
                        priceSuperMkt: priceSuperMkt,
                        id: id
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setLoading(true);
                    return [4 /*yield*/, firestore.collection('products').doc(id).update(updatedProduct)];
                case 2:
                    _a.sent();
                    react_toastify_1.toast.success('updated succesfully successfully');
                    setLoading(false);
                    reset();
                    router.reload();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: products_module_scss_1["default"].div },
        react_1["default"].createElement(Navigation_1["default"], null),
        react_1["default"].createElement("h5", { className: products_module_scss_1["default"].welcome },
            " ",
            products.length,
            " products Avalaible"),
        react_1["default"].createElement(react_bootstrap_1.Row, { className: products_module_scss_1["default"].row },
            react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, md: 3, sm: 6, className: products_module_scss_1["default"].col },
                react_1["default"].createElement(react_bootstrap_1.Form, { className: products_module_scss_1["default"].form },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].input },
                        react_1["default"].createElement("h5", { className: products_module_scss_1["default"].header }, "Products"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Product BrandName"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: products_module_scss_1["default"].control, type: "text", value: productName, onChange: function (e) { return setProductName(e.target.value); } })),
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].input },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "NumberInStock"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: products_module_scss_1["default"].control, type: "text", value: numberInstock, onChange: function (e) { return setNumberInStock(e.target.value); } })),
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].input },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Cash Price "),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: products_module_scss_1["default"].control, type: "text", value: priceCash, onChange: function (e) { return setPriceCash(e.target.value); } })),
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].input },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Bar Price"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: products_module_scss_1["default"].control, type: "text", value: priceBar, onChange: function (e) { return setPriceBar(e.target.value); } })),
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].input },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, null, "Price SuperMarket"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: products_module_scss_1["default"].control, type: "text", value: priceSuperMkt, onChange: function (e) { return setPriceSuperMkt(e.target.value); } })),
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { className: products_module_scss_1["default"].button },
                        //check if an id exist to render the Edit button
                        id ? (react_1["default"].createElement(react_bootstrap_1.Button, { onClick: function () { return handleUpdate(id); } }, loading ? (react_1["default"].createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status" },
                            react_1["default"].createElement("span", { className: "sr-only" }, "Loading..."))) : (react_1["default"].createElement("span", null, "update")))) : (
                        //if no id we ender the add Button
                        react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-sm btn-info", onClick: addBrand }, loading ? (react_1["default"].createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status" },
                            react_1["default"].createElement("span", { className: "sr-only" }, "Loading..."))) : (react_1["default"].createElement("span", null, "Add")))),
                        react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-danger float-right mr-2", onClick: function () { return reset(); } }, "Reset")))),
            react_1["default"].createElement(react_bootstrap_1.Col, { lg: 9, sm: 6 },
                react_1["default"].createElement(react_bootstrap_1.Table, { className: "table-bordered table-sm" },
                    react_1["default"].createElement("thead", { className: products_module_scss_1["default"].thead },
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "S/N"),
                            react_1["default"].createElement("th", null, "Product Name"),
                            react_1["default"].createElement("th", null, "Number In Stock"),
                            react_1["default"].createElement("th", null, " Price Cash (#)"),
                            react_1["default"].createElement("th", null, "Price Bar (#)"),
                            react_1["default"].createElement("th", null, "Price SuperMkt (#)"),
                            react_1["default"].createElement("th", null, "Edit"),
                            react_1["default"].createElement("th", null, "Delete"))),
                    react_1["default"].createElement("tbody", { className: products_module_scss_1["default"].tbody }, products.map(function (product, index) { return (react_1["default"].createElement("tr", { key: product.id },
                        react_1["default"].createElement("td", null, index + 1),
                        react_1["default"].createElement("td", null, product.name),
                        react_1["default"].createElement("td", null,
                            product.numberInStock,
                            " "),
                        react_1["default"].createElement("td", null, product.priceCash),
                        react_1["default"].createElement("td", null, product.priceBar),
                        react_1["default"].createElement("td", null, product.priceSuperMkt),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-primary btn-sm", onClick: function () { return handleEdit(product); } }, "Edit")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-secondary btn-danger btn-sm", onClick: function () { return handleDelete(product._id); } }, "Delete")))); }))))),
        react_1["default"].createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = Products;
