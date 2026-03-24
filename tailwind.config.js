/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <--- THIS IS REQUIRED
  // tailwind.config.js
  theme: {
    extend: {
      fontFamily: {
        serif: ["Oswald", "sans-serif"], // Or any condensed font you prefer
      },
    },
  },
  plugins: [],
};
