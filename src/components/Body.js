import { useState } from "react";
import RestaurantsCard from "./RestaurantsCard";
import { restaurantList } from "../config";
import "./Body.css";

function filterRestaurantList(searchText, restaurants) {
  const filterData = restaurantList.filter((value) =>
    value.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, SetRestaurants] = useState(restaurantList);

  const onChangeHandler = (value) => {
    setSearchText(value);
  };

  return (
    // <div className="body">
    <>
      <div className="Search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
          value={searchText}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterData = filterRestaurantList(searchText, restaurants);
            console.log("filterData", filterData);
            SetRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((value) => {
          return <RestaurantsCard key={value.data.id} restaurant={value} />;
        })}
      </div>
      {/* </div> */}
    </>
  );
};

export default Body;
