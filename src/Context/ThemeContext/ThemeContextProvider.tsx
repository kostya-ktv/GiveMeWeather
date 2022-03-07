import { ReactNode, useState } from 'react';
import { changeCssRootVariables } from '../../Util/ChangeCssVariables';
import { storage } from '../../Util/Storage';
import { Theme, ThemeContext } from './ThemeContext';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
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