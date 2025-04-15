import React, { useEffect } from "react";
import { CookingPot, Map } from "lucide-react";
import { useMealStore } from "../../useMealStore";
import Masonry from "react-layout-masonry";

const FoodList = () => {
  const meals = useMealStore((state) => state.meals);
  const fetchMeals = useMealStore((state) => state.fetchMeals);
  //   const loading = useMealStore((state) => state.loading);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <Masonry
      columns={{ 640: 2, 768: 2, 1024: 4 }}
      gap={16}
      className="w-[100px]"
    >
      {meals.map((meal) => (
        <div className="flex justify-center" key={meal.idMeal}>
          <div className="w-full h-auto flex-col flex justify-center items-center bg-neutral-200 shadow rounded-lg overflow-hidden gap-y-0.5">
            <img src={meal.strMealThumb} alt="meal" className="w-full h-32 " />
            <div className="flex w-full text-white gap-2 justify-center items-center bg-red-700 p-2">
              <CookingPot />
              <p className="text-sm font-semibold capitalize text-white whitespace-nowrap">
                {meal.strMeal}
              </p>
            </div>
            <div className="flex self-start gap-2 bg-orange-600 w-full text-white justify-center text-sm items-center p-2">
              <Map />
              <p className="capitalize text-xs">{meal.strArea}</p>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default FoodList;
