// import Button from "./components/Button";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Avatar2 from "./assets/Avatar2.png";
import Banner from "./components/Banner";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Layout>
      <Banner />
      <About />
     
      {/* <Gallery/>
      <Projects/> */}
      <ContactMe/>
    </Layout>
      <Footer/>
      </>
  );
}

export default App;
