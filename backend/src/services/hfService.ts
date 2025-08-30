import axios from 'axios';

const HF_API_KEY = process.env.HF_API_KEY;

if (!HF_API_KEY) {
  throw new Error('HF_API_KEY not set in environment variables');
}

const HF_BASE_URL = 'https://api-inference.huggingface.co/models';

export async function summarizeText(text: string) {
  if (!text) throw new Error('Text cannot be empty');
  try {
    const response = await axios.post(
      `${HF_BASE_URL}/facebook/bart-large-cnn`,
      { inputs: text },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
    );
    return response.data;
  } catch (error: any) {
    console.error('Summarize Error:', error.response?.data || error.message);
    throw new Error('Failed to summarize text');
  }
}

export async function answerQuestion(text: string, question: string) {
  if (!text || !question) throw new Error('Text and question required');
  try {
    const response = await axios.post(
      `${HF_BASE_URL}/deepset/roberta-base-squad2`,
      { inputs: { question, context: text } },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
    );
    return response.data;
  } catch (error: any) {
    console.error('QA Error:', error.response?.data || error.message);
    throw new Error('Failed to get answer');
  }
}
