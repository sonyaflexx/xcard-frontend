const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: 'rgb(0, 0, 0)',
      blackHover: 'rgb(34, 34, 34)',
      white: "rgb(255, 255, 255)",
      gray: {
        "20": "rgb(226, 226, 232)",
        "50": "rgb(246, 246, 249)",
        "100": "rgb(240,240,244)",
        "200": "rgb(230, 230, 239)",
        "300": "rgb(140, 140, 161)",
        "350": "rgb(48,48,69)",
        "400": "rgb(48, 48, 69)",
        "420": "rgb(36,36,51)",
        "430": "rgb(30, 30, 42)",
        "450": "rgb(31, 31, 56)",
        "475": "rgb(30, 30, 42)",
        "500": "rgb(25, 25, 36)",
        "600": "rgb(19, 19, 27)"
      },
      green: {
        "money": "rgb(76, 195, 138)",
        "20": "rgb(103,213,114)",
        "40": "rgb(51, 198, 65)",
        "50": "rgb(0,184,18)",
        "100": "rgb(0,147,14)",
        "200": "rgb(24, 121, 78)",
        "300": "rgb(0,111,11)"
      },
      red: {
        regular: "rgb(205, 43, 49)",
        soft: "rgb(255, 99, 105)"
      },
      blue: {
        "50": "rgb(237,246,255)",
        "200": "rgb(0, 106, 220)"
      },
      disabled: {
        "bg": {
          "light": "rgb(232, 232, 237)",
          "dark": "rgb(52, 52, 66)",
        },
        "text": {
          "light": "rgb(160, 160, 176)",
          "dark": "rgb(88, 88, 106)" 
        }
      },
      yellow: {
        "softbg": "#ffce1f"
      },
      moneychange: {
        dark: {
          up: {
            bg: "rgb(15, 41, 30)",
            text: "rgb(76, 195, 138)"
          },
          down: {
            bg: "rgb(60, 24, 26)",
            text: "rgb(255, 99, 105)"
          }
        },
        light: {
          up: {
            bg: "",
            text: ""
          },
          down: {
            bg: "",
            text: ""
          }
        }
      }
    }
  },
  darkMode: "selector",
  plugins: [nextui()],
}


