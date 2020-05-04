module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
