import React, { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isResFiltered, setIsResFiltered] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

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

  const handleSearch = () => {
    const searchedRestaurants = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurant(searchedRestaurants);
  };

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
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the ui
              // searchText
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => handleTopRatedRestaurants()}
        >
          {isResFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={`/restaurants/${restaurants?.info?.id}`}
          >
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
