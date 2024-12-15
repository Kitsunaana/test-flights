import { useNavigate } from 'react-router-dom'

export const useGoFlights = () => {
  const navigate = useNavigate()

  const goToFlights = () => {
    navigate('/')
  }

  return goToFlights
}
