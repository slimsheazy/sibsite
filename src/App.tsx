import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import SEO from './components/SEO';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { SuccessPage } from './pages/SuccessPage';
import { CancelPage } from './pages/CancelPage';
import { ArrowUp } from 'lucide-react';

function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black relative">
      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <ScrollProgress />
      <SEO 
        title="Sibylhaus | Intuitive Tarot Readings & Spiritual Guidance"
        description="No sugarcoating. Real tarot readings for real life. Get honest, intuitive guidance on love, career, and life decisions. Audio readings with personalized dashboards."
        url="https://sibylhaus.com"
      />
      <Header />

      <main>
        <Hero />
        <AboutSection />

        <div className="bg-white py-4 overflow-hidden whitespace-nowrap border-y border-black z-20 relative">
          <div className="animate-marquee inline-block text-black font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            <span className="mx-12">Book Your Reading</span>
            <span
              className="mx-12 text-transparent stroke-black stroke-2"
              style={{ WebkitTextStroke: '2px black' }}
            >
              Audio + PDF Delivery
            </span>
            <span className="mx-12">Sibylhaus</span>
            <span
              className="mx-12 text-transparent stroke-black stroke-2"
              style={{ WebkitTextStroke: '2px black' }}
            >
              Direct Guidance
            </span>
            <span className="mx-12">Book Your Reading</span>
            <span
              className="mx-12 text-transparent stroke-black stroke-2"
              style={{ WebkitTextStroke: '2px black' }}
            >
              Audio + PDF Delivery
            </span>
            <span className="mx-12">Sibylhaus</span>
            <span
              className="mx-12 text-transparent stroke-black stroke-2"
              style={{ WebkitTextStroke: '2px black' }}
            >
              Direct Guidance
            </span>
          </div>
        </div>

        <ProductCatalog />
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out transform ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } hover:bg-sibyl-gray hover:text-white border border-black`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="Page Not Found | Sibylhaus"
        description="The page you're looking for doesn't exist. Return to Sibylhaus for intuitive tarot readings and spiritual guidance."
        url="https://sibylhaus.com/404"
      />
      <ScrollProgress />
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
          404
        </h1>
        <p className="text-sibyl-gray text-2xl mb-8">
          This page doesn't exist in the cards.
        </p>
        <a 
          href="/" 
          className="inline-block bg-white text-black px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-colors"
        >
          Return Home
        </a>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;