// api/checkout-intent.js — Amigos Custom Checkout
// Creates a Stripe PaymentIntent for the custom checkout page

const Stripe = require('stripe');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { items, shippingCost, email, name, address } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items in cart' });
    }

    // Calculate total in pence
    const subtotal = items.reduce((sum, item) => sum + (item.priceNumber * item.qty), 0);
    const shipping = typeof shippingCost === 'number' ? shippingCost : 399;
    const total    = subtotal + shipping;

    // Build order description for Stripe dashboard
    const description = items
      .map(i => `${i.name} (${i.variant}, Size ${i.size}) x${i.qty}`)
      .join(', ');

    const paymentIntent = await stripe.paymentIntents.create({
      amount:   total,
      currency: 'gbp',
      automatic_payment_methods: { enabled: true },
      description,
      receipt_email: email || undefined,
      metadata: {
        customer_name: name || '',
        customer_email: email || '',
        item_count: items.length,
        order_summary: description.substring(0, 500),
        shipping_cost: shipping,
      },
      shipping: address ? {
        name: name || '',
        address: {
          line1:       address.line1       || '',
          line2:       address.line2       || '',
          city:        address.city        || '',
          postal_code: address.postal_code || '',
          country:     address.country     || 'GB',
        }
      } : undefined,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });

  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
}