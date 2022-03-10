import { FC, useState } from 'react'
import { defineIcon } from '../../../../../Common/SVGSelector/defineIcon'
import SVGSelector from '../../../../../Common/SVGSelector/SVGSelector'
import PopUp from '../../PopUp/PopUp'
import styles from '../week.module.scss'
import { CardProps } from './Card.props'

const Card:FC<CardProps> = ({dayItem}) => {
   const [isShowPopUp, setShowPopUp] = useState<boolean>(false);

   const {dt, weather, feels_like} = dayItem

  return (
     <>
      {isShowPopUp && <PopUp/>}
      <div className={styles.card} onClick = {() => setShowPopUp(!isShowPopUp)}>
         <div className={styles.day}>
            {new Date(dt * 1000).toLocaleDateString('en-GB', { weekday: 'long'})}
         </div>
         <div className={styles.day_info}>
            {new Date(dt * 1000).toLocaleDateString('en-GB')}
         </div>

         <div className={styles.temp_day}>
         <SVGSelector id={defineIcon(weather[0].id)}/>
            {Math.ceil(feels_like.day)}°
            
         </div>
         <div className={styles.temp_night}>
         <SVGSelector id='moon'/>
            {Math.ceil(feels_like.night)}°
            
         </div>
         <div className={styles.info}>
            {weather[0].description}
         </div>
      </div>
    </>
  )
}

export default Card