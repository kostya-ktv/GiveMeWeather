import axios, { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { getWeatherByCity_action } from "../store/actions/daily-weather-actions"
import { API_URL, API_KEY } from "../store/constants"
import { WeatherResponseType } from "../store/types/WeatherResponseType"

//FETCH WEATHER
export const getWeatherByCity = (lat: number, lon: number): Promise<AxiosResponse<WeatherResponseType>> => {
   return axios.get(`${API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
}
//FETCH WEATHER FOR 7 days
export const getWeatherForecast = (lat: number, lon: number): Promise<AxiosResponse<WeatherResponseType>> => {
   return axios.get(`${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
}

export const fetchAndSelectCityByCoord = (e:any, dispatch: Dispatch) => {
   const {lat, lon} = JSON.parse(e.value)
   getWeatherByCity_action(lat,lon, dispatch)
}
