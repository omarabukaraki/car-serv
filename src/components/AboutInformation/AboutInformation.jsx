import React from "react";
import aboutImg from "../../assets/img/about.jpg";
import * as Icon from "react-bootstrap-icons";

const AboutInformation = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="relative w-4/12 sm:min-w-96 min-w-64 mx-8">
        <img className="w-full" src={aboutImg} alt="" />
        <div className="absolute sm:w-56 w-32 sm:h-36 h-24 -top-6 -right-6 bg-gray-950/15 p-2 pt-4">
          <p className="text-white font-bold sm:text-2xl text-lg text-center">
            <span className="sm:text-6xl text-3xl ">15</span> Years <br />
            Experience
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/3 sm:min-w-96 min-w-64 lg:sm:mt-0 mt-8  ">
        <p className="font-bold text-red-600">// ABOUT US //</p>
        <h1 className="sm:text-4xl text-2xl font-bold text-blue-950 my-2">
          <span className="text-red-600">CarServ</span> Is The Best Place For
          Your Auto Care
        </h1>
        <p className="my-2 text-gray-700 w-4/5">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>

        <div className="flex my-4">
          <p className="p-3 bg-gray-300 font-bold text-blue-950 mr-4">01</p>
          <div>
            <h3 className="font-bold text-blue-950">Professional & Expert</h3>
            <p className="text-gray-700">
              Diam dolor diam ipsum sit amet diam et eos
            </p>
          </div>
        </div>
        <div className="flex my-4">
          <p className="p-3 bg-gray-300 font-bold text-blue-950 mr-4">02</p>
          <div>
            <h3 className="font-bold text-blue-950">
              Quality Servicing Center
            </h3>
            <p className="text-gray-700">
              Diam dolor diam ipsum sit amet diam et eos
            </p>
          </div>
        </div>
        <div className="flex my-4">
          <p className="p-3 bg-gray-300 font-bold text-blue-950 mr-4">03</p>
          <div>
            <h3 className="font-bold text-blue-950">Awards Winning Workers</h3>
            <p className="text-gray-700">
              Diam dolor diam ipsum sit amet diam et eos
            </p>
          </div>
        </div>

        <button className="flex place-items-center bg-red-600 px-12 py-4 font-bold text-white capitalize w-56">
          Read more <Icon.ArrowRight className=" ml-4 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default AboutInformation;
