import React, { useState } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";
import { HiOutlineCheck, HiOutlineClock } from "react-icons/hi";

export default function Enquire() {

   const [formData, setFormData] = useState("");
  //   E_Name: '',
  //   Mobile_No: '',
  //   Email: '',
  //   Date: '',
  //   People: '',
  //   E_msg: '',
  //   Slug: '',
  // });

  
  const [E_Name, setE_Name] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [Email, setEmail] = useState("");
  const [Date, setDate] = useState("");
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

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const handleE_msgChange = (e) => {
    setE_msg(e.target.value);
  };

  // const handleSlugChange = (e) => {
  //   setSlug(e.target.value);
  // };
  
  const currentURL = window.location.href;
 
  

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     Slug: currentURL,
  //   }));
  
  // };


  

  // Validation function for form fields
  const validateForm = () => {
    const errors = {};

    // ... (the rest of the validation remains unchanged)

    if (E_Name.trim() === "") {
      errors.E_Name = "Page Name is required";
    }

    if (Mobile_No.trim() === "") {
      errors.Mobile_No = "Page Content is required";
    }

    if (!Email) {
      errors.Email = "Page Image is required";
    }

    if (Date.trim() === "") {
      errors.Date = "Page date";
    }
    if (People.trim() === "") {
      errors.People = "Page people";
    }
    if (E_msg.trim() === "") {
      errors.E_msg = "Page msg";
    }

    return errors;
  };

  

    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const errors = validateForm();
  
      if (Object.keys(errors).length === 0) {
          const formData = new FormData();
          formData.append("E_Name", E_Name);
          formData.append("Mobile_No", Mobile_No);
          formData.append("Email", Email);
          formData.append("Date", Date); // Include the selected date in formData
          formData.append("People", People);
          formData.append("E_msg", E_msg);
          formData.append("Slug", currentURL);


          
         

          // E_Name: '',
          // Mobile_No: '',
          // Email: '',
          // Date: '',
          // People: '',
          // E_msg: '',
          // Slug: '',
    
        
  
        try {
          const response = await axios.post(
            "http://localhost/himalayan/api-enquire.php",
            formData
          );
          console.log("Form Data:", formData);
  
       
        
  
  
  
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
      <div className="h-auto  p-5 card shadow-xl  border-2 rounded-xl  overflow-hidden relative">
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
      <input
        placeholder="Choose Date of Travel"
        type="date"
        id="Date"
        name="Date"
        onChange={handleDateChange}
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
    <button type="submit" className="btn btn-outline btn-primary m-2" onClick={handleSubmit} >
       Submit</button>
  </div></div>
  )
}
