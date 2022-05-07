import express, { Request, Response } from 'express';

const router = express.Router();

/* GET запрос авторизации */
router.post('/login', (req, res, next) => {
  if (req.body?.username == 'admin' && req.body?.password == 'admin') {
    res.locals.username = req.body.username;
    next();
  }
  else
    res.sendStatus(401)
}, (req, res) => {
  req.session.loggedIn = true;
  req.session.username = res.locals.username;
  res.send('Auth success');
});

/* GET запрос разлогина */
router.get('/logout', (req: Request, res: Response) => {
  req.session.destroy(() => null);
  res.send('Thank you! Visit again');
});

export default router;