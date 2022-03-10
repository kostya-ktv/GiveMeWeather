import { FC } from 'react'
import { defineIcon } from '../../../../Common/SVGSelector/defineIcon'
import SVGSelector from '../../../../Common/SVGSelector/SVGSelector'
import { PopUpProps } from './popup-props'
import styles from './popup.module.scss'

const PopUp:FC<PopUpProps> = ({isShow, day}) => {
  console.log(day);
  
  const {weather, dt, temp, pressure, wind_speed} = day
  return (
    <div className={styles.popup}>
      <div className={styles.box}>

        <div className={styles.header}>
            <div className={styles.close} onClick={() => isShow(false)}>
               <SVGSelector id='close'/>
            </div>
            <p className={styles.temp}>
             {Math.floor(temp.day)}°
            </p>
            <p className={styles.icon}>
            <SVGSelector id={defineIcon(weather[0].id)}/>
            </p>
            <p className={styles.day}>
               {new Date(dt * 1000).toLocaleDateString('en-GB', { weekday: 'long'})} <br></br>
               {new Date(dt * 1000).toLocaleDateString('en-GB')}
            </p>
            
        </div>

        <div className={styles.body}>
          <div>
            <p>
              Min: {temp.min}°
            </p>
            <p>
              Max: {temp.max}°
            </p>

          </div>
          <div className={styles.details}>
              <div className={styles.moon}>
                <SVGSelector id='moon'/> Night: {temp.night}°
              </div>
              <div className={styles.pressure}>
                <SVGSelector id='pressure'/> Pressure: {pressure} Hg.
              </div>
              <div className={styles.precipitation}>
                <SVGSelector id='precipitation'/> {weather[0].description}
              </div>
              <div className={styles.wind}>
                <SVGSelector id='wind'/> Wind: {wind_speed} m/s
              </div>
          </div>
          

        </div>
      </div>
   </div>
  )
}

export default PopUp