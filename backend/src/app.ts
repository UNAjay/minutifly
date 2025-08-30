import express from "express";
import cors from "cors";
import router from "./routes/meetingRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/meeting", router);

export default app;
