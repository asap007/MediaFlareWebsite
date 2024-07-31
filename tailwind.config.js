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
        blue:'#b8ecf6',
        greenblue: "#15C1C3",
        neonGreen: '#39FF14', 
        neonPink: '#FF6EC7', 
        neonBlue: '#1F51FF',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
        edu: ['"Edu AU VIC WA NT Hand"', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
