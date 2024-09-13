import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //we can also destrucuring the props value and write in another way in place of props like { resName, cuisine } both are same thing
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[280px] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <img
        className="rounded-t-lg w-full h-[150px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <h4 className="text-sm text-gray-500">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center mt-4">
          <h4
            className={`font-semibold ${
              avgRating >= 4 ? "text-green-600" : "text-red-600"
            }`}
          >
            ⭐ {avgRating}
          </h4>
          <h4 className="text-gray-600">{costForTwo}</h4>
        </div>
        <h4 className="mt-2 text-gray-500">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
