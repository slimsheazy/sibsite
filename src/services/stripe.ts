import { CheckoutRequest, StripeCheckoutSession } from '../types/stripe';

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// Client-side function to create checkout session via your backend
export async function createCheckoutSession(
  priceId: string,
  successUrl: string,
  cancelUrl: string,
  customerEmail?: string
): Promise<StripeCheckoutSession> {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId,
      successUrl,
      cancelUrl,
      customerEmail,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create checkout session');
  }

  return response.json();
}

// Alternative: Direct Stripe Checkout (client-only, for Stripe Payment Links)
export function redirectToStripeCheckout(priceId: string) {
  // For testing/MVP: You can use Stripe Payment Links directly
  // Go to Stripe Dashboard > Products > Click product > Create Payment Link
  // Then use that link instead of creating sessions
  
  const paymentLink = getPaymentLinkForPrice(priceId);
  if (paymentLink) {
    window.location.href = paymentLink;
  }
}

// Map price IDs to Stripe Payment Links (easiest option, no backend needed)
function getPaymentLinkForPrice(priceId: string): string | null {
  // Replace these with your actual Stripe Payment Link URLs
  const paymentLinks: Record<string, string> = {
    'price_XXXXXXXXXX': 'https://buy.stripe.com/test_XXXXX', // Single Card
    'price_YYYYYYYYYY': 'https://buy.stripe.com/test_YYYYY', // Love Reading
    'price_ZZZZZZZZZZ': 'https://buy.stripe.com/test_ZZZZZ', // Career Reading
    'price_WWWWWWWWWW': 'https://buy.stripe.com/test_WWWWW', // Life Path
  };
  
  return paymentLinks[priceId] || null;
}

export function getStripePublishableKey(): string | undefined {
  return STRIPE_PUBLISHABLE_KEY;
}
