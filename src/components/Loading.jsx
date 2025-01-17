import React from "react";
import "../App.css";

const Loading = () => {
  return (
    <div className="w-[100vw] h-screen absolute top-0 bg-black z-50 overflow-hidden flex items-center justify-center">
      <div className="relative w-36 sm:w-56 lg:w-64">
        <img
          className="w-full h-auto"
          src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F0e6e48e5-468b-4e69-b731-40dedf4a9f0c-logo.png&w=640&q=75"
          alt="Company Logo"
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-mask"></div>
      </div>
    </div>
  );
};

export default Loading;
