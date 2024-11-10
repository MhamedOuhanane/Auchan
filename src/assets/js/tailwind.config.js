/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // with blocklist we can ignore any specifie css style already existed
  blocklist: [
    // "container",
  ],
  theme: {
    extend: {
      colors:{
        whiteColor: "#ffffff",
        lightGray: "#f8f8f8",
        darkGray: "#e4e4e4",
        lightViolet: "#da98e6",
        darkViolet: "#6a1e78",
        blackColor: "#292929",
      }
    },
  },
  plugins: [],
}

