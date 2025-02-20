import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      document.documentElement.style.setProperty("--light-main-bg", "#020202");
      document.documentElement.style.setProperty("--light-icon-bg", "#3b4658");

      document.documentElement.style.setProperty("--light-arrow", "#ffffff");
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
      document.documentElement.style.setProperty("--light-main-bg", "#d3d3d3");
      document.documentElement.style.setProperty("--light-icon-bg", "#e2e2e2");
      document.documentElement.style.setProperty("--light-arrow", "#000000");
    }
  }, [isDarkMode]);

  return (
    <div className=" pt-3 h-screen  ">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
