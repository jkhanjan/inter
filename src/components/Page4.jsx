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
          { opacity: 0 },
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
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[300vh] relative bg-black text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <h1 className="text-4xl mt-8 font-bold sm:p-4 sm:text-5xl sm:mt-0 px-4 sm:px-28">
          Why AutoPilot?
        </h1>

        <div className="w-full h-full flex sm:p-4 justify-between items-center px-4 sm:px-28 relative">
          {/* Text Blocks */}
          <div className="flex flex-col gap-10 mt-10 sm:mt-0 relative z-10">
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
                <h1 className="font-semibold text-xl sm:text-3xl">{title}</h1>
                <p className="text-sm font-semibold sm:text-lg">
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
          <div className="hidden sm:block relative z-1000">
            {["/img4.webp", "/img3.webp", "/img2.webp"].map((src, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="absolute top-0 left-0 opacity-0"
              >
                <img
                  className="w-[35vw]"
                  src={src}
                  alt={`Image ${index + 1}`}
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
