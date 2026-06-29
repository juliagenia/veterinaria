import { Router } from 'express';
const router = Router();

import turnosController from '../controllers/turnosController.js';

// GET /productos -> listar todos los productos.
router.get('/', turnosController.obtener);

// GET /productos/:id -> ver un producto específico.
router.get('/:id', turnosController.obtenerPorId);
 
export default router;