import { useTheme } from "./useTheme";
import { Theme } from '../Context/ThemeContext/ThemeContext';

export const useConfigureSelectorStyle = () => {
   const theme = useTheme()
   const colourStyles = {
      control: (styles: any) => ({
        ...styles,
        backgroundColor:
     
          theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100,
      }),
      singleValue: (styles: any) => ({
        ...styles,
    
        color: theme.theme === Theme.DARK ? '#fff' : '#000',
      }),
    };
    return colourStyles
}