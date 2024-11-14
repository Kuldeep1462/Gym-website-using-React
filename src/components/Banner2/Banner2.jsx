import React from "react";
import BannerImg from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Our state-of-the-art facility offers everything you need for a complete fitness experience. From strength training and 
              cardio equipment to dedicated areas for yoga and meditation, we provide a space that inspires and motivates
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
              "Experience the Global Fitness difference. Our goal is to support you in building a
               sustainable fitness routine that aligns with your goals and lifestyle
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
