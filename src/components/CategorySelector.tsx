import CategoryButton from "./CategoryButton"
import styles from "styles/components/CategorySelector.module.scss"

const CategorySelector: React.FC = () => {
  return (
    <div className={styles.categorySelector}>
      <div className={styles.container}>
        <h2 className={styles.title}>Selecionadas</h2>
        <CategoryButton name="Arla" />
        <CategoryButton name="Motor" />
        <CategoryButton name="Suspensão" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Todas</h2>
        <CategoryButton name="Arla" />
        <CategoryButton name="Motor" />
        <CategoryButton name="Suspensão" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
        <CategoryButton name="Freios" />
        <CategoryButton name="Caixa de marcha" />
      </div>
    </div>
  )
}

export default CategorySelector
