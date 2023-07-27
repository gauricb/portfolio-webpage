import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">File Details</h2>
        {/* Your file details content */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
