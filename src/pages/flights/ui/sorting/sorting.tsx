import styles from "./styles.module.css"
import { clsx } from "clsx"

const sortList = [
  { value: "cheap", caption: "Самый дешевый" },
  { value: "fast", caption: "Самый быстрый" },
]

export const Sorting = ({
  selected
}: {
  selected?: string
}) => {
  return (
    <div className={styles.sorting}>
      {sortList.map((sort) => (
        <button
          key={sort.value}
          className={clsx(styles.button, {
            [styles.selected]: selected === sort.value
          })}
        >
          {sort.caption}
        </button>
      ))}
    </div>
  )
}