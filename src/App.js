import Layout from "./layout/Layout";
import Landing from "./components/app/big/Landing";
import Intro from "./components/app/big/Intro";
import Introduction from "./components/app/big/Introduction";
import ChartSection from "./components/app/big/ChartSection";

function App() {


  return (
    <Layout>
      <Landing />
      <Intro />
      <Introduction />
      <ChartSection />
    </Layout>
  );
}

export default App;
