import React from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import blogImages from "../assets/blogImages";

const BlogCarousel = ({ selectedBlog, imgIndex, setImgIndex }) => {
  const images = blogImages[selectedBlog.category];

  const nextImg = () =>
    setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevImg = () =>
    setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-20">
        <div className="relative aspect-square overflow-hidden bg-gray-100 group">
          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />

          {/* NAV */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevImg}
              className="bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={nextImg}
              className="bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-4 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 ${
                i === imgIndex ? "bg-black" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
