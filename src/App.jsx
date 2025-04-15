import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Hero />
        <Card />
        <Categories />
      </Wrapper>
    </div>
  );
};

export default App;
