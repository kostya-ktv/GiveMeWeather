import CurrentDay from './Components/CurrentDay/CurrentDay'
import CurrentDayDetail from './Components/CurrentDayDetails/CurrentDayDetail'
import Week from './Components/Week/Week'
import styles from './home.module.scss'
import { items } from './Components/CurrentDayDetails/dummy-data'

const Home = () => {
  return (
  <>
    
    <div className={styles.home}>
        <div className={styles.wrapper}>
          <CurrentDay/>
          <CurrentDayDetail data={items}/>
        </div>
        <Week/>
        
    </div>

   </>
  )
}

export default Home