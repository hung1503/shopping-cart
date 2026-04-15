import React from "react";
import { Carousel } from "../components/Carousel";
import { PopularProductList } from "../components/PopularProductList";

export const HomePage = () => {
  return (
    <div>
      <Carousel />
      <PopularProductList />
    </div>
  );
};
