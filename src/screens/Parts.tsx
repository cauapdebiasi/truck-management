import Details from "@/components/Details"
import PartsFilter from "@/components/PartsFilter"
import PartsList from "@/components/PartsList"
import styles from "styles/screens/Parts.module.scss"

const Parts: React.FC = () => {
  return (
    <div className={styles.parts}>
      <div className={styles.details}>
        <Details />
      </div>
      <div className={styles.content}>
        <PartsFilter />
        <PartsList title="Peças" category="pecas"/>
      </div>
    </div>
  )
}

export default Parts
