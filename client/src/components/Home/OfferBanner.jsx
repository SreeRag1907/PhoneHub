import React from "react";
import { Link } from "react-router-dom";

export default function OfferBanner() {
  return (
    <div className="box-border mb-10 relative">
      <div className="box-border">
        <img
          className="image-rounded border-0 inline-block max-w-full align-middle w-full h-[300px] sm:h-[500px] object-cover rounded-[10px] object-[center_top] box-border"
          alt="collection item"
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/04/New-year-new-phone-Top-5-smartphones-to-launch-in-2022-scaled.jpg?ssl=1&quality=80&w=f"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4 max-lg:">
        <div className="bg-white bg-opacity-20 rounded-[30px] p-4 text-center backdrop-filter backdrop-blur-sm w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
          <div className="box-border text-base sm:text-lg md:text-xl mb-2 dark:text-black">Phone Store</div>
          <h3 className="item-title font-sans text-[#191919] my-[10px] capitalize text-lg sm:text-xl md:text-2xl lg:text-4xl leading-tight font-extrabold box-border">
            All Latest Phones.
          </h3>
          <p className="dark:text-black box-border my-0 mb-3 font-mono text-sm sm:text-base md:text-lg leading-normal mx-auto w-full md:w-4/5">
            Get all the latest phone products here.
            <br />
            <span className="font-bold dark:text-black">Top brands Top Deals</span>
          </p>
          <div className="btn-wrap box-border font-medium capitalize w-fit mx-auto">
            <Link
              className="d-flex align-items-center bg-transparent no-underline  ease-out duration-300 border-2 p-2 hover:text-white hover:bg-black transition border-black text-[#191919] flex items-center box-border"
              to="/"
            >
              Get Started{" "}
              <i className="icon icon-arrow-io not-italic font-normal capitalize leading-none antialiased transition-transform ease-out duration-300 inline-block text-[1.4em] -rotate-180 font-[icomoon] box-border" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
