import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactUs } from './components/ContactUs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
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
        <div id="contact">
          <ContactUs />
        </div>
        <FinalCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;