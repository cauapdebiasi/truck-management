import PartsList from "@/components/PartsList"

import styles from "styles/screens/Brakes.module.scss"

const Brakes: React.FC = () => {
  return (
    <div className={styles.brakes}>
      <div className={styles.info}></div>
      <div className={styles.content}>
        <PartsList title="Lonas de freio" category="brakes" />
        <PartsList title="Rolamentos" category="bearings" />
      </div>
    </div>
  )
}

export default Brakes
