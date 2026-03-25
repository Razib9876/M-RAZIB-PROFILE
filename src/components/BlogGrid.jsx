import React from "react";
import { motion } from "framer-motion";
import blogImages from "../assets/blogImages";

const BlogGrid = ({ blogData, setSelectedBlog }) => {
  return (
    <div className="flex flex-col md:flex-row h-80 w-full">
      {blogData.map((blog) => (
        <motion.div
          key={blog.id}
          onClick={() => setSelectedBlog(blog)}
          whileHover={{ flex: 2.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 group cursor-pointer border-r border-white/10 overflow-hidden"
        >
          {/* IMAGE */}
          <img
            src={blogImages[blog.category][0]}
            className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition duration-500"
            alt={blog.title}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-black uppercase tracking-tight md:rotate-0 rotate-90 whitespace-nowrap">
              {blog.category}
            </h2>

            <p className="opacity-0 group-hover:opacity-100 mt-4 text-xs font-bold tracking-[0.2em] uppercase transition duration-300">
              View Project
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogGrid;
