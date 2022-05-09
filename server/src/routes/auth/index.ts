import express, { Request, Response } from 'express';

const router = express.Router();

/* GET запрос авторизации */
router.post('/api/login', (req, res, next) => {
  if (req.body?.username == 'admin' && req.body?.password == 'admin') {
    res.locals.username = req.body.username;
    next();
  }
  else
    res.sendStatus(401)
}, (req, res) => {
  req.session.loggedIn = true;
  req.session.username = res.locals.username;
  res.send({username: 'admin', email: null, phone: null});
});

/* GET запрос разлогина */
router.get('/api/logout', (req: Request, res: Response) => {
  req.session.destroy(() => null);
  res.send('Thank you! Visit again');
});

/* GET запрос текущего авторизованного пользователя */
router.get('/api/profile', (_, res: Response) => {
  res.send({username: 'admin', email: null, phone: null});
});

export default router;