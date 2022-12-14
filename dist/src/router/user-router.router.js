"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.routerUser = (0, express_1.Router)();
exports.routerUser.get('/login', user_controller_1.default.showFormLogin);
exports.routerUser.post('/login', user_controller_1.default.login);
//# sourceMappingURL=user-router.router.js.map