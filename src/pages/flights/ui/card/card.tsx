import clsx from "clsx"
import styles from "./styles.module.css"
import { getFormatedTime, getFormatedTimeFlight } from "../../domain/flight"

const flights = [
  {
    id: "1",
    from: "MOW",
    to: "HKT",
    startTime: 1734061500206,
    endTime: 1734054300892,
    travelTime: 1734099300524,
    transfers: ["HKG", "JNB"]    
  },
  {
    id: "2",
    from: "MOW",
    to: "HKT",
    startTime: 1734063600292,
    endTime: 1734025800250,
    travelTime: 1734071400032,
    transfers: ["HKG"]    
  }
]

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={clsx(styles.price, styles.column)}>13 400 Р</span>
        <span className={styles.column}></span>
        <span className={styles.column}>
          <img className={styles.logo} src="https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png" alt="" />
        </span>
      </div>

      {flights.map((flight) => (
        <div className={styles.flight} key={flight.id}>
          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>{flight.from} - {flight.to}</div>
            <div className={styles.flightDescription}>{getFormatedTimeFlight(flight)}</div>
          </div>

          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>В пути</div>
            <div className={styles.flightDescription}>{getFormatedTime(flight.travelTime)}</div>
          </div>

          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>{flight.transfers.length} пересадки</div>
            <div className={styles.flightDescription}>
              {flight.transfers.join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
