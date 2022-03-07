import Logo from './../../Assets/Images/Icons/global/header-logo.svg'
import Light from './../../Assets/Images/Icons/global/light.svg'
import Dark from './../../Assets/Images/Icons/global/dark.svg'
import Sun from './../../Assets/Images/Icons/global/sun.svg'
import { GlobalSVGSelectorProps } from './globalSVGSelector.props'



const GlobalSVGSelector = ({id}: GlobalSVGSelectorProps) => {
   switch (id) {
      case 'header-logo': return <Logo/>
      case 'change-theme': return <Light/>
      case 'dark': return <Dark/>
      case 'sun': return <Sun/>
   
      default: return null
   }
}

export default GlobalSVGSelector