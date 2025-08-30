import { Request, Response, NextFunction } from 'express';
import { summarizeText } from '../services/hfService';

export async function handleSummarize(req: Request, res: Response, next: NextFunction) {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text);
    res.json({ success: true, data: summary });
  } catch (err) {
    next(err);
  }
}
