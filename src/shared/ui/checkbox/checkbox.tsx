import clsx from "clsx"
import styles from "./styles.module.css"
import {ChangeEvent} from "react"

export const Checkbox = ({
  caption,
  className,
  checked,
  onChange,
}: {
  caption?: string
  className?: string
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}) => {
  return (
    <label className={clsx(styles.checkbox, className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange?.(event, event.target.checked)}
      />
      <div className={styles.checkbox__checkmark}></div>
      {caption && <div className={styles.checkbox__body}>{caption}</div>}
    </label>
  )
}
