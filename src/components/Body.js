import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="Meghana Foods"
          cuisine="Biryani, Sweets, Noth Indian"
          rating="4.4 stars"
          time="38 minutes"
        />
        <RestaurantCard
          name="KFC"
          cuisine="Burger, Fast Foods"
          rating="3.9 stars"
          time="27 minutes"
        />
      </div>
    </div>
  );
};

export default Body;
