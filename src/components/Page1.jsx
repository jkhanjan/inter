import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Page1 = () => {
  const videoRef = useRef(null);
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
    // Autoplay video with error handling
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Update container height
    setContainerHeight(`${window.innerHeight * 1.7}px`);
  }, []);

  return (
    <div ref={containerRef} className="bg-black sm:h-[170svh] h-fit overflow-hidden">
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-12 pt-24 sm:pt-32">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-8 ">
          <motion.div
            className="space-y-2 sm:space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-3xl sm:text-6xl lg:text-8xl font-bold leading-[1.2]">
              Hire cars drivers
            </h1>
            <h2 className="text-white text-3xl sm:text-6xl lg:text-8xl font-bold leading-[1.2]">
              100% trained & verified
            </h2>
          </motion.div>
          <motion.p
            className="text-white text-base sm:text-xl max-w-2xl leading-[1.6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience premium on-demand drivers for your own car
          </motion.p>
          <motion.p
            className="font-bold text-gray-400 text-sm sm:text-base leading-[1.5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            -A CARS24 COMPANY-
          </motion.p>
        </div>
      </main>

      {/* Video Section */}
      <motion.div
        className="mt-24 sm:mt-44 overflow-hidden shadow-2xl sm:rounded-2xl mx-auto"
        style={{
          width: isMobile ? "100%" : "65%",
          scale,
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
        >
          <source
            src="https://img-staging.24c.in/cars24/video-gallary/VIDEO_1_1717071485.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default Page1;
