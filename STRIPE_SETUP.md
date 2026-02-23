# Stripe Checkout Integration Setup

This guide will help you set up Stripe checkout for your Sibylhaus tarot readings.

## Two Options for Implementation

### Option 1: Stripe Payment Links (Easiest - No Backend Required)

This is the fastest way to get started. Perfect for small businesses and MVPs.

#### Steps:

1. **Create Products in Stripe Dashboard**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com/products)
   - Click "Add Product"
   - For each reading type:
     - Name: "Single Card Reading" (or other service name)
     - Description: Add your service description
     - Price: Set your price (e.g., $15)
     - Click "Save product"

2. **Create Payment Links**
   - In each product, click "Create payment link"
   - Configure:
     - Success URL: `https://sibylhaus.com/success`
     - Cancel URL: `https://sibylhaus.com/cancel`
     - Enable "Collect customer email"
     - Click "Create link"
   - Copy the payment link URL

3. **Update Your Code**
   
   Edit `src/services/stripe.ts`:
   ```typescript
   const paymentLinks: Record<string, string> = {
   const paymentLinks: Record<string, string> = {
     'price_XXXXXXXXXX': 'https://buy.stripe.com/test_XXXXX', // Single Card
     'price_YYYYYYYYYY': 'https://buy.stripe.com/test_YYYYY', // Love Reading
     'price_ZZZZZZZZZZ': 'https://buy.stripe.com/test_ZZZZZ', // Career Reading
     'price_WWWWWWWWWW': 'https://buy.stripe.com/test_WWWWW', // Life Path
   };
   ```
   
   Edit `src/config/products.ts`:
   ```typescript
   stripePriceId: 'price_XXXXXXXXXX', // Your actual Stripe Price ID
   ```

4. **Deploy**
   - Push your changes
   - Deploy to Vercel/Netlify
   - Test with Stripe test mode

**Pros:**
- No backend required
- Super easy setup
- Stripe handles everything
- Works immediately

**Cons:**
- Less customization
- Can't add custom metadata easily
- Redirects to Stripe-hosted page

---

### Option 2: Stripe Checkout Sessions (Full Control - Requires Backend)

This gives you more control but requires a backend server.

#### Steps:

1. **Install Stripe SDK**
   ```bash
   npm install stripe
   npm install @stripe/stripe-js
   ```

2. **Create Backend Endpoint**
   
   If using Vercel, create `api/create-checkout-session.ts`:
   ```typescript
   import Stripe from 'stripe';
   import { VercelRequest, VercelResponse } from '@vercel/node';

   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
     apiVersion: '2023-10-16',
   });

   export default async function handler(
     req: VercelRequest,
     res: VercelResponse
   ) {
     if (req.method !== 'POST') {
       return res.status(405).json({ error: 'Method not allowed' });
     }

     try {
       const { priceId, successUrl, cancelUrl, customerEmail } = req.body;

       const session = await stripe.checkout.sessions.create({
         mode: 'payment',
         line_items: [{ price: priceId, quantity: 1 }],
         success_url: successUrl,
         cancel_url: cancelUrl,
         customer_email: customerEmail,
         allow_promotion_codes: true,
       });

       res.status(200).json({ id: session.id, url: session.url });
     } catch (error) {
       console.error('Stripe checkout session creation failed:', error);
       res.status(500).json({ error: (error as Error).message });
     }
   }
   ```

3. **Update Frontend**
   
   In `src/pages/ServicesPage.tsx`, uncomment the backend option:
   ```typescript
   // Option 2: Create checkout session via backend
   const session = await createCheckoutSession(
     stripePriceId,
     `${window.location.origin}/success`,
     `${window.location.origin}/services`
   );
   window.location.href = session.url;
   ```

4. **Set Environment Variables**
   ```bash
   # .env.local
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

**Pros:**
- Full control over checkout flow
- Can add custom metadata
- Can send webhooks to your server
- Better tracking and analytics

**Cons:**
- Requires backend infrastructure
- More complex setup
- Need to handle webhooks for fulfillment

---

## Getting Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click "Developers" → "API Keys"
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`) - only for backend

**Important:** 
- Use test keys (`pk_test_` / `sk_test_`) for development
- Use live keys (`pk_live_` / `sk_live_`) for production
- Never commit secret keys to Git

---

## Testing

### Test Cards
Use these test card numbers in Stripe test mode:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Auth required:** `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

### Test Flow
1. Go to `/services` page
2. Click "Book Now" on any reading
3. Complete checkout with test card
4. Verify redirect to `/success` page
5. Check Stripe Dashboard for the payment

---

## Recommended: Option 1 for MVP

For getting started quickly, **use Option 1 (Payment Links)**. You can always migrate to Option 2 later when you need more control.

---

## Going Live

1. **Switch to Live Mode**
   - In Stripe Dashboard, toggle "Test mode" to "Live mode"
   - Get your live API keys
   - Update environment variables

2. **Update Payment Links**
   - Create new payment links in live mode
   - Update `src/services/stripe.ts` with live links

3. **Test in Production**
   - Use a real card with small amount
   - Verify email delivery
   - Check success/cancel pages

4. **Set Up Webhooks** (Optional but recommended)
   - Go to Stripe Dashboard → Webhooks
   - Add endpoint for order fulfillment
   - Listen for `checkout.session.completed` event

---

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Payment Links Guide](https://stripe.com/docs/payment-links)
- [Checkout Sessions Guide](https://stripe.com/docs/payments/checkout)
