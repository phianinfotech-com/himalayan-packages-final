import React from 'react'
import { HiOutlineCheck, HiOutlineClock } from "react-icons/hi";
export default function Enquire() {
  return (
    <div>   
      <div class="h-auto  p-5 card shadow-xl  border-2 rounded-xl  overflow-hidden relative">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
      Enquire Now!
    </h2>

    <div className="relative mb-2">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-2">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-2">
      <input
        placeholder="Mobile Number"
        type="number"
        id="Mobile"
        name="Mobile"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>

    <div class="relative mb-2">
      <input
        placeholder="Choose Date of Travel"
        type="date"
        id="Date"
        name="Date"
        class="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>

    <div className="relative mb-2">
      <input
        placeholder="Number Of People"
        type="number"
        id="People"
        name="People"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>

    <div className="relative mb-2">
      <textarea
        placeholder="Message"
        id="message"
        name="message"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        defaultValue={""}
      />
    </div>

    <div className="relative mb-2 text-sm">
      <div className="flex items-center">
        <HiOutlineCheck className="h-6 w-6 text-green-500" />
        <span className="ml-2">
          We assure the privacy of your contact data. Your text goes
          here
        </span>
      </div>

      <div className="flex items-center">
        {/* Add the 'h-6 w-6' classes to set a fixed size for the icon */}
        <HiOutlineCheck className="h-8 w-8 text-green-500" />
        <span className="ml-2">
          This data will only be used by our team to contact you and no
          other purposes.
        </span>
      </div>
    </div>

    <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-xl w-full text-lg">
      Button
    </button>
  </div></div>
  )
}
