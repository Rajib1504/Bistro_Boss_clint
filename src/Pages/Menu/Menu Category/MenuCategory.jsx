import MenuItem from "../../../Home/Home/Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/hooks menu/useMenu";

const MenuCategory = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  console.log(offers);
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      {offers.map((item, _id) => (
        <MenuItem key={_id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuCategory;
