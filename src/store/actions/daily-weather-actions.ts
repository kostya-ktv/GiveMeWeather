import { Dispatch } from "redux";
import { getWeatherByCity, getWeatherForecast } from "../../Services/weather-service"
import { GET_FORECAST, GET_WEATHER_BY_CITY } from "../constants";

export const getWeatherByCity_action = async (lat: number, lon: number, dispatch: Dispatch) => {

   try {

      const response = (await getWeatherByCity(lat, lon)).data
      dispatch({ type: GET_WEATHER_BY_CITY, payload: response })

      const forecast = (await getWeatherForecast(lat, lon)).data
      dispatch({ type: GET_FORECAST, payload: forecast })

      localStorage.setItem('city', JSON.stringify(
         {
          name: response.name, 
          lat: response.coord.lat,
          lon: response.coord.lon
         }))
   } catch (error) {
      console.log('action error');
      
      console.log(error);
   }
}