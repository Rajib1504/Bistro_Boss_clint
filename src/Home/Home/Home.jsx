import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonals/Testimonials";

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
      {/* testimonials  */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
