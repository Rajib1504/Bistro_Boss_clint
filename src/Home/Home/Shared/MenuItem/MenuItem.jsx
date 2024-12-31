import React from "react";

const MenuItem = ({ item }) => {
  //   console.log(item);
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px " }}
        className="w-[100px] "
        src={image}
      ></img>
      <div>
        <h3 className="uppercase font-semibold">{name}-------------------</h3>
        <p className="text-sm text-gray-500">{recipe}</p>
      </div>
      <p className="text-[#D99904]">${price}</p>
    </div>
  );
};

export default MenuItem;
