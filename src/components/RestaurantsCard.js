import React from "react";
import { IMG_URL } from "../config";
import "./RestaurantsCard.css";

const RestaurantsCard = (props) => {
  const { restaurant } = props;
  return (
    <div className="restaurants_card">
      <img
        className="cardImg"
        src={IMG_URL + restaurant.data?.cloudinaryImageId}
        alt="Image"
      />
      <h2>{restaurant.data?.name}</h2>
      <h3>{restaurant.data?.totalRatingsString}</h3>
      <h4>{restaurant.data?.cuisines.join(", ")}</h4>
      <h4>{restaurant.data?.slaString}</h4>
    </div>
  );
};

export default RestaurantsCard;
