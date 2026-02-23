import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { useParallax, useInView } from '../hooks/useParallax';
import { Zap, Heart, Briefcase, Compass } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Single Card Reading',
    description: 'Quick clarity for daily guidance. Perfect for when you need a snapshot of energy, insight, or direction.',
    duration: '24-hour delivery',
    price: 'Starting at $15',
  },
  {
    icon: Heart,
    title: 'Love & Relationships',
    description: 'Three-card spreads exploring dynamics, decisions, and the path forward in matters of the heart.',
    duration: '48-hour delivery',
    price: 'Starting at $35',
  },
  {
    icon: Briefcase,
    title: 'Career & Purpose',
    description: 'Multi-card layouts for navigating professional crossroads, finding alignment, and making big moves.',
    duration: '48-hour delivery',
    price: 'Starting at $40',
  },
  {
    icon: Compass,
    title: 'Life Path Reading',
    description: 'Deep-dive sessions with audio commentary and visual dashboards. For pivotal moments and major transitions.',
    duration: '3-5 day delivery',
    price: 'Starting at $75',
  },
];

export function ServicesPage() {
  const parallaxOffset = useParallax(0.2);
  const [heroRef, heroInView] = useInView();

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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 100} />
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
                Select your reading type on Etsy and share your question or intention.
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

        <section className="text-center mt-20">
          <a
            href="https://sibylhaus.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-12 py-5 font-display font-bold text-xl uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-all transform hover:scale-105"
          >
            Book a Reading
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const [ref, inView] = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`bg-sibyl-accent border border-sibyl-gray p-8 transition-all duration-1000 hover:border-white group ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
      <p className="text-sibyl-gray mb-6 leading-relaxed">{service.description}</p>
      <div className="flex justify-between items-center pt-4 border-t border-sibyl-gray">
        <span className="text-sm text-sibyl-gray">{service.duration}</span>
        <span className="text-lg font-bold">{service.price}</span>
      </div>
    </div>
  );
}
