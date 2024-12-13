import clsx from "clsx"
import styles from "./styles.module.css"

export const Checkbox = ({
  caption,
  className,
}: {
  caption?: string
  className?: string
}) => {
  return (
    <label className={clsx(styles.checkbox, className)}>
      <input type="checkbox"/>
      <div className={styles.checkbox__checkmark}></div>
      {caption && <div className={styles.checkbox__body}>{caption}</div>}
    </label>
  )
}