import CategoryButton from "./CategoryButton"
import styles from "styles/components/CategorySelector.module.scss"

const CategorySelector: React.FC = () => {
  return (
    <div className={styles.categorySelector}>
      <div className={styles.container}>
        <h2 className={styles.title}>Selecionadas</h2>
        <div className={styles.categories}>
          <CategoryButton name="Arla" />
          <CategoryButton name="Motor" />
          <CategoryButton name="Suspensão" />
          <CategoryButton name="Freios" />
          <CategoryButton name="Caixa de marcha" />
        </div>

      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Todas</h2>
        <div className={styles.categories}>
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
    </div>
  )
}

export default CategorySelector
