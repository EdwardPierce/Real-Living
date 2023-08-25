import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { image, price, name } = req.body;

    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",

        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: name,
              },
              unit_amount: price * 100,
            },
            adjustable_quantity: {
              enabled: false,
            },
            quantity: 1,
          },
        ],

        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      //   res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      console.log(err.message);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
