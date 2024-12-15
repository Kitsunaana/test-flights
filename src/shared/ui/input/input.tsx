import clsx from "clsx"
import { useRef } from "react"
import { Icon } from "../icon"
import styles from "./styles.module.css"

export const Input = ({ 
  value, 
  onChange,
  placeholder,
  clear,
  className,
  fullWidth = false,
  name,
  type = "text",
 }: { 
  value: string, 
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string
  clear?: boolean
  className?: string
  fullWidth?: boolean
  name?: string
  type?: string
}) => {
  const clearRef = useRef<HTMLInputElement | null>(null)

  const handleClear = () => {
    if (clearRef.current) {
      clearRef.current.onclick = (event) => onChange("", event)

      clearRef.current.click()
    }
  }

  return (
    <div 
      className={styles.inputContainer} 
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <input
        ref={clearRef}
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value, event)}
        className={clsx(styles.input, className)}
        placeholder={placeholder}
      />
      {clear && (
        <button className={styles.button} onClick={handleClear}>
          <Icon name="close" fontSize={18} />
        </button>
      )}
    </div>
  )
}