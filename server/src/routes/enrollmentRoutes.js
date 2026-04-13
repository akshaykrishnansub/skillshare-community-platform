import {Router} from 'express'
import verifyToken from '../middleware/authMiddleware.js';
import { enroll, getEnrollmentStatus, getMyEnrollments, unenroll } from '../controllers/enrollmentController.js';

const router=Router();

//get my enrollments
router.get('/my-courses',verifyToken,getMyEnrollments);


//enroll into a course
router.post('/:id/enroll',verifyToken,enroll);

//unenroll from a course
router.delete('/:id/enroll',verifyToken,unenroll);

//check enrollment status
router.get('/:id/enroll',verifyToken,getEnrollmentStatus);

export default router;