import React from "react";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart/UseCart";
import UseAdmin from "../hooks/UseAdmin/UseAdmin";

const Dashbord = () => {
  const [cart] = UseCart();
  // TODO :get isAdmin value from the database
  const [isAdmin] = UseAdmin();
  return (
    <div className="flex">
      {/* dashboard nav section  */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu flex flex-col gap-3 px-6">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  {" "}
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  {" "}
                  <FaUtensils></FaUtensils>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/mannageItems"}>
                  {" "}
                  <FaList></FaList>Mannage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  {" "}
                  <FaBook />
                  Mannage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  {" "}
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
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
