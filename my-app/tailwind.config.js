/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tailwind를 적용할 파일 경로 설정 (중요!)
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // 2. 스티치 디자인에서 가져온 커스텀 설정
      colors: {
        primary: "#4F46E5",
        "background-light": "#ffffff",
        "background-dark": "#111827",
        "surface-light": "#f3f4f6",
        "surface-dark": "#1f2937",
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
}