import SVGSelector from '../SVGSelector/SVGSelector'
import styles from './spinner.module.scss'

const Spinner = () => {
   
  return (
    <div className={styles.spinner}>
       <SVGSelector id='spinner'/>
   </div>
  )
}

export default Spinner