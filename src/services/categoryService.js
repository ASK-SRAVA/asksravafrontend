import { apiClient } from "../utils/apiClient"

export const getAllCategories = async (req,res) => {
    try {
        const allCategories  =  await apiClient.get("/api/categories/all")
        console.log("categories",allCategories)
        return allCategories
    }catch (error) {
        console.error("Error fetching categories:", error);
    }
}