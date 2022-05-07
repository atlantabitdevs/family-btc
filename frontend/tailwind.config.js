module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fam-orange': '#ff9500',
        'fam-bg-dark': '#3B474B'
      },
      backgroundImage: {
        'mountains': "url('../public/mountains.jpg')",
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
}
