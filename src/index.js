import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/styles/global.css";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Pepito"
    lastName="Perez"
    jobTitle="Ingeniero de sistemas"
    twitter="4mjaimes"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
  />,
  container
);
