import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { HiOutlineCheck } from "react-icons/hi";
import DatePicker from "./DatePicker"; // Make sure the import path is correct
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Link } from "react-router-dom";
import TitleInCamelCase from "./TitleInCamelCase";

export default function Enquire() {
  const [E_Name, setE_Name] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [Email, setEmail] = useState("");
  const [selectedDateEnquire, setSelectedDateEnquire] = useState(null); // Store selected date here
  const [People, setPeople] = useState("");
  const [E_msg, setE_msg] = useState("");
  const [Slug, setSlug] = useState("");

  const handleE_NameChange = (e) => {
    setE_Name(e.target.value);
  };

  const handleMobile_NoChange = (e) => {
    setMobile_No(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Update selectedDateEnquire when DatePicker component triggers onChange
  const handleDateChangeEnquire = (date) => {
    setSelectedDateEnquire(date);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const handleE_msgChange = (e) => {
    setE_msg(e.target.value);
  };

  const currentURL = window.location.href;

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const validateForm = () => {
    const errors = {};

    if (E_Name.trim() === "") {
      errors.E_Name = "Page Name is required";
    }

    if (Mobile_No.trim() === "") {
      errors.Mobile_No = "Page Content is required";
    }

    if (!Email) {
      errors.Email = "Page Image is required";
    }

    if (!selectedDateEnquire) {
      // Validate that a date is selected
      errors.Date = "Page date is required";
    }

    if (People.trim() === "") {
      errors.People = "Page people is required";
    }

    if (E_msg.trim() === "") {
      errors.E_msg = "Page msg is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("E_Name", E_Name);
      formData.append("Mobile_No", Mobile_No);
      formData.append("Email", Email);

      formData.append(
        "Date",
        selectedDateEnquire ? formatDate(selectedDateEnquire) : ""
      );

      formData.append("People", People);
      formData.append("E_msg", E_msg);
      formData.append("Slug", currentURL);

      try {
        const response = await axios.post(
          "https://himalayanpackages.com/himalayan/api-enquire.php",
          formData
        );

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Package added successfully",
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add package",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        html: Object.values(errors)
          .map((error) => `<p>${error}</p>`)
          .join(""),
      });
    }
  };

  return (
    <div>
     
      <div className="h-auto p-4   mt-2 mx-auto card lg:shadow-xl lg:border-2 lg:rounded-xl overflow-hidden relative bg-white">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center	">
          Enquire Now!
        </h2>

        <div className="relative mb-2">
          <input
            type="text"
            id="E_Name"
            name="E_Name"
            placeholder="Your Name"
            onChange={handleE_NameChange}
            className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-2">
          <input
            type="Email"
            id="Email"
            name="Email"
            placeholder="Your Email"
            onChange={handleEmailChange}
            className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-2">
          <input
            placeholder="Mobile Number"
            type="number"
            id="Mobile_No"
            name="Mobile_No"
            onChange={handleMobile_NoChange}
            className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-2">
          {/* Use DatePicker component */}
          <DatePicker
            id="Date"
            name="Date"
            onChange={(date) => handleDateChangeEnquire(date)} // Pass the selected date
            selectedDate={selectedDateEnquire} // Pass the selected date
          />
        </div>

        <div className="relative mb-2">
          <input
            placeholder="Number Of People"
            type="number"
            id="People"
            name="People"
            onChange={handlePeopleChange}
            className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-2">
          <textarea
            placeholder="Message"
            id="E_msg"
            name="E_msg"
            onChange={handleE_msgChange}
            className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>

        <div className="relative mb-2 text-sm">
          <div className="flex items-center">
            <HiOutlineCheck className="h-6 w-6 text-green-500" />
            <span className="ml-2">
              We assure the privacy of your contact data. Your text goes here
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-primary m-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
