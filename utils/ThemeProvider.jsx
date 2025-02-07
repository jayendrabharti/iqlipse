"use client";

import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => initialThemeHandler(), []);

  function isLocalStorageEmpty() {
    return !localStorage.getItem('theme');
  }

  function initialThemeHandler() {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('theme', 'dark');
      document?.querySelector("body")?.classList.add('dark');
      setTheme('dark');
    } else {
      const savedTheme = localStorage.getItem('theme');
      setTheme(savedTheme);
      document?.querySelector("body")?.classList.add(savedTheme);
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem('theme', 'dark');
        document?.querySelector("body")?.classList.remove('light');
        document?.querySelector("body")?.classList.add('dark');
        return 'dark';
      } else {
        localStorage.setItem('theme', 'light');
        document?.querySelector("body")?.classList.remove('dark');
        document?.querySelector("body")?.classList.add('light');
        return 'light';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div style={{ overflowY: 'auto', height: '100%', width: '100%' }}>
            {children}
          </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
