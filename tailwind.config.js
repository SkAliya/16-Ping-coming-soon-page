/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": " #4f7df3",
      "color-input-field": "hsl(223, 100%, 88%)",
      "color-error-message": "hsl(354, 100%, 66%)",
      "color-gray-light": "hsl(0, 0%, 59%)",
      "color-dark-blue": " hsl(209, 33%, 12%)",
    },
    extend: {},
  },
  plugins: [],
};
