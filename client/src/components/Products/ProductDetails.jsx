import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addToCart } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { loadStripe } from "@stripe/stripe-js";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { model } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/data.json`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const selectedPhone = data.phones.find(
          (phone) => phone.model === decodeURIComponent(model)
        );
        setTimeout(() => {
          setPhone(selectedPhone);
          setLoading(false);
        }, 2000); // Simulate 2 seconds loading time
      } catch (error) {
        console.error("Error fetching phone details:", error);
        setError(
          "Error fetching phone details. Please check the console for more details."
        );
        setLoading(false);
      }
    };

    fetchPhoneDetails();
  }, [model]);

  const handleBackNavigation = () => {
    navigate(-1);
  };

  const renderPhoneFeatures = () => {
    if (!phone || !phone.features) return null;

    const features = [
      { label: "DISPLAY", value: phone.features.display },
      { label: "RAM", value: phone.features.ram },
      { label: "PROCESSOR", value: phone.features.processor },
      { label: "STORAGE", value: phone.features.storage },
      { label: "BATTERY", value: phone.features.battery },
    ];

    return (
      <ul className="mt-6 space-y-6 text-[#333] dark:text-white font-bold text-xl font-mono">
        {features.map((feature) => (
          <li key={feature.label} className="text-sm">
            {feature.label}
            <span className="ml-4 float-right">{feature.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Function to handle adding to cart
  const send = (phone) => {
    dispatch(addToCart(phone));
    toast.success("Item Added To Your Cart!");
  };

  // Function to handle payment
  const handlePayment = async () => {
    const stripe = await loadStripe("pk_test_51PRcK7IuK6CXozMpWeX81MOSLWMMRJIUhU38jchyyO5OfJFlgzWZhxiVoPzrNiTcjG42cARLxJU85rCVqsED6oO100XEnZrK6W");
  
    const productWithDefaultQuantity = { ...phone, quantity: 1 }; // Set quantity to 1 if not specified
  
    const body = {
      products: [productWithDefaultQuantity], // Assuming only one product is being purchased
    };
    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
      const response = await fetch("http://localhost:7000/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
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
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div>
          <Skeleton height={40} width={100} className="mb-4 mt-20 " />
          <div className="font-sans bg-white dark:bg-gray-900">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
              <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 border-2 rounded-md border-black shadow-xl dark:bg-gray-900 shadow-black p-6">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center ">
                  <Skeleton height={400} width={"100%"} className="mb-6" />
                </div>
                <div className="lg:col-span-2">
                  <Skeleton height={40} width={300} className="mb-2 " />
                  <Skeleton height={20} width={150} className="mb-4" />
                  <Skeleton height={30} width={100} className="mb-4" />
                  <Skeleton height={20} width={"100%"} className="mb-2" />
                  <Skeleton height={20} width={"100%"} className="mb-2" />
                  <Skeleton height={20} width={"100%"} className="mb-2" />
                  <Skeleton height={20} width={"100%"} className="mb-2" />
                  <Skeleton height={20} width={"100%"} className="mb-2" />
                  <div className="flex flex-wrap gap-4 mt-10">
                    <Skeleton height={50} width={200} />
                    <Skeleton height={50} width={200} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : phone ? (
        <div>
          <button
            onClick={handleBackNavigation}
            className="mb-4 mt-20 min-w-[100px] px-4 py-3 border-2 bg-black border-black hover:bg-white hover:text-black text-white text-sm font-semibold rounded"
          >
            Back
          </button>
          <div className="font-sans bg-white dark:bg-gray-900">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
              <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 border-2 rounded-md border-black shadow-xl shadow-black p-6">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                  <div className="px-4 py-10 rounded-xl border-4 border-black relative dark:bg-gray-800">
                    <img
                      src={phone.images[0]} // Ensure `phone.images` contains valid URL(s)
                      className="w-full h-96 object-contain"
                      alt={phone.model}
                    />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-extrabold text-[#333] dark:text-white">
                    {phone.model}
                  </h2>
                  <h4 className="text-lg font-bold text-[#333] dark:text-white">
                    Brand: {phone.brand}
                  </h4>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <p className="text-[#333] text-3xl font-bold dark:text-white">
                      {phone.price}
                    </p>
                  </div>

                  <div className="mt-2 bg-slate-100 dark:bg-gray-800 p-3 rounded-md ">
                    <h3 className="text-xl font-bold text-[#333] text-center underline dark:text-white ">
                      Phone Features
                    </h3>
                    {renderPhoneFeatures()}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <button
                      onClick={handlePayment}
                      type="button"
                      className="min-w-[200px] px-4 py-3 border-2 bg-black text-white hover:bg-white hover:text-black border-black transition-colors duration-300 text-sm font-semibold rounded"
                    >
                      Buy now
                    </button>
                    <button
                      onClick={() => send(phone)}
                      type="button"
                      className="min-w-[200px] px-4 py-2.5 border-2 border-black bg-transparent hover:bg-black dark:text-white dark:hover:text-white text-black hover:text-white transition text-sm font-semibold rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No phone details found for {model}</p>
      )}
    </div>
  );
};

export default ProductDetails;
