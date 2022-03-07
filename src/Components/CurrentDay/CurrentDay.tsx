import React from 'react'
import GlobalSVGSelector from '../GlobalSVGSelector/GlobalSVGSelector'
import styles from './currentDay.module.scss'

const CurrentDay = () => {
  return (
    <div className={styles.current_day}>
       <div className={styles.top_block}>
          <div className={styles.top_block_wrapper}>
            <div className={styles.temp}>
               20
            </div>
            <div className={styles.day_name}>
               Today
            </div>
         </div>
         <GlobalSVGSelector id='sun'/>
       </div>
       <div className={styles.bottom_block}>
          <div className={styles.time}>
            <span>21:55</span>
          </div>
          <div className={styles.city}>
             <span>TelAviv</span>
          </div>
       </div>
    </div>
  )
}

export default CurrentDay