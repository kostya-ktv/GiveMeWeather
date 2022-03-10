import { GET_WEATHER_BY_CITY } from "../constants"
import { DAILY_WEATHER_STATE } from "../states/dailyWeather-state"
import { ActionType } from "../types/types"

export const dailyWeatherReducer = (state = DAILY_WEATHER_STATE, action: ActionType) => {
   switch (action.type) {
      case GET_WEATHER_BY_CITY: return { ...state, ...action.payload }
      default: return state
   }
}