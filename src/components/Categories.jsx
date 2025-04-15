import React, { useEffect } from "react";
import Button from "./Button";
import { ChevronRight, Utensils } from "lucide-react";
import ViewAll from "./ViewAll";
import RecommendedCard from "./RecommendedCard";
import { useMealStore } from "../../useMealStore";

const Categories = () => {
  const categories = useMealStore((state) => state.categories);
  const fetchCategories = useMealStore((state) => state.fetchCategories);

  // FETCHING THE CATEGORIES
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]); // Remove categories from dependencies

  return (
    <>
      <ViewAll>Recipe categories</ViewAll>

      <div className="flex gap-2 scroll-auto overflow-x-auto mt-3">
        {categories.slice(0, 5).map((category) => (
          <Button
            key={category.idCategory}
            className="justify-between items-center bg-neutral-100 shadow-sm w-full px-2 rounded-lg"
          >
            <Utensils className="bg-white rounded-lg w-8 h-8 p-2" />
            <p className="text-sm text-neutral-500">{category.strCategory}</p>
            <ChevronRight color="#666666" />
          </Button>
        ))}
      </div>
      <ViewAll>recommended to try out</ViewAll>
      <RecommendedCard />
    </>
  );
};

export default Categories;
