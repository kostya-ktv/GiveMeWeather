import { GET_FORECAST } from "../constants"
import { FORECAST_STATE } from "../states/forecast-state"
import { ActionType } from "../types/types"

export const forecastReducer = (state = FORECAST_STATE, action: ActionType) => {
   switch (action.type) {
      case GET_FORECAST: return { ...state, ...action.payload }
      default: return state
   }
}