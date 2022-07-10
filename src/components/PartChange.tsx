import { MdClose } from "react-icons/md"
import styles from "styles/components/PartChange.module.scss"
import TextInput from "./TextInput"

const PartChange: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.partChange}>
        <div className={styles.header}>
          <h1 className={styles.title}>Realizando troca</h1>
          <MdClose className={styles.close}/>
        </div>
        <div className={styles.content}>
          <TextInput type="number" name="km" id="km" placeholder="123.456" label="Km da troca"/>
          <TextInput type="date" name="date" id="date" placeholder="22/12/2022" label="Data da troca"/>
          <TextInput type="textarea" name="observations" id="observations" placeholder="observações" label="Observações"/>
          <button className={styles.button}>
            Adicionar Troca
          </button>
        </div>
      </div>
    </div>
  )
}

export default PartChange
