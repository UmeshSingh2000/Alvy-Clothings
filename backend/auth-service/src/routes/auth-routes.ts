import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth-controller";

const router = Router();


router.get('/health', (_req, res) => {
    res.send("Auth Service is healthy");
});
router.post('/register', registerUser);
router.post('/login',loginUser)

export default router;
