import CurrentDay from './Components/CurrentDay/CurrentDay'
import CurrentDayDetail from './Components/CurrentDayDetails/CurrentDayDetail'
import Week from './Components/Week/Week'
import styles from './home.module.scss'
import { useSelector } from 'react-redux'
import { GlobalStateType } from '../../store/types/types'

const Home = () => {
  const {daily, forecast} = useSelector((state:GlobalStateType) => state)
  
  return (
  <>
    
    <div className={styles.home}>
        <div className={styles.wrapper}>
          <CurrentDay day={daily}/>
          <CurrentDayDetail day={daily}/>
        </div>
        <div className={styles.week}>
          <Week days={forecast}/>
        </div>      
    </div>
    <a rel='noreferrer' href='https://github.com/kostya-ktv' target='_blank'>© Created by Kostya Kotov, 2022</a>

   </>
  )
}

export default Home