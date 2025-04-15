import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
