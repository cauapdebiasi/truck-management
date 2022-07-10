import styles from "styles/components/TextInput.module.scss"

type textInput = {
  type: string | "text",
  name: string,
  id: string,
  placeholder: string,
  label:string,
  maxLength?: number
}

const TextInput: React.FC<textInput> = ({type = "text", name, id, placeholder,label, maxLength = 256}) => {

  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      {type !== "textarea" && <input className={styles.textInput} type={type} name={name} id={id} placeholder={placeholder} />}
      {type === "textarea" && <textarea className={styles.textInput} name={name} id={id} placeholder={placeholder} maxLength={maxLength}/>}

    </div>
  )
}

export default TextInput
