import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { useParallax, useInView } from '../hooks/useParallax';
import { Sparkles, Moon, Stars } from 'lucide-react';

export function AboutPage() {
  const parallaxOffset = useParallax(0.3);
  const [section1Ref, section1InView] = useInView();
  const [section2Ref, section2InView] = useInView();
  const [section3Ref, section3InView] = useInView();

  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="About Sibylhaus | Intuitive Tarot & Modern Mysticism"
        description="Discover the story behind Sibylhaus. No gatekeeping, no pretense—just honest tarot readings that blend traditional symbolism with contemporary insight."
        url="https://sibylhaus.com/about"
      />
      <ScrollProgress />
      <Header />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 left-10 text-6xl">✦</div>
          <div className="absolute top-40 right-20 text-4xl">✧</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">⋆</div>
          <div className="absolute top-1/3 right-1/3 text-3xl">◇</div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            About Sibylhaus
          </h1>
          <p className="text-xl md:text-2xl text-sibyl-gray">
            Where logic meets intuition
          </p>
        </div>
      </section>

      {/* Content Sections with Fade-in Animations */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Section 1 */}
        <section 
          ref={section1Ref}
          className={`transition-all duration-1000 ${
            section1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block mt-2">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                No Sugarcoating
              </h2>
              <p className="text-lg text-sibyl-gray leading-relaxed mb-4">
                Sibylhaus was created for people who want more than generic horoscopes and 
                mystical gatekeeping. This is tarot for the modern seeker—intuitive, grounded, 
                and free of pretense.
              </p>
              <p className="text-lg text-sibyl-gray leading-relaxed">
                Each reading blends traditional tarot symbolism with contemporary storytelling 
                to create guidance that feels accessible, honest, and deeply personal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section 
          ref={section2Ref as any}
          className={`transition-all duration-1000 ${
            section2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block mt-2">
              <Moon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Intuition Meets Practice
              </h2>
              <p className="text-lg text-sibyl-gray leading-relaxed mb-4">
                Whether you're navigating a relationship crossroads, making a career decision, 
                or simply seeking clarity on what's next, Sibylhaus readings offer a reflective 
                space to explore your questions.
              </p>
              <p className="text-lg text-sibyl-gray leading-relaxed">
                This isn't fortune-telling—it's a tool for self-reflection, designed to support 
                the decisions you're already working through.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section 
          ref={section3Ref as any}
          className={`transition-all duration-1000 ${
            section3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block mt-2">
              <Stars className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Digital, Personal, Repeatable
              </h2>
              <p className="text-lg text-sibyl-gray leading-relaxed mb-4">
                All readings are delivered as audio recordings with visual dashboards—perfect 
                for revisiting when you need a reminder, journaling alongside, or simply 
                sitting with the insights over time.
              </p>
              <p className="text-lg text-sibyl-gray leading-relaxed">
                Each session is crafted specifically for you, combining card imagery, 
                intuitive interpretation, and practical guidance in one cohesive digital experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 border-t border-sibyl-accent">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to begin?
          </h2>
          <p className="text-xl text-sibyl-gray mb-8">
            Explore readings on Etsy or follow along on Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sibylhaus.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-colors"
            >
              Shop on Etsy
            </a>
            <a
              href="https://instagram.com/sibylhaus.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black border border-white transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
