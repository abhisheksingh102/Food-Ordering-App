import React, { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleSearch();
            }}
          />
          <button
            className="px-4 py-2 m-4 rounded-md bg-green-100 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div m-4 p-4>
          <button
            className="px-4 py-2 m-4 rounded-md bg-green-100 cursor-pointer"
            onClick={handleTopRatedRestaurants}
          >
            {isResFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
