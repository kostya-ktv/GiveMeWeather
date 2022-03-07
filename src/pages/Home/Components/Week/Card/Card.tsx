import { FC } from 'react'
import GlobalSVGSelector from '../../../../../Common/GlobalSVGSelector/GlobalSVGSelector'
import styles from '../week.module.scss'
import { CardProps } from './Card.props'

const Card:FC<CardProps> = ({dayItem}) => {

   const {day, dayInfo, iconId, info, tempDay, tempNight} = dayItem
  return (
    <div className={styles.card}>
       <div className={styles.day}>
          {day}
       </div>
       <div className={styles.day_info}>
          {dayInfo}
       </div>
       <div className={styles.icon}>
          <GlobalSVGSelector id={iconId}/>
       </div>
       <div className={styles.temp_day}>
          {tempDay}
       </div>
       <div className={styles.temp_night}>
          {tempNight}
       </div>
       <div className={styles.info}>
          {info}
       </div>
    </div>
  )
}

export default Card