import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {createCourse,getCourse,getCourseContentController,getMyCreatedCourses,listCourses,editCourse} from '../controllers/courseController.js'

const router=Router();

router.post("/",verifyToken,createCourse);
router.get("/",listCourses);
router.get("/my-courses",verifyToken,getMyCreatedCourses);
router.get("/my-courses/:id",verifyToken,getCourseContentController);
router.put("/:id",verifyToken,editCourse)
router.get("/:id",getCourse);

export default router;
