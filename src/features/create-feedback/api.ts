import { FeedbackData } from "./model/types"

export const feedbackApi = {
  async createFeedback(data: FeedbackData) {
    return await fetch("/api/flights", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json() as Promise<FeedbackData>)
  }
}