module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      ontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'main-blue': '#011f4b',
        'secondary-blue': '#00518a',
      }, 
      backgroundImage: {
        'main-background': "linear-gradient(to bottom, #011f4b 85%, #00518a);",
      }
    },
  },
  plugins: [],
}
