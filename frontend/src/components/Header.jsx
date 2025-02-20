// src/components/Header.jsx

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    // <div>Header</div>
    <header className=" p-4 rounded-md bg-light-background text-light-text ">
      <div className=" flex justify-between items-center font-semibold">
        <div>Live Streaming of Exam Center</div>
        <div>
          <button
            className="cursor-pointer  text-light-text p-3 rounded-md border-light border-2 hover:bg-light-button-hover"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <IoMoonOutline size={20} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
