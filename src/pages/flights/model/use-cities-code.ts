import { useLoad } from "../../../shared/lib/use-load.ts";
import { CityCode } from "../domain/city-code.ts";

export const useCitiesCode = (citiesApi: { codes: () => Promise<CityCode[]> }) => {
  const { data, isLoading, refetch } = useLoad(citiesApi.codes)

  return {
    list: data || [],
    isLoading,
    refetch,
  }
}
