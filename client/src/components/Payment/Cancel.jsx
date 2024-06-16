import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white mt-20 p-6 md:p-12 mx-auto max-w-md rounded-lg shadow-md">
        <motion.svg
          initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          viewBox="0 0 24 24"
          className="text-red-600 w-16 h-16 mx-auto my-6"
        >
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-lg text-gray-900 font-semibold">
            Payment Failed!
          </h3>
          <p className="text-gray-600 my-2">
            Your payment could not be processed at this time.
          </p>
          <p className="text-gray-600 my-2">
            Please try again later or contact support.
          </p>
          <div className="py-6 text-center">
            <button
              onClick={handleGoBack}
              className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-lg"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
