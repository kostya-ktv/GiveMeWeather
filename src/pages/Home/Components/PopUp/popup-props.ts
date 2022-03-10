import { ForecastDay } from "../../../../store/types/ForecastResponseType"

export interface PopUpProps { 
   isShow: React.Dispatch<React.SetStateAction<boolean>>
   day: ForecastDay
}