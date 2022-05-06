import { Request, Response } from "express";

/**Проверям авторизацию пользователя */
export const checkAuth = (req: Request, res: Response, next: () => void) => {
  if (req.session.loggedIn) {
    next();
  }
  else
    res.sendStatus(401);
};