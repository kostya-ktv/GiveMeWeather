import Logo from './../../Assets/Images/Icons/global/header-logo.svg'
import Light from './../../Assets/Images/Icons/global/light.svg'
import Dark from './../../Assets/Images/Icons/global/dark.svg'
import Sun from '../../Assets/Images/Icons/global/sun.svg'
import Precipitation from '../../Assets/Images/Icons/item_detail/precipitation.svg'
import Pressure from '../../Assets/Images/Icons/item_detail/pressure.svg'
import Temp from '../../Assets/Images/Icons/item_detail/temp.svg'
import Wind from '../../Assets/Images/Icons/item_detail/wind.svg'
import Close from '../../Assets/Images/Icons/item_detail/close.svg'
import { GlobalSVGSelectorProps } from './globalSVGSelector.props'



const GlobalSVGSelector = ({id}: GlobalSVGSelectorProps) => {
   switch (id) {
      case 'header-logo': return <Logo/>
      case 'change-theme': return <Light/>
      case 'dark': return <Dark/>
      case 'sun': return <Sun/>
      case 'precipitation': return <Precipitation/>
      case 'temp': return <Temp/>
      case 'wind': return <Wind/>
      case 'pressure': return <Pressure/>
      case 'close': return <Close/>
   
      default: return null
   }
}

export default GlobalSVGSelector