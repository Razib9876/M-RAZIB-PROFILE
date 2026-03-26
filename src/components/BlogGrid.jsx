// import React from "react";
// import { motion } from "framer-motion";
// import blogImages from "../assets/blogImages";

// const BlogGrid = ({ blogData, setSelectedBlog }) => {
//   return (
//     <div className="flex flex-col md:flex-row h-80 w-full">
//       {blogData.map((blog) => (
//         <motion.div
//           key={blog.id}
//           onClick={() => setSelectedBlog(blog)}
//           whileHover={{ flex: 2.5 }}
//           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           className="relative flex-1 group cursor-pointer border-r border-white/10 overflow-hidden"
//         >
//           {/* IMAGE */}
//           <img
//             src={blogImages[blog.category][0]}
//             className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition duration-500"
//             alt={blog.title}
//           />

//           {/* OVERLAY */}
//           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

//           {/* TEXT */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-black uppercase tracking-tight md:rotate-0 rotate-90 whitespace-nowrap">
//               {blog.category}
//             </h2>

//             <p className="opacity-0 group-hover:opacity-100 mt-4 text-xs font-bold tracking-[0.2em] uppercase transition duration-300">
//               View Project
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default BlogGrid;
import React from "react";
import { motion } from "framer-motion";
// Ensure this path matches your file structure exactly
import blogImages from "../assets/blogImages";

const BlogGrid = ({ blogData, setSelectedBlog }) => {
  // Fallback image in case a category is missing
  const fallbackImg =
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="flex flex-col md:flex-row h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl">
      {blogData.map((blog, index) => {
        // Safe check for the image source
        const imgSrc = blogImages?.[blog.category]?.[0] || fallbackImg;

        return (
          <motion.div
            key={blog.id || index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onClick={() => setSelectedBlog(blog)}
            whileHover={{ flex: 4 }}
            className="relative flex-1 group cursor-pointer border-r border-white/5 overflow-hidden transition-[flex] duration-700 ease-[0.16, 1, 0.3, 1]"
          >
            {/* BACKGROUND IMAGE WITH SMART HOVER */}
            <motion.img
              src={imgSrc}
              alt={blog.title}
              className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
            />

            {/* DYNAMIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

            {/* CONTENT LAYER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              {/* CATEGORY NAME - Rotates on mobile, stays flat on hover */}
              <motion.h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-white drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                {blog.category}
              </motion.h2>

              {/* REVEALED CONTENT */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm mt-2 mb-6 line-clamp-2 px-4 max-w-[200px]">
                  {blog.title}
                </p>

                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-5 py-2 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-xl"
                >
                  View Post
                </motion.span>
              </div>
            </div>

            {/* ACTIVE STATE INDICATOR */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-700" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BlogGrid;
