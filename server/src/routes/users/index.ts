import express from 'express';
import { checkAuth } from '../../utils/auth';

const router = express.Router();

/* GET запрос авторизации */
router.get('/api/users', checkAuth, (_, res) => {
  res.send('Hello users page');
})

export default router;