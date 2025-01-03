import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../../Home/Home/Shared/Cover/Cover";
import OrderImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../../hooks/hooks menu/useMenu";
import OrderFoodTab from "../OrderFoodTab/OrderFoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const inetialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(inetialIndex);

  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order Food</title>
      </Helmet>
      <Cover img={OrderImg} title={"Order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderFoodTab items={salad}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={pizza}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={soup}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={desserts}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={drinks}></OrderFoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
