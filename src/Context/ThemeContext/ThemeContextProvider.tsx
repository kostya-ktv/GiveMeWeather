import { FC, ReactNode, useState } from 'react';
import { changeCssRootVariables } from '../../Common/ChangeCssVariables';
import { storage } from '../../Common/Storage';
import { Theme, ThemeContext } from './ThemeContext';

interface Props {
  children: ReactNode;
}

export const ThemeProvider:FC<Props> = ({ children, ...props }) => {
     
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  );
  changeCssRootVariables(theme);

  const changeTheme = (theme: Theme) => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};