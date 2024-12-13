import { Filters } from "./ui/filters"
import { Card } from "./ui/card"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"
import {useFlights} from "./model/use-flights.ts";
import {flightsApi} from "./api.ts";
import {useFlightsSort} from "./model/use-flights-sort.ts";

export const Page = () => {
  const flightsList = useFlights(flightsApi)
  const sortFlights = useFlightsSort(flightsList.list)

  return (
    <Root
      filters={<Filters />}
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
