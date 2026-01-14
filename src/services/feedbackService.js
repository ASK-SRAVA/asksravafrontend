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

export const getAllFeedbacks = async () => {
  try {
    const response = await apiClient.get("/api/feedback/all");
    return response;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw error;
  }
};
