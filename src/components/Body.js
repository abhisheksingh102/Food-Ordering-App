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

  // Update filtered restaurants whenever listOfRestaurants changes
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

  // Determine which restaurants to display (filtered or all)
  const restaurantsToDisplay =
    searchInput || isResFiltered ? filteredRestaurants : listOfRestaurants;

  // Check online status using custom hook
  const onlineStatus = useOnlineStatus();

  // If user is offline
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl mt-20 text-red-600">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center mt-6">
        <div className="search w-1/3 m-4">
          <input
            type="text"
            placeholder="Search Restaurants..."
            className="w-full px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:border-green-400"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <button
          className="px-6 py-2 m-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          onClick={handleTopRatedRestaurants}
        >
          {isResFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-6">
        {restaurantsToDisplay.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
            className="w-[260px] h-[350px] hover:scale-105 transition-transform duration-300"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
