import React from "react";

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg"
      />
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};

export default RestaurantCard;
