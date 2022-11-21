import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./welcome";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Welcome className="welcome" />
  </React.StrictMode>
);
