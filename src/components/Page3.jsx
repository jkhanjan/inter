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

  return (
    <>
      {" "}
      <div
        id="container"
        ref={containerRef}
        className="w-full h-[300vh] bg-black relative"
      >
        <div className="h-screen flex items-center justify-center w-full sticky top-0">
          <h1 className="text-white text-[4rem] font-sans font-bold absolute z-10">
            AUTOPILOT
          </h1>
        </div>
        <div ref={pageRef} className="sticky top-0 h-screen w-full">
          <Scene />
        </div>
      </div>
    </>
  );
};

export default Page3;
