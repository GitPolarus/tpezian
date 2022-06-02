import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="content">
      <SideBar title="Tuto2" />
    </div>
    <Footer />
  </React.StrictMode>
);
