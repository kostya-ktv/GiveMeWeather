import GlobalSVGSelector from '../../Common/GlobalSVGSelector/GlobalSVGSelector'
import CitySelector from '../../Pages/Home/Components/CitySelector/CitySelector'
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
         <CitySelector/>
      </div>
    </header>
  )
}

export default Header