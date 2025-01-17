import { useRef, useEffect, useState } from "react";
import Lenis from "lenis";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Loading from "./components/Loading";

const App = () => {
  const appRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on();

    // Simulated loading state
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Replace 3000ms with the desired loading duration

    return () => {
      clearTimeout(loadingTimer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative" ref={appRef}>
      {/* Components are rendered immediately but hidden behind the Loading screen */}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Page1 />
        <Page4 />
        <Page2 />
        <Page3 />
      </div>

      {/* Bluff loading screen */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default App;
