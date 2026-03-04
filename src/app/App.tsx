import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { ContactUs } from "./components/ContactUs";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Navbar />
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="about">
          <WhyChooseUs />
        </div>
        <Testimonials />
        <ContactUs />
        {/* <FinalCTA /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
