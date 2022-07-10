import styles from "styles/components/PartsList.module.scss"
import ListItem from "./ListItem"

type partsList = {
  title: string,
  category: string | string[]
}

const PartsList: React.FC<partsList> = ({title, category}) => {
  return (
    <div className={styles.partsList}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.list}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}

export default PartsList
