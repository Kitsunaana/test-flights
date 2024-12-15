import { CityCode } from "./domain/city-code"
import { Flight, FlightInfo } from "./domain/flight"
import { CitiesApi } from "./model/use-cities-code"
import { ListApi } from "./model/use-flights"

type FlightsApi = {
  getById: (id: string) => Promise<FlightInfo>
}

export const flightsApi: ListApi<Flight> & FlightsApi & CitiesApi = {
  async getById(id: string) {
    return await fetch(`/api/flights/${id}`)
      .then((res) => res.json() as Promise<FlightInfo>)
  },

  async list() {
    return await fetch(`/api/flights`)
      .then((response) => response.json() as Promise<Flight[]>)
  },

  async codes() {
    return await fetch(`/api/flights/codes`)
      .then((response) => response.json() as Promise<CityCode[]>)
  }
}
