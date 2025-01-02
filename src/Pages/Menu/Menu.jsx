import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import MenuCategory from "./Menu Category/MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SectionButton from "../../Home/Home/Shared/SectionButton/SectionButton";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* shared text  */}
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* menu category  */}
      <MenuCategory></MenuCategory>

      {/* menu button  */}
      <SectionButton btnTitle={"ORDER YOUR FAVOURITE FOOD"}></SectionButton>
    </div>
  );
};

export default Menu;
