import { useEffect } from 'react';
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
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Frame & Code - Premium Web Development & Design Agency';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web development, mobile apps, and UI/UX design services. Transform your business with cutting-edge digital solutions.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Frame & Code",
      "description": "Premium web development and design agency",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "hello@frameandcode.com"
      },
      "sameAs": [
        "https://twitter.com/frameandcode",
        "https://linkedin.com/company/frameandcode",
        "https://github.com/frameandcode"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        
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