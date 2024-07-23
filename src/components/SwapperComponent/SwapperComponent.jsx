import React from "react";
import * as Icon from "react-bootstrap-icons";

const SwapperComponent = (props) => {
  return (
    <div className="relative  w-full">
      <img src={props.bg_image} className="relative" />
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute inset-y-14 sm:inset-y-1/3 min-h-fit min-w-full px-12 ">
        <div className="flex justify-between place-items-center">
          <button
            onClick={props.prevClick}
            className="sm:text-6xl text-3xl text-gray-500"
          >
            <Icon.CaretLeft />
          </button>
          <div className=" lg:block flex flex-col place-items-center w-4/5 md:w-1/3">
            <p className="capitalize font-bold text-white">
              // CAR SERVICING //
            </p>
            <h2 className=" lg:text-6xl sm:text-3xl text-xl lg:text-start text-center font-bold text-white md:py-8 py-4">
              Qualified Car Repair Service Center
            </h2>
            <button className="flex place-items-center sm:px-10 px-6 sm:py-4 py-2 bg-red-600 text-white font-bold">
              Learn more
              <span>
                <Icon.ArrowRight className="text-xl ml-4" />
              </span>
            </button>
          </div>
          <img src={props.image} className="w-1/4 h-80 lg:block  hidden" />
          <button
            onClick={props.nextClick}
            className="sm:text-6xl text-3xl text-gray-500"
          >
            <Icon.CaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapperComponent;
