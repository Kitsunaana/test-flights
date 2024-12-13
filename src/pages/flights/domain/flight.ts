export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp)

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return {
    hours,
    minutes
  }
}

export const getFormatedTime = (timestamp: number) => {
  const time = timestampToTime(timestamp)

  return `${time.hours}:${time.minutes}`
}

export const getFormatedTimeFlight = (times: {
  startTime: number
  endTime: number
}) => {
  return `${getFormatedTime(times.startTime)} - ${getFormatedTime(times.endTime)}`
}