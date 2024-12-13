import {compareFlightPrice, compareFlightTimes, Flight, sortNestedFlightsByTime} from "../domain/flight.ts";
import {useMemo, useState} from "react";
import {useSortQueryParam} from "./use-query-params.ts";

export const sortList = [
  { name: "price", caption: "Самый дешевый" },
  { name: "speed", caption: "Самый быстрый" },
]

export const useFlightsSort = (flights: Flight[]) => {
  const sortQueryParam = useSortQueryParam()
  const [selectedSort, setSelectedSort] = useState<string | undefined>(sortQueryParam)

  const onChangeSort = (sort: string) => setSelectedSort(sort === selectedSort ? undefined : sort)

  const sortedFlights = useMemo(() => {
    const copyFlights: Flight[] = JSON.parse(JSON.stringify(flights))

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
            )
          )
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
