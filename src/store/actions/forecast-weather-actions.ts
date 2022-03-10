import { Dispatch } from "redux";
import { getWeatherForecast } from "../../Services/weather-service";
import { GET_FORECAST } from "../constants";

export const getForecast_action = async (lat: number, lon: number, dispatch: Dispatch) => {
   try {
      const response = (await getWeatherForecast(lat, lon)).data
      dispatch({ type: GET_FORECAST, payload: response })
   } catch (error) {
      console.log(error);
   }
}