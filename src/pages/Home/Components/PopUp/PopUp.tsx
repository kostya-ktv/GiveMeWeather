import SVGSelector from '../../../../Common/SVGSelector/SVGSelector'
import styles from './popup.module.scss'

const PopUp = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.close}>
            <SVGSelector id='close'/>
          </div>
          <h1>HEADER</h1>
          <h2>ICON</h2>
        </div>
        <div className={styles.body}>
          <h2>Items</h2>
          <h2>Items</h2>
          <h2>Items</h2>
          <h2>Items</h2>
        </div>
      </div>
   </div>
  )
}

export default PopUp