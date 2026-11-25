import { Router } from 'express';
import { realizarLogin } from '../controllers/loginController';

const router = Router();

router.post('/login', realizarLogin);

export default router;