import React from "react";
import linkedinLogo from "../link_logo.png";
import githubLogo from "../github-sign.png";
import finderLogo from "../finder.png";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-gray-200 p-2 rounded-lg w-1/3">
      <div className="flex items-center space-x-4">
        <button
          className="w-10 h-12 flex-shrink-0 hover:scale-150" // Decreased the height to 10px and added flex-shrink-0
          style={{ backgroundImage: `url(${finderLogo})`, backgroundSize: "cover" }}
        ></button>
        
        <button
          className="w-10 h-10 flex-shrink-0 hover:scale-150" // Decreased the height to 10px and added flex-shrink-0
          style={{ backgroundImage: `url(${linkedinLogo})`, backgroundSize: "cover" }}
        ></button>
        <button
          className="w-10 h-10 flex-shrink-0 hover:scale-150" // Decreased the height to 10px and added flex-shrink-0
          style={{ backgroundImage: `url(${githubLogo})`, backgroundSize: "cover" }}
        ></button>
      </div>
    </div>
  );
};

export default BottomNavbar;
