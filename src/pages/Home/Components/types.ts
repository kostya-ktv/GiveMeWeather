import { GlobalSVGSelectorProps } from "../../../Common/GlobalSVGSelector/globalSVGSelector.props"

export type ItemDetailType = {
   iconId: IconName
   name: string
   value: string
}
export type DaysType = {
   day: string
   dayInfo: string
   iconId: IconName
   tempDay: string
   tempNight: string
   info: string
}
export type IconName = 'header-logo' | 'change-theme' | 'dark' | 'sun'
   | 'wind' | 'precipitation' | 'pressure' | 'temp' 