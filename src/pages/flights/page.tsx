import { Filters } from "./ui/filters"
import { Card } from "./ui/card"
import { Root } from "./ui/root"
import { Sorting } from "./ui/sorting"
import {useFlights} from "./model/use-flights.ts";
import {flightsApi} from "./api.ts";

export const Page = () => {
  const flightsList = useFlights(flightsApi)

  return (
    <Root
      filters={<Filters />}
      sorting={<Sorting selected="fast" />}
      cards={(
        <>
          {flightsList.list.map((flight) => (
            <Card key={flight.id} flight={flight} />
          ))}
        </>
      )}
    />
  )
}
