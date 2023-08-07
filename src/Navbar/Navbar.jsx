import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
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
      {width > 660 ? (
        <div className="w-full flex justify-start items-center px-8 h-[80px] bg-[#FFFAFA]">
          <img
            src={logo}
            alt=""
            className="w-[75px] h-[75px] object-contain mr-20"
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
        </div>
      ) : (
        <>
          {isOpen ? (
            <div className="w-full bg-[#FFFAFA] fixed top-0 left-0 h-full">
              <div
                className="w-full flex justify-end p-6"
                onClick={() => setIsOpen(false)}
              >
                <GiCrossMark className="w-[30px] h-[30px]" />
              </div>
              <div className="w-full h-80 flex justify-center items-center">
                <ul className="flex flex-col items-start justify-center font-Poppins text-[#282828] text-[18px] font-normal space-y-4">
                  {navLinks.map((item, index) => (
                    <button
                      key={index}
                      className="transition-all ease-in-out delay-75 flex items-center space-x-2 hover:text-[#FF4C60] cursor-pointer hover:-translate-y-1 hover:scale-110"
                    >
                      <span className="text-[20px]">{item.icon}</span>
                      <li>{item.text}</li>
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div
              className="w-full flex justify-end items-center h-[80px] px-8 fixed top-0 let-0 bg-[#FFFAFA]"
              onClick={() => setIsOpen(true)}
            >
              <img src={hamburger} alt="" />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
