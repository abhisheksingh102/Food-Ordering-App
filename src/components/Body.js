import React, { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isResFiltered, setIsResFiltered] = useState(false);

  // Fetch data from the Swiggy API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRatedRestaurants = () => {
    if (isResFiltered) {
      // Show all restaurants
      setFilteredRestaurant(listOfRestaurants);
    } else {
      // Show only top-rated restaurants
      const filteredList = listOfRestaurants.filter(
        (res) => parseFloat(res?.info.avgRating) > 4
      );
      setFilteredRestaurant(filteredList);
    }
    setIsResFiltered(!isResFiltered);
  };

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => handleTopRatedRestaurants()}
        >
          {isResFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
