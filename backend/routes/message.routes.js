import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
