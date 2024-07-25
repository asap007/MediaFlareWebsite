/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        customGray: '#545863',
        customSkin: "#FFE3E3",
        chetwodeBlue: '#6B7AA1',
        capeHoney: '#FFD36E',
        customPurple: '#FF4500',
        customBlue:'#b6eaea',
        redWood:'#5e2710',
        blue:'#4B0082'
      },
    },
  },
  plugins: [],
}

