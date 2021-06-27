module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      gradientColorStops: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
