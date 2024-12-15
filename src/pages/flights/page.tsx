import { Filters } from "./ui/filters"
import { Card } from "./ui/card"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"
import { useFlights} from "./model/use-flights.ts"
import { flightsApi} from "./api.ts"
import {useFlightsSort} from "./model/use-flights-sort.ts"
import {useFlightsFilter} from "./model/flights-filter/use-flights-filter.ts"
import { useCitiesCode } from "./model/use-cities-code.ts"
import { Search } from "./ui/search/search.tsx"
import { useFlightsSearch } from "./model/use-flights-search.ts"

export const Page = () => {
  const citiesCode = useCitiesCode(flightsApi)
  
  const flightsList = useFlights(flightsApi)
  const filterFlights = useFlightsFilter(flightsList.list)
  const sortFlights = useFlightsSort(filterFlights.list)

  const searchFlights = useFlightsSearch(sortFlights.list, citiesCode.list)

  return (
    <Root
      search={(
        <Search
          fromValue={searchFlights.search.from}
          toValue={searchFlights.search.to}
          onChangeFrom={searchFlights.onSearchChange("from")}
          onChangeTo={searchFlights.onSearchChange("to")}
        />
      )}
      filters={(
        <Filters
          onChange={filterFlights.onChangeFilter}
          filters={filterFlights.filters}
        />
      )}
      sorting={(
        <Sorting
          onChange={sortFlights.onChangeSort}
          selected={sortFlights.sort}
        />
      )}
      cards={(
        <>
          {searchFlights.list.map((flight) => (
            <Card key={flight.id} flight={flight} />
          ))}
        </>
      )}
    />
  )
}
