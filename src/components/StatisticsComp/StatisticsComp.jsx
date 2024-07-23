import React from "react";
import img_1 from "../../assets/img/carousel-bg-1.jpg";
import * as Icon from "react-bootstrap-icons";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
const StatisticsComp = () => {
  console.log(img_1);

  return (
    <div className="relative my-16">
      <div className='bg-no-repeat bg-cover bg-center bg-[url("https://i.ibb.co/sH9CMsY/carousel-bg-1.jpg")] h-56'>
        <div></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-wrap justify-evenly  place-items-center">
        <StatisticsItem icon={<Icon.CheckLg />} text={"Years Experience"} />
        <StatisticsItem
          icon={<Icon.PersonFillGear />}
          text={"Expert Technicians"}
        />
        <StatisticsItem icon={<Icon.PeopleFill />} text={"Satisfied Clients"} />
        <StatisticsItem
          icon={<Icon.CarFrontFill />}
          text={"Compleate Projects"}
        />
      </div>
    </div>
  );
};

export default StatisticsComp;
