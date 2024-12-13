import { Checkbox } from "../../../../shared/ui/checkbox"
import styles from "./styles.module.css"

const filters = [
  { value: "all", caption: "Все" }, 
  { value: "0", caption: "Без пересадок"}, 
  { value: "1", caption: "1 Пересадка" },
  { value: "2", caption: "2 Пересадки" }, 
  { value: "3", caption: "3 Пересадки" }, 
]

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.caption}>Количество пересадок</h4>

      <div className={styles.checkboxList}>
        {filters.map((filter) => (
          <div key={filter.value}>
            <Checkbox caption={filter.caption} />
          </div>
        ))}
      </div>
    </div>
  )
}