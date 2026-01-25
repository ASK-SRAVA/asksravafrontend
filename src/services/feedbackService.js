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

export const feedBackCount = async () => {
  try {
    const count = await apiClient.get("/api/feedback/count");
    console.log("Feedback count response:", count);
    return count;
  } catch (error) {
    console.error("Error fetching feedback count:", error);
    throw error;
  }
};
