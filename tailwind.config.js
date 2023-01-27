/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: { 
    styled: true, 
    themes: [ 
      { dark: { ...require("daisyui/src/colors/themes")["[data-theme=dark]"], 
      "base-100": "#FFFF",
      "custom_color-1":"#4D4CFF"
      }, 
    }, 
  ], 
},
  plugins: [require("daisyui")],
}
