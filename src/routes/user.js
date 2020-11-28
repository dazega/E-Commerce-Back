import express from 'express';
//Controllers
import { registerUser } from '../controllers/user';

const router = express.Router();

router.post('/sign-up', registerUser);

export default router;
