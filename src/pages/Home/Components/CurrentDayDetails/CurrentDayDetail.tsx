import styles from './currentDayDetail.module.scss'
import cloudImg from '../../../../Assets/Images/cloud.png'
import { items } from './dummy-data'
import ItemDetail from './ItemDetail/ItemDetail'
import { ItemDetailType } from '../types'

const CurrentDayDetail = () => {
  
  return (
    <div className={styles.day_info}>
      <div className={styles.day_items}>
       {items.map((el: ItemDetailType) => 
         <ItemDetail key={el.iconId} item={el}/>
       )}
      </div>
        <img src={cloudImg} alt='cloud' className={styles.cloud}/>
    </div>
  )
}

export default CurrentDayDetail