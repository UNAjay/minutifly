import axios from "axios";

const BASE_URL = "http://localhost:5007/meeting";

export const summarizeMeeting = async (text: string) => {
  const response = await axios.post(`${BASE_URL}/summarize`, { text });
  return response.data;
};

export const askQuestion = async (text: string, question: string) => {
  const response = await axios.post(`${BASE_URL}/qa`, { text, question });
  return response.data;
};
