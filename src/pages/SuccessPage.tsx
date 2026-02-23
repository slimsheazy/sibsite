import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckCircle, Mail, Calendar } from 'lucide-react';

export function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-sibyl-dark text-white selection:bg-white selection:text-black">
      <SEO 
        title="Order Confirmed | Sibylhaus"
        description="Your tarot reading has been confirmed. Check your email for details."
        url="https://sibylhaus.com/success"
      />
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <CheckCircle className="w-20 h-20 mx-auto mb-8 text-green-500" />
        
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Order Confirmed!
        </h1>
        
        <p className="text-xl text-sibyl-gray mb-12">
          Thank you for booking your tarot reading with Sibylhaus
        </p>

        <div className="bg-sibyl-accent border border-sibyl-gray p-8 mb-8 text-left">
          <h2 className="text-2xl font-display font-bold mb-6">What Happens Next</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">1. Check Your Email</h3>
                <p className="text-sibyl-gray">
                  You'll receive a confirmation email with your order details and a form to submit your question.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Calendar className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">2. Submit Your Question</h3>
                <p className="text-sibyl-gray">
                  Fill out the form with your question or intention for the reading. The more specific, the better.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">3. Receive Your Reading</h3>
                <p className="text-sibyl-gray">
                  Your personalized tarot reading (audio + visual dashboard) will be delivered to your email within the specified timeframe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {sessionId && (
          <p className="text-sm text-sibyl-gray mb-8">
            Order ID: {sessionId}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-block bg-white text-black px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-sibyl-gray hover:text-white border border-white transition-colors"
          >
            Back to Home
          </a>
          <a
            href="/services"
            className="inline-block bg-transparent text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black border border-white transition-colors"
          >
            Book Another Reading
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
