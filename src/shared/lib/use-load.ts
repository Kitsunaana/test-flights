import {useEffect, useState} from "react";

export const useLoad = <T>(fetcher: () => Promise<T>, key = "default") => {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(true)

  const fetchList = () => fetcher().then(setData)

  useEffect(() => {
    if (!key) return

    setIsLoading(true)
    fetchList()
      .finally(() => setIsLoading(false))
  }, [key])

  return {
    data,
    isLoading,
    refetch: fetchList,
  }
}
