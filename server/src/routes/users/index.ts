import express from 'express';
import { checkAuth } from '../../utils/auth';

const router = express.Router();

/* GET запрос авторизации */
router.get('/users', checkAuth, (_, res) => {
  res.send('Hello users page');
})

export default router;