import React from "react";
import ReactDOM from "react-dom/client";
import Bonjour from "./bonjour";
import Welcome from "./welcome";

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <React.StrictMode>
    <Bonjour name="Omar" prenom="liqsudklqsjdkqs" />
    <Bonjour name="Hajar" />
    <Bonjour name="Salah" />
    <Bonjour name="Zakaria" />
    {/* <Welcome /> */}
  </React.StrictMode>
);
