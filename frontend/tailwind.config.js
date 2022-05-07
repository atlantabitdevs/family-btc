module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fam-orange': '#ff9500',
        'fam-orange-inactive': '#A68659',
        'fam-bg-dark': '#3B474B',
        'fam-teal': '#56737D'
      },
      backgroundImage: {
        'mountains': "url('../public/mountains.jpg')",
        'snowpeaks': "url('../public/snowpeaks.jpg')",
        'clouds': "url('../public/clouds.jpg')",
        'boulders': "url('../public/boulders.jpg')",
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
}
