import { CityCode } from "./domain/city-code.ts";
import { Flight } from "./domain/flight.ts";
import { ListApi } from "./model/use-flights.ts";

export const flightsApi: ListApi<Flight> & { codes: () => Promise<CityCode[]> } = {
  async list() {
    return await fetch(`/api/flights`)
      .then((response) => response.json() as Promise<Flight[]>)
  },

  async codes() {
    return await fetch(`/api/flights/codes`)
      .then((response) => response.json() as Promise<CityCode[]>)
  }
}
