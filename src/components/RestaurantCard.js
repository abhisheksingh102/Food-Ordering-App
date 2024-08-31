import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //we can also destrucuring the props value and write in another way in place of props like { resName, cuisine } both are same thing
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      {/* once we destrucuring we can use directly resName instead of writing props.resName */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
