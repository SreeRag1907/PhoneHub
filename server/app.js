const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")("sk_test_51PRcK7IuK6CXozMpf6h9Jp0pK8lNgSlQV8cSXXDcUWJVTX8SVZNA5k4AuMtCVXjaVi8cJ1MEXriJCxdiq3VKMihY00IzOG0HFy");

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body;

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
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "your_success_url",
      cancel_url: "your_cancel_url",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hello, Express is running!");
});

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
