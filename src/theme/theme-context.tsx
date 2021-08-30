import React, { createContext } from 'react';
import theme, { Theme } from '.';

type Props = {
  children: React.ReactNode;
};

export const themeContext = createContext<Theme>(theme);

function ThemeProvider({ children }: Props): JSX.Element {
  return (
    <themeContext.Provider
      value={{
        ...theme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
