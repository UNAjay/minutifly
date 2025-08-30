import Layout from "../components/Layout";
import SummarizeForm from "../components/SummarizeForm";
import QAForm from "../components/QAForm";

const Home = () => {
  return (
    <Layout>
      <SummarizeForm />
      <QAForm meetingText={""} />
    </Layout>
  );
};

export default Home;
