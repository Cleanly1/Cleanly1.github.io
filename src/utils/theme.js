import React from "react";

export const themes = {
  dark: {
    color: "rgba(245, 245, 245, 1)",
    background: "rgba(15, 15, 15, 1)",
    button: "rgba(255, 255, 255, 0.2)",
    border: "black",
    borderActive: "white",
    backgroundActive: "rgba(0, 0, 0, 0.9)",
    borderNav: "rgba(255, 255, 255, 0.1)",
    textColor: "whitesmoke",
    message: "rgba(255, 255, 255, 0.1)",
  },
  light: {
    color: "rgba(15, 15, 15, 1)",
    background: "rgba(220, 220, 220, 1)",
    button: "rgba(0, 0, 0, 0.3)",
    border: "rgba(0, 0, 0, 0.2)",
    borderActive: "black",
    backgroundActive: "rgba(200, 200, 200, 1)",
    borderNav: "rgba(0, 0, 0, 0.2)",
    textColor: "black",
    message: "rgba(255, 255, 255, 0.7)",
  },
};
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
