import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography, Paper, CircularProgress } from "@mui/material";

type QAFormProps = {
  meetingText: string; // pass meeting text from SummarizeForm or parent
};

const QAForm: React.FC<QAFormProps> = ({ meetingText }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQA = async () => {
    if (!question) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await axios.post("http://localhost:5007/meeting/qa", { text: meetingText, question });
      setAnswer(res.data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Error getting answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3 }} elevation={4}>
      <Typography variant="h5" mb={2}>Ask a Question (Q&A)</Typography>
      <TextField
        label="Your question"
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        variant="outlined"
      />
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <Button variant="contained" color="secondary" onClick={handleQA} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Get Answer"}
        </Button>
      </Box>
      {answer && (
        <Box mt={2}>
          <Typography variant="subtitle1">Answer:</Typography>
          <Typography variant="body1">{answer}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default QAForm;
