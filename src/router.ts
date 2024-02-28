import { Router } from "express";
import memberController from "./controllers/member.controller";

const router = Router();

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);

router.get("/signup", memberController.getSignup);

export default router;
