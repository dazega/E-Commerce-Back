import express from 'express';
//Controllers
import { registerUser, loginUser } from '../controllers/user';

const router = express.Router();

router.post('/sign-up', registerUser);
router.post('/log-in', loginUser);

export default router;
