import * as express from 'express';
import { signup, signin, getinfo, logout } from '../controllers/account';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/getinfo', getinfo);

router.post('/logout', logout);

export default router;
