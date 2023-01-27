import React from "react";
import "./RestaurantsCard.css";

const Img_url =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantsCard = (props) => {
  console.log(props);
  const { restaurant } = props;
  return (
    <div className="restaurants_card">
      <img
        className="cardImg"
        src={Img_url + restaurant.data?.cloudinaryImageId}
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
