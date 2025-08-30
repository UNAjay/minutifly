import { Router } from "express";
import { summarizeMeeting, askQuestion } from "../controllers/meetingController.js";

const router = Router();

router.post("/meeting/summarize", summarizeMeeting);
router.post("/meeting/qa", askQuestion);

export default router;
