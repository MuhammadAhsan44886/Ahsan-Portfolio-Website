import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-[80%] max-[1536px]:w-full">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
