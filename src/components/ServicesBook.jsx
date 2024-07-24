import React from "react";

const ServicesBook = () => {
  return (
    <div className="relative  my-20">
      <div className="bg-[url('https://i.ibb.co/Y2H7Xph/carousel-bg-2.jpg')] bg-center w-full lg:h-96 sm:h-[53.5rem] h-[54rem]"></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute inset-0">
        <div className=" flex flex-wrap justify-center">
          <div className=" w-1/3 sm:min-w-[31rem] min-w-80 py-20 pr-6 ml-2">
            <h3 className="text-white font-bold sm:text-4xl text-xl">
              Certified and Award Winning Car Repair Service Provider
            </h3>
            <p className="text-white my-6">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
          </div>

          <div className="flex flex-col justify-evenly place-items-center bg-red-600 w-1/3 mr-2 sm:min-w-[32rem] min-w-80 sm:px-0 px-4 h-96 ">
            <h1 className="text-white font-bold sm:text-4xl text-2xl">
              Book For A Service
            </h1>

            <form>
              <div className="flex flex-col ">
                <div className="flex">
                  <input
                    className="mr-4 mb-4 w-1/2 h-12 pl-4 "
                    placeholder="Your Name"
                  />
                  <input
                    className="  w-1/2  h-12 pl-4"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex">
                  <input
                    className="mr-4 mb-4 w-1/2 h-12 pl-4"
                    placeholder="Select A Service"
                  />
                  <input
                    className=" w-1/2 h-12 pl-4"
                    placeholder="Service Date"
                  />
                </div>
              </div>
              <input
                className=" mb-4 h-12 pl-4 w-full"
                placeholder="Special Request"
              />
              <button className="flex place-items-center justify-center bg-blue-950 px-12 py-4 font-bold text-white capitalize w-full ">
                book now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBook;
