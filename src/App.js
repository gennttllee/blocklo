import Layout from "./layout/Layout";
import Landing from "./components/app/big/Landing";
import Intro from "./components/app/big/Intro";
import Introduction from "./components/app/big/Introduction";
import ChartSection from "./components/app/big/ChartSection";
import News from "./components/app/big/News";




function App() {

  return (
    <Layout>
      <Landing />
      <Intro />
      <Introduction />
      <ChartSection />
      <section className="bg-[#16162D] w-full text-white py-2 mt-[5rem]">
        <p className="sm:text-xl mt-[6rem] uppercase text-center">Building The Future of Cloudax</p>
        <h1 className="text-3xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA] font-bold my-6">The Roadmap</h1>
        <p className="w-11/12 md:w-2/4 mx-auto text-center text-[#ffffffa6]">Cloudax is a rapidly expanding ecosystem designed to innovate with various value-added utilities to continuously drive the economic growth of the ecosystem.</p>
        <p className="w-[5rem] h-[5rem] sm:w-[8rem] sm:h-[8rem] flex items-center justify-center mx-auto my-10 rounded-full bg-[#ffffff0f] border-t border-l border-[#ffffff51] font-bold  md:text-2xl">2022</p>
      </section>
      <News />
    </Layout>
  );
}

export default App;
