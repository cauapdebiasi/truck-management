import styles from "@/assets/styles/components/SidePanel.module.scss"
import PanelButton from "./PanelButton"

import { MdSettings, MdHome, MdHandyman, MdStream, MdSave, MdDashboard } from "react-icons/md"

const SidePanel: React.FC = () => {
  return (
    <div className={styles.sidePanel}>
      <div className={styles.buttonGroup}>
        <PanelButton text="Início" route="/" Icon={MdHome} />
        <PanelButton text="Painel" route="/dashboard" Icon={MdDashboard} />
        <PanelButton text="Peças" route="parts" Icon={MdHandyman} />
        <PanelButton text="Freios" route="brakes" Icon={MdStream} />
        <PanelButton text="Salvar" route="save" Icon={MdSave} />
      </div>
      <PanelButton text="Config." route="settings" Icon={MdSettings} />
    </div>
  )
}

export default SidePanel
