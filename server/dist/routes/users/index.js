"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../utils/auth");
const router = express_1.default.Router();
/* GET запрос авторизации */
router.get('/users', auth_1.checkAuth, (_, res) => {
    res.send('Hello users page');
});
exports.default = router;
//# sourceMappingURL=index.js.map