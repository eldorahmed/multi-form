import React, { useState } from 'react';
import arcade from "../../public/images/icon-arcade.svg";
import advance from "../../public/images/icon-advanced.svg";
import Pro from "../../public/images/icon-pro.svg";
import { Link } from "react-router-dom";

function SelectPlan() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl font-bold mb-3">Select your plan</h1>
      <p className="text-xl opacity-50 mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex mb-8 w-full gap-4">
        <button className="card border-2 active:border-purple-600 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={arcade} alt="Arcade" />
          <h2>Arcade</h2>
          <p>{isYearly ? '$90/yr' : '$9/mo'}</p>
        </button>
        <button className="card active:border-purple-600 border-2 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={advance} alt="Advanced" />
          <h2>Advanced</h2>
          <p>{isYearly ? '$120/yr' : '$12/mo'}</p>
        </button>
        <button className="card active:border-purple-600 border-2 bg-base-100 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={Pro} alt="Pro" />
          <h2>Pro</h2>
          <p>{isYearly ? '$150/yr' : '$15/mo'}</p>
        </button>
      </div>
      <div className="flex items-center justify-center mb-32 py-3 rounded-lg bg-[#F8F9FF] gap-6">
        <p className="text-xl font-semibold">Monthly</p>
        <label
          htmlFor="billingToggle"
          className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-900 transition-colors duration-200"
        >
          <input
            type="checkbox"
            id="billingToggle"
            className="sr-only"
            checked={isYearly}
            onChange={toggleBilling}
          />
          <span className={`absolute inset-y-0 left-0 m-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}></span>
        </label>
        <p className="text-xl font-semibold">Yearly</p>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/" className="opacity-50 font-medium hover:opacity-100">Go Back</Link>
        <div>
          <Link
            to="/pickAddOns"
            className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
          >
            <span className="absolute -start-full transition-all">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all ">
              Next Step
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
