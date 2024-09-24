/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],

  // corePlugins: {
  //   preflight: false, // This disables Tailwind's Preflight
  // }
}

// npx tailwindcss -i ./src/input.css -o ./output/output.css --watch

