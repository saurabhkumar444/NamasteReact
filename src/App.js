import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import RestaurantsCard from "./components/RestaurantsCard";
import Body from "./components/Body";
import "./App.css";
import Skelton from "./components/Skelton";
import LocationScreen from "./components/Location/LocationScreen";

const AppLayout = () => {
  return (
    <>
      {/* <Headers /> */}
      <LocationScreen />
      {/* <Body /> */}
      {/* <Footer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
