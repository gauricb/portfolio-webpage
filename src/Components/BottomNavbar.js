import React from "react";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-gray-200 p-4 rounded-lg w-2/3">
      <div className="flex items-center space-x-2">
        <button className="w-4 h-4 bg-red-500 rounded-full"></button>
        <button className="w-4 h-4 bg-yellow-300 rounded-full"></button>
        <button className="w-4 h-4 bg-green-500 rounded-full"></button>
      </div>
    </div>
  );
};

export default BottomNavbar;
