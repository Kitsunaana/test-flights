import {useSearchParams} from "react-router-dom";
import {sortList} from "./use-flights-sort.ts";

export const useSortQueryParam = () => {
  const [searchParams] = useSearchParams()

  const sortNames = sortList.map((sortInfo) => sortInfo.name)
  const readSortParams = searchParams.get("sort")

  if (sortNames.includes(readSortParams)) return searchParams.get("sort")

  return undefined
}
