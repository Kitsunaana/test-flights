import { useLoad } from "../../../shared/lib/use-load"
import { flightsApi } from "../api"

export const useGetFlight = (id: string) => {
  const { data, isLoading, refetch } = useLoad(() => flightsApi.getById(id))

  return {
    data,
    refetch,
    isLoading,
  }
}