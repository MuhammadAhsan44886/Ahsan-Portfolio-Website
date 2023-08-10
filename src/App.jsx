import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto mt-[120px] px-[16px]">
        <AboutMe />
      </div>
    </>
  );
};

export default App;
