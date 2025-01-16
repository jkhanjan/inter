import React from "react";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-12 pt-24 sm:pt-32">
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-8">
        <motion.div
          className="space-y-2 sm:space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-3xl sm:text-6xl lg:text-8xl font-bold leading-[1.2]">
            Hire cars drivers
          </h1>
          <h2 className="text-white text-3xl sm:text-6xl lg:text-8xl font-bold leading-[1.2]">
            100% trained & verified
          </h2>
        </motion.div>
        <motion.p
          className="text-white text-base sm:text-xl max-w-2xl leading-[1.6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Experience premium on-demand drivers for your own car
        </motion.p>
        <motion.p
          className="font-bold text-gray-400 text-sm sm:text-base leading-[1.5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          -A CARS24 COMPANY-
        </motion.p>
      </div>
    </main>
  );
};

export default MainContent;
