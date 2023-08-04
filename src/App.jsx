import React, { useEffect, useState } from "react";

const App = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    // return () => window.removeEventListener("resize", updateSize);
  }, []);

  console.log(width);

  return (
    <>
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
    </>
  );
};

export default App;
