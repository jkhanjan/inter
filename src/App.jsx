import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import './App.css'
import Page4 from "./components/Page4";

const App = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      onBeforeResize: () => {
        // Optional: Disable scroll on resize
        lenis.onResize = () => {};
      },
    });

    lenis.on();

    return () => {
      lenis.off();
    };
  }, []);

  return (
    <div className="w-[100vw]" ref={appRef}>
        {" "}
        <Page1 />
        <Page4 />
        <Page2 />
    
      <Page3 />
    </div>
  );
};

export default App;
