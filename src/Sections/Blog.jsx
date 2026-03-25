import React, { useState } from "react";
import BlogGrid from "../components/BlogGrid";
import BlogOverlay from "../components/BlogOverlay";
import blogData from "../assets/blogData";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section
      id="blogs"
      className="bg-white dark:bg-black text-black dark:text-white overflow-hidden w-full transition-colors duration-500"
    >
      {/* SECTION HEADER */}
      <div className="px-6 md:px-16  pb-10">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase font-serif">
          Blogs | Learning Journey
        </h2>

        {/* LINE */}
        <div className="w-24 h-[2px] bg-[#be8558] mt-4"></div>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed transition-colors">
          A collection of my hands-on learning experiences, real-world projects,
          and technical explorations as I grow as a full-stack developer. Each
          entry reflects problem-solving, design thinking, and continuous
          improvement.
        </p>
      </div>

      {/* GRID */}
      <BlogGrid blogData={blogData} setSelectedBlog={setSelectedBlog} />

      {/* OVERLAY */}
      <BlogOverlay
        selectedBlog={selectedBlog}
        setSelectedBlog={setSelectedBlog}
      />
    </section>
  );
};

export default Blog;
