import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ThemeContextType } from "../types/theme";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

// https://blog.logrocket.com/how-to-use-react-context-typescript/
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // setting context values theme and function
  const [theme, setTheme] = useState<string>(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // setting context values theme and function

  // set theme in localstorage when changed
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // getting root element and adding theme there
    const root = document.getElementById("root")!;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
