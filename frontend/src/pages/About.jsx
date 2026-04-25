import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm">
          <p>
            Welcome to Prescripto, your trusted partner in manging your
            healthcare needs conveiently and efficientlu at prescripto. We
            understand the challenges individuals force when it comes to
            scheduling doctor appointment and managing their health records
          </p>
          <p>
            Precripto is committed to excellence in technology. we continuously
            strive to enhance our platform, integrationg the latest advancements
            to improve yser experience and deliver superior service. whether
            you're booking your first appointment of managing ongoing care.
            precripto is herer to support every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamiess Healthcare
            experience for every user. we Aim to bridge the gap between potients
            and healthcare providers, Making it easier for you Access the core
            you need when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl mt-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Stremlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personlization:</b>
          <p>Tailored recommmendation and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
