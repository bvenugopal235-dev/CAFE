import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-white font-poppins overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Features />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}