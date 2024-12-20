export type FlightInfo = {
  id: string
  from: string
  to: string
  startTime: number
  endTime: number
  travelTime: number
  transfers: string[]
  price: string
  name: string
  logo: string
  startDate: string
  endDate: string
  classType: string
}

export type Flight = {
  id: string
  name: string
  logo: string
  price: string
  flights: FlightInfo[]
}

export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp)

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return {
    hours,
    minutes
  }
}

export const getFormatTime = (timestamp: number) => {
  const time = timestampToTime(timestamp);

  const formattedHours = String(time.hours).padStart(2, '0');
  const formattedMinutes = String(time.minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

export const getFormatTimeFlight = (times: {
  startTime: number
  endTime: number
}) => {
  return `${getFormatTime(times.startTime)} - ${getFormatTime(times.endTime)}`
}

export const getFormatTimeTravel = (timestamp: number) => {
  const time = timestampToTime(timestamp)

  return `${time.hours}ч ${time.minutes}м`
}

export const getFormatPrice = (price: string) => {
  const number = parseInt(price, 10)

  if (isNaN(number)) return ''

  const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return number > 0 ? `${formatted} P` : formatted
}

export const getFormatTransfers = (count: number) => {
  let word = "пересадка"
  if (count % 10 === 1 && count % 100 !== 11) {
    word = "пересадка" // 1 пересадка
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    word = "пересадки" // 2, 3, 4 пересадки
  } else {
    word = "пересадок" // 0, 5-9, 11-14 пересадок
  }

  return `${count} ${word}`;
}

export const compareFlightTimes = (a: FlightInfo, b: FlightInfo) => {
  if (a.travelTime < b.travelTime) return -1
  if (a.travelTime > b.travelTime) return 1
  return 0
}

export const compareFlightPrice = (a: Flight, b: Flight) => {
  if (a.price < b.price) return 1
  if (a.price > b.price) return -1
  return 0
}

export const sortNestedFlightsByTime = (flight: Flight) => flight.flights.sort(compareFlightTimes)

export const getCopyFlights = (flights: Flight[]): Flight[] => (
  JSON.parse(JSON.stringify(flights))
)