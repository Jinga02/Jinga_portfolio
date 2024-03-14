/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(-45deg,#ff7b00,#ee0979)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};
