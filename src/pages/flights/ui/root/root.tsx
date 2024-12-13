import { ReactNode } from "react"
import styles from "./styles.module.css"

export const Root = ({
  sorting,
  filters,
  cards,
}: {
  sorting: ReactNode
  filters: ReactNode
  cards: ReactNode
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>{filters}</div>
      <div className={styles.contentContainer}>
        <div className={styles.sorting}>{sorting}</div>
        <div className={styles.list}>{cards}</div>
      </div>
    </div>
  )
}