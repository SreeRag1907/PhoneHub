import React from "react";

const OrderSummary = ({ handleContinueShopping, handlePayment, totalPrice }) => {
  const subtotal = totalPrice.toFixed(2);
  const total = subtotal;

  return (
    <div className="mt-10 bg-gray-50 dark:bg-gray-800  rounded-sm p-6 shadow-md font-mono">
      <h3 className="text-xl text-center font-bold text-gray-800 border-b border-gray-300 pb-2 dark:text-white">
        Order Summary
      </h3>

      <OrderSummaries subtotal={subtotal}  total={total} />

      <div className="mt-4 space-y-2">
        <button
          onClick={handlePayment}
          className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-black hover:bg-gray-900 text-white rounded-sm"
        >
          Checkout
        </button>
        <button
          className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border-2 border-black hover:bg-black hover:text-white dark:bg-white hover:dark:bg-black transition rounded-sm"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const OrderSummaries = ({ subtotal,  total }) => (
  <ul className="text-gray-800 mt-4 space-y-2 text-lg bg-white p-2 dark:bg-gray-700 dark:text-white">
    <li className="flex justify-between">
      <span>Subtotal</span> <span className="font-bold">${subtotal}</span>
    </li>
    <li className="flex justify-between">
      <span>Shipping</span> <span className="font-bold">Free!</span>
    </li>
   
    <hr className="border-gray-300 my-2" />
    <li className="flex justify-between font-bold">
      <span>Total</span> <span>${total}</span>
    </li>
  </ul>
);

export default OrderSummary;
