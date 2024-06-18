import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  return (
    <div className="w-full h-[620px] bg-DarkPrimary relative overflow-hidden p-5 sm:w-full dark:bg-black ">
      {/* Container */}
      <div className="w-[90%] h-full m-auto flex flex-col justify-start items-start gap-4 z-50 pt-40 max-xl:pt-40 max-lg:pt-40 max-lg:center">
        {/* Details */}
        <div className="max-lg:h-[80%] max-[1025px]:h-[80%] flex flex-col justify-center items-start gap-4 z-20">
          {/* Hero Details */}
          <div className="bg-black  dark:bg-white dark:bg-opacity-35 bg-opacity-35 rounded-[30px] p-4  backdrop-filter backdrop-blur-sm ">
          <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-9xl font-bold font-mono text-white max-xl:text-8xl max-[980px]:text-7xl max-md:text-6xl max-sm:text-5xl dark:text-white"
            >
              Smartphone <br /> Store{" "}
            </motion.h1>
          </div>
          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 z-1 overflow-hidden">
            <motion.button
              initial={{ y: "150%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-[250px] h-[60px] border-2 max-md:w-[150px] max-md:h-[50px] max-sm:w-[150px] max-sm:h-[60px] max-sm:text-md font-bold rounded-full bg-black text-white hover:bg-slate-50 hover:text-black border-black dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleNavigation}
            >
              Discover All Products
            </motion.button>
          </div>
        </div>
        <div className="w-full h-[620px] z-10  top-0 right-0 absolute "></div>
        <div className="z-50 block top-10 right-0 absolute"></div>
        <motion.div
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-[-20%] right-[-5%] z-2 max-xl:top-[10%] max-[1025px]:top-[45%] max-[1025px]:right-[10%] max-lg:top-[20%] max-lg:right-[5%] max-[980px]:top-[20%] max-md:right-[20%] max-md:top-[30%] max-sm:right-[10%]"
        >
          <img
            className="object-cover w-[900px] max-xl:w-[600px] max-lg:w-[800px] max-md:w-[400px]"
            src="https://demo.phlox.pro/shop-mobile/wp-content/uploads/sites/218/2020/08/header_image@2x.png"
            alt="Smartphone"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
