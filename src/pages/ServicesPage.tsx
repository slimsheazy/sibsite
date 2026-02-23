import { useState } from 'react';
import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { useParallax, useInView } from '../hooks/useParallax';
import { Zap, Heart, Briefcase, Compass, ShoppingCart, Loader2 } from 'lucide-react';
import { products } from '../config/products';
import { redirectToStripeCheckout } from '../services/stripe';

const iconMap = {
  zap: Zap,
  heart: Heart,
  briefcase: Briefcase,
  compass: Compass,
};

export function ServicesPage() {
  const parallaxOffset = useParallax(0.2);
  const [heroRef, heroInView] = useInView();
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const handleCheckout = async (productId: string, stripePriceId: string) => {
    setLoadingProductId(productId);
    try {
      // Option 1: Direct redirect to Stripe Payment Link (easiest, no backend)
      redirectToStripeCheckout(stripePriceId);
      
      // Option 2: Create checkout session via backend (uncomment if you have backend)
      // const session = await createCheckoutSession(
      //   stripePriceId,
      //   `${window.location.origin}/success`,
      //   `${window.location.origin}/services`
      // );
      // window.location.href = session.url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
      setLoadingProductId(null);
    }
  };

  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="Services | Tarot Readings by Sibylhaus"
        description="Explore our range of intuitive tarot services: single card snapshots, love readings, career guidance, and life path deep dives. Audio + visual delivery."
        url="https://sibylhaus.com/services"
      />
      <ScrollProgress />
      <Header />

      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="text-9xl absolute top-10 left-10">☆</div>
          <div className="text-7xl absolute bottom-20 right-20">★</div>
        </div>

        <div 
          ref={heroRef}
          className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Tarot Services
          </h1>
          <p className="text-xl md:text-2xl text-sibyl-gray">
            Choose the reading that fits your question
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ServiceCard 
              key={product.id} 
              product={product} 
              delay={index * 100}
              onCheckout={() => handleCheckout(product.id, product.stripePriceId)}
              isLoading={loadingProductId === product.id}
            />
          ))}
        </div>

        <section className="mt-24 pt-16 border-t border-sibyl-accent">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-white mb-4">01</div>
              <h3 className="text-2xl font-display font-bold mb-3">Choose & Book</h3>
              <p className="text-sibyl-gray">
                Select your reading type and complete secure checkout with Stripe.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-white mb-4">02</div>
              <h3 className="text-2xl font-display font-bold mb-3">Receive</h3>
              <p className="text-sibyl-gray">
                Get your personalized audio reading + visual dashboard delivered digitally.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-white mb-4">03</div>
              <h3 className="text-2xl font-display font-bold mb-3">Reflect</h3>
              <p className="text-sibyl-gray">
                Revisit anytime for journaling, clarity, or deeper insight.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-sibyl-accent border border-sibyl-gray p-8 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Secure Payment</h3>
          <p className="text-sibyl-gray max-w-2xl mx-auto">
            All payments are processed securely through Stripe. We never see or store your payment information.
            You'll receive a confirmation email immediately after purchase.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface ServiceCardProps {
  product: typeof products[0];
  delay: number;
  onCheckout: () => void;
  isLoading: boolean;
}

function ServiceCard({ product, delay, onCheckout, isLoading }: ServiceCardProps) {
  const [ref, inView] = useInView();
  const Icon = iconMap[product.icon as keyof typeof iconMap];

  return (
    <div
      ref={ref}
      className={`bg-sibyl-accent border border-sibyl-gray p-8 transition-all duration-1000 hover:border-white group ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-display font-bold mb-4">{product.name}</h3>
      <p className="text-sibyl-gray mb-6 leading-relaxed">{product.description}</p>
      
      <div className="mb-6">
        <ul className="space-y-2 text-sm text-sibyl-gray">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-white">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-sibyl-gray mb-6">
        <span className="text-sm text-sibyl-gray">{product.duration}</span>
        <span className="text-2xl font-bold">${product.price}</span>
      </div>

      <button
        onClick={onCheckout}
        disabled={isLoading}
        className="w-full bg-white text-black px-6 py-3 font-display font-bold uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Book Now
          </>
        )}
      </button>
    </div>
  );
}
