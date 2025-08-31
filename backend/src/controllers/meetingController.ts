import { Request, Response } from "express";
import { generateSummary, generateAnswer } from "../services/aiService.js";

export const summarizeMeeting = async (req: Request, res: Response) => {
      console.log("BodyBody received:", req.body); // <--- add this
  try {
    const { transcript } = req.body;
    if (!transcript) return res.status(400).json({ error: "Transcript required" });

    const summary = await generateSummary(transcript);
    res.json({ summary });
  } catch (err: any) {
    console.error("❌ Summarize Error:", err.message);
    res.status(500).json({ error: "Failed to summarize meeting" });
  }
};

export const askQuestion = async (req: Request, res: Response) => {
  try {
    const { transcript, question } = req.body;
    if (!transcript || !question)
      return res.status(400).json({ error: "Transcript & question required" });

    const answer = await generateAnswer(transcript, question);
    res.json({ answer });
  } catch (err: any) {
    console.error("❌ Q&A Error:", err.message);
    res.status(500).json({ error: "Failed to answer question" });
  }
};
