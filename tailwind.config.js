module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          blue: {
            700: '#00BBB4',
          },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}