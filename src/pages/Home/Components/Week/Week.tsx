import Card from './Card/Card'
import { days } from './dummy-data'
import styles from './week.module.scss'

type Props = {}

const Week = (props: Props) => {
  return (
    <div className={styles.week}>
       {days.map(el => <Card dayItem={el}/>)}
    </div>
  )
}

export default Week