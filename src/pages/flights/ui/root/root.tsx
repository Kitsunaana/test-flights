import { ReactNode } from "react"
import styles from "./styles.module.css"

export const Root = ({
  sorting,
  filters,
  list,
}: {
  sorting: ReactNode
  filters: ReactNode
  list: ReactNode
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>{filters}</div>
      <div className={styles.contentContainer}>
        <div className={styles.sorting}>{sorting}</div>
        <div className={styles.list}>{list}</div>
      </div>
    </div>
  )
}