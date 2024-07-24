import React from "react";

const Footer = () => {
  return (
  <div >
<div className="relative">
      <div className="bg-[url('https://i.ibb.co/sH9CMsY/carousel-bg-1.jpg')] bg-center w-full h-20"></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0">
        <h3 className="font-bold text-white text-2xl pt-6 text-center">
          Created By Omar abu karaki
          <sup className="font-normal text-red-600">&copy;</sup>
        </h3>
      </div>
    </div>
  </div>

  );
};

export default Footer;
