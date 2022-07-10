import TextInput from "./TextInput"
import CategorySelector from "./CategorySelector"
import styles from "styles/components/PartsFilter.module.scss"

const PartsFilter: React.FC = () => {
  return (
    <div className={styles.partsFilter}>
      <h1 className={styles.title}>Filtrar</h1>
      <div className={styles.form}>
        <div>
          <TextInput type="text" name="filter" id="filter" placeholder="Ex.: Bomba do arla" label="Nome da peça"/>
        </div>
        <h2 className={styles.subTitle}>Categorias</h2>
        <CategorySelector />
      </div>
    </div>
  )
}

export default PartsFilter
