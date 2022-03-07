import styles from './currentDayDetail.module.scss'
import cloudImg from '../../Assets/Images/cloud.png'
const CurrentDayDetail = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20 - as 17'
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '765mm '
    },
    {
      icon_id: 'precipilation',
      name: 'Precipilation',
      value: 'Witout precipilations'
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 m/s north'
    }
  ]
  return (
    <div className={styles.day_info}>
      <div className={styles.day_items}>
         {items.map( item => {
           
         })}
      </div>
        <img src={cloudImg} alt='cloud'/>
    </div>
  )
}

export default CurrentDayDetail