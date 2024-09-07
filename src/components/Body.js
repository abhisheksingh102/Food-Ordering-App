import React, { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isResFiltered, setIsResFiltered] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  const listOfRestaurants = useRestaurantList();

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRatedRestaurants = () => {
    if (isResFiltered) {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const filtered = listOfRestaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setFilteredRestaurants(filtered);
    }
    setIsResFiltered(!isResFiltered);
  };

  const restaurantsToDisplay =
    searchInput || isResFiltered ? filteredRestaurants : listOfRestaurants;

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleSearch();
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRatedRestaurants}>
          {isResFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {restaurantsToDisplay.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
