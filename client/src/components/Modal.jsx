import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white flex justify-center mt-24 h-[480px] p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-black hover:text-red-500 text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
