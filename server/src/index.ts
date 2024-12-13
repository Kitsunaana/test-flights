import express from "express"
import flightsRouter from "./routes/flights"

const app = express()

app.use(express.json())

app.use("/flights", flightsRouter)

const PORT = process.env.PORT || 3009

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
