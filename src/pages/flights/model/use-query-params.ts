import { useSearchParams } from "react-router-dom"
import { FilterRecord, getFilterRecord } from "./flights-filter/flights.ts"

export const useSortQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const setSortParam = (sort: string | null) => {
    if (sort) searchParams.set("sort", sort)
    else searchParams.delete("sort")

    setSearchParams(searchParams)
  }

  const getSortParam = (): string | null => searchParams.get("sort")

  return {
    setSortParam,
    getSortParam,
  }
}

export const useFiltersQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateFilters = (newFilters: FilterRecord) => {
    const selectedFilters = Object.entries(newFilters)
      .filter(([_, value]) => value)
      .map(([key]) => key)

    const currentParams = new URLSearchParams(searchParams)

    currentParams.delete('filter[]')

    selectedFilters.forEach(filter => currentParams.append('filter[]', filter))

    setSearchParams(currentParams)
  };

  const getFiltersFromQuery = (): FilterRecord => {
    const filterParams = searchParams.getAll('filter[]')
    const defaultFilters = getFilterRecord()

    return filterParams.reduce((acc, filter) => {
      acc[filter as keyof FilterRecord] = true
      return acc
    }, defaultFilters)
  }

  return {
    updateFilters,
    getFiltersFromQuery,
  }
}