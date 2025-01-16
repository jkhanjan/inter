import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page4 = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      textRefs.current.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0.3 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${index * 30}% center`,
              end: `${index * 30 + 30}% center`,
              scrub: true,
            },
          }
        );
      });

      // Image animations
      imageRefs.current.forEach((image, index) => {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${index * 30}% center`,
              end: `${index * 30 + 30}% center`,
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const images = [
    { src: "/img2.webp", alt: "Fast & Efficient" },
    { src: "/img3.webp", alt: "Intelligent Learning" },
    { src: "/img4.webp", alt: "Reliable & Secure" },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[300vh] relative bg-black text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <h1 className="text-6xl mt-28 font-bold sm:p-4 sm:text-7xl sm:mt-16 px-4 sm:px-28">
          Why AutoPilot?
        </h1>

        <div className="w-full h-full flex sm:p-4 justify-evenly items-center px-4 sm:px-28 relative">
          {/* Text Blocks */}
          <div className="flex flex-col gap-10 sm:gap-20 mt-10 sm:mt-[-20px] relative z-10">
            {[
              "Fast & Efficient",
              "Intelligent Learning",
              "Reliable & Secure",
            ].map((title, index) => (
              <div
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className="opacity-30"
              >
                <h1 className="font-semibold text-2xl sm:text-3xl">{title}</h1>
                <p className="text-lg sm:text-lg">
                  {index === 0 &&
                    "Streamline your workflow with lightning-fast automation and efficient process handling."}
                  {index === 1 &&
                    "Advanced AI algorithms that adapt and improve based on your specific needs and patterns."}
                  {index === 2 &&
                    "Enterprise-grade security with 99.9% uptime guarantee for peace of mind."}
                </p>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className="hidden lg:block relative w-[35vw] h-[50vh]">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="absolute top-0 left-0 w-full opacity-0"
              >
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
