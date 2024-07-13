/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#F8B330",
        bluePrimary: "#27497F",
        blueSky: "#75C2F6",
        grayPrimary: "#959595",
        grayLight: "#F6F6F6",
        redError: "#FF5656",
        success: "#307851",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "375px",
        ms: "447px",
        mxs: "483px",
        mlg: "1105px",
        mmd: "907px",
        xlg: "1350px",
        "2xlg": "1404px",
        mxl: "955px",
      },
      boxShadow: {
        xs: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
      },
      opacity: {
        1: "0.4",
      },
    },
  },
  plugins: [],
};
