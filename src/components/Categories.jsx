import React, { useEffect } from "react";
import Button from "./Button";
import { ChevronRight, Utensils } from "lucide-react";
import ViewAll from "./ViewAll";
import RecommendedCard from "./RecommendedCard";
import { useMealStore } from "../../useMealStore";
import FoodList from "../components/FoodList";

const Categories = () => {
  const categories = useMealStore((state) => state.categories);
  const fetchCategories = useMealStore((state) => state.fetchCategories);
  const loading = useMealStore((state) => state.loading);
  const fetchMealByCategories = useMealStore(
    (state) => state.fetchMealByCategories
  );
  const isCategorySelected = useMealStore((state) => state.isCategorySelected);

  // FETCHING THE CATEGORIES
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <ViewAll>Recipe categories</ViewAll>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-7 h-7 md:h-10 md:w-10 border-4 border-b-neutral-300 rounded-full animate-spin" />
        </div>
      )}

      <div
        className="flex gap-2 overflow-x-auto my-3 pb-2 md:mx-10 md:flex-wrap md:justify-center scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.slice(0, 5).map((category) => (
          <Button
            key={category.idCategory}
            className={`${
              isCategorySelected(category.strCategory)
                ? "border-1 border-black"
                : ""
            } justify-between items-center bg-neutral-100 shadow-sm flex-shrink-0 w-fit px-2 rounded-lg`}
            onClick={() => fetchMealByCategories(category.strCategory)}
          >
            <Utensils className="bg-white rounded-lg w-8 h-8 p-2" />
            <p className="text-sm text-neutral-500">{category.strCategory}</p>
            <ChevronRight color="#666666" />
          </Button>
        ))}
      </div>
      <FoodList />

      <ViewAll>recommended to try out</ViewAll>
      <RecommendedCard />
    </>
  );
};

export default Categories;
