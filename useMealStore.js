import { create } from "zustand";

export const useMealStore = create((set, get) => ({
  //DECLARATIONS
  categories: [],
  meals: [],
  selectedCategory: null,
  loading: true,

  //FUNCTIONS
  fetchCategories: async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error("unable to fetch categories");
      }
      const data = await response.json();
      set({ loading: false, categories: data.categories });
    } catch (error) {
      console.log(error);
    }
  },
  fetchMeals: async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      if (!response.ok) {
        throw new Error("unable to fetch meals");
      }
      const data = await response.json();
      set({ loading: false, meals: data.meals });
    } catch (error) {
      console.log(error);
    }
  },

  fetchMealByCategories: async (searchByCategories) => {
    set({ loading: true, selectedCategory: searchByCategories });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchByCategories}`
      );

      if (!response.ok) {
        throw new Error(`unable to get ${searchByCategories}`);
      }

      const data = await response.json();

      set({
        loading: false,
        meals: data.meals,
      });
    } catch (error) {
      set({ loading: false, selected: false });
      console.log(error);
    }
  },
  isCategorySelected: (categoryName) => {
    const selected = get().selectedCategory === categoryName;
    return selected;
  },
}));
