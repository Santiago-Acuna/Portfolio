import React from "react";

interface LanguageStateProps {
  Language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface VisibleComponentsStateProps {
  Components: Array<React.FC>;
  setComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
}

interface AllComponentsStateProps {
  AllComponents: Array<React.FC>;
  setAllComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
}

interface IsComponentVisibleStateProps {
  IsVisible: { component: string; id: string };
  setIsVisible: React.Dispatch<
    React.SetStateAction<{ component: string; id: string }>
  >;
}

export const GlobalLanguageState = React.createContext<
  LanguageStateProps | undefined
>(undefined);

export const GlobalVisibleComponentsState = React.createContext<
  VisibleComponentsStateProps | undefined
>(undefined);
export const GlobalAllComponentsState = React.createContext<
  AllComponentsStateProps | undefined
>(undefined);

export const IsComponentVisibleState = React.createContext<
  IsComponentVisibleStateProps | undefined
>(undefined);
