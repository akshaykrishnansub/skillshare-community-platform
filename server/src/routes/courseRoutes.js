import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {createCourse,getCourse,listCourses} from '../controllers/courseController.js'

const router=Router();

router.post("/",verifyToken,createCourse);
router.get("/",listCourses);
router.get("/:id",getCourse)

export default router;
