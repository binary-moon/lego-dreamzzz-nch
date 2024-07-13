/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#001C4A",
      primary: "#009CDD",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        external: ["CeraCondensedPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
