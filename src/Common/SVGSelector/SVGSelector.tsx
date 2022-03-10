import Logo from './../../Assets/Images/Icons/global/header-logo.svg'
import Light from './../../Assets/Images/Icons/global/light.svg'
import Dark from './../../Assets/Images/Icons/global/dark.svg'
import Sun from '../../Assets/Images/Icons/global/sun.svg'
import Precipitation from '../../Assets/Images/Icons/item_detail/precipitation.svg'
import Pressure from '../../Assets/Images/Icons/item_detail/pressure.svg'
import Temp from '../../Assets/Images/Icons/item_detail/temp.svg'
import Wind from '../../Assets/Images/Icons/item_detail/wind.svg'
import Close from '../../Assets/Images/Icons/item_detail/close.svg'
import Drizzle from '../../Assets/Images/Icons/global/drizzle.svg'
import Rain from '../../Assets/Images/Icons/global/rain.svg'
import Snow from '../../Assets/Images/Icons/global/snow.svg'
import Mist from '../../Assets/Images/Icons/global/mist.svg'
import Cloud from '../../Assets/Images/Icons/global/cloud.svg'
import Storm from '../../Assets/Images/Icons/global/storm.svg'
import Clear from '../../Assets/Images/Icons/global/clear.svg'
import Moon from '../../Assets/Images/Icons/global/moon.svg'
import Spinner from '../../Assets/spinner.svg'
import { SVGSelectorProps } from './SVGSelector.props'

const SVGSelector = ({id}: SVGSelectorProps) => {

   switch (id) {

      case 'header-logo': return <Logo/>
      case 'spinner': return <Spinner/>
      case 'drizzle': return <Drizzle/>
      case 'rain': return <Rain/>
      case 'snow': return <Snow/>
      case 'mist': return <Mist/>
      case 'cloud': return <Cloud/>
      case 'light': return <Light/>
      case 'moon': return <Moon/>
      case 'dark': return <Dark/>
      case 'clear': return <Clear/>
      case 'sun': return <Sun/>
      case 'precipitation': return <Precipitation/>
      case 'temp': return <Temp/>
      case 'wind': return <Wind/>
      case 'storm': return <Storm/>
      case 'pressure': return <Pressure/>
      case 'close': return <Close/>
   
      default: return null
   }
}

export default SVGSelector