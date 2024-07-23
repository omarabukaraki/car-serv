import React from "react";
import img_1 from "../../assets/img/service-1.jpg";
import * as Icon from "react-bootstrap-icons";
import {
  SectionItem,
  SectionsHeader,
  ServicesCheckComp,
} from "../../components/index";

const Services = () => {
  return (
    <>
      <div className="flex flex-col place-items-center">
        <SectionsHeader
          title={"// OUR SERVICES //"}
          body={"Explore Our Services"}
        />
        <div className="flex justify-center place-items-center">
          <div className="flex flex-wrap justify-center  ">
            <div className="flex flex-col justify-between  w-1/5 min-w-80 ">
              <SectionItem text={"Diagnostic Test"} />
              <SectionItem text={"Engine Servicing"} />
              <SectionItem text={"Tires Replacement"} />
              <SectionItem text={"Oil Changing"} />
            </div>
            <div className="flex justify-center w-1/4 min-w-96 sm:my-0 my-8 ">
              <img className=" w-4/5" src={img_1} />
            </div>
            <div className="flex flex-col justify-between  w-1/5 min-w-80 lg:my-0 my-6 ">
              <h3 className="font-bold text-2xl">
                15 Years Of Experience In Auto Servicing
              </h3>
              <p className="my-2 text-gray-500 w-4/5 ">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div>
                <ServicesCheckComp text={"Quality Servicing"} />
                <ServicesCheckComp text={"Expert Workers"} />
                <ServicesCheckComp text={"Modern Equipment"} />
              </div>
              <button className="flex place-items-center bg-red-600 px-12 py-4 font-bold text-white capitalize w-56 ">
                Read more <Icon.ArrowRight className=" ml-4 text-xl" />
              </button>
            </div>
            <div className="lg:hidden  w-1/4 min-w-96 sm:my-0 my-8 bg-white "></div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://i.ibb.co/Y2H7Xph/carousel-bg-2.jpg')]  w-full">
        <div>
          <h3>Certified and Award Winning Car Repair Service Provider</h3>
          <p>
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
            dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
        </div>

        <div>
          <h1>Book For A Service</h1>
    
          <form>
            <div>
              <input />
              <input />
              <input />
              <input />
            </div>
            <input />
            <button>Book Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
