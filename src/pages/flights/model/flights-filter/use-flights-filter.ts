import { useMemo, useState } from "react"
import { Flight } from "../../domain/flight.ts"
import { useFiltersQueryParam } from "../use-query-params.ts"
import {
  filterByTransfers,
  filterEmptyFlights,
  FilterRecord,
  getAllSelectedFilters,
  getCopyFlights
} from "./flights.ts"

export const useFlightsFilter = (flights: Flight[]) => {
  const filtersQuery = useFiltersQueryParam()

  const [selectedFilters, setSelectedFilters] = useState<FilterRecord>(filtersQuery.getFiltersFromQuery)

  const onChangeFilter = (filter: { name: string, value: boolean }) => {
    const newFilters = { ...selectedFilters, [filter.name]: filter.value }

    setSelectedFilters(newFilters)
    filtersQuery.updateFilters(newFilters)
  }

  const memoizedFlights = useMemo(() => {
    if (getAllSelectedFilters(selectedFilters).length === 0) return flights
    if (selectedFilters.all) return flights

    return getCopyFlights(flights)
      .map(filterByTransfers(selectedFilters))
      .filter(filterEmptyFlights)
  }, [selectedFilters, flights])

  return {
    list: memoizedFlights,
    filters: selectedFilters,
    onChangeFilter
  }
}
