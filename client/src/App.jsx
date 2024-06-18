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
import toast, { Toaster } from "react-hot-toast";
import Login from "./components/Registartion/Login";
import SignUp from "./components/Registartion/SignUp";
import Sucess from "./components/Payment/Sucess";
import Cancel from "./components/Payment/Cancel";

import { auth, db } from "./authentication/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import UserProfile from "./components/Home/UserProfile";
import AboutPage from "./pages/about/AboutPage";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "User", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data());
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });
    return unsubscribe;
  }, []);

 

  return (
    <Router>
      <ScrollToTop />
      <Layout
        userData={userData}
        
      >
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutPage/>} />
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

const Layout = ({ children, userData}) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && (
        <header>
          <Navbar
            userData={userData}
           
          />
        </header>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {!hideNavAndFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};


export default App;