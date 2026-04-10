import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {createCourse,getCourse,getMyCreatedCourses,listCourses} from '../controllers/courseController.js'

const router=Router();

router.post("/",verifyToken,createCourse);
router.get("/",listCourses);
router.get("/my-courses",verifyToken,getMyCreatedCourses)
router.get("/:id",getCourse)

export default router;
