import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Hero />
        <Card />
      </Wrapper>
    </div>
  );
};

export default App;
