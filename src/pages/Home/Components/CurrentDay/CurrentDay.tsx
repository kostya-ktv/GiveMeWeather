import { FC } from 'react'
import { defineIcon } from '../../../../Common/SVGSelector/defineIcon'
import SVGSelector from '../../../../Common/SVGSelector/SVGSelector'
import styles from './currentDay.module.scss'
import { CurrentDayProps } from './currentDay.props'

const CurrentDay:FC<CurrentDayProps> = ({day}) => {
   const {main, weather, name} = day

  return (
    <div className={styles.current_day}>

       <div className={styles.top_block}>
          <div className={styles.top_block_wrapper}>
            <div className={styles.temp}>
               {Math.floor(main.temp)}°
            </div>
            <div className={styles.day_name}>
               Today<br></br>
               {new Date(Date.now()).toLocaleDateString('en-US', {dateStyle: 'long'})}
            </div>
         </div>
         <SVGSelector id={defineIcon(weather[0].id)}/>
       </div>

       <div className={styles.bottom_block}>
          <div className={styles.city}>
             <span>{name}</span>
          </div>
       </div>

    </div>
  )
}

export default CurrentDay