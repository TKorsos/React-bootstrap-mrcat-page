import { createContext } from "react";

export const themes = {
    light: {
      background: "#efefef",
      color: "#232323"
    },
    dark: {
      background: "#232323",
      color: "#efefef"
    }
}

export const ThemeContext = createContext();