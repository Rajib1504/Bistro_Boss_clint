import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <section className="mb-16">
        {/* title  */}
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid sm:grid-cols-2 gap-10">
          {menu?.map((item, _id) => (
            <MenuItem key={_id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center items-center my-3">
          <button className="btn btn-outline  mt-4 border-0 border-b-4">
            View full menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
