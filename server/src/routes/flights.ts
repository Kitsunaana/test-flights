import { Router } from "express"
import {nanoid} from "nanoid"

const router = Router()

const timeToTimestamp = (hours: number, minutes: number) => {
  const date = new Date()

  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(0)

  return date.getTime()
}

const flights = [
  {
    id: nanoid(),
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "13400",
    flights: [
      {
        id: nanoid(),
        from: "MOW",
        to: "HKT",
        startTime: timeToTimestamp(10, 45),
        endTime: timeToTimestamp(8, 0),
        travelTime: timeToTimestamp(21, 15),
        transfers: ["HKG", "JNB"]
      },
      {
        id: nanoid(),
        from: "MOW",
        to: "HKT",
        startTime: timeToTimestamp(11, 20),
        endTime: timeToTimestamp(0, 50),
        travelTime: timeToTimestamp(13, 30),
        transfers: ["HKG"]
      },
      {
        id: nanoid(),
        from: "MOW",
        to: "HKT",
        startTime: timeToTimestamp(12, 50),
        endTime: timeToTimestamp(10, 20),
        travelTime: timeToTimestamp(22, 30),
        transfers: ["HKG", "JNB", "KFV"]
      }
    ]
  },
  {
    id: nanoid(),
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "5400",
    flights: [
      {
        id: nanoid(),
        from: "HKG",
        to: "JNB",
        startTime: timeToTimestamp(12, 15),
        endTime: timeToTimestamp(16, 0),
        travelTime: timeToTimestamp(4, 45),
        transfers: []
      },
    ],
  },
]

router.get("/", async (req, res) => {
  res.json(flights)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  res.json({})
})

export default router;
