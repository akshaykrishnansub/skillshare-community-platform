import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {createCourse,listCourses} from '../controllers/courseController.js'

const router=Router();

router.post("/",verifyToken,createCourse);
router.get("/",listCourses);

export default router;
