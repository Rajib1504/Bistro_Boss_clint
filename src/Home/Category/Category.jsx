import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import cat1 from "../../assets/home/slide1.jpg";
import cat2 from "../../assets/home/slide2.jpg";
import cat3 from "../../assets/home/slide3.jpg";
import cat4 from "../../assets/home/slide4.jpg";
import cat5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img src={cat1} alt="" />
          <h3 className="uppercase text-4xl font-light text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="uppercase text-4xl font-light text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} alt="" />
          <h3 className="uppercase text-4xl font-light text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat4} alt="" />
          <h3 className="uppercase text-4xl font-light text-center -mt-16 text-white">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat5} alt="" />
          <h3 className="uppercase text-4xl font-light text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
