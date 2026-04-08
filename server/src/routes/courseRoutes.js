import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import createCourse from '../controllers/courseController.js'

const router=Router();

router.post("/",verifyToken,createCourse);

export default router;
