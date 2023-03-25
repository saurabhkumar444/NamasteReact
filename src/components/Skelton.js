import React from "react";

function Skelton() {
  return (
    <div
      className="restaurant-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Array(10).map((value) => {
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
      })}
    </div>
  );
}

export default Skelton;
