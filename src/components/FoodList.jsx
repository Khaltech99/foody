import React, { useEffect } from "react";
import { CookingPot, Map } from "lucide-react";
import { useMealStore } from "../../useMealStore";
import Masonry from "react-layout-masonry";

const FoodList = () => {
  const meals = useMealStore((state) => state.meals);
  const fetchMeals = useMealStore((state) => state.fetchMeals);
  const error = useMealStore((state) => state.error);

  //   const loading = useMealStore((state) => state.loading); //review

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  error && <h1>error fetching meals</h1>;
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={16}>
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="w-full h-auto mb-4 flex-col flex justify-center items-center bg-neutral-200 shadow rounded-lg overflow-hidden gap-y-0.5"
        >
          <img
            src={meal?.strMealThumb}
            alt="meal"
            className={`w-full h-auto object-cover`}
          />
          <div className="flex w-full text-white gap-2 justify-center items-center bg-red-700 p-2 h-10">
            <CookingPot size={18} />
            <p className="text-sm font-semibold capitalize text-white truncate">
              {meal?.strMeal}
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
