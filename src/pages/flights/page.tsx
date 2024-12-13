import { Filters } from "./ui/filters"
import { Card } from "./ui/card"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"

export const Page = () => {
  return (
    <Root 
      filters={<Filters />}
      sorting={<Sorting selected="fast" />}
      cards={(
        <>
           {[...new Array(100)].map((_, i) => (
            <Card key={i} />
          ))}
        </>
      )}
    />  
  )
}