import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography, Paper, CircularProgress } from "@mui/material";

const SummarizeForm = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText) return;
    setLoading(true);
    setSummary("");
    try {
      const res = await axios.post("http://localhost:5007/meeting/summarize", { text: inputText });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Error summarizing text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }} elevation={4}>
      <Typography variant="h5" mb={2}>Summarize Meeting Notes</Typography>
      <TextField
        label="Paste meeting notes here"
        multiline
        rows={6}
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        variant="outlined"
      />
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <Button variant="contained" color="primary" onClick={handleSummarize} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Summarize"}
        </Button>
      </Box>
      {summary && (
        <Box mt={2}>
          <Typography variant="subtitle1">Summary:</Typography>
          <Typography variant="body1">{summary}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default SummarizeForm;
