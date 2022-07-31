import TextInput from "@/components/TextInput"
import styles from "styles/screens/Settings.module.scss"

const Settings: React.FC = () => {
  return (
    <div className={styles.settings}>
      <h1 className={styles.title}>Configurações</h1>
      <p className={styles.subtitle}>Estas configurações não se aplicam a outros usuários</p>
      <div className={styles.form}>
        <TextInput type="number" name="warningThreshold" id="warningThreshold" placeholder="Ex.: 5000" label="Limiar de aviso de troca:" />
        <button className={styles.button}>
          Salvar
        </button>
      </div>
    </div>
  )
}

export default Settings
