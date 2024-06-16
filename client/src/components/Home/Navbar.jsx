import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoMenu, IoClose, IoPerson } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import Search from "./Search";
import CartButton from "./CartButton";
import ThemeToggle from "./ThemeToggle";

function Navbar({phones}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };



  const useDarkMode = (isDarkMode) => {
    useEffect(() => {
      const body = document.body;
      body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);
  };

  useDarkMode(isDarkMode);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };



  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
      toast.success("Signed Out!");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSideMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="w-full h-24 bg-gray-50 text-black dark:bg-gray-950 dark:text-white fixed z-50">
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Left Side */}
          <div className="flex space-x-14 items-center">
            {/* Logo */}
            <motion.div
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="ml-10 cursor-pointer">
                <Link to="/">
                  <h1 className="text-3xl font-bold font-poppins max-sm:text-lg">
                    PhoneHub
                  </h1>
                  <p className="font-roboto text-sm tracking-wider max-sm:text-xs">
                    Electronic Shop
                  </p>
                </Link>
              </div>
            </motion.div>
  
            <ul className="text-gray-700 font-cabin font-semibold tracking-wider hover:text-black cursor-pointer items-center gap-10 hidden xl:flex dark:text-white">
              <motion.li
                initial={{ y: "-150%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-1"
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                initial={{ y: "-150%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-1"
              >
                <Link to="/products">Products</Link>
              </motion.li>
              <motion.li
                initial={{ y: "-150%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-1"
              >
                <Link to="/contact-us">Contact Us</Link>
              </motion.li>
            </ul>
          </div>
  
          {/* Right Side */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-14 bg-primary rounded-3xl pr-10 max-lg:pr-0 flex items-center gap-4 dark:bg-dark-secondary max-lg:bg-transparent dark:max-lg:bg-transparent transition-all duration-100 linear min-w-[150px]"
          >
            <AnimatePresence>
              {isSearch && <Search key="search" />}
            </AnimatePresence>
  
            <button className="hidden md:block" onClick={toggleSearch}>
              <IoSearch className="text-2xl font-extrabold cursor-pointer dark:text-white" />
            </button>
            <span className="text-2xl hidden lg:block dark:text-white">|</span>
  
            <ThemeToggle />
  
            <button onClick={toggleSideMenu} className="lg:hidden">
              <IoMenu className="text-2xl font-extrabold cursor-pointer dark:text-white" />
            </button>
  
            <div className="mr-3">
              {/* Cart Button */}
              <CartButton />
            </div>
  
            {user ? (
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-black rounded-full shadow-lg transform translate-x-1 translate-y-1 transition-transform duration-100 ease-in-out"></div>
                <div className="relative group">
                  <div
                    onClick={toggleDropdown}
                    className="flex items-center cursor-pointer border-2 p-1 rounded-full px-3 border-black gap-1 bg-white shadow-md transform group-active:translate-x-1 group-active:translate-y-1 transition-transform duration-100 ease-in-out dark:bg-black dark:border-white dark:text-white"
                  >
                    <IoPerson className="text-3xl cursor-pointer" />
                    <p>Hello!</p>
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-4 w-auto bg-white border border-black rounded-md shadow-lg dark:bg-black dark:border-white dark:text-white">
                      <div className="px-4 py-2 block text-center text-gray-700 font-semibold dark:text-white">
                        {user.name || user.email}
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="block w-full font-bold text-center px-4 py-2 border-t border-gray-200 text-gray-500 hover:text-black dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-lg transform translate-x-1 translate-y-1 transition-transform duration-100 ease-in-out"></div>
                <div className="relative group">
                  <div className="flex items-center border-2 p-1 rounded-full px-3 border-black gap-1 bg-white shadow-md transform group-active:translate-x-1 group-active:translate-y-1 transition-transform duration-100 ease-in-out dark:bg-black dark:border-white dark:text-white">
                    <button onClick={handleLogin} className="font-base text-xl">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </nav>
  
      {/* Side Menu */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
          >
            <div className="fixed right-0 top-0 w-64 bg-white h-full shadow-lg flex flex-col dark:bg-gray-900">
              <button
                className="self-end m-4 text-2xl font-extrabold dark:text-white"
                onClick={toggleSideMenu}
              >
                <IoClose />
              </button>
              <nav className="mt-10 flex flex-col gap-4 text-lg font-semibold text-gray-800 dark:text-white">
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={toggleSideMenu}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={toggleSideMenu}
                >
                  Products
                </Link>
                <Link
                  to="/contact-us"
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={toggleSideMenu}
                >
                  Contact Us
                </Link>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Login
                  </button>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}  

export default Navbar;
