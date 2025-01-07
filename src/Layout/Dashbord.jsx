import React from "react";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart/UseCart";

const Dashbord = () => {
  const [cart] = UseCart();
  return (
    <div className="flex">
      {/* dashboard nav section  */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu flex flex-col gap-3 px-6">
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaShoppingCart></FaShoppingCart>My cart({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <MdOutlineReviews />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaList></FaList>My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              {" "}
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* content section  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
