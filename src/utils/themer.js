import React, { useState, useEffect } from 'react';

export const themes = {
  cfl3: {
    primary: "goldenrod",
    secondary: " #96031A",
    ternary: "goldenrod",
    jingle: "#96031A",
  },
  cfl4: {
    primary: "#67e8fe",
    secondary: " #320085",
    ternary: "#e60062",
    jingle: "#e60062"
  }
}

export const ThemeSelectorContext = React.createContext({
  themeName: "cfl4",
  toggleTheme: () => { }
});

const setCSSVariables = theme => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
};

export default ({ children }) => {
  const [themeName, setThemeName] = useState("cfl4");
  const [theme, setTheme] = useState(themes[themeName]);

  useEffect(() => {
    setCSSVariables(theme)
  })

  const toggleTheme = () => {
    if (theme === themes.cfl4) {
      setTheme(themes.cfl3);
      setThemeName("cfl3");
    } else {
      setTheme(themes.cfl4);
      setThemeName("cfl4");
    }
  };

  return (
    <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};