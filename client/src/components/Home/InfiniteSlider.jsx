import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfiniteSlider = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <section className="text-gray-600 mt-10 mb-10 body-font">
      <div className="container py-20 bg-slate-50 dark:bg-gray-900 p-2 rounded-md mx-auto">
        <div className="flex flex-wrap w-full ">
          <div className="w-full text-center">
            <h1 className="sm:text-4xl text-2xl font-bold font-mono dark:text-white text-gray-900">
              Top Brands
            </h1>
          </div>
        </div>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.name} className="p-2">
              <div className="bg-white p-6 rounded-lg border-4 border-black shadow-lg">
                <img
                  className="h-40 w-full object-contain"
                  src={brand.image}
                  alt={brand.name}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InfiniteSlider;
