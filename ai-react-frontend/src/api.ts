import axios from "axios";

const BASE_URL = "http://localhost:5007/api/meeting";

export const summarizeMeeting = async (transcript: string) => {
  const response = await axios.post(`${BASE_URL}/summarize`, { transcript });
  return response.data;
};
/**
 * Ask a question based on a meeting transcript
 */
export const askQuestion = async (transcript: string, question: string) => {
  const response = await axios.post(`${BASE_URL}/qa`, { transcript, question });
  return response.data;
};
