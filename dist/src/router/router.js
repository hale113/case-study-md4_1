"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_router_1 = require("./product-router.router");
const user_router_router_1 = require("./user-router.router");
exports.router = (0, express_1.Router)();
exports.router.use('', product_router_router_1.routerProduct);
exports.router.use('/user', user_router_router_1.routerUser);
//# sourceMappingURL=router.js.map