import { Filters } from "./ui/filters"
import { Root } from "./ui/root"

export const Page = () => {
  return (
    <Root 
      filters={<Filters />}
      list={<div>list</div>}
      sorting={<div>sorting</div>}
    />  
  )
}