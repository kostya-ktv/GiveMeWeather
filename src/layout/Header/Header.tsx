import SVGSelector from '../../Common/SVGSelector/SVGSelector'
import { Theme } from '../../Context/ThemeContext/ThemeContext'
import { useTheme } from '../../Hooks/useTheme'
import CitySelector from '../../Pages/Home/Components/CitySelector/CitySelector'
import styles from './header.module.scss'

const Header = () => {

   const theme = useTheme();
   function change() {
      //@ts-ignore
      theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }
  
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
         <div className={styles.logo}>
         <SVGSelector id='header-logo'/>
         
         </div>
         <div className={styles.title}>
            Give-me-weather!
         </div>
      </div>
      <div className={styles.wrapper}>
         <div className={styles.change_theme} onClick={change}>
            <SVGSelector id='dark'/>     
         </div>
         <CitySelector/>
      </div>
    </header>
  )
}

export default Header