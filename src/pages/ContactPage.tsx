import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { useParallax } from '../hooks/useParallax';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

export function ContactPage() {
  const parallaxOffset = useParallax(0.15);

  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="Contact | Get in Touch with Sibylhaus"
        description="Connect with Sibylhaus for custom readings, collaborations, or questions. Available via Etsy messages and Instagram DMs."
        url="https://sibylhaus.com/contact"
      />
      <ScrollProgress />
      <Header />

      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="text-[200px] absolute top-0 left-1/4">☆</div>
          <div className="text-[150px] absolute bottom-0 right-1/4">✵</div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-sibyl-gray">
            Questions, custom readings, or collaborations
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a
            href="https://sibylhaus.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-sibyl-accent border border-sibyl-gray p-10 hover:border-white transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <Mail className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-display font-bold mb-4">Shop & Message</h2>
            <p className="text-sibyl-gray mb-6 leading-relaxed">
              Browse readings and send direct messages through our Etsy shop for booking 
              inquiries or custom requests.
            </p>
            <div className="flex items-center gap-2 text-white font-bold">
              Visit Etsy <ExternalLink className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://instagram.com/sibylhaus.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-sibyl-accent border border-sibyl-gray p-10 hover:border-white transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <Instagram className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-display font-bold mb-4">Follow & DM</h2>
            <p className="text-sibyl-gray mb-6 leading-relaxed">
              Stay updated on new offerings, behind-the-scenes content, and tarot insights. 
              DMs open for questions.
            </p>
            <div className="flex items-center gap-2 text-white font-bold">
              Follow on Instagram <ExternalLink className="w-5 h-5" />
            </div>
          </a>
        </div>

        <section className="bg-sibyl-accent border border-sibyl-gray p-10 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Response Time</h2>
          <p className="text-sibyl-gray text-lg leading-relaxed max-w-2xl mx-auto">
            All messages are answered within 24-48 hours. For reading bookings, you'll receive 
            a confirmation and timeline right after purchase. Custom requests may take 
            slightly longer depending on complexity.
          </p>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Common Questions</h2>
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">How long are readings?</h3>
              <p className="text-sibyl-gray">
                Single cards are brief snapshots. Multi-card spreads include 5-15 minute audio 
                recordings with visual dashboards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can I request a specific spread?</h3>
              <p className="text-sibyl-gray">
                Absolutely. Message on Etsy with your question and preferred layout, or choose 
                a custom reading option.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer live sessions?</h3>
              <p className="text-sibyl-gray">
                Not currently. All readings are pre-recorded and delivered digitally so you can 
                revisit them anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
