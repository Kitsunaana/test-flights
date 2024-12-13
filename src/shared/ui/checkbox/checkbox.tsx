import styles from "./styles.module.css"

export const Checkbox = ({
  caption
}: {
  caption?: string
}) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox"/>
      <div className={styles.checkbox__checkmark}></div>
      {caption && <div className={styles.checkbox__body}>{caption}</div>}
    </label>
  )
}