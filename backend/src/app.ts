import express from "express";
import cors from "cors";
import router from "./routes/meetingRoutes"; // make sure this path is correct

const app = express();

app.use(cors());
app.use(express.json());

// Dummy route
app.get("/api/test", (req, res) => {
  res.json({ status: "ok" });
});

// Actual routes
app.use("/api/meeting", router);

export default app;
