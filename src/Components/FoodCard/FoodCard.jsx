import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute top-6 right-6 rounded-md py-1 font-bold px-4 ">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-gray-400">{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline hover:text-yellow-300 border-yellow-400 bg-slate-10  0 mt-4 border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
