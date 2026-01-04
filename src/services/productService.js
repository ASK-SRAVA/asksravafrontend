import { apiClient } from "../utils/apiClient";

export const getProducts = async (categoryId) => {
  try {
    const products = await apiClient.get(`/api/products/${categoryId}`);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    throw error;
  }
};
