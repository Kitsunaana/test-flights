import { Flight } from "../../../../entites/flight"
import { filterList } from "../../domain/const.ts"

export type FilterRecord = {
  "all": boolean
  "0": boolean
  "1": boolean
  "2": boolean
  "3": boolean
}

export const getFilterRecord = (): FilterRecord => (
  filterList.reduce((prev, current) => {
    prev[current.name] = false
    return prev
  }, {} as FilterRecord)
)

const getIsNotEmptySelectedFilters = (filters: unknown[]) => filters.length !== 0

export const getAllSelectedFilters = (filters: FilterRecord) => (
  (Object
    .keys(filters) as (keyof FilterRecord)[])
    .filter((key) => filters[key])
    .map(Number)
)

export const filterByTransfers = (selectedFilters: FilterRecord) => (flight: Flight) => {
  const allSelectedFilters = getAllSelectedFilters(selectedFilters)
  const isNotEmptySelectedFilters = getIsNotEmptySelectedFilters(allSelectedFilters)

  if (isNotEmptySelectedFilters) {
    const filteredFlights = flight.flights
      .filter((flightInfo) => (
        allSelectedFilters.includes(flightInfo.transfers.length)
      ))

    return { ...flight, flights: filteredFlights }
  }

  return null
}

export const filterEmptyFlights = (flight: Flight | null): flight is Flight => {
  if (flight === null) return false

  return flight.flights.length !== 0
}
