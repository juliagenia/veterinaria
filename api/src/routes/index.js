import { Router } from 'express';
const router = Router();

import statusRoutes from './statusRoutes.js';
import turnosRoutes from "./turnosRoutes.js"

// Todas las rutas de statusRoutes estarán disponibles bajo /status.
router.use('/status', statusRoutes);

// Todas las rutas de turnosRoutes estarán disponibles bajo /turnos.
router.use('/turnos', turnosRoutes);

export default router;