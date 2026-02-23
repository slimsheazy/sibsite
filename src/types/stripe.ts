export interface StripeCheckoutSession {
  id: string;
  url: string;
}

export interface CheckoutRequest {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
}
