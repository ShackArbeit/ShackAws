import type { Config } from "tailwindcss";
import {createThemes} from 'tw-colors'
import colors from 'tailwindcss/colors'

// 定義基本顏色
const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// 定義相反顏色
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

// 設定 light & dark 的轉換函式
const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    // Object.entries 會返回一個 Array,可以與 forEach 並用
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

// 將轉換函式實體化
const lightTheme=generateThemeObject(colors,shadeMapping)
const darkTheme=generateThemeObject(colors,shadeMapping,true)

// 將實體化的函式做補充
const themes={
  light:{
    ...lightTheme,
    white:"#ffffff"
  },
  dark:{
    ...darkTheme,
    white:colors.gray["950"],
    black: colors.gray["50"],
  }
}

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
