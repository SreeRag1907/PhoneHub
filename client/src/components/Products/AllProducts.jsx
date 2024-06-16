import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { addToCart } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import toast from 'react-hot-toast';


const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(9);
  const [filter, setFilter] = useState(""); // State variable for filtering
  const [sortBy, setSortBy] = useState(""); // State variable for sorting

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setTimeout(() => {
        setPhones(data.phones);
        setLoading(false);
      }, 2000); // Simulate a delay for the skeleton loader
    } catch (error) {
      console.error("Error fetching phone details:", error);
      setError(
        "Error fetching phone details. Please check the console for more details."
      );
      setLoading(false);
    }
  };

  const handleNavigation = (model) => {
    navigate(`/product-details/${encodeURIComponent(model)}`);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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

  const pageCount = Math.ceil(sortedPhones.length / pageSize);
  const offset = currentPage * pageSize;

  // Add to cart
  const send = (phone) => {
    dispatch(addToCart(phone));
    toast.success("Item Added To Your Cart!")
  };

  return (
    <section className="text-gray-600 mx-10 body-font">
      <div className="container py-20">
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full text-center">
            <h1 className="sm:text-3xl text-4xl mb-6 font-bold font-mono text-gray-900 dark:text-white">
              All Products
            </h1>
            <h2 className="text-xl font-medium text-gray-700 dark:text-white">
              Page {currentPage + 1} of {pageCount}
            </h2>
            <div className="flex justify-center mt-8">
              <ReactPaginate
                previousLabel={"<-"}
                nextLabel={"->"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination flex space-x-2"}
                activeClassName={"active"}
                previousClassName={"w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
                nextClassName={"w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
                pageClassName={"w-10 h-10 flex justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"}
                activeLinkClassName={"w-10 h-10 flex justify-center items-center rounded-full border border-black bg-black text-white"}
                pageLinkClassName={"flex justify-center items-center w-full h-full"}
              />
            </div>
          </div>
        </div>

        {/* Filter and Sort Section */}
        <div className="flex justify-between mb-4">
          <div>
            <label className="text-center mr-2 mt-2 dark:text-white">Search :</label>
            <input
              type="text"
              placeholder="Search by model..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="ml-4">
            <label className="mr-2 dark:text-white">Sort by Price:</label>
            <select
              value={sortBy}
              onChange={selectedChangeFilter}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">All</option>
              <option value="lowestPrice">Lowest to Highest</option>
              <option value="highestPrice">Highest to Lowest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading
            ? Array.from({ length: pageSize }).fill(null)
            : sortedPhones.slice(offset, offset + pageSize)
          ).map((phone, index) => (
            <div
              key={index}
              className="card border-4 drop-shadow-xl shadow-black border-black bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative bg-slate-50 dark:bg-gray-700 p-3">
                {loading ? (
                  <div className="w-full h-60 bg-gray-200 animate-pulse"></div>
                ) : (
                  <img
                    src={phone.images[0]}
                    className="w-full h-60 object-contain cursor-pointer"
                    onClick={() => handleNavigation(phone.model)}
                    alt={phone.model}
                  />
                )}
              </div>
              <div className="p-4 text-center">
                {loading ? (
                  <div className="mb-2 h-6 bg-gray-200 animate-pulse"></div>
                ) : (
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {phone.model}
                  </h2>
                )}
                {loading ? (
                  <div className="w-1/2 h-6 bg-gray-200 animate-pulse mx-auto mb-2"></div>
                ) : (
                  <p className="text-gray-600 dark:text-white text-xl">
                    Price: {phone.price}
                  </p>
                )}
                <div className="mt-9 flex justify-center space-x-2 ">
                  {loading ? (
                    <div className="w-1/3 h-10 bg-gray-200 animate-pulse"></div>
                  ) : (
                    <button
                      onClick={() => send(phone)}
                      className="bg-black text-white p-2 rounded-md border hover:bg-white hover:text-black border-black transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  )}
                  {loading ? (
                    <div className="w-1/3 h-10 bg-gray-200 animate-pulse"></div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(phone.model)}
                      className="bg-white text-black hover:bg-gray-800 p-2 rounded-md hover:text-white border-2 font-semibold transition-colors duration-300"
                    >
                      View Product
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProducts;
