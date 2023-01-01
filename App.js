import React from "react";
import ReactDOM from "react-dom/client";

const Footer = () => {
  return (
    <div>
      <h3>Parcel is beast</h3>
    </div>
  );
};
const header = (
  <div>
    <h1>Saurabh Here</h1>
  </div>
);
const Heading = () => {
  return (
    <div>
      {header}
      {console.log("Any JS code we can write here")}
      <h1 key="h1">I'm a Software developer</h1>
      <h2 key="h2">React is beautiful</h2>
      {Footer()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
