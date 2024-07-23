import React from "react";
import * as Icon from "react-bootstrap-icons";

const SectionItem = (props) => {
  return (
    <div className=" bg-gray-100 py-6 px-5 font-bold text-2xl text-blue-950 my-2">
      <h4 className="flex place-items-center">
        <Icon.CarFrontFill className="mr-3 text-4xl text-red-600" /> {props.text}
      </h4>
    </div>
  );
};

export default SectionItem;
