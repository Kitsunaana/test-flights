import { flightsApi, useCitiesCode, useGetFlight } from "../../entites/flight";
import { useGetId } from "./model/use-get-id";
import { FormBlock } from './ui/form-block/form-block';
import { InfoBlock } from './ui/info-block/info-block';
import { Root } from "./ui/root";

export const Page = () => {
  const flightId = useGetId()
  const flight = useGetFlight(flightId)
  const cities = useCitiesCode(flightsApi)

  if (!flight.data) return null

  return (
    <Root
      formBlock={<FormBlock />}
      infoBlock={(
        <InfoBlock flight={flight.data} cities={cities.recordCitiesCode} />
      )}
    />
  )
}