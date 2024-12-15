import { useLoad } from "../../../shared/lib/use-load.ts";
import { CityCode, getCodesRecord } from "../../../entites/flight";

export type CitiesApi = {
  codes: () => Promise<CityCode[]>
}

export const useCitiesCode = (citiesApi: CitiesApi) => {
  const { data, isLoading, refetch } = useLoad(citiesApi.codes)

  return {
    list: data || [],
    isLoading,
    refetch,
    recordCitiesCode: getCodesRecord(data || []),
  }
}
