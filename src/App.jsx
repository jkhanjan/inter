import { useRef, useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import "./App.css";

// Lazy load components
const Page1 = lazy(() => import("./components/Page1"));
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));
const Page4 = lazy(() => import("./components/Page4"));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

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
    <div className="" ref={appRef}>
      <Suspense fallback={<LoadingSpinner />}>
        <Page1 />
        <Page4 />
        <Page2 />
        <Page3 />
      </Suspense>
    </div>
  );
};

export default App;
