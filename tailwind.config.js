/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },

        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        light: {
          colors: { primary: "#00668c", foreground: "#d4eaf7" },
        },
        dark: {},
      },
    }),
  ],
};

//https://colorhunt.co/palette/35155d512b814477ce8cabff
// --primary-100:#d4eaf7;
// --primary-200:#b6ccd8;
// --primary-300:#3b3c3d;
// --accent-100:#71c4ef;
// --accent-200:#00668c;
// --text-100:#1d1c1c;
// --text-200:#313d44;
// --bg-100:#fffefb;
// --bg-200:#f5f4f1;
// --bg-300:#cccbc8;
