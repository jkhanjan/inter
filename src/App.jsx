import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { useRef, useEffect } from "react";
import Lenis from "lenis";

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
    <div ref={appRef}>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default App;
