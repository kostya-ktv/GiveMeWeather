import Card from './Card/Card'
import { days } from './dummy-data'
import Tabs from './Tabs/Tabs'
import styles from './week.module.scss'

type Props = {}

const Week = (props: Props) => {
  return (
     <>
     <Tabs/>
    <div className={styles.week}>
       {days.map((el,i) => <Card key={i} dayItem={el}/>)}
    </div>
    
    </>
  )
}

export default Week