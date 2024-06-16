import React from "react";
import { FaShippingFast, FaRegCheckCircle, FaLock, FaHeadset } from "react-icons/fa";

export default function Details() {
  return (
    <>
      <div className="bg-gray-100 mx-16 rounded-2xl text-center p-4 mt-5 dark:bg-gray-900">
        <h1 className="text-center font-bold mt-5 text-4xl dark:text-white">Our Services</h1>
        <div className="container mx-auto my-5 md:my-20 px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start sm:items-center gap-4 bg-white shadow-md p-4 rounded-lg dark:bg-gray-700">
              <FaShippingFast className="text-4xl md:text-5xl text-red-600" />
              <div>
                <h1 className="text-lg lg:text-xl font-bold dark:text-white">Free Shipping</h1>
                <p className="text-gray-400 text-sm dark:text-gray-300">Free Shipping On All Orders</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-4 bg-white shadow-md p-4 rounded-lg dark:bg-gray-700">
              <FaRegCheckCircle className="text-4xl md:text-5xl text-red-600" />
              <div>
                <h1 className="text-lg lg:text-xl font-bold dark:text-white">Safe Money</h1>
                <p className="text-gray-400 text-sm dark:text-gray-300">30 Days Money Back</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-4 bg-white shadow-md p-4 rounded-lg dark:bg-gray-700">
              <FaLock className="text-4xl md:text-5xl text-red-600" />
              <div>
                <h1 className="text-lg lg:text-xl font-bold dark:text-white">Secure Payment</h1>
                <p className="text-gray-400 text-sm dark:text-gray-300">All Payment Secure</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-4 bg-white shadow-md p-4 rounded-lg dark:bg-gray-700">
              <FaHeadset className="text-4xl md:text-5xl text-red-600" />
              <div>
                <h1 className="text-lg lg:text-xl font-bold dark:text-white">Online Support 24/7</h1>
                <p className="text-gray-400 text-sm dark:text-gray-300">Technical Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
