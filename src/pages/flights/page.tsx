import { Filters } from "./ui/filters"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"

export const Page = () => {
  return (
    <Root 
      filters={<Filters />}
      list={<div />}
      sorting={<Sorting selected="fast" />}
    />  
  )
}