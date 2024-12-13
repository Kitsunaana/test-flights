import { Router } from "express"
import {nanoid} from "nanoid"

const router = Router()

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
        startTime: 1734061500206,
        endTime: 1734054300892,
        travelTime: 1734099300524,
        transfers: ["HKG", "JNB"]
      },
      {
        id: nanoid(),
        from: "MOW",
        to: "HKT",
        startTime: 1734063600292,
        endTime: 1734025800250,
        travelTime: 1734071400032,
        transfers: ["HKG"]
      },
      {
        id: nanoid(),
        from: "MOW",
        to: "HKT",
        startTime: 1734063600292,
        endTime: 1734025800250,
        travelTime: 1734071400032,
        transfers: ["HKG", "JNB", "KFV"]
      }
    ]
  },
  {
    id: nanoid(),
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "13400",
    flights: [
      {
        id: nanoid(),
        from: "HKG",
        to: "JNB",
        startTime: 1734061500206,
        endTime: 1734054300892,
        travelTime: 1734099300524,
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
