import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run animation if window width is above mobile breakpoint (768px)
    const handleAnimation = () => {
      if (window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger);

        // Select all cards using a container reference instead of individual refs
        const cards = gsap.utils.toArray(".card");

        // Create the stagger effect
        gsap.fromTo(
          cards,
          {
            y: "60%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: {
              amount: 0.8, // Total amount of time between first and last card
            },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "10% center",
              end: "bottom bottom",
              scrub: 1,
              // markers: true,
            },
          }
        );
      }
    };

    // Run animation initially
    handleAnimation();

    // Add resize listener to handle responsive changes
    window.addEventListener("resize", handleAnimation);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleAnimation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-fit flex flex-col justify-center bg-black sm:p-28"
    >
      <h1 className="text-white text-5xl font-bold mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1 */}
        <div className="card relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F4bbcb2f9-0e52-43ef-84a8-720c02a6d7f3-service-1-min.webp&w=1080&q=75"
            alt="Service 1"
            className="w-full h-full object-cover z-40"
          />
          <h2 className="text-2xl font-semibold text-white">Service 1</h2>
          <div className="mt-2 p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-md">
            <p className="text-gray-100">
              Description of Service 1. This service offers great value and
              quality.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F2a6e29df-01e2-4573-9212-66882a4b4552-service-3-min.webp&w=1080&q=75"
            alt="Service 2"
            className="w-full h-full object-cover z-50"
          />
          <h2 className="text-2xl font-semibold text-white">Service 2</h2>
          <div className="mt-2 p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-md">
            <p className="text-gray-100">
              Description of Service 2. Experience the best features and
              benefits.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F121233f9-9f53-4d0a-86d3-967774857bb6-service-2-min.webp&w=1080&q=75"
            alt="Service 3"
            className="w-full h-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-white">Service 3</h2>
          <div className="mt-2 p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-md">
            <p className="text-gray-100">
              Description of Service 3. Join us for exceptional service and
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

// src =
//   "https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F4bbcb2f9-0e52-43ef-84a8-720c02a6d7f3-service-1-min.webp&w=1080&q=75";

// src =
//   "https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F2a6e29df-01e2-4573-9212-66882a4b4552-service-3-min.webp&w=1080&q=75";

// src =
//   "https://www.autopilotcars24.com/_next/image?url=https%3A%2F%2Fcdn.24c.in%2Fprod%2Fautopilot%2Fweb-assets%2F2024%2F06%2F28%2F121233f9-9f53-4d0a-86d3-967774857bb6-service-2-min.webp&w=1080&q=75";
