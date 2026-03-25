// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class", // <--- THIS IS REQUIRED
//   // tailwind.config.js
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ["Oswald", "sans-serif"], // Or any condensed font you prefer
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Oswald", "sans-serif"],
      },
      screens: {
        "3xl": "1500px",
        "4xl": "2000px",
        "5xl": "2500px",
        "6xl": "3000px",
        "7xl": "4000px",
      },
    },
  },
  plugins: [],
};
