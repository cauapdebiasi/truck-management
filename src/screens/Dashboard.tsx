import Details from "@/components/Details"
import PartsList from "@/components/PartsList"

import styles from "styles/screens/Dashboard.module.scss"

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.details}>
        <Details />
      </div>
      <div className={styles.info}></div>
      <div className={styles.content}>
        <PartsList title="Filtros" category="filtros"/>
        <PartsList title="Óleos" category="fluidos"/>
      </div>
    </div>
  )
}

export default Dashboard
