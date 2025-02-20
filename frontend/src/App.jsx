// src/App.jsx

import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set the CSS variables when the theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty(
        "--light-background",
        "#2d3748"
      );
      document.documentElement.style.setProperty("--light-text", "#e2e8f0");
      document.documentElement.style.setProperty("--light-border", "#4a5568");
      document.documentElement.style.setProperty(
        "--light-active-text",
        "#63b3ed"
      );
      document.documentElement.style.setProperty(
        "--light-button-bg",
        "#63b3ed"
      );
      document.documentElement.style.setProperty(
        "--light-button-hover",
        "#3182ce"
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty(
        "--light-background",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--light-text", "#1a202c");
      document.documentElement.style.setProperty("--light-border", "#e2e8f0");
      document.documentElement.style.setProperty(
        "--light-active-text",
        "#2b6cb0"
      );
      document.documentElement.style.setProperty(
        "--light-button-bg",
        "#38bdf8"
      );
      document.documentElement.style.setProperty(
        "--light-button-hover",
        "#0ea5e9"
      );
    }
  }, [isDarkMode]);

  return (
    <div className="bg-light-dark pe-3 h-screen overflow-hidden ">
      <div className="grid grid-cols-12 gap-4">
        {" "}
        {/* Set up a 12-column grid */}
        <div className="col-span-2">
          {" "}
          {/* Make the navbar take up 3 columns */}
          <Navbar />
        </div>
        <div className="col-span-10">
          {" "}
          {/* Make the Home section take up 9 columns */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
