import React from "react";

const StickyNote = ({title, content}) => {
  return (
    <div className="bg-yellow-200 rounded-lg p-4 shadow-lg max-w-md w-full">
      <p className="text-lg font-bold mb-2">{title}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default StickyNote;
