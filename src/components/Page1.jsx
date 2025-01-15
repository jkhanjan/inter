import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

const Page1 = () => {
  const videoRef = useRef(null);
  const videoContRef = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    // Autoplay video with error handling
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Only run animation on desktop screens
    if (window.innerWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top top",
          end: "+=70%",
          scrub: {
            ease: "power1.inOut",
            duration: 1,
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Set initial width for desktop
      gsap.set(videoContRef.current, {
        width: "60%",
        borderRadius: "1rem",
      });

      // Animation sequence for desktop
      tl.to(videoContRef.current, {
        width: "100%",
        borderRadius: "0",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      // Set static styles for mobile
      gsap.set(videoContRef.current, {
        width: "100%",
        borderRadius: "0",
      });
    }

    // Handle resize events
    const handleResize = () => {
      if (window.innerWidth < 768) {
        gsap.set(videoContRef.current, {
          width: "100%",
          borderRadius: "0",
        });
      } else {
        gsap.set(videoContRef.current, {
          width: "60%",
          borderRadius: "1rem",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={parent} className="min-h-screen bg-black">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <img
            className="w-36 md:w-56 lg:w-64"
            src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F0e6e48e5-468b-4e69-b731-40dedf4a9f0c-logo.png&w=640&q=75"
            alt="Company Logo"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 pt-6 md:pt-16">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
          {/* Hero Text */}
          <div className="space-y-2 md:space-y-1">
            <h1 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold leading-tight">
              Hire cars drivers
            </h1>
            <h2 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold leading-tight">
              100% trained & verified
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-white text-base md:text-xl max-w-2xl">
            Experience premium on-demand drivers for your own car
          </p>

          <p className="font-bold text-gray-400 text-xs md:text-base">
            -A CARS24 COMPANY-
          </p>
        </div>
      </main>

      {/* Video Section */}
      <div
        ref={videoContRef}
        className="video-container mt-6 md:mt-12 overflow-hidden shadow-2xl md:rounded-2xl w-full md:w-[60%] mx-auto"
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
      </div>
    </div>
  );
};

export default Page1;
