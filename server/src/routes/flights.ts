import { Router } from "express"

const router = Router()

const timeToTimestamp = (hours: number, minutes: number) => {
  const date = new Date()

  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(0)

  return date.getTime()
}

const codes = [
  {
    code: "SVO",
    name: "Москва"
  },
  {
    code: "HKT",
    name: "Пхукет"
  },
  {
    code: "LED",
    name: "Санкт-Петербург"
  },
  {
    code: "KZN",
    name: "Казань"
  },
  {
    code: "EGO",
    name: "Екатеринбург"
  },
  {
    code: "NGR",
    name: "Нижний Новгород"
  },
  {
    code: "VVO",
    name: "Владивосток"
  },
  {
    code: "ROV",
    name: "Ростов-на-Дону"
  },
  {
    code: "KRR",
    name: "Краснодар"
  },
  {
    code: "UFA",
    name: "Уфа"
  }
];

const flights = [
  {
    id: "1",
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "13400",
    flights: [
      {
        id: "2",
        from: "LED",
        to: "HKT",
        startTime: timeToTimestamp(10, 45),
        endTime: timeToTimestamp(8, 0),
        travelTime: timeToTimestamp(21, 15),
        transfers: ["HKG", "JNB"],
        price: "13400",
        name: "Авиасейлс",
        logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
        dateStart: "2024-12-15",
        dateEnd: "2024-12-15",
        classType: "business"
      },
      {
        id: "3",
        from: "LED",
        to: "HKT",
        startTime: timeToTimestamp(11, 20),
        endTime: timeToTimestamp(0, 50),
        travelTime: timeToTimestamp(13, 30),
        transfers: ["HKG"],
        price: "13400",
        name: "Авиасейлс",
        logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
        dateStart: "2024-12-15",
        dateEnd: "2024-12-15",
        classType: "business"
      },
      {
        id: "4",
        from: "LED",
        to: "HKT",
        startTime: timeToTimestamp(12, 50),
        endTime: timeToTimestamp(10, 20),
        travelTime: timeToTimestamp(22, 30),
        transfers: ["HKG", "JNB", "KFV"],
        price: "13400",
        name: "Авиасейлс",
        logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
        dateStart: "2024-12-15",
        dateEnd: "2024-12-15",
        classType: "business"
      }
    ]
  },
  {
    id: "5",
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "5400",
    flights: [
      {
        id: "6",
        from: "HKT",
        to: "KZN",
        startTime: timeToTimestamp(12, 15),
        endTime: timeToTimestamp(16, 0),
        travelTime: timeToTimestamp(4, 45),
        transfers: [],
        price: "5400",
        name: "Авиасейлс",
        logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
        dateStart: "2024-12-15",
        dateEnd: "2024-12-15",
        classType: "business"
      },
    ],
  },
  {
    id: "7",
    name: "Авиасейлс",
    logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
    price: "8900",
    flights: [
      {
        id: "8",
        from: "KRR",
        to: "UFA",
        startTime: timeToTimestamp(14, 10),
        endTime: timeToTimestamp(20, 0),
        travelTime: timeToTimestamp(5, 50),
        transfers: ["VVO", "ROV"],
        price: "5400",
        name: "Авиасейлс",
        logo: "https://guide.aviasales.ru/uploads/JlnO0aZbrjCgtFJgtsRvmA.png",
        dateStart: "2024-12-15",
        dateEnd: "2024-12-15",
        classType: "business"
      },
    ],
  },
]

router.get("/", async (req, res) => {
  res.json(flights)
})

router.get("/codes", async (req, res) => {
  res.json(codes)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  const allFlights = flights.map((flight) => flight.flights).flat()
  const findFlight = allFlights.find((flight) => flight.id === id)

  if (!findFlight) res.status(404).json({ message: "Flight not found" })

  res.json(findFlight)
})

router.post("/", async (req, res) => {
  console.log(req.body)

  res.json({ message: "Feedback sent" })
})

export default router;
