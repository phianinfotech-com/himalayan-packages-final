/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
],
  
  theme: {
    extend: {
     
    },
  },

  daisyui: {
    themes: [
      {
        abhi: {
          primary: "#1a97cd",
          
          secondary: "#ce3d65",

          accent: "#f8860d",

          neutral: "#1f2937",

          "base-100": "#ffffff",

          info: "#bfdbfe",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require('tailwind-scrollbar-hide') ,require("daisyui")],
};
