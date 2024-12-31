import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Home/Shared/Footer/Footer";
import NavBar from "../Home/Home/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
