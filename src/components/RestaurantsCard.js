import React from "react";
import { commonValue } from "../CommonValue";
import { IMG_URL } from "../config";
import "./RestaurantsCard.css";

const RestaurantsCard = (props) => {
  const { restaurant } = props;
  console.log(commonValue.width);
  return (
    <div className="restaurants_card">
      <div style={{ backgroundColor: "red" }}>
        <img
          className="cardImg"
          src={IMG_URL + restaurant.data?.cloudinaryImageId}
          alt="Image"
        />
      </div>
      <div>
        <p>{restaurant.data?.name}</p>
        <div
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={
              restaurant.data?.avgRating > "3.5"
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          >
            <p style={{ fontSize: "12px" }}>{restaurant.data?.avgRating}</p>
          </div>
          <div>•</div>
          <p style={{ fontSize: "10px" }}>{restaurant.data?.slaString}</p>
          <div>•</div>
          <p style={{ fontSize: "10px" }}>
            {restaurant.data?.costForTwoString}
          </p>
        </div>
        <p>{restaurant.data?.totalRatingsString}</p>
        <p>{restaurant.data?.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantsCard;
