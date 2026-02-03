import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { ArrowUp } from 'lucide-react';

// This is your current homepage content, wrapped in a component
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
      {/* Global Noise Texture Overlay - Subtle Grain for Film Look */}
      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <SEO />
      <Header />

      <main>
        <Hero />

        <AboutSection />

        {/* Marquee Break - Brutalist Style */}
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

      {/* Back to Top Button */}
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

// Simple placeholder for /readings
function ReadingsPage() {
  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO />
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Readings
        </h1>
        <p className="text-sibyl-gray text-lg">
          This is where your readings overview will live. You can link to specific
          spreads, explain your process, or list offerings here.
        </p>
      </main>
      <Footer />
    </div>
  );
}

// Simple placeholder for /readings/sample
function SampleReadingPage() {
  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO />
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Sample Reading
        </h1>
        <p className="text-sibyl-gray text-lg mb-4">
          This is a placeholder for your sample reading page at /readings/sample.
        </p>
        <p className="text-sibyl-gray text-lg">
          You can move your existing sample HTML/audio/images into a proper React
          layout here.
        </p>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/readings" element={<ReadingsPage />} />
      <Route path="/readings/sample" element={<SampleReadingPage />} />
    </Routes>
  );
}

export default App;