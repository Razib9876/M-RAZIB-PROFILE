import React, { useState } from "react";
import BlogGrid from "../components/BlogGrid";
import BlogOverlay from "../components/BlogOverlay";
import blogData from "../assets/blogData";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section
      id="blogs"
      className=" bg-stone-100 dark:bg-gray-950
  min-h-screen
  transition-colors duration-500 overflow-hidden w-full "
    >
      {/* SECTION HEADER */}
      <div className=" pb-10 mb-10 pl-6 ">
        <div className=" border-l-2 border-base-content ">
          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase font-serif pl-6">
            Blogs | Learning Journey
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p
          className="text-zinc-500 dark:text-zinc-400
tracking-wide transition-colors duration-500 
text-[clamp(0.8rem,3vw,4rem)]   
lg:text-[clamp(0.5rem,1vw+0.25rem,3rem)] mt-8"
        >
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
