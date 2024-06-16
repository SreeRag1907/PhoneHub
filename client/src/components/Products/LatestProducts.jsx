// src/components/LatestProducts.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';


const LatestProducts = () => {

  const dispatch = useDispatch();


  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const brands = [...new Set(data.phones.map((phone) => phone.brand))];
        const latestProductsByBrand = brands.map((brand) =>
          data.phones.find((phone) => phone.brand === brand)
        );
        setLatestProducts(latestProductsByBrand);
      } catch (error) {
        console.error("Error fetching latest products:", error);
        setError(
          "Error fetching latest products. Please check the console for more details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  const handleNavigation = (phone) => {
    navigate(`/product-details/${encodeURIComponent(phone.model)}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
    ],
  };

  //add to cart
  const send = (phone) => {
    dispatch(addToCart(phone));
    toast.success("Item Added To Your Cart!")

  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-mono mb-8 text-center">
        Latest Products
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : latestProducts.length === 0 ? (
        <p className="text-center">No latest products found</p>
      ) : (
        <Slider {...settings}>
          {latestProducts.map((phone) => (
            <div key={phone.model} className="p-2 ">
              <div className="bg-white dark:bg-gray-800 border-4 drop-shadow shadow-black border-black p-3 rounded-lg shadow-lg overflow-hidden">
                <div className="relative bg-slate-50 dark:bg-gray-700 p-3">
                  <img
                    src={phone.images}
                    alt={phone.model}
                    className="w-full h-60 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => handleNavigation(phone)}
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold uppercase rounded">
                    New
                  </span>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white ">
                    {phone.model}
                  </h2>
                  <p className="text-gray-600 text-xl dark:text-white mb-4">Price: {phone.price}</p>
                  <div className="flex justify-center gap-2 mb-4">
                    <button
                      onClick={() => send(phone)}
                      className="bg-black text-white p-2 rounded-md border hover:bg-white hover:text-black border-black transition-colors duration-300 mr-2"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleNavigation(phone)}
                      className="bg-white text-black hover:bg-gray-800 p-2 rounded-md hover:text-white border-2 font-semibold transition-colors duration-300"
                    >
                      View Product
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default LatestProducts;
