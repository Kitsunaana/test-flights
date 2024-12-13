import styles from "./styles.module.css"
import { clsx } from "clsx"
import {sortList} from "../../model/use-flights-sort.ts";

export const Sorting = ({
  selected,
  onChange,
}: {
  selected?: string
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
