import styles from './currentDayDetail.module.scss'
import cloudImg from '../../../../Assets/Images/cloud.png'
import ItemDetail from './ItemDetail/ItemDetail'
import { ItemDetailType } from '../../../../types'
import { FC } from 'react'
import { CurrentDayDetailsProps } from './CurrentDayDetail.props'

const CurrentDayDetail:FC<CurrentDayDetailsProps> = ({data}) => {
  
  return (
    <div className={styles.day_info}>
      <div className={styles.day_items}>
       {data.map((el: ItemDetailType) => 
         <ItemDetail key={el.iconId} item={el}/>
       )}
      </div>
        <img src={cloudImg} alt='cloud' className={styles.cloud}/>
    </div>
  )
}

export default CurrentDayDetail