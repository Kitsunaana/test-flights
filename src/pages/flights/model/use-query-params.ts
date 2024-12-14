import {useLocation, useSearchParams} from "react-router-dom";
import {sortList} from "./use-flights-sort.ts"
import {FilterRecord} from "./flights-filter/flights.ts";

export const useSortQueryParam = () => {
  const [searchParams] = useSearchParams()

  const sortNames = sortList.map((sortInfo) => sortInfo.name)
  const readSortParam = searchParams.get("sort")

  if (sortNames.includes(readSortParam)) return readSortParam

  return undefined
}

export const useFilterQueryParam = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const filters = queryParams.getAll('filter')

  return filters.reduce((prev, current) => {
    prev[current] = true
    return prev
  }, {} as Partial<FilterRecord>)
}
