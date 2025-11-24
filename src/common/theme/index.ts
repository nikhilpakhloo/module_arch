import { darkColors, lightColors } from "./color";

export const lightTheme = {
  mode: "light",
  colors: lightColors
} as const;

export const darkTheme = {
  mode: "dark",
  colors: darkColors
} as const;
