import GlobalSVGSelector from '../../Components/GlobalSVGSelector/GlobalSVGSelector'
import Selector from '../../Components/CitySelector/CitySelector'
import styles from './header.module.scss'

type Props = {}

const Header = (props: Props) => {

  
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
         <div className={styles.logo}>
         <GlobalSVGSelector id='header-logo'/>
         </div>
         <div className={styles.title}>
            Give-me-weather!
         </div>
      </div>
      <div className={styles.wrapper}>
         <div className={styles.change_theme}>
            <GlobalSVGSelector id='change-theme'/>
         </div>
         <Selector/>
      </div>
    </header>
  )
}

export default Header