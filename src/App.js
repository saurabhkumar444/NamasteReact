import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Headers from "./components/Header";

const Heading = () => {
  return (
    <div>
      <Headers />
      {console.log("Any JS code we can write here")}
      <h1 key="h1">I'm a Software developer</h1>
      <h2 key="h2">React is beautiful</h2>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
