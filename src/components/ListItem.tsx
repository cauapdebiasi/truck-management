import { MdBolt, MdHandyman, MdPendingActions } from "react-icons/md"
import styles from "styles/components/ListItem.module.scss"

const ListItem: React.FC = () => {
  return (
    <div className={styles.listItem}>
      <p className={styles.name}>Filtro diferencial dianteiro</p>
      <p className={styles.value}>123.456</p>
      <div className={styles.options}>
        <MdBolt className={styles.action}/>
        <MdHandyman className={styles.action}/>
        <MdPendingActions className={styles.action}/>
      </div>
    </div>
  )
}

export default ListItem
