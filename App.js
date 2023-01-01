import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <div>
    <h1 key="h1">hello</h1>
    <h2 key="h2">World</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);
