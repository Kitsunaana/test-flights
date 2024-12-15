import { Icon } from "../icon"
import styles from "./styles.module.css"

export const Input = ({ 
  value, 
  onChange,
  placeholder,
  clear,
  fullWidth = false
 }: { 
  value: string, 
  onChange: (value: string) => void,
  placeholder?: string
  clear?: boolean
  fullWidth?: boolean
}) => {
  return (
    <div className={styles.inputContainer} style={{ width: fullWidth ? "100%" : "auto" }}>
      <input 
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.input}
        placeholder={placeholder}
      />
      {clear && (
        <button className={styles.button} onClick={() => onChange("")}>
          <Icon name="close" fontSize={18} />
        </button>
      )}
    </div>
  )
}