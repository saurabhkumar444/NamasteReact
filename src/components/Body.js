import { useEffect, useState } from "react";
import RestaurantsCard from "./RestaurantsCard";
import { restaurantList } from "../config";
import "./Body.css";
import Skelton from "./Skelton";
import { ApiResult } from "../CommonValue";

function filterRestaurantList(searchText) {
  const filterData = restaurantList.filter((value) => {
    return value?.data?.name?.toLowerCase().includes(searchText?.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, SetRestaurants] = useState();

  useEffect(() => {
    getResaurants();
  }, []);

  async function getResaurants() {
    console.log(">>>>>>");
    // const response = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    // );
    // const result = await response.json();
    // console.log(result.data);
    SetRestaurants(ApiResult?.cards[2]?.data?.data?.cards);
  }

  const onChangeHandler = (value) => {
    setSearchText(value);
  };
  if (restaurants?.length === 0) {
    return <Skelton />;
  }
  return (
    <>
      <div className="search-container" style={{}}>
        <div
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: 5,
              // justifyContent: "center",
              // alignItems: "center",
              display: "flex",
              outline: 10,
              border: 1,
              borderColor: "black",
              borderStyle: "solid",
            }}
          >
            <input
              type="text"
              class="_2FkHZ"
              placeholder="Search for restaurants and food"
              // maxlength="200"
              value={searchText}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="search-btn"
          onClick={() => {
            const filterData = filterRestaurantList(searchText);
            console.log("filterData", filterData);
            SetRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants &&
          restaurants.map((value) => {
            return <RestaurantsCard key={value.data.id} restaurant={value} />;
          })}
      </div>
    </>
  );
};

export default Body;
