module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'main-blue': '#011f4b',
        'secondary-blue': '#00518a',
        'start-button': '#005b96',
        'join-button': '#b3cde0',
      }, 
      backgroundImage: {
        'main-background': "linear-gradient(to bottom, #011f4b 80%, #00518a);",
      }
    },
  },
  plugins: [],
}
