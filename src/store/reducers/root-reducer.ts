import { combineReducers } from "redux";
import { dailyWeatherReducer } from "./daily-weather-reducer";
import { forecastReducer } from "./forecast-reducer";
import { SpinnerReducer } from "./spinner-reducer";

export const rootReducer = combineReducers({
   daily: dailyWeatherReducer,
   forecast: forecastReducer,
   spinner: SpinnerReducer
})