/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
