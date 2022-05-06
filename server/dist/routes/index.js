"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_1 = __importDefault(require("./users"));
const auth_1 = __importDefault(require("./auth"));
exports.routes = {
    auth: auth_1.default,
    users: users_1.default
};
//# sourceMappingURL=index.js.map