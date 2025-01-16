import React, { useRef, useEffect, useState, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Lazy load heavy components
const VideoSection = React.lazy(() => import("./VideoSection"));
const MainContent = React.lazy(() => import("./MainContent"));

const Page1 = () => {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [containerHeight, setContainerHeight] = useState("100vh");

  const { scrollY } = useScroll();
  const scale = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5],
    [1, isMobile ? 1 : 1.5]
  );

  useEffect(() => {
    // Update container height
    setContainerHeight(`${window.innerHeight * 1.7}px`);
  }, []);

  return (
    <div ref={containerRef} className="bg-black sm:h-[170svh] h-fit">
      {/* Header */}
      <header className="w-[100vw] overflow-x-hidden py-4 px-4 sm:px-12 fixed top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <img
            className="w-36 sm:w-56 lg:w-64"
            src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F0e6e48e5-468b-4e69-b731-40dedf4a9f0c-logo.png&w=640&q=75"
            alt="Company Logo"
          />
        </div>
      </header>

      {/* Lazy load components */}
      <Suspense
        fallback={<div className="text-white text-center">Loading...</div>}
      >
        <MainContent />
        <VideoSection scale={scale} isMobile={isMobile} />
      </Suspense>
    </div>
  );
};

export default Page1;
