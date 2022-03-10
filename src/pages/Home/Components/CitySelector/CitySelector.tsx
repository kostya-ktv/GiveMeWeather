//@ts-nocheck
import cities from 'cities.json';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select'
import { useConfigureSelectorStyle } from '../../../../Hooks/useConfigureSelectorStyle';
import { fetchAndSelectCityByCoord } from '../../../../Services/weather-service';
import { SPINNER_STOP, SPINNER_START } from '../../../../store/constants';

const CitySelector = () => {
  const colourStyles = useConfigureSelectorStyle()
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('')
  const [options, setOptions] = useState<Array<{value: string, label: string}>>()

  
  useEffect(() => {
    
    if(search.length > 2 && search.length < 4) {
      dispatch({type: SPINNER_START})

        setTimeout(() => {  
        const filtered = cities.filter(el => el.name.includes(search))  
        const options = filtered.map((el:any) => {
          let option = {
              value: JSON.stringify({lat: el.lat, lon: el.lng}),
              label: `${el.name}-${el.country}`
            } 
            return option
        }) 
        setOptions(options)

      dispatch({type: SPINNER_STOP})
      }, 2000)   
    }
  }, [search])

  return (
    <>
      <Select 
         options={options && options} 
         autoFocus
         onChange={(e) => fetchAndSelectCityByCoord(e, dispatch)}
         styles={colourStyles}
         value={search}
         isSearchable={true}   
         onKeyDown={(e) => setSearch(e.target.value)}
        />
    </>
  )
}

export default CitySelector