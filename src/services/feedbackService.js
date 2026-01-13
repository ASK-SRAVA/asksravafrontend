import { apiClient } from "../utils/apiClient";

export const submitFeedback = async (payload) => {
  try {
    const response = await apiClient.post("/api/feedback", payload);
    return response;
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw error;
  }
};
