import { FC } from 'react'
import { ItemDetailProps } from './ItemDetail.props'
import styles from './itemDetail.module.scss'
import GlobalSVGSelector from '../../../../../Common/GlobalSVGSelector/GlobalSVGSelector'

const ItemDetail:FC<ItemDetailProps> = ({item}) => {
   const {iconId, name, value} = item

  return (
    <div className={styles.item}>
       <div className={styles.indicator}>
          <GlobalSVGSelector id={iconId}/>
       </div>
       <div className={styles.indicator_name}>
          {name}
       </div>
       <div className={styles.indicator_value}>
          {value}
       </div>
    </div>
  )
}

export default ItemDetail