import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { GiCrossMark, GiSkills } from "react-icons/gi";
import { HiPresentationChartLine } from "react-icons/hi";
import hamburger from "../Assets/hamburger.svg";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  const navLinks = [
    {
      icon: <BiSolidUser />,
      text: "About Me",
    },
    {
      icon: <GiSkills />,
      text: "Expertise",
    },
    {
      icon: <HiPresentationChartLine />,
      text: "Portfolio",
    },
    {
      icon: <BsTelephoneFill />,
      text: "Get In Touch",
    },
  ];
  return (
    <>
      {width > 700 ? (
        <>
          {/* Desktop View Navbar--- */}
          <nav className="w-full flex justify-start items-center px-8 h-[80px] bg-[#FFFAFA] fixed top-0">
            <img
              src={logo}
              alt="programmingwithahsan_icon"
              className="w-[140px] h-[140px] object-contain mr-10"
            />
            <ul className="flex space-x-8 font-Poppins text-[#282828] text-[14px] font-normal">
              {navLinks.map((item, index) => (
                <button
                  key={index}
                  className="transition-all ease-in-out delay-0 flex items-center space-x-2 hover:text-[#FF4C60] cursor-pointer hover:-translate-y-1  hover:scale-110"
                >
                  <span className="text-[14px]">{item.icon}</span>
                  <li>{item.text}</li>
                </button>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <>
          {/* Mobile View Navbar Open--- */}
          <nav
            className={`transition-all ease-out duration-700 w-full bg-[#FFFAFA] fixed top-0 left-0 h-full ${
              isOpen ? "" : "opacity-0 invisible"
            }`}
          >
            <div
              className="w-full flex justify-between items-center px-2 pr-4 mt-[-20px]"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={logo}
                alt="programmingwithahsan_icon"
                className="w-[140px] h-[140px] object-contain"
              />
              <GiCrossMark className="w-[30px] h-[30px]" />
            </div>
            <div className="w-full h-80 flex justify-center items-center">
              <ul className="flex flex-col items-start justify-center font-Poppins text-[#282828] text-[32px] font-normal space-y-6">
                {navLinks.map((item, index) => (
                  <button
                    key={index}
                    className="transition-all ease-in-out delay-75 flex items-center space-x-2 hover:text-[#FF4C60] cursor-pointer hover:-translate-y-1 hover:scale-110"
                  >
                    <span className="text-[28px]">{item.icon}</span>
                    <li>{item.text}</li>
                  </button>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile View Navbar Close--- */}
          <div
            className={`transition-all ease-out duration-700 w-full flex justify-between items-center px-2 pr-4 mt-[-20px] fixed top-0 bg-[#FFFAFA] ${
              isOpen ? "opacity-0 invisible" : ""
            }`}
            onClick={() => setIsOpen(true)}
          >
            <img
              src={logo}
              alt="programmingwithahsan_icon"
              className="w-[140px] h-[140px] object-contain"
            />
            <img src={hamburger} alt="hamburger_icon" />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
