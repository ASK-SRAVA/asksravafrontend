import { apiClient } from "../utils/apiClient";

export const searchService = async (payload) => {
  try {
    const response = await apiClient.post('/api/search', payload);
    return response;
  } catch (error) {
    console.error("Error searching:", error);
    throw error;
  }
};