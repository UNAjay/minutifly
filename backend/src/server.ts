import express from "express";
import router from "./routes/meetingRoutes";


const app = express();
app.use(express.json());

// Mount the routes at /meeting
app.use("/meeting", router);

app.listen(5007, () => {
  console.log("Server running on port 5007");
});
