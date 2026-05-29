/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F0F0F",
        bg2: "#1A1A1A",
        bg3: "#222222",
        orange: "#FF7A00",
        red: "#FF3D3D",
        cream: "#FFF5E1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};