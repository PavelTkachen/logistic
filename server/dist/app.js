"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 8000;
app.use((0, express_session_1.default)({
    secret: 'My secret key',
    name: 'uniqSessionID',
    saveUninitialized: false,
    resave: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(routes_1.routes.auth);
app.use(routes_1.routes.users);
app.listen(port, () => { console.log('Website is running'); });
//# sourceMappingURL=app.js.map