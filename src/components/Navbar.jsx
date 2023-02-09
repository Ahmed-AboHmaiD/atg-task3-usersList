import React, { useEffect, useState } from "react";
import "./global.css";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-5">
      <div>
        <div className="font-bold text-lg sm:text-xl text-light-darkBlue dark:text-white">
          Users List
        </div>
      </div>
      <div className="flex-end flex items-center justify-between w-auto">
        <div className="dark:text-white font-bold text-xs mr-1 sm:mr-3 sm:w-auto">
          Dark Mode
        </div>
        <label className="switch">
          <input type="checkbox" onClick={handleSetTheme} />
          <span className="slider dark:before:bg-gray-800 dark:bg-gradient-to-tr dark:from-inputR dark:to-inputL dark:before:translate-x-input"></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
