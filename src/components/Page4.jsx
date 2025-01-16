// AnimatedText.jsx
import React, { forwardRef } from "react";
import { useRef } from "react";

const AnimatedText = forwardRef(({ title, description }, ref) => (
  <div ref={ref} className="opacity-30 transform will-change-transform">
    <h2 className="font-semibold text-2xl sm:text-3xl">{title}</h2>
    <p className="text-lg sm:text-lg">{description}</p>
  </div>
));


const AnimatedImage = forwardRef(({ image, title }, ref) => (
  <div
    ref={ref}
    className="absolute top-0 left-0 w-full opacity-0 transform will-change-transform"
  >
    <img
      className="w-full h-auto object-cover rounded-lg"
      src={image}
      alt={title}
      loading="lazy"
    />
  </div>
));

// useScrollAnimations.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const useScrollAnimations = (containerRef, textRefs, imageRefs) => {
  useLayoutEffect(() => {
    let animations = [];
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      textRefs.current.forEach((text, index) => {
        gsap.set(text, { opacity: 0.3 });

        const anim = tl.to(
          text,
          {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${index * 25}% center`,
              end: `${index * 25 + 25}% center`,
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          },
          index * 0.2
        );

        animations.push(anim);
      });

      if (imageRefs.current.length) {
        imageRefs.current.forEach((image, index) => {
          gsap.set(image, { opacity: 0, y: 20 });

          const anim = tl.to(
            image,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: `${index * 25}% center`,
                end: `${index * 25 + 25}% center`,
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            },
            index * 0.2
          );

          animations.push(anim);
        });
      }
    }, containerRef);

    return () => {
      animations.forEach((anim) => anim.kill());
      ctx.revert();
    };
  }, []);
};

// contentData.js
export const content = [
  {
    title: "Fast & Efficient",
    description:
      "Streamline your workflow with lightning-fast automation and efficient process handling.",
    image: "/img2.webp",
  },
  {
    title: "Intelligent Learning",
    description:
      "Advanced AI algorithms that adapt and improve based on your specific needs and patterns.",
    image: "/img3.webp",
  },
  {
    title: "Reliable & Secure",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee for peace of mind.",
    image: "/img4.webp",
  },
];

const Page4 = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useScrollAnimations(containerRef, textRefs, imageRefs);

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
          <div className="flex flex-col gap-10 sm:gap-20 mt-10 sm:mt-[-20px] relative z-10">
            {content.map((item, index) => (
              <AnimatedText
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="hidden lg:block relative w-[35vw] h-[50vh]">
            {content.map((item, index) => (
              <AnimatedImage
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
