import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from 'slugify';

const PackageDetails = () => {

 
  const [pkgId, setpkgId] = useState([]); // for pkg

  /// const [package, setpackage] = useState([]);
  useEffect(() => {
    getPkg();
  }, []);

  function getPkg() {
    axios
      .get("http://localhost/himalayan/api_fetch_packageDetail.php/")
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
          "http://localhost/himalayan/api-add-pkg-details.php",
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
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Package
          
            </h1>
          </div>
          <div className="lg:w-1/3 md:w-2/3 mx-auto">
            <form>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
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
                      className="input input-bordered w-full max-w-xl"
                      value={Title}
                      onChange={handleTitleChange}
                    />
                    
                    <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">
                        Duration
                      </span>
                    </label>
                    <input
                      type="text"
                      id="Bnane"
                      placeholder="Package Title "
                      className="input input-bordered w-full max-w-xl"
                      value={Duration}
                      onChange={handleDurationChange}
                    />
                    </div>
                    </div>
                    </div>
                  </div>
                 </div>
                
                

                <div className="p-2 w-1/2">
                <div className="relative">
                <label className="label">
                <span className="label-text"> package pkg</span>
                </label>
                <select
                 className="select select-bordered w-full max-w-xs"
                 id="pkgId"
                 value={pkgId}
                 onChange={handlepkgIdChange}
                  >
                 <option disabled value={0}>
                  Select
                 </option>

            {Array.isArray(pkg) && // Add this conditional check
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
                      <span className="label-text">type </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Rs"
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
                      Message
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

  
