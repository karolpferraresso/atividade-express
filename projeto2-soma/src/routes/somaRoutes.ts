import { Router } from 'express';
import { calcularSoma } from '../controllers/somaController';

const router = Router();

router.post('/soma', calcularSoma);

export default router;