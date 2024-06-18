const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const successUrl =
  process.env.NODE_ENV === "production"
    ? process.env.SUCCESS_URL_PROD
    : process.env.SUCCESS_URL_DEV;
const cancelUrl =
  process.env.NODE_ENV === "production"
    ? process.env.CANCEL_URL_PROD
    : process.env.CANCEL_URL_DEV;
app.use(express.json());
app.use(cors({
  origin: "https://phone-hub-ivory.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ error: "No products provided" });
    }

    const lineItems = products.map((product) => {
      const unitAmount = parseFloat(product.price.replace(/[$,]/g, "")) * 100;
      if (isNaN(unitAmount)) {
        throw new Error(`Invalid price for product ${product.model}`);
      }
    
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.model,
          },
          unit_amount: unitAmount,
        },
        quantity: product.quantity || 1, // Set default quantity to 1 if not provided
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl, // Replace with your success URL
      cancel_url: cancelUrl, // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, Express is running!");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
