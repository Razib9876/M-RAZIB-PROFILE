import React from "react";

const BlogContent = ({ selectedBlog }) => {
  return (
    <div className="lg:w-1/2">
      <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
        {selectedBlog.category} // Case Study
      </span>

      <h1 className="text-5xl md:text-6xl font-black uppercase mt-4 mb-8 leading-tight">
        {selectedBlog.title}
      </h1>

      <div className="space-y-6 text-xl leading-relaxed text-gray-700">
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
          {selectedBlog.description}
        </p>
      </div>

      {/* TAGS */}
      <div className="mt-12 pt-12 border-t border-gray-100">
        <h4 className="font-bold uppercase mb-4">Topics Mastered:</h4>

        <div className="flex flex-wrap gap-2">
          {selectedBlog.topics.map((topic) => (
            <span
              key={topic}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
