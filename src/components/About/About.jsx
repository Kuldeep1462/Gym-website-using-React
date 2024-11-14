import React from "react";
import BannerImg from "../../assets/banner.png";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300" id="about">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt="About Us Banner"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About Us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Global Fitness, where we are committed to helping you
                achieve a healthier, stronger, and more confident version of
                yourself. Our mission is to provide world-class fitness
                resources, from personalized training to comprehensive
                wellness programs, tailored to fit every lifestyle and goal.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Our team of certified trainers and wellness experts work
                tirelessly to ensure you have the support, motivation, and
                guidance needed to make sustainable changes. Join us on this
                journey to better health and see what makes Global Fitness a
                leader in the fitness industry.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
