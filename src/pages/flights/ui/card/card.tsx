import clsx from "clsx"
import styles from "./styles.module.css"
import {
  Flight,
  getFormatPrice,
  getFormatTimeFlight,
  getFormatTimeTravel, getFormatTransfers
} from "../../domain/flight"

export const Card = ({ flight }: { flight: Flight }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={clsx(styles.price, styles.column)}>{getFormatPrice(flight.price)}</span>
        <span className={styles.column}></span>
        <span className={styles.column}>
          <img className={styles.logo} src={flight.logo} alt="logo" />
        </span>
      </div>

      {flight.flights.map((flightInfo) => (
        <div className={styles.flight} key={flightInfo.id}>
          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>{flightInfo.from} - {flightInfo.to}</div>
            <div className={styles.flightDescription}>{getFormatTimeFlight(flightInfo)}</div>
          </div>

          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>В пути</div>
            <div className={styles.flightDescription}>{getFormatTimeTravel(flightInfo.travelTime)}</div>
          </div>

          <div className={styles.flightItem}>
            <div className={styles.flightTitle}>
              {
                flightInfo.transfers.length === 0
                  ? "Без пересадок"
                  : `${getFormatTransfers(flightInfo.transfers.length)}`
              }
            </div>
            <div className={styles.flightDescription}>
              {flightInfo.transfers.join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
