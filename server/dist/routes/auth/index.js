"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET запрос авторизации */
router.post('/login', (req, res, next) => {
    var _a, _b;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.username) == 'admin' && ((_b = req.body) === null || _b === void 0 ? void 0 : _b.password) == 'admin') {
        res.locals.username = req.body.username;
        next();
    }
    else
        res.sendStatus(401);
}, (req, res) => {
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    res.send('Auth success');
});
/* GET запрос разлогина */
router.get('/logout', (req, res) => {
    req.session.destroy(() => null);
    res.send('Thank you! Visit again');
});
exports.default = router;
//# sourceMappingURL=index.js.map