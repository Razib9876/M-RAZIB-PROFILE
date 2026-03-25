import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
];

const ImageSliding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none">
      {/* Decorative Elements - Hidden on very small screens to save space */}
      <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] z-0" />
      <div className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-[#f3e9e0] -z-10" />

      <div className="relative overflow-hidden bg-white p-2 shadow-2xl aspect-[4/5] sm:aspect-auto sm:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full object-cover"
            alt="Portfolio Slide"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSliding;
