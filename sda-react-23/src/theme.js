import React, { useMemo, createContext, useState } from "react";

export const darkTheme = {
  colors: {
    text: "#fff",
    bg: "#333",
    accent: "darkgreen",
  },
  borders: {
    radius: 6,
  },
};

export const lightTheme = {
  colors: {
    text: "#333",
    bg: "#fff",
    accent: "lightblue",
  },
  borders: {
    radius: 6,
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const themeContext = useMemo(() => {
    return {
      values: theme,
      toggleTheme: () => {
        setTheme(theme => {
          if (theme === lightTheme) return darkTheme;

          return lightTheme;
        });
      },
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext(null);