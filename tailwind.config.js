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
    },
    extend: {
      fontFamily: {
        external: ["CeraCondensedPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
