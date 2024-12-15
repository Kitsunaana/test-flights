import { ReactNode } from "react"
import styles from "./styles.module.css"
import { useWindowWidth } from "../../../../shared/lib/use-window-width"

export const Root = ({
  sorting,
  filters,
  cards,
  search,
}: {
  sorting: ReactNode
  filters: ReactNode
  cards: ReactNode
  search: ReactNode
}) => {
  const width = useWindowWidth()

  return (
    <div className={styles.root}>
      {width >= 725 && <div className={styles.filters}>{filters}</div>}
      <div className={styles.contentContainer}>
        <div className={styles.search}>{search}</div>
        <div className={styles.sorting}>{sorting}</div>
        <div className={styles.list}>{cards}</div>
      </div>
    </div>
  )
}