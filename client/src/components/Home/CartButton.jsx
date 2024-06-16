import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <Link to="/cart" className="text-black relative group dark:text-white">
      <div className="absolute inset-0 ml-5 bg-black rounded-full shadow-lg transform translate-x-1 translate-y-1 transition-transform duration-100 ease-in-out dark:bg-white"></div>
      <div className="relative flex ml-5 items-center border-2 p-1 rounded-full px-3 border-black gap-1 bg-white shadow-md transform group-active:translate-x-1 group-active:translate-y-1 transition-transform duration-100 ease-in-out dark:bg-black dark:border-white dark:text-white ">
        <span className="bg-black text-white w-9 h-9 flex justify-center items-center rounded-full text-xs dark:bg-white dark:text-black">
          {carts.length}
        </span>
        <FaShoppingCart />
        <p className="text-base font-normal font-poppins">Cart</p>
      </div>
    </Link>
  );
};

export default CartButton;
