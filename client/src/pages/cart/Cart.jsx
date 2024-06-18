import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItems"; // Ensure the correct import path
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { emptyCartItem } from "../../redux/features/cartSlice"; // Ensure the correct import path
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.allCart);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleEmptyCart = () => {
    dispatch(emptyCartItem());
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      carts.forEach((item) => {
        const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
        totalPrice += itemPrice * item.quantity;
      });
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [carts]);

  // payment
  const handlePayment = async () => {
    const stripe = await loadStripe("pk_test_51PRcK7IuK6CXozMpWeX81MOSLWMMRJIUhU38jchyyO5OfJFlgzWZhxiVoPzrNiTcjG42cARLxJU85rCVqsED6oO100XEnZrK6W");

    const body = {
      products: carts,
    };
    const headers = {
      "Content-Type": "application/json",
    };

 
    try {
      const serverAddress = process.env.NODE_ENV === 'production' && 'https://phone-hub-server-zeta.vercel.app';
      const response = await fetch(`${serverAddress}/api/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create checkout session. Status: ${response.status}`);
      }
  
      const session = await response.json();
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        console.error("Error redirecting to Checkout:", result.error);
        toast.error("Error redirecting to Checkout. Please try again.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Error creating checkout session. Please try again.");
    }
  };


  return (
    <div className="h-auto flex flex-col justify-between max-w-5xl max-md:max-w-xl mx-auto bg-white py-14 p-5 font-mono dark:bg-gray-900 ">
      <div>
        <h1 className="text-3xl font-bold mt-24 text-gray-800 text-center dark:text-white ">Shopping Cart</h1>

        {carts.length === 0 ? (
          <div className="text-center mt-12 dark:bg-gray-900">
            <img
              src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
              alt="empty"
              className="w-54 h-64 mx-auto"
            />
            <h2 className="text-xl mt-3 font-semibold text-gray-700 dark:text-white">Your cart is empty</h2>
            <button
              className="mt-4 text-sm px-4 py-2.5 font-semibold tracking-wide rounded-lg border-2 transition border-black bg-black hover:bg-white hover:text-black text-white"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex justify-end">
                <button
                  className="flex justify-end gap-2 bg-red-700 text-white  p-2 rounded-lg hover:bg-red-600"
                  onClick={handleEmptyCart}
                >
                  Empty Cart
                  <FaTrash className="text-white w-4 h-4 mt-1" />
                </button>
              </div>
              <div className="text-white bg-black h-12 flex items-center justify-between px-4 rounded-sm">
                <span>Name</span>
                <div className="flex gap-16">
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                </div>
              </div>
              {carts.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>

            <div>
              <OrderSummary
                handleContinueShopping={handleContinueShopping}
                handlePayment={handlePayment}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
