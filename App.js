import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Footer = () => {
  return (
    <div>
      <h3>Parcel is beast</h3>
    </div>
  );
};
const header = (
  <div
    style={{
      justifyContent: "space-between",
      display: "flex",
    }}
  >
    <img
      src="https://cdn.logo.com/hotlink-ok/logo-social.png"
      alt="logo"
      style={{ height: 40, width: 40 }}
    />
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onChange={(e, value) => {
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Search
      </button>
    </div>
    <img
      src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
      alt="logo"
      style={{ height: 40, width: 40 }}
    />
  </div>
);
const Heading = () => {
  return (
    <div>
      {header}
      {console.log("Any JS code we can write here")}
      <h1 key="h1">I'm a Software developer</h1>
      <h2 key="h2">React is beautiful</h2>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
