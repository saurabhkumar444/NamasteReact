import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import RestaurantsCard from "./components/RestaurantsCard";
import "./App.css";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
