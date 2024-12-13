export type FlightInfo = {
  id: string
  from: string
  to: string
  startTime: number
  endTime: number
  travelTime: number
  transfers: string[]
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

const getFormatTime = (timestamp: number) => {
  const time = timestampToTime(timestamp)

  return `${time.hours}:${time.minutes}`
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
  let word = "пересадка";
  if (count % 10 === 1 && count % 100 !== 11) {
    word = "пересадка"; // 1 пересадка
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    word = "пересадки"; // 2, 3, 4 пересадки
  } else {
    word = "пересадок"; // 0, 5-9, 11-14 пересадок
  }

  return `${count} ${word}`;
}

export const getFormatTimeFlight = (times: {
  startTime: number
  endTime: number
}) => {
  return `${getFormatTime(times.startTime)} - ${getFormatTime(times.endTime)}`
}
