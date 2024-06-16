import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ model: item.model, quantity: item.quantity - 1 })
      );
    }
  };

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({ model: item.model, quantity: item.quantity + 1 })
    );
  };

  const removeItem = () => {
    dispatch(removeFromCart(item.model));
    toast.error("Item Removed!")
  };

  const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
  const totalPrice = itemPrice * item.quantity;

  return (
    <div className="relative font-mono">
      <div className="relative bg-white dark:bg-gray-900   rounded-lg border-2 border-black px-5 grid grid-cols-12 gap-4 max-lg:mx-2">
        <div className="col-span-12 md:col-span-8 flex items-start gap-4 ">
          <div className="w-28 h-28 max-sm:w-20 max-sm:h-20 bg-gray-100 rounded-sm overflow-hidden">
            <img
              src={item.images[0]}
              className="w-full h-full object-contain "
              alt={item.model}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-22">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.model}</h3>
            </div>
            <div
              className="flex items-center gap-1 mt-2 cursor-pointer"
              onClick={removeItem}
            >
              <FaTrash className="text-red-500 w-4 h-4" />
              <span className="font-semibold text-red-500 text-sm">REMOVE</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex justify-end gap-8 items-center">
          <h4 className="text-lg font-bold text-gray-800 dark:text-white">{`$${itemPrice}`}</h4>
          <div className="flex items-center gap-2">
            <button
              className="border border-gray-300 rounded-sm px-1 py-1"
              onClick={decreaseQuantity}
            >
              <FaMinus />
            </button>
            <span>{item.quantity}</span>
            <button
              className="border border-gray-300 rounded-sm px-1 py-1"
              onClick={increaseQuantity}
            >
              <FaPlus />
            </button>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white">{`$${totalPrice.toFixed(
              2
            )}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
