import TextInput from "@/components/TextInput"
import styles from "styles/screens/Home.module.scss"

import {MdInfo} from "react-icons/md"

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Bem vindo</h1>
      <div className={styles.form}>
        <TextInput type="number" name="id" id="id" placeholder="123" label="Número de frota"/>
        <TextInput type="text" name="plate" id="plate" placeholder="QJS9350" label="Placa"/>
        <button className={styles.button}>
          Abrir
        </button>
      </div>
      <MdInfo className={styles.info} />
    </div>
  )
}

export default Home
