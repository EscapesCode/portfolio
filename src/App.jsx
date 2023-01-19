
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Layout>
      <Banner />
      <About />
      <ContactMe/>
    </Layout>
      <Footer/>
      </>
  );
}

export default App;
