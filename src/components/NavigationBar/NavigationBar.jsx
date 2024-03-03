import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-fuchsia-200 py-6 px-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-bold">
            <span className="text-orange-400">Rohingya</span>{" "}
            <span className=" text-red-500">Refugee</span>{" "}
          </h2>
        </div>
        <div className="flex gap-10 text-lg font-semibold text-sky-950">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Sign In</h3>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
