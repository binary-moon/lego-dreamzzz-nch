/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#001C4A",
      primary: "#009CDD",
      secondary: "#EF4156",
      body: "#021C47",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#D9D9D9",
      lightgrey: "#E1E1E1",
    },
    extend: {
      fontFamily: {
        external: ["CeraCondensedPro", "sans-serif"],
      },
      textShadow: {
        custom: "0px 0px 14px #009CDD",
      },
      boxShadow: {
        custom: "0px 0px 26px 0px #009CDD",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "0px 0px 14px #009CDD",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
