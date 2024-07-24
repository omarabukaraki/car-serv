import React from "react";
import { SectionsHeader, TestimonialCart } from "../../components";
import img_1 from "../../assets/img/testimonial-1.jpg";
import img_2 from "../../assets/img/testimonial-2.jpg";
import img_3 from "../../assets/img/testimonial-4.jpg";

const Testimonial = () => {
  const images = [img_1, img_2, img_3];
  return (
    <div className="my-16">
      <SectionsHeader title={"// TESTIMONIAL //"} body={"Our Clients Say!"} />

      <div className="flex flex-wrap justify-center">
        {images.map((img) => {
          return <TestimonialCart img={img} />;
        })}
      </div>
      <div className="h-32"></div>

    </div>
  );
};

export default Testimonial;
