import { useState } from "react"
import { feedbackApi } from "../api"
import { FeedbackData } from "./types"

export const useCreateFeedback = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<FeedbackData>()

  const submit = async (data: FeedbackData) => (
    feedbackApi
      .createFeedback(data)
      .then(setData)
      .finally(() => setIsLoading(false))
  )

  return {
    submit,
    isLoading,
    data
  }
}