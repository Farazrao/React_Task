// FoodCardData.js (Parent Component)
import React from "react";
import FoodCard from "./FoodCard";
import FoodCategoryData from "../components/FoodCategoryData";
import Layout from "../components/Layout/Layout";

const FoodCardData = () => {
  // Fetch or define your food items data and pass it as 'items' prop
  const items = FoodCategoryData;

  return (
    <Layout>
      <FoodCard items={items} />
    </Layout>
  );
};

export default FoodCardData;
