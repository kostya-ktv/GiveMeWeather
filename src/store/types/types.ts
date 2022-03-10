import { rootReducer } from "../reducers/root-reducer";
import { WeatherResponseType } from "./WeatherResponseType";

export type GlobalStateType = ReturnType<typeof rootReducer>

export type ActionType = {
  type: string,
  payload?: WeatherResponseType
}

export type SearchCityType = {
  label : string,
  value: {
    lat: number,
    lon: number
  }
}
