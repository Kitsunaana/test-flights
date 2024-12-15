import { useParams } from "react-router-dom"

export const useGetId = () => {
  const { id } = useParams()

  if (id === undefined) throw new Error("Id is required")

  return id
}