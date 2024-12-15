import { Input } from "../../../../shared/ui/input"
import styles from "./styles.module.css"

export const Search = ({ 
  fromValue, 
  toValue, 
  onChangeFrom, 
  onChangeTo 
}: { 
  fromValue: string, 
  toValue: string, 
  onChangeFrom: (value: string) => void, 
  onChangeTo: (value: string) => void 
}) => {
  return (
    <div className={styles.searchContainer}>
      <Input 
        value={fromValue} 
        onChange={onChangeFrom} 
        placeholder="Откуда" 
        clear={!!fromValue}
        fullWidth
      />
      <Input 
        value={toValue} 
        onChange={onChangeTo} 
        placeholder="Куда" 
        clear={!!toValue}
        fullWidth
      />
    </div>
  )
} 