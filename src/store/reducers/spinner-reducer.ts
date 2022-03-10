import { SPINNER_STOP, SPINNER_START } from "../constants"
import { ActionType } from "../types/types"

const SPINNER_STATE = {
   isLoading: false
}
export const SpinnerReducer = (state = SPINNER_STATE, action: ActionType) => {
   switch (action.type) {
      case SPINNER_STOP: return {...state, isLoading: false}
      case SPINNER_START: return {...state, isLoading: true}  
      default: return state
   }
}