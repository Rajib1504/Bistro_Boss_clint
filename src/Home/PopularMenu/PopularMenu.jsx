import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/hooks menu/useMenu";
import SectionButton from "../Home/Shared/SectionButton/SectionButton";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <section className="mb-16">
        {/* title  */}
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid sm:grid-cols-2 gap-10">
          {popular.map((item, _id) => (
            <MenuItem key={_id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={"/order"}>
          <SectionButton btnTitle={"  View full menu"}></SectionButton>
        </Link>
      </section>
    </div>
  );
};

export default PopularMenu;
