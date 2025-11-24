import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { lightTheme, darkTheme } from "../theme";

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
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev.mode === "light" ? darkTheme : lightTheme));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

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
