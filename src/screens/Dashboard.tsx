import Details from "@/components/Details"
import PartsList from "@/components/PartsList"
import SidePanel from "@/components/SidePanel"
import { Outlet } from "react-router-dom"

import styles from "styles/screens/Dashboard.module.scss"

const Dashboard: React.FC = () => {
  return (
    <>
      <SidePanel></SidePanel>
      <div className={styles.dashboard}>
        <div className={styles.details}>
          <Details />
        </div>
        <div className={styles.info}></div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
