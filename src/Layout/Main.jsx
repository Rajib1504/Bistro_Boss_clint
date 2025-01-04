import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Home/Home/Shared/Footer/Footer";
import NavBar from "../Home/Home/Shared/NavBar/NavBar";

const Main = () => {
  // navbar and footer will not show in the login page
  const location = useLocation();
  console.log(location);
  const noNavFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noNavFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noNavFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
