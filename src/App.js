import React, { useEffect, useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import MainContent from "./Components/MainContent"; // This should contain your main content, including Navbar and StickyNote

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? <LoadingScreen /> : <MainContent />}
    </div>
  );
};

export default App;
