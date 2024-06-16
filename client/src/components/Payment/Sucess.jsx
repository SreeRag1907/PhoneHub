import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white mt-10 p-6 md:p-12 mx-auto max-w-md rounded-lg shadow-md">
        <motion.svg
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </motion.svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-lg text-gray-900 font-bold">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p className="text-gray-600 my-2">Have a great day!</p>
          <div className="py-6 text-center">
            
        <button
          className="text-sm px-4 py-2.5 font-semibold tracking-wide bg-transparent text-gray-800 border-2 border-black hover:bg-black hover:text-white transition rounded-sm"
          onClick={handleGoBack}
        >
          Continue Shopping
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
