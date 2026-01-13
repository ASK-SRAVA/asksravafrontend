import { apiClient } from "../utils/apiClient"

export const getAllCategories = async (req,res) => {
    try {
        const allCategories  =  await apiClient.get("/api/categories/all")
        return allCategories
    }catch (error) {
        console.error("Error fetching categories:", error);
    }
}