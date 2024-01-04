import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const PackageDetails = () => {
  const [pkgId, setpkgId] = useState([]); // for pkg

  /// const [package, setpackage] = useState([]);
  useEffect(() => {
    getPkg();
    AOS.init({ duration: 1000 });
  }, []);

  function getPkg() {
    axios
      .get(
        "https://himalayanpackages.com/himalayan/api_fetch_packageDetail.php/"
      )
      .then(function (response) {
        setpkg(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching categories:", error);
      });
  }

  const editor = useRef(null);

  const [Title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [pkg, setpkg] = useState("");
  const [Duration, setDuration] = useState("");

  const imageInputRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handletypeChange = (e) => {
    setType(e.target.value);
  };

  const handlepkgIdChange = (e) => {
    setpkgId(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (Title.trim() === "") {
      errors.Title = "Title is required";
    }

    if (content.trim() === "") {
      errors.content = "Content is required";
    }

    if (type.trim() === "") {
      errors.type = "type is required";
    }

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("title", Title);
      formData.append("content", content);
      formData.append("Duration", Duration);

      formData.append("type", type);
      formData.append("PID", pkgId);

      try {
        // Send the blog data to the PHP API
        const response = await axios.post(
          "https://himalayanpackages.com/himalayan/api-add-pkg-details.php",
          formData
        );

        // Reset the form fields
        setTitle("");
        setContent("");
        setType("");

        // Reset the image input
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }

        // Show success message with SweetAlert2
        Swal.fire({
          icon: "success",
          Title: "Success!",
          text: "package added successfully",
        });
      } catch (error) {
        console.error(error);
        // Show error message with SweetAlert2
        Swal.fire({
          icon: "error",
          Title: "Oops...",
          text: "Failed to add Package",
        });
      }
    } else {
      // Show validation error messages with SweetAlert2
      Swal.fire({
        icon: "error",
        Title: "Submission Error",
        html: Object.values(errors)
          .map((error) => `<p>${error}</p>`)
          .join(""),
      });
    }
  };

  return (
    <div className="  bg-white">
      <section className="text-gray-600 body-font relative">
        <div className="container px-10 py-10 mx-auto">
        
          {/* <div className="lg:w-1/3 md:w-2/3 mx-auto"> */}
          <div className="mx-auto">
            <form>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">
                        What is your Package Title?
                      </span>
                    </label>
                    <input
                      type="text"
                      id="Bnane"
                      placeholder="Package Title "
                      className="input input-bordered input-primary  w-full max-w-xl"
                      value={Title}
                      onChange={handleTitleChange}
                    />

                  
                  </div>

                  
                </div>
                
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label className="label">
                            <span className="label-text">Duration</span>
                          </label>
                          <input
                            type="text"
                            id="Bnane"
                            placeholder="Package Title "
                            className="input input-bordered input-primary w-full max-w-xl"
                            value={Duration}
                            onChange={handleDurationChange}
                          />
                        </div>
                      </div>
                    
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text"> Select Master Packages</span>
                    </label>
                    <select
                      className="select select-bordered w-full "
                      id="pkgId"
                      value={pkgId}
                      onChange={handlepkgIdChange}
                      multiple={false} // Add this line if you want to allow multiple selections
                    >
                      <option disabled value={0}>
                        Select
                      </option>
                      {Array.isArray(pkg) &&
                        pkg.map((pkgItem) => (
                          <option key={pkgItem.PID} value={pkgItem.PID}>
                            {pkgItem.PTitle}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Group Type </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Group Type"
                      className="input input-bordered w-full max-w-xl"
                      id="type"
                      value={type}
                      onChange={handletypeChange}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Content
                    </label>

                    <JoditEditor
                      ref={editor}
                      value={content}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
                      onChange={handleContentChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <div className="flex ">
                    <button
                      type="submit"
                      className="btn btn-outline btn-primary m-2"
                      onClick={handleSubmit}
                    >
                      <HiPlusCircle className="h-6 w-6 " />
                      Publish
                    </button>

                    <button
                      className="btn btn-outline btn-secondary m-2 "
                      type="reset"
                    >
                      <HiExclamationCircle className="h-6 w-6 " />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
