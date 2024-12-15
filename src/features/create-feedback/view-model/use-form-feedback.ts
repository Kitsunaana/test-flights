import { FormEvent, useState } from "react"
import { FeedbackData } from "../model/types"

export const getFieldsRecord = () => ({
  fullName: "",
  phone: "",
  email: "",
})

export const useFormFeedback = (onSubmit: (data: FeedbackData) => Promise<void>) => {
  const [errors, setErrors] = useState(getFieldsRecord)
  const [fields, setFields] = useState(getFieldsRecord)

  const handleChange = (_: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((fields) => ({
      ...fields,
      [e.target.name]: e.target.value
    }))
  }

  const handleReset = () => {
    setFields(getFieldsRecord())
    setErrors(getFieldsRecord())
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newErrors = {
      email: fields.email ? "" : "Поле не может быть пустым",
      phone: fields.phone ? "" : "Поле не может быть пустым",
      fullName: fields.fullName ? "" : "Поле не может быть пустым",
    }

    setErrors((errors) => ({ ...errors, ...newErrors }))

    const isFormValid = () => Object.values(newErrors).every(error => error === "");

    if (isFormValid()) onSubmit(fields).then(handleReset)
  }

  return {
    fields,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
  }
}