import { FilterRecord } from "../model/flights-filter/flights.ts";

export const filterList: Array<{ name: keyof FilterRecord, caption: string }> = [
  { name: "all", caption: "Все" },
  { name: "0", caption: "Без пересадок" },
  { name: "1", caption: "1 Пересадка" },
  { name: "2", caption: "2 Пересадки" },
  { name: "3", caption: "3 Пересадки" },
]

export const sortList: Array<{ name: string, caption: string }> = [
  { name: "price", caption: "Самый дешевый" },
  { name: "speed", caption: "Самый быстрый" },
]