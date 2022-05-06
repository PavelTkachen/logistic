"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
/**Проверям авторизацию пользователя */
const checkAuth = (req, res, next) => {
    if (req.session.loggedIn) {
        next();
    }
    else
        res.sendStatus(401);
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=auth.js.map