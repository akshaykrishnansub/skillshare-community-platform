import {Router} from 'express'
import { getDashboardStats } from '../controllers/dashboardController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router=Router();

router.get("/stats",verifyToken,getDashboardStats);

export default router;