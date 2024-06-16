import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-800 dark:bg-white text-white rounded flex items-center space-x-1">
      {theme === 'dark' ? (
        <>
          <FaSun className="text-yellow-500 " />
          
        </>
      ) : (
        <>
          <FaMoon className="text-gray-300" />
          
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
