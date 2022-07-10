import styles from "styles/components/CategoryButton.module.scss"

type categoryButton = {
  name: string
}

const CategoryButton: React.FC<categoryButton> = ({name}) => {
  return (
    <button className={styles.categoryButton}>{name}</button>
  )
}

export default CategoryButton
