import { useState } from "react"

export const useFormFeedback = () => {
  const [fields, setFields] = useState({
    fullName: "",
    phone: "",
    email: "",
  })

  const handleChange = (_: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  return {
    fields,
    handleChange
  }
}