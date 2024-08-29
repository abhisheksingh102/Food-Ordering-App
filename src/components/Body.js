import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const resList = [
    {
      data: {
        name: "Meghana Foods",
        cuisine: "Biryani, Sweets, North Indian",
        rating: "4.4 stars",
        time: "38 minutes",
      },
    },
    {
      data: {
        name: "KFC",
        cuisine: "Burger, Fast Foods",
        rating: "3.9 stars",
        time: "27 minutes",
      },
    },
  ];

  const [topRestaurants, setTopRestaurants] = useState(resList);

  const handleTopRatedRestaurants = () => {
    const filteredList = topRestaurants.filter(
      (res) => parseFloat(res.data.rating) > 4
    );
    setTopRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => handleTopRatedRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
