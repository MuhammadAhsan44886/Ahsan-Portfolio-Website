import React from "react";
import profileImage from "../Assets/profile-image.png";

const AboutMe = () => {
  const downloadResume = () => {
    window.open("/src/Assets/Ahsan_Resume.pdf", "Download");
  };
  return (
    <>
      <div className="flex flex-row items-start max-sm:flex-col">
        <div className="w-1/2 text-[50px] font-Poppins font-bold leading-normal text-[#282828]">
          <span>
            Hello,I'm
            <br />
            Muhammad Ahsan
          </span>
          <br /> <span className="text-[#FF4C60]">Software Engineer</span>
          <br />
          <button
            className="text-[16px] font-thin relative top-[-10px] bg-orange-100 p-3 rounded-xl"
            onClick={downloadResume}
          >
            Download Resume --------
          </button>
        </div>
        <div className="w-1/2 relative">
          <img
            src={profileImage}
            alt=""
            className="absolute top-[-100px] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
