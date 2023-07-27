import React from "react";
import Navbar from "./Navbar.js";
import StickyNote from "./StickyNote.js";
import BottomNavbar from "./BottomNavbar.js";
import fileLogo from "../pdf.png";

const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="flex-grow p-4 mt-8 flex justify-between" // Use justify-between to push the button to the right
        style={{ backgroundImage: "url('./looking-through.jpeg')"}}
      >
        {/* Content between the navbars */}
        <div>
          <StickyNote title="Hey there!" content="Welcome to my personal webpage. I'm Gauri, an aspiring software engineer. My interests include full stack development, machine learning, and community outreach. Feel free to browse around and get a glimpse of who I am and what I can bring to the table. If you think we could work together or have exciting opportunities, I'd love to connect!" />
        </div>
        <div style={{ marginLeft: "8px" }}>
          <button
            className="w-30 h-30 flex-shrink-0" 
            style={{ backgroundImage: `url(${fileLogo})`, backgroundSize: "cover" }}
          >
            <span className="label">Click Me</span>
          </button>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default MainContent;
