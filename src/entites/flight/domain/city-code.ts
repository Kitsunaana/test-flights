export type CityCode = {
  id: string
  code: string
  name: string
}

export const getCodesRecord = (codes: CityCode[]) => (
  codes.reduce((acc, code) => {
    acc[code.code] = code;
    return acc;
  }, {} as Record<string, CityCode>)
)

export const isMatchWord = (words: string[], search: string) => (
  words.some(word => word.toUpperCase().includes(search.toUpperCase()))
)