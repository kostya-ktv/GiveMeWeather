import { FC } from 'react'
import Card from './Card/Card'
import styles from './week.module.scss'
import { WeekProps } from './week.props'


const Week:FC<WeekProps> = ({days}) => {
  return (
     <>
    <div className={styles.week}>
       {days.daily.length > 1 && days.daily.map((el, i) => i !== 0 && <Card dayItem={el} key={i}/>)}
    </div>
    
    </>
  )
}

export default Week