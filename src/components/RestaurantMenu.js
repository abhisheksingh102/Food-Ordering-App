import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.categories || [];

  console.log("categories", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category?.itemCards?.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name} - Rs.
                  {item.card.info.price / 100}
                </li>
              )) || <p>No items available.</p>}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
