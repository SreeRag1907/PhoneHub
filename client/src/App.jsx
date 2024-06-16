import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ContactUs from "./pages/contactus/ContactUs";
import Navbar from "./components/Home/Navbar";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./components/Products/ProductDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import BrandDetails from "./components/Products/BrandDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import toast, { Toaster } from 'react-hot-toast';
import Login from "./components/Registartion/Login";
import SignUp from "./components/Registartion/SignUp";
import Sucess from "./components/Payment/Sucess";
import Cancel from "./components/Payment/Cancel";

const App = () => {
  const [phones, setPhones] = useState({});

  const loadPhones = async () => {
    try {
      const res = await fetch("/data.json"); // Assuming data.json is placed in the public directory
      const data = await res.json();
      setPhones(data);
    } catch (error) {
      console.error("Error fetching phone details", error);
    }
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products  />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/brand-details/:brand" element={<BrandDetails />} />
            <Route path="/product-details/:model" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/success" element={<Sucess />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </ErrorBoundary>
        <Toaster />
      </Layout>
    </Router>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <>
      {!hideNavAndFooter && <Navbar  />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default App;
