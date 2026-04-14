import {Router} from 'express'
import verifyToken from '../middleware/authMiddleware.js';
import { enroll, getEnrollmentStatus, getMyEnrollments, unenroll } from '../controllers/enrollmentController.js';

const router=Router();

//get my enrollments
router.get('/my-courses',verifyToken,getMyEnrollments);

export default router;