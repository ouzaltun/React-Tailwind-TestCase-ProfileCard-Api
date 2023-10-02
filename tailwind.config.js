/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        mainshadow: "0px 14px 80px rgba(34, 35, 58, 0.5)",
      },
    },
  },
  plugins: [],
};
