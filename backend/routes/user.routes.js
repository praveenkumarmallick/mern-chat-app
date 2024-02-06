import { Router } from "express";
import { getUsersForSidebar } from "../controllers/user.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
