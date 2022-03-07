import { tabs } from '../dummy-data'
import styles from '../week.module.scss'

const Tabs = () => {
  return (

    <div className={styles.tabs_wrapper}>
       <div className={styles.tabs}>
            {tabs.map(el => (
            <div key={el.value} className={styles.tab}>
               {el.value}
            </div>))}  
      </div>
            <div className={styles.cancel}>
              Cancel
             </div>
        
         
    </div>
      

  )
}

export default Tabs