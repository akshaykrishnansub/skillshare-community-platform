import { Router } from "express";
import { login, registerUser,logout } from "../controllers/authController.js"
import verifyToken from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/userController.js";

const router=Router();

router.post("/register",registerUser);
router.post("/login",login)
router.post("/logout",logout)

//protected route
router.get("/me",verifyToken,getProfile)

export default router;