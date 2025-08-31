import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();
const token = process.env.HUGGINGFACE_TOKEN;

router.post("/summarize", async (req: Request, res: Response) => {
  const { transcript } = req.body;
  if (!transcript) return res.status(400).json({ error: "Transcript is required" });

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/YOUR_SUMMARIZER_MODEL",
      { inputs: transcript },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
