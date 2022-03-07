import CurrentDay from '../../Components/CurrentDay/CurrentDay'
import CurrentDayDetail from '../../Components/CurrentDayDetails/CurrentDayDetail'
import styles from './home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
       <CurrentDay/>
       <CurrentDayDetail/>
   </div>
  )
}

export default Home