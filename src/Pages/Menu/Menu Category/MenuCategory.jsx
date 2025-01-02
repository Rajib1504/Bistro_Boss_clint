import React from "react";
import MenuItem from "../../../Home/Home/Shared/MenuItem/MenuItem";
import Cover from "../../../Home/Home/Shared/Cover/Cover";

const MenuCategory = ({ item, coverImg, title }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid sm:grid-cols-2 gap-10 my-16">
        {item.map((item, _id) => (
          <MenuItem key={_id} item={item} title={"dessert"}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
