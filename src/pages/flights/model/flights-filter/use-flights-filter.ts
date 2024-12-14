import {Flight} from "../../domain/flight.ts";
import {useMemo, useState} from "react";
import {
  filterByTransfers,
  filterEmptyFlights, FilterRecord,
  getAllSelectedFilters,
  getCopyFlights,
  getFilterRecord
} from "./flights.ts";
import {useFilterQueryParam} from "../use-query-params.ts";

export const useFlightsFilter = (flights: Flight[]) => {
  const filterQueryParam = useFilterQueryParam()

  const [selectedFilters, setSelectedFilters] = useState<FilterRecord>(() => ({
    ...getFilterRecord(),
    ...filterQueryParam
  }))

  const onChangeFilter = (filter: { name: string, value: boolean }) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter.name]: filter.value
    }))
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
