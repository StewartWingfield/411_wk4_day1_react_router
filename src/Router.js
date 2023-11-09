import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car/:id" element={<Car />} />
    </Routes>
  );
}

export default Router;
