import React from 'react';
import { IoPerson } from 'react-icons/io5';

const UserProfile = ({ userData, handleSignOut, toggleDropdown, isDropdownOpen }) => {
  if (!userData) {
    return null; // or you can render a loading spinner or placeholder
  }

  return (
    <div className="relative hidden lg:block">
      <div className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-lg transform translate-x-1 translate-y-1 transition-transform duration-100 ease-in-out"></div>
      <div className="relative group">
        <div
          onClick={toggleDropdown}
          className="flex items-center cursor-pointer border-2 p-1 rounded-full px-3 border-black gap-1 bg-white shadow-md transform group-active:translate-x-1 group-active:translate-y-1 transition-transform duration-100 ease-in-out dark:bg-black dark:border-white dark:text-white"
        >
          <IoPerson className="text-3xl cursor-pointer" />
          <p>Hello,<span className='font-bold'>{userData.name}</span></p>
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-auto bg-white border-2 border-black rounded-md shadow-lg dark:bg-black dark:border-white dark:text-white">
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
  );
};

export default UserProfile;