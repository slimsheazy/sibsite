export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  stripePriceId: string; // Your Stripe Price ID
  icon: string;
  duration: string;
  features: string[];
}

// Replace these stripePriceIds with your actual Stripe Price IDs from your Stripe Dashboard
export const products: Product[] = [
  {
    id: 'single-card',
    name: 'Single Card Reading',
    description: 'Quick clarity for daily guidance. Perfect for when you need a snapshot of energy, insight, or direction.',
    price: 15,
    currency: 'USD',
    stripePriceId: 'price_XXXXXXXXXX', // IMPORTANT: Replace with your actual Stripe Price ID
    icon: 'zap',
    duration: '24-hour delivery',
    features: [
      'One card pull',
      'Intuitive interpretation',
      'Audio recording',
      'Digital delivery'
    ]
  },
  {
    id: 'love-reading',
    name: 'Love & Relationships',
    description: 'Three-card spreads exploring dynamics, decisions, and the path forward in matters of the heart.',
    price: 35,
    currency: 'USD',
    stripePriceId: 'price_XXXXXXXXXX', // IMPORTANT: Replace with your actual Stripe Price ID
    icon: 'heart',
    duration: '48-hour delivery',
    features: [
      'Three-card spread',
      'Relationship insights',
      '10-minute audio',
      'Visual dashboard',
      'PDF summary'
    ]
  },
  {
    id: 'career-reading',
    name: 'Career & Purpose',
    description: 'Multi-card layouts for navigating professional crossroads, finding alignment, and making big moves.',
    price: 40,
    currency: 'USD',
    stripePriceId: 'price_XXXXXXXXXX', // IMPORTANT: Replace with your actual Stripe Price ID
    icon: 'briefcase',
    duration: '48-hour delivery',
    features: [
      'Multi-card layout',
      'Career guidance',
      '12-minute audio',
      'Visual dashboard',
      'PDF summary'
    ]
  },
  {
    id: 'life-path',
    name: 'Life Path Reading',
    description: 'Deep-dive sessions with audio commentary and visual dashboards. For pivotal moments and major transitions.',
    price: 75,
    currency: 'USD',
    stripePriceId: 'price_XXXXXXXXXX', // Replace with your Stripe Price ID
    icon: 'compass',
    duration: '3-5 day delivery',
    features: [
      'Comprehensive spread',
      'Deep insights',
      '15-20 minute audio',
      'Custom visual dashboard',
      'Detailed PDF report',
      'Follow-up email support'
    ]
  }
];
