import React from "react";

const FileIcon = ({ onClick }) => {
  return (
    <div
      className="w-16 h-16 p-4 bg-blue-500 rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Your file icon image or icon component */}
    </div>
  );
};

export default FileIcon;
