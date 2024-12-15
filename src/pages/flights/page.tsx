import { Modal } from "../../shared/ui/modal"
import { flightsApi } from "./api.ts"
import { useFlightsFilter } from "./model/flights-filter/use-flights-filter.ts"
import { useCitiesCode } from "./model/use-cities-code.ts"
import { useFlightsSearch } from "./model/use-flights-search.ts"
import { useFlightsSort } from "./model/use-flights-sort.ts"
import { useFlights } from "./model/use-flights.ts"
import { useModalFilters } from "./model/use-modal-filters.ts"
import { Card } from "./ui/card"
import { Filters } from "./ui/filters"
import { Root } from "./ui/root"
import { Search } from "./ui/search/search.tsx"
import { Sorting } from "./ui/sorting"

export const Page = () => {
  const citiesCode = useCitiesCode(flightsApi)
  
  const flightsList = useFlights(flightsApi)
  const filterFlights = useFlightsFilter(flightsList.list)
  const sortFlights = useFlightsSort(filterFlights.list)

  const searchFlights = useFlightsSearch(sortFlights.list, citiesCode.list)

  const modalFilters = useModalFilters()

  return (
    <Root
      onOpenModal={modalFilters.onOpen}
      modal={(
        <Modal
          title="Фильтры"
          onClose={modalFilters.onClose}
          isOpen={modalFilters.isOpen}
          body={(
            <Filters
              onChange={filterFlights.onChangeFilter}
              filters={filterFlights.filters}
            />
          )}
        />
      )}
      search={(
        <Search
          toValue={searchFlights.search.to}
          fromValue={searchFlights.search.from}
          onChangeTo={searchFlights.onSearchChange("to")}
          onChangeFrom={searchFlights.onSearchChange("from")}
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
