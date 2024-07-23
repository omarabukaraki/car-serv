import React from "react";

const StatisticsItem = (props) => {
  return (
    <div className="flex flex-col place-items-center m-2">
      <h3 className="text-white sm:text-4xl text-xl">
        {props.icon}
      </h3>
      <h3 className="text-white font-bold sm:text-3xl text-lg sm:my-2 my-1">1234</h3>
      <p className="text-white sm:text-lg text-sm">{props.text}</p>
    </div>
  );
};

export default StatisticsItem;
