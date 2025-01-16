import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";
import Lenis from "lenis";

const Page3 = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  const pageRef = useRef();
  const containerRef = useRef(null);
  const elem = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem.current,
        start: "top 10%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(elem.current, {
      opacity: 1,
    });
    tl.to(pageRef.current, {
      opacity: 0,
    });
  }, []);

  return (
    <div className="w-[99vw]">
      {" "}
      <div
        id="container"
        ref={containerRef}
        className="w-[100vw] h-[300vh] bg-black relative "
      >
        <div className="h-screen sm:w-[100vw] flex items-center justify-center w-full sticky top-0 ">
          <h1 className="text-white text-[4rem] sm:text-9xl font-sans font-bold absolute z-10 ">
            AUTOPILOT
          </h1>
        </div>
        <div ref={pageRef} className="sticky top-0 h-screen w-full">
          <Scene />
        </div>
        <div
          ref={elem}
          className="w-full overflow-x-hidden h-fit flex flex-col items-center justify-center bg-white opacity-0 absolute bottom-0"
        >
          <div className="w-full h-screen justify-center items-center flex flex-col gap-4">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-800 tracking-tighter font-semibold">
              How to use AutoPilot
            </h1>
            <p className="font-light text-2xl">4 Step for smooth joutney</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
