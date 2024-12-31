import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <Banner></Banner>
      {/* category  */}
      <Category></Category>
      {/* popular menu  */}
      <PopularMenu></PopularMenu>
      {/* feature   */}
      <Featured></Featured>
    </div>
  );
};

export default Home;
