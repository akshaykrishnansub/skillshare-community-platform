import Router from 'express';
import verifyToken from '../middleware/authMiddleware.js';
import {createCourse,getCourse,getCourseContentController,getMyCreatedCourses,listCourses,editCourse,removeCourse} from '../controllers/courseController.js'
import {unenroll,enroll,getEnrollmentStatus} from '../controllers/enrollmentController.js'

const router=Router();

router.post("/",verifyToken,createCourse);
router.get("/",listCourses);
router.get("/my-courses",verifyToken,getMyCreatedCourses);
router.get("/my-courses/:id",verifyToken,getCourseContentController);
router.post('/:id/enroll',verifyToken,enroll);

//unenroll from a course
router.delete('/:id/enroll',verifyToken,unenroll);

//check enrollment status
router.get('/:id/enroll',verifyToken,getEnrollmentStatus);
router.put("/:id",verifyToken,editCourse);
router.delete("/:id",verifyToken,removeCourse);
router.get("/:id",getCourse);

export default router;
