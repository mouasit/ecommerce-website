/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#F8B330",
        bluePrimary: "#27497F",
        grayPrimary: "#959595",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        ms: "447px",
      },
    },
  },
  plugins: [],
};
