import React, { useEffect, useState } from "react";

const App = () => {
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    // return () => window.removeEventListener("resize", updateSize);
  }, []);

  // console.log(width);

  // .overlay {
  //   height: 100%;
  //   width: 0;
  //   position: fixed;
  //   z-index: 1;
  //   top: 0;
  //   left: 0;
  //   background-color: rgb(0,0,0);
  //   background-color: rgba(0,0,0, 0.9);
  //   overflow-x: hidden;
  //   transition: 0.5s;
  // }

  return (
    <>
      {width < 480 ? (
        isOpen ? (
          <div className="h-full w-full fixed top-0 left-0 z-50 bg-slate-500 overflow-x-hidden transition-opacity duration-500">
          <a onClick={() => setIsOpen(false)}>&times;</a>
          <div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        ) : (
          <img
            onClick={() => setIsOpen(true)}
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
            alt="error"
            className="w-10 aspect-auto h-auto mix-blend-multiply"
          />
        )
      ) : (
        <div className=" flex w-full px-6 border-[2px] border-red-600 bg-green-200 items-center">
          <img
            src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
            alt="error"
            className="w-10 aspect-auto h-auto mix-blend-multiply"
          />
          <ul className="flex w-full justify-center space-x-10">
            <li>Home</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <div>Dark</div>
        </div>
      )}
    </>
  );
};

export default App;
