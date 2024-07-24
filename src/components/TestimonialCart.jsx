import React from "react";

const TestimonialCart = (props) => {
  return (
    <div className="flex flex-col place-items-center  w-1/4 min-w-96 mx-4 p-4">
      <div className="flex justify-center place-items-center w-20 h-20 rounded-full bg-gray-200">
        <img className="w-16  h-16 rounded-full" src={props.img} />
      </div>
      <h3 className="font-bold text-blue-950 text-xl mt-4">Client Name</h3>
      <p className="text-gray-400 pb-4">Profession</p>
      <div className="bg-red-700 p-6 text-white font-medium">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos
          perspiciatis est hic ducimus.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCart;
