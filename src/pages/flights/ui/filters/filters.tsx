import { Checkbox } from "../../../../shared/ui/checkbox"
import styles from "./styles.module.css"
import {filterList} from "../../domain/const.ts"

export const Filters = ({
  filters,
  onChange,
}: {
  filters?: Record<string, boolean>
  onChange: (filter: { name: string, value: boolean }) => void
}) => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.caption}>Количество пересадок</h4>

      <div className={styles.checkboxList}>
        {filterList.map((filter) => (
          <div className={styles.filterItem} key={filter.name}>
            <Checkbox
              checked={filters[filter.name]}
              className={styles.checkboxLable}
              caption={filter.caption}
              onChange={(_, checked) => onChange?.({
                name: filter.name,
                value: checked
              })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
