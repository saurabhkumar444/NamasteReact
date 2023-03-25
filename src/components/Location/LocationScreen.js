import React, { useEffect, useState } from "react";
import { getLocationList } from "../../ApiGenerator";
import { locationCityList } from "../../CommonValue";
import Dropdown from "../common/DropDown";
import "./LocationScreen.css";

const LocationScreen = () => {
  const [locatonOption, setLocationOption] = useState([]);
  const [locatonInput, setLocationInput] = useState("");

  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  const onChangeHandler = async (locationName) => {
    console.log("locationName", locationName);
    const response = await getLocationList(locationName);
    const data = response?.map((data) => {
      return {
        ...data,
        value: data?.place_id,
        label: data?.description,
      };
    });
    console.log(">>>>", data);
    setLocationOption(data);
  };

  useEffect(() => {
    const settime = setTimeout(() => {
      onChangeHandler(locatonInput);
    }, 200);
    return () => {
      clearTimeout(settime);
    };
  }, [locatonInput]);

  return (
    <div className="location_container">
      <div className="location_sub_container">
        <div className="location_left">
          <div className="location_sub_left">
            <div className="location_text_container">
              <div className="location_img">
                <img
                  className="location_logo_img"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
                  alt="logo"
                />
              </div>
              <p style={{ fontSize: "2em", marginTop: "80px" }}>
                Login Sign up Cooking gone wrong? <br />
              </p>
              <p className="location_order_food">
                Order food from favourite restaurants near you.
              </p>
              <div
                style={{
                  // padding: 5,
                  // width: "100%",
                  display: "flex",

                  backgroundColor: "red",
                }}
                className={"location_dropdown"}
              >
                <div style={{ flex: 1 }}>
                  <Dropdown
                    placeHolder="Enter your delivery location"
                    options={locatonOption}
                    value={locatonInput}
                    onInputChange={(e, value) => {
                      setLocationInput(e.target.value);
                      // onChangeHandler(e.target.value);
                    }}
                    onChange={(value) => onChangeHandler(value)}
                  />
                </div>
                <button
                  style={{
                    padding: 5,
                    border: 0,
                    backgroundColor: "#fc8019",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  FIND FOOD
                </button>
              </div>
              <p className="location_popular_city">POPULAR CITIES IN INDIA</p>
              <div
                style={{
                  backgroundColor: "red",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {locationCityList &&
                  locationCityList.map((value, index) => {
                    return (
                      <a
                        key={value.id}
                        className={"location_city"}
                        style={{
                          color: index % 2 ? "#686b78" : "#93959f",
                        }}
                      >
                        {value.name}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="location_right">
          {/* <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            alt=""
          /> */}
          {/* <div className="location_right_img"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LocationScreen;
