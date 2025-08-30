import { Card, CardContent, Typography } from "@mui/material";

type ResultCardProps = {
  title: string;
  content: string;
};

const ResultCard = ({ title, content }: ResultCardProps) => (
  <Card variant="outlined" sx={{ mt: 3 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {content}
      </Typography>
    </CardContent>
  </Card>
);

export default ResultCard;
