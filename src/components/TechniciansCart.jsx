import React from "react";

const TechniciansCart = (props) => {
  return (
    <div className="bg-gray-200 w-1/6 min-w-72 mx-3 my-3">
      <img src={props.img} />
      <h3 className="mt-5 font-bold text-xl text-blue-950 text-center">
        {props.name}
      </h3>
      <p className="pb-5 text-center text-sm text-gray-500">Designation</p>
    </div>
  );
};

export default TechniciansCart;
