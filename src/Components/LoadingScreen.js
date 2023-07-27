import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src="https://thumbs.gfycat.com/FancyOffensiveBoilweevil-size_restricted.gif" /* Replace with the URL of your GIF */
        alt="Loading..."
        className="w-32 h-32 mb-4"
      />
      <div className="w-64 h-4 bg-gray-200 rounded-full">
        <div
          className="h-4 bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
