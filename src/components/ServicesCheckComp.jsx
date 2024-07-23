import React from "react";
import * as Icon from "react-bootstrap-icons";

const ServicesCheckComp = (props) => {
  return (
    <p className="flex place-items-center text-gray-500 my-2">
      <Icon.Check className="text-green-700 text-3xl mr-1" /> {props.text}
    </p>
  );
};

export default ServicesCheckComp;
