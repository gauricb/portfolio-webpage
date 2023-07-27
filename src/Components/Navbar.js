import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update the time every minute
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };

    // Update the time every minute
    const intervalId = setInterval(updateTime, 60000); // 60000 milliseconds = 1 minute

    // Call the function once immediately to set the initial time
    updateTime();

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="bg-blue-500 h-8 flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <button className="w-4 h-4 bg-red-500 rounded-full"></button>
        <button className="w-4 h-4 bg-yellow-300 rounded-full"></button>
        <button className="w-4 h-4 bg-green-500 rounded-full"></button>
      </div>
      <div className="text-white font-mono font-bold">Gauri</div>
      <div className="text-white font-mono font-bold">{currentTime}</div>
    </nav>
  );
};

export default Navbar;
