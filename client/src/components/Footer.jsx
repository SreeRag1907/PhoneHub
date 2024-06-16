import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center bg-slate-50 dark:bg-gray-800 p-3">
      <nav className="flex justify-center flex-wrap gap-6 text-black dark:text-white font-medium">
        <Link className="hover:text-gray-400" to="/">
          Home
        </Link>
        <Link className="hover:text-gray-400" to="/about">
          About
        </Link>
        <Link className="hover:text-gray-400" to="/products">
          Products
        </Link>
        <Link className="hover:text-gray-400" to="/blogs">
          Blogs
        </Link>
        <Link className="hover:text-gray-400" to="/contact-us">
          Contact
        </Link>
      </nav>

      <div className="flex justify-center space-x-5 ">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-gray-500 hover:text-gray-900  w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-gray-500 hover:text-gray-900 w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-500 hover:text-gray-900 w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-500 hover:text-gray-900 w-6 h-6" />
        </a>
      </div>

      <p className="text-center text-gray-700 dark:text-white font-medium">
        &copy; 2024 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
