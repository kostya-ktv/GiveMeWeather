import Select from 'react-select'
import { colourStyles, options } from './citySelector.config'


const CitySelector = () => {
   
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