import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const VideoSection = ({ scale, isMobile }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay video with error handling
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
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
  );
};

export default VideoSection;
