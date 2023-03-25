const CORS_URL = "https://corsanywhere.herokuapp.com/";
const SWIGGY_URL = "https://www.swiggy.com/dapi/";

export const getLocationList = async (location) => {
  console.log(
    SWIGGY_URL + "misc/place-autocomplete?input=" + location + "&types="
  );
  const response = await fetch(
    SWIGGY_URL + "misc/place-autocomplete?input=" + location + "&types="
    // CORS_URL +
  );
  const result = await response.json();
  return result?.data;
};

export const getResaurantListMenu = async (payload) => {
  await fetch(
    CORS_URL + SWIGGY_URL + "restaurants/list/v5?",
    //   lat = 19.0759837 & lng=72.8776559,
    payload?.latLng,
    "&page_type=DESKTOP_WEB_LISTING"
  );
  const result = await response.json();
  return result;
};

export const getSearchResaurantList = async (payload) => {
  await fetch(
    // restaurants/search/suggest?lat=19.0759837&lng=72.8776559&str=s%20b
    CORS_URL +
      SWIGGY_URL +
      "restaurants/search/suggest?" +
      //   lat = 19.0759837 & lng=72.8776559,
      payload?.latLng +
      "&str=" +
      payload?.search
  );
  const result = await response.json();
  return result;
};
// https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill + cloudinaryImageId
