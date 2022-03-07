import Select from 'react-select'
import { Theme } from '../../../../Context/ThemeContext/ThemeContext';
import { useTheme } from '../../../../Hooks/useTheme';
import { options } from './citySelector.config'


const CitySelector = () => {
  const theme = useTheme();
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
 
  return (
    <>
      <Select 
         options={options} 
         styles={colourStyles}
         defaultValue={options[0]}
      />
    </>
  )
}

export default CitySelector