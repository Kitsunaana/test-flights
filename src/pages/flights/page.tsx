import { Filters } from "./ui/filters"
import { Card } from "./ui/card"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"
import { useFlights} from "./model/use-flights.ts"
import { flightsApi} from "./api.ts"
import {useFlightsSort} from "./model/use-flights-sort.ts"
import {useFlightsFilter} from "./model/flights-filter/use-flights-filter.ts"

export const Page = () => {
  const flightsList = useFlights(flightsApi)
  const filterFlights = useFlightsFilter(flightsList.list)
  const sortFlights = useFlightsSort(filterFlights.list)

  return (
    <Root
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
          {sortFlights.list.map((flight) => (
            <Card key={flight.id} flight={flight} />
          ))}
        </>
      )}
    />
  )
}
