import { Router } from "express";
import { registerUser } from "../controllers/auth-controller";

const router = Router();


router.get('/health', (_req, res) => {
    res.send("Auth Service is healthy");
});
router.post('/register', registerUser);

export default router;
