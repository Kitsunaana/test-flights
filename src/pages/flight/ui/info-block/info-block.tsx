import { CityCode, FlightInfo, getFormatPrice, getFormatTime, getFormatTimeTravel } from "../../../../entites/flight"
import { Button } from "../../../../shared/ui/button"
import styles from "./styles.module.css"

export const InfoBlock = ({ 
  flight, 
  cities 
}: { 
  flight: FlightInfo, 
  cities: Record<string, CityCode> 
}) => {
  return (
    <div className={styles.infoBlock}>
      <Button className={styles.button}>Вернуться назад</Button>
      <div className={styles.header}>
        <img src={flight.logo} alt="" />
        <h3>Авиакомпания: {flight.name}</h3>
      </div>
      <h1>{cities[flight.from]?.name} - {cities[flight.to]?.name}</h1>
      <span>Стоимость: {getFormatPrice(flight.price)}</span>
      <span>Время: {flight.dateStart} {getFormatTime(flight.startTime)} - {flight.dateEnd} {getFormatTime(flight.endTime)}</span>
      <span>Пересадки:{" "}
        {flight.transfers.map((transfer) => (
          <span key={transfer}>{cities[transfer]?.name ?? transfer}</span>
        ))}
      </span>
      <span>Время в пути: {getFormatTimeTravel(flight.travelTime)}</span>
      <span>Класс перелета: {flight.classType}</span>
    </div>
  )
}