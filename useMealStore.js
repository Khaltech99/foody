import { create } from "zustand";

export const useMealStore = create((set) => ({
  categories: [],
  loading: true,
  fetchCategories: async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error("unable to fetch");
      }
      const data = await response.json();
      set({ loading: false, categories: data.categories });
    } catch (error) {
      console.log(error);
    }
  },
}));
