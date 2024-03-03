import React from "react";
import rohingya1 from "../../../src/assets/rohingya_1.jpg";
import rohingya2 from "../../../src/assets/rohingya_2.jpg";
import rohingya3 from "../../../src/assets/rohingya_3.jpeg";
const Banner = () => {
  return (
    <div className="flex justify-center gap-16 items-center">
      <img src={rohingya3} alt="" className="" />
      <div>
        <h3 className="text-4xl font-bold text-sky-900">
          Ask to know about <br /> Rohingya Refugee Crisis!
        </h3>
      </div>
    </div>
  );
};

export default Banner;
