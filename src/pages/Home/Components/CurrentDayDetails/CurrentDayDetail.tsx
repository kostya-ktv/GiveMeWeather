import styles from './currentDayDetail.module.scss'
import { FC } from 'react'
import { CurrentDayProps } from '../CurrentDay/currentDay.props'
import SVGSelector from '../../../../Common/SVGSelector/SVGSelector'

const CurrentDayDetail:FC<CurrentDayProps> = ({day}) => {
  const {main, weather, wind} = day

  return (
    <div className={styles.day_info}>
      <div className={styles.item}>         
          <SVGSelector id='temp'/>
          <p>Temperature: 
            <span> {main.temp}°</span>
          </p>
      </div>
      <div className={styles.item}>      
        <SVGSelector id='pressure'/>
        <p>Pressure:
            <span> {main.pressure} Hg.</span>
        </p>
      </div>
      <div className={styles.item}>   
        <SVGSelector id='precipitation'/>
        <p>Precipitation: 
            <span> {weather[0].description}</span>
        </p>
      </div>
      <div className={styles.item}>   
        <SVGSelector id='wind'/>
        <p>Wind:
            <span> {wind.speed} m/s</span>
        </p>
      </div>

    </div>
  )
}

export default CurrentDayDetail