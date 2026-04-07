/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              primary: "#60A5FA", 
              background: "#F3F4F6", 
              surface: "#FFFFFF",
              accent: "#E0F2FE",   
              textMain: "#0F172A",
              textSub: "#64748B",
              border: "#E2E8F0",
            },
          },
    },
    plugins: [],
  };