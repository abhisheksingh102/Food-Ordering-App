import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="p-6 max-w-screen-lg mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className="bg-gray-50 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <span className="text-lg font-medium">{item.card.info.name}</span>
              <span className="text-gray-600">
                Rs. {item.card.info.price / 100 || item.card.info.defaultPrice}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
