import { IconType } from "react-icons"
import { Link } from "react-router-dom"

import styles from "styles/components/SidePanel.module.scss"

type panelButton = {
  text: string,
  route: string
  Icon: IconType
}

const PanelButton: React.FC<panelButton> = ({text, route, Icon}) => {
  return (
    <Link className={`${styles.button} ${styles.active}`} to={route}>
      <Icon className={styles.icon}/>
      <p className={styles.text}>{text}</p>
    </Link>
  )
}

export default PanelButton
