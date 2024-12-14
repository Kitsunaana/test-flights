import styles from "./styles.module.css"
import { clsx } from "clsx"
import { sortList } from "../../domain/const.ts"

export const Sorting = ({
  selected,
  onChange,
}: {
  selected: string | null
  onChange?: (sort: string) => void
}) => {
  return (
    <div className={styles.sorting}>
      {sortList.map((sort) => (
        <button
          key={sort.name}
          onClick={() => onChange?.(sort.name)}
          className={clsx(styles.button, {
            [styles.selected]: selected === sort.name
          })}
        >
          {sort.caption}
        </button>
      ))}
    </div>
  )
}
