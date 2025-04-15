import React from "react";
import Wrapper from "../src/components/Wrapper";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import Categories from "../src/components/Categories";
import FoodList from "../src/components/FoodList";

const Homepage = () => {
  return (
    <Wrapper>
      <Hero />
      <Card />
      <Categories />
    </Wrapper>
  );
};

export default Homepage;
