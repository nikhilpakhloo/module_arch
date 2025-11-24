import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
} from "react";
import { lightTheme, darkTheme } from "../theme";
import { useColorScheme } from "react-native";

export interface Theme {
  mode: "light" | "dark";
  colors: {
    background: string;
    text: string;
    primary: string;
  };
}

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const scheme = useColorScheme(); 

  const selectedTheme = scheme === "dark" ? darkTheme : lightTheme;

  const value = useMemo(() => ({ theme: selectedTheme }), [scheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
