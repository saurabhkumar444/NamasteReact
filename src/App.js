import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import RestaurantsCard from "./components/RestaurantsCard";
import Body from "./components/Body";
import "./App.css";

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
