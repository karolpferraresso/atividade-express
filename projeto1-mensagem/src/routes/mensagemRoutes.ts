import { Router } from 'express';
import { criarMensagem } from '../controllers/mensagemController';

const router = Router();

router.post('/mensagem', criarMensagem);

export default router;