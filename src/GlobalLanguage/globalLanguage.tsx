import React from "react";

interface ThemeContextProps {
  Language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalLanguage = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export default GlobalLanguage;
