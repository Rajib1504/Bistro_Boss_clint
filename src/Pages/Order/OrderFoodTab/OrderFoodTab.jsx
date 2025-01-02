import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderFoodTab = ({ items }) => {
  return (
    <div className={"grid grid-cols-1    md:grid-cols-3   gap-4 "}>
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderFoodTab;