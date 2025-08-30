import axios from "axios";

const HF_API_KEY = process.env.HF_API_KEY!;
const SUMMARIZER_MODEL = process.env.SUMMARIZER_MODEL!;
const QA_MODEL = process.env.QA_MODEL!;

export const generateSummary = async (text: string): Promise<string> => {
  try {
    const res = await axios.post(
      `https://api-inference.huggingface.co/models/${SUMMARIZER_MODEL}`,
      { inputs: text },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
    );
    return res.data[0]?.summary_text || "⚠️ No summary generated";
  } catch (err: any) {
    console.error("❌ Hugging Face Summarizer Error:", err.message);
    throw new Error("Summarization failed");
  }
};

export const generateAnswer = async (context: string, question: string): Promise<string> => {
  try {
    const res = await axios.post(
      `https://api-inference.huggingface.co/models/${QA_MODEL}`,
      { inputs: { context, question } },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
    );
    return res.data?.answer || "⚠️ No answer found";
  } catch (err: any) {
    console.error("❌ Hugging Face Q&A Error:", err.message);
    throw new Error("Q&A failed");
  }
};
