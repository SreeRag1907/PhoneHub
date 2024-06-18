import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addToCart } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const dispatch = useDispatch();

  const { brand } = useParams();
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(""); // State variable for filtering
  const [sortBy, setSortBy] = useState(""); // State variable for sorting
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhonesByBrand = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const phonesByBrand = data.phones
          .filter((phone) => phone.brand.toLowerCase() === brand.toLowerCase())
          .slice(0, 10); // Fetch only 10 products
        setPhones(phonesByBrand);
      } catch (error) {
        console.error("Error fetching phone details:", error);
        setError(
          "Error fetching phone details. Please check the console for more details."
        );
      } finally {
        // Add a small delay to make the skeleton loader more visible
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchPhonesByBrand();
  }, [brand]);

  const handleNavigation = (phone) => {
    navigate(`/product-details/${encodeURIComponent(phone.model)}`);
  };

  const handleBackNavigation = () => {
    navigate(-1);
  };

  // Filter phones based on brand and filter criteria
  const filteredPhones = phones.filter((phone) =>
    phone.model.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort phones based on sort order
  const sortedPhones = [...filteredPhones];
  if (sortBy === "lowestPrice") {
    sortedPhones.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
      const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
      return priceA - priceB;
    });
  } else if (sortBy === "highestPrice") {
    sortedPhones.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
      const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
      return priceB - priceA;
    });
  }

  const selectedChangeFilter = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  // Add to cart
  const send = (phone) => {
    dispatch(addToCart(phone));
    toast.success("Item Added To Your Cart!");
  };

  return (
    <div className="container mx-auto px-4 py-8 dark:text-white">
      <button
        onClick={handleBackNavigation}
        className="mb-4 mt-20 min-w-[100px]  px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded-lg shadow-md transition-colors duration-300"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
        {brand} Phones
      </h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="mb-4 sm:mb-0">
          <label className="mr-2 dark:text-white">Search:</label>
          <input
            type="text"
            placeholder="Search by model..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="mr-2 dark:text-white">Sort by Price:</label>
          <select
            value={sortBy}
            onChange={selectedChangeFilter}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          >
            <option value="">All</option>
            <option value="lowestPrice">Lowest to Highest</option>
            <option value="highestPrice">Highest to Lowest</option>
          </select>
        </div>
      </div>

      {/* Phones Display Section */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Display skeleton loaders while loading */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="card border-4 drop-shadow-xl shadow-black border-black bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300"
            >
              <div className="relative bg-slate-50 p-3">
                <Skeleton height={240} />
              </div>
              <div className="p-4 text-center">
                <Skeleton height={40} width={120} />
                <Skeleton height={20} width={120} />
                <div className="mt-4 flex justify-center">
                  <Skeleton height={32} width={100} />
                  <Skeleton height={32} width={100} />
                </div>
                <div className="mt-4">
                  <Skeleton height={16} width={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : sortedPhones.length === 0 ? (
        <p className="text-gray-600 text-center dark:text-white">
          No phones found for {brand}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPhones.map((phone) => (
            <div
              key={phone.model}
              className="card border-4 drop-shadow-xl shadow-black border-black bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative bg-slate-50 dark:bg-gray-700 p-3">
                <img
                  src={phone.images}
                  className="w-full h-60 object-contain cursor-pointer"
                  onClick={() => handleNavigation(phone)}
                  alt={phone.model}
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {phone.model}
                </h2>
                <p className="text-gray-600 text-lg dark:text-gray-300">
                  Price: {phone.price}
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => send(phone)}
                    className="bg-black text-white p-2 rounded-md border hover:bg-white hover:text-black border-black transition-colors duration-300 mr-2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleNavigation(phone)}
                    className="bg-white text-black p-2 rounded-md border hover:bg-gray-200 hover:text-gray-800 border-black transition-colors duration-300"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
