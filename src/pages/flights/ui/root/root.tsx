import { ReactNode } from "react"
import styles from "./styles.module.css"
import { useWindowWidth } from "../../../../shared/lib/use-window-width"

export const Root = ({
  sorting,
  filters,
  cards,
  search,
  modal,
  onOpenModal,
}: {
  sorting: ReactNode
  filters: ReactNode
  cards: ReactNode
  search: ReactNode
  modal: ReactNode
  onOpenModal: () => void
}) => {
  const width = useWindowWidth()

  return (
    <div className={styles.root}>
      {width >= 725 && <div className={styles.filters}>{filters}</div>}
      <div className={styles.contentContainer}>
        <div className={styles.search}>{search}</div>
        {width <= 725 && (
          <button 
            className={styles.button} 
            onClick={onOpenModal}
          >
            Фильтры
          </button>
        )}
        <div className={styles.sorting}>{sorting}</div>
        <div className={styles.list}>{cards}</div>
      </div>
      {modal}
    </div>
  )
}