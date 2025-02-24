/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Tailwind가 적용될 파일들
  theme: {
    extend: {
      colors: {
        primary: "#ff6600", // 기본 primary 색상 변경
      },
      fontFamily: {
        sans: ["Nanum Gothic", "system-ui", "sans-serif"], // 기본 폰트 변경
      },
    },
  },
  plugins: [],
};
