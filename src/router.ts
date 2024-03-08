import { Router } from "express";
const router = Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

export default router;
