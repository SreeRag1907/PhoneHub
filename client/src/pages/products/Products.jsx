// Products.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AllProducts from "./AllProducts";

const Products = () => {
  const navigate = useNavigate();

  const brands = [
    { name: "Samsung", image: "https://i.pinimg.com/originals/49/55/f5/4955f570b6a593717a23b1bb20e38d98.jpg" },
    { name: "OnePlus", image: "https://beebom.com/wp-content/uploads/2020/03/new-oneplus-logo-featured.jpg?w=750&quality=75" },
    { name: "POCO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZNNfipLOuDOY-4L6UtDdPZVB9_5u90HOvUWMpFfwbWHU9jO9dCaHxyQq6FQQpPpm8m8&usqp=CAU" },
    { name: "OPPO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIDNjdxaeN352bN2Q1GPfxzF5fQ7n9xZtb5tJ6doFhhpqIV90Zg0iSvENvBbI9zPA57c&usqp=CAU" },
    { name: "Motorola", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPz3BF0Nq59VIl_-RTjm6BM0_XZMmI7IjRQ&usqp=CAU" },
    { name: "Realme", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKh8DInTAiWU7SflzG6TuNMBu8LYqd0hOFttb5KUxx_5L93TruvKRFntofbfX1Xko9uY&usqp=CAU" },
    { name: "IQOO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdRbVYLjmL7C-qPgDBXCTjKoHn4RyOH_yJAd340AAhEqaPO1Q" },
    { name: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoU2lZ2eJX3aCMfiFDt39uRNcDu9W7pTKcyZymE2iKa7IOVaI&usqp=CAU" },
  ];

  const handleNavigation = (brand) => {
    navigate(`/brand-details/${brand}`);
  };

  return (
    <section className="text-gray-600 mx-4 sm:mx-10 body-font">
      <div className="container py-10 sm:py-32">
        <div className="flex flex-wrap w-full">
          <div className="w-full text-center">
            <h1 className="sm:text-4xl text-2xl mb-6 font-bold font-mono title-font text-gray-900 dark:text-white">
              Browse By Brands
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white transition-transform duration-300 hover:scale-110 border-4 border-black p-2 rounded-xl"
              onClick={() => handleNavigation(brand.name)}
            >
              <img
                className="h-24 sm:h-40 w-full object-scale-down cursor-pointer rounded"
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </div>

      <AllProducts />
    </section>
  );
};

export default Products;
