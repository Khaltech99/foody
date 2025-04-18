import React, { useEffect } from "react";
import { CookingPot, Map } from "lucide-react";
import { useMealStore } from "../../useMealStore";
import Masonry from "react-layout-masonry";
import LoadingMeals from "./LoadingMeals";

const FoodList = () => {
  const meals = useMealStore((state) => state.meals);
  const fetchMeals = useMealStore((state) => state.fetchMeals);
  const error = useMealStore((state) => state.error);
  const loading = useMealStore((state) => state.loading);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  // Handle error state
  if (error) {
    return <h1>Error fetching meals</h1>;
  }

  // Handle loading state
  {
    loading && (
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-7 h-7 md:h-10 md:w-10 border-4 border-b-neutral-300 rounded-full animate-spin" />
      </div>
    );
  }

  // Handle case where meals is null or not an array
  if (!meals || !Array.isArray(meals) || meals.length === 0) {
    return <h1>No meals found. Try another search.</h1>;
  }

  // Now we can safely use array methods on meals
  return (
    <Masonry
      columnProps={{
        className: "custom-column",
        style: { width: "100%" },
      }}
      columns={{ 640: 1, 768: 2, 1024: 4 }}
      gap={16}
      items={meals.slice(0, 10)}
    >
      {meals.slice(0, 10).map((meal) => (
        <div
          key={meal.idMeal}
          className="cursor-pointer w-full h-auto mb-4 flex-col flex justify-center items-center bg-neutral-200 shadow rounded-lg overflow-hidden gap-y-0.5"
        >
          <img
            src={meal?.strMealThumb}
            alt="meal"
            className={`w-full h-auto object-cover`}
          />
          <div className="flex w-full text-white gap-2 justify-center items-center bg-red-700 p-2 h-10">
            <CookingPot size={18} />
            <p className="text-sm font-semibold capitalize text-white truncate">
              {meal?.strMeal.split(" ").slice(0, 5).join(" ") + "..."}
            </p>
          </div>
          {meal.strArea && (
            <div className="flex gap-2 bg-orange-600 w-full text-white justify-center text-sm items-center p-2 ">
              <Map size={18} />
              <p className="capitalize text-xs truncate">{meal.strArea}</p>
            </div>
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default FoodList;
