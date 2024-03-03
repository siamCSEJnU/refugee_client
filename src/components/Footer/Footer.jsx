import React from "react";

const Footer = () => {
  return (
    <div className="bg-fuchsia-200 py-6 px-10 flex justify-between">
      <div>
        <h2 className="text-5xl font-bold">
          <p>
            <span className="text-orange-400">Rohingya</span>{" "}
          </p>
          <span className=" text-red-500">Refugee</span>{" "}
        </h2>
      </div>
      <div>
        <h4 className="text-3xl font-semibold text-sky-950 mb-3">Contact Us</h4>
        <ul className="list-unstyled font-semibold text-lg">
          <li>Phone : +0096790639</li>
          <li>Email : rohingyarefugee@gmail.com</li>
          <li>Address : Gulshan1,Dhaka</li>
        </ul>
      </div>

      <div>
        <h4 className="text-3xl font-semibold text-sky-950 mb-3">Legal</h4>
        <ul className="list-unstyled font-semibold text-lg">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-sky-950 mb-3">Subscribe</h3>
        {/* <input type="submit" value="email" /> */}
        <label htmlFor="Email"></label>
        <input type="text" className="outline-0 border-0 py-1" />
        <p className="mt-2">
          <input
            type="button"
            value="submit"
            className="bg-sky-700 text-slate-100 py-1 px-2 text-lg"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
