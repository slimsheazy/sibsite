import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { XCircle } from 'lucide-react';

export function CancelPage() {
  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="Checkout Cancelled | Sibylhaus"
        description="Your checkout was cancelled. Browse our tarot reading services."
        url="https://sibylhaus.com/cancel"
      />
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <XCircle className="w-20 h-20 mx-auto mb-8 text-sibyl-gray" />
        
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Checkout Cancelled
        </h1>
        
        <p className="text-xl text-sibyl-gray mb-12">
          No worries—your order was not completed. Feel free to browse our services and come back when you're ready.
        </p>

        <div className="bg-sibyl-accent border border-sibyl-gray p-8 mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Need Help?</h2>
          <p className="text-sibyl-gray mb-6">
            If you experienced any issues during checkout or have questions about our readings, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sibylhaus.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-white px-6 py-3 font-display font-bold uppercase tracking-wider hover:bg-white hover:text-black border border-white transition-colors"
            >
              Message on Etsy
            </a>
            <a
              href="https://instagram.com/sibylhaus.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-white px-6 py-3 font-display font-bold uppercase tracking-wider hover:bg-white hover:text-black border border-white transition-colors"
            >
              DM on Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="inline-block bg-white text-black px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-colors"
          >
            Back to Services
          </a>
          <a
            href="/"
            className="inline-block bg-transparent text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black border border-white transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
