import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import BlogCarousel from "./BlogCarousel";
import BlogContent from "./BlogContent";

const BlogOverlay = ({ selectedBlog, setSelectedBlog }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <AnimatePresence>
      {selectedBlog && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 100 }}
          className="fixed inset-0 z-50 bg-white text-black overflow-y-auto"
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedBlog(null)}
            className="fixed top-8 right-8 z-[60] bg-black text-white p-4 rounded-full hover:scale-110 transition"
          >
            <FiX size={24} />
          </button>

          <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col lg:flex-row gap-16">
            {/* LEFT */}
            <BlogCarousel
              selectedBlog={selectedBlog}
              imgIndex={imgIndex}
              setImgIndex={setImgIndex}
            />

            {/* RIGHT */}
            <BlogContent selectedBlog={selectedBlog} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogOverlay;
