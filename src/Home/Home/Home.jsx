import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonals/Testimonials";
import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss|| Home</title>
      </Helmet>
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
