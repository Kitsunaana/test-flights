import { useLoad } from "../../../shared/lib/use-load.ts";

export type ListApi<T extends { id: string }> = {
  list: () => Promise<T[]>
}

export const useFlights = <T extends { id: string }>(listApi: ListApi<T>) => {
  const { data, isLoading, refetch } = useLoad(listApi.list)

  return {
    list: data || [],
    isLoading,
    refetch,
  }
}
