import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { HiOutlineCheck } from "react-icons/hi";
import DatePicker from "./DatePicker"; // Make sure the import path is correct

const MobileMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    openModal();
  };

  const [E_Name, setE_Name] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [Email, setEmail] = useState("");
  const [selectedDateEnquire, setSelectedDateEnquire] = useState(null);
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
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const validateForm = () => {
    const validationErrors = {};

    if (E_Name.trim() === "") {
      validationErrors.E_Name = "Name is required";
    }

    if (Mobile_No.trim() === "") {
      validationErrors.Mobile_No = "Mobile Number is required";
    }

    if (!Email) {
      validationErrors.Email = "Email is required";
    }

    if (!selectedDateEnquire) {
      validationErrors.Date = "Date is required";
    }

    if (People.trim() === "") {
      validationErrors.People = "Number of People is required";
    }

    if (E_msg.trim() === "") {
      validationErrors.E_msg = "Message is required";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("E_Name", E_Name);
      formData.append("Mobile_No", Mobile_No);
      formData.append("Email", Email);
      formData.append("Date", selectedDateEnquire ? formatDate(selectedDateEnquire) : "");
      formData.append("People", People);
      formData.append("E_msg", E_msg);
      formData.append("Slug", currentURL);

      try {
        const response = await axios.post(
          "https://himalayanpackages.com/himalayan/api-enquire.php",
          formData
        );

        closeModal();

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank for Enqiry We'll Contact you soon... ",
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Suffring Trubleb",
        });
      }
    } else {
      setErrors(validationErrors);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        html: Object.values(validationErrors)
          .map((error) => `<p>${error}</p>`)
          .join(""),
      });
    }
  };


  return (
    <>
      <div className="fixed bottom-0 left-0 w-full">
        <button className="xl:hidden bg-primary text-white p-4 rounded-t-lg w-full"  onClick={handleButtonClick}>
          {/* Your menu content goes here */}
       
         Send Enquiry
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal Content */}
          <div className="z-50 bg-white m-4 rounded-lg shadow-lg relative">
            <span className="m-4 badge badge-secoudary" onClick={closeModal}> x </span>
            <div className="h-auto p-5 card overflow-hidden relative">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Enquire Now!
              </h2>
              <div className="relative mb-2">
                <input
                  type="text"
                  id="E_Name"
                  name="E_Name"
                  placeholder="Your Name"
                  onChange={handleE_NameChange}
                  className={`w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.E_Name ? "border-red-500" : ""
                  }`}
                />
                {errors.E_Name && (
                  <p className="text-red-500 text-xs mt-1">{errors.E_Name}</p>
                )}
              </div>
              <div className="relative mb-2">
                <input
                  type="Email"
                  id="Email"
                  name="Email"
                  placeholder="Your Email"
                  onChange={handleEmailChange}
                  className={`w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.Email ? "border-red-500" : ""
                  }`}
                />
                {errors.Email && (
                  <p className="text-red-500 text-xs mt-1">{errors.Email}</p>
                )}
              </div>
              <div className="relative mb-2">
                <input
                  placeholder="Mobile Number"
                  type="number"
                  id="Mobile_No"
                  name="Mobile_No"
                  onChange={handleMobile_NoChange}
                  className={`w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.Mobile_No ? "border-red-500" : ""
                  }`}
                />
                {errors.Mobile_No && (
                  <p className="text-red-500 text-xs mt-1">{errors.Mobile_No}</p>
                )}
              </div>
              <div className="relative mb-2">
                <DatePicker
                  id="Date"
                  name="Date"
                  onChange={(date) => handleDateChangeEnquire(date)}
                  selectedDate={selectedDateEnquire}
                />
                {errors.Date && (
                  <p className="text-red-500 text-xs mt-1">{errors.Date}</p>
                )}
              </div>
              <div className="relative mb-2">
                <input
                  placeholder="Number Of People"
                  type="number"
                  id="People"
                  name="People"
                  onChange={handlePeopleChange}
                  className={`w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.People ? "border-red-500" : ""
                  }`}
                />
                {errors.People && (
                  <p className="text-red-500 text-xs mt-1">{errors.People}</p>
                )}
              </div>
              <div className="relative mb-2">
                <textarea
                  placeholder="Message"
                  id="E_msg"
                  name="E_msg"
                  onChange={handleE_msgChange}
                  className={`w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${
                    errors.E_msg ? "border-red-500" : ""
                  }`}
                  defaultValue={""}
                />
                {errors.E_msg && (
                  <p className="text-red-500 text-xs mt-1">{errors.E_msg}</p>
                )}
              </div>
              <div className="relative mb-2 text-sm">
                <div className="flex items-center">
                  <HiOutlineCheck className="h-6 w-6 text-green-500" />
                  <span className="ml-2">
                    We assure the privacy of your contact data.
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
        </div>
      )}
    </>
  );
};

export default MobileMenu;
