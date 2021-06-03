module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-peach": "#f1dac4",
        "brand-pink": "#ee92c2",
        "brand-navy-blue": "#161b33",
        "brand-deep-blue": "#0D0C1D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
