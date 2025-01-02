import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
// import drinksImg from "../../assets/menu/";
import MenuCategory from "./Menu Category/MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/hooks menu/useMenu";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      {/* main section  */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* Offerd section  */}
      <MenuCategory item={offered}></MenuCategory>
      {/* Dessert Section  */}
      <MenuCategory
        item={desserts}
        title={"desserts"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza  */}
      <MenuCategory
        item={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salad  */}
      <MenuCategory
        item={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      {/* soup  */}
      <MenuCategory
        item={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
