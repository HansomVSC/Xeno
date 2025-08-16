import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <nav className="fixed top-0 z-10 w-full">
        <Navbar />
      </nav>
      <Hero />
      <Gallery />
      <AboutUs />
      <ContactUs />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
