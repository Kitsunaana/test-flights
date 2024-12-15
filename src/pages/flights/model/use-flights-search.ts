import { useMemo, useState } from "react"
import { CityCode, Flight, getCodesRecord, getCopyFlights, isMatchWord } from "../../../entites/flight"

export const useFlightsSearch = (flights: Flight[], codes: CityCode[]) => {
  const [search, setSearch] = useState({
    from: "",
    to: "",
  })

  const onSearchChange = (key: "from" | "to") => (value: string) => (
    setSearch((prev) => ({ ...prev, [key]: value }))
  )

  const memoizedSearch = useMemo(() => {
    const codeRecord = getCodesRecord(codes)
    const copyFlights = getCopyFlights(flights)

    const filteredFlights = copyFlights.filter((flight) => {
      return flight.flights.some((flightInfo) => {
        const getWords = (code: string) => codeRecord[code] ? Object.values(codeRecord[code]) : [code];

        const fromMatch = isMatchWord(getWords(flightInfo.from), search.from)
        const toMatch = isMatchWord(getWords(flightInfo.to), search.to)

        if (search.from && search.to) return fromMatch && toMatch
        if (search.from && !search.to) return fromMatch
        if (!search.from && search.to) return toMatch

        return true
      })
    })

    return filteredFlights
  }, [flights, codes, search])

  return {
    search,
    onSearchChange,
    list: memoizedSearch,
  }
}