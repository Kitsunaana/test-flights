import {Flight} from "./domain/flight.ts";
import {ListApi} from "./model/use-flights.ts";

export const flightsApi: ListApi<Flight> = {
  async list() {
    return await fetch(`/api/flights`)
      .then((response) => response.json() as Promise<Flight[]>)
  }
}
