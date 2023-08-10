import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>

      <div className="mt-[120px] px-[50px] container mx-auto">
        <AboutMe />
      </div>
    </>
  );
};

export default App;
