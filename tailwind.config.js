/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // with blocklist we can ignore any specifie css style already existed
  blocklist: [
    "container",
  ],
  theme: {
    extend: {
      colors:{
        whiteColor: "#ffffff",
        lightGray: "#f8f8f8",
        darkGray: "#e4e4e4",
        lightViolet: "#FCEAFF",
        darkViolet: "#6a1e78",
        blackColor: "#292929",
        darkViolet2: "#EDBEF5",
        lightViolet2: "#FFE5FA",
      },
      fontFamily: {
        Comfortaa: ['Comfortaa', 'Sans'],
      }
    },
  },
  plugins: [],
}
