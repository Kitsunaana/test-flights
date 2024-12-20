import { compareFlightPrice, compareFlightTimes, Flight, getCopyFlights, sortNestedFlightsByTime } from "../../../entites/flight"
import { useMemo, useState } from "react"
import { useSortQueryParam } from "./use-query-params.ts"

export const useFlightsSort = (flights: Flight[]) => {
  const sortQueryParam = useSortQueryParam()
  const [selectedSort, setSelectedSort] = useState<string | null>(sortQueryParam.getSortParam)

  const onChangeSort = (sort: string) => {
    const newSort = sort === selectedSort ? null : sort

    setSelectedSort(newSort)
    sortQueryParam.setSortParam(newSort)
  }

  const sortedFlights = useMemo(() => {
    const copyFlights = getCopyFlights(flights)

    if (selectedSort === "price") return copyFlights.sort(compareFlightPrice)

    if (selectedSort === "speed") {
      return (
        copyFlights
          .map((flight) => ({ ...flight, flights: sortNestedFlightsByTime(flight) }))
          .sort((a, b) => (
            compareFlightTimes(
              sortNestedFlightsByTime(a)[0],
              sortNestedFlightsByTime(b)[0]
            )
          ))
      )
    }

    return copyFlights
  }, [flights, selectedSort])

  return {
    list: sortedFlights,
    sort: selectedSort,
    onChangeSort
  }
}
